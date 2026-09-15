# Chapter 21: Diagramming and Presenting Architecture

*Pip’s adventure: Show where Pip is before zooming in. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 315–324.

Pip’s polished diagram loses the audience when it jumps into one plug-in. Clear architecture communication preserves scope, labels relationships, and reveals the argument at a useful pace. Early sketches remain easy to discard until the structure earns polish.

## Representational Consistency

Pip zooms into a plug-in and the bookshop audience loses its place. Representational consistency first shows how the detail belongs to the whole. Pip highlights the plug-in inside the full microkernel before opening its internals. The same scope-preserving move helps across crops, diagrams, slides, and media.

Source: pp. 315–316.

## Iterate at Low Fidelity

Pip spends hours polishing a boundary the team later rejects. Low-fidelity sketches, sticky notes, and canvases reduce attachment and make alternatives cheap. Pip rearranges cards until discussion tests the structure. Only then do reusable stencils, layers, and connection magnets earn their role in consistent, maintainable diagrams.

Source: pp. 316–318.

## Choose a Diagram Language

Pip needs both an overview and the order of calls. UML can serve class and sequence views; C4 organizes Context, Container, Component, and Class, with fit varying by topology. ArchiMate offers enterprise views across business domains. Pip chooses notation for audience and scope instead of forcing every concern into one standard.

Source: pp. 318–319.

## Make Meaning Visible

Pip’s audience cannot tell whether an arrow means waiting or an event. Shapes need labels and familiar meaning; lines need clear direction, weight, and consistent semantics. Colors should distinguish useful differences, with a key for ambiguity. Pip makes every element interpretable so the diagram supports decisions instead of guessing.

Source: pp. 319–320.

## Present in Time

Pip reveals a feature branch, then its long delay, then the merge conflict. A document reader controls pace; a presenter shares the story through spoken and visual channels. Incremental animation can reveal process and consequence, while a blank slide redirects attention. Pip distinguishes a self-contained infodeck from a live presentation rather than showing the whole argument at once.

Source: pp. 321–324.

## Transfer challenge: Explain the migration without losing the room

You need approval for moving a monolithic checkout toward separate deployment units. Developers need topology and dependency detail; executives need the reason, risk, and sequence. A single dense diagram can show everything, but audiences may lose scope and read ahead. Design a visual path that respects both audiences and the live presentation's time dimension.

### One dense diagram

All components and relationships are available in one artifact for later reference. The audience must decode detail while listening, and the key decision can disappear in visual noise. Developers may find useful connections, but executives see a wall of boxes and the presenter has little control over when a consequence is introduced.

### Context then builds

A consistent overview establishes scope, then incremental views reveal only the relationships needed for each decision. Preparing layers, transitions, and a separate reference deck takes more design time. The live audience follows the migration story in order, while the exported diagram remains traceable through labels and a key. Detail is introduced when it can be understood.

The right artifact depends on whether readers control their pace and what they need to decide. Use a shared visual language, preserve context during zooms, and tune completeness and timing to the medium.

## Storyboard an architecture explanation

Create an overview and one detail view for a system decision. Mark the context bridge, line semantics, labels, key, and the order in which a live audience should see the information.

- Context
- Decision
- Trade-off
