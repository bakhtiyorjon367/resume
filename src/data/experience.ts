import type { ExperienceItem } from "../types/resume";

export const experience: ExperienceItem[] = [
  {
    id: "yysoft",
    company: "YYSoft",
    role: {
      en: "Senior Researcher, Backend/Server",
      ko: "선임연구원, 백엔드/서버",
    },
    period: "2025.04 – 2026.02 · 11mo",
    bullets: {
      en: [
        "Led backend architecture and API design for research products.",
        "Reduced AWS infrastructure cost by 70% through DB-level query optimization.",
        "Built RAG search with FastAPI, pgvector, and Gemini in one day.",
      ],
      ko: [
        "연구 제품의 백엔드 아키텍처 및 API 설계를 주도했습니다.",
        "DB 쿼리 최적화로 AWS 인프라 비용을 70% 절감했습니다.",
        "FastAPI, pgvector, Gemini 기반 RAG 검색을 1일 만에 구축했습니다.",
      ],
    },
    tags: ["NestJS", "AWS", "PostgreSQL", "FastAPI"],
    highlights: {
      en: ["70% AWS cost reduction", "1-day RAG build"],
      ko: ["AWS 비용 70% 절감", "1일 RAG 구축"],
    },
  },
  {
    id: "uic",
    company: "UIC Group",
    role: { en: "Web Developer", ko: "웹 개발자" },
    period: "2023.06 – 2024.09 · 1yr 4mo",
    bullets: {
      en: [
        "Developed web applications for enterprise clients.",
        "Collaborated on EPCIS official license certification contribution.",
      ],
      ko: [
        "엔터프라이즈 클라이언트용 웹 애플리케이션을 개발했습니다.",
        "EPCIS 공식 라이선스 인증 프로젝트에 기여했습니다.",
      ],
    },
    tags: ["React", "Node.js", "EPCIS"],
  },
  {
    id: "satva",
    company: "SATVA.DEV",
    role: {
      en: "Frontend/Backend Developer",
      ko: "프론트엔드/백엔드 개발자",
    },
    period: "2022.01 – 2023.02 · 1yr 2mo",
    bullets: {
      en: [
        "Built full-stack features across React and Node.js stacks.",
        "Delivered PWA with Ionic, NestJS, and RBAC in one day.",
      ],
      ko: [
        "React 및 Node.js 스택에서 풀스택 기능을 구현했습니다.",
        "Ionic, NestJS, RBAC 기반 PWA를 1일 만에 전달했습니다.",
      ],
    },
    tags: ["React", "NestJS", "Ionic", "PWA"],
  },
];
