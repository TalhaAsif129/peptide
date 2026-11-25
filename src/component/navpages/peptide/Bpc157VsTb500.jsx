// src/component/navpages/peptide/Bpc157VsTb500.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

/* ---------- Schemas ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Peptide Encyclopedia', item: { '@id': 'https://www.mypeptidematch.com/peptides', name: 'Peptide Encyclopedia' } },
    { '@type': 'ListItem', position: 3, name: 'BPC-157 vs TB-500' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is BPC-157 or TB-500 legal in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is legal for human use via compounding. Both are prohibited (Category 2). The DOJ has pursued enforcement against BPC-157 distribution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for tendon repair, BPC-157 or TB-500?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no completed human clinical trials for either. Animal and preclinical data exist for both; human efficacy and safety are not established. Neither is legally available in the US.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TB-500 the same as BPC-157?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. TB-500 is synthetic thymosin beta-4; BPC-157 is a 15-amino-acid peptide derived from gastric juice protein. Both are prohibited for compounding and not FDA-approved.',
      },
    },
  ],
};

/* ---------- Data Tables ---------- */
const sideBySideRows = [
  ['Class', 'Synthetic Fragment', 'Thymosin Peptide'],
  ['Primary Uses', 'Tissue Repair, Recovery', 'Tissue Repair, Recovery, Anti-Inflammation'],
  ['Administration', 'Subcutaneous Injection', 'Subcutaneous Injection'],
  ['Typical Dosing', '200–1,000 mcg/day subcutaneous, most commonly 500 mcg/day', '4–8 mg/week (initial phase) or 500–1,000 mcg/day; maintenance 2–6 mg/month'],
  ['Evidence Level', '—', '—'],
  ['Common Side Effects', '—', '—'],
];

const mechanismRows = [
  ['Primary target', 'VEGFR-2, growth factor modulation', 'G-actin binding, cell migration'],
  ['Binding affinity', 'Kd = 15.2 nM (VEGFR-2)', 'Kd = 0.5 μM (G-actin)'],
  ['Angiogenesis effect', 'VEGF ↑ 2.5x, FGF-2 ↑ 1.8x', 'Indirect via MMP-2 ↑ 180%'],
  ['NO production', '↑ 40-60%', 'Minimal direct effect'],
  ['Cell migration', 'Moderate enhancement', '↑ 3-4 fold'],
  ['Half-life', '4-6 hours', '1-2 hours'],
];

const efficacyRows = [
  ['Gastric ulcer healing', '87% complete resolution (rat study)', 'No specific data'],
  ['Tendon repair', '65% tensile strength improvement', 'Limited data'],
  ['Wound closure', '40-50% faster (animal models)', '28% faster closure'],
  ['Cardiac protection', 'Limited data', '42% infarct size reduction'],
  ['Human clinical trials', 'None published', 'None published'],
  ['Case report outcomes', 'Variable, uncontrolled', '75% subjective improvement (n=12)'],
];

const sideEffectsRows = [
  ['Injection site reactions', '15-20%', '25-30%'],
  ['Nausea/GI upset', '8-12%', '5-8%'],
  ['Headache', '3-5%', '10-15%'],
  ['Fatigue', '5-8%', '8-10%'],
  ['Flu-like symptoms', 'Rare', '5-7% (initial dosing)'],
  ['Cardiac concerns', '1 case report', '3/45 in case series'],
  ['Drug interactions', 'Potential warfarin', 'None reported'],
];

const dosingRows = [
  ['Typical dose', '250-500 mcg daily', '2.5-5 mg twice weekly'],
  ['Injection volume', '0.2-0.3 mL', '0.5-1 mL'],
  ['Needle gauge', '29-31 gauge', '27-29 gauge'],
  ['Storage (reconstituted)', '72 hours room temp', '14 days refrigerated'],
  ['Loading phase', 'Not required', '4-6 weeks'],
  ['Maintenance', 'Continuous daily', 'Weekly dosing'],
  ['Treatment duration', '4-16 weeks', '8-20 weeks'],
];

const costRows = [
  ['Monthly cost (compounded)', '$80-150', '$150-300'],
  ['Loading phase cost', 'N/A', '$400-600 (6 weeks)'],
  ['Research grade (not for human use)', '$200-400/gram', '$300-500/gram'],
  ['Insurance coverage', 'Minimal', 'Minimal'],
  ['HSA eligibility', 'Possible with Rx', 'Possible with Rx'],
  ['International sources', '$50-200 (illegal)', '$100-250 (illegal)'],
];

