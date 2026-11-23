"""The public edition accepts only recorded model requests."""

from datetime import date

import pytest

from vgl import pipeline
from vgl.llm import FixtureMissing, LLM


def test_reworded_question_has_no_fallback(conn):
    with pytest.raises(FixtureMissing):
        pipeline.ask(conn, "An unrecorded wording for this example?", jurisdiction="JN",
                     as_of=date(2025, 6, 1), store=False)


def test_missing_embedding_has_no_fallback(tmp_path):
    with pytest.raises(FixtureMissing):
        LLM(fixtures_dir=tmp_path).embed(["a new passage"])
