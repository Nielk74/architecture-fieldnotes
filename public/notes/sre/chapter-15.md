# Chapter 15: Postmortem Culture: Learning from Failure

Investigate conditions honestly and turn findings into reviewed improvements

A postmortem turns an incident into a durable explanation of impact, response, contributing causes, and preventive work. Agreeing on triggers beforehand makes this learning routine rather than dependent on embarrassment or individual preference. Blamelessness preserves the information needed for analysis: people should be able to explain what they saw and why their actions made sense at the time. It does not remove the need to identify weaknesses or complete corrective work. Collaborative drafting and review challenge shallow explanations, incomplete impact estimates, and weak action plans. Sharing the finished account helps other teams learn from the same failure without experiencing it themselves. Leadership participation, recognition, and repeated discussion sustain the practice so postmortems become useful engineering work rather than forgotten paperwork.

## Agree on postmortem triggers

Teams should decide in advance which events require a written review, such as substantial degradation, data loss, unexpected human intervention, delayed recovery, or monitoring failure. Stakeholders can also request one. Predetermined triggers reduce selective reporting and make the process predictable. The purpose is to capture significant learning, including incidents discovered manually that may reveal a gap in monitoring.

## Blamelessness preserves causal information

A blameless account examines the information, tools, constraints, and assumptions shaping an action instead of reducing the explanation to a person’s mistake. Responders can then report what actually happened without protecting themselves through omission. The review still identifies specific weaknesses and needed improvements; its focus shifts from punishing an individual to changing the conditions that made the failure possible.

## Review impact, causes, and the action plan

A useful postmortem records the incident’s impact and timeline, mitigation, contributing causes, and follow-up work. Reviewers check whether the account is complete and whether the proposed changes address the findings at an appropriate priority. Multiple causes may require multiple improvements. Assigning and tracking concrete work makes accountability visible without making blame the mechanism for obtaining reliable operations.

## Sharing makes one failure teach many teams

A completed review belongs in a searchable repository and should reach the people who can benefit from it. Reading groups, reenactments, and selected examples help transfer lessons beyond the original responders. Leadership participation and visible recognition encourage honest reporting. Sharing must preserve appropriate privacy: the chapter explicitly excludes user-identifying information even from internal postmortem documents.

## Apply it

A deployment caused failures because a configuration value was accepted without validation. Draft a blameless causal account and two follow-up actions.

Source: *Site Reliability Engineering*, chapter 15, text lines 6053–6267. This note is an original synthesis; the exercise is a teaching extension.
