import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/contact";
import { useLanguage, useLocalized } from "../hooks/useLanguage";

export function ContactPage() {
  const { t, lang } = useLanguage();
  const location = useLocalized(contact.location);
  const university = useLocalized(contact.university.title);
  const major = useLocalized(contact.university.subtitle);
  const [photoOk, setPhotoOk] = useState(true);

  const resumePdf =
    lang === "en" ? contact.pdfUrls.resumeEn : contact.pdfUrls.resumeKo;
  const portfolioPdf =
    lang === "en"
      ? contact.pdfUrls.portfolioEn
      : contact.pdfUrls.portfolioKo;

  const rows: { label: string; value: ReactNode }[] = [
    { label: t.contact.nickname, value: contact.nickname },
    {
      label: t.contact.phone,
      value: (
        <a
          href={`tel:${contact.phone}`}
          className="text-[var(--primary)] hover:underline"
        >
          {formatPhone(contact.phone)}
        </a>
      ),
    },
    {
      label: t.contact.email,
      value: (
        <a
          href={`mailto:${contact.email}`}
          className="text-[var(--primary)] hover:underline"
        >
          {contact.email}
        </a>
      ),
    },
    {
      label: t.contact.telegram,
      value: (
        <a
          href={contact.telegram.url}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          @{contact.telegram.username}
        </a>
      ),
    },
    {
      label: t.contact.websites,
      value: (
        <span className="flex flex-wrap gap-x-3 gap-y-1">
          {contact.websites.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] hover:underline"
            >
              {site.label}
            </a>
          ))}
        </span>
      ),
    },
    {
      label: t.contact.github,
      value: (
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          GitHub
        </a>
      ),
    },
    { label: t.contact.location, value: location },
    {
      label: t.contact.workExperience,
      value: (
        <ul className="space-y-1.5">
          {contact.workHistory.map((job) => (
            <li key={job.company}>
              <span className="font-medium text-[var(--text)]">
                {job.company}
              </span>
              <span className="text-[var(--muted)]"> · {job.period}</span>
            </li>
          ))}
        </ul>
      ),
    },
    { label: t.contact.university, value: `${university} — ${major}` },
    { label: t.contact.topik, value: contact.topik },
    { label: t.contact.toeic, value: contact.toeic },
    {
      label: t.contact.inKoreaSince,
      value: contact.inKoreaSince,
    },
  ];

  return (
    <article className="max-w-3xl">

      <h1 className="mb-4 text-3xl font-bold md:text-4xl">{t.contact.title}</h1>
      <p className="mb-6 text-2xl font-bold text-[var(--text)]">{contact.name}</p>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="mx-auto shrink-0 sm:mx-0">
          {photoOk ? (
            <img
              src={contact.photoUrl}
              alt={contact.name}
              className="aspect-[3/4] w-36 rounded-2xl border border-[var(--border)] bg-[var(--surface)] object-cover sm:w-40"
              onError={() => setPhotoOk(false)}
            />
          ) : (
            <div
              className="flex aspect-[3/4] w-36 items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] text-4xl font-bold text-[var(--primary)] sm:w-40"
              aria-hidden
            >
              {contact.name.charAt(0)}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <dl className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-[var(--muted)] sm:text-sm">
                  {row.label}
                </dt>
                <dd className="text-sm text-[var(--text)] sm:text-base">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={resumePdf}
              download
              className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              {t.contact.downloadCv}
            </a>
            <a
              href={portfolioPdf}
              download
              className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              {t.contact.downloadPortfolio}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function formatPhone(phone: string) {
  if (phone.length === 11 && phone.startsWith("010")) {
    return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`;
  }
  return phone;
}
