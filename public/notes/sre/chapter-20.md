# Chapter 20: Load Balancing in the Datacenter

Source: text lines 8107–8603 of the supplied book extract.

A datacenter can have spare aggregate CPU while its busiest backend limits usable capacity. This chapter explains why distributing equal request counts does not reliably distribute equal work. Client traffic rates, query costs, machine performance, and neighboring workloads all vary. Health management must also distinguish an unavailable server from one that is draining requests before shutdown. Subsetting limits the cost of persistent client connections, but choosing subsets randomly can create substantial imbalance; deterministic assignment improves coverage. Least-loaded routing uses active requests as a proxy and can accidentally favor a server that fails quickly. Weighted round robin instead incorporates backend reports of successful work, errors, and utilization to adjust routing toward demonstrated capability.

## Lame-duck draining

A server in lame-duck state can still finish requests but asks clients to stop assigning new work. Publishing that state before shutdown gives clients time to redirect traffic while existing requests drain. This is more informative than merely refusing connections or reaching an outstanding-request limit, which may reflect slow legitimate work rather than a failed process.

## Deterministic connection subsetting

Connecting every client to every backend consumes memory, health-check work, and connection setup capacity. Subsetting bounds those costs by selecting a smaller backend pool per client. Independent random choices can overpopulate some backends and leave others lightly used. Deterministic subsetting distributes assignments across coordinated rounds, improving coverage while making the connection pool practical to operate at scale.

## Limits of counting outstanding requests

Least-loaded routing favors backends with fewer active requests, but each client sees only its own traffic and request count is an imperfect proxy for resource usage. A server that returns errors immediately can appear especially idle and attract more traffic. Accounting for recent failures avoids that sinkhole, although it does not solve differences in request cost or machine capability.

## Weighted round robin from backend feedback

Weighted round robin assigns each backend a capability score and sends traffic in proportion to that score. Backends report observed query rates, error rates, and utilization, giving clients a broader picture than their own outstanding requests. Successful throughput relative to resource consumption raises useful capacity, while errors reduce preference. Periodic updates let the distribution adapt to changing performance and heterogeneous machines.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
