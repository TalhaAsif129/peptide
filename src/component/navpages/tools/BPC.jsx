import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Check,
  AlertTriangle,
  Info,
  ExternalLink,
  ChevronDown,
  DollarSign,
  Bookmark,
  Bell,
  ClipboardList,
  Timer,
  Stethoscope,
  ShieldCheck,
  Tag,
  Calculator,
  ShieldAlert,
} from "lucide-react";

// ============================================================
//  SHARED
// ============================================================
const HF = { fontFamily: "var(--font-heading)" };

const LINK_CLS =
  "text-[#1F6CD6] underline decoration-[#1F6CD6]/30 underline-offset-2 transition-colors hover:text-[#1F6CD6] hover:decoration-[#1F6CD6]";

// ============================================================
//  DATA
// ============================================================
const PEPTIDE_FACTS = [
  ["Class", "Synthetic Peptide Fragment"],
  ["Amino Acids", "15 (pentadecapeptide)"],
  ["Origin", "Partial sequence isolated from human gastric juice"],
  [
    "FDA Status",
    "Not approved. Removed from Category 2 (Apr 2026); recommended for the 503A bulks list (Jul 2026), final FDA decision pending",
  ],
  [
    "Administration",
    "Subcutaneous injection (most common in research); oral studied in animal models",
  ],
  [
    "Typical Dose (Practitioner-Reported)",
    "Not established in human clinical trials; dosing derived from animal studies and practitioner reports only",
  ],
  [
    "Half-life",
    "Not established in humans — practitioner-reported, not confirmed in published clinical trials",
  ],
  [
    "Primary Research Areas",
    "Tendon & ligament repair, gut mucosal healing, musculoskeletal recovery",
  ],
  ["WADA Status", "Prohibited (S0, non-approved substances) since 2022"],
];

const DOSING_ROWS = [
  {
    parameter: "Reported dose range",
    sc: "200–500 mcg/day (practitioner-reported, no clinical trial data available)",
    oral: "500 mcg–1 mg/day (practitioner-reported, no clinical trial data available)",
    ia: "Not standardized (practitioner-reported, no clinical trial data available)",
  },
  {
    parameter: "Frequency",
    sc: "Once or twice daily (practitioner-reported, no clinical trial data available)",
    oral: "Once or twice daily (practitioner-reported, no clinical trial data available)",
    ia: "Single or repeat injection (practitioner-reported, no clinical trial data available)",
  },
  {
    parameter: "Evidence basis",
    sc: "Practitioner consensus",
    oral: "Animal studies; human bioavailability unconfirmed",
    ia: "Case series only",
  },
  {
    parameter: "Legal status (US)",
    sc: "Not approved; compounding pending FDA decision",
    oral: "Not approved; compounding pending FDA decision",
    ia: "Not approved; compounding pending FDA decision",
  },
];

const COMPARISON_ROWS = [
  {
    parameter: "Primary mechanism",
    bpc: "Tendon fibroblast activation, angiogenesis",
    tb: "Actin regulation, cell motility",
    ipa: "GHRP — growth hormone release",
  },
  {
    parameter: "Human clinical trials",
    bpc: "None completed",
    tb: "None completed",
    ipa: "Limited",
  },
  {
    parameter: "FDA status (US)",
    bpc: "Not approved; recommended for compounding (Jul 2026)",
    tb: "Not approved; recommended for compounding (Jul 2026)",
    ipa: "Not approved; off Category 2 since 2024",
  },
  {
    parameter: "Animal evidence quality",
    bpc: "Extensive",
    tb: "Moderate",
    ipa: "Moderate",
  },
  { parameter: "WADA status (2026)", bpc: "Prohibited", tb: "Prohibited", ipa: "Prohibited" },
];

const TELEHEALTH = [
  {
    name: "FrontCare",
    slug: "frontcare",
    score: "8.0",
    desc: "Flat pricing on compounded GLP-1s",
    price: "From $133/mo",
    visit: "async visit",
    url: "https://www.frontcare.com/peptides/?ref=ryan-2f8364",
    badge: null,
  },
  {
    name: "Peptide Therapy Rx",
    slug: "peptide-therapy-rx",
    score: "7.9",
    desc: "Best dedicated peptide-therapy telehealth",
    price: "From $199/mo",
    visit: "async visit",
    url: "https://peptidetherapyrx.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing",
    badge: null,
  },
  {
    name: "Midi Health",
    slug: "midi-health",
    score: "7.8",
    desc: "Best women's midlife hormone telehealth",
    price: null,
    visit: "video visit",
    url: "https://www.joinmidi.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing",
    badge: "Brand-name",
  },
  {
    name: "PeRx",
    slug: "perx-peptides",
    score: "7.8",
    desc: "Broadest dedicated peptide menu online",
    price: null,
    visit: "video visit",
    url: "https://www.perxpeptides.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing",
    badge: null,
  },
  {
    name: "Ways2Well",
    slug: "ways2well",
    score: "7.5",
    desc: "Bloodwork-driven hormone + peptide therapy",
    price: null,
    visit: "video visit",
    url: "https://ways2well.com/?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=telehealth_listing",
    badge: null,
  },
];

const RESEARCH_VENDORS = [
  {
    rank: 1,
    name: "Swiss Chems",
    topRated: true,
    price: null,
    code: "mpm10",
    discount: "10% off",
    features: [],
    url: "https://swisschems.is/product-category/peptides/?ref=joalkhsy",
    highlight: true,
  },
  {
    rank: 2,
    name: "Biolongevity Labs",
    topRated: true,
    price: "$99.97",
    code: "MPM",
    discount: "15% off",
    features: [],
    url: "https://go.biolongevitylabs.com/aff_c?offer_id=1&aff_id=2997&url_id=85&aff_sub=MPM",
    highlight: true,
  },
  {
    rank: 3,
    name: "Pinnacle Peptide Labs",
    topRated: true,
    price: "$49.99",
    code: null,
    discount: null,
    features: ["Third-party tested", "US-based"],
    url: "https://pinnaclepeptidelabs.com/product/bpc-157-10mg/aff/21/",
    highlight: true,
  },
  {
    rank: 4,
    name: "Eros Peptides",
    topRated: false,
    price: null,
    code: null,
    discount: null,
    features: [],
    url: "https://erospeptides.com/product-category/peptides?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=vendor_listing",
    highlight: false,
  },
  {
    rank: 5,
    name: "Evolve BioPep",
    topRated: false,
    price: null,
    code: null,
    discount: null,
    features: [],
    url: "https://www.evolvepeptides.com/product-category/peptides?utm_source=mypeptidematch&utm_medium=referral&utm_campaign=vendor_listing",
    highlight: false,
  },
];

const CLINICS = [
  {
    name: "Kultivate Women's Health",
    slug: "kultivate-women-s-health-beachwood-oh",
    city: "Beachwood",
    state: "OH",
    rating: 5,
    reviews: 14,
    tags: ["hybrid"],
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/kultivate-women-s-health-beachwood-oh.jpg",
  },
  {
    name: "Stronghold Health",
    slug: "stronghold-health-tallahassee-fl",
    city: "Tallahassee",
    state: "FL",
    rating: 5,
    reviews: 21,
    tags: [],
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/stronghold-health-tallahassee-fl.jpg",
  },
  {
    name: "Vital Testosterone Replacement Therapy Clinic",
    slug: "vital-testosterone-replacement-therapy-clinic-killeen-tx",
    city: "Killeen",
    state: "TX",
    rating: 5,
    reviews: 3,
    tags: ["in-person"],
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/vital-testosterone-replacement-therapy-clinic-killeen-tx.jpg",
  },
  {
    name: "Vital Testosterone Replacement Therapy Clinic",
    slug: "vital-testosterone-replacement-therapy-clinic-irving-tx",
    city: "Irving",
    state: "TX",
    rating: 5,
    reviews: 4,
    tags: ["in-person"],
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/vital-testosterone-replacement-therapy-clinic-irving-tx.jpg",
  },
  {
    name: "Maricopa Testosterone Peptide Therapy Clinic",
    slug: "maricopa-testosterone-peptide-therapy-clinic-maricopa-az",
    city: "Maricopa",
    state: "AZ",
    rating: 5,
    reviews: 3,
    tags: ["Free Consult", "in-person"],
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/maricopa-testosterone-peptide-therapy-clinic-maricopa-az.png",
  },
  {
    name: "Heal From Within Longevity & Peptide Wellness Center",
    slug: "heal-from-within-longevity-peptide-wellness-center-hillsdale-nj",
    city: "Hillsdale",
    state: "NJ",
    rating: 5,
    reviews: 12,
    tags: ["Telehealth", "HSA/FSA"],
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/clinic-images/heal-from-within-longevity-peptide-wellness-center-hillsdale-nj.jpg",
  },
];

