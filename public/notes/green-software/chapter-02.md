# Chapter 2: Building Blocks

*Pip’s adventure: Pip follows the meter. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 15–29; text lines 1143–1600. References count literal newline-delimited lines in the supplied text.

## Overview

Pip turns down a worker’s power and expects a smaller footprint. The job takes longer. A meter, a clock, and the electricity supply tell different parts of the story: watts measure a rate, kilowatt-hours accumulate energy, and carbon intensity links electricity to emissions. Idle hardware and cooling add consumption; manufacturing and disposal add embodied carbon. Pip also learns why CO₂e combines greenhouse gases, why weather is not climate, and why no single reading describes the whole system. The cinema’s footprint extends beyond the processor.

## Key ideas

### Carbon and climate vocabulary

A cold morning greets Pip outside the cinema. “Does that settle the climate question?” No: weather describes short-term conditions; climate describes longer patterns. Global warming is part of broader climate change. Inside, Pip labels the footprint in CO₂e, expressing greenhouse gases on a common warming-impact basis over a stated time horizon. “Carbon” is shorthand here—not electricity, and not a conclusion drawn from today’s weather. (Source: pp. 15–20.)

### Power is a rate; energy accumulates

Pip’s meter reads 100 W. “One hundred units used?” Not yet: watts measure how quickly energy is used, not the accumulated amount. In this fictional test, the worker draws 100 W steadily for two hours: 0.2 kWh. Turning the power down might make the job run longer. Pip compares energy for equivalent completed films, keeping both the meter and the clock in view. (Source: pp. 20–22.)

### Electricity has an emissions factor

Two identical exports use 0.2 kWh each, yet Pip’s estimates differ. With fictional factors of 100 and 500 g CO₂e/kWh, their electricity emissions are 20 and 100 g CO₂e. The supply matters as well as energy use. “Renewable” and “low carbon” are not identical labels: the book uses nuclear as a low-carbon, nonrenewable example. Pip records time, place, and the electricity factor before comparing results. (Source: pp. 21–22.)

### Idle power and facility overhead

The worker is quiet, but its meter is not at zero. Cooling runs too. Pip shares useful work to avoid repeated idle overhead, then checks PUE: total facility energy divided by IT energy. At an illustrative PUE of 1.4, 10 kWh of IT energy means 14 kWh for the facility. A whole-facility meter already includes that overhead. Multiplying twice would invent consumption; PUE alone says nothing about app efficiency or grid carbon. (Source: pp. 22–25.)

### Hardware exists before runtime

Pip opens an older laptop and finds another part of the footprint: its processor, memory, and disk existed before tonight’s screening. Production and disposal carry emissions alongside runtime electricity. Reducing the app’s memory requirement could keep this supported laptop useful and avoid replacement. Spreading its embodied emissions over more years changes allocation, not history. The opportunity is more useful work from existing equipment, not erasing emissions already released. (Source: pp. 25–29.)

## Misconceptions

### A 50 W reading means the task used 50 Wh.

Watts are a rate. Duration and variation in power determine energy.

### A low PUE proves an application is low carbon.

PUE describes facility overhead; application waste, electricity supply, and hardware still matter.

## Decision practice — teaching extension

Pip compares two exports of the same film. A wall meter sees the whole workstation; processor counters offer a narrower proxy. Charging and background jobs could distort either comparison. The cinema needs a baseline now and a repeatable check for future releases.

### Measure the whole device under controlled conditions

Includes electricity use beyond the processor. Background and idle consumption must be recorded to interpret the result. The report gives energy per completed run and explains what the meter includes. Grid intensity and hardware remain separate additions to a carbon estimate.

### Use processor activity as a scoped proxy

Makes frequent comparisons convenient when full measurement is difficult. Misses other components and cannot claim a complete energy result. The team compares the same workload consistently and labels the proxy. Wider measurements check whether apparent savings move costs elsewhere.

A useful measurement has a declared boundary. Neither a counter nor a device meter automatically covers a distributed service.

## Transfer to your work — teaching extension

Describe a computing task using power, duration, electricity emissions, and equipment. Separate observed quantities from estimates.

- Task and energy units: Define a completed result and how you would obtain Wh or kWh.
- Electricity and facility boundary: Which grid factor applies, and is overhead already included?
- Hardware and uncertainty: Which devices are included, and what manufacturing or background-use data is missing?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
