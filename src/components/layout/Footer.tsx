import { pdfUrls, profile } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8 sm:py-10">
      <div className="content-width flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--primary)] hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={pdfUrls.resumeKo}
            download
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 hover:border-[var(--primary)]"
          >
            {t.footer.downloadKo}
          </a>
          <a
            href={pdfUrls.resumeEn}
            download
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 hover:border-[var(--primary)]"
          >
            {t.footer.downloadEn}
          </a>
        </div>
      </div>
      <p className="content-width mt-6 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
