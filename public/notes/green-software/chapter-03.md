# Chapter 3: Code Efficiency

*Pip’s adventure: The ten trips for one answer. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 31–51; text lines 1601–2385. References count literal newline-delimited lines in the supplied text.

## Overview

The cinema’s thumbnail queue grows, and Pip reaches for a rewrite. A trace interrupts the plan: one request fetches the same metadata ten times. Removing repeated work may help sooner than a specialized engine. Libraries and platforms trade some machine efficiency for developer productivity; service layers, unused features, and retained data also cost work. Pip compares equivalent output and checks whether saved computation permits smaller resources. Faster is not automatically lower energy or carbon. And if cheaper exports multiply, a better per-job result can still accompany rising totals.

## Key ideas

### Machine and developer productivity

Pip sketches a custom image engine. A teammate points to the maintained library already doing the job. Reuse can spend extra machine work while saving development and maintenance effort; that is a trade-off, not a failure. Improving a widely shared library spreads specialist effort across many applications. Hand-tuning a rarely used screen does not. Pip checks volume, reuse, and who will maintain the clever new code before committing. (Source: pp. 31–37.)

### Profile the work that matters

Ten identical metadata lookups appear in Pip’s trace. The first experiment is smaller than a rewrite: reuse the result without changing correctness. Profiling finds expensive calls, algorithms, and repeated work. A faster run is only a clue—extra processors can buy speed while using more resources. Pip holds film quality and service requirements constant, then checks whether saved work allows a smaller or more densely shared allocation. (Source: pp. 37–40.)

### Service boundaries cost work

Every department adds one helpful checkpoint to the thumbnail journey. Soon Pip’s request spends its day crossing services, serializing data, and repeating middleware work. Batching metadata requests may shorten that journey while preserving a clear ownership boundary. But fewer calls must not make interfaces or debugging harder to understand. Neither a monolith nor microservices wins automatically: Pip weighs processing overhead against independent ownership, maintenance, and the platform’s existing capabilities. (Source: pp. 41–44.)

### Avoid unnecessary features and data

Pip discovers a report generated daily that nobody opens. Making it on-demand avoids work before optimization even begins. Rarely accessed records move to storage suited to their required retention. Unused features and data still cost maintenance and processing. Moving work to a client or using a smaller, reused ML model may help too—but Pip counts transfers and client hardware. Sending the bill elsewhere does not erase the work. (Source: pp. 44–47.)

### Efficiency can grow demand

The cheaper export becomes a hit. In Pip’s fictional example, each job costs half as much, but demand triples. The celebration needs a second chart: total resource use can rise as unit efficiency improves. This is the rebound problem discussed through Jevons. The authors still favor efficiency and reusable platforms during the energy transition. Their outlook for future energy abundance is not a guarantee of falling absolute emissions today. (Source: pp. 47–51.)

## Misconceptions

### A compiled-language rewrite is always the best first action.

Its value depends on scale, bottlenecks, operations, and maintenance. Removing unnecessary work may be a better initial experiment.

### Lower emissions per request guarantee lower total emissions.

Request volume can increase. Keep both unit and total measures.

## Decision practice — teaching extension

Pip’s thumbnail service repeats metadata calls while demand grows. A maintained image library is available; specialist time is scarce. Pip can remove duplicate work and test an upgrade or build a hardware-specific converter. Either route must preserve the film’s output quality.

### Remove repeated work and test a maintained library

Preserves familiar development while targeting observed waste. May leave low-level gains unrealized and depends on library maintainers. The team benchmarks identical images and tracks resource use. Saved capacity becomes a rightsizing opportunity rather than an assumed reduction.

### Build a specialized conversion engine

Offers deeper control for a hot path that may justify investment at scale. Requires specialist maintenance and extensive regression checks. A stronger per-image result must be weighed against engineering effort, supported hardware, and the ability to evolve the product.

Measured bottlenecks and scale determine when specialization pays. Reuse spreads the cost of difficult optimization.

## Transfer to your work — teaching extension

Choose a frequently executed path and propose a change based on an observation. Explain how saved computation could reduce resource allocation.

- Evidence of unnecessary work: Which profile or trace identifies the processing cost?
- Change and engineering cost: What changes, and what maintenance or debugging burden follows?
- Comparison and resource consequence: Hold quality constant; track unit and total use and identify a rightsizing step.

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
