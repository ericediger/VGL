"""Runtime settings for the local proof of concept."""

from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

# Load a local .env if present (Docker Compose injects env directly; this is for
# running outside the container). Never commit .env.
load_dotenv()

REPO_ROOT = Path(__file__).resolve().parents[2]


@dataclass(frozen=True)
class Settings:
    database_url: str = os.environ.get(
        "DATABASE_URL", "postgresql://vgl:vgl@localhost:5432/vgl"
    )

    # Historical identifiers participate in recording lookup keys.
    composer_model: str = os.environ.get("VGL_COMPOSER_MODEL", "claude-opus-5-5")
    judge_model: str = os.environ.get("VGL_JUDGE_MODEL", "claude-sonnet-5-5")
    intake_model: str = os.environ.get("VGL_INTAKE_MODEL", "claude-sonnet-5-5")
    embed_model: str = os.environ.get("VGL_EMBED_MODEL", "text-embedding-3-small")
    # Truncated embedding dimension. Retrieval here is a recall problem over a small
    # corpus; 256 dimensions is plenty and keeps fixtures small.
    embed_dim: int = int(os.environ.get("VGL_EMBED_DIM", "256"))

    llm_mode: str = "replay"
    fixtures_dir: Path = Path(
        os.environ.get("VGL_FIXTURES_DIR", REPO_ROOT / "tests" / "fixtures")
    )

    data_dir: Path = Path(os.environ.get("VGL_DATA_DIR", REPO_ROOT / "data"))
    demo_dir: Path = Path(os.environ.get("VGL_DEMO_DIR", REPO_ROOT / "demo"))

    # Closure traversal depth. Longer paths can remain outside the packet.
    max_depth: int = int(os.environ.get("VGL_MAX_DEPTH", "4"))


settings = Settings()