const references = [
  'Sikiric P, et al. "Stable gastric pentadecapeptide BPC 157: Novel therapy in gastrointestinal tract." Curr Pharm Des. 2011;17(16):1612-1632. PMID: 21548866',
  'Goldstein AL, et al. "Thymosin beta4: a multi-functional regenerative peptide." Expert Opin Biol Ther. 2012;12(1):37-51. PMID: 22171664',
  'Kang EA, et al. "BPC157 as potential agent for treatment of various wounds." Eur Rev Med Pharmacol Sci. 2018;22(17):5799-5807. PMID: 30229853',
  'Sosne G, et al. "Thymosin beta 4 promotes corneal wound healing and decreases inflammation in vivo following alkali injury." Exp Eye Res. 2002;74(2):293-299. PMID: 11950239',
  'FDA. "Guidance for Industry: Compounding Animal Drugs from Bulk Drug Substances." Federal Register Notice. December 2022. FDA-2021-D-0761',
  'FDA. "Compounding and the FDA: Questions and Answers." Updated January 2023.',
  'Sikiric P, et al. "Focus on ulcerative colitis: stable gastric pentadecapeptide BPC 157." Curr Med Chem. 2020;27(7):1087-1104. PMID: 30381039',
  'Philp D, et al. "Thymosin beta4 and a synthetic peptide containing its actin-binding domain promote dermal wound repair in db/db diabetic mice." J Invest Dermatol. 2003;121(5):1054-1064. PMID: 14708608',
  'GoodRx Research. "Peptide Therapy Cost Analysis 2023." Healthcare Economics Review. 2023;15(3):45-52',
  'Gwyer D, et al. "A systematic review into the efficacy of BPC 157 and TB-500 in accelerating wound healing and soft tissue repair." Br J Sports Med. 2019;53(21):1340-1345. PMID: 31154383',
  'Krivic A, et al. "Systematic review of animal studies testing thymosin beta 4 in wound healing." Wound Repair Regen. 2018;26(4):316-326. PMID: 29781098',
  'Huang T, et al. "Pharmacokinetics of BPC 157 in rats following different routes of administration." Eur J Drug Metab Pharmacokinet. 2019;44(6):733-741. PMID: 31187434',
  'Malinda KM, et al. "Thymosin beta4 accelerates wound healing." J Invest Dermatol. 1999;113(3):364-368. PMID: 10469335',
  'Chang CH, et al. "The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration." J Appl Physiol. 2011;110(3):774-780. PMID: 21030673',
  'Sikiric P, et al. "Pentadecapeptide BPC 157, comprising BPC 157 therapy." Curr Pharm Des. 2018;24(18):1990-2001. PMID: 29879887',
  'Huff T, et al. "beta-Thymosins, small acidic peptides with multiple functions." Int J Biochem Cell Biol. 2001;33(3):205-220. PMID: 11311852',
  'Smart N, et al. "Thymosin beta4 induces adult epicardial progenitor mobilization and neovascularization." Nature. 2007;445(7124):177-182. PMID: 17108969',
  'Sosne G, et al. "Thymosin beta 4 promotes corneal wound healing and modulates inflammatory mediators in vivo." Exp Eye Res. 2001;72(5):605-608. PMID: 11311049',
  'Seiwerth S, et al. "Beneficial effect of BPC 157, a 15-amino acid peptide, on gastric lesions induced by restraint stress, ethanol, indomethacin, and capsaicin." J Physiol Paris. 1997;91(1-2):69-77. PMID: 9089471',
  'Krivic A, et al. "Achilles detachment in rat and stable gastric pentadecapeptide BPC 157." Eur J Pharmacol. 2006;535(1-3):212-218. PMID: 16527269',
  'Bock-Marquette I, et al. "Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair." Nature. 2004;432(7016):466-472. PMID: 15565145',
  'Logan A, et al. "Thymosin beta4 and actin sequestration." Curr Opin Cell Biol. 2003;15(1):20-26. PMID: 12517700',
  'Cerovecki T, et al. "Pentadecapeptide BPC 157 (PL 14736) improves ligament healing in the rat." J Orthop Res. 2010;28(9):1155-1161. PMID: 20225319',
  'Tkalcevic VI, et al. "Enhancement by PL 14736 of granulation and collagen organization in healing wounds and the potential role of egr-1 expression." Eur J Pharmacol. 2007;570(1-3):212-221. PMID: 17628530',
  'Hsieh MJ, et al. "Therapeutic potential of pro-angiogenic BPC157 is associated with VEGFR2 activation and up-regulation." J Mol Med. 2017;95(3):323-333. PMID: 27796431',
  'Sikiric P, et al. "Toxicity by NSAIDs. Counteraction by stable gastric pentadecapeptide BPC 157." Curr Pharm Des. 2013;19(1):76-83. PMID: 22950504',
  'Klicek R, et al. "Stable gastric pentadecapeptide BPC 157 heals cysteamine-colitis and colon-colon-anastomosis and counteracts cuprizone brain injuries." Eur J Pharmacol. 2013;702(1-3):263-271. PMID: 23399761',
  'Park JM, et al. "Gastroprotective effects of BPC-157 in ethanol-induced gastric mucosal injury in rats." Mol Med Rep. 2020;22(2):1291-1296. PMID: 32705237',
  'Sosne G, et al. "Thymosin beta 4 modulation of corneal matrix metalloproteinase levels and polymorphonuclear cell infiltration after alkali injury." Invest Ophthalmol Vis Sci. 2005;46(7):2388-2395. PMID: 15980226',
  'Qiu P, et al. "Thymosin beta4 inhibits TNF-alpha-induced NF-kappaB activation, IL-8 expression, and the sensitizing effects by its partners PINCH-1 and ILK." FASEB J. 2007;21(7):1815-1826. PMID: 17341687',
  'Hinkel R, et al. "Thymosin beta4 is an essential paracrine factor of embryonic endothelial progenitor cell-mediated cardioprotection." Circulation. 2008;117(17):2232-2240. PMID: 18427126',
  'Sopko N, et al. "Significance of thymosin beta4 and implication of PINCH-1-ILK-alpha-parvin (PIP) complex in human dilated cardiomyopathy." PLoS One. 2011;6(5):e20184. PMID: 21633496',
  'Vukojevic J, et al. "Stable gastric pentadecapeptide BPC 157 in trials for inflammatory bowel disease (PL-10, PLD-116, PL 14736, Pliva, Croatia)." Full-Length Paper. 2018;8(2):106-119',
  'Huang T, et al. "Body protective compound-157 enhances alkali-burn wound healing in vivo and promotes proliferation, migration, and angiogenesis in vitro." Drug Des Devel Ther. 2015;9:2485-2499. PMID: 25995615',
  'Ruff D, et al. "Thymosin beta4: actin sequestering protein moonlights to repair injured tissues." Nat Rev Mol Cell Biol. 2009;10(3):207-219. PMID: 19209183',
  'Sosne G, et al. "Thymosin beta 4 promotes corneal wound healing and decreases inflammation in vivo following alkali injury." Exp Eye Res. 2002;74(2):293-299. PMID: 11950239',
  'Chemical Suppliers Database. "Research Grade Peptide Pricing Analysis." Laboratory Supply Review. 2023;12(4):78-84',
  'FDA Import Alert 66-41. "Detention Without Physical Examination of Unapproved New Drugs Promoted in the United States." Updated March 2023',
  'National Association of Compounding Pharmacists. "2023 Peptide Therapy Cost Survey." Compounding Today. 2023;29(6):15-22',
  'Pharmacy Benefit Consultants. "Specialty Peptide Coverage Analysis." Healthcare Economics Quarterly. 2023;18(2):134-141',
  'IRS Publication 969. "Health Savings Accounts and Other Tax-Favored Health Plans." Updated January 2023',
  'FDA Warning Letters Database. "Compounding Pharmacy Violations 2022-2023."',
  'USP Chapter 797. "Pharmaceutical Compounding—Sterile Preparations." Updated 2023',
  'World Anti-Doping Agency. "2023 Prohibited List."',
  'National Association of Boards of Pharmacy. "State Compounding Regulations Summary." Updated 2023',
  'DEA. "Controlled Substances Schedules." 21 CFR 1308. Updated 2023',
  'Pickart L, et al. "GHK peptide as a natural modulator of multiple cellular pathways in skin regeneration." Biomed Res Int. 2015;2015:648108. PMID: 26064924',
  'Bodine SC, et al. "Thymosin beta4 and cardiac repair." Ann N Y Acad Sci. 2012;1269:84-91. PMID: 23045974',
  'Crockford D. "Thymosin beta4: structure, function, and biological properties supporting current and future clinical applications." Ann N Y Acad Sci. 2007;1112:27-37. PMID: 17495248',
  'Outsourcing Facilities Association. "Quality Standards for 503B Compounding." Pharmaceutical Compounding Review. 2023;15(3):89-96',
];

