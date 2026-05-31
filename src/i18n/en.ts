export interface UiStrings {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    menu: string;
    close: string;
    backToResume: string;
  };
  portfolio: {
    title: string;
    offline: string;
    screenshotsSoon: string;
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
  footer: {
    rights: string;
    downloadCv: string;
  };
}

export const en: UiStrings = {
  nav: {
    home: "Resume",
    about: "About",
    portfolio: "Portfolio",
    menu: "Menu",
    close: "Close",
    backToResume: "Back to resume",
  },
  portfolio: {
    title: "Portfolio",
    offline: "Offline",
    screenshotsSoon: "Screenshots coming soon",
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
  footer: {
    rights: "All rights reserved.",
    downloadCv: "Download CV",
  },
};
