import { aeropath, airbnb, cvcapture, devnotes, meteo, ultizion } from "../assets";

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
        contenu: "Next.js with Server-Side Rendering • TailwindCSS for utility-first styling • Mapbox GL JS for interactive maps • React Date Picker for the calendar • Reusable components (Card, Header, SearchBar) • Vercel deployment.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Recreating Airbnb's UI pixel-perfect taught me that the real difficulty in frontend isn't the code — it's obsessive attention to detail: 2px of wrong spacing and the entire visual credibility evaporates. • Integrating Mapbox taught me to read external API docs cover to cover — half my bugs came from parameters I skimmed over, thinking I understood them.",
      },
    ],
  },
  {
    name: "DevNotes",
    slug: "devnotes",
    description:
      "Developer-oriented note-taking app with syntax highlighting, language-based categorization, and local storage. Minimalist and efficient interface.",
    image: devnotes,
    lien: "https://angfr95.github.io/devnotes",
    technologies: ["React", "JavaScript", "LocalStorage", "CSS3", "CodeMirror"],
    github: "https://github.com/Angfr95/devnotes",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Build a note-taking tool designed for developers, with syntax highlighting and organization by programming language. The goal was to create a genuinely useful daily tool with a smooth user experience.",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "Code editor with syntax highlighting (JavaScript, Python, HTML, CSS...) • Notes categorized by language • Auto-save to LocalStorage • Quick code copy • Minimalist dark-mode interface • Full-text search across notes.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "React with Context API for state management • CodeMirror for the syntax-highlighted editor • LocalStorage for data persistence • CSS Modules for styling • Modular component architecture.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "Integrating CodeMirror showed me that using a library is one thing, understanding its internal model is another — I spent more time debugging state conflicts between React and CodeMirror than implementing the features themselves. • LocalStorage persistence seems simple until the user hits the 5 MB limit — I discovered the browser silently evicts your data without warning, and a JSON export fallback isn't an option, it's an obligation.",
      },
    ],
  },
  {
    name: "Météo",
    slug: "meteo",
    description:
      "Interactive weather",
    image: meteo,
    lien: "https://angfr95.github.io/meteo-app",
    technologies: ["React", "JavaScript", "CSS3", "API REST", "Geolocation"],
    github: "https://github.com/Angfr95/meteo-app",
    sections: [
      {
        emoji: "🎯",
        titre: "Project Goals",
        contenu: "Create an interactive, responsive weather app with automatic geolocation and dynamic weather-based UI. The goal was to master REST API consumption and adaptive interfaces.",
      },
      {
        emoji: "⚙️",
        titre: "Core Features",
        contenu: "Automatic user geolocation • 7-day weather forecast • City search • Dynamic background that changes with weather conditions • Detailed display: humidity, wind, pressure • Fully responsive design.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts",
        contenu: "React with Hooks (useState, useEffect) • REST API consumption (OpenWeatherMap) • Browser Geolocation API • Modern CSS with dynamic gradients • GitHub Pages deployment.",
      },
      {
        emoji: "🧠",
        titre: "What I learned",
        contenu: "The weather API taught me async the hard way: a call that times out after 30 seconds is a user closing the tab. Handling a promise means handling its failure too — skeleton UI isn't cosmetic, it's the bare minimum to keep the user engaged. • The browser geolocation failing because the user said 'no' forced me to design a fallback that doesn't punish people for protecting their privacy — obvious in hindsight, but easy to forget when coding locally.",
      },
    ],
  },
];

export { experiences, portfolio };