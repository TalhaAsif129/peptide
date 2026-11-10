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

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */
const RANKING_CARDS = [
  {
    href: "/best-telehealth/weight-loss",
    title: "Best Telehealth for Weight Loss (GLP-1)",
    desc: "Compounded and brand-name GLP-1 telehealth — semaglutide, tirzepatide, Wegovy, Zepbound.",
  },
  {
    href: "/best-telehealth/anti-aging-longevity",
    title: "Best Telehealth for Longevity & Anti-Aging",
    desc: "NAD+, sermorelin, glutathione, rapamycin, and other healthy-aging protocols.",
  },
  {
    href: "/best-telehealth/tissue-repair-recovery",
    title: "Best Telehealth for Recovery & Tissue Repair",
    desc: "BPC-157, TB-500, and GHK-Cu from licensed clinicians via 503A compounding pharmacies.",
  },
  {
    href: "/best-telehealth/hormone-optimization",
    title: "Best Telehealth for Hormone Optimization (TRT)",
    desc: "Testosterone replacement, enclomiphene, and growth-hormone optimization peptides.",
  },
  {
    href: "/best-telehealth/sexual-wellness",
    title: "Best Telehealth for Sexual Wellness",
    desc: "PT-141, tadalafil, sildenafil, and compounded combination formulas.",
  },
  {
    href: "/best-telehealth/cognitive-enhancement",
    title: "Best Telehealth for Cognitive & Neuro Peptides",
    desc: "Semax and Selank prescribed under physician supervision.",
  },
];

const BRAND_COMPARISONS = [
  { href: "/compare/brands/henry-meds-vs-ro", label: "Henry Meds vs Ro" },
  { href: "/compare/brands/mochi-health-vs-henry-meds", label: "Mochi Health vs Henry Meds" },
  { href: "/compare/brands/fella-health-vs-hone-health", label: "Fella Health vs Hone Health" },
  { href: "/compare/brands/winona-vs-midi-health", label: "Winona vs Midi Health" },
];

const CARD_SHADOW =
  "shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]";

/* ------------------------------------------------------------------ */
/*  Structured data (JSON-LD)                                         */
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
    { "@type": "ListItem", position: 2, name: "Best Telehealth" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function BestTelehealth() {
  return (
    <main id="main-content" className="flex-1 bg-[#f6f8f7]">
      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* ---------------- Breadcrumb ---------------- */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
        >
          <span className="inline-flex shrink-0 items-center gap-1">
            <a
              className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
              href="/"
            >
              Home
            </a>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#6b7280]" />
            <span className="max-w-[140px] truncate font-medium text-[#333333] sm:max-w-none">
              Best Telehealth
            </span>
            )
          </span>
        </nav>

        {/* ---------------- Header ---------------- */}
        <header className="mx-auto max-w-3xl">
          <h1
            className="font-heading text-3xl font-bold leading-tight text-[#333333] md:text-[40px] md:leading-[48px] md:tracking-[-0.4px] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Best Telehealth Peptide &amp; TRT Clinics (2026)
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#4a4a4a]">
            Independent rankings of the best telehealth providers across peptide
            therapy, GLP-1 weight loss, hormone optimization, and longevity
            medicine in 2026. Rankings are based on price, medication selection,
            US-state coverage, clinical oversight, and patient experience — not
            commercial relationships.
          </p>
          <p className="mt-3 text-xs text-[#6b7280]">
            Some links are affiliate links. Editorial rankings are independent.{" "}
            <a
              className="text-[#1F6CD6] hover:underline"
              href="/affiliate-disclosure"
            >
              Learn more
            </a>
            .
          </p>
        </header>

        {/* ---------------- Ranking cards ---------------- */}
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {RANKING_CARDS.map((card) => (
            <li key={card.href}>
              <a
                className={`flex h-full flex-col gap-2 rounded-lg border border-[#e5e7eb] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#1F6CD6] hover:shadow-[0_4px_12px_rgba(31,108,214,0.12)] ${CARD_SHADOW}`}
                href={card.href}
              >
                <h2
                  className="font-heading text-lg font-bold text-[#333333] tracking-[-0.18px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h2>
                <p className="text-sm text-[#4a4a4a]">{card.desc}</p>
                <span className="mt-1 inline-flex items-center text-sm font-semibold text-[#1F6CD6]">
                  See rankings →
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* ---------------- Brand comparisons ---------------- */}
        <section
          className={`mt-12 rounded-[5px] border border-[#e5e7eb] bg-white p-5 ${CARD_SHADOW}`}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2
                className="font-heading text-lg font-bold text-[#333333] tracking-[-0.18px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Popular brand comparisons
              </h2>
              <p className="mt-1 text-sm text-[#6b7280]">
                Side-by-side breakdowns of the brands most-searched together.
              </p>
            </div>
            <a
              className="hidden text-sm font-medium text-[#1F6CD6] hover:underline sm:inline"
              href="/compare"
            >
              All comparisons →
            </a>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {BRAND_COMPARISONS.map((item) => (
              <a
                key={item.href}
                className="inline-flex items-center justify-between rounded-[4px] border border-[#e5e7eb] bg-[#F7F8F9] px-3 py-2.5 text-sm font-medium text-[#333333] transition-colors hover:border-emerald-300 hover:bg-emerald-50/40 hover:text-emerald-800"
                href={item.href}
              >
                {item.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}