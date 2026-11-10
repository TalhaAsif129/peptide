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
];

const RELATED_PEPTIDES = [
  { href: "/peptides/sermorelin", label: "Sermorelin" },
  { href: "/peptides/cjc-1295", label: "Cjc 1295" },
  { href: "/peptides/ipamorelin", label: "Ipamorelin" },
  { href: "/peptides/tesamorelin", label: "Tesamorelin" },
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
    { "@type": "ListItem", position: 3, name: "Growth Hormone & GHRH" },
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
export default function GrowthHormone() {
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
                Growth Hormone &amp; GHRH
              </span>
            </span>
          </nav>

          <h1
            className="mt-4 text-3xl font-bold text-[#333333] sm:text-4xl lg:text-[2.75rem] lg:leading-[3rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Growth Hormone &amp; GHRH Protocols
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4a4a4a]">
            GHRH analogues, GHRPs, and recombinant HGH protocols for body
            composition, recovery, and GH axis optimization.
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
                About Growth Hormone &amp; GHRH
              </h2>
              <p className="mt-4 leading-relaxed text-[#4a4a4a]">
                Growth hormone-releasing hormone (GHRH) analogues and GH
                secretagogues stimulate the pituitary to produce growth hormone
                in a pulsatile, physiologic pattern — unlike exogenous HGH
                injections. This makes them a preferred choice for body
                composition improvement, recovery acceleration, and GH axis
                optimization under medical supervision.
              </p>
              <h3 className="mt-6 text-base font-semibold text-[#333333]">
                What to expect
              </h3>
              <p className="mt-2 leading-relaxed text-[#4a4a4a]">
                GHRH protocols are often run for 3–6 month cycles with an off
                period, typically dosed in the evenings to align with the
                natural nocturnal GH pulse. Stacking a GHRH analogue (e.g.,
                CJC-1295) with a GHRP (e.g., Ipamorelin) is a common clinical
                approach for synergistic GH release. Results build gradually
                over weeks.
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
                  Search for providers who offer growth hormone &amp; ghrh
                  peptide therapy.
                </p>
                <a
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B]"
                  href="/clinics?peptide=sermorelin"
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