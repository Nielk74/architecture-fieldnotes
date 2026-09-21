# Scenic artwork · revision 3

Generated with the built-in image generation tool in edit mode. Final assets are 1536 × 1024 WebP, converted at quality 90. Original generated PNGs remain at the paths below. Revision 2 inputs are archived in `/Users/antoine/projects/learn/temp/illustration-review-v2/original-assets/`.

Each illustration has a single cast. Beavers inhabit the bookshop, workshop, civic square and market. Robots inhabit the ferry, harbor, museum and cinema. The cinema has one technician; the other scenes have two foreground characters. Covers contain no companion inset. Earned companion UI sits outside the artwork.

Visual review checked character silhouettes and limb counts, shoulder-to-hand connections, tool contact, background cast, straight structural edges, related vanishing directions and elliptical cylinder ends. This is an editorial inspection, not a claim of measured CAD geometry. Browser and metadata tests verify integration, not depicted anatomy.

Review gallery: `/Users/antoine/projects/learn/temp/illustration-review-v3/gallery.html`. Contact sheet: `/Users/antoine/projects/learn/temp/illustration-review-v3/all-worlds.png`.

## Integration verification

Production build and all 151 browser tests passed. The review captured all eight covers, the phone shelf and course landing page, the studio, and an exported SVG rendered with network requests blocked. The course companion is 16 pixels below the artwork on a 390-pixel phone viewport. No page errors or horizontal overflow were observed. Android's copied web bundle matches production byte for byte across 438 files and includes exactly the eight revision 3 images. This verifies the bundled web assets, not a newly installed APK.

## Shared edit prompt

```text
Use case: precise-object-edit and illustration repair. The supplied image is the EDIT TARGET. Preserve its beautiful violet/indigo and warm amber editorial style, setting, lighting and full-bleed 1536x1024 landscape composition. Correct its cast, anatomy and drawing construction as specified. Anatomical precision is essential: every character has exactly ONE head, ONE torso, TWO arms attached at its two shoulders (one upper arm, one elbow, one forearm, one hand per arm), and TWO legs. Every visible hand must trace continuously to its own shoulder. No floating hands, extra arms, doubled elbows, fused limbs, unattached tools, or character-shaped background clutter. Keep poses simple, separated and easy to count. Construction: upright verticals, a consistent fixed eye-level camera and coherent two-point perspective. Each object's parallel edges must project toward consistent vanishing points; no warping shelves, skewed rectangles, disconnected rails or bent straight beams. Respect separate object orientations instead of flattening perspective. Use fewer clean accurate structural lines rather than many unreliable ones. Retain flat/faceted shapes, restrained palettes and elegant scenic depth. No text, logos, badges, insets or watermarks.
```

## bookshop

Saved asset: `/Users/antoine/projects/learn/public/artwork/bookshop-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-98cc8dae-722b-49f9-b6bc-bcdfb227059e.png`

Review: Two beavers. The customer holds one book with two paws; the bookseller reaches with one arm while the far forepaw is occluded. Shelf uprights, counter edges and book blocks checked.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: BEAVERS ONLY, exactly TWO beavers, no robots anywhere. Keep the left bookseller, with its left paw resting on the counter and its right paw holding the left side of ONE closed hardback book. Replace the robot with an orange beaver customer, with a clearly visible paddle tail; both its paws hold the other end of that same book. Remove the stack of books from the customer's arms so the exchange is uncomplicated. Books are rigid rectangular prisms with square corners and aligned page blocks. Simplify the bookshop shelving into three straight horizontal shelves and evenly vertical supports, with consistent perspective. The counter top and cart share coherent local perspective; the cart has one axle per wheel pair, no impossible wheels. Keep the canal, sunset, bridge and town but remove background character silhouettes.
```

## islands

Saved asset: `/Users/antoine/projects/learn/public/artwork/islands-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-bc0e3ff5-a96f-4df4-8536-81ccd3e30fc3.png`

Review: Two robots. Skipper has two hands on the wheel; navigator has two hands on the map. Dock is empty. Hull rails, bridge hangers and parcel faces checked.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: ROBOTS ONLY, exactly TWO robots on the ferry and NO characters on the dock. Replace the beaver skipper with a white-and-purple rounded robot having exactly TWO arms, BOTH hands visibly on opposite sides of the steering wheel. Keep the navigator robot but give it exactly TWO arms with BOTH hands gripping the two lower corners of the route sheet; NO pointing arm. Remove the dock beaver and leave a tidy stack of parcels. Remove ALL beaver tails, teeth, fur and beaver silhouettes. Repair ferry geometry: continuous gunwale and railing following the hull, evenly spaced supports, two coherent deck-edge directions, flat square parcel faces, clean vertical dock pilings. Simplify the suspension bridge to two continuous matching suspension cables and regularly spaced vertical hangers. Preserve layered islands, purple water and evening light.
```

