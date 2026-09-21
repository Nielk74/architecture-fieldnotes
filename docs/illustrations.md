# Fieldnotes illustration framework

## Color and art direction

The course covers are inhabited narrative scenes: expressive orange beavers,
rounded white robots with articulated arms, wooden logs with bark and sawn growth
rings, and full landscapes or interiors. The palette has a clear hierarchy:
violet and indigo environments, warm wood and characters, ivory highlights, and
small cool lights. Backgrounds use overlapping hills, trees, buildings,
reflections and directional light. Simplicity means readable silhouettes and a
coherent composition; it does not mean removing the setting or material detail.

`editorial.js` defines eight scenic covers, served from `public/artwork/*-v3.webp`.
Each 1536 × 1024 image is an original generated illustration. The bookshop, island
crossing, workshop, civic square, harbor, night market, museum, and forest cinema
share a visual treatment, with distinct actions and surroundings. Each scene has
exactly one cast: beavers in the bookshop, workshop, civic square and market;
robots on the ferry, at the harbor, in the museum and at the cinema. The cinema
uses one technician to keep the projector beam unobstructed; other covers use
two characters. These
paintings establish the fictional story worlds; the chapter diagrams still
explain specific mechanisms and preserve concrete teaching evidence.

The renderer frames static covers at 480 × 320 without character badges or
companion insets. Earned Pip progression remains in the surrounding course UI.
Backgrounds fill the cover without pale strips. The studio opens on the
log-inspection market and offers all eight worlds, plus `log-workshop` (beavers)
and `robot-lab` animated vector demonstrations. A scene name in the URL hash
opens that scene directly, for example `/illustrations.html#world-harbor`.

Review each new image at full size before use: count and trace each arm from
shoulder to hand, check hand/tool contacts, inspect the distant cast, then follow
straight structural edges, wheel planes and cylinder ends. Keep poses simple.
Parallel edges belonging to the same object must share a consistent vanishing
point; verticals stay upright. Metadata tests cannot verify drawn anatomy or
perspective, so a successful build is not visual acceptance.

The paintings are local assets bundled for web and Android. `export.js` embeds
image bytes as data URIs when downloading an SVG, so exports remain useful
offline. Do not claim the paintings are editable vector paths or that downloaded
SVGs animate. See [artwork-v3.md](artwork-v3.md) for the saved asset paths and exact
image-generation prompts.

`characters.js` adds reusable beaver and wooden-log geometry, and redraws the
shared automated agent as a rounded white robot with a curved visor, articulated
arms and purple joints. Select `kind: 'log'` deliberately for a recorded-event
metaphor, never for application logic or a product catalog. Real diagnostic-log
examples in the reliability course use it. The log-workshop demonstration labels
the wood metaphor explicitly. Beavers have paddle tails, teeth, ears, paws and
inspection tools; they do not replace human stakeholders in technical diagrams.
Selected investigation and review views use the beaver inspector as their scene
presenter, with the earned Pip companion kept in the surrounding UI. See the
[casting audit](illustration-casting.md) for reviewed placements and log semantics.
The log uses a regular cylinder, two concentric elliptical rings, and short
parallel grain marks with three raised white accents. It follows the scene palette, including the studio's blue, violet,
rose and gold variants; the log-workshop recipe defaults to gold. Its construction
stays identical across colors. The beaver has a narrow tilted oval eye, small
paired teeth and a plain face without muzzle outlines or mouth curves, so its
profile remains clear at lesson size.

`machinery.js` supplies the equipment vocabulary. Other lesson objects retain
restrained main/accent palettes; beaver fur retains its warm paint.
Teaching boards keep neutral/violet fills with warning colors only where
meaningful. Keep labels outside objects and maintain the three-frame limit,
semantic node IDs, independent placement/motion groups and shared pause policy.
Legacy palette IDs `sage`, `lilac`, `peach`, and `honey` remain Blue, Violet, Rose,
and Gold in the studio.

## Current teaching standard

An illustration should explain the concept even before its paragraph is read. Pip presents the evidence rather than standing beside three renamed icons. Keep each explanatory sequence to **one, two, or three frames maximum**; a single useful view is preferable to unnecessary steps. Use short captions and leave important evidence visible while highlighting the relevant part. Real exercise states, such as a pipeline record’s journey, are not slideshow frames.

`src/illustrations/teaching-recipes.js` supplies 174 authored demonstrations across all 137 chapters, including the original hardcoded chapter. `teaching.js` renders minimalist tables, proportional bars, shared-axis timelines, before/after comparisons, unit-correct equations, and directed relationship maps. These coexist with the story-specific isometric scenes. Examples include distinct request values for cardinality, overlapping spans rather than summed durations, actual energy arithmetic, shared mutation ownership, and delegated decisions.

