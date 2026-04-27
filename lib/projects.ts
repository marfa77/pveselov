export interface Project {
  id: string;
  title: string;
  description: string;
  /** One line: who it's for / what problem — used for "where to go next" on cards */
  audience?: string;
  longDescription: string;
  category: string;
  techStack: string[];
  features: string[];
  status: "live" | "development" | "completed" | "coming";
  url?: string;
  github?: string;
  image?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "pixid-studio",
    title: "PixID Studio",
    description: "Passport & visa photo compliance tool",
    audience: "For people whose applications get rejected due to photo issues.",
    url: "https://pixid.studio",
    longDescription: "Professional online service for creating compliant ID and visa photos. Features AI-powered background removal, automatic face detection and alignment, privacy-safe local processing, and 100% official size guarantee. Supports 150+ country formats including US, UK, Canada, Australia, UAE, and Schengen countries.",
    category: "SaaS",
    techStack: ["TypeScript", "TensorFlow.js", "Computer Vision", "Express.js", "AI Background Removal"],
    features: [
      "AI-powered background removal",
      "150+ country formats supported",
      "Privacy-safe local processing",
      "Official size guarantee",
      "Face detection and alignment",
      "Instant processing"
    ],
    status: "live",
    year: 2025,
    image: "/images/pixid-studio.png"
  },
  {
    id: "ciple-a2",
    title: "Prep2Go",
    description: "Citizenship exam preparation — Portugal, France, Spain, Italy",
    audience: "For people preparing for language/citizenship tests (CIPLE A2, TCF, DELE, CILS, etc.).",
    url: "https://www.prep2go.study",
    longDescription: "Learning platform for citizenship and language exams: Portugal (CIPLE A2), France (TCF), Spain (DELE), Italy (CILS). Multi-modal learning with speech-to-text (Whisper), image analysis, Anki integration, and personalized paths. Built with Next.js 14, Supabase, and AI-powered content generation.",
    category: "EdTech",
    techStack: ["Next.js 14", "TypeScript", "Supabase", "OpenRouter API", "Whisper", "Anki Integration", "Tailwind CSS"],
    features: [
      "Multi-modal learning (text, audio, images)",
      "Speech-to-text with Whisper",
      "Anki card integration",
      "Personalized learning paths",
      "Progress tracking",
      "AI-powered content generation"
    ],
    status: "live",
    year: 2025,
    image: "/images/ciple-a2.png"
  },
  {
    id: "prep2go-app",
    title: "Prep2Go: Exam Flashcards",
    description: "iOS app — language exams & citizenship tests (CIPLE, DELE, DELF, Goethe, NT2, Norskprøve, CELI, etc.)",
    audience: "For people preparing for residency and citizenship: language exams and official citizenship tests (Germany, France, US, UK, Canada, Australia). Plus survival guides (UAE, Saudi, Singapore, South Africa, USA).",
    url: "https://apps.apple.com/ae/app/prep2go-exam-flashcards/id6759856853",
    longDescription: "iPhone app for language and citizenship exam prep. Spaced repetition, native speaker audio, real images, official exam-style questions. Language decks: Portuguese A2 (CIPLE), Spanish (DELE), French (DELF/TCF), German (Goethe/telc/ÖSD), Italian (CELI/CILS/PLIDA), Dutch (Inburgering/NT2), Danish (Prove i Dansk), Norwegian (Norskprøve). Citizenship tests: Germany, France, US, UK, Canada, Australia. Survival guides: UAE, Saudi Arabia, Singapore, South Africa, Portugal, USA, Thailand. Free tier with in-app subscription. Developer: Pavel Veselov.",
    category: "EdTech",
    techStack: ["iOS", "Swift", "Spaced Repetition", "In-App Purchases", "Native Audio"],
    features: [
      "Spaced repetition (science-backed)",
      "Language exams: CIPLE, DELE, DELF, Goethe, NT2, CELI, Danish, Norwegian",
      "Citizenship tests: Germany, France, US, UK, Canada, Australia",
      "Survival guides: UAE, Saudi, Singapore, South Africa, Portugal, USA",
      "Native speaker audio & exam-style questions",
      "Daily streak, XP, achievements, study heatmap"
    ],
    status: "live",
    year: 2025,
    image: "/images/ciple-a2.png"
  },
  {
    id: "sat-navigator",
    title: "SAT Navigator",
    description: "Exam-agnostic test preparation platform with adaptive learning",
    longDescription: "MVP web service for SAT exam preparation with exam-agnostic architecture. Features PDF upload and parsing, personalized study plans, task management, theory help, and progress tracking. Built with Next.js 14, designed to support multiple exams (SAT, GMAT, ACT, CAT4) through adapter pattern.",
    category: "EdTech",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "PDF Parsing", "Exam Adapters"],
    features: [
      "Exam-agnostic architecture",
      "PDF upload and parsing",
      "Personalized study plans",
      "Task management system",
      "Theory help and explanations",
      "Progress tracking"
    ],
    status: "coming",
    year: 2025,
    image: "/images/sat-navigator.png"
  },
  {
    id: "uae-property-ai",
    title: "UAE Property AI",
    description: "DLD-backed Dubai property due diligence for foreign investors",
    audience: "For investors who need transaction-based price, yield, liquidity, and red-flag analysis before buying Dubai property.",
    longDescription: "Dubai property analysis product that helps foreign investors and portfolio buyers check prices, yields, liquidity, developer track record, and red flags before wiring money. Uses Dubai Land Department registered transaction data rather than broker listings, with AI-generated Buy/Conditional/Pass-style verdicts, Telegram workflow, Pro reports, PDFs, and supporting methodology content.",
    category: "PropTech",
    techStack: ["Next.js", "Telegram Bot API", "AI Analysis", "DLD Data", "PDF Reports", "SEO Content"],
    features: [
      "700+ Dubai projects indexed",
      "DLD registered transaction analysis",
      "Buy / Conditional / Pass verdicts",
      "Red and green flag reports",
      "Yield and operational cost checks",
      "Telegram Stars monetization",
      "Investor and broker PDF reports",
      "Multilingual SEO methodology guides"
    ],
    status: "live",
    url: "https://www.uaeproperty.vip/",
    year: 2025,
    image: "/images/uae-property.png"
  },
  {
    id: "surfacecheck",
    title: "SurfaceCheck",
    description: "Chrome extension for website exposure, SEO, and performance analysis",
    longDescription: "Chrome Extension (Manifest V3) for read-only analysis of website exposure, SEO, and performance metrics. Performs 100+ checks across exposure signals, SEO optimization, and performance hints. Features free and pro versions with detailed PDF reports.",
    category: "Browser Extension",
    techStack: ["Chrome Extension", "Manifest V3", "JavaScript", "DOM Analysis", "Performance API"],
    features: [
      "100+ automated checks",
      "Public Exposure Score (0-100)",
      "SEO analysis",
      "Performance hints",
      "Security checks",
      "PDF report export"
    ],
    status: "live",
    url: "https://chrome.google.com/webstore",
    year: 2025,
    image: "/images/surfacecheck.png"
  },
  {
    id: "webmorp-art",
    title: "OGKit",
    description: "Crypto-native Open Graph image API for AI-built sites",
    audience: "For AI-assisted developers and indie SaaS teams that need production-ready social preview cards without maintaining custom OG routes.",
    longDescription: "Hosted Open Graph image API that generates dynamic 1200x630 PNG social preview cards from URL parameters. Built for AI-assisted developers, Next.js sites, SaaS landing pages, blogs, docs, and product launches, with a no-login playground, signed production URLs, API keys, quotas, domain allowlists, and crypto-native checkout.",
    category: "Developer Tool",
    techStack: ["Open Graph Images", "API", "Next.js", "Crypto Checkout", "Signed URLs", "Developer Docs"],
    features: [
      "Dynamic 1200x630 PNG generation",
      "No-login playground",
      "Article, product, and code templates",
      "Signed production URLs",
      "Domain allowlists",
      "API keys and monthly quotas",
      "Crypto-native checkout",
      "Cursor-friendly documentation"
    ],
    status: "live",
    url: "https://webmorp.art",
    year: 2025,
    image: "/images/webmorp.png"
  },
  {
    id: "bench-energy",
    title: "BenchEnergy",
    description: "Closed tender platform for bulk commodity and chemical traders + coal industry analytics",
    longDescription: "Comprehensive platform combining closed freight tender system for bulk commodity and chemical traders with automated coal industry analytics. The tender platform enables companies to run closed tenders for freight services with invitation-only broker access, structured offer submission, immutable audit trail, and full management visibility. The analytics system features AI-powered news search through Google Search and Gemini AI, automated analytical post generation with BenchEnergy expert opinions, special freight posts (every 6th post), Telegram channel publishing (@benchenergy), Notion integration as single source of truth, and automatic GitHub Pages synchronization. Built with React, NestJS, PostgreSQL, Python, Next.js, Notion API, and AI models (Claude 3.5 Sonnet, Gemini Flash). Includes RSS feed generation, SEO optimization, and automated content workflows.",
    category: "B2B SaaS",
    techStack: ["React 18", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Python", "Next.js 14", "Notion API", "Google Search API", "Gemini AI", "Claude AI", "Telegram Bot API", "GitHub Actions", "RSS"],
    features: [
      "Closed tender system (invitation-only)",
      "Structured offer submission for freight services",
      "Immutable audit trail",
      "Role-based access control",
      "Management visibility dashboard",
      "AI-powered coal industry news search",
      "Automated analytical post generation",
      "Expert opinion integration (BenchEnergy View)",
      "Telegram channel automation (@benchenergy)",
      "Notion as single source of truth",
      "RSS feed generation",
      "Special freight posts automation"
    ],
    status: "live",
    url: "https://bench.energy",
    year: 2025,
    image: "/images/bench-energy.png"
  },
  {
    id: "trading-bot",
    title: "Binance Trading Bot",
    description: "Semi-automated cryptocurrency trading bot with trend pullback strategy",
    longDescription: "Advanced trading bot for Binance with trend pullback sniper strategy. Features real-time market data dashboard, technical indicators (ADX, EMA, RSI, ATR), automated risk management, Telegram integration for trade confirmations, and comprehensive reporting. Built with Next.js 14, TypeScript, and Binance API integration. Includes kill rules, correlation protection, and position synchronization.",
    category: "Trading",
    techStack: ["Next.js 14", "TypeScript", "Binance API", "Telegram Bot API", "SQLite", "Technical Indicators", "Tailwind CSS", "Shadcn/UI"],
    features: [
      "Trend pullback sniper strategy",
      "Real-time market data dashboard",
      "Technical indicators (ADX, EMA, RSI, ATR)",
      "Automated risk management",
      "Telegram integration for confirmations",
      "Daily and weekly reports",
      "Kill rules and safety features",
      "Position synchronization"
    ],
    status: "live",
    url: "https://t.me/trendpullbacksniper",
    year: 2025,
    image: "/images/trading-bot.png"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(p => p.category === category);
}

export const categories = Array.from(new Set(projects.map(p => p.category)));
