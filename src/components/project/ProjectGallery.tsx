import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { staggerContainer, fadeUp, motionTransition } from "../../utils/motion";

export function ProjectGallery({ images }: { images: string[] }) {
  const { t } = useLanguage();

  if (images.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold">{t.project.gallery}</h2>
      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {images.map((src, i) => (
          <GalleryImage key={src + i} src={src} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function GalleryImage({ src, index }: { src: string; index: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.figure
      variants={fadeUp}
      transition={motionTransition(0.35)}
      className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:scale-[1.02] hover:shadow-lg"
    >
      {!failed ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          className="aspect-video w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex aspect-video items-center justify-center text-sm text-[var(--muted)]">
          {src}
        </div>
      )}
    </motion.figure>
  );
}
