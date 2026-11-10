import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ArrowRight,
  CircleCheckBig,
  ShieldCheck,
  ThermometerSnowflake,
  Beaker,
  Droplets,
  Refrigerator,
  CircleX,
  TriangleAlert,
} from "lucide-react";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: {
        "@id": "https://www.mypeptidematch.com",
        name: "Home",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How to Reconstitute Peptides",
      item: "https://www.mypeptidematch.com/how-to-reconstitute-peptides",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Reconstitute Peptides",
  description:
    "Step-by-step guide to reconstituting lyophilized peptide powder with bacteriostatic water (BAC water) using sterile technique. Covers workspace preparation, water volume calculation, mixing, and storage.",
  url: "https://www.mypeptidematch.com/how-to-reconstitute-peptides",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Prepare a clean workspace and gather supplies",
      text: "Wash your hands thoroughly and put on sterile gloves. Clean your work surface. Gather: your peptide vial, bacteriostatic water (BAC water), sterile insulin syringes, alcohol swabs (70% isopropyl), a sharps container, and a marker for labeling.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Bring both vials to room temperature",
      text: "Remove your peptide vial and bacteriostatic water from refrigerator or freezer storage. Allow both vials to reach room temperature (approximately 20–25°C / 68–77°F) before proceeding. Using cold liquids increases the risk of foaming and incomplete dissolution.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine the correct amount of bacteriostatic water to add",
      text: "The amount of BAC water you add determines your concentration (mg/mL). Use the formula: concentration (mg/mL) = vial size (mg) ÷ water volume (mL). For most peptides, 1–2 mL for 5 mg vials and 2–3 mL for 10 mg vials is typical. Use the free peptide reconstitution calculator at MyPeptideMatch.com to find your exact syringe units for any setup.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Swab both vials and slowly inject the bacteriostatic water",
      text: "Swab the rubber stopper of both the peptide vial and the bacteriostatic water vial with a fresh alcohol swab and allow to air-dry for 10 seconds. Draw the correct volume of bacteriostatic water into a sterile syringe. Insert the needle into the peptide vial and slowly inject the water, aiming the stream at the glass wall at a 45° angle — not directly onto the lyophilized powder. Adding water too fast or directly to the powder can degrade peptide bonds.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Gently swirl until completely dissolved",
      text: "Remove the needle and gently rotate or swirl the vial in a circular motion until the solution is completely clear. Do not shake vigorously, do not invert repeatedly, and do not use a vortex mixer. Vigorous agitation can break peptide bonds and reduce potency. If the solution remains cloudy after several minutes, allow more time — some peptides take 5–10 minutes to fully dissolve.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Label and store the reconstituted vial",
      text: "Write the reconstitution date on the vial with a marker. Store the reconstituted peptide solution at 2–8°C (36–46°F) in a refrigerator — not the door shelf where temperature fluctuates. Keep vials upright. Most reconstituted peptides remain stable for 3–4 weeks refrigerated when reconstituted with bacteriostatic water.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does reconstituting a peptide mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reconstituting a peptide means adding a sterile diluent — usually bacteriostatic water — to a lyophilized (freeze-dried) peptide vial to create a liquid solution that can be measured and injected. Most therapeutic and research peptides are supplied in lyophilized powder form because the powder is more stable than liquid during shipping and storage.",
      },
    },
    {
      "@type": "Question",
      name: "How much bacteriostatic water do I add to a 5 mg peptide vial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reconstitution volumes for a 5 mg peptide vial are 1 mL or 2 mL of bacteriostatic water. Using 1 mL creates a 5 mg/mL concentration; using 2 mL creates a 2.5 mg/mL concentration. A more dilute solution makes it easier to measure smaller doses accurately on an insulin syringe. Your prescribing clinician or compounding pharmacy will specify the recommended volume.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use sterile water instead of bacteriostatic water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterile water for injection (SWFI) can be used but is not ideal for multi-dose vials. Bacteriostatic water contains 0.9% benzyl alcohol, which inhibits bacterial growth and allows safe multi-dose use. Sterile water has no preservative, so it should only be used for single-dose preparations. Always follow your healthcare provider's specific instructions.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate how many syringe units to draw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three steps: (1) Concentration (mg/mL) = vial size (mg) ÷ water added (mL). (2) Dose volume (mL) = desired dose (mcg) ÷ (concentration × 1,000). (3) Units = dose volume (mL) × 100 for a U-100 syringe. Example: 5 mg vial + 2 mL BAC water = 2.5 mg/mL; 250 mcg dose ÷ 2,500 = 0.1 mL = 10 units. Use the peptide reconstitution calculator to skip the math.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a reconstituted peptide last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reconstituted peptides typically remain stable for 3–4 weeks when stored at 2–8°C with bacteriostatic water. For longer storage, freeze aliquots at -20°C (3–4 months). Avoid repeated freeze-thaw cycles. Unreconstituted lyophilized powder stored at -20°C can last for years.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I not shake the vial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vigorous shaking creates mechanical stress that can disrupt peptide bonds, causing aggregation, foaming, and reduced potency. Gently swirl the vial in a circular motion instead. Some peptides take 5–10 minutes to fully dissolve — patience is important.",
      },
    },
    {
      "@type": "Question",
      name: "Does the concentration affect how the peptide works?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Concentration only affects how much liquid you inject to deliver a given dose — not the biological effect of the peptide. A 250 mcg dose is identical whether reconstituted at 2.5 mg/mL (0.1 mL injection) or 5 mg/mL (0.05 mL injection).",
      },
    },
    {
      "@type": "Question",
      name: "What syringe should I use to draw my peptide dose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most peptide users use U-100 insulin syringes (100 units = 1 mL). For very small doses, a 0.3 mL (30-unit) or 0.5 mL (50-unit) syringe provides finer graduation marks for more accurate measurement. Use the smallest syringe that can hold your full dose. Common needle gauges are 29G or 31G with a ½-inch needle for subcutaneous injection.",
      },
    },
  ],
};

