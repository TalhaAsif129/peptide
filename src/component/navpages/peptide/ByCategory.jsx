import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */
const SITE_URL = "https://www.mypeptidematch.com";
const CARD_SHADOW =
  "rgba(160, 160, 160, 0.45) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 3px 0px";

const FDA_BADGES = {
  approved: {
    label: "FDA Approved",
    className:
      "bg-[var(--fda-approved-bg)] text-[var(--fda-approved-text)] border border-[var(--fda-approved-border)] [&_.dot]:bg-[var(--fda-approved-text)]",
  },
  compoundable: {
    label: "Compoundable",
    className:
      "bg-[var(--fda-compoundable-bg)] text-[var(--fda-compoundable-text)] border border-[var(--fda-compoundable-border)] [&_.dot]:bg-[var(--fda-compoundable-text)]",
  },
  research: {
    label: "Research Use",
    className:
      "bg-[var(--fda-research-bg)] text-[var(--fda-research-text)] border border-[var(--fda-research-border)] [&_.dot]:bg-[var(--fda-research-text)]",
  },
};

const CATEGORY_TABS = [
  { label: "All", href: "/peptides", active: true },
  { label: "Weight Loss", href: "/peptides?category=weight-loss" },
  { label: "Anti-Aging", href: "/peptides?category=anti-aging-longevity" },
  { label: "Tissue Repair", href: "/peptides?category=tissue-repair-recovery" },
  { label: "Hormone", href: "/peptides?category=hormone-optimization" },
  { label: "Cognitive", href: "/peptides?category=cognitive-enhancement" },
  { label: "Sexual Wellness", href: "/peptides?category=sexual-wellness" },
  { label: "Immune", href: "/peptides?category=immune-support" },
];

const FDA_FILTERS = ["FDA Approved", "Compoundable", "Research Use"];

const QUICK_LINKS = [
  { href: "/peptide-dosage-guide", label: "Peptide Dosage Guide →" },
  { href: "/how-to-reconstitute-peptides", label: "How to Reconstitute Peptides →" },
  { href: "/tools/peptide-calculator", label: "Peptide Calculator →" },
];

/* ------------------------------------------------------------------ */
/*  Peptide data                                                      */
/* ------------------------------------------------------------------ */

const SECTION_WEIGHT_LOSS = {
  title: "Weight Loss",
  peptides: [
    {
      slug: "semaglutide",
      name: "Semaglutide",
      badge: "approved",
      className: "GLP-1 Receptor Agonist",
      description: "FDA-approved GLP-1 agonist for weight loss and type 2 diabetes.",
      tags: ["Weight Loss", "Type 2 Diabetes"],
    },
    {
      slug: "tirzepatide",
      name: "Tirzepatide",
      badge: "approved",
      className: "GIP/GLP-1 Receptor Agonist",
      description: "Dual GIP/GLP-1 agonist for weight loss and type 2 diabetes.",
      tags: ["Weight Loss", "Type 2 Diabetes"],
    },
    {
      slug: "liraglutide",
      name: "Liraglutide",
      badge: "approved",
      className: "GLP-1 Receptor Agonist",
      description:
        "FDA-approved GLP-1 receptor agonist for weight management and type 2 diabetes.",
      tags: ["Weight Loss", "Type 2 Diabetes"],
    },
    {
      slug: "retatrutide",
      name: "Retatrutide",
      badge: "research",
      className: "Triple Incretin Agonist",
      description:
        "Retatrutide (LY3437943) is an investigational triple GLP-1/GIP/glucagon receptor agonist from Eli Lilly. In Phase 2 obesity trials it produced up to ~24% mean weight loss at 48 weeks — the highest reported for any obesity drug — but it is not FDA-approved and has no legal commercial source as of 2026.",
      tags: ["Weight Loss", "Type 2 Diabetes", "Metabolic Health"],
    },
    {
      slug: "cagrilintide",
      name: "Cagrilintide",
      badge: "research",
      className: "Amylin Analogue",
      description:
        "Cagrilintide is a long-acting amylin analogue in Phase 3 development, studied in combination with semaglutide (CagriSema). The CagriSema combination achieved approximately 22.7% body weight reduction at 68 weeks in the SCALE trial.",
      tags: ["Weight management", "Obesity", "Type 2 diabetes"],
    },
    {
      slug: "survodutide",
      name: "Survodutide",
      badge: "research",
      className: "GLP-1/Glucagon Dual Agonist",
      description:
        "Survodutide (BI 456906) is a dual GLP-1 and glucagon receptor agonist in Phase 3 trials for obesity and MASH (metabolic-associated steatohepatitis), demonstrating approximately 14.9% weight loss at 46 weeks in Phase 2b studies.",
      tags: ["Weight management", "MASH/NASH", "Obesity"],
    },
    {
      slug: "mazdutide",
      name: "Mazdutide",
      badge: "research",
      className: "GLP-1/Glucagon Dual Agonist",
      description:
        "Mazdutide (IBI362) is a weekly GLP-1 and glucagon receptor dual agonist developed by Innovent Biologics, currently in Phase 3 trials in China. Phase 3 GLORY-1 trial data showed 14.5% body weight reduction over 36 weeks.",
      tags: ["Weight management", "Type 2 diabetes", "Obesity"],
    },
    {
      slug: "l-carnitine",
      name: "L-Carnitine",
      badge: "approved",
      className: "Amino Acid Derivative",
      description:
        "L-Carnitine is a conditionally essential amino acid derivative (β-hydroxy-γ-trimethylaminobutyric acid) that facilitates the transport of long-chain fatty acids across the inner mitochondrial membrane for β-oxidation, serving as a critical cofactor in energy metabolism.",
      tags: ["Energy metabolism", "Weight management", "Cardiovascular support", "+1"],
    },
    {
      slug: "tesamorelin",
      name: "Tesamorelin",
      badge: "approved",
      className: "Growth Hormone Releasing Hormone Analog",
      description:
        "Stabilized GHRH analog, FDA-approved as Egrifta for excess abdominal fat in adults with HIV lipodystrophy.",
      tags: [
        "somatotropic signaling modulation",
        "lipid metabolism",
        "visceral adipose regulation",
      ],
    },
    {
      slug: "cagrilintide-semaglutide-blend",
      name: "Cagrilintide + Semaglutide Blend",
      badge: "research",
      className: "Peptide Blend",
      description:
        "CagriSema, a compounded combination of the amylin analogue cagrilintide and the GLP-1 agonist semaglutide, studied in Phase 3 REDEFINE trials with approximately 22.7% body weight reduction at 68 weeks.",
      tags: ["Weight management", "Obesity", "Metabolic syndrome"],
    },
    {
      slug: "tesamorelin-cjc-1295-no-dac-ipamorelin-12mg-blend",
      name: "Tesamorelin, CJC-1295 (no DAC), Ipamorelin 12mg (Blend)",
      badge: "research",
      className: "Growth Hormone Secretagogue",
      description:
        "A research peptide blend formulated to investigate growth hormone axis modulation through combined GHRH and ghrelin receptor pathways.",
      tags: ["endocrine studies", "receptor biology studies"],
    },
    {
      slug: "aicar",
      name: "AICAR",
      badge: "research",
      className: "",
      description:
        "AICAR is a research compound that acts as an AMP analog activating AMP-activated protein kinase (AMPK).",
      tags: ["metabolic regulation", "energy regulation"],
    },
    {
      slug: "ipamorelin-tesamorelin-blend",
      name: "Ipamorelin + Tesamorelin Blend",
      badge: "research",
      className: "Peptide Blend",
      description:
        "A compounded blend combining ipamorelin (ghrelin receptor agonist) with tesamorelin (GHRH analogue) for synergistic GH secretion with tesamorelin's additional visceral fat-reducing properties.",
      tags: ["Growth hormone", "Visceral fat reduction", "Anti-aging"],
    },
    {
      slug: "o-304",
      name: "O-304",
      badge: "research",
      className: "",
      description:
        "O-304 is a synthetic small-molecule research compound developed to modulate cellular senescence-associated pathways.",
      tags: ["epigenetic regulation", "extracellular matrix remodeling", "cellular longevity"],
    },
    {
      slug: "adipotide-ftpp",
      name: "Adipotide (FTPP)",
      badge: "research",
      className: "Targeted proapoptotic compound",
      description:
        "Adipotide, also known as FTPP, is a synthetic research peptide designed as a targeted proapoptotic compound.",
      tags: ["angiogenesis inhibition", "vascular remodeling", "adipose tissue metabolism"],
    },
    {
      slug: "aod-9604",
      name: "AOD-9604",
      badge: "research",
      className: "Growth Hormone Fragment",
      description:
        "AOD-9604 is a research peptide consisting of amino acids 177–191 of the human growth hormone sequence.",
      tags: ["metabolic research", "adipocyte differentiation research"],
    },
    {
      slug: "aod-9604-cjc-1295-ipamorelin-blend",
      name: "AOD-9604 + CJC-1295 + Ipamorelin Blend",
      badge: "research",
      className: "Peptide Blend",
      description:
        "A triple-peptide compounded blend combining AOD-9604 (fat-mobilizing GH fragment) with CJC-1295 and ipamorelin for comprehensive GH-axis optimization with targeted lipolysis.",
      tags: ["Weight management", "Growth hormone", "Body composition"],
    },
    {
      slug: "mots-c",
      name: "MOTS-c",
      badge: "research",
      className: "Mitochondrial-Derived Peptide",
      description:
        "MOTS-c is a mitochondrial-derived peptide composed of 16 amino acids.",
      tags: ["cellular metabolism research"],
    },
    {
      slug: "5-amino-1mq",
      name: "5-Amino-1MQ",
      badge: "research",
      className: "",
      description:
        "5-amino-1MQ is a small-molecule research compound that functions as a selective nicotinamide N-methyltransferase (NNMT) inhibitor.",
      tags: [
        "investigate epigenetic and redox control mechanisms",
        "cellular metabolism",
        "aging",
      ],
    },
    {
      slug: "tesofensine",
      name: "Tesofensine",
      badge: "research",
      className: "Triple Monoamine Reuptake Inhibitor",
      description:
        "Tesofensine is a synthetic small molecule, not a peptide, that blocks the reuptake of noradrenaline, dopamine and serotonin. It reached phase 2 trials for obesity and is not FDA-approved.",
      tags: [
        "Obesity (investigational, phase 2)",
        "Hypothalamic obesity (with metoprolol as Tesomet, small phase 2 trial)",
      ],
    },
  ],
};

