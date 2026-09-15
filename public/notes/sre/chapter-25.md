# Chapter 25: Data Processing Pipelines

*Pip’s adventure: The next batch starts before the last one ends. Fictional teaching story; concepts follow the cited source.*

Source: text lines 11199–11531.

Pip shortens the harbor report schedule and creates overlapping work instead of fresher results. Pip investigates startup delays, stragglers, and shared-resource peaks, then uses explicit task state and leases so late workers cannot overwrite valid results.

## The periodicity limit

Pip schedules a twenty-minute computation every ten minutes. Resource acquisition, startup delay, processing, and stragglers must fit the interval. More frequent runs can overlap or repeatedly terminate nearly finished work. Pip considers continuous processing when the requirement is continuous freshness rather than pushing batch timing beyond its assumptions.

Source: text lines 11199–11531.

## Stragglers and synchronized resource demand

Pip’s report stage waits for one customer’s oversized shard. Partitioning does not guarantee equal runtime, and simultaneous workers can overwhelm dependencies. Different periodic jobs can align into larger shared-resource peaks. Pip measures progress even in unfinished runs before adding workers or retries that might worsen contention.

Source: text lines 11199–11531.

## Leases and immutable task identity

Pip’s stalled worker resumes after its lease expires. The Task Master permits commits only with a valid lease and referenced configuration. Unique output names prevent overwriting a successor, while a server token detects the wrong master. Pip may tolerate duplicate computation without accepting obsolete results.

Source: text lines 11199–11531.

## Durable coordination and continuity

Pip restores task coordination after a site stops reporting. The Task Master keeps in-memory state, journals changes durably, and stores pointers rather than whole datasets. A global workflow records reference tasks another local pipeline can claim. Pip may block without global coordination rather than acknowledge an unrecorded completion.

Source: text lines 11199–11531.

## Transfer challenge: A batch interval stops fitting

An hourly pipeline now takes seventy minutes including scheduling delay. A few large work units stall completion, and restarting a run discards completed computation.

### Move continuous work into durable leased tasks

Progress survives worker replacement and completion is explicitly recorded. The design needs lease, configuration, and output-identity checks. An obsolete worker cannot commit after a successor takes its lease.

### Schedule the full pipeline every thirty minutes

New attempts are initiated more frequently. Runtime still exceeds the interval and overlapping attempts contend for resources. The pipeline accumulates runs or repeatedly discards almost-complete work.

Shortening a schedule cannot overcome startup delay or a slow indivisible chunk. For continuous freshness requirements, explicit leased work and validated commits can preserve progress through worker replacement instead of restarting whole runs.

## Design a recoverable pipeline

A periodic pipeline now runs longer than its interval. Outline a continuous work model and explain what happens when a worker resumes after losing its lease.

- Timing limit
- Authoritative state
- Stale worker
