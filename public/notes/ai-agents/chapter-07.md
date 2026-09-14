# Chapter 7: Learning in Agentic Systems

Original learning notes. Source: text lines 5525–6600 in the supplied book.

Agent learning can improve later behavior without retraining the model. Examples, retrieved experience, and stored reflections alter the context used for subsequent attempts; their usefulness depends on the quality and relevance of the feedback retained. Parametric approaches instead change model weights, using demonstrations, preferences, or task-specific reward signals. These methods offer different forms of specialization and impose different data, training, and evaluation costs. Learning is an optional investment, not a prerequisite for a useful agent. Compare the expected improvement with added latency and maintenance, and check whether a change helps representative tasks rather than merely reproducing a successful remembered case.

## Nonparametric learning

Nonparametric techniques improve behavior without changing model weights, for example by adding examples, reflections, or retrieved experience. They are easier to revise but consume context and can overfit to remembered cases.

## Exemplar learning

Providing successful examples in a prompt guides behavior through pattern matching. More examples can help, but context limits and example quality constrain the benefit.

## Reflexion

The Reflexion loop performs an action sequence, logs the trial, generates a self-critique after failure, updates memory, and injects the reflection on a later run. The loop adds latency and can preserve a bad critique.

## Fine-tuning

Parameter updates adapt weights to a dataset and can make behavior more consistent. Training costs, data quality, regressions, and evaluation burden mean learning is not automatically worth the investment.

## Teaching extension

A delivery agent repeatedly chooses an unavailable route. The team has few labeled examples.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
