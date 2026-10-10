// The CIO's AI Library — curated reading list on building AI inside a company.
// Every fact below was checked against the original source; "readCarefully"
// lists the ways each piece is commonly misquoted.

export const libraryTopics = [
  "Strategy & ROI",
  "Operating model",
  "Agents",
  "Governance",
  "Measurement",
  "AI economics",
] as const;

export type LibraryTopic = (typeof libraryTopics)[number];

export type LibraryEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  publisher: string;
  format: "Report" | "Survey" | "Article" | "Guide" | "Column";
  url: string;
  urlNote?: string;
  published: string;
  publishedLabel: string;
  authors: string[];
  topics: LibraryTopic[];
  readingTime: string;
  oneLiner: string;
  summary: string[];
  keyNumbers: string[];
  whyRead: string[];
  whoShouldRead: string[];
  readCarefully: string[];
  author: {
    name: string;
    role: string;
    bio: string[];
  };
};

export const libraryMeta = {
  title: "The CIO's AI Library",
  path: "/ai/library",
  lastReviewed: "2026-10-10",
  lastReviewedLabel: "10 October 2026",
};

const entries: LibraryEntry[] = [
  {
    slug: "mckinsey-state-of-ai-2026",
    title: "The State of AI in 2026",
    shortTitle: "McKinsey State of AI 2026",
    publisher: "McKinsey & Company (QuantumBlack)",
    format: "Survey",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    urlNote:
      "McKinsey reuses this URL every year. Cite it as “The state of AI in 2026 (August 2026)”.",
    published: "2026-08-25",
    publishedLabel: "25 August 2026",
    authors: ["Dan Tinkoff", "Lieven Van der Veken", "Michael Chui", "Tara Balakrishnan"],
    topics: ["Strategy & ROI", "AI economics"],
    readingTime: "25 min",
    oneLiner:
      "The annual benchmark: AI use keeps spreading, but enterprise-level profit impact has barely moved in two years.",
    summary: [
      "McKinsey's global survey of 1,719 respondents in 97 countries, fielded in May and June 2026, finds AI spreading faster and wider than ever. Among organizations with more than $1 billion in revenue, 40% of respondents say they are already scaling AI agents.",
      "The headline tension is the gap between individual and enterprise gains. Eighty percent say AI improved their own productivity, yet only 37% attribute any EBIT impact to it. The roughly 6% of “high performers” are separated less by budget than by behaviour: they redesign workflows end to end, aim AI at growth and innovation rather than efficiency alone, and treat AI operating cost as a design constraint.",
    ],
    keyNumbers: [
      "80% say AI improved their individual productivity; 37% attribute any EBIT impact to AI.",
      "About 6% qualify as high performers (5% or more of EBIT from AI), flat versus 2025.",
      "32% decided against buying at least one software product because agentic coding tools let them build it in-house.",
      "Around one in five say AI operating costs, including tokens, already constrain their use of AI.",
      "High performers hit cost limits on coding agents three times as often as everyone else (18% vs 6%).",
    ],
    whyRead: [
      "It is the most-quoted annual dataset on enterprise AI. Your board and CFO will cite it, so you should know exactly what it says.",
      "The tokenomics section is the clearest explanation of why AI bills grow even while per-token prices fall.",
      "The build-versus-buy finding should change how you review SaaS renewals.",
    ],
    whoShouldRead: [
      "CIOs and AI leads preparing a board update",
      "CFOs building or challenging an AI business case",
      "CEOs who want a second look at their AI plans",
    ],
    readCarefully: [
      "Every figure is a share of respondents, not of companies, and all of it is self-reported.",
      "The sample is executive-heavy. “80% more productive” is mostly leaders describing themselves.",
      "“40% scaling agents” applies only to companies above $1 billion in revenue, not to the whole sample.",
    ],
    author: {
      name: "Michael Chui",
      role: "Senior fellow, QuantumBlack, AI by McKinsey",
      bio: [
        "One of McKinsey's longest-standing voices on technology and the economy, at the firm since 2002. He co-authored its widely quoted 2023 estimate that generative AI could add $2.6–4.4 trillion a year to the global economy and co-hosts the McKinsey Global Institute podcast Forward Thinking.",
        "Before consulting he was the first CIO of the city of Bloomington, Indiana, where he moved city IT toward open-source software, and he founded a cooperative nonprofit internet provider. His PhD dissertation on web search is titled “I Still Haven't Found What I'm Looking For”.",
      ],
    },
  },
  {
    slug: "bcg-applied-ai-index-2026",
    title: "The Formula for Agentic AI Value (Applied AI Index 2026)",
    shortTitle: "BCG Applied AI Index 2026",
    publisher: "Boston Consulting Group",
    format: "Survey",
    url: "https://www.bcg.com/publications/2026/the-formula-for-agentic-ai-value",
    published: "2026-09-30",
    publishedLabel: "30 September 2026",
    authors: ["Nicolas de Bellefonds", "Vladimir Lukić", "Amanda Luther", "et al. (18 BCG authors)"],
    topics: ["Governance", "Agents", "Strategy & ROI"],
    readingTime: "20 min",
    oneLiner:
      "Almost half of companies now get some value from AI. The new bottleneck is governing agents, not proving ROI.",
    summary: [
      "BCG surveyed 1,330 CxOs and senior leaders across more than 20 sectors. It classifies 7.5% of companies as “future-built” and 41% as “scaling”, so almost half now generate at least some value from AI. Its formula is strategic clarity plus applied AI: companies strong on both report five times the AI value of companies with neither.",
      "The sharpest finding is about control. BCG expects agentic AI to deliver close to 40% of AI value by 2030, and 42% of companies expect to give agents real autonomy by then. Only 5% have all six recommended controls in place today: governed data and memory access, human-in-the-loop for high-risk decisions, testing with shut-off and rollback, hand-off interfaces, a named owner for every agent, and ongoing security.",
    ],
    keyNumbers: [
      "AI spending reached 3.3% of revenue, and about 80% of it sits outside the enterprise IT budget.",
      "42% expect autonomous agents by 2030; 5% have all six controls today.",
      "Companies with all six controls get three times the agentic value of those with only one.",
      "Companies that track AI value directly in the P&L realize three times the value of those that don't (3.6% vs 1.2%).",
      "Future-built firms are 3.5× more likely to fund AI as a single multiyear program (61% vs 17%).",
    ],
    whyRead: [
      "It gives you a concrete control checklist for agents that risk, security and audit teams can sign off.",
      "It reframes governance as an accelerator, which helps when control functions are seen as blockers.",
      "The “80% of AI spend is outside IT” number tells a CIO how much AI they are not seeing, and who to partner with.",
    ],
    whoShouldRead: [
      "CIOs and AI leads designing an agent governance model",
      "CIOs who suspect they do not see the full AI budget",
      "Risk, security and internal audit leaders",
    ],
    readCarefully: [
      "“Almost half generate value” includes the 41% who get only some value. Significant value is the 7.5%.",
      "The 2025 and 2026 figures come from different samples, not from tracking the same companies.",
      "BCG describes spending growth in two ways (doubled in one year, tripled in two). Quote one, with its baseline.",
    ],
    author: {
      name: "Nicolas de Bellefonds",
      role: "Managing Director & Senior Partner, BCG; leads AI at BCG X",
      bio: [
        "An industrial engineer from École Centrale Paris who started in financial audit at Ernst & Young and at a wireless-device start-up before joining BCG, where he later ran its data-science unit, BCG GAMMA. He describes that work growing from problems that “did not fit into an Excel” into a global organization of about 3,000 people.",
        "He is known for blunt advice: “If you see a roadmap with 200 use cases, walk away.” He was the first-listed author of BCG's 2024 study “Where's the Value in AI?”, which found only a small minority of companies creating substantial value.",
      ],
    },
  },
  {
    slug: "hbr-ai-experimentation-to-transformation",
    title: "How to Move from AI Experimentation to AI Transformation",
    shortTitle: "HBR: From AI Experimentation to Transformation",
    publisher: "Harvard Business Review",
    format: "Article",
    url: "https://hbr.org/2026/04/how-to-move-from-ai-experimentation-to-ai-transformation",
    published: "2026-04-30",
    publishedLabel: "30 April 2026",
    authors: [
      "Arjun Dutt",
      "Gene Rapoport",
      "Aaron “Ronnie” Chatterji",
      "Gawesha Weeratunga",
      "Harrison Satcher",
    ],
    topics: ["Strategy & ROI", "Operating model"],
    readingTime: "15 min",
    oneLiner:
      "Names the “micro-productivity trap”: everyone gets faster at tasks, and the P&L doesn't move.",
    summary: [
      "Written by partners at Bain and members of OpenAI's economic research team, the article argues that most companies past the pilot stage treat AI like plug-and-play SaaS: scattered use cases, individual speed-ups and existing processes left intact. Gains stall at the firm level because the surrounding workflow still runs on tacit knowledge, manual hand-offs and legacy systems.",
      "The way out has four parts: narrow AI to a few strategic domains, rebuild whole cross-functional workflows around it, let frontline experts lead the redesign, and measure business outcomes such as win rate or conversion against a non-AI baseline, with the C-suite owning the targets.",
    ],
    keyNumbers: [
      "An anonymized Fortune 1000 manufacturer surfaced 14 use cases in a week-long workshop and rebuilt only 2 of them end to end.",
      "Early-stage quotes went from four to six hours of engineering time to a 20-minute estimate by non-designers.",
      "Win rate on AI-supported quotes rose 10 percentage points within three months; the company says it is on track for about $30 million in additional profit.",
      "Lowe's associate assistant is used in more than 1,700 stores; customer satisfaction is 200 basis points higher when associates use it.",
    ],
    whyRead: [
      "It is the best short explanation of why individual productivity gains don't show up in enterprise results.",
      "The manufacturer case shows the value came from removing work (12 discarded use cases, engineers spared on unlikely bids), not just from speeding it up.",
      "Lowe's evaluation method, where experts write prompts and validated answers and models are compared against them, is a reusable template.",
    ],
    whoShouldRead: [
      "CIOs with many AI pilots and no P&L story",
      "COOs and business-unit leaders told to “use more AI”",
      "Transformation and strategy teams",
    ],
    readCarefully: [
      "Bain and OpenAI sell into these situations, and there is no survey or control group behind the cases.",
      "The $30 million is a projection, and the manufacturer is anonymized.",
      "Lowe's “conversion more than doubles” compares users with non-users, which may simply reflect high-intent shoppers.",
    ],
    author: {
      name: "Aaron “Ronnie” Chatterji",
      role: "Chief Economist, OpenAI; professor at Duke University (on leave)",
      bio: [
        "OpenAI's first chief economist, appointed in October 2024. He began as a financial analyst at Goldman Sachs, became a professor at Duke's Fuqua School of Business, served as a senior economist on President Obama's Council of Economic Advisers, and later coordinated implementation of the $52 billion CHIPS and Science Act at the White House.",
        "In 2020 he took a sabbatical to run for North Carolina State Treasurer, won the Democratic primary and lost the general election with 47% of the vote. He also co-wrote the 2018 HBR essay that introduced the idea of “CEO activism”.",
      ],
    },
  },
  {
    slug: "hbr-teach-your-ai-how-you-make-decisions",
    title: "Teach Your AI How You Make Decisions",
    shortTitle: "HBR: Teach Your AI How You Make Decisions",
    publisher: "Harvard Business Review",
    format: "Article",
    url: "https://hbr.org/2026/06/teach-your-ai-how-you-make-decisions",
    published: "2026-06-25",
    publishedLabel: "25 June 2026",
    authors: ["Jen Stave", "Ryan Kurt", "John Winsor"],
    topics: ["Agents", "Operating model"],
    readingTime: "12 min",
    oneLiner:
      "Everyone has access to the same models. The companies scaling agents are the ones that wrote down how their best people decide.",
    summary: [
      "The authors argue that the bottleneck for AI agents is no longer the technology but an organization's ability to make its judgment explicit: risk tolerance, exception handling, escalation thresholds and brand voice that today live in experienced people's heads. Agents cannot absorb norms by observation. They act on what is written down.",
      "Their answer is “judgment infrastructure”. Business units, HR and IT govern agents together as digital labor. Managers become “judgment architects” who codify their expertise, and employees learn to shape the agents acting on their behalf. The first codified use case is slow; later ones compound.",
    ],
    keyNumbers: [
      "At ITA Group, the first six to seven months of codifying expertise were slow; afterwards, software timelines shrank from months to weeks.",
      "A finance controller turned more than a dozen years of expertise into markdown files for his agents; a team of two now covers work that used to need ten people.",
      "At Ramp, every employee learns during onboarding to build their own AI tools rather than act as a “button pusher”.",
    ],
    whyRead: [
      "It contains the most practical method in this library: a moderated panel of practitioners works through real edge cases. Where they agree fast, you have a policy. Where they disagree, you have judgment worth capturing.",
      "It explains why agent pilots fail at scale even when the model is good.",
      "It gives a CIO language for the org-design side of agents: who owns agent behavior, onboarding and retirement.",
    ],
    whoShouldRead: [
      "CIOs and AI leads moving agents from pilot to production",
      "Operations and HR leaders who will co-own digital labor",
      "Domain experts asked to “document their process” for an AI team",
    ],
    readCarefully: [
      "“Teach” here means written guidance and context files, not fine-tuning a model.",
      "The cases are self-reported company stories, not a controlled study.",
      "Jen Stave is the former inaugural director of what is now the HBS AI Institute; she moved to Keystone in May 2026.",
    ],
    author: {
      name: "John Winsor",
      role: "Executive fellow, HBS AI Institute; author of “Open Talent”",
      bio: [
        "A serial founder whose career runs through magazines, advertising and open innovation. He mortgaged his house to buy the bankrupt Women's Sports & Fitness magazine, grew it into a media company, and later founded Victors & Spoils, which a Harvard Business School case describes as the first advertising agency built on crowdsourcing.",
        "By his own account he set a speed record on Kilimanjaro in 1993 and won Harley-Davidson's business with a public tweet to its CMO. At Harvard he helped launch the Laboratory for Innovation Science before joining the institute behind this article.",
      ],
    },
  },
  {
    slug: "hbr-match-ai-strategy-to-organization",
    title: "Match Your AI Strategy to Your Organization's Reality",
    shortTitle: "HBR: Match Your AI Strategy to Your Organization",
    publisher: "Harvard Business Review (January–February 2026 issue)",
    format: "Article",
    url: "https://hbr.org/2026/01/match-your-ai-strategy-to-your-organizations-reality",
    published: "2026-01-01",
    publishedLabel: "January 2026",
    authors: ["Cyril Bouquet", "Christopher J. Wright", "Julian Nolan"],
    topics: ["Strategy & ROI"],
    readingTime: "18 min",
    oneLiner:
      "GM's AI-designed seat bracket was 40% lighter and 20% stronger, and it never made it into production.",
    summary: [
      "The article opens with two 2018 bets. GM used generative design in Autodesk Fusion 360 to create a seat bracket that consolidated eight parts into one, 40% lighter and 20% stronger, but its manufacturing system, built for stamped steel, could not produce it at scale. Apple's metalens work reportedly reached the Face ID system because Apple controlled the whole stack around it.",
      "The authors argue that most AI failures come from a mismatch between ambition and what the value chain, operating model and tech stack can support. Their 2×2 maps value-chain control against technological breadth, giving four strategies (focused differentiation, vertical integration, collaborative ecosystem, platform leadership), each with a typical way to fail.",
    ],
    keyNumbers: [
      "GM bracket: 8 parts became 1, 40% lighter, 20% stronger, never mass-produced.",
      "S&P Global: 42% of companies abandoned most of their AI initiatives, up from 17% a year earlier.",
      "A Writer survey: 31% of employees admit to working against their company's AI strategy.",
      "Named failures by quadrant: Zillow Offers, GE Predix, IBM Watson at MD Anderson, DeepMind and the NHS.",
    ],
    whyRead: [
      "It offers a simple test before you pick use cases: what do you control end to end, and how many technologies must you combine?",
      "The GM story is the cleanest illustration that a better AI output can be worth zero if the organization cannot absorb it.",
      "It is good pre-mortem material, since each quadrant comes with a named failure to check against.",
    ],
    whoShouldRead: [
      "CIOs building a multi-year AI roadmap",
      "Strategy and innovation leaders",
      "Manufacturing and supply-chain executives evaluating AI-designed products",
    ],
    readCarefully: [
      "GM's bracket used algorithmic generative design, not LLM-style generative AI, and GM always presented it as a 3D-printed proof of concept.",
      "Apple has not confirmed the metalens; the evidence is an analyst teardown of the iPhone 17 Pro Max.",
      "Two of the three authors are executives at Iprova, an AI invention company, and featured example P&G is an Iprova client. The article discloses this.",
    ],
    author: {
      name: "Cyril Bouquet",
      role: "Professor of Strategy and Innovation, IMD Business School",
      bio: [
        "Bouquet studies why good ideas die inside organizations. His award-winning PhD became the book “Building Global Mindsets”, and he co-wrote “ALIEN Thinking: The Unconventional Path to Breakthrough Ideas” (2021).",
        "He designed the “mega dive”, a large-group transformation format he has run with 700 senior leaders at Maersk during its shift from shipping to integrated logistics and with the top 650 leaders of France's SNCF. Before IMD he taught strategy at York University's Schulich School of Business in Toronto.",
      ],
    },
  },
  {
    slug: "mit-nanda-genai-divide-2025",
    title: "The GenAI Divide: State of AI in Business 2025",
    shortTitle: "MIT “GenAI Divide” Report (the 95% Study)",
    publisher: "MIT Media Lab, Project NANDA",
    format: "Report",
    url: "https://mlq.ai/media/quarterly%5Fdecks/v0.1%5FState%5Fof%5FAI%5Fin%5FBusiness%5F2025%5FReport.pdf",
    urlNote:
      "The original MIT link now redirects elsewhere; this is a widely used mirror of the PDF.",
    published: "2025-07-01",
    publishedLabel: "July 2025",
    authors: ["Aditya Challapally", "Chris Pease", "Ramesh Raskar", "Pradyumna Chari"],
    topics: ["Strategy & ROI", "Measurement"],
    readingTime: "30 min",
    oneLiner:
      "The source of the famous “95% of GenAI pilots fail” headline, and worth reading for what it actually says.",
    summary: [
      "This preliminary report draws on 52 organizational interviews, 153 survey responses and a review of more than 300 public AI initiatives. It claims that only about 5% of organizations get measurable P&L value from task-specific generative AI tools despite $30–40 billion in enterprise spending, and blames a “learning gap”: most tools don't retain feedback, adapt to context or fit real workflows.",
      "Its more useful findings are less quoted. Workers at more than 90% of surveyed companies use personal AI tools, while only 40% of companies bought an official subscription. Solutions from external partners reached deployment about twice as often as internal builds, and the clearest returns came from back-office work such as cutting outsourcing and agency spend.",
    ],
    keyNumbers: [
      "60% of organizations evaluated task-specific tools, 20% piloted them, 5% reached production with measurable impact.",
      "Among organizations that actually piloted, roughly one in four succeeded.",
      "External partnerships reached deployment about 67% of the time versus about 33% for internal builds (self-reported).",
      "A lawyer at a firm with a $50,000 contract-analysis tool kept using ChatGPT because it “consistently produces better outputs”.",
    ],
    whyRead: [
      "You will be asked about “the MIT 95%”. This is how to answer precisely.",
      "The shadow-AI finding is a ready argument for auditing what employees already use before buying more tools.",
      "The buy-versus-build and back-office ROI sections are directly useful for portfolio decisions.",
    ],
    whoShouldRead: [
      "CIOs fielding board questions about AI failure rates",
      "Procurement leaders deciding between buying and building",
      "Anyone who has quoted the 95% figure",
    ],
    readCarefully: [
      "The 95% refers to all organizations in the sample, most of which never ran a custom pilot. It is not “95% of pilots”.",
      "It is a self-published, non-peer-reviewed preliminary report, and some figures contradict each other inside the PDF.",
      "Critics note that the authors work on agent frameworks of the kind the report recommends.",
    ],
    author: {
      name: "Aditya Challapally",
      role: "Lead author; works on Microsoft Copilot; Stanford Online instructor",
      bio: [
        "Challapally describes his path as a data-science internship at Uber, AI consulting at McKinsey, then Microsoft, where he works on Copilot agent capabilities. He co-teaches Stanford Online's course “Mastering Generative AI for Product Innovation”.",
        "His advice to companies is refreshingly unglamorous: most organizations don't need anything beyond the basics. One irony worth noticing is that his own report places Copilot-style tools in the low-customization, low-learning corner.",
      ],
    },
  },
  {
    slug: "a16z-where-enterprises-adopt-ai",
    title: "Where Enterprises Are Actually Adopting AI",
    shortTitle: "a16z: Where Enterprises Actually Adopt AI",
    publisher: "Andreessen Horowitz (a16z)",
    format: "Article",
    url: "https://a16z.com/where-enterprises-are-actually-adopting-ai/",
    published: "2026-04-08",
    publishedLabel: "8 April 2026",
    authors: ["Kimberly Tan"],
    topics: ["Strategy & ROI", "Agents"],
    readingTime: "12 min",
    oneLiner:
      "Revenue data on where enterprise AI is real: coding first, then legal, customer support and search.",
    summary: [
      "Using private revenue data shared by leading AI startups, a16z finds that 29% of the Fortune 500 and about 19% of the Global 2000 are live, paying customers of a leading AI startup. It is a direct counterpoint to the MIT “95% fail” narrative.",
      "The more interesting argument is why adoption lands where it does. Coding leads because code is text, precise and verifiable, and engineers can adopt tools without cross-department sign-off. Support works because it is already outsourced and measured, with a human fallback. Adoption follows verifiability and low coordination cost, not model capability alone.",
    ],
    keyNumbers: [
      "Startup revenue by use case: coding about $3 billion, legal $500 million, support $400 million, health administration $350 million, search $250 million.",
      "Models beat human lawyers in only 36% of GDPval legal tasks (down from 46%), yet legal is the second-largest revenue category.",
      "The five traits of fast-adopting work: text-based, repetitive, natural human review, limited regulation, verifiable output.",
    ],
    whyRead: [
      "The five-trait test is a practical filter for choosing your first AI use cases.",
      "It explains why customer support is the lowest-risk agent pilot: the worst case is a hand-off to a human.",
      "It pairs well with the MIT NANDA report as a debate about what “adoption” actually means.",
    ],
    whoShouldRead: [
      "CIOs choosing a first portfolio of AI use cases",
      "Customer-support and BPO leaders",
      "Strategy teams sizing enterprise AI markets",
    ],
    readCarefully: [
      "“29%” means paying customers of a startup under a top-down contract, not company-wide use or proven ROI.",
      "The data comes from startups, many of them in a16z's own portfolio, and the sample size isn't disclosed.",
      "It measures something different from the MIT report, so it does not “debunk” it.",
    ],
    author: {
      name: "Kimberly Tan",
      role: "Investing partner, Andreessen Horowitz",
      bio: [
        "Tan joined a16z in 2019 and invests in companies using AI to rethink large legacy markets. She introduced Decagon's two founders to each other at an a16z retreat, wrote the first check and sits on its board. Decagon builds AI customer-support agents, one of the use cases this article highlights.",
        "Before a16z she worked at McKinsey, the World Bank and Goldman Sachs and spent time at a journalism nonprofit in Bosnia and Herzegovina. She graduated from Stanford with distinction and also wrote a16z's thesis “Unbundling the BPO”.",
      ],
    },
  },
  {
    slug: "mit-smr-bcg-emerging-agentic-enterprise",
    title: "The Emerging Agentic Enterprise: How Leaders Must Navigate a New Age of AI",
    shortTitle: "MIT SMR–BCG: The Emerging Agentic Enterprise",
    publisher: "MIT Sloan Management Review and BCG",
    format: "Report",
    url: "https://sloanreview.mit.edu/projects/scholars/the-emerging-agentic-enterprise-how-leaders-must-navigate-a-new-age-of-ai/",
    urlNote: "Full report is paywalled; the summary page is free.",
    published: "2025-11-18",
    publishedLabel: "18 November 2025",
    authors: ["Sam Ransbotham", "David Kiron", "Shervin Khodabandeh", "Sesh Iyer", "Amartya Das"],
    topics: ["Agents", "Operating model", "Governance"],
    readingTime: "35 min",
    oneLiner:
      "Agentic AI is “a tool that learns and a worker that is owned”, and that breaks how companies manage both.",
    summary: [
      "The ninth annual MIT SMR and BCG AI study, based on 2,102 respondents in 116 countries, shows agentic AI spreading faster than earlier waves. Traditional AI took eight years to reach 72% adoption and generative AI three years to reach 70%; agentic AI reached 35% in two years, with another 44% planning to deploy.",
      "Its core argument is managerial. Agents need HR-style supervision and asset-style investment management at the same time, which creates four tensions: scalability versus adaptability, experience versus expediency, supervision versus autonomy, and retrofit versus reengineer. The authors recommend an “HR for agents” function and cross-functional decision rights rather than leaving agents to IT.",
    ],
    keyNumbers: [
      "76% of respondents see agentic AI as more like a coworker than a tool.",
      "Among extensive adopters, 45% expect fewer middle-management layers within three years, versus 30% of companies with no adoption plans.",
      "66% of extensive adopters expect operating-model changes; 58% expect governance changes.",
    ],
    whyRead: [
      "The four tensions make a solid skeleton for an AI strategy document.",
      "The “HR for agents” lifecycle (recruit, onboard, evaluate, retrain, retire) is a concrete governance model you can adapt.",
      "Interviews with Chevron, SAP, ADP, Goodwill, Capital One and Alibaba.com ground the framework in real operations.",
    ],
    whoShouldRead: [
      "CIOs writing an agent strategy",
      "CHROs and COOs who will share ownership of agents",
      "Executives deciding whether to retrofit or redesign processes",
    ],
    readCarefully: [
      "“Adoption” includes piloting. It does not mean 35% run agents in production.",
      "The workforce figures are expectations, not observed cuts.",
      "The study is co-produced with BCG.",
    ],
    author: {
      name: "Sam Ransbotham",
      role: "Professor, Boston College; lead author of the MIT SMR–BCG AI series",
      bio: [
        "Ransbotham trained as a chemical engineer at Georgia Tech, where his first paper, in 1988, simulated penicillin production. He then founded a software company whose clients included UN agencies such as the IAEA, FAO and WHO.",
        "He earned his PhD 18 years after his MBA, with a dissertation on how technology innovation spreads, and did NSF-funded security research before turning to AI. He co-hosts the “Me, Myself, and AI” podcast with BCG's Shervin Khodabandeh and once wrote a chapter titled “Don't Let Artificial Intelligence Supercharge Bad Processes”.",
      ],
    },
  },
  {
    slug: "anthropic-building-effective-agents",
    title: "Building Effective AI Agents",
    shortTitle: "Anthropic: Building Effective AI Agents",
    publisher: "Anthropic (Engineering blog)",
    format: "Guide",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
    urlNote: "The live page has been edited since 2024; quote the edition you mean.",
    published: "2024-12-19",
    publishedLabel: "19 December 2024",
    authors: ["Erik Schluntz", "Barry Zhang"],
    topics: ["Agents"],
    readingTime: "15 min",
    oneLiner:
      "The engineering baseline everyone borrows: start simple, prefer workflows, and invest in tools more than prompts.",
    summary: [
      "Drawing on work with dozens of teams, Anthropic's engineers found that the most successful agent implementations used simple, composable patterns rather than complex frameworks. They distinguish workflows, where LLMs and tools follow predefined code paths, from agents, where the model directs its own process and tool use.",
      "The guide lays out a ladder: a single optimized LLM call with retrieval, then workflow patterns (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer), and only then autonomous agents for open-ended problems. It warns that the right answer “might mean not building agentic systems at all”.",
    ],
    keyNumbers: [
      "While building its SWE-bench coding agent, Anthropic spent more time optimizing tools than the overall prompt.",
      "Switching from relative to absolute file paths made the model use its tool “flawlessly”.",
      "Two domains where agents proved valuable: customer support and coding, both with clear success criteria.",
    ],
    whyRead: [
      "It gives a CIO shared vocabulary with engineers (workflow versus agent) and a defensible default: add complexity only when it measurably improves outcomes.",
      "The section on the agent-computer interface, which says to document tools as you would for a junior developer, is where many teams under-invest.",
      "It is short enough to read in one sitting and is still the reference most agent guides cite.",
    ],
    whoShouldRead: [
      "CIOs and engineering leaders setting agent architecture standards",
      "Product managers scoping “agent” features",
      "Non-technical executives who want to know what an agent actually is",
    ],
    readCarefully: [
      "It does not say “don't build agents”. It says you may not need them.",
      "Benchmark numbers often attached to it come from later Anthropic posts.",
    ],
    author: {
      name: "Erik Schluntz",
      role: "Member of technical staff, Applied AI, Anthropic",
      bio: [
        "Before Anthropic, Schluntz co-founded Cobalt Robotics, which built security robots for offices, and served as its CTO. When integrating with each elevator company's API took around six months, he added a simple arm that pressed elevator buttons using computer vision: deployable in a day, if slower and less reliable.",
        "Earlier he took time off from Harvard to go through Y Combinator, worked on Google[x]'s smart contact lens, and led testing for a Falcon 9 fuel-system software overhaul on SpaceX's flight software test team. At Anthropic he built the SWE-bench agent behind this guide's best anecdote.",
      ],
    },
  },
  {
    slug: "cio-measure-ai-abandonment",
    title: "You're Measuring AI Adoption. You Should Be Measuring AI Abandonment",
    shortTitle: "Measure AI Abandonment, Not Adoption",
    publisher: "CIO.com",
    format: "Column",
    url: "https://www.cio.com/article/4232656/youre-measuring-ai-adoption-you-should-be-measuring-ai-abandonment.html",
    published: "2026-10-09",
    publishedLabel: "9 October 2026",
    authors: ["Nishant Virmani"],
    topics: ["Measurement"],
    readingTime: "8 min",
    oneLiner:
      "Adoption dashboards show who showed up. Cohort retention shows which AI tools people quietly stopped using.",
    summary: [
      "Virmani argues that licenses, activated seats and prompt counts measure distribution, not value, and are usually defined by the vendor. The signal that matters is abandonment: who tried a tool and walked away, how fast, and where the workflow broke.",
      "His method borrows cohort retention from consumer apps: group users by activation month and check how many are still active at weeks 1, 4 and 12. A steep week-one drop points to onboarding or role fit; a slow bleed to week twelve points to workflow friction. At renewal, drop tools nobody adopted, repair decaying ones and concentrate spend on tools that hold their cohort.",
    ],
    keyNumbers: [
      "Worked example: on a 1,000-seat deal, 20% who never adopt plus 20% who drop off means 400 paid licenses nobody uses.",
      "Contract asks: define “active user” before signing and require event-level usage export.",
      "“The correct abandonment target is not zero.” Mandating usage destroys the signal.",
    ],
    whyRead: [
      "It is the most immediately actionable piece here: a retention curve for your three largest AI contracts takes an afternoon.",
      "It gives you a defensible way to cut or expand AI licenses at renewal.",
      "It warns against treating retention as proof of value; pair it with delivery metrics.",
    ],
    whoShouldRead: [
      "CIOs with enterprise AI licenses up for renewal",
      "IT procurement and vendor managers",
      "Owners of internal AI platforms",
    ],
    readCarefully: [
      "The 400-license figure is a hypothetical, not survey data.",
      "The column cites METR's early-2025 finding that experienced developers were 19% slower with AI; METR has since labelled that result out of date.",
      "The “12,000 shadow AI apps” figure comes from a security vendor's own telemetry.",
    ],
    author: {
      name: "Nishant Virmani",
      role: "Staff Technical Program Manager, Google",
      bio: [
        "Virmani has spent more than 15 years in engineering and program leadership across Google, YouTube and Apple. He started at Google in 2012 as a test engineer, moved to Apple, where by his account he managed iOS and macOS releases, and returned to Google in 2018.",
        "His work there has covered Gmail release management, Workspace data governance and AI adoption. This column is his first byline on CIO.com.",
      ],
    },
  },
  {
    slug: "cio-ai-project-cloud-bill",
    title: "I Audited an Award-Winning AI Project. The Case Study Left Out the Cloud Bill",
    shortTitle: "The AI Case Study That Left Out the Cloud Bill",
    publisher: "CIO.com",
    format: "Column",
    url: "https://www.cio.com/article/4232005",
    published: "2026-10-08",
    publishedLabel: "8 October 2026",
    authors: ["Richard Ewing"],
    topics: ["AI economics", "Measurement"],
    readingTime: "9 min",
    oneLiner:
      "An AI workflow cut turnaround by 90% and cost about fifteen times more per document than the clerk it replaced.",
    summary: [
      "Ewing audited a document workflow that had won an industry innovation award. Turnaround on vendor agreements fell by 90% and the vendor published a case study. But during the pilot, compute and model fees were charged to a central innovation fund. Once finance moved those invoices to the business unit, the unit economics turned negative within 60 days.",
      "Manual review cost roughly $0.80 per document; the automated pipeline cost $12–14. Messy real-world scans pushed about 40% of files into an exception queue, where a human needed ten minutes per file, twice the original manual time. The company paid for the cloud bill and the people at once.",
    ],
    keyNumbers: [
      "Cost per document: about $0.80 manually versus $12–14 automated.",
      "About 40% of files fell below the confidence threshold and went to human review.",
      "Each exception took 10 minutes, versus 4–5 minutes for the original manual review.",
      "Gartner, quoted in the piece, expects inference cost per agentic workflow to rise more than fivefold through 2028.",
    ],
    whyRead: [
      "It is a concrete case for measuring cost per completed transaction rather than speed.",
      "It shows how pilot accounting hides the real cost of AI until the project code is closed.",
      "It ends with three questions you can add to every scale-up gate: full cost per transaction, human intervention rate and cost, and whether the economics hold at production volume.",
    ],
    whoShouldRead: [
      "CIOs presenting AI business cases",
      "CFOs and FP&A teams reviewing AI spend",
      "Innovation teams running pilots on central budgets",
    ],
    readCarefully: [
      "It is a single anonymized case written as an opinion column, with identifying details changed.",
      "“90% faster” refers to turnaround on clean files, not total effort.",
    ],
    author: {
      name: "Richard Ewing",
      role: "Founder of Exogram and CareerWin; writes as “The AI Economist”",
      bio: [
        "Ewing positions himself between engineering and finance. In his words, he doesn't manage a backlog, he manages a P&L. He created the Product Debt Index, a 0–100 score that translates technical debt into dollars.",
        "He founded Exogram and CareerWin and, according to his website, is writing a book for O'Reilly.",
      ],
    },
  },
];

