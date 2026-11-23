"""Exercise each authored case once with the saved responses."""

from __future__ import annotations

import datetime as dt

import pytest

from tests.eval.expectations import check
from vgl import pipeline, releases

GOLD = releases.load_gold()
pytestmark = pytest.mark.eval


def apply_prerequisites(conn, case: dict) -> None:
    """Approve the proposals a case depends on (inside the test's transaction)."""
    needed = case.get("requires_proposal")
    if not needed:
        return
    order = ["prop:QA-2025-031", "prop:A1"]
    for pid in order:
        if releases.get_proposal(conn, pid)["status"] == "pending":
            releases.approve(conn, pid, "editor:standards", "eval prerequisite", embed=True)
        if pid == needed:
            break


@pytest.mark.parametrize("case", GOLD, ids=[c["id"] for c in GOLD])
def test_gold_case(case, conn, embedded, results):
    apply_prerequisites(conn, case)
    answer = pipeline.ask(
        conn, case["question"], jurisdiction=case["jurisdiction"],
        as_of=dt.date.fromisoformat(str(case["as_of"])), release_id=case["release"], store=False,
    )
    failures = check(answer, case["expect"])
    results.record_layer(case, answer, failures)
    assert not failures, f"{case['id']} {case['name']}: " + "; ".join(failures)
