# Chapter 6: Measuring and Reducing Your Code’s Carbon Footprint

Original learning notes. Source: text lines 3948–4487 in the supplied book.

Software’s carbon footprint depends on physical resources: power, runtime, equipment, and the electricity supplying them. Emissions accounting distinguishes direct operations, purchased energy, and wider value-chain effects so a local improvement does not conceal shifted costs. Workload timing and location can change emissions, but latency, availability, and other constraints still matter. Profiling directs effort toward disproportionate work, as the expensive logging example illustrates; faster execution alone does not establish lower carbon. The data-center cooling case adds an operational lesson: efficiency improvements need domain expertise, tested safety constraints, and human override. Measurement provides the basis for choosing and verifying useful reductions.

## Carbon accounting

Operational electricity can be converted to carbon dioxide equivalent: energy use depends on average power and runtime, while emissions depend on the carbon intensity of the electricity supplying the location.

## Scopes of emissions

Scope 1 covers direct emissions, Scope 2 purchased electricity, and Scope 3 other value-chain emissions such as manufacturing and device use. A code optimization may shift impact rather than remove it.

## Where and when

Processor usage, data-center location, and time of day influence emissions. Moving flexible work to a cleaner region or lower-carbon period can help, but availability, latency, resilience, and user geography constrain the choice.

## Profile before optimize

Profiling found that a debugging Log.Write call dominated an ecommerce function’s work. Measuring first directs effort to expensive behavior; faster code is not automatically lower carbon if it causes more parallel processors or traffic.

## Teaching extension

A nightly analytics job uses substantial compute. The team can profile and reduce waste, or move flexible work to a lower-carbon region and time.

Both choices are defensible under different constraints; the responsible decision states the accepted consequence and the evidence that could change it.

Pick a workload with recurring compute. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
