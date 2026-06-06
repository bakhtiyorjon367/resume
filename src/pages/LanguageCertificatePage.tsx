import { PdfCertificateViewer } from "../components/certificates/PdfCertificateViewer";
import { certificateUrls } from "../data/certificates";
import { useLanguage } from "../hooks/useLanguage";

export function LanguageCertificatePage() {
  const { t } = useLanguage();

  return (
    <article>
      <h1 className="mb-10 text-3xl font-bold md:text-4xl">
        {t.certificates.languageTitle}
      </h1>

      <div className="space-y-8">
        <PdfCertificateViewer
          title={t.contact.topik}
          url={certificateUrls.topik}
          downloadLabel={t.certificates.download}
          notReadyMessage={t.certificates.notReady}
          tall={false}
        />
        <PdfCertificateViewer
          title={t.contact.toeic}
          url={certificateUrls.toeic}
          downloadLabel={t.certificates.download}
          notReadyMessage={t.certificates.notReady}
          tall={false}
        />
      </div>
    </article>
  );
}
