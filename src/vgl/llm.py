"""Replay historical model requests and embeddings by their original content keys."""

from __future__ import annotations

import hashlib
import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from vgl.config import settings


class FixtureMissing(RuntimeError):
    """Raised in replay mode when no recording exists for a request."""


def _key(payload: dict[str, Any]) -> str:
    canonical = json.dumps(payload, sort_keys=True, ensure_ascii=False, separators=(",", ":"))
    return hashlib.sha256(canonical.encode("utf-8")).hexdigest()[:24]


@dataclass
class LLM:
    fixtures_dir: Path = field(default_factory=lambda: Path(settings.fixtures_dir))
    embed_model: str = field(default_factory=lambda: settings.embed_model)
    embed_dim: int = field(default_factory=lambda: settings.embed_dim)

    def __post_init__(self) -> None:
        self._embed_cache: dict[str, list[float]] | None = None

    # ── fixtures ────────────────────────────────────────────────────────────────

    @property
    def _completions_dir(self) -> Path:
        return self.fixtures_dir / "llm"

    @property
    def _embeddings_file(self) -> Path:
        return self.fixtures_dir / "embeddings.json"

    def _load_embed_cache(self) -> dict[str, list[float]]:
        if self._embed_cache is None:
            if self._embeddings_file.exists():
                self._embed_cache = json.loads(self._embeddings_file.read_text())
            else:
                self._embed_cache = {}
        return self._embed_cache

    def embed(self, texts: list[str]) -> list[list[float]]:
        """Look up the recorded vector for each exact text."""
        cache = self._load_embed_cache()
        keys = [_key({"m": self.embed_model, "d": self.embed_dim, "t": text}) for text in texts]
        try:
            return [cache[key] for key in keys]
        except KeyError as exc:
            raise FixtureMissing("No embedding was recorded for this input.") from exc

    def complete_json(
        self,
        *,
        model: str,
        system: str,
        user: str,
        schema: dict[str, Any],
        schema_name: str,
        max_tokens: int = 2048,
    ) -> dict[str, Any]:
        """Return the saved response for this exact request."""
        request = {
            "provider": "anthropic",
            "model": model,
            "system": system,
            "user": user,
            "schema_name": schema_name,
            "schema": schema,
            "max_tokens": max_tokens,
        }
        key = _key(request)
        path = self._completions_dir / f"{schema_name}-{key}.json"

        if not path.is_file():
            raise FixtureMissing(f"No recording for {schema_name} ({key}).")
        return json.loads(path.read_text())["response"]


llm = LLM()
