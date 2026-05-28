import type { Profile } from "../types/resume";

export const profile: Profile = {
  name: "Bakhtiyor Mamajonov",
  role: {
    en: "Backend / Full-Stack Engineer",
    ko: "백엔드 / 풀스택 엔지니어",
  },
  location: {
    en: "Seoul, Gwangjin-gu, Korea",
    ko: "서울 광진구",
  },
  experienceYears: "3y 5m",
  bio: {
    en: "Backend-focused engineer with full-stack delivery experience across Node.js, NestJS, and React. Experienced in cost optimization, RAG systems, and rapid product builds for Korean and international teams.",
    ko: "Node.js, NestJS, React 기반의 백엔드 중심 풀스택 엔지니어입니다. 인프라 비용 최적화, RAG 검색, 빠른 프로토타이핑 경험이 있으며 한국 및 해외 팀과 협업해 왔습니다.",
  },
  photoUrl: "/images/profile.jpg",
  email: "hello@mamajonov.uz",
  github: "https://github.com/bakhtiyor",
  linkedin: "https://linkedin.com/in/bakhtiyor",
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
};

export const pdfUrls = {
  resumeKo: "/resume-ko.pdf",
  resumeEn: "/resume-en.pdf",
  portfolio: "/portfolio.pdf",
};
