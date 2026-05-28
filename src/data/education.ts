import type { EducationItem } from "../types/resume";

export const education: EducationItem[] = [
  {
    id: "kangwon",
    title: {
      en: "Kangwon National University",
      ko: "강원대학교",
    },
    subtitle: {
      en: "Computer Information & Communication Engineering",
      ko: "컴퓨터정보통신공학",
    },
  },
  {
    id: "topik",
    title: { en: "TOPIK Level 5", ko: "TOPIK 5급" },
    subtitle: { en: "Korean proficiency", ko: "한국어 능력" },
  },
  {
    id: "toeic",
    title: { en: "TOEIC 730", ko: "TOEIC 730" },
    subtitle: { en: "English proficiency", ko: "영어 능력" },
  },
];
