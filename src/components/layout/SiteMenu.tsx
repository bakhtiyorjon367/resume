import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { motionTransition } from "../../utils/motion";

export function SiteMenu() {
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
            className="fixed right-0 top-0 z-[210] flex h-full w-[min(280px,85vw)] flex-col border-l border-[var(--border)] bg-[var(--surface)] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
              <span className="font-semibold text-[var(--text)]">
                {t.nav.menu}
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

            <nav className="flex-1 p-4">
              <Link
                to="/"
                onClick={close}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  location.pathname === "/"
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text)] hover:bg-[var(--bg)]"
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                to="/portfolio"
                onClick={close}
                className={`mt-1 block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  location.pathname === "/portfolio"
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text)] hover:bg-[var(--bg)]"
                }`}
              >
                {t.nav.portfolio}
              </Link>
              <Link
                to="/about"
                onClick={close}
                className={`mt-1 block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  location.pathname === "/about"
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text)] hover:bg-[var(--bg)]"
                }`}
              >
                {t.nav.about}
              </Link>
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
