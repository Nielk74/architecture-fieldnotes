# Chapter 9: Data Ownership and Distributed Transactions

*Pip’s adventure: Who is allowed to change the parcel record?. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6003–6556.

Pip finds two services overwriting the same delivery data. The crew assigns mutation ownership before tackling distributed consistency. A successful local commit cannot guarantee that every other service has caught up; status, durable signals, and repair make that gap explicit.

## Assign an owner

Pip finds Catalog and Inventory both editing product descriptions. Ownership primarily assigns mutation authority and integrity responsibility; reading is a separate concern. A single owner defines a bounded context, while common data may justify its own service. Pip resolves joint writers deliberately rather than calling the shared table everybody’s responsibility.

Source: text lines 6039–6079, 6264–6268.

## Resolve joint writes

Pip compares four ways to resolve the competing writes. Table splitting separates fields or records; a shared data domain keeps constraints inside a broader context. Delegation routes writes through one owner chosen by domain or operational needs. Consolidation reunites services when shared workflow or transaction requirements outweigh independent deployment.

Source: text lines 6081–6259.

## Local versus distributed

Pip removes a delivery profile, then billing fails to update. A local transaction can atomically commit or roll back its writes; remote services make separate commits. Pip states which temporary inconsistency is acceptable and exposes pending status. Durable signals, retries, detection, and repair replace assumptions that a distributed boundary preserves ACID.

Source: text lines 6287–6321.

## Eventual consistency patterns

Pip publishes CustomerUnsubscribed for contract and billing consumers. Event-based consistency needs durable delivery, idempotency, ordering choices, and monitoring. Background comparison repairs copies but couples to schemas; request-based orchestration exposes sequence but complicates timeouts and partial failure. Pip chooses the pattern and records processing so an outage can be replayed.

Source: text lines 6335–6497.

## Transfer challenge: Unsubscribe across domains

A customer profile, support contract, and billing service each store subscription state. Customers expect the profile screen to confirm quickly, but billing must eventually stop charges. The services deploy independently and cannot share a database transaction. Choose a coordination pattern with a recoverable failure path.

### Orchestrate

One coordinator can track each response and show a workflow outcome. The coordinator accumulates coupling and must handle timeouts, retries, and partial completion. Profile calls Contract and Billing in sequence. A billing timeout leaves a visible pending state and demands durable workflow state plus compensating or retry behavior.

### Publish event

Subscribers remain decoupled and can process independently or replay after outages. The profile response precedes downstream completion, and correctness depends on durable delivery and idempotent consumers. Profile commits removal and publishes CustomerUnsubscribed. Contract and Billing consume it, expose lag metrics, and replay from the stream when a consumer falls behind.

The user-facing timing and failure model determine the choice. Orchestration offers immediate coordination visibility; events offer stronger decoupling. Either requires an explicit state model and recovery evidence.

## Define ownership and convergence

Model a workflow that updates data in two or more services. Assign table owners, choose orchestration or events, and specify retries, idempotency, user-visible state, and a repair signal.

- Context
- Decision
- Trade-off
