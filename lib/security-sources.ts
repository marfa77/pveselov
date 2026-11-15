/** Cited sources for the Head of IT security playbook. */

export type SecuritySource = {
  slug: string;
  shortTitle: string;
  title: string;
  url: string;
  publisher: string;
};

export const securitySources: SecuritySource[] = [
  {
    slug: "nist-csf-2",
    shortTitle: "NIST CSF 2.0",
    title: "NIST Cybersecurity Framework 2.0",
    url: "https://www.nist.gov/cyberframework",
    publisher: "NIST",
  },
  {
    slug: "cis-controls-v8",
    shortTitle: "CIS Controls v8",
    title: "CIS Critical Security Controls Version 8",
    url: "https://www.cisecurity.org/controls/v8",
    publisher: "CIS",
  },
  {
    slug: "mitre-attack",
    shortTitle: "MITRE ATT&CK",
    title: "MITRE ATT&CK Enterprise Matrix",
    url: "https://attack.mitre.org/",
    publisher: "MITRE",
  },
  {
    slug: "cisa-cpg",
    shortTitle: "CISA CPGs",
    title: "CISA Cross-Sector Cybersecurity Performance Goals",
    url: "https://www.cisa.gov/cross-sector-cybersecurity-performance-goals",
    publisher: "CISA",
  },
  {
    slug: "verizon-dbir",
    shortTitle: "Verizon DBIR",
    title: "Verizon Data Breach Investigations Report",
    url: "https://www.verizon.com/business/resources/reports/dbir/",
    publisher: "Verizon",
  },
  {
    slug: "cisa-ransomware-guide",
    shortTitle: "CISA ransomware guide",
    title: "CISA #StopRansomware Guide",
    url: "https://www.cisa.gov/stopransomware/ransomware-guide",
    publisher: "CISA",
  },
  {
    slug: "ncsc-zero-trust",
    shortTitle: "NCSC zero trust",
    title: "NCSC Zero trust architecture design principles",
    url: "https://www.ncsc.gov.uk/collection/zero-trust-architecture",
    publisher: "UK NCSC",
  },
  {
    slug: "owasp-top10",
    shortTitle: "OWASP Top 10",
    title: "OWASP Top Ten Web Application Security Risks",
    url: "https://owasp.org/www-project-top-ten/",
    publisher: "OWASP",
  },
  {
    slug: "cis-ig1",
    shortTitle: "CIS IG1",
    title: "CIS Controls Implementation Group 1 (essential cyber hygiene)",
    url: "https://www.cisecurity.org/controls/implementation-groups",
    publisher: "CIS",
  },
  {
    slug: "nist-sp-800-61",
    shortTitle: "NIST IR (800-61)",
    title: "NIST SP 800-61 Computer Security Incident Handling Guide",
    url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
    publisher: "NIST",
  },
  {
    slug: "nist-sp-800-53",
    shortTitle: "NIST 800-53",
    title: "NIST SP 800-53 Security and Privacy Controls",
    url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    publisher: "NIST",
  },
  {
    slug: "cisa-secure-by-design",
    shortTitle: "CISA Secure by Design",
    title: "CISA Secure by Design principles for software manufacturers",
    url: "https://www.cisa.gov/securebydesign",
    publisher: "CISA",
  },
];

export function getSecuritySource(slug: string) {
  return securitySources.find((s) => s.slug === slug);
}
