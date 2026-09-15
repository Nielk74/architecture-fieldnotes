# Pip's illustrated fieldnotes

## Scope and voice

Rewrite all eight courses (137 chapters) as concise Pip adventures, adapting the illustrations to the story and the core lesson. Keep original chapter titles, source boundaries, technical distinctions, numerical assumptions, answer correctness, route IDs, reward rules, and persisted progress. Fictional dialogue and situations are teaching extensions, not claims about the source books. Retain explicit qualifications where removing them would change the meaning.

Use a small concrete setback, a considered action, and an observable consequence. Pip is curious and fallible; other people retain agency. Avoid a hero who solves organizational problems alone. Technical terms remain visible, explained through the action. Do not simply prefix existing textbook text with Pip's name.

Each rewritten concept replaces its existing body and example together. Its word budget cannot exceed that pair. Chapter introductions and total reading text must not grow. Existing source references remain separate. Rewrite scenarios and feedback where needed for continuity; preserve option ordering and answers so saved learning state remains valid. Learner reflections still transfer the lesson to the learner's own work.

## Course worlds

| Course | Recurring adventure | Visual relationships |
| --- | --- | --- |
| Fundamentals | Pip helps an online bookshop grow | Storefront, modules, orders, boundaries, data, quality checks |
| Hard Parts | Pip connects an island delivery network | Service ownership, shipments, messages, distributed data, coordination |
| Staff Engineer | Pip joins a busy engineering workshop | Listening, shared direction, ownership, mentoring, handoffs |
| Responsible Engineering | Pip builds public services with residents | Affected people, access, consent, safety, fairness, accountability |
| SRE | Pip's crew operates harbor booking services | Traffic, capacity, signals, overload, response, recovery |
| Observability | Pip investigates the night market's software | Events, traces, competing hypotheses, queries, evidence |
| AI Agents | Pip builds a museum guide and its tools | Tasks, memory, retrieval, permissions, evaluation, human review |
| Green Software | Pip prepares the town's film screening | Useful output, electricity, idle resources, deadlines, hardware lifetime |

## Content and scene contract

Chapter JSON retains the current fields. Add `story: {course, world, title}` as teaching metadata. Rewrite `summary`, concept `body`, and the relevant scenario/feedback into the course's story. A concept may use an empty `example` after integrating its useful information into `body`; the shell must not render an empty example block.

Reauthor each chapter's `visual` nodes, edges, and step captions to depict its specific story mechanism. A `pip` node is supported by the shared renderer and may specify `course`; Pip is a participant, never a substitute for a database, service, or other technical role. Use three to five nodes, short labels, and meaningful connections. Optional concept-level `visual` recipes replace the illustration when a concept changes. The shared scene player keeps manual stepping and pause; source notes and static exports remain understandable without animation. The runtime supplies actual earned XP to Pip; illustration previews do not grant rewards.

Choose the visual form from the concept, not the existing objects. Concrete example tables, timelines, comparisons, equations, and directed maps extend the isometric vocabulary. Cardinality shows actual distinct values; energy uses correct units; parallel spans overlap on one axis. Keep Pip as the presenter. Use no more than three explanatory frames, and fewer when one static view is enough. The implementation now includes 174 authored teaching demonstrations spanning every chapter, plus the adapted concept-specific story scenes. No reading paragraphs were added to accommodate the diagrams.

## Verification

Record pre-rewrite word budgets and source/answer identities. Audit every chapter for narrative coverage, non-increasing word counts, retained source references, valid scene references, and notes matching the shipped text. Verify concept illustration changes, distinct course worlds, semantic scene playback, pause/reduced-motion readability, keyboard access, small-phone layouts, exports, backup, and existing progress. Visually inspect representative maps, concept screens, and decision outcomes across all courses. Keep the raw source books out of public assets.
