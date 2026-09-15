# Chapter 20: Load Balancing in the Datacenter

*Pip’s adventure: The quickest backend is failing immediately. Fictional teaching story; concepts follow the cited source.*

Source: text lines 8107–8603.

Pip’s router favors a backend that returns errors instantly. Datacenter balancing needs more than request counts. Graceful draining, bounded connection subsets, failure-aware selection, and backend feedback help distribute useful work instead of rewarding broken behavior.

## Lame-duck draining

Pip marks a booking backend as lame-duck before deployment. It can finish existing requests while asking clients to stop sending new ones. Publishing that state allows redirection and draining before termination. Pip avoids treating a slow legitimate request or full outstanding-request limit as proof of a dead process.

Source: text lines 8107–8603.

## Deterministic connection subsetting

Pip’s all-to-all connections consume memory and health-check capacity. Subsetting gives each client a smaller pool; random choices may concentrate load unevenly. Deterministic rounds distribute assignments and improve coverage. Pip can give four clients distinct groups of three across twelve backends while bounding connection costs.

Source: text lines 8107–8603.

## Limits of counting outstanding requests

Pip’s broken backend returns errors in one millisecond and looks idle. Least-outstanding routing sees only the client’s own requests, not their true resource cost. Pip penalizes recent errors so failures do not become a traffic sinkhole. Different request costs and machine capabilities still require more information.

Source: text lines 8107–8603.

## Weighted round robin from backend feedback

Pip receives query rate, error rate, and utilization from each backend. Weighted round robin distributes requests in proportion to capability scores. Useful throughput per resource increases preference while errors reduce it. Periodic feedback adapts routing to heterogeneous machines and changing performance beyond one client’s local view.

Source: text lines 8107–8603.

## Transfer challenge: Equal requests, unequal work

Two backend pools receive equal request counts, but one has much higher CPU utilization. Query costs vary and machines have different performance.

### Use backend capability reports

Success, error, and utilization signals reflect actual serving work. Scores require reliable telemetry and periodic updates. Clients adjust weights while separately avoiding unhealthy or draining tasks.

### Keep equal request shares

The policy is simple and requires little feedback. Equal counts cannot account for unequal query cost or machine performance. The busiest backend limits usable capacity while others retain headroom.

Equal request counts can conceal unequal work. Backend-reported success rates, errors, and utilization inform routing better than count alone; health filtering and draining remain separate necessities.

## Compare backend capability

Two backends receive equal request counts but have different CPU utilization and error rates. Design a routing adjustment and a graceful shutdown procedure.

- Evidence
- Routing
- Draining
