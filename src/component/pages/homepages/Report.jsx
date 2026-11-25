import React from "react";
import { Helmet } from "react-helmet-async";

export default function Report() {
  return (
    <>
      <Helmet>
        <title>State of Peptide Therapy in the US — 2026 Data Report</title>
        <meta
          name="description"
          content="Data from 4,700+ US peptide therapy clinics: most-prescribed peptides, top states by clinic density, GLP-1 adoption trends, and what's actually being"
        />
      </Helmet>
      <div className="w-full mx-auto   bg-[#FAFBFB]">
      {/* ========================================== */}
      {/* NEW HEADER SECTION (From Screenshot)       */}
      {/* ========================================== */}
      <header className=" px-4 sm:px-6 lg:px-53.5 py-10 lg:pt-16 lg:pb-12.5 ">
        {/* Breadcrumbs */}
        <nav className="flex items-center lg:text-[14px] text-[#6b7280] mb-6">
          <a href="#" className="hover:text-[#1f6cd6] ">
            Home
          </a>
          <span className="mx-2 text-gray-400">&gt;</span>
          <a href="#" className="hover:text-[#333333] transition-colors">
            Research
          </a>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="font-medium text-[#333333]">
            State of Peptide Therapy 2026
          </span>
        </nav>

        {/* Badge */}
        <div className="inline-block mb-4">
          <span className="rounded-full bg-[#FBF6E2] border border-[#FFF0BB] px-3 py-1 lg:text-[12px] leading-4 font-semibold uppercase tracking-[0.6px] text-[#333333]">
            Original Research · March 2026
          </span> 
        </div>

        {/* Main Heading */}
        <h1 className="lg:text-[44px]  sm:text-5xl saira-bold text-[#333333] tracking-[-0.44px] leading-13.75 mb-5">
          State of Peptide Therapy in the US — 2026 Data <br />
          Report
        </h1>

        {/* Subtitle */}
        <p className="lg:text-[18px] lg:w-[78%] font-regular sm:text-xl text-[#6b7280] leading-7.25 mb-6">
          An analysis of 4,770 active peptide therapy clinics across the United
          States: which peptides are most widely prescribed, where clinics are
          concentrated, and how the GLP-1 boom has reshaped the landscape.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 lg:text-[14px] leading-5 text-[#6b7280]">
          <span>Published: March 5, 2026</span>
          <span className="text-gray-300">·</span>
          <span>Source: MyPeptideMatch.com clinic database</span>
          <span className="text-gray-300">·</span>
          <a href="#methodology" className="text-[#1F6CD6] hover:underline">
            Methodology
          </a>
          <span className="text-gray-300">·</span>
          <a href="#cite" className="text-[#1F6CD6] hover:underline">
            How to cite
          </a>
        </div>
      </header>

      {/* ========================================== */}
      {/* PREVIOUS CONTENT (Key Findings, etc.)      */}
      {/* ========================================== */}

      {/* Key Findings */}
      <section className="bg-[#F6F8F7] px-4 sm:px-6 lg:px-53.5 py-10 sm:py-16 border-t border-mist-200">
        <section className="">
          <h2 className="lg:text-[24px] saira-bold text-[#333] leading-[32px] tracking-[-0.24px]">
            Key Findings
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm">
              <p className="text-3xl saira-bold text-[#1F6CD6]">4,770</p>
              <p className="mt-1 text-sm font-semibold text-[#333333]">
                Active clinics indexed
              </p>
              <p className="mt-0.5 text-xs text-[#6b7280]">
                across all 50 US states
              </p>
            </div>
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm">
              <p className="text-3xl saira-bold  text-[#1F6CD6]">48%</p>
              <p className="mt-1 text-sm font-semibold text-[#333333]">
                of clinics offer semaglutide
              </p>
              <p className="mt-0.5 text-xs text-[#6b7280]">
                the most widely prescribed peptide
              </p>
            </div>
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm">
              <p className="text-3xl saira-bold  text-[#1F6CD6]">15</p>
              <p className="mt-1 text-sm font-semibold text-[#333333]">
                peptides tracked
              </p>
              <p className="mt-0.5 text-xs text-[#6b7280]">
                with 100+ prescribing clinics each
              </p>
            </div>
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm">
              <p className="text-3xl saira-bold text-[#1F6CD6]">FL + TX</p>
              <p className="mt-1 text-sm font-semibold text-[#333333]">
                top 2 states by clinic count
              </p>
              <p className="mt-0.5 text-xs text-[#6b7280]">
                652 and 633 clinics respectively
              </p>
            </div>
          </div>
        </section>

        {/* Most Widely Prescribed Peptides */}
        <section className="mt-14">
          <h2 className="text-2xl saira-bold tracking-[-0.24px] text-[#333333]">
            Most Widely Prescribed Peptides by US Clinics (2026)
          </h2>
          <p className="mt-3 text-[#6b7280]">
            Ranked by number of active clinics in our database that offer each
            peptide. Each clinic is counted once per peptide regardless of the
            number of locations.
          </p>
          <div className="mt-6 overflow-hidden rounded-[5px] border border-[#e5e7eb]">
            <table className="w-full text-sm">
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
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    1
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/semaglutide"
                    >
                      Semaglutide
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {/* Background bar with fixed width w-32 */}
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        {/* Inner bar: Added width based on % */}
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        2,285
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    47.9%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    2
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/tirzepatide"
                    >
                      Tirzepatide
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "76.36%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        1,745
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    36.6%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    3
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/nad-plus"
                    >
                      NAD+
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "42.75%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        977
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    20.5%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    4
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/sermorelin"
                    >
                      Sermorelin
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "34.00%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        777
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    16.3%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    5
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/pt-141"
                    >
                      PT-141
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "21.83%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        499
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    10.5%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    6
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/liraglutide"
                    >
                      Liraglutide
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "21.48%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        491
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    10.3%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    7
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/bpc-157"
                    >
                      BPC-157
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "13.47%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        308
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    6.5%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    8
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/tesamorelin"
                    >
                      Tesamorelin
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "11.29%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        258
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    5.4%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    9
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/ghk-cu"
                    >
                      GHK-Cu (Copper Peptide)
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "8.88%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        203
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    4.3%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    10
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/ipamorelin"
                    >
                      Ipamorelin
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "10.85%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        248
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    5.2%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    11
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/cjc-1295"
                    >
                      CJC-1295
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "8.44%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        193
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    4.0%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    12
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/tb-500"
                    >
                      TB-500
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "8.00%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        183
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    3.8%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    13
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/aod-9604"
                    >
                      AOD-9604
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "6.56%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        150
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    3.1%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    14
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/retatrutide"
                    >
                      Retatrutide
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "6.30%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        144
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    3.0%
                  </td>
                </tr>
                <tr className="hover:bg-[#F7F8F9]">
                  <td className="py-3 pl-5 pr-4 text-[#6b7280] font-mono text-xs">
                    15
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      className="font-medium text-[#1F6CD6] hover:underline"
                      href="/peptides/mots-c"
                    >
                      MOTS-c
                    </a>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <div className="hidden sm:flex w-32 bg-[#F7F8F9] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#1F6CD6]"
                          style={{ width: "4.94%" }}
                        ></div>
                      </div>
                      <span className="font-medium text-[#333333] font-mono">
                        113
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right text-[#6b7280] font-mono">
                    2.4%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#6b7280]">
            Data as of March 5, 2026. Source: MyPeptideMatch.com clinic
            database.
            <a
              href="#methodology"
              className="ml-1 text-[#1F6CD6] hover:underline"
            >
              See methodology.
            </a>
          </p>
        </section>

        {/* The GLP-1 Boom */}
        <section className="mt-14">
          <h2 className="text-2xl saira-bold tracking-[-0.24px] text-[#333333]">
            The GLP-1 Boom: Semaglutide and Tirzepatide Dominate
          </h2>
          <div className="mt-4 space-y-4 text-[#4a4a4a]">
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
              compounding ban effective early 2025 has shifted many clinics back
              to brand-name prescriptions.
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

        {/* Clinic Density by State */}
        <section className="mt-14">
          <h2 className="text-2xl saira-bold tracking-[-0.24px] text-[#333333]">
            Clinic Density by State
          </h2>
          <p className="mt-3 text-[#6b7280]">
            Florida and Texas together account for over 27% of all active
            indexed peptide therapy clinics in the US. Sun Belt states dominate,
            likely reflecting favorable regulatory environments, telehealth
            adoption, and population demographics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/florida"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  1.
                </span>
                <span className="font-medium text-[#333333]">Florida</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                652 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/texas"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  2.
                </span>
                <span className="font-medium text-[#333333]">Texas</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                633 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/california"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  3.
                </span>
                <span className="font-medium text-[#333333]">California</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                417 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/arizona"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  4.
                </span>
                <span className="font-medium text-[#333333]">Arizona</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                265 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/north-carolina"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  5.
                </span>
                <span className="font-medium text-[#333333]">
                  North Carolina
                </span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                206 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/new-york"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  6.
                </span>
                <span className="font-medium text-[#333333]">New York</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                185 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/ohio"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  7.
                </span>
                <span className="font-medium text-[#333333]">Ohio</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                163 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/tennessee"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  8.
                </span>
                <span className="font-medium text-[#333333]">Tennessee</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                149 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/colorado"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  9.
                </span>
                <span className="font-medium text-[#333333]">Colorado</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                142 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/virginia"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  10.
                </span>
                <span className="font-medium text-[#333333]">Virginia</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                117 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/illinois"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  11.
                </span>
                <span className="font-medium text-[#333333]">Illinois</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                107 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/nevada"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  12.
                </span>
                <span className="font-medium text-[#333333]">Nevada</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                106 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/georgia"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  13.
                </span>
                <span className="font-medium text-[#333333]">Georgia</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                104 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/new-jersey"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  14.
                </span>
                <span className="font-medium text-[#333333]">New Jersey</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                101 clinics
              </span>
            </a>
            <a
              className="flex items-center justify-between rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-3 hover:border-[#FFF0BB] hover:bg-[#F7F8F9] transition-colors"
              href="/clinics/maryland"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#6b7280] w-5">
                  15.
                </span>
                <span className="font-medium text-[#333333]">Maryland</span>
              </div>
              <span className="font-mono text-sm text-[#6b7280]">
                98 clinics
              </span>
            </a>
          </div>
        </section>

        {/* Methodology */}
        <section id="methodology" className="mt-14 scroll-mt-24">
          <h2 className="text-2xl saira-bold tracking-[-0.24px] text-[#333333]">Methodology</h2>
          <div className="mt-4 space-y-3 text-[#4a4a4a] text-sm leading-relaxed">
            <p>
              <strong>Data source:</strong> MyPeptideMatch.com maintains an
              independent database of US clinics that offer peptide therapy,
              hormone optimization, medical weight loss, and related services.
              Data is collected through a combination of publicly available
              information, clinic self-submission, and third-party verification.
            </p>
            <p>
              <strong>Inclusion criteria:</strong> Clinics marked as "active" in
              the database as of the data pull date (March 5, 2026). A clinic is
              counted as offering a peptide if that peptide is listed in their
              services profile.
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

        {/* How to Cite */}
        <section id="cite" className="mt-10 scroll-mt-24">
          <h2 className="text-xl saira-bold tracking-[-0.24px] text-[#333333]">
            How to Cite This Report
          </h2>
          <div className="mt-4 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-4">
            <p className="text-sm text-[#4a4a4a] font-mono leading-relaxed">
              MyPeptideMatch.com. (2026, March 5).{" "}
              <em>State of Peptide Therapy in the US — 2026 Data Report.</em>{" "}
              Retrieved from
              https://www.mypeptidematch.com/research/peptide-therapy-report-2026
            </p>
          </div>
          <p className="mt-3 text-xs text-[#6b7280] w-[81%]">
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

        {/* CTA */}
        <section className="mt-12 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg saira-bold tracking-[-0.24px] text-[#333333]">
                Find a peptide clinic near you
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Search our directory of 4,770+ active US clinics by peptide,
                state, and treatment type.
              </p>
            </div>
            <a
              className="inline-flex shrink-0 items-center gap-2 rounded-[5px] bg-[#1F6CD6] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              href="/clinics"
            >
              Search Clinics →
            </a>
          </div>
        </section>
      </section>
    </div>
    </>
  );
}
