window.VGL_DATA = {
  "records": {
    "G1": {
      "question": "By when must a new portfolio be added to a composite?",
      "answer": {
        "outcome": "ANSWER",
        "summary": "Under 3.A.6, a new portfolio must be included in a composite on a timely and consistent basis, no later than the beginning of the first full calendar month after it comes under management.",
        "conclusion": "yes",
        "claims": [
          {
            "text": "New portfolios must be included in a composite no later than the beginning of the first full calendar month after the portfolio comes under management (3.A.6).",
            "cites": [
              "prov:composite-inclusion-timing@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Inclusion must also be on a timely and consistent basis, so the one-month deadline is an outer limit (3.A.6).",
            "cites": [
              "prov:composite-inclusion-timing@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "Firms must document the inclusion date applied for each composite (3.A.6).",
            "cites": [
              "prov:composite-inclusion-timing@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy (1.D.1).",
            "cites": [
              "def:composite@E2025"
            ],
            "kind": "condition"
          }
        ],
        "flags": [],
        "clarifications": [],
        "frame": {
          "question": "By when must a new portfolio be added to a composite?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "composite inclusion timing",
            "new portfolio inclusion in composite"
          ],
          "question_type": "timing",
          "case_facts": {},
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "prov:composite-inclusion-timing"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-inclusion-timing@E2025",
              "concept_id": "prov:composite-inclusion-timing",
              "kind": "provision",
              "title": "Timing of new portfolio inclusion",
              "display_ref": "3.A.6",
              "tier": "authoritative",
              "obligation": "must",
              "text": "New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
              "parameters": {
                "inclusion_deadline_months": 1
              },
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-timing"
            }
          ],
          "edges": [
            {
              "kind": "ANNOTATED_BY",
              "from_concept": "prov:composite-inclusion-timing",
              "to_concept": "note:PN-001",
              "asserted_by": "editor:standards",
              "basis": "editorial",
              "source_passage": "Relates to: composite inclusion timing (3.A.4 of Edition 2021; 3.A.6 of Edition 2025)",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-timing",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "must be included in a composite",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-inclusion-timing",
              "version_id": "prov:composite-inclusion-timing@E2021",
              "display_ref": "3.A.4",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": true
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 4,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Under the current GSB Standards (Edition 2025), a new portfolio must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after it comes under management; the firm must also document the inclusion date applied for each composite. This replaces the more lenient 2021 rule, which allowed inclusion as late as the beginning of the second full calendar month unless the firm's composite policy specified an earlier date. Separately, a portfolio below a documented composite minimum must not be included at all, so the deadline applies only to portfolios that meet any minimum.",
        "conclusion": "yes",
        "passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.819
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.795
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** Firms must document the definition of each composite in writing, including the criteria for inclusion and exclusion of portfolios.",
            "score": 0.659
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.657
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.819
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.795
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.657
          }
        ],
        "cited_versions": [
          "prov:composite-inclusion-timing@E2025",
          "prov:composite-inclusion-timing@E2021",
          "prov:composite-inclusion-all-discretionary@E2025",
          "gs:GS-2025-02@v1"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G2": {
      "question": "By when must a new portfolio be added to a composite?",
      "answer": {
        "outcome": "ANSWER_WITH_FLAGS",
        "summary": "Under 3.A.4, a new portfolio must be included in a composite on a timely and consistent basis, no later than the beginning of the second full calendar month after it comes under management, unless the firm's composite-specific policy sets an earlier date.",
        "conclusion": "yes",
        "claims": [
          {
            "text": "Under 3.A.4, new portfolios must be included in a composite no later than the beginning of the second full calendar month after the portfolio comes under management.",
            "cites": [
              "prov:composite-inclusion-timing@E2021"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Inclusion must also be on a timely and consistent basis.",
            "cites": [
              "prov:composite-inclusion-timing@E2021"
            ],
            "kind": "requirement"
          },
          {
            "text": "If the firm's documented composite-specific policy specifies an earlier date, that earlier date applies instead of the outer deadline.",
            "cites": [
              "prov:composite-inclusion-timing@E2021"
            ],
            "kind": "condition"
          },
          {
            "text": "Under 1.D.1, a composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
            "cites": [
              "def:composite@E2021"
            ],
            "kind": "caveat"
          }
        ],
        "flags": [
          {
            "kind": "pending_adoption",
            "message": "GSB Standards, Edition 2025 is already in effect elsewhere but applies in JS only from 2026-01-01; it changes 3.A.4.",
            "version_id": "prov:composite-inclusion-timing@E2025",
            "concept_id": "prov:composite-inclusion-timing"
          },
          {
            "kind": "practitioner_note",
            "message": "Practitioner note (JS): JS examiners expect the composite policy to state the specific inclusion month. Policies using \"as soon as practicable\" drew findings in 2024 examinations. Firms preparing for examination should state the month explicitly and show that it has been applied consistently across the composite.",
            "version_id": "note:PN-001@v1",
            "concept_id": "note:PN-001"
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "By when must a new portfolio be added to a composite?",
          "jurisdiction": "JS",
          "as_of": "2025-06-01",
          "topics": [
            "composite inclusion timing",
            "new portfolio inclusion in composite"
          ],
          "question_type": "timing",
          "case_facts": {},
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JS",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "prov:composite-inclusion-timing"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-inclusion-timing@E2021",
              "concept_id": "prov:composite-inclusion-timing",
              "kind": "provision",
              "title": "Timing of new portfolio inclusion",
              "display_ref": "3.A.4",
              "tier": "authoritative",
              "obligation": "must",
              "text": "New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
              "parameters": {
                "inclusion_deadline_months": 2
              },
              "source_doc": "doc:E2021",
              "source_title": "GSB Standards, Edition 2021",
              "effective_from": "2021-01-01",
              "in_force_from": "2021-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2021",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2021",
              "source_title": "GSB Standards, Edition 2021",
              "effective_from": "2021-01-01",
              "in_force_from": "2021-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-timing"
            },
            {
              "version_id": "note:PN-001@v1",
              "concept_id": "note:PN-001",
              "kind": "practice_note",
              "title": "Practice Note PN-001 — Inclusion-timing policy wording in Jurisdiction South",
              "display_ref": "PN-001",
              "tier": "practitioner",
              "obligation": "n/a",
              "text": "JS examiners expect the composite policy to state the specific inclusion month. Policies using \"as soon as practicable\" drew findings in 2024 examinations. Firms preparing for examination should state the month explicitly and show that it has been applied consistently across the composite.",
              "parameters": {},
              "source_doc": "doc:PN-001",
              "source_title": "Practice Note PN-001 — Inclusion-timing policy wording in Jurisdiction South",
              "effective_from": "2025-05-20",
              "in_force_from": "2025-05-20",
              "jurisdiction_scope": "JS",
              "role": "annotation",
              "depth": 1,
              "via": "ANNOTATED_BY",
              "from_concept": "prov:composite-inclusion-timing"
            }
          ],
          "edges": [
            {
              "kind": "ANNOTATED_BY",
              "from_concept": "prov:composite-inclusion-timing",
              "to_concept": "note:PN-001",
              "asserted_by": "editor:standards",
              "basis": "editorial",
              "source_passage": "Relates to: composite inclusion timing (3.A.4 of Edition 2021; 3.A.6 of Edition 2025)",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-timing",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "must be included in a composite",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2025",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2026-01-01",
              "replaces_version_id": "def:composite@E2021",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-inclusion-timing",
              "version_id": "prov:composite-inclusion-timing@E2025",
              "display_ref": "3.A.6",
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2026-01-01",
              "replaces_version_id": "prov:composite-inclusion-timing@E2021",
              "text_changed": true
            }
          ],
          "superseded": []
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 4,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Under the current GSB Standards (Edition 2025), a new portfolio must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after it comes under management; the firm must also document the inclusion date applied for each composite. This replaces the more lenient 2021 rule, which allowed inclusion as late as the beginning of the second full calendar month unless the firm's composite policy specified an earlier date. Separately, a portfolio below a documented composite minimum must not be included at all, so the deadline applies only to portfolios that meet any minimum.",
        "conclusion": "yes",
        "passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.819
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.795
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** Firms must document the definition of each composite in writing, including the criteria for inclusion and exclusion of portfolios.",
            "score": 0.659
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.657
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.819
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.795
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.657
          }
        ],
        "cited_versions": [
          "prov:composite-inclusion-timing@E2025",
          "prov:composite-inclusion-timing@E2021",
          "prov:composite-inclusion-all-discretionary@E2025",
          "gs:GS-2025-02@v1"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G3": {
      "question": "A client bars us from buying tobacco stocks; the portfolio otherwise follows the strategy. Must it be in a composite?",
      "answer": {
        "outcome": "ANSWER",
        "summary": "Likely yes: a tobacco exclusion makes the portfolio non-discretionary only if it materially impedes the strategy, so if it does not and the portfolio is fee-paying, it must be in at least one composite.",
        "conclusion": "depends",
        "claims": [
          {
            "text": "If the tobacco restriction does not materially impede the strategy, the portfolio remains discretionary and, if actual and fee-paying, must be included in at least one composite under 3.A.1.",
            "cites": [
              "def:discretionary-portfolio@E2025",
              "prov:composite-inclusion-all-discretionary@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Under 1.D.5, client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy.",
            "cites": [
              "def:discretionary-portfolio@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "The firm must document the basis for its determination of whether the restriction materially impedes the strategy.",
            "cites": [
              "def:discretionary-portfolio@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "The portfolio counts as fee-paying under 1.D.6 if subject to the firm's fee schedule, even if the fee is reduced, waived, or not paid from the portfolio.",
            "cites": [
              "def:fee-paying-portfolio@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "If the portfolio is non-fee-paying, inclusion is optional under 3.A.2; if included, the firm must disclose the non-fee-paying percentage of composite assets at each annual period end.",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "If the restriction does materially impede the strategy, the portfolio is non-discretionary and 3.A.1 does not require composite inclusion.",
            "cites": [
              "def:discretionary-portfolio@E2025",
              "prov:composite-inclusion-all-discretionary@E2025"
            ],
            "kind": "caveat"
          }
        ],
        "flags": [],
        "clarifications": [],
        "frame": {
          "question": "A client bars us from buying tobacco stocks; the portfolio otherwise follows the strategy. Must it be in a composite?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "discretionary portfolio definition",
            "composite inclusion requirement",
            "client-imposed restrictions"
          ],
          "question_type": "requirement",
          "case_facts": {
            "client restriction": "no tobacco stocks",
            "portfolio otherwise follows the strategy": "yes"
          },
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "def:discretionary-portfolio",
            "prov:composite-inclusion-all-discretionary",
            "prov:non-fee-paying-inclusion"
          ],
          "nodes": [
            {
              "version_id": "def:discretionary-portfolio@E2025",
              "concept_id": "def:discretionary-portfolio",
              "kind": "definition",
              "title": "Discretionary portfolio",
              "display_ref": "1.D.5",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A portfolio is discretionary when the firm has sufficient authority to implement its intended investment strategy. Client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy. Firms must document the basis for each such determination.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:composite-inclusion-all-discretionary@E2025",
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "kind": "provision",
              "title": "Inclusion of all fee-paying discretionary portfolios",
              "display_ref": "3.A.1",
              "tier": "authoritative",
              "obligation": "must",
              "text": "All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:non-fee-paying-inclusion@E2025",
              "concept_id": "prov:non-fee-paying-inclusion",
              "kind": "provision",
              "title": "Inclusion of non-fee-paying portfolios",
              "display_ref": "3.A.2",
              "tier": "authoritative",
              "obligation": "must",
              "text": "Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion"
            },
            {
              "version_id": "def:fee-paying-portfolio@E2025",
              "concept_id": "def:fee-paying-portfolio",
              "kind": "definition",
              "title": "Fee-paying portfolio",
              "display_ref": "1.D.6",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced or waived in whole or in part.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "included in at least one composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "may be included in a composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:discretionary-portfolio",
              "version_id": "def:discretionary-portfolio@E2021",
              "display_ref": "1.D.4",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": true
            },
            {
              "concept_id": "def:fee-paying-portfolio",
              "version_id": "def:fee-paying-portfolio@E2021",
              "display_ref": "1.D.5",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "version_id": "prov:composite-inclusion-all-discretionary@E2021",
              "display_ref": "3.A.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:non-fee-paying-inclusion",
              "version_id": "prov:non-fee-paying-inclusion@E2021",
              "display_ref": "3.A.2",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 6,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Probably yes. A client restriction makes a portfolio non-discretionary only if it materially impedes the firm's ability to implement its intended strategy [5]. If excluding tobacco stocks does not materially impede the strategy, the portfolio stays discretionary, and if it is fee-paying it must be included in at least one composite [1]. Whether the restriction is material depends on the strategy (for example, it is minor for a broad equity mandate but could matter for a consumer-staples or sector-focused one), and you must document the basis for your determination either way [5].",
        "conclusion": "depends",
        "passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.583
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.583
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.5** Terminated portfolios must be included in the historical performance of the composite through the last full measurement period under management.",
            "score": 0.541
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.535
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.535
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 1 — Definitions",
            "text": "**1.D.5 Discretionary portfolio.** A portfolio is discretionary when the firm has sufficient authority to implement its intended investment strategy. Client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy. Firms must document the basis for each such determination.",
            "score": 0.502
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.583
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 1 — Definitions",
            "text": "**1.D.5 Discretionary portfolio.** A portfolio is discretionary when the firm has sufficient authority to implement its intended investment strategy. Client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy. Firms must document the basis for each such determination.",
            "score": 0.502
          }
        ],
        "cited_versions": [
          "prov:composite-inclusion-all-discretionary@E2025",
          "def:discretionary-portfolio@E2025"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G4a": {
      "question": "A client withdrew 40% last month and the portfolio is now below our composite minimum. Must we remove it?",
      "answer": {
        "outcome": "REVIEW",
        "summary": "Generally yes, from the start of the next measurement period at which the portfolio is below the documented minimum, but it stays in for any period it began above the minimum, and a 40% withdrawal may engage significant-cash-flow treatment in Q&A QA-2025-031, which has not been reviewed.",
        "conclusion": "depends",
        "claims": [
          {
            "text": "Under 3.A.7, a portfolio below the documented composite minimum must not be included, but timing and significant-cash-flow treatment determine when removal applies.",
            "cites": [
              "prov:composite-minimum@E2025",
              "gs:GS-2025-02@v1"
            ],
            "kind": "conclusion"
          },
          {
            "text": "The minimum must be documented and applied consistently.",
            "cites": [
              "prov:composite-minimum@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the documented valuation methodology.",
            "cites": [
              "gs:GS-2025-02@v1"
            ],
            "kind": "requirement"
          },
          {
            "text": "If the portfolio was above the minimum at the start of the measurement period in which the withdrawal occurred, it remains included for that entire period.",
            "cites": [
              "gs:GS-2025-02@v1"
            ],
            "kind": "condition"
          },
          {
            "text": "The measurement period is the calendar month unless the composite policy specifies a shorter one, so the withdrawal date determines which period is affected.",
            "cites": [
              "def:measurement-period@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "If the client-directed 40% withdrawal meets the size defined in the firm's composite policy, it is a significant cash flow and special temporary-breach treatment may apply.",
            "cites": [
              "def:significant-cash-flow@E2025",
              "def:external-cash-flow@E2025",
              "gs:GS-2025-02@v1"
            ],
            "kind": "condition"
          },
          {
            "text": "Q&A QA-2025-031 addresses temporary breaches after significant cash flows; its text is not held and has not been reviewed.",
            "cites": [
              "gs:GS-2025-02@v1"
            ],
            "kind": "caveat"
          }
        ],
        "flags": [
          {
            "kind": "unresolved_reference",
            "message": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow is referenced by gs:GS-2025-02 but is not held in this release. The answer cannot be final until it is reviewed.",
            "version_id": null,
            "concept_id": "ruling:QA-2025-031"
          },
          {
            "kind": "judge_disagreement",
            "message": "A second model questions this claim — \"Q&A QA-2025-031 addresses temporary breaches after significant cash flows; its text is not held and has not been reviewed.\" — because: GS-2025-02 supports that the Q&A addresses temporary breaches from significant cash flows, but nothing in the cited text says the Q&A's text is not held or not reviewed.",
            "version_id": null,
            "concept_id": null
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "A client withdrew 40% last month and the portfolio is now below our composite minimum. Must we remove it?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "composite minimum asset level",
            "significant cash flow",
            "portfolio removal from composite"
          ],
          "question_type": "requirement",
          "case_facts": {
            "withdrawal": "40% of assets",
            "portfolio below composite minimum": "yes"
          },
          "unresolved": [
            "withdrawal date: 'last month' (no anchor date given)",
            "composite minimum: amount not specified"
          ],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "prov:composite-minimum"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-minimum@E2025",
              "concept_id": "prov:composite-minimum",
              "kind": "provision",
              "title": "Composite minimum asset level",
              "display_ref": "3.A.7",
              "tier": "authoritative",
              "obligation": "must",
              "text": "If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "gs:GS-2025-02@v1",
              "concept_id": "gs:GS-2025-02",
              "kind": "guidance",
              "title": "Guidance Statement GS-2025-02 — Composite Minimums",
              "display_ref": "GS-2025-02",
              "tier": "interpretive",
              "obligation": "n/a",
              "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety. Where the firm changes a composite minimum, the change applies prospectively from the beginning of the next measurement period (see also recommendation 3.B.1). Where a portfolio falls below the minimum solely as a result of a significant cash flow, the Board has addressed the treatment of such temporary breaches in Q&A QA-2025-031.",
              "parameters": {},
              "source_doc": "doc:GS-2025-02",
              "source_title": "Guidance Statement GS-2025-02 — Composite Minimums",
              "effective_from": "2025-03-01",
              "in_force_from": "2025-03-01",
              "jurisdiction_scope": null,
              "role": "interpretation",
              "depth": 1,
              "via": "INTERPRETED_BY",
              "from_concept": "prov:composite-minimum"
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-minimum"
            },
            {
              "version_id": "def:measurement-period@E2025",
              "concept_id": "def:measurement-period",
              "kind": "definition",
              "title": "Measurement period",
              "display_ref": "1.D.10",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "The calendar month, unless the firm's documented policy for a composite specifies a shorter period.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 2,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "gs:GS-2025-02"
            },
            {
              "version_id": "def:significant-cash-flow@E2025",
              "concept_id": "def:significant-cash-flow",
              "kind": "definition",
              "title": "Significant cash flow",
              "display_ref": "1.D.11",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A significant cash flow is a client-directed external cash flow of a size, defined in the firm's documented policy for the composite, that would temporarily prevent the firm from implementing the composite strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 2,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "gs:GS-2025-02"
            },
            {
              "version_id": "def:external-cash-flow@E2025",
              "concept_id": "def:external-cash-flow",
              "kind": "definition",
              "title": "External cash flow",
              "display_ref": "1.D.9",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "Capital, in cash or investments, that enters or exits a portfolio at the direction of the client.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 3,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "def:significant-cash-flow"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "def:significant-cash-flow",
              "to_concept": "def:external-cash-flow",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "a client-directed external cash flow of a size",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "gs:GS-2025-02",
              "to_concept": "def:measurement-period",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "at the beginning of each measurement period",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "gs:GS-2025-02",
              "to_concept": "def:significant-cash-flow",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "solely as a result of a significant cash flow",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "REFERENCES",
              "from_concept": "gs:GS-2025-02",
              "to_concept": "ruling:QA-2025-031",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "the Board has addressed the treatment of such temporary breaches in Q&A QA-2025-031",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-minimum",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "portfolios to be included in a composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "INTERPRETED_BY",
              "from_concept": "prov:composite-minimum",
              "to_concept": "gs:GS-2025-02",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Interprets provision 3.A.7 of the GSB Standards, Edition 2025 (provision 3.A.5 of Edition 2021).",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [
            {
              "concept_id": "ruling:QA-2025-031",
              "title": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow",
              "kind": "ruling",
              "reason": "unresolved_reference",
              "referenced_from": "gs:GS-2025-02",
              "via": "REFERENCES",
              "next_in_force_from": null
            }
          ],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:external-cash-flow",
              "version_id": "def:external-cash-flow@E2021",
              "display_ref": "1.D.8",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:significant-cash-flow",
              "version_id": "def:significant-cash-flow@E2021",
              "display_ref": "1.D.9",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-minimum",
              "version_id": "prov:composite-minimum@E2021",
              "display_ref": "3.A.5",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": false,
              "detail": "unresolved references: ['ruling:QA-2025-031']"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 7,
            "disagreements": [
              {
                "claim": "Q&A QA-2025-031 addresses temporary breaches after significant cash flows; its text is not held and has not been reviewed.",
                "reason": "GS-2025-02 supports that the Q&A addresses temporary breaches from significant cash flows, but nothing in the cited text says the Q&A's text is not held or not reviewed."
              }
            ]
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Not immediately. Under 3.A.7 portfolios below a documented composite minimum must not be included, but GS-2025-02 says the test is applied at the beginning of each measurement period, and a portfolio above the minimum at that point stays in the composite for the whole period. So last month's withdrawal does not require removal mid-period. If the portfolio is still below the minimum at the start of the next measurement period, it would generally have to be excluded. However, because the shortfall comes from a significant cash flow, the Board's specific treatment of such temporary breaches is set out in Q&A QA-2025-031, which is not among these passages, so you should check it before deciding.",
        "conclusion": "depends",
        "passages": [
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.538
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.7** If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
            "score": 0.524
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.5** If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
            "score": 0.523
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Where a portfolio falls below the minimum solely as a result of a significant cash flow, the Board has addressed the treatment of such temporary breaches in **Q&A QA-2025-031**.",
            "score": 0.519
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.5** Terminated portfolios must be included in the historical performance of the composite through the last full measurement period under management.",
            "score": 0.511
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.509
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.7** If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
            "score": 0.524
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.538
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Where a portfolio falls below the minimum solely as a result of a significant cash flow, the Board has addressed the treatment of such temporary breaches in **Q&A QA-2025-031**.",
            "score": 0.519
          }
        ],
        "cited_versions": [
          "prov:composite-minimum@E2025",
          "gs:GS-2025-02@v1"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G5": {
      "question": "How are staking rewards on digital assets treated in composite returns?",
      "answer": {
        "outcome": "REVIEW",
        "summary": "The guidance held in this release does not address the question.",
        "conclusion": "not_covered",
        "claims": [
          {
            "text": "The evidence does not address staking rewards or digital assets; the closest provision, 1.D.7, only defines gross-of-fees return as the return on investments reduced by transaction costs only.",
            "cites": [
              "def:gross-of-fees-return@E2025"
            ],
            "kind": "conclusion"
          }
        ],
        "flags": [],
        "clarifications": [],
        "frame": {
          "question": "How are staking rewards on digital assets treated in composite returns?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "staking rewards digital assets return calculation",
            "income recognition in composite returns",
            "digital asset valuation and return"
          ],
          "question_type": "requirement",
          "case_facts": {
            "asset type": "digital assets",
            "income source": "staking rewards"
          },
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "def:gross-of-fees-return"
          ],
          "nodes": [
            {
              "version_id": "def:gross-of-fees-return@E2025",
              "concept_id": "def:gross-of-fees-return",
              "kind": "definition",
              "title": "Gross-of-fees return",
              "display_ref": "1.D.7",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "The return on investments reduced by transaction costs only.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            }
          ],
          "edges": [],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:gross-of-fees-return",
              "version_id": "def:gross-of-fees-return@E2021",
              "display_ref": "1.D.6",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 1,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "None of the provided passages address staking rewards or digital assets, so the standards excerpted here do not say how such rewards should be treated in composite returns. The passages cover only the definition of a composite (1.D.1), the inclusion of non-fee-paying portfolios and the related disclosure (3.A.2), and the timing for adding new portfolios to composites (3.A.6 in the 2025 edition, 3.A.4 in the 2021 edition). For guidance on staking income, you would need to consult other sections of the standards or separate guidance on return calculation and income recognition.",
        "conclusion": "not_covered",
        "passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.446
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.446
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 1 — Definitions",
            "text": "**1.D.1 Composite.** A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
            "score": 0.432
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 1 — Definitions",
            "text": "**1.D.1 Composite.** A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
            "score": 0.432
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.404
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.39
          }
        ],
        "cited_passages": [],
        "cited_versions": [],
        "model": "claude-opus-5-5"
      }
    },
    "G6": {
      "question": "Does this portfolio need to be in a composite?",
      "answer": {
        "outcome": "CLARIFY",
        "summary": "More information is needed before this can be answered.",
        "conclusion": null,
        "claims": [],
        "flags": [],
        "clarifications": [
          "whether the portfolio is discretionary",
          "whether the portfolio is fee-paying",
          "whether the portfolio's strategy matches an existing composite definition"
        ],
        "frame": {
          "question": "Does this portfolio need to be in a composite?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "composite inclusion requirement",
            "discretionary portfolio definition",
            "fee-paying portfolio definition"
          ],
          "question_type": "requirement",
          "case_facts": {},
          "unresolved": [
            "\"this portfolio\" is not identified or described"
          ],
          "missing_required": [
            "whether the portfolio is discretionary",
            "whether the portfolio is fee-paying",
            "whether the portfolio's strategy matches an existing composite definition"
          ]
        },
        "packet": null,
        "verification": null,
        "release_id": 1,
        "composer_model": null
      },
      "baseline": {
        "answer": "It depends on the portfolio's characteristics, which the question does not specify. Under both the 2021 and 2025 editions, every actual, fee-paying, discretionary portfolio must be included in at least one composite, while non-fee-paying discretionary portfolios may be included but are not required to be; if they are included, the firm must disclose the percentage of composite assets they represent as of each annual period end. Where inclusion is required, the 2025 edition requires a new portfolio to be added no later than the beginning of the first full calendar month after it comes under management, with the inclusion date documented. The 2021 edition allowed until the second full calendar month, unless the firm's composite policy specified an earlier date.",
        "conclusion": "depends",
        "passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.646
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.637
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.637
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.616
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.6
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.6
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.646
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.637
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.637
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.616
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.6
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.6
          }
        ],
        "cited_versions": [
          "prov:composite-inclusion-timing@E2025",
          "prov:composite-inclusion-all-discretionary@E2021",
          "prov:composite-inclusion-all-discretionary@E2025",
          "prov:composite-inclusion-timing@E2021",
          "prov:non-fee-paying-inclusion@E2021",
          "prov:non-fee-paying-inclusion@E2025"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G7": {
      "question": "By when must a new portfolio be added to a composite?",
      "answer": {
        "outcome": "ANSWER_WITH_FLAGS",
        "summary": "Under 3.A.4, a new portfolio must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after it comes under management, unless the firm's composite-specific policy sets an earlier date.",
        "conclusion": "yes",
        "claims": [
          {
            "text": "Under 3.A.4, new portfolios must be included in a composite no later than the beginning of the second full calendar month after the portfolio comes under management.",
            "cites": [
              "prov:composite-inclusion-timing@E2021"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Inclusion must also be on a timely and consistent basis (3.A.4).",
            "cites": [
              "prov:composite-inclusion-timing@E2021"
            ],
            "kind": "requirement"
          },
          {
            "text": "If the firm's documented composite-specific policy specifies an earlier date, that earlier date governs (3.A.4).",
            "cites": [
              "prov:composite-inclusion-timing@E2021"
            ],
            "kind": "condition"
          },
          {
            "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy (1.D.1).",
            "cites": [
              "def:composite@E2021"
            ],
            "kind": "caveat"
          }
        ],
        "flags": [
          {
            "kind": "upcoming_amendment",
            "message": "3.A.4 changes on 2025-01-01 (GSB Standards, Edition 2025). This answer applies before that date.",
            "version_id": "prov:composite-inclusion-timing@E2025",
            "concept_id": "prov:composite-inclusion-timing"
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "By when must a new portfolio be added to a composite?",
          "jurisdiction": "JN",
          "as_of": "2024-06-01",
          "topics": [
            "composite inclusion timing",
            "new portfolio inclusion in composite"
          ],
          "question_type": "timing",
          "case_facts": {},
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2024-06-01",
          "entry_concepts": [
            "prov:composite-inclusion-timing"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-inclusion-timing@E2021",
              "concept_id": "prov:composite-inclusion-timing",
              "kind": "provision",
              "title": "Timing of new portfolio inclusion",
              "display_ref": "3.A.4",
              "tier": "authoritative",
              "obligation": "must",
              "text": "New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
              "parameters": {
                "inclusion_deadline_months": 2
              },
              "source_doc": "doc:E2021",
              "source_title": "GSB Standards, Edition 2021",
              "effective_from": "2021-01-01",
              "in_force_from": "2021-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2021",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2021",
              "source_title": "GSB Standards, Edition 2021",
              "effective_from": "2021-01-01",
              "in_force_from": "2021-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-timing"
            }
          ],
          "edges": [
            {
              "kind": "ANNOTATED_BY",
              "from_concept": "prov:composite-inclusion-timing",
              "to_concept": "note:PN-001",
              "asserted_by": "editor:standards",
              "basis": "editorial",
              "source_passage": "Relates to: composite inclusion timing (3.A.4 of Edition 2021; 3.A.6 of Edition 2025)",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-timing",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "must be included in a composite",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2025",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "replaces_version_id": "def:composite@E2021",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-inclusion-timing",
              "version_id": "prov:composite-inclusion-timing@E2025",
              "display_ref": "3.A.6",
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "replaces_version_id": "prov:composite-inclusion-timing@E2021",
              "text_changed": true
            }
          ],
          "superseded": []
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 4,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Under the current GSB Standards (Edition 2025), a new portfolio must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after it comes under management; the firm must also document the inclusion date applied for each composite. This replaces the more lenient 2021 rule, which allowed inclusion as late as the beginning of the second full calendar month unless the firm's composite policy specified an earlier date. Separately, a portfolio below a documented composite minimum must not be included at all, so the deadline applies only to portfolios that meet any minimum.",
        "conclusion": "yes",
        "passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.819
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.795
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** Firms must document the definition of each composite in writing, including the criteria for inclusion and exclusion of portfolios.",
            "score": 0.659
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.657
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.819
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.795
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.666
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.657
          }
        ],
        "cited_versions": [
          "prov:composite-inclusion-timing@E2025",
          "prov:composite-inclusion-timing@E2021",
          "prov:composite-inclusion-all-discretionary@E2025",
          "gs:GS-2025-02@v1"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G8": {
      "question": "Must we provide a composite description if a prospect asks?",
      "answer": {
        "outcome": "ANSWER",
        "summary": "Yes — under 3.A.3, firms must make a description of any composite available to a prospective client on request.",
        "conclusion": "yes",
        "claims": [
          {
            "text": "Yes. Under 3.A.3, firms must make a description of any composite available to any prospective client who requests it.",
            "cites": [
              "prov:composite-description-on-request@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "The obligation is triggered by a request from a prospective client, which matches the stated facts.",
            "cites": [
              "prov:composite-description-on-request@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "It applies to any composite, meaning an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy (1.D.1).",
            "cites": [
              "def:composite@E2025",
              "prov:composite-description-on-request@E2025"
            ],
            "kind": "requirement"
          }
        ],
        "flags": [],
        "clarifications": [],
        "frame": {
          "question": "Must we provide a composite description if a prospect asks?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "composite description availability on request",
            "composite description",
            "prospective client request"
          ],
          "question_type": "requirement",
          "case_facts": {
            "request source": "prospect asks for composite description"
          },
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "prov:composite-description-on-request"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-description-on-request@E2025",
              "concept_id": "prov:composite-description-on-request",
              "kind": "provision",
              "title": "Composite description available on request",
              "display_ref": "3.A.3",
              "tier": "authoritative",
              "obligation": "must",
              "text": "Firms must make a description of any composite available to any prospective client on request.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-description-on-request"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-description-on-request",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "a description of any composite",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-description-on-request",
              "version_id": "prov:composite-description-on-request@E2021",
              "display_ref": "3.A.3",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 3,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Yes. Under 3.A.3, firms must make a description of any composite available to any prospective client who requests it. This requirement is identical in the 2021 and 2025 editions, so the answer does not depend on which edition applies. Relatedly, the 2025 edition (3.A.4) requires each composite definition, including its inclusion and exclusion criteria, to be documented in writing, which supports your ability to meet such requests.",
        "conclusion": "yes",
        "passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.3** Firms must make a description of any composite available to any prospective client on request.",
            "score": 0.633
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.3** Firms must make a description of any composite available to any prospective client on request.",
            "score": 0.633
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** Firms must document the definition of each composite in writing, including the criteria for inclusion and exclusion of portfolios.",
            "score": 0.496
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.495
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.495
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.478
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.3** Firms must make a description of any composite available to any prospective client on request.",
            "score": 0.633
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.3** Firms must make a description of any composite available to any prospective client on request.",
            "score": 0.633
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** Firms must document the definition of each composite in writing, including the criteria for inclusion and exclusion of portfolios.",
            "score": 0.496
          }
        ],
        "cited_versions": [
          "prov:composite-description-on-request@E2021",
          "prov:composite-description-on-request@E2025",
          "prov:composite-definition-documented@E2025"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G9": {
      "question": "Can we include non-fee-paying portfolios in a composite?",
      "answer": {
        "outcome": "ANSWER",
        "summary": "Yes — under 3.A.2, non-fee-paying discretionary portfolios may be included in a composite, but if included the firm must disclose the percentage of composite assets they represent as of each annual period end.",
        "conclusion": "yes",
        "claims": [
          {
            "text": "Non-fee-paying discretionary portfolios may be included in a composite under 3.A.2; inclusion is permitted, not required.",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end (3.A.2).",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "The permission in 3.A.2 applies only to discretionary portfolios, i.e. where the firm has sufficient authority to implement its intended strategy (1.D.5).",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025",
              "def:discretionary-portfolio@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "A portfolio subject to the firm's fee schedule is fee-paying even if the fee is reduced or waived (1.D.6), so such portfolios must be included in at least one composite (3.A.1).",
            "cites": [
              "def:fee-paying-portfolio@E2025",
              "prov:composite-inclusion-all-discretionary@E2025"
            ],
            "kind": "caveat"
          },
          {
            "text": "Firms must document the basis for each determination that client restrictions render a portfolio non-discretionary (1.D.5).",
            "cites": [
              "def:discretionary-portfolio@E2025"
            ],
            "kind": "requirement"
          }
        ],
        "flags": [],
        "clarifications": [],
        "frame": {
          "question": "Can we include non-fee-paying portfolios in a composite?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "non-fee-paying portfolios composite inclusion",
            "fee-paying portfolio definition"
          ],
          "question_type": "permissibility",
          "case_facts": {},
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "def:fee-paying-portfolio",
            "prov:composite-inclusion-all-discretionary",
            "prov:non-fee-paying-inclusion"
          ],
          "nodes": [
            {
              "version_id": "def:fee-paying-portfolio@E2025",
              "concept_id": "def:fee-paying-portfolio",
              "kind": "definition",
              "title": "Fee-paying portfolio",
              "display_ref": "1.D.6",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced or waived in whole or in part.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:composite-inclusion-all-discretionary@E2025",
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "kind": "provision",
              "title": "Inclusion of all fee-paying discretionary portfolios",
              "display_ref": "3.A.1",
              "tier": "authoritative",
              "obligation": "must",
              "text": "All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:non-fee-paying-inclusion@E2025",
              "concept_id": "prov:non-fee-paying-inclusion",
              "kind": "provision",
              "title": "Inclusion of non-fee-paying portfolios",
              "display_ref": "3.A.2",
              "tier": "authoritative",
              "obligation": "must",
              "text": "Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion"
            },
            {
              "version_id": "def:discretionary-portfolio@E2025",
              "concept_id": "def:discretionary-portfolio",
              "kind": "definition",
              "title": "Discretionary portfolio",
              "display_ref": "1.D.5",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A portfolio is discretionary when the firm has sufficient authority to implement its intended investment strategy. Client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy. Firms must document the basis for each such determination.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "included in at least one composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "may be included in a composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:discretionary-portfolio",
              "version_id": "def:discretionary-portfolio@E2021",
              "display_ref": "1.D.4",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": true
            },
            {
              "concept_id": "def:fee-paying-portfolio",
              "version_id": "def:fee-paying-portfolio@E2021",
              "display_ref": "1.D.5",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "version_id": "prov:composite-inclusion-all-discretionary@E2021",
              "display_ref": "3.A.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:non-fee-paying-inclusion",
              "version_id": "prov:non-fee-paying-inclusion@E2021",
              "display_ref": "3.A.2",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 5,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Yes. Under 3.A.2, non-fee-paying discretionary portfolios may be included in a composite; this is unchanged between the 2021 and 2025 editions. If you include them, you must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end. Inclusion is optional, unlike fee-paying discretionary portfolios, which must be included in at least one composite (3.A.1). Also note that a portfolio whose fee is reduced or waived may still count as fee-paying if it is subject to the firm's fee schedule (2021 definition 1.D.5), so confirm the classification before treating a portfolio as non-fee-paying.",
        "conclusion": "yes",
        "passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.804
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.804
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.761
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.761
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.673
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 1 — Definitions",
            "text": "**1.D.5 Fee-paying portfolio.** A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced or waived in whole or in part.",
            "score": 0.659
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.804
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.804
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.761
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.761
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 1 — Definitions",
            "text": "**1.D.5 Fee-paying portfolio.** A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced or waived in whole or in part.",
            "score": 0.659
          }
        ],
        "cited_versions": [
          "prov:non-fee-paying-inclusion@E2021",
          "prov:non-fee-paying-inclusion@E2025",
          "prov:composite-inclusion-all-discretionary@E2021",
          "prov:composite-inclusion-all-discretionary@E2025",
          "def:fee-paying-portfolio@E2021"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G10": {
      "question": "Are we required to avoid changing a composite minimum retroactively?",
      "answer": {
        "outcome": "ANSWER_WITH_FLAGS",
        "summary": "Not strictly required: 3.B.1 says firms should not apply changes to a composite minimum retroactively, which is a recommendation rather than a mandatory requirement.",
        "conclusion": "no",
        "claims": [
          {
            "text": "Under 3.B.1, avoiding retroactive changes to a composite minimum is recommended (\"should\"), not mandated (\"must\").",
            "cites": [
              "prov:composite-minimum-no-retroactive-change@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "3.B.1 states firms should not apply changes to a composite minimum retroactively.",
            "cites": [
              "prov:composite-minimum-no-retroactive-change@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "Under 1.D.1, a composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
            "cites": [
              "def:composite@E2025"
            ],
            "kind": "caveat"
          }
        ],
        "flags": [
          {
            "kind": "recommendation_not_requirement",
            "message": "3.B.1 is a recommendation (\"should\"), not a requirement.",
            "version_id": "prov:composite-minimum-no-retroactive-change@E2025",
            "concept_id": "prov:composite-minimum-no-retroactive-change"
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "Are we required to avoid changing a composite minimum retroactively?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "composite minimum asset level change",
            "changes to composite policies retroactive"
          ],
          "question_type": "requirement",
          "case_facts": {},
          "unresolved": [],
          "missing_required": []
        },
        "packet": {
          "release_id": 1,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "prov:composite-minimum-no-retroactive-change"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-minimum-no-retroactive-change@E2025",
              "concept_id": "prov:composite-minimum-no-retroactive-change",
              "kind": "provision",
              "title": "No retroactive change to a composite minimum",
              "display_ref": "3.B.1",
              "tier": "authoritative",
              "obligation": "should",
              "text": "Firms should not apply changes to a composite minimum retroactively.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-minimum-no-retroactive-change"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-minimum-no-retroactive-change",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "a composite minimum",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-minimum-no-retroactive-change",
              "version_id": "prov:composite-minimum-no-retroactive-change@E2021",
              "display_ref": "3.B.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 3,
            "disagreements": []
          }
        },
        "release_id": 1,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "No, it is not a strict requirement. Under both the 2021 and 2025 editions, provision 3.B.1 says firms \"should not\" apply changes to a composite minimum retroactively, and GS-2025-02 explicitly calls 3.B.1 a recommendation. Avoiding retroactive changes is therefore recommended best practice rather than a mandatory provision. The guidance expects any change to a composite minimum to apply prospectively from the beginning of the next measurement period, so following that approach is strongly advisable.",
        "conclusion": "no",
        "passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.B.1** Firms should not apply changes to a composite minimum retroactively.",
            "score": 0.799
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.B.1** Firms should not apply changes to a composite minimum retroactively.",
            "score": 0.799
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Where the firm changes a composite minimum, the change applies prospectively from the beginning of the next measurement period (see also recommendation 3.B.1).",
            "score": 0.61
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.553
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.6** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the first full calendar month after the portfolio comes under management. Firms must document the inclusion date applied for each composite.",
            "score": 0.548
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.4** New portfolios must be included in a composite on a timely and consistent basis, and no later than the beginning of the second full calendar month after the portfolio comes under management, unless the composite-specific policy documented by the firm specifies an earlier date.",
            "score": 0.545
          }
        ],
        "cited_passages": [
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.B.1** Firms should not apply changes to a composite minimum retroactively.",
            "score": 0.799
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.B.1** Firms should not apply changes to a composite minimum retroactively.",
            "score": 0.799
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Where the firm changes a composite minimum, the change applies prospectively from the beginning of the next measurement period (see also recommendation 3.B.1).",
            "score": 0.61
          }
        ],
        "cited_versions": [
          "prov:composite-minimum-no-retroactive-change@E2021",
          "prov:composite-minimum-no-retroactive-change@E2025",
          "gs:GS-2025-02@v1"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G4b": {
      "question": "A client withdrew 40% last month and the portfolio is now below our composite minimum. Must we remove it?",
      "answer": {
        "outcome": "ANSWER_WITH_FLAGS",
        "summary": "Not necessarily: under QA-2025-031 the portfolio may stay in the composite for up to three full measurement periods if the breach results solely from a significant cash flow and your documented policy provides for this; otherwise 3.A.7 requires removal.",
        "conclusion": "depends",
        "claims": [
          {
            "text": "Removal is not automatically required; it depends on whether the 40% withdrawal qualifies as a significant cash flow under your documented composite policy.",
            "cites": [
              "ruling:QA-2025-031@v1",
              "prov:composite-minimum@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Under 3.A.7, if a firm sets a composite minimum, it must not include portfolios below that minimum, and the minimum must be documented and applied consistently.",
            "cites": [
              "prov:composite-minimum@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "The portfolio may remain for up to three full measurement periods after the cash flow if the breach results solely from a significant cash flow as defined in your documented policy.",
            "cites": [
              "ruling:QA-2025-031@v1"
            ],
            "kind": "condition"
          },
          {
            "text": "This treatment requires that your documented composite policy provides for it and that the determination is documented at the time it is made.",
            "cites": [
              "ruling:QA-2025-031@v1"
            ],
            "kind": "condition"
          },
          {
            "text": "If the breach stems from market movement, or from cash flows that individually miss your significant cash flow threshold, the portfolio must be removed under 3.A.7.",
            "cites": [
              "ruling:QA-2025-031@v1"
            ],
            "kind": "requirement"
          },
          {
            "text": "If the portfolio is still below the minimum at the end of the grace period, it must be removed. A measurement period is a calendar month unless your policy specifies shorter.",
            "cites": [
              "ruling:QA-2025-031@v1",
              "def:measurement-period@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "The withdrawal date is unspecified, so when the grace period ends cannot be confirmed. A portfolio above the minimum at a period's start is included for that entire period.",
            "cites": [
              "gs:GS-2025-02@v1",
              "ruling:QA-2025-031@v1"
            ],
            "kind": "caveat"
          }
        ],
        "flags": [
          {
            "kind": "carve_out",
            "message": "QA-2025-031 creates an exception to prov:composite-minimum that may change the conclusion.",
            "version_id": "ruling:QA-2025-031@v1",
            "concept_id": "ruling:QA-2025-031"
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "A client withdrew 40% last month and the portfolio is now below our composite minimum. Must we remove it?",
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "topics": [
            "composite minimum asset level",
            "significant cash flow",
            "portfolio removal from composite"
          ],
          "question_type": "requirement",
          "case_facts": {
            "withdrawal": "40% of assets",
            "portfolio below composite minimum": "yes"
          },
          "unresolved": [
            "withdrawal date: 'last month' (no anchor date given)",
            "composite minimum: amount not specified"
          ],
          "missing_required": []
        },
        "packet": {
          "release_id": 2,
          "jurisdiction": "JN",
          "as_of": "2025-06-01",
          "entry_concepts": [
            "prov:composite-minimum",
            "ruling:QA-2025-031"
          ],
          "nodes": [
            {
              "version_id": "prov:composite-minimum@E2025",
              "concept_id": "prov:composite-minimum",
              "kind": "provision",
              "title": "Composite minimum asset level",
              "display_ref": "3.A.7",
              "tier": "authoritative",
              "obligation": "must",
              "text": "If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "ruling:QA-2025-031@v1",
              "concept_id": "ruling:QA-2025-031",
              "kind": "ruling",
              "title": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow",
              "display_ref": "QA-2025-031",
              "tier": "interpretive",
              "obligation": "n/a",
              "text": "Question: Must a portfolio be removed from a composite when it falls below the composite minimum solely because of a significant cash flow? Answer: No. Where the breach results solely from a significant cash flow, as defined in the firm's documented policy for the composite, the portfolio may remain in the composite for up to three full measurement periods following the cash flow, provided that the firm's documented composite policy provides for this treatment and the determination is documented at the time it is made. If the portfolio remains below the minimum at the end of that period, it must be removed. This treatment is available only where the cause of the breach is a significant cash flow. A portfolio that falls below the minimum through market movement or through a series of cash flows that do not individually meet the firm's significant cash flow threshold must be removed in accordance with 3.A.7.",
              "parameters": {
                "grace_period_months": 3
              },
              "source_doc": "doc:QA-2025-031",
              "source_title": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow",
              "effective_from": "2025-04-15",
              "in_force_from": "2025-04-15",
              "jurisdiction_scope": null,
              "role": "carve_out",
              "depth": 0,
              "via": "CARVED_OUT_BY",
              "from_concept": "prov:composite-minimum"
            },
            {
              "version_id": "gs:GS-2025-02@v1",
              "concept_id": "gs:GS-2025-02",
              "kind": "guidance",
              "title": "Guidance Statement GS-2025-02 — Composite Minimums",
              "display_ref": "GS-2025-02",
              "tier": "interpretive",
              "obligation": "n/a",
              "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety. Where the firm changes a composite minimum, the change applies prospectively from the beginning of the next measurement period (see also recommendation 3.B.1). Where a portfolio falls below the minimum solely as a result of a significant cash flow, the Board has addressed the treatment of such temporary breaches in Q&A QA-2025-031.",
              "parameters": {},
              "source_doc": "doc:GS-2025-02",
              "source_title": "Guidance Statement GS-2025-02 — Composite Minimums",
              "effective_from": "2025-03-01",
              "in_force_from": "2025-03-01",
              "jurisdiction_scope": null,
              "role": "interpretation",
              "depth": 1,
              "via": "INTERPRETED_BY",
              "from_concept": "prov:composite-minimum"
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-minimum"
            },
            {
              "version_id": "def:measurement-period@E2025",
              "concept_id": "def:measurement-period",
              "kind": "definition",
              "title": "Measurement period",
              "display_ref": "1.D.10",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "The calendar month, unless the firm's documented policy for a composite specifies a shorter period.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "ruling:QA-2025-031"
            },
            {
              "version_id": "def:significant-cash-flow@E2025",
              "concept_id": "def:significant-cash-flow",
              "kind": "definition",
              "title": "Significant cash flow",
              "display_ref": "1.D.11",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A significant cash flow is a client-directed external cash flow of a size, defined in the firm's documented policy for the composite, that would temporarily prevent the firm from implementing the composite strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "ruling:QA-2025-031"
            },
            {
              "version_id": "def:external-cash-flow@E2025",
              "concept_id": "def:external-cash-flow",
              "kind": "definition",
              "title": "External cash flow",
              "display_ref": "1.D.9",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "Capital, in cash or investments, that enters or exits a portfolio at the direction of the client.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 2,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "def:significant-cash-flow"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "def:significant-cash-flow",
              "to_concept": "def:external-cash-flow",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "a client-directed external cash flow of a size",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "gs:GS-2025-02",
              "to_concept": "def:measurement-period",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "at the beginning of each measurement period",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "gs:GS-2025-02",
              "to_concept": "def:significant-cash-flow",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "solely as a result of a significant cash flow",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "REFERENCES",
              "from_concept": "gs:GS-2025-02",
              "to_concept": "ruling:QA-2025-031",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "the Board has addressed the treatment of such temporary breaches in Q&A QA-2025-031",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "CARVED_OUT_BY",
              "from_concept": "prov:composite-minimum",
              "to_concept": "ruling:QA-2025-031",
              "asserted_by": "practitioner:demo",
              "basis": "proposal",
              "source_passage": "the portfolio may remain in the composite for up to three full measurement periods following the cash flow",
              "reviewed_by": null
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-minimum",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "portfolios to be included in a composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "INTERPRETED_BY",
              "from_concept": "prov:composite-minimum",
              "to_concept": "gs:GS-2025-02",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Interprets provision 3.A.7 of the GSB Standards, Edition 2025 (provision 3.A.5 of Edition 2021).",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "ruling:QA-2025-031",
              "to_concept": "def:measurement-period",
              "asserted_by": "practitioner:demo",
              "basis": "proposal",
              "source_passage": "up to three full measurement periods",
              "reviewed_by": null
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "ruling:QA-2025-031",
              "to_concept": "def:significant-cash-flow",
              "asserted_by": "practitioner:demo",
              "basis": "proposal",
              "source_passage": "solely because of a significant cash flow",
              "reviewed_by": null
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:external-cash-flow",
              "version_id": "def:external-cash-flow@E2021",
              "display_ref": "1.D.8",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:significant-cash-flow",
              "version_id": "def:significant-cash-flow@E2021",
              "display_ref": "1.D.9",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-minimum",
              "version_id": "prov:composite-minimum@E2021",
              "display_ref": "3.A.5",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: ['ruling:QA-2025-031@v1']"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 7,
            "disagreements": []
          }
        },
        "release_id": 2,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "Not necessarily. Provision 3.A.7 generally prohibits including portfolios below a documented composite minimum, but where the breach results solely from a significant cash flow (as defined in your documented composite policy), the portfolio may remain in the composite for up to three full measurement periods after the cash flow. This applies only if your composite policy provides for this treatment and you document the determination at the time it is made. If the portfolio is still below the minimum at the end of that period, it must be removed; and if your policy does not provide for this treatment, or the 40% withdrawal does not meet your significant cash flow definition, the general rule requiring exclusion applies.",
        "conclusion": "depends",
        "passages": [
          {
            "document": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow",
            "heading": "Question",
            "text": "Must a portfolio be removed from a composite when it falls below the composite minimum solely because of a significant cash flow?",
            "score": 0.683
          },
          {
            "document": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow",
            "heading": "Answer",
            "text": "No. Where the breach results solely from a significant cash flow, as defined in the firm's documented policy for the composite, the portfolio may remain in the composite for up to three full measurement periods following the cash flow, provided that the firm's documented composite policy provides for this treatment and the determination is documented at the time it is made. If the portfolio remains below the minimum at the end of that period, it must be removed.",
            "score": 0.539
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.538
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.7** If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
            "score": 0.524
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.5** If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
            "score": 0.523
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Where a portfolio falls below the minimum solely as a result of a significant cash flow, the Board has addressed the treatment of such temporary breaches in **Q&A QA-2025-031**.",
            "score": 0.519
          }
        ],
        "cited_passages": [
          {
            "document": "Q&A QA-2025-031 — Temporary breach of a composite minimum following a significant cash flow",
            "heading": "Answer",
            "text": "No. Where the breach results solely from a significant cash flow, as defined in the firm's documented policy for the composite, the portfolio may remain in the composite for up to three full measurement periods following the cash flow, provided that the firm's documented composite policy provides for this treatment and the determination is documented at the time it is made. If the portfolio remains below the minimum at the end of that period, it must be removed.",
            "score": 0.539
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Provision 3.A.7 requires that portfolios below a documented composite minimum not be included in the composite. Firms should assess each portfolio against the minimum at the beginning of each measurement period, using the valuation methodology documented in the composite policy. A portfolio that is above the minimum at the beginning of a measurement period is included for that period in its entirety.",
            "score": 0.538
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.7** If a firm sets a minimum asset level for portfolios to be included in a composite, the firm must not include portfolios below that minimum. Any such minimum must be documented and applied consistently.",
            "score": 0.524
          },
          {
            "document": "Guidance Statement GS-2025-02 — Composite Minimums",
            "heading": "Guidance",
            "text": "Where a portfolio falls below the minimum solely as a result of a significant cash flow, the Board has addressed the treatment of such temporary breaches in **Q&A QA-2025-031**.",
            "score": 0.519
          }
        ],
        "cited_versions": [
          "ruling:QA-2025-031@v1",
          "gs:GS-2025-02@v1",
          "prov:composite-minimum@E2025"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G11a": {
      "question": "Employee accounts with fully waived fees — must they be in a composite?",
      "answer": {
        "outcome": "ANSWER_WITH_FLAGS",
        "summary": "It depends: fully waived employee accounts still count as fee-paying under 1.D.6 if they are subject to the firm's fee schedule, and must then be in a composite if discretionary under 3.A.1.",
        "conclusion": "depends",
        "claims": [
          {
            "text": "Employee accounts with fully waived fees must be included in at least one composite if they are subject to the firm's fee schedule and are discretionary.",
            "cites": [
              "prov:composite-inclusion-all-discretionary@E2025",
              "def:fee-paying-portfolio@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Under 1.D.6, a portfolio subject to the firm's fee schedule is fee-paying even where the fee is waived in whole.",
            "cites": [
              "def:fee-paying-portfolio@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "Under 3.A.1, all actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "cites": [
              "prov:composite-inclusion-all-discretionary@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "Inclusion turns on discretion, which is not stated. A portfolio is discretionary when the firm has sufficient authority to implement its intended strategy (1.D.5).",
            "cites": [
              "def:discretionary-portfolio@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "The firm must document the basis for each determination that restrictions render a portfolio non-discretionary.",
            "cites": [
              "def:discretionary-portfolio@E2025"
            ],
            "kind": "requirement"
          },
          {
            "text": "If the accounts are not subject to the fee schedule, they are non-fee-paying. They may then be included in a composite (3.A.2).",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "If non-fee-paying portfolios are included, the firm must disclose their percentage of composite assets as of each annual period end.",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "requirement"
          }
        ],
        "flags": [
          {
            "kind": "upcoming_amendment",
            "message": "1.D.6 changes on 2026-12-01 (Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions). This answer applies before that date.",
            "version_id": "def:fee-paying-portfolio@E2025-A1",
            "concept_id": "def:fee-paying-portfolio"
          },
          {
            "kind": "judge_disagreement",
            "message": "A second model questions this claim — \"If the accounts are not subject to the fee schedule, they are non-fee-paying. They may then be included in a composite (3.A.2).\" — because: 3.A.2 addresses non-fee-paying discretionary portfolios, and the texts do not define non-fee-paying as 'not subject to the fee schedule' (though implied by 1.D.6, it is not cited), and the claim omits that they must be discretionary to be included; this narrows/extends beyond the cited text.",
            "version_id": null,
            "concept_id": null
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "Employee accounts with fully waived fees — must they be in a composite?",
          "jurisdiction": "JN",
          "as_of": "2026-11-15",
          "topics": [
            "fee-paying portfolio composite inclusion",
            "discretionary portfolio definition"
          ],
          "question_type": "requirement",
          "case_facts": {
            "account type": "employee accounts",
            "fees": "fully waived"
          },
          "unresolved": [
            "whether the employee accounts are discretionary (not stated)"
          ],
          "missing_required": []
        },
        "packet": {
          "release_id": 3,
          "jurisdiction": "JN",
          "as_of": "2026-11-15",
          "entry_concepts": [
            "def:fee-paying-portfolio",
            "prov:composite-inclusion-all-discretionary",
            "prov:non-fee-paying-inclusion"
          ],
          "nodes": [
            {
              "version_id": "def:fee-paying-portfolio@E2025",
              "concept_id": "def:fee-paying-portfolio",
              "kind": "definition",
              "title": "Fee-paying portfolio",
              "display_ref": "1.D.6",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced or waived in whole or in part.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:composite-inclusion-all-discretionary@E2025",
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "kind": "provision",
              "title": "Inclusion of all fee-paying discretionary portfolios",
              "display_ref": "3.A.1",
              "tier": "authoritative",
              "obligation": "must",
              "text": "All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:non-fee-paying-inclusion@E2025",
              "concept_id": "prov:non-fee-paying-inclusion",
              "kind": "provision",
              "title": "Inclusion of non-fee-paying portfolios",
              "display_ref": "3.A.2",
              "tier": "authoritative",
              "obligation": "must",
              "text": "Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion"
            },
            {
              "version_id": "def:discretionary-portfolio@E2025",
              "concept_id": "def:discretionary-portfolio",
              "kind": "definition",
              "title": "Discretionary portfolio",
              "display_ref": "1.D.5",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A portfolio is discretionary when the firm has sufficient authority to implement its intended investment strategy. Client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy. Firms must document the basis for each such determination.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "included in at least one composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "may be included in a composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [
            {
              "concept_id": "def:fee-paying-portfolio",
              "version_id": "def:fee-paying-portfolio@E2025-A1",
              "display_ref": "1.D.6",
              "source_doc": "doc:A1",
              "source_title": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
              "effective_from": "2026-12-01",
              "in_force_from": "2026-12-01",
              "replaces_version_id": "def:fee-paying-portfolio@E2025",
              "text_changed": true
            }
          ],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:discretionary-portfolio",
              "version_id": "def:discretionary-portfolio@E2021",
              "display_ref": "1.D.4",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": true
            },
            {
              "concept_id": "def:fee-paying-portfolio",
              "version_id": "def:fee-paying-portfolio@E2021",
              "display_ref": "1.D.5",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "version_id": "prov:composite-inclusion-all-discretionary@E2021",
              "display_ref": "3.A.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:non-fee-paying-inclusion",
              "version_id": "prov:non-fee-paying-inclusion@E2021",
              "display_ref": "3.A.2",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 7,
            "disagreements": [
              {
                "claim": "If the accounts are not subject to the fee schedule, they are non-fee-paying. They may then be included in a composite (3.A.2).",
                "reason": "3.A.2 addresses non-fee-paying discretionary portfolios, and the texts do not define non-fee-paying as 'not subject to the fee schedule' (though implied by 1.D.6, it is not cited), and the claim omits that they must be discretionary to be included; this narrows/extends beyond the cited text."
              }
            ]
          }
        },
        "release_id": 3,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "No, provided the employee accounts are related-party portfolios with all investment management fees waived in full. Amendment 2025-A1 revises definition 1.D.6 so these portfolios are no longer fee-paying, which means the mandatory inclusion rule in 3.A.1 (all actual, fee-paying, discretionary portfolios) does not apply to them. Under the unamended Edition 2025 definition they had to be included. Under 3.A.2 the firm may still choose to include them as non-fee-paying discretionary portfolios, but it must then disclose the percentage of composite assets they represent at each annual period end. Accounts whose fees are only partly reduced remain fee-paying and must still be included.",
        "conclusion": "no",
        "passages": [
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Summary",
            "text": "Under definition 1.D.6 as published in Edition 2025, a portfolio remains fee-paying when its fee is waived, so related-party portfolios — principals, employees, and affiliates of the firm — with fees waived in full have been required to be included in composites under provision 3.A.1. The Board has concluded that such portfolios are not representative of the firm's fee-paying business and is amending definition 1.D.6 to exclude them. No provision in Section 3 is amended.",
            "score": 0.657
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.636
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.636
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.601
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.601
          },
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Amendment",
            "text": "**1.D.6 Fee-paying portfolio.** A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced in part. Portfolios of related parties for which all investment management fees are waived in full are not fee-paying portfolios.",
            "score": 0.592
          }
        ],
        "cited_passages": [
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Summary",
            "text": "Under definition 1.D.6 as published in Edition 2025, a portfolio remains fee-paying when its fee is waived, so related-party portfolios — principals, employees, and affiliates of the firm — with fees waived in full have been required to be included in composites under provision 3.A.1. The Board has concluded that such portfolios are not representative of the firm's fee-paying business and is amending definition 1.D.6 to exclude them. No provision in Section 3 is amended.",
            "score": 0.657
          },
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Amendment",
            "text": "**1.D.6 Fee-paying portfolio.** A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced in part. Portfolios of related parties for which all investment management fees are waived in full are not fee-paying portfolios.",
            "score": 0.592
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.601
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.636
          }
        ],
        "cited_versions": [
          "def:fee-paying-portfolio@E2025-A1",
          "prov:composite-inclusion-all-discretionary@E2025",
          "prov:non-fee-paying-inclusion@E2025"
        ],
        "model": "claude-opus-5-5"
      }
    },
    "G11b": {
      "question": "Employee accounts with fully waived fees — must they be in a composite?",
      "answer": {
        "outcome": "ANSWER_WITH_FLAGS",
        "summary": "Not required if the employees count as related parties: fully waived accounts of related parties are not fee-paying under 1.D.6, so 3.A.1's mandatory inclusion does not apply, though they may be included with disclosure.",
        "conclusion": "depends",
        "claims": [
          {
            "text": "Under 3.A.1, only actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "cites": [
              "prov:composite-inclusion-all-discretionary@E2025"
            ],
            "kind": "conclusion"
          },
          {
            "text": "Under 1.D.6, related-party portfolios whose investment management fees are waived in full are not fee-paying, so 3.A.1 would not require their inclusion.",
            "cites": [
              "def:fee-paying-portfolio@E2025-A1"
            ],
            "kind": "condition"
          },
          {
            "text": "The evidence does not say whether employees are related parties. If they are not, a portfolio still subject to the fee schedule is fee-paying under 1.D.6.",
            "cites": [
              "def:fee-paying-portfolio@E2025-A1"
            ],
            "kind": "caveat"
          },
          {
            "text": "Inclusion is mandatory only if the accounts are discretionary. Under 1.D.5, that means the firm has sufficient authority to implement its strategy, and the firm must document the determination.",
            "cites": [
              "def:discretionary-portfolio@E2025",
              "prov:composite-inclusion-all-discretionary@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "Under 3.A.2, non-fee-paying discretionary portfolios may be included in a composite.",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "condition"
          },
          {
            "text": "If they are included, 3.A.2 requires the firm to disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "cites": [
              "prov:non-fee-paying-inclusion@E2025"
            ],
            "kind": "requirement"
          }
        ],
        "flags": [
          {
            "kind": "judge_disagreement",
            "message": "A second model questions this claim — \"Under 3.A.1, only actual, fee-paying, discretionary portfolios must be included in at least one composite.\" — because: 3.A.1 says all actual, fee-paying, discretionary portfolios must be included, but it does not say that only such portfolios must be included; the word 'only' adds a restriction the text does not support.",
            "version_id": null,
            "concept_id": null
          }
        ],
        "clarifications": [],
        "frame": {
          "question": "Employee accounts with fully waived fees — must they be in a composite?",
          "jurisdiction": "JN",
          "as_of": "2026-12-15",
          "topics": [
            "fee-paying portfolio composite inclusion",
            "discretionary portfolio definition"
          ],
          "question_type": "requirement",
          "case_facts": {
            "account type": "employee accounts",
            "fees": "fully waived"
          },
          "unresolved": [
            "whether the employee accounts are discretionary (not stated)"
          ],
          "missing_required": []
        },
        "packet": {
          "release_id": 3,
          "jurisdiction": "JN",
          "as_of": "2026-12-15",
          "entry_concepts": [
            "def:fee-paying-portfolio",
            "prov:composite-inclusion-all-discretionary",
            "prov:non-fee-paying-inclusion"
          ],
          "nodes": [
            {
              "version_id": "def:fee-paying-portfolio@E2025-A1",
              "concept_id": "def:fee-paying-portfolio",
              "kind": "definition",
              "title": "Fee-paying portfolio",
              "display_ref": "1.D.6",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced in part. Portfolios of related parties for which all investment management fees are waived in full are not fee-paying portfolios.",
              "parameters": {},
              "source_doc": "doc:A1",
              "source_title": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
              "effective_from": "2026-12-01",
              "in_force_from": "2026-12-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:composite-inclusion-all-discretionary@E2025",
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "kind": "provision",
              "title": "Inclusion of all fee-paying discretionary portfolios",
              "display_ref": "3.A.1",
              "tier": "authoritative",
              "obligation": "must",
              "text": "All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "prov:non-fee-paying-inclusion@E2025",
              "concept_id": "prov:non-fee-paying-inclusion",
              "kind": "provision",
              "title": "Inclusion of non-fee-paying portfolios",
              "display_ref": "3.A.2",
              "tier": "authoritative",
              "obligation": "must",
              "text": "Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "entry",
              "depth": 0,
              "via": null,
              "from_concept": null
            },
            {
              "version_id": "def:composite@E2025",
              "concept_id": "def:composite",
              "kind": "definition",
              "title": "Composite",
              "display_ref": "1.D.1",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion"
            },
            {
              "version_id": "def:discretionary-portfolio@E2025",
              "concept_id": "def:discretionary-portfolio",
              "kind": "definition",
              "title": "Discretionary portfolio",
              "display_ref": "1.D.5",
              "tier": "authoritative",
              "obligation": "definition",
              "text": "A portfolio is discretionary when the firm has sufficient authority to implement its intended investment strategy. Client-imposed restrictions render a portfolio non-discretionary only where they materially impede implementation of the strategy. Firms must document the basis for each such determination.",
              "parameters": {},
              "source_doc": "doc:E2025",
              "source_title": "GSB Standards, Edition 2025",
              "effective_from": "2025-01-01",
              "in_force_from": "2025-01-01",
              "jurisdiction_scope": null,
              "role": "definition",
              "depth": 1,
              "via": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary"
            }
          ],
          "edges": [
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "included in at least one composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:composite-inclusion-all-discretionary",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "All actual, fee-paying, discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:composite",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "may be included in a composite",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:discretionary-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            },
            {
              "kind": "DEPENDS_ON_DEFINITION",
              "from_concept": "prov:non-fee-paying-inclusion",
              "to_concept": "def:fee-paying-portfolio",
              "asserted_by": "extractor:v0",
              "basis": "source_text",
              "source_passage": "Non-fee-paying discretionary portfolios",
              "reviewed_by": "editor:standards"
            }
          ],
          "gaps": [],
          "upcoming": [],
          "superseded": [
            {
              "concept_id": "def:composite",
              "version_id": "def:composite@E2021",
              "display_ref": "1.D.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "def:discretionary-portfolio",
              "version_id": "def:discretionary-portfolio@E2021",
              "display_ref": "1.D.4",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": true
            },
            {
              "concept_id": "def:fee-paying-portfolio",
              "version_id": "def:fee-paying-portfolio@E2021",
              "display_ref": "1.D.5",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2026-12-01",
              "text_changed": true
            },
            {
              "concept_id": "def:fee-paying-portfolio",
              "version_id": "def:fee-paying-portfolio@E2025",
              "display_ref": "1.D.6",
              "source_doc": "doc:E2025",
              "in_force_from": "2025-01-01",
              "in_force_until": "2026-12-01",
              "text_changed": true
            },
            {
              "concept_id": "prov:composite-inclusion-all-discretionary",
              "version_id": "prov:composite-inclusion-all-discretionary@E2021",
              "display_ref": "3.A.1",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            },
            {
              "concept_id": "prov:non-fee-paying-inclusion",
              "version_id": "prov:non-fee-paying-inclusion@E2021",
              "display_ref": "3.A.2",
              "source_doc": "doc:E2021",
              "in_force_from": "2021-01-01",
              "in_force_until": "2025-01-01",
              "text_changed": false
            }
          ]
        },
        "verification": {
          "checks": [
            {
              "rule": "V1",
              "passed": true,
              "detail": "every claim cites at least one version"
            },
            {
              "rule": "V2",
              "passed": true,
              "detail": "every cited version is in the evidence packet"
            },
            {
              "rule": "V3",
              "passed": true,
              "detail": "stale citations: none"
            },
            {
              "rule": "V4",
              "passed": true,
              "detail": "carve-outs surfaced: none"
            },
            {
              "rule": "V5",
              "passed": true,
              "detail": "unresolved references: none"
            },
            {
              "rule": "V6",
              "passed": true,
              "detail": "practitioner material never grounds a claim"
            }
          ],
          "stale_citations": [],
          "ungrounded_claims": [],
          "removed_claims": [],
          "judge": {
            "checked": 6,
            "disagreements": [
              {
                "claim": "Under 3.A.1, only actual, fee-paying, discretionary portfolios must be included in at least one composite.",
                "reason": "3.A.1 says all actual, fee-paying, discretionary portfolios must be included, but it does not say that only such portfolios must be included; the word 'only' adds a restriction the text does not support."
              }
            ]
          }
        },
        "release_id": 3,
        "composer_model": "claude-opus-5-5"
      },
      "baseline": {
        "answer": "No, provided the employee accounts are related-party portfolios with all investment management fees waived in full. Amendment 2025-A1 revises definition 1.D.6 so these portfolios are no longer fee-paying, which means the mandatory inclusion rule in 3.A.1 (all actual, fee-paying, discretionary portfolios) does not apply to them. Under the unamended Edition 2025 definition they had to be included. Under 3.A.2 the firm may still choose to include them as non-fee-paying discretionary portfolios, but it must then disclose the percentage of composite assets they represent at each annual period end. Accounts whose fees are only partly reduced remain fee-paying and must still be included.",
        "conclusion": "no",
        "passages": [
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Summary",
            "text": "Under definition 1.D.6 as published in Edition 2025, a portfolio remains fee-paying when its fee is waived, so related-party portfolios — principals, employees, and affiliates of the firm — with fees waived in full have been required to be included in composites under provision 3.A.1. The Board has concluded that such portfolios are not representative of the firm's fee-paying business and is amending definition 1.D.6 to exclude them. No provision in Section 3 is amended.",
            "score": 0.657
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.636
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.636
          },
          {
            "document": "GSB Standards, Edition 2021",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.601
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.601
          },
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Amendment",
            "text": "**1.D.6 Fee-paying portfolio.** A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced in part. Portfolios of related parties for which all investment management fees are waived in full are not fee-paying portfolios.",
            "score": 0.592
          }
        ],
        "cited_passages": [
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Summary",
            "text": "Under definition 1.D.6 as published in Edition 2025, a portfolio remains fee-paying when its fee is waived, so related-party portfolios — principals, employees, and affiliates of the firm — with fees waived in full have been required to be included in composites under provision 3.A.1. The Board has concluded that such portfolios are not representative of the firm's fee-paying business and is amending definition 1.D.6 to exclude them. No provision in Section 3 is amended.",
            "score": 0.657
          },
          {
            "document": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
            "heading": "Amendment",
            "text": "**1.D.6 Fee-paying portfolio.** A fee-paying portfolio is one that is subject to the firm's investment management fee schedule, whether or not the fee is paid directly from the portfolio and whether or not the fee is reduced in part. Portfolios of related parties for which all investment management fees are waived in full are not fee-paying portfolios.",
            "score": 0.592
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.1** All actual, fee-paying, discretionary portfolios must be included in at least one composite.",
            "score": 0.601
          },
          {
            "document": "GSB Standards, Edition 2025",
            "heading": "Section 3 — Composite Construction",
            "text": "**3.A.2** Non-fee-paying discretionary portfolios may be included in a composite. Where included, the firm must disclose the percentage of composite assets represented by non-fee-paying portfolios as of each annual period end.",
            "score": 0.636
          }
        ],
        "cited_versions": [
          "def:fee-paying-portfolio@E2025-A1",
          "prov:composite-inclusion-all-discretionary@E2025",
          "prov:non-fee-paying-inclusion@E2025"
        ],
        "model": "claude-opus-5-5"
      }
    }
  },
  "changes": {
    "prop:QA-2025-031": {
      "preview": {
        "proposal_id": "prop:QA-2025-031",
        "current_release": 1,
        "would_create_release": 2,
        "touched_concepts": [
          "prov:composite-minimum",
          "ruling:QA-2025-031"
        ],
        "dependent_concepts": [
          {
            "concept_id": "gs:GS-2025-02",
            "depth": 1,
            "via": "REFERENCES",
            "from_concept": "ruling:QA-2025-031"
          },
          {
            "concept_id": "prov:composite-minimum",
            "depth": 1,
            "via": "CARVED_OUT_BY",
            "from_concept": "ruling:QA-2025-031"
          }
        ],
        "affected_concepts": [
          "gs:GS-2025-02",
          "prov:composite-minimum",
          "ruling:QA-2025-031"
        ],
        "changed_gold_cases": [
          {
            "id": "G4a",
            "name": "Unknown carve-out — Release 1 (reference not held)",
            "question": "A client withdrew 40% last month and the portfolio is now below our composite minimum. Must we remove it?",
            "jurisdiction": "JN",
            "as_of": "2025-06-01",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:external-cash-flow@E2025",
                "def:measurement-period@E2025",
                "def:significant-cash-flow@E2025",
                "gs:GS-2025-02@v1",
                "prov:composite-minimum@E2025"
              ],
              "gaps": [
                "ruling:QA-2025-031"
              ],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:external-cash-flow@E2025",
                "def:measurement-period@E2025",
                "def:significant-cash-flow@E2025",
                "gs:GS-2025-02@v1",
                "prov:composite-minimum@E2025",
                "ruling:QA-2025-031@v1"
              ],
              "gaps": [],
              "upcoming": []
            }
          },
          {
            "id": "G4b",
            "name": "Unknown carve-out — Release 2 (ruling ingested)",
            "question": "A client withdrew 40% last month and the portfolio is now below our composite minimum. Must we remove it?",
            "jurisdiction": "JN",
            "as_of": "2025-06-01",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:external-cash-flow@E2025",
                "def:measurement-period@E2025",
                "def:significant-cash-flow@E2025",
                "gs:GS-2025-02@v1",
                "prov:composite-minimum@E2025"
              ],
              "gaps": [
                "ruling:QA-2025-031"
              ],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:external-cash-flow@E2025",
                "def:measurement-period@E2025",
                "def:significant-cash-flow@E2025",
                "gs:GS-2025-02@v1",
                "prov:composite-minimum@E2025",
                "ruling:QA-2025-031@v1"
              ],
              "gaps": [],
              "upcoming": []
            }
          }
        ],
        "affected_issued_answers": []
      },
      "before": [
        {
          "id": "ia:IA-0001",
          "client_name": "Demo client",
          "client_ref": "DEMO-01",
          "issued_on": "2025-03-10",
          "jurisdiction": "JN",
          "as_of": "2025-03-10",
          "release_id": 1,
          "question": "Are employee accounts with fully waived management fees fee-paying portfolios that must be included in a composite?",
          "outcome": "ANSWER",
          "answer_text": "Yes. Under 1.D.6 (Edition 2025) a portfolio is fee-paying when it is subject to the firm's fee schedule, whether or not the fee is reduced or waived in whole or in part, so fully fee-waived employee accounts are fee-paying portfolios, and 3.A.1 requires that all actual, fee-paying, discretionary portfolios be included in at least one composite.",
          "cited_versions": [
            "prov:composite-inclusion-all-discretionary@E2025",
            "def:fee-paying-portfolio@E2025"
          ],
          "staleness": {
            "status": "current",
            "from": null,
            "reasons": []
          }
        }
      ],
      "after": [
        {
          "id": "ia:IA-0001",
          "client_name": "Demo client",
          "client_ref": "DEMO-01",
          "issued_on": "2025-03-10",
          "jurisdiction": "JN",
          "as_of": "2025-03-10",
          "release_id": 1,
          "question": "Are employee accounts with fully waived management fees fee-paying portfolios that must be included in a composite?",
          "outcome": "ANSWER",
          "answer_text": "Yes. Under 1.D.6 (Edition 2025) a portfolio is fee-paying when it is subject to the firm's fee schedule, whether or not the fee is reduced or waived in whole or in part, so fully fee-waived employee accounts are fee-paying portfolios, and 3.A.1 requires that all actual, fee-paying, discretionary portfolios be included in at least one composite.",
          "cited_versions": [
            "prov:composite-inclusion-all-discretionary@E2025",
            "def:fee-paying-portfolio@E2025"
          ],
          "staleness": {
            "status": "current",
            "from": null,
            "reasons": []
          }
        }
      ]
    },
    "prop:A1": {
      "preview": {
        "proposal_id": "prop:A1",
        "current_release": 2,
        "would_create_release": 3,
        "touched_concepts": [
          "def:fee-paying-portfolio"
        ],
        "dependent_concepts": [
          {
            "concept_id": "prov:composite-inclusion-all-discretionary",
            "depth": 1,
            "via": "DEPENDS_ON_DEFINITION",
            "from_concept": "def:fee-paying-portfolio"
          },
          {
            "concept_id": "prov:non-fee-paying-inclusion",
            "depth": 1,
            "via": "DEPENDS_ON_DEFINITION",
            "from_concept": "def:fee-paying-portfolio"
          }
        ],
        "affected_concepts": [
          "def:fee-paying-portfolio",
          "prov:composite-inclusion-all-discretionary",
          "prov:non-fee-paying-inclusion"
        ],
        "changed_gold_cases": [
          {
            "id": "G3",
            "name": "Cross-standard interaction (definition changed, provision did not)",
            "question": "A client bars us from buying tobacco stocks; the portfolio otherwise follows the strategy. Must it be in a composite?",
            "jurisdiction": "JN",
            "as_of": "2025-06-01",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": [
                "def:fee-paying-portfolio@E2025-A1"
              ]
            }
          },
          {
            "id": "G6",
            "name": "Clarify — specific case, no facts",
            "question": "Does this portfolio need to be in a composite?",
            "jurisdiction": "JN",
            "as_of": "2025-06-01",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": [
                "def:fee-paying-portfolio@E2025-A1"
              ]
            }
          },
          {
            "id": "G9",
            "name": "Straightforward permission with a disclosure condition",
            "question": "Can we include non-fee-paying portfolios in a composite?",
            "jurisdiction": "JN",
            "as_of": "2025-06-01",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:non-fee-paying-inclusion@E2025"
              ],
              "gaps": [],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:non-fee-paying-inclusion@E2025"
              ],
              "gaps": [],
              "upcoming": [
                "def:fee-paying-portfolio@E2025-A1"
              ]
            }
          },
          {
            "id": "G11a",
            "name": "Scene A — before the amendment takes effect",
            "question": "Employee accounts with fully waived fees — must they be in a composite?",
            "jurisdiction": "JN",
            "as_of": "2026-11-15",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": [
                "def:fee-paying-portfolio@E2025-A1"
              ]
            }
          },
          {
            "id": "G11b",
            "name": "Scene A — after the amendment takes effect",
            "question": "Employee accounts with fully waived fees — must they be in a composite?",
            "jurisdiction": "JN",
            "as_of": "2026-12-15",
            "before": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": []
            },
            "after": {
              "versions": [
                "def:composite@E2025",
                "def:discretionary-portfolio@E2025",
                "def:fee-paying-portfolio@E2025-A1",
                "prov:composite-inclusion-all-discretionary@E2025"
              ],
              "gaps": [],
              "upcoming": []
            }
          }
        ],
        "affected_issued_answers": [
          {
            "id": "ia:IA-0001",
            "client_name": "Demo client",
            "client_ref": "DEMO-01",
            "issued_on": "2025-03-10",
            "jurisdiction": "JN",
            "as_of": "2025-03-10",
            "release_id": 1,
            "question": "Are employee accounts with fully waived management fees fee-paying portfolios that must be included in a composite?",
            "outcome": "ANSWER",
            "answer_text": "Yes. Under 1.D.6 (Edition 2025) a portfolio is fee-paying when it is subject to the firm's fee schedule, whether or not the fee is reduced or waived in whole or in part, so fully fee-waived employee accounts are fee-paying portfolios, and 3.A.1 requires that all actual, fee-paying, discretionary portfolios be included in at least one composite.",
            "cited_versions": [
              "prov:composite-inclusion-all-discretionary@E2025",
              "def:fee-paying-portfolio@E2025"
            ],
            "staleness": {
              "status": "expires",
              "from": "2026-12-01",
              "reasons": [
                {
                  "cited_version": "def:fee-paying-portfolio@E2025",
                  "superseding_version": "def:fee-paying-portfolio@E2025-A1",
                  "display_ref": "1.D.6",
                  "source_title": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
                  "from": "2026-12-01",
                  "learned_after_issue": true
                }
              ]
            }
          }
        ]
      },
      "before": [
        {
          "id": "ia:IA-0001",
          "client_name": "Demo client",
          "client_ref": "DEMO-01",
          "issued_on": "2025-03-10",
          "jurisdiction": "JN",
          "as_of": "2025-03-10",
          "release_id": 1,
          "question": "Are employee accounts with fully waived management fees fee-paying portfolios that must be included in a composite?",
          "outcome": "ANSWER",
          "answer_text": "Yes. Under 1.D.6 (Edition 2025) a portfolio is fee-paying when it is subject to the firm's fee schedule, whether or not the fee is reduced or waived in whole or in part, so fully fee-waived employee accounts are fee-paying portfolios, and 3.A.1 requires that all actual, fee-paying, discretionary portfolios be included in at least one composite.",
          "cited_versions": [
            "prov:composite-inclusion-all-discretionary@E2025",
            "def:fee-paying-portfolio@E2025"
          ],
          "staleness": {
            "status": "current",
            "from": null,
            "reasons": []
          }
        }
      ],
      "after": [
        {
          "id": "ia:IA-0001",
          "client_name": "Demo client",
          "client_ref": "DEMO-01",
          "issued_on": "2025-03-10",
          "jurisdiction": "JN",
          "as_of": "2025-03-10",
          "release_id": 1,
          "question": "Are employee accounts with fully waived management fees fee-paying portfolios that must be included in a composite?",
          "outcome": "ANSWER",
          "answer_text": "Yes. Under 1.D.6 (Edition 2025) a portfolio is fee-paying when it is subject to the firm's fee schedule, whether or not the fee is reduced or waived in whole or in part, so fully fee-waived employee accounts are fee-paying portfolios, and 3.A.1 requires that all actual, fee-paying, discretionary portfolios be included in at least one composite.",
          "cited_versions": [
            "prov:composite-inclusion-all-discretionary@E2025",
            "def:fee-paying-portfolio@E2025"
          ],
          "staleness": {
            "status": "expires",
            "from": "2026-12-01",
            "reasons": [
              {
                "cited_version": "def:fee-paying-portfolio@E2025",
                "superseding_version": "def:fee-paying-portfolio@E2025-A1",
                "display_ref": "1.D.6",
                "source_title": "Amendment 2025-A1 to the GSB Standards, Edition 2025 — Definitions",
                "from": "2026-12-01",
                "learned_after_issue": true
              }
            ]
          }
        }
      ]
    }
  }
};