const RELATED_BLOGS = [
  {
    title:
      "FDA Panel Votes 8–6 to Clear BPC-157, TB-500 & 4 Peptides for Compounding (July 2026)",
    slug: "fda-peptide-compounding-vote-july-2026",
    category: "News",
    categoryClass: "bg-rose-50 text-rose-700 border-rose-200",
    date: "Jul 25, 2026",
    excerpt:
      "The FDA's Pharmacy Compounding Advisory Committee voted 8–6 to recommend six popular peptides — including BPC-157 and TB-500 — for the 503A Bulk Drug Substances list. The vote is historic but non-binding: formal FDA rulemaking, which typically takes 8–12 months, must follow before compounding pharmacies have legal authority to prepare them. Here is a complete breakdown of the vote, what it means for access, and what happens next.",
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/blog-images/fda-peptide-compounding-vote-july-2026.webp",
  },
  {
    title: "How to Reconstitute BPC-157: Step-by-Step Mixing Guide (2026)",
    slug: "how-to-reconstitute-bpc-157",
    category: "How-To Guides",
    categoryClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
    date: "Jul 13, 2026",
    excerpt:
      "A detailed, clinician-informed guide to BPC-157 reconstitution — covering diluent selection, step-by-step mixing instructions, concentration math with worked examples, storage requirements, and common mistakes that destroy peptide potency.",
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/blog-images/how-to-reconstitute-bpc-157.webp",
  },
  {
    title: "How BPC-157 Works: Mechanism of Action Explained",
    slug: "bpc-157-mechanism-of-action",
    category: "Peptide Science",
    categoryClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    date: "Feb 17, 2026",
    excerpt:
      "Explore the mechanism of action of BPC-157, a synthetic fragment known for its tissue repair capabilities. Learn about its molecular pathways, pharmacokinetics, and clinical research.",
    img: "https://jwchvngzvwbtirpreubk.supabase.co/storage/v1/object/public/blog-images/bpc-157-mechanism-of-action.webp",
  },
];

const REFERENCES = [
  <>
    Pevec D, et al. "Multifunctionality and Possible Medical Application of the BPC 157
    Peptide-Literature and Patent Review." <em>Pharmaceuticals (Basel)</em>. 2025. PMID: 40005999
  </>,
  <>
    Deng M, et al. "The promoting effect of{" "}
    <a href="/peptides/pentadecapeptide" className={LINK_CLS}>
      pentadecapeptide
    </a>{" "}
    BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell
    migration." <em>Journal of Applied Physiology</em>. 2011;110(3):762-772. PMID: 21030672
  </>,
  <>
    Chang CH, et al. "Gastric pentadecapeptide body protection compound BPC 157 and its
    role in accelerating musculoskeletal soft tissue healing." <em>Cell and Tissue Research</em>.
    2019;377(2):153-159. PMID: 30915550
  </>,
  <>
    Gwyer D, et al. "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing."{" "}
    <em>Frontiers in Pharmacology</em>. 2021;12:627533. PMID: 34267654
  </>,
  <>
    Sikiric P, et al. "Intra-Articular Injection of BPC 157 for Multiple Types of Knee
    Pain." <em>Alternative Therapies in Health and Medicine</em>. 2021. PMID: 34324435
  </>,
];

const TOC = [
  { id: "what-is-bpc-157", label: "What Is BPC-157?", level: 1 },
  {
    id: "what-makes-bpc-157-different-from-other-recovery-peptides",
    label: "What Makes BPC-157 Different From Other Recovery Peptides?",
    level: 1,
  },
  { id: "how-does-bpc-157-work", label: "How Does BPC-157 Work?", level: 1 },
  {
    id: "what-the-clinical-evidence-actually-shows",
    label: "What the Clinical Evidence Actually Shows",
    level: 1,
  },
  { id: "what-we-dont-know-yet", label: "What We Don't Know Yet", level: 2 },
  {
    id: "side-effects-what-to-actually-expect",
    label: "Side Effects — What to Actually Expect",
    level: 1,
  },
  { id: "regulatory-access-status", label: "Regulatory & Access Status", level: 1 },
  { id: "sourcing-safety", label: "Sourcing & Safety", level: 1 },
  {
    id: "typical-dosing-practitioner-community-ranges",
    label: "Typical Dosing — Practitioner & Community Ranges",
    level: 1,
  },
  {
    id: "what-the-evidence-does-not-show",
    label: "What the Evidence Does Not Show",
    level: 1,
  },
  { id: "faq", label: "FAQ", level: 1 },
  {
    id: "related-peptides-comparisons",
    label: "Related Peptides & Comparisons",
    level: 1,
  },
  { id: "references", label: "References", level: 1 },
];

// ============================================================
//  SCHEMA
// ============================================================
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Peptide Encyclopedia",
      item: {
        "@id": "https://www.mypeptidematch.com/peptides",
        name: "Peptide Encyclopedia",
      },
    },
    { "@type": "ListItem", position: 3, name: "BPC-157" },
  ],
};

const drugSchema = {
  "@context": "https://schema.org",
  "@type": "Drug",
  name: "BPC-157",
  url: "https://www.mypeptidematch.com/peptides/bpc-157",
  description: "Synthetic Fragment",
  medicineSystem: "WesternConventional",
  relevantSpecialty: {
    "@type": "MedicalSpecialty",
    "@id": "https://schema.org/Endocrine",
  },
  legalStatus: "Research Only",
};

const medicalPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "BPC-157 — Peptide Encyclopedia",
  url: "https://www.mypeptidematch.com/peptides/bpc-157",
  description:
    "Research peptide for tissue repair and gut health. FDA advisers backed compounding in July 2026.",
  dateModified: "2026-09-28T21:08:42.452764+00:00",
  lastReviewed: "2026-09",
  author: {
    "@type": "Organization",
    name: "MyPeptideMatch Editorial Team",
    url: "https://www.mypeptidematch.com",
  },
  reviewedBy: {
    "@type": "Organization",
    name: "MyPeptideMatch Editorial Team",
    url: "https://www.mypeptidematch.com",
  },
  publisher: {
    "@type": "Organization",
    name: "MyPeptideMatch.com",
    url: "https://www.mypeptidematch.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mypeptidematch.com/pcl-logo.svg",
    },
  },
  specialty: { "@type": "MedicalSpecialty", name: "Endocrinology" },
  about: {
    "@type": "Drug",
    name: "BPC-157",
    url: "https://www.mypeptidematch.com/peptides/bpc-157",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BPC-157 used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BPC-157 is a synthetic 15-amino-acid peptide studied in animal models for tissue repair, tendon healing, gut health, and musculoskeletal recovery. No human clinical trials have been completed. It has no FDA-approved medical use.",
      },
    },
    {
      "@type": "Question",
      name: "Is BPC-157 FDA approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BPC-157 has no FDA-approved indication. The FDA placed it in Category 2 in 2023 and removed it in April 2026, and in July 2026 an FDA advisory committee voted 8–6 to recommend adding it to the 503A bulks list. That vote is non-binding: until the FDA finishes rulemaking, US compounding pharmacies still have no clear legal authority to prepare it.",
      },
    },
    {
      "@type": "Question",
      name: "What are the side effects of BPC-157?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Human safety data is limited because no completed clinical trials exist. Animal studies report few adverse effects. Nausea, dizziness, and injection site reactions have been reported anecdotally. Long-term safety in humans is unknown.",
      },
    },
    {
      "@type": "Question",
      name: "What dose of BPC-157 is used in research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Animal studies have used doses roughly equivalent to 1–10 mcg/kg. No human clinical trial has established a validated dose. Practitioner-reported ranges of 200–500 mcg per day are circulated, but these are not derived from clinical trial data.",
      },
    },
    {
      "@type": "Question",
      name: "Was BPC-157 banned by WADA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WADA added BPC-157 to its Prohibited List in 2022 under S0 (non-approved substances), and it remains prohibited in and out of competition. Athletes subject to anti-doping rules can test positive for it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy BPC-157 online legally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BPC-157 is in a narrow legal window in 2026. It was removed from the FDA's Category 2 restricted list but is not yet on the 503A Bulks List. A small number of US telehealth clinics still prescribe it through 503A compounding pharmacies under individual physician orders.",
      },
    },
    {
      "@type": "Question",
      name: "How much does BPC-157 cost from a telehealth clinic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Telehealth BPC-157 programs start around $133/month, with final cost depending on the medication and plan chosen during your consultation. Lab work and shipping may be billed separately. See the prescriber list above for transparent, per-clinic pricing.",
      },
    },
    {
      "@type": "Question",
      name: "What's the safest way to get BPC-157?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'The safest legal path is a licensed US telehealth clinic that uses 503A/503B compounding pharmacies (or, when available, FDA-approved brand-name product). Avoid "research peptide" sellers that ship products labeled "not for human use" — they sit outside the legal supply chain and carry purity, dosing, and regulatory risk.',
      },
    },
  ],
};

