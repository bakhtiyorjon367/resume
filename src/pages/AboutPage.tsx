import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { useLanguage, useLocalized } from "../hooks/useLanguage";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <article>

      <h1 className="mb-10 text-3xl font-bold md:text-4xl">
        {t.sections.about}
      </h1>

      <div className="space-y-10">
        {profile.selfIntroduction?.map((section) => (
          <SelfIntroBlock key={section.id} section={section} />
        ))}
      </div>
    </article>
  );
}

function SelfIntroBlock({
  section,
}: {
  section: NonNullable<typeof profile.selfIntroduction>[number];
}) {
  const title = useLocalized(section.title);
  const body = useLocalized(section.body);

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-[var(--text)] sm:text-xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
        {body}
      </p>
    </section>
  );
}
