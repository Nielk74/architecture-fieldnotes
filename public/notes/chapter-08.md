# Chapter 8: Component-Based Thinking

*Pip’s adventure: A component is more than a table with a manager. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 99–116.

Pip sketches CustomerManager and OrderManager for the bookshop, then realizes the diagram mirrors storage rather than work. Component-based thinking uses responsibilities, workflows, and iterative feedback. Deployment choices follow quality and coupling needs after those boundaries become clearer.

## Component scope

Pip packages validation as a library but runs payment as a service. A component physically packages related code above individual classes or functions. Libraries may share a process; services use separate address spaces and network or message contracts. Layers, subsystems, and event processors can also be components; Pip avoids an unnecessary hierarchy inside a tiny service.

Source: pp. 99–100.

## Architect and developer roles

Pip proposes an inventory boundary and quality goals with the team. Architects define and govern components with business, development, QA, operations, and domain partners; developers own most class and function design. Tests later reveal a reservation subcomponent worth separating. Pip revises the draft collaboratively instead of micromanaging implementation.

Source: pp. 100–102, 107–109.

## Technical versus domain partitioning

Pip traces one purchase through presentation, rules, and persistence folders. Technical partitioning makes technical categories visible but spreads business change across them. Domain partitioning groups workflows, keeping change and ownership closer while potentially repeating customization. Pip compares those costs before choosing top-level bookshop components.

Source: pp. 102–107.

## Iterative identification

Pip’s first bid-capture component serves both bidders and auctioneers. Requirements, responsibilities, and quality analysis reveal different reliability and scale needs. Component discovery iterates from candidates through assignment and restructuring as implementation teaches more. Pip balances excessive fine-grained communication against coarse boundaries that hide coupling and harm testing or deployment.

Source: pp. 107–109, 113–114.

## Discovery techniques and traps

Pip’s Manager-per-table diagram misses auctioneer actions and system events. The entity trap confuses storage relationships with workflow responsibilities. Actor/actions, event storming, and workflow analysis reveal different useful views; none is universally superior. Pip selects a domain-appropriate technique and iterates toward capture, tracking, streaming, session, and payment responsibilities.

Source: pp. 109–113.

## Quantum and deployment choice

Pip compares authoritative auction tracking with high-volume read streams. One coherent quality profile may fit a simple monolith and database; distinct profiles can justify several quanta. Distribution follows real coupling and operational needs, not enthusiasm for many services. Pip budgets deployment complexity before separating the bookshop’s workloads.

Source: pp. 114–116.

## Transfer challenge: Partition a live auction platform

A live auction platform has bidders viewing video and bids, an auctioneer entering authoritative live bids, and system tasks that start auctions, track activity, and charge winners. Bidder traffic can surge; the auctioneer path must remain reliable and ordered. A first diagram contains one BidCapture component and a set of entity managers. Choose a restructuring approach that matches workflows and quality differences.

### Domain components

Groups capture, tracking, streaming, session, and payment around workflows and roles, making business change and quality differences visible. Some concerns or customization can repeat, and boundaries require explicit contracts and data ownership. Auctioneer Capture separates from bidder capture, while BidTracker unifies ordered streams. VideoStreamer and BidStreamer can scale independently when evidence supports distribution.

### Entity managers

Maps quickly to existing tables and makes basic CRUD operations straightforward for a simple data-centric application. Workflows become scattered or hidden behind generic managers; different load and reliability needs remain mixed, and future migration is harder. The team can ship simple CRUD screens quickly, but live ordering and auctioneer reliability need cross-manager coordination. The diagram must be revisited once real workflows and failure modes appear.

Domain partitioning is not always superior, and CRUD scaffolding can fit a genuinely simple problem. The architectural test is whether components represent cohesive behavior and support the required quality profiles; the initial partition should evolve with evidence.

## Draft and revise components

Take one feature with at least two user roles. Propose three coarse components, assign behaviors, identify one quality difference, and describe the feedback that would cause a split or merge.

- Context
- Decision
- Trade-off
