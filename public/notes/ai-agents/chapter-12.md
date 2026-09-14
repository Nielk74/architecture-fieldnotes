# Chapter 12: Protecting Agentic Systems

Original learning notes. Source: text lines 10988–12091 in the supplied book.

An agent’s attack surface includes the model, retrieved information, stored memory, tools, and communication between components. Malicious instructions in data can redirect behavior, while compromised dependencies or poisoned records can influence later decisions. Security must therefore extend beyond filtering the final answer. Provenance and integrity checks protect information; scoped permissions and isolation limit actions; monitoring and recovery help contain failures that get through. The chapter also treats internal misconfiguration, inconsistent state, and goal mismatch as sources of damage. Complementary controls should prevent one mistaken decision from becoming unrestricted authority, and testing must examine the complete route from input to effect.

## Agent threat surface

An agent combines model reasoning, external data, tools, and repeated autonomous actions. Each boundary creates a way for an attacker or a faulty dependency to influence behavior. Protecting only the final chat response leaves tool permissions, retrieved content, data provenance, and communication between agents exposed. Security analysis must follow the complete path from input to effect.

## Prompt and goal attacks

Untrusted content can redirect an agent, while ambiguous goals can produce actions that satisfy literal wording but violate intent. Instructions, data, and tools need distinct trust boundaries and validation.

## Data and supply chain

Poisoned data, exfiltration, insecure dependencies, and compromised tools can alter what an agent believes or does. Provenance, least privilege, isolation, and revalidation limit blast radius.

## Defense in depth

Controls combine policy, scoped identity, confirmation, sandboxing, monitoring, red teaming, and recovery. No single filter reliably handles adaptive behavior, so layers should fail safely and leave an audit trail.

## Teaching extension

A finance assistant reads documents that may contain hostile instructions and can initiate transfers.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
