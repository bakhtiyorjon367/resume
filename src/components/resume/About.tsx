import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { useLanguage, useLocalized } from "../../hooks/useLanguage";
import { Section } from "./Section";

export function About() {
  const { t, lang } = useLanguage();
  const bio = useLocalized(profile.bio);
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <Section id="about" title={t.sections.about}>
      <div className="flex flex-col gap-6 md:flex-row md:items-start lg:gap-8">
        <div className="shrink-0">
          {photoOk ? (
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-40 w-40 rounded-2xl border border-[var(--border)] bg-[var(--surface)] object-cover"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div
              className="flex h-40 w-40 items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] text-4xl font-bold text-[var(--primary)]"
              aria-hidden
            >
              {profile.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="mb-6 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {bio}
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[var(--primary)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {stat.label[lang]}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="text-sm font-medium text-[var(--primary)] hover:underline"
          >
            {t.about.readMore} →
          </Link>
        </div>
      </div>
    </Section>
  );
}
