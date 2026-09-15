# Chapter 8: Release Engineering

*Pip’s adventure: The canary must be the package that ships. Fictional teaching story; concepts follow the cited source.*

Source: text lines 3537–3852.

Pip’s repair build quietly picks up a new compiler. Release engineering removes that uncertainty with controlled inputs, tests of the exact release combination, and artifact identity from source through rollout. Configuration changes need the same deliberate treatment.

## Hermetic builds

Pip rebuilds last month’s release and gets an unrelated dependency change. Hermetic builds use declared, controlled inputs rather than whatever tools a machine happens to hold. Versioning build tools alongside source makes older releases meaningfully reproducible. Pip includes only the intended fix and recorded compiler and dependencies.

Source: text lines 3537–3852.

## Release contents must be tested together

Pip selects two individually passing fixes for the release branch. The chapter’s workflow branches at a known revision and chooses fixes already on mainline. Their combination may never have been tested together. Pip tests that exact release content and retains its validation trail before packaging.

Source: text lines 3537–3852.

## Artifact identity and staged deployment

Pip rebuilds between canary and rollout and loses the evidence link. A package identifies actual contents; workflow labels indicate its stage. Pip deploys the same hash progressively with traceability from source through testing to production. Expansion follows risk and the observations needed, not a universal timetable.

Source: text lines 3537–3852.

## Configuration is part of the release

Pip changes a flag and alters booking behavior without a new binary. Configuration needs review, versioning, running identity, and compatibility checks too. Bundling simplifies matching; separate packages allow independent changes; dynamic stores permit runtime updates. Pip chooses the distribution model and can identify the exact active configuration.

Source: text lines 3537–3852.

## Transfer challenge: Promote a reproducible release

A library change passes tests but has two dependency versions in different build environments. The team can promote one immutable artifact through stages or rebuild separately in production.

### Build once and promote the artifact

The tested bits remain the bits deployed, making rollback clearer. The pipeline must preserve configuration separation. The canary uses the same artifact and is widened only after health checks.

### Rebuild at each environment

Environment-specific builds can adapt to local requirements. Drift can make a production failure impossible to reproduce. The production rebuild works but creates a second debugging dimension.

Immutable promotion preserves the tested artifact; rebuilding per environment is acceptable only when the resulting drift is explicit and testable.

## Trace one release end to end

Describe how an emergency source fix becomes a tested package, then a canary, then a wider release. Include the configuration version.

- Build inputs
- Evidence and identity
- Deployment decision