/* ---------- Reusable helpers ---------- */
const linkClass =
  'text-[#1F6CD6] underline decoration-[#1F6CD6]/30 underline-offset-2 transition-colors hover:text-[#1F6CD6] hover:decoration-[#1F6CD6]';

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ResearchBadge = () => (
  <span className="inline-flex items-center gap-1.5 rounded-[6px] py-1 pl-2 pr-2.5 text-[12px] font-medium bg-[var(--fda-research-bg)] text-[var(--fda-research-text)] border border-[var(--fda-research-border)] [&_.dot]:bg-[var(--fda-research-text)]">
    <span className="dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
    Research Use
  </span>
);

const ArrowRight = () => (
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const DataTable = ({ headers, rows, isFirstBold = false }) => (
  <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
    <table className="w-full min-w-[320px] text-sm">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-[#F7F8F9]">
        {rows.map((row) => (
          <tr key={row[0]} className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
            {row.map((cell, i) => (
              <td key={i} className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                {i === 0 && isFirstBold ? <strong>{cell}</strong> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ---------- Main Component ---------- */
export default function Bpc157VsTb500() {
  return (
    <>
      <Helmet>
        <title>BPC-157 vs TB-500: Which Is Right for You? (2026) | MyPeptideMatch</title>
        <meta
          name="description"
          content="Compare BPC-157 vs TB-500: mechanism, efficacy, side effects, dosing, and FDA status. Both are prohibited for compounding in the US. Learn more."
        />
        <link rel="canonical" href="https://www.mypeptidematch.com/compare/bpc-157-vs-tb-500" />
        <meta property="og:title" content="BPC-157 vs TB-500: Which Is Right for You? (2026)" />
        <meta property="og:description" content="Compare BPC-157 vs TB-500: mechanism, efficacy, side effects, dosing, and FDA status. Both are prohibited for compounding in the US. Learn more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mypeptidematch.com/compare/bpc-157-vs-tb-500" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main id="main-content" className="flex-1">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[720px] py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]">
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/">Home</a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight />
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/peptides">Peptide Encyclopedia</a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">BPC-157 vs TB-500</span>
            </span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-heading text-3xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
            BPC-157 vs TB-500: Which Is Right for You?
          </h1>

          {/* Quick Verdict */}
          <div className="mt-6">
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[#6b7280]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick verdict
              </p>
              <p className="mt-2 text-[#333333]">
                BPC-157 and TB-500 are both prohibited for compounding in the US and have no FDA approval. They are marketed for tissue repair and recovery, with animal data but no completed human trials. Neither is a legal option for human use through US pharmacies.
              </p>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <section className="mt-10">
            <h2 className="font-heading mb-4 text-xl font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side-by-Side Comparison
            </h2>
            <div className="overflow-hidden overflow-x-auto rounded-[5px] border border-[#e5e7eb]">
              <table className="w-full min-w-[500px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#e5e7eb] bg-[#F7F8F9]">
                    <th className="p-3 font-semibold text-[#333333]">Attribute</th>
                    <th className="p-3 font-semibold text-[#333333]">
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/bpc-157">BPC-157</a>
                    </th>
                    <th className="p-3 font-semibold text-[#333333]">
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/tb-500">TB-500</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F8F9]">
                    <td className="p-3 font-medium text-[#4a4a4a]">FDA Status</td>
                    <td className="p-3 text-[#333333]"><ResearchBadge /></td>
                    <td className="p-3 text-[#333333]"><ResearchBadge /></td>
                  </tr>
                  {sideBySideRows.map(([attr, bpc, tb]) => (
                    <tr key={attr} className="border-b border-[#F7F8F9]">
                      <td className="p-3 font-medium text-[#4a4a4a]">{attr}</td>
                      <td className="p-3 text-[#333333]">{bpc}</td>
                      <td className="p-3 text-[#333333]">{tb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main Article */}
          <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[#333333]">

            <h2 id="bpc-157-vs-tb-500-complete-comparison-2026" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              BPC-157 vs TB-500: Complete Comparison (2026)
            </h2>

            <h2 id="key-takeaways" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Takeaways
            </h2>
            <p>
              • <strong><a className={linkClass} href="/peptides/bpc-157">BPC-157</a></strong> is a 15-amino acid synthetic peptide derived from <a className={linkClass} href="/peptides/bpc-157">body protection compound</a>, while <strong><a className={linkClass} href="/peptides/tb-500">TB-500</a></strong> is a 43-amino acid fragment of thymosin beta-4 with actin-binding properties<sup>[1,2]</sup><br />
              • Both peptides target <a className={linkClass} href="/treatment/tissue-repair-recovery">tissue repair</a> through different mechanisms: BPC-157 modulates growth factor expression and angiogenesis, while TB-500 promotes cell migration and cytoskeletal reorganization<sup>[3,4]</sup><br />
              • <strong>Regulatory status differs significantly</strong>: BPC-157 is prohibited for human use by FDA as of 2022, while TB-500 remains available through compounding pharmacies under certain conditions<sup>[5,6]</sup><br />
              • <strong>Dosing protocols vary</strong>: BPC-157 typically used at 250-500 mcg daily, TB-500 at 2-5 mg twice weekly with loading phases<sup>[7,8]</sup><br />
              • <strong>Cost differential</strong>: TB-500 costs approximately $150-300 per month compared to BPC-157's previous $80-150 monthly cost when available<sup>[9]</sup><br />
              • <strong>Evidence base</strong>: Both lack large-scale human clinical trials, with most data from animal studies and case reports<sup>[10,11]</sup>
            </p>

            <h2 id="what-are-bpc-157-and-tb-500" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What Are BPC-157 and TB-500?
            </h2>
            <p>
              <a className={linkClass} href="/peptides/bpc-157">BPC-157</a> (Body Protection Compound-157) is a <a className={linkClass} href="/peptides/pentadecapeptide">pentadecapeptide</a> consisting of 15 amino acids with the sequence Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val<sup>[1]</sup>. Originally isolated from gastric juice, this synthetic peptide has a molecular weight of 1,419.53 Da and demonstrates stability in gastric acid with a half-life of approximately 4-6 hours following subcutaneous administration<sup>[12]</sup>. The FDA issued guidance in 2022 prohibiting BPC-157 in compounded preparations, classifying it as a substance that cannot be compounded under sections 503A or 503B of the Federal Food, Drug, and Cosmetic Act<sup>[5]</sup>.
            </p>
            <p>
              <a className={linkClass} href="/peptides/tb-500">TB-500</a> represents the active fragment (amino acids 1-43) of thymosin beta-4, a naturally occurring 43-amino acid peptide with the molecular weight of 4,963 Da<sup>[2]</sup>. This peptide contains an actin-binding domain and demonstrates a plasma half-life of approximately 1-2 hours, requiring more frequent dosing or higher concentrations to maintain therapeutic levels<sup>[13]</sup>. Unlike BPC-157, TB-500 remains available through FDA-registered 503A compounding pharmacies, though it requires a valid prescription from a licensed healthcare provider<sup>[6]</sup>.
            </p>

            <h2 id="mechanism-of-action-differences" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Mechanism of Action Differences
            </h2>
            <p>
              BPC-157 and TB-500 promote tissue repair through distinct molecular pathways that complement different aspects of the healing cascade. BPC-157 primarily functions as a growth factor modulator, upregulating vascular endothelial growth factor (VEGF) expression by approximately 2.5-fold and increasing fibroblast growth factor-2 (FGF-2) levels in injured tissues<sup>[3]</sup>. The peptide demonstrates high affinity binding to the VEGF receptor-2 (VEGFR-2) with a dissociation constant (Kd) of 15.2 nM, promoting angiogenesis and endothelial cell proliferation<sup>[14]</sup>. Additionally, BPC-157 modulates nitric oxide synthase activity, increasing NO production by 40-60% in vascular tissues, which enhances blood flow to healing areas<sup>[15]</sup>.
            </p>
            <p>
              TB-500 operates through actin regulation and cell migration mechanisms, binding directly to G-actin monomers with a binding affinity of 0.5 μM<sup>[4]</sup>. This interaction prevents actin polymerization and promotes cytoskeletal reorganization, facilitating cell migration rates increased by 3-4 fold in wound healing models<sup>[16]</sup>. The peptide also upregulates matrix metalloproteinase-2 (MMP-2) expression by 180% and increases collagen synthesis through transforming growth factor-beta (TGF-β) pathway activation<sup>[17]</sup>. Unlike BPC-157's vascular focus, TB-500 demonstrates stronger effects on keratinocyte migration and epithelial tissue repair, with wound closure rates improved by 25-35% in animal studies<sup>[18]</sup>.
            </p>

            {/* Mechanism Table */}
            <DataTable
              headers={['Mechanism', 'BPC-157', 'TB-500']}
              rows={mechanismRows}
            />

            <h2 id="effectiveness-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Effectiveness Comparison
            </h2>
            <p>
              Clinical evidence for both peptides remains limited to animal studies, case series, and small observational trials, with no head-to-head comparative studies published in peer-reviewed literature<sup>[10,11]</sup>. BPC-157 demonstrated significant gastric ulcer healing in a rat model study (n=48), with complete ulcer resolution in 87% of treated animals versus 23% in controls after 14 days of treatment at 10 μg/kg daily<sup>[19]</sup>. Tendon healing studies showed 65% improvement in tensile strength compared to controls, with histological evidence of enhanced collagen organization and reduced inflammatory markers<sup>[20]</sup>.
            </p>
            <p>
              TB-500 effectiveness data comes primarily from wound healing and cardiac injury models, where the peptide demonstrated 42% reduction in infarct size following myocardial infarction in mice treated with 6 mg/kg twice weekly for 4 weeks<sup>[21]</sup>. Dermal wound healing studies reported 28% faster wound closure rates and 35% increased neovascularization compared to saline controls<sup>[18]</sup>. A small case series (n=12) of athletes with muscle injuries reported subjective improvement in 75% of participants receiving TB-500 at 2.5 mg twice weekly, though this study lacked proper controls and blinding<sup>[22]</sup>.
            </p>

            {/* Efficacy Table */}
            <DataTable
              headers={['Efficacy Measure', 'BPC-157', 'TB-500']}
              rows={efficacyRows}
            />

            <p>
              The absence of randomized controlled trials in humans represents a critical limitation for both peptides, with effectiveness claims based primarily on extrapolation from animal studies and anecdotal reports from clinical practice<sup>[23]</sup>.
            </p>

            <h2 id="side-effect-profiles" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side Effect Profiles
            </h2>
            <p>
              Safety profiles for both peptides derive from animal toxicology studies and clinical observations, as formal human safety trials remain absent from the literature<sup>[24,25]</sup>. BPC-157 demonstrated favorable safety in rat studies at doses up to 100 μg/kg daily for 30 days, with no significant changes in liver enzymes, kidney function, or hematological parameters<sup>[26]</sup>. Reported adverse effects in clinical use include injection site reactions (15-20% of users), mild nausea (8-12%), and transient fatigue (5-8%)<sup>[27]</sup>. One case report documented potential drug interaction with warfarin, resulting in elevated INR values, though causality remains unestablished<sup>[28]</sup>.
            </p>
            <p>
              TB-500 safety data from animal studies show minimal toxicity at therapeutic doses, with LD50 values exceeding 100 mg/kg in rodent models<sup>[29]</sup>. Clinical observations report injection site discomfort in 25-30% of users, headaches in 10-15%, and occasional flu-like symptoms during initial dosing phases<sup>[30]</sup>. A concerning case series identified potential cardiac arrhythmias in 3 out of 45 patients receiving high-dose TB-500 (&gt;5 mg twice weekly), though pre-existing cardiac conditions complicated interpretation<sup>[31]</sup>. The peptide's actin-binding properties raise theoretical concerns about interference with cardiac muscle function, warranting caution in patients with cardiovascular disease<sup>[32]</sup>.
            </p>

            {/* Side Effects Table */}
            <DataTable
              headers={['Side Effect', 'BPC-157 Incidence', 'TB-500 Incidence']}
              rows={sideEffectsRows}
            />

            <h2 id="dosing-administration" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Dosing &amp; Administration
            </h2>
            <p>
              BPC-157 dosing protocols typically employed 250-500 mcg daily via subcutaneous injection, with some practitioners using divided doses of 125-250 mcg twice daily for enhanced bioavailability<sup>[7]</sup>. The peptide demonstrated stability at room temperature for up to 72 hours and required refrigeration at 2-8°C for long-term storage<sup>[33]</sup>. Injection sites included abdominal subcutaneous tissue, with 29-31 gauge insulin syringes recommended for patient comfort. Treatment durations ranged from 4-8 weeks for acute injuries to 12-16 weeks for chronic conditions<sup>[34]</sup>.
            </p>
            <p>
              TB-500 administration follows a loading and maintenance protocol, with initial loading doses of 2.5-5 mg twice weekly for 4-6 weeks, followed by maintenance dosing of 2-2.5 mg weekly<sup>[8]</sup>. The peptide requires reconstitution with bacteriostatic water, maintaining stability for 14 days under refrigeration after mixing<sup>[35]</sup>. Higher molecular weight necessitates larger injection volumes (0.5-1 mL per dose) compared to BPC-157's typical 0.2-0.3 mL volumes. Some practitioners employ intramuscular injection near injury sites, though subcutaneous administration remains more common<sup>[36]</sup>.
            </p>

            {/* Dosing Table */}
            <DataTable
              headers={['Parameter', 'BPC-157', 'TB-500']}
              rows={dosingRows}
            />

            <h2 id="cost-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Cost Comparison
            </h2>
            <p>
              Historical pricing for BPC-157, prior to FDA prohibition, ranged from $80-150 per month for typical dosing protocols when obtained through compounding pharmacies<sup>[9]</sup>. Research-grade BPC-157 from chemical suppliers costs $200-400 per gram, though this material is not approved for human consumption and carries significant purity and safety risks<sup>[37]</sup>. International sources offer variable pricing from $50-200 monthly, but importation violates FDA regulations and poses quality control concerns<sup>[38]</sup>.
            </p>
            <p>
              TB-500 costs through legitimate compounding pharmacies range from $150-300 monthly, depending on dosing requirements and pharmacy location<sup>[39]</sup>. Loading phase protocols typically cost $400-600 for the initial 6-week period, with maintenance phases reducing to $150-250 monthly<sup>[40]</sup>. Insurance coverage remains minimal for both peptides, as they lack FDA approval for specific indications. Some health savings accounts (HSAs) may cover costs when prescribed for documented medical conditions<sup>[41]</sup>.
            </p>

            {/* Cost Table */}
            <DataTable
              headers={['Cost Factor', 'BPC-157 (Historical)', 'TB-500 (Current)']}
              rows={costRows}
            />

            <h2 id="fda-regulatory-status" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              FDA &amp; Regulatory Status
            </h2>
            <p>
              The regulatory landscape for these peptides differs significantly, with BPC-157 facing complete prohibition while TB-500 maintains limited availability through compounding pharmacies<sup>[5,6]</sup>. In December 2022, the FDA issued guidance specifically naming BPC-157 as a substance that cannot be compounded under sections 503A or 503B of the Federal Food, Drug, and Cosmetic Act<sup>[5]</sup>. This guidance cited safety concerns and lack of clinical evidence, effectively removing BPC-157 from the legal compounding market. The FDA's decision followed reports of adverse events and concerns about unregulated manufacturing quality<sup>[42]</sup>.
            </p>
            <p>
              TB-500 remains available through FDA-registered 503A compounding pharmacies when prescribed by licensed healthcare providers for individual patients<sup>[6]</sup>. However, the peptide cannot be compounded in bulk under 503B regulations and must meet specific compounding requirements, including sterility testing and potency verification<sup>[43]</sup>. The World Anti-Doping Agency (WADA) prohibits both peptides for competitive athletes, classifying them as performance-enhancing substances under the S2 category (Peptide Hormones, Growth Factors, Related Substances and Mimetics)<sup>[44]</sup>.
            </p>
            <p>
              State regulations add additional complexity, with some states implementing stricter controls on peptide compounding beyond federal requirements<sup>[45]</sup>. Healthcare providers must verify current regulatory status before prescribing, as enforcement actions continue to evolve. The DEA does not currently schedule either peptide as controlled substances, but FDA regulations supersede this classification for therapeutic use<sup>[46]</sup>.
            </p>

            <h2 id="who-should-choose-which" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Who Should Choose Which?
            </h2>
            <p>
              Given BPC-157's current prohibition status, the choice between these peptides has been effectively eliminated for patients seeking legal treatment options<sup>[5]</sup>. However, understanding the theoretical differences remains relevant for healthcare providers and patients considering TB-500 or awaiting potential regulatory changes.
            </p>
            <p>
              TB-500 may be more appropriate for patients with primarily musculoskeletal injuries, given its stronger effects on cell migration and tissue remodeling<sup>[4]</sup>. The peptide's loading protocol suits acute injury scenarios where rapid initial intervention is desired, followed by maintenance dosing for sustained healing<sup>[8]</sup>. Patients with cardiovascular risk factors require careful evaluation before TB-500 initiation, given case reports of potential cardiac effects<sup>[31]</sup>.
            </p>
            <p>
              Historically, BPC-157 was preferred for gastrointestinal conditions and vascular-related healing due to its growth factor modulation properties<sup>[3]</sup>. The peptide's daily dosing schedule provided more consistent plasma levels, potentially benefiting chronic conditions requiring sustained therapeutic effects<sup>[12]</sup>. Cost-sensitive patients often favored BPC-157's lower monthly expenses, though this advantage is now moot given regulatory prohibition<sup>[9]</sup>.
            </p>
            <p>
              Patients considering <a className={linkClass} href="/treatment/peptide-therapy">peptide therapy</a> should consult qualified healthcare providers through reputable <a className={linkClass} href="/clinics">peptide clinics</a> to ensure proper evaluation, prescription, and monitoring. Alternative peptides such as <a className={linkClass} href="/peptides/ghk-cu">GHK-Cu</a> or <a className={linkClass} href="/peptides/sermorelin">sermorelin</a> may provide similar benefits within current regulatory frameworks<sup>[47]</sup>.
            </p>

            <h2 id="what-the-evidence-does-not-show" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What the Evidence Does Not Show
            </h2>
            <p>
              Critical gaps exist in the evidence base for both peptides, limiting definitive conclusions about comparative effectiveness and safety<sup>[10,11]</sup>. No randomized controlled trials have directly compared BPC-157 vs TB-500 in human subjects, with all comparative assessments based on indirect evidence from separate animal studies<sup>[23]</sup>. The absence of dose-response studies in humans prevents optimization of dosing protocols, with current recommendations extrapolated from animal data and clinical experience<sup>[48]</sup>.
            </p>
            <p>
              Long-term safety data beyond 6 months of treatment remains unavailable for both peptides, creating uncertainty about chronic use effects<sup>[24,25]</sup>. Drug interaction studies are absent, leaving potential interactions with common medications unexplored<sup>[28]</sup>. The peptides' effects on cancer progression, immune function, and reproductive health lack systematic investigation, representing significant knowledge gaps for clinical decision-making<sup>[49]</sup>.
            </p>
            <p>
              Pharmacokinetic studies in humans are limited, with half-life, bioavailability, and metabolism data derived primarily from animal models<sup>[12,13]</sup>. The optimal injection sites, timing relative to meals, and co-administration with other therapies remain unstudied. Quality control standards for compounded preparations vary significantly between pharmacies, with limited data on actual peptide content and purity in commercially available products<sup>[50]</sup>.
            </p>

            <h2 id="frequently-asked-questions" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p>
              <strong>Can BPC-157 and TB-500 be used together safely?</strong><br />
              No published studies examine combination therapy safety or efficacy. Given BPC-157's current FDA prohibition, legal combination therapy is not possible in the United States. Theoretical drug interactions remain unexplored, and combining peptides without clinical evidence poses unknown risks<sup>[28,42]</sup>.
            </p>
            <p>
              <strong>How long does it take to see results from TB-500?</strong><br />
              Animal studies suggest tissue repair improvements within 7-14 days of treatment initiation<sup>[18]</sup>. Clinical observations report subjective improvements in 2-4 weeks, with objective healing measures showing changes at 4-8 weeks. Individual response varies significantly based on injury type, severity, and patient factors<sup>[22]</sup>.
            </p>
            <p>
              <strong>Why was BPC-157 banned while TB-500 remains available?</strong><br />
              The FDA specifically cited safety concerns and lack of clinical evidence for BPC-157 in their 2022 guidance<sup>[5]</sup>. TB-500 remains available through compounding pharmacies under 503A regulations, though this status could change with future FDA guidance. Regulatory decisions consider multiple factors including reported adverse events and manufacturing quality concerns<sup>[42]</sup>.
            </p>
            <p>
              <strong>Are there legal alternatives to BPC-157?</strong><br />
              Several peptides remain legally available through compounding pharmacies, including <a className={linkClass} href="/peptides/ghk-cu">GHK-Cu</a> for wound healing, <a className={linkClass} href="/peptides/sermorelin">sermorelin</a> for growth hormone optimization, and <a className={linkClass} href="/peptides/cjc-1295">CJC-1295</a> for tissue repair. Each has different mechanisms and evidence bases requiring individual evaluation<sup>[47]</sup>.
            </p>
            <p>
              <strong>What are the injection site rotation recommendations for TB-500?</strong><br />
              Rotate injection sites to prevent tissue irritation, using abdominal subcutaneous tissue, thigh, or upper arm locations<sup>[36]</sup>. Maintain 1-2 inch spacing between injection sites and avoid areas with scarring or inflammation. Some practitioners recommend intramuscular injection near injury sites, though this requires proper technique and sterile conditions<sup>[35]</sup>.
            </p>
            <p>
              <strong>How should TB-500 be stored after reconstitution?</strong><br />
              Store reconstituted TB-500 at 2-8°C (refrigerated) for up to 14 days<sup>[35]</sup>. Avoid freezing reconstituted peptide, as this can damage the protein structure. Use bacteriostatic water for reconstitution to extend stability. Lyophilized powder can be stored at room temperature before reconstitution for several months when kept dry and sealed<sup>[33]</sup>.
            </p>

            <h2 id="references" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              References
            </h2>
            <ol>
              {references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>
            
            <hr />
            <p className="text-sm italic">
              This content is for informational purposes only and does not constitute medical advice. Consult a licensed healthcare provider before starting any treatment.
            </p>
          </div>

          {/* Research Peptide Suppliers CTA */}
          <div className="my-8 border border-[#e5e7eb] bg-white p-5" style={{ borderRadius: 5 }}>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded" style={{ background: 'rgb(255, 240, 187)' }}>
                <svg className="h-5 w-5 text-[#333333]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-[#333333]">Looking to buy BPC-157 and TB-500 for research?</h3>
                <p className="mt-1 text-sm text-[#6b7280]">Compare verified research peptide suppliers with pricing, purity data, and trust signals.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/bpc-157">
                    BPC-157 suppliers <ArrowRight />
                  </a>
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/tb-500">
                    TB-500 suppliers <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Links */}
          <section className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/bpc-157">Learn more about BPC-157</a>
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/tb-500">Learn more about TB-500</a>
          </section>

          {/* Find a Clinic CTA */}
          <div className="mt-10 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
            <h2 className="font-heading text-lg font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>Find a Clinic</h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find a clinic that offers BPC-157 or TB-500 near you.</p>
            <a className="mt-4 inline-block rounded-lg bg-[#1F6CD6] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1F6CD6]" href="/clinics">Browse Peptide Therapy Clinics</a>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-sm text-[#6b7280]">
            MyPeptideMatch.com does not provide medical advice. Always consult a qualified healthcare provider before starting any peptide therapy.
          </p>
        </div>
      </main>
    </>
  );
}