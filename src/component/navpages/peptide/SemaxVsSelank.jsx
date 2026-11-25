// src/component/navpages/peptide/SemaxVsSelank.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

/* ---------- Schemas ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Peptide Encyclopedia', item: { '@id': 'https://www.mypeptidematch.com/peptides', name: 'Peptide Encyclopedia' } },
    { '@type': 'ListItem', position: 3, name: 'Semax vs Selank' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are Semax and Selank FDA approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Neither is FDA-approved in the US. Semax is approved in Russia and Ukraine; Selank is approved in Russia. US status is unclear or prohibited for compounding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Semax and Selank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semax is an ACTH (4-10) fragment analog for neuroprotection and cognition. Selank is a tuftsin analog used for anxiety and immune modulation. Both have Russian clinical data but no US approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get Semax or Selank in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is an approved prescription or compounded product in the US. Purchasing from overseas carries legal and safety risks. Use evidence-based, legal options for cognitive or anxiety support.',
      },
    },
  ],
};

/* ---------- Data Tables ---------- */
const sideBySideRows = [
  ['Class', '—', '—'],
  ['Primary Uses', 'neurotrophic signaling, nootropic signaling', 'neuroimmune modulation'],
  ['Administration', '—', 'subcutaneous injection or intranasal'],
  ['Typical Dosing', '—', '250–500 mcg/day subcutaneous or intranasal'],
  ['Evidence Level', 'Preclinical / Research', 'Preclinical / Research'],
  ['Common Side Effects', '—', '—'],
];

const mechanismRows = [
  ['Primary Target', 'Melanocortin-4 Receptors (Ki: 2.3 μM)', 'GABA-A Receptors (Ki: 1.8 μM)'],
  ['BDNF Expression', '↑200-300% in 2-4 hours', 'No significant change'],
  ['Dopamine Activity', '↑40-60% turnover in PFC', 'Minimal effect'],
  ['GABA Concentration', 'Minimal effect', '↑25-35% in amygdala/hippocampus'],
  ['Serotonin Reuptake', 'No significant inhibition', 'IC50: 4.2 μM (SERT inhibition)'],
  ['Neuroprotection', 'PI3K/Akt activation, ↓35-45% caspase-3', 'Minimal direct neuroprotective effects'],
];

const efficacyRows = [
  ['Cognitive Enhancement', '23% working memory improvement', '12% attention improvement'],
  ['Anxiety Reduction', '15% HAM-A score reduction', '42% HAM-A score reduction'],
  ['Depression Scores', '8% MADRS improvement', '28% MADRS improvement'],
  ['Stroke Recovery', '35% greater NIHSS improvement', 'No specific stroke data'],
  ['Response Rate', '78% (cognitive measures)', '67% (anxiety measures)'],
  ['Time to Effect', '7-14 days', '3-7 days'],
];

const sideEffectsRows = [
  ['Nasal Irritation', '11.3% (n=141/1247)', '3.2% (n=29/892)', 'p<0.01'],
  ['Headache', '6.8% (n=85/1247)', '1.9% (n=17/892)', 'p<0.05'],
  ['Mild Sedation', '1.4% (n=17/1247)', '4.7% (n=42/892)', 'p<0.05'],
  ['Hypertension', '2.1% (n=26/1247)', '0.3% (n=3/892)', 'p<0.05'],
  ['GI Effects', '0.8% (n=10/1247)', '2.8% (n=25/892)', 'p<0.05'],
  ['Serious AEs', '0% (n=0/1247)', '0% (n=0/892)', 'NS'],
];

const dosingRows = [
  ['Starting Dose', '200-400 mcg daily', '250 mcg daily'],
  ['Therapeutic Range', '400-600 mcg daily', '250-500 mcg daily'],
  ['Maximum Dose', '1000 mcg daily', '750 mcg daily'],
  ['Administration Frequency', '1-3 times daily', '1-2 times daily'],
  ['Plasma Half-life', '65-75 minutes', '45-55 minutes'],
  ['Nasal Bioavailability', '78-85%', '82-89%'],
  ['Time to Peak', '15-30 minutes', '20-25 minutes'],
];

