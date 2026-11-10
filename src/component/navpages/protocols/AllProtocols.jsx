import React, { useState } from "react";

const ChevronRightIcon = ({ className = "h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const SearchIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} aria-hidden="true" fill="none" viewBox="0 0 24 24"
    strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
  </svg>
);

const ArrowRightIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} aria-hidden="true" fill="none" viewBox="0 0 24 24"
    strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const CATEGORY_FILTERS = [
  { id: "weight-loss", label: "Weight Loss & GLP-1" },
  { id: "growth-hormone", label: "Growth Hormone & GHRH" },
  { id: "tissue-repair", label: "Tissue Repair & Recovery" },
  { id: "sexual-wellness", label: "Sexual Wellness & Aesthetics" },
  { id: "cognitive", label: "Cognitive, Neuro & Sleep" },
  { id: "anti-aging", label: "Anti-Aging & Longevity" },
  { id: "metabolic-immune", label: "Metabolic & Immune" },
  { id: "bioregulators", label: "Russian Bioregulators" },
  { id: "blends-stacks", label: "Peptide Blends & Stacks" },
];

const POPULAR_PROTOCOLS = [
  {
    name: "Tirzepatide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies",
    desc: "Precise titration schedule, reconstitution steps, and supplies checklist for the 5 mg tirzepatide compounded vial.",
    href: "/protocols/tirzepatide-dosing-5mg",
  },
  {
    name: "BPC-157 Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies",
    desc: "Body Protection Compound-157 complete dosing guide for the 5 mg vial — subcutaneous, intramuscular, and oral protocols for tissue repair.",
    href: "/protocols/bpc-157-dosing-5mg",
  },
  {
    name: "CJC-1295 No DAC Dosing Protocol: 5 mg Vial — Pulsatile GHRH Dosing Guide",
    desc: "CJC-1295 without DAC (Modified GRF 1-29) protocol — the pulsatile GHRH analogue for 2–3x daily injection alongside GHRPs.",
    href: "/protocols/cjc-1295-nodac-dosing-5mg",
  },
  {
    name: "Epithalon (Epitalon) Dosing Protocol: 10 mg Vial — Telomere & Anti-Aging Guide",
    desc: "Epithalon AEDG tetrapeptide anti-aging protocol — 10-day intensive course for telomerase activation, melatonin synthesis restoration, and longevity optimization.",
    href: "/protocols/epithalon-dosing-10mg",
  },
];

