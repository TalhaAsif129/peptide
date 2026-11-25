import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": {
          "@id": "https://www.mypeptidematch.com/",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Comparisons",
        "item": {
          "@id": "https://www.mypeptidematch.com/compare",
          "name": "Comparisons"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Henry Meds vs Ro"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Henry Meds vs Ro",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://www.mypeptidematch.com/vendors/henry-meds",
        "item": {
          "@type": [
            "Organization",
            "MedicalOrganization"
          ],
          "name": "Henry Meds",
          "url": "https://henrymeds.com",
          "image": "https://s3-eu-west-1.amazonaws.com/tpd/logos/625419a50651ef58117f585f/0x0.png"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://www.mypeptidematch.com/vendors/ro",
        "item": {
          "@type": [
            "Organization",
            "MedicalOrganization"
          ],
          "name": "Ro",
          "url": "https://ro.co",
          "image": "https://s3-eu-west-1.amazonaws.com/tpd/logos/618402f0483a0cd5be2413cd/0x0.png"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Henry Meds vs Ro: which is better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most patients, Henry Meds edges out Ro on our editorial score — best for compounded tirzepatide. That said, Ro can be the better fit depending on price, treatment menu, and what your consultation reveals — see the side-by-side below."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Henry Meds cost vs Ro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Henry Meds starts at about $199/month and Ro starts at about $149/month. Final cost depends on the medication and plan chosen during your consultation, and lab work or shipping may be billed separately."
        }
      },
      {
        "@type": "Question",
        "name": "Do Henry Meds and Ro offer the same treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both offer Semaglutide. Henry Meds additionally offers Tirzepatide. Ro additionally offers Liraglutide."
        }
      },
      {
        "@type": "Question",
        "name": "Are Henry Meds and Ro legit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both are US telehealth providers that connect patients with licensed clinicians and ship prescriptions from partner pharmacies. Henry Meds holds a 4.4/5 rating from 12,480 verified Trustpilot reviews. Ro holds a 3.8/5 rating from 3,718 verified Trustpilot reviews. Treatment eligibility is determined during a clinical consultation."
        }
      }
    ]
  }
];

