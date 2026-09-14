# Chapter 4: Tool Use

Original learning notes. Source: text lines 3119–3833 in the supplied book.

Tools connect a model’s decisions to information and actions outside its learned parameters. A useful tool contract explains its purpose, arguments, results, and errors so selection and execution are both understandable. Local functions simplify initial integration but introduce packaging and maintenance work across deployments. Remote services and shared protocols can centralize capabilities, while adding authentication, network latency, and partial-failure handling. Choosing between them is an architectural trade-off rather than a capability contest. Validation and access controls must enforce the actual boundary, particularly for tools that change external state. Reliable tool design makes later orchestration easier to inspect, test, and repair.

## Tool contract

A tool is a bounded capability with an input and output contract. Good descriptions help the model select it, while validation and clear errors keep malformed arguments or unexpected results from silently propagating.

## Local tools

Libraries or local functions are simple to call and can be fast, but every deployment must package, scale, secure, and maintain them. Duplication and version drift become costs as agent deployments multiply.

## Remote protocols

A shared protocol exposes tools through a service boundary, improving reuse and centralized maintenance. It also adds network failure, authentication, latency, and a larger trust boundary.

## Selection and safety

Tool choice should consider capability, reliability, cost, and risk. Read operations and external side effects deserve different permissions, confirmation rules, logging, and failure handling.

## Teaching extension

An agent may read stock and draft a reorder, but purchase commits money.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
