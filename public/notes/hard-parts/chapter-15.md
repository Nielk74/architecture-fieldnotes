# Chapter 15: Build Your Own Trade-Off Analysis

*Pip’s adventure: Pip must explain the choice. Fictional teaching story; concepts follow the cited source.*

Source: text lines 9079–9500.

Pip has a board full of architecture scores and no decision. The delivery crew needs comparable options, real domain cases, and a short account of accepted consequences. Experiments and fitness checks make the chosen risks observable after the meeting ends.

## MECE choices

Pip compares one queue with an entire integration platform and gets a misleading winner. Alternatives must be mutually exclusive and combinatorially exhaustive at a comparable scope. Pip lists meaningful messaging options without overlapping categories or omitting viable choices. A well-formed decision space makes later trade-offs honest.

Source: text lines 9100–9135.

## Find the context

Pip’s reusable library wins a generic scorecard until island teams require independent deployments and isolation. Context reveals capabilities the real solution must have. Pip narrows options with sample architectures and what-if questions. Fixing one influential dimension exposes which other choices remain possible.

Source: text lines 9136–9188.

## Model domain cases

Pip tests payment designs by changing cards, adding reward points, and combining payment types. Maintenance, extension, and complex domain workflows stress different architectural qualities. Separate services can improve extensibility while coordination harms performance and consistency. Pip uses those cases instead of assuming a generic matrix predicts the winner.

Source: text lines 9189–9248.

## Communicate the bottom line

Pip replaces a crowded scorecard with the decision stakeholders actually face. Synchronous approval guarantees initiation before the request ends; asynchronous submission improves responsiveness and survives coordinator downtime. The bottom line aggregates outcome-level benefits, costs, and assumptions without erasing nuance. Pip makes priorities reviewable rather than reciting every research detail.

Source: text lines 9249–9288.

## Test the choice

Pip accepts a shared repository but worries about cross-project imports. An objective fitness function rejects forbidden dependencies while build and repository metrics track consequences. Local experiments turn qualitative expectations into evidence about this ecosystem. Pip tests the chosen risk instead of defending the approach through evangelism.

Source: text lines 9289–9500.

## Transfer challenge: Choose a messaging topology

A bidding platform broadcasts bid changes to capture, tracking, analytics, and history consumers. Capture and tracking need independent scaling and access controls; analytics wants a broad stream; history may evolve its fields frequently. The team must choose between one shared topic and separate point-to-point queues, then explain the decision to operations and product stakeholders.

### Shared topic

Adding a new consumer is easy and one publication path supports broad extensibility. Consumers share a broad contract, data access, and operational profile; sensitive fields may reach every subscriber. History joins quickly, but a contract change or queue-depth policy affects unrelated consumers. The team must govern a large event shape and shared scaling behavior.

### Individual queues

Each consumer receives a tailored contract with separate security, monitoring, and scaling controls. The producer manages more routes and adding consumers requires explicit integration work. Tracking scales independently and history can evolve its fields. Operations gains clear queue metrics, while the team accepts more configuration and delivery paths.

The right answer depends on whether extensibility or heterogeneous contracts, security, and independent operations drive the decision. Scenario evidence makes those priorities visible instead of hiding them in a generic score.

## Build a decision record

Select one architecture decision. Create a MECE option list, name the context and drivers, model three domain scenarios, and state the bottom-line trade-off plus one fitness check.

- Context
- Decision
- Trade-off
