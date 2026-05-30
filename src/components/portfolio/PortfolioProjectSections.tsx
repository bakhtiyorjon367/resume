import { motion } from "framer-motion";
import type { LocalizedString, PortfolioSection } from "../../types/resume";
import { useLocalized } from "../../hooks/useLanguage";
import { assetPath } from "../../utils/assetPath";
import { fadeUp, motionTransition, staggerContainer } from "../../utils/motion";

export function PortfolioProjectSections({
  sections,
  projectName,
}: {
  sections: PortfolioSection[];
  projectName: string;
}) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <PortfolioSectionBlock
          key={section.id}
          section={section}
          projectName={projectName}
        />
      ))}
    </div>
  );
}

function PortfolioSectionBlock({
  section,
  projectName,
}: {
  section: PortfolioSection;
  projectName: string;
}) {
  const description = useLocalized(section.description);
  const layout = section.layout ?? "single";
  const gridClass =
    layout === "pair"
      ? "grid gap-4 sm:grid-cols-2"
      : "grid gap-4 grid-cols-1";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={fadeUp}
      transition={motionTransition(0.45)}
      className="scroll-mt-20"
    >
      {section.title && <SectionTitle title={section.title} />}
      <p className="mb-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
        {description}
      </p>
      {section.images.length > 0 && (
        <motion.ul
          className={gridClass}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
        >
          {section.images.map((src, index) => (
            <motion.li
              key={src}
              variants={fadeUp}
              transition={motionTransition(0.35)}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-md"
            >
              <img
                src={assetPath(src)}
                alt={`${projectName} — ${section.title?.en ?? "screenshot"} — ${index + 1}`}
                className="h-auto w-full object-cover object-top"
                loading="lazy"
              />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
}

function SectionTitle({ title }: { title: LocalizedString }) {
  const text = useLocalized(title);
  return (
    <h3 className="mb-3 text-lg font-semibold text-[var(--text)] sm:text-xl">
      {text}
    </h3>
  );
}
