import { useLanguage } from "../../hooks/useLanguage";

export function LangToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className="flex rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5 text-sm font-medium"
      role="group"
      aria-label="Language"
    >
      {(["ko", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`rounded-md px-2.5 py-1 transition ${
            lang === code
              ? "bg-[var(--primary)] text-white"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }`}
        >
          {t.lang[code]}
        </button>
      ))}
    </div>
  );
}
