import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  Chevron Icon                                                      */
/* ------------------------------------------------------------------ */
const ChevronRightIcon = ({ className = "h-4 w-4 shrink-0 text-[#6b7280]" }) => (
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
/*  Treatment Detail Template Component                               */
/* ------------------------------------------------------------------ */
export default function TreatmentDetailTemplate({ data }) {
  const metaTitle = data?.meta?.title;

  useEffect(() => {
    if (metaTitle) {
      document.title = metaTitle;
    }
  }, [metaTitle]);

  if (!data) return null;

  const {
    title,
    h1,
    subtitle,
    totalClinicsCount,
    protocolGuides,
    telehealthBanner,
    clinics = [],
  } = data;

  /* ---------------- Structured data (JSON-LD) ---------------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: {
          "@id": "https://www.mypeptidematch.com/",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatment",
        item: {
          "@id": "https://www.mypeptidematch.com/clinics",
          name: "Treatment",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
      },
    ],
  };

  return (
    <main id="main-content" className="flex-1 bg-[#f6f8f7]">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
        >
          <span className="inline-flex shrink-0 items-center gap-1">
            <Link
              className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
              to="/"
            >
              Home
            </Link>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <ChevronRightIcon className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" />
            <Link
              className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
              to={data.breadcrumbTreatmentHref || "/clinics/telehealth-clinics"}
            >
              Treatment
            </Link>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <ChevronRightIcon className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" />
            <span className="max-w-[140px] truncate font-medium text-[#333333] sm:max-w-none">
              {data.breadcrumbLabel || title}
            </span>
            )
          </span>
        </nav>

        {/* Header Section */}
        <h1
          className="font-heading mt-4 text-3xl font-bold text-[#333333] tracking-[-0.3px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {h1}
        </h1>
        <p className="mt-4 max-w-2xl text-[#6b7280] leading-[26px]">{subtitle}</p>

        {/* Count Summary */}
        <p className="mt-6 text-[#6b7280] leading-[26px]">
          Showing 100 of {totalClinicsCount} clinics that offer {title}.
        </p>

        {/* Clinic Directory List */}
        <ul className="mt-6 space-y-2 leading-[26px]">
          {clinics.map((clinic, index) => (
            <li key={index}>
              <a
                className="text-[#1F6CD6] hover:underline"
                href={clinic.href}
              >
                {clinic.name}
              </a>
            </li>
          ))}
        </ul>

        {/* State Directory CTA */}
        <Link
          className="mt-8 inline-block text-[#1F6CD6] hover:underline leading-[26px]"
          to="/clinics/telehealth-clinics"
        >
          Browse all clinics by state →
        </Link>

        {/* Protocol Guides Section (Conditional) */}
        {protocolGuides && (
          <div className="mt-10 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-6">
            <h2
              className="text-base font-semibold text-[#333333] tracking-[-0.16px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Related protocol guides
            </h2>
            <p className="mt-1 text-sm text-[#6b7280]">
              {protocolGuides.description}
            </p>
            {protocolGuides.pills && protocolGuides.pills.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-3">
                {protocolGuides.pills.map((pill, index) => (
                  <li key={index}>
                    <Link
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-sm font-medium text-[#333333] transition-colors hover:border-[#333333] hover:bg-[#333333] hover:text-white"
                      to={pill.href}
                    >
                      {pill.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              className="mt-4 inline-block text-sm text-[#1F6CD6] hover:underline"
              to={protocolGuides.browseAllHref || "/protocols"}
            >
              Browse all protocol categories →
            </Link>
          </div>
        )}

        {/* Telehealth Provider Banner (Conditional) */}
        {telehealthBanner && (
          <section className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50/40 p-5">
            <h2
              className="font-heading text-lg font-bold text-[#333333] tracking-[-0.18px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {telehealthBanner.heading}
            </h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">
              {telehealthBanner.text}
            </p>
            <Link
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:underline"
              to={telehealthBanner.href}
            >
              {telehealthBanner.linkText}
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
