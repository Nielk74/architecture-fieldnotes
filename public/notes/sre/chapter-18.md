# Chapter 18: Software Engineering in SRE

Source: text lines 7221–7875 of the supplied book extract.

SRE software development makes service growth sustainable by replacing repeated operational work with durable tools. The chapter develops this argument through Auxon, an internal capacity planning product. Spreadsheet plans become brittle when demand, machine deliveries, or dependency requirements change. Auxon instead captures service intent, combines it with performance measurements and resource supply, and computes allocations while exposing unsatisfied requirements. Its development also illustrates how an SRE team can become an effective product team: start with a useful approximation, preserve replaceable interfaces, recruit suitable early customers, and support adoption. Continued production involvement keeps requirements grounded. Internal software still needs reviews, testing, documentation, ownership, and realistic commitments because successful tools can become essential production dependencies.

## Production experience as product knowledge

SRE engineers encounter the operational constraints that internal tooling must handle: failure, scale, maintenance, and integration with existing services. Keeping developers involved in production creates a direct feedback path between a tool and its users. Turning that experience into a supported product can reduce repeated work across teams, but requires product planning and engineering discipline beyond writing a local repair script.

## Intent-based capacity planning

Intent describes why capacity is needed rather than fixing the allocation in advance. A service can specify demand, geographic constraints, dependencies, and redundancy instead of requesting particular machines. Performance models translate demand into resource consumption, while priorities make shortages explicit. Auxon uses these inputs to generate an allocation plan that can be recomputed when forecasts or available supply change.

## Approximation behind stable interfaces

An early implementation can establish usefulness without solving every difficult component perfectly. Auxon initially used a heuristic solver behind an interface that later accommodated a stronger optimizer. Modular inputs and outputs also allowed different forecasting and deployment tools to integrate. The point is to isolate uncertainty while proving a concrete use case, so improved models do not require rebuilding the whole product.

## Adoption and production standards

An internal tool succeeds when teams can afford to learn and trust it. Documentation, onboarding help, credible release plans, and early customers with a pressing need all support adoption. The team should demonstrate useful improvements rather than promise universal coverage. As adoption increases, code review, integration testing, and production readiness become especially important because other operators increasingly depend on the tool.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
