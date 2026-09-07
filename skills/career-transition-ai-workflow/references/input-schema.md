# Input schema

Use progressive disclosure. The first intake should take roughly 10–15 minutes and should rely on uploads wherever possible.

## Required intake

### Situation

- `job_search_stage`: `no_interviews_after_applications`, `some_applications_unclear`, `pre_application`, or `uncertain_direction`
- `city_or_region`
- `education_and_graduation_or_experience`
- `weekly_time_available`
- `target_start_window`

### Evidence

- resume or a structured career history;
- up to three projects, internships, or work examples;
- for each: problem, user contribution, tools, result, and independent ownership;
- portfolio or artifact links when available.

### Target direction

If known:

- `raw_role_term`: up to three titles or phrases in the user's own words; do not normalize them before role research;
- `expected_responsibilities`: what the user believes the job actually does day to day;
- `wanted_deliverables_or_outcomes`: what they want to create, improve, or be responsible for;
- `excluded_responsibilities`: nearby work they do not mean, such as ERP implementation, pure sales, customer success, or pure model engineering;
- one to three representative JDs or links;
- preferred city, salary, work mode, and industry constraints.

If unknown:

- preferred and disliked work activities;
- comfort with technical work, analysis, communication, design, and operations;
- industries of interest or exclusion;
- whether the user wants a fast-entry path or a higher-upside transition.

Do not require a user with an uncertain direction to name or choose a role. Their activities, preferences, exclusions, and evidence are sufficient to begin current-market research.

## Responsibility confirmations

Record separately:

- `meaning_confirmation`: which researched responsibility clusters match what the user originally meant, including corrections and exclusions;
- `validation_reaction`: which parts of the micro-task felt understandable, energizing, difficult, or undesirable;
- `target_confirmation`: the responsibility profile accepted after validation, before final-project generation.

Do not treat `meaning_confirmation` as a final career choice. Do not ask for `target_confirmation` before the micro-validation evidence exists.

### Application history

Show for users who have applied:

- approximate application count and date range;
- channels used;
- response stage: no response, rejection, screening, or interview;
- three to five actual JDs and the resume version used.

## Tool exposure

Ask for exposure level, not a claimed proficiency score:

`none | tried | small project | independent use`

Suggested items: ChatGPT/Claude, Dify/Coze, Feishu/DingTalk automation, Excel/SQL, Python, APIs, data analysis, process mapping, and documentation.

## Targeted follow-up questions

After parsing materials, ask no more than five questions such as:

- Which part of this project did you complete independently?
- What artifact or result proves the work happened?
- What would you change if you repeated it?
- Did you actually use the tool or only follow a tutorial?
- Which task would you willingly do repeatedly for two weeks?

## Privacy

Ask the user to remove company secrets, customer data, personal identifiers, and restricted documents. Keep simulated projects labeled as simulated or personal projects.
