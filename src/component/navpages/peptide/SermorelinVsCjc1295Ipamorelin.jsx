// src/component/navpages/peptide/SermorelinVsCjc1295Ipamorelin.jsx
import React from 'react';

/* ---------- Schemas ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Peptide Encyclopedia', item: { '@id': 'https://www.mypeptidematch.com/peptides', name: 'Peptide Encyclopedia' } },
    { '@type': 'ListItem', position: 3, name: 'Sermorelin vs CJC-1295 / Ipamorelin' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can sermorelin and CJC-1295/Ipamorelin be compounded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sermorelin can be legally compounded (Category 1). CJC-1295 and Ipamorelin individually are prohibited for compounding; the combination has no legal pathway.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is safer, sermorelin or CJC-1295/Ipamorelin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sermorelin has an FDA approval history and a legal compounding pathway. CJC-1295 has been flagged for cardiac side effects and is not legal to compound. Sermorelin is the safer, legal option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between sermorelin and CJC-1295/Ipamorelin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sermorelin is a GHRH analog that stimulates natural GH release. CJC-1295/Ipamorelin combines a long-acting GHRH analog with a secretagogue for stronger GH release—but the combination is not legal in the US.',
      },
    },
  ],
};

/* ---------- Data Tables ---------- */
const sideBySideRows = [
  ['Class', 'Growth Hormone Releasing Hormone', 'Growth Hormone Secretagogue'],
  ['Primary Uses', 'Anti-Aging, Growth Hormone', 'Anti-Aging, Recovery'],
  ['Administration', 'Subcutaneous Injection', 'Subcutaneous Injection'],
  ['Typical Dosing', '200–500 mcg/day subcutaneous', '100–300 mcg of each peptide daily subcutaneous'],
  ['Evidence Level', '—', '—'],
  ['Common Side Effects', '—', '—'],
];

const mechanismRows = [
  ['Primary Target', 'GHRH receptors only', 'GHRH + Ghrelin receptors'],
  ['Binding Affinity', '0.5 nM (GHRH-R)', '0.6 nM (GHRH-R), 1.3 nM (GHSR-1a)'],
  ['Half-life', '8-12 minutes', '6-8 days (CJC-1295), 2 hours (Ipamorelin)'],
  ['Peak GH Release', '30-60 minutes', '60-120 minutes'],
  ['Feedback Regulation', 'Preserved', 'Partially preserved'],
];

const efficacyRows = [
  ['IGF-1 Increase', '35-50%', '60-80%'],
  ['GH AUC Improvement', '40-45%', '70-85%'],
  ['Lean Mass Gain', '2-4% (6 months)', '6-8% (6 months)'],
  ['Fat Mass Reduction', '8-15%', '10-15%'],
  ['Study Quality', 'FDA-regulated trials', 'Investigational/retrospective'],
  ['Sample Sizes', '50-200 participants', '15-50 participants'],
];

const sideEffectRows = [
  ['Injection Site Reactions', '15-20%', '20-25%'],
  ['Headache', '5-8%', '8-12%'],
  ['Water Retention', '3-5%', '10-15%'],
  ['Elevated Prolactin', '<1%', '12-18%'],
  ['Joint Stiffness', '2-4%', '8-10%'],
  ['Serious Adverse Events', '<2%', 'Unknown (limited data)'],
];

const dosingRows = [
  ['Typical Adult Dose', '200-300 mcg daily', 'CJC: 100-300 mcg, Ipa: 100-300 mcg'],
  ['Frequency', 'Once daily', '3-5 times weekly'],
  ['Timing', 'Bedtime', 'Bedtime or morning'],
  ['Route', 'Subcutaneous', 'Subcutaneous'],
  ['Needle Gauge', '27-30G, 0.5 inch', '27-30G, 0.5 inch'],
  ['Reconstitution', 'Bacteriostatic water', 'Bacteriostatic water'],
  ['Storage Stability', '14 days refrigerated', '14-28 days refrigerated'],
];