// ============================================================
//  CALLOUT COMPONENTS
// ============================================================
const Callout = ({ tone = "amber", icon: Icon, title, children }) => {
  const tones = {
    amber: {
      wrap: "border-amber-400 bg-amber-50/70",
      icon: "text-amber-500",
      title: "text-amber-800",
    },
    blue: {
      wrap: "border-blue-400 bg-blue-50/70",
      icon: "text-blue-500",
      title: "text-blue-800",
    },
    emerald: {
      wrap: "border-emerald-200 bg-emerald-50/60",
      icon: "text-emerald-600",
      title: "text-emerald-800",
    },
  }[tone];

  return (
    <div className={`my-6 rounded-xl border-l-4 p-5 ${tones.wrap}`}>
      <div className="flex items-start gap-3">
        {Icon && <Icon className={`h-5 w-5 shrink-0 ${tones.icon}`} />}
        <div className="min-w-0">
          {title && (
            <p className={`mb-1.5 text-sm font-bold ${tones.title}`}>{title}</p>
          )}
          <div className="text-[0.9375rem] leading-relaxed text-[#4a4a4a]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ id, level = 2, children }) => {
  const cls =
    level === 2
      ? "text-xl sm:text-2xl font-bold tracking-tight text-[#333333]"
      : "text-lg sm:text-xl font-semibold tracking-tight text-[#333333]";
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <Tag id={id} className={`scroll-mt-24 ${cls}`} style={HF}>
      {children}
    </Tag>
  );
};

// ============================================================
//  CALCULATOR
// ============================================================
const SYRINGE_OPTIONS = [
  { label: "0.3 ml", ml: 0.3, units: 30 },
  { label: "0.5 ml", ml: 0.5, units: 50 },
  { label: "1.0 ml", ml: 1.0, units: 100 },
];

const DOSE_OPTIONS = [50, 100, 250, 500];

