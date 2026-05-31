import { useLocation } from "react-router-dom";
import { pdfUrls, profile } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";
import { handlePdfDownloadClick } from "../../utils/pdfDownload";

export function Footer() {
  const { t, lang } = useLanguage();
  const { pathname } = useLocation();

  const resumePdf = lang === "en" ? pdfUrls.resumeEn : pdfUrls.resumeKo;
  const portfolioPdf =
    lang === "en" ? pdfUrls.portfolioEn : pdfUrls.portfolioKo;

  const showPortfolioDownload = pathname === "/portfolio";
  const showCvDownload =
    pathname !== "/portfolio" &&
    pathname !== "/about" &&
    pathname !== "/contact";

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
            href={`mailto:${profile.email}`}
            className="text-[var(--primary)] hover:underline"
          >
            {profile.email}
          </a>
        </div>
        {(showPortfolioDownload || showCvDownload) && (
          <div className="flex flex-wrap gap-3 text-sm">
            {showPortfolioDownload && (
              <a
                href={portfolioPdf}
                download
                className="rounded-lg bg-[var(--primary)] px-3 py-1.5 font-semibold text-white hover:opacity-90"
                onClick={(e) =>
                  void handlePdfDownloadClick(
                    e,
                    portfolioPdf,
                    t.download.portfolioNotReady,
                  )
                }
              >
                {t.footer.downloadPortfolio}
              </a>
            )}
            {showCvDownload && (
              <a
                href={resumePdf}
                download
                className="rounded-lg bg-[var(--primary)] px-3 py-1.5 font-semibold text-white hover:opacity-90"
                onClick={(e) =>
                  void handlePdfDownloadClick(
                    e,
                    resumePdf,
                    t.download.resumeNotReady,
                  )
                }
              >
                {t.footer.downloadCv}
              </a>
            )}
          </div>
        )}
      </div>
      <p className="content-width mt-6 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
