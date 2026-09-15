# Chapter 13: Acting on and Debugging SLO-Based Alerts

*Pip’s adventure: The budget alarm rings before the allowance is gone. Fictional teaching story; concepts follow the cited source.*

Source: text lines 5232–5811.

Pip’s remaining budget looks comfortable while failures are arriving fast. Acting on burn requires context about rate, baseline, and window history. Event-level evaluation reveals partial impact and connects the warning to the requests worth investigating.

## Budget consumption needs context

Pip sees rapid failures consuming a still-substantial allowance. Burn describes the pace of error-budget consumption. A short surge can threaten the objective before the budget reaches zero. Pip alerts early enough for useful response, considering current consumption and the objective’s window.

Source: text lines 5232–5811.

## A forecast depends on its baseline

Pip projects a five-minute burst across the coming hours. A short baseline reacts quickly but can exaggerate brief noise; a long baseline can dilute a new failure. Lookahead extends recent behavior, not certainty. Pip checks what was extrapolated and whether traffic changes or mitigation invalidate it.

Source: text lines 5232–5811.

## Rolling windows can recover

Pip’s sliding-window budget improves without a new deployment. Older failures have aged out of the evaluated population. History-aware forecasts can account for that expiration rather than keeping old errors forever. Pip distinguishes window mechanics from evidence that a technical fix improved current behavior.

Source: text lines 5232–5811.

## Count failing events accurately

Pip finds 6% of requests violating the latency condition. Marking the whole minute bad would count more than those affected events. Event-based evaluation preserves individual failures and their attributes. Pip follows the budget alert directly to the requests behind this partial outage.

Source: text lines 5232–5811.

## Transfer challenge: A sharp but brief burn

A short error burst generates an alarming budget forecast just as a mitigation is deployed.

### Inspect current failing events and the forecast baseline

Tests whether burn persists after the intervention. Requires checking fresh data rather than relying on the alert alone. The response can be adjusted to the actual post-mitigation rate of failure.

### Treat the original forecast as a certain future breach

Keeps attention on a potentially serious event. Can misrepresent the future if the underlying error rate has changed. The team may continue acting on conditions that no longer hold.

Use the alert to mobilize, then update the diagnosis with fresh evidence and the forecast’s assumptions.

## Explain a budget forecast

Draft the information a responder needs alongside a predictive alert.

- Baseline and lookahead
- Affected event population
- Fresh evidence after mitigation
