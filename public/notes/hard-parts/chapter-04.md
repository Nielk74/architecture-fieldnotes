# Chapter 4: Architectural Decomposition

Chapter 4 distinguishes the reason for modularity from the method of decomposition. Once sponsors approve structural change, the team must decide how to proceed without turning a monolith into a distributed Big Ball of Mud. The “elephant migration” instinct—extracting one convenient feature at a time without a structure plan—can produce an unstructured set of services with the same coupling problems and more operational complexity (text lines 1477–1535).

The first question is feasibility: is the codebase decomposable? A Big Ball of Mud has little useful internal structure. Event handlers may reach directly into database calls, and responsibilities may be hard to name or isolate. Architecture restructuring therefore starts with understanding the codebase’s internal organization and deciding whether it is salvageable. No single metric gives the answer; architects combine tools with judgment (text lines 1536–1585).

Coupling metrics provide evidence. Afferent coupling counts incoming connections to an artifact; efferent coupling counts outgoing connections. A shared Address class illustrates why the distinction matters: reuse is convenient in a monolith, but high incoming use makes the class a difficult extraction point. Tools such as dependency analyzers can provide matrices and aggregate views of package and component relationships (text lines 1586–1635).

The chapter also introduces abstractness and instability as derived measures. Abstractness describes the ratio of abstract artifacts to concrete implementation artifacts. Instability describes the balance between outgoing and total coupling. Together with distance from the main sequence, these measures provide another perspective on whether components are balanced, concrete, abstract, stable, or difficult to change. They support investigation rather than replacing architectural judgment (text lines 1636–1685).

Two approaches follow from the evidence. Component-based decomposition is extraction: refactor and refine logical components incrementally, often moving first toward a service-based architecture. Tactical forking is pragmatic for a badly structured system: clone the monolith, give teams copies, and remove unwanted parts until coarse-grained services remain. Forking can make progress possible when extracting hidden boundaries would be too risky, but it duplicates code and creates convergence and governance work (text lines 1686–1733).

The chapter’s Sysops Squad decision chooses component-based decomposition because the code has identifiable components, despite some difficult shared areas. It records the method and its consequences, including migration cost and the need to adapt release operations. The selection is conditional: a different codebase with no stable internal structure might justify tactical forking.

Teaching extension: take a small dependency sample, count incoming and outgoing references, and write a short recommendation. State which evidence supports extraction or forking, and name the cost your choice creates. This exercise operationalizes the chapter’s assessment method.

The important output is a migration approach that fits the evidence. Extraction preserves more of the existing structure and can move through a service-based stepping stone. Forking accepts duplication to make progress through a badly tangled codebase. In either case, the team should make the boundary and its consequences visible, then use dependency checks to keep later changes from recreating the original tangle.

That evidence-based choice is the chapter’s durable lesson for migration planning.
