# 7. Instrumentation with OpenTelemetry

Separate instrumentation from its destination

OpenTelemetry offers a shared approach to generating and transporting telemetry without binding application code to one backend. The chapter separates the instrumentation interfaces from the implementation that processes and exports the resulting data. This distinction lets library authors expose useful operations while application owners configure how telemetry is handled. Automatic instrumentation is a practical starting point for common frameworks and network calls, but it cannot know the business decisions hidden in custom code. Manual spans and attributes supply that missing context. The useful adoption path is therefore incremental: establish working collection, verify continuity across services, and enrich the operations needed to answer actual questions about customers and application behavior.

## API and SDK have different jobs

Instrumentation calls an API to describe operations and add context. An SDK supplies the configured implementation that processes those calls and arranges telemetry handling. Keeping these roles separate allows reusable libraries to include instrumentation without dictating a particular backend or application-wide export configuration to every program that uses them.

## Export is a replaceable boundary

Exporters translate and send telemetry to a destination, while a collector can receive and process data outside the application. This separation reduces the amount of application instrumentation that must change when the destination changes. It does not make every backend identical: supported attributes, processing, and analysis capabilities still require validation.

## Automatic coverage establishes a baseline

Automatic instrumentation can describe common framework activity and outbound calls without manually wrapping every operation. This quickly exposes service relationships and timing. However, generic libraries do not know why a discount was selected or which business workflow a request follows, so automatic coverage should be evaluated against the questions the team actually needs to answer.

## Custom context completes the picture

Manual instrumentation records meaningful application operations and attributes absent from generic coverage. Add context where the code makes decisions whose outcomes may matter later, and attach it to the relevant span. Consistent names help teams compare those values across requests and services rather than rediscovering a different vocabulary at every boundary.

## Apply it

Choose a business decision that automatic framework spans cannot explain.

Source: *Observability Engineering*, chapter 7; supplied text lines 3085–3448. These notes are an original synthesis; examples and activities are illustrative.
