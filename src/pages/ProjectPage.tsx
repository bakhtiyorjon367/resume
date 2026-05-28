import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { ProjectGallery } from "../components/project/ProjectGallery";
import { StatusBadge } from "../components/project/StatusBadge";
import { useLanguage, useLocalized } from "../hooks/useLanguage";

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="py-20 text-center">
        <p className="text-[var(--muted)]">{t.project.notFound}</p>
        <Link
          to="/"
          className="mt-4 inline-block text-[var(--primary)] hover:underline"
        >
          {t.project.back}
        </Link>
      </div>
    );
  }

  const name = project.name[lang];
  const summary = project.summary[lang];
  const description = project.description[lang];
  const bullets = project.bullets[lang];

  return (
    <article>
      <Link
        to="/"
        className="mb-6 inline-flex text-sm text-[var(--primary)] hover:underline"
      >
        ← {t.project.back}
      </Link>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        {project.featured && (
          <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Featured
          </span>
        )}
      </div>

      <h1 className="mb-2 text-3xl font-bold md:text-4xl">{name}</h1>
      <p className="mb-6 text-lg text-[var(--muted)]">{summary}</p>

      <div className="mb-8 flex flex-wrap gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            {t.project.viewLive}
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold hover:border-[var(--primary)]"
          >
            {t.project.viewGithub}
          </a>
        )}
      </div>

      <p className="mb-6 leading-relaxed text-[var(--muted)]">{description}</p>

      <ul className="mb-8 list-disc space-y-2 pl-5 text-[var(--text)]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <section>
        <h2 className="mb-3 text-lg font-semibold">{t.project.techStack}</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <ProjectGallery images={project.images} />
    </article>
  );
}
