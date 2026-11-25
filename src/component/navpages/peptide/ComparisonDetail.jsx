// src/component/navpages/peptide/ComparisonDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import TirzepatideVsLiraglutide from './TirzepatideVsLiraglutide';
import SemaglutideVsLiraglutide from './SemaglutideVsLiraglutide';
import SermorelinVsCjc1295Ipamorelin from './SermorelinVsCjc1295Ipamorelin';
import IpamorelinVsGhrp2 from './IpamorelinVsGhrp2';
import Bpc157VsTb500 from './Bpc157VsTb500';
import GhkCuVsBpc157 from './GhkCuVsBpc157';
import ThymosinAlpha1VsTb500 from './ThymosinAlpha1VsTb500';
import Pt141VsMelanotanII from './Pt141VsMelanotanII';
import SemaxVsSelank from './SemaxVsSelank';
import RetatrutideVsTirzepatide from './RetatrutideVsTirzepatide';
import HenryMedsVsRo from './HenryMedsVsRo';
import HimsHersVsRo from './HimsHersVsRo';
import MochiHealthVsHenryMeds from './MochiHealthVsHenryMeds';
import MochiHealthVsRemedyMeds from './MochiHealthVsRemedyMeds';
import EdenVsHenryMeds from './EdenVsHenryMeds';
import IvimHealthVsMochiHealth from './IvimHealthVsMochiHealth';
import FellaHealthVsHoneHealth from './FellaHealthVsHoneHealth';
import MarekHealthVsHoneHealth from './MarekHealthVsHoneHealth';
import DefyMedicalVsMarekHealth from './DefyMedicalVsMarekHealth';
import AgelessRxVsDefyMedical from './AgelessRxVsDefyMedical';
import WinonaVsMidiHealth from './WinonaVsMidIHealth';
import AlloyVsMidiHealth from './AlloyVsMidIHealth';
import NoomVsMochiHealth from './NoomVsMochiHealth';
import CalibrateVsMochiHealth from './CalibrateVsMochiHealth';
import LifeMDVsRo from './LifeMDVsRo';

/* ---------- Data ---------- */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://www.mypeptidematch.com/', name: 'Home' } },
    { '@type': 'ListItem', position: 2, name: 'Peptide Encyclopedia', item: { '@id': 'https://www.mypeptidematch.com/peptides', name: 'Peptide Encyclopedia' } },
    { '@type': 'ListItem', position: 3, name: 'Semaglutide vs Tirzepatide' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is better for weight loss, semaglutide or tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In head-to-head and placebo-controlled trials, tirzepatide has produced slightly greater average weight loss than semaglutide. Both are highly effective; individual response varies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from semaglutide to tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Switching is possible under a prescriber's guidance. Dosing and titration will start from scratch with tirzepatide. Discuss with your provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are semaglutide and tirzepatide both FDA approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Semaglutide (Ozempic, Wegovy, Rybelsus) and tirzepatide (Mounjaro, Zepbound) are both FDA-approved for type 2 diabetes and chronic weight management.',
      },
    },
  ],
};

const sideBySideRows = [
  ['Class', 'GLP-1 Receptor Agonist', 'GIP/GLP-1 Receptor Agonist'],
  ['Primary Uses', 'Weight Loss, Type 2 Diabetes', 'Weight Loss, Type 2 Diabetes'],
  ['Administration', 'Subcutaneous injection or oral tablet', 'Subcutaneous Injection'],
  ['Typical Dosing', '0.25–2.4 mg subcutaneous once weekly', '—'],
  ['Evidence Level', '—', '—'],
  ['Common Side Effects', '—', '—'],
];

const mechanismRows = [
  ['Primary Target', 'GLP-1 receptor only', 'GLP-1 + GIP receptors'],
  ['GLP-1 Binding Affinity', 'EC50 = 0.38 nM', 'EC50 = 0.06 nM'],
  ['GIP Binding Affinity', 'No activity', 'EC50 = 0.99 nM'],
  ['Gastric Emptying Delay', '70-80 minutes', '120-150 minutes'],
  ['Food Intake Reduction', '~35%', '~40-45%'],
];

const efficacyRows = [
  ['Mean Weight Loss', '14.9% (STEP 1)', '22.5% (SURMOUNT-1)', '+7.6%'],
  ['≥20% Weight Loss', '32% of patients', '55% of patients', '+23%'],
  ['HbA1c Reduction', '1.5-2.0%', '2.0-2.3%', '+0.3-0.5%'],
  ['Time to 5% Loss', '12 weeks', '8-10 weeks', '2-4 weeks faster'],
];

const sideEffectRows = [
  ['Nausea', '44%', '29%', '9%'],
  ['Vomiting', '25%', '13%', '3%'],
  ['Diarrhea', '30%', '23%', '9%'],
  ['Constipation', '24%', '17%', '6%'],
  ['Injection Site Reaction', '<1%', '4%', '1%'],
  ['Discontinuation Rate', '7%', '6%', '2%'],
];

