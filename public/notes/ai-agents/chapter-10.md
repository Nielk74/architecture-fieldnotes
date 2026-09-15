# Chapter 10: Monitoring in Production

*Pip’s adventure: Green dashboards, stranded visitors. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 9145–9933 in the supplied book.

Pip’s museum dashboard shows healthy machines while cancellations fail. Agent monitoring needs connected model calls, tools, outcomes, and user experience—not uptime alone. Pip follows shared request IDs and version information until the signals lead to an owner and an action.

## Monitoring layers

Pip sees healthy uptime while visitors cannot cancel tickets. An expired tool credential explains the contradiction. Monitoring spans infrastructure, agent behavior, tools, outcomes, and user experience. Pip measures completed tasks and tool errors alongside machine health.

## Traces and logs

Pip follows one request identifier through two model calls and a timed-out shipping lookup. Traces connect calls, latency, and results; logs preserve searchable event detail. Together they expose the workflow without joining unrelated visitors’ records. Pip keeps sensitive data out of unnecessary telemetry.

## Signal versus noise

Pip sees token totals climb with morning visitors. More traffic is not automatically a regression. Intent, tool choice, usefulness, thresholds, and sampling help distinguish natural variation from failure. Pip compares cost per completed task and failure rates before reacting.

## Alerts and response

Pip’s cancellation failures keep rising. An alert names the owner, affected version, and response procedure. An isolated latency wobble remains diagnostic data instead of another page. Dashboards, alerts, and incident analysis create learning only when signals lead to useful action.

## Teaching extension

Users report wrong tool choices, but dashboards show healthy CPU and uptime.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