Each teaching recipe declares `kind`, a short `title`, the concrete data, an example-boundary `note`, and at most three `frames` selecting a row, column, or item. Optional `captions` override the lesson’s scene captions. The main concept paragraph stays unchanged. Numeric examples must label assumptions and are not measured results. `chapterScene()` selects the authored example by course, chapter, and concept; the caller supplies real course XP for Pip.

`sequence.js` limits explanatory playback to three beats while preserving accumulated object states. The chapter shell builds its controls from the rendered sequence, not a separate count. Manual steps, global pause, and motion preferences share the existing director. Standalone exports contain inline chart typography and one visible frame; they need no page scripts or fonts.

`tests/teaching-illustrations.spec.js` checks chapter coverage, the frame limit, arithmetic, distinct-value counts, timing overlap, SVG text overlap/clipping, keyboard playback, and concept exports. These checks complement actual phone and desktop inspection; they do not replace editorial judgment.

This is a small SVG composition system, extracted from the chapter’s original isometric hero. It has no runtime dependencies. The hero, dimension explorer, live deployment sketch, organizational scenes, checkpoint, and decision-record illustration all use the same geometry and motion.

Open `/illustrations.html` for the live studio: preview 158 chapter, preset, and course-world recipes and their concept illustrations, change object palettes, copy scene data, and download self-contained static SVGs. Course covers have authored color compositions. It is included in production builds.

## Add a scene

```js
import { renderFigure } from './illustrations/engine.js';
import './illustrations/illustrations.css';

const scene = {
  title: 'A service sends a request to a database.',
  nodes: [
    { id: 'service', x: 145, y: 130, label: 'SERVICE', kind: 'service', tone: 'sage' },
    { id: 'data', x: 330, y: 240, label: 'DATA', kind: 'database', tone: 'peach' },
  ],
  edges: [{ from: 'service', to: 'data' }],
};

container.innerHTML = renderFigure(scene, {
  label: 'A shared dependency',
  caption: 'Storage choices influence how the application can change.',
  theme: 'sage',
});
```

Use `renderScene(scene)` for a bare SVG inside an existing panel. Add reusable recipes to `src/illustrations/scenes.js`; adding one to `sceneLibrary` automatically adds it to the studio. Keep lesson-specific copy and behavior out of the renderer.

## Scene contract

- `title`: required accessible description of what the illustration communicates.
- `nodes`: each needs a unique `id`, finite `x` and `y`, and a short `label`.
- `edges`: connections using `from` and `to` node IDs; `dashed: true` denotes a softer boundary, `flow: false` disables its moving packet, and moving packets follow the scene's main palette.
- `platform`: defaults to true; set false for a floating object vignette.
- `theme`: main object palette, default `lilac`; one other recipe tone provides emphasis.
- `className`: optional additional SVG class.

Node options:

| Field | Values / use |
| --- | --- |
| `kind` | `block` (default), the four original specialized kinds, or one of the 19 semantic kinds listed below |
| `tone` | `sage`, `lilac`, `peach`, `honey` |
| `caption` | Short line below the object; documents, gates and people use `label` as a fallback |
| `width`, `height` | Block/database dimensions; default 100 × 37 |
| `windows` | Adds service windows to blocks |
| `badge` | Optional short floating annotation |

All labels and attribute text are escaped. Node IDs are scene-local data attributes. Light-sweep gradients and clipping paths use unique generated IDs for each scene instance, so repeated scenes do not create duplicate DOM IDs. Invalid IDs, coordinates, kinds, or missing edge endpoints fail early.

## Coordinate and drawing rules

The isometric canvas is `480 × 375`; front-facing teaching surfaces use `480 × 420`. Both scale with their container. `(x, y)` is the center of a block’s top diamond, database top ellipse, or custom primitive origin. Objects draw back-to-front by `y`. Position transforms are on an outer group; float animation is on an inner group so animation cannot replace placement.

Start from a recipe with the right arrangement. Keep nodes roughly within x=100–380 and y=75–250, allow about 100 units beneath each origin for its shape and caption, and keep labels short. Connections join projected centers behind objects. They show relationships rather than exact protocol routes. At phone size, put detailed explanations in the HTML caption rather than shrinking long SVG labels.

## Interaction and motion

