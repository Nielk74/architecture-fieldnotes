# Chapter 2: How Debugging Practices Differ Between Observability and Monitoring

*Pip’s adventure: Pip resists yesterday’s explanation. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1280–1658.

The market’s latency graph looks familiar, so Pip nearly applies last week’s fix. Instead, Pip compares affected and unaffected requests, preserves context across tools, and shares the reasoning. A repeatable investigation is more useful than another private hunch.

## Recognition has limits

Pip recognizes last week’s database graph and reaches for the same repair. Dashboards compress known measurements into useful patterns, but similar symptoms can have different mechanisms. Today’s delay might be resource contention rather than an inefficient query. Pip tests the hypothesis before a change obscures the original evidence.

Source: text lines 1280–1658.

## Comparative investigation

Pip selects the market requests that actually fail. Comparing them with successful requests reveals whether deployment or endpoint distinguishes the populations. Each narrowing should reduce uncertainty or challenge an explanation. Pip follows a method a first-time responder can repeat without remembering a past outage.

Source: text lines 1280–1658.

## Context continuity

Pip clicks a trace link and lands on an unrelated dashboard. Mismatched IDs, windows, and populations force a risky join in the responder’s memory. Pip carries the actual request context across tools. Explicit relationships let colleagues check evidence instead of accepting a correlation between different requests.

Source: text lines 1280–1658.

## Expertise becomes shareable

Pip hands over the failing cohort and ruled-out hypotheses. Saved investigation paths show which questions changed the explanation. Experienced intuition remains useful without being the only route to diagnosis. Colleagues learn a method they can retrace, reducing dependence on one escalation expert.

Source: text lines 1280–1658.

## Transfer challenge: The familiar spike

An engineer proposes a cache restart because the dashboard resembles last month’s outage.

### Compare affected requests with the previous hypothesis

Tests whether cache behavior explains the present failures. Takes investigation time before a targeted intervention. The proposed cache intervention is supported or challenged by current request evidence.

### Restart the cache immediately

May restore service quickly if the old failure has returned. Can hide evidence and disrupt healthy traffic if the resemblance is misleading. A transient improvement may leave the actual source of the incident unexplained.

Mitigation urgency matters, but record what supports the cache hypothesis and verify the result against the affected population.

## Expose a debugging assumption

Revisit a familiar incident diagnosis and turn one intuition into a comparison another engineer could repeat.

- Observed symptom
- Alternative explanation
- Query that distinguishes the two
