# Sec 03 — Identity is the perimeter
slug: identity-is-the-perimeter
season: 2
episode: 3

## Spoken

Hi, Pavel here. Securing the Enterprise for Heads of IT who own the stack and the risk.

You know what you own. Now the perimeter that matters most is not the firewall diagram on the wall. It is identity. Stolen or abused credentials show up again and again in Verizon’s breach research. MITRE ATT&CK’s initial access and credential access techniques assume sprawled accounts. This episode is phase two of the playbook.

One identity directory for people. Workforce identity in one primary place, or a tightly synced pair. Kill local SaaS passwords where SSO is possible. Break-glass accounts documented separately. Done when daily business apps ride SSO and local-only logins are exceptions with owners.

MFA everywhere it matters. Email, remote access, cloud consoles, SSO, finance systems. Prefer phishing-resistant MFA — FIDO2, passkeys, hardware keys — for admins and executives. Ban SMS as the only factor for privileged roles when you have an alternative. CISA’s performance goals treat MFA as baseline. Done when coverage is effectively complete and admin cloud consoles demand the stronger factor.

Privileged access: separate and watched. Admin IDs are not the same as the mailbox people live in all day. Vault passwords, just-in-time elevation if you can, session recording for the highest roles. No shared IT password in a spreadsheet. Standing domain admin membership is tiny. Quarterly privilege review signed by you. ATT&CK lateral movement loves over-privileged accounts. CIS account management and least privilege exist for this.

Joiner, mover, leaver in days, not months. Tie provisioning to HR. Leavers lose SSO, email, VPN, laptop, cloud, and badge the same day. Movers lose old groups on an SLA. Sample the last twenty leavers. Zero active access after exit day is the bar.

Service accounts and API keys on a leash. Inventory non-human identities: bots, keys, OAuth apps. Owner, scope, rotation, where the secret lives. Prefer managed identities over eternal keys. Cloud breaches often start with a key in a repo, not a clever exploit.

External identities and partners. Guests need a sponsor, an expiry, least privilege, and no standing full VPN for the vendor. Review quarterly. Trusted relationships are an ATT&CK technique family for a reason.

Password and session policy that matches reality. Block known-breached passwords. Re-auth on privileged consoles. Helpdesk resets that resist social engineering. MFA plus SSO beats quarterly password theatre for standard users.

In the room this week, resist buying another identity product before the basics. Ask: who still has a password-only cloud admin. Who left last month and still has mail. Which API key has no owner.

This week.

Turn on or verify MFA for email, SSO, and cloud consoles. List any gaps by name.

Export admin group membership. Cut what does not need to be there. Schedule the quarterly review.

Pick ten recent leavers and prove access is dead — or fix today’s process.

Inventory the top twenty service accounts or keys you can find. Owners or revoke.

Next: harden what users touch — endpoints, email authentication, phishing paths, and BEC with finance.

I am Pavel. Phase two detail at pveselov.space slash security. See you in episode four.
