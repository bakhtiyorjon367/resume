import { PdfCertificateViewer } from "../components/certificates/PdfCertificateViewer";
import { certificateUrls } from "../data/certificates";
import { useLanguage } from "../hooks/useLanguage";

export function GraduationCertificatePage() {
  const { t, lang } = useLanguage();

  const url =
    lang === "en" ? certificateUrls.graduationEn : certificateUrls.graduationKr;

  return (
    <article>
      <h1 className="mb-10 text-3xl font-bold md:text-4xl">
        {t.certificates.graduationTitle}
      </h1>

      <PdfCertificateViewer
        title={t.certificates.graduationTitle}
        url={url}
        downloadLabel={t.certificates.download}
        notReadyMessage={t.certificates.notReady}
      />
    </article>
  );
}