const SECTION_ANTI_AGING = {
  title: "Anti-Aging & Longevity",
  peptides: [
    {
      slug: "sermorelin",
      name: "Sermorelin",
      badge: "compoundable",
      className: "Growth Hormone Releasing Hormone",
      description:
        "GHRH analog for growth hormone deficiency, formerly FDA-approved as Geref and now compounded by prescription.",
      tags: ["Anti-Aging", "Growth Hormone"],
    },
    {
      slug: "cjc-1295-ipamorelin",
      name: "CJC-1295 / Ipamorelin",
      badge: "research",
      className: "Growth Hormone Secretagogue",
      description: "Combination growth hormone secretagogue therapy.",
      tags: ["Anti-Aging", "Recovery"],
    },
    {
      slug: "hgh-191aa",
      name: "HGH 191AA",
      badge: "approved",
      className: "Growth Hormone",
      description:
        "HGH 191AA refers to recombinant human growth hormone (somatropin) with the full 191 amino acid sequence. It is FDA-approved under multiple brand names for growth hormone deficiency, Turner syndrome, and other specific indications.",
      tags: ["Growth hormone deficiency", "Anti-aging", "Body composition", "+1"],
    },
    {
      slug: "tb-500",
      name: "TB-500",
      badge: "research",
      className: "Thymosin Peptide",
      description:
        "Synthetic fragment of thymosin beta-4 used for tissue repair, recovery, and reducing inflammation.",
      tags: ["Tissue Repair", "Recovery", "Anti-Inflammation"],
    },
    {
      slug: "nad-plus",
      name: "NAD+",
      badge: "research",
      className: "",
      description: "Coenzyme vital for cellular energy, DNA repair, and longevity.",
      tags: ["Anti-Aging", "Cellular Energy", "Neuroprotection"],
    },
    {
      slug: "ipamorelin",
      name: "Ipamorelin",
      badge: "research",
      className: "Growth Hormone Releasing Peptide",
      description:
        "A selective growth hormone-releasing peptide with minimal side effects.",
      tags: ["Growth Hormone Release", "Anti-Aging", "Muscle Recovery"],
    },
    {
      slug: "cjc-1295",
      name: "CJC-1295",
      badge: "research",
      className: "Growth Hormone Releasing Hormone Analog",
      description:
        "A growth hormone-releasing hormone analog that increases GH and IGF-1 levels.",
      tags: ["Growth Hormone Release", "Anti-Aging", "Body Composition"],
    },
    {
      slug: "hexarelin",
      name: "Hexarelin",
      badge: "research",
      className: "Growth Hormone Releasing Peptide",
      description:
        "Potent GHRP that stimulates GH secretion for muscle recovery and anti-aging.",
      tags: ["Growth Hormone Release", "Muscle Recovery", "Anti-Aging"],
    },
    {
      slug: "glutathione",
      name: "Glutathione",
      badge: "research",
      className: "Antioxidant Tripeptide",
      description:
        "Glutathione (GSH) is the body's master antioxidant, a tripeptide (γ-Glu-Cys-Gly) synthesized in every cell. IV glutathione bypasses poor oral bioavailability to rapidly replenish intracellular GSH, supporting detoxification, immune function, and skin brightening.",
      tags: ["Antioxidant therapy", "Detoxification", "Immune support", "+1"],
    },
    {
      slug: "epithalon",
      name: "Epithalon",
      badge: "research",
      className: "Telomerase Activator",
      description:
        "Tetrapeptide that activates telomerase, studied for anti-aging and longevity.",
      tags: ["Anti-Aging", "Longevity", "Telomere Support"],
    },
    {
      slug: "ghrp-6",
      name: "GHRP-6",
      badge: "research",
      className: "Growth Hormone Releasing Peptide",
      description:
        "Growth hormone-releasing peptide that stimulates appetite and GH secretion.",
      tags: ["Growth Hormone Release", "Appetite Stimulation"],
    },
    {
      slug: "copper-peptides",
      name: "Copper Peptides",
      badge: "research",
      className: "Copper Peptide",
      description:
        "Family of copper-binding peptides used for skin rejuvenation, wound healing, and hair growth.",
      tags: ["Skin Rejuvenation", "Hair Growth", "Wound Healing"],
    },
    {
      slug: "ss-31",
      name: "SS-31",
      badge: "research",
      className: "Mitochondria-Targeting Peptide",
      description:
        "SS-31 (Elamipretide, MTP-131) is a tetrapeptide (D-Arg-Dmt-Lys-Phe-NH2) that selectively targets the inner mitochondrial membrane to stabilize cardiolipin, reduce electron leak, and restore mitochondrial cristae architecture in aged and failing mitochondria.",
      tags: ["Mitochondrial dysfunction", "Heart failure", "Anti-aging", "+1"],
    },
    {
      slug: "adamax",
      name: "Adamax",
      badge: "research",
      className: "Peptide Blend",
      description:
        "Adamax is a branded compounded peptide blend typically combining CJC-1295 DAC, Ipamorelin, and BPC-157, formulated to simultaneously stimulate growth hormone secretion, promote tissue repair, and support recovery — often available as a single reconstitution vial.",
      tags: ["Growth hormone optimization", "Tissue repair", "Recovery", "+1"],
    },
    {
      slug: "cerebrolysin",
      name: "Cerebrolysin",
      badge: "research",
      className: "Porcine brain peptide mixture",
      description:
        "Cerebrolysin is a mixture of low-molecular-weight peptides and amino acids made by controlled digestion of pig brain proteins and given by IV infusion. It is used as a licensed medicine for stroke and dementia in some countries, mainly in Eastern Europe and Asia, but it is not FDA-approved.",
      tags: ["Acute ischaemic stroke", "Stroke rehabilitation", "Traumatic brain injury", "+2"],
    },
    {
      slug: "dsip",
      name: "DSIP",
      badge: "research",
      className: "Neuropeptide",
      description:
        "Delta Sleep-Inducing Peptide (DSIP) is a naturally occurring nonapeptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) found in the hypothalamus and peripheral blood that promotes deep (delta-wave) sleep and modulates stress hormone release.",
      tags: ["Sleep disorders", "Stress", "Hormone regulation"],
    },
    {
      slug: "pnc-27",
      name: "PNC-27",
      badge: "research",
      className: "Anticancer Peptide",
      description:
        "PNC-27 is a 27-amino acid peptide containing a p53 MDM-2 binding domain fused to a membrane-penetrating sequence, designed to selectively induce apoptosis in cancer cells that aberrantly express HDM-2 (MDM-2) on their plasma membrane.",
      tags: ["Cancer research", "Anti-tumor"],
    },
    {
      slug: "cardiogen",
      name: "Cardiogen",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        "Cardiogen is a synthetic tetrapeptide bioregulator (Ala-Glu-Asp-Arg) developed at the St. Petersburg Institute of Bioregulation for cardiac tissue restoration, studied for cardiomyocyte protection and heart muscle recovery following ischemia.",
      tags: ["Cardiac protection", "Heart muscle recovery", "Anti-aging"],
    },
    {
      slug: "testagen",
      name: "Testagen",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        "Testagen is a synthetic tetrapeptide bioregulator (Lys-Glu-Asp-Gly, KEDG) from Khavinson's group in St. Petersburg, marketed for male reproductive health. Published research on KEDG covers DNA and histone binding and a few animal studies; no study has tested it on the testes, testosterone or sperm in people.",
      tags: ["Male reproductive health", "Testosterone support", "Anti-aging"],
    },
    {
      slug: "cortagen",
      name: "Cortagen",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        "Cortagen is a synthetic tetrapeptide bioregulator (Ala-Glu-Asp-Pro) developed for vascular and cardiac tissue support, particularly targeting the regulation of blood vessel tone and endothelial function in aging cardiovascular tissue.",
      tags: ["Cardiovascular health", "Vascular protection", "Anti-aging"],
    },
    {
      slug: "livagen",
      name: "Livagen",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        'Livagen is the synthetic tetrapeptide Lys-Glu-Asp-Ala (KEDA), developed by Khavinson\'s group in St. Petersburg as a liver "bioregulator." Its research is cell, tissue-culture and rat work plus lab studies on white blood cells from elderly donors; no human trial has been published.',
      tags: ["Liver health", "Immune support", "Anti-aging"],
    },
    {
      slug: "crystagen",
      name: "Crystagen",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        "Crystagen is a synthetic tripeptide bioregulator (Glu-Asp-Pro) from Khavinson's group in St. Petersburg, studied mainly in cell and animal research for effects on immune cells, including B-cell activation in the aging spleen.",
      tags: ["Immune support", "Anti-aging"],
    },
    {
      slug: "cartalax",
      name: "Cartalax",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        "Cartalax is a synthetic tripeptide bioregulator (Ala-Glu-Asp) developed for cartilage and joint tissue restoration, studied for chondroprotective effects and articular cartilage regeneration in animal models.",
      tags: ["Joint health", "Cartilage repair", "Anti-aging"],
    },
    {
      slug: "chonluten",
      name: "Chonluten",
      badge: "research",
      className: "Russian Bioregulator Peptide",
      description:
        "Chonluten is a synthetic tripeptide bioregulator (Glu-Asp-Gly) developed for bronchial and lung tissue support, studied for airway epithelial protection and pulmonary function restoration in aged and compromised tissue.",
      tags: ["Lung health", "Bronchial support", "Anti-aging"],
    },
    {
      slug: "ahk-cu",
      name: "AHK-Cu",
      badge: "research",
      className: "",
      description:
        "AHK-Cu is a research peptide complex studied for its role in extracellular matrix remodeling and fibroblast activation.",
      tags: ["extracellular matrix remodeling", "fibroblast activation"],
    },
    {
      slug: "ahk-tripeptide-3",
      name: "AHK (Tripeptide-3)",
      badge: "research",
      className: "",
      description:
        "AHK (Tripeptide-3) is a research peptide composed of the tripeptide Ala-His-Lys, studied for its effects on dermal fibroblast function and extracellular matrix gene regulation.",
      tags: [
        "dermal fibroblast function",
        "extracellular matrix gene regulation",
        "collagen remodeling",
        "+1",
      ],
    },
    {
      slug: "pal-ahk",
      name: "Pal-AHK",
      badge: "research",
      className: "",
      description:
        "Pal-AHK is a research peptide consisting of the tripeptide Ala-His-Lys conjugated with palmitic acid to enhance skin absorption and bioavailability.",
      tags: ["tissue regeneration", "protein remodeling"],
    },
    {
      slug: "palmitoyl-dipeptide-6",
      name: "Palmitoyl Dipeptide-6",
      badge: "research",
      className: "",
      description:
        "Palmitoyl Dipeptide-6 is a research peptide composed of a short dipeptide conjugated to a palmitic acid chain to enhance lipophilicity and dermal penetration.",
      tags: [
        "modulate fibroblast activity",
        "enhance dermal penetration",
        "regulate collagen biosynthesis",
      ],
    },
    {
      slug: "rigin-palmitoyl-tetrapeptide-7",
      name: "Rigin (Palmitoyl Tetrapeptide-7)",
      badge: "research",
      className: "",
      description:
        "Rigin is a research peptide designed to modulate cytokine expression and dermal peptide signaling.",
      tags: [
        "modulate cytokine expression",
        "dermal peptide signaling",
        "skin homeostasis",
        "+1",
      ],
    },
    {
      slug: "syn-coll-palmitoyl-tripeptide-5",
      name: "Syn-Coll (Palmitoyl Tripeptide-5)",
      badge: "research",
      className: "",
      description:
        "Syn-Coll is a research peptide designed to enhance stability and skin permeability for in vitro studies.",
      tags: ["enhance stability", "skin permeability", "collagen synthesis"],
    },
    {
      slug: "tripeptide-29",
      name: "Tripeptide-29",
      badge: "research",
      className: "Collagen peptide",
      description:
        "Tripeptide-29 is a research peptide composed of Gly-Pro-Hyp, studied for its role in extracellular matrix synthesis and fibroblast regulation.",
      tags: ["extracellular matrix synthesis", "fibroblast regulation", "tissue repair"],
    },
    {
      slug: "ovagen",
      name: "Ovagen",
      badge: "research",
      className: "Bioregulator",
      description:
        "Ovagen is the synthetic tripeptide Glu-Asp-Leu (EDL) from Khavinson's bioregulator program in St. Petersburg. Its published research is rat kidney-injury studies and aging kidney cell cultures; no human trial has been published, and no published study has tested it for the liver or gut.",
      tags: [
        "Kidney research (animal and cell studies)",
        "Liver and gut health (marketed; no published study)",
        "Anti-aging",
      ],
    },
    {
      slug: "glow-blend",
      name: "GLOW Peptide Blend",
      badge: "research",
      className: "Research Peptide Blend (BPC-157 + TB-500 + GHK-Cu)",
      description:
        "The GLOW peptide blend combines BPC-157, TB-500, and GHK-Cu, three research peptides studied for tissue repair, angiogenesis, and skin and connective-tissue remodeling.",
      tags: ["Cellular repair", "Angiogenesis", "Extracellular matrix regulation", "+2"],
    },
    {
      slug: "klow-blend",
      name: "KLOW Peptide Blend",
      badge: "research",
      className: "Research Peptide Blend (BPC-157 + TB-500 + KPV + GHK-Cu)",
      description:
        "The KLOW peptide blend combines BPC-157, TB-500, KPV, and GHK-Cu, the GLOW blend plus KPV, studied for cellular repair, immune modulation, and extracellular matrix regulation.",
      tags: ["Cellular repair", "Immune modulation", "Extracellular matrix regulation", "+1"],
    },
    {
      slug: "pal-ghk-palmitoyl-tripeptide-1",
      name: "Pal-GHK (Palmitoyl Tripeptide-1)",
      badge: "research",
      className: "",
      description:
        "Pal-GHK is a research peptide formed by conjugating Gly-His-Lys to palmitic acid to enhance dermal delivery.",
      tags: ["dermal repair", "ECM remodeling", "cell–matrix communication"],
    },
    {
      slug: "cjc-1295-no-dac-ipamorelin-10mg-blend",
      name: "CJC-1295 (no DAC), Ipamorelin 10mg (Blend)",
      badge: "research",
      className: "Growth Hormone Secretagogue",
      description:
        "CJC-1295 (no DAC) and Ipamorelin is a research peptide blend combining two mechanistically distinct secretagogues that act synergistically on the growth hormone axis.",
      tags: [
        "growth hormone stimulation",
        "research on GH pulsatility",
        "study of receptor cross-talk",
      ],
    },
    {
      slug: "ghrp-2",
      name: "GHRP-2",
      badge: "research",
      className: "Growth Hormone Secretagogue",
      description:
        "GHRP-2 is a synthetic hexapeptide that functions as a potent growth hormone secretagogue.",
      tags: [
        "growth hormone regulation",
        "endocrine research",
        "receptor biology research",
      ],
    },
    {
      slug: "vesugen",
      name: "Vesugen",
      badge: "research",
      className: "Bioregulator",
      description:
        "Vesugen is a synthetic short peptide bioregulator derived from vascular tissue extracts.",
      tags: ["vascular homeostasis", "endothelial integrity", "microcirculatory regulation"],
    },
    {
      slug: "cjc-1295-nodac-ipamorelin-blend",
      name: "CJC-1295 No DAC + Ipamorelin Blend",
      badge: "research",
      className: "Peptide Blend",
      description:
        "The most widely used compounded GH peptide combination, pairing modified GRF 1-29 (CJC-1295 without DAC) with ipamorelin for a clean, pulsatile GH release that mimics natural secretory patterns.",
      tags: ["Growth hormone", "Anti-aging", "Recovery"],
    },
    {
      slug: "slu-pp-332",
      name: "SLU-PP-332",
      badge: "research",
      className: "",
      description:
        "SLU-PP-332 is a small-molecule research compound identified as a selective agonist of peroxisome proliferator-activated receptor delta (PPARδ).",
      tags: [
        "metabolic research",
        "mitochondrial research",
        "lipid metabolism",
        "+2",
      ],
    },
    {
      slug: "fox04-dri",
      name: "FOX04-DRI",
      badge: "research",
      className: "",
      description:
        "FOXO4-DRI is a synthetic D-retro-inverso research peptide designed to selectively disrupt the FOXO4–p53 interaction.",
      tags: [
        "senescent cell clearance",
        "cellular longevity",
        "DNA damage response signaling",
      ],
    },
    {
      slug: "snap-8",
      name: "SNAP-8",
      badge: "research",
      className: "",
      description:
        "SNAP-8 is a synthetic octapeptide derived from SNAP-25, designed to modulate vesicle exocytosis-associated protein interactions.",
      tags: ["neuromodulation", "cell–membrane interaction mechanisms"],
    },
    {
      slug: "acetyl-hexapeptide-3-argireline",
      name: "Acetyl Hexapeptide-3 (Argireline)",
      badge: "research",
      className: "",
      description:
        "Acetyl Hexapeptide-3 (Argireline) is a hexapeptide analog of SNAP-25 developed to modulate vesicle docking and catecholamine release.",
      tags: ["modulate vesicle docking", "catecholamine release inhibition"],
    },
    {
      slug: "matrixyl",
      name: "Matrixyl",
      badge: "research",
      className: "Lipidated signal peptide (cosmetic ingredient)",
      description:
        "Matrixyl is the trade name for palmitoyl pentapeptide-4 (pal-KTTKS), a fatty-acid-linked fragment of type I procollagen used as an anti-wrinkle cosmetic ingredient. It has been studied in people only as a topical cream.",
      tags: ["Topical anti-wrinkle skincare (fine lines and wrinkles)"],
    },
    {
      slug: "pentapeptide-18-leuphasyl",
      name: "Pentapeptide-18 (Leuphasyl)",
      badge: "research",
      className: "",
      description:
        "Pentapeptide-18 (Leuphasyl) is a research peptide derived from the enkephalin sequence, designed to study neuromodulatory mechanisms.",
      tags: ["neuropeptide research", "dermatological research"],
    },
    {
      slug: "vialox-pentapeptide-3v",
      name: "Vialox (Pentapeptide-3V)",
      badge: "research",
      className: "Synthetic Pentapeptide",
      description:
        "Vialox (Pentapeptide-3V) is a research peptide designed as a synthetic pentapeptide analog modeled after snake venom proteins.",
      tags: [
        "neuromuscular transmission research",
        "receptor-mediated peptide signaling studies",
        "muscle relaxation mechanisms",
      ],
    },
    {
      slug: "vilon",
      name: "Vilon",
      badge: "research",
      className: "Bioregulator",
      description:
        "Vilon is a synthetic dipeptide bioregulator (Lys-Glu, KE) from Khavinson's group in St. Petersburg, described as thymus-related. Research is mostly cell and rodent work; there is one small human study and no established dose.",
      tags: ["Immune support", "Anti-aging"],
    },
    {
      slug: "pinealon",
      name: "Pinealon",
      badge: "research",
      className: "Bioregulator",
      description:
        "Pinealon is a synthetic tripeptide bioregulator (Glu-Asp-Arg, EDR) from Khavinson's group in St. Petersburg, studied for neuroprotection in cell and rodent models. Human data is limited to small Russian studies, and no dose has been established.",
      tags: ["Neuroprotection", "Cognitive health", "Anti-aging"],
    },
    {
      slug: "bronchogen",
      name: "Bronchogen",
      badge: "research",
      className: "",
      description:
        "Bronchogen is a short tetrapeptide examined in laboratory research for its association with bronchial tissue and lung-related cellular systems.",
      tags: ["gene regulation research", "lung health studies"],
    },
    {
      slug: "prostamax",
      name: "Prostamax",
      badge: "research",
      className: "Bioregulator",
      description:
        "Prostamax is a peptide bioregulator derived from prostate tissue extracts that modulates peptide-mediated regulation of cell differentiation and proliferation.",
      tags: ["molecular biology research", "reproductive research"],
    },
    {
      slug: "ghk-cu",
      name: "GHK-Cu",
      badge: "research",
      className: "",
      description:
        "GHK-Cu is a research peptide composed of the tripeptide sequence Gly-His-Lys bound to copper(II) ions, studied for its role in extracellular matrix modulation and cellular signaling.",
      tags: [
        "extracellular matrix modulation",
        "cellular signaling",
        "collagen production regulation",
        "+2",
      ],
    },
    {
      slug: "cjc-1295-ghrp-2-blend",
      name: "CJC-1295 + GHRP-2 Blend",
      badge: "research",
      className: "Peptide Blend",
      description:
        "A compounded blend of CJC-1295 (GHRH analogue) and GHRP-2 (ghrelin receptor agonist) for synergistic growth hormone stimulation through complementary receptor pathways.",
      tags: ["Growth hormone", "Anti-aging", "Body composition"],
    },
    {
      slug: "b7-33",
      name: "B7-33",
      badge: "research",
      className: "Relaxin-family peptide analog",
      description:
        "B7-33 is a single-chain relaxin-family peptide analog designed to selectively activate the RXFP1 receptor.",
      tags: ["receptor biology research", "GPCR signaling", "cytoprotective mechanisms"],
    },
  ],
};

