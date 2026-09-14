# Chapter 10: Monitoring in Production

Original learning notes. Source: text lines 9145–9933 in the supplied book.

Production monitoring must explain more than whether the agent’s infrastructure is running. Model calls, tool invocations, retries, and user outcomes can fail independently, so traces and logs need shared identifiers and workflow context. The chapter connects instrumentation, log and trace storage, dashboards, and alerting into an operational feedback system. Version information helps distinguish a deployment regression from ordinary variation, while semantic measures reveal misunderstood intent or unhelpful results that uptime cannot show. Useful signals lead to owners and response paths. Product, model, and infrastructure teams need a common view so repeated calls, high cost, or abandonment become actionable service problems.

## Monitoring layers

Production monitoring spans infrastructure, agent behavior, tools, outcomes, and user experience. CPU or uptime alone cannot reveal a misunderstood intent or a harmful action.

## Traces and logs

A trace links a request to model invocations, tool calls, latency, and results; logs preserve searchable event detail. Together they make a probabilistic workflow inspectable while respecting data sensitivity.

## Signal versus noise

Monitoring asks whether intent was understood, the right tool selected, and the result useful. Thresholds and sampling should distinguish true regressions from natural variation to avoid overreaction.

## Alerts and response

An alert is valuable when it maps to an owner and an action. Dashboards, alerts, and post-incident analysis turn production behavior into learning and feed improvements.

## Teaching extension

Users report wrong tool choices, but dashboards show healthy CPU and uptime.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
