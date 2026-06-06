import type { MouseEvent } from "react";
import { handlePdfDownloadClick } from "../../utils/pdfDownload";

type PdfCertificateViewerProps = {
  title: string;
  url: string;
  downloadLabel: string;
  notReadyMessage: string;
  tall?: boolean;
};

export function PdfCertificateViewer({
  title,
  url,
  downloadLabel,
  notReadyMessage,
  tall = true,
}: PdfCertificateViewerProps) {
  const pdfSrc = `${url}#view=FitH&toolbar=0`;

  return (
    <section className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3">
        <h2 className="text-base font-semibold text-[var(--text)] sm:text-lg">
          {title}
        </h2>
        <a
          href={url}
          download
          className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          onClick={(e: MouseEvent<HTMLAnchorElement>) =>
            void handlePdfDownloadClick(e, url, notReadyMessage)
          }
        >
          {downloadLabel}
        </a>
      </div>
      <iframe
        src={pdfSrc}
        title={title}
        className={
          tall
            ? "block w-full bg-white min-h-[calc(100dvh-14rem)] h-[calc(100dvh-14rem)]"
            : "block w-full bg-white min-h-[calc(100dvh-18rem)] h-[calc(100dvh-18rem)]"
        }
      />
    </section>
  );
}