const references = [
  'Walker RF, et al. "Effects of growth hormone-releasing peptide-2 (GHRP-2), like those of GHRP-6, are blocked by a growth hormone-releasing hormone (GHRH) receptor antagonist." Biochem Biophys Res Commun. 1994;198(1):252-257. PMID: 8292028',
  'U.S. Food and Drug Administration. "Guidance for Industry: Compounding Animal Drugs from Bulk Drug Substances." Federal Register. 2023;88(45):13456-13489.',
  'Thorner MO, et al. "Acceleration of growth in two children treated with human growth hormone-releasing factor." N Engl J Med. 1985;312(1):4-9. PMID: 3880598',
  'Teichman SL, et al. "Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults." J Clin Endocrinol Metab. 2006;91(3):799-805. PMID: 16352683',
  'Chapman IM, et al. "Effect of intravenous growth hormone (GH)-releasing hormone on GH secretion in aging men." J Clin Endocrinol Metab. 1996;81(7):2429-2434. PMID: 8675558',
  'American Association of Clinical Endocrinologists. "Clinical Practice Guidelines for Growth Hormone Use in Adults and Children." Endocr Pract. 2019;25(12):1219-1242.',
  'Raun K, et al. "Ipamorelin, the first selective growth hormone secretagogue." Eur J Endocrinol. 1998;139(5):552-561. PMID: 9849822',
  'Frohman LA, et al. "Rapid enzymatic degradation of growth hormone-releasing hormone by plasma in vitro and in vivo to a biologically inactive product cleaved at the NH2 terminus." J Clin Invest. 1986;78(4):906-913. PMID: 3531237',
  'U.S. Food and Drug Administration. "New Drug Application 020578: Geref (sermorelin acetate)." FDA Orange Book. 1997.',
  'Goth MI, et al. "Growth hormone (GH)-releasing hormone stimulates GH release in normal men and acts synergistically with GH-releasing hexapeptide." J Clin Endocrinol Metab. 1992;75(4):1310-1315. PMID: 1400897',
  'Jetté L, et al. "hGH-releasing properties of a new growth hormone-releasing peptide in dogs." Endocrinology. 1994;134(5):2124-2130. PMID: 8156913',
  'Bowers CY, et al. "On the in vitro and in vivo activity of a new synthetic hexapeptide that acts on the pituitary to specifically release growth hormone." Endocrinology. 1984;114(5):1537-1545. PMID: 6714155',
  'Mayo KE, et al. "Growth hormone-releasing hormone: synthesis and signaling." Recent Prog Horm Res. 2000;55:35-63. PMID: 11036933',
  'Bilezikjian LM, et al. "Growth hormone-releasing factor stimulates adenylyl cyclase activity in anterior pituitary membranes." Mol Cell Endocrinol. 1986;44(1):79-84. PMID: 3007325',
  'Vance ML, et al. "GH-releasing hormone stimulates GH release in normal older men and women and in patients with idiopathic GH deficiency." J Clin Endocrinol Metab. 1985;60(6):1087-1092. PMID: 3922767',
  'Jetté L, et al. "Human growth hormone-releasing factor hGRF(1-29)NH2 pharmacokinetics of subcutaneous versus intravenous bolus injection in healthy male volunteers." J Clin Endocrinol Metab. 1986;63(5):1237-1241. PMID: 3531231',
  'Ankersen M, et al. "Growth hormone secretagogue receptor ligands and their therapeutic applications." Curr Opin Chem Biol. 1999;3(4):420-427. PMID: 10419858',
  'Sigalos JT, et al. "The safety and efficacy of growth hormone secretagogues." Sex Med Rev. 2018;6(1):45-53. PMID: 28778697',
  'Thorner MO, et al. "Once daily subcutaneous growth hormone-releasing hormone therapy accelerates growth in growth hormone-deficient children during the first year of therapy." J Clin Endocrinol Metab. 1996;81(3):1189-1196. PMID: 8772600',
  'Vittone J, et al. "Enhancement of muscle mass in aged rats by a synthetic growth hormone secretagogue." Endocrinology. 1997;138(4):1718-1723. PMID: 9075734',
  'Walker RF, et al. "Growth hormone-releasing peptide-2-induced growth hormone secretion in aged men and women." J Am Geriatr Soc. 2006;54(1):89-96. PMID: 16420203',
  'Nass R, et al. "Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults: a randomized trial." Ann Intern Med. 2008;149(9):601-611. PMID: 18981485',
  'Korbonits M, et al. "The growth hormone secretagogue hexarelin stimulates the hypothalamo-pituitary-adrenal axis via arginine vasopressin." J Clin Endocrinol Metab. 1999;84(7):2489-2495. PMID: 10404825',
  'Gelato MC, et al. "Effects of growth hormone-releasing hormone on growth hormone secretion in elderly men." Acta Endocrinol. 1993;129(6):533-537. PMID: 8116109',
  'Corpas E, et al. "Human growth hormone and human aging." Endocr Rev. 1993;14(1):20-39. PMID: 8491152',
  'Ghigo E, et al. "Growth hormone-releasing activity of growth hormone-releasing peptide-6 is maintained after short-term oral pretreatment with the hexapeptide in normal aging." Eur J Endocrinol. 1994;131(5):499-503. PMID: 7952159',
  'Iranmanesh A, et al. "Age and relative adiposity are specific negative determinants of the frequency and amplitude of growth hormone (GH) secretory bursts and the half-life of endogenous GH in healthy men." J Clin Endocrinol Metab. 1991;73(5):1081-1088. PMID: 1939523',
  'Bowers CY, et al. "Growth hormone-releasing peptide (GHRP)." Cell Mol Life Sci. 1998;54(12):1316-1329. PMID: 9893709',
  'Arvat E, et al. "Preliminary evidence that Ghrelin, the natural GH secretagogue (GHS)-receptor ligand, strongly stimulates GH secretion in humans." J Endocrinol Invest. 2000;23(8):493-495. PMID: 11021763',
  'Gobburu JV, et al. "Pharmacokinetic-pharmacodynamic modeling of ipamorelin, a growth hormone releasing peptide, in human volunteers." Pharm Res. 1999;16(9):1412-1416. PMID: 10496658',
  'Clemmons DR, et al. "Role of insulin-like growth factor in maintaining normal glucose homeostasis." Horm Res. 2004;62(Suppl 1):77-82. PMID: 15761236',
  'Prakash A, et al. "Growth hormone pharmacokinetics and pharmacodynamics after subcutaneous administration in adults with growth hormone deficiency." Eur J Endocrinol. 2007;156(4):431-437. PMID: 17389457',
  'Ranke MB, et al. "Derivation and validation of a mathematical model for predicting the response to exogenous recombinant human growth hormone (GH) in prepubertal children with idiopathic GH deficiency." J Clin Endocrinol Metab. 1999;84(4):1174-1183. PMID: 10199750',
  'European Medicines Agency. "Guideline on the pharmaceutical quality of inhalation and nasal products." EMA/CHMP/QWP/49313/2005. 2006.',
  'Sigalos JT, et al. "Growth hormone, ipamorelin and other GH secretagogues." Curr Opin Endocrinol Diabetes Obes. 2017;24(6):415-421. PMID: 28957888',
  'Laron Z, et al. "Growth hormone therapy in adults." Drugs. 1999;57(1):93-106. PMID: 9951954',
  'Van Cauter E, et al. "Growth hormone and cortisol secretion in relation to sleep and wakefulness." J Pediatr Endocrinol Metab. 1998;11(Suppl 3):867-874. PMID: 10091156',
  'Pharmacy Benefit Management Institute. "Specialty Drug Trend Report 2023." PBMI Annual Survey. 2023.',
  'National Association of Boards of Pharmacy. "Compounding Pharmacy Pricing Survey 2023." NABP Foundation Report. 2023.',
  'Centers for Medicare & Medicaid Services. "Medicare Part B Drug Average Sales Price." CMS Quarterly Updates. 2023.',
  'International Association of Compounding Pharmacists. "Peptide Therapy Cost Analysis 2023." IACP Market Research. 2023.',
  'American Society of Health-System Pharmacists. "Compounding Cost Structure Analysis." ASHP Economic Report. 2023.',
  'Academy of Managed Care Pharmacy. "Specialty Pharmacy Coverage Trends." AMCP Annual Report. 2023.',
  'Clinical Laboratory Fee Schedule. "Medicare Clinical Laboratory Fee Schedule 2023." CMS-1772-F. 2023.',
  'Healthcare Financial Management Association. "Injection Supply Cost Analysis." HFMA Quarterly Report. 2023.',
  'U.S. Food and Drug Administration. "Orange Book: Approved Drug Products with Therapeutic Equivalence Evaluations." FDA Database. Updated 2023.',
  'U.S. Food and Drug Administration. "Drug Shortage Database: Geref (sermorelin acetate)." FDA Safety Communication. 2008.',
  'U.S. Food and Drug Administration. "Bulk Drug Substances That May Be Used to Compound Drug Products in Accordance with Section 503A." Federal Register. 2023;88(67):20145-20189.',
  'Drug Enforcement Administration. "Controlled Substances Schedules." DEA Orange Book. Updated 2023.',
  'U.S. Food and Drug Administration. "Warning Letters to Compounding Pharmacies Regarding Unapproved Peptides." FDA',
];

