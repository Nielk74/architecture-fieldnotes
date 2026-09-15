# Chapter 22: Addressing Cascading Failures

*Pip’s adventure: The recovering fleet cannot carry yesterday’s load. Fictional teaching story; concepts follow the cited source.*

Source: text lines 9020–9888.

Pip removes an overloaded replica and its peers fail next. Cascades reduce capacity while creating more work. The crew sheds load, preserves useful responses, bounds retries, and restores traffic only as recovering capacity can support it.

## Positive feedback and reduced recovery capacity

Pip removes an overloaded replica and sends its traffic to already struggling peers. Slow requests retain threads and memory, reinforcing failure. Restarting replicas leave less capacity than before the incident. A fleet formerly serving 10,000 requests per second cannot recover at 9,000 with only a tenth healthy; Pip lowers load accordingly.

Source: text lines 9020–9888.

## Load shedding, degradation, and deadlines

Pip skips optional enrichment to preserve useful search results. Load shedding rejects work before exhaustion; graceful degradation reduces work per useful response. Small queues, original deadlines, and propagated cancellation avoid serving requests after callers stop waiting. Pip tests these rarely used paths before an overload depends on them.

Source: text lines 9020–9888.

## Retry budgets and randomized backoff

Pip finds three retrying layers allowing four attempts each. One user action can become sixty-four database attempts. Budgets limit total amplification, exponential backoff spaces attempts, and jitter prevents synchronized retries. Pip assigns retry ownership and explicit nonretryable signals so these complementary mechanisms work together.

Source: text lines 9020–9888.

## Testing and recovering beyond the breaking point

Pip load-tests beyond failure and watches whether the service recovers. Gradual and sudden traffic, cold caches, restarts, and blackholed optional backends reveal hidden dependencies. During a cascade, Pip contains the trigger and admits enough traffic to warm surviving capacity gradually. Restarting everything could discard the very caches and capacity needed for recovery.

Source: text lines 9020–9888.

## Transfer challenge: Stop a retry cascade

A profile service slows, and three clients retry failed calls. CPU is rising from retries even though incoming traffic is flat.

### Add jitter, limits, and a retry budget

Retry pressure becomes bounded and less synchronized. Some requests fail sooner and need a fallback. The team caps retries per request and uses a process budget while repairing the dependency.

### Increase every client timeout and retry count

Longer timeouts may tolerate a brief dependency pause. The cascade consumes more capacity and delays recovery. The added retries deepen the overload and widen the outage.

The retries are adding load even though original demand is flat. Bound total retry traffic, add randomized backoff, and address the dependency’s trigger. Recovery may require temporarily reducing demand below its former safe level.

## Trace a cascade

Draw a feedback chain from one slow dependency to resource exhaustion. Specify how to break it and how to demonstrate recovery.

- Feedback
- Limits
- Recovery test
