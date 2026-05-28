import { motion } from "framer-motion";
import { useState } from "react";
import { experience } from "../../data/experience";
import { useLanguage, useLocalized } from "../../hooks/useLanguage";
import { staggerContainer, fadeUp, motionTransition } from "../../utils/motion";
import { Section } from "./Section";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.sections.experience}>
      <motion.div
        className="relative space-y-6 border-l-2 border-[var(--primary)]/30 pl-6 sm:space-y-7 sm:pl-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </motion.div>
    </Section>
  );
}

function ExperienceCard({
  item,
}: {
  item: (typeof experience)[number];
}) {
  const { lang } = useLanguage();
  const role = useLocalized(item.role);
  const [expanded, setExpanded] = useState(true);
  const bullets = item.bullets[lang];
  const highlights = item.highlights?.[lang];

  return (
    <motion.article
      variants={fadeUp}
      transition={motionTransition()}
      className="relative"
    >
      <span className="absolute -left-[calc(2rem+5px)] top-2 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--bg)]" />
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="mb-2 w-full text-left"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold">{item.company}</h3>
          <span className="text-sm text-[var(--muted)]">{item.period}</span>
        </div>
        <p className="text-[var(--accent)]">{role}</p>
      </button>
      {highlights && highlights.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-[var(--primary)]/15 px-2 py-0.5 text-xs font-medium text-[var(--primary)]"
            >
              {h}
            </span>
          ))}
        </div>
      )}
      {expanded && (
        <ul className="mb-3 list-disc space-y-1 pl-5 text-[var(--muted)]">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