const SECTION_TISSUE_REPAIR = {
  title: "Tissue Repair & Recovery",
  peptides: [
    {
      slug: "bpc-157",
      name: "BPC-157",
      badge: "research",
      className: "Synthetic Fragment",
      description:
        "Research peptide for tissue repair and gut health. FDA advisers backed compounding in July 2026.",
      tags: ["Tissue Repair", "Recovery"],
    },
    {
      slug: "pentadecapeptide",
      name: "Pentadecapeptide",
      badge: "research",
      className: "Body Protection Compound",
      description:
        "15-amino acid peptide related to BPC-157 used for tissue repair and recovery.",
      tags: ["Tissue Repair", "Recovery"],
    },
    {
      slug: "igf-1-lr3",
      name: "IGF-1 LR3",
      badge: "research",
      className: "IGF-1 Analogue",
      description:
        "IGF-1 LR3 (Long R3 Insulin-like Growth Factor-1) is a modified 83-amino acid analogue of IGF-1 with an N-terminal arginine extension and Glu3→Arg3 substitution, conferring a half-life of approximately 20–30 hours versus 12–15 minutes for native IGF-1.",
      tags: ["Muscle growth", "Recovery", "Anti-aging"],
    },
    {
      slug: "mgf",
      name: "MGF",
      badge: "research",
      className: "IGF-1 Splice Variant",
      description:
        "Mechano Growth Factor (MGF) is an alternatively spliced form of the IGF-1 gene expressed locally in muscle tissue following mechanical stretch or damage, promoting satellite cell activation and muscle repair.",
      tags: ["Muscle repair", "Recovery", "Injury healing"],
    },
    {
      slug: "kpv",
      name: "KPV",
      badge: "research",
      className: "Alpha-MSH Fragment",
      description:
        "KPV (Lys-Pro-Val) is a C-terminal tripeptide of alpha-melanocyte stimulating hormone (α-MSH) that retains the anti-inflammatory and gut-healing properties of the parent peptide while being resistant to peptidase degradation. It has demonstrated efficacy in inflammatory bowel disease models.",
      tags: ["Inflammatory bowel disease", "Gut healing", "Anti-inflammatory", "+1"],
    },
    {
      slug: "bpc-157-tb-500-blend",
      name: "BPC-157, TB-500 (Blend)",
      badge: "research",
      className: "",
      description:
        "The BPC-157 and TB-500 blend combines two well-characterized research peptides studied for their roles in cellular repair, angiogenesis, and tissue remodeling.",
      tags: ["cellular repair", "angiogenesis", "tissue remodeling"],
    },
    {
      slug: "tri-heal-blend",
      name: "Tri-Heal",
      badge: "research",
      className: "Peptide Blend",
      description:
        "Tri-Heal is a compounded triple-peptide repair blend combining TB-500 (Thymosin Beta-4 fragment), BPC-157, and KPV for comprehensive anti-inflammatory and tissue regeneration support across musculoskeletal and gut tissues.",
      tags: ["Tissue repair", "Anti-inflammatory", "Gut healing"],
    },
    {
      slug: "follistatin-315",
      name: "Follistatin 315",
      badge: "research",
      className: "",
      description:
        "Follistatin 315 is a research peptide isoform of the follistatin protein that binds and neutralizes activins and myostatin.",
      tags: [
        "molecular research",
        "cellular research",
        "peptide–growth factor interactions",
      ],
    },
    {
      slug: "follistatin",
      name: "Follistatin",
      badge: "research",
      className: "",
      description:
        "Follistatin is a multifunctional glycoprotein studied for its role in growth factor signaling networks.",
      tags: [
        "growth factor signaling",
        "regulatory component in signaling networks",
      ],
    },
    {
      slug: "follistatin-344",
      name: "Follistatin 344",
      badge: "research",
      className: "",
      description:
        "Follistatin 344 is a research peptide variant known to bind myostatin and activin-A, modulating TGF-β signaling.",
      tags: ["muscle differentiation", "growth factor regulation"],
    },
    {
      slug: "peg-mgf",
      name: "PEG MGF",
      badge: "research",
      className: "IGF-1 splice variant",
      description:
        "PEG-MGF is a PEGylated splice variant of IGF-1 designed to extend peptide stability and half-life for research applications.",
      tags: ["muscle repair", "cell proliferation"],
    },
    {
      slug: "kpv-ac-kpv-nh2",
      name: "KPV (Ac-KPV-NH2)",
      badge: "research",
      className: "",
      description:
        "KPV is a synthetic tripeptide fragment derived from the C-terminal sequence of alpha-melanocyte-stimulating hormone (α-MSH).",
      tags: [
        "epithelial integrity",
        "cytokine balance",
        "immune-mediated stress responses",
      ],
    },
    {
      slug: "ara-290",
      name: "ARA-290",
      badge: "research",
      className: "",
      description:
        "ARA-290 is a synthetic research peptide engineered from the B-helix domain of erythropoietin.",
      tags: ["inflammation studies", "tissue protection research"],
    },
    {
      slug: "ll-37",
      name: "LL-37",
      badge: "research",
      className: "Host Defense Peptide",
      description:
        "LL-37 is a cationic α-helical research peptide derived from the C-terminal region of human cathelicidin (hCAP18).",
      tags: ["antimicrobial research", "immunomodulatory research"],
    },
    {
      slug: "tb-500-fragment-17-23",
      name: "TB-500 Fragment (17-23)",
      badge: "research",
      className: "",
      description:
        "TB-500 Fragment (17-23) is a research peptide derived from the actin-binding region of Thymosin Beta-4.",
      tags: ["wound repair", "tissue remodeling", "regenerative signaling"],
    },
  ],
};

