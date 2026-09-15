# Chapter 9: Simplicity

*Pip’s adventure: One less switch to misunderstand. Fictional teaching story; concepts follow the cited source.*

Source: text lines 3853–4118.

Pip finds three ways to configure the same authorization rule. The service still needs authorization, but not every inherited complication. Clear modules, small interfaces, removed dead paths, and smaller releases make production behavior easier to understand and change.

## Essential and accidental complexity

Pip finds three overlapping authorization configuration systems. Authorization is essential complexity imposed by the problem; redundant mechanisms may be accidental complexity in the solution. Every unnecessary behavior adds diagnostic, testing, and change costs. Pip challenges the extra layers without removing the real user requirement.

Source: text lines 3853–4118.

## Delete dead behavior

Pip spots a retired exporter behind a permanently disabled flag. Unused paths still cost maintenance and might revive untested when a flag changes. Pip verifies no supported deployment needs it, then deletes the dead behavior. Version history preserves the past without making production source its archive.

Source: text lines 3853–4118.

## Small APIs and coherent modules

Pip’s miscellaneous helper service makes every upgrade a group event. Small APIs and coherent responsibilities reduce what callers and maintainers must understand. Compatibility and versioning let a schema addition roll out while callers migrate later. Pip narrows the interface instead of forcing system-wide upgrades.

Source: text lines 3853–4118.

## Small releases improve attribution

Pip ships fifty changes and cannot identify the latency regression. Smaller releases narrow suspects and simplify rollback or repair. Simple procedures expose effects sooner and help developers move faster. Pip aims for understandable, controllable change—not a production system frozen forever.

Source: text lines 3853–4118.

## Transfer challenge: Delete a risky option

A service has a legacy configuration flag that changes timeout behavior, is undocumented, and is never used in current traffic. Keeping it complicates testing.

### Remove the dead flag after checking dependencies

The state space shrinks and the remaining behavior is easier to reason about. A hidden consumer would need a migration path. The team searches callers, announces removal, and deletes the flag.

### Keep every option for compatibility

An unknown consumer is less likely to break. The unsupported path keeps complexity and failure modes alive. The flag remains and every future change must test it.

Deleting an unused mode reduces the state space after compatibility is checked; keeping it preserves a hypothetical consumer at a permanent complexity cost.

## Remove one unnecessary behavior

Choose an obsolete feature flag or interface. Explain how to establish that it is unused, remove it, and verify that supported callers still work.

- Accidental complexity
- Dependency check
- Small release
