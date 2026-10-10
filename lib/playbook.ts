// AI for CIOs — a living playbook built on the CIO's AI Library.
// Every step cites library entries by slug. When a new source changes a step:
// bump `version`, set the step's `updated` date and add a changelog entry.

import { libraryEntries } from "@/lib/library";

export const aiSectionMeta = {
  title: "AI for CIOs",
  path: "/ai",
};

export const playbookMeta = {
  title: "Building AI in the Enterprise: A CIO's Playbook",
  shortTitle: "The CIO's AI Playbook",
  path: "/ai",
  version: "1.0",
  lastUpdated: "2026-10-10",
  lastUpdatedLabel: "10 October 2026",
};

export type PlaybookStep = {
  id: string;
  title: string;
  action: string;
  doneWhen: string;
  evidence: string;
  sources: string[];
  updated: string;
};

export type PlaybookPhase = {
  id: string;
  title: string;
  goal: string;
  steps: PlaybookStep[];
};

const v1 = "2026-10-10";

export const playbookPhases: PlaybookPhase[] = [
  {
    id: "diagnose",
    title: "Diagnose before you build",
    goal: "In the first 30 days, find out what AI the company already pays for, uses and quietly abandons, before proposing anything new.",
    steps: [
      {
        id: "1.1",
        title: "Find all AI spend, including what sits outside IT",
        action:
          "Pull AI-related invoices, cloud and model bills, SaaS add-ons and business-unit contracts into one view, with an owner for every line.",
        doneWhen: "Every AI cost line has a named owner and a stated business purpose.",
        evidence:
          "BCG's Applied AI Index 2026 puts AI spending at 3.3% of revenue, with about 80% of it outside the enterprise IT budget. A CIO who only sees the IT budget sees a fifth of the picture.",
        sources: ["bcg-applied-ai-index-2026"],
        updated: v1,
      },
      {
        id: "1.2",
        title: "Map shadow AI before buying anything",
        action:
          "Find out which personal AI tools employees already use, for which tasks, and why they prefer them to the official tools.",
        doneWhen: "You can name the top five unofficial use cases and the official alternative for each, or the gap.",
        evidence:
          "MIT's GenAI Divide report found personal AI use at more than 90% of surveyed companies, while only 40% had bought an official subscription. One lawyer kept using ChatGPT instead of her firm's $50,000 tool because it gave better output.",
        sources: ["mit-nanda-genai-divide-2025"],
        updated: v1,
      },
      {
        id: "1.3",
        title: "Run a retention curve on your largest AI licenses",
        action:
          "For the three biggest AI contracts, group users by activation month and check how many are still active at weeks 1, 4 and 12.",
        doneWhen: "Each contract is tagged keep, fix or cut well before its renewal date.",
        evidence:
          "A steep week-one drop points to onboarding or role fit; a slow bleed to week twelve points to workflow friction. Define “active user” in the contract and require event-level usage exports, or you are reading the vendor's definition of success.",
        sources: ["cio-measure-ai-abandonment"],
        updated: v1,
      },
      {
        id: "1.4",
        title: "Inventory pilots and stop most of them",
        action:
          "List every live pilot with its sponsor, business metric and cost. Stop the ones with no outcome metric or no owner.",
        doneWhen: "Only a handful of initiatives remain, each tied to a business outcome.",
        evidence:
          "In HBR's manufacturer case, 14 use cases from a workshop became 2 rebuilt workflows, and much of the value came from the 12 that were dropped. BCG's AI lead Nicolas de Bellefonds puts it bluntly: “If you see a roadmap with 200 use cases, walk away.”",
        sources: ["hbr-ai-experimentation-to-transformation", "bcg-applied-ai-index-2026"],
        updated: v1,
      },
    ],
  },
  {
    id: "choose",
    title: "Choose where to play",
    goal: "Concentrate on a few domains where AI output can be checked cheaply and the organization can actually absorb the result.",
    steps: [
      {
        id: "2.1",
        title: "Pick three to five domains, not a use-case list",
        action:
          "Choose three to five business domains with a measurable P&L line and map their end-to-end workflows together with frontline people.",
        doneWhen: "Each domain has a C-suite owner and a baseline metric.",
        evidence:
          "HBR's authors find that companies stuck in the “micro-productivity trap” start from long use-case lists; those that escape narrow AI to a few strategic domains. BCG finds future-built companies 3.5× more likely to fund AI as one multiyear program.",
        sources: ["hbr-ai-experimentation-to-transformation", "bcg-applied-ai-index-2026"],
        updated: v1,
      },
      {
        id: "2.2",
        title: "Apply the verifiability test",
        action:
          "Score candidate workflows on five traits: text-based, repetitive, with natural human review, limited regulation, verifiable output. Start with the highest scores.",
        doneWhen: "Your first wave contains only workflows where a wrong answer is caught cheaply.",
        evidence:
          "a16z's revenue data shows adoption following verifiability rather than model capability: coding leads because code runs or it doesn't, and support works because the worst case is a hand-off to a human.",
        sources: ["a16z-where-enterprises-adopt-ai"],
        updated: v1,
      },
      {
        id: "2.3",
        title: "Check that the organization can absorb the result",
        action:
          "For each domain, ask how much of the value chain you control end to end and how many technologies must be combined. Run a pre-mortem against the typical failure for that position.",
        doneWhen: "Each initiative names who will put the output into production, not just who builds it.",
        evidence:
          "GM's generatively designed seat bracket was 40% lighter and 20% stronger, and never reached production because its factories were built for stamped steel. A better AI output is worth zero if the organization cannot use it.",
        sources: ["hbr-match-ai-strategy-to-organization"],
        updated: v1,
      },
      {
        id: "2.4",
        title: "Decide buy, partner or build for each workflow",
        action:
          "Default to buying or partnering for commodity capabilities. Build where the workflow differentiates you, or where agentic coding makes an internal tool cheaper than a license.",
        doneWhen: "Every significant SaaS renewal gets an explicit build-versus-buy check.",
        evidence:
          "MIT's report found external partnerships reaching deployment about twice as often as internal builds (self-reported). McKinsey found 32% of respondents had dropped at least one software purchase because agentic coding let them build it in-house. See “Where the sources disagree”.",
        sources: ["mit-nanda-genai-divide-2025", "mckinsey-state-of-ai-2026"],
        updated: v1,
      },
    ],
  },
  {
    id: "redesign",
    title: "Redesign the work, not the task",
    goal: "Rebuild whole workflows around AI instead of bolting AI onto existing steps.",
    steps: [
      {
        id: "3.1",
        title: "Rebuild workflows end to end, led by frontline experts",
        action:
          "Redesign each chosen workflow from a clean sheet with the people who do the work, and remove steps rather than only speeding them up.",
        doneWhen: "The new workflow has fewer hand-offs and a non-AI baseline to compare against.",
        evidence:
          "In HBR's manufacturer case, early quotes went from four to six hours of engineering time to a 20-minute estimate by non-designers, and win rate rose 10 points in three months. Bain's clients call the alternative “paving the goat trails”.",
        sources: ["hbr-ai-experimentation-to-transformation"],
        updated: v1,
      },
      {
        id: "3.2",
        title: "Capture judgment, not documentation",
        action:
          "Run moderated panels of experienced practitioners through real edge cases. Where they agree, write a rule; where they disagree, record the reasoning as context for agents.",
        doneWhen: "Agent context files contain escalation thresholds, exceptions and tone, reviewed by the experts themselves.",
        evidence:
          "Every company has the same models; the difference is written-down judgment. At ITA Group the first six to seven months of codifying expertise were slow, then software timelines shrank from months to weeks.",
        sources: ["hbr-teach-your-ai-how-you-make-decisions"],
        updated: v1,
      },
      {
        id: "3.3",
        title: "Use the simplest architecture that works",
        action:
          "Start with one model call plus retrieval and examples. Move to a scripted workflow, and only then to an autonomous agent, when the simpler step measurably fails.",
        doneWhen: "Every agent in production has a written reason why a workflow was not enough.",
        evidence:
          "Anthropic's engineers found the most successful implementations used simple, composable patterns, and warn that the right answer “might mean not building agentic systems at all”.",
        sources: ["anthropic-building-effective-agents"],
        updated: v1,
      },
      {
        id: "3.4",
        title: "Invest in tools more than prompts",
        action:
          "Document every tool an agent uses as you would for a junior developer, and test how the model actually calls it.",
        doneWhen: "Tool definitions have examples, edge cases and clear boundaries, and failures get fixed in the interface, not only in the prompt.",
        evidence:
          "Building its coding agent, Anthropic spent more time on tools than on the prompt; switching to absolute file paths made the model use its tool “flawlessly”.",
        sources: ["anthropic-building-effective-agents"],
        updated: v1,
      },
      {
        id: "3.5",
        title: "Budget for people, not just models",
        action:
          "Plan effort at roughly 10% algorithms, 20% technology and data, and 70% people, organization and process change.",
        doneWhen: "The AI budget has explicit lines for training, change management and workflow redesign.",
        evidence:
          "BCG's 10-20-70 rule. If 70% of the effort is organizational, running AI is mostly change leadership, and an AI team staffed only with engineers is set up to stall.",
        sources: ["bcg-applied-ai-index-2026"],
        updated: v1,
      },
    ],
  },
  {
    id: "govern",
    title: "Govern agents like a workforce",
    goal: "Put controls, ownership and decision rights in place before agents get autonomy.",
    steps: [
      {
        id: "4.1",
        title: "Install the six controls before granting autonomy",
        action:
          "Governed data and memory access; human-in-the-loop for high-risk decisions; testing with shut-off and rollback; clear hand-off interfaces; a named owner for every agent; ongoing security.",
        doneWhen: "No agent acts autonomously in production without all six in place.",
        evidence:
          "42% of companies expect to give agents real autonomy by 2030, but only 5% have all six controls today. Companies with all six report three times the agentic value of those with one.",
        sources: ["bcg-applied-ai-index-2026"],
        updated: v1,
      },
      {
        id: "4.2",
        title: "Give every agent a human owner and a lifecycle",
        action:
          "Assign an owner to each agent and manage it through onboarding, evaluation, retraining and retirement, the way you manage staff.",
        doneWhen: "There is an agent register with owner, scope, permissions and last review date.",
        evidence:
          "MIT SMR and BCG describe agentic AI as “a tool that learns and a worker that is owned” and recommend an “HR for agents” function; 76% of respondents already see agents as more like coworkers than tools.",
        sources: ["mit-smr-bcg-emerging-agentic-enterprise"],
        updated: v1,
      },
      {
        id: "4.3",
        title: "Share decision rights across business, HR and IT",
        action:
          "Business units own outcomes, HR owns how agents change roles and skills, IT owns platforms and security, and they decide together.",
        doneWhen: "Agent decisions no longer sit with IT alone.",
        evidence:
          "HBR's authors argue that agents are digital labor governed jointly by business units, HR and IT; MIT SMR and BCG reach the same conclusion from their survey and interviews.",
        sources: ["hbr-teach-your-ai-how-you-make-decisions", "mit-smr-bcg-emerging-agentic-enterprise"],
        updated: v1,
      },
      {
        id: "4.4",
        title: "Give whoever runs AI real authority",
        action:
          "Whether the CIO runs AI directly or through an AI lead, the role needs budget, decision rights over the AI portfolio and a CEO-level sponsor.",
        doneWhen: "The owner of AI can stop a project and move its budget without asking permission line by line.",
        evidence:
          "Gene Rapoport, one of the HBR article's authors, on AI leaders without power: “If they just have a title, then they end up being a mascot.”",
        sources: ["hbr-ai-experimentation-to-transformation"],
        updated: v1,
      },
    ],
  },
  {
    id: "measure",
    title: "Measure what the P&L sees",
    goal: "Replace adoption dashboards with outcome, cost and retention metrics that finance recognizes.",
    steps: [
      {
        id: "5.1",
        title: "Measure outcomes against a non-AI baseline",
        action:
          "Track the business metric each workflow is meant to move (win rate, conversion, cycle time, cost to serve) against a comparable process without AI, with finance involved from day one.",
        doneWhen: "Each initiative has a P&L line, a baseline and an owner in finance.",
        evidence:
          "BCG finds companies that track AI value in the P&L realize three times the value (3.6% vs 1.2%). McKinsey's gap between 80% feeling more productive and 37% seeing EBIT impact is what happens without this step.",
        sources: ["bcg-applied-ai-index-2026", "mckinsey-state-of-ai-2026"],
        updated: v1,
      },
      {
        id: "5.2",
        title: "Track fully loaded cost per completed transaction",
        action:
          "Include model fees, compute, data lookups and the human time spent on exceptions, and compare with the manual baseline every month.",
        doneWhen: "Cost per transaction sits on the same dashboard as speed.",
        evidence:
          "Richard Ewing audited an award-winning workflow that was 90% faster and cost $12–14 per document against about $0.80 manually; 40% of files still needed a human, who took twice as long as before.",
        sources: ["cio-ai-project-cloud-bill"],
        updated: v1,
      },
      {
        id: "5.3",
        title: "Track retention, and don't mandate usage",
        action:
          "Report cohort retention at weeks 1, 4 and 12 for every major AI tool, and resist making usage mandatory.",
        doneWhen: "Retention is reported next to delivery metrics, not instead of them.",
        evidence:
          "“The correct abandonment target is not zero.” Mandated usage destroys the only honest signal of whether a tool fits the work.",
        sources: ["cio-measure-ai-abandonment"],
        updated: v1,
      },
      {
        id: "5.4",
        title: "Treat tokens as a design constraint",
        action:
          "Budget horizontal tools such as chat assistants as a cost of doing business, and manage agentic and coding workloads for ROI with a token budget per workflow.",
        doneWhen: "Every agentic workflow has a cost ceiling and an owner who watches it.",
        evidence:
          "About one in five McKinsey respondents say AI operating costs already constrain them, and high performers hit cost limits on coding agents three times as often (18% vs 6%). Per-token prices fall; consumption grows faster.",
        sources: ["mckinsey-state-of-ai-2026"],
        updated: v1,
      },
    ],
  },
  {
    id: "scale",
    title: "Fund and scale",
    goal: "Scale only what holds up at production volume, under one program with one owner.",
    steps: [
      {
        id: "6.1",
        title: "Run AI as one multiyear program",
        action:
          "Fold scattered pilots into a single enterprise program focused on a few high-value workflows, with a C-suite owner and short review cycles.",
        doneWhen: "There is one AI portfolio, one owner and one review rhythm.",
        evidence:
          "61% of BCG's future-built companies fund AI as a single multiyear program, against 17% of laggards.",
        sources: ["bcg-applied-ai-index-2026"],
        updated: v1,
      },
      {
        id: "6.2",
        title: "Pass a scale gate with three questions",
        action:
          "Before scaling, answer: what does one completed transaction cost against the manual baseline; how often does a human intervene, and at what cost; do the economics hold at production volume?",
        doneWhen: "No pilot moves to production without written answers signed off by finance.",
        evidence:
          "Pilot costs are often paid from central innovation funds, so the business unit never sees the bill until the project code closes. In Ewing's audit, the economics turned negative within 60 days of full production.",
        sources: ["cio-ai-project-cloud-bill"],
        updated: v1,
      },
    ],
  },
];

