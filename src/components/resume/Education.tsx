import { motion } from "framer-motion";
import { education } from "../../data/education";
import { useLanguage, useLocalized } from "../../hooks/useLanguage";
import { staggerContainer, fadeUp, motionTransition } from "../../utils/motion";
import { Section } from "./Section";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" title={t.sections.education}>
      <motion.div
        className="grid gap-4 sm:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </motion.div>
    </Section>
  );
}

function EducationCard({
  item,
}: {
  item: (typeof education)[number];
}) {
  const title = useLocalized(item.title);
  const subtitle = useLocalized(item.subtitle);

  return (
    <motion.div
      variants={fadeUp}
      transition={motionTransition()}
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
      {item.period && (
        <p className="mt-2 text-xs text-[var(--muted)]">{item.period}</p>
      )}
    </motion.div>
  );
}
