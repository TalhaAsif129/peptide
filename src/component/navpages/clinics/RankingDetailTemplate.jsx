import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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

const StarIcon = ({ className = "h-4 w-4" }) => (
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
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const CircleCheckIcon = ({ className = "h-3.5 w-3.5 shrink-0" }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const CircleXIcon = ({ className = "h-3.5 w-3.5 shrink-0" }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const ExternalLinkIcon = ({ className = "h-4 w-4" }) => (
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
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Ranking Detail Template Component                                 */
/* ------------------------------------------------------------------ */
export default function RankingDetailTemplate({ data }) {
  const metaTitle = data?.meta?.title;

  useEffect(() => {
    if (metaTitle) {
      document.title = metaTitle;
    }
  }, [metaTitle]);

  if (!data) return null;

  const {
    meta,
    breadcrumbs: rawBreadcrumbs = [],
    header = {},
    clinics = [],
    faqs = [],
    inPersonCta,
  } = data;

  const breadcrumbs = rawBreadcrumbs.map((crumb) =>
    crumb.href === "/best-telehealth" || crumb.label === "Best Telehealth"
      ? { ...crumb, href: "/clinics/best-telehealth" }
      : crumb
  );

  /* ---------------- Structured data (JSON-LD) ---------------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => {
      const position = idx + 1;
      const isLast = idx === breadcrumbs.length - 1;
      if (isLast || !crumb.href) {
        return {
          "@type": "ListItem",
          position,
          name: crumb.label,
        };
      }
      return {
        "@type": "ListItem",
        position,
        name: crumb.label,
        item: {
          "@id": crumb.href.startsWith("http")
            ? crumb.href
            : `https://www.mypeptidematch.com${crumb.href}`,
          name: crumb.label,
        },
      };
    }),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: meta?.title || header?.h1,
    numberOfItems: clinics.length,
    itemListElement: clinics.map((c, i) => ({
      "@type": "ListItem",
      position: c.rank || i + 1,
      name: c.name,
      url: `https://www.mypeptidematch.com${c.vendorHref || ""}`,
      description: c.badge || c.category || "",
    })),
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  } : null;

  return (
    <div className="flex-1 font-sans bg-[#f6f8f7]">
      {/* ---------------- Structured Data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* ---------------- Breadcrumb ---------------- */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <span key={idx} className="inline-flex shrink-0 items-center gap-1">
                  {idx > 0 && (
                    <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#6b7280]" />
                  )}
                  {isLast || !crumb.href ? (
                    <span className="max-w-[140px] truncate font-medium text-[#333333] sm:max-w-none">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </span>
              );
            })}
            <span>)</span>
          </nav>
        )}

        {/* ---------------- Header ---------------- */}
        <header className="mx-auto max-w-3xl">
          <h1
            className="font-heading text-3xl font-bold leading-tight text-[#333333] md:text-[40px] md:leading-[48px] md:tracking-[-0.4px] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {header.h1}
          </h1>
          {Array.isArray(header.description) ? (
            header.description.map((para, pIdx) => (
              <p
                key={pIdx}
                className={
                  pIdx === 0
                    ? "mt-4 text-[17px] leading-relaxed text-[#4a4a4a]"
                    : "mt-3 text-[15px] leading-relaxed text-[#6b7280]"
                }
              >
                {para}
              </p>
            ))
          ) : header.description ? (
            <p className="mt-4 text-[17px] leading-relaxed text-[#4a4a4a]">
              {header.description}
            </p>
          ) : null}
          {header.disclosure && (
            <p className="mt-4 text-xs text-[#6b7280]">
              {header.disclosure.text}{" "}
              <Link
                to={header.disclosure.linkHref}
                className="text-[#1F6CD6] hover:underline"
              >
                {header.disclosure.linkText}
              </Link>
              .
            </p>
          )}
        </header>

        {/* ---------------- Section: Our top picks ---------------- */}
        <section className="mt-10">
          <h2
            className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our top picks
          </h2>

          <div className="mt-5">
            <ol className="space-y-5">
              {clinics.map((clinic) => {
                const isWinner = clinic.rank === 1;
                return (
                  <li
                    key={clinic.rank}
                    className={`overflow-hidden rounded-lg border bg-white shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] ${
                      isWinner
                        ? "border-amber-200 ring-1 ring-inset ring-amber-100"
                        : "border-[#e5e7eb]"
                    }`}
                  >
                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5">
                      {/* Rank pill & Rating score */}
                      <div className="flex items-center gap-3 sm:flex-col sm:gap-2">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${
                            isWinner
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          {clinic.rank}
                        </span>
                        {clinic.rating && (
                          <div className="flex items-center gap-1 text-sm font-semibold text-[#333333]">
                            <StarIcon className="h-4 w-4 text-amber-500" />
                            {clinic.rating}
                          </div>
                        )}
                      </div>

                      {/* Clinic body content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <Link
                            to={clinic.vendorHref}
                            className="font-heading text-lg font-bold text-[#333333] hover:text-[#1F6CD6] tracking-[-0.18px]"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {clinic.name}
                          </Link>
                          {clinic.badge && (
                            <span className="text-xs font-medium uppercase tracking-wider text-amber-700">
                              {clinic.badge}
                            </span>
                          )}
                        </div>

                        {clinic.category && (
                          <p className="mt-1 text-sm text-[#4a4a4a]">
                            {clinic.category}
                          </p>
                        )}

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6b7280]">
                          {clinic.price && (
                            <span>
                              From{" "}
                              <span className="font-semibold text-[#333333]">
                                {clinic.price}
                              </span>
                            </span>
                          )}
                          {clinic.visitType && (
                            <span className="capitalize">{clinic.visitType}</span>
                          )}
                          {clinic.brandNameAvailable && (
                            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
                              Brand-name available
                            </span>
                          )}
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">
                          {clinic.description}
                        </p>

                        {/* Pros & Cons */}
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {clinic.pros && clinic.pros.length > 0 && (
                            <div>
                              <p className="text-[11px] leading-[18px] font-semibold uppercase tracking-wider text-emerald-700">
                                Pros
                              </p>
                              <ul className="mt-1 space-y-1">
                                {clinic.pros.map((pro, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="flex items-start gap-1.5 text-xs text-[#4a4a4a]"
                                  >
                                    <CircleCheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {clinic.cons && clinic.cons.length > 0 && (
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                                Cons
                              </p>
                              <ul className="mt-1 space-y-1">
                                {clinic.cons.map((con, cIdx) => (
                                  <li
                                    key={cIdx}
                                    className="flex items-start gap-1.5 text-xs text-[#4a4a4a]"
                                  >
                                    <CircleXIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9ca3af]" />
                                    <span>{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions column */}
                      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                        {clinic.visitUrl && (
                          <a
                            href={clinic.visitUrl}
                            target="_blank"
                            rel="sponsored nofollow noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                          >
                            Start Visit
                            <ExternalLinkIcon className="h-4 w-4" />
                          </a>
                        )}
                        <Link
                          to={clinic.reviewUrl || clinic.vendorHref}
                          className="text-xs text-[#1F6CD6] hover:underline"
                        >
                          Read full review
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ---------------- Section: Frequently asked questions ---------------- */}
        {faqs && faqs.length > 0 && (
          <section className="mx-auto mt-12 max-w-3xl">
            <h2
              className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently asked questions
            </h2>
            <div className="mt-4 divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="py-4">
                  <h3
                    className="font-heading font-semibold text-[#333333] text-[16px] leading-[25.6px] tracking-[-0.16px]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------- Section: Prefer an in-person clinic? ---------------- */}
        {inPersonCta && (
          <section className="mx-auto mt-12 max-w-3xl rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
            <h2
              className="font-heading text-base font-bold text-[#333333] tracking-[-0.16px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {inPersonCta.title}
            </h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">
              {inPersonCta.description}
            </p>
            <Link
              to={inPersonCta.linkHref || "/clinics"}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1F6CD6] hover:underline"
            >
              {inPersonCta.linkText}
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}