```js
import { highlightScene } from './illustrations/engine.js';
highlightScene(container, ['service']); // Highlight by meaning, not SVG element order.
highlightScene(container, []);          // Clear.
```

Stateful diagrams can re-render from a new recipe, as `deployments(count)` does when the slider changes. The dimension tabs select one of four scenes. Shared CSS provides floating objects, flowing packets, and highlighted nodes. All animation follows `prefers-reduced-motion`; the site’s pause button sets `.motion-paused` on the body. Do not add SVG SMIL animations that bypass that control.

## Extending the drawing vocabulary

Add a kind to the renderer’s allow-list and its geometry function. Draw around the local origin, use the supplied palette (`top`, `left`, `right`, `stroke`, `ink`), and keep text outside stroked geometry. Prefer extending these primitives to duplicating whole SVG scenes.

The studio’s SVG export is intentionally static and embeds its text styling; it needs no web fonts, scripts, or external CSS. Site illustrations retain their animation.

## Validation

`npm test` covers chapter interactions, scene-driven updates, the studio export, bad recipe rejection, text escaping, phone overflow, reduced motion, and the hero’s semantic highlight. `npm run build` produces both the lesson and studio pages.

## Book-wide chapters and logical motion

`src/chapters/visuals.js` exports `chapterScene(chapter)`, which turns the chapter's semantic `visual.nodes`, `visual.edges`, and `visual.steps` into a shared isometric recipe. Nodes are deliberately short-labeled and positioned from a small set of readable layouts. The book app and studio use the same function. The studio includes 12 original presets and 136 data-driven chapter scenes. Its Concept selector opens the chapter’s individual illustrations without adding hundreds of thumbnails.

A scene can include `sequence: [{ node: 'service', text: 'The service validates the request.' }, ...]`. The renderer embeds this data safely. `src/illustrations/motion.js` provides `startSceneMotion()`, `setSceneStep(svg, index)`, and `wireScenePlayer(host)`. The director registers newly mounted SVGs, advances visible sequences, marks active nodes and outgoing connections, and updates the player caption. Removed scenes are unregistered. Background tabs and the global pause suspend automatic advancement. Device reduction also suspends motion when system mode is explicitly selected.

Use a `[data-scene-player]` wrapper with numbered `[data-scene-step]` buttons, `[data-scene-caption]`, and `[data-scene-play]` for a controllable sequence. Manual stepping pauses automatic sequence progression; the subjects can keep gently floating until global pause is selected. `.iso-processing` identifies the current operation, while `.iso-active` remains available for explicit lesson interactions.

The added SVG classes `.iso-shadow`, `.iso-traveler`, `.iso-work-ring`, and `.iso-scan` share CSS animation. Keep meaningful step order in the recipe; do not rely on painter order to tell the story. A teaching animation illustrates the stated scenario, not every possible runtime execution or an empirical benchmark.

Pip's ten forms use cumulative XP thresholds: 0, 100, 400, 900, 1600, 2400, 4000, 6500, 9500, 12400. `nextEvolution(xp)` supplies the next milestone. Overall avatars use combined earned XP from the independently persisted path ledgers in `src/progress.js`; course-specific Pip presenters use only that course’s earned XP.

### Explicit motion preference

`motion-preference.js` is the single source for CSS, sequence timing, and all page controls. Motion is on by default, including under `prefers-reduced-motion: reduce`, as requested for this experience. An explicit Pause choice is remembered. `?motion=system` opts into following the device preference; Enable/Play can override it. The choice persists in `fieldnotes-motion-v1`. The global button states whether motion is on or off. `?motion=on` explicitly enables motion and is consumed from the URL after saving the preference.

Reduced-motion CSS is scoped to `body:not(.motion-on)` so the user's explicit enable choice works. SVG float uses the standard `transform: translateY(...)` on the inner object group. Do not reintroduce an unconditional reduced-motion early return or a separate button handler: those previously made Resume ineffective while its label incorrectly implied playback.

## Playable chapter pilot: Pipeline (11)

`src/activities/pipeline.js` separates `traceRecord()` (deterministic teaching outcomes), `pipelineRecipe()` (nodes and edges), and `mountPipelineLab()` (interaction and playback). Adding validation changes the topology and sends malformed records to quarantine. The mission requires both a rejected malformed record and a valid record stored through validation; progress is persisted through the existing chapter ledger. Failed runs do not award XP. The model explicitly labels its simplified invalid-data behavior.

