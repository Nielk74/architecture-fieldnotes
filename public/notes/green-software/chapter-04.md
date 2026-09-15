# Chapter 4: Operational Efficiency

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 53–72; text lines 2386–3083. References count literal newline-delimited lines in the supplied text.

## Overview

Operational efficiency delivers the required function, performance, and resilience with fewer resources. This chapter centers on utilization: rightsizing, autoscaling, workload sharing, and scheduling reduce idle capacity that consumes electricity without useful output. These practices need workload information and reliable automation. A scheduler cannot place work effectively without knowing resource and availability needs; autoscaling is incomplete if it never scales down. Restartable systems make it possible to switch off unused environments and retire abandoned workloads. Managed platforms can supply some of these capabilities, but the benefits depend on how they are used. Efficiency also introduces failure modes and operational complexity, so recovery and service-level validation belong in the change.

## Key ideas

### Rightsizing realizes savings

A smaller program does not automatically produce a smaller infrastructure footprint. Rightsizing aligns provisioned capacity with observed demand, peaks, and resilience requirements. Reducing repeated idle overhead is the objective, rather than making every utilization graph reach its maximum. Overprovisioning often masks uncertainty about load and failures; investigate that uncertainty before reducing the safety margin. (Source: pp. 55–57.)

Teaching extension: After a memory optimization, a worker is tested on a smaller allocation against peak jobs before production changes.

### Scale down as well as up

Autoscaling should remove capacity after demand falls. Fear of disruption can leave that direction disabled, preserving waste. Burstable capacity can suit intermittent demand, but sustained load and depleted credits introduce constraints. Infrastructure as code makes configuration repeatable and reviewable, helping allocation improvements become an operational practice rather than a cleanup that soon drifts. (Source: pp. 57–60.)

Teaching extension: A test environment starts during working hours, drains jobs at closing time, and proves it can restart the next morning.

### Schedulers need information

Placement works best when complementary jobs share resources. A scheduler needs encapsulated dependencies, fast startup, and accurate resource and availability requirements. Diverse tenants and flexible work create more opportunities than workloads that all peak simultaneously. Specifying oversized requirements can prevent efficient placement even when the underlying system has sophisticated scheduling capabilities. (Source: pp. 60–66.)

Teaching extension: A batch job declares its memory requirement and deadline so it can fit around interactive traffic on shared capacity.

### Make turning off routine

LightSwitchOps means stopping and restarting with confidence. Unused services often survive because nobody knows whether they are needed or recoverable. Inventory, ownership, reproducible deployment, and recovery checks make retirement practical. Removing abandoned workloads can reduce unmaintained security exposure as well as resource use. A scheduled shutdown needs more than an optimistic assumption that startup will work. (Source: pp. 66–69.)

Teaching extension: An old preview service gets an ownership and traffic check, a restore procedure, and a reversible retirement plan.

### Efficiency requires resilience

Shared infrastructure, interruptible workers, and tighter margins create failure modes that must be handled. A low spot price does not itself establish low-carbon electricity. The chapter’s expectation of future carbon-aware scheduling is a prediction from the book’s period. Evaluate interruption, repeated work, and service objectives before relying on an efficient-looking operating arrangement. (Source: pp. 63–64, 69–72.)

Teaching extension: An interrupted export resumes from a checkpoint. The trial measures retries and deadline misses along with resource hours.

## Misconceptions

### Dedicated cloud servers automatically deliver workload-sharing benefits.

The hosting location alone does not change allocation. Use the platform’s efficient resource and service options deliberately.

### Maximum utilization is the sustainability target.

A useful improvement preserves service and recovery needs. Saturation can create errors, retries, and additional waste.

## Decision practice — teaching extension

Teaching extension. A media service reserves several workers for a brief export peak. Jobs must finish by morning and survive losing a worker. The team can consolidate onto shared interruptible workers with checkpoints or first rightsize a dedicated pool. Peak load is understood, but interruptions remain untested.

### Use shared workers with checkpoints

Reduces reserved idle capacity and offers more scheduling flexibility. Requires durable progress, bounded retries, and deadline protection. The trial records completed jobs, active resources, and repeated work after interruption. A fallback remains until recovery is demonstrated.

### Rightsize the dedicated pool first

Makes a simpler initial change using a familiar execution model. Retains some reserved idle overhead and less placement flexibility. Peak-load validation establishes a smaller safe pool and a baseline for considering more extensive sharing later.

The appropriate degree of sharing follows workload constraints and demonstrated recovery, not the cheapest resource label.

## Transfer to your work — teaching extension

Choose an environment with idle capacity. Define a reversible allocation change and the load and recovery checks needed to accept it.

- Observed demand and owner: Who needs the environment, and what must it handle at peak?
- Allocation and recovery: What resource can be released, and how will work resume?
- Acceptance and rollback: Which deadline, error, or recovery result would stop the experiment?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
