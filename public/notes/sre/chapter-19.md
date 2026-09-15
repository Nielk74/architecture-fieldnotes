# Chapter 19: Load Balancing at the Frontend

*Pip’s adventure: The nearest harbor is not the fastest route. Fictional teaching story; concepts follow the cited source.*

Source: text lines 7876–8106.

Pip routes every request to the nearest region and overloads it. Global balancing needs demand, capacity, network conditions, and connection continuity. DNS caching and packet-forwarding choices add constraints that a simple geographic map cannot show.

## Global routing objectives

Pip sends a large upload to the geographically nearest site. Interactive queries favor round-trip latency, while uploads may favor throughput. Capacity, link congestion, and infrastructure health can outweigh distance. Pip chooses a less congested route when it serves the actual request better.

Source: text lines 7876–8106.

## DNS steering and resolver uncertainty

Pip changes a DNS answer, but old traffic keeps arriving. Recursive resolvers can represent dispersed users, and cached answers delay steering changes. Resolver populations, available client-subnet information, and capacity signals improve destination estimates. Pip accounts for uncertainty in how much traffic each authoritative answer will move.

Source: text lines 7876–8106.

## VIP affinity and consistent hashing

Pip removes one backend and nearly every connection changes destination. A virtual IP hides the pool, but stateful packets still need backend affinity. Hash-modulo membership changes remap broadly; consistent hashing limits disruption, and connection tracking can retain assignments. Pip distinguishes continuity from proof that backend load is equal.

Source: text lines 7876–8106.

## Direct replies and encapsulation

Pip sends backend replies directly to clients to reduce load-balancer forwarding work. MAC rewriting confines backends to a shared layer-two domain. IP encapsulation permits remote backends by tunneling packets. Pip budgets outer-header MTU space because a public-link-sized packet may fragment on the internal path.

Source: text lines 7876–8106.

## Transfer challenge: Distribute requests across frontends

A global service has users near three points of presence, but one point is at capacity. DNS answers can steer new clients while existing connections remain local.

### Advertise capacity-aware frontend routes

Routing reflects saturation and protects the overloaded point. Capacity signals can lag and make routing less stable. The team withdraws capacity gradually and measures user latency by region.

### Send all users to the nearest point

Nearest routing usually lowers network latency. Proximity alone sends too much work to the saturated point. The nearest point fails during peak while another point has headroom.

Distance is only one routing input. Steer new clients toward healthy capacity, then measure the regional user experience while cached DNS answers and existing connections delay the traffic shift.

## Plan a frontend traffic shift

A nearby region is saturated. Describe how DNS steering and VIP connection handling affect a move to another region.

- Destination
- Propagation
- Verification
