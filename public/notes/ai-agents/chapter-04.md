# Chapter 4: Tool Use

*Pip’s adventure: A tool is not a blank cheque. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 3119–3833 in the supplied book.

Pip gives the museum guide a stock lookup and nearly gives it purchasing power too. Reading availability, drafting a reorder, and committing money are different actions. Explicit contracts and enforced permissions make those differences real even when a model chooses badly.

## Tool contract

Pip’s refund tool returns a policy rejection. Its contract requires ticket ID, amount, and currency, then returns a transaction ID or named error. Descriptions guide selection; validation checks arguments and results. Pip prevents a rejected refund from becoming a cheerful success message.

## Local tools

Pip installs a fast local document parser. Local functions avoid network calls but still need packaging, scaling, security, and maintenance in every deployment. A parser fix now needs distributing across museum agents. Pip tracks versions so convenience does not hide drift.

## Remote protocols

Pip replaces three catalog copies with one remote service. A shared protocol centralizes reuse and maintenance across a service boundary. Authentication, network failures, latency, and a wider trust boundary come with it. Pip handles unavailable replies without inventing exhibit records.

## Selection and safety

Pip lets the guide read ticket availability. Sending invitations or committing purchases needs different authority, confirmation, logging, and failure handling. The service rejects writes from the read-only identity. Tool selection must weigh reliability, cost, capability, and risk—not merely whether a tool exists.

## Teaching extension

An agent may read stock and draft a reorder, but purchase commits money.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