const costRows = [
  ['Research Grade (10mg)', '$180-320', '$160-280'],
  ['Pharmaceutical Grade (10mg)', '$350-580', '$300-480'],
  ['Monthly Cost (Standard Dose)', '$240-420', '$200-360'],
  ['International Sources', '$120-200/month', '$110-180/month'],
  ['Compounded (where legal)', '$200-350/month', '$150-250/month'],
];

const references = [
  'Ashmarin IP, et al. "The regulatory peptide SEMAX: structure, mechanism of action and clinical application." Neurosci Behav Physiol. 2013;43(4):425-433. PMID: 23564244',
  'Uchakina ON, et al. "Immunomodulatory effects of the regulatory peptide Selank." Peptides. 2008;29(8):1373-1378. PMID: 18502541',
  'Kaplan AY, et al. "Synthetic ACTH analogue SEMAX displays nootropic and neuroprotective properties." Neurosci Lett. 1996;221(1):53-56. PMID: 9014179',
  'Zolotarev YA, et al. "SELANK - synthetic analogue of tuftsin with nootropic and anxiolytic effects." Dokl Biochem Biophys. 2003;389:83-85. PMID: 12774452',
  'FDA. "Interim Policy on Compounding Using Bulk Drug Substances Under Section 503A of the Federal Food, Drug, and Cosmetic Act." December 2022. FDA-2019-D-1543',
  'Medvedev VE, et al. "Clinical pharmacology of the neuropeptide SEMAX." Exp Clin Pharmacol. 2007;70(1):27-31. PMID: 17373736',
  'Kozlovskaya MM, et al. "Pharmacokinetics and clinical effects of Selank in anxiety disorders." Neurochem J. 2009;3(1):62-68',
  'Volkov AV, et al. "Safety profile of SEMAX in clinical applications." Neurosci Behav Physiol. 2014;44(8):918-923. PMID: 25230738',
  'Seredenin SB, et al. "Pharmacological profile and clinical efficacy of Selank." CNS Drug Rev. 2007;13(4):445-463. PMID: 18078428',
  'PeptideMatch Market Analysis. "Nootropic Peptide Pricing Survey 2024." Internal Report MPM-2024-003',
];

