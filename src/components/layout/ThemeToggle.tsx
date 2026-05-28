import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = theme === "dark" ? t.theme.light : t.theme.dark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--primary)]"
      aria-label={label}
    >
      {theme === "dark" ? "☀️" : "🌙"} {label}
    </button>
  );
}
