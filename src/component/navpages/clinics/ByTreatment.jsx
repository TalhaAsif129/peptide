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
const TREATMENTS = [
  {
    slug: "anti-aging-longevity",
    emoji: "🌿",
    title: "Anti-Aging & Longevity",
    desc: "Growth hormone secretagogues and longevity peptides",
  },
  {
    slug: "athletic-performance",
    emoji: "🏃",
    title: "Athletic Performance",
    desc: "Performance and recovery peptides",
  },
  {
    slug: "cognitive-enhancement",
    emoji: "🧠",
    title: "Cognitive Enhancement",
    desc: "Nootropic and brain health peptides",
  },
  {
    slug: "hormone-optimization",
    emoji: "⚡",
    title: "Hormone Optimization",
    desc: "Sermorelin, CJC-1295, and growth hormone support",
  },
  {
    slug: "immune-support",
    emoji: "🛡️",
    title: "Immune Support",
    desc: "Thymosin alpha-1 and immune peptides",
  },
  {
    slug: "sexual-wellness",
    emoji: "💊",
    title: "Sexual Wellness",
    desc: "PT-141, Kisspeptin, and related therapies",
  },
  {
    slug: "tissue-repair-recovery",
    emoji: "🩹",
    title: "Tissue Repair & Recovery",
    desc: "BPC-157, TB-500, and recovery peptides",
  },
  {
    slug: "weight-loss",
    emoji: "⚖️",
    title: "Weight Loss",
    desc: "GLP-1 and metabolic peptide programs",
  },
];

const CARD_SHADOW =
  "shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]";

/* ------------------------------------------------------------------ */
/*  Structured data (JSON-LD)                                         */
/* ------------------------------------------------------------------ */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Peptide Therapy Treatment Categories",
  description:
    "Browse peptide therapy treatment categories including weight loss, anti-aging, tissue repair, hormone optimization, and more.",
  url: "https://www.mypeptidematch.com/treatment",
  numberOfItems: 8,
  itemListElement: TREATMENTS.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://www.mypeptidematch.com/treatment/${t.slug}`,
  })),
};

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
    { "@type": "ListItem", position: 2, name: "Treatments" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function ByTreatment() {
  return (
    <main id="main-content" className="flex-1">
      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ---------------- Hero / breadcrumb ---------------- */}
      <section className="border-b border-[#e5e7eb] bg-[#F7F8F9]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
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
                Treatments
              </span>
            </span>
          </nav>

          <h1
            className="text-[44px] font-bold leading-[52px] text-[#333333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Peptide Therapy Treatments
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[#6b7280]">
            Browse 8 peptide therapy treatment categories. Each category links to
            specialist clinics, dosing protocols, and the peptides most commonly
            used for that treatment goal.
          </p>
        </div>
      </section>

      {/* ---------------- Main content ---------------- */}
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        {/* Treatment grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TREATMENTS.map(({ slug, emoji, title, desc }) => (
            <a
              key={slug}
              className={`group flex flex-col rounded-[5px] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 ${CARD_SHADOW}`}
              href={`/treatment/${slug}`}
            >
              <div className="mb-3 text-2xl">{emoji}</div>
              <h2
                className="text-base font-bold text-[#333333] transition-colors group-hover:text-[#1F6CD6]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm text-[#6b7280]">{desc}</p>
              <span className="mt-3 text-xs font-medium text-[#1F6CD6] group-hover:underline">
                View clinics &amp; protocols →
              </span>
            </a>
          ))}
        </div>

        {/* Two-column helper cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-6">
            <h2
              className="mb-2 text-base font-semibold text-[#333333]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Find a Clinic by Treatment
            </h2>
            <p className="mb-4 text-sm text-[#6b7280]">
              Our directory lists clinics that offer peptide therapy for each
              treatment category. Filter by location to find providers near you.
            </p>
            <a
              className="inline-flex items-center text-sm font-medium text-[#1F6CD6] hover:underline"
              href="/clinics/telehealth-clinics"
            >
              Browse all clinics →
            </a>
          </div>

          <div className="rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-6">
            <h2
              className="mb-2 text-base font-semibold text-[#333333]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Peptide Protocol Guides
            </h2>
            <p className="mb-4 text-sm text-[#6b7280]">
              Clinician-reviewed dosing guides, reconstitution instructions, and
              supplies checklists for peptides across all treatment categories.
            </p>
            <a
              className="inline-flex items-center text-sm font-medium text-[#1F6CD6] hover:underline"
              href="/protocols"
            >
              Browse protocols →
            </a>
          </div>
        </div>

        {/* About section */}
        <div className="mt-8 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-6">
          <h2
            className="mb-3 text-lg font-bold text-[#333333]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Peptide Therapy Treatments
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[#6b7280]">
            <p>
              Peptide therapy uses short chains of amino acids to signal specific
              biological processes — from fat metabolism and tissue repair to
              growth hormone release and cognitive function. Different peptides
              are used for different treatment goals, and MyPeptideMatch
              organizes clinics and protocols by these categories to help you
              find the right provider and information.
            </p>
            <p>
              All treatment information on this site is for educational purposes
              only. Peptide therapy should be supervised by a qualified
              healthcare provider. See our{" "}
              <a className="text-[#1F6CD6] hover:underline" href="/disclaimer">
                medical disclaimer
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}