const SECTION_HORMONE = {
  title: "Hormone Optimization",
  peptides: [
    {
      slug: "hcg",
      name: "HCG",
      badge: "approved",
      className: "Gonadotropin",
      description:
        "Human chorionic gonadotropin (hCG) is a placental glycoprotein hormone that acts like luteinizing hormone. It is FDA-approved for prepubertal cryptorchidism, selected male hypogonadotropic hypogonadism and ovulation induction; clinics also use it off-label alongside testosterone therapy and after anabolic steroid use.",
      tags: [
        "Male hypogonadotropic hypogonadism",
        "Prepubertal cryptorchidism",
        "Ovulation induction",
        "+1",
      ],
    },
    {
      slug: "kisspeptin-10",
      name: "Kisspeptin-10",
      badge: "research",
      className: "Neuropeptide",
      description:
        "Neuropeptide involved in reproductive hormone regulation and sexual health.",
      tags: ["Sexual Wellness", "Hormone Regulation"],
    },
    {
      slug: "hmg",
      name: "HMG",
      badge: "approved",
      className: "Gonadotropin Mixture",
      description:
        "Human menopausal gonadotropin (HMG) is a purified gonadotropin preparation derived from the urine of postmenopausal women, containing both FSH and LH activity. It is used primarily for fertility induction and restoration of spermatogenesis.",
      tags: [
        "Fertility",
        "Spermatogenesis restoration",
        "Hypogonadotropic hypogonadism",
      ],
    },
    {
      slug: "oxytocin",
      name: "Oxytocin",
      badge: "approved",
      className: "Neuropeptide",
      description:
        "Oxytocin is a nine-amino-acid hormone made in the hypothalamus that drives uterine contractions and milk let-down and also acts in the brain. It is FDA-approved as Pitocin for obstetric use; compounded nasal and subcutaneous forms for anxiety, social or sexual goals are off-label.",
      tags: [
        "Labor induction (approved)",
        "Postpartum bleeding control (approved)",
        "Anxiety and social use (off-label)",
        "+1",
      ],
    },
    {
      slug: "gonadorelin",
      name: "Gonadorelin",
      badge: "research",
      className: "Gonadotropin-Releasing Hormone",
      description:
        "Gonadorelin is a research peptide corresponding to the natural gonadotropin-releasing hormone (GnRH).",
      tags: [
        "hypothalamic–pituitary axis regulation",
        "peptide receptor kinetics",
        "endocrine feedback control mechanisms",
      ],
    },
    {
      slug: "ghrh",
      name: "GHRH",
      badge: "research",
      className: "Growth Hormone Secretagogue",
      description:
        "GHRH is a 44-amino acid hypothalamic research peptide that stimulates growth hormone release.",
      tags: ["neuroendocrine research", "receptor biology research"],
    },
    {
      slug: "trh-thyrotropin-protirelin",
      name: "TRH Thyrotropin (Protirelin)",
      badge: "research",
      className: "Hypothalamic regulatory peptide",
      description:
        "Thyrotropin releasing hormone (TRH or Protirelin) is a research peptide that modulates pituitary secretion of thyrotropin (TSH) and prolactin.",
      tags: [
        "neuroendocrine feedback",
        "receptor coupling",
        "second-messenger signal transduction",
      ],
    },
    {
      slug: "triptorelin-gnrh",
      name: "Triptorelin (GnRH)",
      badge: "research",
      className: "Gonadotropin-Releasing Hormone Analog",
      description:
        "Triptorelin is a synthetic decapeptide analog of gonadotropin-releasing hormone (GnRH).",
      tags: ["receptor biology", "endocrine regulation research"],
    },
    {
      slug: "pancragen",
      name: "Pancragen",
      badge: "research",
      className: "Bioregulator",
      description:
        'Pancragen is the synthetic tetrapeptide Lys-Glu-Asp-Trp (KEDW, usually amidated) developed by Khavinson\'s group as a pancreas "bioregulator." It was designed as a copy of a fragment shared by insulin-releasing hormones and has been studied in pancreatic cell cultures, diabetic rats, old monkeys and two small human studies.',
      tags: [
        "Blood sugar regulation (animal and small human studies)",
        "Pancreatic function",
        "Anti-aging",
      ],
    },
  ],
};

