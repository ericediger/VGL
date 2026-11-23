# Third-party components

The source package includes dependency declarations and a hash-pinned Python lock file. The Docker build downloads upstream packages. No third-party container image, wheel, browser, font file or encoder binary is distributed in this repository.

| Direct dependency | Upstream license from package metadata |
|---|---|
| FastAPI, Pydantic, pgvector-python, PyYAML, pytest | MIT |
| Uvicorn, python-dotenv, HTTPX | BSD-3-Clause |
| psycopg and psycopg-binary | LGPL-3.0-only |

The database service uses the upstream pgvector image for PostgreSQL. Consult the notices supplied by those distributions, including the PostgreSQL license, and the license files installed with each wheel. Runtime dependencies retain their upstream terms.

The interface uses system fonts. The diagram, screenshots, video frames, captions, poster and PDF were prepared for this edition. The video has no voice or music track. The fixture directory contains the project's saved model inputs, responses and vectors for its fictional evaluation set.
