import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import {
  getProjectsByCategory,
  projectCategories,
} from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import type { ProjectCategory } from "../../types/resume";
import { motionTransition } from "../../utils/motion";

export function ProjectMenu() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const panel = (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={motionTransition(0.2)}
            className="fixed inset-0 z-[200] bg-black/50"
            aria-label={t.nav.close}
            onClick={close}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={motionTransition(0.25)}
            className="fixed right-0 top-0 z-[210] flex h-full w-[min(320px,85vw)] flex-col border-l border-[var(--border)] bg-[var(--surface)] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
              <span className="font-semibold text-[var(--text)]">
                {t.nav.projects}
              </span>
              <button
                type="button"
                onClick={close}
                className="rounded-lg px-2 py-1 text-[var(--muted)] hover:text-[var(--text)]"
                aria-label={t.nav.close}
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <Link
                to="/"
                onClick={close}
                className={`mb-4 block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  location.pathname === "/"
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text)] hover:bg-[var(--bg)]"
                }`}
              >
                {t.nav.home}
              </Link>

              {projectCategories.map((cat) => (
                <CategoryGroup
                  key={cat}
                  category={cat}
                  onNavigate={close}
                  currentPath={location.pathname}
                />
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-lg shadow-sm transition hover:border-[var(--primary)]"
        aria-label={t.nav.menu}
        aria-expanded={open}
      >
        ☰
      </button>

      {typeof document !== "undefined" &&
        createPortal(panel, document.body)}
    </>
  );
}

function CategoryGroup({
  category,
  onNavigate,
  currentPath,
}: {
  category: ProjectCategory;
  onNavigate: () => void;
  currentPath: string;
}) {
  const { t, lang } = useLanguage();
  const items = getProjectsByCategory(category);

  if (items.length === 0) return null;

  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
        {t.categories[category]}
      </p>
      <ul className="space-y-1">
        {items.map((project) => {
          const path = `/projects/${project.slug}`;
          const active = currentPath === path;
          return (
            <li key={project.slug}>
              <Link
                to={path}
                onClick={onNavigate}
                className={`block rounded-lg px-3 py-2 text-sm transition ${
                  active
                    ? "bg-[var(--primary)]/15 text-[var(--primary)] font-medium"
                    : "text-[var(--text)] hover:bg-[var(--bg)]"
                }`}
              >
                {project.name[lang]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
