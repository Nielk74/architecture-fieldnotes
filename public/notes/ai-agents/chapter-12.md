# Chapter 12: Protecting Agentic Systems

*Pip’s adventure: The exhibit label tries to give orders. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 10988–12091 in the supplied book.

Pip’s guide reads an exhibit page that tells it to export visitor records. The page is evidence, not authority. Pip follows the route from untrusted input through memory and tools, then layers controls so one mistaken model decision cannot become unrestricted action.

## Agent threat surface

Pip follows a suspicious page into the guide’s memory and a proposed tool call. Models, external data, tools, and repeated actions each introduce boundaries an attacker or faulty dependency can influence. Filtering the final chat response leaves those routes exposed. Pip checks permissions, provenance, and inter-agent communication along the complete input-to-effect path.

## Prompt and goal attacks

Pip’s supplier page orders the guide to export visitor records. Untrusted content can redirect behavior; ambiguous goals can satisfy wording while violating intent. Pip separates instructions, data, and tool authority. The service independently denies export permission even if the model follows the hostile text.

## Data and supply chain

Pip rejects a connector update whose integrity check fails. Poisoned data, exfiltration, insecure dependencies, and compromised tools can change beliefs or actions. Retrieved records retain provenance so a poisoned source can be withdrawn. Least privilege, isolation, and revalidation limit the damage.

## Defense in depth

Pip’s document agent has read-only storage, isolated execution, and logged tool requests. Policy, scoped identity, confirmation, sandboxing, monitoring, red teaming, and recovery provide complementary controls. A malicious document may still change model behavior. Pip makes attempted effects restricted, visible, and recoverable rather than trusting one filter.

## Teaching extension

A finance assistant reads documents that may contain hostile instructions and can initiate transfers.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
