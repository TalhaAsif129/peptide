import React from "react";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
const ChevronRightIcon = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ArrowRightIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const PROTOCOLS = [
  {
    href: "/protocols/adamax-dosing-5mg",
    title:
      "Adamax Dosing Protocol: 5 mg Vial — Cognitive & Neurological Support Guide",
    desc: "Adamax peptide complex dosing guide — cognitive enhancement, vasopressin-like neuroprotective signaling, and memory consolidation support.",
  },
  {
    href: "/protocols/pinealon-dosing-20mg",
    title:
      "Pinealon Dosing Protocol: 20 mg Vial — Neuroprotection & Sleep Regulation Guide",
    desc: "Russian pineal bioregulator Pinealon (Glu-Asp-Arg tripeptide) dosing guide for cognitive protection, circadian rhythm support, and anti-aging neuroprotection.",
  },
  {
    href: "/protocols/cerebrolysin-dosing-60mg",
    title:
      "Cerebrolysin Dosing Protocol: 60 mg Vial — IV Infusion & Subcutaneous Guide",
    desc: "Cerebrolysin neurotrophic peptide mixture dosing guide — IV infusion protocol for neuroprotection, cognitive enhancement, and stroke/dementia support.",
  },
  {
    href: "/protocols/dsip-dosing-10mg",
    title: "DSIP Dosing Protocol: 10 mg Vial — Extended Sleep Protocol Guide",
    desc: "DSIP 10 mg vial guide — 14-week nightly supply at 100 µg/night, ideal for chronic insomnia protocols.",
  },
  {
    href: "/protocols/dsip-dosing-5mg",
    title:
      "DSIP Dosing Protocol: 5 mg Vial — Delta Sleep & Cortisol Modulation Guide",
    desc: "Delta sleep-inducing peptide (DSIP) dosing protocol for sleep architecture restoration, slow-wave sleep induction, and circadian normalization.",
  },
  {
    href: "/protocols/pe-22-28-dosing-10mg",
    title:
      "PE-22-28 Dosing Protocol: 10 mg Vial — Rapid Antidepressant Effect Guide",
    desc: "PE-22-28 synthetic spinorphin analogue dosing guide — fast-acting antidepressant peptide with TRPV1 modulation and enkephalin stabilization.",
  },
];

const CARD_SHADOW =
  "rgba(160, 160, 160, 0.45) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 3px 0px";

export default function CognitiveNeuro() {
  return (
    <main id="main-content" className="flex-1 bg-[#F6F8F7]">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-[#FDFAEE]">
        <div className="mx-auto w-full  px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
          >
            <span className="inline-flex shrink-0 items-center gap-1">
              <a
                className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
                href="/"
              >
                Home
              </a>
              <ChevronRightIcon />
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <a
                className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
                href="/protocols"
              >
                Protocols
              </a>
              <ChevronRightIcon />
            </span>
            <span className="truncate font-medium text-[#333333]">
              Cognitive, Neuro & Sleep
            </span>
          </nav>

          <div className="mt-4">
            <h1
              className="text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cognitive, Neuro & Sleep Protocols
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#6b7280]">
              Nootropic, neuroprotective, and anxiolytic neuropeptides for
              cognitive enhancement, memory formation, stress reduction, and
              restorative sleep quality.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Main 2-Column Layout ---------------- */}
      <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* ================= LEFT SIDE (Main Content) ================= */}
          <div className="flex flex-col gap-8">
            {/* About Box */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">
                About Cognitive, Neuro & Sleep
              </h2>
              <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-6">
                Nootropic neuropeptides like Semax and Selank modulate BDNF,
                serotonin, and dopamine pathways to produce anxiolytic,
                cognitive-enhancing, and neuroprotective effects. Unlike
                synthetic nootropics, these peptides are derived from or modeled
                on endogenous regulatory sequences, offering a distinct safety
                and tolerability profile.
              </p>

              <h3 className="font-bold text-[#333333] text-[15px] mb-2">
                What to expect
              </h3>
              <p className="text-[#4a5a55] text-[15px] leading-relaxed">
                Cognitive peptide protocols are commonly administered as
                intranasal drops or subcutaneous injections, with effects often
                noticed within days to weeks. Courses typically run 2–4 weeks
                followed by an off period. Stack timing matters: some
                practitioners dose in the morning for cognitive enhancement,
                others in the evening for sleep and recovery benefits.
              </p>
            </div>

            {/* Protocols Count */}
            <div>
              <p className="text-[13px] font-bold text-[#6b7280] tracking-wider uppercase mb-4">
                10 PROTOCOLS IN THIS CATEGORY
              </p>

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
              <div className="w-full bg-white border border-[#e5e7eb] rounded-xl p-5 md:p-6 flex items-start gap-3 md:gap-4 mt-8 shadow-sm">
                {/* Shield Check Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4b5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                {/* Text */}
                <p className="text-[#4b5563] text-[14px] md:text-[15px] leading-relaxed m-0">
                  Protocol guides are for informational purposes only and do not
                  constitute medical advice. Dosing, cycle length, and peptide
                  selection should be determined by a licensed healthcare
                  provider based on your individual health profile.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (Sticky Sidebar) ================= */}
          <aside className="sticky top-24 flex flex-col gap-6">
            {/* Box 1: All Protocols */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#333333] mb-3">
                All protocols
              </h3>
              <a
                href="/protocols"
                className="flex items-center justify-center w-full border border-[#0f2027] text-[#0f2027] font-semibold text-[14px] py-2.5 rounded hover:bg-gray-50 transition-colors"
              >
                Browse all categories
              </a>
            </div>

            {/* Box 2: Find Clinics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#333333] mb-2">
                Find clinics
              </h3>
              <p className="text-[12px] text-[#6b7280] mb-4 leading-relaxed">
                Search for providers who offer cognitive, neuro & sleep peptide
                therapy.
              </p>
              <a
                href="/clinics"
                className="flex items-center justify-center w-full bg-[#fde047] text-[#333333] font-semibold text-[14px] py-2.5 rounded hover:bg-[#facc15] transition-colors shadow-sm"
              >
                Browse clinics
              </a>
            </div>

            {/* Box 3: Calculate your dose */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-[14px] font-bold text-[#333333] mb-3">
                Calculate your dose
              </h3>
              <a
                href="/tools"
                className="flex items-center justify-center w-full border border-[#0f2027] text-[#0f2027] font-semibold text-[14px] py-2.5 rounded hover:bg-gray-50 transition-colors"
              >
                Open calculator
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
