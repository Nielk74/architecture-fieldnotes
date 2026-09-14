# Full-book learning plan

## Source and teaching boundaries

Source: the supplied 2020 text of *Fundamentals of Software Architecture*. Body boundaries are recorded in `source-index.json`. Chapter 1 retains its original custom implementation and summary. Luna summarized Chapters 2–24 in three groups (2–8, 9–16, 17–24); all summaries and lesson content are original paraphrases. The content contract is in `content-contract.md`.

Printed page references accompany concepts and notes. Scenarios, modern examples, and scene sequences are teaching extensions. The figures illustrate relationships and decision cycles; they are not deployment blueprints or performance measurements.

## Learning pattern

Each new chapter has five stops: orientation → conceptual exploration → comparison of two approaches → three reflective questions → a written artifact. The concepts, misconception feedback, scenario outcomes, questions, and artifact prompts are specific to each chapter. The 20/20/20/40 mission weights total 100 XP; orientation can be marked read without XP. The original chapter has five 20-XP missions and eight stops.

## Implementation

- `src/book.js`: book library, chapter routes, shared lesson builders.
- `src/chapters/catalog.js`: the 24 chapter names, parts, and total XP.
- `src/chapters/NN.json`: source-referenced learning content.
- `src/chapters/visuals.js`: reusable scene layout from semantic content.
- `src/progress.js`: chapter-scoped state and one-time reward ledger.
- `src/illustrations/motion.js`: logical sequence director and controls.
- `chapter-one.html`: preserved custom Chapter 1; shares progress and animation.

The main route format is `#chapter/<number>/<map|intro|explore|scenario|quiz|apply>`. Chapter 1 keeps its original `#lesson/<id>` routes on its dedicated entry point. The library and previous/next chapter controls connect both implementations.

## Chapter coverage

| Chapter | Topic | Concepts | Decision lab | Transfer artifact |
| --- | --- | --- | --- | --- |
| 1 | Introduction | Four architecture dimensions and architect responsibilities | Deployment distribution and team context | Architecture decision record |
| 2 | Architectural Thinking | 5 | Route bids to three consumers | Make a least-worst decision |
| 3 | Modularity | 5 | Split the order workspace | Map one boundary |
| 4 | Architecture Characteristics Defined | 5 | Choose qualities for a public clinic portal | Define a quality that matters |
| 5 | Identifying Architectural Characteristics | 5 | Prepare a franchise ordering launch | Run a mini architecture kata |
| 6 | Measuring and Governing Architecture Characteristics | 6 | Protect a growing service boundary | Write one useful guard |
| 7 | Scope of Architecture Characteristics | 5 | Give an auction three operating profiles | Mark your quality boundaries |
| 8 | Component-Based Thinking | 6 | Partition a live auction platform | Draft and revise components |
| 9 | Foundations | 6 | Keep the clinic schedule together or split it | Name the boundary before you split it |
| 10 | Layered Architecture Style | 5 | The clinic portal's read path | Draw one request honestly |
| 11 | Pipeline Architecture Style | 4 | Telemetry stream for a small platform | Compose a useful stream |
| 12 | Microkernel Architecture Style | 5 | Jurisdiction rules for a claims product | Specify an extension point |
| 13 | Service-Based Architecture Style | 5 | Scale the recycling quote path | Choose a service boundary |
| 14 | Event-Driven Architecture Style | 6 | Order events with an expired card | Name the promise your event makes |
| 15 | Space-Based Architecture Style | 6 | Release-night ticket sale | Give each cache a reason |
| 16 | Orchestration-Driven Service-Oriented Architecture | 6 | One Customer model for two insurers | Audit a reuse proposal |
| 17 | Microservices Architecture | 5 | Split the outbreak response | Draw one bounded workflow |
| 18 | Choosing the Appropriate Architecture Style | 5 | Choose a shape for a new service | Write a style decision |
| 19 | Architecture Decisions | 5 | Record the service contract | Draft a compact ADR |
| 20 | Analyzing Architecture Risk | 5 | Prepare the nurse diagnostics system | Run a risk storm |
| 21 | Diagramming and Presenting Architecture | 5 | Explain the migration without losing the room | Storyboard an architecture explanation |
| 22 | Making Teams Effective | 5 | Set guidance for a growing team | Design the team box |
| 23 | Negotiation and Leadership Skills | 5 | Negotiate the availability target | Prepare a negotiation |
| 24 | Developing a Career Path | 5 | Place the new platform on your radar | Create a personal radar |

## Validation scope

Browser tests traverse every new chapter from its map through all five screens, complete each mission, inspect feedback, download the written artifact, and reload to verify persisted progress. Separate tests preserve Chapter 1, validate chapter source bounds/scene references, check all Pip thresholds, inspect manual and automatic animation, verify search/history/skip behavior, and exercise small-phone overflow and controls. Source spot checks concentrate on definitions and style trade-offs; notes retain references for further reading.
