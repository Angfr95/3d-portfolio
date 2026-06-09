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
    name: "Airbnb Clone",
    slug: "airbnb",
    description:
      "Clone de l'interface Airbnb avec calendrier de disponibilité, carte interactive, et filtres de recherche avancés. Reproduction fidèle du design et des interactions.",
    image: airbnb,
    lien: "https://angfr95.github.io/airbnb-clone",
    technologies: ["React", "Next.js", "TailwindCSS", "Mapbox", "Date Picker"],
    github: "https://github.com/Angfr95/airbnb-clone",
    sections: [
      {
        emoji: "🎯",
        titre: "Objectifs du projet",
        contenu: "Reproduire l'interface et les interactions principales d'Airbnb pour maîtriser les techniques de layout avancées, la gestion de calendrier, et l'intégration de cartes interactives. L'accent était mis sur la fidélité du design et la fluidité des animations.",
      },
      {
        emoji: "⚙️",
        titre: "Fonctionnalités principales",
        contenu: "Recherche de logements avec filtres (date, prix, type) • Calendrier de disponibilité interactif • Carte Mapbox avec marqueurs des logements • Galerie d'images avec carrousel • Design responsive fidèle à Airbnb • Animations de transition fluides.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts utilisés",
        contenu: "Next.js avec Server-Side Rendering • TailwindCSS pour le styling utilitaire • Mapbox GL JS pour la carte interactive • React Date Picker pour le calendrier • Composants réutilisables (Card, Header, SearchBar) • Déploiement Vercel.",
      },
      {
        emoji: "🧠",
        titre: "Ce que j'ai appris",
        contenu: "Le Server-Side Rendering avec Next.js • L'intégration de cartes interactives (Mapbox) • Les layouts complexes avec TailwindCSS • La gestion de dates et calendriers en React • Le pixel-perfect design en reproduisant une interface existante.",
      },
    ],
  },
  {
    name: "DevNotes",
    slug: "devnotes",
    description:
      "Application de prise de notes orientée développeur avec coloration syntaxique, catégorisation par langage, et sauvegarde locale. Interface minimaliste et efficace.",
    image: devnotes,
    lien: "https://angfr95.github.io/devnotes",
    technologies: ["React", "JavaScript", "LocalStorage", "CSS3", "CodeMirror"],
    github: "https://github.com/Angfr95/devnotes",
    sections: [
      {
        emoji: "🎯",
        titre: "Objectifs du projet",
        contenu: "Développer un outil de prise de notes pensé pour les développeurs, avec coloration syntaxique et organisation par langage de programmation. L'objectif était de créer un outil utile au quotidien avec une expérience utilisateur fluide.",
      },
      {
        emoji: "⚙️",
        titre: "Fonctionnalités principales",
        contenu: "Éditeur avec coloration syntaxique (JavaScript, Python, HTML, CSS...) • Catégorisation des notes par langage • Sauvegarde automatique en LocalStorage • Copie rapide du code • Interface minimaliste et dark mode • Recherche dans les notes.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts utilisés",
        contenu: "React avec Context API pour la gestion d'état • CodeMirror pour l'éditeur avec coloration syntaxique • LocalStorage pour la persistance des données • CSS Modules pour le styling • Architecture modulaire par composants.",
      },
      {
        emoji: "🧠",
        titre: "Ce que j'ai appris",
        contenu: "L'intégration de bibliothèques d'édition de code (CodeMirror) • La persistance locale avec LocalStorage • La gestion d'état complexe avec Context API • Le design d'interfaces minimalistes et fonctionnelles.",
      },
    ],
  },
  {
    name: "Météo",
    slug: "meteo",
    description:
      "Application météo interactive avec géolocalisation, prévisions sur 7 jours, et interface dynamique selon les conditions météo. Construite avec React et une API météo REST.",
    image: meteo,
    lien: "https://angfr95.github.io/meteo-app",
    technologies: ["React", "JavaScript", "CSS3", "API REST", "Geolocation"],
    github: "https://github.com/Angfr95/meteo-app",
    sections: [
      {
        emoji: "🎯",
        titre: "Objectifs du projet",
        contenu: "Créer une application météo interactive et responsive, avec géolocalisation automatique et affichage dynamique des conditions météorologiques. L'objectif était de maîtriser la consommation d'API REST et les interfaces adaptatives.",
      },
      {
        emoji: "⚙️",
        titre: "Fonctionnalités principales",
        contenu: "Géolocalisation automatique de l'utilisateur • Prévisions sur 7 jours • Recherche de ville • Interface dynamique (fond changeant selon la météo) • Affichage des détails : humidité, vent, pression • Design responsive.",
      },
      {
        emoji: "🧱",
        titre: "Architecture & Concepts utilisés",
        contenu: "React avec Hooks (useState, useEffect) • Consommation d'API REST (OpenWeatherMap) • Geolocation API navigateur • CSS moderne avec dégradés dynamiques • Déploiement GitHub Pages.",
      },
      {
        emoji: "🧠",
        titre: "Ce que j'ai appris",
        contenu: "La gestion des appels API asynchrones avec React • Le geolocation API • Les interfaces adaptatives basées sur les données • Le déploiement sur GitHub Pages • L'optimisation des performances de rendu.",
      },
    ],
  },
];

export { experiences, portfolio };