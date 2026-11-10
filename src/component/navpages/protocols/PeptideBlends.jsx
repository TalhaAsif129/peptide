import React from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
const ChevronRightIcon = ({ className = "h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ArrowRightIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} aria-hidden="true" fill="none" viewBox="0 0 24 24"
    strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const ShieldCheckIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} aria-hidden="true" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const peptides = ["Bpc 157", "Cjc 1295", "Ipamorelin"];

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const PROTOCOLS = [
  {
    href: "/protocols/klow-blend-dosing",
    title: "KLOW Blend Dosing Protocol — BPC-157, TB-500, KPV & GHK-Cu Guide",
    desc: "KLOW peptide blend (BPC-157 + TB-500 + KPV + GHK-Cu) dosing guide for tissue repair, anti-inflammatory support, and extracellular matrix remodeling — the GLOW blend plus KPV.",
  },
  {
    href: "/protocols/glow-blend-dosing",
    title: "GLOW Blend Dosing Protocol — BPC-157, TB-500 & GHK-Cu Skin & Repair Guide",
    desc: "GLOW peptide blend (BPC-157 + TB-500 + GHK-Cu) dosing guide for tissue repair, angiogenesis, and collagen and connective-tissue remodeling.",
  },
];

const CARD_SHADOW =
  "rgba(160, 160, 160, 0.45) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 3px 0px";

/* ------------------------------------------------------------------ */
/*  Structured Data (JSON-LD)                                         */
/* ------------------------------------------------------------------ */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: { "@id": "https://www.mypeptidematch.com/", name: "Home" },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Protocols",
      item: { "@id": "https://www.mypeptidematch.com/protocols", name: "Protocols" },
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Peptide Blends & Stacks Protocols",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function PeptideBlends() {
  return (
    <main id="main-content" className="flex-1 bg-[#F6F8F7]">
      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="bg-[#FDFAEE]">
        <div className="mx-auto w-full  px-4 pb-8 pt-10 sm:px-6 sm:pb-28 sm:pt-12 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
          >
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none" href="/">
                Home
              </a>
              <ChevronRightIcon />
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none" href="/protocols">
                Protocols
              </a>
              <ChevronRightIcon />
            </span>
            <span className="truncate font-medium text-[#333333]">
              Peptide Blends & Stacks
            </span>
          </nav>

          <div className="mt-4">
            <h1
              className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Peptide Blends & Stacks Protocols
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#6b7280]">
              Pre-mixed blends and strategic co-administration stacks targeting multiple complementary biological pathways simultaneously for enhanced outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Main 2-Column Layout ---------------- */}
      <div className="mx-auto w-full  px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          
          {/* ================= LEFT SIDE (Main Content) ================= */}
          <div className="flex flex-col gap-8">
            
            {/* About Box */}
            <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <h2 
                className="text-[24px] md:text-[26px] font-bold text-[#333333] mb-4" 
                style={{ fontFamily: "var(--font-heading)" }}
              >
                About Peptide Blends & Stacks
              </h2>
              <p className="text-[16px] text-[#4b5563] leading-[1.7] mb-7">
                Pre-formulated peptide blends and strategic co-administration stacks target multiple physiological pathways simultaneously, often producing synergistic effects that exceed what either peptide achieves alone. Common combinations include BPC-157 + TB-500 for comprehensive tissue repair, and CJC-1295 + Ipamorelin for maximal GH release.
              </p>
              <h3 className="text-[16px] font-bold text-[#333333] mb-3">
                What to expect
              </h3>
              <p className="text-[16px] text-[#4b5563] leading-[1.7] m-0">
                Stack protocols inherit the dosing structure of their component peptides, but timing and frequency are optimized for compatibility. Some blends come pre-mixed in a single vial for convenience; others require separate reconstitution and sequential injection. Always confirm compatibility and interaction profiles with your prescribing provider.
              </p>
            </div>

            {/* Protocols Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {PROTOCOLS.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="group flex flex-col overflow-hidden rounded-[5px] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                  style={{ boxShadow: CARD_SHADOW }}
                >
                  <div className="flex flex-1 flex-col p-5">
                    <h3
                      className="text-base font-semibold leading-snug text-[#333333] transition-colors group-hover:text-[#1F6CD6]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#6b7280]">
                      {p.desc}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1F6CD6] transition-colors group-hover:text-[#1a5bb5]">
                        View protocol
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* ===== Related Peptide Profiles Box ===== */}
            <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-6 md:p-8">
              <h2 
                className="text-[24px] md:text-[26px] font-bold text-[#333333] mb-2" 
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Related peptide profiles
              </h2>
              <p className="text-[16px] text-[#6b7280] mb-6">
                Learn about the peptides used in these protocols — mechanisms, research, and clinical context.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {peptides.map((peptide) => (
                  <Link
                    key={peptide}
                    to={`/peptides/${peptide.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#d1d5db] text-[15px] font-medium text-[#333333] hover:bg-gray-50 transition-colors"
                  >
                    {peptide}
                  </Link>
                ))}
              </div>
              <Link 
                to="/peptides" 
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#1F6CD6] hover:text-[#1a5bb5] transition-colors"
              >
                View full peptide encyclopedia <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* ===== Medical Disclaimer Box ===== */}
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 md:p-6 flex items-start gap-3 md:gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <ShieldCheckIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5 text-[#4b5563]" />
              <p className="text-[#4b5563] text-[14px] md:text-[15px] leading-relaxed m-0">
                Protocol guides are for informational purposes only and do not constitute medical advice. Dosing, cycle length, and peptide selection should be determined by a licensed healthcare provider based on your individual health profile.
              </p>
            </div>

          </div>

          {/* ================= RIGHT SIDE (Sticky Sidebar) ================= */}
          <aside className="sticky top-24 flex flex-col gap-6">
            
            {/* Box 1: All Protocols */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#333333] mb-3">All protocols</h3>
              <Link to="/protocols" className="flex items-center justify-center w-full border border-[#0f2027] text-[#0f2027] font-semibold text-[14px] py-2.5 rounded hover:bg-gray-50 transition-colors">
                Browse all categories
              </Link>
            </div>

            {/* Box 2: Find Clinics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#333333] mb-2">Find clinics</h3>
              <p className="text-[12px] text-[#6b7280] mb-4 leading-relaxed">
                Search for providers who offer peptide blend & stack therapy.
              </p>
              <Link to="/clinics" className="flex items-center justify-center w-full bg-[#fde047] text-[#333333] font-semibold text-[14px] py-2.5 rounded hover:bg-[#facc15] transition-colors shadow-sm">
                Browse clinics
              </Link>
            </div>

            {/* Box 3: Calculate your dose */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#333333] mb-3">Calculate your dose</h3>
              <Link to="/tools" className="flex items-center justify-center w-full border border-[#0f2027] text-[#0f2027] font-semibold text-[14px] py-2.5 rounded hover:bg-gray-50 transition-colors">
                Open calculator
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}