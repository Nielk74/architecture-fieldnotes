# 20. Observability’s Stakeholders and Allies

Help adjacent teams answer their own questions

Observability data can help more than incident responders. Support needs to understand a customer’s current failure, customer success and product teams need to see how workflows are actually used, and sales or executives need evidence about valuable features and strategic accounts. These groups become allies when telemetry helps them accomplish their own goals, not merely when engineering informs them about a tooling project. The chapter also distinguishes this use from traditional business intelligence. Fast, fresh, request-level exploration is useful for immediate operational questions, while exact accounting and longer-term reporting may require different data guarantees. Adoption should connect these complementary views and preserve clear expectations about accuracy, sampling, access, and the decisions each dataset can support.

## Support can identify customer impact

A support engineer often receives the first concrete account of a customer’s difficulty. Request-level context can help establish whether the issue is ongoing, which workflow is affected, and whether it matches a broader incident. Giving support a useful investigation path reduces dependence on vague status updates and improves the specificity of escalations to engineering.

## Product and success compare actual use

Feature uptake alone does not explain whether customers are achieving their goals. Event sequences and attributes can reveal which paths people try, where they fail, or whether a capability appears only in demos rather than normal workflows. These observations help product and customer-success teams test their assumptions and evaluate the effect of guidance or changes.

## Allies need their own useful outcomes

Sales and executives can use telemetry to understand which accounts depend on which features and where performance affects important workflows. Adoption gains support when those questions are answered in language connected to their decisions. Simply adding stakeholders to a project update does not give them a reason to champion the investment.

## Operational exploration is not accounting

Observability favors fresh, fast answers and may use sampling or incomplete scans with explicit accuracy trade-offs. Business reporting can require exact totals and longer historical horizons. Use the operational view to investigate detailed behavior, but do not silently treat approximate telemetry as an authoritative billing ledger; connect complementary systems where their guarantees differ.

## Apply it

Choose a nonengineering team and design a query that answers a question it already cares about.

Source: *Observability Engineering*, chapter 20; supplied text lines 9085–9492. These notes are an original synthesis; examples and activities are illustrative.