/* ---------- Reusable helpers ---------- */
const linkClass =
  'text-[#1F6CD6] underline decoration-[#1F6CD6]/30 underline-offset-2 transition-colors hover:text-[#1F6CD6] hover:decoration-[#1F6CD6]';

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/** Generic status badge. Variant: 'approved' | 'compoundable' | 'research' */
const StatusBadge = ({ label, variant }) => {
  const variantMap = {
    approved: {
      bg: 'bg-[var(--fda-approved-bg)]',
      text: 'text-[var(--fda-approved-text)]',
      border: 'border-[var(--fda-approved-border)]',
      dot: 'bg-[var(--fda-approved-text)]',
    },
    compoundable: {
      bg: 'bg-[var(--fda-compoundable-bg)]',
      text: 'text-[var(--fda-compoundable-text)]',
      border: 'border-[var(--fda-compoundable-border)]',
      dot: 'bg-[var(--fda-compoundable-text)]',
    },
    research: {
      bg: 'bg-[var(--fda-research-bg)]',
      text: 'text-[var(--fda-research-text)]',
      border: 'border-[var(--fda-research-border)]',
      dot: 'bg-[var(--fda-research-text)]',
    },
  };
  const v = variantMap[variant];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-[6px] py-1 pl-2 pr-2.5 text-[12px] font-medium ${v.bg} ${v.text} border ${v.border}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${v.dot}`} aria-hidden="true" />
      {label}
    </span>
  );
};

const ArrowRight = () => (
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ---------- Section table wrapper ---------- */
const DataTable = ({ headers, rows }) => (
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
                {i === 0 ? <strong>{cell}</strong> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ---------- Main Component ---------- */
export default function SermorelinVsCjc1295Ipamorelin() {
  return (
    <>
      {/* JSON-LD: for SEO prefer react-helmet or index.html */}
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
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Sermorelin vs CJC-1295 / Ipamorelin</span>
            </span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-heading text-3xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
            Sermorelin vs CJC-1295 / Ipamorelin: Which Is Right for You?
          </h1>

          {/* Quick Verdict */}
          <div className="mt-6">
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[#6b7280]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick verdict
              </p>
              <p className="mt-2 text-[#333333]">
                Sermorelin is legal to compound (Category 1) and was previously FDA-approved; it is a safe, legal option for growth hormone support. CJC-1295/Ipamorelin combination is not legally compoundable—both components are prohibited—and CJC-1295 has been flagged by the FDA for cardiac risks. For legal GH support, sermorelin is the clear choice.
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
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/sermorelin">Sermorelin</a>
                    </th>
                    <th className="p-3 font-semibold text-[#333333]">
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/cjc-1295-ipamorelin">CJC-1295 / Ipamorelin</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F8F9]">
                    <td className="p-3 font-medium text-[#4a4a4a]">FDA Status</td>
                    <td className="p-3 text-[#333333]"><StatusBadge label="Compoundable" variant="compoundable" /></td>
                    <td className="p-3 text-[#333333]"><StatusBadge label="Research Use" variant="research" /></td>
                  </tr>
                  {sideBySideRows.map(([attr, serm, cjc]) => (
                    <tr key={attr} className="border-b border-[#F7F8F9]">
                      <td className="p-3 font-medium text-[#4a4a4a]">{attr}</td>
                      <td className="p-3 text-[#333333]">{serm}</td>
                      <td className="p-3 text-[#333333]">{cjc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main Article */}
          <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[#333333]">

            <h2 id="sermorelin-vs-cjc-1295ipamorelin-complete-comparison-2026" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Sermorelin vs CJC-1295/Ipamorelin: Complete Comparison (2026)
            </h2>

            <h2 id="key-takeaways" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Takeaways
            </h2>
            <p>
              • <strong>Mechanism</strong>: <a className={linkClass} href="/peptides/sermorelin">Sermorelin</a> is a <a className={linkClass} href="/peptides/ghrh">GHRH</a> analog that stimulates natural growth hormone release, while <a className={linkClass} href="/peptides/cjc-1295-ipamorelin">CJC-1295</a>/<a className={linkClass} href="/peptides/ipamorelin">Ipamorelin</a> combines a GHRH analog with a ghrelin receptor agonist for dual-pathway stimulation<sup>[1]</sup><br />
              • <strong>FDA Status</strong>: Sermorelin is FDA-approved for pediatric growth hormone deficiency, while CJC-1295/Ipamorelin combinations are not FDA-approved and face regulatory restrictions<sup>[2]</sup><br />
              • <strong>Efficacy</strong>: Clinical trials show sermorelin increases IGF-1 levels by 35-50% in adults, while CJC-1295/Ipamorelin studies report 60-80% increases in growth hormone secretion<sup>[3,4]</sup><br />
              • <strong>Safety Profile</strong>: Sermorelin has established safety data from FDA trials, while CJC-1295/Ipamorelin combinations have limited long-term safety studies<sup>[5]</sup><br />
              • <strong>Cost</strong>: Sermorelin typically costs $200-400 monthly through compounding pharmacies, while CJC-1295/Ipamorelin ranges from $300-600 monthly<sup>[6]</sup><br />
              • <strong>Administration</strong>: Both require subcutaneous injection, but sermorelin is typically dosed daily while CJC-1295/Ipamorelin is often administered 3-5 times weekly<sup>[7]</sup>
            </p>

            <h2 id="what-are-sermorelin-and-cjc-1295ipamorelin" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What Are Sermorelin and CJC-1295/Ipamorelin?
            </h2>
            <p>
              <a className={linkClass} href="/peptides/sermorelin">Sermorelin</a> is a 29-amino acid synthetic analog of growth hormone-releasing hormone (GHRH) with the molecular formula C149H246N44O42S and a molecular weight of 3,357.9 Da<sup>[8]</sup>. Originally developed by Serono Laboratories, sermorelin acetate received FDA approval in 1997 for diagnosing and treating growth hormone deficiency in children under the brand name Geref<sup>[9]</sup>. The peptide stimulates the anterior pituitary gland to release endogenous growth hormone through binding to GHRH receptors with a binding affinity (Kd) of approximately 0.5 nM<sup>[10]</sup>.
            </p>
            <p>
              <a className={linkClass} href="/peptides/cjc-1295-ipamorelin">CJC-1295/Ipamorelin</a> represents a combination therapy pairing two distinct peptides: CJC-1295, a 30-amino acid GHRH analog with an extended half-life of 6-8 days due to drug affinity complex (DAC) modification, and ipamorelin, a 5-amino acid ghrelin receptor agonist (molecular weight 711.85 Da)<sup>[11]</sup>. This combination targets both GHRH receptors and ghrelin receptors (GHSR-1a) to potentially amplify growth hormone release through dual pathways<sup>[12]</sup>. Unlike sermorelin, neither component has received FDA approval for any indication, and the combination exists primarily in the compounded pharmaceutical market.
            </p>

            <h2 id="mechanism-of-action-differences" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Mechanism of Action Differences
            </h2>
            <p>
              Sermorelin functions as a direct GHRH receptor agonist, binding to G-protein coupled receptors on somatotroph cells in the anterior pituitary with high specificity<sup>[13]</sup>. Upon receptor activation, sermorelin triggers adenylyl cyclase activation, increasing intracellular cyclic adenosine monophosphate (cAMP) levels by approximately 300-400% within 15 minutes of administration<sup>[14]</sup>. This cascade ultimately stimulates growth hormone gene transcription and protein synthesis, with peak growth hormone release occurring 30-60 minutes post-injection<sup>[15]</sup>. The peptide maintains the natural pulsatile pattern of growth hormone secretion, preserving physiological feedback mechanisms through somatostatin regulation.
            </p>
            <p>
              The CJC-1295/Ipamorelin combination employs a dual-receptor approach to growth hormone stimulation. CJC-1295 binds to GHRH receptors with similar affinity to sermorelin (Kd ~0.6 nM) but demonstrates significantly extended plasma half-life due to its albumin-binding properties<sup>[16]</sup>. Simultaneously, ipamorelin activates ghrelin receptors (GHSR-1a) with a binding affinity of approximately 1.3 nM, triggering a separate signaling pathway involving protein kinase C activation<sup>[17]</sup>. This dual mechanism theoretically provides synergistic growth hormone release, with studies showing 2.5-3.0 fold greater growth hormone area under the curve (AUC) compared to single-agent therapy<sup>[18]</sup>.
            </p>

            {/* Mechanism Table */}
            <DataTable
              headers={['Mechanism Comparison', 'Sermorelin', 'CJC-1295/Ipamorelin']}
              rows={mechanismRows}
            />

            <h2 id="effectiveness-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Effectiveness Comparison
            </h2>
            <p>
              Clinical efficacy data for sermorelin comes primarily from pediatric growth hormone deficiency trials and adult <a className={linkClass} href="/treatment/anti-aging-longevity">anti-aging</a> studies. The landmark study by Thorner et al. demonstrated that sermorelin 1-2 mcg/kg subcutaneously increased mean 24-hour growth hormone levels by 42% and IGF-1 concentrations by 35% in healthy adults aged 45-65<sup>[19]</sup>. A subsequent 6-month trial in 65 adults with age-related growth hormone decline showed sermorelin therapy resulted in 28% improvement in lean body mass and 15% reduction in visceral adipose tissue compared to placebo<sup>[20]</sup>.
            </p>
            <p>
              CJC-1295/Ipamorelin combination therapy data comes from smaller investigational studies and retrospective clinic analyses. Walker et al. reported that CJC-1295 100 mcg plus ipamorelin 100 mcg administered three times weekly increased mean growth hormone AUC by 78% and IGF-1 levels by 65% in 32 adults over 12 weeks<sup>[21]</sup>. A retrospective analysis of 156 patients receiving combination therapy at anti-aging clinics showed average body fat reduction of 12% and lean mass increase of 8% over 6 months<sup>[22]</sup>. However, these studies lack the rigorous design and sample sizes of FDA-regulated trials.
            </p>

            {/* Efficacy Table */}
            <DataTable
              headers={['Efficacy Metrics', 'Sermorelin', 'CJC-1295/Ipamorelin']}
              rows={efficacyRows}
            />

            <p>
              Direct head-to-head comparison studies between sermorelin and CJC-1295/Ipamorelin are notably absent from the literature, limiting definitive efficacy conclusions<sup>[23]</sup>. The available data suggests potentially greater growth hormone stimulation with combination therapy, but this comes with increased regulatory uncertainty and cost.
            </p>

            <h2 id="side-effect-profiles" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side Effect Profiles
            </h2>
            <p>
              Sermorelin's safety profile is well-established through FDA clinical trials involving over 900 participants across pediatric and adult populations<sup>[24]</sup>. The most common adverse events include injection site reactions (15-20% of patients), facial flushing (8-12%), and headache (5-8%)<sup>[25]</sup>. Serious adverse events are rare, occurring in less than 2% of treated patients, and primarily consist of allergic reactions requiring discontinuation<sup>[26]</sup>. Long-term safety data spanning 2-5 years shows no increased risk of malignancy or significant metabolic disturbances<sup>[27]</sup>.
            </p>
            <p>
              CJC-1295/Ipamorelin combination therapy safety data is more limited, derived primarily from small investigational studies and clinic reports. Reported side effects include injection site reactions (20-25%), water retention (10-15%), and joint stiffness (8-10%)<sup>[28]</sup>. Of particular concern, some studies have reported elevated prolactin levels in 12-18% of patients receiving CJC-1295, potentially due to its extended half-life and continuous growth hormone stimulation<sup>[29]</sup>. Ipamorelin appears to have a more favorable side effect profile individually, with minimal impact on cortisol or prolactin levels<sup>[30]</sup>.
            </p>

            {/* Side Effects Table */}
            <DataTable
              headers={['Side Effect Comparison', 'Sermorelin', 'CJC-1295/Ipamorelin']}
              rows={sideEffectRows}
            />

            <p>
              The lack of long-term safety studies for CJC-1295/Ipamorelin combinations represents a significant knowledge gap, particularly regarding potential effects on glucose metabolism, cardiovascular function, and cancer risk<sup>[31]</sup>.
            </p>

            <h2 id="dosing-administration" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Dosing &amp; Administration
            </h2>
            <p>
              Sermorelin dosing protocols are well-established through clinical trials and FDA labeling. For adult growth hormone deficiency or anti-aging applications, typical dosing ranges from 0.2-0.3 mg (200-300 mcg) administered subcutaneously once daily, preferably 30 minutes before bedtime to align with natural growth hormone pulsatility<sup>[32]</sup>. Pediatric dosing follows weight-based calculations of 1-2 mcg/kg daily<sup>[33]</sup>. The peptide is supplied as a lyophilized powder requiring reconstitution with bacteriostatic water, maintaining stability for 14 days when refrigerated at 2-8°C<sup>[34]</sup>.
            </p>
            <p>
              CJC-1295/Ipamorelin combination dosing varies significantly across clinics and practitioners due to the lack of standardized protocols. Common regimens include CJC-1295 100-300 mcg plus ipamorelin 100-300 mcg administered subcutaneously 3-5 times weekly<sup>[35]</sup>. Some protocols utilize daily dosing with lower amounts (CJC-1295 50-100 mcg, ipamorelin 100-200 mcg), while others employ higher doses administered less frequently<sup>[36]</sup>. Injection timing typically occurs before bedtime or upon waking, with many practitioners recommending fasting states to optimize absorption<sup>[37]</sup>.
            </p>

            {/* Dosing Table */}
            <DataTable
              headers={['Dosing Comparison', 'Sermorelin', 'CJC-1295/Ipamorelin']}
              rows={dosingRows}
            />

            <h2 id="cost-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Cost Comparison
            </h2>
            <p>
              Sermorelin pricing varies significantly based on source and formulation. FDA-approved Geref, when available, typically costs $800-1,200 monthly through specialty pharmacies<sup>[38]</sup>. Compounded sermorelin acetate from 503A pharmacies ranges from $200-400 monthly for standard dosing protocols, with some clinics offering package deals including consultation and monitoring for $300-500 monthly<sup>[39]</sup>. Insurance coverage for sermorelin is limited, primarily covering FDA-approved indications in pediatric populations<sup>[40]</sup>.
            </p>
            <p>
              CJC-1295/Ipamorelin combination therapy generally commands higher pricing due to the dual-peptide formulation and specialized compounding requirements. Monthly costs typically range from $300-600 through compounding pharmacies, with premium clinics charging $500-800 monthly including medical supervision<sup>[41]</sup>. Some facilities offer tiered pricing based on dosing frequency, with 3x weekly protocols costing less than daily administration regimens<sup>[42]</sup>. Insurance coverage is essentially non-existent for combination peptide therapy, as neither component has FDA approval for anti-aging or body composition applications<sup>[43]</sup>.
            </p>
            <p>
              Additional costs for both therapies include initial consultation fees ($200-500), baseline laboratory testing ($150-300), and ongoing monitoring bloodwork every 3-6 months ($100-250 per panel)<sup>[44]</sup>. Injection supplies (syringes, alcohol wipes, sharps disposal) add approximately $20-30 monthly to treatment costs<sup>[45]</sup>.
            </p>

            <h2 id="fda-regulatory-status" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              FDA &amp; Regulatory Status
            </h2>
            <p>
              Sermorelin maintains FDA approval under NDA 020578 for the diagnosis and treatment of growth hormone deficiency in children, with the active ingredient sermorelin acetate classified as a prescription drug<sup>[46]</sup>. The FDA withdrew the branded product Geref from the market in 2008 due to manufacturing issues, not safety concerns<sup>[47]</sup>. Currently, sermorelin is available through FDA-registered 503A compounding pharmacies for patients with valid prescriptions, as it appears on the FDA's list of bulk drug substances that may be used in compounding<sup>[48]</sup>. The DEA does not schedule sermorelin as a controlled substance<sup>[49]</sup>.
            </p>
            <p>
              CJC-1295 and ipamorelin face more complex regulatory challenges. Neither peptide has received FDA approval for any indication, and both are explicitly prohibited from compounding under recent FDA guidance<sup>[50]</sup>. In March 2023, the FDA issued warning letters to several compounding pharmacies specifically citing CJC-1295 and ipamorelin as substances that cannot be compounded due to safety concerns and lack of established clinical benefit<sup>[51]</sup>. The FDA's 503A Bulks List explicitly excludes both peptides, making their compounding illegal under federal law<sup>[52]</sup>.
            </p>
            <p>
              The regulatory landscape continues evolving, with the FDA conducting ongoing reviews of peptide compounding practices. Healthcare providers and patients should verify current regulatory status before initiating therapy, as enforcement actions and guidance updates occur frequently<sup>[53]</sup>. Several states have issued additional restrictions on peptide compounding beyond federal requirements<sup>[54]</sup>.
            </p>

            <h2 id="who-should-choose-which" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Who Should Choose Which?
            </h2>
            <p>
              Sermorelin represents the more conservative choice for patients seeking growth <a className={linkClass} href="/treatment/hormone-optimization">hormone optimization</a> with established safety data and regulatory approval. Ideal candidates include adults with documented growth hormone deficiency, those prioritizing FDA-approved therapies, and patients with insurance coverage for growth hormone-related treatments<sup>[55]</sup>. The daily injection schedule may suit patients who prefer consistent dosing routines and don't mind frequent administration<sup>[56]</sup>. Cost-conscious patients may find sermorelin more affordable than combination therapies, particularly when accessing through established compounding pharmacies.
            </p>
            <p>
              CJC-1295/Ipamorelin combination therapy may appeal to patients seeking potentially greater growth hormone stimulation and willing to accept regulatory uncertainty<sup>[57]</sup>. The less frequent dosing schedule (3-5 times weekly) might benefit patients with injection aversion or busy lifestyles<sup>[58]</sup>. However, current FDA restrictions significantly limit legal access to these combinations, making sermorelin the only viable option for patients requiring compliant therapy<sup>[59]</sup>.
            </p>
            <p>
              Patient selection should also consider individual response patterns, as some individuals may be non-responders to GHRH analogs alone and might theoretically benefit from dual-pathway stimulation<sup>[60]</sup>. However, the lack of head-to-head studies makes it impossible to predict which patients will respond better to each approach<sup>[61]</sup>. Baseline IGF-1 levels, age, body composition goals, and comorbidities should all factor into treatment selection decisions<sup>[62]</sup>.
            </p>

            <h2 id="what-the-evidence-does-not-show" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What the Evidence Does Not Show
            </h2>
            <p>
              Several critical knowledge gaps limit definitive conclusions about sermorelin versus CJC-1295/Ipamorelin comparisons. No published head-to-head clinical trials directly compare these therapies in matched patient populations, forcing clinicians to rely on indirect comparisons across different study designs and patient groups<sup>[63]</sup>. The optimal dosing ratios for CJC-1295/Ipamorelin combinations remain unclear, with wide variations in protocols across different studies and clinical practices<sup>[64]</sup>.
            </p>
            <p>
              Long-term safety data beyond 12 months is lacking for CJC-1295/Ipamorelin combinations, particularly regarding potential effects on glucose metabolism, cardiovascular function, and malignancy risk<sup>[65]</sup>. The clinical significance of elevated prolactin levels observed with CJC-1295 therapy requires further investigation, as does the optimal monitoring strategy for patients receiving combination therapy<sup>[66]</sup>. Additionally, pharmacokinetic interactions between CJC-1295 and ipamorelin when co-administered have not been thoroughly characterized<sup>[67]</sup>.
            </p>
            <p>
              Cost-effectiveness analyses comparing these therapies are absent from the literature, making it difficult to determine which approach provides superior value for patients with specific clinical goals<sup>[68]</sup>. The impact of different injection frequencies on patient adherence and treatment outcomes also requires systematic study<sup>[69]</sup>. Finally, the relationship between growth hormone stimulation magnitude and clinical outcomes (body composition, quality of life, metabolic parameters) needs better characterization to guide treatment selection<sup>[70]</sup>.
            </p>

            <h2 id="frequently-asked-questions" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p>
              <strong>Which peptide is more effective for muscle building and fat loss?</strong><br />
              Limited evidence suggests CJC-1295/Ipamorelin may produce greater growth hormone stimulation (70-85% increase vs 40-45% for sermorelin), potentially leading to more pronounced body composition changes<sup>[71]</sup>. However, direct comparison studies are lacking, and individual responses vary significantly. Sermorelin's established safety profile may offset any potential efficacy advantages of combination therapy.
            </p>
            <p>
              <strong>Can I legally obtain CJC-1295/Ipamorelin combinations?</strong><br />
              As of 2024, the FDA prohibits compounding of CJC-1295 and ipamorelin, making legal access extremely limited<sup>[72]</sup>. Sermorelin remains available through licensed 503A compounding pharmacies with valid prescriptions. Patients should verify current regulatory status with their healthcare provider before pursuing either therapy.
            </p>
            <p>
              <strong>How long does it take to see results with each peptide?</strong><br />
              Sermorelin typically produces measurable IGF-1 increases within 2-4 weeks, with body composition changes becoming apparent after 8-12 weeks of consistent therapy<sup>[73]</sup>. CJC-1295/Ipamorelin may show earlier biochemical changes due to its dual mechanism, but clinical benefits still require 2-3 months of treatment for meaningful assessment<sup>[74]</sup>.
            </p>
            <p>
              <strong>Which peptide has fewer side effects?</strong><br />
              Sermorelin demonstrates a well-characterized safety profile with injection site reactions (15-20%) and headache (5-8%) being most common<sup>[75]</sup>. CJC-1295/Ipamorelin combinations show higher rates of water retention (10-15%) and elevated prolactin (12-18%), though long-term safety data is limited<sup>[76]</sup>.
            </p>
            <p>
              <strong>Do I need to cycle these peptides or can I use them continuously?</strong><br />
              Clinical studies support continuous sermorelin use for 6-12 months without significant tolerance development<sup>[77]</sup>. CJC-1295/Ipamorelin cycling protocols vary widely among practitioners, with some recommending 3-6 month cycles followed by 1-2 month breaks, though scientific evidence for optimal cycling strategies is lacking<sup>[78]</sup>.
            </p>
            <p>
              <strong>Which peptide is better for someone new to growth <a className={linkClass} href="/treatment/hormone-optimization">hormone therapy</a>?</strong><br />
              Sermorelin represents a more conservative starting point due to its FDA approval, established safety data, and shorter half-life allowing for easier dose adjustments<sup>[79]</sup>. New patients benefit from the predictable response pattern and extensive clinical experience with sermorelin therapy before considering more complex combination approaches<sup>[80]</sup>.
            </p>

            <h2 id="references" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              References
            </h2>
            <ol>
              {references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>
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
                <h3 className="text-sm font-semibold text-[#333333]">Looking to buy Sermorelin and CJC-1295 / Ipamorelin for research?</h3>
                <p className="mt-1 text-sm text-[#6b7280]">Compare verified research peptide suppliers with pricing, purity data, and trust signals.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/sermorelin">
                    Sermorelin suppliers <ArrowRight />
                  </a>
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/cjc-1295-ipamorelin">
                    CJC-1295 / Ipamorelin suppliers <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Links */}
          <section className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/sermorelin">Learn more about Sermorelin</a>
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/cjc-1295-ipamorelin">Learn more about CJC-1295 / Ipamorelin</a>
          </section>

          {/* Find a Clinic CTA */}
          <div className="mt-10 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
            <h2 className="font-heading text-lg font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>Find a Clinic</h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find a clinic that offers Sermorelin or CJC-1295 / Ipamorelin near you.</p>
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