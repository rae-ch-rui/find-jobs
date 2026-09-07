# Current-market role research and responsibility confirmation

Treat every user-provided role label as an ambiguous search term until its actual responsibility scope is confirmed. A title is evidence about wording, not proof of what the job does.

## When research is required

Research the current job market before direction scoring when any of these apply:

- the user is unsure of their target direction;
- the role term is broad, newly evolving, translated, or used inconsistently;
- the user's description of the role conflicts with the first search results;
- the available JDs are too old, too few, or concentrated in one company;
- the user asks about present hiring demand or current responsibilities.

If the user explicitly asks not to browse, honor that constraint and use only supplied JDs. If browsing is unavailable, ask for representative JD text or links and label the role map provisional.

## Search by responsibilities, not title alone

1. Preserve the user's exact phrase as `raw_role_term`.
2. Extract the activities, objects, tools, stakeholders, and outcomes the user associates with it.
3. Expand the phrase into three to six plausible role families and title variants. Queries must include responsibility language, not only the original title.
4. Search current, publicly accessible mainland-China postings or employer career pages. Prefer postings from the last 60 days; when a publication date is unavailable, mark it unknown rather than treating it as current. Do not bypass logins, anti-bot controls, or access restrictions.
5. Aim for 20–30 unique recent JDs across the candidate families. Deduplicate reposts and record the collection date, source, city, title, and usable responsibility text. Treat fewer than eight usable unique JDs as a thin sample and lower confidence.
6. Cluster the JDs by recurring responsibilities and outcomes. Keep neighboring clusters separate when their daily work, deliverables, or hiring bar differs.

For example, `流程分析` must not default to `ERP 流程专员`. Test at least the responsibility clusters suggested by the user's description, which may include business process analysis / BA, process improvement, workflow or automation analysis, operations analysis, and ERP implementation only when the collected evidence supports it.

## Responsibility profile

For each credible cluster, return:

- responsibility-cluster name and representative current titles;
- four to seven recurring responsibilities;
- typical deliverables and success measures;
- common tools or systems;
- important exclusions: what this cluster usually does not mean;
- sample size, source mix, date, and confidence;
- the user's evidence that may transfer and the evidence still missing.

Do not merge clusters merely because they share one title. Do not claim market prevalence from search-result order or a small sample.

## Two confirmation gates

### Gate 1 — meaning confirmation

After research and before direction scoring, show the responsibility profiles and ask the user which responsibility combination matches what they mean. Ask them to correct inclusions or exclusions. Do not ask them to invent a job title or choose a career direction from scratch.

The user may confirm more than one cluster. Confirmation means “this is the work I am considering,” not “I have chosen this career.”

### Gate 2 — target confirmation

After micro-validation, compare the observed evidence, the confirmed responsibility profile, and the user's experience of the task. Recommend a primary direction and one backup, then ask the user to confirm or revise the actual target responsibilities before generating the final 3–7 day project.

Use no more than these two planned confirmation gates unless the user changes the target or new evidence materially contradicts the role map. Summarize prior confirmations instead of repeatedly asking the same question.
