# Chapter 10: Practical Alerting from Time-Series Data

*Pip’s adventure: One reset should not look like a fleet outage. Fictional teaching story; concepts follow the cited source.*

Source: text lines 4119–4664.

Pip’s request counter resets when a task restarts and the aggregate graph plunges. Time-series labels, reset-aware rates, sound ratios, and tested alert rules turn measurements into reliable signals. Notifications remain a separate decision from whether a condition is mathematically true.

## Labels identify a time series

Pip replaces per-machine check scripts with one region-aware query. Timestamped measurements form time series identified by labels such as metric, instance, job, code, and region. Discovery finds changing collection targets while reusable rules select their labels. Pip separates finding machines from computing service behavior.

Source: text lines 4119–4664.

## Compute rates before aggregating counters

Pip’s restarted task resets its accumulated request counter. Counters normally increase until reset; gauges may rise or fall. Pip calculates reset-aware rates per series before summing them. Summing raw counters first would mix the reset with other tasks and distort the service rate.

Source: text lines 4119–4664.

## Ratios, persistence, and notification routing

Pip computes service errors as summed error rates divided by summed request rates. Volume conditions and a minimum true duration reduce noise and transient crossings. Routing and deduplication then decide who receives the notification. Pip keeps a true condition separate from an immediate human interruption.

Source: text lines 4119–4664.

## Monitor and test the monitoring system

Pip feeds a counter reset and missed scrape into an alert test. Monitoring needs capacity, redundancy, and visibility into its own collection failures. Hierarchical collectors can aggregate locally while keeping diagnostic detail. Pip adds external probes for routing, naming, and content failures invisible to internal application counters.

Source: text lines 4119–4664.

## Transfer challenge: Calculate one service-level error alert

Two tasks serve very different traffic volumes. The current alert averages their error percentages, so the quiet task dominates some pages. Restarts also create misleading counter changes.

### Sum per-task rates before calculating the service ratio

Traffic receives the correct weighting and individual counter resets remain visible to rate handling. The team must verify rate windows, missing data, and low-traffic behavior. Synthetic tests cover resets and uneven traffic before the alert is deployed.

### Raise the threshold on the existing average

The team can quickly reduce the number of pages. The incorrect weighting remains and some genuine high-volume failures may be missed. A quieter pager does not establish that the rule measures service impact correctly.

Fix the meaning of the measurement before tuning its threshold. Compute reset-aware rates for each task, aggregate numerator and denominator, then test persistence and routing.

## Check an alert’s arithmetic

Design an error-ratio alert for tasks with unequal traffic. Specify rate aggregation, its persistence condition, and synthetic cases that should not page.

- Numerator and denominator
- Persistence and traffic
- Rule tests
