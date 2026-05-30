import { Link } from "react-router-dom";
import { PortfolioProjectList } from "../components/portfolio/PortfolioProjectBlock";
import { useLanguage } from "../hooks/useLanguage";

export function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <article>
      <Link
        to="/"
        className="mb-6 inline-flex text-sm text-[var(--primary)] hover:underline"
      >
        ← {t.nav.backToResume}
      </Link>

      <h1 className="mb-10 text-3xl font-bold md:text-4xl">
        {t.portfolio.title}
      </h1>

      <PortfolioProjectList />
    </article>
  );
}
