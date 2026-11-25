export const SYRINGE_SIZES = [
  {
    label: "0.3 mL",
    sublabel: "30 units",
    value: 0.3,
    units: 30,
  },
  {
    label: "0.5 mL",
    sublabel: "50 units",
    value: 0.5,
    units: 50,
  },
  {
    label: "1.0 mL",
    sublabel: "100 units",
    value: 1.0,
    units: 100,
  },
];

export const BAC_WATER_PRESETS = [1, 2, 2.5, 3, 5];

export const PEPTIDE_PRESETS = [
  {
    id: "semaglutide",
    label: "Semaglutide",
    slug: "semaglutide",
    concentrations: [0.5, 1, 2, 2.5],
    defaultConc: 2,
    commonDoses: [0.25, 0.5, 1, 1.7, 2.4],
    defaultDose: 0.25,
    doseUnit: "mg",
    vialSizes: [2, 3, 5, 10],
    defaultVial: 5,
    commonUnits: [10, 12.5, 25, 40, 50, 100],
  },
  {
    id: "tirzepatide",
    label: "Tirzepatide",
    slug: "tirzepatide",
    concentrations: [5, 10, 15],
    defaultConc: 5,
    commonDoses: [2.5, 5, 7.5, 10, 12.5, 15],
    defaultDose: 2.5,
    doseUnit: "mg",
    vialSizes: [5, 10, 15],
    defaultVial: 10,
    commonUnits: [25, 50, 75, 100, 150],
  },
  {
    id: "retatrutide",
    label: "Retatrutide",
    slug: "retatrutide",
    concentrations: [2, 5, 10],
    defaultConc: 5,
    commonDoses: [1, 2, 4, 6, 8, 12],
    defaultDose: 2,
    doseUnit: "mg",
    vialSizes: [5, 10],
    defaultVial: 5,
    commonUnits: [20, 40, 80, 120, 160],
  },
  {
    id: "custom",
    label: "Custom / Other",
    slug: null,
    concentrations: [1, 2, 5, 10],
    defaultConc: 2,
    commonDoses: [0.25, 0.5, 1, 2],
    defaultDose: 0.5,
    doseUnit: "mg",
    vialSizes: [5, 10],
    defaultVial: 5,
    commonUnits: [10, 20, 25, 50, 100],
  },
];

export const RX_OFFERS = {
  semaglutide: {
    peptideName: "semaglutide",
    price: 59,
    vendorName: "Collective",
    priceNote: "Same price any dose — $199/yr membership, 21 days free",
    url: "https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876",
  },
  tirzepatide: {
    peptideName: "tirzepatide",
    price: 69,
    vendorName: "Collective",
    priceNote: "Same price any dose — $199/yr membership, 21 days free",
    url: "https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876",
  },
};

export const NAV_LINKS = [
  {
    label: "Clinics",
    href: "/clinics",
    dropdown: [
      { label: "Search Clinics", href: "/#hero-section" },
      { label: "Browse by State", href: "/clinics" },
      { label: "Telehealth Clinics", href: "/clinics?type=telehealth" },
      { label: "Best Telehealth (2026)", href: "/best" },
      { label: "By Treatment", href: "/treatment" },
      { label: "Login to Dashboard", href: "/auth/login" },
      { label: "Claim Your Listing", href: "/claim-your-listing" },
    ],
  },
  {
    label: "Protocols",
    href: "/protocols",
    dropdown: [
      { label: "All Protocols", href: "/protocols" },
      { label: "Weight Loss & GLP-1", href: "/protocols/weight-loss-glp1" },
      { label: "Growth Hormone & GHRH", href: "/protocols/growth-hormone-ghrh" },
      { label: "Tissue Repair & Recovery", href: "/protocols/tissue-repair-recovery" },
      { label: "Anti-Aging & Longevity", href: "/protocols/anti-aging-longevity" },
      { label: "Cognitive, Neuro & Sleep", href: "/protocols/cognitive-neuro-sleep" },
      { label: "Peptide Blends & Stacks", href: "/protocols/blends-stacks" },
    ],
  },
  {
    label: "Peptides",
    href: "/peptides",
    dropdown: [
      { label: "Peptide Encyclopedia", href: "/peptides" },
      { label: "Popular Peptides", href: "/peptides#popular" },
      { label: "By Category", href: "/peptides#categories" },
      { label: "Compare Peptides", href: "/compare" },
      { label: "Best Telehealth (2026)", href: "/best" },
      { label: "Vendors", href: "/vendors" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    dropdown: [
      { label: "Tools Home", href: "/tools" },
      { label: "BAC Water Calculator", href: "/tools/bac-water-calculator" },
      { label: "Peptide Calculator", href: "/tools/peptide-calculator" },
      { label: "Titration Calculator", href: "/tools/peptide-titration-calculator" },
      { label: "Units Converter", href: "/tools/units-converter" },
      { label: "Semaglutide Calculator", href: "/tools/semaglutide-reconstitution-calculator" },
      { label: "Tirzepatide Calculator", href: "/tools/tirzepatide-reconstitution-calculator" },
      { label: "Semaglutide Units", href: "/tools/semaglutide-units-converter" },
      { label: "Tirzepatide Units", href: "/tools/tirzepatide-units-converter" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
