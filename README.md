# Architecture Fieldnotes

A playful, offline-capable software architecture learning app. Choose a book, explore animated systems, make trade-offs, check your reasoning, and keep a personal reflection. Pip grows with earned XP across your paths.

- **Fundamentals of Software Architecture:** 24 chapters, including the original custom first chapter and playable pipeline lab.
- **Software Architecture: The Hard Parts:** all 15 chapters of the supplied August 2021 early-release text.
- Shared isometric illustration framework with 24 semantic shapes, animated flows, gentle activity effects, and motion controls.
- Mobile layouts, freely accessible chapter maps, Back/Skip, progress backup/import, and an Android APK.

## Run locally

Requires Node.js 22+.

```sh
npm ci
npm run dev
```

Open `http://localhost:5173`. The home page selects a path; `/fundamentals.html` and `/hard-parts.html` open their chapter libraries. Old `/#chapter/...` and `/#lesson/...` bookmarks still work. `/illustrations.html` is the reusable illustration studio.

```sh
npm test
npm run build
```

## Private source material

Put purchased PDF, TXT, EPUB, or other book inputs in **`temp/`**. That folder and book-file extensions are ignored by Git. Source books are not part of this repository or the APK. The app builds entirely from the reviewed chapter JSON and original learning notes; no purchased inputs are required to build it.

The summaries paraphrase the books. Interactive examples are labeled teaching extensions. References for The Hard Parts use source-text lines because the supplied early-release extraction does not have reliable printed page numbers. It is not presented as the final published edition.

## Progress and backups

The original Fundamentals storage key, `fieldnotes-book-v1`, is retained. The Hard Parts uses `fieldnotes-hard-parts-v1`. Chapter IDs, drafts, and mission flags do not overlap between books. `fieldnotes-locations-v1` remembers where each path was left. Opening or skipping an activity does not earn XP.

Browser builds use localStorage. Android initializes native **SharedPreferences** before loading any chapter state, and writes progress back to native storage. It does not depend on WebView localStorage surviving. See [Capacitor Preferences documentation](https://capacitorjs.com/docs/apis/preferences).

Use **Export progress / Import progress** on the home page to move browser progress into Android or keep a backup. Import merges earned missions and preserves existing writing on conflicts. There is no cloud account or automatic cross-device sync.

Install newer APKs **over the existing app**. The application ID (`io.github.nielk74.fieldnotes`), origin (`https://localhost`), preference keys, and signing identity are stable. Uninstalling the app or clearing its app data removes local progress; export a backup before doing either.

## Android and CI

```sh
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

Android builds require Java 21 and Android SDK 36. Debug builds from a personal machine use its debug key; do not mix those with CI-signed builds if you want seamless updates.

The GitHub workflow validates the web app, audits public files, builds a signed release APK, and runs emulator tests that:

1. Earn real progress and save a reflection through the WebView UI.
2. Confirm both books are written to native preferences.
3. Clear WebView localStorage and verify native restoration.
4. Force-stop the app, install the release APK over the existing app, and verify both XP and the reflection survive.

Each successful main-branch run provides an `ArchitectureFieldnotes-Android` artifact. Tags matching `v*` publish the tested APK and SHA-256 checksum as a GitHub release.

Repository secrets required for signed CI builds:

- `ANDROID_KEYSTORE_BASE64`
- `ANDROID_KEYSTORE_PASSWORD`
- `ANDROID_KEY_ALIAS`
- `ANDROID_KEY_PASSWORD`

Keep the signing key permanently backed up outside the repository. Never regenerate it for normal releases. CI restores it into a temporary runner file and removes that file after the build. Pull requests run web validation without signing secrets.

## Extend the app

See [the illustration framework](docs/illustrations.md) and [learning paths](docs/paths.md). Book metadata lives in `src/paths/catalog.js`; shared screens live in `src/book.js`. The Hard Parts content is in `src/paths/hard-parts/chapters/` and its notes in `public/notes/hard-parts/`.

Independent learning companion; not affiliated with O’Reilly or the authors. Book titles and source content remain the property of their respective owners. The software license does not grant rights to redistribute purchased books.
