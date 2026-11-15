# Sec 06 — Cloud, SaaS, and the supply chain
slug: cloud-saas-supply-chain
season: 2
episode: 6

## Spoken

Welcome back. I am Pavel Veselov. Misconfiguration and vendors now rival on-prem malware as the path into the business. Phase five of the playbook.

Cloud account hygiene. Inventory every organisation and subscription. Root and break-glass with MFA. Humans should not live on long-lived access keys. Turn on cloud audit logs, ideally into a place attackers cannot quietly wipe. CIS and CISA performance goals keep stressing visibility and least privilege in cloud identity.

Close common misconfigs. Public storage, wide-open security groups, logging off, wild IAM. Continuous check. Fix or risk-accept with an expiry date. Weekly report: zero unresolved critical publics on crown-jewel data. CISA’s Secure by Design push and years of breach patterns say open buckets and open management ports are still how companies get hurt.

SaaS admin and OAuth governance. Least-privilege admins, MFA, login audit. Quarterly review of third-party OAuth apps. Kill grants that ask for full mail or files without a business reason. Token abuse bypasses the classic network story. ATT&CK cares about this path.

Vendor and managed-service access under contract. Security schedule: MFA, breach timelines, right to see assurance reports, data location, subprocessors. Technically: named accounts, no shared VPN, a kill switch. Your top vendors by data and access criticality get a real review. Trusted relationships are how partner breaches become your breaches — Verizon and ATT&CK both keep reminding us.

Software supply chain basics. Signed updates where you can. Delay bleeding-edge on crown jewels. Watch advisories for tools you actually run. Update channels are high-value targets; Secure by Design exists partly for that reason.

Domains as attack surface. Inventory, registrar MFA, watch certificate issuance, retire forgotten domains that still receive mail. Lookalikes and hijacks feed phishing and BEC.

How this feels. Cloud and SaaS feel endless. So prioritise: accounts you pay for, data that is crown jewel, vendors who can reach production. Depth on those before a perfect inventory of every trial tenant.

This week.

Complete the cloud account list with owners. Confirm root MFA.

Run or export a misconfig finding for public storage and open admin ports. Close the worst.

Export OAuth apps on your main productivity tenant. Revoke the scary unknowns.

Pick your top ten vendors by access. Check MFA and contract notification language — or put dates to fix.

Next: detect without theatre — logs, alerts someone sees, ATT&CK on purpose, and light hunting.

I am Pavel. Phase five at pveselov.space slash security. See you soon.
