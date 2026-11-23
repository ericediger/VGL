# Design decisions

**One relational store.** PostgreSQL and pgvector keep source versions, typed edges, full-text search, vector search and local releases together. Recursive queries express the bounded graph walks. This keeps deployment small. Graph size and latency beyond this demonstration remain unmeasured.

**Separate release visibility from effective dates.** A release controls what the system had available. An effective date and jurisdiction control which visible version applied. Adding a new edition can change a later answer while leaving an earlier release available for inspection.

**Keep verification inspectable.** The verifier operates on explicit version identifiers and source tiers. A failed supporting citation can be removed and flagged. A failed conclusion can require review. The prose summary has a different validation boundary and is collapsed by default.

**Replay the language steps.** The publication edition uses fixed request-keyed fixtures. People can inspect the model inputs and responses, reproduce the authored cases and see the effect of local editorial changes. It cannot answer arbitrary new questions.

**Compare like inputs before making a causal claim.** The existing document baseline takes the question and the release-visible source passages. The layer also receives explicit jurisdiction and date inputs. A matched-context comparison and independent evaluation on held-out examples would be needed to estimate a broader benefit.
