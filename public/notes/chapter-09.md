# Chapter 9: Foundations

*Pip’s adventure: The network joins the design meeting. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 119–132.

Pip gives the bookshop an architecture label, but the label cannot answer where data lives or what happens when a call fails. Styles provide shorthand for topology and trade-offs. Distribution adds real operational work and assumptions worth questioning early.

## A style is a compact design vocabulary

Pip calls the bookshop client/server and a teammate asks where the database runs. A style names component relationships and default topology, deployment, data, and quality assumptions. Variants and local decisions can change the behavior. Pip uses the vocabulary to narrow questions, not to guarantee strengths from a label.

Source: pp. 119–121.

## From mud to partitioning

Pip’s kiosk can keep interface, rules, and storage on one computer. A unitary design can fit constraints; a Big Ball of Mud instead lacks discernible internal structure. Growing retail can separate browser, application, and database tiers through client/server variants. Pip gains separation while explicitly adding network assumptions, not merely escaping one machine.

Source: pp. 120–122.

## Monolith or distributed deployment

Pip splits checkout and inventory so inventory can scale independently. A monolith is one deployment unit; distributed architectures connect multiple units through remote protocols. Distribution may improve needed performance, scale, or availability but introduces failures and coordination. Pip budgets network calls, security, compatible contracts, and partial-result handling before claiming independence.

Source: pp. 123–124.

## The network fallacies are coupled

Pip fetches a 500-kilobyte customer record for a 200-byte name. Networks fail, have latency tails, finite bandwidth, security needs, changing topology, multiple administrators, cost, and heterogeneous equipment. These eight fallacies interact: payload, congestion, topology, and equipment affect other qualities. Pip sends necessary data and measures typical and high-percentile behavior.

Source: pp. 124–130.

## Distributed work needs operational design

Pip stores an order before remote payment fails. Distributed work needs correlated telemetry, maintained and versioned contracts, and explicit eventual-consistency design instead of one easy ACID commit. A saga can record progress and compensation using BASE-style approaches. Pip includes recovery and contract retirement in architecture, not as additions after the first incident.

Source: pp. 131–132.

## Simple decisions have long shadows

Pip considers a universal protocol because today’s platform makes it convenient. The chapter’s Java-serialization warning shows how fashionable topology choices can remain through compatibility obligations. Simple designs and explicit assumptions reduce the long shadow of architectural bets. Pip records users, expected lifetime, and removal cost before turning a temporary preference into permanent coupling.

Source: pp. 122–123.

## Transfer challenge: Keep the clinic schedule together or split it

A clinic scheduling product has a browser interface, appointment rules, reminders, and a relational database. It serves 20 clinics today, with modest traffic, a small operations team, and a six-month delivery deadline. Marketing may add a national booking campaign next year, but the volume and requirements are not yet measured. The team must choose a deployment shape while preserving correct appointment availability and affordable operations.

### Layered monolith

One deployment and one transaction boundary keep the system simple and inexpensive while the team learns the domain. All code scales and deploys together, and a failure or risky change can affect every clinic. The team can ship the first release quickly and use a shared database transaction for booking. Before a national campaign, it must measure bottlenecks and extract only a proven hot path if the monolith cannot meet demand.

### Distributed booking services

Booking, reminders, and availability can be deployed and scaled independently, with a smaller failure domain for each service. The team must operate secured endpoints, version contracts, trace requests, and handle latency and eventual consistency across booking and availability. A reminder outage need not stop booking, but a network or consistency failure can create uncertainty about a newly reserved slot. The team needs explicit reconciliation and operational ownership before launch.

Context matters: uncertain demand and a small team favor a simple starting point, while a measured, extreme booking hotspot may justify distribution. The style should follow the characteristics the product actually needs and the team's ability to operate them; neither option wins universally.

## Name the boundary before you split it

Choose one real or invented product and record the current topology, the characteristic that may require a change, and the network assumption you would measure before introducing a remote boundary.

- Context
- Decision
- Trade-off
