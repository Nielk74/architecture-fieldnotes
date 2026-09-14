# Chapter 19: Load Balancing at the Frontend

Source: text lines 7876–8106 of the supplied book extract.

Frontend load balancing operates at several levels because location choice and packet forwarding solve different problems. A latency-sensitive request usually benefits from a nearby healthy datacenter, while a large upload may benefit more from available bandwidth. DNS can steer traffic before a connection begins, but recursive resolvers hide user locations, aggregate many users, and cache answers. Capacity and network health therefore matter alongside distance. A virtual IP then distributes connections among backends while presenting one stable address. Connection tracking or consistent hashing preserves affinity as packets arrive and backend membership changes. Direct server response and packet encapsulation reduce forwarding constraints, with encapsulation adding packet overhead that must fit the network’s MTU.

## Global routing objectives

The best destination depends on the request and the layer making the decision. Low round-trip latency matters for interactive queries, whereas throughput can dominate a large upload. Global routing must also account for available serving capacity, link congestion, and infrastructure health. Choosing the geographically nearest site alone can therefore send traffic to a destination that cannot serve it well.

## DNS steering and resolver uncertainty

Authoritative DNS responses can select a destination before the client opens a connection. Usually the query comes through a recursive resolver, so the observed address may represent many geographically dispersed users. Cached answers delay routing changes and make each response’s traffic impact uncertain. Resolver population estimates, client-subnet information where available, and capacity signals improve decisions without removing these limitations.

## VIP affinity and consistent hashing

A virtual IP hides a backend pool behind one client-visible destination. Stateful connections need their packets to reach the same backend. A simple hash modulo the backend count remaps many connections when membership changes. Consistent hashing limits this remapping, while connection tracking can retain existing assignments. These mechanisms address connection continuity; they do not themselves prove that every backend has equal load.

## Direct replies and encapsulation

Direct server response lets a backend reply to the client without sending the response through the load balancer, reducing forwarding work for response-heavy traffic. Forwarding by changing a destination MAC address restricts the backend pool to a shared layer-two domain. IP encapsulation removes that locality constraint by tunneling the packet to its backend, but the additional headers consume MTU space and can cause fragmentation.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
