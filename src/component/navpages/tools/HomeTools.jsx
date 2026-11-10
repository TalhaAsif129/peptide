// src/component/pages/ToolsPage/ToolsPage.jsx
import { Link } from "react-router-dom";

export default function ToolsPage() {
  const tools = [
    {
      title: "Peptide Reconstitution Calculator",
      description:
        "Calculate exact insulin syringe units from vial size, bacteriostatic water volume, and desired dose. Includes peptide presets, cost-per-dose calculator, and shareable results.",
      tag: "MOST POPULAR",
      tagColor: "teal",
      icon: "calculator",
    },
    {
      title: "Peptide Titration Calculator",
      description:
        "Generate a personalized week-by-week dose escalation schedule with exact dates. Covers semaglutide, tirzepatide, retatrutide, liraglutide, CJC-1295/Ipamorelin, and 10+ more protocols.",
      tag: "NEW",
      tagColor: "gray",
      icon: "chart",
      highlighted: true,
    },
    {
      title: "Peptide Units Converter",
      description:
        "Convert peptide doses between mg, mcg, mL, and insulin syringe units. Includes semaglutide and tirzepatide concentration presets, a bacteriostatic water reconstitution helper, and a common doses reference chart.",
      tag: "NEW",
      tagColor: "gray",
      icon: "converter",
    },
    {
      title: "BAC Water Calculator (How Much to Add)",
      description:
        'Answer "how much bacteriostatic water should I add?" Enter vial size and dose to get a recommended BAC water amount plus concentration (mg/mL) and syringe units.',
      tag: "NEW",
      tagColor: "gray",
      icon: "bac",
    },
    {
      title: "Semaglutide Reconstitution Calculator",
      description:
        "Enter your vial size (mg), bacteriostatic water volume (mL), and weekly dose to get the exact insulin syringe units to draw. Works for 5 mg and 10 mg compounded semaglutide vials.",
      tag: null,
      icon: "calculator",
    },
    {
      title: "Tirzepatide Reconstitution Calculator",
      description:
        "Enter your vial size (mg), bacteriostatic water volume (mL), and weekly dose to get exact syringe units. Works for 5 mg, 10 mg, and 15 mg compounded tirzepatide vials.",
      tag: null,
      icon: "calculator",
    },
    {
      title: "Semaglutide Reconstitution Calculator",
      description:
        "Enter your vial size (mg), bacteriostatic water volume (mL), and weekly dose to get the exact insulin syringe units to draw. Works for 5 mg and 10 mg compounded semaglutide vials.",
      tag: null,
      icon: "calculator",
    },
    {
      title: "Tirzepatide Reconstitution Calculator",
      description:
        "Enter your vial size (mg), bacteriostatic water volume (mL), and weekly dose to get exact syringe units. Works for 5 mg, 10 mg, and 15 mg compounded tirzepatide vials.",
      tag: null,
      icon: "calculator",
    },
    {
      title: "Semaglutide Reconstitution Calculator",
      description:
        "Enter your vial size (mg), bacteriostatic water volume (mL), and weekly dose to get the exact insulin syringe units to draw. Works for 5 mg and 10 mg compounded semaglutide vials.",
      tag: null,
      icon: "calculator",
    },
    
  ];

  // Icon SVG mapping
  const icons = {
    calculator: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d7d85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="11" x2="8" y2="11" />
        <line x1="12" y1="11" x2="12" y2="11" />
        <line x1="16" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="8" y2="15" />
        <line x1="12" y1="15" x2="12" y2="15" />
        <line x1="16" y1="15" x2="16" y2="15" />
        <line x1="8" y1="19" x2="16" y2="19" />
      </svg>
    ),
    chart: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d7d85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
    converter: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d7d85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8h14l-4-4" />
        <path d="M21 16H7l4 4" />
      </svg>
    ),
    bac: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d7d85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="12" x2="9" y2="12" />
        <line x1="12" y1="12" x2="12" y2="12" />
        <line x1="15" y1="12" x2="15" y2="12" />
      </svg>
    ),
  };

  return (
    <div className="bg-[#eef4f3] min-h-screen font-sans">

      {/* ===== Top Section (Light BG) ===== */}
      <section className="bg-[#eef4f3] pt-8 md:pt-12 pb-10">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[14px] text-[#6a7a75] mb-6">
            <Link to="/" className="text-[#4a5a55] no-underline hover:text-[#0d7d85]">
              Home
            </Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <span className="text-[#4a5a55] font-medium">Tools</span>
          </nav>

          {/* Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white text-[#0d5b60] text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border border-[#d5e5e2]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Free Tools & Calculators
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[#0f2027] font-extrabold text-4xl md:text-5xl tracking-tight mb-5">
            Free Peptide Tools
          </h1>

          {/* Description */}
          <p className="text-[#4a5a55] text-[16px] leading-relaxed max-w-[520px]">
            Free calculators and reference tools for peptide therapy dosing,
            reconstitution, titration, and research — built for both patients
            and providers.
          </p>

        </div>
      </section>

      {/* ===== Bottom Section (White BG with Cards) ===== */}
      <section className="bg-white pt-12 pb-16">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">

          {/* Cards Grid — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {tools.map((tool) => (
              <div
                key={tool.title}
                className={`bg-white rounded-2xl p-6 flex flex-col border border-[#e2e8e6] transition-shadow hover:shadow-md ${
                  tool.highlighted
                    ? ""
                    : "border-[#e2e8e6]"
                }`}
              >
                {/* Top Row — Icon + Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#e8f1ef] flex items-center justify-center shrink-0">
                    {icons[tool.icon]}
                  </div>

                  {tool.tag && (
                    <span
                      className={`text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${
                        tool.tagColor === "teal"
                          ? "bg-[#0d5b60] text-white"
                          : "bg-[#d5e5e2] text-[#0d5b60]"
                      }`}
                    >
                      {tool.tag}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[#0f2027] font-bold text-[17px] leading-snug mb-3">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-[#4a5a55] text-[14px] leading-relaxed mb-6 flex-1">
                  {tool.description}
                </p>

                {/* Open Tool Link */}
                <Link
                  to="#"
                  className="inline-flex items-center gap-1.5 text-[#0d5b60] font-bold text-[15px] no-underline hover:gap-2.5 transition-all mt-auto"
                >
                  Open tool
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}