const SECTION_COGNITIVE = {
  title: "Cognitive Enhancement",
  peptides: [
    {
      slug: "dihexa",
      name: "Dihexa",
      badge: "research",
      className: "Nootropic Peptide",
      description:
        "Nootropic peptide studied for cognitive enhancement and neuroprotection.",
      tags: ["Cognitive Enhancement", "Neuroprotection"],
    },
    {
      slug: "semax",
      name: "Semax",
      badge: "research",
      className: "",
      description:
        "Semax is a synthetic heptapeptide derived from the ACTH(4-10) fragment, used in research on neurotrophic and nootropic signaling.",
      tags: ["neurotrophic signaling", "nootropic signaling"],
    },
    {
      slug: "pe-22-28",
      name: "PE-22-28",
      badge: "research",
      className: "",
      description:
        "PE-22-28 is a research peptide derived from the C-terminal fragment of pituitary adenylyl cyclase-activating polypeptide (PACAP 1–38).",
      tags: ["synaptic plasticity", "neurotrophic modulation", "neuroprotection"],
    },
    {
      slug: "fraternine",
      name: "Fraternine",
      badge: "research",
      className: "Venom-Derived Peptide",
      description:
        "Fraternine is a peptide isolated from the venom of the social wasp Parachartergus fraternus, studied for its potential in neurodegeneration research.",
      tags: ["Neuroprotection", "Parkinson's Disease Research"],
    },
    {
      slug: "melanostatin-dm",
      name: "Melanostatin DM",
      badge: "research",
      className: "",
      description:
        "Melanostatin DM is a research peptide analog of the tripeptide Prolyl-Leucyl-Glycinamide (PLG), designed to study melanocyte-stimulating hormone (α-MSH) receptor modulation.",
      tags: ["pigmentation research", "dermatological research"],
    },
    {
      slug: "selank",
      name: "Selank",
      badge: "research",
      className: "",
      description:
        "Selank is a synthetic research peptide derived from the natural tuftsin sequence.",
      tags: ["neuroimmune modulation"],
    },
  ],
};

