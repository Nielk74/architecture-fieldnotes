# Chapter 4: Operational Efficiency

*Pip’s adventure: The room that never slept. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 53–72; text lines 2386–3083. References count literal newline-delimited lines in the supplied text.

## Overview

The cinema has more workers than work, yet nobody dares turn one off. Pip investigates peaks, ownership, restart procedures, and the audience’s deadline. Rightsizing, autoscaling, scheduling, and shared platforms can reduce idle capacity—but only if resources are actually released. A scheduler needs truthful requirements, and scale-up without scale-down leaves the empty room humming. Pip tests recovery before tightening margins or trying interruptible workers. The aim is the required service with fewer resources, not a utilization dial pinned at its maximum.

## Key ideas

### Rightsizing realizes savings

Pip makes the converter smaller, but the reserved worker stays the same size. Rightsizing is the missing step: match allocation to observed demand, peaks, and recovery needs. Pip tests the lighter program against the largest film before reducing capacity. A full utilization dial is not the goal. Extra capacity may be hiding uncertainty about failures or demand; Pip investigates that uncertainty before removing the safety margin. (Source: pp. 55–57.)

### Scale down as well as up

Ten workers rush in for the premiere; ten remain after everyone leaves. Pip’s autoscaler knows how to grow, not shrink. Draining work and releasing surplus capacity completes the job. A daytime test environment must also prove its next restart. Burstable capacity suits some intermittent work, but sustained demand can exhaust credits. Pip records the policy in infrastructure as code so tomorrow’s deployment does not quietly restore yesterday’s waste. (Source: pp. 57–60.)

### Schedulers need information

The scheduler rejects Pip’s export: its oversized reservation leaves nowhere to fit it. Pip measures memory, packages dependencies, and declares startup behavior and the morning deadline. Accurate resource and availability requirements help flexible jobs share capacity around interactive traffic. Complementary demand is useful; every tenant peaking together is less so. Even a sophisticated scheduler cannot make good placements from requirements that describe fears rather than the actual workload. (Source: pp. 60–66.)

### Make turning off routine

Pip reaches the town cinema after midnight. Nobody is watching, but the preview server still hums. A note reads: “Don’t switch off. Might not come back.” Pip nearly walks away. Instead, Pip finds its owner, checks for hidden users, and tests rebuilding it from a saved configuration. Only then does Pip schedule its rest. That is LightSwitchOps: stopping and restarting with confidence, not hoping the morning shift can fix it. (Source: pp. 66–69.)

### Efficiency requires resilience

A bargain worker vanishes halfway through Pip’s export. A checkpoint lets the replacement resume, but retries still consume resources. Sharing, interruptions, and tighter margins need recovery and deadline checks. A low spot price is not an electricity carbon signal. Pip measures repeated work and misses before accepting the arrangement. The book’s expectation of future carbon-aware scheduling remains a prediction from its publication period, not a promise attached to today’s cheap worker. (Source: pp. 63–64, 69–72.)

## Misconceptions

### Dedicated cloud servers automatically deliver workload-sharing benefits.

The hosting location alone does not change allocation. Use the platform’s efficient resource and service options deliberately.

### Maximum utilization is the sustainability target.

A useful improvement preserves service and recovery needs. Saturation can create errors, retries, and additional waste.

## Decision practice — teaching extension

Pip reserves several workers for the cinema’s brief export peak. Jobs must finish by morning and survive losing a worker. Shared interruptible workers with checkpoints could reduce idle allocation; rightsizing the dedicated pool is simpler. Peak demand is known, but interruption recovery remains untested.

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
