/** Enterprise IT Playbooks podcast — AI (S1) + Security (S2) */

export const podcastMeta = {
  title: "Enterprise IT Playbooks with Pavel Veselov",
  author: "Pavel Veselov",
  email: "pveselov@me.com",
  description:
    "Warm, practical guides for CIOs and Heads of IT. Season 1: Building AI in the Enterprise. Season 2: Securing the Enterprise. Free checklists at pveselov.space/ai and pveselov.space/security.",
  path: "/podcast",
  feedPath: "/podcast/feed.xml",
  siteUrl: "https://pveselov.space",
  playbookUrl: "https://pveselov.space/ai",
  securityPlaybookUrl: "https://pveselov.space/security",
  language: "en",
  voice: "en-man",
};

export type PodcastEpisode = {
  number: number;
  season: 1 | 2;
  seasonEpisode: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  series: "ai" | "security";
  playbookPath: string;
  audioFile: string;
  pubDate: string;
  durationSec?: number;
  bytes?: number;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    number: 1,
    season: 1,
    seasonEpisode: 1,
    series: "ai",
    playbookPath: "/ai",
    slug: "youre-the-one-they-asked",
    title: "You're the one they asked",
    subtitle: "What this job really is",
    summary:
      "Someone asked you to do something with AI. Here is the real job for an IT director — and the map we will walk together.",
    audioFile: "ep01-youre-the-one-they-asked.mp3",
    pubDate: "2026-11-15T10:00:00Z",
  },
  {
    number: 2,
    season: 1,
    seasonEpisode: 2,
    series: "ai",
    playbookPath: "/ai",
    slug: "look-before-you-buy",
    title: "Look before you buy",
    subtitle: "Diagnose spend, shadow AI, and weak pilots",
    summary:
      "Before another licence, find what you already pay for, what people use on the side, and which pilots deserve to die.",
    audioFile: "ep02-look-before-you-buy.mp3",
    pubDate: "2026-11-17T10:00:00Z",
  },
  {
    number: 3,
    season: 1,
    seasonEpisode: 3,
    series: "ai",
    playbookPath: "/ai",
    slug: "pick-a-few-fights",
    title: "Pick a few fights",
    subtitle: "Choose domains that can actually win",
    summary:
      "How to stop the hundred-use-case roadmap and pick three to five domains where AI can be checked and absorbed.",
    audioFile: "ep03-pick-a-few-fights.mp3",
    pubDate: "2026-11-19T10:00:00Z",
  },
  {
    number: 4,
    season: 1,
    seasonEpisode: 4,
    series: "ai",
    playbookPath: "/ai",
    slug: "change-the-work-not-the-slide",
    title: "Change the work, not the slide",
    subtitle: "Rebuild workflows with the people who do them",
    summary:
      "Why bolting a model onto old steps fails — and how to redesign the work with frontline judgment, simple architecture, and a real people budget.",
    audioFile: "ep04-change-the-work-not-the-slide.mp3",
    pubDate: "2026-11-21T10:00:00Z",
  },
  {
    number: 5,
    season: 1,
    seasonEpisode: 5,
    series: "ai",
    playbookPath: "/ai",
    slug: "treat-agents-like-people-you-hired",
    title: "Treat agents like people you hired",
    subtitle: "Ownership and controls before autonomy",
    summary:
      "The six controls, a human owner for every agent, and why business, HR and IT must share decision rights.",
    audioFile: "ep05-treat-agents-like-people-you-hired.mp3",
    pubDate: "2026-11-24T10:00:00Z",
  },
  {
    number: 6,
    season: 1,
    seasonEpisode: 6,
    series: "ai",
    playbookPath: "/ai",
    slug: "talk-to-finance-in-their-language",
    title: "Talk to finance in their language",
    subtitle: "Outcomes, cost per transaction, retention, tokens",
    summary:
      "Replace adoption dashboards with numbers a CFO recognises — including the audits that make a fast demo look expensive.",
    audioFile: "ep06-talk-to-finance-in-their-language.mp3",
    pubDate: "2026-11-26T10:00:00Z",
  },
  {
    number: 7,
    season: 1,
    seasonEpisode: 7,
    series: "ai",
    playbookPath: "/ai",
    slug: "scale-only-what-survives",
    title: "Scale only what survives",
    subtitle: "One program and a hard scale gate",
    summary:
      "Fold pilots into one multiyear program, then ask three questions before you scale — or watch the economics break in production.",
    audioFile: "ep07-scale-only-what-survives.mp3",
    pubDate: "2026-11-28T10:00:00Z",
  },
  {
    number: 8,
    season: 1,
    seasonEpisode: 8,
    series: "ai",
    playbookPath: "/ai",
    slug: "when-the-experts-disagree",
    title: "When the experts disagree",
    subtitle: "Clear CIO positions on the messy debates",
    summary:
      "Is enterprise AI failing or working? Buy or build? Does governance slow you down? How to hold a useful position without pretending the research is tidy.",
    audioFile: "ep08-when-the-experts-disagree.mp3",
    pubDate: "2026-12-01T10:00:00Z",
  },
  {
    number: 9,
    season: 1,
    seasonEpisode: 9,
    series: "ai",
    playbookPath: "/ai",
    slug: "your-first-ninety-days",
    title: "Your first ninety days",
    subtitle: "A calendar from week one to month three",
    summary:
      "A warm walk through what to do in the first month, the second, and the third — so the playbook becomes a real working rhythm.",
    audioFile: "ep09-your-first-ninety-days.mp3",
    pubDate: "2026-12-03T10:00:00Z",
  },
  {
    number: 10,
    season: 1,
    seasonEpisode: 10,
    series: "ai",
    playbookPath: "/ai",
    slug: "one-company-start-to-finish",
    title: "One company, start to finish",
    subtitle: "Apply the whole AI guide on one realistic firm",
    summary:
      "We walk one mid-size company through diagnose, choose, redesign, govern, measure and scale — then send you back to the free checklist.",
    audioFile: "ep10-one-company-start-to-finish.mp3",
    pubDate: "2026-12-05T10:00:00Z",
  },
  {
    number: 11,
    season: 2,
    seasonEpisode: 1,
    series: "security",
    playbookPath: "/security",
    slug: "you-own-security-now",
    title: "You own security now",
    subtitle: "The job when there is no CISO",
    summary:
      "No separate CISO — here is the real security job for a Head of IT, and the map for this season.",
    audioFile: "sec01-you-own-security-now.mp3",
    pubDate: "2026-11-15T12:00:00Z",
  },
  {
    number: 12,
    season: 2,
    seasonEpisode: 2,
    series: "security",
    playbookPath: "/security",
    slug: "know-what-you-own",
    title: "Know what you own",
    subtitle: "Inventory, crown jewels, baseline",
    summary:
      "Assets, shadow IT, crown jewels, and a CIS/CISA baseline you can show upstairs.",
    audioFile: "sec02-know-what-you-own.mp3",
    pubDate: "2026-11-16T12:00:00Z",
  },
  {
    number: 13,
    season: 2,
    seasonEpisode: 3,
    series: "security",
    playbookPath: "/security",
    slug: "identity-is-the-perimeter",
    title: "Identity is the perimeter",
    subtitle: "MFA, privilege, leavers, keys",
    summary:
      "SSO, phishing-resistant MFA, admin separation, joiners and leavers, and non-human identities.",
    audioFile: "sec03-identity-is-the-perimeter.mp3",
    pubDate: "2026-11-17T12:00:00Z",
  },
  {
    number: 14,
    season: 2,
    seasonEpisode: 4,
    series: "security",
    playbookPath: "/security",
    slug: "harden-what-users-touch",
    title: "Harden what users touch",
    subtitle: "Endpoints, email, BEC",
    summary:
      "EDR and encryption, DMARC, phishing paths, and payment-fraud controls with finance.",
    audioFile: "sec04-harden-what-users-touch.mp3",
    pubDate: "2026-11-18T12:00:00Z",
  },
  {
    number: 15,
    season: 2,
    seasonEpisode: 5,
    series: "security",
    playbookPath: "/security",
    slug: "harden-what-attackers-love",
    title: "Harden what attackers love",
    subtitle: "Patch, backup, segment, remote",
    summary:
      "Vulnerability SLAs, ransomware-ready backups, network segmentation, and remote access.",
    audioFile: "sec05-harden-what-attackers-love.mp3",
    pubDate: "2026-11-19T12:00:00Z",
  },
  {
    number: 16,
    season: 2,
    seasonEpisode: 6,
    series: "security",
    playbookPath: "/security",
    slug: "cloud-saas-supply-chain",
    title: "Cloud, SaaS, and the supply chain",
    subtitle: "Misconfigs, OAuth, vendors",
    summary:
      "Cloud hygiene, public storage, OAuth grants, vendor access, and domains as attack surface.",
    audioFile: "sec06-cloud-saas-supply-chain.mp3",
    pubDate: "2026-11-20T12:00:00Z",
  },
  {
    number: 17,
    season: 2,
    seasonEpisode: 7,
    series: "security",
    playbookPath: "/security",
    slug: "detect-without-theatre",
    title: "Detect without theatre",
    subtitle: "Logs, alerts, ATT&CK, hunt",
    summary:
      "A logging matrix, alerts someone sees after hours, ATT&CK coverage, and light hunting.",
    audioFile: "sec07-detect-without-theatre.mp3",
    pubDate: "2026-11-21T12:00:00Z",
  },
  {
    number: 18,
    season: 2,
    seasonEpisode: 8,
    series: "security",
    playbookPath: "/security",
    slug: "respond-and-recover",
    title: "Respond and recover",
    subtitle: "IR, ransomware, restore drills",
    summary:
      "An IR plan you can run, ransomware runbook, tabletops, and restore with a stopwatch.",
    audioFile: "sec08-respond-and-recover.mp3",
    pubDate: "2026-11-22T12:00:00Z",
  },
  {
    number: 19,
    season: 2,
    seasonEpisode: 9,
    series: "security",
    playbookPath: "/security",
    slug: "prove-it-ninety-days",
    title: "Prove it — and your first ninety days",
    subtitle: "Board metrics and a calendar",
    summary:
      "Honest board metrics, control tests, and a ninety-day rhythm from govern to prove.",
    audioFile: "sec09-prove-it-ninety-days.mp3",
    pubDate: "2026-11-23T12:00:00Z",
  },
  {
    number: 20,
    season: 2,
    seasonEpisode: 10,
    series: "security",
    playbookPath: "/security",
    slug: "one-company-under-fire",
    title: "One company under fire",
    subtitle: "Apply the whole security guide",
    summary:
      "Walk one realistic firm through the security playbook — then return to the free checklist.",
    audioFile: "sec10-one-company-under-fire.mp3",
    pubDate: "2026-11-24T12:00:00Z",
  },
];
