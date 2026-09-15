# Chapter 16: Tracking Outages

*Pip’s adventure: Twelve alerts, one outage. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6268–6432.

Pip counts twelve failures until the crew traces all twelve alerts to one network incident. Keeping notification evidence, acknowledgments, context, and incident identity separate makes history useful. Tags and impact measures then help the team choose what to improve.

## Notifications and incidents are different units

Pip’s network interruption triggers twelve service alerts. Notifications may describe one incident, false positives, or audit events rather than twelve distinct outages. Pip groups related alerts while preserving their evidence. Tracking alerts per incident and incident frequency distinguishes noisy notification from recurring service failure.

Source: text lines 6268–6432.

## Capture context with low workflow friction

Pip acknowledges a page but has not restored bookings. Outalator records notifications, replies, annotations, and highlighted context with low workflow friction. Escalator separately tracks acknowledgment and escalates unanswered notifications. Pip records the successful reroute explicitly: receipt is neither explanation nor resolution.

Source: text lines 6268–6432.

## Flexible tags support useful comparisons

Pip cannot compare switch incidents because each has a different label. Tags add causes, actions, and metadata; hierarchical conventions can evolve from cause:network to cause:network:switch. Free-form use discovers useful distinctions before conventions mature. Pip standardizes meaningful spelling without making taxonomy design a barrier to recording incidents.

Source: text lines 6268–6432.

## Interpret trends before choosing investments

Pip sees the same database delay across five services. Incident history reveals baselines, cross-service patterns, and shared infrastructure costs. Raw counts may reflect noisy monitoring or cheap incidents, so Pip combines frequency, impact, and response effort. Shared evidence can justify a common fix and alert an otherwise quiet dependency owner.

Source: text lines 6268–6432.

## Transfer challenge: Find the recurring cost behind noisy alerts

An on-call team receives 60 notifications in a week, but several are duplicates from one network incident and others are false positives. Two related services report similar database delays.

### Group notifications and annotate incidents before comparing trends

The team can distinguish alert noise, actual failures, and shared dependency costs. Useful grouping and tags require some responder attention. The weekly review compares incidents, impact, and response effort instead of treating 60 pages as 60 outages.

### Rank services only by notification count

A count is easy to produce and can expose a noisy service quickly. Duplicate pages and differing alert policies distort the comparison. The ranking prompts investigation but is insufficient on its own to choose reliability investment.

Incident grouping preserves evidence while improving the unit of analysis. Use tags and annotations to interpret frequency with impact and effort; a page count alone does not identify the most valuable fix.

## Build an incident review from alert history

Group a week of notifications into incidents and identify one recurring problem worth investigating. Explain how you avoid confusing alert volume with impact.

- Grouping
- Metadata
- Interpretation