The activity receives `{state, save, reward, xp, action}` and returns a cleanup function. `action({label, disabled, run})` configures the shared footer; route changes dispose the activity and reset that action. Use this contract for future playable chapters. Animation time advances only while motion is enabled and the document is visible; when paused, learners can advance a stage manually. Floating subjects use shared CSS and outgoing flows follow the active record route. Do not tie rewards to an animation finishing without checking its learning outcome.

Chapter 11 pilots a separate Skip link, staged quiz selection followed by Check answer, footer-driven concept navigation and reflection submission, labeled desktop progress, and compact mobile controls. The other chapters retain their existing activities. Further rollout should use chapter-specific mechanics and evidence, rather than cloning the pipeline exercise.

## Semantic shapes (book-wide review)

The renderer extends the five original primitives through `primitives.js`, `people.js`, and `story-geometry.js`. Inspect the exported `primitiveDescriptions` for the current vocabulary. `primitiveDescriptions` powers the studio's visual key. Set `kind` deliberately in a recipe; the renderer never guesses from a label. Keep databases for persistent stores, cache chips for memory, deployment enclosures for runtime units, and neutral boundaries for scopes such as a team. A service tower is a visual metaphor for executing software, not a claim that each service occupies physical hardware.

| Role | Kind | Visual cue |
| --- | --- | --- |
| Customer experience | `storefront` | Awning, window, door |
| Screen or client | `browser` | Interface panels |
| Executing software | `service` | Tower with activity lights |
| Code or transformation | `terminal` | Command window, blinking cursor |
| Data producer | `source` | Records and outgoing arrow |
| Event / ordered buffer | `message` / `queue` | One envelope / several on a conveyor |
| Memory | `cache` | Chip and lightning mark |
| Extension / logical module | `plugin` / `component` | Puzzle piece / component tabs |
| Runtime grouping / general scope | `deployment` / `boundary` | Enclosed runtimes / neutral linked elements |
| Measurement / routing | `gauge` / `router` | Needle / branching arrows |
| Trade-off / goal | `balance` / `target` | Scales / target rings |
| Collaboration / time | `team` / `clock` | Shared table / clock hands |
| Architecture drawing | `blueprint` | Connected diagram on a board |

Audited all 12 original scene presets, 23 chapter recipes, and the interactive pipeline variants. Corrected events previously drawn as people, deployment units and quality checks drawn as databases, and queues drawn as documents. New roles keep shared floating subjects and route flows, with local cursor, indicator, needle, scale, and clock animation. All animations honor global pause and explicit motion settings. Labels are external to role shapes; optional captions sit below labels. Static SVG exports include the role-caption styling and hide processing overlays.

The activity halo (`.iso-work-ring`) sits behind the subject at its ground shadow, outside the floating object group. It uses a palette-colored blurred ellipse with a slow, small breathing cycle; avoid expanding outlines across the object or its label. Keep the halo hidden in static exports and governed by the shared pause control.

The scan (`.iso-scan`) is a broad, softly graduated light band clipped to the object geometry, excluding its text. It travels inside the floating group and never crosses external labels. Per-instance clip and gradient IDs keep repeated scenes and standalone exports self-contained. Playback, global pause and reduced-motion controls still govern the sweep.

## People, relationships, and practices

`src/illustrations/people.js` extends the same renderer with fourteen semantic primitives. They inherit the palette, ground shadow, floating subject, active-node halo, clipped scan, connection flows, accessible title, and global motion preference. No separate animation timer is created per person.

| Kind | Use it to explain | Local action |
| --- | --- | --- |
| `api` | An explicit request and response contract | Request and response indicators |
| `search` | Retrieving relevant records | A lens moves across records |
| `colleague` | An individual coworker participating in work | A nod and hand gesture |
| `mentor` | Experience shared between two people | A shared note and conversational turn |
| `listening` | A group hearing different perspectives | Alternating speech bubbles |
| `stakeholders` | Different needs meeting at one decision | A pulsing shared decision |
| `handoff` | Transferring responsibility with context | A note passes between people |
| `whiteboard` | Shared direction, a model, or a plan | The diagram draws itself |
| `agent` | An automated reasoning and action loop | Signal, eyes, and tool arm |
| `shield` | Protection and deliberate admission | A check is drawn |
| `leaf` | Resource use and environmental consequences | A leaf moves and energy pulses |
| `trace` | Causal context across linked operations | A highlight follows the spans |
| `alert` | A signal that asks for action | Bell movement and signal pulses |
| `experiment` | Testing a hypothesis against evidence | Rising bubbles and an emerging result |

Use the relationship that matters: mentoring is not a reporting line; listening is not agreement; an agent is not a human coworker. Label an edge or sequence step with what travels—context, responsibility, evidence, or a request. Avoid a generic “observe → decide → act” composition when the chapter teaches a more specific mechanism.