const QUICK_LINKS = [
  { href: "#what-is-reconstitution", label: "What is reconstitution" },
  { href: "#supplies", label: "Supplies needed" },
  { href: "#steps", label: "Step-by-step guide" },
  { href: "#bac-water-amount", label: "How much BAC water" },
  { href: "#calculate-dose", label: "Calculate your dose" },
  { href: "#mistakes", label: "Common mistakes" },
  { href: "#storage", label: "Storage" },
  { href: "#faq", label: "FAQ" },
];

const SUPPLIES = [
  {
    title: "Peptide vial (lyophilized powder)",
    description: "Stored per your pharmacy or supplier instructions",
  },
  {
    title: "Bacteriostatic water (BAC water)",
    description:
      "Standard diluent for multi-dose peptide vials; contains 0.9% benzyl alcohol",
  },
  {
    title: "Sterile insulin syringes",
    description:
      "U-100 (100-unit / 1 mL) syringes are most common; also available in 0.3 mL and 0.5 mL",
  },
  {
    title: "Alcohol swabs (70% isopropyl)",
    description: "For sterilizing vial stoppers before each puncture",
  },
  {
    title: "Sterile gloves",
    description: "Optional but recommended for additional sterile technique",
  },
  {
    title: "Sharps container",
    description: "For safe disposal of used needles and syringes",
  },
  {
    title: "Marker and label",
    description: "To record the reconstitution date on the vial",
  },
];

const CONCENTRATION_TABLE = [
  { vial: "2 mg", ml1: "2 mg/mL", ml2: "1 mg/mL", ml3: "—" },
  { vial: "5 mg", ml1: "5 mg/mL", ml2: "2.5 mg/mL", ml3: "1.67 mg/mL" },
  { vial: "10 mg", ml1: "10 mg/mL", ml2: "5 mg/mL", ml3: "3.33 mg/mL" },
  { vial: "15 mg", ml1: "15 mg/mL", ml2: "7.5 mg/mL", ml3: "5 mg/mL" },
];