export default function HenryMedsVsRo() {
  useEffect(() => {
    document.title = 'Henry Meds vs Ro | My Peptide Match';
  }, []);

  return (
    <>
      {structuredData.map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main id="main-content" className="flex-1">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280] mb-6"><span className="inline-flex shrink-0 items-center gap-1"><Link className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" to="/">Home</Link></span><span className="inline-flex shrink-0 items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg><Link className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" to="/compare">Comparisons</Link></span><span className="inline-flex shrink-0 items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg><span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Henry Meds vs Ro</span></span>)</nav>
          <header className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">Telehealth Comparison · 2026</span>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#333333] sm:text-[40px] sm:leading-[48px]" style={{ fontFamily: "var(--font-heading)" }}>Henry Meds vs Ro: Which Is Better?</h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4a4a4a]">For most patients, Henry Meds edges out Ro on our editorial score — best for compounded tirzepatide. That said, Ro can be the better fit depending on price, treatment menu, and what your consultation reveals — see the side-by-side below.</p>
          </header>
          <section className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="relative rounded-[5px] border bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] border-emerald-300">
              <span className="absolute -top-2 left-4 inline-flex items-center rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Our pick</span>
              <div className="flex items-start gap-3">
                <img alt="Henry Meds logo" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-11 w-11 shrink-0 rounded-[6px] border border-[#e5e7eb] bg-white object-contain p-1" src="https://s3-eu-west-1.amazonaws.com/tpd/logos/625419a50651ef58117f585f/0x0.png" style={{ color: "transparent" }} />
                <div className="min-w-0 flex-1">
                  <Link className="font-heading text-lg font-bold text-[#333333] hover:text-[#1F6CD6]" to="/vendors/henry-meds" style={{ fontFamily: "var(--font-heading)" }}>Henry Meds</Link>
                  <p className="mt-0.5 text-xs text-[#6b7280]">Best for compounded tirzepatide</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b7280]"><span className="font-medium text-[#333333]">4.4/5 (12,480)</span><span>8.4/10 editorial</span><span className="font-medium text-[#333333]">From $199/mo</span></div>
                  <div className="mt-2 flex flex-wrap gap-1"><span className="inline-flex items-center rounded-full bg-[#F7F8F9] px-2 py-0.5 text-[11px] font-medium text-[#4a4a4a]">Weight Loss</span></div>
                </div>
              </div>
              <div className="mt-4"><a href="https://henrymeds.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing" target="_blank" rel="sponsored nofollow noopener noreferrer" className="inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]">Visit Henry Meds<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a></div>
            </div>
            <div className="relative rounded-[5px] border bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] border-[#e5e7eb]">
              <div className="flex items-start gap-3">
                <img alt="Ro logo" loading="lazy" width="44" height="44" decoding="async" data-nimg="1" className="h-11 w-11 shrink-0 rounded-[6px] border border-[#e5e7eb] bg-white object-contain p-1" src="https://s3-eu-west-1.amazonaws.com/tpd/logos/618402f0483a0cd5be2413cd/0x0.png" style={{ color: "transparent" }} />
                <div className="min-w-0 flex-1">
                  <Link className="font-heading text-lg font-bold text-[#333333] hover:text-[#1F6CD6]" to="/vendors/ro" style={{ fontFamily: "var(--font-heading)" }}>Ro</Link>
                  <p className="mt-0.5 text-xs text-[#6b7280]">Broadest GLP-1 menu (brand + compounded)</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b7280]"><span className="font-medium text-[#333333]">3.8/5 (3,718)</span><span>8.2/10 editorial</span><span className="font-medium text-[#333333]">From $149/mo</span></div>
                  <div className="mt-2 flex flex-wrap gap-1"><span className="inline-flex items-center rounded-full bg-[#F7F8F9] px-2 py-0.5 text-[11px] font-medium text-[#4a4a4a]">Weight Loss</span></div>
                </div>
              </div>
              <div className="mt-4"><a href="https://ro.co/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing" target="_blank" rel="sponsored nofollow noopener noreferrer" className="inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]">Visit Ro<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a></div>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-[#333333]" style={{ fontFamily: "var(--font-heading)" }}>Side-by-side comparison</h2>
            <div className="mt-4 overflow-x-auto rounded-[5px] border border-[#e5e7eb] bg-white shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e7eb] bg-[#F7F8F9]">
                    <th className="w-1/3 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#6b7280]">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#333333]">Henry Meds</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#333333]">Ro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb]">
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Starting price</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">$199/mo</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">$149/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Customer rating</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">4.4/5 (12,480)</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">3.8/5 (3,718)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Editorial score</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">8.4/10</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">8.2/10</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Medication type</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">Compounded (503A/503B pharmacies)</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">Brand-name (FDA-approved) available</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Consultation</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">Async + live video</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">Async + live video</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Best for</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">Weight Loss</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">Weight Loss</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 align-top text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Treatments listed</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">2</td>
                    <td className="px-4 py-3 align-top text-sm text-[#333333]">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-[#333333]" style={{ fontFamily: "var(--font-heading)" }}>Treatments offered</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-[5px] border p-4 border-emerald-200 bg-emerald-50/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Both offer (1)</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  <li><Link className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 text-xs text-[#1F6CD6] hover:border-[#1F6CD6]" to="/peptides/semaglutide">Semaglutide</Link></li>
                </ul>
              </div>
              <div className="rounded-[5px] border p-4 border-blue-200 bg-blue-50/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800">Only at Henry Meds (1)</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  <li><Link className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 text-xs text-[#1F6CD6] hover:border-[#1F6CD6]" to="/peptides/tirzepatide">Tirzepatide</Link></li>
                </ul>
              </div>
              <div className="rounded-[5px] border p-4 border-amber-200 bg-amber-50/40">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800">Only at Ro (1)</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  <li><Link className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 text-xs text-[#1F6CD6] hover:border-[#1F6CD6]" to="/peptides/liraglutide">Liraglutide</Link></li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
              <h3 className="font-heading text-lg font-bold text-[#333333]" style={{ fontFamily: "var(--font-heading)" }}>Henry Meds — pros &amp; cons</h3>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-800">Pros</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-[#333333]">
                <li className="flex gap-2"><span className="text-emerald-600">+</span>Both compounded semaglutide and tirzepatide</li>
                <li className="flex gap-2"><span className="text-emerald-600">+</span>Bundled coaching and consultations</li>
                <li className="flex gap-2"><span className="text-emerald-600">+</span>No separate membership fees</li>
              </ul>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-[#6b7280]">Cons</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-[#333333]">
                <li className="flex gap-2"><span className="text-[#9ca3af]">−</span>No brand-name medications</li>
                <li className="flex gap-2"><span className="text-[#9ca3af]">−</span>Available in ~40 states</li>
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-3"><a href="https://henrymeds.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing" target="_blank" rel="sponsored nofollow noopener noreferrer" className="inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]">Visit Henry Meds<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a><Link className="text-sm font-medium text-[#1F6CD6] hover:underline" to="/vendors/henry-meds">Read full Henry Meds review →</Link></div>
            </div>
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
              <h3 className="font-heading text-lg font-bold text-[#333333]" style={{ fontFamily: "var(--font-heading)" }}>Ro — pros &amp; cons</h3>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-800">Pros</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-[#333333]">
                <li className="flex gap-2"><span className="text-emerald-600">+</span>Both compounded and brand-name Wegovy/Zepbound</li>
                <li className="flex gap-2"><span className="text-emerald-600">+</span>Oral Wegovy available</li>
                <li className="flex gap-2"><span className="text-emerald-600">+</span>Insurance support for select plans</li>
              </ul>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-[#6b7280]">Cons</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-[#333333]">
                <li className="flex gap-2"><span className="text-[#9ca3af]">−</span>No compounded tirzepatide</li>
                <li className="flex gap-2"><span className="text-[#9ca3af]">−</span>Brand-name pricing significantly higher</li>
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-3"><a href="https://ro.co/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing" target="_blank" rel="sponsored nofollow noopener noreferrer" className="inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]">Visit Ro<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a><Link className="text-sm font-medium text-[#1F6CD6] hover:underline" to="/vendors/ro">Read full Ro review →</Link></div>
            </div>
          </section>
          <section className="mx-auto mt-12 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-[#333333]" style={{ fontFamily: "var(--font-heading)" }}>Frequently asked questions</h2>
            <div className="mt-4 divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
              <div className="py-4">
                <h3 className="font-semibold text-[#333333]">Henry Meds vs Ro: which is better?</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">For most patients, Henry Meds edges out Ro on our editorial score — best for compounded tirzepatide. That said, Ro can be the better fit depending on price, treatment menu, and what your consultation reveals — see the side-by-side below.</p>
              </div>
              <div className="py-4">
                <h3 className="font-semibold text-[#333333]">How much does Henry Meds cost vs Ro?</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">Henry Meds starts at about $199/month and Ro starts at about $149/month. Final cost depends on the medication and plan chosen during your consultation, and lab work or shipping may be billed separately.</p>
              </div>
              <div className="py-4">
                <h3 className="font-semibold text-[#333333]">Do Henry Meds and Ro offer the same treatments?</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">Both offer Semaglutide. Henry Meds additionally offers Tirzepatide. Ro additionally offers Liraglutide.</p>
              </div>
              <div className="py-4">
                <h3 className="font-semibold text-[#333333]">Are Henry Meds and Ro legit?</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">Both are US telehealth providers that connect patients with licensed clinicians and ship prescriptions from partner pharmacies. Henry Meds holds a 4.4/5 rating from 12,480 verified Trustpilot reviews. Ro holds a 3.8/5 rating from 3,718 verified Trustpilot reviews. Treatment eligibility is determined during a clinical consultation.</p>
              </div>
            </div>
          </section>
          <div className="mt-12 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-4 text-xs text-[#6b7280]">
            <p><strong>Affiliate disclosure:</strong> Some links on this page are affiliate links — if you start treatment through one, we may earn a commission at no additional cost to you. Editorial rankings and opinions are independent of commercial relationships. See our <Link className="text-[#1F6CD6] hover:underline" to="/affiliate-disclosure">affiliate disclosure</Link>.</p>
          </div>
        </div>
      </main>
    </>
  );
}
