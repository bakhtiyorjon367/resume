import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, motionTransition } from "../../utils/motion";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="mb-8 scroll-mt-20 sm:mb-10 lg:mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={motionTransition()}
    >
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--text)] sm:mb-5 md:text-3xl">
        <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {children}
    </motion.section>
  );
}
