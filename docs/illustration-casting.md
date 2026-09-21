# Beaver and wooden-log illustration audit

Reviewed all 732 data-driven chapter introduction and concept views, the four legacy Chapter 1 concepts, and the shared scene presets. The 732 views comprise 467 story views and 265 rendered teaching-board views. Selection used the lesson text and the actual rendered recipe, so no change is hidden behind a teaching override.

## Selection

- Beaver inspectors fit investigations, evidence checks, controlled experiments, code and risk reviews, incident learning, and validation. They present 56 lesson views across 33 chapters. These use the existing `beaver` primitive directly instead of the in-scene robot; Pip remains the narrative guide and earned companion in the surrounding UI.
- Wooden logs stand for retained software event records: structured request events, searchable diagnostics, audit records, logged trials, and fresh log events. Sixteen additional lesson views now use them. The wood is a visual metaphor, not a depiction of storage hardware.
- Traces remain traces when the point is causal calls or timed spans; metrics remain gauges; ADRs, review notes, metadata and definitions remain documents; application logic remains code. Existing teaching tables, plots, equations and measured examples retain their presenters and data.
- Automated agents retain their robot forms. No revised scene mixes a beaver with either Pip's robot avatar or an automated-agent robot. Human stakeholders remain human where their role matters.

## Coverage

| Course | New beaver views | Newly adapted log views |
| --- | ---: | ---: |
| ai-agents | 0 | 3 |
| fundamentals | 6 | 0 |
| hard-parts | 2 | 0 |
| observability | 32 | 11 |
| responsible-engineering | 4 | 1 |
| sre | 8 | 1 |
| staff-engineer | 4 | 0 |

Totals: **57 SVG scene entries with beavers** (56 lesson views plus the existing log-workshop demo) and **19 with wooden logs** (18 lesson views plus that demo). Introduction and concept views are counted separately, including reused compositions. The four painted beaver covers are separate assets and are not included.

## Review artifacts

- Gallery of all 60 changed views: `/Users/antoine/projects/learn/temp/illustration-cast-review/gallery.html`.
- Five reviewed contact sheets: `/Users/antoine/projects/learn/temp/illustration-cast-review/sheet-1.png` through `sheet-5.png`.
- Live studio and phone checks: `/Users/antoine/projects/learn/temp/illustration-cast-review/live-audit.json`.
- Native vector export: `/Users/antoine/projects/learn/temp/illustration-cast-review/investigation-export.svg`.

The new casting tests check that all authored beavers and logs survive rendering, beavers and robots are separate, causal traces and decision records keep their meanings, and the phone lesson preserves stepping and earned-companion UI.

Verification passed: production build, all 154 browser tests, all 60 changed views in the live studio, six phone routes, and native SVG export. Visual review covered the five contact sheets and representative phone screenshots. The 438-file Android web bundle matches production byte for byte. All non-illustration chapter content is unchanged from the start of this pass.

## Changed views

Concept indexes below are zero-based, matching the studio's recipe keys. `intro` is the chapter introduction.

