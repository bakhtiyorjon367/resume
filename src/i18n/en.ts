export interface UiStrings {
  nav: {
    home: string;
    about: string;
    menu: string;
    close: string;
    backToResume: string;
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
  about: {
    readMore: string;
  };
  hero: {
    contact: string;
    downloadCv: string;
  };
  footer: {
    rights: string;
    downloadKo: string;
    downloadEn: string;
  };
}

export const en: UiStrings = {
  nav: {
    home: "Resume",
    about: "About",
    menu: "Menu",
    close: "Close",
    backToResume: "Back to resume",
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
  about: {
    readMore: "Read full introduction",
  },
  hero: {
    contact: "Contact",
    downloadCv: "Download CV",
  },
  footer: {
    rights: "All rights reserved.",
    downloadKo: "CV (Korean)",
    downloadEn: "CV (English)",
  },
};
