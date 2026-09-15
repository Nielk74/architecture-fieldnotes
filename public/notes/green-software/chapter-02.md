# Chapter 2: Building Blocks

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 15–29; text lines 1143–1600. References count literal newline-delimited lines in the supplied text.

## Overview

The building blocks chapter supplies the vocabulary behind sustainable software decisions. Carbon is shorthand for greenhouse gases, while carbon dioxide equivalent expresses their warming effects on a common basis. Weather describes short-term conditions; climate describes longer patterns. For computing, the chapter separates power from energy and explains why electricity from different sources has different emissions. Hardware is not perfectly energy proportional: an idle machine can still draw power. Facility overhead adds another layer, represented by power usage effectiveness. Finally, manufacturing and disposing of equipment contribute embodied carbon. These distinctions let engineers trace software through processors, memory, storage, electricity supply, and equipment lifetime without confusing one measurement with the whole footprint.

## Key ideas

### Carbon and climate vocabulary

Carbon dioxide equivalent, written CO₂e, expresses greenhouse gases on a common warming-impact basis for a stated time horizon. The book uses carbon as shorthand for these gases. It distinguishes daily weather from long-term climate patterns and global warming from broader climate change. A brief local observation cannot describe the full climate trend. (Source: pp. 15–20.)

Teaching extension: A team labels its estimate in grams CO₂e and records the emissions factor, rather than reporting grams of electricity.

### Power is a rate; energy accumulates

Power describes the rate of energy use in watts. Energy depends on power and duration; a kilowatt-hour is the energy consumed at one kilowatt for one hour. Software can lower a power reading while running longer, so compare energy over equivalent completed tasks. An instantaneous reading does not establish the final result. (Source: pp. 20–22.)

Teaching extension: A fictional 100 W worker operating steadily for two hours uses 0.2 kWh. Duration is essential to the calculation.

### Electricity has an emissions factor

Carbon intensity relates electricity to emissions, commonly in grams CO₂e per kilowatt-hour. Renewable and low-carbon generation are related but distinct: nuclear is the book’s example of low-carbon generation that is not renewable. Electricity use and its supply must both be considered. Equal energy consumption does not establish equal emissions across times and places. (Source: pp. 21–22.)

Teaching extension: Two fictional 0.2 kWh jobs use factors of 100 and 500 g CO₂e/kWh, giving electricity estimates of 20 and 100 g CO₂e.

### Idle power and facility overhead

Servers draw power even at low utilization, so consolidating useful work can reduce repeated idle overhead. Power usage effectiveness, or PUE, compares total facility energy with IT energy. It includes cooling and other overhead but does not describe application efficiency or grid carbon intensity. Check the measurement boundary before applying this multiplier to avoid counting overhead twice. (Source: pp. 22–25.)

Teaching extension: With IT energy of 10 kWh and illustrative PUE of 1.4, facility energy is 14 kWh. A whole-facility meter already includes that overhead.

### Hardware exists before runtime

Processors, memory, and disks carry production and disposal emissions as well as operational energy use. Their roles and replacement pressures differ. Longer support and better utilization obtain more useful work from equipment and can avoid new manufacturing. Existing embodied emissions are not physically reversed by changing the accounting lifetime; longevity changes how much service that equipment provides. (Source: pp. 25–29.)

Teaching extension: Reducing memory requirements keeps a service usable on an older supported laptop and avoids a software-induced replacement.

## Misconceptions

### A 50 W reading means the task used 50 Wh.

Watts are a rate. Duration and variation in power determine energy.

### A low PUE proves an application is low carbon.

PUE describes facility overhead; application waste, electricity supply, and hardware still matter.

## Decision practice — teaching extension

Teaching extension. A lab compares two export implementations producing identical output. It can measure the workstation at the wall or sample processor counters. Battery charging and background activity could distort a run. The team needs a useful baseline now and a repeatable method for future regressions.

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
