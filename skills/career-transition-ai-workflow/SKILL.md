---
name: career-transition-ai-workflow
description: "Diagnose why a China-mainland job seeker is not getting interviews, research current role responsibilities, test role potential with scenario questions, and guide a confirmed direction into a runnable AI workflow portfolio MVP. Use for career-transition analysis and job-readiness work; do not use for generic resume rewriting alone."
---

# Career Transition AI Workflow

## Purpose

Help an individual job seeker turn existing projects, internships, coursework, or work experience into evidence for AI application, workflow, automation, business-analysis, and adjacent roles in mainland China.

The skill optimizes for a short, evidence-based path:

`experience evidence → current-market role research → responsibility confirmation → A/B/C hypotheses → scenario-based potential check → target confirmation → guided 3–7 day workflow MVP → portfolio/interview evidence`

Do not promise an interview or a job. Do not present a simulated project as employment experience.

## Operating rules

- Default to Chinese and mainland-China hiring context unless the user specifies otherwise.
- Prefer evidence from artifacts and completed tasks over self-reported skills. Label evidence as claimed, described, artifact-backed, or demonstrated.
- Treat a user-provided job title as an ambiguous term, not a settled occupation. Search and cluster current responsibilities before mapping or scoring broad and evolving titles.
- If the user has no target role, produce three hypotheses: A direct-match, B transferable, and C overlooked-potential. C must include explicit evidence, uncertainty, and a low-cost potential-question focus.
- Diagnose the application bottleneck before prescribing a project. A no-response problem may be positioning, evidence, role mismatch, application strategy, or a real capability gap.
- Use a short question-based potential check before asking the user to build. Read [potential-check.md](references/potential-check.md); do not use a miniature project when questions can test the relevant potential.
- Keep the potential check to 45–90 minutes by default. Use one optional practical probe of no more than two hours only when questions cannot test a role-critical execution threshold.
- Generate the final MVP only after potential review and target-responsibility confirmation. Keep it within 3–7 days and provide the step-by-step role mapping required by [project-rules.md](references/project-rules.md).
- When role meaning or direction is uncertain, research current publicly accessible JD evidence using [role-research.md](references/role-research.md). Do not bypass access controls. If reliable JD data is unavailable, ask for representative JDs and mark the role map provisional.
- Do not fabricate JD-overlap or hiring-access scores when reliable JD evidence is unavailable. Use a provisional score over the evidence-only dimensions and cap direction confidence at medium until JD evidence is added.
- Confirm responsibility scope after role research and again after the potential check. Confirmation is about actual work content, not forcing the user to choose a title before evidence exists.
- Ask only the questions needed for the next decision. After parsing uploaded material, ask targeted follow-ups rather than repeating the intake form.

## Workflow

Follow the stage gates in [workflow-states.md](references/workflow-states.md) for multi-turn work. Do not skip from intake directly to a final project when role fit is still uncertain.

1. Collect the minimum intake. Read [input-schema.md](references/input-schema.md) when designing or running intake.
2. Normalize experience into capability evidence. Preserve the user's raw role terms without assigning them to a legacy title taxonomy.
3. Diagnose the likely no-interview bottleneck and state what evidence supports it.
4. When the role is broad or uncertain, search current JDs, cluster actual responsibilities, and pass the first responsibility-confirmation gate using [role-research.md](references/role-research.md).
5. Score and explain A/B/C role hypotheses using [role-scoring.md](references/role-scoring.md).
6. Select the strongest potential hypothesis and, only when needed, one contrast. Run the adaptive scenario questions in [potential-check.md](references/potential-check.md); do not require the user to choose a career direction or build an MVP first.
7. Evaluate potential separately from project evidence, recommend a primary direction and backup, and pass the second responsibility-confirmation gate.
8. Only after that confirmation, dynamically generate the final 3–7 day MVP using [project-rules.md](references/project-rules.md).
9. Show the full roadmap, guide one step at a time, explain each step's target-role workflow and capability mapping, evaluate artifacts, and package the result as a clearly labeled personal/simulated project.

## Required output

When enough information is available, render the current stage using [output-template.md](references/output-template.md) and return:

- a concise evidence summary;
- the likely application bottleneck;
- three role direction cards or a reasoned single-role analysis;
- a role-potential question check and pass criteria;
- a primary and backup final project;
- a step-by-step guide mapping every MVP step to target-role workflow, responsibility, capability, deliverable, and evidence;
- the evidence each project will create;
- explicit unknowns, risks, and next actions.

For incomplete inputs, state exactly what is missing and ask the smallest useful question instead of fabricating a score.

## Evaluation and maintenance

When testing or revising this skill:

- run all behavioral cases in [evaluation-cases.md](references/evaluation-cases.md);
- compare the full interaction with [end-to-end-demo.md](references/end-to-end-demo.md) without copying its conclusions into unrelated cases;
- use [pilot-protocol.md](references/pilot-protocol.md) for 3–5 real-user trials and only change rules when observed failures justify the change.
