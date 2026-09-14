# Chapter 22: Addressing Cascading Failures

Source: text lines 9020–9888 of the supplied book extract.

Cascading failures grow through positive feedback: a failing replica shifts work to survivors, which then fail and reduce capacity further. CPU pressure, memory growth, garbage collection, queues, and retries can reinforce one another, so the visible symptom may be far from the initiating problem. Capacity planning reduces exposure but cannot replace tested overload behavior. Servers should reject excess work cheaply or produce cheaper useful results, and callers should bound retries and propagate deadlines. Cold caches and slow startup make recovery capacity smaller than steady-state capacity. Test both overload and the return from overload, including unresponsive optional dependencies. During an incident, restoring stability may require sharply reducing traffic, correcting the trigger, and then warming capacity gradually.

## Positive feedback and reduced recovery capacity

A cascade occurs when failure increases the conditions that cause further failure. Removing an overloaded replica sends more requests to its peers; slower completion also retains memory and threads longer. Once many replicas are restarting, the service has less capacity than before the incident. Returning traffic to its former normal level may therefore sustain the collapse instead of ending it.

## Load shedding, degradation, and deadlines

Load shedding rejects some work before resource exhaustion, while graceful degradation reduces the work needed to produce a useful response. Small, appropriate queues prevent requests from waiting past usefulness. Propagating the original deadline and cancellation down the dependency tree prevents servers from spending scarce resources on work whose caller has already stopped waiting. These paths need testing because normal traffic may rarely exercise them.

## Retry budgets and randomized backoff

A retry budget limits additional attempts, either for one logical request or across a process, so errors cannot generate unlimited new load. Exponential backoff spaces attempts farther apart, and jitter prevents many clients from retrying simultaneously. These mechanisms serve different purposes and should work together. Retrying at several dependency layers multiplies attempts, so retry ownership and nonretryable error signals must be explicit.

## Testing and recovering beyond the breaking point

Load tests should cross the failure threshold and then observe recovery, using both gradual and sudden traffic increases. Cold caches, restarted processes, and blackholed optional backends can expose hidden capacity dependencies. During a cascade, fix or contain the trigger, reduce traffic enough for surviving capacity, and restore load gradually. Restarting everything indiscriminately can worsen the incident by discarding warm caches and usable capacity.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
