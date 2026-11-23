# Fictional corpus

All standards, bodies, jurisdictions, participants, rules and examples are fictional. They illustrate version selection on a small investment-performance corpus and have no authority over real portfolios.

| Data | Purpose |
|---|---|
| `data/sources/` | Fictional 2021 and 2025 editions, adoption notice, guidance, practice note, subsequent ruling and amendment. The baseline chunks the visible documents. |
| `data/graph/` | Versioned definitions and provisions, adoption dates, typed edges with provenance, and an issued-answer example. |
| `data/proposals/` | Two bundles approved in sequence for the demonstration. The first adds the missing ruling. The second changes definition 1.D.6. |
| `data/gold.yaml` | Thirteen authored expectations specifying controls, outcomes, citations, flags and selected text checks. |
| `tests/fixtures/` | Historical structured model responses and embedding vectors. Request hashes depend on exact inputs and historical model identifiers. |

Release and date answer different questions. Release 1 holds two editions. JN adopts the 2025 edition on 1 January 2025. JS adopts it on 1 January 2026. Release 2 adds the ruling identified by QA-2025-031. Release 3 adds the definition effective on 1 December 2026.

G1, G2 and G7 cover version and jurisdiction selection. G3 covers a cross-document definition. G4a and G4b exercise a known missing reference and a later exception. G2 also exposes a practitioner note. G11a and G11b, together with the issued-answer example, demonstrate a prospective amendment. Cases G5, G6 and G8–G10 exercise other coverage, intake and obligation conditions. Read each case's actual assertions in the YAML.
