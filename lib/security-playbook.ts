// Securing the Enterprise — Head of IT playbook (no separate CISO).
// You own both run-IT and cyber. Each step: Do / Done when / Why + sources.

import { getSecuritySource, securitySources } from "@/lib/security-sources";

export const securitySectionMeta = {
  title: "Security for Heads of IT",
  path: "/security",
};

export const securityPlaybookMeta = {
  title: "Securing the Enterprise: A Head of IT Playbook",
  shortTitle: "The Head of IT Security Playbook",
  path: "/security",
  version: "1.0",
  lastUpdated: "2026-11-15",
  lastUpdatedLabel: "15 November 2026",
};

export type SecurityStep = {
  id: string;
  title: string;
  action: string;
  doneWhen: string;
  evidence: string;
  sources: string[];
  /** Attack classes this step primarily reduces */
  against: string[];
  updated: string;
};

export type SecurityPhase = {
  id: string;
  title: string;
  goal: string;
  steps: SecurityStep[];
};

const v1 = "2026-11-15";

export const securityPlaybookPhases: SecurityPhase[] = [
  {
    id: "govern",
    title: "Govern and know what you own",
    goal: "Before tools and policies, know what you are protecting, who decides, and what “good enough” means for this company.",
    steps: [
      {
        id: "1.1",
        title: "Write who owns security when there is no CISO",
        action:
          "Document that the Head of IT owns cybersecurity outcomes, which decisions need CEO/CFO sign-off (risk acceptance, major spend, public breach comms), and who is the day-to-day security lead if that is a senior engineer reporting to you.",
        doneWhen:
          "A one-page RACI exists: you, CEO/CFO, legal/HR, and any outsourced SOC or MSSP. The board pack names you as accountable.",
        evidence:
          "NIST CSF 2.0 puts Govern first for a reason: unclear ownership is how gaps stay open between IT, vendors, and the business.",
        sources: ["nist-csf-2", "cisa-cpg"],
        against: ["organisational gaps", "accountability voids"],
        updated: v1,
      },
      {
        id: "1.2",
        title: "Inventory assets that can be attacked",
        action:
          "Build a living inventory of devices, servers, cloud accounts, SaaS apps, domains, and critical data stores. Prefer discovery tools plus a monthly reconcile with finance (what you pay for) and HR (who should have access).",
        doneWhen:
          "You can list ≥95% of corporate endpoints and all production cloud accounts with an owner. Unknown devices on the network have a ticket path.",
        evidence:
          "CIS Control 1 (Inventory and Control of Enterprise Assets) is Implementation Group 1 for a reason: you cannot patch, log, or revoke what you cannot see.",
        sources: ["cis-controls-v8", "cis-ig1"],
        against: ["shadow IT", "unmanaged endpoints", "forgotten cloud"],
        updated: v1,
      },
      {
        id: "1.3",
        title: "Name the crown jewels",
        action:
          "With finance and business leads, name the systems and data whose loss, encryption, or leak would stop the company or trigger regulators (ERP/finance, customer PII, trading books, source code, identity store, backups).",
        doneWhen:
          "A short crown-jewel list exists with business owner, technical owner, recovery priority, and “who can access” summary. It is reviewed quarterly.",
        evidence:
          "Verizon DBIR patterns show breaches concentrate on systems that hold credentials, personal data, or payment impact — not on every laptop equally.",
        sources: ["verizon-dbir", "nist-csf-2"],
        against: ["ransomware", "data breach", "insider abuse"],
        updated: v1,
      },
      {
        id: "1.4",
        title: "Map shadow IT and personal SaaS",
        action:
          "Find SaaS and tools bought on credit cards or free plans: DNS/SSO logs, expense lines, browser extension reviews, and short interviews with each department head.",
        doneWhen:
          "Top unofficial tools are listed with owner, data sensitivity, and a keep / replace / block decision.",
        evidence:
          "CIS and CISA CPGs treat unknown services as unmanaged attack surface: phishing landing zones, leaked tokens, and data exfiltration paths.",
        sources: ["cis-controls-v8", "cisa-cpg"],
        against: ["account takeover", "data leak", "supply-chain SaaS"],
        updated: v1,
      },
      {
        id: "1.5",
        title: "Set risk appetite in money and downtime",
        action:
          "Agree with CEO/CFO: maximum tolerable downtime for crown jewels, maximum acceptable ransomware downtime before paying is even discussed, and which risks you will not accept (e.g. shared admin passwords).",
        doneWhen:
          "Written risk appetite exists; exceptions require named acceptance, not silent drift.",
        evidence:
          "NIST CSF Govern emphasises risk appetite so security spend and exceptions are business decisions, not IT folklore.",
        sources: ["nist-csf-2"],
        against: ["endless exception culture", "ransom-pay panic"],
        updated: v1,
      },
      {
        id: "1.6",
        title: "Baseline against CIS IG1 / CISA CPGs",
        action:
          "Score yourself against CIS Controls Implementation Group 1 and CISA Cross-Sector CPGs. Mark each control: in place / partial / missing / not applicable.",
        doneWhen:
          "A scored baseline with owners and dates sits in one sheet. Board updates use this language, not tool brand names.",
        evidence:
          "IG1 is “essential cyber hygiene” for organisations of any size; CPGs give a government-backed minimum bar you can explain upstairs.",
        sources: ["cis-ig1", "cisa-cpg", "cis-controls-v8"],
        against: ["checklist theatre", "random tool buying"],
        updated: v1,
      },
    ],
  },
  {
    id: "identity",
    title: "Identity is the perimeter",
    goal: "Most modern breaches start with stolen or abused credentials. Make identity boring, enforced, and revocable.",
    steps: [
      {
        id: "2.1",
        title: "One identity directory for people",
        action:
          "Put workforce identity in one primary directory (or tightly synced pair). Kill local accounts on SaaS where SSO is possible. Document break-glass accounts separately.",
        doneWhen:
          "Business apps used daily authenticate via SSO. Local-only logins are exceptions with owners and review dates.",
        evidence:
          "ATT&CK Initial Access and Credential Access thrive on sprawled identity. CIS Control 5 (Account Management) starts with knowing every account.",
        sources: ["mitre-attack", "cis-controls-v8", "ncsc-zero-trust"],
        against: ["credential stuffing", "orphaned accounts", "password reuse"],
        updated: v1,
      },
      {
        id: "2.2",
        title: "MFA everywhere it matters — phishing-resistant where you can",
        action:
          "Enforce MFA on email, VPN/remote access, cloud consoles, SSO, and finance systems. Prefer phishing-resistant MFA (FIDO2/passkeys/hardware) for admins and executives. Ban SMS MFA for privileged roles when alternatives exist.",
        doneWhen:
          "MFA coverage ≥99% for in-scope apps; admin cloud consoles require phishing-resistant MFA; break-glass procedure tested.",
        evidence:
          "Verizon DBIR repeatedly finds stolen credentials in breach patterns; CISA CPGs treat MFA as a baseline performance goal.",
        sources: ["verizon-dbir", "cisa-cpg", "ncsc-zero-trust"],
        against: ["phishing", "BEC", "password spray", "token theft"],
        updated: v1,
      },
      {
        id: "2.3",
        title: "Privileged access: separate and watched",
        action:
          "Separate admin accounts from daily-drive accounts. Use PAM or at least just-in-time elevation, vaulted passwords, and session recording for domain/cloud admins. No shared “IT” password in a spreadsheet.",
        doneWhen:
          "Named personal admin IDs only; standing domain admin membership is minimal; quarterly privilege review signed by you.",
        evidence:
          "ATT&CK Privilege Escalation and Lateral Movement assume over-privileged accounts. CIS Control 5/6 and NIST 800-53 AC controls push least privilege.",
        sources: ["mitre-attack", "cis-controls-v8", "nist-sp-800-53"],
        against: ["ransomware spread", "insider abuse", "admin account takeover"],
        updated: v1,
      },
      {
        id: "2.4",
        title: "Joiner–mover–leaver in days, not months",
        action:
          "Tie provisioning to HR events. Leavers: revoke SSO, email, VPN, laptop, cloud, and badges the same day. Movers: strip old role groups within a defined SLA.",
        doneWhen:
          "Sample audits of last 20 leavers show zero active access after exit day. Tickets auto-create from HR where possible.",
        evidence:
          "CIS Account Management and CISA CPGs call out timely revocation; dormant accounts are a favourite for both outsiders and insiders.",
        sources: ["cis-controls-v8", "cisa-cpg"],
        against: ["insider threat", "ex-employee access", "account takeover"],
        updated: v1,
      },
      {
        id: "2.5",
        title: "Service accounts and API keys on a leash",
        action:
          "Inventory non-human identities: service accounts, bots, API keys, OAuth apps. Owner, scope, rotation date, and where the secret lives. Prefer managed identities over long-lived keys.",
        doneWhen:
          "Every production secret has an owner and rotation/expiry. Orphaned keys from departed projects are revoked.",
        evidence:
          "Cloud and SaaS breaches often start with a leaked key in a repo or a forgotten OAuth grant — not a clever zero-day.",
        sources: ["cis-controls-v8", "cisa-secure-by-design", "mitre-attack"],
        against: ["cloud takeover", "supply-chain tokens", "crypto-mining"],
        updated: v1,
      },
      {
        id: "2.6",
        title: "External identities and partners",
        action:
          "Guest/B2B access: named sponsor, expiry, least privilege, no standing VPN for “the vendor”. Review quarterly.",
        doneWhen:
          "Guest list is exportable; expired guests are removed automatically or by monthly job; vendor VPN is MFA and time-bound.",
        evidence:
          "Supply-chain and partner paths appear in ATT&CK Trusted Relationship techniques and in DBIR partner-involved incidents.",
        sources: ["mitre-attack", "verizon-dbir", "cisa-cpg"],
        against: ["partner compromise", "vendor pivot", "BEC via shared mailboxes"],
        updated: v1,
      },
      {
        id: "2.7",
        title: "Password and session policy that matches reality",
        action:
          "Block known-breached passwords, ban reuse across admin roles, set sane lockout, and shorten session lifetime on privileged consoles. Educate that MFA + SSO beats quarterly password theatre for standard users.",
        doneWhen:
          "Directory enforces breached-password checks; privileged sessions re-auth on risk; helpdesk reset process resists social engineering.",
        evidence:
          "DBIR and ATT&CK Credential Access show password spray and reuse still work where MFA is missing or bypassed via helpdesk.",
        sources: ["verizon-dbir", "mitre-attack", "cis-controls-v8"],
        against: ["password spray", "credential stuffing", "helpdesk social engineering"],
        updated: v1,
      },
    ],
  },
  {
    id: "users",
    title: "Harden what users touch",
    goal: "Email, laptops, browsers, and collaboration tools are where phishing, BEC, and malware still land.",
    steps: [
      {
        id: "3.1",
        title: "Endpoint standard: managed, encrypted, EDR on",
        action:
          "Every corporate laptop/desktop: disk encryption, screen lock, auto-patch OS, EDR/XDR agent healthy, local admin removed for standard users. BYOD for crown-jewel access only via MDM or VDI with policy.",
        doneWhen:
          "EDR coverage dashboard shows ≥98% healthy agents on managed estate; encryption compliance reportable; local admin is exception-only.",
        evidence:
          "CIS Controls 4 and 10 (secure configuration, malware defenses) and CISA ransomware guidance put managed endpoints with EDR in the first line.",
        sources: ["cis-controls-v8", "cisa-ransomware-guide", "cisa-cpg"],
        against: ["malware", "ransomware", "lost device", "drive-by download"],
        updated: v1,
      },
      {
        id: "3.2",
        title: "Email authentication: SPF, DKIM, DMARC enforce",
        action:
          "Publish SPF and DKIM for every sending domain. Move DMARC from monitor to reject/quarantine. Align marketing and vendor senders so legitimate mail is not the excuse to stay on p=none forever.",
        doneWhen:
          "DMARC p=reject (or quarantine with tight review) on primary domains; spoofed CEO mail fails authentication externally.",
        evidence:
          "BEC and domain spoofing remain high-impact in DBIR-style patterns; DMARC enforcement is a CISA-recommended control against impersonation.",
        sources: ["verizon-dbir", "cisa-cpg", "cis-controls-v8"],
        against: ["BEC", "domain spoofing", "CEO fraud"],
        updated: v1,
      },
      {
        id: "3.3",
        title: "Stop the easy phishing path",
        action:
          "Deploy mail filtering with URL rewriting/sandboxing where justified, banner external mail, block macros from the internet, and restrict auto-forwarding rules to external addresses.",
        doneWhen:
          "Macro-from-internet blocked; external forward rules reviewed weekly; phishing reports go to a monitored mailbox with SLA.",
        evidence:
          "ATT&CK Phishing and User Execution still dominate initial access; CIS email protections and CISA guidance target these paths.",
        sources: ["mitre-attack", "cis-controls-v8", "cisa-ransomware-guide"],
        against: ["phishing", "malware delivery", "credential harvest"],
        updated: v1,
      },
      {
        id: "3.4",
        title: "BEC and payment fraud controls (IT + finance)",
        action:
          "With finance: out-of-band verify for bank detail changes, dual control on large payments, and a clear “IT never asks for passwords/crypto” rule. Watch for mailbox-rule abuse after suspected compromise.",
        doneWhen:
          "Finance SOP includes verification channel; IT runbook checks inbox rules and MFA status on any BEC suspicion within hours.",
        evidence:
          "BEC is social and process as much as technical; DBIR highlights social engineering for financial loss even when malware is absent.",
        sources: ["verizon-dbir", "cisa-cpg"],
        against: ["BEC", "invoice fraud", "mailbox takeover"],
        updated: v1,
      },
      {
        id: "3.5",
        title: "Browser and collaboration hardening",
        action:
          "Manage browsers (extensions allow-list where possible), restrict anonymous public sharing links on crown-jewel folders, and turn on audit logs for OneDrive/SharePoint/Google Drive equivalents.",
        doneWhen:
          "Public link sharing on sensitive sites is blocked or expiry-forced; extension policy documented; DLP labels on crown-jewel libraries if licensed.",
        evidence:
          "Data leaves through “share” as often as through malware. CIS data protection and ATT&CK Exfiltration cover these channels.",
        sources: ["cis-controls-v8", "mitre-attack", "nist-csf-2"],
        against: ["data leak", "insider convenience sharing", "malicious extensions"],
        updated: v1,
      },
      {
        id: "3.6",
        title: "Awareness that is measured, not theatrical",
        action:
          "Run short role-based training (finance, execs, IT admins). Phishing simulations with coaching, not public shaming. Track report-rate and click-rate trends.",
        doneWhen:
          "Annual completion for all staff; execs and finance get extra modules; phishing report button usage rises over two quarters.",
        evidence:
          "Training alone does not stop breaches, but combined with technical controls it reduces successful User Execution — CIS and CPGs still require it.",
        sources: ["cis-controls-v8", "cisa-cpg", "verizon-dbir"],
        against: ["phishing", "pretexting", "USB drops"],
        updated: v1,
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Harden what attackers love",
    goal: "Patch, backup, network paths, and remote access decide whether a foothold becomes a company-stopping event.",
    steps: [
      {
        id: "4.1",
        title: "Vulnerability management with SLAs",
        action:
          "Scan internet-facing and crown-jewel systems on a fixed cadence. Prioritise by exploitability and asset criticality, not only CVSS. Track open criticals with owners.",
        doneWhen:
          "Critical internet-facing vulns have a published SLA (e.g. 7–14 days) and exceptions are risk-accepted in writing.",
        evidence:
          "CIS Control 7 and CISA KEV-driven patching exist because known exploited vulns are how ransomware crews and scanners work at scale.",
        sources: ["cis-controls-v8", "cisa-cpg", "cisa-ransomware-guide"],
        against: ["exploit of known CVE", "ransomware", "web shell"],
        updated: v1,
      },
      {
        id: "4.2",
        title: "Patch OS and common apps on a rhythm",
        action:
          "Endpoints and servers: monthly (or faster) patch rings. Browsers and office suites auto-update. Emergency out-of-band process for CISA KEV items.",
        doneWhen:
          "Compliance report shows patch latency; KEV items have named owners and dates; unsupported OS is off the network or isolated.",
        evidence:
          "Unsupported systems and slow patching remain a top practical failure mode in ransomware case studies and CISA guidance.",
        sources: ["cisa-ransomware-guide", "cis-controls-v8", "cisa-cpg"],
        against: ["ransomware", "wormable exploits", "drive-by"],
        updated: v1,
      },
      {
        id: "4.3",
        title: "Backups that survive ransomware",
        action:
          "3-2-1 or better: offline/immutable/air-gapped copies of crown jewels. Test restore quarterly with a clock. Protect backup consoles with MFA and separate credentials. Do not leave backup admin joined to the same daily domain everyone uses if you can avoid it.",
        doneWhen:
          "Documented restore test for ERP/identity/file within RTO; immutable or offline copy exists; backup failure alerts are monitored.",
        evidence:
          "CISA #StopRansomware treats tested, isolated backups as the difference between a bad week and an existential event.",
        sources: ["cisa-ransomware-guide", "cis-controls-v8", "nist-csf-2"],
        against: ["ransomware", "destructive wiper", "insider deletion"],
        updated: v1,
      },
      {
        id: "4.4",
        title: "Segment so one PC cannot see everything",
        action:
          "Separate user LAN from servers, OT/factory if any, guests, and management planes. Limit SMB/RDP/WinRM between tiers. Prefer jump hosts for admin.",
        doneWhen:
          "East-west rules documented; flat “everyone can RDP everywhere” is gone; crown-jewel VLANs/VPC segments have explicit allow-lists.",
        evidence:
          "ATT&CK Lateral Movement assumes flat networks. Segmentation is core to ransomware resilience guides and zero-trust design.",
        sources: ["mitre-attack", "cisa-ransomware-guide", "ncsc-zero-trust"],
        against: ["ransomware spread", "lateral movement", "ot crossover"],
        updated: v1,
      },
      {
        id: "4.5",
        title: "Remote access without hope-based VPN",
        action:
          "VPN or ZTNA with MFA, device posture where possible, split least privilege to apps not “full LAN”. Disable unused remote services on servers exposed to the internet.",
        doneWhen:
          "No bare RDP/SSH on 0.0.0.0 without MFA jump; VPN roster matches HR; legacy permanent tunnels have owners or kill dates.",
        evidence:
          "Internet-exposed RDP remains a classic ransomware entry. CISA and CIS both hammer remote access hardening.",
        sources: ["cisa-ransomware-guide", "cis-controls-v8", "cisa-cpg"],
        against: ["RDP brute force", "VPN credential theft", "remote ransomware"],
        updated: v1,
      },
      {
        id: "4.6",
        title: "Secure configuration baselines",
        action:
          "Apply CIS Benchmarks or equivalent to OS images, browsers, and hypervisors. Disable unnecessary services. Track drift.",
        doneWhen:
          "Golden images documented; new builds start from baseline; high-risk drift alerts exist for production servers.",
        evidence:
          "CIS Control 4 (Secure Configuration) is IG1: default installs are not designed for hostile networks.",
        sources: ["cis-controls-v8", "cis-ig1", "nist-sp-800-53"],
        against: ["misconfiguration abuse", "living-off-the-land"],
        updated: v1,
      },
      {
        id: "4.7",
        title: "DNS, egress, and “call home” control",
        action:
          "Use resolvers you control; block known-bad domains; restrict server egress where practical; alert on rare destinations from servers.",
        doneWhen:
          "Servers do not have unrestricted web surfing by default; DNS logs retained; blocklists update automatically.",
        evidence:
          "ATT&CK Command and Control and Exfiltration often need egress. DNS filtering is a high-leverage cheap control.",
        sources: ["mitre-attack", "cis-controls-v8", "cisa-cpg"],
        against: ["C2", "data exfil", "malware callbacks"],
        updated: v1,
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud, SaaS, and supply chain",
    goal: "Misconfiguration and vendors now rival on-prem malware as the path into the business.",
    steps: [
      {
        id: "5.1",
        title: "Cloud account hygiene",
        action:
          "Inventory every cloud org/subscription. Root/break-glass MFA. No long-lived access keys for humans. Turn on cloud-native logging (CloudTrail/Activity logs) to a separate account if you can.",
        doneWhen:
          "Complete account list with owners; root rarely used; audit logs immutable or centralised.",
        evidence:
          "CIS cloud-relevant controls and CISA CPGs stress visibility and least privilege in cloud IAM.",
        sources: ["cis-controls-v8", "cisa-cpg", "ncsc-zero-trust"],
        against: ["cloud account takeover", "crypto-mining", "data dump from storage"],
        updated: v1,
      },
      {
        id: "5.2",
        title: "Close the common cloud misconfigs",
        action:
          "Continuous check for public storage buckets, open security groups, disabled logging, and over-permissive IAM. Fix or risk-accept with expiry.",
        doneWhen:
          "Weekly misconfig report with zero unresolved critical publics on crown-jewel data.",
        evidence:
          "Public storage and open management ports remain a top practical breach pattern; Secure by Design pushes defaults that fail closed.",
        sources: ["cisa-secure-by-design", "cis-controls-v8", "verizon-dbir"],
        against: ["open bucket leak", "exposed admin ports", "shadow workloads"],
        updated: v1,
      },
      {
        id: "5.3",
        title: "SaaS admin and OAuth governance",
        action:
          "Least-privilege SaaS admins, MFA, login audit. Review third-party OAuth apps quarterly. Kill apps that request mail/file full access without business need.",
        doneWhen:
          "OAuth app review dated; high-risk grants require your approval; departing staff lose SaaS admin the same day.",
        evidence:
          "SaaS token abuse and malicious OAuth are ATT&CK-relevant paths that bypass classic network controls.",
        sources: ["mitre-attack", "cis-controls-v8", "cisa-cpg"],
        against: ["SaaS takeover", "mail exfil via OAuth", "supply-chain apps"],
        updated: v1,
      },
      {
        id: "5.4",
        title: "Vendor and MSP access under contract",
        action:
          "Security schedule in contracts: MFA, breach notification timelines, right to audit or SOC 2/ISO reports, data location, subprocessors. Technical: named accounts, no shared VPN, kill switch.",
        doneWhen:
          "Top 20 vendors by data/access criticality have reviewed clauses; MSP standing access is MFA and logged.",
        evidence:
          "Trusted Relationship and supply-chain incidents in ATT&CK/DBIR show vendors as a path into otherwise decent estates.",
        sources: ["mitre-attack", "verizon-dbir", "cisa-cpg"],
        against: ["MSP pivot", "vendor breach cascade"],
        updated: v1,
      },
      {
        id: "5.5",
        title: "Software supply chain basics",
        action:
          "Prefer signed updates, delay bleeding-edge on crown jewels, maintain a package allow-list for critical build systems, and watch vendor advisories for tools you actually run.",
        doneWhen:
          "Critical apps have an update owner; unsigned or unexpected update channels are blocked where feasible.",
        evidence:
          "CISA Secure by Design and high-profile supply-chain events show update channels as high-value targets.",
        sources: ["cisa-secure-by-design", "mitre-attack", "cis-controls-v8"],
        against: ["trojanised updates", "dependency confusion"],
        updated: v1,
      },
      {
        id: "5.6",
        title: "Email and domain portfolio as attack surface",
        action:
          "Inventory domains; lock registrar accounts with MFA; monitor certificate issuance; retire forgotten domains that still receive mail.",
        doneWhen:
          "Registrar MFA on; domain list owned by IT; stale domains redirected or deleted with DNSSEC/DMARC considered.",
        evidence:
          "Domain hijack and lookalike domains fuel phishing and BEC; CPGs and email auth controls assume you own the DNS story.",
        sources: ["cisa-cpg", "cis-controls-v8"],
        against: ["domain hijack", "lookalike phishing"],
        updated: v1,
      },
    ],
  },
  {
    id: "apps-data",
    title: "Applications and data",
    goal: "Web apps, APIs, secrets, and sensitive data stores need explicit care — especially crown jewels.",
    steps: [
      {
        id: "6.1",
        title: "Know internet-facing apps",
        action:
          "Maintain a list of public URLs and APIs with owners, tech stack, and last pen-test/scan date. Include forgotten marketing sites and VPN portals.",
        doneWhen:
          "External attack-surface scan matches your list within agreed delta; every public app has an owner.",
        evidence:
          "OWASP Top 10 and CIS continuous vulnerability management assume you know what is exposed.",
        sources: ["owasp-top10", "cis-controls-v8"],
        against: ["web exploit", "forgotten portal", "API abuse"],
        updated: v1,
      },
      {
        id: "6.2",
        title: "Fix the OWASP-class bugs that keep recurring",
        action:
          "For in-house and critical vendor apps: authZ checks, injection defenses, secure session handling, and dependency updates. Require security stories in the backlog for your own software.",
        doneWhen:
          "Critical OWASP findings on crown-jewel apps have SLA; new features for those apps include a short threat note.",
        evidence:
          "OWASP Top 10 catalogues the classes that still dominate web breaches when unaddressed.",
        sources: ["owasp-top10", "cisa-secure-by-design", "cis-controls-v8"],
        against: ["SQLi", "XSS", "broken access control", "auth bypass"],
        updated: v1,
      },
      {
        id: "6.3",
        title: "Secrets out of code and chat",
        action:
          "Scan repos and CI for secrets. Use a vault. Rotate anything that ever appeared in Slack/email. Pre-commit hooks for engineering teams.",
        doneWhen:
          "No production secrets in git history for active repos (or rotated if found); vault is the default for new work.",
        evidence:
          "Leaked secrets are a primary cloud takeover path; Secure by Design and CIS both push secret hygiene.",
        sources: ["cisa-secure-by-design", "cis-controls-v8", "mitre-attack"],
        against: ["key leak", "repo scraping", "CI compromise"],
        updated: v1,
      },
      {
        id: "6.4",
        title: "Encrypt data in transit and at rest for crown jewels",
        action:
          "TLS everywhere external; encrypt disks and database storage for sensitive systems; manage keys with rotation and access control.",
        doneWhen:
          "Crown-jewel stores report encryption on; certificate expiry monitored; weak TLS protocols disabled.",
        evidence:
          "NIST CSF Protect and CIS data protection controls treat encryption as baseline for confidentiality and stolen-media scenarios.",
        sources: ["nist-csf-2", "cis-controls-v8", "nist-sp-800-53"],
        against: ["lost disk", "wire sniffing", "backup media theft"],
        updated: v1,
      },
      {
        id: "6.5",
        title: "Data access and retention for sensitive sets",
        action:
          "Least privilege on file shares and DBs; retention/deletion for PII; export monitoring on large pulls where tools allow.",
        doneWhen:
          "Access reviews for crown-jewel data stores are quarterly; retention policy exists and is enforced for at least one PII system.",
        evidence:
          "Insider and compromised-account exfiltration show up across DBIR; CIS data protection expects classification and access control.",
        sources: ["verizon-dbir", "cis-controls-v8", "nist-csf-2"],
        against: ["insider exfil", "bulk data theft", "compliance fine risk"],
        updated: v1,
      },
    ],
  },
  {
    id: "detect",
    title: "Detect",
    goal: "Assume prevent will miss something. You need telemetry, coverage, and a human path from alert to action.",
    steps: [
      {
        id: "7.1",
        title: "Decide what must be logged",
        action:
          "Minimum: identity (sign-in success/fail, MFA, admin changes), EDR, email security, firewall/VPN, cloud audit, crown-jewel app auth. Time-sync everything.",
        doneWhen:
          "Logging matrix exists (source → destination → retention). Critical sources have >90% delivery health.",
        evidence:
          "CIS Controls 8 (Audit Log Management) and NIST IR guidance require usable logs before detection engineering.",
        sources: ["cis-controls-v8", "nist-sp-800-61", "cisa-cpg"],
        against: ["blind spots", "undetected persistence"],
        updated: v1,
      },
      {
        id: "7.2",
        title: "EDR and identity alerts that someone sees",
        action:
          "EDR high-severity and identity impossible-travel / MFA fatigue / new inbox rules alert to a watched channel 24×7 or via MSSP with clear escalation to you.",
        doneWhen:
          "Named on-call or MSSP SLA; sample monthly: time-to-acknowledge for critical alerts under agreed minutes.",
        evidence:
          "Detection without response is noise. CISA ransomware guide and CSF Detect/Respond expect an operating model, not only a console licence.",
        sources: ["cisa-ransomware-guide", "nist-csf-2", "cis-controls-v8"],
        against: ["ransomware dwell time", "account takeover", "silent mailbox rules"],
        updated: v1,
      },
      {
        id: "7.3",
        title: "Map a few detections to ATT&CK on purpose",
        action:
          "Pick techniques that matter for your crown jewels (e.g. phishing, valid accounts, ransomware inhibitors like backup deletion). Ensure at least one detection or prevent control each.",
        doneWhen:
          "A one-page ATT&CK coverage map for top 10 techniques exists; gaps have owners.",
        evidence:
          "MITRE ATT&CK gives a shared language so you do not buy duplicate tools while missing Valid Accounts.",
        sources: ["mitre-attack", "cisa-cpg"],
        against: ["unchecked ATT&CK gaps", "tool sprawl"],
        updated: v1,
      },
      {
        id: "7.4",
        title: "Threat intel that fits your size",
        action:
          "Subscribe to CISA alerts/KEV, vendor advisories for your stack, and industry ISACs if relevant. Weekly 30-minute triage: relevant / ignore / act.",
        doneWhen:
          "KEV items affecting your stack create tickets automatically or by weekly ritual; mailbox is not a graveyard.",
        evidence:
          "CISA KEV and CPGs exist so smaller security teams prioritise what is actually exploited.",
        sources: ["cisa-cpg", "cisa-ransomware-guide"],
        against: ["known exploited CVE surprise", "alert fatigue"],
        updated: v1,
      },
      {
        id: "7.5",
        title: "Hunt lightly but regularly",
        action:
          "Monthly: review privileged sign-ins, new admin grants, EDR isolations, and backup failures. Quarterly: deeper look at one crown-jewel path.",
        doneWhen:
          "Hunt calendar exists; findings become tickets; no hunt is only a screenshot for the board.",
        evidence:
          "CSF Detect includes continuous monitoring; even a light rhythm beats waiting for a ransom note.",
        sources: ["nist-csf-2", "mitre-attack", "cis-controls-v8"],
        against: ["long dwell time", "quiet privilege creep"],
        updated: v1,
      },
    ],
  },
  {
    id: "respond",
    title: "Respond and recover",
    goal: "When prevention fails, speed and rehearsal decide the outcome — especially for ransomware and BEC.",
    steps: [
      {
        id: "8.1",
        title: "Write the incident response plan you can actually run",
        action:
          "Roles (you, CEO, legal, comms, finance, HR, MSSP), severity levels, evidence preservation, regulator/customer triggers, and “who speaks externally”. Keep it under ten pages plus contacts.",
        doneWhen:
          "Plan approved by CEO; printed/offline contacts exist; last review date <12 months.",
        evidence:
          "NIST SP 800-61 is the classic IR structure; CISA ransomware guide adds practical ransomware-specific steps.",
        sources: ["nist-sp-800-61", "cisa-ransomware-guide", "nist-csf-2"],
        against: ["chaos during breach", "evidence destruction", "slow comms"],
        updated: v1,
      },
      {
        id: "8.2",
        title: "Ransomware-specific runbook",
        action:
          "Isolate, preserve, identify strain if useful, assess backup integrity, decision path on negotiation (legal), restore order of systems, and password resets at scale. Pre-agree who can authorise downtime.",
        doneWhen:
          "Runbook tabletopped once; restore order of crown jewels agreed with business owners.",
        evidence:
          "CISA #StopRansomware is explicitly written for this moment; CSF Respond/Recover need practice.",
        sources: ["cisa-ransomware-guide", "nist-csf-2", "nist-sp-800-61"],
        against: ["ransomware", "wiper", "re-infection after restore"],
        updated: v1,
      },
      {
        id: "8.3",
        title: "Tabletop twice a year",
        action:
          "One ransomware scenario, one BEC/payment fraud scenario. Include finance and an exec. Capture gaps as tickets.",
        doneWhen:
          "Two tabletops in the last 12 months with written lessons; critical gaps closed or risk-accepted.",
        evidence:
          "Plans that are never exercised fail under stress — NIST IR and CISA both push exercises.",
        sources: ["nist-sp-800-61", "cisa-ransomware-guide", "cisa-cpg"],
        against: ["untested IR", "BEC process failure"],
        updated: v1,
      },
      {
        id: "8.4",
        title: "Restore drills with a stopwatch",
        action:
          "Restore a crown-jewel system from backup into an isolated environment. Measure time and data loss. Fix backup gaps found.",
        doneWhen:
          "At least one full crown-jewel restore test in the last two quarters with recorded RTO/RPO result.",
        evidence:
          "Untested backups are a recurring theme in ransomware post-mortems; CISA treats restore testing as mandatory hygiene.",
        sources: ["cisa-ransomware-guide", "cis-controls-v8", "nist-csf-2"],
        against: ["ransomware", "corrupt backups", "false recovery confidence"],
        updated: v1,
      },
      {
        id: "8.5",
        title: "Comms, legal, and cyber insurance ready",
        action:
          "Know notification duties (regulators, customers, banks). Keep counsel and insurance contacts offline. Understand what insurance requires (MFA, EDR, backups) so claims are not denied on a control you skipped.",
        doneWhen:
          "Contact card complete; insurance control checklist mapped to this playbook; legal review of IR plan done once.",
        evidence:
          "CSF Respond includes communications; insurance questionnaires increasingly mirror CISA/CIS baselines.",
        sources: ["nist-csf-2", "cisa-cpg", "cisa-ransomware-guide"],
        against: ["regulatory penalty", "denied claim", "reputation spiral"],
        updated: v1,
      },
      {
        id: "8.6",
        title: "Post-incident: fix the class, not only the ticket",
        action:
          "After any real incident or near miss: root cause, control gap, playbook step to strengthen, and a dated follow-up. Share a short blameless note with staff when appropriate.",
        doneWhen:
          "Every Sev-1/2 has a closed lessons ticket linked to a playbook step or accepted risk.",
        evidence:
          "NIST IR lifecycle includes post-incident activity; otherwise you re-buy the same breach.",
        sources: ["nist-sp-800-61", "nist-csf-2"],
        against: ["repeat incidents", "whack-a-mole security"],
        updated: v1,
      },
    ],
  },
  {
    id: "prove",
    title: "Prove it",
    goal: "Show the board and yourself that controls work — with metrics that survive an audit and a bad Monday.",
    steps: [
      {
        id: "9.1",
        title: "A board one-pager that is honest",
        action:
          "Monthly/quarterly: crown-jewel status, MFA/EDR/backup coverage, open critical vulns, incident count, tabletop/restore dates, top three risks with ask.",
        doneWhen:
          "Board/exec pack uses the same metrics for two cycles; no vanity “blocked malware” without coverage context.",
        evidence:
          "NIST CSF Govern includes oversight; executives fund what they can see in business language.",
        sources: ["nist-csf-2", "cisa-cpg"],
        against: ["false assurance", "underfunding until breach"],
        updated: v1,
      },
      {
        id: "9.2",
        title: "Control evidence on demand",
        action:
          "For each IG1/CPG control you claim “in place”, know where the evidence lives (screenshot, export, ticket, config). Prefer automated evidence.",
        doneWhen:
          "Audit or customer questionnaire for top controls answered from a binder/folder without a week of archaeology.",
        evidence:
          "CIS and NIST expect assessable controls; last-minute evidence hunts mean the control is not operational.",
        sources: ["cis-ig1", "nist-sp-800-53", "cisa-cpg"],
        against: ["audit failure", "customer trust loss"],
        updated: v1,
      },
      {
        id: "9.3",
        title: "Test controls, not only policies",
        action:
          "Quarterly sample: disable a test laptop’s EDR and see if you notice; attempt an external spoof to see DMARC; restore a file; revoke a leaver in a drill.",
        doneWhen:
          "At least four control tests per year with tickets for misses.",
        evidence:
          "CSF calls for continuous improvement; untested controls are assumptions.",
        sources: ["nist-csf-2", "cis-controls-v8"],
        against: ["paper compliance", "silent control failure"],
        updated: v1,
      },
      {
        id: "9.4",
        title: "Retire tools and exceptions ruthlessly",
        action:
          "Annual: kill overlapping security tools, close expired exceptions, and re-score CIS IG1. Put savings into gaps (usually identity, backup, detection staffing).",
        doneWhen:
          "Exception register has no item older than agreed max without re-approval; tool inventory has owners and renewals.",
        evidence:
          "Tool sprawl without operators creates blind spots — the opposite of CIS’s prioritised controls.",
        sources: ["cis-controls-v8", "nist-csf-2", "cis-ig1"],
        against: ["alert fatigue", "zombie exceptions", "budget waste"],
        updated: v1,
      },
    ],
  },
];

export const securityDisagreements = [
  {
    question: "Prevent more, or detect and recover more?",
    positions: [
      {
        text: "CIS IG1 emphasises essential hygiene that prevents a large share of commodity attacks.",
        source: "cis-ig1",
      },
      {
        text: "CISA ransomware guidance assumes prevent will fail and puts equal weight on tested backups and IR.",
        source: "cisa-ransomware-guide",
      },
    ],
    take: "Do both, in order: IG1/CPG hygiene first, then detection and restore drills. Do not buy a SOC story while MFA and backups are broken (phases 2–4 before 7–8).",
  },
  {
    question: "Zero trust now, or classic perimeter fixes first?",
    positions: [
      {
        text: "NCSC zero-trust principles push identity-centric, continuous verification designs.",
        source: "ncsc-zero-trust",
      },
      {
        text: "CISA CPGs and CIS IG1 still prioritise inventory, MFA, patching, and backups as the immediate bar.",
        source: "cisa-cpg",
      },
    ],
    take: "Use zero trust as the direction for identity and remote access (phase 2 and 4.5). Do not delay MFA, inventory, and immutable backups for a multi-year architecture programme.",
  },
  {
    question: "How much penetration testing vs continuous scanning?",
    positions: [
      {
        text: "OWASP and secure-development practice value deep testing of critical apps.",
        source: "owasp-top10",
      },
      {
        text: "CIS vulnerability management expects continuous discovery of known weaknesses across the estate.",
        source: "cis-controls-v8",
      },
    ],
    take: "Scan continuously; pen-test crown-jewel and internet-facing apps on a fixed cadence. A yearly pen-test does not replace patch SLAs (steps 4.1 and 6.1–6.2).",
  },
];

export const securityChangelog = [
  {
    version: "1.0",
    date: "2026-11-15",
    dateLabel: "15 November 2026",
    changes: [
      "First version: 52 steps in nine phases for Heads of IT without a separate CISO.",
      "Built on NIST CSF 2.0, CIS Controls v8 / IG1, MITRE ATT&CK, CISA CPGs and ransomware guidance, Verizon DBIR themes, OWASP Top 10, NCSC zero trust, and NIST IR/800-53.",
      "Each step names the attack classes it primarily reduces; honest scope: operational readiness against common enterprise attacks, not a promise against every zero-day.",
    ],
  },
];

const known = new Set(securitySources.map((s) => s.slug));
for (const source of [
  ...securityPlaybookPhases.flatMap((p) => p.steps.flatMap((s) => s.sources)),
  ...securityDisagreements.flatMap((d) => d.positions.map((p) => p.source)),
]) {
  if (!known.has(source)) throw new Error(`Security playbook cites unknown source: ${source}`);
  if (!getSecuritySource(source)) throw new Error(`Missing source object: ${source}`);
}

export function getAllSecuritySteps() {
  return securityPlaybookPhases.flatMap((phase) => phase.steps.map((step) => ({ ...step, phase })));
}

export function securityStepAnchor(id: string) {
  return `step-${id.replace(".", "-")}`;
}
