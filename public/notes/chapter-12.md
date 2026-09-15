# Chapter 12: Microkernel Architecture Style

*Pip’s adventure: The bookshop gains a new rule without rewriting its core. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 149–161.

Pip adds a specialized assessment rule and avoids another branch in the core. Microkernel architecture puts variants behind plug-in contracts and a registry. Local, runtime, and remote modules change deployment costs, while the core remains an important shared entry point.

## Core and plug-ins

Pip adds a device-assessment variant beside the bookshop’s resale workflow. A minimal core handles general behavior and locates a specialized plug-in. Keeping customization and volatile rules outside reduces core branching and isolates change; plug-ins ideally avoid depending on one another. Pip registers the new module instead of adding another core conditional.

Source: pp. 149–151.

## Local or runtime extension

Pip chooses between packaged and runtime rule modules. Compile-based libraries are simple but changes redeploy the monolith; runtime frameworks can add or remove modules independently. Both commonly remain behind the core entry point, whose internal structure and presentation can vary. Pip chooses lifecycle flexibility deliberately rather than assuming every plug-in is independently deployable.

Source: pp. 151–155.

## Remote plug-ins change the boundary

Pip moves a slow assessment plug-in behind messaging. Remote REST or message modules allow independent scale, runtime changes, and asynchronous work, but all requests still enter through the core. That coupling keeps the chapter’s topology one quantum. Pip adds latency, security, cost, deployment, unavailable-result, retry, and status handling to the decision.

Source: pp. 155–156.

## Registry and contract

Pip’s registry identifies each module, contract, location, and possibly protocol. The standard specifies behavior plus inputs and outputs; an adapter can normalize a third-party implementation. Pip passes required data rather than letting every plug-in access shared storage. A specialized module may still own a private rules store.

Source: pp. 156–158.

## Where it fits and what it costs

Pip expects new resale variants to arrive frequently. Microkernels fit customizable products and changing rule domains, as IDEs, browsers, Jenkins, claims, and tax systems illustrate. Simplicity, cost, isolation, and extensibility help, while monolithic failure and elasticity limits remain. Pip earns testing and deployment benefits through sound contracts and module lifecycle management.

Source: pp. 158–161.

## Transfer challenge: Jurisdiction rules for a claims product

An insurer has a stable claims workflow but rules vary by region and change often. Customers install the product on premises with limited outbound network access. A new region must be added without rewriting tested rules for existing regions, and an operations team wants a clear rollback path when a rule module is defective and regulatory audits arrive for every installed customer.

### Runtime local plug-ins

Each region's rules stay isolated and can be installed or rolled back without a full product redeploy. The product needs a module registry, compatibility checks, lifecycle controls, and tests for core-to-plug-in contracts. A new regional package can be registered on the customer's site and disabled if validation fails. The core remains available, while a bad module is contained to claims using that region.

### Remote rules services

Rules can scale and release independently, and a central team can update them without visiting each installation. On-prem installations now depend on connectivity, endpoint security, remote availability, and versioned network contracts. Central updates are convenient for connected customers, but an outage or firewall change can block claims processing. The product must define offline behavior or accept the new distributed risk for disconnected sites.

The stable workflow and volatile regional rules point toward a microkernel. Local runtime modules preserve on-prem operation; remote services are justified only when their operational benefits outweigh the network boundary and the product's deployment context.

## Specify an extension point

Design a plug-in boundary for a product or business process. Define the stable core behavior, the volatile module, one registry entry, and the contract fields needed to test compatibility.

- Context
- Decision
- Trade-off