const SECTIONS = [
  {
    id: "weight-loss",
    title: "Weight Loss & GLP-1",
    description:
      "GLP-1, GIP, and amylin receptor agonists for medically supervised weight management, appetite suppression, and metabolic health.",
    protocols: [
      {
        name: "AOD 9604",
        desc: "AOD-9604 10 mg vial guide — 20-day supply at 500 µg/day, ideal for extended visceral fat reduction cycles with reduced reconstitution frequency.",
        href: "/protocols/aod-9604-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/aod-9604-dosing-10mg" },
          { label: "5 mg", href: "/protocols/aod-9604-dosing-5mg" },
        ],
      },
      {
        name: "Mazdutide",
        desc: "Complete mazdutide titration from 3 mg to 9 mg maintenance using the 10 mg compounded vial, covering the full GLORY Phase 3 dose range.",
        href: "/protocols/mazdutide-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/mazdutide-dosing-10mg" },
          { label: "5 mg", href: "/protocols/mazdutide-dosing-5mg" },
        ],
      },
      {
        name: "Survodutide",
        desc: "Complete titration schedule and reconstitution guide for survodutide (BI 456906) using the 10 mg compounded vial, based on Phase 2b OASIS trial data.",
        href: "/protocols/survodutide-dosing-10mg",
      },
      {
        name: "Cagrilintide",
        desc: "Higher-volume cagrilintide protocol guide for the 10 mg compounded vial — ideal for patients advancing through mid-to-high dose titration.",
        href: "/protocols/cagrilintide-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/cagrilintide-dosing-10mg" },
          { label: "5 mg", href: "/protocols/cagrilintide-dosing-5mg" },
        ],
      },
      {
        name: "Retatrutide",
        desc: "Extended supply guide for the 30 mg retatrutide vial — designed for patients established on 8–12 mg maintenance dosing.",
        href: "/protocols/retatrutide-dosing-30mg",
        vialSizes: [
          { label: "30 mg", href: "/protocols/retatrutide-dosing-30mg" },
          { label: "20 mg", href: "/protocols/retatrutide-dosing-20mg" },
          { label: "10 mg", href: "/protocols/retatrutide-dosing-10mg" },
          { label: "5 mg", href: "/protocols/retatrutide-dosing-5mg" },
        ],
      },
      {
        name: "Tirzepatide",
        desc: "Multi-month supply guide for the 30 mg compounded tirzepatide vial — efficient high-volume reconstitution for extended cycles.",
        href: "/protocols/tirzepatide-dosing-30mg",
        vialSizes: [
          { label: "30 mg", href: "/protocols/tirzepatide-dosing-30mg" },
          { label: "15 mg", href: "/protocols/tirzepatide-dosing-15mg" },
          { label: "10 mg", href: "/protocols/tirzepatide-dosing-10mg" },
          { label: "5 mg", href: "/protocols/tirzepatide-dosing-5mg" },
        ],
      },
      {
        name: "Semaglutide",
        desc: "Reconstitution guide, week-by-week titration, and supplies for a 10 mg semaglutide vial.",
        href: "/protocols/semaglutide-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/semaglutide-dosing-10mg" },
          { label: "20 mg", href: "/protocols/semaglutide-dosing-20mg" },
          { label: "5 mg", href: "/protocols/semaglutide-dosing-5mg" },
        ],
      },
    ],
  },
  {
    id: "growth-hormone",
    title: "Growth Hormone & GHRH",
    description:
      "GHRH analogues, GHRPs, and recombinant HGH protocols for body composition, recovery, and GH axis optimization.",
    protocols: [
      {
        name: "Gonadorelin",
        desc: "Gonadorelin (GnRH) dosing protocol for maintaining HPG axis function and testicular size during testosterone replacement therapy.",
        href: "/protocols/gonadorelin-dosing-2mg",
      },
      {
        name: "MGF",
        desc: "Mechano Growth Factor (MGF) dosing guide for the 5 mg vial, based on local muscle injection protocols for satellite cell activation and muscle repair.",
        href: "/protocols/mgf-dosing-5mg",
      },
      {
        name: "IGF 1 Lr3",
        desc: "Complete IGF-1 LR3 dosing guide for the 1 mg vial, including acetic acid reconstitution technique, dosing table, and cycle protocol.",
        href: "/protocols/igf-1-lr3-dosing-1mg",
      },
      {
        name: "HGH 191aa",
        desc: "Recombinant human growth hormone (HGH 191AA) dosing guide for the 10 IU compounded vial, with concentration calculations and reconstitution steps.",
        href: "/protocols/hgh-191aa-dosing-10iu",
      },
      {
        name: "Tesamorelin",
        desc: "High-volume tesamorelin supply from the 20 mg vial — provides 10 daily doses at the FDA-approved 2 mg/day rate, minimizing reconstitution frequency.",
        href: "/protocols/tesamorelin-dosing-20mg",
        vialSizes: [
          { label: "20 mg", href: "/protocols/tesamorelin-dosing-20mg" },
          { label: "10 mg", href: "/protocols/tesamorelin-dosing-10mg" },
          { label: "5 mg", href: "/protocols/tesamorelin-dosing-5mg" },
        ],
      },
      {
        name: "CJC 1295",
        desc: "CJC-1295 without DAC (Modified GRF 1-29) protocol — the pulsatile GHRH analogue for 2–3x daily injection alongside GHRPs.",
        href: "/protocols/cjc-1295-nodac-dosing-5mg",
        vialSizes: [
          { label: "5 mg", href: "/protocols/cjc-1295-nodac-dosing-5mg" },
          { label: "5 mg", href: "/protocols/cjc-1295-dac-dosing-5mg" },
          { label: "2 mg", href: "/protocols/cjc-1295-dac-dosing-2mg" },
        ],
      },
      {
        name: "GHRP 6",
        desc: "High-volume GHRP-6 protocol for the 10 mg vial — the preferred choice for patients on 300 µg 3x daily maximum-output protocols.",
        href: "/protocols/ghrp-6-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/ghrp-6-dosing-10mg" },
          { label: "5 mg", href: "/protocols/ghrp-6-dosing-5mg" },
          { label: "2 mg", href: "/protocols/ghrp-6-dosing-2mg" },
        ],
      },
      {
        name: "GHRP 2",
        desc: "High-volume GHRP-2 supply from the 10 mg vial for patients on established 200–300 µg 2–3x daily protocols.",
        href: "/protocols/ghrp-2-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/ghrp-2-dosing-10mg" },
          { label: "5 mg", href: "/protocols/ghrp-2-dosing-5mg" },
        ],
      },
      {
        name: "Ipamorelin",
        desc: "Multi-week ipamorelin supply from the 10 mg vial — ideal for patients on established 300 µg once-to-three-daily protocols.",
        href: "/protocols/ipamorelin-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/ipamorelin-dosing-10mg" },
          { label: "5 mg", href: "/protocols/ipamorelin-dosing-5mg" },
        ],
      },
      {
        name: "Sermorelin",
        desc: "Two-month supply guide for sermorelin using the 10 mg vial — efficient for patients on established 300–500 µg nightly protocols.",
        href: "/protocols/sermorelin-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/sermorelin-dosing-10mg" },
          { label: "5 mg", href: "/protocols/sermorelin-dosing-5mg" },
        ],
      },
    ],
  },
  {
    id: "tissue-repair",
    title: "Tissue Repair & Recovery",
    description:
      "Cytoprotective and regenerative peptides for musculoskeletal injuries, gut healing, and systemic tissue repair.",
    protocols: [
      {
        name: "LL 37",
        desc: "Human cathelicidin LL-37 dosing protocol for local wound healing and systemic immune modulation using the 5 mg compounded vial.",
        href: "/protocols/ll-37-dosing-5mg",
      },
      {
        name: "KPV",
        desc: "KPV (Lys-Pro-Val) tripeptide dosing protocol for subcutaneous and oral administration, targeting inflammatory bowel conditions, skin inflammation, and wound healing.",
        href: "/protocols/kpv-dosing-10mg",
      },
      {
        name: "TB 500",
        desc: "TB-500 10 mg vial guide providing a full 2.5-week loading supply at 2 mg 2x weekly from a single reconstitution.",
        href: "/protocols/tb-500-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/tb-500-dosing-10mg" },
          { label: "5 mg", href: "/protocols/tb-500-dosing-5mg" },
        ],
      },
      {
        name: "BPC 157",
        desc: "BPC-157 10 mg vial guide for multi-week injury repair cycles at 500 µg/day, with supplies checklist and oral dosing option.",
        href: "/protocols/bpc-157-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/bpc-157-dosing-10mg" },
          { label: "5 mg", href: "/protocols/bpc-157-dosing-5mg" },
        ],
      },
    ],
  },
  {
    id: "sexual-wellness",
    title: "Sexual Wellness & Aesthetics",
    description:
      "Melanocortin, neuropeptide, and cosmetic peptide protocols for sexual function, skin quality, and aesthetic goals.",
    protocols: [
      {
        name: "SNAP 8",
        desc: "SNAP-8 (Acetyl Glutamyl Heptapeptide-3) cosmetic peptide dosing guide for subcutaneous micro-injections targeting expression wrinkle reduction.",
        href: "/protocols/snap-8-dosing-10mg",
      },
      {
        name: "Oxytocin",
        desc: "Oxytocin 10 mg vial protocol — provides up to 200 days of every-other-day dosing at 100 µg from a single reconstitution.",
        href: "/protocols/oxytocin-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/oxytocin-dosing-10mg" },
          { label: "5 mg", href: "/protocols/oxytocin-dosing-5mg" },
        ],
      },
      {
        name: "Kisspeptin",
        desc: "Kisspeptin-10 dosing protocol for subcutaneous injection — targeting HPG axis reactivation, LH pulse restoration, and sexual arousal enhancement.",
        href: "/protocols/kisspeptin-dosing-10mg",
      },
      {
        name: "Melanotan Ii",
        desc: "Melanotan II complete dosing protocol using the 10 mg vial — loading phase, maintenance schedule, and side effect management guide.",
        href: "/protocols/melanotan-ii-dosing-10mg",
      },
      {
        name: "PT 141",
        desc: "PT-141 (bremelanotide) complete dosing protocol for the 10 mg vial — FDA-approved dosing schedule for female sexual arousal disorder and off-label male use.",
        href: "/protocols/pt-141-dosing-10mg",
      },
    ],
  },
  {
    id: "cognitive",
    title: "Cognitive, Neuro & Sleep",
    description:
      "Nootropic and anxiolytic neuropeptides for cognitive enhancement, anxiety reduction, and sleep quality improvement.",
    protocols: [
      {
        name: "Adamax",
        desc: "Adamax peptide complex dosing guide — cognitive enhancement, vasopressin-like neuroprotective signaling, and memory consolidation support.",
        href: "/protocols/adamax-dosing-5mg",
      },
      {
        name: "Pinealon",
        desc: "Russian pineal bioregulator Pinealon (Glu-Asp-Arg tripeptide) dosing guide for cognitive protection, circadian rhythm support, and anti-aging neuroprotection.",
        href: "/protocols/pinealon-dosing-20mg",
      },
      {
        name: "Cerebrolysin",
        desc: "Cerebrolysin neurotrophic peptide mixture dosing guide — IV infusion protocol for neuroprotection, cognitive enhancement, and stroke/dementia support.",
        href: "/protocols/cerebrolysin-dosing-60mg",
      },
      {
        name: "DSIP",
        desc: "DSIP 10 mg vial guide — 14-week nightly supply at 100 µg/night, ideal for chronic insomnia protocols.",
        href: "/protocols/dsip-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/dsip-dosing-10mg" },
          { label: "5 mg", href: "/protocols/dsip-dosing-5mg" },
        ],
      },
      {
        name: "PE 22 28",
        desc: "PE-22-28 synthetic spinorphin analogue dosing guide — fast-acting antidepressant peptide with TRPV1 modulation and enkephalin stabilization.",
        href: "/protocols/pe-22-28-dosing-10mg",
      },
      {
        name: "Semax",
        desc: "Semax 10 mg vial guide providing a 16-day supply at the standard 600 µg/day cognitive enhancement dose.",
        href: "/protocols/semax-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/semax-dosing-10mg" },
          { label: "5 mg", href: "/protocols/semax-dosing-5mg" },
        ],
      },
      {
        name: "Selank",
        desc: "Selank 10 mg vial guide — 20-day supply at 500 µg/day, ideal for extended anxiety management cycles without frequent reconstitution.",
        href: "/protocols/selank-dosing-10mg",
        vialSizes: [
          { label: "10 mg", href: "/protocols/selank-dosing-10mg" },
          { label: "5 mg", href: "/protocols/selank-dosing-5mg" },
        ],
      },
    ],
  },
  {
    id: "anti-aging",
    title: "Anti-Aging & Longevity",
    description:
      "Telomerase activators, senolytics, mitochondrial peptides, and NAD+ protocols targeting the hallmarks of cellular aging.",
    protocols: [
      {
        name: "Mots C",
        desc: "MOTS-C mitochondrial-derived peptide dosing guide — AMPK activation, insulin sensitization, and exercise performance via the one-carbon metabolic cycle.",
        href: "/protocols/mots-c-dosing-5mg",
      },
      {
        name: "Slu Pp 332",
        desc: "SLU-PP-332 ERRalpha/gamma agonist dosing guide — exercise mimetic for cardiac mitochondrial biogenesis and endurance optimization.",
        href: "/protocols/slu-pp-332-dosing-10mg",
      },
      {
        name: "Aicar",
        desc: "AICAR (acadesine) AMPK activator dosing guide for the 50 mg vial — metabolic reprogramming for endurance, fat oxidation, and insulin sensitivity.",
        href: "/protocols/aicar-dosing-50mg",
      },
      {
        name: "5 Amino 1mq",
        desc: "5-Amino-1-methylquinolinium (5-Amino-1MQ) dosing protocol — NNMT inhibitor for fat loss, metabolic rate enhancement, and NAD+ preservation.",
        href: "/protocols/5-amino-1mq-dosing-50mg",
      },
      {
        name: "NAD Plus",
        desc: "NAD+ (nicotinamide adenine dinucleotide) 500 mg vial dosing guide for IV infusion and subcutaneous injection protocols for cellular energy, sirtuin activation, and longevity.",
        href: "/protocols/nad-plus-dosing-500mg",
      },
      {
        name: "GHK Cu",
        desc: "GHK-Cu (copper peptide) complete dosing guide for the 50 mg vial — subcutaneous and topical protocols for skin rejuvenation, collagen synthesis, and tissue repair.",
        href: "/protocols/ghk-cu-dosing-50mg",
      },
      {
        name: "Fox04 Dri",
        desc: "FOXO4-DRI retro-inverso peptide senolytic protocol — targeted clearance of senescent cells for longevity, recovery, and tissue rejuvenation.",
        href: "/protocols/fox04-dri-dosing-10mg",
      },
      {
        name: "SS 31",
        desc: "SS-31 (elamipretide) tetrapeptide dosing guide for the 10 mg vial — mitochondrial membrane potential restoration for aging, heart failure, and metabolic disease.",
        href: "/protocols/ss-31-dosing-10mg",
      },
      {
        name: "Epithalon",
        desc: "Epithalon 20 mg vial guide covering two complete 10-day intensive courses (10 mg/day each), ideal for semi-annual anti-aging protocols.",
        href: "/protocols/epithalon-dosing-20mg",
        vialSizes: [
          { label: "20 mg", href: "/protocols/epithalon-dosing-20mg" },
          { label: "10 mg", href: "/protocols/epithalon-dosing-10mg" },
        ],
      },
    ],
  },
  {
    id: "metabolic-immune",
    title: "Metabolic & Immune",
    description:
      "Immunomodulatory, hepatoprotective, and metabolic support peptides for immune health, detoxification, and fat oxidation.",
    protocols: [
      {
        name: "PNC 27",
        desc: "PNC-27 p53 residues 12-26 MDM-2 antagonist peptide dosing guide — selective cancer cell membrane disruption via overexpressed HDM-2 binding.",
        href: "/protocols/pnc-27-dosing-10mg",
      },
      {
        name: "ARA 290",
        desc: "ARA-290 non-erythropoietic EPO analogue dosing guide — INNATE repair receptor activation for sarcoidosis-related neuropathic pain, insulin secretion, and tissue protection.",
        href: "/protocols/ara-290-dosing-5mg",
      },
      {
        name: "HMG",
        desc: "HMG (human menopausal gonadotropin, FSH+LH) 75 IU vial dosing guide for male spermatogenesis induction, combined with HCG for hypogonadotropic infertility.",
        href: "/protocols/hmg-dosing-75iu",
      },
      {
        name: "HCG",
        desc: "HCG 10000 IU vial dosing guide for high-dose fertility induction, extended TRT co-administration, and hypogonadism recovery from a single large vial.",
        href: "/protocols/hcg-dosing-10000iu",
        vialSizes: [
          { label: "10000 IU", href: "/protocols/hcg-dosing-10000iu" },
          { label: "5000 IU", href: "/protocols/hcg-dosing-5000iu" },
        ],
      },
      {
        name: "Glutathione",
        desc: "Glutathione (GSH) 600 mg vial dosing guide for IV push and intramuscular injection protocols for antioxidant defense, liver detoxification, and skin brightening.",
        href: "/protocols/glutathione-dosing-600mg",
      },
      {
        name: "L Carnitine",
        desc: "L-Carnitine injection protocol for the 200 mg vial — intramuscular or subcutaneous dosing for fatty acid transport, exercise performance, and metabolic support.",
        href: "/protocols/l-carnitine-dosing-200mg",
      },
      {
        name: "Thymosin Alpha 1",
        desc: "Thymosin Alpha-1 (Ta1) endogenous thymic peptide dosing guide — immune enhancement, antiviral defense, and cancer immunotherapy adjunct protocol.",
        href: "/protocols/thymosin-alpha-1-dosing-5mg",
      },
    ],
  },
  {
    id: "bioregulators",
    title: "Russian Bioregulators",
    description:
      "Khavinson short-peptide bioregulators with organ-specific gene expression normalization for comprehensive anti-aging support.",
    protocols: [
      {
        name: "Vilon",
        desc: "Vilon (Lys-Glu dipeptide) Russian immune and longevity bioregulator dosing guide — the simplest Khavinson bioregulator for systemic immune normalization and longevity support.",
        href: "/protocols/vilon-dosing-20mg",
      },
      {
        name: "Vesugen",
        desc: "Vesugen (Lys-Glu-Asp tetrapeptide) Russian vascular bioregulator dosing guide — endothelial cell gene normalization for arterial health, blood pressure regulation, and cardiovascular aging.",
        href: "/protocols/vesugen-dosing-20mg",
      },
      {
        name: "Testagen",
        desc: "Testagen (Lys-Glu-Asp-Gly tetrapeptide) Russian testicular bioregulator dosing guide — Leydig cell gene normalization for testosterone production optimization and male reproductive aging support.",
        href: "/protocols/testagen-dosing-20mg",
      },
      {
        name: "Prostamax",
        desc: "Prostamax (Lys-Asp-Glu-Leu tetrapeptide) Russian prostate bioregulator dosing guide — prostatic epithelial gene normalization for BPH, prostate aging, and urinary symptom support.",
        href: "/protocols/prostamax-dosing-20mg",
      },
      {
        name: "Ovagen",
        desc: "Ovagen (Glu-Asp-Leu-Pro tetrapeptide) Russian gastrointestinal bioregulator dosing guide — intestinal epithelial gene normalization for gut health and digestive aging support.",
        href: "/protocols/ovagen-dosing-20mg",
      },
      {
        name: "Livagen",
        desc: "Livagen (Lys-Glu-Asp-Pro tetrapeptide) Russian liver bioregulator dosing guide — hepatocyte gene expression normalization for liver aging, detoxification, and hepatoprotection.",
        href: "/protocols/livagen-dosing-20mg",
      },
      {
        name: "Crystagen",
        desc: "Crystagen (Lys-Glu-Asp tripeptide) Russian immune system bioregulator dosing guide — thymus function normalization, T-cell activation, and immune aging reversal.",
        href: "/protocols/crystagen-dosing-20mg",
      },
      {
        name: "Cortagen",
        desc: "Cortagen (Ala-Glu-Asp-Pro tetrapeptide) Russian brain cortex and spinal cord bioregulator dosing guide — neuroprotection, cognitive decline prevention, and neuronal gene normalization.",
        href: "/protocols/cortagen-dosing-20mg",
      },
      {
        name: "Chonluten",
        desc: "Chonluten (Glu-Asp-Leu tripeptide) Russian lung bioregulator dosing guide — bronchial epithelial cell gene normalization for respiratory function and lung aging support.",
        href: "/protocols/chonluten-dosing-20mg",
      },
      {
        name: "Cartalax",
        desc: "Cartalax (Ala-Glu-Asp-Leu tetrapeptide) Russian cartilage and bone bioregulator dosing guide — chondrocyte and osteoblast gene normalization for joint health.",
        href: "/protocols/cartalax-dosing-20mg",
      },
      {
        name: "Cardiogen",
        desc: "Cardiogen (Ala-Glu-Asp-Pro tetrapeptide) Russian heart bioregulator dosing guide — cardiac cytoprotection, cardiomyocyte gene expression normalization, and anti-aging cardiac support.",
        href: "/protocols/cardiogen-dosing-20mg",
      },
    ],
  },
  {
    id: "blends-stacks",
    title: "Peptide Blends & Stacks",
    description:
      "Pre-mixed blends and strategic co-administration stacks targeting multiple pathways simultaneously for enhanced outcomes.",
    protocols: [
      {
        name: "KLOW Blend",
        desc: "KLOW peptide blend (BPC-157 + TB-500 + KPV + GHK-Cu) dosing guide for tissue repair, anti-inflammatory support, and extracellular matrix remodeling — the GLOW blend plus KPV.",
        href: "/protocols/klow-blend-dosing",
      },
      {
        name: "GLOW Blend",
        desc: "GLOW peptide blend (BPC-157 + TB-500 + GHK-Cu) dosing guide for tissue repair, angiogenesis, and collagen and connective-tissue remodeling.",
        href: "/protocols/glow-blend-dosing",
      },
    ],
  },
];

