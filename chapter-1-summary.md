# Chapter 1 — Pip opens a bookshop

Original paraphrases of *Fundamentals of Software Architecture* (Richards and Ford, 2020), Chapter 1, printed pp. 1–20. Pip’s adventure is a fictional teaching extension, not a reported source case.

Pip opens a tiny bookshop. One order reveals four kinds of choices—and why a blueprint cannot explain them all.

## Four dimensions · pp. 3–7

### Structure gives the system its shape.

Pip follows an order from storefront to business rules and storage. Layers organize those responsibilities; microservices or a microkernel would arrange them differently. The shape explains how parts fit, not the whole architecture.

### Characteristics define success.

Pip’s promotion brings readers—and a slow page. Selling books is the feature; performance, availability, and maintainability describe how well the shop must work. Pip agrees on a measurable response target and a check, rather than treating quality as a later extra.

### Decisions set the boundaries.

Pip spots the storefront taking a shortcut straight to the database. The team’s construction rule requires service-layer access. A justified exception is a variance: Pip brings it for explicit review instead of hiding the shortcut.

### Principles guide the choices.

Pip usually queues order notifications, then meets a reader needing immediate confirmation. “Prefer asynchronous notifications” is guidance, not an absolute rule. Pip considers a direct response when the context makes it the better fit.

## Eight expectations · pp. 8–12

### Make decisions

Pip protects the shop’s goals with constraints, naming a product only when necessary and leaving other choices local.

### Keep analyzing

Pip’s once-useful plan meets new traffic and teams. The decision needs another look as its context changes.

### Stay curious

Pip tests a new tool against the shop’s problem. Novelty alone cannot justify adopting it.

### Check compliance

Pip’s automated check catches a forbidden dependency. Reviews handle justified exceptions explicitly.

### Build breadth

Pip explores unfamiliar platforms and languages, uncovering alternatives and costs that one specialty missed.

### Know the business

Pip listens to booksellers before drawing boundaries. Their language and priorities give the architecture its purpose.

### Work with people

Pip invites a quiet colleague’s concern. Listening, explaining, and mentoring help the team build together.

### Navigate the organization

Pip asks who carries a change’s cost. Incentives and decision authority shape the negotiation.

## The blueprint meets its environment · pp. 13–19

Pip changes an order rule and an automated check tests the architectural goal. A failed-deployment rehearsal reveals what operations can support. Observing the next release challenges a design assumption. Updating shared book data affects two capabilities. Engineering, operations, process, and data shape architecture together; their changing constraints require decisions to be revisited.

## Two laws and a decision · pp. 19–20

Pip’s three-person shop keeps one deployment manageable, accepting shared releases and scaling. Later, four teams with uneven workloads may gain enough from independence to accept distributed troubleshooting and stronger automation. Every choice has trade-offs; the context decides which costs are worth accepting. These scenarios and their simulated effects are teaching examples, not measured comparisons or universal rankings.

Pip’s future teammate can follow the services but cannot recover the reasoning from the diagram alone. Why matters more than how: record the context, choice, and accepted cost so changed circumstances can prompt a useful review. The short ADR activity is a teaching aid, not a template prescribed by Chapter 1.
