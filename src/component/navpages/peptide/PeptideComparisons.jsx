// src/component/pages/ComparePage/ComparePage.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  brandComparisons,
  comparisonSlug,
  peptideComparisons,
} from "./comparisonData";

export default function ComparePage() {
  const themes = {
    blue: {
      tag: "bg-[#f0f7ff] text-[#1d4ed8] ",
      vs: "text-[#60a5fa]",
      titleHover: "group-hover:text-[#1d4ed8]",
      linkHover: "group-hover:text-[#1d4ed8]",
      cardHover: "hover:border-[#2563eb] hover:shadow-[0_0_0_1px_#2563eb]",
    },
    green: {
      tag: "bg-[#dcfce7] text-[#166534] ",
      vs: "text-[#4ade80]",
      titleHover: "group-hover:text-[#166534]",
      linkHover: "group-hover:text-[#166534]",
      cardHover: "hover:border-[#16a34a] hover:shadow-[0_0_0_1px_#16a34a]",
    },
  };

  const ComparisonCard = ({ tags, title, linkText, theme, type }) => {
    const t = themes[theme];

    return (
      <Link
        to={`/peptides/compare/${type}/${comparisonSlug(title)}`}
        aria-label={`${linkText}: ${title}`}
        className={`group flex flex-col rounded-[5px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.25)] transition-all no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d5b60] ${t.cardHover}`}
      >
        {/* Tags Row */}
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          {tags.map((tag, index) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className={`rounded px-2.5 py-0.5 text-[11px] font-semibold ${t.tag}`}>
                {tag}
              </span>
              {index < tags.length - 1 && (
                <span className={`text-[10px] font-bold ${t.vs}`}>vs</span>
              )}
            </span>
          ))}
        </div>

        {/* Title — group-hover pe color change */}
        <h3
          className={`mb-3 text-[14px] font-bold leading-snug text-[#0f2027] transition-colors ${t.titleHover}`}
        >
          {title}
        </h3>

        {/* Link — group-hover pe color change */}
        <span className={`mt-auto inline-flex items-center gap-1 text-[12px] font-semibold text-[#4a5a55] transition-colors ${t.linkHover}`}>
          {linkText}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    );
  };

  return (
    <>
      <Helmet>
        <title>Peptide Comparisons — Side-by-Side Breakdowns | MyPeptideMatch.com</title>
        <meta
          name="description"
          content="Compare popular peptides side by side. Mechanism, effectiveness, cost, FDA status, and side effects — all in one place to help you ask better questions at your"
        />
      </Helmet>
      <div className="bg-white min-h-screen font-sans">
      <section className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
              Side-by-Side
            </span>
            <h1
              className="mt-3 text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Peptide Comparisons
            </h1>
            <p className="mt-4 text-lg text-[#6b7280]">
              Detailed breakdowns of mechanism, effectiveness, cost, FDA status, and side effects
              — so you can ask better questions at your next clinic visit.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {peptideComparisons.map((item) => (
              <ComparisonCard
                key={item.title}
                tags={item.tags}
                title={item.title}
                linkText="Read comparison"
                theme="blue"
                type="peptide"
              />
            ))}
          </div>

          <section className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#333333]">
                Compare telehealth brands
              </h2>
              <p className="mt-1 max-w-[560px] text-sm text-[#6b7280]">
                Side by side breakdowns of cost, treatments, and customer ratings for the most
                searched US telehealth providers.
              </p>
            </div>
            <Link
              to="/peptides/best-telehealth"
              className="hidden shrink-0 text-sm font-medium text-[#1F6CD6] hover:underline sm:inline"
            >
              View all rankings →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandComparisons.map((item) => (
              <ComparisonCard
                key={item.title}
                tags={item.tags}
                title={item.title}
                linkText="Compare brands"
                theme="green"
                type="brand"
              />
            ))}
          </div>
          </section>

          <div className="mt-16 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-6">
            <p className="text-sm text-[#6b7280]">
              <strong className="text-[#333333]">Medical disclaimer:</strong>{' '}
              These comparisons are for educational purposes only and do not constitute
              medical advice. Always consult a qualified healthcare provider before
              starting any peptide therapy.
            </p>
          </div>
      </div>
    </div>
    </>
  );
}