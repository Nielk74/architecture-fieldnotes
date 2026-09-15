# Chapter 23: Managing Critical State: Distributed Consensus for Reliability

*Pip’s adventure: Two sides cannot both own the same lock. Fictional teaching story; concepts follow the cited source.*

Source: text lines 9889–10801.

Pip’s booking coordinator splits across a network partition. Preserving one agreed critical state may require some nodes to stop accepting work. Consensus, ordered operations, stable leadership, and carefully placed quorums make that trade-off explicit.

## CAP, safety, and availability

Pip’s minority partition wants to assign its own lock owner. During a partition, serving every node conflicts with one consistent view of critical state. Consensus preserves safety by refusing conflicting commits, potentially pausing without a quorum; liveness concerns eventual progress. Pip still needs eventual communication and redundancy because an asynchronous network cannot guarantee bounded progress.

Source: text lines 9889–10801.

## Replicated state machines and ordered operations

Pip gives replicas the same balance updates in different orders and gets different outcomes. A replicated state machine needs deterministic operations applied in the same agreed order. Consensus establishes that order; missed decisions need catch-up. Pip also defines reads: any replica may be stale, while strong reads need a mechanism establishing currentness.

Source: text lines 9889–10801.

## Paxos and stable-leader Multi-Paxos

Pip’s coordinator uses numbered proposals, persistent acceptor commitments, and overlapping majorities. Paxos preserves prior accepted decisions as proposals advance; a higher-level log orders repeated agreements. Stable-leader Multi-Paxos reuses established leadership for normal operations. Pip monitors elections, randomized backoff, and competing proposers because safe decisions alone do not ensure timely progress.

Source: text lines 9889–10801.

## Quorum placement and operational trade-offs

Pip places five replicas across independent sites. Three communicating survivors can tolerate two unavailable replicas if they have capacity. Distance and losing a fast quorum member can increase latency; a leader may bottleneck bandwidth. Pip tracks health, lag, leadership changes, and committed progress instead of equating running processes with a functioning consensus service.

Source: text lines 9889–10801.

## Transfer challenge: Choose coordination for critical state

A leader election service loses a node during a zone network partition. Clients must avoid two writers accepting conflicting configuration.

### Use a consensus protocol with explicit failure assumptions

A quorum rule protects consistency during node loss. Unavailable writes are a deliberate availability cost. The system rejects writes without quorum and repairs membership after the partition.

### Let each zone continue writing independently

Each zone keeps serving without waiting for quorum. Divergent state requires difficult reconciliation and may corrupt consumers. Both zones progress, then disagree about the authoritative value.

Preserving one configuration history requires a quorum and safe leadership, not independent writers in each partition. The side without a quorum pauses writes; restored replicas catch up before participating normally.

## Place a consensus quorum

Plan a five-replica configuration service across failure domains. Explain which failures preserve progress and what clients observe when no quorum is reachable.

- Placement
- Client semantics
- Operational evidence
