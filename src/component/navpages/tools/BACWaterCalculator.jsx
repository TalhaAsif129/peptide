import { useState } from "react";
import { Link } from "react-router-dom";

import syringeSmall from "../../../assets/tools/bacwater/syringe-small.svg";
import syringeMedium from "../../../assets/tools/bacwater/syringe-medium.svg";
import syringeLarge from "../../../assets/tools/bacwater/syringe-large.svg";

// ==========================================
// ===== Static Data (Top Level) =====
// ==========================================

const SYRINGE_OPTIONS = [
  { value: "0.3", label: "0.3 mL", sub: "30 units", img: syringeSmall },
  { value: "0.5", label: "0.5 mL", sub: "50 units", img: syringeMedium },
  { value: "1.0", label: "1.0 mL", sub: "100 units", img: syringeLarge },
];

const REFERENCE_ROWS = [
  {
    mg: "2 mg",
    values: ["2.00 mg/mL", "1.00 mg/mL", "0.80 mg/mL", "0.40 mg/mL"],
  },
  {
    mg: "3 mg",
    values: ["3.00 mg/mL", "1.50 mg/mL", "1.20 mg/mL", "0.60 mg/mL"],
  },
  {
    mg: "5 mg",
    values: ["5.00 mg/mL", "2.50 mg/mL", "2.00 mg/mL", "1.00 mg/mL"],
  },
  {
    mg: "10 mg",
    values: ["10.00 mg/mL", "5.00 mg/mL", "4.00 mg/mL", "2.00 mg/mL"],
  },
  {
    mg: "15 mg",
    values: ["15.00 mg/mL", "7.50 mg/mL", "6.00 mg/mL", "3.00 mg/mL"],
  },
];

const FAQS = [
  {
    q: "How much bacteriostatic water should I add to my peptide vial?",
    a: "The recommended amount depends on your vial size and desired dose. Generally, 1–3 mL of BAC water per 5 mg of peptide is common — this gives a concentration that allows easy, accurate syringe draws (typically 10–50 units per dose). Use the calculator above to get a personalized recommendation based on your vial and dose.",
  },
  {
    q: "How much BAC water for 10 mg retatrutide?",
    a: "For a 10 mg retatrutide vial, 2 mL of BAC water is a common choice, giving a concentration of 5 mg/mL. That means a 1 mg dose would be 0.2 mL (20 units on a U-100 syringe), and a 2 mg dose would be 0.4 mL (40 units).",
  },
  {
    q: "How much BAC water to mix with 30 mg tirzepatide?",
    a: "For a 30 mg tirzepatide vial, 3 mL of BAC water gives a concentration of 10 mg/mL — a common ratio that keeps doses easy to measure. For example, 2.5 mg would be 0.25 mL (25 units), and 5 mg would be 0.5 mL (50 units).",
  },
  {
    q: "What is bacteriostatic water and why is it used for peptides?",
    a: "Bacteriostatic water (BAC water) is sterile water containing 0.9% benzyl alcohol, a preservative that inhibits bacterial growth. It is used for peptide reconstitution because it extends the shelf life of multi-dose vials to approximately 28–30 days when refrigerated, unlike plain sterile water which should only be used for single-dose preparations.",
  },
  {
    q: "How do I calculate my peptide concentration after adding BAC water?",
    a: "Concentration (mg/mL) = Total peptide in vial (mg) ÷ Total BAC water added (mL). For example, a 10 mg vial mixed with 2 mL of BAC water gives a concentration of 5 mg/mL.",
  },
  {
    q: "How does BAC water volume affect my syringe units per dose?",
    a: "More BAC water means a lower concentration, which requires drawing more units for the same dose. Less BAC water means a higher concentration and fewer units per dose. The goal is to use enough water so that your dose lands in the 10–50 unit range — easy to measure accurately and comfortable to inject.",
  },
  {
    q: "How long does reconstituted peptide last in the refrigerator?",
    a: "Most reconstituted peptides are stable for approximately 28–30 days when refrigerated at 2–8°C (35–46°F), protected from light. Always follow your provider's or the manufacturer's specific beyond-use guidance. Discard if the solution appears cloudy, discolored, or contains visible particles.",
  },
  {
    q: "What is the difference between this tool and the Peptide Reconstitution Calculator?",
    a: "This BAC Water Calculator focuses on how much bacteriostatic water to add to reach a target concentration and dose. The Peptide Reconstitution Calculator is a broader tool that also handles mg-to-units conversion, cost-per-dose calculations, and preset peptide concentrations. Use whichever fits your workflow — or both together.",
  },
];

