import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getUi } from "../i18n";
import type { Lang } from "../types/resume";

const STORAGE_KEY = "mamajonov-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: ReturnType<typeof getUi>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "ko";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "ko" ? stored : "ko";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((l) => {
      const next = l === "ko" ? "en" : "ko";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = useMemo(() => getUi(lang), [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useLocalized<T extends { ko: string; en: string }>(
  field: T,
): string {
  const { lang } = useLanguage();
  return field[lang];
}
