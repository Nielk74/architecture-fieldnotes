# Chapter 11: Managing Distributed Workflows

*Pip’s adventure: Who knows where the delivery got stuck?. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6856–7311.

Pip’s parcel is paid for but cannot ship. A coordinator can own the recovery, or participants can exchange corrective messages. Either way, the business dependencies remain, and somebody must make workflow status understandable.

## Orchestration

Pip asks a delivery orchestrator where the parcel stopped. It owns workflow-specific state, calls, optional paths, errors, retries, and notifications—not every enterprise integration. A backorder triggers payment compensation and a status update. Pip gains visible recovery while accepting a bottleneck, failure point, and coupling to participants.

Source: text lines 6880–6950.

## Choreography

Pip follows order, payment, fulfillment, and email events without a mediator. Each choreographed participant performs a local step and triggers another. A backorder now needs corrective links to payment, email, and order placement. Pip counts failure-path knowledge too: enough links can recreate a distributed mediator.

Source: text lines 6951–7008.

## Semantic coupling

Pip redraws delivery assignment across technical layers, but its dependencies remain. Skills, schedules, and locations are inherent semantic coupling in the business workflow. Topology cannot eliminate those required relationships. Pip groups the domain workflow to avoid adding accidental coordination across persistence, rules, and presentation.

Source: text lines 7009–7060.

## Workflow state

Pip asks for status in a choreographed delivery. A front controller stores progress but adds pseudo-mediation and chatter. Stateless queries reconstruct a snapshot with latency; stamped messages carry state with larger contracts and no single status owner. Pip chooses where transient state lives before an operator needs to find it.

Source: text lines 7061–7145.

## Transfer challenge: Coordinate ticket assignment

A support platform must accept a ticket, match skills, check schedules, assign an engineer, and report status. Matching rules change often, failures need clear recovery, and operators want to query progress. Traffic is moderate today but may grow. Choose a coordination style while accounting for error paths and the cost of putting workflow knowledge in domain services.

### Workflow orchestrator

One component owns progress, retries, alternate paths, and a status view. The mediator adds coupling, a throughput chokepoint, and a workflow failure concern. A failed schedule lookup is retried and then routed to an explicit exception state. Operators query one workflow record, while the team monitors mediator load and availability.

### Service choreography

Services can process the normal chain without a central coordinator and avoid one workflow bottleneck. Each participant must understand failure notifications, state reconstruction, and compensation. Skill matching emits a schedule request and later events complete assignment. A partial failure requires several services to publish corrective events, increasing operational investigation work.

The number of alternate paths and the need for an authoritative status view favor orchestration here. A simpler, high-throughput chain with rare errors could justify choreography. The domain semantics remain the same in either design.

## Map both workflow paths

Draw the happy path and two failure paths for a multi-service workflow. Compare orchestration and choreography, then record who owns transient state and how an operator queries it.

- Context
- Decision
- Trade-off
