import React from "react";

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

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const PROTOCOLS = [
  {
    href: "/protocols/ll-37-dosing-5mg",
    title: "LL-37 Dosing Protocol: 5 mg Vial — Wound Healing & Immune Modulation Guide",
    desc: "Human cathelicidin LL-37 dosing protocol for local wound healing and systemic immune modulation using the 5 mg compounded vial.",
  },
  {
    href: "/protocols/kpv-dosing-10mg",
    title: "KPV Dosing Protocol: 10 mg Vial — Anti-Inflammatory & Gut Healing Guide",
    desc: "KPV (Lys-Pro-Val) tripeptide dosing protocol for subcutaneous and oral administration, targeting inflammatory bowel conditions, skin inflammation, and wound healing.",
  },
  {
    href: "/protocols/tb-500-dosing-10mg",
    title: "TB-500 Dosing Protocol: 10 mg Vial — Extended Loading & Maintenance Guide",
    desc: "TB-500 10 mg vial guide providing a full 2.5-week loading supply at 2 mg 2x weekly from a single reconstitution.",
  },
  {
    href: "/protocols/tb-500-dosing-5mg",
    title: "TB-500 Dosing Protocol: 5 mg Vial — Loading & Maintenance Schedule",
    desc: "Thymosin Beta-4 (TB-500) dosing guide for the 5 mg vial — loading and maintenance phases for systemic tissue repair and anti-inflammatory effects.",
  },
  {
    href: "/protocols/bpc-157-dosing-10mg",
    title: "BPC-157 Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide",
    desc: "BPC-157 10 mg vial guide for multi-week injury repair cycles at 500 µg/day, with supplies checklist and oral dosing option.",
  },
  {
    href: "/protocols/bpc-157-dosing-5mg",
    title: "BPC-157 Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies",
    desc: "Body Protection Compound-157 complete dosing guide for the 5 mg vial — subcutaneous, intramuscular, and oral protocols for tissue repair.",
  },
];

const RELATED_PEPTIDES = [
  { href: "/peptides/bpc-157", label: "Bpc 157" },
  { href: "/peptides/tb-500", label: "Tb 500" },
  { href: "/peptides/kpv", label: "Kpv" },
  { href: "/peptides/ll-37", label: "Ll 37" },
];

const CARD_SHADOW =
  "rgba(160, 160, 160, 0.45) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 3px 0px";

/* ------------------------------------------------------------------ */
/*  Structured data                                                   */
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
    { "@type": "ListItem", position: 3, name: "Tissue Repair & Recovery" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                    */
/* ------------------------------------------------------------------ */
const ProtocolCard = ({ protocol }) => (
  <a
    className="group flex flex-col overflow-hidden rounded-[5px] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
    href={protocol.href}
    style={{ boxShadow: CARD_SHADOW }}
  >
    <div className="flex flex-1 flex-col p-5">
      <h3
        className="line-clamp-2 text-lg font-semibold leading-snug text-[#333333] transition-colors group-hover:text-[#1F6CD6]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {protocol.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b7280]">
        {protocol.desc}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-[#1F6CD6] transition-colors group-hover:text-[#1a5bb5]">
        View protocol
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </div>
  </a>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function TissueRepair() {
  return (
    <main id="main-content" className="flex-1">
      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="bg-[#FDFAEE]">
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
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
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#6b7280]" />
              <a
                className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
                href="/protocols"
              >
                Protocols
              </a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#6b7280]" />
              <span className="max-w-[140px] truncate font-medium text-[#333333] sm:max-w-none">
                Tissue Repair &amp; Recovery
              </span>
            </span>
          </nav>

          <h1
            className="mt-4 text-3xl font-bold text-[#333333] sm:text-4xl lg:text-[2.75rem] lg:leading-[3rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tissue Repair &amp; Recovery Protocols
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4a4a4a]">
            Cytoprotective and regenerative peptides for musculoskeletal
            injuries, gut healing, and systemic tissue repair.
          </p>
        </div>
      </section>

      {/* ---------------- Content + sidebar ---------------- */}
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* =============== Main column =============== */}
          <div className="min-w-0 space-y-10">
            {/* About */}
            <section
              className="rounded-[5px] border border-[#e5e7eb] bg-white p-6 sm:p-8"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <h2
                className="text-xl font-bold text-[#333333] sm:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                About Tissue Repair &amp; Recovery
              </h2>
              <p className="mt-4 leading-relaxed text-[#4a4a4a]">
                Cytoprotective and regenerative peptides like BPC-157 and TB-500
                have attracted significant clinical interest for accelerating
                musculoskeletal healing, reducing inflammation, and supporting
                gut integrity. These peptides work through distinct but
                complementary mechanisms — BPC-157 through nitric oxide and
                growth factor pathways, TB-500 through actin regulation and cell
                migration.
              </p>
              <h3 className="mt-6 text-base font-semibold text-[#333333]">
                What to expect
              </h3>
              <p className="mt-2 leading-relaxed text-[#4a4a4a]">
                Tissue repair protocols are typically run over shorter 4–8 week
                cycles, often with twice-weekly or daily injections during the
                loading phase. Many practitioners use localized subcutaneous or
                intramuscular injection near the injury site. Benefits are often
                noticed within 2–4 weeks for acute injuries, while chronic
                issues may require longer cycles.
              </p>
            </section>

            {/* Protocols grid */}
            <section>
              <h2
                className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6b7280]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {PROTOCOLS.length} Protocols in this category
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {PROTOCOLS.map((p) => (
                  <ProtocolCard key={p.href} protocol={p} />
                ))}
              </div>
            </section>

            {/* Related peptides */}
            <section
              className="rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-6 sm:p-8"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <h2
                className="text-xl font-bold text-[#333333] sm:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Related peptide profiles
              </h2>
              <p className="mt-2 text-sm text-[#6b7280]">
                Learn about the peptides used in these protocols — mechanisms,
                research, and clinical context.
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {RELATED_PEPTIDES.map((p) => (
                  <li key={p.href}>
                    <a
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-sm font-medium text-[#333333] transition-colors hover:border-[#333333] hover:bg-[#333333] hover:text-white"
                      href={p.href}
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6CD6] hover:underline"
                href="/peptides"
              >
                View full peptide encyclopedia →
              </a>
            </section>

            {/* Disclaimer */}
            <div className="rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#6b7280]" />
                <p className="text-sm leading-relaxed text-[#6b7280]">
                  Protocol guides are for informational purposes only and do not
                  constitute medical advice. Dosing, cycle length, and peptide
                  selection should be determined by a licensed healthcare
                  provider based on your individual health profile.
                </p>
              </div>
            </div>
          </div>

          {/* =============== Sidebar =============== */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
                <h3
                  className="text-sm font-bold text-[#333333]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  All protocols
                </h3>
                <a
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] border-2 border-[#333333] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#333333] hover:text-white"
                  href="/protocols"
                >
                  Browse all categories
                </a>
              </div>

              <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
                <h3
                  className="text-sm font-bold text-[#333333]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Find clinics
                </h3>
                <p className="mt-2 text-xs text-[#6b7280]">
                  Search for providers who offer tissue repair &amp; recovery
                  peptide therapy.
                </p>
                <a
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B]"
                  href="/clinics?peptide=bpc-157"
                >
                  Browse clinics
                </a>
              </div>

              <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
                <h3
                  className="text-sm font-bold text-[#333333]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Calculate your dose
                </h3>
                <a
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] border-2 border-[#333333] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#333333] hover:text-white"
                  href="/tools/peptide-calculator"
                >
                  Open calculator
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}