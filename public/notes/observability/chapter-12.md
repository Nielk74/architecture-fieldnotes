# Chapter 12: Using Service-Level Objectives for Reliability

*Pip’s adventure: Agree what counts as a good checkout. Fictional teaching story; concepts follow the cited source.*

Source: text lines 4814–5231.

Pip’s market crew argues over a healthy host graph while customers abandon payments. A user-relevant indicator, explicit objective window, and error allowance give the discussion a shared basis. Retained event context explains which experiences spend that allowance.

## Choose a user-relevant indicator

Pip defines a good checkout as an eligible attempt completing successfully within the agreed latency threshold. An SLI measures an experience the service must deliver. Infrastructure health can explain trouble without being the user’s desired outcome. Pip states eligibility and the good-event rule before calculating a percentage.

Source: text lines 4814–5231.

## An objective includes a window

Pip proposes “99.9%” and a teammate asks, “Of what, over when?” An SLO specifies an indicator’s desired level over a time window. Population and window make the percentage meaningful. Pip chooses the reliability the business needs, not impressive nines or its best accidental historical performance.

Source: text lines 4814–5231.

## The error budget is an allowance

Pip counts one million eligible requests against a 99.9% objective. Its complement permits 1,000 bad outcomes in that window. The error budget supports decisions about delivery risk and reliability work. Pip does not assume failures arrive evenly or every stall receives the same reliability.

Source: text lines 4814–5231.

## Event criteria retain diagnostic context

Pip classifies each eligible event using the agreed good-or-bad rule. Failing latency events retain endpoint, build, and customer attributes. The SLO says whether reliability is acceptable; context helps explain the change. Pip can move from the objective into the population that actually needs investigation.

Source: text lines 4814–5231.

## Transfer challenge: Healthy servers, failed purchases

Every host is reachable, but customers cannot finish checkout during payment retries.

### Define an indicator around completed checkout attempts

Measures the user outcome affected by retries. Requires an explicit eligibility and success definition. Reliability discussions can track the work customers actually complete.

### Use host reachability as the only objective

Is easy to collect and useful for infrastructure checks. Can declare success while the user journey fails. A healthy infrastructure score can coexist with a continuing purchase failure.

Choose the objective at the service outcome, keeping host health as explanatory evidence.

## Write an event-based SLO

Specify an objective for one user task with enough detail that two engineers would count it the same way.

- Eligible requests and exclusions
- Good-event rule
- Target, window, and budget