const DOSING_GUIDES = [
  {
    title: "Retatrutide Dosage Calculator",
    description:
      "Reconstitution and mg-to-units calculator for retatrutide, with a full dose chart.",
    path: "#",
  },
  {
    title: "Tirzepatide Dosage Guide",
    description:
      "Week-by-week tirzepatide titration, dose ranges, and what to expect.",
    path: "#",
  },
  {
    title: "CJC-1295 + Ipamorelin Dosage Guide",
    description:
      "The 10 mg blend: standard mcg ranges, syringe units, timing, and titration.",
    path: "#",
  },
  {
    title: "Thymosin Alpha-1 Dosage Guide",
    description:
      "Typical thymosin alpha-1 dosing, reconstitution, and injection protocol.",
    path: "#",
  },
  {
    title: "MOTS-c Side Effects",
    description:
      "What to know about MOTS-c tolerability, dosing context, and safety.",
    path: "#",
  },
  {
    title: "Retatrutide Peptide Profile",
    description:
      "Mechanism, research status, and dosing overview for retatrutide.",
    path: "#",
  },
  {
    title: "HGH 191aa Dosing (10 IU)",
    description:
      "IU-based HGH dosing protocol, reconstitution, and unit conversions.",
    path: "#",
  },
];

const RELATED_TOOLS = [
  {
    title: "Peptide Reconstitution Calculator",
    description:
      "Full reconstitution calculator with peptide presets, cost-per-dose, and visual syringe display.",
    path: "#",
  },
  {
    title: "Peptide Units Converter",
    description:
      "Convert any peptide dose between mg, mcg, mL, and insulin syringe units.",
    path: "#",
  },
  {
    title: "Semaglutide Units Converter",
    description:
      "Dedicated semaglutide converter with common concentration presets and dosing chart.",
    path: "#",
  },
  {
    title: "Tirzepatide Units Converter",
    description:
      "Convert tirzepatide doses to syringe units with a complete dosage chart.",
    path: "#",
  },
  {
    title: "Retatrutide Dosage Calculator",
    description:
      "Reconstitution and mg-to-units calculator for retatrutide with a full 2–12 mg dose chart.",
    path: "#",
  },
];

const RECONSTITUTION_GUIDES = [
  {
    title: "How to Reconstitute Peptides",
    description:
      "Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.",
    path: "#",
    icon: "vial",
  },
  {
    title: "Peptide Dosage Guide",
    description:
      "Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.",
    path: "#",
    icon: "book",
  },
];

// ==========================================
// ===== Icons =====
// ==========================================
const BookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0d5b60"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CalculatorIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0d5b60"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="11" x2="8" y2="11" />
    <line x1="12" y1="11" x2="12" y2="11" />
    <line x1="16" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="8" y2="15" />
    <line x1="12" y1="15" x2="12" y2="15" />
    <line x1="16" y1="15" x2="16" y2="15" />
    <line x1="8" y1="19" x2="16" y2="19" />
  </svg>
);

const VialIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0d5b60"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 3h8v3l-1 1v2H9V7L8 6V3z" />
    <path d="M9 9v9a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9" />
    <line x1="9" y1="13" x2="15" y2="13" />
  </svg>
);

