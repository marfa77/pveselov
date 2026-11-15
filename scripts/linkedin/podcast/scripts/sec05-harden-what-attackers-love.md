# Sec 05 — Harden what attackers love
slug: harden-what-attackers-love
season: 2
episode: 5

## Spoken

Hi, Pavel here. Securing the Enterprise. Today: the boring controls that decide whether a foothold becomes a company-stopping week.

Phase four. Harden what attackers love: known vulnerabilities, slow patching, flat networks, exposed remote desktop, and backups that die with the domain.

Vulnerability management with SLAs. Scan internet-facing and crown-jewel systems on a rhythm. Prioritise by exploitability and asset criticality, not only a raw score. Critical internet-facing issues get a published SLA — often days, not months — and exceptions are risk-accepted in writing. CIS vulnerability management and CISA’s known-exploited catalogue exist because scanners and ransomware crews work the same list you can work.

Patch OS and common apps on a cadence. Monthly rings, faster browsers, emergency process for known-exploited items. Unsupported operating systems leave the network or sit isolated. CISA’s ransomware guidance is blunt about slow patching and abandoned systems.

Backups that survive ransomware. Follow three-two-one thinking or better. Offline, immutable, or air-gapped copies of crown jewels. Test restore with a clock. Protect backup consoles with MFA and credentials that are not the same daily admin everyone uses. CISA’s Stop Ransomware guide treats tested, isolated backups as the difference between a bad week and an existential event. Done when you have restored a crown jewel in a drill and recorded the time.

Segment so one PC cannot see everything. Users, servers, guests, management, and any OT stay apart. Limit file-share and remote admin protocols between tiers. Jump hosts for admin work. ATT&CK lateral movement assumes flat networks. Segmentation is ransomware resilience, not fashion.

Remote access without hope-based VPN. MFA on VPN or zero-trust access. Prefer apps over full LAN. No bare remote desktop on the open internet. Legacy permanent tunnels get owners or kill dates. Internet-exposed remote desktop remains a classic ransomware door.

Secure configuration baselines. CIS Benchmarks or equivalent for images. Disable what you do not need. Track drift on production servers. Default installs are not designed for hostile networks.

DNS and egress control. Resolvers you own. Block known-bad domains. Servers do not casually browse the whole web. DNS logs retained. Command-and-control and exfiltration need egress — ATT&CK assumes it.

In the room, when someone wants a shiny detection platform, ask whether restore was tested and whether remote desktop is still hanging in the wind. Order matters.

This week.

List internet-facing systems and open critical vulnerabilities. Put dates on the worst ones.

Confirm backup immutability or offline copy for at least one crown jewel. Schedule a restore drill if none exists this half-year.

Find any public remote desktop or admin port. Close or put behind MFA jump the same week.

Sketch current network flatness on one page. Mark one segment you will actually create next.

Next: cloud, SaaS, and the supply chain — misconfigs, OAuth, vendors, and domains.

I am Pavel. Phase four at pveselov.space slash security. See you in episode six.
