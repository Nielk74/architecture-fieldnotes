# Chapter 2: Architectural Thinking

*Pip’s adventure: Pip’s first architecture sketch meets real code. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 23–36.

Pip sketches the growing bookshop, then a developer finds a boundary that makes testing awkward. Architectural thinking connects structure with implementation feedback, broad alternatives, and business priorities. Pip stays hands-on without becoming the person every release must wait for.

## Architecture and design

Pip’s proposed bookshop service boundary makes a core workflow difficult to test. Architecture addresses structure, characteristics, patterns, and major components; design supplies detailed classes, screens, and code. The porous boundary needs feedback in both directions. Pip joins the developers, revises the seam, and records the rationale while change is still inexpensive.

Source: pp. 23–25.

## Breadth and depth

Pip almost chooses last year’s database without considering alternatives. Architectural breadth means recognizing technologies, patterns, and constraints well enough to ask useful questions. A few deep areas sustain practical judgment without demanding mastery of everything. Pip compares relational storage, event streams, and caches, then prototypes the plausible fits.

Source: pp. 25–30.

## Trade-off analysis

Pip’s rare-book auction needs both analytics and controlled payment access. Publish-subscribe eases new consumers and producer decoupling; queues isolate contracts, access, and consumer scale. Budget, skills, culture, time, environment, and priorities change the balance. Pip records benefits, liabilities, the local choice, and the assumption that would justify revisiting it.

Source: pp. 30–34.

## Business drivers

Pip hears “finish pricing by closing time” and asks what happens after an interruption. Growth may imply scale and elasticity; critical workflows may need reliability, recovery, and auditability. Words such as fast or available hide different thresholds. Pip works with domain stakeholders to turn business meaning into prioritized structural concerns.

Source: pp. 33–34.

## Hands-on without bottlenecks

Pip volunteers to own the framework every release depends on, then notices the bottleneck. Hands-on architecture can instead use production-quality prototypes, debt work, fixes, automation, fitness functions, and reviews. Pip compares caching approaches and automates a dependency check while developers own delivery. Real implementation evidence improves later decisions without centralizing critical-path work.

Source: pp. 34–36.

## Transfer challenge: Route bids to three consumers

An auction platform captures bids and sends them to tracking, analytics, and history. History needs a richer contract than the other consumers, while security and independent consumer scaling matter during bidding bursts. The team expects more consumers later, but the current platform can monitor queues more precisely than a shared topic. Choose a communication shape and explain which risk the business is willing to carry.

### Publish to a topic

One producer connection makes future consumers easy to add and reduces producer knowledge of consumers. Consumers share a contract and bid data may be visible to more subscribers; per-consumer backlog scaling is less direct. Bid History subscribes without changing Bid Producer. The team must enforce subscriber authorization and either accept a common schema or add an adaptation layer for richer history data.

### Send through queues

Each consumer can have its own contract, access boundary, backlog, and scaling policy. The producer knows every destination and must change when a new consumer appears, increasing coupling and operational wiring. History gets its current-price field without disturbing other consumers, and operators can scale analytics separately. Adding a fourth consumer requires producer and infrastructure changes.

Neither mechanism wins in the abstract. The topic favors extensibility and producer decoupling; queues favor isolation, heterogeneous contracts, and per-consumer operations. Business priorities and platform capabilities determine the balance.

## Make a least-worst decision

Choose a real or invented system decision. Name the business driver, compare two plausible designs, and record the trade-off you would revisit if the context changed.

- Context
- Decision
- Trade-off
