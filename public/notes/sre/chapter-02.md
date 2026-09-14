# Chapter 2: The Production Environment at Google, from the Viewpoint of an SRE

Follow a request through scheduling, discovery, storage, and capacity

Google’s production environment separates the machine that supplies resources from the server process that implements a service. Borg schedules many copies of a job, replaces failed tasks, and allocates resources across failure domains. Because tasks move, naming and discovery must resolve a stable identity to a changing network location. Durable storage, coordination, and networking provide further shared foundations. The Shakespeare example connects these abstractions: a batch job builds an index, while an online request passes through frontends and backends to retrieve it. Placement is a reliability decision as well as a latency decision. Spare tasks cover maintenance and failure, and regional data replicas avoid distant reads. These are architectural relationships to understand, not a requirement to reproduce Google’s internal tools.

## Machines, servers, jobs, and tasks

In this chapter, a machine is a physical or virtual resource and a server is a running program that offers a service. A job describes work submitted to Borg; its tasks are individual running copies. Separating these identities allows many services to share machines and lets a failed task restart elsewhere without tying the service permanently to one host.

## Scheduling and failure domains

Borg places tasks according to their resource requests and supervises their execution. Placement must consider correlated failure: several replicas on one rack can all disappear with its switch. Resource allocation and distribution therefore work together. Replacing a crashed task restores a process, but enough surviving capacity must remain to handle requests while replacement is underway.

## Discovery, storage, and coordination

A moving task needs a stable name that resolves to its current address. BNS supplies that indirection, while Chubby supports consistent coordination and naming information. Durable data lives in shared storage layers rather than depending on a task’s local scratch disk. Colossus, Bigtable, and Spanner illustrate different layers and consistency choices; they are not interchangeable substitutes for every workload.

## A request consumes regional capacity

The example search service combines an offline indexing pipeline with online serving. Load balancing selects suitable frontends and backends, and regional replicas reduce data-access latency. Task counts must cover the forecast peak plus the tasks unavailable during maintenance and failure. Moving traffic to another region trades local redundancy cost against additional latency and the destination’s available capacity.

## Apply it

Sketch a search request from regional entry point to persistent index. Calculate serving and spare tasks for a peak of 750 QPS at 80 QPS per task.

Source: *Site Reliability Engineering*, chapter 2, text lines 1147–1484. This note is an original synthesis; the exercise is a teaching extension.
