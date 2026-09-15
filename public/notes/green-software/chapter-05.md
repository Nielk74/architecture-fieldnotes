# Chapter 5: Carbon Awareness

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 73–89; text lines 3084–3600. References count literal newline-delimited lines in the supplied text.

## Overview

Carbon awareness responds to the changing emissions associated with electricity. Grid carbon intensity varies with location, generation, demand, and time, so the same computation can have different operational emissions in different conditions. The chapter distinguishes time shifting, location shifting, and demand shaping. Shifting changes execution timing or place; shaping changes the service offered. Forecasts can guide these decisions, but deadlines, available capacity, data constraints, and reliability remain part of the problem. The book illustrates the ideas with updates, charging, media processing, and hackathon projects from its publication period. The lesson is to create useful flexibility and act on an appropriate signal, rather than assuming a fixed overnight schedule or a cheap instance is automatically green.

## Key ideas

### Intensity changes with time and place

Electricity carbon intensity expresses CO₂e per unit of energy. A grid’s generation mix and demand change over time, and the plant meeting additional demand may differ from the average mix. Average and marginal perspectives answer different questions. A scheduling decision needs an identified signal, its location, and its time interval, rather than a broad assumption about the country. (Source: pp. 74–79.)

Teaching extension: The media team compares hourly forecasts for its own region instead of assuming every night is cleaner than every afternoon.

### Time shifting preserves the job

A delayable job can execute during a cleaner interval without changing its intended result. This requires an execution window, expected duration, and a deadline. Updates, backups, and training are examples in the book, but their flexibility depends on the actual service. A carbon-aware policy must still finish the work when cleaner opportunities fail to arrive. (Source: pp. 80–81.)

Teaching extension: An export may run any time from 18:00 to 06:00. Its two-hour duration limits which forecast windows are eligible.

### Location shifting moves the execution

Moving work to a cleaner region can reduce electricity-related emissions, but relocation has costs and constraints. Data transfer, service availability, capacity, latency, and jurisdictional requirements may rule out an otherwise attractive location. Time shifting often avoids some of these problems because the data and execution stay in the same place. (Source: pp. 82, 84–85.)

Teaching extension: An eligible rendering job moves only if its data can remain within the approved region set and transfer costs do not erase the benefit.

### Demand shaping changes the offering

Demand shaping adjusts the amount or quality of service in response to the carbon signal. The chapter draws an analogy to reducing video quality while preserving a call’s audio on a weak network. Product design must decide which functionality is essential and how users understand or choose a lighter mode. Shaping is different from doing the identical job later. (Source: pp. 83–84.)

Teaching extension: A media app offers a lighter preview during a high-intensity period while preserving the user’s ability to request the essential full result.

### Forecasts support constrained decisions

The examples combine electricity information with workload knowledge rather than optimizing the grid signal in isolation. Forecast quality, system capacity, and service objectives affect the result. Supplier features and hackathon outcomes in this chapter describe the book’s period. Their transferable lesson is how to add a carbon signal to a system that already knows its operational constraints. (Source: pp. 85–89.)

Teaching extension: If the forecast is missing, the scheduler follows a documented deadline-preserving fallback and records why it could not make a carbon-based choice.

## Misconceptions

### Running overnight is always carbon aware.

A fixed clock schedule does not establish cleaner electricity. Compare the actual signal for eligible execution times.

### Demand shaping means moving an unchanged job to another region.

That is location shifting. Shaping changes the service’s resource demand or quality.

## Decision practice — teaching extension

Teaching extension. A media export takes two hours and must finish by 06:00. A fictional forecast puts a cleaner interval at 02:00, but the forecast may change. The job must stay in its approved region. The team can delay this full export within its window or offer an immediate lightweight preview while the full export follows later.

### Shift the complete export within its deadline

Preserves output quality while using a cleaner predicted interval. Requires scheduling, a duration estimate, and a fallback when the forecast fails. The scheduler chooses an eligible start and records the signal used. It runs before the deadline even if the cleaner window disappears.

### Offer a lightweight preview now

Reduces immediate work while giving the user something useful. Changes the product experience and can add wasted work if both versions are always generated. The team defines when a preview is useful and whether full output is still required. It measures combined preview and final-export work.

The first choice shifts the same job; the second shapes the offering. Both need clear user expectations and a complete accounting boundary.

## Transfer to your work — teaching extension

Choose one flexible job. Define its eligible execution window, carbon signal, and fallback. If you instead shape demand, state exactly what changes for the user.

- Job and hard constraints: What duration, completion time, region, and quality are required?
- Signal and response: Which signal selects an eligible time, place, or lighter offering?
- Fallback and verification: How will missing forecasts or capacity be handled, and what total work will you measure?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