export const playbookDisagreements = [
  {
    question: "Is enterprise AI failing or working?",
    positions: [
      { text: "About 5% of organizations get measurable P&L value from task-specific generative AI.", source: "mit-nanda-genai-divide-2025" },
      { text: "29% of the Fortune 500 are live, paying customers of a leading AI startup.", source: "a16z-where-enterprises-adopt-ai" },
      { text: "37% of respondents attribute any EBIT impact to AI.", source: "mckinsey-state-of-ai-2026" },
    ],
    take: "They measure different things: P&L impact, paid deployment and self-reported EBIT. For a CIO, the industry rate matters less than whether your own workflows beat their baselines (step 5.1).",
  },
  {
    question: "Should you buy or build?",
    positions: [
      { text: "External partnerships reached deployment about twice as often as internal builds.", source: "mit-nanda-genai-divide-2025" },
      { text: "32% dropped at least one software purchase because agentic coding let them build in-house.", source: "mckinsey-state-of-ai-2026" },
    ],
    take: "Buy for commodity capabilities and speed; build where the workflow differentiates you or the vendor product is a thin wrapper. Re-check at every renewal (step 2.4).",
  },
  {
    question: "Does governance slow AI down?",
    positions: [
      { text: "Companies with all six agent controls get three times the value of those with one.", source: "bcg-applied-ai-index-2026" },
      { text: "Supervision versus autonomy is one of four unresolved tensions of the agentic enterprise.", source: "mit-smr-bcg-emerging-agentic-enterprise" },
    ],
    take: "Controls are what let you grant autonomy at all. Without them, agents stay stuck in low-risk pilots (step 4.1).",
  },
];

