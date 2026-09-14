# Chapter 23: Managing Critical State: Distributed Consensus for Reliability

Source: text lines 9889–10801 of the supplied book extract.

Critical shared state needs agreement despite crashes, delayed messages, and partitions. Heartbeats alone cannot distinguish a failed peer from an unreachable one, so informal failover can create competing leaders and corrupt data. Consensus protocols preserve safety while progress depends on enough communicating replicas. Replicated state machines turn agreement into useful services by executing deterministic operations in the same order. Paxos establishes agreement; Multi-Paxos uses a stable leader to reduce repeated coordination. Replicated stores, leases, queues, and leader election build on these foundations. Deployment then becomes a trade-off among quorum survival, geographical latency, resource cost, and client requirements. Monitor leadership, replica lag, committed progress, and durable-write latency, and retain independent backups because replication also reproduces operator mistakes.

## CAP, safety, and availability

During a network partition, a distributed system cannot both serve every node’s requests and guarantee one consistent view of critical state. Consensus chooses to preserve agreement, potentially pausing operations where a quorum is unavailable. Safety means conflicting decisions are not committed; liveness means decisions eventually advance. An asynchronous network cannot guarantee bounded progress, so operational redundancy and eventual communication are essential alongside protocol correctness.

## Replicated state machines and ordered operations

A replicated state machine applies the same deterministic operations in the same order at multiple replicas. Consensus establishes that order; execution turns it into a datastore, queue, configuration service, or coordination primitive. Replicas that missed decisions must catch up. Read semantics still matter: reading any replica may return stale state, while a strongly consistent read requires a mechanism establishing that its view is current.

## Paxos and stable-leader Multi-Paxos

Paxos reaches agreement through numbered proposals, persistent acceptor commitments, and overlapping majorities. Its protocol rules preserve previously accepted decisions as proposals advance. A single agreement becomes an ordered sequence through a higher-level replicated log. Multi-Paxos lets an established leader reuse its prepared leadership across operations, reducing normal coordination. Competing proposers can delay progress, so election timing, randomized backoff, and leadership stability affect availability.

## Quorum placement and operational trade-offs

A majority system with five replicas can proceed with three, tolerating two unavailable replicas if the survivors communicate and have sufficient capacity. Placing replicas in independent failure domains improves resilience but increases coordination latency. Stable leaders can bottleneck bandwidth, and losing a fast quorum member can increase latency even without losing availability. Track replica health, lag, leadership changes, and committed progress rather than assuming running processes imply a functioning service.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
