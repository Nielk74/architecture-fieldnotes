# Building Green Software — course learning brief

## Source

Anne Currie, Sarah Hsu, and Sara Bergman, *Building Green Software: A Sustainable Approach to Software Development and Operations*, first edition, March 2024.
Input: `temp/9ff27076-29e1-4f6e-866f-ec13886d8934-building-green-software-a-sustainable-approach-to-software-development-and-operations-1nbsped-1098150627-9781098150624_compress.txt`.
The 13 numbered body chapters span literal text lines 634–7347, printed pp. 1–202. The index starts with “Symbols” at line 7348, before the extracted “Index” heading. Blank separator pages are retained within chapter boundaries.

## Learning intent

For engineers familiar with building software but new to sustainability. Learners should connect software decisions to electricity and hardware, compare interventions within service constraints, and explain a measurement-led improvement plan. Recurring invented settings include a media service, its batch processing, and device clients.

## Content-to-activity map

| Chapter | Learner objective | Scene mechanism | Transfer artifact |
| --- | --- | --- | --- |
| 1 | Separate efficiency and awareness | Useful work → energy / hardware → emissions | First intervention |
| 2 | Explain energy units and physical boundaries | Meter → facility overhead → electricity mix | Accounting boundary |
| 3 | Prioritize code work by impact and effort | Request → redundant call → shared library | Optimization hypothesis |
| 4 | Convert spare capacity into fewer resources | Workloads → shared capacity → safe shutdown | Rightsizing experiment |
| 5 | Choose shifting or shaping within a deadline | Forecast → queue → execution | Scheduling policy |
| 6 | Avoid software-driven device replacement | Existing device → compatibility → longer use | Support plan |
| 7 | Trade network, storage and compute costs | Origin → cache → client | Delivery strategy |
| 8 | Examine the complete ML lifecycle | Dataset → training → repeated inference | Model evaluation plan |
| 9 | Compare carbon measurements fairly | Energy × intensity + allocated hardware → useful work | Measurement contract |
| 10 | Turn metrics into operational decisions | Service → signals → budget → response | Carbon SLO proposal |
| 11 | Explain co-benefits without assuming equivalence | Waste → security / cost / recovery | Cross-team proposal |
| 12 | Assess distinct maturity axes with evidence | Evidence → axis assessment → next practice | Maturity assessment |
| 13 | Sequence an achievable reduction program | Baseline → cleanup → review → repeat | Six-month roadmap |

## Activity contract

Each chapter uses the existing five-stop sequence and stable IDs: `intro` (reading, 0 XP), `explore` (visit every concept, 20 XP), `scenario` (compare both choices with consequences, 20 XP), `quiz` (three checked answers, shared completion rule, 20 XP), and `apply` (three substantive fields and completed export, 40 XP). The map is always reachable. Back, Skip, and history preserve activity state; skipping earns nothing. Total available XP is 1,300. Course Pip has ten forms on the existing percentage-derived thresholds; overall Pip keeps its established thresholds.

## Implementation boundaries

Use the live registry and shared book shell. Add chapter JSON, source index, public paraphrased notes, and a themed companion. Persist under `fieldnotes-green-software-v1`; storage and backups derive their allowed keys from the registry. Routes: `/learn.html?path=green-software#chapter/N/STEP`. Existing course IDs and ledgers stay valid. Use semantic renderer primitives and short node labels; the scene player explains mechanisms in HTML captions.

## Source discipline

Read body chapters before drafting. Cite printed pages and exact chapter line bounds. Book-era supplier claims, future predictions, legal statements, and tool availability are not current facts. Do not reproduce the book's inconsistent numerical SCI worked example; any quiz arithmetic uses explicitly fictional, dimensionally consistent inputs. The maturity matrix is the version discussed in the book, not a certification. All scenarios and numerical examples are labeled teaching extensions.

## Verification

Verified on September 15, 2026: production build and public-file audit pass; all 110 production browser tests pass. Coverage includes full journeys across all 13 chapters, exports, persistence, backup, anti-farming and skip checks, keyboard navigation, 320–390px phone rendering, reduced-motion pause and manual scene navigation. All 148 registered scenes show visible motion in the shared regression test. Desktop map and phone feedback screenshots were visually reviewed. Literal chapter boundaries were checked against the supplied text, excluding its index; raw source text is not included in the public build. The tagged release workflow additionally gates publication on native save, restart, and in-place update checks.

The published v0.3.0 APK passed checksum/signature verification and an in-place local emulator upgrade, preserving all nine existing native preference entries, including seven course ledgers and 140 XP. Installed-app inspection exposed an existing manual-pause bug: the shared lesson entrance animation froze at 0.3 opacity. The v0.3.1 patch removes that entrance animation while motion is paused. A regression test reproduced the failure and now verifies full opacity on initial load and subsequent navigation in Green Software and Fundamentals, independently of OS reduced-motion settings.
