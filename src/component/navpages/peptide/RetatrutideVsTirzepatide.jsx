// src/component/navpages/peptide/RetatrutideVsTirzepatide.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

/* ---------- Schemas ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Peptide Encyclopedia', item: { '@id': 'https://www.mypeptidematch.com/peptides', name: 'Peptide Encyclopedia' } },
    { '@type': 'ListItem', position: 3, name: 'Retatrutide vs Tirzepatide' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is retatrutide better than tirzepatide for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In separate trials, retatrutide's highest dose produced greater mean weight loss (~28.3% at 80 weeks in Phase 3 TRIUMPH-1) than tirzepatide's highest dose (~22.5% at 72 weeks in SURMOUNT-1). But these were different trials with different durations and populations, so the comparison is indirect — no head-to-head study exists.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is retatrutide FDA-approved like tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tirzepatide is FDA-approved as Mounjaro (type 2 diabetes, 2022) and Zepbound (obesity, 2023). Retatrutide is still investigational. Its Phase 3 trials reported positive results in 2026, and Eli Lilly plans to submit it to the FDA in the first quarter of 2027. Until approval it is not available by prescription or through compounding pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main mechanism difference between retatrutide and tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tirzepatide activates two receptors — GIP and GLP-1. Retatrutide adds a third, the glucagon receptor. Glucagon receptor activation increases energy expenditure and promotes liver fat metabolism, which is the pharmacological reason retatrutide's trial weight-loss numbers exceed tirzepatide's.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do retatrutide and tirzepatide have the same side effects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both share the GLP-1 class GI profile — nausea, vomiting, diarrhea, and constipation, mostly during dose escalation. Retatrutide's glucagon component has also been associated with modest increases in resting heart rate in trials. Tirzepatide has years of post-marketing safety data; retatrutide's long-term safety is not yet established.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from tirzepatide to retatrutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not by prescription yet. Until it is approved, retatrutide is available only through clinical trials or Lilly's narrow early-access program, which opened in August 2026 for adults with refractory obesity and serious complications who can't join a trial. Discuss any medication change with your prescriber.",
      },
    },
  ],
};

/* ---------- Data Tables ---------- */
const sideBySideRows = [
  ['Class', 'Triple Incretin Agonist', 'GIP/GLP-1 Receptor Agonist'],
  ['Primary Uses', 'Weight Loss, Type 2 Diabetes, Metabolic Health', 'Weight Loss, Type 2 Diabetes'],
  ['Administration', 'Subcutaneous injection', 'Subcutaneous Injection'],
  ['Typical Dosing', 'Investigational — no FDA-approved dose. Phase 2 obesity trials used 2, 4, 8, and 12 mg once-weekly subcutaneous injections, titrated gradually over roughly 24 weeks, with 12 mg producing the greatest weight loss. These figures are trial reference data, not a prescribable regimen.', '—'],
  ['Evidence Level', '—', '—'],
  ['Common Side Effects', 'Nausea, Vomiting, Diarrhea, Constipation, Decreased appetite, Elevated resting heart rate', '—'],
];

const mechanismRows = [
  ['Receptors targeted', 'GLP-1 + GIP + glucagon', 'GLP-1 + GIP'],
  ['Drug class', 'Triple incretin agonist', 'Dual incretin agonist'],
  ['Added lever vs the other', 'Glucagon (energy expenditure, liver fat)', '—'],
  ['Administration', 'Subcutaneous, once weekly', 'Subcutaneous, once weekly'],
  ['Developer', 'Eli Lilly (LY3437943)', 'Eli Lilly (Mounjaro / Zepbound)'],
];

const efficacyRows = [
  ['Peak mean weight loss', '~28.3% (12 mg, 80 wk)', '~22.5% (15 mg, 72 wk)'],
  ['Trial phase', 'Phase 3 (TRIUMPH-1)', 'Phase 3 (SURMOUNT-1)'],
  ['Highest dose studied', '12 mg weekly', '15 mg weekly'],
  ['Cardiovascular-outcomes data', 'Outcomes trial ongoing', 'SURPASS-CVOT'],
  ['FDA status', 'Investigational (FDA submission planned Q1 2027)', 'Approved'],
];

