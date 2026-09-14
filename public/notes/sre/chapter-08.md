# Chapter 8: Release Engineering

Make the released binary and configuration reproducible and traceable

Release engineering makes delivery a repeatable engineering process from source revision to running service. Hermetic builds control their tools and dependencies so an older version can be rebuilt without accidentally incorporating today’s environment. Release branches and selected fixes identify the intended changes, but the resulting combination must still pass tests. Packaging gives artifacts stable identities and an audit trail that helps responders understand what is running. Deployment then promotes those artifacts at a pace suited to the service’s risk, with canaries and staged expansion where appropriate. Configuration deserves the same care as binaries: its packaging and version relationship determine whether a deployment can be reconstructed. Self-service tools and explicit policies let teams release frequently while keeping these controls consistent.

## Hermetic builds

A hermetic build obtains its inputs from declared, controlled sources instead of whatever tools or libraries happen to be installed on a machine. Versioning build tools as well as source code makes rebuilding an older release meaningful. Reproducibility reduces uncertainty when investigating failures: a rebuild for one fix should not silently introduce an unrelated compiler or dependency change.

## Release contents must be tested together

Google’s workflow creates a release branch at a known revision and selectively adds fixes already submitted to mainline. This controls which changes enter the release, but the resulting branch may be a combination never tested on mainline. Running release tests on that exact combination establishes evidence about what will ship and records an audit trail of its validation.

## Artifact identity and staged deployment

A package identifies the actual built contents, while labels can indicate its place in the release workflow. Deployments should reference the intended version and preserve a trace from source through testing to production. Canarying and progressive rollout expose changes to limited traffic first; expansion pace depends on risk and the observations needed to find problems, rather than a universal release schedule.

## Configuration is part of the release

Configuration can change service behavior as profoundly as a binary. Keeping it reviewed and versioned makes changes intentional, but teams must choose how it is distributed. Bundling configuration with binaries simplifies matching; separate packages permit independent changes; dynamic stores support runtime updates. Each choice needs a clear way to identify the running configuration and its compatibility with the binary.

## Apply it

Describe how an emergency source fix becomes a tested package, then a canary, then a wider release. Include the configuration version.

Source: *Site Reliability Engineering*, chapter 8, text lines 3537–3852. This note is an original synthesis; the exercise is a teaching extension.
