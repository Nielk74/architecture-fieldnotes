# Chapter 4: Architectural Decomposition

*Pip’s adventure: Finding a seam in the old system. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1477–1753.

Pip is asked to pull the delivery monolith apart. First the crew checks whether useful seams exist. Component extraction fits recognizable boundaries; tactical forking may suit tangled code, with duplication and convergence costs made explicit.

## Decomposition is how

Pip spots an easy component to extract and reaches for the scissors. Modularity explains why to partition; decomposition explains how. Opportunistic extraction can create a distributed Big Ball of Mud. Pip first assesses decomposability, then chooses component-based extraction or tactical forking from the code’s actual structure.

Source: text lines 1477–1535.

## Big Ball of Mud

Pip follows a delivery screen straight into several database classes. A Big Ball of Mud lacks useful internal boundaries. Coupling tools inform whether the system is salvageable, but no magic score decides it. Pip weighs tactical forking when naming and preserving extraction seams would be unreliable.

Source: text lines 1536–1585.

## Afferent and efferent

Pip moves an Address class and breaks half the network. Afferent coupling counts incoming connections; efferent coupling counts outgoing ones. Shared assets with many users need explicit treatment before extraction. Pip maps both directions rather than assuming reuse inside a monolith will remain easy across services.

Source: text lines 1586–1635.

## Two migration paths

Pip extracts recognizable components incrementally in one area. In a tangled area, teams fork the monolith and remove unwanted behavior from each copy. Component-based decomposition can approach service-based architecture; tactical forking preserves coarse behavior when structure is poor. Pip budgets duplicated maintenance and later convergence instead of treating either path as free.

Source: text lines 1636–1733.

## Transfer challenge: Choose the migration path

The ticketing system has a large reporting component but also many direct UI-to-database calls and shared utility classes. The team must start a funded migration while limiting the risk of creating distributed mud. It can use component extraction where boundaries are visible and tactical forking where they are not.

### Component path

Preserves incremental control and makes dependencies explicit as components are refined. Requires analysis and refactoring before visible service separation. Reporting is decomposed along clear domains, while high-coupling utilities are redesigned before extraction.

### Tactical fork

Provides a pragmatic start when the codebase lacks reliable internal structure. Duplicates code and creates convergence and governance work across copies. Teams remove unrelated behavior from ticket and reporting copies, then must reconcile shared fixes and retire duplication.

The choice follows evidence about structure. Extraction rewards coherent components; forking limits the need to understand every tangled dependency but carries duplicated-system costs.

## Assess a codebase

Use a small dependency sample to decide whether component extraction or tactical forking is safer, and justify the choice.

- Context
- Decision
- Trade-off
