# Chapter 2: Discerning Coupling in Software Architecture

*Pip’s adventure: Separate boats, one tether. Fictional teaching story; concepts follow the cited source.*

Source: text lines 800–1200.

Pip draws independent services for island deliveries, but one database and a chain of waiting calls still bind them together. The crew distinguishes deployment dependencies from runtime interactions, then examines communication, consistency, and coordination separately.

## Coupling and change

Pip changes parcel assignment and three other services need edits. Coupling means a change in one part might require another to preserve functionality. Pip finds the entangled parts and traces their change impact. Useful systems must communicate; the aim is a deliberate amount of coupling, not none.

Source: text lines 800–846.

## Architecture quantum

Pip celebrates two service processes sharing one essential database. Separate processes do not necessarily create separate architecture quanta. A quantum is independently deployable, with high functional cohesion, high static coupling, and synchronous dynamic coupling. Pip checks the actual deployment and dependency boundary; a distributed topology can still form one quantum.

Source: text lines 847–977.

## Static versus dynamic

Pip lists what the delivery service needs before it can start. Libraries, runtime infrastructure, database, and broker are static coupling. The request sent through that broker is dynamic interaction between quanta. Pip traces both wiring and runtime calls to understand operational blast radius.

Source: text lines 978–1000.

## Three dynamic dimensions

Pip lets parcel intake continue while assignment is pending. Communication asks wait or message; consistency asks atomic agreement or eventual convergence. Coordination asks central orchestration or participant choreography. The dimensions interact: synchronous mediation eases atomicity, while asynchronous eventual choreography can improve scale and elasticity.

Source: text lines 1001–1085.

## Transfer challenge: Assign a ticket

Ticket intake must remain available during spikes. Assignment uses skills and location, and the customer eventually needs an expert confirmation. The team can make intake synchronously call assignment, or publish an asynchronous request and model a pending state.

### Synchronous call

The caller gets an immediate assignment result and a straightforward atomic flow. Assignment latency or failure directly affects intake responsiveness and availability. The customer receives an answer in one request when both services are healthy, but spikes or assignment outages can stall ticket creation.

### Async request

A queue buffers spikes and lets intake continue while assignment processes independently. The workflow needs eventual consistency, status handling, retries, and a response path. The ticket is accepted quickly and later receives an assignment event; operators must explain and monitor pending tickets.

The choice occupies a point in the communication, consistency, and coordination space. The right point depends on latency, availability, transactionality, and operational ability to handle intermediate states.

## Map a quantum

Draw one deployable unit and map its bootstrap dependencies and one runtime workflow, then classify each dynamic choice.

- Context
- Decision
- Trade-off
