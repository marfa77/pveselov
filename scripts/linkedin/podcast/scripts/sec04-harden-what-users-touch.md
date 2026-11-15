# Sec 04 — Harden what users touch
slug: harden-what-users-touch
season: 2
episode: 4

## Spoken

Welcome back. I am Pavel Veselov. This episode is about the surfaces people touch every morning: laptops, mail, browsers, shared drives — where phishing, malware, and business email compromise still land.

Phase three in the written playbook. Harden what users touch.

Endpoint standard. Managed device, disk encryption, screen lock, OS patching, EDR agent healthy, local admin removed for normal users. BYOD to crown jewels only through MDM or a virtual desktop with policy. CIS malware defenses and CISA ransomware guidance put managed endpoints with EDR in the first line. Done when your dashboard shows almost all agents healthy and encryption is reportable.

Email authentication. SPF and DKIM on every sending domain. DMARC moved from monitor to quarantine or reject. Align marketing senders so legitimate mail is not the permanent excuse for p equals none. Spoofed executive mail should fail authentication outside. Business email compromise and domain spoofing remain high-impact in breach research; CISA treats DMARC seriously for a reason.

Stop the easy phishing path. Filtering with URL care where justified, banner external mail, block macros from the internet, restrict auto-forwarding to the outside. A phishing report button that someone monitors with an SLA. ATT&CK phishing and user execution still dominate initial access.

BEC and payment fraud need IT and finance together. Out-of-band verify for bank detail changes. Dual control on large payments. A clear rule: IT never asks for passwords or crypto over chat. When compromise is suspected, the runbook checks inbox rules and MFA fast. Verizon’s reporting keeps showing social engineering for financial loss even when malware is absent. This is process as much as product.

Browser and collaboration. Manage extensions where you can. Restrict anonymous public links on crown-jewel folders. Audit logs on your drive platforms. Data leaves through share as often as through malware.

Awareness that is measured. Short role-based modules for finance, executives, and admins. Phishing simulations with coaching, not public shaming. Watch report rate and click rate over quarters. Training alone does not stop breaches. Combined with technical controls, it still belongs in CIS and CISA baselines.

How this feels. You will annoy someone who loved their macro spreadsheet from the internet. Good. You will partner with finance on payment verification. Better.

This week.

Check EDR and encryption coverage. Fix the unhealthy agents first.

Check DMARC on primary domains. If you are still on monitor-only, set a date to enforce.

Block macros from the internet if you have not. Confirm the phishing mailbox is watched.

Book thirty minutes with finance on bank-change verification. Write the SOP if it is only tribal knowledge.

Next: harden what attackers love — vulnerability SLAs, patch rhythm, backups that survive ransomware, segmentation, and remote access.

I am Pavel. Steps three-one through three-six live at pveselov.space slash security. See you soon.
