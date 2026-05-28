import { useLanguage } from "../../hooks/useLanguage";
import type { ProjectStatus } from "../../types/resume";

const styles: Record<ProjectStatus, string> = {
  live: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  offline: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  archive: "bg-[var(--muted)]/15 text-[var(--muted)]",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLanguage();
  const label = t.project[status];

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles[status]}`}
    >
      {label}
    </span>
  );
}
