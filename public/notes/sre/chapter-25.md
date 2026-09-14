# Chapter 25: Data Processing Pipelines

Source: text lines 11199–11531 of the supplied book extract.

Periodic pipelines become fragile when growth makes execution time approach the scheduling interval. Uneven chunks hold up downstream stages, restarts discard work, and overlapping runs or synchronized workers overload shared infrastructure. Making the schedule more frequent can even reduce progress. The chapter presents Workflow as an alternative for workloads that are fundamentally continuous. A Task Master journals work state, while stateless workers claim leased tasks and publish results transactionally. Unique output names, valid leases, configuration versions, and server identity checks prevent obsolete or misdirected workers from corrupting committed results. Local processing can be coordinated through global reference tasks for failover. The lesson is to design processing semantics, observability, and recovery around the workload’s real continuity requirements.

## The periodicity limit

A scheduled pipeline needs time for resource acquisition and processing before its next run. As data grows, a shorter interval can create overlapping jobs or repeatedly terminate nearly completed work. Increasing frequency does not remove startup delays or stragglers. When results must be updated continuously, explicit continuous processing can fit the requirement better than a batch design pushed beyond its timing assumptions.

## Stragglers and synchronized resource demand

Partitioning work does not guarantee equal execution time: one customer’s large shard may determine the completion of a whole stage. Starting thousands of workers together can overload dependencies, while periodic jobs with different schedules occasionally align into large combined peaks. More workers or naive retries can worsen these problems. Inspect shared-resource usage and expose progress during execution, including runs that never finish.

## Leases and immutable task identity

Workflow records authoritative task state in a Task Master and gives workers temporary leases. A worker may commit only while its lease and referenced configuration remain valid. Unique output filenames prevent an obsolete worker from overwriting a successor’s work, while a server token detects communication with the wrong Task Master. These controls protect committed results even when redundant computation happens during failures.

## Durable coordination and continuity

The Task Master keeps working state in memory and journals changes durably; workers remain replaceable. Keeping pointers rather than full datasets in the master limits its memory burden. For cross-site continuity, local pipelines coordinate reference tasks through a global workflow, recording unfinished work that another site can claim. Correctness can require blocking when global coordination is unavailable rather than acknowledging an unrecorded completion.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
