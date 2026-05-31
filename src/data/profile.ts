import type { Profile } from "../types/resume";

export const profile: Profile = {
  name: "Bakhtiyor Mamajonov",
  role: {
    en: "Backend / Full-Stack Engineer",
    ko: "백엔드 / 풀스택 엔지니어",
  },
  location: {
    en: "Seoul, Dobong-gu, Korea",
    ko: "서울 광진구",
  },
  experienceYears: "3y 5m",
  bio: {
    en: "Backend-focused engineer with full-stack delivery experience across Node.js, NestJS, and React. Experienced in cost optimization, RAG systems, and rapid product builds for Korean and international teams.",
    ko: "Node.js, NestJS, React 기반의 백엔드 중심 풀스택 엔지니어입니다. 인프라 비용 최적화, RAG 검색, 빠른 프로토타이핑 경험이 있으며 한국 및 해외 팀과 협업해 왔습니다.",
  },
  photoUrl: "/images/profileImage.JPG",
  email: "bahtee367@gmail.com",
  github: "https://github.com/bakhtiyorjon367",
  stats: [
    {
      label: { en: "Companies", ko: "경력 회사" },
      value: "3",
    },
    {
      label: { en: "Experience", ko: "경력" },
      value: "3y 5m",
    },
    {
      label: { en: "TOPIK", ko: "TOPIK" },
      value: "Level 5",
    },
    {
      label: { en: "TOEIC", ko: "TOEIC" },
      value: "730",
    },
  ],
  selfIntroduction: [
    {
      id: "motivation",
      title: { en: "Motivation", ko: "지원동기" },
      body: {
        en: 'After starting my career as a frontend developer, I have always looked beyond simply implementing features to consider how an entire system should be designed to remain maintainable and scalable over time. Building fundamentals at SatvaDev, advancing my skills at UIC Group, and leading architecture-level improvements at YYSOFT, I experienced firsthand that "a well-designed system can transform a team\'s productivity and business outcomes." I want to continue growing in an environment that pursues both technical depth and tangible business impact.',
        ko: '프론트엔드 개발자로서 커리어를 시작한 이후, 단순히 기능을 구현하는 것에 그치지 않고 시스템 전체가 어떻게 설계되어야 오래 유지되고 확장될 수 있는지를 항상 고민해 왔습니다. SatvaDev에서 기본기를 다지고, UIC Group에서 기술 고도화를 경험하며, YYSOFT에서 아키텍처 수준의 개선을 주도하는 과정에서 "잘 설계된 시스템 하나가 팀 전체의 생산성과 비즈니스 성과를 바꾼다"는 것을 직접 체감하였습니다. 앞으로도 기술적 깊이와 실질적인 비즈니스 기여를 함께 추구하는 환경에서 성장하고 싶습니다.',
      },
    },
    {
      id: "architecture",
      title: {
        en: "Strengths: Architecture Design & Refactoring",
        ko: "역량 및 경험: 아키텍처 설계 및 리팩토링",
      },
      body: {
        en: "Improving system structure is my greatest strength. At YYSOFT, I split a monolithic codebase of over 2,000 lines into domain-specific architecture for pharmaceuticals, food, and batteries, and designed EventGlobalState middleware to centralize the entire EPCIS event flow. I centralized ENUMs and organization type settings to ensure code consistency, and removed unused routers, models, and services to streamline the codebase. At SatvaDev, I applied React component-based architecture and Redux state management patterns in production, building a foundation in structured UI design and code modularization. At UIC Group, I designed and operated a modular NestJS backend architecture, deepening my understanding of large-scale project structure.",
        ko: "시스템 구조를 개선하는 것이 가장 큰 강점입니다. YYSOFT에서 2,000줄이 넘는 모놀리식 코드베이스를 의약품·식품·배터리 도메인별 아키텍처로 분리하고, EventGlobalState 미들웨어를 설계하여 EPCIS 이벤트 흐름 전체를 중앙화하였습니다. ENUM 및 조직 타입 설정을 중앙화하여 코드 일관성을 확보하였고, 사용하지 않는 라우터·모델·서비스를 정리하여 코드베이스를 경량화하였습니다. SatvaDev에서는 React 컴포넌트 기반 아키텍처와 Redux 상태 관리 패턴을 실무에 적용하며 구조화된 UI 설계와 코드 모듈화의 기초를 다졌고, UIC Group에서는 NestJS 기반 모듈화 백엔드 아키텍처를 설계·운용하며 규모 있는 프로젝트 구조에 대한 이해를 높였습니다.",
      },
    },
    {
      id: "performance",
      title: {
        en: "Strengths: Performance Optimization & Infrastructure Cost Reduction",
        ko: "역량 및 경험: 성능 최적화 및 인프라 비용 절감",
      },
      body: {
        en: "I aim to take responsibility not only for feature implementation but also for system performance and cost efficiency. At YYSOFT, I moved event filtering logic from the frontend to the backend DB level and designed and introduced a Current State collection to address blockchain immutability challenges, dramatically reducing DB query response times and cutting AWS infrastructure costs by approximately 70%. I also implemented RSA asymmetric encryption to establish a secure data transmission system between frontend and backend, contributing to obtaining official EPCIS license certification. At UIC Group, I have experience improving frontend performance with React Query, Apollo Client, and caching strategies, as well as building stable deployment environments with Docker and NGINX.",
        ko: "기능 구현에 그치지 않고 시스템 성능과 비용 효율까지 책임지는 개발을 지향합니다. YYSOFT에서 이벤트 필터링 로직을 프론트엔드에서 백엔드 DB 레벨로 이전하고, 블록체인 불변성 문제를 해결하기 위한 Current State 컬렉션을 설계·도입하여 DB 쿼리 응답 시간을 대폭 단축하고 AWS 인프라 비용을 약 70% 절감하였습니다. 또한 RSA 비대칭 암호화를 도입하여 프론트엔드·백엔드 간 보안 데이터 전송 체계를 구축하였으며, 이러한 개선 작업을 통해 EPCIS 공식 라이선스 인증 취득에 기여하였습니다. UIC Group에서는 React Query, Apollo Client 및 캐싱 전략을 활용한 프론트엔드 성능 향상과 Docker·NGINX 기반의 안정적인 배포 환경 구축 경험도 보유하고 있습니다.",
      },
    },
    {
      id: "ai-productivity",
      title: {
        en: "Strengths: AI-Powered Development Productivity",
        ko: "역량 및 경험: AI 활용 개발 생산성",
      },
      body: {
        en: "I actively use Cursor AI and have independently designed and developed a RAG-based document search system and a PWA mobile app, each within one day. The RAG system combines FastAPI, pgvector, Google Gemini streaming, and Korean MeCab morphological analysis in a hybrid search architecture. The PWA app is a full-stack implementation with an Ionic 8 + React frontend, NestJS backend, and JWT-based role-based access control (RBAC). I go beyond simply using tools — I leverage AI to rapidly design and validate complex systems.",
        ko: "Cursor AI를 적극적으로 활용하여 RAG 기반 문서 검색 시스템과 PWA 모바일 앱을 각각 1일 이내에 단독으로 설계·개발 경험이 있습니다. RAG 시스템은 FastAPI, pgvector, Google Gemini 스트리밍, 한국어 MeCab 형태소 분석을 결합한 하이브리드 검색 구조로 설계하였으며, PWA 앱은 Ionic 8 + React 프론트엔드와 NestJS 백엔드, JWT 기반 역할 접근 제어(RBAC)까지 포함한 풀스택 구조로 구현하였습니다. 단순히 도구를 사용하는 수준을 넘어, AI를 활용하여 복잡한 시스템을 빠르게 설계하고 검증하는 역량을 보유하고 있습니다.",
      },
    },
    {
      id: "goals",
      title: { en: "Career Goals", ko: "입사 후 포부" },
      body: {
        en: "I have experienced three stages: building a technical foundation, advancing my skills, and leading improvements proactively. Going forward, I want to grow as a developer who creates tangible value for teams and organizations based on code quality and system stability. I will not stop at personal skill development — I will share AI-driven development practices and systematic architecture design approaches within the team to contribute to overall organizational productivity.",
        ko: "지금까지 기술 기반을 닦고, 고도화하고, 주도적으로 개선하는 세 단계를 경험하였습니다. 앞으로는 코드 품질과 시스템 안정성을 기반으로 팀과 조직에 실질적인 가치를 만들어내는 개발자로 성장하고자 합니다. 개인 역량 향상에 그치지 않고, AI 기반 개발 문화와 체계적인 아키텍처 설계 방식을 팀 내에 공유하며 조직 전체의 개발 생산성 향상에도 기여하겠습니다.",
      },
    },
  ],
};

export const pdfUrls = {
  resumeKo: "/resume-ko.pdf",
  resumeEn: "/resume-en.pdf",
  portfolioKo: "/portfolio-ko.pdf",
  portfolioEn: "/portfolio-en.pdf",
};