## workshop

Saved asset: `/Users/antoine/projects/learn/public/artwork/workshop-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-c32c371e-e170-4bd0-8017-76ce27b4cbb6.png`

Review: Two beavers, four visible paws. Drawing gesture and wrench contact checked. Timber chords, braces, joints, bench and window mullions inspected.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: BEAVERS ONLY, exactly TWO beavers, no robots. Remove the central robot completely and reveal the window and empty bench behind it. Left beaver: one forepaw points to the drawing, the other rests flat at the edge of the table. Right beaver: one forepaw holds a single wrench on ONE clearly visible bolt, the other steadies the timber model. Exactly two paws per beaver, connected to their shoulders. Redraw the bridge model with clean engineering geometry: TWO matching parallel side trusses, straight top and bottom chords, vertical end posts, a small number of triangulated braces joined at real nodes, and transverse beams joining corresponding points. All long edges follow the same perspective direction; no fused timber or unsupported floating blocks. Bench planks follow the bench length, legs vertical. Windows have straight vertical mullions and matching arched frames. Keep the river and mill background.
```

## civic

Saved asset: `/Users/antoine/projects/learn/public/artwork/civic-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-20ef7357-1d94-454e-9f29-e3872f4c9ea7.png`

Review: Two foreground beavers, four visible paws. Wheelchair frame, model handrails and table edges inspected. First edit retained distant human silhouettes and was rejected; a local cleanup removed them.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: BEAVERS ONLY, exactly TWO foreground beavers, no robots, humans or distant residents. Remove the central robot and the tiny bridge character; reveal canal scenery behind them. Keep the left beaver seated in its manual wheelchair and right beaver standing. The seated beaver has exactly two arms: one paw on its lap, one on the table. The standing beaver has exactly two arms: one paw pointing to the bridge model, the other resting on the table edge. Remove hidden-looking extra hands. Correct wheelchair construction: one coherent seat and frame, two large parallel main wheels with aligned hubs, two small front casters. Redraw the model as a simple straight gently sloping accessible pedestrian bridge with matched parallel handrails and regularly spaced vertical posts. All model-base and table edges obey coherent perspective. Preserve warm civic architecture, flowering trees, canal reflections and restrained lighting.
```

Final local repair of the first edit:

```text
Precise local illustration repair. Keep the entire supplied image unchanged EXCEPT REMOVE ALL tiny human-shaped silhouettes in the distant civic square on the LEFT bank, between x=0 and x=575, around y=270 to y=335. There are roughly twenty purple people beside the market stalls and lamps. Replace each silhouette with appropriate empty pavement, distant shopfront or existing foliage. Preserve all architecture, trees, lamps, foreground TWO beavers, wheelchair, model, lighting and colors. The ONLY living characters in the completed picture must be the TWO large orange beavers. Do not add any new people, robots, animals or limbs. Keep image size and framing.
```

## harbor

Saved asset: `/Users/antoine/projects/learn/public/artwork/harbor-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-aea6ec97-9bc9-4901-9875-16d3d5fe5bd0.png`

Review: Two robots, four visible hands. Lantern keeper has one raised arm and one relaxed arm; the former third pointing arm is gone. Second robot holds the crank with two hands. Drum, axle supports and quay edges inspected.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: ROBOTS ONLY, exactly TWO robots in the foreground, no other characters. Repair the left lighthouse keeper: exactly TWO arms, its left hand holds the lantern above its left shoulder, its right arm hangs relaxed at its right side. REMOVE its pointing arm completely. Replace the beaver at the winch with a rounded white-and-purple robot, both hands gripping opposite portions of ONE crank handle, each hand connected to one shoulder by one arm. No tails, fur or beaver teeth. Remove the distant boat skipper and any passenger silhouettes. Simplify the winch to a cylindrical drum on one axle between two matching supports, with one clearly attached crank and one rope leaving the drum tangentially toward the moored ferry. Railing posts are vertical, rail segments straight and consistently aligned with quay perspective. Keep beautiful lighthouse, violet sea, amber windows and dusk clouds.
```

## market

Saved asset: `/Users/antoine/projects/learn/public/artwork/market-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-ea43e699-a3f6-4776-a57a-2b913b5932a4.png`

Review: Two beavers, four visible paws. Clipboard, magnifier and two paws on the timber checked. Conveyor rail directions, vertical scanner posts, bark and elliptical growth rings inspected.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: BEAVERS ONLY, exactly TWO beavers, no robots or background characters. REMOVE the white robot entirely and reveal the conveyor behind it. Keep the left beaver inspector with exactly two forepaws: one holds the clipboard, one holds a magnifier. Keep the right beaver with exactly two forepaws, both resting on ONE wooden log. Every paw is visibly attached to its own arm. Logs must look like real cut timber: cylindrical bark, small knots, elliptical end grain with concentric growth rings perpendicular to each log's axis. Redraw the conveyor as a rigid straight structure: two matched side rails following one vanishing point, parallel transverse rollers following the other direction, vertical supports. All logs travel with consistent orientation on the belt. The scanner is a simple rigid rectangular arch crossing the belt with two vertical posts. Preserve the warm market architecture and lovely violet canal evening, but remove distant silhouettes.
```

