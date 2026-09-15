# Chapter 10: Monitoring

*Pip’s adventure: The promise on the cinema door. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 157–165; text lines 5851–6150. References count literal newline-delimited lines in the supplied text.

## Overview

Pip’s carbon chart rises just as the cinema’s deadline approaches. Which promise takes priority? Monitoring connects measurements to service decisions: availability, latency, traffic, errors, and saturation give context, while an indicator, objective, and agreement do different jobs. The book’s Chubby story warns that exceptional uptime can create fragile expectations. Its proposed real-time carbon telemetry is aspirational in this edition, not universally available. Pip combines credible signals with explicit budgets, ownership, and service rules, then uses observability to investigate unfamiliar behavior instead of collecting charts without explanations.

## Key ideas

### Availability needs an explicit promise

The cinema’s export service has never missed a beat. A client quietly stops handling failures. Pip recognizes the trap in the book’s Chubby story: observed uptime can exceed the actual promise and teach consumers a fragile dependency. Higher reliability targets also cost engineering and resources. Pip agrees on service levels around user needs and restores safe retry behavior. Exceptional performance yesterday does not remove failures allowed by today’s contract. (Source: pp. 157–159.)

### Use the four golden signals

Carbon rises, but ticket traffic stays flat. Pip puts four signals beside the chart: latency, traffic, errors, and saturation. More errors suggest repeated processing worth investigating; they do not prove the cause. These signals separate demand, slowness, failed work, and resource pressure. Pip follows the evidence instead of trusting a single emissions or utilization graph. The context is what turns a changing number into a useful operational question. (Source: pp. 159–160.)

### Separate indicator, objective, and agreement

Pip hangs a latency graph beside a promise and realizes they are not the same object. An SLI measures a characteristic; an SLO sets a target over a defined period; an SLA is an agreement with users. An error budget expresses allowed deviation from an objective. The cinema must distinguish measured export time from its completion target. A carbon measurement alone likewise supplies no threshold, response, or acceptable customer impact. (Source: pp. 160–162.)

### Carbon budgets need operational rules

The last cleaner forecast window disappears. Pip cannot use a carbon target as permission to miss the screening. Carbon and availability objectives need an agreed policy, remaining budgets, and an owner for exceptions. Pip runs the promised export and records why shifting failed. The authors imagine credible carbon data joining production monitoring, but their standardized real-time metric is a future-facing teaching device—not evidence that all the required telemetry already exists. (Source: pp. 161–162.)

### Observability explains unfamiliar behavior

The dashboard says compute rose; it cannot explain why. Pip follows request context and finds repeated conversions only for one film format. Monitoring watches known signals and conditions; observability supports new questions about internal behavior using external evidence. Logs, metrics, and traces are not enough merely because they were collected. They must help explain an unfamiliar incident. Pip’s trace locates work that the aggregate chart concealed. (Source: pp. 162–165.)

## Misconceptions

### An SLO is just a graph of latency.

The graph is evidence. An objective also defines the acceptable result and evaluation window.

### Collecting all three telemetry types makes a system observable.

The evidence must support useful questions about behavior; storage alone does not provide an explanation.

## Decision practice — teaching extension

Pip’s export faces a fixed deadline and a proposed carbon target. Electricity stays carbon intensive through the remaining window. Pip can deliver the promised film now or use a lighter result only where the customer already accepted it. Silently changing the promise is not an option.

### Complete the promised result and record the exception

Preserves the existing service commitment. May exceed the proposed carbon target and require follow-up work. The team records why shifting was infeasible and investigates design changes or a future agreement that would create more flexibility.

### Use an agreed lighter result where permitted

Can reduce immediate work while meeting an explicitly accepted service mode. Requires a clear customer agreement and evidence that the lighter result remains useful. Only eligible requests use the lighter path. The team tracks quality, completion, and resource use rather than treating every request as interchangeable.

A useful policy makes conflicts explicit. Monitoring informs decisions; it does not authorize silently breaking an agreement.

## Transfer to your work — teaching extension

Define a tentative carbon objective for one workload and the operational decision it would support. State the measurement limitations and how service conflicts are handled.

- Indicator, target, and window: What is measured, what result is acceptable, and over what period?
- Service constraints and response: Who acts when the target is threatened, and which promises must still be met?
- Investigation evidence: What request context, traffic, error, and resource data will explain a change?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
