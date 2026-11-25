// src/component/navpages/compare/HimsHersVsRo.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

/* ---------- Schemas ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Comparisons', item: { '@id': 'https://www.mypeptidematch.com/compare', name: 'Comparisons' } },
    { '@type': 'ListItem', position: 3, name: 'Hims & Hers vs Ro' },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hims & Hers vs Ro',
  numberOfItems: 2,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: 'https://www.mypeptidematch.com/vendors/hims-hers',
      item: { '@type': ['Organization', 'MedicalOrganization'], name: 'Hims & Hers', url: 'https://www.hims.com' },
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: 'https://www.mypeptidematch.com/vendors/ro',
      item: {
        '@type': ['Organization', 'MedicalOrganization'],
        name: 'Ro',
        url: 'https://ro.co',
        image: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/618402f0483a0cd5be2413cd/0x0.png',
      },
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hims & Hers vs Ro: which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most patients, Hims & Hers edges out Ro on our editorial score — best-known brand for glp-1 and men's/women's health. That said, Ro can be the better fit depending on price, treatment menu, and what your consultation reveals — see the side-by-side below.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Hims & Hers cost vs Ro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hims & Hers starts at about $149/month and Ro starts at about $149/month. Final cost depends on the medication and plan chosen during your consultation, and lab work or shipping may be billed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Hims & Hers and Ro offer the same treatments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both offer Semaglutide. Hims & Hers additionally offers Tirzepatide. Ro additionally offers Liraglutide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Hims & Hers and Ro legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are US telehealth providers that connect patients with licensed clinicians and ship prescriptions from partner pharmacies. Ro holds a 3.8/5 rating from 3,718 verified Trustpilot reviews. Treatment eligibility is determined during a clinical consultation.',
      },
    },
  ],
};

/* ---------- Data ---------- */
const vendors = [
  {
    id: 'hims-hers',
    name: 'Hims & Hers',
    tagline: "Best-known brand for GLP-1 and men's/women's health",
    rating: '8.5/10 editorial',
    price: 'From $149/mo',
    tags: ['Sexual Wellness', 'Weight Loss', 'Hormone Optimization'],
    url: 'https://www.hims.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing',
    isPick: true,
    logo: null,
  },
  {
    id: 'ro',
    name: 'Ro',
    tagline: 'Broadest GLP-1 menu (brand + compounded)',
    rating: '3.8/5 (3,718) · 8.2/10 editorial',
    price: 'From $149/mo',
    tags: ['Weight Loss'],
    url: 'https://ro.co/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing',
    isPick: false,
    logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/618402f0483a0cd5be2413cd/0x0.png',
  },
];

const sideBySideRows = [
  ['Starting price', '$149/mo', '$149/mo'],
  ['Customer rating', 'Not yet rated', '3.8/5 (3,718)'],
  ['Editorial score', '8.5/10', '8.2/10'],
  ['Medication type', 'Brand-name (FDA-approved) available', 'Brand-name (FDA-approved) available'],
  ['Consultation', 'Async + live video', 'Async + live video'],
  ['Best for', 'Sexual Wellness, Weight Loss, Hormone Optimization', 'Weight Loss'],
  ['Treatments listed', '2', '2'],
];

const treatments = [
  {
    label: 'Both offer (1)',
    color: 'emerald',
    items: [{ name: 'Semaglutide', href: '/peptides/semaglutide' }],
  },
  {
    label: 'Only at Hims & Hers (1)',
    color: 'blue',
    items: [{ name: 'Tirzepatide', href: '/peptides/tirzepatide' }],
  },
  {
    label: 'Only at Ro (1)',
    color: 'amber',
    items: [{ name: 'Liraglutide', href: '/peptides/liraglutide' }],
  },
];

