import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Beaker,
  Bell,
  Bookmark,
  BookOpen,
  Calculator,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  DollarSign,
  FlaskConical,
  Stethoscope,
  Thermometer,
  Timer,
} from "lucide-react";

import addWaterImage from "../../../assets/images/calculator-steps/add-water.webp";
import prepareImage from "../../../assets/images/calculator-steps/prepare.webp";
import roomTempImage from "../../../assets/images/calculator-steps/room-temp.webp";
import swirlImage from "../../../assets/images/calculator-steps/swirl.webp";

// ============================================================================
// STATIC DATA (Top Level)
// ============================================================================

const SYRINGE_OPTIONS = [
  { label: "0.3 ml", value: 0.3, units: 30 },
  { label: "0.5 ml", value: 0.5, units: 50 },
  { label: "1.0 ml", value: 1.0, units: 100 },
];

const VIAL_PRESETS = [
  { label: "5 mg", value: 5 },
  { label: "10 mg", value: 10 },
  { label: "15 mg", value: 15 },
];

const WATER_PRESETS = [
  { label: "1 ml", value: 1 },
  { label: "2 ml", value: 2 },
  { label: "3 ml", value: 3 },
  { label: "5 ml", value: 5 },
];

const DOSE_PRESETS = [
  { label: "50 mcg", value: 50 },
  { label: "100 mcg", value: 100 },
  { label: "250 mcg", value: 250 },
  { label: "500 mcg", value: 500 },
];

const DOSING_FREQUENCIES = [
  { label: "Daily", value: 7 },
  { label: "Every other day", value: 3.5 },
  { label: "3x / week", value: 3 },
  { label: "2x / week", value: 2 },
  { label: "Weekly", value: 1 },
];

