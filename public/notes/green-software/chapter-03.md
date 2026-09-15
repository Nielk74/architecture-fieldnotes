# Chapter 3: Code Efficiency

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 31–51; text lines 1601–2385. References count literal newline-delimited lines in the supplied text.

## Overview

Code efficiency avoids unnecessary computation for a defined result, but achieving it consumes developer time and expertise. The authors explain why reusable APIs and higher-level platforms became popular: they exchange some machine efficiency for development speed and maintained functionality. The practical response is to profile expensive behavior, choose efficient libraries and platforms, and question unnecessary work or retained data. Architecture matters because excessive layers and chatty services add processing. Fast execution, low energy use, and low carbon are not interchangeable; parallelism or extra hardware can buy speed. The chapter closes with the rebound problem: efficiency can make a service cheaper and increase demand, so improvements per operation do not guarantee falling totals.

## Key ideas

### Machine and developer productivity

A reusable API may do more work than a custom implementation while saving development and maintenance effort. The book treats this as a trade-off rather than a mistake. Specialized optimization becomes easier to justify when heavily reused code or a high-volume service spreads that investment across many operations and users. Maintaining that specialization remains part of its cost. (Source: pp. 31–37.)

Teaching extension: Improving a common image library can benefit thousands of applications, while hand-tuning a rarely used internal screen has limited reach.

### Profile the work that matters

Profiling locates costly calls, repeated work, and poor algorithms before a rewrite is proposed. Faster execution is a clue rather than proof of lower carbon: more processors can reduce wall time while increasing resource use. Ask whether the improvement permits smaller or more densely shared resources, and preserve equivalent output and service requirements in the comparison. (Source: pp. 37–40.)

Teaching extension: A trace finds repeated metadata retrieval. Reusing the result removes work without changing languages or weakening the response contract.

### Service boundaries cost work

Cross-process and network calls introduce serialization, transmission, and platform overhead. Excessive calls or duplicated middleware can dominate processing. Reducing those costs must be balanced against understandable interfaces, independent ownership, and maintainability. Neither a monolith nor microservices is automatically greener; architecture and operations together determine the outcome. Platform guidance can help avoid duplicating work the platform already performs. (Source: pp. 41–44.)

Teaching extension: A pipeline batches metadata requests while retaining a clear service boundary, then checks latency and debugging consequences.

### Avoid unnecessary features and data

Lean product decisions eliminate work before optimization is needed. Unused features and rarely queried data still consume maintenance, storage, and processing. Retention and archive policies should follow actual needs. Client-side processing and smaller or reused ML models offer other opportunities, but include transfer costs and client hardware effects when evaluating them. Moving work does not erase it. (Source: pp. 44–47.)

Teaching extension: An unused daily report becomes on-demand. Records that must be retained move to storage suited to their infrequent access.

### Efficiency can grow demand

The Jevons discussion warns that cheaper operations can become more widely used and increase total resource demand. The authors still favor efficiency during the energy transition and reusable platforms that distribute its engineering cost. Their expectations about future energy abundance are an outlook, not a guarantee that every efficiency improvement will reduce absolute emissions today. (Source: pp. 47–51.)

Teaching extension: Exports become half as expensive per job, but volume triples. The team reviews total energy alongside the per-export improvement.

## Misconceptions

### A compiled-language rewrite is always the best first action.

Its value depends on scale, bottlenecks, operations, and maintenance. Removing unnecessary work may be a better initial experiment.

### Lower emissions per request guarantee lower total emissions.

Request volume can increase. Keep both unit and total measures.

## Decision practice — teaching extension

Teaching extension. A thumbnail service repeatedly queries metadata and uses a familiar image library. Demand is rising, but specialist capacity is limited. The team can remove redundant calls and test a library upgrade, or build a hardware-specific conversion engine. Both options must preserve output quality.

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
