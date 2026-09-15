# Fieldnotes illustration framework

This is a small SVG composition system, extracted from the chapter’s original isometric hero. It has no runtime dependencies. The hero, dimension explorer, live deployment sketch, organizational scenes, checkpoint, and decision-record illustration all use the same geometry and motion.

Open `/illustrations.html` for the live studio: preview 35 recipes, change palettes, copy scene data, and download self-contained static SVGs. It is included in production builds.

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
- `edges`: connections using `from` and `to` node IDs; `dashed: true` denotes a softer boundary, `flow: false` disables its moving packet, and `color: 'lilac'` changes the packet color.
- `platform`: defaults to true; set false for a floating object vignette.
- `theme`: default object palette when a node has no explicit `tone`.
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

The canvas is always `480 × 375` and scales with its container. `(x, y)` is the center of a block’s top diamond, database top ellipse, or custom primitive origin. Objects draw back-to-front by `y`. Position transforms are on an outer group; float animation is on an inner group so animation cannot replace placement.

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

`src/chapters/visuals.js` exports `chapterScene(chapter)`, which turns the chapter's semantic `visual.nodes`, `visual.edges`, and `visual.steps` into a shared isometric recipe. Nodes are deliberately short-labeled and positioned from a small set of readable layouts. The book app and studio use the same function. The studio now includes 12 original scenes and 23 chapter scenes.

A scene can include `sequence: [{ node: 'service', text: 'The service validates the request.' }, ...]`. The renderer embeds this data safely. `src/illustrations/motion.js` provides `startSceneMotion()`, `setSceneStep(svg, index)`, and `wireScenePlayer(host)`. The director registers newly mounted SVGs, advances visible sequences, marks active nodes and outgoing connections, and updates the player caption. Removed scenes are unregistered. Background tabs and the global pause suspend automatic advancement. Device reduction also suspends motion when system mode is explicitly selected.

Use a `[data-scene-player]` wrapper with numbered `[data-scene-step]` buttons, `[data-scene-caption]`, and `[data-scene-play]` for a controllable sequence. Manual stepping pauses automatic sequence progression; the subjects can keep gently floating until global pause is selected. `.iso-processing` identifies the current operation, while `.iso-active` remains available for explicit lesson interactions.

The added SVG classes `.iso-shadow`, `.iso-traveler`, `.iso-work-ring`, and `.iso-scan` share CSS animation. Keep meaningful step order in the recipe; do not rely on painter order to tell the story. A teaching animation illustrates the stated scenario, not every possible runtime execution or an empirical benchmark.

Pip's ten forms use cumulative XP thresholds: 0, 100, 400, 900, 1600, 2400, 4000, 6500, 9500, 12400. `nextEvolution(xp)` supplies the next milestone. Every avatar uses the combined earned XP from the independently persisted path ledgers from `src/progress.js`.

### Explicit motion preference

`motion-preference.js` is the single source for CSS, sequence timing, and all page controls. Motion is on by default, including under `prefers-reduced-motion: reduce`, as requested for this experience. An explicit Pause choice is remembered. `?motion=system` opts into following the device preference; Enable/Play can override it. The choice persists in `fieldnotes-motion-v1`. The global button states whether motion is on or off. `?motion=on` explicitly enables motion and is consumed from the URL after saving the preference.

Reduced-motion CSS is scoped to `body:not(.motion-on)` so the user's explicit enable choice works. SVG float uses the standard `transform: translateY(...)` on the inner object group. Do not reintroduce an unconditional reduced-motion early return or a separate button handler: those previously made Resume ineffective while its label incorrectly implied playback.

## Playable chapter pilot: Pipeline (11)

`src/activities/pipeline.js` separates `traceRecord()` (deterministic teaching outcomes), `pipelineRecipe()` (nodes and edges), and `mountPipelineLab()` (interaction and playback). Adding validation changes the topology and sends malformed records to quarantine. The mission requires both a rejected malformed record and a valid record stored through validation; progress is persisted through the existing chapter ledger. Failed runs do not award XP. The model explicitly labels its simplified invalid-data behavior.

The activity receives `{state, save, reward, xp, action}` and returns a cleanup function. `action({label, disabled, run})` configures the shared footer; route changes dispose the activity and reset that action. Use this contract for future playable chapters. Animation time advances only while motion is enabled and the document is visible; when paused, learners can advance a stage manually. Floating subjects use shared CSS and outgoing flows follow the active record route. Do not tie rewards to an animation finishing without checking its learning outcome.

Chapter 11 pilots a separate Skip link, staged quiz selection followed by Check answer, footer-driven concept navigation and reflection submission, labeled desktop progress, and compact mobile controls. The other chapters retain their existing activities. Further rollout should use chapter-specific mechanics and evidence, rather than cloning the pipeline exercise.

## Semantic shapes (book-wide review)

The renderer now has 24 kinds: the five original primitives plus 19 role-specific shapes in `src/illustrations/primitives.js`. `primitiveDescriptions` powers the studio's visual key. Set `kind` deliberately in a recipe; the renderer never guesses from a label. Keep databases for persistent stores, cache chips for memory, deployment enclosures for runtime units, and neutral boundaries for scopes such as a team. A service tower is a visual metaphor for executing software, not a claim that each service occupies physical hardware.

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

`src/illustrations/course-sidekicks.js` defines seven themed families with ten forms each. Every family has its own head shape, colors, themed headgear, and ten distinct pieces of equipment. Keep the original ten overall forms in `sidekick.js`; they still use combined XP. Total collection: 80 appearances.

Course thresholds derive from that book’s total XP at 0, 5, 12, 22, 34, 48, 64, 78, 90, and 100 percent, rounded to reachable 20-XP increments. The last form requires all course XP. Derive state from the existing ledgers; never store another mutable level or reset progress.

To extend a family, edit its stage names and gear recipes, then its themed headgear. Keep each stage visually distinct beyond color, preserve the 180×175 viewBox, and check it at both atlas size and 50 pixels in the persistent header. `companions.html` previews all forms without granting rewards. The header shows overall and current-course tracks side by side; portrait links open the relevant atlas. Offscreen atlas artwork pauses.
