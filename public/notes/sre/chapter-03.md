# Chapter 3: Embracing Risk

Choose reliability by user impact, cost, and the risk left for change

Reliability is a choice about acceptable risk, not a contest to collect the most nines. Extra availability consumes money and engineering time that could deliver features or reduce other risks. The appropriate target depends on the service’s users, business role, and consequences of failure. A partial outage is easier to describe through unsuccessful requests than through a single global up/down state, although requests can differ greatly in value. Infrastructure often needs distinct service classes because latency-sensitive clients and batch clients want different resource trade-offs. An error budget makes the chosen tolerance operational: measured failures consume a shared allowance, including failures caused by infrastructure. Release policy can then respond to remaining budget instead of the negotiating strength of competing teams.

## Reliability has an opportunity cost

Moving toward higher availability requires additional resources, engineering work, and restrictions on change. Those costs must be compared with the benefit users or the business receive. A service can be overengineered when further reliability is less valuable than other improvements. Choosing the target requires product judgment about user expectations and failure consequences, supported by engineering estimates of cost and feasibility.

## Request-based availability captures partial failure

Time-based availability divides uptime by the whole observation period. For a distributed service that remains partly available, successful requests divided by total requests often represents impact more usefully. The denominator and measurement period must be explicit. This aggregate remains an approximation: losing a critical transaction can matter more than losing an optional refresh, even if both count as one failed request.

## Different clients need different service classes

An interactive client benefits from short queues and spare capacity, while a batch client may accept delay in exchange for high throughput and lower cost. A shared infrastructure service can expose separate classes with different redundancy, placement, and resource policies. Clients then select the lowest-cost class that still meets their needs instead of forcing every workload to fund the strictest target.

## Measured failures consume a shared budget

The error budget is the allowable unreliability implied by the service objective. Monitoring records consumption regardless of whether a release, network failure, or other event caused it. Teams agree how remaining budget changes release policy. This gives both developers and SRE an incentive to reduce change risk: avoiding failures preserves room for useful experiments and new features.

## Apply it

Compare an interactive checkout service with a nightly report. Explain which failure consequences justify different objectives and define a budget-based release decision.

Source: *Site Reliability Engineering*, chapter 3, text lines 1485–1904. This note is an original synthesis; the exercise is a teaching extension.
