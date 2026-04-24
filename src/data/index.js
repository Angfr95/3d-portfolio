import { algorithms, cvcapture, ultizion } from "../assets";

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
    title: "Developer Full Stack",
    company_name: "Self-taught",
    date: "2022 - present",
    details: [
      "Architected and shipped <span style='color: white;'>Ultizion</span>, a production e-commerce platform (Node.js, TypeScript, PostgreSQL, React).",
      "Contributing bug fixes to <span style='color: white;'>OpenClaw</span>, an active open-source TypeScript codebase.",
    ],
  },
  {
    title: "Self Employment",
    company_name: "Myself",
    date: "2021 - present",
    details: [
      "Approved <span style='color: white;'>Amazon</span> seller and <span style='color: white;'>TikTok Shop</span> partner in the <span style='color: white;'>Games & Toys</span> category.",
      "Identified new product opportunities and managed <span style='color: white;'>inventory and cash flow</span>.",
      "<span style='color: white;'>Collaborated with a team</span> to design and execute marketing strategies.",
    ],
  },
  {
    title: "External Auditor",
    company_name: "MoMa",
    date: "2019 - 2021",
    details: [
      "Student at <span style='color: white;'>Montpellier Management</span> learning accounting, Legal Compliance, and Risk Management.",
      "Worked and interned at <span style='color: white;'>Diocèse de Montpellier</span> to gain practical experience in the field of accounting.",
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
    name: "Weather App",
    description: "Using OpenWeather api to render weather where you are",
    image: algorithms,
    lien: "https://weather-app-fixed.vercel.app",
  },
  {
    name: "CV",
    description:
      "There you can see my CV, I have 2 master degree one in accounting and the other in research",
    image: cvcapture,
    lien: "/CV_Fernandez_Loic_General-5-1.pdf",
    download: true,
  },
];

export { experiences, portfolio };
