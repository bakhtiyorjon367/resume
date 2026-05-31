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

export type PortfolioStatus = "live" | "offline";

export type PortfolioSectionLayout = "single" | "pair";

export interface PortfolioSection {
  id: string;
  title?: LocalizedString;
  description: LocalizedString;
  images: string[];
  layout?: PortfolioSectionLayout;
}

export interface PortfolioProject {
  id: string;
  name: LocalizedString;
  domain?: string;
  status: PortfolioStatus;
  description: LocalizedString;
  techStack: string[];
  images: string[];
  imagesPending?: boolean;
  sections?: PortfolioSection[];
}