export const readingPath: { title: string; intro: string; slugs: string[] }[] = [
  {
    title: "1. Where AI value is (and isn't) showing up",
    intro:
      "The big surveys and the counter-data. Read these to know the numbers your board will quote, and how each one is usually misquoted.",
    slugs: [
      "mckinsey-state-of-ai-2026",
      "bcg-applied-ai-index-2026",
      "mit-nanda-genai-divide-2025",
      "a16z-where-enterprises-adopt-ai",
    ],
  },
  {
    title: "2. Why pilots don't reach the P&L",
    intro:
      "Strategy pieces on the gap between individual productivity and enterprise results, and between a great AI output and an organization that can use it.",
    slugs: ["hbr-ai-experimentation-to-transformation", "hbr-match-ai-strategy-to-organization"],
  },
  {
    title: "3. Agents and the operating model",
    intro:
      "How to govern, staff and architect AI agents: who owns them, how they learn your judgment, and when not to build one at all.",
    slugs: [
      "mit-smr-bcg-emerging-agentic-enterprise",
      "hbr-teach-your-ai-how-you-make-decisions",
      "anthropic-building-effective-agents",
    ],
  },
  {
    title: "4. Metrics you can run next week",
    intro:
      "Two practitioner columns that turn the ideas above into measurements: who quietly stopped using your AI tools, and what one completed transaction really costs.",
    slugs: ["cio-measure-ai-abandonment", "cio-ai-project-cloud-bill"],
  },
];

