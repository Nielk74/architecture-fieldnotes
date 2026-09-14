# Chapter 10: Practical Alerting from Time-Series Data

Turn labeled counters into service-level rates and dependable alerts

Time-series monitoring separates data collection from the rules that interpret it. Applications export measurements; labels identify their source, meaning, and location; common rules turn those series into dashboards and alerts. Counters preserve accumulated events between scrapes, and rates should be calculated per series before aggregation so restarts do not corrupt the result. A service-level error ratio combines total error and request rates rather than averaging unrelated percentages. Alert conditions can include a duration to suppress transient changes, while routing and deduplication belong in a separate notification layer. Hierarchical collection supports scale and local diagnosis. The rules themselves need testing with synthetic data, and external probes remain necessary because internal measurements cannot reveal requests that never reached the service.

## Labels identify a time series

A time series contains timestamped measurements distinguished by a set of labels. Labels can identify the metric, instance, job, response code, or region, allowing one rule to select related data across many tasks. Collection and rule definition are separate concerns: discovery finds changing targets, while reusable computations follow the labels instead of requiring a custom check script for every machine.

## Compute rates before aggregating counters

A counter accumulates events and normally increases until a reset, whereas a gauge describes a value that may rise or fall. Rate calculations convert counter changes into activity over time. Compute reset-aware rates for individual series before summing them; summing raw counters first can mix a restarted process with other processes and distort the resulting service-level rate.

## Ratios, persistence, and notification routing

A useful service error ratio divides the sum of error rates by the sum of request rates. Additional conditions can reduce low-volume noise, and a minimum true duration prevents transient threshold crossings from immediately paging. The notification layer then routes and deduplicates alerts. These are distinct steps: a mathematically true condition is not yet necessarily a notification to a human.

## Monitor and test the monitoring system

Collection failure is itself useful evidence, and monitoring needs enough redundancy and capacity to survive faults in the environment it observes. Hierarchical collectors can aggregate locally while retaining detailed series for diagnosis. Synthetic input series allow rules to be tested before deployment. External probes complement these internal measurements by detecting routing, name-resolution, or response-content failures invisible to application counters.

## Apply it

Design an error-ratio alert for tasks with unequal traffic. Specify rate aggregation, its persistence condition, and synthetic cases that should not page.

Source: *Site Reliability Engineering*, chapter 10, text lines 4119–4664. This note is an original synthesis; the exercise is a teaching extension.
