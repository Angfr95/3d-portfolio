import { aeropath, cvcapture, ultizion } from "../assets";

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
        titre: "Objectifs du projet",
        contenu: "Créer une plateforme e-commerce complète pour les jeux de cartes à collectionner, avec un backend modulaire, une gestion de prix en temps réel via Redis, et un frontend multilingue optimisé pour le SEO. L'objectif était de livrer une solution professionnelle de bout en bout, du design à la mise en production.",
      },
      {
        emoji: "⚙️",
        titre: "Fonctionnalités principales",
        contenu: "Catalogue de produits avec recherche avancée • Panier et tunnel d'achat • Système d'alertes de prix (Redis Pub/Sub) • Interface multilingue (FR/EN) • Dashboard administrateur • CI/CD automatisé • Temps de chargement inférieurs à 2 secondes.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts utilisés",
        contenu: "Backend Node.js/TypeScript modulaire en 14 modules • API REST avec Express • Base de données PostgreSQL avec Prisma ORM • Mise en cache Redis pour les alertes prix • Frontend React avec server-side rendering • Déploiement AWS (EC2, RDS, S3, CloudFront) • Intégration Stripe pour les paiements.",
      },
      {
        emoji: "🧠",
        titre: "Ce que j'ai appris",
        contenu: "L'architecture d'une application e-commerce à grande échelle • L'optimisation des performances (sub-2s load times) • La gestion du cache temps réel avec Redis • Le déploiement multi-services sur AWS • L'importance du CI/CD pour une livraison continue.",
      },
    ],
  },
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
        titre: "Objectifs du projet",
        contenu: "Développer une plateforme d'apprentissage de la théorie aéronautique (PPL, LAPL, ATPL) avec une architecture événementielle performante. L'objectif était de fournir un outil de formation complet avec suivi en temps réel et analytics avancées.",
      },
      {
        emoji: "⚙️",
        titre: "Fonctionnalités principales",
        contenu: "Modules de cours théoriques interactifs • Système de quiz et examens blancs • Suivi de progression en temps réel (WebSocket) • Analytics détaillées des performances (ClickHouse) • Notifications événementielles (NATS JetStream) • Progressive Web App (PWA) pour utilisation hors-ligne.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts utilisés",
        contenu: "API Go/Gin haute performance • Base PostgreSQL pour les données relationnelles • Cache Redis pour les sessions • NATS JetStream pour l'event streaming • Entrepôt de données ClickHouse pour l'analytique • Déploiement sur AWS EKS (Kubernetes) • Monitoring avec Prometheus/Grafana.",
      },
      {
        emoji: "🧠",
        titre: "Ce que j'ai appris",
        contenu: "La conception d'architectures événementielles avec NATS • L'utilisation de Go pour des APIs performantes • L'orchestration Kubernetes sur AWS • La modélisation de données analytiques avec ClickHouse • La gestion du real-time avec WebSockets.",
      },
    ],
  },
  {
    name: "CV",
    slug: "cv",
    description:
      "Full-Stack Engineer and Independent Consultant with a dual Master's in Audit & Management, specializing in the end-to-end architecture of high-throughput distributed systems and production-ready LLM pipelines.",
    image: cvcapture,
    lien: "/CV_Fernandez_Loic.pdf",
    download: true,
    technologies: ["Full-Stack", "Go", "TypeScript", "React", "AWS", "Kubernetes", "PostgreSQL", "LLM"],
    github: "https://github.com/Angfr95",
    sections: [
      {
        emoji: "🎯",
        titre: "Profil professionnel",
        contenu: "Full-Stack Engineer et Consultant Indépendant avec un double Master en Audit & Management. Spécialisé dans l'architecture de systèmes distribués à haut débit et le déploiement de pipelines LLM en production.",
      },
      {
        emoji: "🧱",
        titre: "Compétences clés",
        contenu: "Backend : Go, Node.js, TypeScript, Python • Frontend : React, Next.js, TailwindCSS • Bases de données : PostgreSQL, Redis, ClickHouse • Cloud & DevOps : AWS, Kubernetes, Docker, CI/CD • Messaging : NATS, gRPC, WebSocket • IA : Intégration LLM (Anthropic/OpenAI), RAG pipelines.",
      },
      {
        emoji: "⚙️",
        titre: "Domaines d'expertise",
        contenu: "Architecture de systèmes distribués • Event-driven architectures • Pipelines LLM en production • Sécurité applicative (blackbox/whitebox) • Plateformes e-commerce • Formation et ed-tech.",
      },
      {
        emoji: "🧠",
        titre: "Philosophie de travail",
        contenu: "J'accorde une importance particulière à la qualité du code, à la documentation et aux tests. Chaque projet est une occasion d'apprendre et d'améliorer mes compétences. Je crois en une approche pragmatique : choisir le bon outil pour le bon problème, sans sur-ingénierie.",
      },
    ],
  },
];

export { experiences, portfolio };