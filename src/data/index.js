import { aeropath, airbnb, clairon, cvcapture, devnotes, finder, meteo, openclaw, ultizion } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "cv",
    title: "CV",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Full-Stack Engineer",
    company_name: "AeroPath — Aviation Association",
    date: "2024 - Present",
    details: [
      "Built an event-driven aviation learning platform in <span style='color: white;'>Go</span> for PPL/ATPL theory training.",
      "Designed a multi-store architecture — NATS JetStream, gRPC, ClickHouse, Kubernetes, Prometheus — handling real-time exam analytics and spaced-repetition at scale.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company_name: "FINDER — Private Company",
    date: "2023 - Present",
    details: [
      "Developed an automated web security auditor covering <span style='color: white;'>30+ blackbox</span> and <span style='color: white;'>11+ whitebox</span> modules.",
      "Integrated an <span style='color: white;'>LLM triage pipeline</span> (Anthropic/OpenAI) for intelligent vulnerability scoring and agentic scan orchestration.",
    ],
  },
  {
    title: "Full-Stack Engineer & Open Source Contributor",
    company_name: "Freelance",
    date: "2020 - Present",
    details: [
      "Architected and shipped <span style='color: white;'>Ultizion</span>, a production e-commerce platform (Node.js, TypeScript, PostgreSQL, Redis, React, AWS).",
      "Contributing bug fixes and features to <span style='color: white;'>OpenClaw</span>, an active open-source TypeScript codebase with 80k+ stars.",
    ],
  },
  {
    title: "Co-Founder & E-commerce Operator",
    company_name: "Ultizion",
    date: "2021 - Present",
    details: [
      "Approved <span style='color: white;'>Amazon seller</span> and <span style='color: white;'>TikTok Shop partner</span> in the Games & Toys category.",
      "Managed <span style='color: white;'>inventory and cash flow</span> across 500+ SKUs in collaboration with business partner.",
      "Collaborated to design and execute <span style='color: white;'>multi-channel marketing strategies</span> across TikTok and Amazon.",
    ],
  },
  {
    title: "Full-Stack Software Engineer (Contractor)",
    company_name: "FMR Boutique de Carte",
    date: "2021 - 2024",
    details: [
      "<span style='color: white;'>Stock Synchronization:</span> Developed straightforward automation scripts in Node.js to track inventory levels and push automated stock updates between the central store database and marketplace endpoints (Amazon, eBay).",
      "<span style='color: white;'>Data Ingestion:</span> Wrote lightweight TypeScript functions to fetch daily product counts, parsing basic JSON payloads to ensure stock alignment across platforms.",
      "<span style='color: white;'>Dashboard Maintenance:</span> Handled simple front-end bug fixes, layout adjustments, and product table updates in React for the internal merchant panel.",
      "<span style='color: white;'>Remote Workflows:</span> Maintained daily asynchronous communication via Slack, updated task status in Asana, and pushed hotfixes through GitHub Actions.",
    ],
  },
  {
    title: "External Auditor",
    company_name: "MoMa — Montpellier Management",
    date: "2019 - 2021",
    details: [
      "Double Master's in <span style='color: white;'>Audit & Internal Control</span> and <span style='color: white;'>Research & Management</span> — accounting, legal compliance, risk management.",
      "Internship at <span style='color: white;'>Diocèse de Montpellier</span> — practical audit and accounting experience in a regulated environment.",
    ],
  },
];