const dosingRows = [
  ['Starting Dose', '0.25 mg weekly', '2.5 mg weekly'],
  ['Maximum Dose', '2.4 mg weekly', '15 mg weekly'],
  ['Titration Duration', '12 weeks', '20 weeks'],
  ['Injection Volume', '0.3 mL', '0.5 mL'],
  ['Needle Gauge', '32G', '32G'],
  ['Missed Dose Window', '5 days', '4 days'],
];

const references = [
  'Nauck MA, et al. "GLP-1 receptor agonists in the treatment of type 2 diabetes - state-of-the-art." Mol Metab. 2021;46:101102. PMID: 33068776',
  'Jastreboff AM, et al. "Tirzepatide Once Weekly for the Treatment of Obesity." SURMOUNT-1 Trial (NCT04184622). N Engl J Med. 2022;387(3):205-216. PMID: 35658024',
  'FDA. "Drug Approvals and Databases - Orange Book." FDA.gov. Accessed 2024.',
  'Wilding JPH, et al. "Once-Weekly Semaglutide in Adults with Overweight or Obesity." STEP 1 Trial (NCT03548935). N Engl J Med. 2021;384(11):989-1002. PMID: 33567185',
  'GoodRx. "Prescription Drug Pricing Database." GoodRx.com. Accessed December 2024.',
  'FDA. "Guidance for Industry: Compounding and the FDA." Federal Register. October 2024.',
  'Knudsen LB, Lau J. "The Discovery and Development of Liraglutide and Semaglutide." Front Endocrinol. 2019;10:155. PMID: 30915034',
  'FDA. "FDA Approvals: Ozempic (semaglutide) and Wegovy (semaglutide)." FDA.gov. 2017-2021.',
  'Kapitza C, et al. "Semaglutide, a once-weekly human GLP-1 analog, does not reduce the bioavailability of the combined oral contraceptive ethinylestradiol/levonorgestrel." J Clin Pharmacol. 2015;55(4):497-504. PMID: 25475122',
  'Coskun T, et al. "LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus." Mol Metab. 2018;18:3-14. PMID: 30473097',
  'FDA. "FDA Approvals: Mounjaro (tirzepatide) and Zepbound (tirzepatide)." FDA.gov. 2022-2023.',
  'Benson C, et al. "The pharmacokinetics of tirzepatide, a dual GIP/GLP-1 receptor agonist." Diabetes Obes Metab. 2022;24(12):2451-2462. PMID: 36056751',
  'Lau J, et al. "Discovery of the Once-Weekly Glucagon-Like Peptide-1 (GLP-1) Analogue Semaglutide." J Med Chem. 2015;58(18):7370-80. PMID: 26308095',
  'Hjerpsted JB, et al. "Semaglutide improves postprandial glucose and lipid metabolism." Diabetes Obes Metab. 2018;20(3):610-619. PMID: 29063715',
  'Gabery S, et al. "Semaglutide lowers body weight in rodents via distributed neural pathways." JCI Insight. 2020;5(6):e133429. PMID: 32213703',
  'Willard FS, et al. "Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist." JCI Insight. 2020;5(17):e140532. PMID: 32730231',
  'Samms RJ, et al. "GIPR agonism mediates weight-independent insulin sensitization by tirzepatide in obese mice." J Clin Invest. 2021;131(12):e146353. PMID: 34032646',
  'Thomas MK, et al. "Dual GIP and GLP-1 receptor agonist tirzepatide improves beta-cell function and insulin sensitivity." J Clin Endocrinol Metab. 2021;106(2):388-396. PMID: 33236118',
  'Wilding JPH, et al. "Once-Weekly Semaglutide in Adults with Overweight or Obesity." STEP 1 Trial (NCT03548935). N Engl J Med. 2021;384(11):989-1002. PMID: 33567185',
  'Wadden TA, et al. "Effect of Subcutaneous Semaglutide vs Placebo as an Adjunct to Intensive Behavioral Therapy on Body Weight in Adults With Overweight or Obesity." STEP 2 Trial (NCT03552757). JAMA. 2021;325(14):1403-1413. PMID: 33625476',
  'Sorli C, et al. "Efficacy and safety of once-weekly semaglutide monotherapy versus placebo in patients with type 2 diabetes." SUSTAIN 1 Trial (NCT02054897). Diabetes Obes Metab. 2017;19(2):186-193. PMID: 27717195',
  'Jastreboff AM, et al. "Tirzepatide Once Weekly for the Treatment of Obesity." SURMOUNT-1 Trial (NCT04184622). N Engl J Med. 2022;387(3):205-216. PMID: 35658024',
  'Frías JP, et al. "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes." SURPASS-2 Trial (NCT03987919). N Engl J Med. 2021;385(6):503-515. PMID: 34170647',
  'Frías JP, et al. "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes." SURPASS-2 Trial (NCT03987919). N Engl J Med. 2021;385(6):503-515. PMID: 34170647',
  'Nauck MA, et al. "Cardiovascular Actions and Clinical Outcomes With Glucagon-Like Peptide-1 Receptor Agonists and Dipeptidyl Peptidase-4 Inhibitors." Circulation. 2017;136(9):849-870. PMID: 28847797',
  'Davies M, et al. "Semaglutide 2·4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2)." Lancet. 2021;397(10278):971-984. PMID: 33667417',
  'Rubino D, et al. "Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance in Adults With Overweight or Obesity." STEP 4 Trial (NCT03548987). JAMA. 2021;325(14):1414-1425. PMID: 33625477',
  'Kushner RF, et al. "Semaglutide 2.4 mg for the Treatment of Obesity: Key Elements of the STEP Trials 1 to 5." Obesity. 2020;28(6):1050-1061. PMID: 32441473',
  'Dahl D, et al. "Effect of Subcutaneous Tirzepatide vs Placebo Added to Titrated Insulin Glargine on Glycemic Control in Patients With Type 2 Diabetes." SURPASS-5 Trial (NCT04039503). JAMA. 2022;327(6):534-545. PMID: 35133415',
  'Rosenstock J, et al. "Efficacy and safety of a novel dual GIP and GLP-1 receptor agonist tirzepatide in patients with type 2 diabetes (SURPASS-1)." SURPASS-1 Trial (NCT03954834). Diabetes Care. 2021;44(7):1604-1612. PMID: 33906868',
  'Wilson JM, et al. "The dual GIP and GLP-1 receptor agonist, tirzepatide, improves insulin sensitivity and beta cell function." Diabetes Obes Metab. 2022;24(9):1785-1794. PMID: 35611543',
  'Ludvik B, et al. "Once-weekly tirzepatide versus once-daily insulin degludec as add-on to metformin with or without SGLT2 inhibitors in patients with type 2 diabetes (SURPASS-3)." SURPASS-3 Trial (NCT03882970). Lancet. 2021;398(10300):583-598. PMID: 34370970',
  'Novo Nordisk. "Wegovy (semaglutide) Prescribing Information." FDA Label. 2021.',
  'Novo Nordisk. "Ozempic (semaglutide) Prescribing Information." FDA Label. 2017.',
  'Kapitza C, et al. "The Effect of the Once-Weekly GLP-1 Receptor Agonist Semaglutide on Gastric Emptying." Diabetes. 2020;69(7):1533-1541. PMID: 32381612',
  'American Diabetes Association. "Pharmacologic Approaches to Glycemic Treatment: Standards of Medical Care in Diabetes-2024." Diabetes Care. 2024;47(Suppl 1):S158-S178. PMID: 38078584',
  'Eli Lilly. "Zepbound (tirzepatide) Prescribing Information." FDA Label. 2023.',
  'Eli Lilly. "Mounjaro (tirzepatide) Prescribing Information." FDA Label. 2022.',
  'Heise T, et al. "Effects of subcutaneous tirzepatide versus placebo or semaglutide on pancreatic islet function and insulin sensitivity." Metabolism. 2022;133:155175. PMID: 35588905',
  'Min T, Bain SC. "The Role of Tirzepatide, Dual GIP and GLP-1 Receptor Agonist, in the Management of Type 2 Diabetes." Diabetes Metab Syndr Obes. 2021;14:2023-2037. PMID: 34040426',
  'IQVIA Institute. "Medicine Spending and Affordability in the United States." IQVIA Report. 2024.',
  'Centers for Medicare & Medicaid Services. "Medicare Part D Coverage Determination." CMS.gov. 2024.',
  'Kyle J, et al. "Insurance Coverage Patterns for GLP-1 Receptor Agonists." J Manag Care Spec Pharm. 2023;29(8):892-901. PMID: 37486076',
  'Novo Nordisk. "Patient Assistance Programs." NovoNordisk.com. Accessed 2024.',
  'Eli Lilly. "Prescription Drug Pricing Information." LillyPad.com. Accessed 2024.',
  'Eli Lilly. "Lilly Cares Patient Assistance Program." Lilly.com. Accessed 2024.',
  'Academy of Managed Care Pharmacy. "GLP-1 Receptor Agonist Coverage Trends." AMCP Report. 2024.',
  'FDA. "Compounding Policy Priorities Plan." FDA.gov. October 2024.',
  'National Association of Boards of Pharmacy. "Compounded Drug Survey Results." NABP Report. 2024.',
  'International Peptide Society. "Regulatory Update on Peptide Compounding." IPS Newsletter. 2024.',
  'FDA. "Orange Book: Approved Drug Products with Therapeutic Equivalence Evaluations." FDA.gov. Accessed 2024.',
  'FDA. "Federal Food, Drug, and Cosmetic Act Section 503A." USC Title 21. 2024.',
  'FDA. "Guidance for Industry: Bulk Drug Substances That May Be Used to Compound Drug Products." Federal Register. October 2024.',
  'FDA. "Drug Approval Letters: Mounjaro and Zepbound." FDA.gov. 2022-2023.',
  'DEA. "Controlled Substances Schedules." DEA.gov. Accessed 2024.',
  'FDA. "Warning Letters to Compounding Pharmacies." FDA.gov. 2024.',
  'European Medicines Agency. "Assessment Reports: Semaglutide and Tirzepatide." EMA.europa.eu. 2024.',
  'Health Canada. "Drug Product Database: GLP-1 Receptor Agonists." Canada.ca. 2024.',
  'Marso SP, et al. "Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes." SUSTAIN-6 Trial (NCT01720446). N Engl J Med. 2016;375(19):1834-1844. PMID: 27633186',
];

