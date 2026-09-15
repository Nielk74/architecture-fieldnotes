# Chapter 8: Reuse Patterns

*Pip’s adventure: The shared helper becomes everybody’s problem. Fictional teaching story; concepts follow the cited source.*

Source: text lines 5480–6002.

Pip wants every island service to reuse a helpful capability. Copies, libraries, services, and sidecars each move the maintenance and coupling costs somewhere different. Pip asks which behavior is truly shared before creating a platform dependency.

## Replicate code

Pip copies a tiny stable validation rule into each delivery service. Replication preserves deployment and runtime independence and allows legitimate local tailoring. A security fix now has to reach every copy. Pip accepts duplication only with maintenance checks; rules requiring identical correctness are dangerous candidates for semantic drift.

Source: text lines 5518–5588.

## Share libraries

Pip’s broad helper library forces unrelated rebuilds after an authentication change. Coarse libraries reduce dependency count; fine-grained ones narrow change impact but add version management. Versioning can ease synchronized releases without removing static coupling. Pip assigns ownership and compatibility policy to the shared package.

Source: text lines 5593–5659.

## Share services

Pip centralizes currency conversion behind a service. One runtime implementation can change independently, but every caller pays network and security latency. The converter must scale with dependents and can spread outages or incompatible responses. Pip defines timeout, fallback, and version behavior before putting it on the delivery payment path.

Source: text lines 5663–5721.

## Sidecars and mesh

Pip places an operational proxy beside each service. Sidecars and a service mesh can standardize traffic, security, and observability while keeping domain code focused. Mutual TLS and retries still bring policy, deployment, configuration, and debugging complexity. Pip adopts the layer for a repeated platform problem, not decoration.

Source: text lines 5759–5795.

## Reuse via platforms

Pip notices that dispatch and billing mean different things by customer. A stable identity platform can share authentication without centralizing both domain models. Reuse pays when an abstraction changes slowly relative to consumers and represents genuinely common behavior. Pip records the coordination and operational dependencies along with the saved code.

Source: text lines 5891–5987.

## Transfer challenge: Reuse an authorization rule

Six services need authorization checks. The rule is currently stable but regulated changes are expected twice a year. Services deploy independently across regions, and an authorization outage must not take down read-only browsing. Choose a reuse technique that balances consistency, latency, and operational independence.

### Shared service

One implementation receives regulatory fixes and produces consistent decisions. Every request adds network dependency, latency, and an outage mode. Services call a versioned authorization API with cached safe reads and explicit fail-closed rules for protected actions. Platform operations must scale and monitor the service globally.

### Versioned library

Checks run locally with no runtime hop and remain available during network incidents. Six services must adopt releases and may temporarily run different rule versions. A focused library is published with compatibility tests and a rollout deadline. Browsing stays independent, while the platform tracks version drift until all services upgrade.

The slower change rate favors reuse, but runtime and compile-time coupling differ. Security-critical behavior may justify central runtime policy; availability-sensitive paths may prefer local code with disciplined version governance.

## Choose a reuse boundary

Take one capability used by at least three services. Compare replication, library, shared service, and sidecar options against its change rate, latency, failure, security, and ownership needs.

- Context
- Decision
- Trade-off