const portfolio = [
  {
    name: "Aeropath",
    slug: "aeropath",
    description: "Aviation theory training PWA for PPL/LAPL/ATPL. Built solo: Go/Gin API with PostgreSQL, Redis, NATS event streaming, ClickHouse analytics, WebSocket notifications, and full EKS deployment on AWS.",
    image: aeropath,
    lien: "https://aeropath.ultizion.com",
    technologies: ["Go", "Gin", "PostgreSQL", "Redis", "NATS", "ClickHouse", "Kubernetes", "WebSocket", "AWS"],
    github: "https://github.com/Angfr95",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Build an aviation theory learning platform (PPL, LAPL, ATPL) with a high-performance event-driven architecture. The goal was to deliver a complete training tool with real-time progress tracking and advanced analytics.",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "Interactive theory course modules • Quiz and mock exam system • Real-time progress tracking (WebSocket) • Detailed performance analytics (ClickHouse) • Event-driven notifications (NATS JetStream) • Progressive Web App for offline usage.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "High-performance Go/Gin API • PostgreSQL for relational data • Redis cache for sessions • NATS JetStream for event streaming • ClickHouse data warehouse for analytics • Deployed on AWS EKS (Kubernetes) • Monitoring with Prometheus/Grafana.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "A Service Worker bug that silently broke the PWA cache forced me to deeply understand the install and activation lifecycle — one missing resource at install time, and the entire offline strategy collapses. • Debugging GHCR auth from EKS made me dive into how AWS Security Groups interact with Kubernetes pull secrets — a problem invisible in local dev where everything just talks over localhost. • Choosing NATS JetStream over Kafka meant giving up the ecosystem for operational independence: no ZooKeeper, no heavy ops — the right tech is the one you can debug solo at 2 AM.",
      },
    ],
  },
  {
    name: "OpenClaw",
    slug: "openclaw",
    description:
      "Active open-source contributor to OpenClaw, a TypeScript codebase with 80k+ stars. Fixing bugs, adding features, and improving the architecture of this widely-used project.",
    image: openclaw,
    lien: "https://github.com/Angfr95?tab=repositories&q=openclaw",
    technologies: ["TypeScript", "Open Source", "Git", "GitHub", "Code Review"],
    github: "https://github.com/Angfr95",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Contribute meaningfully to a large-scale open-source TypeScript project with 80k+ GitHub stars. The goal is to fix real bugs, implement requested features, and improve the codebase's overall quality through rigorous code reviews and architectural discussions.",
      },
      {
        emoji: "⚙️",
        titre: "Core Contributions",
        contenu: "Bug fixes across the core codebase • Feature implementations addressing community issues • Code review participation • TypeScript type improvements • Documentation updates • Performance optimizations.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "Large-scale TypeScript monorepo • Structured contribution workflow (fork, branch, PR, review) • Extensive test suite • CI/CD pipelines • Semantic versioning • Active community governance.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Contributing to a project with 80k+ stars taught me that writing clean code isn't the hard part — it's learning to defend your design decisions in a public PR review while 50 people watch. • I learned that the difference between a good contributor and a great one isn't technical skill — it's reading the room: understanding the maintainers' vision, respecting the existing style, and knowing when a new feature doesn't belong in the core. • Debugging a TypeScript issue in a codebase this size forced me to read the source code of libraries I previously treated as black boxes — the type error wasn't in my code, it was in a DefinitelyTyped definition I had the audacity to question.",
      },
    ],
  },
  {
    name: "Ultizion",
    slug: "ultizion",
    description:
      "Production e-commerce platform for trading card games. Built solo: 14-module Node.js/TypeScript backend, Redis price-alert system, multilingual React frontend with CI/CD and sub-2s load times.",
    image: ultizion,
    lien: "https://ultizion.com",
    technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "Redis", "AWS", "CI/CD", "REST API"],
    github: "https://github.com/Angfr95",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Build a full e-commerce platform for trading card games, with a modular backend, real-time Redis price alerts, and a multilingual SEO-optimized frontend. The goal was to deliver a professional end-to-end solution, from design to production deployment.",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "Product catalog with advanced search • Shopping cart and checkout flow • Real-time price alert system (Redis Pub/Sub) • Multilingual interface (FR/EN) • Admin dashboard • Automated CI/CD • Sub-2s page load times.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "Modular Node.js/TypeScript backend (14 modules) • REST API with Express • PostgreSQL with Prisma ORM • Redis caching layer for price alerts • React frontend with server-side rendering • AWS deployment (EC2, RDS, S3, CloudFront) • Stripe payment integration.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Managing 500+ SKUs in production taught me that perfect PostgreSQL indexes in local collapse when 50 real users filter the catalog simultaneously — production profiling is nothing like running EXPLAIN ANALYZE on a test dataset. • The Redis Pub/Sub system worked flawlessly in dev, but in production messages vanished without a trace — Redis persists nothing by default, a detail that changes everything when a missed price alert is a lost sale. • CI/CD didn't just teach me to deploy faster: I learned that automating a pipeline without solid tests means you're just shipping bugs quicker. The real value of CI/CD is the rigor it forces before the push.",
      },
    ],
  },
  {
    name: "FINDER",
    slug: "finder",
    description:
      "Automated web security auditor covering 30+ blackbox and 11+ whitebox modules. Built solo in Python: asynchronous scan engine, SSRF multi-cloud detection, OOB callback server, LLM triage pipeline, and professional PDF reporting. No cloud dependencies.",
    image: finder,
    lien: "https://github.com/Angfr95?tab=repositories&q=finder",
    technologies: ["Python", "Asyncio", "LLM", "Docker", "Nuclei", "PDF", "OOB", "Auth", "NLP"],
    github: "https://github.com/Angfr95",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Build a comprehensive, standalone web security auditor that requires no cloud SDKs or API keys to function. The goal was to create a professional tool capable of both live blackbox scanning of web applications and whitebox source code audits, with an AI-powered LLM triage pipeline for intelligent vulnerability scoring.",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "30+ blackbox modules: WAF detection, SQLi (error/blind/OOB), SSRF (10 cloud providers), XXE, SSTI, JWT, GraphQL, CORS, prototype pollution, open redirect, path traversal, WebSocket injection • 11+ whitebox modules: static analysis, dependency CVEs, IDOR detection, race conditions, secret leaks, LLM code review • Asynchronous scan engine with rate limiting and jitter • OOB callback server (HTTP + DNS) for blind injection confirmation • Professional PDF report generation • Web UI built-in.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "Python async/await with aiohttp for non-blocking HTTP scanning • Modular plugin architecture (blackbox/, whitebox/, llm/, nuclei/) • SSRF detection across AWS, GCP, Azure, DigitalOcean, OVH, Hetzner, Alibaba, Oracle — no SDK dependencies • LLM triage pipeline using Anthropic/OpenAI for intelligent vulnerability scoring and agentic scan orchestration • OOB server handling both DNS and HTTP callbacks for blind injection confirmation • Docker deployment • Web UI with real-time scan progress.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Building an async security scanner taught me that raw speed is dangerous — without rate limiting and jitter, you're not just polite, you're invisible. A scanner that hits too fast gets WAF-blocked in 3 seconds. • The OOB callback server was the hardest technical challenge: I had to run a DNS server that listens for specific query patterns, correlate them back to scan sessions, and distinguish legitimate callbacks from background noise — all without relying on any cloud infrastructure. • The LLM triage pipeline was deceptively complex: the first version scored every finding independently, ignoring context — a reflected XSS in a 404 page and a stored XSS in the admin panel got the same score. Teaching the LLM to understand exploitability context was more valuable than any feature I shipped.",
      },
    ],
  },
  {
    name: "Airbnb Clone",
    slug: "airbnb",
    description:
      "Airbnb UI clone with availability calendar, interactive map, and advanced search filters. Faithful reproduction of the design and interactions.",
    image: airbnb,
    lien: "https://angfr95.github.io/airbnb-clone",
    technologies: ["React", "Next.js", "TailwindCSS", "Mapbox", "Date Picker"],
    github: "https://github.com/Angfr95/airbnb-clone",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Replicate Airbnb's interface and core interactions to master advanced layout techniques, calendar management, and interactive map integration. The focus was on design fidelity and smooth animations.",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "Property search with filters (date, price, type) • Interactive availability calendar • Mapbox map with property markers • Image gallery with carousel • Pixel-perfect responsive design faithful to Airbnb • Smooth transition animations.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "Next.js with Server-Side Rendering • TailwindCSS for utility-first styling • Mapbox GL JS for interactive maps • React Date Picker for the calendar • Reusable components (Card, Header, SearchBar) • GCP deployment (Cloud Run).",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Recreating Airbnb's UI pixel-perfect taught me that the real difficulty in frontend isn't the code — it's obsessive attention to detail: 2px of wrong spacing and the entire visual credibility evaporates. • Integrating Mapbox taught me to read external API docs cover to cover — half my bugs came from parameters I skimmed over, thinking I understood them.",
      },
    ],
  },
  {
    name: "Clairon",
    slug: "clairon",
    description:
      "AI-powered demo for a job application: FastAPI backend with DeepSeek LLM and SerpAPI (Google News) to fetch and summarize the latest news about political figures from the last 48 hours. Rejects queries about non-political figures.",
    image: clairon,
    lien: "https://github.com/Angfr95?tab=repositories&q=clairon",
    technologies: ["FastAPI", "Python", "DeepSeek", "SerpAPI", "React", "TypeScript", "TailwindCSS", "Docker"],
    github: "https://github.com/Angfr95",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Build a demo for a job application that leverages AI to retrieve and summarize information about political figures from the last 48 hours. The system must verify if the queried entity is a legitimate political figure via DeepSeek LLM, reject irrelevant queries, and fetch real-time news via SerpAPI (Google News).",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "AI-powered validation — DeepSeek LLM determines if the queried person is a political figure • Real-time news retrieval from SerpAPI/Google News (last 2 days) • LLM-based summarization with source citations • Clean React + TypeScript frontend with TailwindCSS • Dockerized full-stack deployment • Async API with FastAPI and aiohttp.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "Backend: FastAPI (Python) with async endpoints • LLM: DeepSeek API (deepseek-chat) for query classification and summarization • News: SerpAPI (Google News engine) for real-time article retrieval • Prompt engineering for political figure detection and rejection logic • Frontend: React 19 + TypeScript + Vite + TailwindCSS • Docker Compose for full-stack orchestration • Async HTTP with aiohttp for non-blocking API calls.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Building an AI agent that decides what to reject vs accept taught me that prompt engineering is fragile — the first version of the political figure filter accepted 'Emmanuel Macron' but also 'Emmanuel Macron's dog' because I forgot to constrain the reasoning scope. • SerpAPI's Google News results are wildly inconsistent — same query at 9 AM vs 3 PM yields completely different articles, which means the system's output changes hour to hour. • FastAPI's async model with aiohttp was elegant, but chaining DeepSeek (120s timeout) after SerpAPI (30s timeout) meant the frontend had to handle a 2.5-minute worst-case wait — a UX problem that has nothing to do with code quality.",
      },
    ],
  },
  {
    name: "DevNotes",
    slug: "devnotes",
    description:
      "Mini projet : note-taking app avec syntax highlighting, local storage et organisation par langage.",
    image: devnotes,
    lien: "https://angfr95.github.io/devnotes",
    technologies: ["React", "JavaScript", "LocalStorage", "CSS3", "CodeMirror"],
    github: "https://github.com/Angfr95/devnotes",
    sections: [
      {
        emoji: "📝",
        titre: "Mini Project",
        contenu: "A simple note-taking app for developers built with React, CodeMirror for syntax highlighting, and LocalStorage for persistence. One of my first React projects.",
      },
    ],
  },
  {
    name: "Météo",
    slug: "meteo",
    description:
      "Mini projet : app météo interactive avec géolocalisation et fond dynamique.",
    image: meteo,
    lien: "https://angfr95.github.io/meteo-app",
    technologies: ["React", "JavaScript", "CSS3", "API REST", "Geolocation"],
    github: "https://github.com/Angfr95/meteo-app",
    sections: [
      {
        emoji: "📝",
        titre: "Mini Project",
        contenu: "A simple weather app consuming OpenWeatherMap API with automatic geolocation and dynamic backgrounds. One of my first React projects.",
      },
    ],
  },
];

export { experiences, portfolio };