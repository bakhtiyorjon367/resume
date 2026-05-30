import { portfolioProjects } from "../../data/portfolio";
import type { PortfolioProject } from "../../types/resume";
import { useLanguage, useLocalized } from "../../hooks/useLanguage";
import { assetPath } from "../../utils/assetPath";
import { PortfolioProjectSections } from "./PortfolioProjectSections";

export function PortfolioProjectBlock({ project }: { project: PortfolioProject }) {
  const { t } = useLanguage();
  const name = useLocalized(project.name);
  const description = useLocalized(project.description);

  return (
    <article
      id={project.id}
      className="scroll-mt-24 border-b border-[var(--border)] pb-12 last:border-b-0 last:pb-0"
    >
      <header className="mb-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            {name}
          </h2>
          {project.domain && project.status === "live" ? (
            <a
              href={project.domain}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--primary)] hover:underline"
            >
              {project.domain.replace(/^https?:\/\//, "")}
            </a>
          ) : (
            <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
              {t.portfolio.offline}
            </span>
          )}
        </div>
        {project.techStack.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </header>

      {project.sections?.length ? (
        <PortfolioProjectSections
          sections={project.sections}
          projectName={name}
        />
      ) : (
        <>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {description}
          </p>

          {project.imagesPending ? (
        <p className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-8 text-center text-sm text-[var(--muted)]">
          {t.portfolio.screenshotsSoon}
        </p>
      ) : project.images.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((src, index) => (
            <li
              key={src}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <img
                src={assetPath(src)}
                alt={`${name} — ${index + 1}`}
                className="h-auto w-full object-cover object-top"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      ) : null}
        </>
      )}
    </article>
  );
}

export function PortfolioProjectList() {
  return (
    <div className="space-y-12">
      {portfolioProjects.map((project) => (
        <PortfolioProjectBlock key={project.id} project={project} />
      ))}
    </div>
  );
}