const SECTION_SEXUAL = {
  title: "Sexual Wellness",
  peptides: [
    {
      slug: "pt-141",
      name: "PT-141",
      badge: "approved",
      className: "Melanocortin Receptor Agonist",
      description: "FDA-approved for hypoactive sexual desire disorder.",
      tags: ["Sexual Wellness"],
    },
    {
      slug: "melanotan-ii",
      name: "Melanotan II",
      badge: "research",
      className: "Melanocortin Peptide",
      description:
        "Synthetic melanocortin peptide studied for tanning, sexual dysfunction, and appetite suppression.",
      tags: ["Tanning", "Sexual Wellness"],
    },
    {
      slug: "melanotan-1-mt1",
      name: "Melanotan 1 (MT1)",
      badge: "research",
      className: "α-Melanocyte-Stimulating Hormone Analog",
      description:
        "Melanotan I is a synthetic analog of α-melanocyte-stimulating hormone (α-MSH) used to study melanocortin receptor activation.",
      tags: ["receptor pharmacology", "cell signaling research"],
    },
  ],
};

const SECTION_IMMUNE = {
  title: "Immune Support",
  peptides: [
    {
      slug: "thymosin-alpha-1",
      name: "Thymosin Alpha-1",
      badge: "research",
      className: "",
      description:
        "Thymosin Alpha-1 is a synthetic polypeptide consisting of 28 amino acids derived from the thymic hormone thymosin fraction 5.",
      tags: [
        "modulation of T-cell-related pathways",
        "toll-like receptor activation",
        "cytokine-associated signaling",
      ],
    },
    {
      slug: "thymagen-thymogen",
      name: "Thymagen (Thymogen)",
      badge: "research",
      className: "Thymic peptide",
      description:
        "Thymogen is a synthetic dipeptide derived from thymic extracts with regulatory activity in preclinical research.",
      tags: [
        "T-cell differentiation",
        "nucleic acid synthesis modulation",
        "system maturation study",
        "+2",
      ],
    },
    {
      slug: "vip-6mg",
      name: "VIP 6mg",
      badge: "research",
      className: "Neuropeptide",
      description:
        "VIP (Vasoactive Intestinal Peptide) is a 28 amino acid neuropeptide that functions as a potent endogenous ligand for VPAC1 and VPAC2 receptors.",
      tags: [
        "neuroendocrine signaling",
        "inflammatory regulation",
        "vascular homeostasis",
      ],
    },
  ],
};