/* All 90 protocols for the ItemList JSON-LD [name, slug] */
const SCHEMA_PROTOCOLS = [
  ["KLOW Blend Dosing Protocol — BPC-157, TB-500, KPV & GHK-Cu Guide", "klow-blend-dosing"],
  ["GLOW Blend Dosing Protocol — BPC-157, TB-500 & GHK-Cu Skin & Repair Guide", "glow-blend-dosing"],
  ["Vilon Dosing Protocol: 20 mg Vial — Dipeptide Immune & Longevity Bioregulator Guide", "vilon-dosing-20mg"],
  ["Vesugen Dosing Protocol: 20 mg Vial — Vascular Bioregulator & Cardiovascular Guide", "vesugen-dosing-20mg"],
  ["Testagen Dosing Protocol: 20 mg Vial — Testicular Bioregulator & Testosterone Support Guide", "testagen-dosing-20mg"],
  ["Prostamax Dosing Protocol: 20 mg Vial — Prostate Bioregulator Guide", "prostamax-dosing-20mg"],
  ["Ovagen Dosing Protocol: 20 mg Vial — GI Tract Bioregulator & Gut Health Guide", "ovagen-dosing-20mg"],
  ["Livagen Dosing Protocol: 20 mg Vial — Liver Bioregulator & Hepatoprotection Guide", "livagen-dosing-20mg"],
  ["Crystagen Dosing Protocol: 20 mg Vial — Immune System Bioregulator Guide", "crystagen-dosing-20mg"],
  ["Cortagen Dosing Protocol: 20 mg Vial — Brain & Spinal Cord Bioregulator Guide", "cortagen-dosing-20mg"],
  ["Chonluten Dosing Protocol: 20 mg Vial — Lung & Bronchial Bioregulator Guide", "chonluten-dosing-20mg"],
  ["Cartalax Dosing Protocol: 20 mg Vial — Cartilage & Bone Bioregulator Guide", "cartalax-dosing-20mg"],
  ["Cardiogen Dosing Protocol: 20 mg Vial — Cardiac Bioregulator Guide", "cardiogen-dosing-20mg"],
  ["Adamax Dosing Protocol: 5 mg Vial — Cognitive & Neurological Support Guide", "adamax-dosing-5mg"],
  ["PNC-27 Dosing Protocol: 10 mg Vial — p53-Derived Anticancer Peptide Guide", "pnc-27-dosing-10mg"],
  ["ARA-290 Dosing Protocol: 5 mg Vial — Neuropathic Pain & Anti-Inflammatory Guide", "ara-290-dosing-5mg"],
  ["HMG Dosing Protocol: 75 IU Vial — Male Fertility & Spermatogenesis Guide", "hmg-dosing-75iu"],
  ["HCG Dosing Protocol: 10000 IU Vial — High-Dose Fertility & TRT Protocol Guide", "hcg-dosing-10000iu"],
  ["HCG Dosing Protocol: 5000 IU Vial — TRT Support & Post-Cycle Therapy Guide", "hcg-dosing-5000iu"],
  ["Glutathione Injection Dosing Protocol: 600 mg Vial — Antioxidant & Detox Guide", "glutathione-dosing-600mg"],
  ["L-Carnitine Injection Dosing Protocol: 200 mg Vial — Fat Oxidation & Energy Guide", "l-carnitine-dosing-200mg"],
  ["Thymosin Alpha-1 Dosing Protocol: 5 mg Vial — Immune Modulation Guide", "thymosin-alpha-1-dosing-5mg"],
  ["MOTS-C Dosing Protocol: 5 mg Vial — Mitochondrial Hormone & Exercise Guide", "mots-c-dosing-5mg"],
  ["AOD-9604 Dosing Protocol: 10 mg Vial — Extended Fat Loss Protocol Guide", "aod-9604-dosing-10mg"],
  ["AOD-9604 Dosing Protocol: 5 mg Vial — Fat Loss Peptide Dosing Guide", "aod-9604-dosing-5mg"],
  ["SLU-PP-332 Dosing Protocol: 10 mg Vial — ERR Agonist & Cardio Mimetic Guide", "slu-pp-332-dosing-10mg"],
  ["AICAR Dosing Protocol: 50 mg Vial — AMPK Activation & Endurance Guide", "aicar-dosing-50mg"],
  ["5-Amino-1MQ Dosing Protocol: 50 mg Vial — NNMT Inhibition & Metabolic Guide", "5-amino-1mq-dosing-50mg"],
  ["NAD+ Dosing Protocol: 500 mg Vial — IV & Subcutaneous Anti-Aging Guide", "nad-plus-dosing-500mg"],
  ["GHK-Cu Dosing Protocol: 50 mg Vial — Collagen Synthesis & Anti-Aging Guide", "ghk-cu-dosing-50mg"],
  ["FOXO4-DRI Dosing Protocol: 10 mg Vial — Senolytic Clearance Guide", "fox04-dri-dosing-10mg"],
  ["SS-31 (Elamipretide) Dosing Protocol: 10 mg Vial — Mitochondrial Protection Guide", "ss-31-dosing-10mg"],
  ["Epithalon (Epitalon) Dosing Protocol: 20 mg Vial — Two-Course Annual Supply Guide", "epithalon-dosing-20mg"],
  ["Epithalon (Epitalon) Dosing Protocol: 10 mg Vial — Telomere & Anti-Aging Guide", "epithalon-dosing-10mg"],
  ["Pinealon Dosing Protocol: 20 mg Vial — Neuroprotection & Sleep Regulation Guide", "pinealon-dosing-20mg"],
  ["Cerebrolysin Dosing Protocol: 60 mg Vial — IV Infusion & Subcutaneous Guide", "cerebrolysin-dosing-60mg"],
  ["DSIP Dosing Protocol: 10 mg Vial — Extended Sleep Protocol Guide", "dsip-dosing-10mg"],
  ["DSIP Dosing Protocol: 5 mg Vial — Delta Sleep & Cortisol Modulation Guide", "dsip-dosing-5mg"],
  ["PE-22-28 Dosing Protocol: 10 mg Vial — Rapid Antidepressant Effect Guide", "pe-22-28-dosing-10mg"],
  ["Semax Dosing Protocol: 10 mg Vial — Extended Cognitive Enhancement Protocol", "semax-dosing-10mg"],
  ["Semax Dosing Protocol: 5 mg Vial — Cognitive Enhancement & BDNF Guide", "semax-dosing-5mg"],
  ["Selank Dosing Protocol: 10 mg Vial — Extended Anxiety & Cognitive Protocol", "selank-dosing-10mg"],
  ["Selank Dosing Protocol: 5 mg Vial — Anxiolytic & Cognitive Enhancement Guide", "selank-dosing-5mg"],
  ["SNAP-8 Dosing Protocol: 10 mg Vial — Anti-Wrinkle Facial Injection Guide", "snap-8-dosing-10mg"],
  ["Oxytocin Dosing Protocol: 10 mg Vial — Extended Supply Wellness Guide", "oxytocin-dosing-10mg"],
  ["Oxytocin Dosing Protocol: 5 mg Vial — Social Bonding & Anti-Inflammatory Guide", "oxytocin-dosing-5mg"],
  ["Gonadorelin Dosing Protocol: 2 mg Vial — TRT Support & LH Pulse Guide", "gonadorelin-dosing-2mg"],
  ["Kisspeptin Dosing Protocol: 10 mg Vial — HPG Axis & Sexual Function Guide", "kisspeptin-dosing-10mg"],
  ["Melanotan II Dosing Protocol: 10 mg Vial — Tanning & Dosing Schedule", "melanotan-ii-dosing-10mg"],
  ["PT-141 (Bremelanotide) Dosing Protocol: 10 mg Vial — Sexual Dysfunction Guide", "pt-141-dosing-10mg"],
  ["LL-37 Dosing Protocol: 5 mg Vial — Wound Healing & Immune Modulation Guide", "ll-37-dosing-5mg"],
  ["KPV Dosing Protocol: 10 mg Vial — Anti-Inflammatory & Gut Healing Guide", "kpv-dosing-10mg"],
  ["TB-500 Dosing Protocol: 10 mg Vial — Extended Loading & Maintenance Guide", "tb-500-dosing-10mg"],
  ["TB-500 Dosing Protocol: 5 mg Vial — Loading & Maintenance Schedule", "tb-500-dosing-5mg"],
  ["BPC-157 Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide", "bpc-157-dosing-10mg"],
  ["BPC-157 Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies", "bpc-157-dosing-5mg"],
  ["MGF Dosing Protocol: 5 mg Vial — Post-Workout Dosing Schedule & Supplies", "mgf-dosing-5mg"],
  ["IGF-1 LR3 Dosing Protocol: 1 mg Vial — Daily Dosing Schedule & Supplies", "igf-1-lr3-dosing-1mg"],
  ["HGH 191AA Dosing Protocol: 10 IU Vial — Daily Dosing Schedule & Supplies", "hgh-191aa-dosing-10iu"],
  ["Tesamorelin Dosing Protocol: 20 mg Vial — 10-Day Supply Guide", "tesamorelin-dosing-20mg"],
  ["Tesamorelin Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide", "tesamorelin-dosing-10mg"],
  ["Tesamorelin Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies", "tesamorelin-dosing-5mg"],
  ["CJC-1295 No DAC Dosing Protocol: 5 mg Vial — Pulsatile GHRH Dosing Guide", "cjc-1295-nodac-dosing-5mg"],
  ["CJC-1295 DAC Dosing Protocol: 5 mg Vial — Multi-Week Supply Guide", "cjc-1295-dac-dosing-5mg"],
  ["CJC-1295 DAC Dosing Protocol: 2 mg Vial — Weekly Dosing Schedule & Supplies", "cjc-1295-dac-dosing-2mg"],
  ["GHRP-6 Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide", "ghrp-6-dosing-10mg"],
  ["GHRP-6 Dosing Protocol: 5 mg Vial — Full Cycle Dosing Schedule & Supplies", "ghrp-6-dosing-5mg"],
  ["GHRP-6 Dosing Protocol: 2 mg Vial — Starter Dosing Guide & Supplies", "ghrp-6-dosing-2mg"],
  ["GHRP-2 Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide", "ghrp-2-dosing-10mg"],
  ["GHRP-2 Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies", "ghrp-2-dosing-5mg"],
  ["Ipamorelin Dosing Protocol: 10 mg Vial — Extended Supply Dosing Guide", "ipamorelin-dosing-10mg"],
  ["Ipamorelin Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies", "ipamorelin-dosing-5mg"],
  ["Sermorelin Dosing Protocol: 10 mg Vial — Extended Cycle Dosing & Supplies", "sermorelin-dosing-10mg"],
  ["Sermorelin Dosing Protocol: 5 mg Vial — Daily Dosing Schedule & Supplies", "sermorelin-dosing-5mg"],
  ["Mazdutide Dosing Protocol: 10 mg Vial — Full Titration & Maintenance Guide", "mazdutide-dosing-10mg"],
  ["Mazdutide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies", "mazdutide-dosing-5mg"],
  ["Survodutide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies", "survodutide-dosing-10mg"],
  ["Cagrilintide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies", "cagrilintide-dosing-10mg"],
  ["Cagrilintide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies", "cagrilintide-dosing-5mg"],
  ["Retatrutide Dosing Protocol: 30 mg Vial — Maintenance Dosing & Supplies", "retatrutide-dosing-30mg"],
  ["Retatrutide Dosing Protocol: 20 mg Vial — Week-by-Week Titration & Supplies", "retatrutide-dosing-20mg"],
  ["Retatrutide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies", "retatrutide-dosing-10mg"],
  ["Retatrutide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies", "retatrutide-dosing-5mg"],
  ["Tirzepatide Dosing Protocol: 30 mg Vial — Week-by-Week Titration & Supplies", "tirzepatide-dosing-30mg"],
  ["Tirzepatide Dosing Protocol: 15 mg Vial — Week-by-Week Titration & Supplies", "tirzepatide-dosing-15mg"],
  ["Tirzepatide Dosing Protocol: 10 mg Vial — Week-by-Week Titration & Supplies", "tirzepatide-dosing-10mg"],
  ["Tirzepatide Dosing Protocol: 5 mg Vial — Week-by-Week Titration & Supplies", "tirzepatide-dosing-5mg"],
  ["Semaglutide 10 mg Vial Dosing Protocol", "semaglutide-dosing-10mg"],
  ["Semaglutide 20 mg Vial Dosing Protocol", "semaglutide-dosing-20mg"],
  ["Semaglutide 5 mg Vial Dosing Protocol", "semaglutide-dosing-5mg"],
];

