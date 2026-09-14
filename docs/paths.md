# Learning paths

`index.html` is the path-selection home. `fundamentals.html` and `hard-parts.html` share `src/book.js`, parameterized by pathname and metadata from `src/paths/catalog.js`. The original first chapter remains at `chapter-one.html`; its old progress and reflection keys are preserved.

Each path has a separate chapter catalog, source attribution, notes directory, XP total, and progress store. Add metadata and content deliberately when creating another path; register its persistence key in `src/storage.js` and its reward rules in `src/progress.js`. Do not renumber old chapters or rename persisted mission IDs. Legacy deep links at `/` redirect to the matching original page, including motion query overrides.

The Hard Parts follows the supplied early-release text, with 15 chapters and 1,500 available XP. `docs/hard-parts/source-index.json` records its exact chapter boundaries. All summaries were drafted from the local source and reviewed. Modern scenarios and scenes are teaching extensions. The generic sequence is orientation, concept exploration, decision comparison, quiz with explicit checking, and a saved reflection. Navigation remains open and XP is awarded once per mission.

`src/bootstrap.js` hydrates native storage before importing page modules. `src/storage.js` uses browser localStorage on web and Capacitor Preferences on Android. Native state never starts from an empty WebView cache when a saved preferences record exists. Full-page links flush native writes before navigation. `src/backup.js` validates and merges backups without overwriting existing writing.

The app ships fonts and learning content locally. No source book or external content fetch is required to study. The studio includes both books' scenes under distinct names.
