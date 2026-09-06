---
name: career-transition-ai-workflow
description: "Diagnose why a China-mainland job seeker is not getting interviews, map existing experience to A/B/C career directions, and guide a short validation task into a runnable AI workflow portfolio MVP. Use for career-transition analysis and job-readiness work; do not use for generic resume rewriting alone."
---

# Career Transition AI Workflow

## Purpose

Help an individual job seeker turn existing projects, internships, coursework, or work experience into evidence for AI application, workflow, automation, business-analysis, and adjacent roles in mainland China.

The skill optimizes for a short, evidence-based path:

`experience evidence → JD comparison → A/B/C role hypotheses → micro-validation → 3–7 day runnable workflow MVP → portfolio/interview evidence`

Do not promise an interview or a job. Do not present a simulated project as employment experience.

## Operating rules

- Default to Chinese and mainland-China hiring context unless the user specifies otherwise.
- Prefer evidence from artifacts and completed tasks over self-reported skills. Label evidence as claimed, described, artifact-backed, or demonstrated.
- If the user has no target role, produce three hypotheses: A direct-match, B transferable, and C overlooked-potential. C must include explicit evidence, uncertainty, and a low-cost validation task.
- Diagnose the application bottleneck before prescribing a project. A no-response problem may be positioning, evidence, role mismatch, application strategy, or a real capability gap.
- Use a fixed competency rubric and project acceptance criteria with dynamic business scenarios, data, tools, and difficulty. Do not invent an unconstrained project from scratch.
- Keep micro-validation within 2–6 hours and the final project within 3–7 days. If the proposed scope exceeds that, reduce the scope before presenting it.
- Only use user-provided JD links/text or sources that permit access. If reliable JD data is unavailable, ask the user for representative JDs and mark the confidence accordingly.
- Ask only the questions needed for the next decision. After parsing uploaded material, ask targeted follow-ups rather than repeating the intake form.

## Workflow

Follow the stage gates in [workflow-states.md](references/workflow-states.md) for multi-turn work. Do not skip from intake directly to a final project when role fit is still uncertain.

1. Collect the minimum intake. Read [input-schema.md](references/input-schema.md) when designing or running intake.
2. Normalize experience into capability evidence and normalize target JDs into competency clusters.
3. Diagnose the likely no-interview bottleneck and state what evidence supports it.
4. Score and explain A/B/C role directions using [role-scoring.md](references/role-scoring.md).
5. Let the user choose up to two directions for micro-validation. Generate a fixed-core, dynamic-context task.
6. Update confidence from the task result. Only then recommend the final project using [project-rules.md](references/project-rules.md).
7. Guide the project, evaluate it against the rubric, and package the result as a clearly labeled personal/simulated project.

## Required output

When enough information is available, render the current stage using [output-template.md](references/output-template.md) and return:

- a concise evidence summary;
- the likely application bottleneck;
- three role direction cards or a reasoned single-role analysis;
- a micro-validation task and pass criteria;
- a primary and backup final project;
- the evidence each project will create;
- explicit unknowns, risks, and next actions.

For incomplete inputs, state exactly what is missing and ask the smallest useful question instead of fabricating a score.

## Evaluation and maintenance

When testing or revising this skill:

- run the five behavioral cases in [evaluation-cases.md](references/evaluation-cases.md);
- compare the full interaction with [end-to-end-demo.md](references/end-to-end-demo.md) without copying its conclusions into unrelated cases;
- use [pilot-protocol.md](references/pilot-protocol.md) for 3–5 real-user trials and only change rules when observed failures justify the change.
