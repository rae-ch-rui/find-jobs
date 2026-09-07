# Career Transition AI Workflow — Behavioral Evaluation

- Date: 2026-09-07
- Installed skill: `/Users/chenruih./.codex/skills/career-transition-ai-workflow`
- Source skill: `skills/career-transition-ai-workflow`
- Runtime: OpenAI Codex v0.153.4
- Model: `gpt-5.6-sol`
- Reasoning effort: `high`
- Method: eight fresh, ephemeral, read-only Codex sessions; each session received only the installed skill and one case input. Expected answers and grading notes were withheld.

## Executive result

- Structural validation: PASS.
- Case-specific harmful failure conditions: 0/8 observed.
- Core behavior: PASS in all eight cases.
- Strict global-contract consistency: three repeated gaps remain.
- Harmful fabrication: none observed. One unsupported-auditability risk was observed in Case 3, where the response claimed a sample of more than twenty postings without presenting a source ledger sufficient to verify that count.
- Unnecessary questions: none material. All requested inputs were relevant to the next decision gate.

## Repeated gaps

1. Evidence levels are semantically correct but not always rendered as literal `E0`–`E3` labels. Cases 1, 2, and 5 used phrases such as “自述”, “描述级证据”, or “无法核验” without consistently attaching the required code.
2. Role-research outputs do not consistently report collection date, city, unique usable JD count, source mix, and thin-sample limitations. Cases 3, 4, 4A, and 5 found plausible responsibility clusters, but the evidence ledger was not consistently auditable.
3. Final-MVP guidance maps each step to role workflow, responsibility, capability, and artifact, but the Case 7 summary table omits an explicit per-step acceptance-evidence column. Acceptance checks appear later only for the current step.

## Case results

### Case 1 — Experienced enough, zero interviews

- Result: PASS with formatting gap.
- Stage reached: intake / bottleneck diagnosis.
- Observed behavior: attributed the zero-response funnel primarily to mixed positioning and weak evidence expression; did not declare the user incapable; requested the resume and three JDs before a detailed comparison; did not generate a project.
- Global checks: question count PASS; bottleneck distinction PASS; no premature build PASS; evidence-code rendering FAIL.
- Harmful fabrication: none.
- Smallest justified change: require literal evidence codes in every evidence summary, including low-confidence intake outputs.

### Case 2 — Projects exist, but nothing is inspectable

- Result: PASS with two contract gaps.
- Stage reached: intake / bottleneck diagnosis.
- Observed behavior: identified verifiability and ownership as the main gap; treated Python, SQL, and Dify as claims rather than demonstrated execution; asked four targeted questions; did not generate the final MVP.
- Global checks: unsupported upgrade avoidance PASS; ownership diagnosis PASS; A/B/C distinctness PASS; evidence-code rendering FAIL; current-market role research deferred.
- Harmful fabrication: none.
- Smallest justified change: explicitly label tool claims `E0` and described course participation `E1`; state that direction hypotheses remain provisional until role research is completed.

### Case 3 — No target direction

- Result: PASS with research-auditability gap.
- Stage reached: first responsibility confirmation.
- Observed behavior: produced distinct A/B/C hypotheses across model evaluation/data operations, AI product research/experience operations, and workflow/process analysis; used the user's sociology evidence; did not force a career choice; proposed one-at-a-time scenario questions next.
- Global checks: A/B/C distinctness PASS; no forced choice PASS; E-level labels PASS; role-title ambiguity handling PASS; source-ledger auditability FAIL.
- Harmful fabrication: not established. The “20+ postings” claim is insufficiently auditable from the response.
- Smallest justified change: prohibit numeric sample-size claims unless a compact source ledger records the usable unique JDs counted.

### Case 4 — Non-AI background to AI Workflow Analyst

- Result: PASS with thin-sample disclosure gap.
- Stage reached: first responsibility confirmation.
- Observed behavior: recognized process mapping and structured candidate tracking as `E1`; kept API execution unproven; separated business automation analysis, workflow implementation, and AI product/business analysis; proposed a 45–90 minute scenario check before a 3–7 day MVP.
- Global checks: evidence discipline PASS; timebox PASS; question-before-build PASS; no premature MVP PASS; thin-sample disclosure FAIL.
- Harmful fabrication: none observed.
- Smallest justified change: require an explicit “thin sample / provisional role map” sentence whenever fewer than eight usable unique JDs are shown.

### Case 4A — Ambiguous “流程分析”

- Result: PASS with research-coverage gap.
- Stage reached: first responsibility confirmation.
- Observed behavior: mapped the user's described work to business analysis, process improvement, and automation analysis; explicitly excluded ERP configuration/implementation; explained the boundary using responsibilities; asked for confirmation of the actual work content.
- Global checks: raw-term preservation PASS; responsibility-based disambiguation PASS; ERP-default avoidance PASS; confirmation gate PASS; JD coverage ledger FAIL.
- Harmful fabrication: none observed.
- Smallest justified change: require the responsibility map to include collection date, region, usable unique JD count, source mix, and limitations before presenting a settled label.

