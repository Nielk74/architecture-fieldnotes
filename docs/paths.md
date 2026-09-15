# Learning paths

`index.html` is the path-selection home. `fundamentals.html` and `hard-parts.html` share `src/book.js`, parameterized by pathname and metadata from `src/paths/catalog.js`. The original first chapter remains at `chapter-one.html`; its old progress and reflection keys are preserved.

Each path has a separate chapter catalog, source attribution, notes directory, XP total, and progress store. Add metadata and content deliberately when creating another path; register its persistence key in `src/storage.js` and its reward rules in `src/progress.js`. Do not renumber old chapters or rename persisted mission IDs. Legacy deep links at `/` redirect to the matching original page, including motion query overrides.

The Hard Parts follows the supplied early-release text, with 15 chapters and 1,500 available XP. `docs/hard-parts/source-index.json` records its exact chapter boundaries. All summaries were drafted from the local source and reviewed. Modern scenarios and scenes are teaching extensions. The generic sequence is orientation, concept exploration, decision comparison, quiz with explicit checking, and a saved reflection. Navigation remains open and XP is awarded once per mission.

`src/bootstrap.js` hydrates native storage before importing page modules. `src/storage.js` uses browser localStorage on web and Capacitor Preferences on Android. Native state never starts from an empty WebView cache when a saved preferences record exists. Full-page links flush native writes before navigation. `src/backup.js` validates and merges backups without overwriting existing writing.

The app ships fonts and learning content locally. No source book or external content fetch is required to study. The studio includes both books' scenes under distinct names.

## Book registry

`src/paths/registry.js` is the shared source for path identity, source attribution, chapter counts, categories, progress keys, and home illustrations. Keep each path ID stable. Original URLs remain valid; additional books use `/learn.html?path=<id>#chapter/<number>/<step>`. Lesson content is loaded only for the selected path. The studio intentionally loads all scene recipes.

To add a book:

1. Keep its source in ignored `temp/`. Identify actual body chapter boundaries using literal newline counts; Python `splitlines()` also splits form feeds and can produce different references.
2. Create `docs/<id>/source-index.json`, `src/paths/<id>/chapters/NN.json`, and `public/notes/<id>/chapter-NN.md`. Read each chapter before drafting. Numbered chapters form the path; appendices and indexes do not become artificial chapters.
3. Register metadata and three meaningful home-scene kinds in `registry.js`. Counts, parts, native preference keys, backup validation, and combined XP derive from that registry.
4. Write concepts that explain mechanisms, not prose templates with substituted nouns. Each quiz must test a chapter-specific distinction. Compare two choices with actual constraints and costs. Label invented cases as teaching extensions.
5. Review references against the source, render every chapter, complete representative journeys, and check progress isolation and backup restoration. The library tests reject repeated concept bodies and quiz questions.

Pip preserves the original 0–2,400 XP forms and adds forms at 4,000, 6,500, 9,500, and 12,400 XP. Adding books does not erase or rescale previous achievements.

The home library shows all eight illustrated courses before selection, with per-course XP, completion percentage, and completed chapter counts. Topic, search, and progress filters combine; the Continue learning strip resumes the latest unfinished course.

Android uses Capacitor’s supported legacy bridge transport for this multi-page app. This avoids the WebMessage reply proxy changing across document navigations while native preference hydration is in flight. Native persistence tests traverse all registered paths before and after installing the release APK.

## Building Green Software

The `green-software` path covers all 13 numbered chapters of the March 2024 first edition by Anne Currie, Sarah Hsu, and Sara Bergman. It adds 1,300 XP, an independent ledger, ten course companion forms, 13 scene recipes, and 13 original source notes. See [the learning brief](green-software/learning-plan.md) and [source boundaries](green-software/source-index.json).

Open `/learn.html?path=green-software`. Exercises distinguish energy efficiency, hardware longevity, carbon-aware operation, and measurement uncertainty. Book-era predictions, tool capabilities, and the maturity framework are attributed to the supplied edition; scenarios and practice numbers are teaching extensions. The raw book remains in ignored `temp/`.
