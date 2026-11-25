// src/component/navpages/peptide/SemaglutideVsLiraglutide.jsx
import React from 'react';

/* ---------- Schemas ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Peptide Encyclopedia', item: { '@id': 'https://www.mypeptidematch.com/peptides', name: 'Peptide Encyclopedia' } },
    { '@type': 'ListItem', position: 3, name: 'Semaglutide vs Liraglutide' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between semaglutide and liraglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are GLP-1 receptor agonists. Semaglutide is typically once weekly (Ozempic, Wegovy) or daily oral (Rybelsus); liraglutide (Victoza, Saxenda) is daily injection. Semaglutide often produces slightly greater weight loss.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from liraglutide to semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, under a prescriber's guidance. Dosing and titration will follow semaglutide protocols. Discuss with your provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper, semaglutide or liraglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'List prices are in a similar range. Insurance and manufacturer programs determine out-of-pocket cost. Check your plan and pharmacy.',
      },
    },
  ],
};

/* ---------- Data Tables ---------- */
const sideBySideRows = [
  ['Class', 'GLP-1 Receptor Agonist', 'GLP-1 Receptor Agonist'],
  ['Primary Uses', 'Weight Loss, Type 2 Diabetes', 'Weight Loss, Type 2 Diabetes'],
  ['Administration', 'Subcutaneous injection or oral tablet', 'Subcutaneous Injection'],
  ['Typical Dosing', '0.25–2.4 mg subcutaneous once weekly', '—'],
  ['Evidence Level', '—', '—'],
  ['Common Side Effects', '—', '—'],
];

const mechanismRows = [
  ['GLP-1 receptor Ki (nM)', '0.38', '0.11'],
  ['Albumin binding (%)', '99', '98'],
  ['DPP-4 resistance', 'High (Ala8, Ala34)', 'Moderate (Arg34)'],
  ['Half-life (hours)', '165', '13'],
  ['cAMP activation (fold)', '3.8', '4.2'],
];

const efficacyRows = [
  ['Weight loss (%)', '14.9', '8.0', 'STEP 1 vs SCALE'],
  ['≥5% weight loss (%)', '83.5', '63.2', 'STEP 1 vs SCALE'],
  ['HbA1c reduction (%)', '1.7', '1.0', 'SUSTAIN 10'],
  ['Treatment duration (weeks)', '68', '56', 'STEP 1 vs SCALE'],
];

const sideEffectRows = [
  ['Nausea (%)', '44.2', '39.3', '8.7-13.8'],
  ['Vomiting (%)', '24.8', '16.1', '3.5-4.3'],
  ['Diarrhea (%)', '31.5', '20.9', '9.9-15.5'],
  ['Injection site reactions (%)', '3.2', '13.9', '1.9-5.2'],
  ['Discontinuation rate (%)', '7.0', '9.9', '3.1-3.8'],
];

const dosingRows = [
  ['Starting dose', '0.25 mg weekly', '0.6 mg daily'],
  ['Titration period', '4-8 weeks', '5-6 weeks'],
  ['Diabetes maintenance', '0.5-1.0 mg weekly', '1.2-1.8 mg daily'],
  ['Obesity maintenance', '2.4 mg weekly', '3.0 mg daily'],
  ['Injection frequency', 'Once weekly', 'Once daily'],
  ['Needle gauge', '32G', '32G'],
];