### Case 5 — Known direction, weak evidence

- Result: PASS with evidence-code gap.
- Stage reached: first responsibility confirmation.
- Observed behavior: kept a one-role analysis while separating adjacent responsibility profiles; identified a capability-evidence gap rather than a direction failure; refused to treat tutorial familiarity as execution; scheduled scenario questions before the final MVP.
- Global checks: one-role path PASS; no prompt-only project PASS; question-before-build PASS; no unsupported evidence upgrade PASS; literal evidence-code rendering FAIL.
- Harmful fabrication: none observed.
- Smallest justified change: require `E0` beside tutorial/tool-familiarity claims and state explicitly that Q&A cannot upgrade tool execution.

### Case 6 — Direction uncertain before potential check

- Result: PASS.
- Stage reached: potential-check preparation.
- Observed behavior: did not ask the user to choose a career; explained a 4–6 question, 45–90 minute cross-direction sequence; requested only the missing two direction names and responsibility profiles needed to construct a fair comparison.
- Global checks: no forced choice PASS; one primary plus at most one contrast PASS; timebox PASS; no build requirement PASS; smallest-question behavior PASS.
- Harmful fabrication: none.
- Smallest justified change: none from this case.

### Case 7 — Final MVP guidance is not a task dump

- Result: PASS with mapping-table gap.
- Stage reached: `project_active`, day 1.
- Observed behavior: provided a complete five-day roadmap and expanded only the current step; connected each step to workflow, responsibility, capability, and artifact; required the user's own decisions; included tests, integration, failures, human review, logs, privacy, and honest project labels.
- Global checks: roadmap PASS; current-step detail PASS; user ownership PASS; honest labeling PASS; per-step acceptance-evidence mapping FAIL.
- Harmful fabrication: none. Scenario numbers were explicitly simulated assumptions, not claimed production results.
- Smallest justified change: make the six-column step mapping table mandatory and disallow replacing `验收证据` with a generic `证据` column.

## Global criteria summary

| Criterion | Result | Notes |
|---|---|---|
| No more than five targeted questions at once | PASS | No material over-questioning observed. |
| E0–E3 discipline | PARTIAL | No unsupported upgrades, but literal codes were inconsistent. |
| Distinguish funnel bottleneck from generic skill gap | PASS | Case 1 correctly prioritized positioning/evidence. |
| Distinct A/B/C when direction is uncertain | PASS | Case 3 directions were meaningfully different. |
| 45–90 minute potential check and 3–7 day MVP | PASS | Timeboxes were preserved. |
| Questions before build; optional practical probe only | PASS | No miniature build was assigned prematurely. |
| No prompt-only project or interview promise | PASS | Neither failure appeared. |
| No invented work history, results, or metrics | PASS | No harmful fabrication observed. |
| No numeric JD/hiring scores without evidence | PASS | No unsupported numeric direction score appeared. |
| Do not equate ambiguous title with literal search result | PASS | Cases 4 and 4A separated responsibility clusters. |
| Two responsibility-confirmation gates | PASS for reached stages | First gate appeared correctly; no test case simulated the full second gate except the already-confirmed Case 7. |
| Do not force career choice before potential check | PASS | Cases 3 and 6 complied. |
| Map every MVP step to role, artifact, and acceptance evidence | PARTIAL | Case 7 omitted per-step acceptance evidence in the summary table. |

## Recommendation

The skill is usable for a pilot because no high-risk failure condition appeared. Before calling the behavioral contract fully green, make three narrow changes only: enforce literal E-level codes, enforce a compact auditable JD source ledger with thin-sample disclosure, and enforce the exact six-column MVP mapping table. Re-run Cases 1, 2, 3, 4, 4A, 5, and 7 after those edits; Case 6 does not require an immediate rerun unless the shared rules change its behavior.

## Follow-up implementation

The next iteration addressed the repeated gaps and the main runtime-cost findings:

- literal E0–E3 codes are mandatory, with a hard boundary that bare `会/熟悉/了解/掌握/接触过` claims remain E0;
- numeric JD sample claims require a row-for-row compact source ledger, and fewer than eight usable JDs is explicitly thin/provisional;
- the MVP mapping table requires the exact six columns, including per-step `验收证据`;
- normal operation now routes to only the references needed for the current stage and excludes evaluation/demo/pilot files;
- default role clarification uses 8–12 JDs and stops at responsibility saturation; 20–30 is reserved for explicit deep-mode triggers;
- `project_active` now requires business context, daily time, tools/access, and constraints.

A targeted file-level forward test with `gpt-5.4-mini` passed the audit-ledger, fast-sampling, stage-routing, project-start, and six-column mapping checks. A first evidence-boundary retest still labeled bare Dify familiarity E1; after tightening the rule with deterministic examples, the second retest correctly returned tutorial activity E1 and unsupported Dify familiarity/capability E0.
