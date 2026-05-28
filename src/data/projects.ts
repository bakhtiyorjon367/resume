import type { Project, ProjectCategory } from "../types/resume";

export const projects: Project[] = [
  {
    slug: "mobile-app-alpha",
    name: { en: "Mobile Web App Alpha", ko: "모바일 웹 앱 Alpha" },
    category: "live-mobile",
    status: "live",
    featured: true,
    summary: {
      en: "Production mobile web app with real-time features.",
      ko: "실시간 기능을 갖춘 운영 중인 모바일 웹 앱입니다.",
    },
    description: {
      en: "A responsive mobile-first web application currently serving users. Replace this copy after reviewing portfolio.pdf.",
      ko: "현재 사용자에게 서비스 중인 모바일 우선 웹 애플리케이션입니다. portfolio.pdf 검토 후 내용을 교체하세요.",
    },
    bullets: {
      en: [
        "PWA-ready mobile experience",
        "REST + WebSocket integration",
        "Role-based access control",
      ],
      ko: [
        "PWA 지원 모바일 경험",
        "REST + WebSocket 연동",
        "역할 기반 접근 제어",
      ],
    },
    techStack: ["React", "NestJS", "WebSocket", "MongoDB"],
    links: { live: "https://example.com", github: "https://github.com" },
    images: [
      "/images/projects/mobile-app-alpha/1.svg",
      "/images/projects/mobile-app-alpha/2.svg",
    ],
  },
  {
    slug: "mobile-app-beta",
    name: { en: "Mobile Web App Beta", ko: "모바일 웹 앱 Beta" },
    category: "live-mobile",
    status: "live",
    summary: {
      en: "Second live mobile web product.",
      ko: "두 번째 운영 중인 모바일 웹 제품입니다.",
    },
    description: {
      en: "Another active mobile web application. Update URLs and screenshots from your portfolio.",
      ko: "또 다른 운영 중인 모바일 웹 애플리케이션입니다. 포트폴리오에서 URL과 스크린샷을 업데이트하세요.",
    },
    bullets: {
      en: [
        "Cross-platform mobile web UI",
        "Optimized API layer",
        "Deployed on cloud infrastructure",
      ],
      ko: [
        "크로스 플랫폼 모바일 웹 UI",
        "최적화된 API 레이어",
        "클라우드 인프라 배포",
      ],
    },
    techStack: ["Ionic", "React", "Node.js", "Redis"],
    links: { live: "https://example.com" },
    images: ["/images/projects/mobile-app-beta/1.svg"],
  },
  {
    slug: "desktop-suite-one",
    name: { en: "Desktop Web Suite One", ko: "데스크톱 웹 스위트 One" },
    category: "offline-desktop",
    status: "offline",
    summary: {
      en: "Enterprise desktop web app (currently offline).",
      ko: "엔터프라이즈 데스크톱 웹 앱 (현재 오프라인).",
    },
    description: {
      en: "A desktop-oriented web application that is no longer publicly hosted. Screenshots and archived documentation remain available.",
      ko: "더 이상 공개 호스팅되지 않는 데스크톱 중심 웹 애플리케이션입니다. 스크린샷과 문서는 제공됩니다.",
    },
    bullets: {
      en: [
        "Complex data tables and dashboards",
        "Multi-tenant architecture",
        "NGINX + Docker deployment",
      ],
      ko: [
        "복잡한 데이터 테이블 및 대시보드",
        "멀티 테넌트 아키텍처",
        "NGINX + Docker 배포",
      ],
    },
    techStack: ["React", "Express", "PostgreSQL", "Docker"],
    links: { github: "https://github.com" },
    images: ["/images/projects/desktop-suite-one/1.svg"],
  },
  {
    slug: "desktop-suite-two",
    name: { en: "Desktop Web Suite Two", ko: "데스크톱 웹 스위트 Two" },
    category: "offline-desktop",
    status: "offline",
    summary: {
      en: "Internal tools desktop web app (offline).",
      ko: "내부 도구 데스크톱 웹 앱 (오프라인).",
    },
    description: {
      en: "Built for internal operations; demo environment is offline. Highlight architecture and outcomes here.",
      ko: "내부 운영용으로 제작되었으며 데모 환경은 오프라인입니다. 아키텍처와 성과를 기술하세요.",
    },
    bullets: {
      en: [
        "Admin panels and reporting",
        "GraphQL API layer",
        "Prometheus monitoring",
      ],
      ko: [
        "관리자 패널 및 리포팅",
        "GraphQL API 레이어",
        "Prometheus 모니터링",
      ],
    },
    techStack: ["Next.js", "GraphQL", "Prometheus"],
    links: {},
    images: ["/images/projects/desktop-suite-two/1.svg"],
  },
  {
    slug: "epcis-contribution",
    name: { en: "EPCIS Certification", ko: "EPCIS 인증 프로젝트" },
    category: "earlier-career",
    status: "archive",
    summary: {
      en: "Contribution to EPCIS official license certification.",
      ko: "EPCIS 공식 라이선스 인증 프로젝트 기여.",
    },
    description: {
      en: "Participated in standards compliance and integration work for EPCIS certification during UIC Group tenure.",
      ko: "UIC Group 재직 시 EPCIS 인증을 위한 표준 준수 및 통합 작업에 참여했습니다.",
    },
    bullets: {
      en: [
        "Standards compliance implementation",
        "Integration testing",
        "Documentation support",
      ],
      ko: [
        "표준 준수 구현",
        "통합 테스트",
        "문서화 지원",
      ],
    },
    techStack: ["EPCIS", "Node.js", "React"],
    links: {},
    images: ["/images/projects/epcis-contribution/1.svg"],
  },
  {
    slug: "rag-search-poc",
    name: { en: "RAG Search POC", ko: "RAG 검색 POC" },
    category: "earlier-career",
    status: "archive",
    featured: true,
    summary: {
      en: "One-day RAG search prototype with pgvector.",
      ko: "pgvector 기반 1일 RAG 검색 프로토타입.",
    },
    description: {
      en: "Built a retrieval-augmented search system using FastAPI, pgvector, and Gemini at YYSoft.",
      ko: "YYSoft에서 FastAPI, pgvector, Gemini로 RAG 검색 시스템을 구축했습니다.",
    },
    bullets: {
      en: [
        "Vector embeddings pipeline",
        "Gemini integration",
        "Delivered in one day",
      ],
      ko: [
        "벡터 임베딩 파이프라인",
        "Gemini 연동",
        "1일 내 전달",
      ],
    },
    techStack: ["FastAPI", "pgvector", "Gemini", "Python"],
    links: {},
    images: ["/images/projects/rag-search-poc/1.svg"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "live-mobile",
  "offline-desktop",
  "earlier-career",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
