import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { profile } from "../../data/profile";
import { LangToggle } from "./LangToggle";
import { ProjectMenu } from "./ProjectMenu";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { motionTransition, pageTransition } from "../../utils/motion";

export function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
        <div className="content-width flex items-center justify-between gap-4 py-3">
          <Link
            to="/"
            className="truncate text-sm font-semibold text-[var(--text)] transition hover:text-[var(--primary)] sm:text-base"
          >
            {profile.name}
          </Link>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LangToggle />
            <ThemeToggle />
            <ProjectMenu />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={motionTransition(0.2)}
          className="content-width py-6 sm:py-8 lg:py-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
