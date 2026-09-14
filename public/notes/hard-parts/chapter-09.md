# Chapter 9: Data Ownership and Distributed Transactions

Once data is decomposed, ownership must be explicit. Single ownership assigns writes to the service that naturally controls a table. Common ownership introduces a dedicated owner for a table used by several domains. Joint ownership occurs when multiple services write the same table (text lines 6039–6079). Read access does not by itself transfer ownership; write authority and integrity responsibility are the key questions.

The chapter offers four ways to resolve joint ownership. Table split restructures the table so each service owns a part, but requires migration and possibly synchronization. A shared data domain preserves joins and database constraints while broadening the bounded context. Delegation assigns one service as owner and routes another service’s updates through it. Service consolidation combines the services when the shared transaction or workflow outweighs independent deployment (text lines 6081–6259). The choice can be based on domain priority or operational characteristics, but it should be recorded rather than left implicit.

Local ACID transactions do not survive an arbitrary service boundary. A write can commit in one store and fail in another, leaving an inconsistent state (text lines 6287–6321). Eventual consistency is not an excuse to ignore the gap; it is a promise that requires a convergence mechanism and a clear user-facing state.

Background synchronization compares sources or consumes deltas in a scheduled process. It can be straightforward, but it couples the synchronizer to data sources and weakens bounded-context isolation (text lines 6323–6363). Orchestrated request-based coordination makes a sequence explicit through a coordinator. It offers visibility but concentrates workflow knowledge and creates difficult timeout and partial-failure handling (text lines 6389–6433). Event-based coordination publishes a change and lets subscribers react asynchronously. It improves decoupling, but demands durable delivery, idempotent consumers, replay, and lag monitoring (text lines 6447–6497).

The unsubscribe example makes the timing concrete: profile removal can return quickly while contract and billing converge later (text lines 6335–6341). An architecture decision record should name the owner, coordination pattern, consequences, and recovery behavior.

Teaching extension: model a two-service update. Mark the owner, local commit, message or request, retry policy, idempotency key, user-visible status, and repair signal. Ask what happens after every possible timeout. If the answer is “the database will roll back,” the boundary has not yet been designed.

The chapter’s resulting ownership example is deliberately mixed: Wishlist gets single ownership, Audit gets a dedicated common owner, and Product uses delegation from Inventory to Catalog (text lines 6264–6268). This is a useful reminder that one system may need several techniques. The correct choice depends on domain priority, operational characteristics, transaction needs, and the cost of widening a bounded context. An architecture decision record should make the choice and its consequences visible to future teams.

Consistency also has a product dimension. A pending status, delayed balance, or retriable operation should be understandable to users and support staff. The technical pattern is incomplete until the product language, observability, and repair ownership make temporary divergence visible and recoverable.
Support teams need clear ownership for every repair.