const references = [
  'Rosenstock J, et al. "Retatrutide, a GIP, GLP-1 and glucagon receptor agonist, for people with type 2 diabetes: a randomised, double-blind, placebo and active-controlled, parallel-group, phase 2 trial conducted in the USA." Lancet. 2023;402(10401):529-544. PMID: 37385280',
  'Jastreboff AM, et al. "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial." N Engl J Med. 2023;389(6):514-526. PMID: 37366315',
  'Jastreboff AM, et al. "Tirzepatide Once Weekly for the Treatment of Obesity." SURMOUNT-1 Trial. N Engl J Med. 2022;387(3):205-216. PMID: 35658024',
  'Eli Lilly and Company. "Lilly\'s triple agonist, retatrutide, delivered powerful weight loss in pivotal Phase 3 obesity trial." News release. May 21, 2026.',
  'Eli Lilly and Company. "Lilly\'s triple agonist, retatrutide, successful in two additional phase 3 obesity trials, delivering significant improvements in weight and A1C." News release. July 23, 2026.',
  'Grossi G. "Lilly Expands Retatrutide Access Amid Doctor Pushback." AJMC. August 5, 2026.',
];

/* ---------- Reusable Helpers ---------- */
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
export default function RetatrutideVsTirzepatide() {
  return (
    <>
      <Helmet>
        <title>Retatrutide vs Tirzepatide: Which Is Right for You? (2026) | MyPeptideMatch</title>
        <meta
          name="description"
          content="Compare Retatrutide vs Tirzepatide: mechanism, weight-loss results, side effects, and FDA status. Tirzepatide is FDA-approved; Retatrutide is investigational with Phase 3 results pending FDA submission in 2027."
        />
        <link rel="canonical" href="https://www.mypeptidematch.com/compare/retatrutide-vs-tirzepatide" />
        <meta property="og:title" content="Retatrutide vs Tirzepatide: Which Is Right for You? (2026)" />
        <meta property="og:description" content="Compare Retatrutide vs Tirzepatide: mechanism, weight-loss results, side effects, and FDA status. Tirzepatide is FDA-approved; Retatrutide is investigational." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mypeptidematch.com/compare/retatrutide-vs-tirzepatide" />
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
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Retatrutide vs Tirzepatide</span>
            </span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-heading text-3xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
            Retatrutide vs Tirzepatide: Which Is Right for You?
          </h1>

          {/* Quick Verdict */}
          <div className="mt-6">
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[#6b7280]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick verdict
              </p>
              <p className="mt-2 text-[#333333]">
                Tirzepatide is the practical choice today: it is a dual GIP/GLP-1 agonist that is FDA-approved (Mounjaro for type 2 diabetes, Zepbound for obesity) and available by prescription now. Retatrutide is a triple GLP-1/GIP/glucagon agonist that produced higher weight loss in its Phase 3 TRIUMPH-1 trial (~28.3% at 80 weeks vs tirzepatide's ~22.5% at 72 weeks), but it is still investigational — Eli Lilly plans to submit it to the FDA in early 2027, and there is no head-to-head or completed cardiovascular-outcomes data. If you need treatment now, tirzepatide is the approved option; retatrutide is the compound to watch as it heads to the FDA.
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
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/retatrutide">Retatrutide</a>
                    </th>
                    <th className="p-3 font-semibold text-[#333333]">
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/tirzepatide">Tirzepatide</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F8F9]">
                    <td className="p-3 font-medium text-[#4a4a4a]">FDA Status</td>
                    <td className="p-3 text-[#333333]"><ResearchBadge /></td>
                    <td className="p-3 text-[#333333]"><FdaBadge /></td>
                  </tr>
                  {sideBySideRows.map(([attr, reta, tirz]) => (
                    <tr key={attr} className="border-b border-[#F7F8F9]">
                      <td className="p-3 font-medium text-[#4a4a4a]">{attr}</td>
                      <td className="p-3 text-[#333333]">{reta}</td>
                      <td className="p-3 text-[#333333]">{tirz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main Article */}
          <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[#333333]">

            <h2 id="retatrutide-vs-tirzepatide-how-the-triple-agonist-compares-to-the-dual-agonist" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Retatrutide vs Tirzepatide: How the Triple Agonist Compares to the Dual Agonist
            </h2>

            <h2 id="key-takeaways" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Takeaways
            </h2>
            <ul>
              <li><strong>Mechanism:</strong> <a className={linkClass} href="/peptides/tirzepatide">Tirzepatide</a> is a dual GIP/GLP-1 receptor agonist; <a className={linkClass} href="/peptides/retatrutide">retatrutide</a> adds a third target, the glucagon receptor, making it a triple agonist.<sup>[1][2]</sup></li>
              <li><strong><a className={linkClass} href="/treatment/weight-loss">Weight loss</a>:</strong> Retatrutide reached ~28.3% mean weight loss at 12 mg over 80 weeks (Phase 3, TRIUMPH-1), while tirzepatide reached ~22.5% at 15 mg over 72 weeks (Phase 3, SURMOUNT-1) — impressive for both, but not a head-to-head comparison.<sup>[3][4]</sup></li>
              <li><strong>FDA status:</strong> Tirzepatide is approved and available now (<a className={linkClass} href="/peptides/tirzepatide">Mounjaro</a>, Zepbound). Retatrutide is investigational; Eli Lilly plans to submit it to the FDA in the first quarter of 2027.<sup>[5]</sup></li>
              <li><strong>Evidence maturity:</strong> Both now have Phase 3 efficacy data. Tirzepatide adds years of real-world use; retatrutide's Phase 3 results so far are topline releases, and its dedicated cardiovascular-outcomes trial is still running.<sup>[4][5]</sup></li>
              <li><strong>Bottom line:</strong> For treatment today, tirzepatide is the approved option. Retatrutide posted the bigger Phase 3 numbers and could be approved as early as late 2027.</li>
            </ul>

            <h2 id="what-are-retatrutide-and-tirzepatide" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What Are Retatrutide and Tirzepatide?
            </h2>
            <p>
              <a className={linkClass} href="/peptides/tirzepatide">Tirzepatide</a> is a 39-amino-acid peptide that activates both the GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1) receptors. It is FDA-approved and marketed by Eli Lilly as Mounjaro for type 2 diabetes (2022) and <a className={linkClass} href="/peptides/tirzepatide">Zepbound</a> for chronic weight management (2023), dosed once weekly by subcutaneous injection.<sup>[3]</sup>
            </p>
            <p>
              <a className={linkClass} href="/peptides/retatrutide">Retatrutide</a> (Eli Lilly, compound designation LY3437943) is the first molecule to activate three metabolic receptors at once — GLP-1, GIP, <strong>and</strong> glucagon. It is still investigational: three Phase 3 trials reported positive results in 2026, and Lilly plans to submit it to the FDA in early 2027.<sup>[4][5]</sup>
            </p>

            <h2 id="mechanism-of-action-differences" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Mechanism of Action Differences
            </h2>
            <p>
              The core difference is one extra receptor. Both drugs use GLP-1 activation to slow gastric emptying and reduce appetite, and GIP activation to amplify glucose-dependent insulin release. Retatrutide layers glucagon receptor agonism on top of that. In the context of GLP-1 co-activation, glucagon receptor agonism increases energy expenditure (resting calorie burn) and drives fatty-acid oxidation in the liver, rather than raising blood sugar the way glucagon does on its own.<sup>[1]</sup> That added "energy-output" lever is the pharmacological explanation for retatrutide's higher trial weight-loss figures.
            </p>

            {/* Mechanism Table */}
            <DataTable
              headers={['Feature', 'Retatrutide', 'Tirzepatide']}
              rows={mechanismRows}
            />

            <h2 id="effectiveness-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Effectiveness Comparison
            </h2>
            <p>
              Both drugs post the highest weight-loss numbers in their respective classes, but they come from different trials at different durations, so any direct percentage comparison is indirect.
            </p>
            <p>
              In the Phase 3 TRIUMPH-1 trial, retatrutide at 12 mg produced a mean weight loss of ~28.3% (70.3 lbs) at 80 weeks versus 2.2% on placebo, with 45.3% of participants losing at least 30% of body weight.<sup>[4]</sup> Its earlier Phase 2 trial, published in the <em>New England Journal of Medicine</em>, showed ~24.2% at 48 weeks.<sup>[2]</sup> In the Phase 3 SURMOUNT-1 trial, tirzepatide at 15 mg produced ~22.5% mean weight loss at 72 weeks, with about 57% of participants losing at least 20%.<sup>[3]</sup>
            </p>

            {/* Efficacy Table */}
            <DataTable
              headers={['Efficacy measure', 'Retatrutide', 'Tirzepatide']}
              rows={efficacyRows}
            />

            <p>
              The honest read: retatrutide's ceiling looks higher, and that now holds in Phase 3, not just Phase 2. But the trials differ in length and population, and TRIUMPH-1 enrolled people with a higher average starting BMI (40). Cross-trial comparisons cannot establish that retatrutide is definitively "better."
            </p>

            <h2 id="side-effect-profiles" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Side Effect Profiles
            </h2>
            <p>
              Both drugs share the gastrointestinal side-effect pattern common to the GLP-1 class — nausea, vomiting, diarrhea, and constipation — concentrated during the dose-escalation phase and generally dose-dependent.<sup>[2][3]</sup>
            </p>
            <ul>
              <li><strong>Tirzepatide:</strong> GI effects are the dominant adverse events across the SURMOUNT and SURPASS programs and typically ease at a stable maintenance dose. It carries a class label warning regarding thyroid C-cell tumors (based on rodent data) and the usual class-level pancreatitis and gallbladder considerations.<sup>[3]</sup></li>
              <li><strong>Retatrutide:</strong> The same GI pattern appears in Phase 2 and Phase 3 — at 12 mg in TRIUMPH-1, 42.4% reported nausea vs 14.8% on placebo — plus dysesthesia (skin tingling or sensitivity) in 12.5% vs 0.9%.<sup>[4]</sup> The glucagon-receptor component has been associated with modest increases in resting heart rate in trials — a signal that warrants cardiovascular monitoring and that does not have a direct counterpart in tirzepatide's profile.<sup>[1][2]</sup></li>
            </ul>
            <p>
              The critical asymmetry is data maturity: tirzepatide has years of post-marketing surveillance across millions of patients, while retatrutide's safety picture rests on trials of up to two years.
            </p>

            <h2 id="availability-and-legal-status" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Availability and Legal Status
            </h2>
            <p>This is where the two diverge most sharply.</p>
            <ul>
              <li><strong>Tirzepatide</strong> is approved and prescribable now. It is not a controlled substance and is covered by many insurance plans for its approved indications, with cash-pay and savings-program options otherwise.<sup>[3]</sup></li>
              <li><strong>Retatrutide</strong> isn't FDA approved yet, so there's no prescription or compounding pathway. Legal access is through a clinical trial or, since August 2026, Lilly's narrow early-access program for adults with refractory obesity who can't join a trial.<sup>[6]</sup></li>
            </ul>
            <p>
              Products sold online as "retatrutide" aren't Lilly's drug and aren't regulated, so their purity and dose can't be verified. See our guide on <a className={linkClass} href="/peptides/retatrutide">where retatrutide stands and how it compares</a> for the current status.
            </p>

            <h2 id="which-is-right-for-you" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Which Is Right for You?
            </h2>
            <p>
              If you are choosing a treatment you can actually start, the comparison is straightforward: <strong>tirzepatide</strong> is the option that exists, is approved, and has mature safety and efficacy data. It is a reasonable first-line incretin therapy for obesity or type 2 diabetes when prescribed and monitored by a clinician.
            </p>
            <p>
              <strong>Retatrutide</strong> is the more powerful mechanism on paper and the most closely watched compound in the obesity pipeline, but it is not a prescription you can fill today — it is investigational, and its long-term safety and cardiovascular effects are still being studied. If the triple-agonist mechanism interests you, a clinical trial or Lilly's early-access program is the current path, and any decision belongs in a conversation with your provider.
            </p>
            <p>
              For deeper dives, see the full <a className={linkClass} href="/peptides/retatrutide">retatrutide profile</a>, the <a className={linkClass} href="/peptides/tirzepatide">tirzepatide profile</a>, and — if you're comparing the approved options — <a className={linkClass} href="/compare/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>.
            </p>

            <h2 id="references" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              References
            </h2>
            <ol>
              {references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>

            {/* Disclaimer Box */}
            <div className="mt-10 flex items-start gap-3 rounded-xl border border-[#e5e7eb] bg-[#F7F8F9] p-5">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#6b7280]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <p className="text-sm leading-relaxed text-[#6b7280]">
                This information is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before starting any peptide therapy. Regulatory status may change.
              </p>
            </div>
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
                <h3 className="text-sm font-semibold text-[#333333]">Looking to buy Retatrutide and Tirzepatide for research?</h3>
                <p className="mt-1 text-sm text-[#6b7280]">Compare verified research peptide suppliers with pricing, purity data, and trust signals.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/retatrutide">
                    Retatrutide suppliers <ArrowRight />
                  </a>
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/tirzepatide">
                    Tirzepatide suppliers <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Links */}
          <section className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/retatrutide">Learn more about Retatrutide</a>
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/tirzepatide">Learn more about Tirzepatide</a>
          </section>

          {/* Find a Clinic CTA */}
          <div className="mt-10 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
            <h2 className="font-heading text-lg font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>Find a Clinic</h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find a clinic that offers Retatrutide or Tirzepatide near you.</p>
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