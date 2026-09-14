# Chapter 3: Incorporating Societal Context

Original learning notes. Source: text lines 1676–2317 in the supplied book.

A deployed system participates in a social environment that changes its behavior and is changed by it. Identifying agents, precepts, and artifacts makes people, beliefs, institutions, and infrastructure visible before they disappear inside a simplified technical model. Causal assumptions and feedback diagrams help teams discuss how an intervention might alter later inputs or outcomes. The health-care example shows why a convenient proxy can misrepresent the need the system is meant to address. The toxicity-classification case shows the value of examining data with specialists and responding constructively to criticism. A useful model remains open to revision as context changes.

## Societal context

Societal context is a dynamic complex system surrounding software. It includes agents such as users and institutions, precepts or beliefs held by those agents, and artifacts such as laws, interfaces, datasets, and physical infrastructure.

## Agents, precepts, artifacts

Listing these three categories prevents an abstract model from erasing the people and institutions that shape outcomes. For SpeekSplendid, speech-impaired users, coaches, accessibility rules, microphones, language norms, and beliefs about “good” speech all matter.

## Explicit causality

Abstraction helps engineers reason about a system, but hidden assumptions can distort it. Writing causal assumptions explicitly makes a model discussable: a change in access may alter behavior, which changes data, which feeds a later decision.

## Causal loops

Causal loop diagrams show reinforcing and balancing feedback rather than only a one-way pipeline. They help teams seek other perspectives, choose subject-matter collaborators, benchmark assumptions, and identify where an intervention may create a new effect.

## Teaching extension

SpeekSplendid scores speech and suggests coaching. Engineers must choose whether to model users, institutions, beliefs, and artifacts explicitly before launch.

Both choices are defensible under different constraints; the responsible decision states the accepted consequence and the evidence that could change it.

Create a causal map for a system. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
