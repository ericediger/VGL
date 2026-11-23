/* All records are embedded locally. The walkthrough never calls the app or a provider. */
"use strict";
const { records, changes } = window.VGL_DATA;
const scenes = [
  ["1.1", "Introduction", "Which rule was in force?", "One question about a new portfolio has two recorded answers on the same date. Follow the citations to see why.", "intro"],
  ["2.1", "Reading an answer", "Start with the citation", "Each structured claim points to a version in the retrieved evidence. A flag can qualify an answer even when its citations pass.", "contract"],
  ["3.1", "Architecture", "From question to evidence", "The local app replays the recorded language-model steps. PostgreSQL selects the evidence, and Python applies the citation checks.", "architecture"],
  ["4.1", "Version selection", "One month in the North", "In June 2025, the northern jurisdiction uses the newer edition. The recorded answer cites the provision in force there.", "G1"],
  ["5.1", "Jurisdiction", "Two months in the South", "Keep the question and date fixed. The southern jurisdiction has a later adoption date, so the answer cites the earlier edition.", "G2"],
  ["6.1", "Missing evidence", "A reference without its ruling", "A withdrawal took a portfolio below the composite minimum. Release 1 knows about a relevant ruling but lacks its text.", "G4a"],
  ["6.2", "Editorial change", "Add the missing ruling", "The local change preview identifies affected concepts and authored cases. Approval makes the new evidence visible in release 2.", "proposal"],
  ["6.3", "Known exception", "The ruling changes the answer", "Replay the same question under release 2. The recorded ruling describes a limited exception for a significant cash flow.", "G4b"],
  ["7.1", "Amendment", "Before the effective date", "Release 3 contains an amendment to a definition. The earlier wording still applies on the first date shown here.", "G11a"],
  ["7.2", "Amendment", "After the effective date", "The provision stays in place. Its amended definition changes how a fully waived related-party account is treated.", "G11b"],
  ["7.3", "Issued answer", "Find the earlier answer", "The issued-answer register records which versions an earlier response cited. The new definition gives that response an expiry date.", "issued"],
  ["8.1", "Evaluation", "What the cases measured", "Each authored case specifies expected citations, outcomes or flags. The question-only document baseline ran on the same fictional sources.", "eval"],
  ["9.1", "Limits", "What still needs judgment", "A valid citation can support the wrong interpretation. People still need to review the meaning of an answer and the evidence that retrieval missed.", "limits"],
];
const $ = (id) => document.getElementById(id);
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function grid(items) {
  const node = element("div", undefined, "grid");
  for (const [title, text] of items) {
    const card = element("article");
    card.append(element("h3", title), element("p", text));
    node.append(card);
  }
  return node;
}
function button(text, action) {
  const node = element("button", text);
  node.addEventListener("click", action);
  return node;
}
function showDialog(title, body) {
  $("dialogtitle").textContent = title;
  $("dialogbody").replaceChildren(body);
  $("dialog").showModal();
  $("close").focus();
}
function recordDetail(id) {
  const record = records[id];
  const node = element("div");
  node.append(element("p", record.question), element("h3", "Structured claims"));
  for (const claim of record.answer.claims) {
    node.append(element("p", claim.text), element("p", claim.cites.join(" · "), "cite"));
  }
  node.append(element("h3", "Flags"));
  const flags = record.answer.flags.map(flag => flag.message);
  node.append(element("p", flags.join(" ") || "No flags raised."));
  const raw = element("details");
  raw.append(element("summary", "Raw answer summary · outside claim-level checks"), element("p", record.answer.summary));
  const full = element("details");
  full.append(element("summary", "Full replay record, including evidence, checks and baseline"), element("pre", JSON.stringify(record, null, 2)));
  node.append(raw, full);
  showDialog(id + " / recorded result", node);
}
function caseCard(id) {
  const { question, answer } = records[id];
  const frame = answer.frame;
  const card = element("article", undefined, "record");
  card.append(element("div", "Release " + answer.release_id + " · " + frame.jurisdiction + " · " + frame.as_of + " · " + answer.outcome, "label"),
    element("h3", question));
  const claim = answer.claims[0];
  if (claim) card.append(element("p", claim.text, "quote"), element("p", claim.cites.join(" · "), "cite"));
  if (answer.flags.length) card.append(element("p", "Flags · " + [...new Set(answer.flags.map(f => f.kind))].join(", "), "meta"));
  card.append(button("Inspect full record", () => recordDetail(id)));
  return card;
}
const content = {
  intro: () => grid([["Same question", "When must a new portfolio enter a composite?"], ["Same date", "1 June 2025, using the first knowledge release."], ["Different adoption dates", "North has adopted the 2025 edition. South still uses the 2021 edition."]]),
  contract: () => grid([["Claim", "Read the retained statement and identify the version it cites."], ["Evidence", "Inspect the passage, effective date and authority tier in the full record."], ["Outcome", "Review a flagged answer or supply missing facts when clarification is requested."]]),
  architecture: () => grid([["Intake & search", "Replay the saved question frame, embedding and entry selection."], ["Resolve", "Walk recorded relationships and apply release, date and jurisdiction filters."], ["Compose & check", "Replay structured claims. Check citations, authority, missing references and known exceptions."]]),
  proposal: () => {
    const p = changes["prop:QA-2025-031"].preview;
    return grid([["Proposed source", "QA-2025-031"], ["Affected concepts", p.affected_concepts.join(" · ")], ["Cases flagged by preview", p.changed_gold_cases.map(c => c.id).join(", ")]]);
  },
  issued: () => {
    const row = changes["prop:A1"].after[0];
    return grid([["Issued under release " + row.release_id, row.client_ref + " · " + row.issued_on], ["Changed definition", row.staleness.reasons[0].display_ref], ["Expiry in release 3", row.staleness.from]]);
  },
  eval: () => {
    const node = grid([["13 of 13 cases", "Each recorded layer response met its authored expectations."], ["3 of 13 baseline cases", "The rubric flagged three baseline responses. The baseline lacked the separate place and date controls."], ["3 review notes", "The recorded secondary reviewer questioned three claims. Its notes are advisory."]]);
    const choices = element("div", undefined, "row");
    for (const id of Object.keys(records)) choices.append(button(id, () => recordDetail(id)));
    const box = element("div"); box.append(node, element("p", "Inspect any recorded case", "meta"), choices); return box;
  },
  limits: () => grid([["Evidence coverage", "The default traversal stops after four hops. Missing sources or relationships can change the result."], ["Summary text", "The raw summary bypasses claim-level checks and may retain text from a removed claim."], ["Evaluation", "The examples are fictional development cases. They provide no estimate of performance on unseen questions."]]),
};
let current = 0;
function fromHash() {
  const match = /^#(\d+)(?:\.(\d+))?$/.exec(location.hash);
  if (!match) return 0;
  const section = scenes.map((s, i) => [s[0].split(".")[0], i]).filter(([n]) => n === match[1]);
  if (!section.length) return 0;
  return section[Math.max(0, Math.min(section.length - 1, Number(match[2] || 1) - 1))][1];
}
function render(focus) {
  current = fromHash();
  const [id, chapter, title, lead, key] = scenes[current];
  $("chapter").textContent = chapter;
  $("title").textContent = title;
  $("lede").textContent = lead;
  $("content").replaceChildren(records[key] ? caseCard(key) : content[key]());
  document.querySelector("main").dataset.step = id;
  $("position").textContent = (current + 1) + " of " + scenes.length;
  $("prev").disabled = !current;
  $("next").disabled = current === scenes.length - 1;
  if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  if (focus) { $("title").focus({preventScroll:true}); window.scrollTo(0, 0); }
}
function go(index) {
  if (!scenes[index] || index === current) return;
  history.pushState(null, "", "#" + scenes[index][0]);
  render(true);
}
$("prev").onclick = () => go(current - 1);
$("next").onclick = () => go(current + 1);
$("help").onclick = () => showDialog("Keyboard shortcuts", element("p", "Left and right arrows move between steps. Space advances. Numbers 1–9 jump to a section. R resets the section. F opens a case record when available. Escape closes this dialog."));
$("close").onclick = () => $("dialog").close();
document.addEventListener("keydown", e => {
  if ($("dialog").open || e.altKey || e.metaKey || e.ctrlKey) return;
  if (e.key === " " && ["BUTTON","A","SUMMARY"].includes(e.target.tagName)) return;
  if (["ArrowRight", " "].includes(e.key)) { e.preventDefault(); go(current + 1); }
  else if (e.key === "ArrowLeft") go(current - 1);
  else if (/^[1-9]$/.test(e.key)) go(scenes.findIndex(s => s[0] === e.key + ".1"));
  else if (e.key.toLowerCase() === "r") go(scenes.findIndex(s => s[0] === scenes[current][0].split(".")[0] + ".1"));
  else if (e.key.toLowerCase() === "f" && records[scenes[current][4]]) recordDetail(scenes[current][4]);
  else if (e.key === "?") $("help").click();
});
window.addEventListener("hashchange", () => render(true));
render(false);
