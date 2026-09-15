# Chapter 14: Event-Driven Architecture Style

*Pip’s adventure: An order is accepted before it is finished. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 179–209.

Pip’s bookshop accepts an order quickly, then discovers payment failed downstream. Events can improve responsiveness and extension, but the workflow still needs ownership, status, and recovery. Pip compares a reacting broker network with an explicitly coordinating mediator.

## Request or event

Pip asks for six months of order history, then places a new order. The first is a well-defined request; the second announces a situation downstream processors can react to. Synchronous orchestration favors certainty and control, while event-driven work favors responsive, scalable extension. Pip distinguishes the interaction itself, not simply whether a broker exists.

Source: pp. 179–180, 206.

## Broker topology

Pip publishes order-created and notification, payment, and inventory react. Broker channels connect initiating events, processors, and the processing events they publish. Topics support broadcast and back pressure; analytics can subscribe without changing publishers. Pip gains decoupling but no single component knows the whole workflow or when it is complete.

Source: pp. 180–184.

## Mediator topology

Pip’s order mediator pauses when an expired card blocks payment. It tracks state, sends commands through dedicated queues, waits for acknowledgments, and can resume from a completed step. Parallel work, persistence, domain-specific mediators, and appropriate orchestration tools support more complex flows. Pip accepts central workflow coupling and possible scale or performance limits for clearer control and recovery.

Source: pp. 185–195.

## Responsiveness is not performance

Pip’s comment post returns in 25 milliseconds while moderation takes 3,000. Fast acknowledgment improves responsiveness without necessarily shortening end-to-end processing. Rejected work still needs notification or status; acceptance is a promise, not completion. Pip uses correlation IDs for request-reply queues, or accepts the broker overhead of temporary reply queues.

Source: pp. 195–196, 203–206.

## Repair, ordering, and delivery

Pip’s error processor normalizes “8756 SHARES” and resubmits the record. Repair or human escalation can disrupt order, so related account messages may need a temporary FIFO hold. Persistent queues, synchronous send, client acknowledgment, ACID persistence, and final queue acknowledgment address loss windows. Pip still handles duplicates idempotently; durability alone does not guarantee exactly one effect.

Source: pp. 197–202.

## Characteristics and hybrid use

Pip adds analytics and audit subscribers to price events without changing the publisher. Broker and mediator flows can coexist, often improving scale, performance, fault tolerance, and evolution. Dynamic event trees reduce simplicity and testability, while shared data or request-reply coupling can still bind one quantum. Pip pays that complexity only where responsiveness and adaptability justify it.

Source: pp. 203–209.

## Transfer challenge: Order events with an expired card

An online bookstore wants immediate order acknowledgement during traffic spikes. Notification, inventory, and payment can often proceed independently, but an order must not ship until payment is accepted. The team also needs a clear response when a card is expired and must decide whether to optimize for maximum throughput or controlled recovery with no forced synchronous page during a major sale window.

### Broker topology

Independent processors run in parallel, scale separately, and new subscribers can observe published events without changing existing senders. No central owner knows workflow completion; payment failure can leave inventory changed and makes restart and compensation difficult. The customer receives an order ID quickly and notification and inventory proceed beside payment. A denied payment needs explicit compensating events and operational repair because fulfillment cannot infer the whole state.

### Mediator topology

A mediator tracks steps, waits for acknowledgements, pauses on payment failure, and resumes after the card is repaired. The mediator adds coupling, state management, and a possible throughput bottleneck, reducing the broker's maximum parallelism. Inventory and notification can run in parallel, but shipping is held until all required acknowledgements arrive. The persisted workflow can restart at fulfillment after payment succeeds and the card is repaired.

Choose the broker when decoupling, scale, and dynamic extension dominate; choose the mediator when a business workflow needs control, recovery, and a known completion state. A hybrid can use both for different parts of the process.

## Name the promise your event makes

Design one event flow and state what is acknowledged immediately, what outcome arrives later, how a failure is repaired, and which ordering key must be preserved.

- Context
- Decision
- Trade-off