A chapter's `visual` has `nodes`, `edges`, and `steps`. `chapterScene()` supplies consistent positions for three to five nodes. Select kinds by meaning, use short labels, and keep longer explanations in the step caption. For example, a mentoring scene can connect `colleague` (question), `mentor` (guided practice), and `handoff` (independent ownership). The studio automatically includes every path's scenes and every registered primitive.

All local animations are CSS and respect the existing `.motion-paused` and `.iso-sleep` rules. A still export remains a meaningful diagram; website and APK scenes animate when motion is on.

`src/companion.js` mounts a persistent Pip strip through the shared bootstrap. It derives evolution progress from combined earned XP within the current stage interval, listens for `book:progress`, and reserves header space on phones. The final stage displays a full ring.

## Course companions

### Earned level-up celebrations

Pip’s level-up celebration appears after a genuine mission reward crosses a course or overall evolution threshold. The frameless celebration has three visual beats—Pip crouches and leaps, transforms in expanding rings, then bounces into a burst of stars. Pip is the focus: the only visible copy is the new level, form name, and one “Let’s go!” button. Motion settles after 4.2 seconds; it does not loop or close on a timer. Open `/illustrations.html#level-up` and select **Play celebration** to preview any of the nine tracks and any of its nine level transitions without earning XP. Dismiss and preview again to replay; **Still preview** lives outside the popup.

`level-up-model.js` compares real before/after XP against existing overall or course thresholds. Same-level changes, decreases, and already-maxed progress produce no transition. `level-up.js` renders the actual before/after avatars and level, while `level-up.css` owns the finite motion. Previewing does not award XP or edit ledgers or drafts. **Play celebration** explicitly enables the shared motion preference if paused, matching the scene player’s Play action. **Still preview** does not change that preference.

The popup uses a native modal dialog with explicit Tab/Shift+Tab containment, Escape/button/backdrop dismissal, and focus restoration. The still option reveals the final form immediately, including when motion is turned off during the reveal. The popup uses the same motion policy as the rest of the studio: **System** respects device reduction; explicit **On** takes precedence. Neither JavaScript nor CSS may silently override **On** with a second device check. Regression tests emulate device reduction with saved on/off/system settings and measure Pip’s rendered movement after Play. Backgrounding the document settles the preview rather than replaying a surprise on return.

Live integration ships in v0.5.0. `progress.js` emits `book:reward` only after a new mission award, carrying course and combined XP before and after that award. `level-ups.js`, initialized once by the shared bootstrap, queues course-first and overall-second celebrations without overlap. Reading, draft saves, reloads, restores, and repeated missions do not trigger celebrations. No additional progress or “last celebrated level” is persisted. Route changes clear stale queued celebrations; background tabs defer queued ones until visible. Android Back dismisses the active popup without leaving the lesson, while flushing native saves. Automatic celebrations honor the current motion preference and never enable motion themselves. The studio and the live app use the same renderer.

`tests/earned-level-up.spec.js` exercises actual reward interactions in every course, simultaneous course/overall transitions, once-only rewards, reloads, drafts, phone motion and the legacy Chapter 1 flow. The Android release audit also earns a course level in the installed signed APK, checks moving artwork, presses hardware Back, and confirms the lesson and saved XP survive.

`src/illustrations/course-sidekicks.js` defines eight themed families with ten forms each. Every family has its own head shape, colors, themed headgear, and ten distinct pieces of equipment. Keep the original ten overall forms in `sidekick.js`; they still use combined XP. Total collection: 90 appearances.

Course thresholds derive from that book’s total XP at 0, 5, 12, 22, 34, 48, 64, 78, 90, and 100 percent, rounded to reachable 20-XP increments. The last form requires all course XP. Derive state from the existing ledgers; never store another mutable level or reset progress.

To extend a family, edit its stage names and gear recipes, then its themed headgear. Keep each stage visually distinct beyond color, preserve the 180×175 viewBox, and check it at both atlas size and 50 pixels in the persistent header. `companions.html` previews all forms without granting rewards. The header shows overall and current-course tracks side by side; portrait links open the relevant atlas. Offscreen atlas artwork pauses.

Green Software adds a sage companion with solar-panel headgear and ten resource, energy, scheduling, hardware, measurement, and stewardship forms. Its thresholds derive from the course’s 1,300 XP; existing overall thresholds remain stable. Its 13 chapter scenes use the shared semantic primitives and scene player.
