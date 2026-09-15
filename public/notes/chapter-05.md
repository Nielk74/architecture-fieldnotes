# Chapter 5: Identifying Architectural Characteristics

*Pip’s adventure: Listen before choosing the architecture. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 65–75.

Pip translates the bookshop’s growth plans into engineering concerns, then checks what the words really mean. Requirements are clues, domain knowledge supplies questions, and collaboration establishes priorities. A timeboxed design exercise exposes assumptions before implementation makes them costly.

## Translate domain concerns

Pip hears that pricing must finish by closing time. Business goals may imply scale, availability, reliability, recovery, auditability, and correctness—not merely speed. Mergers can suggest interoperability; faster delivery can suggest testability and deployability. Pip uses shared domain language and a short contextual list to avoid losing meaning in translation.

Source: pp. 65–67.

## Read explicit requirements

Pip reads “1,000 registrations over ten hours” and assumes even traffic. The chapter’s example concentrates registrations in the final ten minutes. User counts, external services, mobile access, and payments are clues to scale, fallback, performance, and security questions. Pip validates workload and constraints rather than automatically adding every possible capability.

Source: pp. 66–72.

## Use implicit domain knowledge

Pip expects lunch-order demand to peak around meals, then asks stakeholders to confirm. User habits, failure impact, and operational context reveal implicit availability, elasticity, recovery, or reliability needs. A mapping dependency also prompts a graceful-fallback question. Pip requires importance and structural consequences before turning domain intuition into architecture.

Source: pp. 70–74.

## Practice with architecture katas

Pip practices with the chapter’s sandwich-ordering kata before redesigning the shop. A compact brief, users, requirements, and context support a timeboxed design and presentation. Franchises and overseas plans raise scale, customization, internationalization, and mobile questions. Feedback trains domain reasoning and trade-off analysis; the point is not one winning diagram.

Source: pp. 67–69.

## Prioritize and collaborate

Pip asks stakeholders for their top three characteristics instead of a forced full ranking. The least important candidate may belong in ordinary design rather than special structure. Budget, feasibility, skills, and timing constrain the answer. Pip includes developers, operations, analysts, and domain partners in deciding whether promotions need plug-ins or simpler design patterns.

Source: pp. 65–75.

## Transfer challenge: Prepare a franchise ordering launch

A franchised food company is launching mobile ordering. It expects thousands of users now and perhaps millions later, with intense meal-time bursts. Shops need national and local promotions, overseas expansion is possible, mapping services may fail, and the corporate budget favors inexpensive staff. The team can fund three structural priorities in the first release. Select a focused set and explain what you would leave to application design.

### Scale and resilience

Handles growth and meal-time bursts while keeping ordering available when a mapping dependency fails. Local customization and internationalization may rely on simpler design mechanisms, increasing future change effort. The system sets capacity and burst targets, isolates mapping with a fallback, and uses third-party payment handling. Local promotions use configurable workflow code until evidence justifies a plug-in structure.

### Customization and portability

Makes franchise variations and future overseas deployment easier to introduce without rewriting core behavior. Extra extension points and localization structure consume early budget and may leave peak ordering less robust. The architecture isolates promotion and locale variation behind explicit contracts. The team must cap launch scope or accept that meal-time scaling and mapping resilience need later investment.

The chapter’s method does not prescribe one priority order. Translate the domain, surface implicit traffic and failure behavior, ask stakeholders for the top three, and verify whether each concern changes structure enough to justify its cost.

## Run a mini architecture kata

Write a four-sentence domain brief, then derive three driving characteristics from explicit requirements and implicit context. Explain one characteristic you would defer and what evidence would change that decision.

- Context
- Decision
- Trade-off
