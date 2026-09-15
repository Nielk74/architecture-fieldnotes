# Chapter 1: What Is Observability?

*Pip’s adventure: The market is green, one stall is broken. Fictional teaching story; concepts follow the cited source.*

Source: text lines 653–1279.

Pip’s night-market dashboard is green while one stall cannot take payments. Observability means being able to explain unexpected behavior from existing telemetry. Pip follows request identities and combined context instead of accepting a reassuring fleet average.

## Observable state

Pip receives a checkout complaint only involving one promotion and payment provider. Observability’s control-theory origin concerns inferring internal state from external outputs. For software, Pip asks whether existing telemetry can distinguish explanations without deploying new logging. A green status page cannot prove that ability.

Source: text lines 653–1279.

## Cardinality preserves identity

Pip groups requests by tenant and finds one completely unavailable stall. Cardinality counts distinct values: request IDs have many more than HTTP methods. Those identities can separate a broken experience from millions of healthy ones. Pip avoids discarding the very field needed to recover the interesting population.

Source: text lines 653–1279.

## Dimensionality preserves context

Pip’s new build is slow only in one region with one feature flag. Dimensionality counts attributes, not the distinct values of one field. Recording build, route, tenant, region, duration, and flags together preserves their combinations. Separate totals cannot reconstruct which conditions shared the same request.

Source: text lines 653–1279.

## Explorability is a capability

Pip filters slow requests, groups by build, then compares dependency calls. Each clue changes the next question. Explorability supports new filters, groupings, and comparisons quickly enough to sustain that reasoning loop. Prepared dashboards remain useful, but Pip must be able to move beyond them without first changing the application.

Source: text lines 653–1279.

## Transfer challenge: An invisible tenant outage

Fleet success is 99.9%, but one customer reports that every checkout fails.

### Inspect requests grouped by tenant

Finds whether failures concentrate in that customer’s population. Requires identity fields and careful access to request data. The investigation can separate this customer’s failures from healthy traffic.

### Raise the global success threshold

May detect a larger range of aggregate degradations. Still cannot explain which customer is affected. A stricter threshold may page again without resolving the customer-specific question.

An aggregate is a useful starting signal; identifying the affected population requires retained request context.

## Design an answerable question

Choose one customer complaint your dashboards cannot explain. Specify the request fields and comparisons that would make it investigable.

- Unexpected symptom
- Fields that preserve the combination
- First comparison and next question
