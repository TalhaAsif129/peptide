import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HEADING_FONT = { fontFamily: "var(--font-heading)" };

// ======================= DATA =======================

const KEY_FINDINGS = [
  {
    value: "4,758",
    label: "Active clinics indexed",
    sub: "across all 50 US states",
  },
  {
    value: "48%",
    label: "of clinics offer semaglutide",
    sub: "the most widely prescribed peptide",
  },
  {
    value: "15",
    label: "peptides tracked",
    sub: "with 100+ prescribing clinics each",
  },
  {
    value: "FL + TX",
    label: "top 2 states by clinic count",
    sub: "652 and 633 clinics respectively",
  },
];

const PEPTIDES = [
  { rank: 1, name: "Semaglutide", slug: "semaglutide", clinics: "2,285", pct: "48.0%", width: "100%" },
  { rank: 2, name: "Tirzepatide", slug: "tirzepatide", clinics: "1,745", pct: "36.7%", width: "76.3676%" },
  { rank: 3, name: "NAD+", slug: "nad-plus", clinics: "977", pct: "20.5%", width: "42.7571%" },
  { rank: 4, name: "Sermorelin", slug: "sermorelin", clinics: "777", pct: "16.3%", width: "34.0044%" },
  { rank: 5, name: "PT-141", slug: "pt-141", clinics: "499", pct: "10.5%", width: "21.8381%" },
  { rank: 6, name: "Liraglutide", slug: "liraglutide", clinics: "491", pct: "10.3%", width: "21.488%" },
  { rank: 7, name: "BPC-157", slug: "bpc-157", clinics: "308", pct: "6.5%", width: "13.4792%" },
  { rank: 8, name: "Tesamorelin", slug: "tesamorelin", clinics: "258", pct: "5.4%", width: "11.291%" },
  { rank: 9, name: "GHK-Cu (Copper Peptide)", slug: "ghk-cu", clinics: "203", pct: "4.3%", width: "8.88403%" },
  { rank: 10, name: "Ipamorelin", slug: "ipamorelin", clinics: "248", pct: "5.2%", width: "10.8534%" },
  { rank: 11, name: "CJC-1295", slug: "cjc-1295", clinics: "193", pct: "4.1%", width: "8.44639%" },
  { rank: 12, name: "TB-500", slug: "tb-500", clinics: "183", pct: "3.8%", width: "8.00875%" },
  { rank: 13, name: "AOD-9604", slug: "aod-9604", clinics: "150", pct: "3.2%", width: "6.56455%" },
  { rank: 14, name: "Retatrutide", slug: "retatrutide", clinics: "144", pct: "3.0%", width: "6.30197%" },
  { rank: 15, name: "MOTS-c", slug: "mots-c", clinics: "113", pct: "2.4%", width: "4.9453%" },
];

const STATES = [
  { rank: 1, name: "Florida", slug: "florida", count: "652 clinics" },
  { rank: 2, name: "Texas", slug: "texas", count: "633 clinics" },
  { rank: 3, name: "California", slug: "california", count: "417 clinics" },
  { rank: 4, name: "Arizona", slug: "arizona", count: "265 clinics" },
  { rank: 5, name: "North Carolina", slug: "north-carolina", count: "206 clinics" },
  { rank: 6, name: "New York", slug: "new-york", count: "185 clinics" },
  { rank: 7, name: "Ohio", slug: "ohio", count: "163 clinics" },
  { rank: 8, name: "Tennessee", slug: "tennessee", count: "149 clinics" },
  { rank: 9, name: "Colorado", slug: "colorado", count: "142 clinics" },
  { rank: 10, name: "Virginia", slug: "virginia", count: "117 clinics" },
  { rank: 11, name: "Illinois", slug: "illinois", count: "107 clinics" },
  { rank: 12, name: "Nevada", slug: "nevada", count: "106 clinics" },
  { rank: 13, name: "Georgia", slug: "georgia", count: "104 clinics" },
  { rank: 14, name: "New Jersey", slug: "new-jersey", count: "101 clinics" },
  { rank: 15, name: "Maryland", slug: "maryland", count: "98 clinics" },
];

// ======================= SCHEMA =======================

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "State of Peptide Therapy in the US — 2026 Data Report",
  description:
    "Data from 4,700+ active US peptide therapy clinics: most-prescribed peptides, top states by clinic density, GLP-1 adoption rates, and treatment category distribution.",
  url: "https://www.mypeptidematch.com/research/peptide-therapy-report-2026",
  creator: {
    "@type": "Organization",
    name: "MyPeptideMatch.com",
    url: "https://www.mypeptidematch.com",
  },
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  license: "https://creativecommons.org/licenses/by/4.0/",
  keywords: [
    "peptide therapy",
    "GLP-1",
    "semaglutide",
    "clinical data",
    "US clinics",
    "2026",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: {
        "@id": "https://www.mypeptidematch.com",
        name: "Home",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Research",
      item: "https://www.mypeptidematch.com/research",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "State of Peptide Therapy 2026",
      item: "https://www.mypeptidematch.com/research/peptide-therapy-report-2026",
    },
  ],
};