const BPCDosageCalculator = () => {
  const [syringe, setSyringe] = useState(SYRINGE_OPTIONS[0]);
  const [vialMg, setVialMg] = useState(5);
  const [bacMl, setBacMl] = useState(2);
  const [doseMcg, setDoseMcg] = useState(50);
  const [expanded, setExpanded] = useState(null); // for mobile accordion

  // math
  const concentration = vialMg / bacMl; // mg/ml
  const volumePerDose = doseMcg / 1000 / concentration; // ml
  const unitsToPull =
    concentration > 0 ? (volumePerDose / syringe.ml) * syringe.units : 0;
  const dosesPerVial = doseMcg > 0 ? (vialMg * 1000) / doseMcg : 0;
  const unitsPercent = (unitsToPull / syringe.units) * 100;

  const toggle = (k) => setExpanded((prev) => (prev === k ? null : k));

  const PillBtn = ({ active, onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
        active
          ? "border-[#0B7C84] bg-[#0B7C84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
          : "border-[#e5e7eb] bg-white text-[#333333] hover:border-[#0B7C84] hover:bg-[#E6F4F5]"
      }`}
    >
      {children}
    </button>
  );

  const sections = [
    {
      key: "syringe",
      label: "Syringe Size",
      helper: "What is the total volume of your syringe?",
      content: (
        <div className="grid grid-cols-3 gap-2">
          {SYRINGE_OPTIONS.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setSyringe(opt)}
              className={`rounded-xl border px-3 py-2.5 text-center text-sm font-semibold transition-colors ${
                syringe.label === opt.label
                  ? "border-[#0B7C84] bg-[#0B7C84] text-white"
                  : "border-[#e5e7eb] bg-white text-[#333333] hover:border-[#0B7C84] hover:bg-[#E6F4F5]"
              }`}
            >
              {opt.label}
              <span
                className={`mt-0.5 block text-xs font-normal ${
                  syringe.label === opt.label ? "text-white/80" : "text-[#6b7280]"
                }`}
              >
                {opt.units} units
              </span>
            </button>
          ))}
        </div>
      ),
    },
    {
      key: "vial",
      label: "Peptide Vial",
      helper: "How many milligrams are in your peptide vial?",
      content: (
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {[5, 10, 15].map((mg) => (
            <PillBtn key={mg} active={vialMg === mg} onClick={() => setVialMg(mg)}>
              {mg} mg
            </PillBtn>
          ))}
        </div>
      ),
    },
    {
      key: "bac",
      label: "Bacteriostatic (BAC) Water",
      helper: "How much bacteriostatic water are you adding?",
      content: (
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {[1, 2, 3, 5].map((ml) => (
            <PillBtn key={ml} active={bacMl === ml} onClick={() => setBacMl(ml)}>
              {ml} ml
            </PillBtn>
          ))}
        </div>
      ),
    },
    {
      key: "dose",
      label: "Dose Per Injection",
      helper: "How much peptide do you want per dose?",
      content: (
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {DOSE_OPTIONS.map((mcg) => (
            <PillBtn
              key={mcg}
              active={doseMcg === mcg}
              onClick={() => setDoseMcg(mcg)}
            >
              {mcg} mcg
            </PillBtn>
          ))}
        </div>
      ),
    },
  ];

  // generate tick marks (0..units)
  const ticks = [];
  const total = syringe.units;
  for (let i = 0; i <= total; i++) {
    const major = i % (total / 6) === 0 || i === total;
    ticks.push({ i, major, pct: (i / total) * 100 });
  }

  return (
    <section
      id="calculator"
      className="mt-10 scroll-mt-24 rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-6"
      aria-label="BPC-157 dosage calculator"
    >
      <h2 className="text-lg font-bold text-[#333333]" style={HF}>
        BPC-157 Dosage Calculator
      </h2>
      <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-[#6b7280]">
        This free peptide calculator shows the exact insulin-syringe units to
        draw for BPC-157. Enter your vial size, bacteriostatic water and target
        dose — it's pre-loaded with common BPC-157 reconstitution defaults, so
        you can adjust any field to match your own vial.
      </p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-[#e5e7eb]">
        {/* Header */}
        <div className="border-b border-[#e5e7eb] bg-[#E6F4F5] p-4 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div>
              <p className="text-sm font-semibold text-[#333333]">
                Preset: BPC-157
              </p>
              <p className="mt-0.5 text-xs text-[#4a4a4a]">
                Vial and BAC water defaults are prefilled. Choose your dose
                below.
              </p>
            </div>
            <a
              href="/peptides/bpc-157"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B7C84] hover:underline"
            >
              View BPC-157 dosing guide →
            </a>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="space-y-3 p-4 lg:hidden">
          {sections.map((s) => (
            <div key={s.key} className="rounded-2xl border border-[#e5e7eb] bg-white">
              <button
                type="button"
                onClick={() => toggle(s.key)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#333333]">{s.label}</p>
                  <p className="mt-0.5 text-xs text-[#6b7280]">{s.helper}</p>
                </div>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#0B7C84] transition-transform ${
                    expanded === s.key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded === s.key && (
                <div className="border-t border-[#e5e7eb] px-4 py-4">{s.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop two-column */}
        <div className="hidden lg:flex lg:flex-row">
          <div className="border-b border-[#e5e7eb] bg-[#F7F8F9] p-6 sm:p-8 lg:w-[45%] lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0B7C84]">
              Step 1 — Syringe
            </p>
            <p className="mt-1 text-base font-semibold text-[#333333]">
              What is the total volume of your syringe?
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {SYRINGE_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setSyringe(opt)}
                  className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all ${
                    syringe.label === opt.label
                      ? "border-[#0B7C84] bg-[#E6F4F5] shadow-[rgba(11,124,132,0.15)_0px_2px_10px]"
                      : "border-[#e5e7eb] bg-white"
                  }`}
                >
                  <span
                    className={`shrink-0 text-base font-bold ${
                      syringe.label === opt.label
                        ? "text-[#0B7C84]"
                        : "text-[#333333]"
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-[#6b7280]">
                    {opt.units} units
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-7 p-6 sm:p-8">
            {sections.slice(1).map((s) => (
              <div key={s.key} className="space-y-3">
                <p className="text-sm font-semibold text-[#333333]">{s.helper}</p>
                <div>{s.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="border-t border-[#e5e7eb] bg-gradient-to-b from-[#E6F4F5] to-[#F7F8F9] p-3 sm:p-7">
          <div className="space-y-5">
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm sm:p-6">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0B7C84]">
                Your Dose
              </span>
              <p className="mt-2 text-sm text-[#4a4a4a]">
                To get a dose of{" "}
                <span className="font-semibold text-[#333333]">{doseMcg} mcg</span>,
                pull the syringe to:
              </p>
              <p className="mt-2 flex items-baseline gap-2">
                <span
                  className="text-4xl font-extrabold tracking-tight text-[#0B7C84] sm:text-5xl"
                  style={HF}
                >
                  {unitsToPull.toFixed(unitsToPull % 1 === 0 ? 0 : 1)}
                </span>
                <span className="text-base font-bold uppercase tracking-wider text-[#6b7280]">
                  units
                </span>
              </p>

              {/* Tick ruler */}
              <div className="mt-5 overflow-x-auto">
                <div className="min-w-[320px] px-2 pb-2">
                  <div className="relative mx-auto h-9 overflow-hidden rounded-lg bg-white ring-1 ring-inset ring-[#e5e7eb]">
                    <div
                      className="absolute inset-y-0 left-0 rounded-l-lg bg-[#0B7C84] opacity-90 transition-all duration-300"
                      style={{ width: `${Math.min(unitsPercent, 100)}%` }}
                    />
                    <div
                      className="absolute top-0 h-full w-0.5 -translate-x-1/2 bg-[#0B7C84] transition-all duration-300"
                      style={{ left: `${Math.min(unitsPercent, 100)}%` }}
                    />
                  </div>
                  <div className="relative mt-0 h-10">
                    {ticks.map((t) => (
                      <div
                        key={t.i}
                        className="absolute flex flex-col items-center"
                        style={{ left: `${t.pct}%`, transform: "translateX(-50%)" }}
                      >
                        <div
                          className={t.major ? "h-3 w-[1.5px]" : "h-2 w-px"}
                          style={{ background: "#4a4a4a" }}
                        />
                        {t.major && (
                          <span className="mt-0.5 text-[11px] font-medium text-[#6b7280]">
                            {t.i}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
              <div className="min-w-0 px-2 py-4 text-center sm:px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#6b7280] sm:text-[11px]">
                  Concentration
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#333333] sm:text-base">
                  {concentration.toFixed(2)} mg/ml
                </p>
              </div>
              <div className="min-w-0 border-l border-[#e5e7eb] px-2 py-4 text-center sm:px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#6b7280] sm:text-[11px]">
                  Volume
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#333333] sm:text-base">
                  {volumePerDose.toFixed(3)} ml
                </p>
              </div>
              <div className="min-w-0 border-l border-[#e5e7eb] px-2 py-4 text-center sm:px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#6b7280] sm:text-[11px]">
                  Doses / Vial
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#333333] sm:text-base">
                  {Math.floor(dosesPerVial)}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#0B7C84] bg-white px-4 py-2 text-sm font-semibold text-[#0B7C84] transition-all hover:scale-[1.02]"
            >
              <DollarSign className="h-4 w-4" /> Calculate cost per dose
            </button>

            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xl font-extrabold leading-tight text-[#333333] sm:text-2xl" style={HF}>
                    Keep this dose — track every injection free
                  </p>
                  <p className="mt-1.5 text-sm text-[#6b7280]">
                    Save this calculation to your free tracker. Calculators stay
                    anonymous — sign in only to save.
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {[
                      { Icon: Bell, label: "Dose reminders" },
                      { Icon: ClipboardList, label: "Injection logging" },
                      { Icon: Timer, label: "Vial countdown" },
                    ].map(({ Icon, label }) => (
                      <li
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F4F5] px-3 py-1.5 text-xs font-semibold text-[#0B7C84]"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0B7C84] px-7 py-3 text-base font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#0a6b72] sm:w-auto"
                >
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save to my tracker
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
//  MAIN COMPONENT
// ============================================================
const BPC = () => {
  const [progress, setProgress] = useState(0);

  // reading progress
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="main-content" className="flex-1 w-full">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drugSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Reading progress */}
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-[#1F6CD6]"
        style={{
          width: `${progress}%`,
          opacity: progress > 0 ? 1 : 0,
          transition: "width 0.1s linear, opacity 0.3s ease",
        }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* ============ HERO ============ */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.04),transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="pb-10 pt-10 sm:pb-14 sm:pt-12">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm"
            >
              <span className="inline-flex shrink-0 items-center gap-1">
                <a
                  href="/"
                  className="truncate max-w-[120px] text-white/60 transition-colors hover:text-white sm:max-w-none"
                >
                  Home
                </a>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1">
                <ChevronRight className="h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="/peptides"
                  className="truncate max-w-[120px] text-white/60 transition-colors hover:text-white sm:max-w-none"
                >
                  Peptide Encyclopedia
                </a>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1">
                <ChevronRight className="h-4 w-4 shrink-0 text-white/40" />
                <span className="font-medium text-white/40 truncate max-w-[140px] sm:max-w-none">
                  BPC-157
                </span>
              </span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h1
                className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]"
                style={HF}
              >
                BPC-157
              </h1>
              <span className="inline-flex items-center gap-1.5 rounded-[6px] border border-amber-300/40 bg-amber-200/20 px-2.5 py-1 text-sm font-medium text-amber-100">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Research Only
              </span>
            </div>
            <p className="mt-2 text-lg text-white/70">Synthetic Fragment</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Tissue Repair", "Recovery"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 py-3 text-xs text-[#6b7280]">
            <span>Last reviewed September 2026</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-[#333333]">MyPeptideMatch Team</span>
          </div>
        </div>
      </section>

      {/* ============ BODY ============ */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-3 sm:py-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div className="min-w-0">
              <article className="prose-bpc max-w-none text-sm sm:text-base leading-relaxed text-[#4a4a4a]">
                {/* ---- WHAT IS ---- */}
                <SectionHeading id="what-is-bpc-157">What Is BPC-157?</SectionHeading>
                <p className="mt-3">
                  BPC-157 is a 15-amino-acid synthetic peptide derived from a protein
                  sequence found in human gastric juice. Its full name — Body
                  Protection Compound — comes from that origin. Researchers have
                  been studying it since the early 1990s, and the preclinical data
                  on{" "}
                  <a href="/treatment/tissue-repair-recovery" className={LINK_CLS}>
                    tissue repair
                  </a>
                  , tendon healing, and gut protection is genuinely interesting. The
                  problem is that almost all of it comes from rodent studies. No
                  completed, peer-reviewed human clinical trial has been published.
                </p>
                <p className="mt-3">
                  That gap between preclinical promise and clinical evidence matters
                  a lot, because it is exactly what the FDA is weighing. BPC-157 sat
                  in the FDA's Category 2 from 2023 until April 2026, and in July 2026
                  an FDA advisory committee voted 8–6 to recommend it for compounding
                  — against FDA staff advice. That recommendation is not yet a rule,
                  so if you've seen it offered by a US telehealth clinic or peptide
                  vendor, it is still not an authorized compounded drug.
                </p>
                <p className="mt-3">
                  Here's what you'll find on this page: an honest breakdown of what
                  the animal research actually shows, what we genuinely don't know
                  about human use, and what the regulatory situation means for you
                  practically.
                </p>

                {/* Key takeaways */}
                <Callout tone="emerald" icon={ShieldCheck} title="Key Takeaways">
                  <ul className="mt-3 space-y-3">
                    {[
                      "BPC-157 is a synthetic 15-amino-acid peptide with significant preclinical evidence for tissue repair and gut healing — but no completed human clinical trials.",
                      "The FDA removed it from Category 2 in April 2026, and advisers recommended it for compounding in July 2026 — but until the FDA completes rulemaking, it is not an authorized compounded drug in the United States.",
                      <>
                        Animal studies show accelerated tendon healing, improved gut
                        mucosal{" "}
                        <a href="/treatment/tissue-repair-recovery" className={LINK_CLS}>
                          recovery
                        </a>
                        , and possible CNS effects, but translating rodent data to
                        humans is never straightforward.
                      </>,
                      "Human safety data is essentially absent — side effect profiles come from animal studies and anecdotal reports, not controlled trials.",
                      "WADA has prohibited it in sport since 2022 (S0, non-approved substances).",
                    ].map((t, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Callout>

                {/* Peptide facts table */}
                <div className="my-8 overflow-hidden overflow-x-auto rounded-2xl border border-[#e5e7eb] shadow-sm">
                  <table className="w-full min-w-[320px] text-sm">
                    <tbody className="divide-y divide-[#F7F8F9]">
                      {PEPTIDE_FACTS.map(([k, v]) => (
                        <tr key={k} className="even:bg-[#F7F8F9]/50 hover:bg-[#F7F8F9]">
                          <td className="px-3 py-2.5 font-semibold text-[#4a4a4a] sm:px-5 sm:py-3">
                            {k}
                          </td>
                          <td className="px-3 py-2.5 text-[#4a4a4a] sm:px-5 sm:py-3">
                            {v}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Callout
                  tone="amber"
                  icon={AlertTriangle}
                  title="Legal status in the United States — read this first"
                >
                  <p>
                    BPC-157 is not an FDA-approved drug. The FDA removed it from
                    Category 2 in April 2026, and on July 23, 2026 its Pharmacy
                    Compounding Advisory Committee voted 8–6 to recommend adding it
                    to the 503A bulks list. Neither step authorizes compounding on
                    its own: the FDA must still complete notice-and-comment
                    rulemaking, typically 8–12 months. Until then, US access mostly
                    means unregulated sources — with all the quality and safety risks
                    that entails.{" "}
                    <a
                      href="/blog/fda-peptide-compounding-vote-july-2026"
                      className={LINK_CLS}
                    >
                      Read our coverage of the July 2026 vote
                    </a>
                    .
                  </p>
                </Callout>

                {/* ---- WHAT MAKES IT DIFFERENT ---- */}
                <SectionHeading id="what-makes-bpc-157-different-from-other-recovery-peptides">
                  What Makes BPC-157 Different From Other Recovery Peptides?
                </SectionHeading>
                <p className="mt-3">
                  Most peptides used for tissue repair target a single pathway —
                  growth hormone secretagogues push IGF-1, for example, or{" "}
                  <a href="/peptides/tb-500" className={LINK_CLS}>
                    TB-500
                  </a>{" "}
                  (thymosin beta-4) works primarily through actin regulation. BPC-157
                  appears to work through several mechanisms simultaneously, which
                  is part of why it's generated so much research interest.<sup>[1]</sup>
                </p>
                <p className="mt-3">
                  The other thing that makes it unusual is its source. It's not a
                  synthetic molecule designed from scratch — it's derived from a
                  protein naturally present in human gastric juice, which researchers
                  believe contributes to the stomach's remarkable ability to resist
                  its own acid and heal rapidly from injury.<sup>[1]</sup> That
                  origin story is part of why early researchers thought it might
                  have systemic protective properties beyond just the gut.
                </p>

                <Callout
                  tone="blue"
                  icon={Info}
                  title="What the preclinical research has actually tested"
                >
                  <p>
                    Animal studies on BPC-157 have covered a wide range of
                    applications: Achilles tendon transection, rotator cuff injuries,
                    ligament tears, inflammatory bowel disease models, bone healing,
                    and even neurological injury models. The breadth of that
                    preclinical work is genuinely unusual for a peptide that has
                    never completed a human trial.
                  </p>
                </Callout>

                {/* ---- HOW IT WORKS ---- */}
                <SectionHeading id="how-does-bpc-157-work">
                  How Does BPC-157 Work?
                </SectionHeading>
                <p className="mt-3">
                  The honest answer is that the complete mechanism isn't fully
                  established, even after decades of animal research. What the
                  literature describes is a peptide that appears to influence
                  multiple overlapping repair pathways rather than hitting one target
                  cleanly.<sup>[1]</sup>
                </p>
                <p className="mt-3">
                  The most well-documented effect involves tendon and connective
                  tissue healing. A 2011 study in the{" "}
                  <em>Journal of Applied Physiology</em> showed that BPC-157
                  significantly accelerated outgrowth of tendon fibroblasts from
                  explant cultures, enhanced cell survival under stress conditions,
                  and promoted cell migration — three of the key cellular processes
                  required for tendon repair after injury.<sup>[2]</sup> The
                  researchers found that BPC-157 appeared to activate the
                  FAK-paxillin pathway, which plays a role in how cells sense and
                  respond to their mechanical environment. That's a specific,
                  plausible mechanism — not just "it helps healing" as a black box.
                </p>
                <p className="mt-3">
                  On the gut side, the connection to gastric juice origin matters.
                  BPC-157 has been shown in animal models to protect the gastric
                  mucosa and accelerate healing of intestinal wounds, likely through
                  effects on nitric oxide signaling and angiogenesis (the formation
                  of new blood vessels).<sup>[1]</sup> Angiogenesis is central to
                  wound healing everywhere in the body, not just the gut — new blood
                  vessel formation delivers oxygen and nutrients to damaged tissue.
                  That's probably why researchers see effects across such varied
                  tissue types.
                </p>
                <p className="mt-3">
                  The CNS effects reported in some animal models are less
                  well-characterized mechanistically. They exist in the literature,
                  but the pathway from peptide to neurological outcome is not
                  clearly mapped.<sup>[1]</sup>
                </p>

                {/* ---- CLINICAL EVIDENCE ---- */}
                <SectionHeading id="what-the-clinical-evidence-actually-shows">
                  What the Clinical Evidence Actually Shows
                </SectionHeading>
                <p className="mt-3">
                  This is where you need to be clear-eyed. The preclinical evidence
                  for BPC-157 is genuinely extensive — there are hundreds of animal
                  studies spanning multiple tissue types and injury models, and the
                  pattern of results is consistent enough to be
                  interesting.<sup>[1]</sup>
                  <sup>[2]</sup>
                  <sup>[3]</sup> A 2019 review in{" "}
                  <em>Cell and Tissue Research</em> specifically focused on
                  musculoskeletal soft tissue healing and found that BPC-157
                  consistently accelerated healing in rodent models of tendon,
                  ligament, and muscle injury.<sup>[2]</sup>
                </p>
                <p className="mt-3">
                  A 2021 case series published in{" "}
                  <em>Alternative Therapies in Health and Medicine</em> described
                  intra-articular injection of BPC-157 combined with thymosin beta-4
                  for various types of knee pain, including osteoarthritis and
                  tendinosis.<sup>[4]</sup> This is the closest thing to human
                  clinical data currently available — and it's a case series, not a
                  controlled trial. Case series can't establish causation, can't
                  control for placebo effect, and can't tell you what dose is
                  actually doing the work. They're hypothesis-generating, not
                  evidence of efficacy.
                </p>
                <p className="mt-3">
                  A 2025 review in <em>Pharmaceuticals</em> summarized the full body
                  of BPC-157 literature and patents, describing it as having
                  "pleiotropic beneficial effects" across preclinical models — while
                  also noting that its path to clinical translation remains
                  incomplete.<sup>[1]</sup>
                </p>
                <p className="mt-3">
                  The consistent finding across the animal literature is that BPC-157
                  accelerates healing timelines and reduces the severity of
                  injury-induced damage. Whether that translates to humans at any
                  particular dose is genuinely unknown.
                </p>

                <SectionHeading id="what-we-dont-know-yet" level={3}>
                  What We Don't Know Yet
                </SectionHeading>
                <ul className="mt-3 list-disc space-y-2 pl-5 sm:pl-6">
                  <li>
                    <strong>Human efficacy data</strong> — Every efficacy claim for
                    BPC-157 comes from animal models or case reports. No randomized
                    controlled trial in humans has been completed and published. The
                    gap between rodent pharmacology and human outcomes is real and
                    often humbling.
                  </li>
                  <li>
                    <strong>Optimal dose in humans</strong> — Animal studies use
                    weight-based dosing in controlled conditions. The
                    practitioner-reported ranges circulating online (200–500 mcg/day)
                    are not derived from any clinical trial. Nobody knows what the
                    right human dose is.
                  </li>
                  <li>
                    <strong>Long-term safety</strong> — Animal studies report a
                    favorable short-term safety profile, but long-term human data
                    doesn't exist. "Few side effects in rodents over 4 weeks" is not
                    a safety clearance for years of human use.
                  </li>
                  <li>
                    <strong>Oral vs. injectable bioavailability in humans</strong> —
                    Some animal studies used oral administration with apparent
                    effect, which would make BPC-157 unusual among peptides. Whether
                    oral bioavailability holds in humans is practitioner-reported,
                    not confirmed in published clinical trials.
                  </li>
                  <li>
                    <strong>Mechanism clarity</strong> — The multi-pathway activity
                    is interesting but also means the mechanism isn't cleanly
                    understood. Drugs with poorly characterized mechanisms carry
                    more uncertainty about off-target effects.
                  </li>
                  <li>
                    <strong>Interaction with existing conditions</strong> — No data
                    exists on how BPC-157 interacts with common medications,
                    autoimmune conditions, or cancer history. Angiogenic peptides in
                    particular warrant caution in anyone with a history of
                    malignancy.
                  </li>
                </ul>

                {/* ---- SIDE EFFECTS ---- */}
                <SectionHeading id="side-effects-what-to-actually-expect">
                  Side Effects — What to Actually Expect
                </SectionHeading>
                <p className="mt-3">
                  <strong>What animal studies report:</strong>
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                  <li>
                    <strong>Minimal systemic toxicity</strong> — Rodent studies
                    consistently report few adverse effects at therapeutic doses,
                    which is part of why BPC-157 attracted research
                    interest.<sup>[1]</sup> This is real data, but it's animal data.
                  </li>
                  <li>
                    <strong>Injection site reactions</strong> — Mild local reactions
                    at the injection site are the most commonly reported finding in
                    animal models and anecdotal human reports.
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>
                    What anecdotal human reports describe (not clinical trial data):
                  </strong>
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                  <li>
                    <strong>Nausea and dizziness</strong> — Reported by some users,
                    particularly at higher doses. Frequency and severity are unknown
                    because no controlled trial has measured them.
                  </li>
                  <li>
                    <strong>Vivid dreams</strong> — Anecdotally reported; no
                    mechanistic explanation established.
                  </li>
                  <li>
                    <strong>Transient fatigue</strong> — Reported in some accounts,
                    particularly early in use.
                  </li>
                </ul>
                <p className="mt-3">
                  The honest framing here: we don't have a real side effect profile
                  for humans. What you'll find online is a mix of animal study
                  findings and community self-reporting, and those are very different
                  types of data. If you're considering BPC-157 and have a history of
                  cancer, autoimmune disease, or are taking immunosuppressants, the
                  absence of safety data is a serious concern — not a technicality.
                </p>
                <p className="mt-3">
                  If you experience significant nausea, unusual swelling, or any
                  systemic reaction after injection, stop use and contact a
                  physician. Don't wait to see if it resolves.
                </p>

                {/* ---- REGULATORY ---- */}
                <SectionHeading id="regulatory-access-status">
                  Regulatory &amp; Access Status
                </SectionHeading>
                <Callout
                  tone="amber"
                  icon={AlertTriangle}
                  title="Recommended for compounding — not yet authorized"
                >
                  <p>
                    BPC-157 is not FDA-approved. After being removed from Category 2
                    in April 2026, it was recommended for the 503A bulks list by the
                    FDA's Pharmacy Compounding Advisory Committee on July 23, 2026,
                    in an 8–6 vote against FDA staff advice. The recommendation is
                    non-binding. Until the FDA completes rulemaking, US compounding
                    pharmacies have no unambiguous authority to prepare it. Patients
                    and providers should consult FDA.gov for the final decision.
                  </p>
                </Callout>
                <p className="mt-3">
                  That history runs through the FDA's 503A compounding framework,
                  which evaluates bulk drug substances for use in compounded
                  preparations. In September 2023 the FDA placed BPC-157 in
                  "Category 2" — substances that raise significant safety concerns —
                  and in April 2026 it removed BPC-157, along with eleven other
                  peptides, from that category. Removal is not approval: a peptide
                  becomes compoundable only once it is added to the 503A bulks list.{" "}
                  <a
                    href="/blog/fda-peptide-compounding-vote-july-2026"
                    className={LINK_CLS}
                  >
                    Our coverage of the July 2026 vote
                  </a>{" "}
                  explains what happens next.
                </p>
                <p className="mt-3">
                  On the WADA side: BPC-157 was added to the WADA Prohibited List in
                  2022 under S0 (non-approved substances) and remains prohibited.
                  Athletes subject to anti-doping rules should treat it as a banned
                  substance — the consequences of getting this wrong are significant.
                </p>

                {/* ---- SOURCING & SAFETY ---- */}
                <SectionHeading id="sourcing-safety">
                  Sourcing &amp; Safety
                </SectionHeading>
                <p className="mt-3">
                  BPC-157 is widely available from overseas research chemical
                  vendors and some international compounding sources. That's the
                  reality. If you're reading this page, there's a reasonable chance
                  you're trying to figure out whether what you've found is
                  legitimate. Here's what actually matters:
                </p>
                <p className="mt-3">
                  <strong>What to look for:</strong>
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                  <li>
                    <strong>Third-party Certificate of Analysis (COA)</strong> —
                    Must be from an independent laboratory, not the vendor's own
                    testing. Look for the lab name, date, and a purity figure above
                    98% on HPLC analysis.
                  </li>
                  <li>
                    <strong>Mass spectrometry confirmation</strong> — HPLC confirms
                    purity; mass spec confirms the peptide is actually what it claims
                    to be. Both together are the minimum standard.
                  </li>
                  <li>
                    <strong>Lyophilized (freeze-dried) powder</strong> — This is the
                    stable form. Pre-mixed solutions are a red flag for quality and
                    sterility.
                  </li>
                  <li>
                    <strong>Bacteriostatic water for reconstitution</strong> — Not
                    regular water, not saline. Bacteriostatic water contains benzyl
                    alcohol as a preservative and is the standard for reconstituting
                    injectable peptides.
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Red flags:</strong>
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                  <li>
                    <strong>No COA, or "in-house testing only"</strong> — The most
                    common marker of a low-quality vendor. Any legitimate peptide
                    supplier can afford third-party testing.
                  </li>
                  <li>
                    <strong>Price significantly below market</strong> — Proper
                    synthesis and independent testing cost money. Unusually cheap
                    BPC-157 is usually low-purity or mislabeled product.
                  </li>
                  <li>
                    <strong>Pre-mixed liquid vials</strong> — Peptides in solution
                    degrade faster and carry higher contamination risk than
                    lyophilized powder.
                  </li>
                  <li>
                    <strong>Vague or missing sourcing information</strong> —
                    Legitimate research chemical suppliers disclose their synthesis
                    source and testing laboratory.
                  </li>
                </ul>
                <p className="mt-3">
                  One more thing worth saying plainly: injecting unverified
                  peptides from unregulated sources carries real infection risk.
                  Sterile technique matters. If you're not confident in your
                  injection protocol, that's a separate conversation to have with a
                  provider before you start — not after.
                </p>

                {/* ---- DOSING ---- */}
                <SectionHeading id="typical-dosing-practitioner-community-ranges">
                  Typical Dosing — Practitioner &amp; Community Ranges
                </SectionHeading>
                <p className="mt-3">
                  There are no published clinical trials establishing a validated
                  dose for BPC-157 in humans. The ranges below reflect what
                  practitioners and researchers commonly report, based on available
                  protocol guides and community consensus.
                </p>
                <Callout
                  tone="amber"
                  icon={AlertTriangle}
                  title="Not clinical dosing data"
                >
                  <p>
                    These ranges are not derived from randomized clinical trials.
                    They represent practitioner and community consensus only. The
                    animal research used weight-based dosing that does not translate
                    directly to human protocols. Dosing should be discussed with a
                    licensed healthcare provider familiar with this compound.
                  </p>
                </Callout>
                <p className="mt-3">
                  Animal studies have used doses in the range of approximately 1–10
                  mcg/kg body weight, administered either subcutaneously or
                  orally.<sup>[2]</sup>
                  <sup>[3]</sup> In a 70 kg adult, 10 mcg/kg translates to roughly
                  700 mcg — though direct conversion from rodent to human dosing is
                  not pharmacologically straightforward.
                </p>
                <p className="mt-3">
                  Practitioner-reported human protocols most commonly describe
                  200–500 mcg per day via subcutaneous injection, either as a single
                  daily dose or split into two doses — though BPC-157 dosing in
                  humans has not been established in clinical trials; reported
                  protocols are based on practitioner experience rather than
                  peer-reviewed human data. Some protocols describe a loading period
                  of 4–6 weeks followed by a maintenance or cycling phase — again,
                  BPC-157 dosing in humans has not been established in clinical
                  trials. Oral dosing has also been reported, though whether oral
                  bioavailability is meaningful in humans remains unconfirmed.
                </p>

                {/* Dosing table */}
                <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
                  <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#6b7280]">
                      BPC-157 Dosing: Reported Ranges by Route
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[320px] text-sm">
                      <thead>
                        <tr>
                          <th className="bg-[#F7F8F9] px-3 py-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-[#6b7280] sm:px-5 sm:py-3.5 sm:text-xs">
                            Parameter
                          </th>
                          <th className="bg-emerald-600 px-3 py-2.5 text-center text-xs font-bold text-white sm:px-5 sm:py-3.5 sm:text-sm">
                            Subcutaneous
                          </th>
                          <th className="bg-blue-600 px-3 py-2.5 text-center text-xs font-bold text-white sm:px-5 sm:py-3.5 sm:text-sm">
                            Oral
                          </th>
                          <th className="bg-violet-600 px-3 py-2.5 text-center text-xs font-bold text-white sm:px-5 sm:py-3.5 sm:text-sm">
                            Intra-articular
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F7F8F9]">
                        {DOSING_ROWS.map((row, i) => (
                          <tr key={row.parameter} className={i % 2 ? "bg-[#F7F8F9]/50" : ""}>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                              {row.parameter}
                            </td>
                            <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                              {row.sc}
                            </td>
                            <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                              {row.oral}
                            </td>
                            <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                              {row.ia}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="mt-3">
                  None of these figures come from a completed human RCT. Treat them
                  as a starting reference point for a conversation with a
                  knowledgeable provider, not as a validated protocol.
                </p>

                {/* ---- WHAT EVIDENCE DOES NOT SHOW ---- */}
                <SectionHeading id="what-the-evidence-does-not-show">
                  What the Evidence Does Not Show
                </SectionHeading>
                <p className="mt-3">
                  The preclinical picture for BPC-157 is more consistent than it is
                  for many research peptides. But consistency in animal models has
                  not historically been a reliable predictor of human outcomes —
                  that's not skepticism for its own sake, it's the lesson of decades
                  of drug development failures.
                </p>
                <p className="mt-3">Specifically, the evidence does not show:</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 sm:pl-6">
                  <li>
                    <strong>That any dose is effective in humans</strong> — No
                    dose-response relationship has been established in a human
                    trial. The animal data can't fill that gap.
                  </li>
                  <li>
                    <strong>That the oral route works in humans</strong> — Some
                    animal studies suggest oral bioavailability, which would be
                    unusual for a peptide of this size. Human gut proteases are
                    aggressive. Whether meaningful BPC-157 reaches systemic
                    circulation after oral ingestion in humans is unconfirmed —
                    practitioner-reported, not confirmed in published clinical
                    trials.
                  </li>
                  <li>
                    <strong>That it's safe for people with cancer history</strong> —
                    BPC-157 promotes angiogenesis. Angiogenesis supports wound
                    healing. It also supports tumor growth. No study has examined
                    BPC-157 in patients with active or prior malignancy, and this is
                    a real gap, not a theoretical concern.
                  </li>
                  <li>
                    <strong>
                      That the multi-tissue effects seen in animals replicate in
                      humans
                    </strong>{" "}
                    — The breadth of the preclinical findings is scientifically
                    interesting. It's also a reason for caution: a peptide that
                    affects multiple systems simultaneously has more surface area
                    for unexpected effects.
                  </li>
                  <li>
                    <strong>
                      That current unregulated sources provide what they claim
                    </strong>{" "}
                    — This isn't about the peptide's pharmacology; it's about the
                    supply chain. Without regulatory oversight, purity and identity
                    cannot be assumed.
                  </li>
                </ul>

                {/* ---- FAQ ---- */}
                <SectionHeading id="faq">FAQ</SectionHeading>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      q: "What is BPC-157 and where does it come from?",
                      a: (
                        <>
                          BPC-157 stands for Body Protection Compound-157. It's a
                          15-amino-acid synthetic peptide derived from a protein
                          sequence naturally present in human gastric juice.
                          Researchers originally identified it while studying how the
                          stomach protects itself from its own acid and heals from
                          injury. The "157" refers to its position in the parent
                          protein sequence.
                        </>
                      ),
                    },
                    {
                      q: "Can a doctor in the US prescribe BPC-157?",
                      a: (
                        <>
                          Not yet, in any clearly authorized way. BPC-157 is not
                          FDA-approved, and although an FDA advisory committee
                          recommended it for the 503A bulks list in July 2026,
                          compounding pharmacies have no unambiguous authority to
                          prepare it until the FDA completes rulemaking. A provider
                          offering BPC-157 through a US clinic today is ahead of the
                          rules — regardless of how the service is marketed.
                        </>
                      ),
                    },
                    {
                      q: "Does BPC-157 actually work for tendon injuries?",
                      a: (
                        <>
                          The animal data is genuinely consistent and mechanistically
                          plausible. A 2011 study in the{" "}
                          <em>Journal of Applied Physiology</em> showed accelerated
                          tendon fibroblast outgrowth, improved cell survival, and
                          enhanced cell migration in BPC-157-treated cultures.
                          <sup>[2]</sup> A 2019 review found similar patterns across
                          multiple rodent injury models.<sup>[2]</sup> Whether this
                          translates to humans at a practical dose is the unanswered
                          question — and it's unanswered because no controlled human
                          trial has been done.
                        </>
                      ),
                    },
                    {
                      q: "Is BPC-157 safe to inject?",
                      a: (
                        <>
                          Human safety data is limited to animal studies and
                          anecdotal reports. The animal literature reports a
                          favorable short-term safety profile with few adverse
                          effects.<sup>[1]</sup> What's unknown: long-term effects,
                          interactions with medications or medical conditions, and
                          the safety of the unregulated supply chain most people are
                          actually using. If you have a history of cancer, autoimmune
                          disease, or are immunocompromised, the absence of data here
                          is a meaningful concern.
                        </>
                      ),
                    },
                    {
                      q: "How does BPC-157 compare to TB-500 for recovery?",
                      a: (
                        <>
                          <a href="/peptides/tb-500" className={LINK_CLS}>
                            TB-500 (thymosin beta-4)
                          </a>{" "}
                          and BPC-157 are often stacked in practitioner protocols
                          because they appear to work through different mechanisms —
                          BPC-157 primarily through tendon fibroblast activation and
                          angiogenesis, TB-500 primarily through actin regulation and
                          cell motility. Both were removed from FDA Category 2 in
                          April 2026 and recommended for compounding in July 2026,
                          neither is yet authorized, and both lack completed human
                          clinical trials. The combination has been described in at
                          least one case series for knee pain,<sup>[4]</sup> but
                          "described in a case series" is a long way from
                          "demonstrated to work in a controlled trial."
                        </>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.q}>
                      <p className="font-semibold text-[#333333]">{item.q}</p>
                      <p className="mt-1">{item.a}</p>
                    </div>
                  ))}
                </div>

                {/* ---- RELATED ---- */}
                <SectionHeading id="related-peptides-comparisons">
                  Related Peptides &amp; Comparisons
                </SectionHeading>
                <p className="mt-3">
                  If you're researching BPC-157 for tissue repair or recovery, a few
                  related compounds are worth understanding in context.{" "}
                  <a href="/peptides/tb-500" className={LINK_CLS}>
                    TB-500 (thymosin beta-4)
                  </a>{" "}
                  is frequently paired with BPC-157 in practitioner protocols and
                  shares a similar preclinical-heavy evidence base.{" "}
                  <a href="/peptides/ipamorelin" className={LINK_CLS}>
                    Ipamorelin
                  </a>{" "}
                  and{" "}
                  <a href="/peptides/cjc-1295" className={LINK_CLS}>
                    CJC-1295
                  </a>{" "}
                  are growth hormone secretagogues sometimes used for recovery, with
                  a different mechanism and a somewhat clearer regulatory pathway
                  through compounding. For musculoskeletal-specific applications,{" "}
                  <a href="/peptides/igf-1-lr3" className={LINK_CLS}>
                    IGF-1 LR3
                  </a>{" "}
                  represents another research-stage option with its own distinct
                  evidence profile.
                </p>
                <p className="mt-3">
                  The honest comparison across all of these: BPC-157 has one of the
                  more extensive preclinical records in the peptide space, and one
                  of the clearest regulatory prohibitions. That combination —
                  promising animal data, no human trials, and active FDA
                  prohibition — is the defining feature of where this compound
                  stands right now.
                </p>

                {/* Comparison table */}
                <div className="my-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
                  <div className="border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3.5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#6b7280]">
                      BPC-157 vs. Related Recovery Peptides
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[320px] text-sm">
                      <thead>
                        <tr>
                          <th className="bg-[#F7F8F9] px-3 py-2.5 text-left text-[0.7rem] font-semibold uppercase tracking-wider text-[#6b7280] sm:px-5 sm:py-3.5 sm:text-xs">
                            Parameter
                          </th>
                          <th className="bg-emerald-600 px-3 py-2.5 text-center text-xs font-bold text-white sm:px-5 sm:py-3.5 sm:text-sm">
                            BPC-157
                          </th>
                          <th className="bg-blue-600 px-3 py-2.5 text-center text-xs font-bold text-white sm:px-5 sm:py-3.5 sm:text-sm">
                            TB-500
                          </th>
                          <th className="bg-violet-600 px-3 py-2.5 text-center text-xs font-bold text-white sm:px-5 sm:py-3.5 sm:text-sm">
                            Ipamorelin
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F7F8F9]">
                        {COMPARISON_ROWS.map((row, i) => (
                          <tr key={row.parameter} className={i % 2 ? "bg-[#F7F8F9]/50" : ""}>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[0.7rem] font-medium text-[#6b7280] sm:px-5 sm:py-3 sm:text-sm">
                              {row.parameter}
                            </td>
                            <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                              {row.bpc}
                            </td>
                            <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                              {row.tb}
                            </td>
                            <td className="px-3 py-2.5 text-center text-xs font-semibold text-[#333333] sm:px-5 sm:py-3 sm:text-sm">
                              {row.ipa}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ---- REFERENCES ---- */}
                <SectionHeading id="references">References</SectionHeading>
                <ol className="mt-3 list-decimal space-y-2 pl-5 sm:pl-6 text-sm">
                  {REFERENCES.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ol>

                <hr className="my-8 border-[#e5e7eb]" />
                <p className="text-sm italic text-[#6b7280]">
                  This content is for informational purposes only and does not
                  constitute medical advice. Consult a licensed healthcare provider
                  before starting any treatment.
                </p>
              </article>

              {/* Calculator */}
              <BPCDosageCalculator />

              {/* Where to buy CTA */}
              <section className="mt-10 rounded-[5px] border border-amber-200 bg-amber-50/40 p-5">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-[#333333]" style={HF}>
                      Where to Buy BPC-157 Online (Legally, 2026)
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a]">
                      BPC-157 is in a narrow legal window in 2026 — it was removed
                      from the FDA's Category 2 restricted compounding list but has
                      not yet been formally added to the 503A Bulks List. A small
                      number of telehealth clinics partner with 503A pharmacies to
                      prescribe it under individual physician orders. We list 5
                      options below. Programs start around $133/month.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      <a
                        href="#telehealth"
                        className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#FEED5A] px-4 py-2 font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                      >
                        See 5 legitimate BPC-157 clinics ↓
                      </a>
                      <a
                        href="/best/tissue-repair-recovery"
                        className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#e5e7eb] bg-white px-4 py-2 font-medium text-[#1F6CD6] hover:border-[#1F6CD6]"
                      >
                        Best recovery peptide telehealth →
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* ---- TELEHEALTH ---- */}
              <div id="telehealth" className="scroll-mt-24">
                <section className="mt-10">
                  <div className="overflow-hidden rounded-[5px] border border-emerald-200 bg-white">
                    <div className="flex items-center gap-3 border-b border-emerald-100 bg-emerald-50 px-5 py-4">
                      <Stethoscope className="h-5 w-5 text-emerald-700" />
                      <div>
                        <h2 className="text-base font-bold text-[#333333]" style={HF}>
                          Get BPC-157 Legally via Telehealth
                        </h2>
                        <p className="mt-0.5 text-xs text-emerald-800">
                          Licensed US clinicians · 503A/503B compounding pharmacies
                          · Discreet shipping
                        </p>
                      </div>
                    </div>
                    <ul className="divide-y divide-[#F7F8F9]">
                      {TELEHEALTH.map((t) => (
                        <li
                          key={t.slug}
                          className="flex flex-wrap items-start gap-4 px-5 py-4 transition-colors hover:bg-emerald-50/40 sm:flex-nowrap"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <a
                                href={`/vendors/${t.slug}`}
                                className="text-sm font-semibold text-[#333333] hover:text-[#1F6CD6]"
                              >
                                {t.name}
                              </a>
                              <span className="text-xs font-semibold text-amber-700">
                                {t.score}/10
                              </span>
                              {t.badge && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
                                  <ShieldCheck className="h-3 w-3" />
                                  {t.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-[#6b7280]">{t.desc}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b7280]">
                              {t.price && (
                                <span className="font-medium text-[#4a4a4a]">
                                  {t.price}
                                </span>
                              )}
                              <span className="capitalize">{t.visit}</span>
                            </div>
                          </div>
                          <a
                            href={t.url}
                            target="_blank"
                            rel="sponsored nofollow noopener noreferrer"
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-[4px] bg-[#FEED5A] px-4 py-2 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                          >
                            Start Visit <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-emerald-100 bg-emerald-50/60 px-5 py-3">
                      <p className="text-[11px] leading-relaxed text-emerald-900">
                        These are licensed US telehealth clinics that prescribe
                        BPC-157 for patient use. Some links are affiliate links;
                        editorial selection is independent. See our{" "}
                        <a
                          href="/affiliate-disclosure"
                          className="underline hover:text-emerald-700"
                        >
                          affiliate disclosure
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* ---- RESEARCH VENDORS ---- */}
              <section className="mt-10">
                <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-white">
                  <div className="flex items-center gap-3 border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-4">
                    <ShieldAlert className="h-5 w-5 text-[#6b7280]" />
                    <div>
                      <h2 className="text-base font-bold text-[#333333]" style={HF}>
                        Where to Buy BPC-157 for Research
                      </h2>
                      <p className="mt-0.5 text-xs text-[#6b7280]">
                        Research Use Only — not intended for human consumption
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-[#F7F8F9]">
                    {RESEARCH_VENDORS.map((v) => (
                      <div
                        key={v.rank}
                        className={`flex items-start gap-4 px-5 py-4 transition-colors hover:bg-[#F7F8F9] ${
                          v.highlight
                            ? "bg-amber-50/30 ring-1 ring-inset ring-amber-100"
                            : ""
                        }`}
                      >
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold ${
                            v.rank === 1
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-gray-50 text-gray-500 border-gray-200"
                          }`}
                        >
                          {v.rank}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-[#333333]">
                              {v.name}
                            </span>
                            {v.topRated && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                                ⭐ Top Rated
                              </span>
                            )}
                          </div>
                          {v.price && (
                            <div className="mt-1 text-xs text-[#4a4a4a] font-medium">
                              {v.price}
                            </div>
                          )}
                          {v.code && (
                            <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-dashed border-green-600/40 bg-green-50 px-2.5 py-0.5 text-xs text-green-800">
                              <Tag className="h-3 w-3" />
                              Code{" "}
                              <span className="font-mono font-semibold">{v.code}</span>{" "}
                              · {v.discount}
                            </span>
                          )}
                          {v.features.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                              {v.features.map((f) => (
                                <span
                                  key={f}
                                  className="inline-flex items-center gap-1 text-xs text-[#6b7280]"
                                >
                                  <Check className="h-3 w-3 text-emerald-500" />
                                  {f}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <a
                          href={v.url}
                          target="_blank"
                          rel="sponsored nofollow noopener noreferrer"
                          className="shrink-0 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#4a4a4a] transition-colors hover:border-[#6b7280] hover:bg-[#F7F8F9]"
                        >
                          View Product →
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3">
                    <p className="text-[10px] leading-relaxed text-[#6b7280]">
                      Research peptides are sold for laboratory use only and are not
                      intended for human consumption.
                    </p>
                  </div>
                </div>
              </section>

              {/* Dosing protocol */}
              <section className="mt-12 rounded-[5px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-[#333333]" style={HF}>
                    Dosing protocol
                  </h2>
                  <span className="rounded bg-[#FEED5A] px-2 py-0.5 text-xs font-semibold text-[#333333]">
                    Protocol
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#6b7280]">
                  Week-by-week dosing, reconstitution steps, supplies checklist, and
                  cycle tips.
                </p>
                <a
                  href="/protocols/bpc-157-dosing-10mg"
                  className="mt-4 inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                >
                  Week-by-week dosing protocol →
                </a>
              </section>

              {/* Clinics */}
              <section className="mt-12 rounded-[5px] border border-[#e5e7eb] bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#333333]" style={HF}>
                  Find Clinics Offering BPC-157
                </h2>
                <p className="mt-2 text-sm text-[#6b7280]">
                  321 clinics in our directory offer BPC-157. Use the button below
                  to find one near you.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {CLINICS.map((c) => (
                    <article
                      key={c.slug}
                      className="flex flex-col overflow-hidden rounded-[5px] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="relative h-36 w-full shrink-0 overflow-hidden">
                        <img
                          alt={`${c.name} clinic`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center"
                          src={c.img}
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-1.5 p-4">
                        <div className="flex flex-wrap items-start gap-x-1.5 gap-y-1">
                          <a
                            href={`/clinic/${c.slug}`}
                            className="line-clamp-2 font-semibold leading-snug text-[#333333] hover:text-[#1F6CD6]"
                          >
                            {c.name}
                          </a>
                          <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#0B7C84] bg-[#E6F4F5] px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-[#0B7C84]">
                            ✓ Verified
                          </span>
                        </div>
                        <p className="text-sm text-[#6b7280]">
                          {c.city}, {c.state}
                        </p>
                        <div className="inline-flex items-center gap-1">
                          <div className="inline-flex text-amber-500">
                            {"★".repeat(c.rating)}
                          </div>
                          <span className="ml-0.5 text-sm text-[#6b7280]">
                            {c.rating.toFixed(1)} ({c.reviews} reviews)
                          </span>
                        </div>
                        {c.tags.length > 0 && (
                          <div className="mt-0.5 flex flex-wrap gap-1">
                            {c.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-[4px] bg-[#FFF0BB] px-2 py-0.5 text-xs font-medium text-[#333333]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex-1" />
                        <a
                          href={`/clinic/${c.slug}`}
                          className="mt-2 inline-flex w-full items-center justify-center rounded-[4px] bg-[#FEED5A] px-4 py-2 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                        >
                          View Clinic
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
                <a
                  href="/clinics?peptide=bpc-157"
                  className="mt-5 inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                >
                  Find a Peptide Clinic Near You →
                </a>
              </section>

              {/* Related blogs */}
              <section className="mt-12 border-t border-[#e5e7eb] pt-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6b7280]">
                  Continue Reading
                </h2>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Articles about BPC-157 and related topics
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {RELATED_BLOGS.map((b) => (
                    <a
                      key={b.slug}
                      href={`/blog/${b.slug}`}
                      className="group flex flex-col overflow-hidden rounded bg-white"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F8F9]">
                        <img
                          alt={b.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={b.img}
                        />
                        <span
                          className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ${b.categoryClass}`}
                        >
                          {b.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3
                          className="line-clamp-2 text-lg font-bold leading-snug text-[#333333] transition-colors"
                          style={HF}
                        >
                          {b.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b7280]">
                          {b.excerpt}
                        </p>
                        <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-[#6b7280]">
                          <time>{b.date}</time>
                          <span className="inline-flex items-center gap-1 font-medium text-[#1F6CD6]">
                            Read article →
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="mt-10 flex items-start gap-3 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#6b7280]" />
                <p className="text-sm leading-relaxed text-[#6b7280]">
                  MyPeptideMatch.com does not provide medical advice. Always consult
                  a qualified healthcare provider before starting any peptide
                  therapy. Regulatory status may change.
                </p>
              </div>
            </div>

            {/* ============ SIDEBAR ============ */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                {/* TOC */}
                <nav
                  className="rounded-[5px] bg-white p-5 shadow-sm"
                  aria-label="Table of contents"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-[#6b7280]" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#6b7280]">
                      On this page
                    </h3>
                  </div>
                  <ul className="space-y-0.5">
                    {TOC.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className={`block text-[13px] leading-relaxed text-[#6b7280] transition-all hover:text-[#4a4a4a] ${
                            t.level === 2 ? "pl-5" : "pl-3"
                          }`}
                        >
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Calculator CTA */}
                <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
                  <h3 className="text-sm font-bold text-[#333333]" style={HF}>
                    Calculate Your BPC-157 Dose
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
                    Use our free peptide reconstitution calculator with BPC-157
                    defaults pre-loaded.
                  </p>
                  <a
                    href="#calculator"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                  >
                    <Calculator className="h-3.5 w-3.5" />
                    Open peptide calculator
                  </a>
                </div>

                {/* Find clinics CTA */}
                <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
                  <h3 className="text-sm font-bold text-[#333333]" style={HF}>
                    Find Clinics Offering BPC-157
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
                    Browse our directory of verified peptide therapy clinics.
                  </p>
                  <a
                    href="/clinics?peptide=bpc-157"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                  >
                    Find a Clinic →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BPC;