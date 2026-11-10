// src/component/pages/VendorsPage/VendorsPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function VendorsPage() {
  const [search, setSearch] = useState("");
  const [filterTested, setFilterTested] = useState(false);

  const vendors = [
    {
      name: "Swiss Chems",
      description:
        "Swiss Chems is a vendor specializing in research peptides, SARMs, nootropics, and other related...",
      tested: true,
      usBased: true,
      peptides: 4,
    },
    {
      name: "Biolongevity Labs",
      description:
        "Biolongevity Labs specializes in providing high-quality research peptides and bioregulators. They differentiate...",
      tested: true,
      usBased: true,
      peptides: 5,
    },
    {
      name: "Pinnacle Peptide Labs",
      description:
        "Miami, Florida-based research peptide supplier. Products are third-party tested with published COAs; orders ship...",
      tested: true,
      usBased: true,
      peptides: 3,
    },
    {
      name: "He & She MD",
      description:
        "Modern telehealth clinic offering medical weight loss (GLP-1), longevity peptides (NAD+, sermorelin,...",
      tested: false,
      usBased: true,
      peptides: 6,
    },
    {
      name: "Hims & Hers",
      description:
        "Publicly traded telehealth platform offering FDA-approved GLP-1s (Wegovy, Zepbound, oral options),...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "Henry Meds",
      description:
        "Compounded GLP-1 specialist — one of the few legitimate telehealth brands still offering both...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "Collective",
      description:
        "Member-owned style GLP-1 telehealth from the founder of Thrive Market. US-licensed doctors prescribe...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "Limitless Life Nootropics",
      description:
        "Limitless Life Nootropics specializes in providing a wide range of research peptides, nootropics, and related...",
      tested: false,
      usBased: true,
      peptides: 17,
    },
    {
      name: "LillyDirect",
      description:
        "Eli Lilly's manufacturer-direct pharmacy connecting patients to independent telehealth providers for FDA-...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "FrontCare",
      description:
        "Cash-pay telehealth platform where licensed US doctors prescribe compounded GLP-1s (injectable and oral-dro...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "Ro",
      description:
        "Public, established telehealth platform offering both compounded semaglutide and brand-name...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "NovoCare",
      description:
        "Novo Nordisk's manufacturer-direct pharmacy shipping FDA-approved GLP-1s (Wegovy) to patients, with...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
     {
      name: "Swiss Chems",
      description:
        "Swiss Chems is a vendor specializing in research peptides, SARMs, nootropics, and other related...",
      tested: true,
      usBased: true,
      peptides: 4,
    },
    {
      name: "Biolongevity Labs",
      description:
        "Biolongevity Labs specializes in providing high-quality research peptides and bioregulators. They differentiate...",
      tested: true,
      usBased: true,
      peptides: 5,
    },
    {
      name: "Pinnacle Peptide Labs",
      description:
        "Miami, Florida-based research peptide supplier. Products are third-party tested with published COAs; orders ship...",
      tested: true,
      usBased: true,
      peptides: 3,
    },
    {
      name: "He & She MD",
      description:
        "Modern telehealth clinic offering medical weight loss (GLP-1), longevity peptides (NAD+, sermorelin,...",
      tested: false,
      usBased: true,
      peptides: 6,
    },
    {
      name: "Hims & Hers",
      description:
        "Publicly traded telehealth platform offering FDA-approved GLP-1s (Wegovy, Zepbound, oral options),...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "Henry Meds",
      description:
        "Compounded GLP-1 specialist — one of the few legitimate telehealth brands still offering both...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "Collective",
      description:
        "Member-owned style GLP-1 telehealth from the founder of Thrive Market. US-licensed doctors prescribe...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "Limitless Life Nootropics",
      description:
        "Limitless Life Nootropics specializes in providing a wide range of research peptides, nootropics, and related...",
      tested: false,
      usBased: true,
      peptides: 17,
    },
    {
      name: "LillyDirect",
      description:
        "Eli Lilly's manufacturer-direct pharmacy connecting patients to independent telehealth providers for FDA-...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "FrontCare",
      description:
        "Cash-pay telehealth platform where licensed US doctors prescribe compounded GLP-1s (injectable and oral-dro...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "Ro",
      description:
        "Public, established telehealth platform offering both compounded semaglutide and brand-name...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "NovoCare",
      description:
        "Novo Nordisk's manufacturer-direct pharmacy shipping FDA-approved GLP-1s (Wegovy) to patients, with...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
     {
      name: "Swiss Chems",
      description:
        "Swiss Chems is a vendor specializing in research peptides, SARMs, nootropics, and other related...",
      tested: true,
      usBased: true,
      peptides: 4,
    },
    {
      name: "Biolongevity Labs",
      description:
        "Biolongevity Labs specializes in providing high-quality research peptides and bioregulators. They differentiate...",
      tested: true,
      usBased: true,
      peptides: 5,
    },
    {
      name: "Pinnacle Peptide Labs",
      description:
        "Miami, Florida-based research peptide supplier. Products are third-party tested with published COAs; orders ship...",
      tested: true,
      usBased: true,
      peptides: 3,
    },
    {
      name: "He & She MD",
      description:
        "Modern telehealth clinic offering medical weight loss (GLP-1), longevity peptides (NAD+, sermorelin,...",
      tested: false,
      usBased: true,
      peptides: 6,
    },
    {
      name: "Hims & Hers",
      description:
        "Publicly traded telehealth platform offering FDA-approved GLP-1s (Wegovy, Zepbound, oral options),...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "Henry Meds",
      description:
        "Compounded GLP-1 specialist — one of the few legitimate telehealth brands still offering both...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "Collective",
      description:
        "Member-owned style GLP-1 telehealth from the founder of Thrive Market. US-licensed doctors prescribe...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "Limitless Life Nootropics",
      description:
        "Limitless Life Nootropics specializes in providing a wide range of research peptides, nootropics, and related...",
      tested: false,
      usBased: true,
      peptides: 17,
    },
    {
      name: "LillyDirect",
      description:
        "Eli Lilly's manufacturer-direct pharmacy connecting patients to independent telehealth providers for FDA-...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "FrontCare",
      description:
        "Cash-pay telehealth platform where licensed US doctors prescribe compounded GLP-1s (injectable and oral-dro...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
    {
      name: "Ro",
      description:
        "Public, established telehealth platform offering both compounded semaglutide and brand-name...",
      tested: false,
      usBased: true,
      peptides: 2,
    },
    {
      name: "NovoCare",
      description:
        "Novo Nordisk's manufacturer-direct pharmacy shipping FDA-approved GLP-1s (Wegovy) to patients, with...",
      tested: false,
      usBased: true,
      peptides: 0,
    },
  ];

  // Filter logic
  const filteredVendors = vendors.filter((v) => {
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = !filterTested || v.tested;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ===== Top Section (Light BG) ===== */}
      <section className="bg-[#f0f4f3] pt-8 md:pt-12 pb-8">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[14px] text-[#6a7a75] mb-5">
            <Link to="/" className="text-[#4a5a55] no-underline hover:text-[#0d7d85]">
              Home
            </Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <span className="text-[#4a5a55] font-medium">Vendors</span>
          </nav>

          {/* Heading */}
          <h1 className="text-[#0f2027] font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Research Peptide Vendors
          </h1>

          {/* Description */}
          <p className="text-[#4a5a55] text-[16px] leading-relaxed max-w-[600px] mb-6">
            Compare 155 research peptide suppliers. Filter by third-party
            testing, COA availability, and browse available peptides.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Vendors listed */}
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <span className="text-[15px] text-[#0f2027]">
                <strong className="font-bold">155</strong> vendors listed
              </span>
            </div>

            {/* Third-party tested */}
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f2027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[15px] text-[#0f2027]">
                <strong className="font-bold">30</strong> third-party tested
              </span>
            </div>

            {/* COA available */}
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-[15px] text-[#0f2027]">
                <strong className="font-bold">24</strong> with COA available
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ===== Search + Filter Bar ===== */}
      <section className="bg-white border-t border-[#e2e8e6] py-5">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

            {/* Search Input */}
            <div className="relative flex-1 max-w-[340px]">
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#8a9a95" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vendors..."
                className="w-full pl-10 pr-4 py-2.5 border border-[#d5dedb] rounded-lg text-[14px] text-[#0f2027] placeholder-[#8a9a95] outline-none focus:border-[#0d7d85] transition-colors"
              />
            </div>

            {/* Filter Button */}
            <button
              type="button"
              onClick={() => setFilterTested(!filterTested)}
              className={`px-4 py-2.5 rounded-lg text-[14px] font-medium border transition-colors ${
                filterTested
                  ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                  : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"
              }`}
            >
              Third-Party Tested
            </button>

          </div>
        </div>
      </section>

      {/* ===== Vendors Grid ===== */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10 pt-6">

          {filteredVendors.length === 0 ? (
            <p className="text-center text-[#6a7a75] py-12">
              No vendors found matching your criteria.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredVendors.map((vendor) => (
                <div
                  key={vendor.name}
                  className="bg-white border border-[#e2e8e6] rounded-xl p-5 flex flex-col hover:shadow-md hover:border-[#c5d5d1] transition-all"
                >
                  {/* Vendor Name */}
                  <h3 className="text-[#0f2027] font-bold text-[16px] mb-3 leading-snug">
                    {vendor.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4a5a55] text-[13.5px] leading-relaxed mb-5 flex-1 line-clamp-3">
                    {vendor.description}
                  </p>

                  {/* Tags Row */}
                  <div className="flex flex-wrap items-center gap-2 mt-auto">
                    {/* Tested Badge */}
                    {vendor.tested && (
                      <span className="inline-flex items-center gap-1 bg-[#d9f0e0] text-[#1a6a3a] text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#c4dfcd]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Tested
                      </span>
                    )}

                    {/* US-Based Badge */}
                    {vendor.usBased && (
                      <span className="inline-flex items-center bg-[#eef0ef] text-[#4a5a55] text-[11px] font-medium px-2.5 py-1 rounded-full border border-[#dfe3e1]">
                        US-Based
                      </span>
                    )}

                    {/* Peptides Count */}
                    {vendor.peptides > 0 && (
                      <span className="inline-flex items-center gap-1 text-[#4a5a55] text-[12px]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v8M8 12h8" />
                        </svg>
                        {vendor.peptides}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}