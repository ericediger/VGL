"""Seed an isolated replay test database. All model results are local fixtures."""

from __future__ import annotations

import os


import pytest


def pytest_configure(config: pytest.Config) -> None:
    _use_test_database()
    os.environ["VGL_LLM_MODE"] = "replay"


def _use_test_database() -> None:
    """Point the suite at <database>_test so a test run never resets the demo database."""
    import psycopg

    base = os.environ.get("DATABASE_URL", "postgresql://vgl:vgl@localhost:5432/vgl")
    if base.endswith("_test"):
        return
    test_url = base + "_test"
    dbname = test_url.rsplit("/", 1)[1]
    admin = psycopg.connect(base, autocommit=True)
    try:
        if not admin.execute("SELECT 1 FROM pg_database WHERE datname = %s", (dbname,)).fetchone():
            admin.execute(f'CREATE DATABASE "{dbname}"')
    finally:
        admin.close()
    os.environ["DATABASE_URL"] = test_url


@pytest.fixture(scope="session")
def seeded_db() -> bool:
    """Seed Release 1 once. Returns whether embeddings are available."""
    from vgl import db
    from vgl.llm import FixtureMissing
    from vgl.seed import seed

    with db.connection() as conn:
        seed(conn, embed=False, quiet=True)
    embedded = False
    try:
        from vgl.seed import embed_missing

        with db.connection() as conn:
            embed_missing(conn)
        embedded = True
    except FixtureMissing as e:
        pytest.fail(f"Required replay embeddings unavailable: {e}")
    except RuntimeError as e:
        pytest.fail(f"Required embeddings unavailable: {e}")
    return embedded


@pytest.fixture
def conn(seeded_db):
    """A connection that rolls back everything a test did."""
    from vgl import db

    c = db.connect()
    try:
        yield c
    finally:
        c.rollback()
        c.close()


@pytest.fixture
def embedded(seeded_db) -> None:
    if not seeded_db:
        pytest.fail("Required embeddings unavailable")


# ── eval results ─────────────────────────────────────────────────────────────────

@pytest.fixture(scope="session")
def results():
    from tests.eval.report import Results

    r = Results()
    yield r
    r.write()
