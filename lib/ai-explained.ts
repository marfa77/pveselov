export const aiExplainedMeta = {
  title: "AI Explained",
  path: "/ai/explained",
  description:
    "The CIO's AI Playbook as ten short parts. One familiar sentence, one picture, one distinction. The same checklist, easier to remember.",
};

export type ExplainedCard = {
  src: string;
  alt: string;
  source: string;
  height?: number;
};

export type ExplainedPart = {
  n: number;
  id: string;
  open: string;
  paragraphs: string[];
  cards: ExplainedCard[];
};

export const aiExplainedParts: ExplainedPart[] = [
  {
    n: 1,
    id: "part-1",
    open: "We need to do something with AI.",
    paragraphs: [
      "Someone says that in a meeting. Budget shows up. Vendors show up. Pilots show up. A dashboard says adoption.",
      "Then the renewal comes. Nobody can point at a business number that moved.",
      "The work is six moves, in this order. Diagnose what you already pay for. Choose a few places to play. Redesign the work. Put controls on agents. Measure what finance can see. Scale only what survives the gate.",
      "That is the map. The next parts go one move at a time.",
    ],
    cards: [
      {
        src: "/ai-explained/01-map.png",
        alt: "Six moves in order: Diagnose, Choose, Redesign, Govern, Measure, Scale.",
        source: "Full checklist on the playbook",
      },
    ],
  },
  {
    n: 2,
    id: "part-2",
    open: "It's in the IT budget.",
    paragraphs: [
      "Often it is not.",
      "BCG puts AI spend at about 3.3% of revenue, and about 80% of that money sits outside the IT budget. If you only open the IT ledger, you see about a fifth.",
      "MIT found personal AI use in more than 90% of the companies they surveyed. About 40% had bought an official subscription. People already work with a tool you do not own.",
      "Take your three biggest contracts. Count who is still active at week 1, week 4, and week 12. Tag each one keep, fix, or cut before the renewal.",
      "This week: one spend sheet, five honest conversations outside IT, three retention curves.",
    ],
    cards: [
      {
        src: "/ai-explained/02-spend.png",
        alt: "Bar showing 20% of AI spend inside IT and 80% outside IT.",
        source: "BCG Applied AI Index 2026",
        height: 400,
      },
      {
        src: "/ai-explained/02-shadow.png",
        alt: "More than 90% personal AI use at work, against about 40% of companies with an official subscription.",
        source: "MIT GenAI Divide report",
      },
      {
        src: "/ai-explained/02-retention.png",
        alt: "Check the three biggest AI contracts at week 1, week 4, and week 12.",
        source: "Before the renewal date",
      },
    ],
  },
  {
    n: 3,
    id: "part-3",
    open: "We have 200 use cases.",
    paragraphs: [
      "That sentence is a reason to leave the room.",
      "Pick 3 to 5 business areas with a money line you can measure. The first test is simple. If the model is wrong, can a person catch it cheaply.",
      "In one manufacturer story, 14 workshop ideas became 2 rebuilt workflows. A lot of the value was the 12 that stopped.",
      "Coding gets adopted because the code runs or it does not. Support gets adopted because the worst case is a hand-off to a human.",
    ],
    cards: [
      {
        src: "/ai-explained/03-choose.png",
        alt: "200 use cases on a roadmap against 3 to 5 domains with a P&L line.",
        source: "BCG · HBR manufacturer case",
      },
    ],
  },
  {
    n: 4,
    id: "part-4",
    open: "We added AI to the process.",
    paragraphs: [
      "You kept the old path and made one step faster.",
      "BCG's split is still the useful one. About 10% algorithms. About 20% technology and data. About 70% people, and the way the work is organised.",
      "Redraw the workflow with the people who do it. Fewer hand-offs. A baseline without AI, so you can compare.",
      "Start simple. One model call, the right documents, a few examples. A scripted workflow next. An agent only when the simpler setup fails on purpose.",
    ],
    cards: [
      {
        src: "/ai-explained/04-people.png",
        alt: "Bar split 10% algorithms, 20% tech and data, 70% people and the work.",
        source: "BCG 10-20-70",
        height: 400,
      },
    ],
  },
  {
    n: 5,
    id: "part-5",
    open: "Let the agent handle it.",
    paragraphs: [
      "Not yet.",
      "Six controls first. What data and memory it may see. A human on high-risk decisions. A test, a shut-off, and a way back. A clear hand-off to a person. One named owner. Security that stays on.",
      "BCG finds companies with all six get about three times the value from agents, compared with companies that have one.",
      "Whoever runs AI needs a budget and the right to stop a project. A title alone does not do that.",
    ],
    cards: [
      {
        src: "/ai-explained/05-controls.png",
        alt: "Six controls required before an agent acts on its own.",
        source: "BCG Applied AI Index 2026",
      },
    ],
  },
  {
    n: 6,
    id: "part-6",
    open: "Everyone feels more productive.",
    paragraphs: [
      "Ask what one finished job costs.",
      "Richard Ewing looked at an award-winning workflow. It was about 90% faster. Fully loaded, it cost about $12 to $14 per document. The manual way was about $0.80. And 40% of files still needed a person, who then took longer than before.",
      "Put three numbers next to each other. The business result against a process with no AI. The full cost of one finished job. Who is still using it at week 12.",
      "Do not force usage if you want an honest signal.",
    ],
    cards: [
      {
        src: "/ai-explained/06-cost.png",
        alt: "Manual cost about $0.80 per document against $12 to $14 for the award-winning AI workflow.",
        source: "Richard Ewing, CIO.com, Oct 2026",
        height: 400,
      },
    ],
  },
  {
    n: 7,
    id: "part-7",
    open: "The pilot worked. Scale it.",
    paragraphs: [
      "Three questions first.",
      "What does one finished job cost against the manual way. How often does a human step in, and what does that cost. Do those numbers still hold at full volume.",
      "Finance signs the answers. Then it can leave the pilot.",
      "Run this as one program, with one owner and a short review. Not a pile of pilots with separate slide decks.",
    ],
    cards: [
      {
        src: "/ai-explained/07-gate.png",
        alt: "Three questions before a pilot is allowed to scale.",
        source: "Scale gate",
      },
    ],
  },
  {
    n: 8,
    id: "part-8",
    open: "The studies disagree.",
    paragraphs: [
      "They count different things.",
      "MIT: about 5% of organisations get clear P&L value from task-specific generative AI. a16z: 29% of the Fortune 500 are paying customers of one leading AI startup. McKinsey: 37% of respondents attribute any EBIT impact to AI.",
      "For you, the industry average is the wrong argument. Does this workflow beat its own baseline. That is the number.",
      "Buy the commodity tool. Build where the work is yours. Check again at every renewal.",
    ],
    cards: [
      {
        src: "/ai-explained/08-studies.png",
        alt: "Three research figures that measure different things: about 5%, 29%, and 37%.",
        source: "MIT · a16z · McKinsey State of AI 2026",
      },
    ],
  },
  {
    n: 9,
    id: "part-9",
    open: "Where do I start on Monday?",
    paragraphs: [
      "Week 1. One sheet of every AI bill you can find. Five people outside IT, asked which tool they actually use.",
      "Day 30. Three big contracts tagged keep, fix, or cut. Pilots with no owner or no metric are stopped.",
      "Day 60. One domain chosen. The workflow redrawn with the people who do the work.",
      "Day 90. A baseline, a cost per job, and a named owner. The next domain waits for the gate.",
    ],
    cards: [
      {
        src: "/ai-explained/09-ninety.png",
        alt: "A ninety-day sequence: week 1, day 30, day 60, day 90.",
        source: "First ninety days",
      },
    ],
  },
  {
    n: 10,
    id: "part-10",
    open: "Show me one company.",
    paragraphs: [
      "A mid-size firm. The board wants AI. Sales quotes take hours. People already paste specs into a personal chatbot.",
      "Find the money first, including the chatbot invoices that never reached IT.",
      "Pick the quote desk. A wrong price is caught by a person the same day. That is a good first domain.",
      "The estimators redraw the path. Fewer hand-offs. The model drafts. A named person sends.",
      "Count win rate and cost per quote against the old way.",
      "The next desk starts only after finance signs those numbers at real volume.",
      "Same six moves. One firm. Then the next piece of work.",
    ],
    cards: [
      {
        src: "/ai-explained/10-one-company.png",
        alt: "One company walked through six moves, starting with the quote desk.",
        source: "A worked example, not a client",
      },
    ],
  },
];
