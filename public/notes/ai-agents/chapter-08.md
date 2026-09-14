# Chapter 8: From One Agent to Many

Original learning notes. Source: text lines 6601–8457 in the supplied book.

One agent is often the simplest starting point, but a growing collection of tools and responsibilities can make a single context difficult to manage. Splitting work among specialists can clarify roles and permit independent testing and reuse. The split also creates a distributed system: information must move between agents, partial results must be combined, and failures must be contained. Sequential handoffs, parallel work, coordinators, shared state, and messaging infrastructure offer different latency and consistency trade-offs. Select the organization around the task and its dependencies. More agents are useful when specialization outweighs the additional calls, coordination, and operational complexity.

## Single-agent fit

One agent is often suitable when tasks are modest, tools are manageable, and one context can hold the work. It minimizes latency, resource use, and coordination overhead.

## Specialization

Multiple agents divide work by role or capability, such as forecasting, procurement, or exception handling. Specialization can improve focus but creates interfaces and handoffs between agents.

## Communication patterns

Agents may pass messages sequentially, work in parallel, or use a coordinator and shared state. The pattern determines latency, consistency, failure propagation, and how much context each agent sees.

## Coordination cost

More agents add model calls, routing, synchronization, debugging, and operational expense. The chapter applies software architecture lessons: split when boundaries clarify work, not merely because multiagent systems are fashionable.

## Teaching extension

Forecasting, procurement, and exceptions need different tools; coordination time is limited.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
