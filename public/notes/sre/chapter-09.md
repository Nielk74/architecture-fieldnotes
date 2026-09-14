# Chapter 9: Simplicity

Reduce the behavior and coupling that operators must reason about

Simplicity supports reliability by reducing the amount of behavior that must be understood, tested, and changed safely. Essential complexity belongs to the problem; accidental complexity comes from chosen implementations and can often be removed. Predictable code, small APIs, and clear component responsibilities make failures easier to locate. Dead code and obsolete flags are liabilities even when they appear inactive, because they retain confusing and potentially executable paths. Version control provides a way to recover deleted code without leaving it embedded in production. Modularity also applies to releases and data formats: compatible interfaces let teams change one component without rebuilding the whole system. Small, understandable releases make effects easier to attribute and allow stability and development speed to reinforce each other.

## Essential and accidental complexity

Essential complexity is imposed by the problem being solved; accidental complexity arises from how the solution is built. Serving correct results under load is a real requirement, while unnecessary layers or awkward implementation choices may add avoidable difficulty. SRE should challenge the latter because every extra behavior complicates diagnosis, testing, and change without necessarily delivering value to users.

## Delete dead behavior

Unused code and permanently disabled features retain maintenance and reasoning costs. A flag may later change, reviving an untested path, while commented code distracts readers and becomes stale. After checking that a path is no longer needed, deletion removes those liabilities. Version history preserves the old implementation if future investigation requires it; production source need not serve as its archive.

## Small APIs and coherent modules

A small API exposes only the operations needed for a clear purpose, reducing the surface that callers and maintainers must understand. Components with coherent responsibilities can be changed independently. Compatibility and versioning extend this independence across releases, avoiding a forced system-wide upgrade whenever one participant changes. A miscellaneous utility service with unrelated duties weakens that separation.

## Small releases improve attribution

A large release mixes many potential explanations for any performance or correctness change. Smaller releases narrow the set of suspects and make rollback or repair easier to reason about. Simple release procedures also help developers move faster because the effect of a change is visible sooner. The objective is understandable, controllable change rather than freezing a production system indefinitely.

## Apply it

Choose an obsolete feature flag or interface. Explain how to establish that it is unused, remove it, and verify that supported callers still work.

Source: *Site Reliability Engineering*, chapter 9, text lines 3853–4118. This note is an original synthesis; the exercise is a teaching extension.
