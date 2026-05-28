export interface UiStrings {
  nav: {
    home: string;
    projects: string;
    menu: string;
    close: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  lang: {
    en: string;
    ko: string;
  };
  sections: {
    about: string;
    skills: string;
    experience: string;
    education: string;
  };
  hero: {
    contact: string;
    downloadCv: string;
    portfolio: string;
  };
  footer: {
    rights: string;
    downloadKo: string;
    downloadEn: string;
  };
  project: {
    back: string;
    techStack: string;
    gallery: string;
    notFound: string;
    live: string;
    offline: string;
    archive: string;
    viewLive: string;
    viewGithub: string;
  };
  categories: Record<
    "live-mobile" | "offline-desktop" | "earlier-career",
    string
  >;
}

export const en: UiStrings = {
  nav: {
    home: "Resume",
    projects: "Projects",
    menu: "Menu",
    close: "Close",
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
  lang: {
    en: "EN",
    ko: "KO",
  },
  sections: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
  },
  hero: {
    contact: "Contact",
    downloadCv: "Download CV",
    portfolio: "Portfolio PDF",
  },
  footer: {
    rights: "All rights reserved.",
    downloadKo: "CV (Korean)",
    downloadEn: "CV (English)",
  },
  project: {
    back: "Back to resume",
    techStack: "Tech stack",
    gallery: "Gallery",
    notFound: "Project not found",
    live: "Live",
    offline: "Offline",
    archive: "Archive",
    viewLive: "View live",
    viewGithub: "GitHub",
  },
  categories: {
    "live-mobile": "Live mobile web",
    "offline-desktop": "Offline desktop web",
    "earlier-career": "Earlier career",
  },
};
