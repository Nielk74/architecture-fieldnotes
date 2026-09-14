# 12. Using Service-Level Objectives for Reliability

Define reliability around a user’s successful work

Service-level objectives turn reliability from an undefined demand for perfection into a measurable agreement about acceptable service. An indicator describes a user-relevant outcome, an objective sets its target over a window, and the remaining allowance becomes an error budget. These choices require judgment: a technically convenient metric may miss the task customers actually need to complete. The chapter connects objectives with structured event data, allowing individual requests to be evaluated against success and latency criteria while retaining the context needed to investigate failures. The purpose is a shared basis for prioritizing reliability and change. Targets should reflect business needs and measurement limitations, with teams reviewing whether the chosen indicator still represents the experience they intend to protect.

## Choose a user-relevant indicator

A service-level indicator measures an aspect of the experience the service must deliver, such as successful requests or completion within an acceptable duration. Infrastructure health may explain a problem but is not automatically the outcome users need. Define the eligible population and what counts as good so the indicator has a clear meaning.

## An objective includes a window

An SLO specifies the desired level of an indicator over a time period. A percentage without a population and window leaves its meaning ambiguous. The target should express the reliability the business needs, rather than the maximum number of nines that sounds impressive or the best historical performance the team happened to observe.

## The error budget is an allowance

The complement of the objective describes the tolerated fraction of bad outcomes. For an event-based SLO, translate that fraction into requests using the eligible volume in the window. This allowance supports conversations about reliability work and delivery risk; it is not a prediction that failures will arrive evenly or a promise that each user experiences the same reliability.

## Event criteria retain diagnostic context

Evaluate each eligible event against the agreed good-or-bad condition while keeping its useful attributes. The same data can then identify which builds, routes, or customers contribute failures. An objective tells the team whether reliability is acceptable; the event context helps explain why the measured experience is changing.

## Apply it

Specify an objective for one user task with enough detail that two engineers would count it the same way.

Source: *Observability Engineering*, chapter 12; supplied text lines 4814–5231. These notes are an original synthesis; examples and activities are illustrative.
