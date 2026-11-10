// src/component/pages/ComparePage/ComparePage.jsx
import { Link } from "react-router-dom";

export default function ComparePage() {
  const peptideComparisons = [
    { tags: ["Semaglutide", "Tirzepatide"], title: "Semaglutide vs Tirzepatide" },
    { tags: ["Tirzepatide", "Liraglutide"], title: "Tirzepatide vs Liraglutide" },
    { tags: ["Semaglutide", "Liraglutide"], title: "Semaglutide vs Liraglutide" },
    { tags: ["Sermorelin", "CJC-1295 / Ipamorelin"], title: "Sermorelin vs CJC-1295 / Ipamorelin" },
    { tags: ["Ipamorelin", "GHRP-2"], title: "Ipamorelin vs GHRP-2" },
    { tags: ["BPC-157", "TB-500"], title: "BPC-157 vs TB-500" },
    { tags: ["GHK-Cu", "BPC-157"], title: "GHK-Cu vs BPC-157" },
    { tags: ["Thymosin Alpha-1", "TB-500"], title: "Thymosin Alpha-1 vs TB-500" },
    { tags: ["PT-141", "Melanotan II"], title: "PT-141 vs Melanotan II" },
    { tags: ["Semax", "Selank"], title: "Semax vs Selank" },
    { tags: ["Retatrutide", "Tirzepatide"], title: "Retatrutide vs Tirzepatide" },
  ];

  const brandComparisons = [
    { tags: ["Henry Meds", "Ro"], title: "Henry Meds vs Ro" },
    { tags: ["Hims & Hers", "Ro"], title: "Hims & Hers vs Ro" },
    { tags: ["Mochi Health", "Henry Meds"], title: "Mochi Health vs Henry Meds" },
    { tags: ["Mochi Health", "Remedy Meds"], title: "Mochi Health vs Remedy Meds" },
    { tags: ["Eden", "Henry Meds"], title: "Eden vs Henry Meds" },
    { tags: ["Ivim Health", "Mochi Health"], title: "Ivim Health vs Mochi Health" },
    { tags: ["Fella Health", "Hone Health"], title: "Fella Health vs Hone Health" },
    { tags: ["Marek Health", "Hone Health"], title: "Marek Health vs Hone Health" },
    { tags: ["Defy Medical", "Marek Health"], title: "Defy Medical vs Marek Health" },
    { tags: ["AgelessRx", "Defy Medical"], title: "AgelessRx vs Defy Medical" },
    { tags: ["Winona", "MidI Health"], title: "Winona vs MidI Health" },
    { tags: ["Alloy", "MidI Health"], title: "Alloy vs MidI Health" },
  ];

  const themes = {
    blue: {
      tag: "bg-[#dbeafe] text-[#1d4ed8] border border-[#bfdbfe]",
      vs: "text-[#60a5fa]",
      titleHover: "group-hover:text-[#1d4ed8]",
      linkHover: "group-hover:text-[#1d4ed8]",
      cardHover: "hover:border-[#2563eb] hover:shadow-[0_0_0_1px_#2563eb]",
    },
    green: {
      tag: "bg-[#dcfce7] text-[#166534] border border-[#bbf7d0]",
      vs: "text-[#4ade80]",
      titleHover: "group-hover:text-[#166534]",
      linkHover: "group-hover:text-[#166534]",
      cardHover: "hover:border-[#16a34a] hover:shadow-[0_0_0_1px_#16a34a]",
    },
  };

  const ComparisonCard = ({ tags, title, linkText, theme }) => {
    const t = themes[theme];

    return (
      <div
        className={`group bg-white border border-[#e2e8e6] rounded-lg p-4 flex flex-col transition-all cursor-pointer ${t.cardHover}`}
      >
        {/* Tags Row */}
        <div className="flex items-center gap-1.5 flex-wrap mb-3">
          {tags.map((tag, index) => (
            <span key={tag} className="flex items-center gap-1.5">
              <span className={`text-[11px] font-semibold px-2 py-1 rounded ${t.tag}`}>
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
          className={`text-[#0f2027] font-bold text-[14px] leading-snug mb-3 transition-colors ${t.titleHover}`}
        >
          {title}
        </h3>

        {/* Link — group-hover pe color change */}
        <Link
          to="#"
          className={`inline-flex items-center gap-1 text-[#4a5a55] text-[12px] font-semibold no-underline transition-colors mt-auto ${t.linkHover}`}
        >
          {linkText}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="bg-[#f0f4f3] pt-8 md:pt-12 pb-8">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">
          <p className="text-[#6a7a75] text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
            Side-by-Side
          </p>
          <h1 className="text-[#0f2027] font-extrabold text-4xl md:text-5xl tracking-tight mb-5">
            Peptide Comparisons
          </h1>
          <p className="text-[#4a5a55] text-[16px] leading-relaxed max-w-[600px]">
            Detailed breakdowns of mechanism, effectiveness, cost, FDA status, and side effects
            — so you can ask better questions at your next clinic visit.
          </p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {peptideComparisons.map((item) => (
              <ComparisonCard
                key={item.title}
                tags={item.tags}
                title={item.title}
                linkText="Read comparison"
                theme="blue"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 border-t border-[#f0f4f3]">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
                Compare telehealth brands
              </h2>
              <p className="text-[#4a5a55] text-[14px] leading-relaxed max-w-[560px]">
                Side by side breakdowns of cost, treatments, and customer ratings for the most
                searched US telehealth providers.
              </p>
            </div>
            <Link
              to="#"
              className="inline-flex items-center gap-1.5 text-[#0d5b60] font-semibold text-[14px] no-underline hover:text-[#0a4a4e] transition-colors shrink-0 whitespace-nowrap"
            >
              View all rankings
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandComparisons.map((item) => (
              <ComparisonCard
                key={item.title}
                tags={item.tags}
                title={item.title}
                linkText="Compare brands"
                theme="green"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}