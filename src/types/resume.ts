export type Lang = "en" | "ko";

export type LocalizedString = Record<Lang, string>;

export type LocalizedList = Record<Lang, string[]>;

export type ProjectCategory =
  | "live-mobile"
  | "offline-desktop"
  | "earlier-career";

export type ProjectStatus = "live" | "offline" | "archive";

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

export interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  name: LocalizedString;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: LocalizedString;
  description: LocalizedString;
  bullets: LocalizedList;
  techStack: string[];
  links: ProjectLinks;
  images: string[];
  featured?: boolean;
}
