# Chapter 16: Tracking Outages

Group alerts into incidents and find recurring costs across services

Detailed postmortems explain major incidents, but they miss the cumulative burden of many small events. An outage tracker preserves notifications and their context so teams can group related alerts, annotate response, and analyze patterns over time. The chapter distinguishes acknowledgment and escalation from incident organization: one mechanism ensures somebody receives a page, while another turns many notifications into a usable operational history. Flexible tags connect events with causes and actions without demanding a perfect taxonomy in advance. Counts become useful when compared with prior periods and interpreted alongside severity, effort, and monitoring behavior. Cross-team visibility can reveal shared infrastructure problems or a dependency owner who has not been notified. The same record also improves shift handoffs and weekly service reviews.

## Notifications and incidents are different units

One outage may generate many alerts across services, while some notifications are false positives or audit events rather than outages. Grouping related notifications into an incident preserves their evidence without treating each page as a separate failure. Tracking both alerts per incident and incidents over time distinguishes notification noise from the frequency of underlying service problems.

## Capture context with low workflow friction

Outalator passively records notifications and follow-up replies, then allows annotations and important details to be highlighted. This adds history to existing response workflows instead of requiring every responder to reconstruct events later. Escalator has a separate responsibility: it tracks acknowledgment and escalates unanswered notifications. A received or acknowledged page is therefore not equivalent to an explained or resolved incident.

## Flexible tags support useful comparisons

Tags add cause, action, and other metadata to events so teams can find related problems and trends. Hierarchical conventions allow a broad category to grow more specific when needed, while free-form use lets teams discover what distinctions are useful. Inconsistent spelling and vague labels still reduce analytical value, so conventions should mature with actual use rather than prevent initial adoption.

## Interpret trends before choosing investments

Incident history supports baseline comparisons, cross-service patterns, and the identification of recurring infrastructure costs. Raw counts alone do not establish severity or the best investment: high counts can reflect noisy monitoring, client misuse, or many inexpensive incidents. Combine frequency with impact and response effort. Shared visibility also helps responders recognize that a dependency owner may need notification even when their own alerts remained quiet.

## Apply it

Group a week of notifications into incidents and identify one recurring problem worth investigating. Explain how you avoid confusing alert volume with impact.

Source: *Site Reliability Engineering*, chapter 16, text lines 6268–6432. This note is an original synthesis; the exercise is a teaching extension.
