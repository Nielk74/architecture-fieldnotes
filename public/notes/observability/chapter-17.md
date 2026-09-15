# Chapter 17: Cheap and Accurate Enough: Sampling

*Pip’s adventure: Which clues survived the sample?. Fictional teaching story; concepts follow the cited source.*

Source: text lines 7403–8053.

Pip reduces telemetry volume and loses a rare customer failure. Sampling preserves complete retained events, not every event. Head, tail, and adaptive choices see different information; known retention probabilities support honest estimates without recreating discarded details.

## Constant probability preserves examples

Pip retains each event with a constant 1% probability. Frequent behavior may remain representative, but one unusual failure is very likely absent. Sampling preserves the full recorded context of retained requests unlike aggregation. Pip cannot promise that a particular customer’s event survived or that every small cohort has an example.

Source: text lines 7403–8053.

## Head and tail know different facts

Pip wants to keep error traces after their outcome is known. Head sampling decides near entry, before final status or duration; tail sampling waits for that information. Errors and slow traces can then receive preference. Pip budgets pending-span handling and coordinated retention because the extra knowledge has operational costs.

Source: text lines 7403–8053.

## Dynamic rates protect useful cohorts

Pip’s busiest stall overwhelms quieter tenants in the global sample. Dynamic rates can adapt to recent volume and sampling keys such as tenant and outcome. Rare cohorts need deliberate retention, while keeping every error can fail during an error surge. Pip designs rates around both useful evidence and the telemetry budget.

Source: text lines 7403–8053.

## Weights enable honest estimates

Pip keeps successes at 1% and errors at 100%. Their inverse-probability weights are 100 and 1, so unequal retention requires weighted counts and distributions. Known nonzero probability supports estimates, not naïve averages over rows. Pip cannot restore discarded detail, remove variance, or infer populations given zero retention probability.

Source: text lines 7403–8053.

## Transfer challenge: The sampled error rate looks enormous

Every error is retained while only 1% of successes survive; the raw stored rows look mostly unhealthy.

### Apply recorded inverse-probability weights

Produces an estimate that accounts for unequal retention. Still has sampling uncertainty and cannot recreate missing examples. The estimated service rate differs from the intentionally error-heavy composition of stored rows.

### Report the unweighted retained-row percentage

Describes the composition of the stored sample. Misrepresents the service population under unequal selection. Stakeholders may infer a severe production failure from a deliberately biased sample.

Name whether a result describes retained data or estimates original traffic, and preserve probabilities needed for the latter.

## Design a sampling policy

Specify how to preserve a rare customer cohort while keeping telemetry volume manageable.

- Selection time and sampling key
- Probability and recorded weight
- Failure cases and uncertainty
