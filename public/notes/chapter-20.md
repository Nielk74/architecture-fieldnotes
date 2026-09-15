# Chapter 20: Analyzing Architecture Risk

*Pip’s adventure: The quiet risk belongs on the map too. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 297–314.

Pip’s risk workshop begins with independent notes, not the loudest person’s opinion. Impact and likelihood clarify ratings; context and trends make the assessment useful. Mitigations need owners and costs, and new features can change yesterday’s risk picture.

## Impact and Likelihood

Pip calls a clustered database outage high risk based only on its impact. The chapter scores impact first and likelihood second as 1, 2, or 3, then multiplies them. Products 1–2 are low, 3–4 medium, and 6–9 high. High impact with low likelihood scores 3, so Pip discusses a contextual medium risk.

Source: pp. 297–298.

## Useful Risk Assessments

Pip’s full risk table overwhelms a security review. Assessments compare meaningful characteristics across services or domains; totals reveal accumulation. Pip filters to the decision’s context and shows whether scores improve or worsen. A clear key and unambiguous trend markers prevent a compact presentation from hiding the direction.

Source: pp. 298–301.

## Risk Storming

Pip asks participants to rate the current architecture independently before discussing performance risk. Risk storming focuses on a dimension and includes architects, senior developers, and technical leads. One quiet colleague flags an unfamiliar cache others overlooked. Independent identification protects that evidence from dominant voices before consensus and mitigation design.

Source: pp. 301–306.

## Mitigation and Cost

Pip’s agreed risk needs an actual design response. Queues add back pressure, separated databases isolate concerns, and caches can reduce repeated load. Mitigation costs money and effort; stakeholders decide whether the reduction justifies it, while unknown technology receives the chapter’s highest rating until understood. Pip considers a focused prototype, training, or a simpler choice.

Source: pp. 306–307.

## Continuous Scenarios

Pip revisits risk after demand and dependencies change. The nurse-diagnostics case finds a 500-request-per-second provider inadequate for flu-season demand. Queues, an outbreak cache, data separation, and gateways address different elasticity, availability, and security concerns. Pip repeats scenario-based assessment as architecture evolves; the same impact-likelihood reasoning can also examine iteration delivery risk.

Source: pp. 307–314.

## Transfer challenge: Prepare the nurse diagnostics system

A nurse portal and a self-service site depend on a third-party diagnostics engine limited to 500 requests per second. Nurses need medical record access, patients must not receive it, and outbreaks can create hundreds of thousands of self-service requests. The architecture has a central database and one API gateway. Run a focused risk storm and choose the first mitigation to fund.

### Harden the gateway

Separate gateways by user type reduce the path from patients or administrators to medical records. Security isolation alone leaves provider throughput and central database availability risks unresolved. The security boundary becomes easier to reason about and audit, but an outbreak can still overload diagnostics and a database failure can still stop call routing. The team needs additional risk dimensions.

### Stage by risk dimension

Independent workshops expose availability, elasticity, and security risks, then let stakeholders fund targeted changes such as queues, caching, and database separation. Several sessions and topology changes consume design time and add operational components. The team can prioritize the highest-impact risks: isolate profile data, buffer and prioritize provider requests, cache common outbreak answers, and restrict gateway reachability. Each change remains tied to a measured concern.

Risk storming does not produce a magic architecture or remove all uncertainty. Its value is shared visibility, informed consensus, and a traceable choice about mitigation cost. Focus each session on one dimension when possible.

## Run a risk storm

Draw a small architecture and assess one dimension. Give each area an impact and likelihood score, explain two disagreements, and propose one mitigation with its cost and residual risk.

- Context
- Decision
- Trade-off