const prosCons = [
  {
    id: 'hims-hers',
    name: 'Hims & Hers',
    pros: [
      'Publicly traded, established brand with a broad treatment menu',
      'Offers FDA-approved Wegovy & Zepbound plus oral options',
      'Bundled provider access and fast nationwide shipping',
    ],
    cons: [
      'Compounded GLP-1 access was reduced in 2025',
      'Not available in all 50 states for every treatment',
    ],
    url: 'https://www.hims.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing',
    reviewHref: '/vendors/hims-hers',
    reviewLabel: 'Read full Hims & Hers review →',
  },
  {
    id: 'ro',
    name: 'Ro',
    pros: [
      'Both compounded and brand-name Wegovy/Zepbound',
      'Oral Wegovy available',
      'Insurance support for select plans',
    ],
    cons: ['No compounded tirzepatide', 'Brand-name pricing significantly higher'],
    url: 'https://ro.co/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing',
    reviewHref: '/vendors/ro',
    reviewLabel: 'Read full Ro review →',
  },
];

const faqs = [
  {
    q: 'Hims & Hers vs Ro: which is better?',
    a: "For most patients, Hims & Hers edges out Ro on our editorial score — best-known brand for glp-1 and men's/women's health. That said, Ro can be the better fit depending on price, treatment menu, and what your consultation reveals — see the side-by-side below.",
  },
  {
    q: 'How much does Hims & Hers cost vs Ro?',
    a: 'Hims & Hers starts at about $149/month and Ro starts at about $149/month. Final cost depends on the medication and plan chosen during your consultation, and lab work or shipping may be billed separately.',
  },
  {
    q: 'Do Hims & Hers and Ro offer the same treatments?',
    a: 'Both offer Semaglutide. Hims & Hers additionally offers Tirzepatide. Ro additionally offers Liraglutide.',
  },
  {
    q: 'Are Hims & Hers and Ro legit?',
    a: 'Both are US telehealth providers that connect patients with licensed clinicians and ship prescriptions from partner pharmacies. Ro holds a 3.8/5 rating from 3,718 verified Trustpilot reviews. Treatment eligibility is determined during a clinical consultation.',
  },
];

