# Chapter 18: Software Engineering in SRE

*Pip’s adventure: A repair becomes a product other crews trust. Fictional teaching story; concepts follow the cited source.*

Source: text lines 7221–7875.

Pip’s useful local tool attracts other harbor teams. Supporting them requires more than sharing a script: operational experience must shape interfaces, planning, tests, documentation, and adoption. A modest implementation can prove value while leaving room for a stronger model.

## Production experience as product knowledge

Pip’s rollout tool encounters an unsafe recovery step during real maintenance. Production exposure supplies product knowledge about scale, failure, and integration. Keeping tool developers involved creates a direct user-feedback path. Pip turns the repair into supported cross-team software with planning and engineering discipline, not just a copied script.

Source: text lines 7221–7875.

## Intent-based capacity planning

Pip asks for regional demand coverage and redundancy instead of three named clusters. Intent expresses demand, geography, dependencies, and spare requirements; performance models translate it into resources. Priorities make shortages explicit. The chapter’s Auxon system recomputes allocation plans when forecasts or available supply change.

Source: text lines 7221–7875.

## Approximation behind stable interfaces

Pip’s first planner finds a feasible allocation without the best possible cost. Auxon initially used a heuristic behind an interface later served by a stronger optimizer. Modular inputs and outputs also connect different forecasting and deployment tools. Pip isolates uncertainty while proving usefulness so better models need not rebuild the product.

Source: text lines 7221–7875.

## Adoption and production standards

Pip invites a crew with an urgent planning problem to try the tool. Documentation, onboarding help, credible releases, and migration support make adoption affordable. Useful measured improvements persuade better than promises of universal coverage. As dependency grows, Pip strengthens review, integration tests, and production readiness.

Source: text lines 7221–7875.

## Transfer challenge: Keep SRE engineering capacity

An SRE team spends most of its week fixing recurring configuration drift and has a backlog of reliability tooling. Product asks for another manual review.

### Automate the repeated drift repair

Engineering time shifts from recurring work to durable improvements. Automation must be bounded and observable. A validated repair job handles known drift and sends exceptions to humans.

### Add the review to the weekly rota

The review can catch unusual cases immediately. The rota hides the capacity cost and does not reduce recurrence. The review continues while the underlying source of drift grows.

Automating a repeated repair can recover engineering capacity, but a shared tool needs clear users, a supported interface, tests, and ownership. Start with a useful bounded case and improve it from production feedback.

## Design an internal product

Choose a recurring operational task and outline a small reusable product. Explain the first useful release and how real operators will shape later work.

- Users and pain
- First release
- Adoption and quality
