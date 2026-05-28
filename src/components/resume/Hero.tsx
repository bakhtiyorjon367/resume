import { motion } from "framer-motion";
import { pdfUrls, profile } from "../../data/profile";
import { useLanguage, useLocalized } from "../../hooks/useLanguage";
import { fadeUp, motionTransition } from "../../utils/motion";

export function Hero() {
  const { t } = useLanguage();
  const role = useLocalized(profile.role);
  const location = useLocalized(profile.location);

  return (
    <motion.header
      className="mb-8 flex flex-col pt-2 sm:mb-10 sm:pt-4 lg:mb-12"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={motionTransition(0.5)}
    >
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
        {location} · {profile.experienceYears}
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {profile.name}
      </h1>
      <p className="mb-6 text-lg text-[var(--muted)] sm:text-xl lg:text-2xl">
        {role}
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/30 transition hover:opacity-90"
        >
          {t.hero.contact}
        </a>
        <a
          href={pdfUrls.resumeKo}
          download
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--primary)]"
        >
          {t.hero.downloadCv}
        </a>
        <a
          href={pdfUrls.portfolio}
          download
          className="rounded-xl border border-[var(--border)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]"
        >
          {t.hero.portfolio}
        </a>
      </div>
    </motion.header>
  );
}
