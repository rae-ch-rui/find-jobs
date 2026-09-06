# Role direction scoring

Do not treat one job title as a universal occupation. Normalize JDs into role families and competency clusters first.

## Base score

Score each role direction from 0–100:

| Dimension | Weight |
|---|---:|
| Relevant capability evidence | 25 |
| JD competency overlap | 20 |
| Transfer potential | 20 |
| Project verifiability within 3–7 days | 15 |
| User preference and constraints | 10 |
| Hiring-access feasibility | 10 |

Evidence strength is ordered as:

`E0 claimed < E1 described < E2 artifact-backed < E3 demonstrated`

Do not give high confidence to an E0-only match.

## Missing-JD rule

Use the full 100-point score only when representative JD evidence is available. Without reliable JDs:

- mark `JD competency overlap` and `Hiring-access feasibility` as `not assessed` rather than inventing numbers;
- score only relevant capability evidence, transfer potential, project verifiability, and user preference/constraints, for a provisional total of 70 points;
- label the result `provisional <score>/70`, not `<score>/100`;
- cap direction confidence at `medium` and state which JD evidence is needed to recalculate the full score.

Do not infer current hiring accessibility from a job title alone.

## Direction buckets

### A — direct match

High evidence and overlap, manageable proof gap, and a short path to a credible application. The project should convert existing experience into AI-workflow evidence.

### B — transferable

Moderate direct overlap, high transfer potential, and one or two gaps that a 3–7 day project can test or partially close.

### C — overlooked potential

Low surface-level overlap but a credible transfer hypothesis. Require two or three supporting evidence points, explicit uncertainty, and a smaller validation task before recommending a full project.

The three recommendations are a portfolio of options, not a single rank order. Include one direction from each bucket when evidence allows and avoid returning three renamed versions of the same role.

## Direction card

Return:

- role family and common title variants;
- bucket A/B/C;
- evidence and evidence level;
- current match, transfer potential, project verifiability, and feasibility scores;
- key missing evidence;
- likely failure risk;
- micro-validation task;
- primary and backup project candidates;
- confidence and what would change it.

When the missing-JD rule applies, replace JD and hiring-access numeric values with `not assessed` and return a provisional score over 70.