| Course / chapter / concept | Lesson | Adaptation |
| --- | --- | --- |
| `ai-agents/10/1` | Traces and logs | step-1: message to log for request log. |
| `ai-agents/13/3` | Oversight and trust | step-1: trace to log for audit record. |
| `ai-agents/7/2` | Reflexion | step-1: trace to log for trial log. |
| `fundamentals/19/4` | Compliance and One Record | Beaver inspector |
| `fundamentals/20/1` | Useful Risk Assessments | Beaver inspector |
| `fundamentals/20/2` | Risk Storming | Beaver inspector |
| `fundamentals/23/2` | Collaborate with Developers | Beaver inspector |
| `fundamentals/6/3` | Process measures | Beaver inspector |
| `fundamentals/6/5` | Governance through collaboration | Beaver inspector |
| `hard-parts/1/3` | Feedback and governance | Beaver inspector |
| `hard-parts/5/2` | Flatten components | Beaver inspector |
| `observability/10/2` | Share the method behind a win | Beaver inspector |
| `observability/11/1` | Observe after deployment | Beaver inspector |
| `observability/11/2` | Locate before inspecting code | Beaver inspector |
| `observability/11/3` | Tests and telemetry complement each other | Beaver inspector |
| `observability/12/3` | Event criteria retain diagnostic context | Beaver inspector |
| `observability/13/3` | Count failing events accurately | Beaver inspector step-3: trace to log for failing request events. |
| `observability/14/2` | Bring evidence into the workflow | Beaver inspector |
| `observability/14/3` | Compare changes and validate recovery | Beaver inspector |
| `observability/16/0` | The workload determines the design | Beaver inspector |
| `observability/16/intro` | Efficient Data Storage | Beaver inspector |
| `observability/17/0` | Constant probability preserves examples | Beaver inspector step-1: document to log for full event. |
| `observability/17/intro` | Cheap and Accurate Enough: Sampling | Beaver inspector step-1: document to log for full event. |
| `observability/18/2` | Transformation changes evidence | Beaver inspector |
| `observability/18/3` | Freshness and history can compete | Beaver inspector step-2: message to log for fresh log events. |
| `observability/2/1` | Comparative investigation | Beaver inspector step-1: message to log for failed request events. step-2: message to log for successful events. |
| `observability/2/2` | Context continuity | Beaver inspector |
| `observability/2/3` | Expertise becomes shareable | Beaver inspector |
| `observability/22/2` | Frontend evidence serves different purposes | Beaver inspector |
| `observability/3/1` | Yesterday’s culprit is insufficient | Beaver inspector |
| `observability/3/3` | Scuba changed the debugging method | Beaver inspector |
| `observability/4/1` | SRE connects symptoms to objectives | Beaver inspector |
| `observability/5/0` | An event represents a unit of work | Beaver inspector step-2: document to log for accumulated context. |
| `observability/5/2` | Wide records retain combinations | Beaver inspector step-1: document to log for wide request event. |
| `observability/5/3` | Enrich during execution | Beaver inspector step-3: document to log for final enriched event. |
| `observability/5/intro` | Structured Events Are the Building Blocks of Observability | Beaver inspector step-2: document to log for accumulated context. |
| `observability/6/3` | Attributes explain differences | Beaver inspector |
| `observability/8/0` | Verify the starting observation | Beaver inspector |
| `observability/8/1` | Search distinguishing dimensions | Beaver inspector |
| `observability/8/3` | Automate comparison, interpret the result | Beaver inspector |
| `observability/8/intro` | Analyzing Events to Achieve Observability | Beaver inspector |
| `observability/9/1` | Events retain the investigation unit | Beaver inspector step-1: document to log for request events. |
| `observability/9/3` | Connect summaries to retained context | Beaver inspector step-3: trace to log for relevant events. |
| `responsible-engineering/4/1` | Breadth and red teams | Beaver inspector |
| `responsible-engineering/4/2` | Future regret and tabletop | Beaver inspector |
| `responsible-engineering/6/3` | Profile before optimize | Beaver inspector step-1: terminal to log for verbose logs. |
| `responsible-engineering/7/2` | Incentives and ownership | Beaver inspector |
| `sre/12/1` | Build and discriminate hypotheses | Beaver inspector |
| `sre/12/2` | Reduce the problem at observable interfaces | Beaver inspector |
| `sre/12/3` | Control experiments and record uncertainty | Beaver inspector |
| `sre/17/1` | Different test scopes reveal different failures | Beaver inspector |
| `sre/26/2` | Early validation of application invariants | Beaver inspector |
| `sre/28/2` | Practice failures before primary responsibility | Beaver inspector |
| `sre/33/1` | Learning from incidents and near misses | Beaver inspector |
| `sre/33/3` | Structured decisions in different environments | Beaver inspector |
| `sre/6/2` | Black-box and white-box coverage | step-2: trace to log for internal logs. |
| `staff-engineer/6/1` | Feedback | Beaver inspector |
| `staff-engineer/7/0` | Exemplar | Beaver inspector |
| `staff-engineer/7/intro` | You’re a Role Model Now (Sorry) | Beaver inspector |
| `staff-engineer/9/3` | Reflection | Beaver inspector |
