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
    year: 2024,
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
    year: 2024,
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
    year: 2024,
    image: "/images/sat-navigator.png"
  },
  {
    id: "uae-property-ai",
    title: "UAE Property AI Bot",
    description: "AI-powered real estate assistant for UAE property market",
    longDescription: "Intelligent Telegram bot for searching and analyzing UAE real estate. Integrates with Google BigQuery for property data, uses OpenAI for natural language understanding, and provides comprehensive property information including developers, projects, transactions, and rental contracts. Features AI-powered search, comprehensive analytics, developer portfolios, investment intelligence, and price trends.",
    category: "AI Bot",
    techStack: ["n8n Workflows", "Google BigQuery", "OpenAI GPT-4", "Telegram Bot API", "Python", "Next.js"],
    features: [
      "Natural language property search",
      "BigQuery data integration",
      "Developer and project information",
      "Transaction history analysis",
      "Rental contract data",
      "AI-powered query routing",
      "Investment intelligence",
      "Price trends analysis"
    ],
    status: "live",
    url: "https://uae-property-ai-bot.vercel.app",
    year: 2024,
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
    year: 2024,
    image: "/images/surfacecheck.png"
  },
  {
    id: "webmorp-art",
    title: "webmorp.art",
    description: "Fast and affordable website transformation service",
    longDescription: "Professional website transformation service delivering custom websites in 24 hours for $100. Features curated templates (Minimalist Apple-esque, Tech Noir, High-Fashion Editorial), pure HTML/CSS output with zero maintenance, and SEO optimization.",
    category: "Service",
    techStack: ["HTML", "CSS", "Design", "SEO"],
    features: [
      "24-hour delivery",
      "Flat fee: $100",
      "Professional design templates",
      "Pure HTML/CSS (no maintenance)",
      "SEO optimized",
      "Responsive design"
    ],
    status: "live",
    url: "https://webmorp.art",
    year: 2024,
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
    year: 2024,
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
    year: 2024,
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