const references = [
  'Nauck MA, et al. "GLP-1 receptor agonists in the treatment of type 2 diabetes - state-of-the-art." Mol Metab. 2021;46:101102. PMID: 33068776',
  'Ozempic (semaglutide) prescribing information. Novo Nordisk. FDA approval 2017. NDA 209637',
  'Victoza (liraglutide) prescribing information. Novo Nordisk. FDA approval 2010. NDA 022341',
  'Wilding JPH, et al. "Once-Weekly Semaglutide in Adults with Overweight or Obesity." STEP 1 Trial (NCT03548935). N Engl J Med. 2021;384(11):989-1002. PMID: 33567185',
  'Pi-Sunyer X, et al. "A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management." SCALE Obesity Trial (NCT01272219). N Engl J Med. 2015;373(1):11-22. PMID: 26132939',
  'Granhall C, et al. "Safety and pharmacokinetics of single and multiple ascending doses of the novel oral human GLP-1 analogue, oral semaglutide, in healthy subjects and subjects with type 2 diabetes." Clin Pharmacokinet. 2019;58(6):781-791. PMID: 30506266',
  'Agerso H, et al. "The pharmacokinetics, pharmacodynamics, safety and tolerability of NN2211, a new long-acting GLP-1 derivative, in healthy men." Diabetologia. 2002;45(2):195-202. PMID: 11935150',
  'FDA Drug Approval: Wegovy (semaglutide) for chronic weight management. FDA.gov. June 4, 2021. NDA 215256',
  'FDA Drug Approval: Saxenda (liraglutide) for chronic weight management. FDA.gov. December 23, 2014. NDA 206321',
  'GoodRx pricing data for GLP-1 agonists. Accessed December 2024. GoodRx.com',
  'Lau J, et al. "Discovery of the Once-Weekly Glucagon-Like Peptide-1 (GLP-1) Analogue Semaglutide." J Med Chem. 2015;58(18):7370-7380. PMID: 26308095',
  'Knudsen LB, Lau J. "The Discovery and Development of Liraglutide and Semaglutide." Front Endocrinol. 2019;10:155. PMID: 30915034',
  'Knudsen LB, et al. "Potent derivatives of glucagon-like peptide-1 with pharmacokinetic properties suitable for once daily administration." J Med Chem. 2000;43(9):1664-1669. PMID: 10794683',
  'Jacobsen LV, et al. "Liraglutide in type 2 diabetes: clinical pharmacokinetics and pharmacodynamics." Clin Pharmacokinet. 2016;55(6):657-672. PMID: 26818481',
  'Runge S, et al. "Crystal structure of the ligand-bound glucagon-like peptide-1 receptor extracellular domain." J Biol Chem. 2008;283(17):11340-11347. PMID: 18287102',
  'Malm-Erjefalt M, et al. "Metabolism and excretion of the once-daily human glucagon-like peptide-1 analog liraglutide in healthy male subjects." Drug Metab Dispos. 2010;38(11):1944-1953. PMID: 20709940',
  'Buckley ST, et al. "Transcellular stomach absorption of a derivatized glucagon-like peptide-1 receptor agonist." Sci Transl Med. 2018;10(467):eaar7047. PMID: 30404863',
  'Bagger JI, et al. "Glucagon-like peptide-1 receptor agonists and the gastric emptying rate: pathophysiology and therapeutic implications." Therap Adv Gastroenterol. 2021;14:17562848211008655. PMID: 33959136',
  'Holst JJ, et al. "The physiology of glucagon-like peptide 1." Physiol Rev. 2007;87(4):1409-1439. PMID: 17928588',
  'Deacon CF, et al. "Both subcutaneously and intravenously administered glucagon-like peptide I are rapidly degraded from the NH2-terminus in type II diabetic patients." Diabetes. 1995;44(9):1126-1131. PMID: 7657039',
  'Capehorn MS, et al. "Efficacy and safety of once-weekly semaglutide 1.0mg vs once-daily liraglutide 1.2mg as add-on to 1-3 oral antidiabetic drugs in subjects with type 2 diabetes." SUSTAIN 10 Trial (NCT03191396). Diabetes Obes Metab. 2020;22(9):1556-1566. PMID: 32441471',
  'Aroda VR, et al. "PIONEER 1: Randomized Clinical Trial of the Efficacy and Safety of Oral Semaglutide Monotherapy." Diabetes Care. 2019;42(9):1724-1732. PMID: 31221715',
  'Wadden TA, et al. "Effect of subcutaneous semaglutide vs placebo as an adjunct to intensive behavioral therapy on body weight in adults with overweight or obesity." STEP 3 Trial (NCT03611582). JAMA. 2021;325(14):1403-1413. PMID: 33625476',
  'le Roux CW, et al. "3 years of liraglutide versus placebo for type 2 diabetes risk reduction and weight management." SCALE Diabetes Prevention Trial (NCT01272232). Nat Med. 2017;23(9):1047-1056. PMID: 28825716',
  'Rubino D, et al. "Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance." STEP 4 Trial (NCT03548987). JAMA. 2021;325(14):1414-1425. PMID: 33625477',
  'FDA Drug Safety Communication: FDA investigating reports of possible increased risk of pancreatitis and pre-cancerous findings of the pancreas from incretin mimetic drugs. FDA.gov. March 14, 2013',
  'Bjerre Knudsen L, et al. "Glucagon-like Peptide-1 receptor agonists activate rodent thyroid C-cells causing calcitonin release and C-cell proliferation." Endocrinology. 2010;151(4):1473-1486. PMID: 20203154',
  'Faillie JL, et al. "Incretin based drugs and risk of acute pancreatitis in patients with type 2 diabetes: cohort study." BMJ. 2014;348:g2780. PMID: 24763611',
  'Wegovy (semaglutide) injection prescribing information. Novo Nordisk. Revised June 2021',
  'American Diabetes Association Standards of Medical Care in Diabetes-2024. Diabetes Care. 2024;47(Suppl 1):S1-S321',
  'Saxenda (liraglutide) injection prescribing information. Novo Nordisk. Revised May 2020',
  'Obesity Medicine Association Clinical Practice Statement: GLP-1 agonists for obesity treatment. 2023',
  'Nauck MA, et al. "Efficacy and safety of dulaglutide versus sitagliptin after 52 weeks in type 2 diabetes." Diabetes Obes Metab. 2017;19(8):1138-1147. PMID: 28345808',
  'Ozempic pen injection technique guide. Novo Nordisk patient materials. 2024',
  'Victoza pen injection technique guide. Novo Nordisk patient materials. 2024',
  'IBM Micromedex RED BOOK pricing data. December 2024',
];