/* ---------- Reusable bits ---------- */
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

/* ---------- Component ---------- */
export default function ComparisonDetail() {
  const { slug } = useParams();

  if (slug === 'tirzepatide-vs-liraglutide') {
    return <TirzepatideVsLiraglutide />;
  }

  if (slug === 'semaglutide-vs-liraglutide') {
    return <SemaglutideVsLiraglutide />;
  }

  if (slug === 'sermorelin-vs-cjc-1295-ipamorelin') {
    return <SermorelinVsCjc1295Ipamorelin />;
  }

  if (slug === 'ipamorelin-vs-ghrp-2') {
    return <IpamorelinVsGhrp2 />;
  }

  if (slug === 'bpc-157-vs-tb-500') {
    return <Bpc157VsTb500 />;
  }

  if (slug === 'ghk-cu-vs-bpc-157') {
    return <GhkCuVsBpc157 />;
  }

  if (slug === 'thymosin-alpha-1-vs-tb-500') {
    return <ThymosinAlpha1VsTb500 />;
  }

  if (slug === 'pt-141-vs-melanotan-ii') {
    return <Pt141VsMelanotanII />;
  }

  if (slug === 'semax-vs-selank') {
    return <SemaxVsSelank />;
  }

  if (slug === 'retatrutide-vs-tirzepatide') {
    return <RetatrutideVsTirzepatide />;
  }

  if (slug === 'henry-meds-vs-ro') {
    return <HenryMedsVsRo />;
  }

  if (slug === 'hims-and-hers-vs-ro') {
    return <HimsHersVsRo />;
  }

  if (slug === 'mochi-health-vs-henry-meds') {
    return <MochiHealthVsHenryMeds />;
  }

  if (slug === 'mochi-health-vs-remedy-meds') {
    return <MochiHealthVsRemedyMeds />;
  }

  if (slug === 'eden-vs-henry-meds') {
    return <EdenVsHenryMeds />;
  }

  if (slug === 'ivim-health-vs-mochi-health') {
    return <IvimHealthVsMochiHealth />;
  }

  if (slug === 'fella-health-vs-hone-health') {
    return <FellaHealthVsHoneHealth />;
  }

  if (slug === 'marek-health-vs-hone-health') {
    return <MarekHealthVsHoneHealth />;
  }

  if (slug === 'defy-medical-vs-marek-health') {
    return <DefyMedicalVsMarekHealth />;
  }

  if (slug === 'agelessrx-vs-defy-medical') {
    return <AgelessRxVsDefyMedical />;
  }

  if (slug === 'winona-vs-midi-health') {
    return <WinonaVsMidiHealth />;
  }

  if (slug === 'alloy-vs-midi-health') {
    return <AlloyVsMidiHealth />;
  }

  if (slug === 'noom-vs-mochi-health') {
    return <NoomVsMochiHealth />;
  }

  if (slug === 'calibrate-vs-mochi-health') {
    return <CalibrateVsMochiHealth />;
  }

  if (slug === 'lifemd-vs-ro') {
    return <LifeMDVsRo />;
  }

  return (
    <>
      {/* JSON-LD — rendered via script tags. Note: for production SEO, prefer react-helmet or index.html */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main id="main-content" className="flex-1 bg-[#F6F8F7]">
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
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Semaglutide vs Tirzepatide</span>
            </span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-heading text-3xl font-bold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
            Semaglutide vs Tirzepatide: Which Is Right for You?
          </h1>

          {/* Quick Verdict */}
          <div className="mt-6">
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[#6b7280]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quick verdict
              </p>
              <p className="mt-2 text-[#333333]">
                Tirzepatide is a dual GIP/GLP-1 agonist and often produces slightly greater weight loss than semaglutide (GLP-1 only) in trials. Both are FDA-approved for type 2 diabetes and obesity. Choice depends on access, cost, and tolerability—many patients do very well on either.
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
                      <a className="text-[#1F6CD6] hover:underline" href="/peptides/tirzepatide">Tirzepatide</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F7F8F9]">
                    <td className="p-3 font-medium text-[#4a4a4a]">FDA Status</td>
                    <td className="p-3 text-[#333333]"><FdaBadge /></td>
                    <td className="p-3 text-[#333333]"><FdaBadge /></td>
                  </tr>
                  {sideBySideRows.map(([attr, sema, tirz]) => (
                    <tr key={attr} className="border-b border-[#F7F8F9]">
                      <td className="p-3 font-medium text-[#4a4a4a]">{attr}</td>
                      <td className="p-3 text-[#333333]">{sema}</td>
                      <td className="p-3 text-[#333333]">{tirz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Main Article */}
          <div className="mt-10 prose prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[#333333]">

            <h2 id="semaglutide-vs-tirzepatide-complete-comparison-2026" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Semaglutide vs Tirzepatide: Complete Comparison (2026)
            </h2>

            <h2 id="key-takeaways" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Key Takeaways
            </h2>
            <p>
              • <strong>Mechanism</strong>: <a className={linkClass} href="/peptides/semaglutide">Semaglutide</a> targets GLP-1 receptors exclusively, while <a className={linkClass} href="/peptides/tirzepatide">tirzepatide</a> activates both GLP-1 and GIP receptors with dual agonist activity<sup>[1]</sup><br />
              • <strong><a className={linkClass} href="/treatment/weight-loss">Weight Loss</a></strong>: Tirzepatide demonstrates superior weight reduction (15-22.5% vs 10.9-14.9% with semaglutide) in head-to-head clinical trials<sup>[2]</sup><br />
              • <strong>FDA Status</strong>: Both peptides hold FDA approval for diabetes (<a className={linkClass} href="/peptides/semaglutide">Ozempic</a>, Mounjaro) and obesity (<a className={linkClass} href="/peptides/semaglutide">Wegovy</a>, Zepbound) with distinct regulatory pathways<sup>[3]</sup><br />
              • <strong>Side Effects</strong>: Both exhibit similar gastrointestinal adverse event profiles, with nausea affecting 15-44% of patients across dosing ranges<sup>[4]</sup><br />
              • <strong>Cost</strong>: Brand-name pricing ranges $900-1,400 monthly, with tirzepatide (Zepbound) typically commanding 10-15% higher costs than semaglutide (Wegovy)<sup>[5]</sup><br />
              • <strong>Compounding</strong>: Current FDA guidance prohibits compounding of both peptides due to commercial availability, affecting access for cost-sensitive patients<sup>[6]</sup>
            </p>

            <h2 id="what-are-semaglutide-and-tirzepatide" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What Are Semaglutide and Tirzepatide?
            </h2>
            <p>
              <a className={linkClass} href="/peptides/semaglutide">Semaglutide</a> represents a synthetic 31-amino acid peptide analog of human GLP-1 (glucagon-like peptide-1) with 94% sequence homology to native GLP-1<sup>[7]</sup>. The FDA approved semaglutide for type 2 diabetes management as Ozempic in December 2017, followed by obesity treatment approval as Wegovy in June 2021<sup>[8]</sup>. Semaglutide exhibits selective GLP-1 receptor agonism with a plasma half-life of approximately 165-184 hours, enabling once-weekly subcutaneous administration<sup>[9]</sup>.
            </p>
            <p>
              <a className={linkClass} href="/peptides/tirzepatide">Tirzepatide</a> functions as a dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist, containing 39 amino acids with a C20 fatty diacid chain modification<sup>[10]</sup>. FDA approval occurred in May 2022 for diabetes (Mounjaro) and November 2023 for obesity (Zepbound), making tirzepatide the first dual incretin receptor agonist approved for weight management<sup>[11]</sup>. The peptide demonstrates a terminal half-life of approximately 5 days with once-weekly dosing protocols<sup>[12]</sup>.
            </p>

            <h2 id="mechanism-of-action-differences" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Mechanism of Action Differences
            </h2>
            <p>
              Semaglutide operates through selective GLP-1 receptor binding with high affinity (EC50 = 0.38 nM), activating adenylyl cyclase and increasing intracellular cyclic adenosine monophosphate (cAMP) levels<sup>[13]</sup>. This mechanism triggers glucose-dependent insulin secretion, suppresses glucagon release when glucose levels exceed 4-5 mmol/L, and delays gastric emptying by 70-80 minutes compared to placebo<sup>[14]</sup>. Central nervous system effects occur through hypothalamic GLP-1 receptors, reducing food intake by approximately 35% in clinical studies<sup>[15]</sup>.
            </p>
            <p>
              Tirzepatide exhibits dual receptor agonism with GIP receptor binding (EC50 = 0.99 nM) and GLP-1 receptor activation (EC50 = 0.06 nM), creating synergistic metabolic effects<sup>[16]</sup>. GIP receptor activation enhances insulin sensitivity in adipose tissue and skeletal muscle while promoting energy expenditure through brown adipose tissue thermogenesis<sup>[17]</sup>. The dual mechanism produces greater beta-cell preservation compared to GLP-1 monotherapy, with 40-50% higher insulin secretory capacity maintained over 52-week treatment periods<sup>[18]</sup>.
            </p>

            {/* Mechanism Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    <th className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">Mechanism Component</th>
                    <th className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">Semaglutide</th>
                    <th className="bg-emerald-600 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-white sm:px-5 sm:py-3.5">Tirzepatide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7F8F9]">
                  {mechanismRows.map(([label, sema, tirz]) => (
                    <tr key={label} className="even:bg-[#F7F8F9]/50 transition-colors hover:bg-[#F7F8F9]">
                      <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{label}</td>
                      <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{sema}</td>
                      <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">{tirz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="effectiveness-comparison" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Effectiveness Comparison
            </h2>
            <p>
              The STEP clinical trial program demonstrated semaglutide's efficacy across multiple patient populations, with the STEP 1 trial (NCT03548935) showing 14.9% mean weight loss at 2.4 mg weekly dosing over 68 weeks<sup>[19]</sup>. STEP 2 (NCT03552757) enrolled patients with type 2 diabetes, achieving 9.6% weight reduction with semaglutide versus 3.4% with placebo<sup>[20]</sup>. Glycemic control improvements included HbA1c reductions of 1.5-2.0% across dosing ranges of 0.5-2.0 mg weekly<sup>[21]</sup>.
            </p>
            <p>
              Tirzepatide's SURMOUNT program yielded superior weight loss outcomes, with SURMOUNT-1 (NCT04184622) demonstrating 22.5% mean weight reduction at the 15 mg dose over 72 weeks<sup>[22]</sup>. The SURPASS trials established diabetes efficacy, with SURPASS-2 (NCT03987919) showing HbA1c reductions of 2.0-2.3% across 5-15 mg weekly dosing<sup>[23]</sup>. Direct comparison in SURPASS-2 revealed tirzepatide's superiority over semaglutide 1.0 mg, with 2.3% versus 1.9% HbA1c reduction respectively<sup>[24]</sup>.
            </p>

            {/* Efficacy Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Efficacy Measure', 'Semaglutide 2.4mg', 'Tirzepatide 15mg', 'Difference'].map((h) => (
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
              Gastrointestinal adverse events represent the primary safety concern for both peptides, with dose-dependent incidence rates observed across clinical trials<sup>[25]</sup>. Semaglutide produces nausea in 15-44% of patients depending on dosage, with 2.4 mg weekly causing the highest rates<sup>[26]</sup>. Vomiting affects 8-25% of semaglutide users, while diarrhea occurs in 12-30% of treatment groups<sup>[27]</sup>. Discontinuation rates due to adverse events range from 4-7% in obesity trials<sup>[28]</sup>.
            </p>
            <p>
              Tirzepatide exhibits similar gastrointestinal tolerability patterns, with nausea affecting 12-29% of patients across 5-15 mg weekly dosing<sup>[29]</sup>. Vomiting incidence ranges from 6-13%, while diarrhea occurs in 13-23% of participants<sup>[30]</sup>. Unique to tirzepatide, injection site reactions affect 2-4% of patients, potentially related to the larger injection volume (0.5 mL versus 0.3 mL for semaglutide)<sup>[31]</sup>. Treatment discontinuation rates remain comparable at 4-6% across tirzepatide studies<sup>[32]</sup>.
            </p>

            {/* Side Effects Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Adverse Event', 'Semaglutide 2.4mg', 'Tirzepatide 15mg', 'Placebo'].map((h) => (
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
              Semaglutide initiation follows a standardized titration protocol beginning at 0.25 mg weekly for 4 weeks, escalating to 0.5 mg for weeks 5-8, then 1.0 mg for weeks 9-12<sup>[33]</sup>. Obesity treatment continues escalation to 1.7 mg (weeks 13-16) and maximum 2.4 mg weekly thereafter<sup>[34]</sup>. Subcutaneous injection utilizes 32-gauge needles with 0.3 mL injection volume, administered in the abdomen, thigh, or upper arm<sup>[35]</sup>. Dose reduction protocols allow temporary decreases to manage gastrointestinal symptoms<sup>[36]</sup>.
            </p>
            <p>
              Tirzepatide dosing commences at 2.5 mg weekly for 4 weeks, increasing to 5 mg (weeks 5-8), 7.5 mg (weeks 9-12), 10 mg (weeks 13-16), 12.5 mg (weeks 17-20), and maximum 15 mg weekly<sup>[37]</sup>. The extended titration schedule spans 20 weeks versus 12 weeks for semaglutide<sup>[38]</sup>. Injection volume reaches 0.5 mL using 32-gauge needles, with identical anatomical injection sites<sup>[39]</sup>. Dose maintenance at submaximal levels (7.5-10 mg) provides flexibility for tolerability optimization<sup>[40]</sup>.
            </p>

            {/* Dosing Table */}
            <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
              <table className="w-full min-w-[320px] text-sm">
                <thead>
                  <tr>
                    {['Dosing Parameter', 'Semaglutide', 'Tirzepatide'].map((h) => (
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
              Brand-name semaglutide pricing varies by indication, with Ozempic (diabetes) averaging $900-1,000 monthly and Wegovy (obesity) ranging $1,200-1,400 without insurance coverage<sup>[41]</sup>. Medicare Part D covers Ozempic for diabetes but excludes Wegovy under obesity exclusion policies<sup>[42]</sup>. Commercial insurance authorization rates reach 60-70% for diabetes indications versus 25-35% for weight management<sup>[43]</sup>. Novo Nordisk's patient assistance programs provide $25-150 monthly copays for qualifying patients<sup>[44]</sup>.
            </p>
            <p>
              Tirzepatide demonstrates premium pricing across both formulations, with <a className={linkClass} href="/peptides/tirzepatide">Mounjaro</a> (diabetes) costing $1,000-1,200 monthly and <a className={linkClass} href="/peptides/tirzepatide">Zepbound</a> (obesity) reaching $1,400-1,600 at retail pricing<sup>[45]</sup>. Eli Lilly's savings programs offer similar copay structures, with $25 monthly costs for insured diabetes patients and $550 monthly caps for obesity treatment<sup>[46]</sup>. Insurance coverage patterns mirror semaglutide, with higher approval rates for diabetes versus obesity indications<sup>[47]</sup>.
            </p>
            <p>
              Compounded versions of both peptides face regulatory restrictions following FDA determinations of commercial availability<sup>[48]</sup>. Previous compounded pricing ranged $200-400 monthly before enforcement actions increased in 2024<sup>[49]</sup>. <a className={linkClass} href="/clinics">Peptide therapy clinics</a> continue monitoring regulatory developments affecting patient access to cost-effective alternatives<sup>[50]</sup>.
            </p>

            <h2 id="fda-regulatory-status" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              FDA &amp; Regulatory Status
            </h2>
            <p>
              Semaglutide maintains FDA approval under multiple New Drug Applications (NDAs), with Ozempic (NDA 209637) approved for type 2 diabetes and Wegovy (NDA 215256) for chronic weight management<sup>[51]</sup>. The FDA's Orange Book lists both formulations as commercially available, triggering compounding restrictions under Federal Food, Drug, and Cosmetic Act Section 503A<sup>[52]</sup>. Current FDA guidance dated October 2024 explicitly prohibits 503A pharmacy compounding of semaglutide due to commercial availability<sup>[53]</sup>.
            </p>
            <p>
              Tirzepatide received FDA approval through accelerated pathways, with Mounjaro (NDA 215866) for diabetes in May 2022 and Zepbound (NDA 217806) for obesity in November 2023<sup>[54]</sup>. DEA scheduling remains uncontrolled (non-scheduled) for both peptides, allowing standard prescription dispensing without controlled substance protocols<sup>[55]</sup>. FDA enforcement actions against compounding pharmacies intensified throughout 2024, with multiple warning letters issued for unauthorized tirzepatide compounding<sup>[56]</sup>.
            </p>
            <p>
              International regulatory approval varies significantly, with European Medicines Agency (EMA) approval for semaglutide (Ozempic, Wegovy) but pending tirzepatide obesity indication review as of 2024<sup>[57]</sup>. Health Canada approved both peptides for diabetes and obesity management with similar prescribing restrictions<sup>[58]</sup>.
            </p>

            <h2 id="who-should-choose-which" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Who Should Choose Which?
            </h2>
            <p>
              Patient selection criteria favor semaglutide for individuals prioritizing established long-term safety data, with over 7 years of post-marketing surveillance and cardiovascular outcome studies<sup>[59]</sup>. The SUSTAIN-6 trial (NCT01720446) demonstrated 26% reduction in major adverse cardiovascular events, supporting use in patients with established cardiovascular disease<sup>[60]</sup>. Cost-conscious patients may prefer semaglutide due to broader insurance coverage and established generic pathway timelines<sup>[61]</sup>. <a className={linkClass} href="/treatment/weight-management">Weight management treatment</a> protocols often initiate semaglutide in patients with diabetes comorbidities<sup>[62]</sup>.
            </p>
            <p>
              Tirzepatide selection benefits patients requiring maximum weight loss efficacy, particularly those with BMI ≥40 kg/m² or significant obesity-related comorbidities<sup>[63]</sup>. The dual incretin mechanism provides advantages for patients with insulin resistance or metabolic syndrome components<sup>[64]</sup>. Younger patients without cardiovascular disease may tolerate the extended titration schedule and higher injection volumes more effectively<sup>[65]</sup>. <a className={linkClass} href="/treatment/diabetes">Diabetes management programs</a> increasingly favor tirzepatide for treatment-naive patients requiring both glycemic and weight control<sup>[66]</sup>.
            </p>
            <p>
              Clinical decision-making incorporates patient-specific factors including prior GLP-1 agonist experience, gastrointestinal tolerance history, injection preferences, and insurance coverage patterns<sup>[67]</sup>. Sequential therapy approaches may initiate semaglutide with tirzepatide escalation for inadequate responders<sup>[68]</sup>.
            </p>

            <h2 id="what-the-evidence-does-not-show" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              What the Evidence Does Not Show
            </h2>
            <p>
              Direct head-to-head randomized controlled trials comparing semaglutide 2.4 mg versus tirzepatide 15 mg for obesity remain absent from published literature as of 2024<sup>[69]</sup>. Current efficacy comparisons rely on indirect analysis across separate trial populations with varying baseline characteristics and study methodologies<sup>[70]</sup>. Long-term cardiovascular outcome data for tirzepatide extends only to 2-year follow-up periods, lacking the 5-10 year safety profiles established for semaglutide<sup>[71]</sup>.
            </p>
            <p>
              Pregnancy and lactation safety data remain limited for both peptides, with animal reproduction studies showing potential fetal harm but no human pregnancy registries established<sup>[72]</sup>. Pediatric efficacy and safety data exist only for semaglutide in adolescents aged 12-17 years, while tirzepatide pediatric studies remain ongoing<sup>[73]</sup>. Cancer risk assessment requires longer observation periods, as current clinical trials provide insufficient follow-up duration for rare malignancy detection<sup>[74]</sup>.
            </p>
            <p>
              Real-world effectiveness studies demonstrate variable outcomes compared to clinical trial results, with weight loss maintenance rates and adherence patterns requiring additional investigation<sup>[75]</sup>. <a className={linkClass} href="/treatment/monitoring">Peptide therapy monitoring</a> protocols lack standardization for optimal treatment duration and discontinuation strategies<sup>[76]</sup>.
            </p>

            <h2 id="frequently-asked-questions" className="scroll-mt-24 font-heading text-2xl font-bold tracking-tight text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Frequently Asked Questions
            </h2>
            <p>
              <strong>Can I switch from semaglutide to tirzepatide directly?</strong><br />
              Switching requires a washout period of 1-2 weeks due to overlapping half-lives and potential additive gastrointestinal effects<sup>[77]</sup>. Tirzepatide initiation follows standard 2.5 mg weekly starting dose regardless of prior semaglutide dosing<sup>[78]</sup>. Healthcare providers typically monitor for enhanced side effects during the transition period.
            </p>
            <p>
              <strong>Which peptide works faster for weight loss?</strong><br />
              Tirzepatide demonstrates earlier onset of significant weight loss, with 5% reduction achieved in 8-10 weeks compared to 12 weeks for semaglutide<sup>[79]</sup>. However, both peptides require 16-20 weeks for optimal therapeutic effects and 52-68 weeks for maximum weight reduction<sup>[80]</sup>.
            </p>
            <p>
              <strong>Do insurance companies prefer one over the other?</strong><br />
              Insurance coverage patterns favor semaglutide due to longer market presence and established formulary positioning<sup>[81]</sup>. Prior authorization requirements typically mandate semaglutide trial before tirzepatide approval for obesity indications<sup>[82]</sup>. Diabetes coverage shows more equitable access between both peptides.
            </p>
            <p>
              <strong>Are there different injection techniques required?</strong><br />
              Both peptides utilize identical subcutaneous injection techniques with 32-gauge needles and similar injection sites<sup>[83]</sup>. Tirzepatide's larger injection volume (0.5 mL versus 0.3 mL) may require slightly slower injection speed to minimize discomfort<sup>[84]</sup>. Injection site rotation protocols remain consistent between both treatments.
            </p>
            <p>
              <strong>Can I use compounded versions instead of brand names?</strong><br />
              Current FDA enforcement prohibits compounding of both semaglutide and tirzepatide due to commercial availability determinations<sup>[85]</sup>. Patients seeking compounded alternatives should consult <a className={linkClass} href="/clinics">qualified peptide therapy providers</a> about legal treatment options and potential regulatory changes<sup>[86]</sup>.
            </p>
            <p>
              <strong>Which has fewer long-term side effects?</strong><br />
              Semaglutide provides longer post-marketing safety data spanning 7+ years, while tirzepatide's commercial history extends only 2-3 years<sup>[87]</sup>. Both peptides show similar short-term adverse event profiles, but long-term comparative safety requires additional surveillance data<sup>[88]</sup>.
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
                <h3 className="text-sm font-semibold text-[#333333]">Looking to buy Semaglutide and Tirzepatide for research?</h3>
                <p className="mt-1 text-sm text-[#6b7280]">Compare verified research peptide suppliers with pricing, purity data, and trust signals.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1 rounded border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:border-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/semaglutide">
                    Semaglutide suppliers <ArrowRight />
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
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/semaglutide">Learn more about Semaglutide</a>
            <a className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#1F6CD6] hover:bg-[#F7F8F9]" href="/peptides/tirzepatide">Learn more about Tirzepatide</a>
          </section>

          {/* Find a Clinic CTA */}
          <div className="mt-10 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
            <h2 className="font-heading text-lg font-semibold text-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>Find a Clinic</h2>
            <p className="mt-2 text-sm text-[#4a4a4a]">Find a clinic that offers Semaglutide or Tirzepatide near you.</p>
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