// ======================= COMPONENT =======================

const PeptideTherapyReport = () => {
  return (
    <main id="main-content" className="flex-1 w-full">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ================= HERO ================= */}
      <section className="border-b border-[#e5e7eb] bg-gradient-to-b from-[#F7F8F9] to-white">
        <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
          >
            <span className="inline-flex shrink-0 items-center gap-1">
              <a
                href="/"
                className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors"
              >
                Home
              </a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight
                className="h-4 w-4 shrink-0 text-[#6b7280]"
                aria-hidden="true"
              />
              <span className="truncate max-w-[140px] sm:max-w-none">
                Research
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight
                className="h-4 w-4 shrink-0 text-[#6b7280]"
                aria-hidden="true"
              />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">
                State of Peptide Therapy 2026
              </span>
            </span>
          </nav>

          <div className="mt-4 sm:mt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFF0BB] bg-[#FFF0BB]/40 px-3 py-1 text-xs font-semibold text-[#333333] uppercase tracking-wider">
              Original Research · March 2026
            </div>
            <h1
              className="mt-3 text-2xl sm:text-3xl lg:text-[2.75rem] font-bold tracking-tight text-[#333333] leading-tight"
              style={HEADING_FONT}
            >
              State of Peptide Therapy in the US — 2026 Data Report
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#6b7280] max-w-2xl">
              An analysis of 4,758 active peptide therapy clinics across the
              United States: which peptides are most widely prescribed, where
              clinics are concentrated, and how the GLP-1 boom has reshaped the
              landscape.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#6b7280]">
              <span>Published: March 5, 2026</span>
              <span aria-hidden="true">·</span>
              <span>Source: MyPeptideMatch.com clinic database</span>
              <span aria-hidden="true">·</span>
              <span>
                <a href="#methodology" className="text-[#1F6CD6] hover:underline">
                  Methodology
                </a>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <a href="#cite" className="text-[#1F6CD6] hover:underline">
                  How to cite
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BODY ================= */}
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* ---- Key Findings ---- */}
        <section>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Key Findings
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_FINDINGS.map((item) => (
              <div
                key={item.label}
                className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm"
              >
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#1F6CD6]"
                  style={HEADING_FONT}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#333333]">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-[#6b7280]">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Most Widely Prescribed Peptides ---- */}
        <section className="mt-12 sm:mt-14">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Most Widely Prescribed Peptides by US Clinics (2026)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6b7280]">
            Ranked by number of active clinics in our database that offer each
            peptide. Each clinic is counted once per peptide regardless of the
            number of locations.
          </p>

          <div className="mt-6 overflow-hidden rounded-[5px] border border-[#e5e7eb]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm">
                <thead>
                  <tr className="border-b-2 border-[#e5e7eb] bg-[#F7F8F9]">
                    <th className="py-3 pl-5 pr-4 text-left font-semibold text-[#333333]">
                      Rank
                    </th>
                    <th className="py-3 pr-4 text-left font-semibold text-[#333333]">
                      Peptide
                    </th>
                    <th className="py-3 pr-4 text-right font-semibold text-[#333333]">
                      Clinics Offering
                    </th>
                    <th className="py-3 pr-5 text-right font-semibold text-[#333333]">
                      % of All Clinics
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb]">
                  {PEPTIDES.map((p) => (
                    <tr key={p.rank} className="hover:bg-[#F7F8F9]">
                      <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                        {p.rank}
                      </td>
                      <td className="py-3 pr-4">
                        <a
                          href={`/peptides/${p.slug}`}
                          className="font-medium text-[#1F6CD6] hover:underline"
                        >
                          {p.name}
                        </a>
                      </td>
                      <td className="py-3 pr-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <div className="hidden sm:block w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#1F6CD6]"
                              style={{ width: p.width }}
                            />
                          </div>
                          <span className="font-medium text-[#333333] font-mono">
                            {p.clinics}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                        {p.pct}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-3 text-xs text-[#6b7280]">
            Data as of March 5, 2026. Source: MyPeptideMatch.com clinic
            database.{" "}
            <a href="#methodology" className="text-[#1F6CD6] hover:underline">
              See methodology.
            </a>
          </p>
        </section>

        {/* ---- GLP-1 Boom ---- */}
        <section className="mt-12 sm:mt-14">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            The GLP-1 Boom: Semaglutide and Tirzepatide Dominate
          </h2>
          <div className="mt-4 space-y-4 text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
            <p>
              GLP-1 receptor agonists now dominate peptide clinic offerings.{" "}
              <strong>Semaglutide is offered by 2,285 clinics</strong> (48% of
              all indexed clinics), making it by far the most common peptide in
              the US market — ahead of any traditional peptide therapy.
            </p>
            <p>
              <strong>Tirzepatide ranks second at 1,745 clinics</strong>,
              reflecting rapid adoption following FDA approvals for type 2
              diabetes (Mounjaro, 2022) and obesity (Zepbound, 2023). The
              compounding ban effective early 2025 has shifted many clinics
              back to brand-name prescriptions.
            </p>
            <p>
              Among traditional peptides (non-GLP-1),{" "}
              <strong>NAD+ (977 clinics)</strong> and{" "}
              <strong>Sermorelin (777 clinics)</strong> remain the most broadly
              adopted, while sexual wellness peptide{" "}
              <strong>PT-141 appears at 499 clinics</strong>, second only to
              GLP-1 compounds and NAD+ among non-growth-hormone peptides.
            </p>
          </div>
        </section>

        {/* ---- Clinic Density by State ---- */}
        <section className="mt-12 sm:mt-14">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Clinic Density by State
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6b7280]">
            Florida and Texas together account for over 27% of all active
            indexed peptide therapy clinics in the US. Sun Belt states dominate,
            likely reflecting favorable regulatory environments, telehealth
            adoption, and population demographics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STATES.map((s) => (
              <a
                key={s.rank}
                href={`/clinics/${s.slug}`}
                className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#6b7280] w-5">
                    {s.rank}.
                  </span>
                  <span className="font-medium text-[#333333]">{s.name}</span>
                </div>
                <span className="font-mono text-sm text-[#6b7280]">
                  {s.count}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ---- Methodology ---- */}
        <section id="methodology" className="mt-12 sm:mt-14 scroll-mt-24">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Methodology
          </h2>
          <div className="mt-4 space-y-3 text-sm text-[#4a4a4a] leading-relaxed">
            <p>
              <strong>Data source:</strong> MyPeptideMatch.com maintains an
              independent database of US clinics that offer peptide therapy,
              hormone optimization, medical weight loss, and related services.
              Data is collected through a combination of publicly available
              information, clinic self-submission, and third-party
              verification.
            </p>
            <p>
              <strong>Inclusion criteria:</strong> Clinics marked as "active"
              in the database as of the data pull date (March 5, 2026). A
              clinic is counted as offering a peptide if that peptide is listed
              in their services profile.
            </p>
            <p>
              <strong>Limitations:</strong> This database represents a
              significant but not exhaustive sample of US clinics. Clinics not
              listed in the database are not counted. Peptide offering data
              relies on clinic self-reporting and may not capture every service
              each clinic provides.
            </p>
            <p>
              <strong>Data freshness:</strong> This report reflects a snapshot
              as of March 5, 2026. The underlying database is updated
              continuously; the figures on this page refresh daily.
            </p>
          </div>
        </section>

        {/* ---- How to Cite ---- */}
        <section id="cite" className="mt-10 scroll-mt-24">
          <h2
            className="text-lg sm:text-xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            How to Cite This Report
          </h2>
          <div className="mt-4 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-4">
            <p className="text-sm text-[#4a4a4a] font-mono leading-relaxed break-words">
              MyPeptideMatch.com. (2026, March 5).{" "}
              <em>State of Peptide Therapy in the US — 2026 Data Report.</em>{" "}
              Retrieved from
              https://www.mypeptidematch.com/research/peptide-therapy-report-2026
            </p>
          </div>
          <p className="mt-3 text-xs text-[#6b7280]">
            This report is freely available for citation under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F6CD6] hover:underline"
            >
              CC BY 4.0
            </a>
            . When citing, please link to this URL. For media inquiries, contact
            us at{" "}
            <a href="/contact" className="text-[#1F6CD6] hover:underline">
              mypeptidematch.com/contact
            </a>
            .
          </p>
        </section>

        {/* ---- CTA ---- */}
        <section className="mt-10 sm:mt-12 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3
                className="text-base sm:text-lg font-bold text-[#333333]"
                style={HEADING_FONT}
              >
                Find a peptide clinic near you
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Search our directory of 4,758+ active US clinics by peptide,
                state, and treatment type.
              </p>
            </div>
            <a
              href="/clinics/browse-by-state"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[5px] bg-[#1F6CD6] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Search Clinics →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PeptideTherapyReport;