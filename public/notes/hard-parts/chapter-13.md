# Chapter 13: Contracts

*Pip’s adventure: The manifest carries too much. Fictional teaching story; concepts follow the cited source.*

Source: text lines 8357–8721.

Pip sends a whole customer dossier when the next service needs only a name. Contracts can be strict or loose, but both need intentional scope. Consumer expectations and build checks help the delivery network evolve without making every internal change everybody’s problem.

## Contract spectrum

Pip must agree what a delivery message means before choosing its transport. Strict contracts govern names, types, ordering, and required details; loose forms allow flexible values or resources. The choice affects coupling, evolution, verification, documentation, and application logic. Pip chooses technology after the contract, not the other way around.

Source: text lines 8370–8432.

## Strict contracts

Pip’s typed shipment contract catches an invalid quantity during CI. Strict agreements provide fidelity, documentation, versioning, and build-time verification. A shared contract change can still force coordinated consumer and provider changes. Pip limits version sprawl before compatibility support becomes its own integration burden.

Source: text lines 8388–8408; 8460–8508.

## Loose contracts

Pip sends customer name and status without exposing the full internal model. Loose name/value contracts let services and technology evolve independently. Consumers still depend on meaning and required information. Pip handles missing fields, spelling, types, validation, and governance rather than confusing flexibility with no coupling.

Source: text lines 8441–8457; 8515–8554.

## Consumer-driven checks

Pip’s wishlist needs only a display name from Profile. The consumer specifies required fields and behavior instead of accepting a provider-pushed universal contract. Profile runs that expectation in its build or deployment checks alongside other consumers’ needs. Pip gains fidelity with looser coupling, paying for two cooperating mechanisms and engineering discipline.

Source: text lines 8557–8648.

## Stamp coupling

Pip sends an entire profile for one name and breaks a consumer after an unrelated field change. Stamp coupling passes large structures whose recipients use small portions. A genuine standard itinerary may justify carrying the whole document. Pip otherwise uses need-to-know contracts to reduce bandwidth and accidental change coupling.

Source: text lines 8649–8721.

## Transfer challenge: Share a customer profile

A profile provider serves wishlist, billing, and support teams. Wishlist needs only a display name; billing needs address fields; support needs contact preferences. Teams deploy independently and the provider’s internal model changes frequently. Decide how to keep consumers reliable while avoiding a single oversized agreement.

### Consumer contracts

Each consumer governs only the fields it needs and the provider verifies them continuously. Teams must maintain contract tests and disciplined CI across several agreements. A profile refactor preserves Wishlist because its name contract remains green. Billing can evolve its address expectations separately, with failures visible before deployment.

### Strict shared schema

One explicit versioned schema gives strong fidelity, documentation, and build-time validation. All consumers inherit coupling to schema changes and must manage version retirement. The provider catches invalid responses early, but adding an unrelated preference field or changing an address type requires coordinated version planning across consumers.

Consumer-specific contracts fit different needs and independent evolution. A strict shared schema is reasonable where exact fidelity and common governance outweigh change coupling; scope and maturity decide the balance.

## Write a bounded contract

Choose one provider and three consumers. Define the minimum fields each needs, identify one strict rule, and specify the fitness check that catches a breaking provider change.

- Context
- Decision
- Trade-off