export default function BacWaterForm() {
  const [mixStatus, setMixStatus] = useState("not-mixed");
  const [syringeSize, setSyringeSize] = useState("1.0");

  // Vial Mg State
  const [vialMg, setVialMg] = useState(10);
  const [isCustomVial, setIsCustomVial] = useState(false);
  const [customVial, setCustomVial] = useState("");

  // BAC Water State
  const [bacWaterMl, setBacWaterMl] = useState(5);
  const [isCustomBac, setIsCustomBac] = useState(false);
  const [customBac, setCustomBac] = useState("");

  // Dose Mcg State
  const [doseMcg, setDoseMcg] = useState(50);
  const [isCustomDose, setIsCustomDose] = useState(false);
  const [customDose, setCustomDose] = useState("");

  // ===== Active Values (Custom or Preset) =====
  const activeVialMg = isCustomVial ? parseFloat(customVial) || 0 : vialMg;
  const activeBacWaterMl = isCustomBac
    ? parseFloat(customBac) || 0
    : bacWaterMl;
  const activeDoseMcg = isCustomDose ? parseFloat(customDose) || 0 : doseMcg;

  // ===== Calculations =====
  const concentration = activeBacWaterMl ? activeVialMg / activeBacWaterMl : 0;
  const doseMg = activeDoseMcg / 1000;
  const volumeMl = concentration ? doseMg / concentration : 0;
  const units = volumeMl * 100;
  const dosesPerVial = doseMg ? Math.floor(activeVialMg / doseMg) : 0;

  // ===== Empty State Check =====
  const isMissingData =
    activeVialMg === 0 || activeBacWaterMl === 0 || activeDoseMcg === 0;

  // ===== Smart Recommendation Logic =====
  const isUnitsOutOfRange = units < 10 || units > 20;
  const targetConcentration = doseMg / 0.15;
  const recommendedBacWater = targetConcentration
    ? activeVialMg / targetConcentration
    : 0;
  const roundedRecommended = Math.round(recommendedBacWater * 2) / 2;

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="bg-[#EAF4F3] pt-6 md:pt-10 pb-10 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-[#6a7a75] mb-6">
            <Link
              to="/"
              className="text-[#4a5a55] no-underline hover:text-[#0d7d85]"
            >
              Home
            </Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <Link
              to="/tools"
              className="text-[#4a5a55] no-underline hover:text-[#0d7d85]"
            >
              Tools
            </Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <span className="text-[#4a5a55] font-medium">
              BAC Water Calculator
            </span>
          </nav>

          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white text-[#0d5b60] text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border border-[#d5e5e2]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              Free BAC Water Tool
            </span>
          </div>

          <h1 className="text-[#0f2027] font-extrabold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-5">
            BAC Water Calculator for Peptides
          </h1>

          <p className="text-[#4a5a55] text-[15px] md:text-[16px] leading-relaxed mb-7 max-w-[750px]">
            Answers{" "}
            <strong className="text-[#0f2027] font-bold">
              how much bacteriostatic water should I add?
            </strong>{" "}
            Enter your vial size and dose to get a{" "}
            <strong className="text-[#0f2027] font-bold">recommended</strong>{" "}
            mixing volume, the resulting concentration (mg/mL), and exact
            insulin syringe units. Works for retatrutide, tirzepatide,
            semaglutide, BPC-157, and any injectable peptide.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="#"
              className="inline-flex items-center justify-center bg-[#0d5b60] text-white text-[14px] font-semibold px-4 py-2.5 rounded-full no-underline hover:bg-[#0a4a4e] transition-colors"
            >
              Jump to calculator
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center bg-white text-[#0f2027] text-[14px] font-semibold px-4 py-2.5 rounded-full border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors"
            >
              Reconstitution calculator
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center bg-white text-[#0f2027] text-[14px] font-semibold px-4 py-2.5 rounded-full border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors"
            >
              Units converter
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Calculator Form Section ===== */}
      <section className="bg-white py-10 md:py-12 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="border border-[#e2e8e6] rounded-lg overflow-hidden bg-white">
            <div className="border-b border-[#e2e8e6] p-4 md:p-5">
              <div className="inline-flex items-center gap-1 bg-[#f5f7f6] rounded-md p-1">
                <button
                  type="button"
                  onClick={() => setMixStatus("not-mixed")}
                  className={`px-4 py-2 text-[13px] font-semibold rounded transition-colors ${mixStatus === "not-mixed" ? "bg-white text-[#0f2027] shadow-sm" : "bg-transparent text-[#8a9a95] hover:text-[#0f2027]"}`}
                >
                  I haven't mixed yet
                </button>
                <button
                  type="button"
                  onClick={() => setMixStatus("already-added")}
                  className={`px-4 py-2 text-[13px] font-semibold rounded transition-colors ${mixStatus === "already-added" ? "bg-white text-[#0f2027] shadow-sm" : "bg-transparent text-[#8a9a95] hover:text-[#0f2027]"}`}
                >
                  I already added water
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
              <div className="p-5 md:p-7 border-b md:border-b-0 md:border-r border-[#e2e8e6]">
                <label className="block text-[14px] font-semibold text-[#0f2027] mb-5">
                  What syringe are you using?
                </label>
                <div className="space-y-3">
                  {SYRINGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSyringeSize(opt.value)}
                      className={`w-full flex items-center justify-between gap-4 px-4 py-3.5 rounded-md border transition-all ${syringeSize === opt.value ? "border-[#0d5b60] bg-[#f5faf9]" : "border-[#d5dedb] bg-white hover:border-[#a8bfba]"}`}
                    >
                      <div className="flex flex-col items-start text-left shrink-0">
                        <span className="text-[14px] font-bold text-[#0f2027] leading-tight">
                          {opt.label}
                        </span>
                        <span className="text-[11px] text-[#8a9a95] font-medium mt-0.5">
                          {opt.sub}
                        </span>
                      </div>
                      <img
                        src={opt.img}
                        alt={`${opt.label} syringe`}
                        className="h-10 w-auto object-contain max-w-[220px]"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-7">
                {/* Vial Mg Input */}
                <div className="mb-6">
                  <label className="block text-[14px] font-semibold text-[#0f2027] mb-3">
                    How many milligrams are in your peptide vial?
                  </label>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {[5, 10, 15].map((mg) => (
                      <button
                        key={mg}
                        type="button"
                        onClick={() => {
                          setVialMg(mg);
                          setIsCustomVial(false);
                          setCustomVial("");
                        }}
                        className={`px-4 py-2.5 text-[13px] font-semibold rounded border transition-colors ${vialMg === mg && !isCustomVial ? "bg-[#0d5b60] text-white border-[#0d5b60]" : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"}`}
                      >
                        {mg} mg
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setIsCustomVial(true)}
                      className={`px-4 py-2.5 text-[13px] font-semibold rounded border transition-colors ${isCustomVial ? "bg-[#0d5b60] text-white border-[#0d5b60]" : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"}`}
                    >
                      Other
                    </button>
                  </div>

                  {isCustomVial && (
                    <div className="relative w-full max-w-[240px]">
                      <input
                        type="number"
                        value={customVial}
                        onChange={(e) => setCustomVial(e.target.value)}
                        placeholder="Enter mg"
                        className="w-full px-3.5 py-2.5 border border-[#d5dedb] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d5b60]"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                        mg
                      </span>
                    </div>
                  )}
                </div>

                {/* BAC Water Input */}
                <div className="mb-6">
                  <label className="block text-[14px] font-semibold text-[#0f2027] mb-3">
                    Adjust BAC water amount (optional)
                  </label>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {[1, 2, 3, 5].map((ml) => (
                      <button
                        key={ml}
                        type="button"
                        onClick={() => {
                          setBacWaterMl(ml);
                          setIsCustomBac(false);
                          setCustomBac("");
                        }}
                        className={`px-4 py-2.5 text-[13px] font-semibold rounded border transition-colors ${bacWaterMl === ml && !isCustomBac ? "bg-[#0d5b60] text-white border-[#0d5b60]" : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"}`}
                      >
                        {ml} mL
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setIsCustomBac(true)}
                      className={`px-4 py-2.5 text-[13px] font-semibold rounded border transition-colors ${isCustomBac ? "bg-[#0d5b60] text-white border-[#0d5b60]" : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"}`}
                    >
                      Other
                    </button>
                  </div>
                  {isCustomBac && (
                    <div className="relative w-full max-w-[240px] mb-3">
                      <input
                        type="number"
                        value={customBac}
                        onChange={(e) => setCustomBac(e.target.value)}
                        placeholder="Enter mL"
                        className="w-full px-3.5 py-2.5 border border-[#d5dedb] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d5b60]"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                        mL
                      </span>
                    </div>
                  )}

                  <p className="text-[13px] text-[#6a7a75] leading-relaxed mb-2">
                    Recommended:{" "}
                    <button
                      onClick={() => {
                        setBacWaterMl(3);
                        setIsCustomBac(false);
                      }}
                      className="text-[#0d5b60] font-semibold underline hover:text-[#0a4a4e]"
                    >
                      3 mL
                    </button>
                  </p>
                  <p className="text-[13px] text-[#6a7a75] leading-relaxed">
                    The goal is a draw of 10–20 units — precise enough to
                    measure, comfortable to inject.
                  </p>
                </div>

                {/* Dose Mcg Input */}
                <div>
                  <label className="block text-[14px] font-semibold text-[#0f2027] mb-3">
                    How much peptide do you want per dose?
                  </label>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {[50, 100, 250, 500].map((mcg) => (
                      <button
                        key={mcg}
                        type="button"
                        onClick={() => {
                          setDoseMcg(mcg);
                          setIsCustomDose(false);
                          setCustomDose("");
                        }}
                        className={`px-4 py-2.5 text-[13px] font-semibold rounded border transition-colors ${doseMcg === mcg && !isCustomDose ? "bg-[#0d5b60] text-white border-[#0d5b60]" : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"}`}
                      >
                        {mcg} mcg
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setIsCustomDose(true)}
                      className={`px-4 py-2.5 text-[13px] font-semibold rounded border transition-colors ${isCustomDose ? "bg-[#0d5b60] text-white border-[#0d5b60]" : "bg-white text-[#0f2027] border-[#d5dedb] hover:border-[#0d7d85]"}`}
                    >
                      Other
                    </button>
                  </div>
                  {isCustomDose && (
                    <div className="relative w-full max-w-[240px]">
                      <input
                        type="number"
                        value={customDose}
                        onChange={(e) => setCustomDose(e.target.value)}
                        placeholder="Enter mcg"
                        className="w-full px-3.5 py-2.5 border border-[#d5dedb] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d5b60]"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                        mcg
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-[#e2e8e6] p-5 md:p-7">
              {isMissingData ? (
                <div className="py-10 text-center">
                  <p className="text-[15px] text-[#6a7a75]">
                    Select your syringe, vial size, and dose above to see your
                    result.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[14px] text-[#0f2027] mb-1">
                    Add{" "}
                    <strong className="font-bold">{activeBacWaterMl} mL</strong>{" "}
                    of BAC water to your vial, then pull the syringe to:
                  </p>

                 
                  {!isUnitsOutOfRange && (
                    <p className="text-[13px] text-[#6a7a75] mb-4">
                      This puts your dose at ~{Math.round(units)} units on a{" "}
                      {syringeSize} mL syringe.
                    </p>
                  )}

                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-[#0d5b60] font-extrabold text-[42px] leading-none tracking-tight">
                      {Number.isInteger(units) ? units : units.toFixed(1)}
                    </span>
                    <span className="text-[#0f2027] text-[15px] font-medium">
                      units
                    </span>
                  </div>

                  <div className="mb-5">
                    <div className="relative w-full h-[38px] bg-white border border-[#e2e8e6] rounded-sm overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#0d7d85]"
                        style={{
                          width: `${Math.min(units, 100)}%`,
                          minWidth: units > 0 ? "30px" : "0px",
                        }}
                      />
                    </div>
                    <div className="relative w-full h-[22px] border-b border-[#e2e8e6]">
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-full">
                        {Array.from({ length: 101 }).map((_, i) => {
                          const isMajor = i % 10 === 0;
                          const isMid = i % 5 === 0 && !isMajor;
                          return (
                            <div
                              key={i}
                              className="w-px bg-[#0f2027]"
                              style={{
                                height: isMajor
                                  ? "14px"
                                  : isMid
                                    ? "10px"
                                    : "6px",
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#0f2027] font-medium mt-1">
                      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((n) => (
                        <span key={n}>{n}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#8a9a95"
                    >
                      <path d="M15 6l-6 6 6 6V6z" />
                    </svg>
                    <div className="flex-1 relative h-[10px] bg-[#d5dedb] rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#8a9a95] rounded-full"
                        style={{ width: `${Math.min(units, 100)}%` }}
                      />
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#8a9a95"
                    >
                      <path d="M9 6l6 6-6 6V6z" />
                    </svg>
                  </div>

                  {isUnitsOutOfRange && (
                    <div className="bg-[#fdf3e3] border border-[#f0d9b5] rounded-md px-4 py-3 mb-6">
                      <p className="text-[13px] text-[#b07d2e] leading-relaxed">
                        {units < 10
                          ? "This draw is very small and hard to measure accurately. Consider using less BAC water."
                          : "This draw is very large and might not fit in your syringe. Consider using more BAC water."}
                      </p>
                      <p className="text-[13px] text-[#b07d2e] leading-relaxed mt-1">
                        BAC water for ~15 units: {roundedRecommended} mL
                      </p>
                    </div>
                  )}

                  <div className="bg-[#f5f7f6] rounded-md grid grid-cols-3 overflow-hidden">
                    <div className="p-5 text-center border-r border-[#e2e8e6]">
                      <p className="text-[11px] text-[#6a7a75] tracking-wider mb-2">
                        Concentration
                      </p>
                      <p className="text-[16px] font-bold text-[#0f2027]">
                        {concentration.toFixed(2)} mg/mL
                      </p>
                    </div>
                    <div className="p-5 text-center border-r border-[#e2e8e6]">
                      <p className="text-[11px] text-[#6a7a75] tracking-wider mb-2">
                        Volume
                      </p>
                      <p className="text-[16px] font-bold text-[#0f2027]">
                        {volumeMl.toFixed(3)} mL
                      </p>
                    </div>
                    <div className="p-5 text-center">
                      <p className="text-[11px] text-[#6a7a75] tracking-wider mb-2">
                        Doses/Vial
                      </p>
                      <p className="text-[16px] font-bold text-[#0f2027]">
                        {dosesPerVial}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

                       {/* ===== Keep this mix — track every dose free ===== */}
            {/* Sirf tab hide hoga jab Other pe click ho aur input khali ho. Value dalte hi wapas show hoga. */}
            {(!isCustomVial || customVial !== "") && 
             (!isCustomBac || customBac !== "") && 
             (!isCustomDose || customDose !== "") && (
              <div className="border-t border-[#e2e8e6]">
                <div className="p-5 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-5 p-5 md:p-7 rounded-xl shadow  border border-[#cfd0d0]">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#0f2027] font-extrabold text-[20px] mb-2">
                      Keep this mix — track every dose free
                    </h3>
                    <p className="text-[#4a5a55] text-[14px] leading-relaxed mb-4">
                      Save this BAC water mix to your free tracker. Calculators stay anonymous — sign in only to save.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-white text-[#0d5b60] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#d5e5e2]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        Dose reminders
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white text-[#0d5b60] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#d5e5e2]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M2 12h20" />
                        </svg>
                        Injection logging
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white text-[#0d5b60] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#d5e5e2]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Vial countdown
                      </span>
                    </div>
                  </div>
                  <Link to="/login" className="inline-flex items-center gap-2 bg-[#0d5b60] text-white text-[14px] font-bold px-6 py-3.5 rounded-full no-underline hover:bg-[#0a4a4e] transition-colors shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    Save to my tracker
                  </Link>
                </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 bg-[#f5f7f6] border border-[#e2e8e6] rounded-md px-5 py-4">
            <Link
              to="#"
              className="text-[14px] font-semibold text-[#0f2027] no-underline hover:text-[#0d5b60] transition-colors"
            >
              Already added BAC water? Calculate concentration & syringe units.
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Peptide Concentration Reference Table ===== */}
      <section className="bg-[#f7f9f8] py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Peptide concentration reference table
          </h2>
          <p className="text-[#6a7a75] text-[14px] leading-relaxed mb-8">
            Resulting concentration (mg/mL) for common vial sizes and BAC water
            volumes.
          </p>

          <div className="bg-white border border-[#e2e8e6] rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 bg-white border-b border-[#e2e8e6]">
              <div className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-[#6a7a75] tracking-wider uppercase">
                Vial Size
              </div>
              <div className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-[#6a7a75] tracking-wider uppercase">
                + 1 mL BAC Water
              </div>
              <div className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-[#6a7a75] tracking-wider uppercase">
                + 2 mL BAC Water
              </div>
              <div className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-[#6a7a75] tracking-wider uppercase">
                + 2.5 mL BAC Water
              </div>
              <div className="px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-bold text-[#6a7a75] tracking-wider uppercase">
                + 5 mL BAC Water
              </div>
            </div>
            {REFERENCE_ROWS.map((row, idx, arr) => (
              <div
                key={row.mg}
                className={`grid grid-cols-5 ${idx !== arr.length - 1 ? "border-b border-[#f0f4f3]" : ""}`}
              >
                <div className="px-4 md:px-6 py-5 text-[14px] font-semibold text-[#0f2027]">
                  {row.mg}
                </div>
                {row.values.map((val, i) => (
                  <div
                    key={i}
                    className="px-4 md:px-6 py-5 text-[14px] font-semibold text-[#0d5b60]"
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How Peptide Reconstitution Works ===== */}
      <section className="bg-white py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-5">
            How peptide reconstitution with BAC water works
          </h2>
          <p className="text-[#3a4a52] text-[15px] leading-relaxed mb-7">
            Most injectable peptides are supplied as{" "}
            <strong className="font-bold text-[#0f2027]">
              lyophilized powder
            </strong>{" "}
            — freeze-dried peptide in a sealed vial. Before use, you
            reconstitute the powder by injecting bacteriostatic water (BAC
            water) through the rubber stopper. The BAC water dissolves the
            powder into a clear solution ready for injection.
          </p>

          <div className="bg-[#e8f1ef] rounded-xl px-6 md:px-8 py-6 mb-7">
            <p className="text-[#0d5b60] text-[12px] font-bold tracking-[0.15em] uppercase mb-5">
              The Reconstitution — Dosing Flow
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#0d5b60] text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <p className="text-[#0f2027] text-[15px] leading-relaxed pt-0.5">
                  <strong className="font-bold">
                    Calculate concentration:
                  </strong>{" "}
                  Vial mg ÷ BAC water mL = mg/mL
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#0d5b60] text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <p className="text-[#0f2027] text-[15px] leading-relaxed pt-0.5">
                  <strong className="font-bold">
                    Calculate volume per dose:
                  </strong>{" "}
                  Dose mg ÷ concentration mg/mL = mL
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#0d5b60] text-white text-[13px] font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <p className="text-[#0f2027] text-[15px] leading-relaxed pt-0.5">
                  <strong className="font-bold">
                    Convert to syringe units:
                  </strong>{" "}
                  Volume mL × 100 = units (U-100 syringe)
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#3a4a52] text-[15px] leading-relaxed mb-5">
            <strong className="font-bold text-[#0f2027]">Why BAC water?</strong>{" "}
            Bacteriostatic water contains 0.9% benzyl alcohol, a preservative
            that inhibits bacterial growth. This extends the shelf life of your
            reconstituted peptide to approximately 28–30 days when refrigerated,
            making it suitable for multi-dose vials. Sterile water (without
            preservative) should only be used for single injections.
          </p>
          <p className="text-[#3a4a52] text-[15px] leading-relaxed">
            <strong className="font-bold text-[#0f2027]">Storage tip:</strong>{" "}
            Once reconstituted, store peptide vials refrigerated at 2–8°C
            (35–46°F), protected from light. Do not freeze. Discard if the
            solution appears cloudy, discolored, or contains particulates.
          </p>
        </div>
      </section>

      {/* ===== How Long Does BAC Water Last ===== */}
      <section className="bg-[#f7f9f8] py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-5">
            How long does BAC water last? Storage & refrigeration
          </h2>
          <p className="text-[#3a4a52] text-[15px] leading-relaxed mb-6">
            Two related questions come up constantly:{" "}
            <strong className="font-bold text-[#0f2027]">
              how long does BAC water last
            </strong>{" "}
            and{" "}
            <strong className="font-bold text-[#0f2027]">
              does BAC water need to be refrigerated?
            </strong>{" "}
            The answer depends on what you mean — the BAC water vial itself vs a
            peptide vial after reconstitution.
          </p>
          <ul className="list-disc pl-6 space-y-3.5 mb-7 text-[15px] text-[#3a4a52] leading-relaxed">
            <li>
              <strong className="font-bold text-[#0f2027]">
                BAC water (unopened):
              </strong>{" "}
              Follow the manufacturer's label (expiration date, storage
              conditions).
            </li>
            <li>
              <strong className="font-bold text-[#0f2027]">
                BAC water (after first puncture/opening):
              </strong>{" "}
              Many multi-dose bacteriostatic water products are commonly treated
              as usable for ~28 days after first puncture, but you should follow
              the vial label and your provider's protocol.
            </li>
            <li>
              <strong className="font-bold text-[#0f2027]">
                Does BAC water need to be refrigerated?
              </strong>{" "}
              Often it does not, but storage depends on the product label. In
              contrast, most reconstituted peptides should be refrigerated
              (typically 2–8°C / 35–46°F) and protected from light.
            </li>
            <li>
              <strong className="font-bold text-[#0f2027]">
                How to store BAC water:
              </strong>{" "}
              Keep it clean, avoid touching needles to non-sterile surfaces, and
              discard if contamination is suspected (cloudiness, particulates,
              color change).
            </li>
          </ul>
          <p className="text-[#3a4a52] text-[15px] leading-relaxed">
            Always follow the specific storage and beyond-use guidance provided
            by your prescribing clinician or compounding pharmacy.
          </p>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="bg-white py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3.5">
            {FAQS.map((item, index) => (
              <details
                key={index}
                className="group bg-white border border-[#e2e8e6] rounded-lg overflow-hidden hover:border-[#c5d5d1] transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-[#0d5b60] font-semibold text-[15px] md:text-[16px] leading-snug group-hover:text-[#0a4a4e] transition-colors">
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a5a55"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 md:px-6 pb-5 pt-0">
                  <p className="text-[#4a5a55] text-[14px] md:text-[15px] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Popular Dosing Guides ===== */}
      <section className="bg-[#f7f9f8] py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-3">
            Popular dosing guides
          </h2>
          <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-8 max-w-[600px]">
            Once you have your syringe units, dial in the protocol. These
            evidence-based guides cover dose ranges, titration, and timing for
            the most-searched peptides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOSING_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                to={guide.path}
                className="group bg-white border border-[#e2e8e6] rounded-lg p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  <BookIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug group-hover:text-[#0d5b60] transition-colors">
                      {guide.title}
                    </h3>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0f2027"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                  <p className="text-[#4a5a55] text-[13.5px] leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Related Tools & Calculators ===== */}
      <section className="bg-white py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Related tools & calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RELATED_TOOLS.map((tool) => (
              <Link
                key={tool.title}
                to={tool.path}
                className="group bg-white border border-[#e2e8e6] rounded-lg p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  <CalculatorIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug group-hover:text-[#0d5b60] transition-colors">
                      {tool.title}
                    </h3>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0f2027"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                  <p className="text-[#4a5a55] text-[13.5px] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Dosing & Reconstitution Guides ===== */}
      <section className="bg-[#f7f9f8] py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Dosing & reconstitution guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECONSTITUTION_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                to={guide.path}
                className="group bg-white border border-[#e2e8e6] rounded-lg p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
              >
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  {guide.icon === "vial" ? <VialIcon /> : <BookIcon />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="text-[#0f2027] font-bold text-[15px] leading-snug group-hover:text-[#0d5b60] transition-colors">
                      {guide.title}
                    </h3>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0f2027"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                  <p className="text-[#4a5a55] text-[13.5px] leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section — Find a Clinic ===== */}
      <section className="bg-white py-10 md:py-12 font-sans">
        <div className=" px-6 md:px-10">
          <div className="bg-[#0d5b60] rounded-2xl px-8 md:px-12 py-10 md:py-14">
            <p className="text-white/70 text-[12px] font-bold tracking-[0.15em] uppercase mb-4">
              Need a Prescriber?
            </p>

            <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5 max-w-[600px]">
              Find a peptide-prescribing clinic
            </h2>

            <p className="text-white/85 text-[15px] leading-relaxed mb-8 max-w-[560px]">
              MyPeptideMatch connects you with licensed clinics that prescribe
              GLP-1 peptides and peptide therapy protocols. Providers supply all
              necessary reconstitution supplies and instructions.
            </p>

            <Link
              to="/clinics"
              className="inline-flex items-center gap-2 bg-white text-[#0d5b60] font-bold text-[15px] px-6 py-3 rounded-full no-underline hover:bg-[#e8f1ef] transition-colors"
            >
              Find a Clinic
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Medical Disclaimer ===== */}
      <section className="bg-[#f7f9f8] py-8 md:py-10 font-sans border-t border-[#e2e8e6]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <div className="flex items-start gap-3">
            {/* Shield/check icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0f2027"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 mt-0.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>

            <p className="text-[#4a5a55] text-[10px] leading-relaxed">
              <strong className="font-bold text-[#0f2027]">
                Medical disclaimer:
              </strong>{" "}
              This tool is provided for informational and educational purposes
              only. It is not a substitute for professional medical advice,
              diagnosis, or treatment. Peptide reconstitution and dosing should
              be supervised by a licensed healthcare provider. Always follow the
              specific reconstitution instructions provided by your prescribing
              physician or compounding pharmacy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
