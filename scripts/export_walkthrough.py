"""Export the static evidence file from a release-one local database on stdout."""
import json

from vgl import closure, db, naive, pipeline, releases


def capture(conn):
    if closure.current_release(conn) != 1:
        raise SystemExit("Use a fresh, isolated release-one database for this export.")
    cases = releases.load_gold()
    records, changes = {}, {}
    for release, proposal in [(1, None), (2, "prop:QA-2025-031"), (3, "prop:A1")]:
        if proposal:
            changes[proposal] = {
                "preview": releases.impact_preview(conn, proposal),
                "before": releases.list_issued_answers(conn),
            }
            releases.approve(conn, proposal, "editor:standards", "Recorded demonstration")
            changes[proposal]["after"] = releases.list_issued_answers(conn)
        for case in cases:
            if case["release"] != release:
                continue
            answer = pipeline.ask(conn, case["question"], jurisdiction=case["jurisdiction"],
                                  as_of=case["as_of"], release_id=release, store=False)
            baseline = naive.ask_naive(conn, case["question"], release)
            records[case["id"]] = {
                "question": case["question"],
                "answer": answer.model_dump(mode="json"),
                "baseline": baseline.model_dump(mode="json"),
            }
    return {"records": records, "changes": changes}


if __name__ == "__main__":
    with db.connect() as conn, conn.transaction(force_rollback=True):
        snapshot = capture(conn)
    print("window.VGL_DATA = " + json.dumps(snapshot, ensure_ascii=False, default=str, indent=2) + ";")
