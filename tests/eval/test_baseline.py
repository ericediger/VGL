"""Exercise each authored case once with the saved responses."""

from __future__ import annotations

import pytest

from tests.eval.expectations import naive_failures
from tests.eval.test_gold import GOLD, apply_prerequisites
from vgl import naive

pytestmark = pytest.mark.baseline


@pytest.mark.parametrize("case", GOLD, ids=[c["id"] for c in GOLD])
def test_baseline_case(case, conn, embedded, results):
    apply_prerequisites(conn, case)
    n = naive.ask_naive(conn, case["question"], case["release"])
    results.record_baseline(case, n, naive_failures(n, case["naive"]))
