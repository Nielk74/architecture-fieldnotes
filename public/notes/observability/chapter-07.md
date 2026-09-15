# Chapter 7: Instrumentation with OpenTelemetry

*Pip’s adventure: Automatic spans miss the promotion that mattered. Fictional teaching story; concepts follow the cited source.*

Source: text lines 3085–3448.

Pip installs instrumentation and immediately sees HTTP calls, but not the promotion rule behind a failed checkout. OpenTelemetry separates recording operations from handling and exporting them. Custom domain context completes the baseline without binding every library to one backend.

## API and SDK have different jobs

Pip’s shared client library creates spans through the instrumentation API. The SDK supplies the configured implementation that processes those calls and handles telemetry. Keeping the roles separate leaves application-wide export choices to the application. Pip can reuse instrumented libraries without forcing every caller to adopt one destination.

Source: text lines 3085–3448.

## Export is a replaceable boundary

Pip changes telemetry backends without rewriting span creation. Exporters translate and send data; a collector can receive and process it outside the application. That replaceable boundary limits instrumentation changes. Pip still validates supported attributes, processing, and analysis because destinations are not interchangeable in every capability.

Source: text lines 3085–3448.

## Automatic coverage establishes a baseline

Pip’s automatic coverage shows framework work and outbound HTTP timing. It quickly exposes service relationships without wrapping every operation manually. Generic libraries do not know why a discount was chosen. Pip evaluates coverage against real investigative questions before declaring instrumentation complete.

Source: text lines 3085–3448.

## Custom context completes the picture

Pip records the chosen pricing rule where the order code evaluates it. Manual instrumentation adds meaningful operations and attributes beyond generic coverage. Consistent names support comparison across services and requests. Pip attaches context to the relevant span instead of inventing another vocabulary at every boundary.

Source: text lines 3085–3448.

## Transfer challenge: Generic traces miss the business decision

An order fails only under one promotion, but automatic HTTP spans contain no promotion context.

### Add the selected promotion to the relevant span

Makes the failing business cohort searchable. Requires understanding the decision point and maintaining the attribute. Promotion-specific failures become a cohort the investigator can compare.

### Enable additional generic HTTP hooks

May reveal more transport details. May still omit the application decision behind the failure. Transport visibility improves without necessarily exposing the selected promotion.

Choose instrumentation based on the missing question, not only on how many spans it produces.

## Locate manual instrumentation

Choose a business decision that automatic framework spans cannot explain.

- Decision point in code
- Operation or attribute to record
- Query that would use it
