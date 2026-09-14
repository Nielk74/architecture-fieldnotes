# 13. Acting on and Debugging SLO-Based Alerts

Alert while there is still time to protect the budget

An exhausted error budget is a late signal for action. The chapter examines alerts that estimate whether present behavior threatens the objective soon enough for responders to intervene. Such forecasts depend on the recent baseline, the lookahead horizon, traffic patterns, and the way older events leave a rolling window. They are conditional projections, not knowledge of future failures. Event-level evaluation also avoids treating every request in a partly degraded interval as bad merely because an aggregate threshold failed. Once alerted, responders need the failing events and their context to investigate impact and causes. Combining budget-aware detection with exploratory diagnosis makes the alert a starting point for protecting user experience rather than another isolated warning about a component.

## Budget consumption needs context

Burn describes how quickly failures consume the permitted unreliability. A short period of elevated errors may threaten the objective even while substantial budget remains. Alerting should leave enough time for a useful response, considering current consumption and the objective’s window rather than waiting for the remaining budget to reach zero.

## A forecast depends on its baseline

A lookahead projection extends recent behavior into a future horizon. A very short baseline reacts quickly but may overreact to a brief burst; a long baseline smooths noise but can dilute a new failure. The responder should understand which behavior was extrapolated and recognize that changing traffic or remediation can invalidate the projection.

## Rolling windows can recover

In a sliding-window objective, older events eventually leave the evaluated population. Forecasts that consider the window’s history can account for failures aging out, rather than assuming every old error remains forever. This matters when estimating future compliance or interpreting a recovering budget; improvement in the displayed budget is not necessarily proof of a new technical fix.

## Count failing events accurately

A good-minute/bad-minute measure can classify an entire interval as bad when only some requests violated the condition. Event-based evaluation counts the individual failures instead and retains their attributes. This gives a more precise account of partial outages and a direct path from the budget alert to the requests a responder should investigate.

## Apply it

Draft the information a responder needs alongside a predictive alert.

Source: *Observability Engineering*, chapter 13; supplied text lines 5232–5811. These notes are an original synthesis; examples and activities are illustrative.