/* ------------------------------------------------------------------ */
/*  Structured data                                                   */
/* ------------------------------------------------------------------ */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Peptide Protocol Guides",
  description:
    "Clinician-reviewed dosing protocols for compounded peptides covering weight loss, growth hormone, tissue repair, cognitive support, anti-aging, and more.",
  url: "https://www.mypeptidematch.com/protocols",
  numberOfItems: SCHEMA_PROTOCOLS.length,
  itemListElement: SCHEMA_PROTOCOLS.map(([name, slug], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    url: `https://www.mypeptidematch.com/protocols/${slug}`,
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Protocols",
      item: { "@id": "https://www.mypeptidematch.com/protocols", name: "Protocols" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Card                                                              */
/* ------------------------------------------------------------------ */
const CARD_BOX_SHADOW =
  "rgba(160, 160, 160, 0.45) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 3px 0px";

const ProtocolCard = ({ protocol, compact = false }) => (
  <a
    className="group flex flex-col overflow-hidden rounded-[5px] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
    href={protocol.href}
    style={{ boxShadow: CARD_BOX_SHADOW }}
  >
    <div className="flex flex-1 flex-col p-5">
      <h3
        className={`${
          compact ? "text-base" : "text-lg"
        } font-semibold leading-snug text-[#333333] transition-colors group-hover:text-[#1F6CD6]`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {protocol.name}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b7280]">
        {protocol.desc}
      </p>

      <div className="mt-auto pt-4">
        {protocol.vialSizes ? (
          <>
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[#9ca3af]">
              Select vial size
            </p>
            <div className="flex flex-wrap gap-1.5">
              {protocol.vialSizes.map((v, i) => (
                <a
                  key={`${v.href}-${i}`}
                  className="rounded-full border border-[#1F6CD6] px-2.5 py-0.5 text-xs font-medium text-[#1F6CD6] transition-colors hover:bg-[#1F6CD6] hover:text-white"
                  href={v.href}
                >
                  {v.label}
                </a>
              ))}
            </div>
          </>
        ) : (
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1F6CD6] transition-colors group-hover:text-[#1a5bb5]">
            View protocol
            <ArrowRightIcon />
          </span>
        )}
      </div>
    </div>
  </a>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function AllProtocols() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

      {/* ---------------- Hero ---------------- */}
      <section className="bg-[#FDFAEE]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="pb-10 pt-10 sm:pb-14 sm:pt-12">
            <nav
              aria-label="Breadcrumb"
              className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
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
                  Protocols
                </span>
              </span>
            </nav>
            <h1
              className="mt-4 text-3xl font-bold text-[#333333] sm:text-4xl lg:text-[2.75rem] lg:leading-[3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Peptide Protocol Guides
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#4a4a4a]">
              Clinician-reviewed, week-by-week dosing guides for 100+ compounded
              peptides — reconstitution steps, supplies checklists, and cycle
              tips across weight loss, GH optimization, tissue repair,
              anti-aging, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Sticky search + category bar ---------------- */}
      <div className="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-2.5">
            <div className="relative shrink-0">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]" />
              <input
                placeholder="Search protocols…"
                className="h-8 w-44 rounded-full border border-[#e5e7eb] bg-[#f9fafb] pl-8 pr-3 text-sm text-[#333333] placeholder:text-[#9ca3af] focus:border-[#1F6CD6] focus:outline-none focus:ring-1 focus:ring-[#1F6CD6] sm:w-52"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              className="flex min-w-0 flex-1 gap-1 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat.id}
                  data-cat={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-[#1F6CD6] text-white"
                      : "text-[#4a4a4a] hover:bg-[#f3f4f6] hover:text-[#1F6CD6]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Main content ---------------- */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* ============ Popular protocols ============ */}
        <section className="mb-14">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2
                className="text-xl font-bold text-[#333333] sm:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Popular protocols
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                The most-referenced dosing guides on the platform.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_PROTOCOLS.map((p) => (
              <ProtocolCard key={p.href} protocol={p} compact />
            ))}
          </div>

          <hr className="mt-14 border-[#e5e7eb]" />
        </section>

        {/* ============ Category sections ============ */}
        {SECTIONS.map((section, idx) => (
          <section
            key={section.id}
            id={`section-${section.id}`}
            className={`scroll-mt-20 ${idx > 0 ? "mt-14" : ""}`}
          >
            <div className="mb-5">
              <h2
                className="text-xl font-bold text-[#333333] sm:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.title}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#6b7280]">
                {section.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.protocols.map((p) => (
                <ProtocolCard key={p.href + p.name} protocol={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}