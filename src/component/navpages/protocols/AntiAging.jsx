import React from "react";

/* ================================================================== */
/*  SHARED ICONS                                                      */
/* ================================================================== */
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

/* ================================================================== */
/*  SHARED CONSTANTS                                                  */
/* ================================================================== */
const CARD_SHADOW =
  "rgba(160, 160, 160, 0.45) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 3px 0px";

const SITE_URL = "https://www.mypeptidematch.com";

/* ================================================================== */
/*  SHARED SUB-COMPONENT                                              */
/* ================================================================== */
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

/* ================================================================== */
/*  GENERIC CATEGORY PAGE                                             */
/* ================================================================== */
function ProtocolCategoryPage({ category }) {
  const {
    title,
    description,
    about,
    whatToExpect,
    protocols,
    relatedPeptides,
    clinicFilter,
  } = category;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: { "@id": `${SITE_URL}/`, name: "Home" },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Protocols",
        item: { "@id": `${SITE_URL}/protocols`, name: "Protocols" },
      },
      { "@type": "ListItem", position: 3, name: title },
    ],
  };

  return (
    <main id="main-content" className="flex-1">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
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
                {title}
              </span>
            </span>
          </nav>

          <h1
            className="mt-4 text-3xl font-bold text-[#333333] sm:text-4xl lg:text-[2.75rem] lg:leading-[3rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title} Protocols
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4a4a4a]">
            {description}
          </p>
        </div>
      </section>

      {/* Content + sidebar */}
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* Main column */}
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
                About {title}
              </h2>
              <p className="mt-4 leading-relaxed text-[#4a4a4a]">{about}</p>
              <h3 className="mt-6 text-base font-semibold text-[#333333]">
                What to expect
              </h3>
              <p className="mt-2 leading-relaxed text-[#4a4a4a]">
                {whatToExpect}
              </p>
            </section>

            {/* Protocols grid */}
            <section>
              <h2
                className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6b7280]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {protocols.length} Protocols in this category
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {protocols.map((p) => (
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
                {relatedPeptides.map((p) => (
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

          {/* Sidebar */}
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
                  Search for providers who offer{" "}
                  {title.toLowerCase()} peptide therapy.
                </p>
                <a
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B]"
                  href={`/clinics?peptide=${clinicFilter}`}
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

/* ================================================================== */
/*  CATEGORY DATA                                                     */
/* ================================================================== */

const WEIGHT_LOSS = {
  title: "Weight Loss & GLP-1",
  description:
    "GLP-1, GIP, and amylin receptor agonists for medically supervised weight management, appetite suppression, and metabolic health.",
  about:
    "GLP-1 receptor agonists and related metabolic peptides represent the most clinically validated class of peptide therapies for weight management. These protocols work by modulating appetite signaling, slowing gastric emptying, and improving insulin sensitivity — producing sustained fat loss that's distinct from stimulant-based approaches.",
  whatToExpect:
    "Most weight-loss peptide protocols involve a gradual titration phase over 4–12 weeks, starting at a low dose to minimize gastrointestinal side effects before reaching a maintenance dose. Cycle lengths typically range from 12 to 52 weeks depending on the peptide and clinical goals. Weekly subcutaneous injections are most common.",
  clinicFilter: "semaglutide",
  protocols: [
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
  ],
  relatedPeptides: [
    { href: "/peptides/semaglutide", label: "Semaglutide" },
    { href: "/peptides/tirzepatide", label: "Tirzepatide" },
    { href: "/peptides/retatrutide", label: "Retatrutide" },
    { href: "/peptides/aod-9604", label: "Aod 9604" },
  ],
};

const GROWTH_HORMONE = {
  title: "Growth Hormone & GHRH",
  description:
    "GHRH analogues, GHRPs, and recombinant HGH protocols for body composition, recovery, and GH axis optimization.",
  about:
    "Growth hormone-releasing hormone (GHRH) analogues and GH secretagogues stimulate the pituitary to produce growth hormone in a pulsatile, physiologic pattern — unlike exogenous HGH injections. This makes them a preferred choice for body composition improvement, recovery acceleration, and GH axis optimization under medical supervision.",
  whatToExpect:
    "GHRH protocols are often run for 3–6 month cycles with an off period, typically dosed in the evenings to align with the natural nocturnal GH pulse. Stacking a GHRH analogue (e.g., CJC-1295) with a GHRP (e.g., Ipamorelin) is a common clinical approach for synergistic GH release. Results build gradually over weeks.",
  clinicFilter: "sermorelin",
  protocols: [
    {
      href: "/protocols/gonadorelin-dosing-2mg",
      title: "Gonadorelin Dosing Protocol: 2 mg Vial — TRT Support & LH Pulse Guide",
      desc: "Gonadorelin (GnRH) dosing protocol for maintaining HPG axis function and testicular size during testosterone replacement therapy.",
    },
    {
      href: "/protocols/mgf-dosing-5mg",
      title: "MGF Dosing Protocol: 5 mg Vial — Post-Workout Dosing Schedule & Supplies",
      desc: "Mechano Growth Factor (MGF) dosing guide for the 5 mg vial, based on local muscle injection protocols for satellite cell activation and muscle repair.",
    },
    {
      href: "/protocols/igf-1-lr3-dosing-1mg",
      title: "IGF-1 LR3 Dosing Protocol: 1 mg Vial — Daily Dosing Schedule & Supplies",
      desc: "Complete IGF-1 LR3 dosing guide for the 1 mg vial, including acetic acid reconstitution technique, dosing table, and cycle protocol.",
    },
    {
      href: "/protocols/hgh-191aa-dosing-10iu",
      title: "HGH 191AA Dosing Protocol: 10 IU Vial — Daily Dosing Schedule & Supplies",
      desc: "Recombinant human growth hormone (HGH 191AA) dosing guide for the 10 IU compounded vial, with concentration calculations and reconstitution steps.",
    },
    {
      href: "/protocols/tesamorelin-dosing-20mg",
      title: "Tesamorelin Dosing Protocol: 20 mg Vial — 10-Day Supply Guide",
      desc: "High-volume tesamorelin supply from the 20 mg vial — provides 10 daily doses at the FDA-approved 2 mg/day rate, minimizing reconstitution frequency.",
    },
    {
      href: "/protocols/tesamorelin-dosing-10mg",
      title: "Tesamorelin Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide",
      desc: "Tesamorelin 10 mg vial guide — provides 5 days of the FDA-approved 2 mg/day dose from a single reconstitution, reducing handling frequency.",
    },
    {
      href: "/protocols/tesamorelin-dosing-5mg",
      title: "Tesamorelin Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies",
      desc: "Tesamorelin FDA-approved GHRH analogue dosing guide for the 5 mg vial, based on the Egrifta SV 2 mg/day protocol for visceral fat reduction.",
    },
    {
      href: "/protocols/cjc-1295-nodac-dosing-5mg",
      title: "CJC-1295 No DAC Dosing Protocol: 5 mg Vial — Pulsatile GHRH Dosing Guide",
      desc: "CJC-1295 without DAC (Modified GRF 1-29) protocol — the pulsatile GHRH analogue for 2–3x daily injection alongside GHRPs.",
    },
    {
      href: "/protocols/cjc-1295-dac-dosing-5mg",
      title: "CJC-1295 DAC Dosing Protocol: 5 mg Vial — Multi-Week Supply Guide",
      desc: "Extended CJC-1295 DAC supply from the 5 mg vial — provides 2–5 weeks of once-weekly 1–2 mg dosing from a single reconstitution.",
    },
    {
      href: "/protocols/cjc-1295-dac-dosing-2mg",
      title: "CJC-1295 DAC Dosing Protocol: 2 mg Vial — Weekly Dosing Schedule & Supplies",
      desc: "Complete CJC-1295 DAC protocol for the 2 mg vial — the long-acting GHRH analogue with Drug Affinity Complex for once-to-twice weekly subcutaneous dosing.",
    },
    {
      href: "/protocols/ghrp-6-dosing-10mg",
      title: "GHRP-6 Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide",
      desc: "High-volume GHRP-6 protocol for the 10 mg vial — the preferred choice for patients on 300 µg 3x daily maximum-output protocols.",
    },
    {
      href: "/protocols/ghrp-6-dosing-5mg",
      title: "GHRP-6 Dosing Protocol: 5 mg Vial — Full Cycle Dosing Schedule & Supplies",
      desc: "Complete GHRP-6 dosing protocol using the 5 mg vial, covering full 4–12 week GH secretagogue cycles with supplies checklist.",
    },
    {
      href: "/protocols/ghrp-6-dosing-2mg",
      title: "GHRP-6 Dosing Protocol: 2 mg Vial — Starter Dosing Guide & Supplies",
      desc: "GHRP-6 starter protocol using the compact 2 mg vial — appropriate for testing sensitivity before progressing to larger vials.",
    },
    {
      href: "/protocols/ghrp-2-dosing-10mg",
      title: "GHRP-2 Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide",
      desc: "High-volume GHRP-2 supply from the 10 mg vial for patients on established 200–300 µg 2–3x daily protocols.",
    },
    {
      href: "/protocols/ghrp-2-dosing-5mg",
      title: "GHRP-2 Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies",
      desc: "Complete GHRP-2 dosing guide using the 5 mg vial — a potent ghrelin receptor agonist for maximal GH stimulation.",
    },
    {
      href: "/protocols/ipamorelin-dosing-10mg",
      title: "Ipamorelin Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide",
      desc: "Multi-week ipamorelin supply from the 10 mg vial — ideal for patients on established 300 µg once-to-three-daily protocols.",
    },
    {
      href: "/protocols/ipamorelin-dosing-5mg",
      title: "Ipamorelin Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies",
      desc: "Week-by-week ipamorelin dosing guide using the 5 mg vial — the cleanest GHRP for precise, cortisol-free growth hormone stimulation.",
    },
    {
      href: "/protocols/sermorelin-dosing-10mg",
      title: "Sermorelin Dosing Protocol: 10 mg Vial — Extended Cycle Dosing & Supplies",
      desc: "Two-month supply guide for sermorelin using the 10 mg vial — efficient for patients on established 300–500 µg nightly protocols.",
    },
    {
      href: "/protocols/sermorelin-dosing-5mg",
      title: "Sermorelin Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies",
      desc: "Week-by-week subcutaneous dosing schedule for sermorelin GHRH analogue using the 5 mg vial, with reconstitution steps and supplies.",
    },
  ],
  relatedPeptides: [
    { href: "/peptides/sermorelin", label: "Sermorelin" },
    { href: "/peptides/cjc-1295", label: "Cjc 1295" },
    { href: "/peptides/ipamorelin", label: "Ipamorelin" },
    { href: "/peptides/tesamorelin", label: "Tesamorelin" },
  ],
};

const TISSUE_REPAIR = {
  title: "Tissue Repair & Recovery",
  description:
    "Cytoprotective and regenerative peptides for musculoskeletal injuries, gut healing, and systemic tissue repair.",
  about:
    "Cytoprotective and regenerative peptides like BPC-157 and TB-500 have attracted significant clinical interest for accelerating musculoskeletal healing, reducing inflammation, and supporting gut integrity. These peptides work through distinct but complementary mechanisms — BPC-157 through nitric oxide and growth factor pathways, TB-500 through actin regulation and cell migration.",
  whatToExpect:
    "Tissue repair protocols are typically run over shorter 4–8 week cycles, often with twice-weekly or daily injections during the loading phase. Many practitioners use localized subcutaneous or intramuscular injection near the injury site. Benefits are often noticed within 2–4 weeks for acute injuries, while chronic issues may require longer cycles.",
  clinicFilter: "bpc-157",
  protocols: [
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
  ],
  relatedPeptides: [
    { href: "/peptides/bpc-157", label: "Bpc 157" },
    { href: "/peptides/tb-500", label: "Tb 500" },
    { href: "/peptides/kpv", label: "Kpv" },
    { href: "/peptides/ll-37", label: "Ll 37" },
  ],
};

const ANTI_AGING = {
  title: "Anti-Aging & Longevity",
  description:
    "Telomerase activators, senolytics, mitochondrial peptides, and NAD+ protocols targeting the hallmarks of cellular aging.",
  about:
    "Anti-aging and longevity peptides target the fundamental mechanisms of cellular aging — telomere attrition, mitochondrial dysfunction, senescence accumulation, and NAD+ decline. From Epithalon's telomerase activation to SS-31's mitochondrial protection, these protocols represent the frontier of precision longevity medicine.",
  whatToExpect:
    "Longevity peptide protocols vary considerably in duration and frequency. Epithalon is typically run as a short intensive course (10–20 days) 1–2 times per year. NAD+ protocols are often IV-based or subcutaneous daily for several weeks. Benefits tend to be cumulative and may take 1–3 months to manifest fully.",
  clinicFilter: "epithalon",
  protocols: [
    {
      href: "/protocols/mots-c-dosing-5mg",
      title: "MOTS-C Dosing Protocol: 5 mg Vial — Mitochondrial Hormone & Exercise Guide",
      desc: "MOTS-C mitochondrial-derived peptide dosing guide — AMPK activation, insulin sensitization, and exercise performance via the one-carbon metabolic cycle.",
    },
    {
      href: "/protocols/slu-pp-332-dosing-10mg",
      title: "SLU-PP-332 Dosing Protocol: 10 mg Vial — ERR Agonist & Cardio Mimetic Guide",
      desc: "SLU-PP-332 ERRalpha/gamma agonist dosing guide — exercise mimetic for cardiac mitochondrial biogenesis and endurance optimization.",
    },
    {
      href: "/protocols/aicar-dosing-50mg",
      title: "AICAR Dosing Protocol: 50 mg Vial — AMPK Activation & Endurance Guide",
      desc: "AICAR (acadesine) AMPK activator dosing guide for the 50 mg vial — metabolic reprogramming for endurance, fat oxidation, and insulin sensitivity.",
    },
    {
      href: "/protocols/5-amino-1mq-dosing-50mg",
      title: "5-Amino-1MQ Dosing Protocol: 50 mg Vial — NNMT Inhibition & Metabolic Guide",
      desc: "5-Amino-1-methylquinolinium (5-Amino-1MQ) dosing protocol — NNMT inhibitor for fat loss, metabolic rate enhancement, and NAD+ preservation.",
    },
    {
      href: "/protocols/nad-plus-dosing-500mg",
      title: "NAD+ Dosing Protocol: 500 mg Vial — IV & Subcutaneous Anti-Aging Guide",
      desc: "NAD+ (nicotinamide adenine dinucleotide) 500 mg vial dosing guide for IV infusion and subcutaneous injection protocols for cellular energy, sirtuin activation, and longevity.",
    },
    {
      href: "/protocols/ghk-cu-dosing-50mg",
      title: "GHK-Cu Dosing Protocol: 50 mg Vial — Collagen Synthesis & Anti-Aging Guide",
      desc: "GHK-Cu (copper peptide) complete dosing guide for the 50 mg vial — subcutaneous and topical protocols for skin rejuvenation, collagen synthesis, and tissue repair.",
    },
    {
      href: "/protocols/fox04-dri-dosing-10mg",
      title: "FOXO4-DRI Dosing Protocol: 10 mg Vial — Senolytic Clearance Guide",
      desc: "FOXO4-DRI retro-inverso peptide senolytic protocol — targeted clearance of senescent cells for longevity, recovery, and tissue rejuvenation.",
    },
    {
      href: "/protocols/ss-31-dosing-10mg",
      title: "SS-31 (Elamipretide) Dosing Protocol: 10 mg Vial — Mitochondrial Protection Guide",
      desc: "SS-31 (elamipretide) tetrapeptide dosing guide for the 10 mg vial — mitochondrial membrane potential restoration for aging, heart failure, and metabolic disease.",
    },
    {
      href: "/protocols/epithalon-dosing-20mg",
      title: "Epithalon (Epitalon) Dosing Protocol: 20 mg Vial — Two-Course Annual Supply Guide",
      desc: "Epithalon 20 mg vial guide covering two complete 10-day intensive courses (10 mg/day each), ideal for semi-annual anti-aging protocols.",
    },
    {
      href: "/protocols/epithalon-dosing-10mg",
      title: "Epithalon (Epitalon) Dosing Protocol: 10 mg Vial — Telomere & Anti-Aging Guide",
      desc: "Epithalon AEDG tetrapeptide anti-aging protocol — 10-day intensive course for telomerase activation, melatonin synthesis restoration, and longevity optimization.",
    },
  ],
  relatedPeptides: [
    { href: "/peptides/epithalon", label: "Epithalon" },
    { href: "/peptides/ghk-cu", label: "Ghk Cu" },
    { href: "/peptides/nad-plus", label: "Nad Plus" },
    { href: "/peptides/ss-31", label: "Ss 31" },
  ],
};

/* ================================================================== */
/*  NAMED EXPORTS (one per category)                                  */
/* ================================================================== */
export function WeightLoss() {
  return <ProtocolCategoryPage category={WEIGHT_LOSS} />;
}

export function GrowthHormone() {
  return <ProtocolCategoryPage category={GROWTH_HORMONE} />;
}

export function TissueRepair() {
  return <ProtocolCategoryPage category={TISSUE_REPAIR} />;
}

export default function AntiAging() {
  return <ProtocolCategoryPage category={ANTI_AGING} />;
}