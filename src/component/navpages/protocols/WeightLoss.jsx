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
    href: "/protocols/aod-9604-dosing-10mg",
    title: "AOD-9604 Dosing Protocol: 10 mg Vial — Extended Fat Loss Protocol Guide",
    desc: "AOD-9604 10 mg vial guide — 20-day supply at 500 µg/day, ideal for extended visceral fat reduction cycles with reduced reconstitution frequency.",
  },
  {
    href: "/protocols/aod-9604-dosing-5mg",
    title: "AOD-9604 Dosing Protocol: 5 mg Vial — Fat Loss Peptide Dosing Guide",
    desc: "AOD-9604 lipolytic HGH fragment dosing guide for the 5 mg vial — subcutaneous injection protocol for targeted fat loss without IGF-1 elevation.",
  },
  {
    href: "/protocols/mazdutide-dosing-10mg",
    title: "Mazdutide Dosing Protocol: 10 mg Vial — Full Titration & Maintenance Guide",
    desc: "Complete mazdutide titration from 3 mg to 9 mg maintenance using the 10 mg compounded vial, covering the full GLORY Phase 3 dose range.",
  },
  {
    href: "/protocols/mazdutide-dosing-5mg",
    title: "Mazdutide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Dosing protocol for mazdutide (IBI362, Innovent Biologics) using the 5 mg compounded vial, based on GLORY Phase 3 trial titration data.",
  },
  {
    href: "/protocols/survodutide-dosing-10mg",
    title: "Survodutide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Complete titration schedule and reconstitution guide for survodutide (BI 456906) using the 10 mg compounded vial, based on Phase 2b OASIS trial data.",
  },
  {
    href: "/protocols/cagrilintide-dosing-10mg",
    title: "Cagrilintide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Higher-volume cagrilintide protocol guide for the 10 mg compounded vial — ideal for patients advancing through mid-to-high dose titration.",
  },
  {
    href: "/protocols/cagrilintide-dosing-5mg",
    title: "Cagrilintide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Amylin analogue cagrilintide titration schedule using the 5 mg vial, based on Phase 2 CagriSema trial titration data.",
  },
  {
    href: "/protocols/retatrutide-dosing-30mg",
    title: "Retatrutide Dosing Protocol: 30 mg Vial — Maintenance Dosing & Supplies",
    desc: "Extended supply guide for the 30 mg retatrutide vial — designed for patients established on 8–12 mg maintenance dosing.",
  },
  {
    href: "/protocols/retatrutide-dosing-20mg",
    title: "Retatrutide Dosing Protocol: 20 mg Vial — Week-by-Week Titration & Supplies",
    desc: "High-concentration retatrutide protocol for patients advancing to 8–12 mg maintenance using the 20 mg compounded vial.",
  },
  {
    href: "/protocols/retatrutide-dosing-10mg",
    title: "Retatrutide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Titration schedule and supplies for the 10 mg retatrutide compounded vial, covering weeks 1–12 of the standard titration.",
  },
  {
    href: "/protocols/retatrutide-dosing-5mg",
    title: "Retatrutide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Complete dosing protocol for retatrutide (LY3437943) using the 5 mg compounded vial, based on Phase 2 trial titration schedules.",
  },
  {
    href: "/protocols/tirzepatide-dosing-30mg",
    title: "Tirzepatide Dosing Protocol: 30 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Multi-month supply guide for the 30 mg compounded tirzepatide vial — efficient high-volume reconstitution for extended cycles.",
  },
  {
    href: "/protocols/tirzepatide-dosing-15mg",
    title: "Tirzepatide Dosing Protocol: 15 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Full titration schedule and reconstitution guide for the high-dose 15 mg compounded tirzepatide vial (10 mg/mL).",
  },
  {
    href: "/protocols/tirzepatide-dosing-10mg",
    title: "Tirzepatide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Reconstitution guide, titration table, and supplies checklist for the 10 mg compounded tirzepatide vial.",
  },
  {
    href: "/protocols/tirzepatide-dosing-5mg",
    title: "Tirzepatide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Precise titration schedule, reconstitution steps, and supplies checklist for the 5 mg tirzepatide compounded vial.",
  },
  {
    href: "/protocols/semaglutide-dosing-10mg",
    title: "Semaglutide 10 mg Vial Dosing Protocol",
    desc: "Reconstitution guide, week-by-week titration, and supplies for a 10 mg semaglutide vial.",
  },
  {
    href: "/protocols/semaglutide-dosing-20mg",
    title: "Semaglutide 20 mg Vial Dosing Protocol",
    desc: "Reconstitution guide, week-by-week titration, and supplies for a 20 mg semaglutide vial.",
  },
  {
    href: "/protocols/semaglutide-dosing-5mg",
    title: "Semaglutide 5 mg Vial Dosing Protocol",
    desc: "Reconstitution guide, week-by-week titration, and supplies for a 5 mg semaglutide vial.",
  },
];

const RELATED_PEPTIDES = [
  { href: "/peptides/semaglutide", label: "Semaglutide" },
  { href: "/peptides/tirzepatide", label: "Tirzepatide" },
  { href: "/peptides/retatrutide", label: "Retatrutide" },
  { href: "/peptides/aod-9604", label: "Aod 9604" },
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
    { "@type": "ListItem", position: 3, name: "Weight Loss & GLP-1" },
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
export default function WeightLoss() {
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
                Weight Loss &amp; GLP-1
              </span>
            </span>
          </nav>

          <h1
            className="mt-4 text-3xl font-bold text-[#333333] sm:text-4xl lg:text-[2.75rem] lg:leading-[3rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Weight Loss &amp; GLP-1 Protocols
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4a4a4a]">
            GLP-1, GIP, and amylin receptor agonists for medically supervised
            weight management, appetite suppression, and metabolic health.
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
                About Weight Loss &amp; GLP-1
              </h2>
              <p className="mt-4 leading-relaxed text-[#4a4a4a]">
                GLP-1 receptor agonists and related metabolic peptides represent
                the most clinically validated class of peptide therapies for
                weight management. These protocols work by modulating appetite
                signaling, slowing gastric emptying, and improving insulin
                sensitivity — producing sustained fat loss that's distinct from
                stimulant-based approaches.
              </p>
              <h3 className="mt-6 text-base font-semibold text-[#333333]">
                What to expect
              </h3>
              <p className="mt-2 leading-relaxed text-[#4a4a4a]">
                Most weight-loss peptide protocols involve a gradual titration
                phase over 4–12 weeks, starting at a low dose to minimize
                gastrointestinal side effects before reaching a maintenance
                dose. Cycle lengths typically range from 12 to 52 weeks
                depending on the peptide and clinical goals. Weekly subcutaneous
                injections are most common.
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
                  Search for providers who offer weight loss &amp; glp-1
                  peptide therapy.
                </p>
                <a
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B]"
                  href="/clinics?peptide=semaglutide"
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