export const libraryEntries: LibraryEntry[] = readingPath.flatMap((group) =>
  group.slugs.map((slug) => {
    const entry = entries.find((item) => item.slug === slug);
    if (!entry) throw new Error(`Library reading path references unknown slug: ${slug}`);
    return entry;
  }),
);

if (libraryEntries.length !== entries.length) {
  throw new Error("Every library entry must appear exactly once in the reading path");
}

export function getLibraryEntry(slug: string) {
  return libraryEntries.find((entry) => entry.slug === slug);
}

export const libraryFaq = [
  {
    question: "What should a CIO read first to build AI in the company?",
    answer:
      "Start with the two large surveys, McKinsey's State of AI 2026 and BCG's Applied AI Index 2026, to understand where value is and isn't showing up. Then read HBR's piece on the micro-productivity trap for why pilots don't reach the P&L, and Anthropic's Building Effective AI Agents for the engineering baseline. Finish with the two CIO.com columns on abandonment and cloud cost, which turn the ideas into metrics you can run next week.",
  },
  {
    question: "Is the “95% of AI pilots fail” statistic true?",
    answer:
      "It comes from MIT Project NANDA's July 2025 report and is usually misquoted. The 95% refers to all organizations in the sample, most of which never ran a custom pilot, failing to get measurable P&L impact from task-specific generative AI. Among organizations that did pilot, roughly one in four succeeded. The report is preliminary, self-published and based on 52 interviews and 153 survey responses, so treat it as a signal, not a census.",
  },
  {
    question: "How should a company govern AI agents?",
    answer:
      "BCG's Applied AI Index 2026 lists six controls: governed data and memory access, human-in-the-loop for high-risk decisions, testing with shut-off and rollback, clear hand-off interfaces, a named owner for every agent, and ongoing security. Only 5% of companies have all six, and those report three times the agentic value of companies with one. MIT SMR and BCG add an “HR for agents” lifecycle covering onboarding, evaluation and retirement.",
  },
  {
    question: "How do you measure whether an enterprise AI tool is working?",
    answer:
      "Track two things adoption dashboards miss. First, cohort retention: of the people who activated a tool in a given month, how many are still active at weeks 1, 4 and 12. Second, fully loaded cost per completed transaction against the manual baseline, including model fees, compute and the human time spent on exceptions. Speed and seat counts alone can hide a tool that is abandoned or more expensive than the work it replaced.",
  },
];
