import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useLocalized } from "../../hooks/useLanguage";
import { fadeUp, motionTransition } from "../../utils/motion";

export function Hero() {
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
      <p className="text-lg text-[var(--muted)] sm:text-xl lg:text-2xl">{role}</p>
    </motion.header>
  );
}