const FORMULA_STEPS = [
  {
    step: 1,
    title: "Calculate concentration",
    formula: "Concentration (mg/mL) = Vial Size (mg) ÷ Water Added (mL)",
    example: "5 mg ÷ 2 mL = 2.5 mg/mL",
  },
  {
    step: 2,
    title: "Calculate dose volume",
    formula: "Dose Volume (mL) = Dose (mcg) ÷ (Concentration × 1,000)",
    example: "250 mcg ÷ (2.5 × 1,000) = 0.1 mL",
  },
  {
    step: 3,
    title: "Convert to syringe units",
    formula: "Units (U-100 syringe) = Dose Volume (mL) × 100",
    example: "0.1 mL × 100 = 10 units",
  },
];

const COMMON_MISTAKES = [
  {
    title: "Shaking the vial vigorously",
    desc: "Creates bubbles and mechanical shear force that can break peptide bonds and reduce potency. Gently swirl instead.",
  },
  {
    title: "Injecting water directly onto the powder",
    desc: "The impact force can denature peptides at the point of contact. Always aim the stream along the inner glass wall at a 45° angle.",
  },
  {
    title: "Using cold vials straight from the fridge",
    desc: "Cold-to-cold mixing can cause foaming and incomplete dissolution. Allow both vials to reach room temperature first.",
  },
  {
    title: "Reusing syringes or needles",
    desc: "Used needles become dull, increasing the risk of coring the rubber stopper and introducing particles into the vial. Always use a fresh sterile syringe.",
  },
  {
    title: "Not swabbing vial stoppers",
    desc: "Even sealed vials can have surface contamination. Swab both stoppers with 70% isopropyl alcohol before every puncture.",
  },
  {
    title: "Storing reconstituted peptide at room temperature",
    desc: "Without refrigeration, peptides degrade significantly faster. Always store at 2–8°C after reconstitution.",
  },
  {
    title: "Reconstituting too far in advance",
    desc: "Reconstituted peptides have limited stability windows. Only reconstitute what you'll use within the stability period specified by your prescriber or pharmacy.",
  },
];

const FAQS = [
  {
    q: "What does reconstituting a peptide mean?",
    a: "Reconstituting a peptide means adding a sterile diluent — usually bacteriostatic water — to a lyophilized (freeze-dried) peptide vial to create a liquid solution that can be measured and injected. Most therapeutic and research peptides are supplied in lyophilized powder form because the powder is more stable than liquid during shipping and storage.",
  },
  {
    q: "How much bacteriostatic water do I add to a 5 mg peptide vial?",
    a: "The most common reconstitution volumes for a 5 mg peptide vial are 1 mL or 2 mL of bacteriostatic water. Using 1 mL creates a 5 mg/mL concentration; using 2 mL creates a 2.5 mg/mL concentration. A more dilute solution makes it easier to measure smaller doses accurately on an insulin syringe. Your prescribing clinician or compounding pharmacy will specify the recommended volume.",
  },
  {
    q: "Can I use sterile water instead of bacteriostatic water?",
    a: "Sterile water for injection (SWFI) can be used but is not ideal for multi-dose vials. Bacteriostatic water contains 0.9% benzyl alcohol, which inhibits bacterial growth and allows safe multi-dose use. Sterile water has no preservative, so it should only be used for single-dose preparations. Always follow your healthcare provider's specific instructions.",
  },
  {
    q: "How do I calculate how many syringe units to draw?",
    a: "Three steps: (1) Concentration (mg/mL) = vial size (mg) ÷ water added (mL). (2) Dose volume (mL) = desired dose (mcg) ÷ (concentration × 1,000). (3) Units = dose volume (mL) × 100 for a U-100 syringe. Example: 5 mg vial + 2 mL BAC water = 2.5 mg/mL; 250 mcg dose ÷ 2,500 = 0.1 mL = 10 units. Use the peptide reconstitution calculator to skip the math.",
  },
  {
    q: "How long does a reconstituted peptide last?",
    a: "Reconstituted peptides typically remain stable for 3–4 weeks when stored at 2–8°C with bacteriostatic water. For longer storage, freeze aliquots at -20°C (3–4 months). Avoid repeated freeze-thaw cycles. Unreconstituted lyophilized powder stored at -20°C can last for years.",
  },
  {
    q: "Why should I not shake the vial?",
    a: "Vigorous shaking creates mechanical stress that can disrupt peptide bonds, causing aggregation, foaming, and reduced potency. Gently swirl the vial in a circular motion instead. Some peptides take 5–10 minutes to fully dissolve — patience is important.",
  },
  {
    q: "Does the concentration affect how the peptide works?",
    a: "No. Concentration only affects how much liquid you inject to deliver a given dose — not the biological effect of the peptide. A 250 mcg dose is identical whether reconstituted at 2.5 mg/mL (0.1 mL injection) or 5 mg/mL (0.05 mL injection).",
  },
  {
    q: "What syringe should I use to draw my peptide dose?",
    a: "Most peptide users use U-100 insulin syringes (100 units = 1 mL). For very small doses, a 0.3 mL (30-unit) or 0.5 mL (50-unit) syringe provides finer graduation marks for more accurate measurement. Use the smallest syringe that can hold your full dose. Common needle gauges are 29G or 31G with a ½-inch needle for subcutaneous injection.",
  },
];

