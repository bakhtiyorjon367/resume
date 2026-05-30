import type { ExperienceItem } from "../types/resume";

export const experience: ExperienceItem[] = [
  {
    id: "yysoft",
    company: "YYSoft",
    role: {
      en: "Senior Researcher, Backend/Server",
      ko: "선임연구원, 백엔드/서버",
    },
    period: "2025.04 – 2026.03 · 12mo",
    bullets: {
      en: [
        "Developed and maintained the backend of a blockchain-based EPCIS supply chain platform.",
        "Refactored a monolithic codebase into domain-specific architecture (pharmaceuticals, food, batteries).",
        "Designed EventGlobalState middleware to centralize EPCIS event flow.",
        "Applied GS1 standards (bizStep, companyPrefix, SSCC/EPC) and strengthened compliance.",
        "Centralized ENUMs and separated organization type settings to improve code consistency.",
        "Removed unused routers, models, and services to streamline the codebase.",
        "Built an in-house RAG document search tool with Cursor AI in one day.",
      ],
      ko: [
        "블록체인 기반 EPCIS 공급망 플랫폼 백엔드 개발 및 유지보수",
        "모놀리식 코드베이스를 도메인별(의약품·식품·배터리) 아키텍처로 리팩토링",
        "EventGlobalState 미들웨어 설계로 EPCIS 이벤트 흐름 중앙화",
        "GS1 표준(bizStep, companyPrefix, SSCC/EPC) 적용 및 컴플라이언스 강화",
        "ENUM 중앙화 및 조직 타입 설정 분리로 코드 일관성 향상",
        "사용하지 않는 라우터·모델·서비스 정리로 코드베이스 경량화",
        "Cursor AI 활용, RAG 검색 시스템 사내 도구 개발 (1일 완성)",
      ],
    },
    tags: ["NestJS", "Node.js", "MongoDB", "AWS", "PostgreSQL", "EPCIS", "GS1"],
    highlights: {
      en: [
        "70% AWS cost reduction",
        "EPCIS official license",
        "RSA secure transport",
      ],
      ko: ["AWS 비용 70% 절감", "EPCIS 공식 라이선스", "RSA 보안 전송"],
    },
  },
  {
    id: "uic",
    company: "UIC Group",
    role: { en: "Web Developer", ko: "웹 개발자" },
    period: "2023.06 – 2024.09 · 1yr 4mo",
    bullets: {
      en: [
        "Designed and maintained a modular NestJS-based backend architecture.",
        "Developed the frontend using Next.js.",
        "Implemented GraphQL API and Apollo Client for real-time data state management.",
        "Built file upload and storage management with Multer.",
        "Added multilingual support with i18next.",
        "Applied TypeScript across frontend and backend for type safety.",
      ],
      ko: [
        "NestJS 기반 모듈화 백엔드 아키텍처 설계 및 유지보수",
        "Next.js를 활용한 프론트엔드 개발",
        "GraphQL API 및 Apollo Client 구현으로 실시간 데이터 상태 관리",
        "Multer를 활용한 파일 업로드 및 저장 관리 구현",
        "i18next 적용으로 다국어 지원 기능 개발",
        "TypeScript를 프론트엔드·백엔드 전반 적용, 타입 안정성 확보",
      ],
    },
    tags: ["NestJS", "Next.js", "GraphQL", "TypeScript", "React"],
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
        "Built SPAs with React and TypeScript.",
        "Managed state with Redux and Context API.",
        "Designed responsive UI with Material-UI and Bootstrap.",
        "Implemented UX animations with Anime.js and Three.js.",
        "Added multilingual support with react-i18next.",
        "Optimized styles and refactored code with SCSS/SASS.",
      ],
      ko: [
        "React / TypeScript를 활용한 SPA 개발",
        "Redux, Context API를 이용한 상태 관리",
        "Material-UI, Bootstrap 기반 반응형 UI 설계",
        "Anime.js, Three.js를 활용한 UX 애니메이션 구현",
        "React-i18next를 이용한 다국어 지원 구현",
        "SCSS/SASS를 활용한 스타일 최적화 및 코드 리팩토링",
      ],
    },
    tags: ["React", "TypeScript", "Redux", "Material-UI", "SCSS"],
  },
];