export const playbookChangelog = [
  {
    version: "1.0",
    date: "2026-10-10",
    dateLabel: "10 October 2026",
    changes: [
      "First version: 23 steps in six phases, built from the 11 sources in the CIO's AI Library.",
      "Cost per transaction (5.2) and the scale gate (6.2) come from Richard Ewing's CIO.com audit column of 8 October 2026.",
      "Retention metrics (1.3, 5.3) come from Nishant Virmani's CIO.com column of 9 October 2026.",
    ],
  },
];

const knownSources = new Set(libraryEntries.map((entry) => entry.slug));
for (const source of [
  ...playbookPhases.flatMap((phase) => phase.steps.flatMap((step) => step.sources)),
  ...playbookDisagreements.flatMap((item) => item.positions.map((position) => position.source)),
]) {
  if (!knownSources.has(source)) throw new Error(`Playbook cites unknown library entry: ${source}`);
}

export function getAllPlaybookSteps() {
  return playbookPhases.flatMap((phase) => phase.steps.map((step) => ({ ...step, phase })));
}

export function getStepsCitingSource(slug: string) {
  return getAllPlaybookSteps().filter((step) => step.sources.includes(slug));
}

export function stepAnchor(id: string) {
  return `step-${id.replace(".", "-")}`;
}
