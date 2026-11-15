/** Playbook podcast — Building AI in the Enterprise */

export const podcastMeta = {
  title: "Building AI in the Enterprise",
  author: "Pavel Veselov",
  email: "pv.inform@gmail.com",
  description:
    "A warm, practical guide for CIOs and IT directors on how to build AI inside organisations — diagnose, choose, redesign, govern, measure and scale. Based on the free checklist at pveselov.space/ai.",
  path: "/ai/podcast",
  feedPath: "/podcast/feed.xml",
  siteUrl: "https://pveselov.space",
  playbookUrl: "https://pveselov.space/ai",
  language: "en",
  voice: "en-man",
};

export type PodcastEpisode = {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  /** filename under public/podcast/audio/ */
  audioFile: string;
  /** ISO date */
  pubDate: string;
  durationSec?: number;
  bytes?: number;
};

/** Episodes appear in the feed once audio exists on disk / in public. */
export const podcastEpisodes: PodcastEpisode[] = [
  {
    number: 1,
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
    slug: "one-company-start-to-finish",
    title: "One company, start to finish",
    subtitle: "Apply the whole guide on one realistic firm",
    summary:
      "We walk one mid-size company through diagnose, choose, redesign, govern, measure and scale — then send you back to the free checklist.",
    audioFile: "ep10-one-company-start-to-finish.mp3",
    pubDate: "2026-12-05T10:00:00Z",
  },
];
