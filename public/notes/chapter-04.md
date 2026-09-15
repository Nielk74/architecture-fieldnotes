# Chapter 4: Architecture Characteristics Defined

*Pip’s adventure: Which promises deserve a wall in the design?. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 55–64.

Pip’s bookshop wishlist contains every desirable quality. Architecture needs a shorter set: important nondomain concerns that actually shape structure. The crew distinguishes explicit and implicit needs, agrees on vocabulary, and records the trade-offs it accepts.

## Three-part definition

Pip labels every good practice an architecture characteristic. A characteristic is nondomain, influences structure, and is critical or important to application success. Baseline encrypted traffic alone need not demand special architecture; processing payments may require structural isolation. Pip explains why a concern deserves architectural attention instead of promoting every desirable quality.

Source: pp. 55–57.

## Implicit and explicit

Pip’s rare-book bidding brief never mentions low latency because everyone assumes it. Explicit characteristics appear in requirements; implicit ones emerge from domain knowledge. Pip asks stakeholders for the actual response budget and its structural consequences. An unstated concern earns architectural treatment through context and importance, not intuition alone.

Source: pp. 56–57.

## Operational qualities

Pip prepares for a sudden signed-book sale rather than ordinary growth. Scalability handles increasing demand; elasticity handles bursts; performance includes response, throughput, capacity, and peaks. Availability concerns access, while reliability, robustness, continuity, and recoverability address failure and restoration. Pip specifies workload and failure conditions so overlapping terms have shared meaning.

Source: pp. 57–58.

## Structural and cross-cutting

Pip’s multilingual bookshop needs changes across screens, reports, and records. Structural qualities include maintainability, modularity, extensibility, configurability, portability, installation, reuse, support, and upgrades. Accessibility, identity controls, privacy, security, legal rules, and archivability cut across components. Pip agrees on scope and vocabulary rather than assuming every familiar label means the same thing.

Source: pp. 58–62.

## Least-worst selection

Pip adds universal flexibility and makes the small shop difficult to maintain. More characteristics add complexity; encryption, indirection, and generalization can trade against performance or simplicity. Pip selects the few qualities critical now and records accepted costs. An iterative architecture can revisit the balance when users or deployment context change.

Source: pp. 62–64.

## Transfer challenge: Choose qualities for a public clinic portal

A clinic is replacing a small appointment portal. Patients need accessible mobile booking, staff need reliable schedules, and the clinic has limited budget and one operations team. A future partner may integrate through an API, but international expansion is uncertain. The team can fund only a few special structural capabilities this year. Select the qualities that should shape architecture and state what remains ordinary design hygiene.

### Reliability-first

Keeps schedules available and recoverable during outages, supporting the clinic’s core service and staff trust. May leave future integration and broad portability less optimized, and recovery mechanisms consume budget and operational attention. The portal uses resilient scheduling storage, backups, and a clear recovery target. Accessibility remains a first-class product requirement; speculative internationalization waits for evidence.

### Integration-first

Creates documented seams and adaptable contracts for a likely partner while making future extensions easier. Adds structure and testing effort before the partner is confirmed, potentially distracting from schedule reliability and mobile experience. The portal exposes a stable booking API and isolates integration code. The team must still set explicit availability and recovery expectations so extensibility does not hide operational gaps.

Both choices can be defensible. The architecture characteristic is the concern that is important, structurally influential, and worth its cost now. Requirements, domain knowledge, budget, and future evidence decide which qualities belong in the small supported set.

## Define a quality that matters

Take a system you know. Name one explicit and one implicit architecture characteristic, describe the structural consequence of each, and identify one concern you would deliberately defer.

- Context
- Decision
- Trade-off
