# Chapter 9: Measurement

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 135–155; text lines 5077–5850. References count literal newline-delimited lines in the supplied text.

## Overview

Measurement begins by defining the software boundary and the useful work being compared. The chapter combines three ingredients: energy, the carbon intensity of its electricity supply, and the allocated embodied emissions of hardware. It discusses direct measurements, estimates, and proxies, with attention to granularity and consistent comparison. Organizational inventories and a software intensity rate answer different questions; a lower rate need not mean a lower total. The book’s Software Carbon Intensity discussion excludes market-based reductions from the software rate so operational changes remain visible. Tool reports also differ in coverage and reporting delay. The aim is evidence that directs an improvement, with assumptions stated clearly enough to understand what a changed number actually means.

## Key ideas

### Choose boundaries before numbers

A software footprint can span servers, clients, networks, storage, and background activity. Define both the system and measurement period before comparing alternatives. Consistency prevents an apparent reduction caused only by moving work outside the counted boundary. A useful functional unit, such as a completed export of agreed quality, makes the comparison meaningful as workload size changes. (Source: pp. 135–137, 149–150.)

Teaching extension: Two export versions use the same input, quality, period, and included components; retries and client-side work remain visible.

### Combine energy and electricity data carefully

A device meter measures energy within its physical boundary, while instrumentation or models may provide a narrower estimate. Carbon intensity needs matching time and location. Background consumption and battery charging affect interpretation. Average and marginal signals answer different questions. Record which signal and method were used rather than treating every number labeled carbon as interchangeable. (Source: pp. 136–139.)

Teaching extension: A lab reports wall-meter energy and notes the idle baseline separately. It labels whether the result is total device consumption or the increment associated with the task.

### Allocate hardware over the same period

Embodied emissions come from equipment production and disposal. A software estimate needs a justified allocation for its share of hardware and useful lifetime. The emissions are already incurred; allocation makes comparisons possible but cannot remove them physically. Supplier data may be incomplete, so assumptions about lifetime, device type, and shared use must be visible in the result. (Source: pp. 141–143.)

Teaching extension: A fictional 600 kg device used exclusively for five years contributes an allocation of 120 kg per year, not 600 kg every day.

### A software rate differs from an inventory

The book describes SCI as (E × I + M) / R: energy times electricity intensity plus allocated hardware emissions, divided by useful work. Organizational scopes classify emissions by ownership and purchasing relationships, while SCI follows a software boundary. Moving hosting can change an organization’s scope category without removing physical emissions. Keep units and the measurement period consistent across the formula. (Source: pp. 145–151.)

Teaching extension: For fictional inputs of 2 kWh, 100 g CO₂e/kWh, 40 g allocated hardware, and 20 completed exports, the rate is 12 g CO₂e per export.

### Separate reductions, proxies, and reporting methods

Cost, CPU activity, and energy can indicate change but have different limitations. Discounts can lower bills without changing resource use. Market-based purchases and offsets serve different accounting purposes from reducing a workload’s physical demand. The authors keep them out of their actionable software metric. Compare tools by coverage, allocation, time resolution, and delay rather than ranking raw totals from unlike methods. (Source: pp. 139–145, 151–155.)

Teaching extension: A report distinguishes a billing discount from reduced resource hours and labels estimated emissions separately from directly observed energy.

## Misconceptions

### A bill reduction proves the same percentage carbon reduction.

Pricing, discounts, region, and resource use can move independently. Cost is a qualified proxy.

### A lower SCI proves total emissions fell.

The rate may fall while the amount of useful work grows. Report totals as well as the denominator.

## Decision practice — teaching extension

Teaching extension. A team receives a monthly provider report and an internal estimate built from energy and regional intensity. Their totals differ. One includes market-based accounting and omits some hardware; the other has a different boundary. The team wants to evaluate a new export implementation without creating a misleading comparison.

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
