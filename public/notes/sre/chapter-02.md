# Chapter 2: The Production Environment at Google, from the Viewpoint of an SRE

*Pip’s adventure: The booking task moves, its name stays. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1147–1484.

Pip’s booking process restarts on another machine. The crew separates resource identity, running tasks, stable names, and durable storage. Scheduling and capacity must account for correlated failures and the traffic that survives while replacements start.

## Machines, servers, jobs, and tasks

Pip mistakes a machine for the booking server running on it. In the chapter, a machine is physical or virtual capacity; a server is a service-providing program. Borg jobs describe work, and tasks are individual running copies. Pip can move a failed task without permanently tying the service to one host.

Source: text lines 1147–1484.

## Scheduling and failure domains

Pip puts four booking replicas on one rack and loses them with its switch. Borg schedules resource requests and supervises execution, but placement must consider correlated failure. Pip spreads replicas across failure domains. Enough surviving capacity must serve requests while crashed tasks are replaced.

Source: text lines 1147–1484.

## Discovery, storage, and coordination

Pip’s rescheduled task still calls an obsolete address. BNS provides stable-name indirection; Chubby supports consistent coordination and naming information. Durable data belongs in shared storage rather than task-local scratch space. Pip distinguishes Colossus, Bigtable, and Spanner as different storage layers and consistency choices, not interchangeable tools.

Source: text lines 1147–1484.

## A request consumes regional capacity

Pip estimates capacity for 750 booking requests per second. At 80 requests per task, ten tasks cover demand before spares. The chapter’s search example combines offline indexing, online serving, load balancing, and regional replicas. Pip adds maintenance and failure headroom, checking destination capacity and latency before shifting regions.

Source: text lines 1147–1484.

## Transfer challenge: Place work on shared machines

A cluster has homogeneous machines but a memory-heavy indexing job competes with latency-sensitive search servers. The scheduler can place both through a shared resource allocator or reserve machines by service.

### Use shared allocation with explicit requests

Unused capacity can serve either workload and placement stays adaptable. Bad requests can cause noisy-neighbor pressure unless monitored. The team measures saturation and adjusts requests as demand changes.

### Reserve dedicated machines

Latency-sensitive work gets predictable headroom and simpler local diagnosis. Reservation strands capacity and makes hardware growth expensive. Search remains stable, but idle reserved machines lower overall utilization.

Shared allocation trades local predictability for adaptable capacity; resource requests and health evidence decide whether the trade remains safe.

## Trace a request and its failure domains

Sketch a search request from regional entry point to persistent index. Calculate serving and spare tasks for a peak of 750 QPS at 80 QPS per task.

- Request path
- Task placement
- Spare capacity