const SECTION_OTHER = {
  title: "Other",
  peptides: [
    {
      slug: "longevity-performance-obesity-research",
      name: "Longevity, Performance & Obesity Research",
      badge: "research",
      className: "",
      description:
        "A research peptide formulation developed to investigate metabolic regulation, mitochondrial function, and nutrient-sensing pathways.",
      tags: [
        "metabolic regulation",
        "mitochondrial function",
        "nutrient-sensing pathways",
      ],
    },
  ],
};

const SECTIONS = [
  SECTION_WEIGHT_LOSS,
  SECTION_ANTI_AGING,
  SECTION_TISSUE_REPAIR,
  SECTION_HORMONE,
  SECTION_COGNITIVE,
  SECTION_SEXUAL,
  SECTION_IMMUNE,
  SECTION_OTHER,
];

const TOTAL_PEPTIDES = SECTIONS.reduce((sum, s) => sum + s.peptides.length, 0);
const allPeptidesFlat = SECTIONS.flatMap((s) => s.peptides);

/* ------------------------------------------------------------------ */
/*  Structured data                                                   */
/* ------------------------------------------------------------------ */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Peptide Encyclopedia",
  numberOfItems: allPeptidesFlat.length,
  itemListElement: allPeptidesFlat.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${SITE_URL}/peptides/${p.slug}`,
    description: p.description,
  })),
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                    */
/* ------------------------------------------------------------------ */
const SearchIcon = () => (
  <svg
    className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const Badge = ({ type }) => {
  const badge = FDA_BADGES[type];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[6px] py-1 pl-2 pr-2.5 text-[12px] font-medium ${badge.className}`}
    >
      <span className="dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
      {badge.label}
    </span>
  );
};

