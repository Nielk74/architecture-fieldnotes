# Chapter 7: Scope of Architecture Characteristics

*Pip’s adventure: The database still sets the limit. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 91–98.

Pip adds bookshop application instances and discovers the database remains the bottleneck. Architectural qualities must be evaluated across the dependencies that determine them. Quanta, synchronous waiting, and bounded contexts help Pip find the right scope.

## Why scope narrows

Pip scales the catalog application while its single database runs out of connections. An elastic or fast codebase cannot meet goals its dependencies prevent. System-wide averages and code-only measures can both hide the relevant constraint. Pip scopes characteristics around actual coupling and failure impact, especially for operational evolution.

Source: pp. 91–92.

## Architecture quantum

Pip’s order service waits synchronously for tax calculation. The chapter defines a quantum as an independently deployable artifact with high functional cohesion and synchronous connascence, including required infrastructure. Its purposeful workflow and waiting dependencies must have compatible operational qualities. Pip uses the quantum as a reasoning scope, not merely a process label.

Source: pp. 92–93.

## Synchronous and asynchronous

Pip’s auction burst reaches payment, which handles one transaction every 500 milliseconds. Synchronous waiting couples scale, latency, and reliability into timeout chains. A queue can buffer rate differences and change the operational scope. Pip also defines pending status, retries, and reconciliation instead of treating asynchronous delivery as free decoupling.

Source: pp. 92–94.

## Bounded contexts

Pip tries to share one Customer class between reputation and payment. A bounded context keeps its domain model meaningful inside and opaque outside. Each workflow can represent a participant differently and reconcile at an explicit integration point. Pip exchanges needed data instead of coupling every context to every internal field.

Source: pp. 93–94.

## Auction quanta

Pip studies Going, Going, Gone before adding a rare-book auction. Feedback needs fast, available scale; auctioneer capture adds especially strong reliability, ordering, security, and elasticity; bidders need reliable elastic access. Distinct profiles can justify separate quanta and a hybrid architecture. Pip protects authoritative capture differently from thousands of read streams.

Source: pp. 94–98.

## Transfer challenge: Give an auction three operating profiles

An online auction has one authoritative auctioneer, hundreds or thousands of bidders, and a live bid/video feedback stream. Bids must be ordered; bidder views should scale elastically; the auctioneer cannot lose the connection during a live sale. Payment processing is slower than auction completion bursts. Decide where to draw operational boundaries and which link should buffer demand.

### One synchronous quantum

A single transaction path simplifies ordering and consistency reasoning across auction, bidder, and payment behavior. The slowest dependency constrains the whole unit, and scaling a bursty bidder view may force the authoritative path to scale and deploy with it. The system keeps a shared deployment and blocking calls. When many auctions end together, payment latency propagates into auction operations unless capacity is over-provisioned or work is delayed.

### Split by workflow

Auctioneer capture, bidder access, feedback, and payment can receive different availability, scale, and elasticity targets; queues absorb bursts. Ordering, data ownership, observability, and eventual processing require explicit contracts and operational coordination. The auction records ordered bids, publishes feedback, and enqueues payment work. Bidder traffic scales independently while the team monitors reconciliation and delayed payment outcomes.

The quantum is a reasoning boundary, not a promise that distributed systems are always better. If one set of qualities suffices, a monolith may be simpler. Different profiles and synchronous bottlenecks justify finer boundaries and possibly asynchronous links.

## Mark your quality boundaries

Choose a system with at least two workflows. Draw or describe the independently deployable units, name one synchronous dependency, and decide whether an asynchronous boundary would change a key trade-off.

- Context
- Decision
- Trade-off
