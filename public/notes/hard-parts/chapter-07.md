# Chapter 7: Service Granularity

*Pip’s adventure: How small should a delivery service be?. Fictional teaching story; concepts follow the cited source.*

Source: text lines 4927–5479.

Pip splits every noun into a service and each parcel crosses a maze of calls. The crew compares reasons to separate with reasons to reunite, using table access, change history, and complete workflows to find useful boundaries.

## Disintegrator drivers

Pip’s assignment algorithm changes weekly while archive reporting changes quarterly. Weak cohesion, different change rates, throughput, scale, availability, security, access, or extension needs can favor splitting. One deployment quantum may be forcing unrelated decisions together. Pip treats these drivers as evidence to investigate, not automatic instructions to create services.

Source: text lines 4999–5121.

## Integrator drivers

Pip’s two services must edit the same customer record atomically. Shared code, tables, and long workflows can demand more coordination than independence repays. A service boundary removes the single ACID transaction across those operations. Pip considers consolidation until an explicit consistency strategy makes separation worthwhile.

Source: text lines 5131–5171.

## Use change evidence

Pip compares six delivery functions with their tables and commit history. Assignment and routing always change together. Ownership, release cadence, and fitness functions add evidence about the real change boundary. Pip keeps meaningful changes understandable and locally manageable rather than adding calls without reducing coordination.

Source: text lines 5187–5273.

## Workflow pressure

Pip traces registration through identity, profile, billing, and notification. Each synchronous hop adds latency, partial-failure paths, and possible intermediate state. Consolidating tightly coupled steps can improve responsiveness and transactional safety. Pip evaluates the whole operation while leaving optional notifications asynchronous.

Source: text lines 5121–5165, 5395–5452.

## Transfer challenge: Split ticket assignment

A support service handles ticket assignment, expert routing, notifications, and audit history. Assignment rules change often, notifications have bursty throughput, and audit records require durable retention. The team can split one boundary this quarter but must keep response latency predictable and avoid a distributed transaction for the core assignment decision.

### Split rules

Assignment logic gets an independent change boundary and can scale with rule evaluation load. A synchronous call adds latency and introduces an availability dependency during assignment. The assignment service calls a rules service with a versioned contract. If rules are unavailable, a tested fallback or queue is required, and the team measures decision latency and failure behavior.

### Split audit

High-volume retention and storage concerns leave the transactional assignment path smaller. Audit publication becomes asynchronous and operators must handle delayed or lost events. Assignment stays cohesive and commits its decision locally, then emits an audit event. The audit service scales separately, with replay and monitoring for delivery gaps.

The best split follows the strongest independent pressure. Rules optimize change control but add synchronous risk; audit optimizes storage and throughput but requires reliable events. Fitness functions should test the chosen boundary against its stated priority.

## Write a granularity case

Choose one service and make a boundary proposal. Map its functions, data, change cadence, scale profile, security rules, and cross-service workflow before recommending a split or consolidation.

- Context
- Decision
- Trade-off
