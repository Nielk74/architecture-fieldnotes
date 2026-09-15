# Chapter 6: Measuring and Reducing Your Code’s Carbon Footprint

*Pip’s adventure: The report that finished faster but cost more. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 3948–4487 in the supplied book.

Pip speeds up a town report by adding processors. The clock improves; total work does not. Following power, runtime, grid intensity, and equipment across accounting boundaries reveals why speed alone cannot prove lower carbon. Pip profiles the work before deciding what to remove, move, or delay.

## Carbon accounting

Pip’s town report uses 2 kWh on electricity rated at 300 g CO2e/kWh: 600 g CO2e for that electricity. Average power and runtime determine energy; supplying electricity’s carbon intensity determines associated emissions. Pip writes the boundary beside the result. Equipment manufacturing is excluded, not magically emission-free.

## Scopes of emissions

Pip moves computation to a supplier and celebrates an empty local meter. The town’s accountant stops the party: Scope 1 covers direct emissions, Scope 2 purchased electricity, and Scope 3 other value-chain effects, including manufacturing and device use. Pip redraws the boundary. Moving impact is not necessarily removing it.

## Where and when

Pip’s report can wait until morning. A lower-carbon place or period might reduce emissions, but processor use, transfers, user geography, latency, availability, and resilience constrain the move. Pip checks electricity data and the deadline before scheduling. A flexible workload creates a choice; “overnight” alone does not prove cleaner electricity.

## Profile before optimize

Pip hunts for a clever algorithm; the profile points to verbose logging. The book’s Log.Write example shows why measuring first matters. Pip removes unnecessary log generation and remeasures energy. Faster execution can still use more parallel processors or trigger more traffic: a shorter stopwatch reading is not a carbon measurement.

## Teaching extension

Pip’s nightly town report consumes substantial compute. A faster rewrite may add processors; profiling and flexible scheduling offer another route.

Pip profiles waste, then checks scheduling against deadlines and resilience. A runtime improvement needs an energy and emissions check.

Pick a workload with recurring compute. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