const RELATED_TOOLS = [
  {
    name: "Peptide Reconstitution Calculator",
    href: "/tools/peptide-calculator",
  },
  {
    name: "BAC Water Calculator",
    href: "/tools/bac-water-calculator",
  },
  {
    name: "Peptide Units Converter",
    href: "/tools/units-converter",
  },
  {
    name: "Semaglutide Units Converter",
    href: "/tools/semaglutide-calculator",
  },
  {
    name: "Tirzepatide Units Converter",
    href: "/tools/titration-calculator",
  },
];

export default function HowToReconstitutePeptides() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="border-b border-[#e5e7eb] bg-gradient-to-b from-[#F7F8F9] to-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-7 sm:py-16 max-w-[900px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]"
          >
            <span className="inline-flex shrink-0 items-center gap-1">
              <Link
                to="/"
                className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors"
              >
                Home
              </Link>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight
                className="lucide lucide-chevron-right h-4 w-4 shrink-0 text-[#6b7280]"
                aria-hidden="true"
              />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">
                How to Reconstitute Peptides
              </span>
            </span>
            )
          </nav>

          <div className="mt-4 sm:mt-6">
            <h1 className="font-heading text-[26px] leading-[32px] font-bold md:tracking-[-0.36px] tracking-[-0.26px] text-[#333333] sm:text-4xl">
              How to Reconstitute Peptides
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] leading-relaxed text-[#6b7280]">
              <span>Last updated: February 2026</span>
              <span aria-hidden="true">·</span>
              <span>Medically reviewed by the MyPeptideMatch Editorial Team</span>
            </div>

            <p className="mt-3 text-[15px] leading-relaxed text-[#6b7280] sm:text-lg">
              A practical, step-by-step guide to mixing lyophilized peptide powder with bacteriostatic water using sterile technique — plus how to calculate the exact syringe units for your dose.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/tools/peptide-calculator"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-[5px] bg-[#1F6CD6] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Open peptide calculator{" "}
                <ArrowRight className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/tools/bac-water-calculator"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-[5px] border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#333333] transition-all hover:border-[#FFF0BB] hover:bg-[#F7F8F9]"
              >
                BAC water calculator{" "}
                <ArrowRight
                  className="lucide lucide-arrow-right h-4 w-4 text-[#1F6CD6]"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Quick Navigation Pills */}
            <div className="mt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="scroll-fade-container flex items-center gap-1.5 overflow-x-auto pb-1 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-start sm:overflow-visible sm:pb-0">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 text-[11px] md:leading-[16px] leading-[18px] font-medium text-[#6b7280] hover:border-[#FFF0BB] hover:bg-[#F7F8F9] hover:text-[#333333] sm:px-3 sm:text-xs"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[720px]">
          <div className="space-y-16">
            {/* 1. What is Reconstitution */}
            <div id="what-is-reconstitution" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                What does “reconstituting a peptide” mean?
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Most therapeutic and research peptides are supplied as{" "}
                <strong className="text-[#333333]">lyophilized powder</strong>{" "}
                — a freeze-dried form that is far more stable during shipping and storage than liquid. Reconstitution is the process of adding a sterile diluent (most commonly bacteriostatic water) to dissolve the powder into a clear, injectable solution.
              </p>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Once reconstituted, you can measure precise doses using a standard insulin syringe. The amount of water you add determines your{" "}
                <strong className="text-[#333333]">concentration</strong> (mg per mL), which in turn determines how many syringe units you draw for each dose.
              </p>
              <div className="mt-4 rounded-[5px] border border-[#DCE9FD] bg-[#DCE9FD]/30 p-4">
                <p className="text-sm text-[#333333]">
                  <strong>Key concept:</strong> The concentration only changes how much liquid you inject — not the amount of peptide in each dose. A 250 mcg dose is the same whether you reconstituted at 2.5 mg/mL or 5 mg/mL.
                </p>
              </div>
            </div>

            {/* 2. Supplies */}
            <div id="supplies" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                Supplies you need for peptide reconstitution
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Before you begin, gather all supplies on a clean surface. Having everything ready reduces handling errors and limits the time vials are open.
              </p>
              <ul className="mt-5 space-y-3">
                {SUPPLIES.map((supply, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheckBig
                      className="lucide lucide-circle-check-big mt-0.5 h-4 w-4 shrink-0 text-[#1F6CD6]"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#333333]">
                      <strong>{supply.title}</strong>
                      <span className="text-[#6b7280]"> — {supply.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Step-by-Step */}
            <div id="steps" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                Step-by-step: how to reconstitute peptides
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Follow these six steps in order. Sterile technique throughout is critical for safety.
              </p>
              <div className="mt-6 space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#FFF0BB] text-sm font-bold text-[#333333]">
                    1
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                      <ShieldCheck
                        className="lucide lucide-shield-check h-5 w-5 text-[#FEED5A]"
                        aria-hidden="true"
                      />
                      Prepare your workspace
                    </h3>
                    <div className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                      Wash your hands thoroughly with soap for at least 20 seconds. Put on sterile gloves if available. Wipe your work surface with a fresh alcohol swab and allow to dry. Gather your peptide vial, bacteriostatic water, sterile syringes, alcohol swabs, and a sharps container within easy reach before opening anything.
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#FFF0BB] text-sm font-bold text-[#333333]">
                    2
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                      <ThermometerSnowflake
                        className="lucide lucide-thermometer-snowflake h-5 w-5 text-[#FEED5A]"
                        aria-hidden="true"
                      />
                      Bring vials to room temperature
                    </h3>
                    <div className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                      If your peptide and bacteriostatic water were refrigerated or frozen, allow both vials to reach room temperature (20–25°C / 68–77°F) before reconstituting. Cold liquid injected into a cold powder can cause foaming and incomplete dissolution, which makes accurate dosing difficult. Allow 15–30 minutes for vials to warm up.
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#FFF0BB] text-sm font-bold text-[#333333]">
                    3
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                      <Beaker
                        className="lucide lucide-beaker h-5 w-5 text-[#FEED5A]"
                        aria-hidden="true"
                      />
                      Determine how much BAC water to add
                    </h3>
                    <div className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                      Before drawing water, calculate or confirm the correct volume for your protocol. Your clinician or compounding pharmacy will specify this, but common setups are 1–2 mL for 5 mg vials and 2–3 mL for 10 mg vials. See the concentration table below or use the{" "}
                      <Link
                        to="/tools/bac-water-calculator"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-[#1F6CD6] hover:underline"
                      >
                        BAC water calculator
                      </Link>{" "}
                      to determine the right amount for your setup.
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#FFF0BB] text-sm font-bold text-[#333333]">
                    4
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                      <Droplets
                        className="lucide lucide-droplets h-5 w-5 text-[#FEED5A]"
                        aria-hidden="true"
                      />
                      Swab both vials and inject the bacteriostatic water
                    </h3>
                    <div className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                      <p>
                        Swab the rubber stopper of both the peptide vial and the bacteriostatic water vial with a fresh alcohol swab. Allow the stoppers to air-dry for 10 seconds — do not blow on them or fan them dry.
                      </p>
                      <p className="mt-2">
                        Draw the correct volume of bacteriostatic water into a sterile syringe. Insert the needle into the peptide vial and slowly inject the water,{" "}
                        <strong className="text-[#333333]">
                          aiming the stream at the inner glass wall at a 45° angle
                        </strong>
                        , not directly at the powder. This prevents the force of the water from damaging the peptide structure. Inject slowly and steadily.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#FFF0BB] text-sm font-bold text-[#333333]">
                    5
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                      <Beaker
                        className="lucide lucide-beaker h-5 w-5 text-[#FEED5A]"
                        aria-hidden="true"
                      />
                      Gently swirl until dissolved — do not shake
                    </h3>
                    <div className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                      Remove the needle and cap it safely. Gently rotate the vial between your palms or swirl it in a slow circular motion until the solution becomes completely clear.
                      <strong className="text-[#333333]"> Do not shake vigorously</strong> — vigorous shaking creates bubbles and can break peptide bonds. Some peptides (especially larger ones like GHK-Cu or growth hormone peptides) can take 5–10 minutes to fully dissolve. If the solution does not clear after 15 minutes, contact your supplier — this may indicate a quality issue with the vial.
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#FFF0BB] text-sm font-bold text-[#333333]">
                    6
                  </div>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                      <Refrigerator
                        className="lucide lucide-refrigerator h-5 w-5 text-[#FEED5A]"
                        aria-hidden="true"
                      />
                      Label and store the reconstituted vial
                    </h3>
                    <div className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                      Write the reconstitution date on the vial with a permanent marker or attach a label. Store the reconstituted vial{" "}
                      <strong className="text-[#333333]">upright</strong> at 2–8°C (36–46°F) in the main body of your refrigerator (not the door, where temperature fluctuates). Most peptides reconstituted with bacteriostatic water remain stable for 3–4 weeks refrigerated. Never leave a reconstituted peptide vial at room temperature for extended periods.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. How Much BAC Water */}
            <div id="bac-water-amount" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                How much bacteriostatic water should I add?
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                The amount of BAC water you add determines your concentration — and therefore how many syringe units you draw per dose. Use this table as a starting reference. More water means a more dilute solution (larger injection volume per dose); less water means a more concentrated solution (smaller injection volume per dose).
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#e5e7eb]">
                      <th className="py-3 pr-4 text-left font-semibold text-[#333333]">
                        Vial Size
                      </th>
                      <th className="py-3 pr-4 text-left font-semibold text-[#333333]">
                        + 1 mL BAC water
                      </th>
                      <th className="py-3 pr-4 text-left font-semibold text-[#333333]">
                        + 2 mL BAC water
                      </th>
                      <th className="py-3 text-left font-semibold text-[#333333]">
                        + 3 mL BAC water
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F7F8F9]">
                    {CONCENTRATION_TABLE.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F7F8F9]">
                        <td className="py-3 pr-4 font-medium text-[#333333]">
                          {row.vial}
                        </td>
                        <td className="py-3 pr-4 text-[#6b7280]">
                          {row.ml1}
                        </td>
                        <td className="py-3 pr-4 text-[#6b7280]">
                          {row.ml2}
                        </td>
                        <td className="py-3 text-[#6b7280]">
                          {row.ml3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-[#6b7280]">
                Concentrations shown in mg/mL. Your clinician's protocol takes precedence over these general values. Use the{" "}
                <Link
                  to="/tools/bac-water-calculator"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-[#1F6CD6] hover:underline"
                >
                  BAC water calculator
                </Link>{" "}
                for a recommended volume based on your specific vial size and target dose.
              </p>
              <div className="mt-5 rounded-[5px] border border-amber-200 bg-[#FFF0BB]/60 p-4">
                <p className="text-sm text-[#333333]">
                  <strong>Practical tip:</strong> For smaller doses (50–250 mcg), using more BAC water (e.g., 2 mL for a 5 mg vial) makes it easier to measure accurately on a standard insulin syringe. For larger doses (1–5 mg, such as GLP-1 peptides), less water (1–2 mL) keeps the injection volume manageable.
                </p>
              </div>
            </div>

            {/* 5. Calculate Dose */}
            <div id="calculate-dose" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                How to calculate your syringe units after reconstitution
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Once you know your concentration, use the three-step formula below to determine how many units to draw on your insulin syringe for each dose. Or use the calculator — it does all three steps instantly.
              </p>
              <div className="mt-5 space-y-4">
                {FORMULA_STEPS.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[#DCE9FD] text-sm font-bold text-[#1F6CD6]">
                      {s.step}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">{s.title}</h3>
                      <p className="mt-1.5 rounded-md bg-[#F7F8F9] px-3 py-2 text-sm text-[#333333]">
                        {s.formula}
                      </p>
                      <p className="mt-1 text-sm text-[#6b7280]">
                        Example:{" "}
                        <span>{s.example}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Box */}
              <div className="mt-6 rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-5">
                <h3 className="font-semibold text-[#333333] leading-[26px] tracking-[-0.16px]">
                  Dosing Calculation Example: BPC-157 at 250 mcg
                </h3>
                <p className="mt-2 text-sm text-[#6b7280]">
                  5 mg vial + 2 mL BAC water + 250 mcg desired dose + 100-unit syringe:
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#333333]">
                  <li>
                    <strong>Concentration:</strong>{" "}
                    <span>5 ÷ 2 = 2.5 mg/mL</span>
                  </li>
                  <li>
                    <strong>Dose volume:</strong>{" "}
                    <span>250 ÷ (2.5 × 1,000) = 0.1 mL</span>
                  </li>
                  <li>
                    <strong>Syringe units:</strong>{" "}
                    <span>
                      0.1 × 100 = <strong>10 units</strong>
                    </span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-[#6b7280]">
                  Skip the math entirely with the{" "}
                  <Link
                    to="/tools/peptide-calculator?peptide=bpc-157"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-[#1F6CD6] hover:underline"
                  >
                    peptide reconstitution calculator
                  </Link>
                  .
                </p>
              </div>

              {/* Syringe tip box */}
              <div className="mt-4 rounded-[5px] border border-[#DCE9FD] bg-[#DCE9FD]/30 p-4">
                <p className="text-sm text-[#333333]">
                  <strong>Using a 30-unit or 50-unit syringe?</strong> The math is the same — pull to the same unit mark. A 100-unit, 50-unit, and 30-unit syringe all have the same unit-to-volume ratio (1 unit = 0.01 mL). The only difference is the maximum volume each syringe holds.
                </p>
              </div>
            </div>

            {/* 6. Mistakes */}
            <div id="mistakes" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                Common reconstitution mistakes to avoid
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                These are the most frequent errors made during peptide reconstitution and why they matter.
              </p>
              <div className="mt-5 space-y-4">
                {COMMON_MISTAKES.map((mistake, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CircleX
                      className="lucide lucide-circle-x mt-0.5 h-4 w-4 shrink-0 text-red-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#333333]">
                        {mistake.title}
                      </p>
                      <p className="mt-0.5 text-sm text-[#6b7280]">
                        {mistake.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Storage */}
            <div id="storage" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                Storing reconstituted peptides
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Temperature control after reconstitution is the most important factor for maintaining peptide stability and sterility.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-4">
                  <h3 className="text-sm font-semibold text-[#333333] tracking-[-0.14px]">
                    Short-term storage (3–4 weeks)
                  </h3>
                  <p className="mt-2 text-sm text-[#6b7280]">
                    Store at <strong className="text-[#333333]">2–8°C (36–46°F)</strong> in the main body of a standard refrigerator. Avoid the door shelf where temperature fluctuates with opening. Keep the vial upright with the stopper up. Do not freeze a vial you are actively using.
                  </p>
                </div>
                <div className="rounded-[5px] border border-[#DCE9FD] bg-[#DCE9FD]/30 p-4">
                  <h3 className="text-sm font-semibold text-[#333333] tracking-[-0.14px]">
                    Long-term storage (3–4 months)
                  </h3>
                  <p className="mt-2 text-sm text-[#6b7280]">
                    Freeze aliquots (pre-measured portions) at{" "}
                    <strong className="text-[#333333]">-20°C (-4°F)</strong>. Divide the solution into single-use portions before freezing to avoid repeated freeze-thaw cycles, which degrade both peptide integrity and sterility.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-[5px] border border-amber-200 bg-[#FFF0BB] p-4">
                <div className="flex items-start gap-2">
                  <TriangleAlert
                    className="lucide lucide-triangle-alert mt-0.5 h-4 w-4 shrink-0 text-amber-600"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-[#333333]">
                    <strong>Unreconstituted powder is far more stable</strong> than liquid. Only reconstitute what you plan to use within your stability window. Lyophilized peptide powder stored at -20°C can remain viable for years. Once reconstituted, the clock starts — follow your prescriber's or compounding pharmacy's stability guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. FAQ */}
            <div id="faq" className="scroll-mt-24">
              <h2 className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-[#6b7280] leading-[26px]">
                Common questions about reconstituting peptides, bacteriostatic water, and dose calculations.
              </p>
              <div className="mt-6 divide-y divide-[#e5e7eb] rounded-[5px] border border-[#e5e7eb]">
                {FAQS.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[#333333] hover:bg-[#F7F8F9] transition-colors [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-medium leading-snug">
                        {faq.q}
                      </span>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4">
                      <p className="text-sm leading-relaxed text-[#6b7280]">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Related Tools */}
            <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#333333]">Related tools</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3 sm:flex-wrap">
                {RELATED_TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 rounded-[5px] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#333333] transition-all hover:border-[#FFF0BB] hover:bg-[#F7F8F9]"
                  >
                    <ArrowRight
                      className="lucide lucide-arrow-right h-3.5 w-3.5 text-[#1F6CD6]"
                      aria-hidden="true"
                    />
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Want supervised peptide therapy? */}
            <div className="rounded-[5px] border border-[#FFF0BB] bg-[#F7F8F9] p-6 sm:p-8">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#333333] tracking-[-0.18px]">
                    Want supervised peptide therapy?
                  </h3>
                  <p className="mt-1 text-[#6b7280] leading-[26px]">
                    Find a verified peptide clinic near you for a personalized dosing protocol and clinician oversight.
                  </p>
                </div>
                <Link
                  to="/clinics"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex shrink-0 items-center gap-2 rounded-[5px] bg-[#1F6CD6] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Find a Clinic{" "}
                  <ArrowRight className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
              <p className="text-xs leading-relaxed text-[#6b7280]">
                <strong className="text-[#6b7280]">Medical Disclaimer:</strong>{" "}
                This guide is provided for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Peptide reconstitution technique, dose selection, and injection protocol should always be determined and supervised by a licensed healthcare provider or compounding pharmacy. Always follow your prescriber's specific instructions. MyPeptideMatch.com does not sell peptides or pharmaceutical products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
