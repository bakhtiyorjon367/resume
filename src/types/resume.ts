export type Lang = "en" | "ko";

export type LocalizedString = Record<Lang, string>;

export type LocalizedList = Record<Lang, string[]>;

export interface SelfIntroSection {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
}

export interface Profile {
  name: string;
  role: LocalizedString;
  location: LocalizedString;
  experienceYears: string;
  bio: LocalizedString;
  photoUrl: string;
  email: string;
  github: string;
  linkedin: string;
  stats: { label: LocalizedString; value: string }[];
  selfIntroduction?: SelfIntroSection[];
}

export interface SkillGroup {
  id: string;
  title: LocalizedString;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: LocalizedString;
  period: string;
  bullets: LocalizedList;
  tags: string[];
  highlights?: LocalizedList;
}

export interface EducationItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  period?: string;
}
