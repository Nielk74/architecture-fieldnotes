# Chapter 10: Monitoring

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 157–165; text lines 5851–6150. References count literal newline-delimited lines in the supplied text.

## Overview

Monitoring helps teams decide whether a system is meeting the needs it promises to serve. This chapter introduces availability, the four golden signals, and the distinction between an indicator, an objective, and an agreement. It uses the Chubby example to show how accidental overdelivery can encourage fragile dependencies. The authors then imagine carbon metrics joining existing production monitoring, with explicit objectives and budgets alongside reliability. Observability adds the ability to investigate unfamiliar behavior in complex systems rather than relying only on predefined alerts. The chapter’s vision of standardized real-time carbon telemetry is aspirational in the supplied edition. Its practical lesson is to connect credible measurements to decisions, ownership, and service constraints.

## Key ideas

### Availability needs an explicit promise

A service’s observed availability and its promised service level are different. The Chubby story shows how exceptional uptime can teach consumers to rely on behavior beyond that promise. Higher reliability targets can require more resources and engineering. Choose service levels around user needs and ensure consumers can cope with the failures that remain within the stated contract. (Source: pp. 157–159.)

Teaching extension: A batch consumer retries safely instead of assuming its upstream service will never be unavailable.

### Use the four golden signals

Latency, traffic, errors, and saturation describe different aspects of service behavior. Together they help distinguish high demand, resource pressure, failed work, and slow responses. Carbon measurements gain context from these signals: an increase may reflect growth, retries, or altered allocation. Looking at a single utilization or emissions chart cannot reliably explain why a service changed. (Source: pp. 159–160.)

Teaching extension: An emissions increase accompanied by flat traffic and more errors prompts an investigation into repeated processing.

### Separate indicator, objective, and agreement

An SLI is a measured characteristic. An SLO sets a target for that characteristic over a defined period. An SLA is an agreement with service users. Error budgets describe the allowed deviation from an objective. These distinctions matter when sustainability objectives are proposed because a measurement alone does not define a threshold, response, or acceptable effect on customers. (Source: pp. 160–162.)

Teaching extension: The team distinguishes measured export completion time from the target that eligible exports finish before their deadline.

### Carbon budgets need operational rules

The authors propose adding credible carbon data to existing monitoring practices. Carbon and availability objectives can conflict, so decisions need an agreed policy and knowledge of remaining budgets. A high-carbon period is not permission to break a service promise. Their imagined real-time metric is a future-facing teaching device in the book, not proof that all necessary telemetry already exists. (Source: pp. 161–162.)

Teaching extension: A delayed export runs before its deadline when no cleaner slot remains, and the team records the carbon-policy exception.

### Observability explains unfamiliar behavior

Monitoring watches known signals and conditions. Observability supports asking new questions about internal behavior using external evidence. Merely collecting logs, metrics, and traces is insufficient if they cannot explain an incident. For sustainability, connecting a costly operation to request context can help locate waste that a preselected aggregate dashboard would hide. (Source: pp. 162–165.)

Teaching extension: A trace reveals that only one export format triggers repeated conversion calls, explaining an otherwise mysterious increase in compute.

## Misconceptions

### An SLO is just a graph of latency.

The graph is evidence. An objective also defines the acceptable result and evaluation window.

### Collecting all three telemetry types makes a system observable.

The evidence must support useful questions about behavior; storage alone does not provide an explanation.

## Decision practice — teaching extension

Teaching extension. An export service has a promised completion deadline and a proposed carbon target. Electricity is forecast to remain carbon intensive through the remaining window. The team can complete the full result now or offer a lighter alternative if the customer has accepted that option. It cannot silently change the promised result.

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
