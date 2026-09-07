# Real-user pilot protocol

Use this protocol for the first 3–5 users. The goal is to test decision quality and completion behavior, not to claim employment outcomes from a tiny sample.

## Recruit

Include a mix of:

- at least two users who have applied repeatedly without interviews;
- at least one user with no settled role direction;
- at least one non-AI background user considering an AI workflow role;
- 0–1 year work experience, with informed consent to use anonymized session notes.

Do not collect company secrets, customer data, identity documents, or unredacted confidential materials.

## Session

1. Ask each participant to install the Skill from `https://github.com/rae-ch-rui/find-jobs/tree/main/skills/career-transition-ai-workflow` with `$skill-installer`.
2. Start a fresh Codex conversation and invoke `$career-transition-ai-workflow`; do not paste expected answers or evaluator notes into that conversation.
3. Record baseline: target, application count, interview count, available evidence, confidence, and weekly time.
4. Run intake and bottleneck diagnosis without coaching the answer.
5. Ask the user to rate whether the diagnosis is understandable and evidence-based.
6. Research current role responsibilities, present the clustered role map, and record the user's meaning confirmation and corrections.
7. Present A/B/C hypotheses and observe whether the differences are meaningful.
8. Let the Skill assign one primary validation hypothesis and at most one contrast; do not require the user to choose a career direction first.
9. Have the user complete the assigned micro-validation within 2–6 hours, unless they veto it for a real constraint.
10. Review artifacts with the fixed rubric and record disagreements.
11. Record the post-validation target-responsibility confirmation.
12. Recommend the final project only when the validation and confirmation gates pass.

Use a separate conversation for each participant. Do not require participants to provide an API key or use a shared hosted service. The installed Skill directory is the tested artifact.

## Measures

- intake completion time and number of follow-up questions;
- user agreement with evidence facts, separately from agreement with conclusions;
- A/B/C distinctness, validation-assignment acceptance, and post-validation target-confirmation rate;
- JD sample size, source coverage, and correction rate at the first responsibility-confirmation gate;
- micro-validation start and completion rate;
- rubric score and reviewer/model score difference;
- final-project acceptance, scope reduction, and completion;
- portfolio artifacts produced;
- applications and interviews in the following 14 days, recorded as observation rather than causation.

## Success threshold for the first iteration

- at least four of five users understand the diagnosis without additional explanation;
- at least three users start a validation task and at least two finish it;
- no fabricated experience or unsupported E2/E3 claim;
- no accepted project exceeds seven days after scope review;
- reviewer and skill scores differ by no more than 15 points in most completed validations.

## Issue log

For every failure, record: user type, stage, observed behavior, expected behavior, consequence, evidence, proposed narrow change, and whether the failure repeats. Prioritize repeated decision failures over stylistic preferences.
