import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import { useLanguage, useLocalized } from "../../hooks/useLanguage";
import { staggerContainer, fadeUp, motionTransition } from "../../utils/motion";
import { Section } from "./Section";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.sections.skills}>
      <motion.div
        className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.id} group={group} />
        ))}
      </motion.div>
    </Section>
  );
}

function SkillGroupCard({
  group,
}: {
  group: (typeof skillGroups)[number];
}) {
  const title = useLocalized(group.title);

  return (
    <motion.div
      variants={fadeUp}
      transition={motionTransition()}
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/10"
    >
      <h3 className="mb-4 font-semibold text-[var(--text)]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
