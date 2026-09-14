# 1. What Is Observability?

Ask questions you did not know to prepare

Observability describes what engineers can learn from a running system, rather than a collection of installed products. Modern applications produce failures through interactions among users, versions, dependencies, and infrastructure; those combinations cannot all be predicted before deployment. The chapter therefore makes exploratory analysis a requirement. Request-level records must retain enough dimensions and distinct values to let investigators narrow an unfamiliar symptom into a specific population. Metrics, logs, and traces may contribute evidence, but their presence alone says little about which questions remain answerable. The practical test is whether an engineer can explain an unexpected state using existing telemetry, without first modifying the application to capture the missing clue.

## Observable state

The control-theory origin concerns inferring internal state from external outputs. Applied to software, the useful question is whether existing telemetry lets you explain unexpected behavior. A green status page cannot establish this ability. Try investigating an unfamiliar customer complaint and notice whether you must deploy additional logging before you can distinguish competing explanations.

## Cardinality preserves identity

Cardinality counts the distinct values a field can hold. A request identifier has many more possible values than an HTTP method. Those identifying values can be exactly what separates one broken customer experience from millions of healthy ones. Removing them to fit an aggregation scheme can make the interesting population impossible to recover later.

## Dimensionality preserves context

Dimensionality concerns how many attributes describe an event, not how many values one attribute takes. A request might record its build, route, tenant, region, duration, and feature flags. Keeping these together permits questions about their combinations. Separate totals for each attribute cannot reliably reconstruct which conditions occurred on the same request.

## Explorability is a capability

Useful investigation moves through questions that change as evidence arrives. The system must support new filters, groupings, and comparisons quickly enough to maintain that reasoning loop. A large dashboard library covers prepared questions; explorability lets the investigator follow a clue beyond that library without changing the deployed application first.

## Apply it

Choose one customer complaint your dashboards cannot explain. Specify the request fields and comparisons that would make it investigable.

Source: *Observability Engineering*, chapter 1; supplied text lines 653–1279. These notes are an original synthesis; examples and activities are illustrative.
