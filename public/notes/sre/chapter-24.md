# Chapter 24: Distributed Periodic Scheduling with Cron

*Pip’s adventure: Did the nine o’clock job already start?. Fictional teaching story; concepts follow the cited source.*

Source: text lines 10802–11198.

Pip’s scheduler leader disappears after submitting a report. A replacement must distinguish missing work from an ambiguous duplicate. Replicated launch state, identifiable occurrences, and inspectable external outcomes matter because recording intent cannot make an external action atomic.

## Launch semantics and idempotency

Pip safely repeats cleanup but must not send the harbor newsletter twice. Idempotency means repetition adds no unintended effect beyond the first successful execution. Jobs differ in tolerance for duplicates and omissions; the chapter generally prefers a missed launch over an ambiguous duplicate. Pip assigns outcome monitoring and recovery choices to job owners.

Source: text lines 10802–11198.

## Synchronous replicated launch state

Pip’s elected leader records a launch beginning through consensus before contacting the external scheduler. It records completion of the attempt afterward, leaving followers enough state for failover. A replacement sees an unfinished 09:00 occurrence. Pip ensures the old leader stops external interaction when leadership ends so two leaders cannot launch it.

Source: text lines 10802–11198.

## Reconciling partial external operations

Pip’s leader crashes after submitting report-0900 but before recording success. Replicated intent does not atomically cover an external side effect. The successor needs idempotency or reliable outcome inspection. Pip uses a precomputed occurrence-specific name to find running or completed work and submit only missing pieces.

Source: text lines 10802–11198.

## State durability and dependency design

Pip restores scheduling from a snapshot plus later log entries. The replicated log preserves recent decisions; snapshots compact history for practical reconstruction. Small critical state stays with cron and snapshots receive separate protection, reducing normal dependence on general storage. Pip checks failure-domain placement and recovery speed because late failover can still miss frequent jobs.

Source: text lines 10802–11198.

## Transfer challenge: Reconcile a billing launch

A scheduler leader submits the 09:00 billing job, then fails before recording completion. The external scheduler can look up jobs by a unique occurrence identifier.

### Look up the recorded occurrence before continuing

The successor can distinguish existing work from a missing submission. External outcome lookup must be reliable and include completed jobs. The new leader finds billing-0900 and avoids submitting that occurrence again.

### Submit again whenever completion is missing

This quickly covers submissions that genuinely never happened. A missing local completion record does not prove no external job ran. The same billing occurrence may execute twice and produce duplicate effects.

A durable schedule is insufficient when submission can succeed just before the leader fails. Identify each occurrence and reconcile the external result; a concurrency lock alone does not prevent a completed billing run from being charged again later.

## Recover an ambiguous launch

A scheduler leader fails after submitting a recurring job but before logging completion. Describe the evidence its successor needs before acting.

- Occurrence ID
- Replicated state
- Reconciliation
