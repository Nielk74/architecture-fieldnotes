# Chapter 9: Measurement

*Pip’s adventure: Two dashboards, one missing boundary. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 135–155; text lines 5077–5850. References count literal newline-delimited lines in the supplied text.

## Overview

Two dashboards give Pip different footprints for the same cinema. Before choosing the smaller number, Pip asks what each report includes. A comparison needs a software boundary, a period, and equivalent useful work. Energy, the electricity’s carbon intensity, and allocated hardware emissions must use compatible units. Direct measurements, estimates, and proxies offer different coverage and delays. Organizational inventories and a software intensity rate answer different questions; lower emissions per export need not mean lower totals. The book’s SCI approach separates market-based reductions so software changes remain visible. Pip records assumptions before announcing an improvement.

## Key ideas

### Choose boundaries before numbers

Pip’s new converter looks cleaner until a teammate notices that decoding moved to the viewer’s phone. The report simply stopped counting it. Pip redraws the boundary: servers, clients, networks, storage, background work, and the measurement period. Both versions must produce equivalent completed exports at agreed quality. That functional unit makes comparison useful as volume changes. A boundary should reveal shifted work, not turn an accounting omission into a victory. (Source: pp. 135–137, 149–150.)

### Combine energy and electricity data carefully

The wall meter and processor counters disagree. Pip checks their boundaries: the meter includes the device, while instrumentation or a model may estimate only part of it. Background consumption and battery charging complicate the reading. Electricity intensity must match time and location; average and marginal signals answer different questions. Pip reports the idle baseline separately and labels total versus incremental consumption. A number called carbon is not automatically comparable to another. (Source: pp. 136–139.)

### Allocate hardware over the same period

Pip’s ledger charges a device’s entire manufacturing footprint to today’s film. That cannot be the daily allocation. For a fictional 600 kg device used exclusively for five years, the allocation is 120 kg per year. A software estimate must justify its hardware share and useful lifetime over the same period. Production and disposal emissions remain physically incurred. Where supplier data is incomplete, Pip exposes assumptions about device type, lifetime, and shared use. (Source: pp. 141–143.)

### A software rate differs from an inventory

Pip writes SCI as (E × I + M) / R. Energy times electricity intensity, plus allocated hardware emissions, is divided by useful work. With fictional inputs of 2 kWh, 100 g CO₂e/kWh, 40 g hardware, and 20 exports, the rate is 12 g CO₂e per export. Units and periods must match. Organizational scopes classify ownership and purchases instead: moving hosting can change a scope category without removing physical emissions. (Source: pp. 145–151.)

### Separate reductions, proxies, and reporting methods

The invoice falls after a discount. Pip checks the worker hours: unchanged. Cost, CPU activity, and energy are useful clues with different limits. Offsets and market-based purchases have accounting purposes distinct from reducing physical workload demand; the authors exclude them from this actionable software metric. Pip labels estimates and reductions separately, then compares reporting coverage, allocation, time resolution, and delay. Choosing the lowest number from incompatible methods would tell no reliable story. (Source: pp. 139–145, 151–155.)

## Misconceptions

### A bill reduction proves the same percentage carbon reduction.

Pricing, discounts, region, and resource use can move independently. Cost is a qualified proxy.

### A lower SCI proves total emissions fell.

The rate may fall while the amount of useful work grows. Report totals as well as the denominator.

## Decision practice — teaching extension

Pip receives a monthly provider report and an internal energy-based estimate. Their cinema totals differ: market-based accounting, hardware coverage, and boundaries are not aligned. Pip needs to evaluate a new export implementation without treating unlike reports as a before-and-after comparison.

### Align methods for a like-for-like experiment

Makes the change in software behavior easier to interpret. Requires documenting assumptions and may retain substantial estimation uncertainty. The team fixes a boundary, functional unit, and comparable period, then measures before and after with the same method. It records excluded components.

### Keep both reports for their distinct purposes

Preserves organizational reporting while retaining an engineering view. Needs clear labels so readers do not treat unlike totals as comparable. The monthly report supports its stated inventory purpose. The engineering estimate guides experiments; differences are explained rather than silently averaged.

Disagreement is a reason to inspect methods. Neither averaging unlike numbers nor selecting the smallest one produces a valid software comparison.

## Transfer to your work — teaching extension

Specify a repeatable before-and-after comparison for one software change. Use compatible units and state what the result cannot establish.

- Boundary and useful work: Which components and period are included, and what is one equivalent completed result?
- Energy, intensity, and hardware inputs: How is each measured or estimated, allocated, and expressed in compatible units?
- Comparison and limitations: What stays constant, which totals accompany the rate, and what is excluded or uncertain?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
