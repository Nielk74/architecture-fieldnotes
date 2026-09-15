# Chapter 11: Improvement Loops

*Pip’s adventure: The promising fix earns a rehearsal. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 9934–10987 in the supplied book.

Pip’s new routing rule looks better on a handful of requests. Before it controls museum actions, the team links feedback to traces, prioritizes consequential failures, and rehearses the candidate without live authority. A fix must survive both new evidence and old regression cases.

## Feedback pipelines

Pip receives complaints about wrong refund amounts. The feedback pipeline connects user reports, outcomes, traces, and evaluation results. Automation groups recurring causes; humans review ambiguous or high-impact cases. Pip turns reviewed evidence into a policy-context fix instead of an undifferentiated complaint count.

## Shadow experiments

Pip gives a candidate copies of real cancellation requests. Shadow mode compares proposed outcomes with the baseline without granting live authority. The candidate can call only an isolated test endpoint. Pip observes whether it helps before it may cancel a visitor’s ticket.

## Prioritization

Pip can fix wrong ticket selection or a rare awkward phrase. The team weighs frequency, severity, user value, confidence, and cost. The repeated harmful selection wins this round. Pip records the trade-off because improvement competes for limited engineering attention.

## Continuous evaluation

Pip’s revised policy prompt improves returns and breaks address changes. A fix can regress other behavior or overfit the latest failure. Pip combines a stable benchmark with newly discovered cases and reruns the full set. Release decisions follow overall evidence, not one repaired example.

## Teaching extension

A routing change appears better on a small offline sample.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