/* ---------- Helpers ---------- */
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const VisitButton = ({ url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
  >
    {label} <ExternalLink />
  </a>
);

/* ---------- Sub-components ---------- */
const VendorCard = ({ vendor }) => (
  <div
    className={`relative rounded-[5px] border bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] ${
      vendor.isPick ? 'border-emerald-300' : 'border-[#e5e7eb]'
    }`}
  >
    {vendor.isPick && (
      <span className="absolute -top-2 left-4 inline-flex items-center rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        Our pick
      </span>
    )}
    <div className="flex items-start gap-3">
      {vendor.logo && (
        <img
          alt={`${vendor.name} logo`}
          loading="lazy"
          width="44"
          height="44"
          className="h-11 w-11 shrink-0 rounded-[6px] border border-[#e5e7eb] bg-white object-contain p-1"
          src={vendor.logo}
        />
      )}
      <div className="min-w-0 flex-1">
        <a className="font-heading text-lg font-bold text-[#333333] hover:text-[#1F6CD6]" href={`/vendors/${vendor.id}`} style={{ fontFamily: 'var(--font-heading)' }}>
          {vendor.name}
        </a>
        <p className="mt-0.5 text-xs text-[#6b7280]">{vendor.tagline}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b7280]">
          <span>{vendor.rating}</span>
          <span className="font-medium text-[#333333]">{vendor.price}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {vendor.tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-[#F7F8F9] px-2 py-0.5 text-[11px] font-medium text-[#4a4a4a]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-4">
      <VisitButton url={vendor.url} label={`Visit ${vendor.name}`} />
    </div>
  </div>
);

const TreatmentCard = ({ group }) => {
  const colorMap = {
    emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50/40', text: 'text-emerald-800' },
    blue: { border: 'border-blue-200', bg: 'bg-blue-50/40', text: 'text-blue-800' },
    amber: { border: 'border-amber-200', bg: 'bg-amber-50/40', text: 'text-amber-800' },
  };
  const c = colorMap[group.color];
  return (
    <div className={`rounded-[5px] border p-4 ${c.border} ${c.bg}`}>
      <h3 className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{group.label}</h3>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <li key={item.name}>
            <a className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 text-xs text-[#1F6CD6] hover:border-[#1F6CD6]" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProsConsCard = ({ vendor }) => (
  <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
    <h3 className="font-heading text-lg font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
      {vendor.name} — pros &amp; cons
    </h3>
    <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-800">Pros</h4>
    <ul className="mt-2 space-y-1.5 text-sm text-[#333333]">
      {vendor.pros.map((p, i) => (
        <li key={i} className="flex gap-2"><span className="text-emerald-600">+</span>{p}</li>
      ))}
    </ul>
    <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-[#6b7280]">Cons</h4>
    <ul className="mt-2 space-y-1.5 text-sm text-[#333333]">
      {vendor.cons.map((c, i) => (
        <li key={i} className="flex gap-2"><span className="text-[#9ca3af]">−</span>{c}</li>
      ))}
    </ul>
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <VisitButton url={vendor.url} label={`Visit ${vendor.name}`} />
      <a className="text-sm font-medium text-[#1F6CD6] hover:underline" href={vendor.reviewHref}>
        {vendor.reviewLabel}
      </a>
    </div>
  </div>
);

/* ---------- Main Component ---------- */
export default function HimsHersVsRo() {
  return (
    <>
      <Helmet>
        <title>Hims &amp; Hers vs Ro: Which Is Better? (2026) | MyPeptideMatch</title>
        <meta
          name="description"
          content="Compare Hims & Hers vs Ro telehealth: pricing, treatments, pros and cons, and which GLP-1 provider fits you best in 2026."
        />
        <link rel="canonical" href="https://www.mypeptidematch.com/compare/hims-hers-vs-ro" />
        <meta property="og:title" content="Hims & Hers vs Ro: Which Is Better? (2026)" />
        <meta property="og:description" content="Compare Hims & Hers vs Ro telehealth: pricing, treatments, pros and cons in 2026." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mypeptidematch.com/compare/hims-hers-vs-ro" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main id="main-content" className="flex-1">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280] mb-6">
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/">Home</a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight />
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/compare">Comparisons</a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Hims &amp; Hers vs Ro</span>
            </span>
          </nav>

          {/* Hero Header */}
          <header className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
              Telehealth Comparison · 2026
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#333333] sm:text-[40px] sm:leading-[48px]" style={{ fontFamily: 'var(--font-heading)' }}>
              Hims &amp; Hers vs Ro: Which Is Better?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4a4a4a]">
              For most patients, Hims &amp; Hers edges out Ro on our editorial score — best-known brand for glp-1 and men's/women's health. That said, Ro can be the better fit depending on price, treatment menu, and what your consultation reveals — see the side-by-side below.
            </p>
          </header>

          {/* Vendor Cards */}
          <section className="mt-10 grid gap-5 md:grid-cols-2">
            {vendors.map((v) => <VendorCard key={v.id} vendor={v} />)}
          </section>

          {/* Side-by-side Table */}
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side-by-side comparison
            </h2>
            <div className="mt-4 overflow-x-auto rounded-[5px] border border-[#e5e7eb] bg-white shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e7eb] bg-[#F7F8F9]">
                    <th className="w-1/3 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#6b7280]">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#333333]">Hims &amp; Hers</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#333333]">Ro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb]">
                  {sideBySideRows.map(([feature, hh, ro]) => (
                    <tr key={feature}>
                      <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">{feature}</td>
                      <td className="px-4 py-3 align-top text-sm text-[#333333]">{hh}</td>
                      <td className="px-4 py-3 align-top text-sm text-[#333333]">{ro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Treatments offered */}
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Treatments offered
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {treatments.map((group, i) => <TreatmentCard key={i} group={group} />)}
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="mt-10 grid gap-5 md:grid-cols-2">
            {prosCons.map((v) => <ProsConsCard key={v.id} vendor={v} />)}
          </section>

          {/* FAQ */}
          <section className="mx-auto mt-12 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently asked questions
            </h2>
            <div className="mt-4 divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
              {faqs.map((item, i) => (
                <div key={i} className="py-4">
                  <h3 className="font-semibold text-[#333333]">{item.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <div className="mt-12 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-4 text-xs text-[#6b7280]">
            <p>
              <strong>Affiliate disclosure:</strong> Some links on this page are affiliate links — if you start treatment through one, we may earn a commission at no additional cost to you. Editorial rankings and opinions are independent of commercial relationships. See our{' '}
              <a className="text-[#1F6CD6] hover:underline" href="/affiliate-disclosure">affiliate disclosure</a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}