## museum

Saved asset: `/Users/antoine/projects/learn/public/artwork/museum-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-56b5be52-a4c3-43b0-b07e-8ef9157a0e42.png`

Review: Two robots. Guide has two visible arms; visitor holds one book with two hands, with the far forearm naturally occluded. Floor grid, columns, plinth and connected exhibit checked.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: ROBOTS ONLY, exactly TWO robots in the foreground. Keep the existing white-and-purple robot guide, with exactly two arms: one gestures to the exhibit, the other rests against its own abdomen. Replace BOTH beaver visitors with ONE rounded white-and-purple visitor robot, with exactly two hands holding the lower corners of ONE guidebook, elbows separated and traceable to shoulders. Remove the distant robot and all other character silhouettes. No tails, fur or teeth. Repair the architecture with straight upright columns, a coherent two-point floor grid and matched plinth edges. Simplify the orrery exhibit to a central sphere and three small planets on clearly connected thin arms above a circular plinth; elliptical rings and plinth ellipses share a consistent plane. Keep the dinosaur as an inanimate display. Preserve the beautiful violet vaulted museum, amber exhibit light, spacious composition and garden view.
```

## cinema

Saved asset: `/Users/antoine/projects/learn/public/artwork/cinema-v3.webp`

Selected original: `/Users/antoine/.codex/generated_images/01a0c33c-d16c-7e22-965e-fc9b126ab45b/exec-8a15ade4-ca3a-4383-9905-982c689dc2fe.png`

Review: One robot, two visible arms. First edit put a second robot in the light beam and hid its far arm; rejected. Final repair removes that character and mounts both reels on the projector. Screwdriver contact, clear beam, screen corners, solar grid and log benches inspected.

The initial edit used the shared prompt above followed by:

```text
CORRECTIONS: ROBOTS ONLY, exactly TWO foreground technicians, no audience or background characters. Replace the beaver on the left with one rounded white-and-purple robot: exactly TWO arms, one hand using a screwdriver on a single projector bolt, the other hand resting on the projector casing. Keep the right robot, with exactly TWO arms and BOTH hands holding opposite sides of ONE film reel; arms separated so each elbow and shoulder is visible. Remove every beaver spectator and leave the timber benches empty; no tails, fur or beaver teeth. Simplify the projector to one rigid rectangular housing, two circular reels mounted on axles in the same plane, one continuous plausible film path, and one lens directed toward the screen. Straight screen edges meet at four clean corners with consistent perspective. Solar panels have a clean rectangular grid with consistent vanishing points. Timber benches are straight cut logs with elliptical end grain and bark. Preserve lovely violet forest dusk, warm lanterns and the cinema clearing.
```

Final local repair of the first edit:

```text
Precise local illustration repair. Preserve the supplied picture's framing, color, setting and left technician EXACTLY. REMOVE the entire SECOND robot (the one behind the right film reel, centered around x=725 y=490), including its head, shoulders, hands, torso and legs. Restore the forest, lake and projector beam behind that robot. There must be ONLY ONE robot in the final picture: the left technician with its existing two arms, one hand on the casing and one using the screwdriver. Keep TWO film reels on top of the projector, but mount the RIGHT reel securely onto a simple black bracket and axle attached to the top of the housing; do not leave it held by a floating hand. Maintain a continuous plausible film strip path from reel to projector mechanism. Correct projector direction so its warm light travels unobstructed from the lens to the rectangular screen without passing through any character. Preserve straight projector edges, screen frame, coherent solar-panel grid, empty log benches, forest, violet sky and warm lamps. Add no characters or limbs.
```