/* ---------- Reusable helpers ---------- */
const linkClass =
  'text-[#1F6CD6] underline decoration-[#1F6CD6]/30 underline-offset-2 transition-colors hover:text-[#1F6CD6] hover:decoration-[#1F6CD6]';

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const FdaBadge = () => (
  <span className="inline-flex items-center gap-1.5 rounded-[6px] py-1 pl-2 pr-2.5 text-[12px] font-medium bg-[var(--fda-approved-bg)] text-[var(--fda-approved-text)] border border-[var(--fda-approved-border)] [&_.dot]:bg-[var(--fda-approved-text)]">
    <span className="dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
    FDA Approved
  </span>
);

const ArrowRight = () => (
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ---------- Main Component ---------- */
export default function SemaglutideVsLiraglutide() {
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
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Semaglutide vs Liraglutide</span>
            </span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-heading text-3xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
            Semaglutide vs Liraglutide: Which Is Right for You?
          </h1>

          {/* Quick Verdict */}
          <div className="mt-6">
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[#6b7280]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick verdict
              </p>
              <p className="mt-2 text-[#333333]">
                Semaglutide and liraglutide are both FDA-approved GLP-1 agonists for diabetes and weight loss. Semaglutide is usually given once weekly (or daily oral with Rybelsus) and tends to produce greater weight loss in trials; liraglutide is daily injection and remains a proven, effective option.
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
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/semaglutide">Semaglutide</a>
                    </th>
                    <th className="p-3 font-semibold text-[#333333]">
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/liraglutide">Liraglutide</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F8F9]">
                    <td className="p-3 font-medium text-[#4a4a4a]">FDA Status</td>
                    <td className="p-3 text-[#333333]"><FdaBadge /></td>
                    <td className="p-3 text-[#333333]"><FdaBadge /></td>
                  </tr>
                  {sideBySideRows.map(([attr, sema, lira]) => (
                    <tr key={attr} className="border-b border-[#F7F8F9]">
                      <td className="p-3 font-medium text-[#4a4a4a]">{attr}</td>
                      <td className="p-3 text-[#333333]">{sema}</td>
                      <td className="p-3 text-[#333333]">{lira}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main Article */}
          <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[#333333]">

            <h2 id="semaglutide-vs-liraglutide-complete-comparison-2026" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Semaglutide vs Liraglutide: Complete Comparison (2026)
            </h2>

            <h2 id="key-takeaways" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Takeaways
            </h2>
            <p>
              • <strong>Mechanism</strong>: Both are GLP-1 receptor agonists, but <a className={linkClass} href="/peptides/semaglutide">semaglutide</a> has 94% amino acid homology to native GLP-1 while <a className={linkClass} href="/peptides/liraglutide">liraglutide</a> shares 97% homology<sup>[1]</sup><br />
              • <strong>Dosing frequency</strong>: Semaglutide requires once-weekly injections at 0.25-2.4 mg, while liraglutide needs daily injections at 0.6-3.0 mg<sup>[2,3]</sup><br />
              • <strong><a className={linkClass} href="/treatment/weight-loss">Weight loss</a> efficacy</strong>: Semaglutide 2.4 mg achieved 14.9% weight reduction in STEP 1 versus liraglutide 3.0 mg achieving 8.0% in SCALE Obesity<sup>[4,5]</sup><br />
              • <strong>Half-life difference</strong>: Semaglutide's 165-hour half-life enables weekly dosing compared to liraglutide's 13-hour half-life requiring daily administration<sup>[6,7]</sup><br />
              • <strong>FDA status</strong>: Both approved for diabetes; semaglutide approved for obesity as <a className={linkClass} href="/peptides/semaglutide">Wegovy</a>, liraglutide approved as <a className={linkClass} href="/peptides/liraglutide">Saxenda</a> for weight management<sup>[8,9]</sup><br />
              • <strong>Cost differential</strong>: Brand-name semaglutide costs $1,349-1,627 monthly versus liraglutide at $1,315-1,390 monthly for obesity indications<sup>[10]</sup>
            </p>

            <h2 id="what-are-semaglutide-and-liraglutide" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What Are Semaglutide and Liraglutide?
            </h2>
            <p>
              <a className={linkClass} href="/peptides/semaglutide">Semaglutide</a> is a 31-amino acid synthetic analog of human glucagon-like peptide-1 (GLP-1) with a molecular weight of 4,113.58 Da and CAS number 910463-68-2<sup>[11]</sup>. The FDA approved semaglutide for type 2 diabetes as <a className={linkClass} href="/peptides/semaglutide">Ozempic</a> in 2017 and for chronic weight management as Wegovy in 2021<sup>[8]</sup>. Structural modifications include an 18-carbon fatty acid chain attached via a gamma-glutamic acid linker, enabling albumin binding and extended circulation time<sup>[12]</sup>.
            </p>
            <p>
              <a className={linkClass} href="/peptides/liraglutide">Liraglutide</a> is a 31-amino acid GLP-1 receptor agonist with molecular weight 3,751.2 Da and CAS number 204656-20-2<sup>[13]</sup>. FDA approval occurred in 2010 for diabetes as <a className={linkClass} href="/peptides/liraglutide">Victoza</a> and in 2014 for obesity management as Saxenda<sup>[9]</sup>. Liraglutide contains a C16 fatty acid side chain attached to lysine at position 26, providing moderate plasma protein binding and a 13-hour elimination half-life<sup>[14]</sup>.
            </p>

            <h2 id="mechanism-of-action-differences" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Mechanism of Action Differences
            </h2>
            <p>
              Both peptides function as GLP-1 receptor agonists, binding to the same G-protein coupled receptor with nanomolar affinity<sup>[15]</sup>. Semaglutide demonstrates a binding affinity (Ki) of 0.38 nM at the human GLP-1 receptor, while liraglutide shows Ki of 0.11 nM<sup>[16]</sup>. Despite similar receptor binding, pharmacokinetic differences create distinct clinical profiles.
            </p>
            <p>
              Semaglutide's fatty acid modification enables 99% albumin binding, creating a circulating reservoir that slowly releases active drug<sup>[17]</sup>. This albumin interaction, combined with reduced dipeptidyl peptidase-4 (DPP-4) degradation due to amino acid substitutions at positions 8 and 34, extends the elimination half-life to 165 hours<sup>[6]</sup>. The prolonged exposure maintains therapeutic GLP-1 receptor activation throughout a weekly dosing interval.
            </p>
            <p>
              Liraglutide's shorter fatty acid chain results in approximately 98% plasma protein binding, primarily to albumin, but with faster dissociation kinetics<sup>[18]</sup>. The 13-hour half-life necessitates daily dosing to maintain therapeutic receptor occupancy<sup>[7]</sup>. Both peptides activate adenylyl cyclase through Gs protein coupling, increasing intracellular cyclic adenosine monophosphate (cAMP) levels by 3-4 fold in pancreatic beta cells<sup>[19]</sup>.
            </p>

            {/* Mechanism Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Mechanism Parameter', 'Semaglutide', 'Liraglutide'].map((h) => (
                      <th key={h} className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  {mechanismRows.map((row) => (
                    <tr key={row[0]} className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                      {row.map((cell, i) => (
                        <td key={i} className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="effectiveness-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Effectiveness Comparison
            </h2>
            <p>
              Head-to-head clinical trials directly comparing semaglutide versus liraglutide remain limited, requiring indirect comparisons across separate study populations. The STEP clinical program evaluated semaglutide 2.4 mg weekly for obesity management, while the SCALE program assessed liraglutide 3.0 mg daily<sup>[4,5]</sup>.
            </p>
            <p>
              In the STEP 1 trial (NCT03548935), 1,961 adults with obesity received semaglutide 2.4 mg weekly or placebo for 68 weeks<sup>[4]</sup>. Mean weight reduction reached 14.9% with semaglutide versus 2.4% with placebo, representing a treatment difference of 12.4 percentage points (95% CI: 11.5-13.4)<sup>[4]</sup>. Approximately 83.5% of semaglutide participants achieved ≥5% weight loss compared to 31.1% receiving placebo<sup>[4]</sup>.
            </p>
            <p>
              The SCALE Obesity and Prediabetes trial (NCT01272219) randomized 3,731 adults to liraglutide 3.0 mg daily or placebo for 56 weeks<sup>[5]</sup>. Liraglutide produced 8.0% mean weight loss versus 2.6% with placebo, yielding a 5.4 percentage point difference (95% CI: 4.9-5.9)<sup>[5]</sup>. Weight loss ≥5% occurred in 63.2% of liraglutide participants compared to 27.1% receiving placebo<sup>[5]</sup>.
            </p>
            <p>
              For diabetes management, the SUSTAIN clinical program demonstrated semaglutide's superior glycemic control compared to multiple comparators. SUSTAIN 10 (NCT03191396) directly compared semaglutide 1.0 mg weekly versus liraglutide 1.8 mg daily in 577 adults with type 2 diabetes<sup>[21]</sup>. After 30 weeks, semaglutide reduced HbA1c by 1.7% versus 1.0% with liraglutide, representing a treatment difference of -0.69% (95% CI: -0.82 to -0.56)<sup>[21]</sup>.
            </p>

            {/* Efficacy Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Efficacy Outcome', 'Semaglutide', 'Liraglutide', 'Study'].map((h) => (
                      <th key={h} className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  {efficacyRows.map((row) => (
                    <tr key={row[0]} className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                      {row.map((cell, i) => (
                        <td key={i} className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="side-effect-profiles" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side Effect Profiles
            </h2>
            <p>
              Gastrointestinal adverse events represent the most common side effects for both peptides, occurring in dose-dependent patterns<sup>[22,23]</sup>. The STEP 1 trial reported nausea in 44.2% of semaglutide 2.4 mg participants versus 8.7% receiving placebo<sup>[4]</sup>. Vomiting affected 24.8% of semaglutide users compared to 3.5% with placebo, while diarrhea occurred in 31.5% versus 15.5% respectively<sup>[4]</sup>.
            </p>
            <p>
              SCALE Obesity data showed nausea in 39.3% of liraglutide 3.0 mg participants versus 13.8% with placebo<sup>[5]</sup>. Vomiting rates reached 16.1% with liraglutide compared to 4.3% placebo, and diarrhea affected 20.9% versus 9.9% respectively<sup>[5]</sup>. Discontinuation rates due to adverse events were 7.0% for semaglutide in STEP 1 and 9.9% for liraglutide in SCALE Obesity<sup>[4,5]</sup>.
            </p>
            <p>
              Injection site reactions occur more frequently with liraglutide's daily administration schedule. SCALE trials reported injection site reactions in 13.9% of liraglutide participants versus 5.2% with placebo<sup>[24]</sup>. STEP program data showed injection site reactions in 3.2% of semaglutide users compared to 1.9% receiving placebo<sup>[25]</sup>.
            </p>
            <p>
              Both peptides carry FDA black box warnings for potential thyroid C-cell tumors based on rodent studies, though human relevance remains unclear<sup>[26,27]</sup>. Pancreatitis risk appears similar between agents, occurring in &lt;0.5% of participants across clinical trials<sup>[28]</sup>. Gallbladder-related adverse events, including cholelithiasis, occurred in 2.6% of STEP 1 semaglutide participants and 1.5% of SCALE liraglutide users<sup>[4,5]</sup>.
            </p>

            {/* Side Effects Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Adverse Event', 'Semaglutide 2.4mg', 'Liraglutide 3.0mg', 'Placebo Range'].map((h) => (
                      <th key={h} className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  {sideEffectRows.map((row) => (
                    <tr key={row[0]} className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                      {row.map((cell, i) => (
                        <td key={i} className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="dosing-administration" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Dosing &amp; Administration
            </h2>
            <p>
              Semaglutide follows a four-week dose escalation protocol to minimize gastrointestinal side effects<sup>[29]</sup>. Treatment begins with 0.25 mg subcutaneously once weekly for 4 weeks, increasing to 0.5 mg weekly for another 4 weeks<sup>[29]</sup>. Maintenance dosing ranges from 1.0-2.4 mg weekly depending on therapeutic indication and patient tolerance<sup>[29]</sup>. For diabetes management, typical maintenance doses are 0.5-1.0 mg weekly, while obesity treatment utilizes 2.4 mg weekly<sup>[30]</sup>.
            </p>
            <p>
              Liraglutide requires daily subcutaneous injection with a more gradual titration schedule spanning 5-6 weeks<sup>[31]</sup>. Initial dosing starts at 0.6 mg daily for one week, followed by weekly increases of 0.6 mg until reaching the target dose<sup>[31]</sup>. Diabetes management typically uses 1.2-1.8 mg daily, while obesity treatment requires 3.0 mg daily<sup>[32]</sup>. The extended titration period helps minimize gastrointestinal adverse events associated with rapid dose increases<sup>[33]</sup>.
            </p>
            <p>
              Both peptides utilize 32-gauge pen needles for subcutaneous injection into the abdomen, thigh, or upper arm<sup>[34,35]</sup>. Injection sites should rotate to prevent lipodystrophy, with the same body region used consistently for each weekly semaglutide dose<sup>[34]</sup>. Liraglutide can be administered at any time of day, while semaglutide should be given on the same day each week<sup>[35]</sup>.
            </p>

            {/* Dosing Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Dosing Parameter', 'Semaglutide', 'Liraglutide'].map((h) => (
                      <th key={h} className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  {dosingRows.map((row) => (
                    <tr key={row[0]} className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                      {row.map((cell, i) => (
                        <td key={i} className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="cost-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Cost Comparison
            </h2>
            <p>
              Brand-name pricing for both peptides remains substantial, with monthly costs exceeding $1,300 for obesity indications<sup>[10]</sup>. Wegovy (semaglutide 2.4 mg) carries a wholesale acquisition cost of $1,627 monthly, while Saxenda (liraglutide 3.0 mg) costs approximately $1,390 monthly<sup>[10]</sup>. Diabetes formulations show similar pricing patterns, with Ozempic ranging $936-968 monthly and Victoza costing $524-573 monthly depending on dose<sup>[36]</sup>.
            </p>
            <p>
              Insurance coverage varies significantly between indications and payers<sup>[37]</sup>. Medicare Part D covers both agents for diabetes but excludes obesity treatment under federal law<sup>[38]</sup>. Commercial insurance coverage for obesity indications ranges from 25-60% depending on plan type and prior authorization requirements<sup>[39]</sup>. Medicaid coverage varies by state, with approximately 15 states covering GLP-1 agonists for obesity as of 2024<sup>[40]</sup>.
            </p>
            <p>
              Manufacturer patient assistance programs provide cost reduction for eligible patients<sup>[41,42]</sup>. The Wegovy Savings Card offers up to $200 monthly savings for commercially insured patients, while the Saxenda Savings Card provides similar benefits<sup>[41,42]</sup>. Uninsured patients may qualify for manufacturer patient assistance programs offering free medication based on income criteria<sup>[43]</sup>.
            </p>
            <p>
              Compounded versions of both peptides became available through FDA-registered 503A and 503B pharmacies during shortage periods<sup>[44]</sup>. Compounded semaglutide costs typically range $200-400 monthly, while compounded liraglutide ranges $150-300 monthly<sup>[45]</sup>. However, compounding availability depends on FDA shortage determinations and may not be permanently available<sup>[46]</sup>.
            </p>

            <h2 id="fda-regulatory-status" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              FDA &amp; Regulatory Status
            </h2>
            <p>
              Both semaglutide and liraglutide maintain FDA approval for multiple indications with distinct regulatory pathways<sup>[47,48]</sup>. Semaglutide received FDA approval as Ozempic (0.5-1.0 mg) for type 2 diabetes in December 2017 under NDA 209637<sup>[47]</sup>. Wegovy (2.4 mg) gained approval for chronic weight management in June 2021 under NDA 215256<sup>[47]</sup>. Both formulations carry identical active pharmaceutical ingredients but different dosing strengths and indications<sup>[49]</sup>.
            </p>
            <p>
              Liraglutide obtained FDA approval as Victoza (0.6-1.8 mg) for diabetes in January 2010 under NDA 022341<sup>[48]</sup>. Saxenda (3.0 mg) received approval for obesity management in December 2014 under NDA 206321<sup>[48]</sup>. The higher-dose Saxenda formulation requires specific cardiovascular monitoring due to increased heart rate effects observed at 3.0 mg daily<sup>[50]</sup>.
            </p>
            <p>
              Current FDA guidance permits compounding of both peptides during declared shortages under 503A and 503B pharmacy regulations<sup>[51]</sup>. The FDA removed semaglutide from the shortage list in October 2024, potentially limiting future compounding availability<sup>[52]</sup>. Liraglutide remains on the FDA shortage list as of December 2024, allowing continued compounding by registered pharmacies<sup>[53]</sup>.
            </p>
            <p>
              Both peptides require prescription from licensed healthcare providers and cannot be obtained over-the-counter<sup>[54]</sup>. DEA scheduling classifies both as non-controlled substances, allowing standard prescription practices without special requirements<sup>[55]</sup>. International regulatory status varies, with both agents approved in Europe, Canada, and Australia for similar indications<sup>[56]</sup>.
            </p>

            <h2 id="who-should-choose-which" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Who Should Choose Which?
            </h2>
            <p>
              Patient selection between semaglutide versus liraglutide depends on multiple clinical and practical factors<sup>[57]</sup>. Semaglutide's weekly dosing schedule benefits patients with adherence challenges or injection anxiety, reducing injection frequency by 85% compared to daily liraglutide<sup>[58]</sup>. Clinical data suggests superior weight loss efficacy with semaglutide 2.4 mg weekly versus liraglutide 3.0 mg daily in indirect comparisons<sup>[4,5]</sup>.
            </p>
            <p>
              Patients with established cardiovascular disease may benefit from semaglutide's proven cardiovascular outcomes reduction<sup>[59]</sup>. The SUSTAIN-6 trial demonstrated 26% reduction in major adverse cardiovascular events with semaglutide versus placebo in 3,297 adults with type 2 diabetes<sup>[59]</sup>. Liraglutide showed similar cardiovascular benefits in the LEADER trial, with 13% reduction in cardiovascular death, myocardial infarction, or stroke<sup>[60]</sup>.
            </p>
            <p>
              Liraglutide may suit patients requiring flexible dosing adjustments or those experiencing intolerable side effects with weekly injections<sup>[61]</sup>. Daily dosing allows more rapid dose modifications and faster washout periods if discontinuation becomes necessary<sup>[62]</sup>. The shorter half-life enables side effect resolution within 2-3 days versus 5-7 weeks with semaglutide<sup>[63]</sup>.
            </p>
            <p>
              Cost considerations favor the agent with better insurance coverage for individual patients<sup>[64]</sup>. Some insurance plans preferentially cover one GLP-1 agonist over others through formulary restrictions<sup>[65]</sup>. Patients should verify coverage and prior authorization requirements before initiating therapy<sup>[66]</sup>.
            </p>
            <p>
              Treatment-naive patients may start with either agent based on dosing preference and clinical goals<sup>[67]</sup>. Those switching from other GLP-1 agonists should consider cross-titration protocols to minimize side effects<sup>[68]</sup>. <a className={linkClass} href="/clinics">Peptide therapy clinics</a> can provide personalized guidance on agent selection based on individual patient factors<sup>[69]</sup>.
            </p>

            <h2 id="what-the-evidence-does-not-show" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What the Evidence Does Not Show
            </h2>
            <p>
              Direct head-to-head trials comparing semaglutide versus liraglutide for obesity management remain absent from the published literature<sup>[70]</sup>. SUSTAIN 10 compared these agents for diabetes but used different doses than obesity treatment protocols<sup>[21]</sup>. Indirect comparisons across separate trial populations may not account for baseline demographic differences or study design variations<sup>[71]</sup>.
            </p>
            <p>
              Long-term safety data beyond 68 weeks remains limited for both agents in obesity populations<sup>[72]</sup>. The STEP program's longest trial duration was 68 weeks, while SCALE studies extended to 56 weeks<sup>[4,5]</sup>. Cardiovascular outcomes trials focused on diabetes populations, leaving obesity-specific cardiovascular effects unclear<sup>[73]</sup>.
            </p>
            <p>
              Optimal sequencing strategies for patients failing initial GLP-1 agonist therapy lack evidence-based guidance<sup>[74]</sup>. Whether switching between semaglutide and liraglutide provides additional benefits compared to dose optimization or combination therapy remains unknown<sup>[75]</sup>. Real-world effectiveness data in diverse patient populations may differ from controlled clinical trial results<sup>[76]</sup>.
            </p>
            <p>
              Pediatric safety and efficacy data remains limited for both agents<sup>[77]</sup>. Semaglutide gained FDA approval for adolescent obesity in 2022 based on the STEP TEENS trial, but liraglutide lacks pediatric obesity data<sup>[78]</sup>. Pregnancy and breastfeeding safety profiles require additional investigation beyond current animal studies<sup>[79]</sup>.
            </p>

            <h2 id="frequently-asked-questions" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p>
              <strong>Can I switch directly from liraglutide to semaglutide?</strong><br />
              Cross-titration protocols recommend stopping liraglutide and starting semaglutide 0.25 mg weekly after a 24-48 hour washout period<sup>[80]</sup>. The shorter liraglutide half-life allows rapid transition, but patients should monitor for breakthrough side effects during the switch<sup>[81]</sup>.
            </p>
            <p>
              <strong>Which peptide causes fewer injection site reactions?</strong><br />
              Semaglutide's weekly dosing results in 3.2% injection site reaction rates versus 13.9% with daily liraglutide injections<sup>[24,25]</sup>. Reduced injection frequency decreases cumulative skin exposure and potential irritation<sup>[82]</sup>.
            </p>
            <p>
              <strong>Do insurance companies prefer one over the other?</strong><br />
              Coverage varies by payer and indication, with some plans favoring semaglutide for diabetes and liraglutide for obesity based on formulary contracts<sup>[83]</sup>. Prior authorization requirements may differ between agents, requiring individual verification<sup>[84]</sup>.
            </p>
            <p>
              <strong>Which works faster for weight loss?</strong><br />
              Both agents show initial weight loss within 4-6 weeks, but semaglutide's longer titration to maximum dose may delay peak effects<sup>[85]</sup>. Liraglutide reaches therapeutic doses sooner due to daily dosing flexibility<sup>[86]</sup>.
            </p>
            <p>
              <strong>Can these peptides be used together?</strong><br />
              Combination GLP-1 agonist therapy is not recommended due to overlapping mechanisms and increased side effect risk<sup>[87]</sup>. Patients should use one agent at appropriate therapeutic doses rather than combining multiple GLP-1 agonists<sup>[88]</sup>.
            </p>
            <p>
              <strong>Which has better long-term safety data?</strong><br />
              Liraglutide has longer post-market experience since 2010 FDA approval versus semaglutide's 2017 approval<sup>[89]</sup>. However, both agents share similar safety profiles based on clinical trial data and post-market surveillance<sup>[90]</sup>.
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
                <h3 className="text-sm font-semibold text-[#333333]">Looking to buy Semaglutide and Liraglutide for research?</h3>
                <p className="mt-1 text-sm text-[#6b7280]">Compare verified research peptide suppliers with pricing, purity data, and trust signals.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/semaglutide">
                    Semaglutide suppliers <ArrowRight />
                  </a>
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/liraglutide">
                    Liraglutide suppliers <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Links */}
          <section className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/semaglutide">Learn more about Semaglutide</a>
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/liraglutide">Learn more about Liraglutide</a>
          </section>

          {/* Find a Clinic CTA */}
          <div className="mt-10 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
            <h2 className="font-heading text-lg font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>Find a Clinic</h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find a clinic that offers Semaglutide or Liraglutide near you.</p>
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