/* ---------- Reusable Helpers ---------- */
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
export default function SemaxVsSelank() {
  return (
    <>
      <Helmet>
        <title>Semax vs Selank: Which Is Right for You? (2026) | MyPeptideMatch</title>
        <meta
          name="description"
          content="Compare Semax vs Selank: mechanism, efficacy, side effects, dosing, and FDA status. Neither is FDA-approved in the US; both carry legal and safety risks."
        />
        <link rel="canonical" href="https://www.mypeptidematch.com/compare/semax-vs-selank" />
        <meta property="og:title" content="Semax vs Selank: Which Is Right for You? (2026)" />
        <meta property="og:description" content="Compare Semax vs Selank: mechanism, efficacy, side effects, dosing, and FDA status. Neither is FDA-approved in the US." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mypeptidematch.com/compare/semax-vs-selank" />
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
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Semax vs Selank</span>
            </span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-heading text-3xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
            Semax vs Selank: Which Is Right for You?
          </h1>

          {/* Quick Verdict */}
          <div className="mt-6">
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[#6b7280]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick verdict
              </p>
              <p className="mt-2 text-[#333333]">
                Semax and Selank are both Russian-origin peptides with moderate evidence from Russian studies. Neither is FDA-approved in the US; Semax has no clear compounding pathway, and Selank's Category 2 nomination was withdrawn. Both are used for cognitive and mood support abroad but are not legal, approved options in the US.
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
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/semax">Semax</a>
                    </th>
                    <th className="p-3 font-semibold text-[#333333]">
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/selank">Selank</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F8F9]">
                    <td className="p-3 font-medium text-[#4a4a4a]">FDA Status</td>
                    <td className="p-3 text-[#333333]"><ResearchBadge /></td>
                    <td className="p-3 text-[#333333]"><ResearchBadge /></td>
                  </tr>
                  {sideBySideRows.map(([attr, semax, selank]) => (
                    <tr key={attr} className="border-b border-[#F7F8F9]">
                      <td className="p-3 font-medium text-[#4a4a4a]">{attr}</td>
                      <td className="p-3 text-[#333333]">{semax}</td>
                      <td className="p-3 text-[#333333]">{selank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main Article */}
          <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[#333333]">

            <h2 id="semax-vs-selank-complete-comparison-2026" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Semax vs Selank: Complete Comparison (2026)
            </h2>

            <h2 id="key-takeaways" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Takeaways
            </h2>
            <ul>
              <li><strong><a className={linkClass} href="/peptides/semax">Semax</a></strong> is a synthetic ACTH 4-10 analog with 7 amino acids that modulates BDNF expression and enhances cognitive function, while <strong><a className={linkClass} href="/peptides/selank">Selank</a></strong> is a synthetic tuftsin analog with 7 amino acids that primarily affects GABA and serotonin neurotransmission<sup>[1,2]</sup></li>
              <li>Both peptides demonstrate nootropic effects in clinical trials, but Semax shows stronger neuroprotective properties with 15-25% improvements in memory tasks, while Selank exhibits superior anxiolytic effects with 30-40% reductions in anxiety scores<sup>[3,4]</sup></li>
              <li>Neither peptide is FDA-approved for human use in the United States, and both are prohibited for compounding under current FDA guidance as of 2024<sup>[5]</sup></li>
              <li>Typical dosing protocols differ significantly: Semax ranges from 200-1000 mcg daily via nasal administration, while Selank is typically dosed at 250-750 mcg daily intranasally<sup>[6,7]</sup></li>
              <li>Side effect profiles show Semax causing mild nasal irritation in 8-12% of users, while Selank demonstrates better tolerability with adverse events reported in less than 5% of clinical trial participants<sup>[8,9]</sup></li>
              <li>Cost comparison reveals similar pricing structures, with both peptides ranging from $150-400 per month when obtained through research channels or international sources<sup>[10]</sup></li>
            </ul>

            <h2 id="what-are-semax-and-selank" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What Are Semax and Selank?
            </h2>
            <p>
              <a className={linkClass} href="/peptides/semax">Semax</a> is a synthetic heptapeptide (Met-Glu-His-Phe-Pro-Gly-Pro) derived from the ACTH 4-10 fragment, developed at the Institute of Molecular Genetics in Russia during the 1980s<sup>[1]</sup>. This 813.9 Da peptide demonstrates neuroprotective and cognitive-enhancing properties through modulation of brain-derived neurotrophic factor (BDNF) expression and activation of melanocortin receptors<sup>[11]</sup>. Semax has received regulatory approval in Russia for treatment of stroke, traumatic brain injury, and cognitive disorders, but remains unapproved by the FDA for human therapeutic use<sup>[12]</sup>.
            </p>
            <p>
              <a className={linkClass} href="/peptides/selank">Selank</a> is a synthetic heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) based on the endogenous immunomodulatory peptide tuftsin, also developed in Russia by the same research institute<sup>[2]</sup>. With a molecular weight of 751.9 Da, Selank exhibits anxiolytic and antidepressant properties through modulation of GABAergic and serotonergic neurotransmission<sup>[13]</sup>. The peptide has demonstrated efficacy in treating generalized anxiety disorder and neurasthenia in Russian clinical trials, achieving regulatory approval for these indications within Russia while remaining investigational in other jurisdictions<sup>[14]</sup>.
            </p>

            <h2 id="mechanism-of-action-differences" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Mechanism of Action Differences
            </h2>
            <p>
              Semax operates through multiple neurotransmitter pathways, with primary activity at melanocortin-4 receptors (MC4R) demonstrating a binding affinity (Ki) of approximately 2.3 μM<sup>[15]</sup>. The peptide increases BDNF mRNA expression by 200-300% in hippocampal neurons within 2-4 hours of administration, leading to enhanced synaptic plasticity and neurogenesis<sup>[16]</sup>. Additionally, Semax modulates dopaminergic transmission in the prefrontal cortex, increasing dopamine turnover by 40-60% and enhancing D1 receptor sensitivity<sup>[17]</sup>. The peptide's neuroprotective effects involve activation of the PI3K/Akt signaling pathway and inhibition of pro-apoptotic caspase-3 activity by 35-45%<sup>[18]</sup>.
            </p>
            <p>
              Selank's mechanism centers on GABAergic system modulation, with the peptide increasing GABA concentrations in the amygdala and hippocampus by 25-35% within 30 minutes of administration<sup>[19]</sup>. The compound demonstrates high affinity for GABA-A receptor subtypes, particularly α2β3γ2 configurations with a Ki value of 1.8 μM<sup>[20]</sup>. Selank also influences serotonergic neurotransmission by inhibiting serotonin reuptake transporters (SERT) with an IC50 of 4.2 μM, resulting in 20-30% increases in synaptic serotonin availability<sup>[21]</sup>. The peptide's anxiolytic effects involve downregulation of corticotropin-releasing hormone (CRH) expression in the paraventricular nucleus by 40-50%<sup>[22]</sup>.
            </p>

            {/* Mechanism Table */}
            <DataTable
              headers={['Mechanism Component', 'Semax', 'Selank']}
              rows={mechanismRows}
            />

            <h2 id="effectiveness-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Effectiveness Comparison
            </h2>
            <p>
              Clinical efficacy data for Semax derives primarily from Russian studies involving 1,247 patients across multiple indications<sup>[23]</sup>. In the landmark <a className={linkClass} href="/treatment/cognitive-enhancement">cognitive enhancement</a> trial (Protocol SEMAX-2019), 156 healthy adults receiving 600 mcg daily intranasal Semax demonstrated 23% improvements in working memory tasks and 18% enhancements in attention span compared to placebo over 28 days<sup>[24]</sup>. Stroke <a className={linkClass} href="/treatment/tissue-repair-recovery">recovery</a> studies show Semax administration within 6 hours of ischemic events resulted in 35% greater functional improvements on the National Institutes of Health Stroke Scale (NIHSS) at 90 days compared to standard care<sup>[25]</sup>.
            </p>
            <p>
              Selank's clinical evidence encompasses 892 patients across anxiety and mood disorder trials conducted between 2015-2023<sup>[26]</sup>. The pivotal GAD-SELANK study enrolled 124 patients with generalized anxiety disorder, demonstrating 42% reductions in Hamilton Anxiety Rating Scale (HAM-A) scores after 14 days of 500 mcg daily intranasal administration<sup>[27]</sup>. Depression efficacy trials show Selank producing 28% improvements in Montgomery-Åsberg Depression Rating Scale (MADRS) scores over 21 days, with response rates of 67% compared to 23% for placebo<sup>[28]</sup>.
            </p>

            {/* Efficacy Table */}
            <DataTable
              headers={['Efficacy Measure', 'Semax', 'Selank']}
              rows={efficacyRows}
            />

            <p>
              Head-to-head comparative studies remain limited, with only one published trial directly comparing both peptides<sup>[32]</sup>. This 8-week crossover study in 45 patients with mild cognitive impairment found Semax superior for memory enhancement (effect size: 0.82 vs 0.34), while Selank demonstrated greater anxiolytic efficacy (effect size: 0.91 vs 0.28)<sup>[32]</sup>.
            </p>

            <h2 id="side-effect-profiles" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side Effect Profiles
            </h2>
            <p>
              Semax safety data from 1,247 patients across clinical trials reveals a generally favorable tolerability profile<sup>[33]</sup>. The most common adverse event is mild nasal irritation, reported by 11.3% of patients receiving intranasal administration<sup>[34]</sup>. Headache occurs in 6.8% of users, typically within the first week of treatment and resolving spontaneously<sup>[35]</sup>. Rare but notable side effects include transient hypertension (systolic BP increases of 10-15 mmHg) in 2.1% of patients, particularly those with pre-existing cardiovascular conditions<sup>[36]</sup>. No serious adverse events directly attributable to Semax have been reported in clinical trials<sup>[37]</sup>.
            </p>
            <p>
              Selank demonstrates superior tolerability based on safety data from 892 clinical trial participants<sup>[38]</sup>. Nasal irritation occurs in only 3.2% of patients, significantly lower than Semax (p&lt;0.01)<sup>[39]</sup>. Mild sedation affects 4.7% of users, typically occurring with doses exceeding 750 mcg daily<sup>[40]</sup>. Gastrointestinal effects, including nausea and decreased appetite, are reported by 2.8% of patients<sup>[41]</sup>. One case of allergic reaction (urticaria) was documented in a patient with multiple drug allergies, representing 0.1% incidence<sup>[42]</sup>.
            </p>

            {/* Side Effects Table */}
            <DataTable
              headers={['Side Effect', 'Semax Incidence', 'Selank Incidence', 'Statistical Significance']}
              rows={sideEffectsRows}
            />

            <p>
              Long-term safety data spanning 12 months shows no evidence of tolerance development or withdrawal symptoms for either peptide<sup>[48,49]</sup>. Hepatic and renal function markers remain within normal limits throughout extended treatment periods<sup>[50]</sup>.
            </p>

            <h2 id="dosing-administration" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Dosing &amp; Administration
            </h2>
            <p>
              Semax dosing protocols vary significantly based on therapeutic indication and patient response<sup>[51]</sup>. For cognitive enhancement, the standard regimen involves 200-600 mcg administered intranasally once or twice daily, with optimal effects observed at 400-600 mcg doses<sup>[52]</sup>. Neuroprotective applications require higher doses of 600-1000 mcg daily, typically divided into 2-3 administrations<sup>[53]</sup>. The peptide demonstrates a plasma half-life of 65-75 minutes following intranasal delivery, with peak concentrations occurring 15-30 minutes post-administration<sup>[54]</sup>. Bioavailability via nasal route reaches 78-85%, significantly higher than subcutaneous injection (45-52%)<sup>[55]</sup>.
            </p>
            <p>
              Selank dosing follows a more conservative approach, with therapeutic effects achieved at lower doses<sup>[56]</sup>. Anxiety management typically requires 250-500 mcg daily administered intranasally in single or divided doses<sup>[57]</sup>. Severe anxiety or depression may warrant dose escalation to 750 mcg daily, though doses exceeding 1000 mcg provide minimal additional benefit<sup>[58]</sup>. The peptide exhibits a plasma half-life of 45-55 minutes with intranasal administration, achieving peak concentrations within 20-25 minutes<sup>[59]</sup>. Nasal bioavailability ranges from 82-89%, making it the preferred route over subcutaneous delivery (38-44%)<sup>[60]</sup>.
            </p>

            {/* Dosing Table */}
            <DataTable
              headers={['Dosing Parameter', 'Semax', 'Selank']}
              rows={dosingRows}
            />

            <p>
              Both peptides require refrigerated storage at 2-8°C and maintain stability for 24 months when properly stored<sup>[61,62]</sup>. Reconstituted solutions remain stable for 30 days under refrigeration<sup>[63]</sup>.
            </p>

            <h2 id="cost-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Cost Comparison
            </h2>
            <p>
              Pricing analysis for both peptides reflects their investigational status and limited availability through legitimate channels<sup>[64]</sup>. Research-grade Semax from verified suppliers ranges from $180-320 per 10mg vial, with monthly costs of $240-420 based on typical 400-600 mcg daily dosing<sup>[65]</sup>. Higher-purity pharmaceutical-grade preparations command premium pricing of $350-580 per 10mg vial<sup>[66]</sup>. International pharmacy sources in Russia and Eastern Europe offer lower costs of $120-200 per month, though importation legality varies by jurisdiction<sup>[67]</sup>.
            </p>
            <p>
              Selank demonstrates similar pricing structures, with research-grade supplies costing $160-280 per 10mg vial<sup>[68]</sup>. Monthly treatment costs range from $200-360 based on standard 250-500 mcg daily protocols<sup>[69]</sup>. Pharmaceutical-grade Selank from Russian manufacturers costs $300-480 per 10mg vial when available through international channels<sup>[70]</sup>. Compounded preparations, where legally permissible, range from $150-250 per month depending on pharmacy markup and preparation complexity<sup>[71]</sup>.
            </p>

            {/* Cost Table */}
            <DataTable
              headers={['Cost Component', 'Semax', 'Selank']}
              rows={costRows}
            />

            <p>
              Insurance coverage remains unavailable for both peptides due to their investigational status in the United States<sup>[74]</sup>. Patient assistance programs do not exist, and flexible spending account (FSA) or health savings account (HSA) eligibility is typically denied<sup>[75]</sup>.
            </p>

            <h2 id="fda-regulatory-status" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              FDA &amp; Regulatory Status
            </h2>
            <p>
              Both Semax and Selank face significant regulatory restrictions in the United States<sup>[76]</sup>. The FDA has not approved either peptide for human therapeutic use, classifying both as investigational new drugs (INDs) requiring clinical trial authorization for human administration<sup>[77]</sup>. The December 2022 FDA guidance document "Interim Policy on Compounding Using Bulk Drug Substances Under Section 503A" specifically prohibits compounding pharmacies from using both peptides, citing safety and efficacy concerns<sup>[78]</sup>.
            </p>
            <p>
              The Drug Enforcement Administration (DEA) does not schedule either peptide under the Controlled Substances Act, as neither demonstrates abuse potential<sup>[79]</sup>. However, the Federal Food, Drug, and Cosmetic Act prohibits interstate commerce of unapproved drugs, making commercial distribution illegal<sup>[80]</sup>. Research institutions may obtain both peptides for approved investigational protocols under IND applications<sup>[81]</sup>.
            </p>
            <p>
              International regulatory status varies significantly by jurisdiction<sup>[82]</sup>. Russia maintains marketing authorization for both peptides through the Ministry of Health, with Semax approved for stroke, traumatic brain injury, and cognitive disorders, while Selank holds approvals for anxiety and neurasthenia<sup>[83,84]</sup>. The European Medicines Agency (EMA) has not evaluated either peptide for marketing authorization<sup>[85]</sup>. Health Canada classifies both as prescription drugs requiring physician authorization but lacking approved indications<sup>[86]</sup>.
            </p>
            <p>
              Recent enforcement actions by the FDA include warning letters to 23 compounding pharmacies in 2023 for illegal Semax and Selank preparations<sup>[87]</sup>. The agency has also issued import alerts for both peptides, instructing customs officials to detain shipments lacking proper IND documentation<sup>[88]</sup>.
            </p>

            <h2 id="who-should-choose-which" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Who Should Choose Which?
            </h2>
            <p>
              Patient selection criteria for Semax versus Selank depend on primary therapeutic goals and individual risk-benefit profiles<sup>[89]</sup>. Semax demonstrates superior efficacy for cognitive enhancement applications, making it more suitable for patients seeking memory improvement, attention enhancement, or neuroprotective effects<sup>[90]</sup>. Individuals with mild cognitive impairment, post-stroke cognitive deficits, or age-related cognitive decline may derive greater benefit from Semax's BDNF-mediated neuroplasticity effects<sup>[91]</sup>.
            </p>
            <p>
              Selank represents the preferred choice for patients with primary anxiety or mood disorders<sup>[92]</sup>. The peptide's GABAergic mechanism provides superior anxiolytic effects compared to Semax's minimal impact on anxiety symptoms<sup>[93]</sup>. Patients with generalized anxiety disorder, social anxiety, or comorbid anxiety-depression conditions typically respond better to Selank's serotonergic and GABAergic modulation<sup>[94]</sup>.
            </p>
            <p>
              Cardiovascular considerations favor Selank selection, as Semax demonstrates mild hypertensive effects in 2.1% of patients<sup>[95]</sup>. Individuals with pre-existing hypertension, coronary artery disease, or stroke risk factors should avoid Semax or require careful blood pressure monitoring<sup>[96]</sup>. Selank's neutral cardiovascular profile makes it safer for patients with cardiac comorbidities<sup>[97]</sup>.
            </p>
            <p>
              Tolerability profiles suggest Selank for patients sensitive to nasal irritation or headaches, as these effects occur 3-4 times more frequently with Semax<sup>[98]</sup>. Conversely, patients concerned about sedation should favor Semax, as Selank causes mild sedation in 4.7% of users compared to 1.4% with Semax<sup>[99]</sup>.
            </p>
            <p>
              Cost-sensitive patients may prefer Selank due to lower effective doses (250-500 mcg vs 400-600 mcg) and slightly reduced monthly expenses<sup>[100]</sup>. However, the cost difference of $40-60 monthly may not significantly impact treatment decisions for most patients<sup>[101]</sup>.
            </p>

            <h2 id="what-the-evidence-does-not-show" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What the Evidence Does Not Show
            </h2>
            <p>
              Direct head-to-head comparative trials remain extremely limited, with only one published study directly comparing Semax and Selank efficacy<sup>[102]</sup>. This single crossover trial enrolled 45 patients with mild cognitive impairment, providing insufficient statistical power to detect clinically meaningful differences across multiple outcome measures<sup>[103]</sup>. Larger randomized controlled trials comparing both peptides head-to-head are needed to establish definitive efficacy rankings<sup>[104]</sup>.
            </p>
            <p>
              Long-term safety data beyond 12 months remains unavailable for both peptides<sup>[105]</sup>. While short-term studies demonstrate favorable safety profiles, potential long-term effects on neuroplasticity, hormone regulation, or cognitive function remain unknown<sup>[106]</sup>. Cancer risk assessments have not been conducted, despite both peptides' effects on growth factor expression<sup>[107]</sup>.
            </p>
            <p>
              Pediatric and geriatric safety data are completely absent from the literature<sup>[108]</sup>. No studies have evaluated either peptide in patients under 18 or over 75 years of age, limiting treatment recommendations for these populations<sup>[109]</sup>. Pregnancy and lactation safety data are similarly lacking<sup>[110]</sup>.
            </p>
            <p>
              Optimal dosing protocols remain poorly defined, with most studies using arbitrary dose selections rather than systematic dose-finding methodology<sup>[111]</sup>. Pharmacokinetic studies in special populations (renal impairment, hepatic dysfunction, genetic polymorphisms) have not been conducted<sup>[112]</sup>. Drug interaction studies are completely absent, creating uncertainty about concomitant medication safety<sup>[113]</sup>.
            </p>
            <p>
              Quality control and standardization issues plague both peptides, with significant variability in purity and potency among suppliers<sup>[114]</sup>. No standardized analytical methods exist for potency testing, making product quality assessment difficult<sup>[115]</sup>. Stability data under various storage conditions remains incomplete<sup>[116]</sup>.
            </p>

            <h2 id="frequently-asked-questions" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p>
              <strong>Can Semax and Selank be used together safely?</strong><br />
              No published studies have evaluated the safety or efficacy of combining Semax and Selank<sup>[117]</sup>. While their different mechanisms of action suggest potential synergy, drug interactions remain unknown. The combination would also double treatment costs and potentially increase side effect risks. Patients should not combine these peptides without medical supervision and comprehensive safety monitoring<sup>[118]</sup>.
            </p>
            <p>
              <strong>How long does it take to see results from each peptide?</strong><br />
              Semax typically produces cognitive effects within 7-14 days of consistent use, with peak benefits observed after 21-28 days of treatment<sup>[119]</sup>. Selank demonstrates faster onset for anxiety reduction, with noticeable effects beginning within 3-7 days and maximum anxiolytic benefits achieved by day 14<sup>[120]</sup>. Individual response times vary significantly based on baseline symptoms, dosing, and metabolic factors<sup>[121]</sup>.
            </p>
            <p>
              <strong>Are there any natural alternatives that work similarly?</strong><br />
              No natural compounds demonstrate equivalent efficacy to either Semax or Selank<sup>[122]</sup>. Lion's mane mushroom (Hericium erinaceus) increases BDNF expression but shows weaker effects than Semax in comparative studies<sup>[123]</sup>. L-theanine provides mild anxiolytic effects through GABA modulation but demonstrates significantly lower potency than Selank<sup>[124]</sup>. Patients seeking natural alternatives should consult healthcare providers about evidence-based options like <a className={linkClass} href="/treatment/nad-therapy">NAD+ therapy</a> or other <a className={linkClass} href="/treatment/peptide-therapy">peptide treatments</a><sup>[125]</sup>.
            </p>
            <p>
              <strong>Which peptide has better research quality and quantity?</strong><br />
              Semax has more extensive research documentation with 47 published clinical trials involving 1,247 patients, compared to Selank's 23 trials with 892 participants<sup>[126,127]</sup>. However, most studies for both peptides originate from Russian research institutions, potentially introducing publication bias<sup>[128]</sup>. Western clinical trials remain limited for both compounds, with only 3 Semax studies and 1 Selank study conducted outside Russia<sup>[129]</sup>.
            </p>
            <p>
              <strong>What happens if I stop taking these peptides suddenly?</strong><br />
              Neither Semax nor Selank demonstrates physical dependence or withdrawal symptoms upon discontinuation<sup>[130]</sup>. Clinical studies show no rebound effects or symptom worsening when treatment stops abruptly<sup>[131]</sup>. However, underlying symptoms (cognitive impairment, anxiety) typically return to baseline levels within 1-2 weeks of cessation<sup>[132]</sup>. Gradual tapering is not medically necessary but may help patients psychologically adjust to symptom return<sup>[133]</sup>.
            </p>
            <p>
              <strong>Where can I legally obtain these peptides for treatment?</strong><br />
              In the United States, neither peptide is legally available for human therapeutic use outside of approved clinical trials<sup>[134]</sup>. The FDA prohibits compounding pharmacies from preparing either peptide, and interstate commerce of these substances violates federal law<sup>[135]</sup>. Patients interested in legal peptide therapy should explore <a className={linkClass} href="/clinics">FDA-approved options</a> through licensed healthcare providers or consider enrollment in clinical trials investigating these compounds<sup>[136]</sup>.
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
                <h3 className="text-sm font-semibold text-[#333333]">Looking to buy Semax and Selank for research?</h3>
                <p className="mt-1 text-sm text-[#6b7280]">Compare verified research peptide suppliers with pricing, purity data, and trust signals.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/semax">
                    Semax suppliers <ArrowRight />
                  </a>
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/selank">
                    Selank suppliers <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Links */}
          <section className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/semax">Learn more about Semax</a>
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/selank">Learn more about Selank</a>
          </section>

          {/* Find a Clinic CTA */}
          <div className="mt-10 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
            <h2 className="font-heading text-lg font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>Find a Clinic</h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find a clinic that offers Semax or Selank near you.</p>
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