# Chapter 12: Transactional Sagas

*Pip’s adventure: The parcel saga needs a recovery path. Fictional teaching story; concepts follow the cited source.*

Source: text lines 7312–8356.

Pip’s delivery spans stock, payment, and notification without one local transaction. The crew compares communication, consistency, and coordination rather than choosing a saga by its name. Explicit states keep retries and compensation visible when part of the journey fails.

## Eight combinations

Pip lays out eight saga combinations before choosing one. Communication is synchronous or asynchronous, consistency atomic or eventual, coordination orchestrated or choreographed. Epic selects synchronous, atomic orchestration; Anthology selects asynchronous, eventual choreography. Changing one dimension changes downstream trade-offs; the names summarize choices rather than replace analysis.

Source: text lines 7328–7418.

## Epic Saga

Pip’s Epic mediator updates stock and payment, then shipping fails. Synchronous calls and atomic consistency require compensating earlier updates. The orchestrator gives familiar semantics and a clear owner. Pip also accepts timing bottlenecks, database restrictions, failure modes, and low elasticity: distributed atomicity is expensive.

Source: text lines 7420–7506.

## Phone Tag

Pip removes the mediator but keeps synchronous calls and atomic consistency. In Phone Tag, a front controller starts the chain and participants carry compensation logic. A failure sends synchronous corrective requests back through services. Pip limits this pattern to simple workflows because semantic and failure-path complexity grows quickly.

Source: text lines 7508–7586.

## Eventual consistency

Pip relaxes global atomicity while keeping local transactions. Fairy Tale uses synchronous orchestration and can defer a change while a participant recovers. Time Travel uses synchronous choreography for one-way flows, leaving state and errors to services. Pip trades immediate global agreement for design freedom, not freedom from recovery.

Source: text lines 7588–7732.

## Asynchronous atomicity

Pip overlaps workflows Alpha, Beta, and Gamma while demanding atomic results. Asynchronous Fantasy Fiction requires the orchestrator to track undo, races, dependencies, and out-of-order responses. Horror Story adds choreography and distributes those difficulties. Pip checks entangled workflows: isolated performance gains can disappear under atomic coordination.

Source: text lines 7734–7876.

## Parallel Saga

Pip’s Parallel Saga sends independent enrichment requests without waiting synchronously. Asynchronous communication, eventual consistency, and orchestration permit parallel execution and local scaling. The mediator remains the visible owner of a complex workflow. Pip still designs retries, synchronization, and asynchronous error handling without a global transaction.

Source: text lines 7878–7950.

## Anthology Saga

Pip streams independent delivery records through local consumers. Anthology combines asynchronous communication, eventual consistency, and choreography for low coupling and high throughput. Participants own context, errors, retries, and eventual correction. Pip favors simple or infrequently failing flows because complex recovery can make distributed logic difficult to operate.

Source: text lines 7952–8024.

## State machines

Pip resumes a delivery from FULFILLMENT_PENDING instead of starting over. A saga state machine records progress and drives retries or manual correction toward a valid outcome. NEW, PAYMENT_DONE, and COMPENSATING distinguish different recovery actions. Pip assigns state ownership as a coordination decision while local transactions commit separately.

Source: text lines 8026–8356.

## Transfer challenge: Process a high-volume order

A retailer must accept orders, reserve stock, authorize payment, and notify customers. Order volume is spiky, payment and stock services have different response times, and operators need to resume failed workflows. The business accepts a short period of eventual consistency if customers receive clear status. Choose a saga shape that matches complexity and throughput.

### Parallel saga

Orchestration gives one workflow owner while asynchronous local transactions allow parallelism and independent scaling. The mediator and state machine must handle retries, timing, and corrective actions. Stock and payment requests run concurrently. A payment timeout leaves a visible pending state and a retry path rather than blocking every other order in a global transaction.

### Epic saga

Synchronous atomic behavior resembles the business’s familiar all-or-nothing transaction. A slow or unavailable participant blocks the mediator and compensation can be difficult and expensive. The team gets immediate success or failure semantics, but peak traffic queues behind the coordinator and a shipping failure requires undoing earlier distributed writes.

The stated tolerance for eventual consistency and need for scale favor Parallel Saga. If legal or domain requirements truly demand atomic outcomes, the team must accept the corresponding coupling and test compensation boundaries.

## Score a saga matrix

For one workflow, write the communication, consistency, and coordination choice. Rate coupling, complexity, responsiveness, and scale, then describe one failure and its recovery state.

- Context
- Decision
- Trade-off