const PeptideCard = ({ peptide }) => (
  <a
    className="group flex flex-col rounded-[5px] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
    href={`/peptides/${peptide.slug}`}
    style={{ boxShadow: CARD_SHADOW }}
  >
    <div className="flex items-start justify-between gap-3">
      <h3
        className="text-lg font-bold text-[#333333]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {peptide.name}
      </h3>
      <Badge type={peptide.badge} />
    </div>

    {peptide.className && (
      <p className="mt-1 text-sm font-medium text-[#6b7280]">
        {peptide.className}
      </p>
    )}

    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#6b7280]">
      {peptide.description}
    </p>

    {peptide.tags?.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-1.5">
        {peptide.tags.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="rounded-[4px] bg-[#F7F8F9] px-2.5 py-0.5 text-xs font-medium text-[#6b7280]"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-[#1F6CD6] transition-colors group-hover:text-[#1a5bb5]">
      Learn more
      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </span>
  </a>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function PeptideEncyclopedia() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <main id="main-content" className="flex-1">
      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
              Reference Library
            </span>
            <h1
              className="mt-3 text-[44px] font-bold leading-[52px] tracking-tight text-[#333333]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Peptide Encyclopedia
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7280]">
              Your comprehensive guide to therapeutic peptides. Explore
              mechanisms, clinical evidence, FDA status, and find clinics that
              offer them.{" "}
              <strong className="text-[#333333]">
                {TOTAL_PEPTIDES} peptides
              </strong>{" "}
              covered and growing.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] px-3 py-1.5 font-medium text-[#333333] hover:border-[#FFF0BB] hover:bg-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Content ---------------- */}
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Category tabs */}
          <div className="scroll-fade-container overflow-x-auto border-b border-[#e5e7eb]">
            <nav className="flex gap-1" aria-label="Peptide categories">
              {CATEGORY_TABS.map((tab) => (
                <a
                  key={tab.label}
                  className={`category-tab relative shrink-0 px-4 py-2.5 text-sm font-medium transition-colors ${
                    tab.active
                      ? "text-[#333333]"
                      : "text-[#6b7280] hover:text-[#4a4a4a]"
                  }`}
                  href={tab.href}
                >
                  {tab.label}
                  {tab.active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#FEED5A]" />
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Search + FDA filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <SearchIcon />
              <input
                placeholder="Search by name, class, or use..."
                className="w-full rounded-[5px] border border-[#e5e7eb] bg-white py-2.5 pl-10 pr-4 text-sm text-[#333333] placeholder:text-[#6b7280] focus:border-[#FEED5A] focus:outline-none focus:ring-2 focus:ring-[rgba(254,237,90,0.3)]"
                aria-label="Search peptides"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                FDA:
              </span>
              {FDA_FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(activeFilter === filter ? null : filter)
                  }
                  className={`rounded-[4px] border px-3 py-1.5 text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? "border-[#333333] bg-[#333333] text-white"
                      : "border-[#e5e7eb] bg-white text-[#6b7280] hover:border-[#333333] hover:text-[#333333]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#6b7280]">
            Showing{" "}
            <strong className="text-[#333333]">{TOTAL_PEPTIDES}</strong>{" "}
            peptides
          </p>

          {/* Sections */}
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <div className="mb-5 flex items-center gap-3">
                  <h2
                    className="text-xl font-bold text-[#333333]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {section.title}
                  </h2>
                  <span className="rounded-[4px] bg-[#F7F8F9] px-2.5 py-0.5 text-xs font-medium text-[#6b7280]">
                    {section.peptides.length}
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.peptides.map((p) => (
                    <PeptideCard key={p.slug} peptide={p} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}