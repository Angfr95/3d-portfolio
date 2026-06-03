import { aeropath, algorithms, cvcapture, ultizion } from "../assets";

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
    description:
      "Production e-commerce platform for trading card games. Built solo: 14-module Node.js/TypeScript backend, Redis price-alert system, multilingual React frontend with CI/CD and sub-2s load times.",
    image: ultizion,
    lien: "https://ultizion.com",
  },
  {
    name: "Aeropath",
    description: "Aviation theory training PWA for PPL/LAPL/ATPL. Built solo: Go/Gin API with PostgreSQL, Redis, NATS event streaming, ClickHouse analytics, WebSocket notifications, and full EKS deployment on AWS.",
    image: aeropath,
    lien: "https://aeropath.ultizion.com",
  },
  {
    name: "CV",
    description:
      "Full-Stack Engineer and Independent Consultant with a dual Master's in Audit & Management, specializing in the end-to-end architecture of high-throughput distributed systems and production-ready LLM pipelines.",
    image: cvcapture,
    lien: "/CV_Fernandez_Loic.pdf",
    download: true,
  },
];

export { experiences, portfolio };
