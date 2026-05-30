import type { SkillGroup } from "../types/resume";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: { en: "Backend", ko: "백엔드" },
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "TypeScript",
      "Python",
    ],
  },
  {
    id: "database",
    title: { en: "Database", ko: "데이터베이스" },
    skills: ["MongoDB", "Redis", "PostgreSQL", "GraphQL"],
  },
  {
    id: "frontend",
    title: { en: "Frontend", ko: "프론트엔드" },
    skills: ["React", "Next.js", "Redux", "WebSocket"],
  },
  {
    id: "infra",
    title: { en: "Infra & AI", ko: "인프라 & AI" },
    skills: [
      "Docker",
      "NGINX",
      "Prometheus",
      "AWS",
      "RAG",
      "Knowledge Graph",
      "Cursor AI",
    ],
  },
];
