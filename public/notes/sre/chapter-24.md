# Chapter 24: Distributed Periodic Scheduling with Cron

Source: text lines 10802–11198 of the supplied book extract.

Moving cron from one machine to a distributed service introduces a difficult question: after a failure, did a scheduled job actually launch? Different jobs tolerate missed or duplicate launches differently, and irreversible side effects make duplication especially dangerous. Google’s design uses replicated scheduler state and one elected leader, which records launch boundaries synchronously before and after contacting the datacenter scheduler. Each occurrence has an identity including its scheduled time. A successor can reconcile unfinished launches only if external operations are idempotent or their outcomes can be inspected reliably. Replication and snapshots preserve scheduling state, while limited dependencies support availability. Reliable scheduling therefore requires more than a calendar and failover; it requires explicit semantics for partially completed work.

## Launch semantics and idempotency

An idempotent operation can be repeated without changing the intended result beyond its first successful execution. Some periodic jobs tolerate both repetition and an occasional omission; others, such as sending a newsletter, cannot safely run twice. The scheduler must understand which risk matters. The chapter generally prefers a missed launch over an ambiguous duplicate, with job owners monitoring outcomes and choosing appropriate recovery.

## Synchronous replicated launch state

Only the elected leader launches jobs. Before contacting the external scheduler, it synchronously records the beginning of a particular launch through consensus; afterward it records completion of the launch attempt. Followers retain enough state to identify unfinished work after failover. The old leader must stop interacting with the scheduler when leadership ends, or two leaders could act on the same occurrence.

## Reconciling partial external operations

Replicating an intention does not make its external side effect atomic. A leader can crash after submitting a job but before recording success. Recovery therefore needs idempotent operations or a reliable way to inspect their outcomes. Precomputed job names containing the scheduled occurrence allow the successor to find completed or running work and launch only the missing pieces.

## State durability and dependency design

A replicated operation log preserves recent scheduler decisions, while snapshots compact accumulated history and make reconstruction practical. The design stores small critical state with the cron service and protects snapshots separately, reducing reliance on general-purpose storage during normal operation. Replica placement must cover relevant failure domains, and recovery speed matters because a technically successful but late failover can still miss frequent schedules.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
