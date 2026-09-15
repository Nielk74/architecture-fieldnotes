# Chapter 19: Architecture Decisions

*Pip’s adventure: The decision keeps coming back. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 281–295.

Pip’s team debates the same cache choice every sprint because its reasoning lives only in email. A timely, focused architecture decision record preserves context, consequences, status, and governance. The next crew can then understand the choice before replacing it.

## Three Decision Traps

Pip postpones the cache decision until release is blocked, then repeats the debate every sprint. Covering Your Assets delays from fear; Groundhog Day loses justification; Email-Driven Architecture loses the durable record. Pip decides at the last responsible moment with collaboration and feedback. Timing, reasoning, and accessible communication address the connected traps.

Source: pp. 281–283.

## Architecturally Significant

Pip documents a broker choice but not every local variable name. Architecturally significant decisions shape structure, important nondomain qualities, dependencies, interfaces, or construction techniques. Technology qualifies when its effects constrain performance, scale, security, or other key needs. Pip focuses records on choices that shape other teams and future change.

Source: pp. 283–284.

## ADR Shape and Status

Pip opens a short ADR with Title, Status, Context, Decision, and Consequences. Compliance and Notes add governance and metadata; Proposed, Accepted, and Superseded show lifecycle. Timeboxed Request for Comments can invite review. When a later decision replaces it, Pip links the records so current behavior and historical reasoning remain visible.

Source: pp. 285–287.

## Context, Decision, Consequences

Pip records why review posting became asynchronous. Context names forces and alternatives; the affirmative decision explains why; consequences expose both benefits and costs. Responsiveness improved while moderation failure handling became harder. Pip preserves rationale that code cannot reliably reveal, preventing a tempting refactor from repeating an old mistake.

Source: pp. 287–289.

## Compliance and One Record

Pip’s new developer finds the layer-rule ADR and its executable check in one shared place. Compliance explains manual or automated governance; one file or page keeps each decision focused. Application, integration, and enterprise scopes may have separate shared organization. Pip uses the same discipline for standards so readers can understand and test a rule instead of forwarding old email.

Source: pp. 289–293.

## Transfer challenge: Record the service contract

An order service must send payment information to a payment service. Synchronous REST is straightforward, but asynchronous messaging could improve responsiveness and absorb bursts. The choice affects latency, error handling, interface contracts, and the teams that own both services. Write a decision that can survive a future refactor and make its approval boundary explicit.

### Synchronous REST

The caller receives an immediate result and the interaction is easier to implement and debug. The order flow waits on payment availability and may couple reliability and latency across the services. The ADR accepts a dependency on payment response time because the business needs immediate confirmation. A fitness check can protect the contract and timeout policy.

### Asynchronous messaging

The order request can return quickly and a queue can buffer uneven service capacity. The system needs pending states, failure handling, delivery semantics, and a clear user-facing status. The ADR accepts eventual processing to gain responsiveness and burst tolerance. It names how failed payments are surfaced and who owns retries, preventing later readers from assuming atomic behavior.

Either choice can fit. The valuable architecture work is stating the forces, business value, consequences, approval status, and compliance check in one durable record so the teams can implement and revisit it deliberately.

## Draft a compact ADR

Choose one structural or characteristic-affecting decision in a system you know. Write its forces, affirmative choice, technical and business justification, consequences, status, and one compliance check.

- Context
- Decision
- Trade-off