const PEPTIDE_PRESETS = [
  { id: "bpc-157", name: "BPC-157", slug: "bpc-157", category: "Tissue Repair", defaultVial: 5, defaultWater: 2, defaultDose: 250, doseUnit: "mcg" },
  { id: "semaglutide", name: "Semaglutide", slug: "semaglutide", category: "Weight Loss", defaultVial: 5, defaultWater: 2, defaultDose: 250, doseUnit: "mcg" },
  { id: "tirzepatide", name: "Tirzepatide", slug: "tirzepatide", category: "Weight Loss", defaultVial: 10, defaultWater: 2, defaultDose: 2500, doseUnit: "mcg" },
  { id: "retatrutide", name: "Retatrutide", slug: "retatrutide", category: "Weight Loss", defaultVial: 10, defaultWater: 2, defaultDose: 2000, doseUnit: "mcg" },
  { id: "tb-500", name: "TB-500", slug: "tb-500", category: "Tissue Repair", defaultVial: 5, defaultWater: 2, defaultDose: 2500, doseUnit: "mcg" },
  { id: "cjc-1295-ipamorelin", name: "CJC-1295 / Ipamorelin", slug: "cjc-1295-ipamorelin", category: "Growth Hormone", defaultVial: 5, defaultWater: 2.5, defaultDose: 300, doseUnit: "mcg" },
  { id: "sermorelin", name: "Sermorelin", slug: "sermorelin", category: "Growth Hormone", defaultVial: 5, defaultWater: 2, defaultDose: 300, doseUnit: "mcg" },
  { id: "aod-9604", name: "AOD-9604", slug: "aod-9604", category: "Weight Loss", defaultVial: 5, defaultWater: 2, defaultDose: 300, doseUnit: "mcg" },
  { id: "pt-141", name: "PT-141", slug: "pt-141", category: "Sexual Wellness", defaultVial: 10, defaultWater: 2, defaultDose: 1000, doseUnit: "mcg" },
  { id: "tesamorelin", name: "Tesamorelin", slug: "tesamorelin", category: "Growth Hormone", defaultVial: 5, defaultWater: 2, defaultDose: 2000, doseUnit: "mcg" },
  { id: "ipamorelin", name: "Ipamorelin", slug: "ipamorelin", category: "Growth Hormone", defaultVial: 5, defaultWater: 2, defaultDose: 200, doseUnit: "mcg" },
  { id: "ghk-cu", name: "GHK-Cu", slug: "ghk-cu", category: "Tissue Repair", defaultVial: 5, defaultWater: 2, defaultDose: 200, doseUnit: "mcg" },
  { id: "selank", name: "Selank", slug: "selank", category: "Cognitive", defaultVial: 5, defaultWater: 2, defaultDose: 250, doseUnit: "mcg" },
  { id: "thymosin-alpha-1", name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", category: "Immune", defaultVial: 5, defaultWater: 1, defaultDose: 1500, doseUnit: "mcg" },
  { id: "mots-c", name: "MOTS-c", slug: "mots-c", category: "Metabolic", defaultVial: 5, defaultWater: 2, defaultDose: 5000, doseUnit: "mcg" },
];

const RX_PARTNERS = {
  collective: {
    vendorId: "4a2824cf-482f-4889-8d76-e17f65a1e2f3",
    vendorName: "Collective",
    vendorSlug: "collective",
    url: "https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876",
    priceNote: "Same price any dose · + $199/yr membership, 21 days free",
  },
};

const RX_OFFERS = {
  tirzepatide: {
    ...RX_PARTNERS.collective,
    peptideId: "tirzepatide",
    peptideName: "tirzepatide",
    price: 69,
  },
  semaglutide: {
    ...RX_PARTNERS.collective,
    peptideId: "semaglutide",
    peptideName: "semaglutide",
    price: 59,
  },
};

const PREPARATION_STEPS = [
  {
    number: 1,
    title: "Prepare Your Workspace",
    desc: "Wash your hands and put on sterile gloves. Gather your peptide vial, bacteriostatic water, sterile insulin syringes, and alcohol swabs.",
    image: prepareImage,
    bg: "linear-gradient(180deg, #E2EFEA 0%, #F1EADB 100%)",
  },
  {
    number: 2,
    title: "Bring to Room Temperature",
    desc: "Allow refrigerated or frozen peptide and BAC water to reach 20–25°C before reconstitution. Cold solutions can foam and dissolve unevenly.",
    image: roomTempImage,
    bg: "linear-gradient(180deg, #E1EDF3 0%, #EAE9F3 100%)",
  },
  {
    number: 3,
    title: "Add Bacteriostatic Water",
    desc: "Swab both vial tops with 70% alcohol. Slowly inject BAC water aimed at the glass wall at a 45° angle — never directly on the powder.",
    image: addWaterImage,
    bg: "linear-gradient(180deg, #BFE1E7 0%, #D2E9EE 50%, #E4EBE5 100%)",
  },
  {
    number: 4,
    title: "Gently Swirl Until Clear",
    desc: "Gently swirl the vial until the powder fully dissolves. Never shake — this damages the peptide. The solution should become completely clear.",
    image: swirlImage,
    bg: "linear-gradient(180deg, #F8E8DC 0%, #F6E5E1 100%)",
  },
];

const DOSING_EXAMPLES = [
  {
    name: "BPC-157",
    setup: "5 mg vial · 2 ml BAC water · 250 mcg dose · 100-unit syringe",
    rows: [
      ["Concentration", "5 mg ÷ 2 ml = 2.5 mg/ml"],
      ["Injection volume", "250 mcg ÷ 2,500 = 0.1 ml"],
      ["Syringe units", "0.1 ml × 100 = 10 units"],
      ["Doses per vial", "5,000 mcg ÷ 250 mcg = 20 doses"],
    ],
    link: "BPC-157 dosing guide →",
    href: "/peptides/bpc-157",
  },
  {
    name: "Semaglutide",
    setup: "5 mg vial · 2 ml BAC water · 250 mcg starting dose · 100-unit syringe",
    rows: [
      ["Concentration", "5 mg ÷ 2 ml = 2.5 mg/ml"],
      ["Injection volume", "250 mcg ÷ 2,500 = 0.1 ml"],
      ["Syringe units", "0.1 ml × 100 = 10 units"],
      ["Doses per vial", "5,000 mcg ÷ 250 mcg = 20 weekly doses"],
    ],
    link: "Semaglutide reconstitution calculator →",
    href: "/tools/semaglutide-calculator",
  },
  {
    name: "Tirzepatide",
    setup: "10 mg vial · 2 ml BAC water · 2.5 mg starting dose · 100-unit syringe",
    rows: [
      ["Concentration", "10 mg ÷ 2 ml = 5.0 mg/ml"],
      ["Injection volume", "2,500 mcg ÷ 5,000 = 0.5 ml"],
      ["Syringe units", "0.5 ml × 100 = 50 units"],
      ["Doses per vial", "10,000 mcg ÷ 2,500 = 4 weekly doses"],
    ],
    link: "Tirzepatide reconstitution calculator →",
    href: "/tools/tirzepatide-calculator",
  },
  {
    name: "TB-500",
    setup: "5 mg vial · 2 ml BAC water · 2.5 mg loading dose · 100-unit syringe",
    rows: [
      ["Concentration", "5 mg ÷ 2 ml = 2.5 mg/ml"],
      ["Injection volume", "2,500 mcg ÷ 2,500 = 1.0 ml"],
      ["Syringe units", "1.0 ml × 100 = 100 units (full syringe)"],
      ["Doses per vial", "5,000 mcg ÷ 2,500 = 2 doses"],
    ],
    link: "TB-500 dosing guide →",
    href: "/peptides/tb-500",
  },
  {
    name: "CJC-1295 / Ipamorelin",
    setup: "5 mg blend vial · 2.5 ml BAC water · 300 mcg dose · 100-unit syringe",
    rows: [
      ["Concentration", "5 mg ÷ 2.5 ml = 2.0 mg/ml"],
      ["Injection volume", "300 mcg ÷ 2,000 = 0.15 ml"],
      ["Syringe units", "0.15 ml × 100 = 15 units"],
      ["Doses per vial", "5,000 mcg ÷ 300 = ≈ 16 doses"],
    ],
    link: "Try with CJC-1295/Ipamorelin presets →",
    href: "/tools/peptide-calculator?peptide=cjc-1295-ipamorelin",
  },
  {
    name: "HGH (IU-Based)",
    setup: "10 IU vial · 1 ml BAC water · 2 IU dose · 100-unit syringe",
    rows: [
      ["Concentration", "10 IU ÷ 1 ml = 10 IU/ml"],
      ["Injection volume", "2 IU ÷ 10 IU/ml = 0.2 ml"],
      ["Syringe units", "0.2 ml × 100 = 20 units"],
      ["Doses per vial", "10 IU ÷ 2 IU = 5 doses"],
    ],
    note: 'HGH vials use IU instead of mg. Enter your IU as "vial quantity" and your dose in IU as "dose" in the calculator above.',
  },
];

const CHART_ROWS = [
  ["2 mg", "1 ml", "2 mg/ml", "12.5", "25", "50", "—", "—"],
  ["2 mg", "2 ml", "1 mg/ml", "25", "50", "100", "—", "—"],
  ["5 mg", "1 ml", "5 mg/ml", "5", "10", "20", "50", "100"],
  ["5 mg", "2 ml", "2.5 mg/ml", "10", "20", "40", "100", "—"],
  ["5 mg", "3 ml", "1.67 mg/ml", "15", "30", "60", "—", "—"],
  ["10 mg", "1 ml", "10 mg/ml", "2.5", "5", "10", "25", "50"],
  ["10 mg", "2 ml", "5 mg/ml", "5", "10", "20", "50", "100"],
  ["10 mg", "3 ml", "3.33 mg/ml", "7.5", "15", "30", "75", "—"],
  ["15 mg", "2 ml", "7.5 mg/ml", "3.3", "6.7", "13.3", "33.3", "66.7"],
  ["15 mg", "3 ml", "5 mg/ml", "5", "10", "20", "50", "100"],
];

const GLOSSARY_UNITS = [
  { unit: "mg", name: "Milligram", measure: "Weight", usedFor: "Peptide vial contents (e.g., 5 mg vial)" },
  { unit: "mcg", name: "Microgram", measure: "Weight", usedFor: "Individual dose amounts (e.g., 250 mcg dose)" },
  { unit: "ml", name: "Milliliter", measure: "Volume", usedFor: "Bacteriostatic water & injection volume" },
  { unit: "IU", name: "International Unit", measure: "Biological activity", usedFor: "HGH and some hormone peptides" },
  { unit: "Units", name: "Syringe Units", measure: "Volume (markings)", usedFor: "Tick marks on insulin syringes" },
];

const POPULAR_PEPTIDES = [
  { name: "BPC-157", slug: "bpc-157", category: "Tissue Repair", vial: "5 mg", water: "1–2 ml", dose: "250–500 mcg" },
  { name: "Semaglutide", slug: "semaglutide", category: "Weight Loss", vial: "5 mg, 10 mg", water: "2–2.5 ml", dose: "0.25–2.4 mg" },
  { name: "Tirzepatide", slug: "tirzepatide", category: "Weight Loss", vial: "5 mg, 10 mg, 15 mg", water: "2–3 ml", dose: "2.5–15 mg" },
  { name: "TB-500", slug: "tb-500", category: "Tissue Repair", vial: "5 mg, 10 mg", water: "1–2 ml", dose: "2–5 mg" },
  { name: "CJC-1295 / Ipamorelin", slug: "cjc-1295-ipamorelin", category: "Growth Hormone", vial: "5 mg blend", water: "2.5 ml", dose: "300 mcg" },
  { name: "Sermorelin", slug: "sermorelin", category: "Growth Hormone", vial: "5 mg, 9 mg, 15 mg", water: "2–3 ml", dose: "200–500 mcg" },
  { name: "AOD-9604", slug: "aod-9604", category: "Weight Loss", vial: "5 mg", water: "2 ml", dose: "300 mcg" },
  { name: "PT-141", slug: "pt-141", category: "Sexual Wellness", vial: "10 mg", water: "2 ml", dose: "1–2 mg" },
];

const RELATED_TOOLS = [
  { name: "BAC Water Calculator", href: "/tools/bac-water-calculator" },
  { name: "Peptide Units Converter", href: "/tools/units-converter" },
  { name: "Semaglutide Units Converter", href: "/tools/semaglutide-units" },
  { name: "Tirzepatide Units Converter", href: "/tools/tirzepatide-units" },
  { name: "Semaglutide Reconstitution Calculator", href: "/tools/semaglutide-calculator" },
  { name: "Tirzepatide Reconstitution Calculator", href: "/tools/tirzepatide-calculator" },
  { name: "Retatrutide Dosage Calculator", href: "/tools/retatrutide-dosage-calculator" },
];

const POPULAR_GUIDES = [
  {
    title: "Retatrutide Dosage Calculator",
    desc: "Reconstitution and mg-to-units calculator for retatrutide, with a full dose chart.",
    href: "/tools/retatrutide-dosage-calculator",
  },
  {
    title: "Tirzepatide Dosage Guide",
    desc: "Week-by-week tirzepatide titration, dose ranges, and what to expect.",
    href: "/blog/tirzepatide-dosing",
  },
  {
    title: "CJC-1295 + Ipamorelin Dosage Guide",
    desc: "The 10 mg blend: standard mcg ranges, syringe units, timing, and titration.",
    href: "/blog/cjc-1295-no-dac-ipamorelin-10mg-blend-dosage-guide",
  },
  {
    title: "Thymosin Alpha-1 Dosage Guide",
    desc: "Typical thymosin alpha-1 dosing, reconstitution, and injection protocol.",
    href: "/blog/thymosin-alpha-1-dosage-guide",
  },
  {
    title: "MOTS-c Side Effects",
    desc: "What to know about MOTS-c tolerability, dosing context, and safety.",
    href: "/blog/mots-c-side-effects",
  },
  {
    title: "Retatrutide Peptide Profile",
    desc: "Mechanism, research status, and dosing overview for retatrutide.",
    href: "/peptides/retatrutide",
  },
  {
    title: "HGH 191aa Dosing (10 IU)",
    desc: "IU-based HGH dosing protocol, reconstitution, and unit conversions.",
    href: "/protocols/hgh-191aa-dosing-10iu",
  },
];

const RECONSTITUTION_GUIDES = [
  {
    title: "How to Reconstitute Peptides",
    desc: "Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.",
    href: "/how-to-reconstitute-peptides",
    icon: "beaker",
  },
  {
    title: "Peptide Dosage Guide",
    desc: "Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.",
    href: "/peptide-dosage-guide",
    icon: "book",
  },
];

const FAQS = [
  {
    q: "What is a peptide reconstitution calculator?",
    a: "A peptide reconstitution calculator is a tool that helps you determine the exact volume to draw in your syringe for a specific peptide dose. You input the peptide vial size (in mg), the amount of bacteriostatic water you added (in ml), and your desired dose (in mcg), and the calculator tells you how many units to draw on your insulin syringe.",
  },
  {
    q: "How do you reconstitute peptides?",
    a: "Reconstituting peptides means adding bacteriostatic water to a lyophilized (freeze-dried) peptide vial to create an injectable solution. Use sterile technique: swab the tops of both vials, inject the bacteriostatic water slowly against the glass wall, then gently swirl until fully dissolved. After reconstitution, refrigerate the vial and follow your clinician or pharmacy instructions.",
  },
  {
    q: "How do I mix peptides with bacteriostatic water?",
    a: "To mix (reconstitute) peptides, draw the recommended volume of bacteriostatic water (BAC water) into a sterile syringe, inject it slowly into the peptide vial (aiming the stream at the glass wall), and gently swirl until the solution becomes clear. Do not shake vigorously. The amount of BAC water you add determines your concentration (mg/mL) and how many insulin syringe units you draw per dose.",
  },
  {
    q: "How do I calculate my peptide dose?",
    a: "To calculate your peptide dose, use this three-step formula: (1) Divide the vial quantity in mg by the water volume in ml to get the concentration in mg/ml. (2) Divide your desired dose in mcg by the concentration × 1,000 to get the injection volume in ml. (3) Multiply the injection volume by the total syringe units divided by the syringe volume to convert to syringe units. For example, a 5mg vial reconstituted with 2ml of bacteriostatic water gives a 2.5 mg/ml concentration. A 250 mcg dose requires 0.1 ml, which equals 10 units on a 100-unit (1 ml) syringe.",
  },
  {
    q: "How much bacteriostatic water should I add to a 5mg peptide vial?",
    a: "The most common reconstitution volumes for a 5mg peptide vial are 1 ml or 2 ml of bacteriostatic water. Using 1 ml creates a 5 mg/ml concentration (more concentrated, smaller injection volume), while 2 ml creates a 2.5 mg/ml concentration (easier to measure smaller doses). Not sure how much water to add? Use our BAC water calculator to get a recommended amount based on your vial size and dose. Your prescribing clinician will also recommend the appropriate volume based on your specific peptide and dosing protocol.",
  },
  {
    q: "What is the difference between mg and mcg?",
    a: "Milligrams (mg) and micrograms (mcg) are both units of weight. 1 mg equals 1,000 mcg. Peptide vials are typically labeled in milligrams (e.g., 5 mg, 10 mg), while individual doses are usually measured in micrograms (e.g., 250 mcg, 500 mcg). This is because each dose is a small fraction of the total vial contents.",
  },
  {
    q: "What do units mean on an insulin syringe?",
    a: "Units on an insulin syringe refer to volume markings. A 100-unit syringe holds 1 ml total, so each unit equals 0.01 ml. A 50-unit syringe holds 0.5 ml (each unit = 0.01 ml), and a 30-unit syringe holds 0.3 ml (each unit = 0.01 ml). The 'units' are not related to drug potency — they are simply volume markers that make it easier to measure small injection volumes accurately.",
  },
  {
    q: "How many doses are in a peptide vial?",
    a: "The number of doses per vial depends on the vial size and your dose amount. Divide the total vial quantity (in mcg) by your dose (in mcg). For example, a 5 mg vial (5,000 mcg) at 250 mcg per dose yields 20 doses. A 10 mg vial at 500 mcg per dose also yields 20 doses. Our calculator automatically shows your doses-per-vial count.",
  },
  {
    q: "Can I use sterile water instead of bacteriostatic water?",
    a: "Sterile water for injection (SWFI) can be used but is not ideal for multi-dose vials. Bacteriostatic water contains 0.9% benzyl alcohol as a preservative, which inhibits bacterial growth and allows safe use over multiple injections for up to 28 days. Sterile water has no preservative, so it should only be used for single-dose applications. Always follow your healthcare provider's instructions.",
  },
  {
    q: "How long does a reconstituted peptide last?",
    a: "Reconstituted peptides typically remain stable for 3-4 weeks when stored at 2-8°C (36-46°F) in a standard refrigerator. For longer storage, peptide solutions can be frozen at -20°C for 3-4 months. Avoid repeated freeze-thaw cycles. Unreconstituted lyophilized powder is far more stable and can be stored at -20°C for years.",
  },
  {
    q: "What syringe size should I use for peptides?",
    a: "Most peptide users use insulin syringes, which come in three common sizes: 0.3 ml (30 units), 0.5 ml (50 units), and 1.0 ml (100 units). For small doses, a 0.3 ml syringe provides the finest graduation marks and greatest accuracy. For larger doses, a 0.5 ml or 1.0 ml syringe may be necessary to hold the full injection volume. Use the smallest syringe that can accommodate your dose for the most accurate measurement.",
  },
  {
    q: "Is this peptide calculator free to use?",
    a: "Yes, our peptide reconstitution calculator is completely free to use with no signup or registration required. It works on all devices — desktop, tablet, and mobile. You can use it as many times as needed to calculate dosing for any injectable peptide.",
  },
  {
    q: "How do I reconstitute semaglutide at home?",
    a: "To reconstitute compounded semaglutide, add bacteriostatic water to the lyophilized vial using sterile technique. A common setup is 2 ml of bacteriostatic water into a 5 mg vial, yielding a 2.5 mg/ml concentration. Inject the water slowly against the glass wall at a 45° angle, then gently swirl until dissolved. Starting dose is typically 0.25 mg (250 mcg) per week, which is 0.1 ml or 10 units on a 100-unit syringe at this concentration. Always follow your prescribing provider's specific instructions.",
  },
  {
    q: "What size needle should I use for peptide injections?",
    a: "Most peptide injections use a 29-gauge or 31-gauge insulin syringe with a ½-inch needle for subcutaneous injection. Thinner gauges (higher numbers) cause less discomfort. For subcutaneous injections, a ½-inch needle is sufficient for most body composition types. Common injection sites include the lower abdomen, thigh, or upper arm. Your healthcare provider will recommend the appropriate needle gauge and injection site for your protocol.",
  },
  {
    q: "How many units of BPC-157 should I inject?",
    a: "The number of insulin syringe units for a BPC-157 dose depends on how you reconstitute it. For a common setup of 5 mg BPC-157 reconstituted with 2 ml bacteriostatic water (2.5 mg/ml concentration), a 250 mcg dose equals 10 units on a 100-unit syringe, and a 500 mcg dose equals 20 units. Use our peptide calculator above to determine the exact units for your specific reconstitution setup.",
  },
  {
    q: "Can I mix two peptides in one syringe?",
    a: "Some peptides can be drawn into the same syringe for a single injection, but they should generally not be reconstituted in the same vial. Peptides like CJC-1295 and Ipamorelin are commonly combined in one syringe since they are designed to work synergistically. However, mixing incompatible peptides can cause degradation or reduced efficacy. Always consult your healthcare provider before combining peptides, and never mix peptides that have different storage requirements or pH sensitivities.",
  },
  {
    q: "How do I calculate peptide dosage for a 10mg vial?",
    a: "For a 10 mg vial, the calculation follows the same formula. If you add 2 ml of bacteriostatic water, the concentration is 10 mg ÷ 2 ml = 5 mg/ml (5,000 mcg/ml). For a 250 mcg dose: 250 mcg ÷ 5,000 mcg/ml = 0.05 ml = 5 units on a 100-unit syringe. For a 500 mcg dose: 500 mcg ÷ 5,000 mcg/ml = 0.1 ml = 10 units. A 10 mg vial at 250 mcg per dose provides 40 doses total.",
  },
];

// ============================================================================
// HELPER SVG COMPONENTS
// ============================================================================

function SyringeSvg({ size }) {
  const width = { sm: 90, md: 120, lg: 160 }[size] || 160;
  const totalWidth = width + 80;
  const strokeColor = "#cbd4d1";
  const softColor = "#e6f2f2";
  const inkColor = "#066068";

  return (
    <svg viewBox={`0 0 ${totalWidth} 32`} className="w-full" aria-hidden="true">
      <rect x="0" y={6} width="6" height="20" rx="2" fill={inkColor} />
      <rect x="6" y={14} width="20" height="4" rx="1" fill={softColor} />
      <rect x="26" y={6} width={width} height="20" rx="3" fill="white" stroke={strokeColor} strokeWidth="1.5" />
      {Array.from({ length: 11 }, (_, idx) => {
        const xPos = 26 + (width / 10) * idx;
        const isMajor = idx % 5 === 0;
        return (
          <line
            key={idx}
            x1={xPos}
            y1={6}
            x2={xPos}
            y2={6 + (isMajor ? 8 : 5)}
            stroke={strokeColor}
            strokeWidth={isMajor ? "1" : "0.5"}
          />
        );
      })}
      <path
        d={`M ${26 + width} 10 L ${26 + width + 16} 13 L ${26 + width + 16} 19 L ${26 + width} 22 Z`}
        fill={softColor}
        stroke={strokeColor}
        strokeWidth="0.5"
      />
      <line
        x1={26 + width + 16}
        y1={16}
        x2={totalWidth}
        y2={16}
        stroke={inkColor}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SyringeVisualBar({ totalUnits, doseUnits }) {
  const safeDose = Number.isFinite(doseUnits) ? doseUnits : 0;
  const fillPercentage = totalUnits > 0 ? (Math.min(Math.max(safeDose, 0), totalUnits) / totalUnits) * 100 : 0;
  const interval = totalUnits <= 30 ? 5 : 10;
  const ticks = [];

  for (let t = 0; t <= totalUnits; t += 1) {
    const isMajor = t % interval === 0;
    ticks.push({
      pos: (t / totalUnits) * 100,
      label: isMajor ? t : undefined,
    });
  }

  return (
    <div className="w-full overflow-hidden overflow-x-auto">
      <div className="min-w-[320px] px-2 pb-2">
        <div className="relative mx-auto h-9 overflow-hidden rounded-lg bg-white shadow-[inset_0_0_0_1px_#e3e8e6]">
          {fillPercentage > 0 && (
            <div
              className="absolute inset-y-0 left-0 rounded-l-lg transition-all duration-300 bg-[#0b7c84] opacity-90"
              style={{ width: `${fillPercentage}%` }}
            />
          )}
          {fillPercentage > 0 && fillPercentage <= 100 && (
            <div
              className="absolute top-0 h-full w-0.5 -translate-x-1/2 transition-all duration-300 bg-[#066068]"
              style={{ left: `${fillPercentage}%` }}
            />
          )}
        </div>
        <div className="relative mt-0 h-10">
          {ticks.map((tick, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center"
              style={{ left: `${tick.pos}%`, transform: "translateX(-50%)" }}
            >
              <div
                className={`w-px ${tick.label !== undefined ? "h-3 w-[1.5px] bg-[#3a4744]" : "h-2 w-px bg-[#3a4744]"}`}
              />
              {tick.label !== undefined && (
                <span className="mt-0.5 text-[11px] font-medium  text-[#5b6764]">
                  {tick.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// HELPER COMPONENTS FOR CALCULATOR
// ============================================================================

function formatSelectionLabel(val, unit) {
  if (!val || !Number.isFinite(val) || val <= 0) return "Not set";
  const numStr = val % 1 === 0 ? val.toFixed(0) : String(val);
  return `${numStr} ${unit}`;
}

function ChoiceGroup({
  label,
  hideLabel = false,
  options,
  selected,
  onSelect,
  customValue,
  onCustomChange,
  showCustom,
  onToggleCustom,
  unit,
  step = "any",
}) {
  const baseBtn =
    "w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto text-center";
  const activeBtn =
    "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]";
  const inactiveBtn =
    "border-[#e3e8e6] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]";

  return (
    <div className="space-y-3">
      {!hideLabel && (
        <p className="text-sm font-semibold text-[#1c2522]">{label}</p>
      )}
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={`${baseBtn} ${selected !== opt.value || showCustom ? inactiveBtn : activeBtn}`}
          >
            {opt.label}
          </button>
        ))}
        <button
          type="button"
          onClick={onToggleCustom}
          className={`${baseBtn} ${showCustom ? activeBtn : inactiveBtn}`}
        >
          Other
        </button>
      </div>
      {showCustom && (
        <div className="relative w-full sm:max-w-[200px]">
          <input
            type="number"
            min="0"
            step={step}
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            placeholder={`Enter ${unit}`}
            className="w-full rounded-lg border border-[#e3e8e6] bg-white px-4 py-2 pr-14 text-sm text-[#1c2522] focus:outline-none focus:border-[#0b7c84]"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#5b6764]">
            {unit}
          </span>
        </div>
      )}
    </div>
  );
}

function CalculatorMobileAccordion({
  title,
  subtitle,
  selectedLabel,
  open,
  onToggle,
  children,
}) {
  return (
    <section className="rounded-2xl border border-[#e3e8e6] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-[#1c2522]">{title}</p>
            {!open && selectedLabel !== "Not set" && (
              <span className="rounded-full border border-transparent bg-[#e6f2f2] text-[#066068] px-2.5 py-0.5 text-xs font-semibold">
                {selectedLabel}
              </span>
            )}
          </div>
          {open && (
            <p className="mt-0.5 text-xs text-[#5b6764]">{subtitle}</p>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#066068] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-[#e3e8e6] px-4 py-4">
          {children}
        </div>
      )}
    </section>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PeptideCalculator() {
  const [searchParams] = useSearchParams();

  // Initialize from searchParams
  const initialPreset = useMemo(() => {
    const peptideParam = searchParams.get("peptide");
    if (!peptideParam) return null;
    return PEPTIDE_PRESETS.find(
      (p) => p.id === peptideParam || p.slug === peptideParam
    ) || null;
  }, [searchParams]);

  const [selectedPresetId, setSelectedPresetId] = useState(
    () => initialPreset?.id || null
  );

  // Syringe Selection
  const [syringeIndex, setSyringeIndex] = useState(() => {
    const sParam = searchParams.get("syringe");
    if (sParam) {
      const idx = SYRINGE_OPTIONS.findIndex(
        (s) => String(s.value) === sParam || String(s.units) === sParam
      );
      if (idx >= 0) return idx;
    }
    return 0; // Default: 0.3 ml
  });

  // Vial State (mg)
  const [vialValue, setVialValue] = useState(() => {
    const vParam = searchParams.get("vial");
    if (vParam) {
      const val = parseFloat(vParam);
      if (!isNaN(val) && val > 0) return val;
    }
    return initialPreset?.defaultVial || 5;
  });
  const [customVial, setCustomVial] = useState(() => {
    const vParam = searchParams.get("vial");
    if (vParam) {
      const val = parseFloat(vParam);
      return !isNaN(val) && val > 0 && !VIAL_PRESETS.some((p) => p.value === val);
    }
    return initialPreset ? !VIAL_PRESETS.some((p) => p.value === initialPreset.defaultVial) : false;
  });
  const [customVialInput, setCustomVialInput] = useState(() => {
    const vParam = searchParams.get("vial");
    if (vParam) {
      const val = parseFloat(vParam);
      if (!isNaN(val) && val > 0 && !VIAL_PRESETS.some((p) => p.value === val)) return vParam;
    }
    if (initialPreset && !VIAL_PRESETS.some((p) => p.value === initialPreset.defaultVial)) {
      return String(initialPreset.defaultVial);
    }
    return "";
  });

  // BAC Water State (ml)
  const [waterValue, setWaterValue] = useState(() => {
    const wParam = searchParams.get("water");
    if (wParam) {
      const val = parseFloat(wParam);
      if (!isNaN(val) && val > 0) return val;
    }
    return initialPreset?.defaultWater || 1;
  });
  const [customWater, setCustomWater] = useState(() => {
    const wParam = searchParams.get("water");
    if (wParam) {
      const val = parseFloat(wParam);
      return !isNaN(val) && val > 0 && !WATER_PRESETS.some((p) => p.value === val);
    }
    return initialPreset ? !WATER_PRESETS.some((p) => p.value === initialPreset.defaultWater) : false;
  });
  const [customWaterInput, setCustomWaterInput] = useState(() => {
    const wParam = searchParams.get("water");
    if (wParam) {
      const val = parseFloat(wParam);
      if (!isNaN(val) && val > 0 && !WATER_PRESETS.some((p) => p.value === val)) return wParam;
    }
    if (initialPreset && !WATER_PRESETS.some((p) => p.value === initialPreset.defaultWater)) {
      return String(initialPreset.defaultWater);
    }
    return "";
  });

  // Dose State (mcg)
  const [doseValue, setDoseValue] = useState(() => {
    const dParam = searchParams.get("dose");
    if (dParam) {
      const val = parseFloat(dParam);
      if (!isNaN(val) && val > 0) return val;
    }
    return initialPreset?.defaultDose || 50;
  });
  const [customDose, setCustomDose] = useState(() => {
    const dParam = searchParams.get("dose");
    if (dParam) {
      const val = parseFloat(dParam);
      return !isNaN(val) && val > 0 && !DOSE_PRESETS.some((p) => p.value === val);
    }
    return initialPreset ? !DOSE_PRESETS.some((p) => p.value === initialPreset.defaultDose) : false;
  });
  const [customDoseInput, setCustomDoseInput] = useState(() => {
    const dParam = searchParams.get("dose");
    if (dParam) {
      const val = parseFloat(dParam);
      if (!isNaN(val) && val > 0 && !DOSE_PRESETS.some((p) => p.value === val)) return dParam;
    }
    if (initialPreset && !DOSE_PRESETS.some((p) => p.value === initialPreset.defaultDose)) {
      return String(initialPreset.defaultDose);
    }
    return "";
  });

  // Cost Calculator State
  const [showCostCalc, setShowCostCalc] = useState(false);
  const [vialCost, setVialCost] = useState("");
  const [frequencyIndex, setFrequencyIndex] = useState(0);

  // Toast State
  const [toast, setToast] = useState(null);

  // Mobile Accordion State
  const [openAccordions, setOpenAccordions] = useState(
    () => new Set(["syringe", "vial", "water", "dose"])
  );
  const toggleAccordion = useCallback((key) => {
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  // Update preset values if query param changes
  useEffect(() => {
    if (initialPreset) {
      setSelectedPresetId(initialPreset.id);
      setVialValue(initialPreset.defaultVial);
      setCustomVial(!VIAL_PRESETS.some((p) => p.value === initialPreset.defaultVial));
      setCustomVialInput(!VIAL_PRESETS.some((p) => p.value === initialPreset.defaultVial) ? String(initialPreset.defaultVial) : "");

      setWaterValue(initialPreset.defaultWater);
      setCustomWater(!WATER_PRESETS.some((p) => p.value === initialPreset.defaultWater));
      setCustomWaterInput(!WATER_PRESETS.some((p) => p.value === initialPreset.defaultWater) ? String(initialPreset.defaultWater) : "");

      setDoseValue(initialPreset.defaultDose);
      setCustomDose(!DOSE_PRESETS.some((p) => p.value === initialPreset.defaultDose));
      setCustomDoseInput(!DOSE_PRESETS.some((p) => p.value === initialPreset.defaultDose) ? String(initialPreset.defaultDose) : "");
    }
  }, [initialPreset]);

  // Active Values
  const activeSyringe = SYRINGE_OPTIONS[syringeIndex];
  const activeVial = customVial ? (customVialInput ? parseFloat(customVialInput) : null) : vialValue;
  const activeWater = customWater ? (customWaterInput ? parseFloat(customWaterInput) : null) : waterValue;
  const activeDose = customDose ? (customDoseInput ? parseFloat(customDoseInput) : null) : doseValue;
  const activePreset = selectedPresetId
    ? PEPTIDE_PRESETS.find((p) => p.id === selectedPresetId)
    : null;

  // Validation
  const isValid = activeVial && activeWater && activeDose && activeVial > 0 && activeWater > 0 && activeDose > 0;

  // Derived Calculations
  const concentration = isValid ? activeVial / activeWater : 0; // mg/mL
  const doseMl = isValid && concentration > 0 ? activeDose / (1000 * concentration) : 0; // mL
  const doseUnits = isValid && activeSyringe.value > 0 ? (doseMl / activeSyringe.value) * activeSyringe.units : 0;
  const dosesPerVial = isValid && activeDose > 0 ? Math.floor((1000 * activeVial) / activeDose) : 0;
  const exceeds = doseMl > activeSyringe.value;

  // Cost Calculations
  const activeCostNum = vialCost ? parseFloat(vialCost) : 0;
  const costPerDose = isValid && activeCostNum > 0 && dosesPerVial > 0 ? activeCostNum / dosesPerVial : null;
  const costPerWeek = costPerDose ? costPerDose * DOSING_FREQUENCIES[frequencyIndex].value : null;
  const daysSupply = dosesPerVial > 0 ? Math.floor(dosesPerVial / (DOSING_FREQUENCIES[frequencyIndex].value / 7)) : null;

  // Save to Tracker Handler
  const handleSaveToTracker = useCallback(() => {
    if (!isValid || exceeds) {
      setToast({ message: "Finish the calculator first, then save.", variant: "error" });
      setTimeout(() => setToast(null), 2600);
      return;
    }
    try {
      localStorage.setItem(
        "pending_calc",
        JSON.stringify({
          tool: "reconstitution",
          preset_id: selectedPresetId,
          vial_mg: activeVial,
          water_ml: activeWater,
          dose_mcg: activeDose,
          syringe_ml: activeSyringe.value,
          vial_cost: activeCostNum || null,
        })
      );
    } catch {
      // ignore
    }
    window.location.href = "/signup";
  }, [isValid, exceeds, selectedPresetId, activeVial, activeWater, activeDose, activeSyringe.value, activeCostNum]);

  return (
    <main id="main-content" className="flex-1 font-sans text-[#1c2522] bg-[#f6f8f7]">
      {/* Toast Notification */}
      {toast && (
        <div
          role="alert"
          className={`fixed bottom-6 right-6 z-50 max-w-sm rounded-lg px-4 py-3 text-white text-sm font-medium shadow-lg transition-opacity duration-200 ${
            toast.variant === "error" ? "bg-[#e53e3e]" : "bg-[#38a169]"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* ====================================================================== */}
      {/* SECTION 1: Hero & Breadcrumb */}
      {/* ====================================================================== */}
      <section className="bg-gradient-to-b from-[#e6f2f2] to-[#f6f8f7] border-b border-[#e3e8e6] lg:pt-[56px] md:pt-[42px] pt-[28px] lg:pb-[72px] md:pb-[48px] pb-[24px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]">
            <span className="inline-flex shrink-0 items-center gap-1">
              <Link to="/" className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors">
                Home
              </Link>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true" />
              <Link to="/tools" className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors">
                Tools
              </Link>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true" />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">
                Peptide Calculator 
              </span>
              )
            </span>
          </nav>

          <div className="mt-5 sm:mt-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068] bg-white border border-[#e3e8e6] rounded-full px-3 py-1.5">
              <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
              Free Dosing Tool
            </span>
            <h1 className="lg:text-[52px] md:text-[40px] text-[32px] saira-bold lg:leading-[55px] md:leading-[42px] leading-[34px] lg:tracking-[-0.26px] md:tracking-[-0.2px] tracking-[-0.16px] text-[#1c2522] mt-4">
              Peptide Calculator —<br className="hidden sm:inline" /> Reconstitution &amp; Dosage
            </h1>
            <p
              id="calculator-hero-description"
              className="lg:text-[18px] md:text-[16px] text-[16px] lg:leading-[29px] leading-[26px]  text-[#3a4744] mt-4 max-w-[62ch]"
            >
              Enter your peptide vial size, the amount of bacteriostatic water you added, and your desired dose — and this
              free reconstitution calculator tells you exactly how many units to pull on your insulin syringe. Works for{" "}
              <Link to="/tools/bpc" className="underline decoration-dotted underline-offset-2 text-[#066068] font-semibold">
                BPC-157
              </Link>
              ,{" "}
              <Link to="/peptides/semaglutide" className="underline decoration-dotted underline-offset-2 text-[#066068] font-semibold">
                semaglutide
              </Link>
              ,{" "}
              <Link to="/peptides/tirzepatide" className="underline decoration-dotted underline-offset-2 text-[#066068] font-semibold">
                tirzepatide
              </Link>
              ,{" "}
              <Link to="/peptides/tb-500" className="underline decoration-dotted underline-offset-2 text-[#066068] font-semibold">
                TB-500
              </Link>
              , and all other injectable peptides.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 2: Calculator */}
      {/* ====================================================================== */}
      <section id="calculator" className="lg:py-16 md:py-14 pt-4 pb-10 bg-[#f6f8f7] scroll-mt-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <div className="overflow-hidden rounded-2xl border border-[#e3e8e6] bg-white shadow-sm">
            {/* Preset Banner (if selected) */}
            {activePreset && (
              <div className="border-b border-[#e3e8e6] bg-[#e6f2f2] p-4 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#1c2522]">
                      Preset: {activePreset.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#3a4744]">
                      Vial and BAC water defaults are prefilled. Choose your dose below.
                    </p>
                  </div>
                  <Link
                    to={`/peptides/${activePreset.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#066068] hover:underline shrink-0"
                  >
                    View {activePreset.name} dosing guide &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Mobile & Tablet (< lg): 4 Collapsible Accordion Cards */}
            <div className="lg:hidden p-4 space-y-3">
              <CalculatorMobileAccordion
                title="Syringe Size"
                subtitle="What is the total volume of your syringe?"
                selectedLabel={activeSyringe.label}
                open={openAccordions.has("syringe")}
                onToggle={() => toggleAccordion("syringe")}
              >
                <div className="grid grid-cols-3 gap-2">
                  {SYRINGE_OPTIONS.map((opt, idx) => {
                    const isSelected = syringeIndex === idx;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSyringeIndex(idx)}
                        className={`rounded-xl border px-3 py-2.5 text-center text-sm font-semibold transition-colors ${
                          isSelected
                            ? "border-[#0b7c84] bg-[#0b7c84] text-white"
                            : "border-[#e3e8e6] bg-white text-[#1c2522] hover:bg-[#e6f2f2] hover:border-[#0b7c84]"
                        }`}
                      >
                        {opt.label}
                        <span
                          className={`mt-0.5 block text-xs font-normal ${
                            isSelected ? "text-white/80" : "text-[#5b6764]"
                          }`}
                        >
                          {opt.units} units
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CalculatorMobileAccordion>

              <CalculatorMobileAccordion
                title="Peptide Vial"
                subtitle="How many milligrams are in your peptide vial?"
                selectedLabel={formatSelectionLabel(activeVial, "mg")}
                open={openAccordions.has("vial")}
                onToggle={() => toggleAccordion("vial")}
              >
                <ChoiceGroup
                  label="How many milligrams are in your peptide vial?"
                  hideLabel={true}
                  options={VIAL_PRESETS}
                  selected={vialValue}
                  onSelect={(v) => {
                    setVialValue(v);
                    setCustomVial(false);
                  }}
                  customValue={customVialInput}
                  onCustomChange={(val) => {
                    setCustomVialInput(val);
                    setVialValue(null);
                  }}
                  showCustom={customVial}
                  onToggleCustom={() => {
                    setCustomVial(true);
                    setVialValue(null);
                  }}
                  unit="mg"
                  step="0.1"
                />
              </CalculatorMobileAccordion>

              <CalculatorMobileAccordion
                title="Bacteriostatic (BAC) Water"
                subtitle="How much bacteriostatic water are you adding?"
                selectedLabel={formatSelectionLabel(activeWater, "mL")}
                open={openAccordions.has("water")}
                onToggle={() => toggleAccordion("water")}
              >
                <ChoiceGroup
                  label="How much bacteriostatic water are you adding?"
                  hideLabel={true}
                  options={WATER_PRESETS}
                  selected={waterValue}
                  onSelect={(v) => {
                    setWaterValue(v);
                    setCustomWater(false);
                  }}
                  customValue={customWaterInput}
                  onCustomChange={(val) => {
                    setCustomWaterInput(val);
                    setWaterValue(null);
                  }}
                  showCustom={customWater}
                  onToggleCustom={() => {
                    setCustomWater(true);
                    setWaterValue(null);
                  }}
                  unit="mL"
                  step="0.1"
                />
              </CalculatorMobileAccordion>

              <CalculatorMobileAccordion
                title="Dose Per Injection"
                subtitle="How much peptide do you want per dose?"
                selectedLabel={formatSelectionLabel(activeDose, "mcg")}
                open={openAccordions.has("dose")}
                onToggle={() => toggleAccordion("dose")}
              >
                <ChoiceGroup
                  label="How much peptide do you want per dose?"
                  hideLabel={true}
                  options={DOSE_PRESETS}
                  selected={doseValue}
                  onSelect={(v) => {
                    setDoseValue(v);
                    setCustomDose(false);
                  }}
                  customValue={customDoseInput}
                  onCustomChange={(val) => {
                    setCustomDoseInput(val);
                    setDoseValue(null);
                  }}
                  showCustom={customDose}
                  onToggleCustom={() => {
                    setCustomDose(true);
                    setDoseValue(null);
                  }}
                  unit="mcg"
                  step="1"
                />
              </CalculatorMobileAccordion>
            </div>

            {/* Desktop (>= lg): Side-by-Side Flex Layout */}
            <div className="hidden lg:flex lg:flex-row">
              {/* Syringe Selection (Left on Desktop, Top on Mobile) */}
              <div className="border-b lg:border-b-0 lg:border-r border-[#e3e8e6] p-6 sm:p-8 lg:w-[45%] bg-[#f6f8f7]">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#066068]">
                  Step 1 — Syringe
                </p>
                <p className="mt-1 text-base font-semibold text-[#1c2522]">
                  What is the total volume of your syringe?
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {SYRINGE_OPTIONS.map((opt, idx) => {
                    const isSelected = syringeIndex === idx;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSyringeIndex(idx)}
                        className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-150 ${
                          isSelected
                            ? "border-[#0b7c84] bg-[#e6f2f2] shadow-[0_2px_10px_rgba(11,124,132,0.15)]"
                            : "border-[#e3e8e6] bg-white text-[#1c2522] hover:border-[#cbd4d1]"
                        }`}
                      >
                        <span className={`shrink-0 text-base font-bold ${isSelected ? "text-[#066068]" : "text-[#1c2522]"}`}>
                          {opt.label}
                        </span>
                        <span className="shrink-0 text-xs font-semibold text-[#5b6764]">
                          {opt.units} units
                        </span>
                        <div className="min-w-0 flex-1">
                          <SyringeSvg size={idx === 0 ? "sm" : idx === 1 ? "md" : "lg"} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vial, Water, and Dose Inputs (Right on Desktop, Below on Mobile) */}
              <div className="flex flex-1 flex-col justify-center gap-7 p-6 sm:p-8 bg-white">
                <ChoiceGroup
                  label="How many milligrams are in your peptide vial?"
                  options={VIAL_PRESETS}
                  selected={vialValue}
                  onSelect={(v) => {
                    setVialValue(v);
                    setCustomVial(false);
                  }}
                  customValue={customVialInput}
                  onCustomChange={(val) => {
                    setCustomVialInput(val);
                    setVialValue(null);
                  }}
                  showCustom={customVial}
                  onToggleCustom={() => {
                    setCustomVial(true);
                    setVialValue(null);
                  }}
                  unit="mg"
                  step="0.1"
                />

                <ChoiceGroup
                  label="How much bacteriostatic water are you adding?"
                  options={WATER_PRESETS}
                  selected={waterValue}
                  onSelect={(v) => {
                    setWaterValue(v);
                    setCustomWater(false);
                  }}
                  customValue={customWaterInput}
                  onCustomChange={(val) => {
                    setCustomWaterInput(val);
                    setWaterValue(null);
                  }}
                  showCustom={customWater}
                  onToggleCustom={() => {
                    setCustomWater(true);
                    setWaterValue(null);
                  }}
                  unit="ml"
                  step="0.1"
                />

                <ChoiceGroup
                  label="How much peptide do you want per dose?"
                  options={DOSE_PRESETS}
                  selected={doseValue}
                  onSelect={(v) => {
                    setDoseValue(v);
                    setCustomDose(false);
                  }}
                  customValue={customDoseInput}
                  onCustomChange={(val) => {
                    setCustomDoseInput(val);
                    setDoseValue(null);
                  }}
                  showCustom={customDose}
                  onToggleCustom={() => {
                    setCustomDose(true);
                    setDoseValue(null);
                  }}
                  unit="mcg"
                  step="1"
                />
              </div>
            </div>

            {/* Results Area */}
            <div className="border-t border-[#e3e8e6] p-3 sm:p-7 lg:p-8 bg-gradient-to-b from-[#e6f2f2] to-[#f6f8f7]">
              {!isValid ? (
                <div className="py-10 text-center">
                  <p className="text-sm sm:text-base text-[#5b6764]">
                    Select your syringe, vial size, BAC water volume, and desired dose above to see your result.
                  </p>
                </div>
              ) : exceeds ? (
                <div className="flex items-start gap-3 rounded-2xl border border-[#f2dbbe] bg-[#fff8ec] p-4">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#b8460a]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#b8460a]">
                      Syringe volume is not sufficient for this dose
                    </p>
                    <p className="mt-1 text-sm text-[#3a4744]">
                      Your dose requires{" "}
                      <span className="font-semibold  text-[#1c2522]">
                        {doseMl.toFixed(3)} ml
                      </span>
                      , but your {activeSyringe.label} syringe only holds {activeSyringe.value} ml. Try a larger syringe,
                      add more bacteriostatic water, or lower your dose.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Dose Result Card */}
                  <div className="rounded-2xl border border-[#e3e8e6] bg-white p-4 sm:p-6 shadow-[0_1px_2px_rgba(16,40,36,0.04)]">
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#066068]">
                      Your Dose
                    </span>
                    <p className="mt-2 text-sm text-[#3a4744]">
                      To get a dose of <span className="font-semibold text-[#1c2522]">{activeDose} mcg</span>, pull the syringe to:
                    </p>
                    <p className="mt-2 flex items-baseline gap-2">
                      <span className="lg:text-[60px] md:text-[60px] text-[48px] saira-extrabold lg:leading-[60px] lg:tracking-[-0.6px] md:leading-[60px] leading-[48px] md:tracking-[-0.6px] tracking-[-0.48px] text-[#066068]">
                        {doseUnits % 1 === 0 ? doseUnits.toFixed(0) : doseUnits.toFixed(1)}
                      </span>
                      <span className="text-lg font-bold uppercase tracking-wider text-[#5b6764]">
                        {doseUnits === 1 ? "unit" : "units"}
                      </span>
                    </p>
                    <div className="mt-5">
                      <SyringeVisualBar totalUnits={activeSyringe.units} doseUnits={doseUnits} />
                    </div>

                    {/* Rx Partner Banner if Semaglutide or Tirzepatide */}
                    {activePreset && (activePreset.id === "semaglutide" || activePreset.id === "tirzepatide") && (
                      <div className="mt-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-[12px] bg-[#fffbe0] p-4">
                          <div className="flex gap-3">
                            <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-[#1c2522]" strokeWidth={1.5} aria-hidden="true" />
                            <p className="text-sm text-[#1c2522]">
                              <span className="font-semibold">Want this prescribed?</span> Licensed doctors, compounded{" "}
                              {RX_OFFERS[activePreset.id]?.peptideName || activePreset.name} from $
                              {RX_OFFERS[activePreset.id]?.price || 59}/mo.
                            </p>
                          </div>
                          <a
                            href={RX_OFFERS[activePreset.id]?.url || "https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876"}
                            target="_blank"
                            rel="sponsored nofollow noopener noreferrer"
                            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#feed5a] px-6 py-3 text-[15px] font-semibold text-[#1c2522] shadow-[0_2px_0_rgba(28,37,34,0.18)] hover:bg-[#fff04b] transition-all"
                          >
                            See if I qualify
                            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                          </a>
                        </div>
                        <p className="mt-2 text-[11px] text-[#5b6764]">
                          Affiliate link · Collective · Same price any dose · + $199/yr membership, 21 days free · Compounded medications are not FDA-approved
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 3 Stats Grid */}
                  <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e3e8e6] bg-white">
                    <div className="min-w-0 px-2 py-4 text-center sm:px-3 border-r border-[#e3e8e6]">
                      <p className="text-[10px] font-bold uppercase leading-[16px] tracking-[0.4px] sm:text-[11px] sm:leading-[18px] sm:tracking-[0.66px] text-[#5b6764]">
                        Concentration
                      </p>
                      <p className="mt-1.5 md:text-[16px] text-[14px] font-semibold md:leading-[24px] leading-[20px] text-[#1c2522] font-sans">
                        {concentration.toFixed(2)} mg/ml
                      </p>
                    </div>
                    <div className="min-w-0 px-2 py-4 text-center sm:px-3 border-r border-[#e3e8e6]">
                      <p className="text-[10px] font-bold uppercase leading-[16px] tracking-[0.4px] sm:text-[11px] sm:leading-[18px] sm:tracking-[0.66px] text-[#5b6764]">
                        Volume
                      </p>
                      <p className="mt-1.5 md:text-[16px] text-[14px] font-semibold md:leading-[24px] leading-[20px] text-[#1c2522] font-sans">
                        {doseMl.toFixed(3)} ml
                      </p>
                    </div>
                    <div className="min-w-0 px-2 py-4 text-center sm:px-3">
                      <p className="text-[10px] font-bold uppercase leading-[16px] tracking-[0.4px] sm:text-[11px] sm:leading-[18px] sm:tracking-[0.66px] text-[#5b6764]">
                        Doses / Vial
                      </p>
                      <p className="mt-1.5 md:text-[16px] text-[14px] font-semibold md:leading-[24px] leading-[20px] text-[#1c2522] font-sans">
                        {dosesPerVial}
                      </p>
                    </div>
                  </div>

                  {/* Cost Per Dose Calculator */}
                  <div>
                    {!showCostCalc ? (
                      <button
                        type="button"
                        onClick={() => setShowCostCalc(true)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0b7c84] bg-white px-4 py-2 text-sm font-semibold text-[#066068] transition-all hover:scale-[1.02]"
                      >
                        <DollarSign className="h-4 w-4" />
                        Calculate cost per dose
                      </button>
                    ) : (
                      <div className="space-y-4 rounded-2xl border border-[#e3e8e6] bg-white p-4 sm:p-5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#066068]">
                            Cost Per Dose Calculator
                          </p>
                          <button
                            type="button"
                            onClick={() => setShowCostCalc(false)}
                            className="text-xs text-[#5b6764] hover:text-[#1c2522]"
                          >
                            Hide
                          </button>
                        </div>
                        <div className="flex flex-wrap items-end gap-4">
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-[#3a4744]">
                              Vial cost ($)
                            </label>
                            <div className="relative max-w-[140px]">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#5b6764]">
                                $
                              </span>
                              <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={vialCost}
                                onChange={(e) => setVialCost(e.target.value)}
                                placeholder="0.00"
                                className="w-full rounded-lg border border-[#e3e8e6] bg-white py-2 pl-7 pr-3 text-sm text-[#1c2522] focus:outline-none focus:border-[#0b7c84]"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-[#3a4744]">
                              Dosing frequency
                            </label>
                            <div className="flex flex-wrap gap-1.5">
                              {DOSING_FREQUENCIES.map((freq, idx) => (
                                <button
                                  key={freq.label}
                                  type="button"
                                  onClick={() => setFrequencyIndex(idx)}
                                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                                    frequencyIndex === idx
                                      ? "border-[#0b7c84] bg-[#0b7c84] text-white"
                                      : "border-[#e3e8e6] bg-white text-[#3a4744] hover:border-[#0b7c84] hover:bg-[#e6f2f2]"
                                  }`}
                                >
                                  {freq.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {costPerDose !== null && (
                          <div className="flex flex-wrap gap-6 rounded-xl bg-[#e6f2f2] px-4 py-3 text-sm">
                            <div>
                              <span className="text-[#3a4744]">Cost per dose: </span>
                              <span className="font-semibold  text-[#066068]">
                                ${costPerDose.toFixed(2)}
                              </span>
                            </div>
                            {costPerWeek !== null && (
                              <div>
                                <span className="text-[#3a4744]">Cost per week: </span>
                                <span className="font-semibold  text-[#066068]">
                                  ${costPerWeek.toFixed(2)}
                                </span>
                              </div>
                            )}
                            {daysSupply !== null && (
                              <div>
                                <span className="text-[#3a4744]">Vial lasts: </span>
                                <span className="font-semibold  text-[#066068]">
                                  ~{daysSupply} days
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Keep This Dose / Save to Tracker Card */}
                  <div className="rounded-2xl border border-[#e3e8e6] bg-white p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.30),0_0_3px_0_rgba(0,0,0,0.06)]">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="lg:text-[24px] md:text-[24px] text-[20px] saira-extrabold text-[#1c2522] md:leading-[30px] leading-[25px] md:tracking-[-0.24px] tracking-[-0.2px] m-0">
                          Keep this dose — track every injection free
                        </h3>
                        <p className="mt-1.5 text-sm text-[#5b6764]">
                          Save this calculation to your free tracker. Calculators stay anonymous — sign in only to save.
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2 list-none p-0">
                          <li className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold bg-[#e6f2f2] text-[#066068]">
                            <Bell className="h-3.5 w-3.5" aria-hidden="true" />
                            Dose reminders
                          </li>
                          <li className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold bg-[#e6f2f2] text-[#066068]">
                            <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                            Injection logging
                          </li>
                          <li className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold bg-[#e6f2f2] text-[#066068]">
                            <Timer className="h-3.5 w-3.5" aria-hidden="true" />
                            Vial countdown
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={handleSaveToTracker}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-[16px]  font-bold  text-white bg-[#0b7c84] hover:bg-[#095e64] shadow-[0_2px_8px_rgba(11,124,132,0.25)] hover:shadow-[0_4px_12px_rgba(11,124,132,0.35)] transition-all"
                      >
                        <Bookmark className="h-4 w-4" aria-hidden="true" />
                        Save to my tracker
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 3: How to Reconstitute Peptides */}
      {/* ====================================================================== */}
      <section id="how-to-reconstitute-peptides" className="bg-white lg:py-[88px] md:py-[72px] py-[56px] scroll-mt-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            <Beaker className="h-3.5 w-3.5" aria-hidden="true" />
            Step-by-step
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            How to Reconstitute Peptides
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Peptides are typically delivered as lyophilized (freeze-dried) powders that must be reconstituted with
            bacteriostatic water before use. Following proper reconstitution technique ensures peptide stability and
            accurate dosing. This step-by-step guide covers everything you need to know about peptide mixing and
            preparation.
          </p>
          <p className="mt-2.5 text-sm text-[#5b6764] leading-[22px]">
            Want the full walkthrough? Read{" "}
            <Link to="/how-to-reconstitute-peptides" className="text-[#066068] leading-[22px] font-semibold underline underline-offset-2 hover:text-[#0b7c84]">
              how to reconstitute peptides
            </Link>{" "}
            and then use the calculator above to convert your dose into exact syringe units.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
            {PREPARATION_STEPS.map((step) => (
              <article
                key={step.number}
                className="relative rounded-[20px] overflow-hidden pt-5 px-5 pb-0 flex flex-col shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,54,59,0.35)] transition-all"
                style={{ background: step.bg }}
              >
                <span className="w-[28px] h-[28px] rounded-full bg-white/85 text-[#066068] leading-[22px] inline-flex items-center justify-center saira-extrabold text-[14px] mb-2.5" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="lg:text-[19px] md:text-[16px] text-[16px] saira-extrabold text-[#1c2522] lg:leading-[22px] leading-[19px] lg:tracking-[-0.19px] tracking-[-0.16px] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.5] text-[#3a4744] mb-3">
                  {step.desc}
                </p>
                <div className="relative mt-auto -mx-5 aspect-[16/10] overflow-hidden" aria-hidden="true">
                  <img src={step.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 bg-[#e6f2f2] border border-[#c9e1e2] rounded-[16px] p-5 sm:p-6 flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#e3e8e6] flex items-center justify-center text-[#066068]">
              <FlaskConical className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-[#1c2522] text-[15px] leading-[24px]">
                Not sure how much bacteriostatic water to add to your vial?
              </p>
              <p className="mt-1.5 text-[14.5px] text-[#3a4744] leading-[1.55]">
                The amount of BAC water you add controls your concentration — less water means more concentrated (fewer syringe units per dose), more water means more dilute (more units per dose). Use our free{" "}
                <Link
                  to="/tools/bac-water-calculator"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-[#066068] font-semibold underline underline-offset-2 hover:text-[#0b7c84]"
                >
                  BAC water calculator
                </Link>{" "}
                to find the recommended water volume for your specific vial size and dose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 4: Storing Reconstituted Peptides */}
      {/* ====================================================================== */}
      <section className="bg-[#f6f8f7] lg:py-[88px] md:py-[72px] py-[56px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            <Thermometer className="h-3.5 w-3.5" aria-hidden="true" />
            Storage
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            Storing Reconstituted Peptides
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Proper storage is critical for maintaining peptide potency and sterility after reconstitution. Temperature
            control is the most important factor.
          </p>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Short-Term */}
            <div className="bg-white border border-[#e3e8e6] rounded-[16px] p-[22px] relative overflow-hidden">
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[5px] bg-[#e6f2f2]" />
              <span className="text-[11px] font-bold leading-[18px] tracking-[0.88px] uppercase text-[#066068]">
                Short-Term
              </span>
              <h3 className="text-[22px] text-[18px] saira-extrabold text-[#1c2522] mt-2 mb-1 leading-[25px] tracking-[-0.22px]">
                3–4 weeks
              </h3>
              <p className=" text-[13px] leading-[21px] text-[#3a4744] mb-3">
                2–8°C (36–46°F)
              </p>
              <p className="text-[14.5px] text-[#3a4744] leading-[1.6] m-0">
                Store reconstituted peptide solutions in a standard refrigerator. Avoid the door shelf where temperatures
                fluctuate. Keep the vial upright with the rubber stopper facing up.
              </p>
            </div>

            {/* Long-Term */}
            <div className="bg-white border border-[#e3e8e6] rounded-[16px] p-[22px] leading-[18px] relative overflow-hidden">
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[5px] bg-[#dbeafe]" />
              <span className="text-[11px] font-bold leading-[18px] tracking-[0.08em] uppercase text-[#066068]">
                Long-Term
              </span>
              <h3 className="lg:text-[22px] md:text-[20px] text-[18px] saira-extrabold text-[#1c2522] mt-2 mb-1 lg:leading-[25px] md:leading-[23px] leading-[21px] tracking-[-0.22px]">
                3–4 months
              </h3>
              <p className=" text-[13px] text-[#3a4744] leading-[21px] mb-3">
                -20°C (-4°F)
              </p>
              <p className="text-[14.5px] text-[#3a4744] leading-[1.6] m-0">
                For longer storage, freeze aliquots in single-use portions. Avoid repeated freeze-thaw cycles as they can
                degrade peptide integrity and compromise sterility.
              </p>
            </div>
          </div>

          <div className="mt-5 bg-white border border-[#e3e8e6] rounded-[12px] p-[16px_20px] text-[14px] text-[#3a4744] leading-[1.6]">
            <strong className="text-[#1c2522] font-bold">Note:</strong> Unreconstituted (lyophilized) peptide powder is
            far more stable — it can be stored at room temperature for weeks, or at -20°C for years. Only reconstitute
            what you plan to use within the recommended timeframe.
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 5: How to Calculate Your Peptide Dose */}
      {/* ====================================================================== */}
      <section id="how-to-calculate-dose" className="bg-white lg:py-[88px] md:py-[72px] py-[56px] scroll-mt-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
            The Math
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            How to Calculate Your Peptide Dose
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Understanding the math behind peptide dosing is straightforward once you know the three-step formula. Our
            peptide dosage calculator automates this, but here is how the calculation works manually so you can verify
            your results.
          </p>

          {/* 3 Step Formula Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#f6f8f7] border border-[#e3e8e6] rounded-[16px] p-[22px] pb-[18px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-[30px] h-[30px] rounded-full bg-[#0b7c84] text-white inline-flex items-center justify-center text-[14px] saira-extrabold leading-[22px] tracking-[-0.14px]">
                  1
                </span>
                <span className="text-[11px] font-bold leading-[18px] tracking-[0.08em] uppercase text-[#5b6764]">
                  Step 1
                </span>
              </div>
              <h3 className="text-[18px] saira-extrabold text-[#1c2522] m-0 leading-[1.2]">
                Calculate the Concentration
              </h3>
              <p className="text-[14px] text-[#3a4744] leading-[1.55] m-0">
                Divide the total amount of peptide in the vial by the amount of bacteriostatic water you added.
              </p>
              <div className="mt-1 bg-white border border-[#e3e8e6] rounded-[10px] p-[10px_14px]  text-[13.5px] text-[#1c2522] leading-[22px]">
                5 mg ÷ 2 ml = 2.5 mg/ml
              </div>
            </div>

            <div className="bg-[#f6f8f7] border border-[#e3e8e6] rounded-[16px] p-[22px] pb-[18px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-[30px] h-[30px] rounded-full bg-[#0b7c84] text-white inline-flex items-center justify-center text-[14px] saira-extrabold leading-[22px] tracking-[-0.14px]">
                  2
                </span>
                <span className="text-[11px] font-bold leading-[18px] tracking-[0.08em] uppercase text-[#5b6764]">
                  Step 2
                </span>
              </div>
              <h3 className="text-[18px] saira-extrabold text-[#1c2522] m-0 leading-[1.2]">
                Calculate the Injection Volume
              </h3>
              <p className="text-[14px] text-[#3a4744] leading-[1.55] m-0">
                Divide your target dose by the concentration. Since the vial is in mg and your dose is in mcg, multiply by 1,000 to match units.
              </p>
              <div className="mt-1 bg-white border border-[#e3e8e6] rounded-[10px] p-[10px_14px]  text-[13.5px] text-[#1c2522] leading-[22px]">
                250 mcg ÷ (2.5 × 1,000) = 0.1 ml
              </div>
            </div>

            <div className="bg-[#f6f8f7] border border-[#e3e8e6] rounded-[16px] p-[22px] pb-[18px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-[30px] h-[30px] rounded-full bg-[#0b7c84] text-white inline-flex items-center justify-center text-[14px] saira-extrabold leading-[22px] tracking-[-0.14px]">
                  3
                </span>
                <span className="text-[11px] font-bold leading-[18px] tracking-[0.08em] uppercase text-[#5b6764]">
                  Step 3
                </span>
              </div>
              <h3 className="text-[18px] saira-extrabold text-[#1c2522] m-0 leading-[1.2]">
                Convert to Syringe Units
              </h3>
              <p className="text-[14px] text-[#3a4744] leading-[1.55] m-0">
                Multiply the injection volume by the number of units your syringe holds per ml to get the mark you draw to.
              </p>
              <div className="mt-1 bg-white border border-[#e3e8e6] rounded-[10px] p-[10px_14px]  text-[13.5px] text-[#1c2522] leading-[22px]">
                0.1 ml × 100 units/ml = 10 units
              </div>
            </div>
          </div>

          {/* Worked Examples Accordion */}
          <div id="worked-examples" className="mt-[44px] scroll-mt-24">
            <h3 className="lg:text-[22px] md:text-[20px] text-[18px] saira-extrabold text-[#1c2522] lg:leading-[35px] md:leading-[24px] leading-[22px] tracking-[-0.22px] m-0">
              Dosing Examples by Peptide
            </h3>
            <p className="mt-2 text-[14.5px] text-[#5b6764] leading-[23px]">
              Select a peptide to see a step-by-step calculation using a common reconstitution setup.
            </p>

            <div className="mt-5 bg-white border border-[#e3e8e6] rounded-[16px] overflow-hidden divide-y divide-[#e3e8e6]">
              {DOSING_EXAMPLES.map((ex, idx) => (
                <details key={ex.name} open={idx === 0} className="group">
                  <summary className="flex items-center justify-between gap-3 p-[16px_22px] cursor-pointer list-none text-[15px] leading-[24px] font-bold text-[#1c2522] hover:bg-[#f6f8f7] transition-colors [&::-webkit-details-marker]:hidden">
                    <span>{ex.name}</span>
                    <ChevronDown className="h-4 w-4 text-[#066068] transition-transform duration-200 group-open:rotate-180 shrink-0" aria-hidden="true" />
                  </summary>
                  <div className="p-[16px_22px_22px] border-t border-[#e3e8e6] bg-[#f6f8f7]">
                    <p className="text-[13.5px] text-[#5b6764] mb-3.5 m-0 leading-[22px]">
                      {ex.setup}
                    </p>
                    <div className="grid gap-2">
                      {ex.rows.map(([rLabel, rVal]) => (
                        <div key={rLabel} className="flex justify-between items-center p-[10px_14px] bg-white border border-[#e3e8e6] rounded-[8px] text-[14px] leading-[22px]">
                          <span className="font-semibold text-[#3a4744]">{rLabel}</span>
                          <span className="font-sans text-[#1c2522]">{rVal}</span>
                        </div>
                      ))}
                    </div>
                    {ex.link && (
                      <Link to={ex.href} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-1.5 mt-3.5 text-[14px] font-bold text-[#066068] no-underline hover:underline leading-[22px]">
                        {ex.link}
                      </Link>
                    )}
                    {ex.note && (
                      <p className="mt-3 text-[13px] text-[#5b6764] italic m-0">
                        {ex.note}
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 6: Peptide Reconstitution Chart */}
      {/* ====================================================================== */}
      <section id="reconstitution-chart" className="bg-[#f6f8f7] lg:py-[88px] md:py-[72px] py-[56px] scroll-mt-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
            Quick Reference
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            Peptide Reconstitution Chart
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Look up your vial size and the amount of BAC water you added, then find your dose column to get the exact
            units to draw. All values assume a standard <strong className="text-[#1c2522]">100-unit (1 ml) insulin syringe</strong>.
          </p>

          <div className="mt-5 bg-[#e6f2f2] border border-[#c9e1e2] rounded-[12px] p-[14px_18px] text-[14px] text-[#3a4744] leading-[1.55]">
            <strong className="text-[#1c2522] font-bold">How to read this chart:</strong> Find the row that matches your
            vial size and the ml of BAC water you added. Then look across to your dose amount — the number shown is the
            unit mark on your syringe.
            <span className="block mt-1 text-[13px] text-[#5b6764]">
              Example: 5 mg vial + 2 ml water + 250 mcg dose = pull to <strong className="text-[#1c2522]">10 units</strong>.
            </span>
          </div>

          <div className="mt-5 bg-white border border-[#e3e8e6] rounded-[16px] overflow-hidden">
            <p className="sm:hidden m-0 p-[10px_16px] text-[12px] text-[#5b6764] text-right bg-[#f6f8f7] border-b border-[#e3e8e6]">
              ← scroll to see all doses →
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#f6f8f7]">
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Vial</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">BAC Water</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Conc.</th>
                    <th className="p-[14px_16px] text-center text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">250 mcg</th>
                    <th className="p-[14px_16px] text-center text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">500 mcg</th>
                    <th className="p-[14px_16px] text-center text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">1 mg</th>
                    <th className="p-[14px_16px] text-center text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">2.5 mg</th>
                    <th className="p-[14px_16px] text-center text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">5 mg</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e3e8e6]">
                  {CHART_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#f6f8f7] transition-colors">
                      <td className="p-[14px_16px] text-left leading-[22px] text-[14px] font-bold text-[#3a4744] whitespace-nowrap">{row[0]}</td>
                      <td className="p-[14px_16px] text-left leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[1]}</td>
                      <td className="p-[14px_16px] text-left leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[2]}</td>
                      <td className="p-[14px_16px] text-center leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[3]}</td>
                      <td className="p-[14px_16px] text-center leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[4]}</td>
                      <td className="p-[14px_16px] text-center leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[5]}</td>
                      <td className="p-[14px_16px] text-center leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[6]}</td>
                      <td className="p-[14px_16px] text-center leading-[22px] text-[14px] text-[#3a4744] whitespace-nowrap">{row[7]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-[13px] text-[#5b6764] leading-[1.55]">
            Syringe unit values are for a <strong className="text-[#3a4744] font-bold">100-unit (1 ml) insulin syringe</strong>. A dash (—) means the dose exceeds what the vial contains at that dilution. For 50-unit or 30-unit syringes, the math is the same — only fill to the unit mark shown above.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 7: Understanding Peptide Units & Conversions */}
      {/* ====================================================================== */}
      <section className="bg-white lg:py-[88px] md:py-[72px] py-[56px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            Glossary
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            Understanding Peptide Units &amp; Conversions
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            One of the most common sources of confusion in peptide dosing is the difference between weight units, volume
            units, and syringe units. Here is a clear breakdown of each measurement you will encounter when using a
            peptide mixing calculator.
          </p>

          <div className="mt-7 bg-[#f6f8f7] border border-[#e3e8e6] rounded-[16px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white">
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Unit</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Full Name</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Measures</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Used For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e3e8e6]">
                  {GLOSSARY_UNITS.map((item) => (
                    <tr key={item.unit} className="hover:bg-white transition-colors">
                      <td className="p-[14px_16px] text-left text-[14px] leading-[22px] font-bold text-[#3a4744] whitespace-nowrap">{item.unit}</td>
                      <td className="p-[14px_16px] text-left text-[14px] leading-[22px] text-[#3a4744] whitespace-nowrap">{item.name}</td>
                      <td className="p-[14px_16px] text-left text-[14px] leading-[22px] text-[#5b6764] whitespace-nowrap">{item.measure}</td>
                      <td className="p-[14px_16px] text-left text-[14px] leading-[22px] text-[#5b6764] whitespace-nowrap">{item.usedFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#e6f2f2] border border-[#c9e1e2] rounded-[16px] p-[20px_22px]">
              <h4 className="text-[15px] saira-extrabold text-[#1c2522] leading-[24px] tracking-[-0.15px] m-0">Key Conversion</h4>
              <p className=" text-[16px] text-[#066068] my-2 mb-1 font-bold leading-[26px]">1 mg = 1,000 mcg</p>
              <p className="text-[13px] text-[#3a4744] m-0 leading-[1.5]">A 5 mg vial contains 5,000 mcg total</p>
            </div>
            <div className="bg-[#e6f2f2] border border-[#c9e1e2] rounded-[16px] p-[20px_22px]">
              <h4 className="text-[15px] saira-extrabold text-[#1c2522] leading-[24px] tracking-[-0.15px] m-0">Syringe Unit to Volume</h4>
              <p className=" text-[16px] text-[#066068] my-2 mb-1 font-bold leading-[26px]">1 unit = 0.01 ml (all syringe sizes)</p>
              <p className="text-[13px] text-[#3a4744] m-0 leading-[1.5]">30-unit = 0.3 ml · 50-unit = 0.5 ml · 100-unit = 1.0 ml</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 8: Popular Peptide Dosing Quick Reference */}
      {/* ====================================================================== */}
      <section className="bg-[#f6f8f7] lg:py-[88px] md:py-[72px] py-[56px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            Quick Reference
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            Popular Peptide Dosing Quick Reference
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Below are common reconstitution setups for the most popular therapeutic peptides. These are general reference
            ranges — always follow your prescribing clinician's specific protocol. Click any peptide name to view its
            full encyclopedia entry with clinical evidence, FDA status, and detailed dosing guidance.
          </p>

          <div className="mt-7 bg-white border border-[#e3e8e6] rounded-[16px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#f6f8f7]">
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Peptide</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Category</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Vial Size</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Typical Water</th>
                    <th className="p-[14px_16px] text-left text-[12px] font-bold leading-[19px] tracking-[0.04em] uppercase text-[#3a4744] border-b border-[#e3e8e6] whitespace-nowrap">Common Dose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e3e8e6]">
                  {POPULAR_PEPTIDES.map((pep) => (
                    <tr key={pep.name} className="hover:bg-[#f6f8f7] transition-colors">
                      <td className="p-[14px_16px] text-left font-bold text-[#066068] whitespace-nowrap leading-[22px]">
                        <Link to={`/peptides/${pep.slug}`} className="hover:underline">
                          {pep.name}
                        </Link>
                      </td>
                      <td className="p-[14px_16px] text-left text-[#5b6764] whitespace-nowrap leading-[22px]">{pep.category}</td>
                      <td className="p-[14px_16px] text-left text-[14px] text-[#3a4744] whitespace-nowrap leading-[22px]">{pep.vial}</td>
                      <td className="p-[14px_16px] text-left text-[14px] text-[#3a4744] whitespace-nowrap leading-[22px]">{pep.water}</td>
                      <td className="p-[14px_16px] text-left text-[14px] text-[#3a4744] whitespace-nowrap leading-[22px]">{pep.dose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-[14.5px] text-[#3a4744] leading-[23px]">
            Looking for a specific peptide? Browse our{" "}
            <Link to="/peptides" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[#066068] font-semibold underline underline-offset-2 hover:text-[#0b7c84]">
              complete Peptide Encyclopedia
            </Link>{" "}
            with 40+ entries covering mechanisms, clinical research, FDA status, and dosing protocols.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 9: Related Dosing Tools */}
      {/* ====================================================================== */}
      <section className="bg-white lg:py-[72px] md:py-[60px] py-[48px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            Keep Going
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            Related Dosing Tools
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Specialized calculators and converters for the peptides you use most.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 leading-[24px]">
            {RELATED_TOOLS.map((tool) => (
              <Link
                key={tool.name}
                to={tool.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center justify-between gap-3 p-[16px_20px] bg-[#f6f8f7] border border-[#e3e8e6] rounded-[12px] no-underline text-[#1c2522] text-[15px] font-semibold hover:border-[#0b7c84] hover:bg-white transition-all group"
              >
                <span>{tool.name}</span>
                <ArrowRight className="h-4 w-4 text-[#066068] group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 10: Frequently Asked Questions */}
      {/* ====================================================================== */}
      <section id="faq" className="bg-[#f6f8f7] lg:py-[88px] md:py-[72px] py-[56px] scroll-mt-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[820px]">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[#066068]">
            FAQ
          </span>
          <h2 className="lg:text-[34px] md:text-[31px] text-[26px] saira-extrabold lg:leading-[54px] md:leading-[49px] leading-[42px] lg:tracking-[-0.34px] md:tracking-[-0.31px] tracking-[-0.26px] text-[#1c2522] mt-3">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-[#3a4744] text-[16px] leading-[26px] max-w-[62ch]">
            Common questions about peptide reconstitution, dosing calculations, and using this peptide calculator.
          </p>

          <div className="mt-7 bg-white border border-[#e3e8e6] rounded-[16px] overflow-hidden divide-y divide-[#e3e8e6] leading-[24px]">
            {FAQS.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between gap-4 p-[18px_22px] cursor-pointer list-none text-[#1c2522] text-[15px] font-semibold hover:bg-[#f6f8f7] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-4 w-4 text-[#066068] shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-[22px] pb-[20px] pt-0">
                  <p className="text-[14.5px] leading-[1.65] text-[#3a4744] m-0">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 11: Popular Dosing Guides */}
      {/* ====================================================================== */}
      <section className="bg-white border-t border-[#e3e8e6] lg:py-[88px] md:py-[72px] py-[56px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <h2 className="lg:text-[32px] text-[24px] saira-extrabold lg:leading-[35px] leading-[26px] lg:tracking-[-0.16px] md:tracking-[-0.14px] tracking-[-0.12px] text-[#1c2522] m-0">
            Popular dosing guides
          </h2>
          <p className="mt-3 max-w-[62ch] text-[#3a4744] leading-[26px]">
            Once you have your syringe units, dial in the protocol. These evidence-based guides cover dose ranges,
            titration, and timing for the most-searched peptides.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                to={guide.href}
                className="group flex items-start gap-4 rounded-[12px] border border-[#e3e8e6] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)] no-underline"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#e6f2f2]">
                  <BookOpen className="h-5 w-5 text-[#066068]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#1c2522] group-hover:text-[#066068] transition-colors">
                    {guide.title}
                  </p>
                  <p className="mt-1 text-xs text-[#5b6764] leading-[16px]">
                    {guide.desc}
                  </p>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#5b6764] group-hover:text-[#066068] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 12: Dosing & Reconstitution Guides */}
      {/* ====================================================================== */}
      <section className="bg-[#f6f8f7] border-t border-[#e3e8e6] lg:py-[88px] md:py-[72px] py-[56px]">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <h2 className="lg:text-[32px] text-[24px] saira-extrabold lg:leading-[35px] leading-[26px] lg:tracking-[-0.16px] tracking-[-0.12px] text-[#1c2522] m-0">
            Dosing &amp; reconstitution guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RECONSTITUTION_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                to={guide.href}
                className="group flex items-start gap-4 rounded-[12px] border border-[#e3e8e6] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)] no-underline"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#e6f2f2]">
                  {guide.icon === "beaker" ? (
                    <Beaker className="h-5 w-5 text-[#066068]" aria-hidden="true" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-[#066068]" aria-hidden="true" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#1c2522] group-hover:text-[#066068] transition-colors">
                    {guide.title}
                  </p>
                  <p className="mt-1 text-xs text-[#5b6764] leading-[16px]">
                    {guide.desc}
                  </p>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#5b6764] group-hover:text-[#066068] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 13: Need a Clinician? Feature Band */}
      {/* ====================================================================== */}
      <section className="bg-[#f6f8f7] lg:py-[64px] md:py-[52px] py-[40px]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b7c84] rounded-[24px] lg:p-[56px] md:p-[42px] p-[28px] grid grid-cols-1 gap-7 items-center">
            <div>
              <span className="inline-block text-[12px] font-bold tracking-[0.08em] uppercase text-white/90 mb-3.5 leading-[19px]">
                Need a Clinician?
              </span>
              <h2 className="lg:text-[40px] md:text-[31px] text-[28px] saira-extrabold lg:leading-[44px] md:leading-[34px] leading-[31px] lg:tracking-[-0.4px] md:tracking-[-0.31px] tracking-[-0.28px] text-white m-0">
                Get guidance from a verified peptide therapy clinic.
              </h2>
              <p className="lg:text-[18px] text-[16px] text-white/90 leading-[1.6] mt-4 max-w-[52ch]">
                Calculators can do the math, but a licensed prescriber can build a protocol around your goals, labs, and
                history. Browse 1,000+ verified clinics in our directory.
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <Link
                  to="/clinics"
                  className="inline-flex items-center gap-2 font-bold text-[15px] px-[22px] py-[12px] rounded-full bg-white text-[#066068] hover:bg-white/90 transition-all no-underline leading-[24px]"
                >
                  <Stethoscope className="h-4 w-4" aria-hidden="true" />
                  Find a Clinic
                </Link>
                <Link
                  to="/protocols"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 font-bold text-[15px] px-[22px] py-[12px] rounded-full bg-transparent text-white border-[1.5px] border-white/55 hover:bg-white/10 transition-all no-underline leading-[24px]"
                >
                  Browse Protocols
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* SECTION 14: Medical Disclaimer */}
      {/* ====================================================================== */}
      <section className="bg-[#f6f8f7] lg:pb-[72px] md:pb-[60px] pb-[48px]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <div className="bg-white border border-[#e3e8e6] rounded-[12px] p-[20px_24px]">
            <p className="text-[13px] leading-[1.65] text-[#5b6764] m-0">
              <strong className="text-[#3a4744] font-bold">Medical Disclaimer:</strong> This peptide reconstitution
              calculator is provided for informational and educational purposes only. It is not a substitute for
              professional medical advice, diagnosis, or treatment. All dosing should be determined and supervised by a
              licensed healthcare provider. Always consult a qualified clinician before starting any peptide therapy
              protocol. MyPeptideMatch.com does not sell peptides or pharmaceutical products. The dosing references on
              this page are general guidelines and may not be appropriate for your individual circumstances.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
