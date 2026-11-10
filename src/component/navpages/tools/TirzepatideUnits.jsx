import { useState } from "react";
import { Link } from "react-router-dom";

// Images import
import syringeSmall from "../../../assets/tools/bacwater/syringe-small.svg";
import syringeMedium from "../../../assets/tools/bacwater/syringe-medium.svg";
import syringeLarge from "../../../assets/tools/bacwater/syringe-large.svg";

// ==========================================
// ===== Static Data (Top Level) =====
// ==========================================

const SYRINGE_IMAGES = {
  "0.3": syringeSmall,
  "0.5": syringeMedium,
  "1.0": syringeLarge,
};

const TABLE_DATA = [
  { dose: 2.5, units: 50, vol: 0.500 },
  { dose: 5, units: 100, vol: 1.000 },
  { dose: 7.5, units: 150, vol: 1.500 },
  { dose: 10, units: 200, vol: 2.000 },
  { dose: 12.5, units: 250, vol: 2.500 },
  { dose: 15, units: 300, vol: 3.000 },
];

const FAQS = [
  {
    q: "How many units is 2.5 mg of tirzepatide?",
    a: "It depends on your concentration. At 5 mg/mL, 2.5 mg is 50 units. At 10 mg/mL, it's 25 units. At 15 mg/mL, it's 16.7 units.",
  },
  {
    q: "How many units is 5 mg of tirzepatide?",
    a: "At 5 mg/mL, 5 mg is 100 units. At 10 mg/mL, it's 50 units. At 15 mg/mL, it's 33.3 units.",
  },
  {
    q: "How many units is 7.5 mg of tirzepatide?",
    a: "At 5 mg/mL, 7.5 mg is 150 units. At 10 mg/mL, it's 75 units. At 15 mg/mL, it's 50 units.",
  },
  {
    q: "How many units is 10 mg of tirzepatide?",
    a: "At 5 mg/mL, 10 mg is 200 units. At 10 mg/mL, it's 100 units. At 15 mg/mL, it's 66.7 units.",
  },
  {
    q: "How many units is 15 mg of tirzepatide?",
    a: "At 5 mg/mL, 15 mg is 300 units. At 10 mg/mL, it's 150 units. At 15 mg/mL, it's 100 units.",
  },
  {
    q: "What concentration is compounded tirzepatide typically reconstituted at?",
    a: "Compounded tirzepatide is commonly reconstituted at 5 mg/mL, 10 mg/mL, or 15 mg/mL depending on the vial size and the amount of BAC water added.",
  },
  {
    q: "What syringe size should I use for tirzepatide?",
    a: "For doses under 50 units, a 0.5 mL (50-unit) or 0.3 mL (30-unit) syringe is ideal. For doses above 50 units, use a 1.0 mL (100-unit) syringe.",
  },
  {
    q: "How does tirzepatide differ from semaglutide in terms of dosing units?",
    a: "The conversion math is the same. However, tirzepatide is typically prescribed at higher mg doses (up to 15 mg) compared to semaglutide (up to 2.4 mg), which means it is often mixed at higher concentrations to keep the injection volume small.",
  },
];

const RELATED_TOOLS = [
  {
    title: "Tirzepatide Dosing Guide",
    desc: "Clinical overview of tirzepatide doses, titration schedules, mechanisms, and protocols.",
    path: "/guides/tirzepatide",
  },
  {
    title: "Peptide Titration Calculator",
    desc: "Generate a week-by-week tirzepatide dose escalation schedule with exact dates.",
    path: "/tools/titration-calculator",
  },
  {
    title: "Peptide Reconstitution Calculator",
    desc: "Calculate syringe units from vial size and BAC water volume with cost-per-dose.",
    path: "/tools/reconstitution-calculator",
  },
  {
    title: "Semaglutide Units Converter",
    desc: "Convert semaglutide doses to syringe units with a complete dosing chart.",
    path: "/tools/semaglutide-units",
  },
];

const DOSING_GUIDES = [
  {
    title: "Tirzepatide Overview",
    desc: "Full tirzepatide profile — dosing, titration, side effects, mechanism, and FDA status.",
    path: "/guides/tirzepatide-overview",
    icon: "flask",
  },
  {
    title: "How to Reconstitute Peptides",
    desc: "Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.",
    path: "/guides/reconstitution",
    icon: "vial",
  },
  {
    title: "Peptide Dosage Guide",
    desc: "Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.",
    path: "/guides/dosage",
    icon: "book",
  },
];

// ==========================================
// ===== Icons Component =====
// ==========================================
const FlaskIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6M10 3v5.5L5.5 17a2.5 2.5 0 0 0 2 3h9a2.5 2.5 0 0 0 2-3L14 8.5V3" />
    <path d="M7 15h10" />
  </svg>
);

const VialIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h8v3l-1 1v2H9V7L8 6V3z" />
    <path d="M9 9v9a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9" />
    <line x1="9" y1="13" x2="15" y2="13" />
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CalculatorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

// ==========================================
// ===== Main Component =====
// ==========================================

export default function TirzepatideUnits() {
  // ===== Tool State =====
  const [preset, setPreset] = useState("Tirzepatide");
  const [direction, setDirection] = useState("dose-to-units");
  const [syringeSize, setSyringeSize] = useState("1.0");
  
  // Concentration State
  const [concentration, setConcentration] = useState(15);
  const [isCustomConcentration, setIsCustomConcentration] = useState(false);
  const [customConcentrationVal, setCustomConcentrationVal] = useState("");

  // Dose State
  const [dose, setDose] = useState(2.5);
  const [isCustomDose, setIsCustomDose] = useState(false);
  const [customDoseVal, setCustomDoseVal] = useState("");

  // ===== Calculations =====
  const activeConcentration = isCustomConcentration ? (parseFloat(customConcentrationVal) || 0) : concentration;
  const activeDose = isCustomDose ? (parseFloat(customDoseVal) || 0) : dose;
  
  const volumeMl = activeConcentration ? activeDose / activeConcentration : 0;
  const units = volumeMl * 100;
  
  // Error Check Logic
  const maxVolume = parseFloat(syringeSize);
  const isOverCapacity = volumeMl > maxVolume;

  // ===== Empty State Check =====
  const isMissingData = 
    (isCustomConcentration && customConcentrationVal === "") || 
    (isCustomDose && customDoseVal === "");

  return (  
    <div className="bg-white min-h-screen font-sans">
      
      {/* ===== 1. Hero Section ===== */}
      <section className="bg-[#E7F2F2] pt-6 md:pt-10 pb-12 border-b border-[#cdceceba]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-[#6a7a75] mb-8">
            <Link to="/" className="text-[#6a7a75] no-underline hover:text-[#0d7d85]">Home</Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <Link to="/tools" className="text-[#6a7a75] no-underline hover:text-[#0d7d85]">Tools</Link>
            <span className="text-[#9aa8a3]">&gt;</span>
            <span className="text-[#0f2027] font-medium">Tirzepatide Units Converter</span>
          </nav>

          {/* Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 bg-white text-[#0d5b60] text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              Tirzepatide Dosing Tool
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[#0f2027] font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-tight tracking-tight mb-5">
            Tirzepatide Units Converter
          </h1>

          {/* Description */}
          <p className="text-[#4a5a55] text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-[750px]">
            Convert tirzepatide doses from mg to insulin syringe units in seconds.
            Select your vial concentration and target dose to get the exact units to
            draw on your syringe.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link to="#converter" className="inline-flex items-center justify-center bg-[#0d5b60] text-white text-[15px] font-semibold px-6 py-3 rounded-full no-underline hover:bg-[#0a4a4e] transition-colors">
              Jump to converter
            </Link>
            <Link to="/guides/tirzepatide" className="inline-flex items-center justify-center bg-white text-[#0f2027] text-[15px] font-semibold px-6 py-3 rounded-full border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors">
              Dosing guide
            </Link>
            <Link to="/tools/titration-calculator" className="inline-flex items-center justify-center bg-white text-[#0f2027] text-[15px] font-semibold px-6 py-3 rounded-full border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors">
              Titration schedule
            </Link>
            <Link to="/tools/reconstitution-calculator" className="inline-flex items-center justify-center bg-white text-[#0f2027] text-[15px] font-semibold px-6 py-3 rounded-full border border-[#d5dedb] no-underline hover:border-[#0d7d85] hover:text-[#0d7d85] transition-colors">
              Reconstitution calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 2. Main Tool Section ===== */}
      <section id="converter" className="bg-white py-8 md:py-10">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          
          <div className="border border-[#e2e8e6] rounded-lg overflow-hidden bg-white">
            
            {/* ===== Concentration & Dose ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e2e8e6]">
              
              {/* Concentration */}
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[14px] font-semibold text-[#0f2027]">
                    Concentration (mg/mL)
                  </label>
                  <button className="text-[12px] text-[#6a7a75] hover:text-[#0d5b60] transition-colors flex items-center gap-1">
                    Calculate from BAC water
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[5, 10, 15].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        setConcentration(val);
                        setIsCustomConcentration(false);
                        setCustomConcentrationVal("");
                      }}
                      className={`px-4 py-2 text-[13px] font-bold rounded-md border transition-colors ${
                        concentration === val && !isCustomConcentration
                          ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                          : "bg-white text-[#0f2027] border-[#d5d5d5] hover:border-[#0d5b60]"
                      }`}
                    >
                      {val} mg/mL
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => setIsCustomConcentration(true)}
                    className={`px-4 py-2 text-[13px] font-bold rounded-md border transition-colors ${
                      isCustomConcentration
                        ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                        : "bg-white text-[#0f2027] border-[#d5d5d5] hover:border-[#0d5b60]"
                    }`}
                  >
                    Other
                  </button>
                </div>

                {isCustomConcentration && (
                  <div className="relative w-full max-w-[240px] mt-4">
                    <input
                      type="number"
                      value={customConcentrationVal}
                      onChange={(e) => setCustomConcentrationVal(e.target.value)}
                      placeholder="Enter mg/mL"
                      className="w-full px-3.5 py-2.5 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d5b60] transition-colors"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                      mg/mL
                    </span>
                  </div>
                )}
              </div>

              {/* Dose */}
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-[14px] font-semibold text-[#0f2027]">
                    Desired dose
                  </label>
                  <div className="flex bg-[#f5f7f6] rounded border border-[#e2e8e6] p-0.5">
                    <button className="px-3 py-1 text-[11px] font-bold text-white bg-[#0d5b60] rounded-sm">mg</button>
                    <button className="px-3 py-1 text-[11px] font-bold text-[#6a7a75] hover:text-[#0f2027]">mcg</button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[2.5, 5, 7.5, 10, 12.5, 15].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        setDose(val);
                        setIsCustomDose(false);
                        setCustomDoseVal("");
                      }}
                      className={`px-4 py-2 text-[13px] font-bold rounded-md border transition-colors ${
                        dose === val && !isCustomDose
                          ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                          : "bg-white text-[#0f2027] border-[#d5d5d5] hover:border-[#0d5b60]"
                      }`}
                    >
                      {val} mg
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => setIsCustomDose(true)}
                    className={`px-4 py-2 text-[13px] font-bold rounded-md border transition-colors ${
                      isCustomDose
                        ? "bg-[#0d5b60] text-white border-[#0d5b60]"
                        : "bg-white text-[#0f2027] border-[#d5d5d5] hover:border-[#0d5b60]"
                    }`}
                  >
                    Other
                  </button>
                </div>

                {isCustomDose && (
                  <div className="relative w-full max-w-[240px] mt-4">
                    <input
                      type="number"
                      value={customDoseVal}
                      onChange={(e) => setCustomDoseVal(e.target.value)}
                      placeholder="Enter mg"
                      className="w-full px-3.5 py-2.5 border border-[#d5d5d5] rounded-md text-[14px] text-[#0f2027] outline-none focus:border-[#0d5b60] transition-colors"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#8a9a95]">
                      mg
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* ===== Syringe Size ===== */}
            <div className="p-5 md:p-6 border-t border-[#e2e8e6]">
              <label className="block text-[14px] font-semibold text-[#0f2027] mb-4">
                Insulin syringe size
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { val: "0.3", label: "0.3 mL", sub: "30 units" },
                  { val: "0.5", label: "0.5 mL", sub: "50 units" },
                  { val: "1.0", label: "1.0 mL", sub: "100 units" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => setSyringeSize(opt.val)}
                    className={`flex flex-col p-4 rounded-lg border transition-all ${
                      syringeSize === opt.val
                        ? "border-[#0d5b60] bg-[#f5faf9]"
                        : "border-[#e2e8e6] bg-white hover:border-[#a8bfba]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-4 text-left">
                      <span className="text-[13px] font-bold text-[#0f2027]">{opt.label}</span>
                      <span className="text-[11px] text-[#6a7a75]">· {opt.sub}</span>
                    </div>
                    <div className="w-full flex">
                      <img 
                        src={SYRINGE_IMAGES[opt.val]} 
                        alt={`${opt.label} syringe`} 
                        className="w-full h-auto object-contain" 
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ===== Result Section ===== */}
            <div className="p-5 md:p-6 border-t border-[#e2e8e6]">
              
              {/* Condition 1: Missing Data Message */}
              {isMissingData ? (
                <div className="py-12 text-center">
                  <p className="text-[15px] text-[#6a7a75]">
                    Select your concentration and dose above to calculate syringe units.
                  </p>
                </div>
              ) : (
                <>
                  {/* Condition 2: Error Box */}
                  {isOverCapacity && (
                    <div className="bg-[#fef2f2] border border-[#fecaca] rounded-lg p-4 flex items-start gap-3 mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      <div>
                        <p className="text-[#b91c1c] font-bold text-[15px] mb-1">Dose exceeds syringe capacity</p>
                        <p className="text-[#dc2626] text-[14px]">
                          The calculated volume of <strong>{volumeMl.toFixed(3)} mL</strong> exceeds the {syringeSize} mL syringe. Use a larger syringe, add more BAC water, or lower your dose.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Condition 3: Normal Result */}
                  {!isOverCapacity && (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-[13px] text-[#6a7a75]">Draw to</label>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#d5d5d5] rounded hover:bg-[#f8faf9] transition-colors text-[12px] text-[#0f2027] font-semibold">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                          Share
                        </button>
                      </div>
                      
                      {/* Bara Number */}
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-[#0d5b60] font-extrabold text-[42px] leading-none tracking-tight">
                          {Number.isInteger(units) ? units : units.toFixed(1)}
                        </span>
                        <span className="text-[#0f2027] text-[15px] font-medium">units</span>
                      </div>

                      {/* ===== Syringe Scale ===== */}
                      <div className="mb-6">
                        <div className="relative w-full h-[25px] bg-white border border-[#e2e8e6] rounded-sm overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-[#0d7d85]"
                            style={{
                              width: `${Math.min(units, 100)}%`,
                              minWidth: units > 0 ? "30px" : "0px",
                            }}
                          />
                        </div>

                        <div className="relative w-full h-[20px] border-b border-[#e2e8e6]">
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-full">
                            {Array.from({ length: 101 }).map((_, i) => {
                              const isMajor = i % 10 === 0;
                              const isMid = i % 5 === 0 && !isMajor;
                              return (
                                <div
                                  key={i}
                                  className="w-px bg-[#0f2027]"
                                  style={{ height: isMajor ? "14px" : isMid ? "10px" : "6px" }}
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

                      {/* Gray Slider with Arrows */}
                      <div className="flex items-center gap-3 mb-6">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#8a9a95">
                          <path d="M15 6l-6 6 6 6V6z" />
                        </svg>
                        <div className="flex-1 relative h-[10px] bg-[#d5dedb] rounded-full overflow-hidden">
                          <div className="absolute left-0 top-0 h-full bg-[#8a9a95] rounded-full" style={{ width: `${Math.min(units, 100)}%` }} />
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#8a9a95">
                          <path d="M9 6l6 6-6 6V6z" />
                        </svg>
                      </div>

                      {/* Warning / CTA Box */}
                      <div className="bg-[#fefce8] border border-[#fef08a] rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                        <div className="flex items-start gap-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                            <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
                          </svg>
                          <div>
                            <p className="text-[13px] font-bold text-[#854d0e]">Want this prescribed?</p>
                            <p className="text-[12px] text-[#854d0e]/80 mt-0.5">Licensed doctors, compounded tirzepatide from $69/mo.</p>
                          </div>
                        </div>
                        <button className="bg-[#fef08a] text-[#854d0e] font-bold text-[13px] px-4 py-2 rounded-full hover:bg-[#fde047] transition-colors whitespace-nowrap">
                          See if I qualify →
                        </button>
                      </div>
                      
                      {/* Affiliate Text */}
                      <p className="text-[11px] text-[#9aa8a3] leading-relaxed mb-6">
                        Affiliate link · Collective: $99/mo · Sema: $99/mo · Mochi: $79/mo · All doses · Compounded tirzepatide are not FDA-approved.
                      </p>

                      {/* Summary Stats */}
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-[13px] text-[#0f2027]">
                        <span><span className="text-[#6a7a75]">Volume to draw:</span> <strong className="font-semibold">{volumeMl.toFixed(3)} mL</strong></span>
                        <span><span className="text-[#6a7a75]">Concentration:</span> <strong className="font-semibold">{activeConcentration.toFixed(2)} mg/mL</strong></span>
                      </div>

                      {/* Syringe Info Alert */}
                      <div className="bg-[#f5f7f6] rounded-md px-3 py-2.5 flex items-start gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6a7a75" strokeWidth="2" className="shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                        <p className="text-[11.5px] text-[#6a7a75] leading-snug">
                          All insulin syringes are U-100. <strong className="text-[#0f2027]">1 unit = 0.01 mL</strong>. A 100-unit syringe holds 1 mL; a 50-unit syringe holds 0.5 mL; a 30-unit syringe holds 0.3 mL.
                        </p>
                      </div>
                    </>
                  )}

                  {/* ===== Quick Table Section ===== */}
                  {/* Table bhi tabhi show hoga jab missing data nahi hai */}
                  <div className="mt-8">
                    <h3 className="text-[#0f2027] font-bold text-[14px] mb-2 px-1">
                      Common Tirzepatide doses at {activeConcentration ? activeConcentration.toFixed(0) : 0} mg/mL
                    </h3>
                    <div className="border border-[#e2e8e6] rounded-lg overflow-hidden bg-white">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[13px]">
                          <thead>
                            <tr className="border-b border-[#e2e8e6] bg-white">
                              <th className="px-5 py-3 font-semibold text-[#6a7a75]">Dose (mg)</th>
                              <th className="px-5 py-3 font-semibold text-[#6a7a75]">Dose (mcg)</th>
                              <th className="px-5 py-3 font-semibold text-[#6a7a75]">Volume (mL)</th>
                              <th className="px-5 py-3 font-semibold text-[#6a7a75]">Syringe units</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TABLE_DATA.map((row, i) => (
                              <tr key={i} className="border-b border-[#e2e8e6] last:border-b-0 hover:bg-[#f8faf9]">
                                <td className="px-5 py-3 font-semibold text-[#0f2027]">{row.dose.toFixed(1)} mg</td>
                                <td className="px-5 py-3 text-[#4a5a55]">{row.dose * 1000} mcg</td>
                                <td className="px-5 py-3 text-[#4a5a55]">{row.vol.toFixed(3)} mL</td>
                                <td className="px-5 py-3 font-bold text-[#0d5b60]">{row.units} units</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. License Provider CTA Section ===== */}
      <section className="bg-white pb-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="border border-[#e2e8e6] rounded-xl overflow-hidden bg-white">
            
            {/* Top Bar */}
            <div className="bg-[#eef4f3] border-b border-[#e2e8e6] px-6 py-4 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d5b60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-[13px] font-semibold text-[#0f2027]">
                Licensed US doctors · Our telehealth partner
              </span>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8 justify-between">
                
                {/* Left Side */}
                <div className="flex-1">
                  <h2 className="text-[#0f2027] font-bold text-2xl mb-2">
                    Prefer a prescription from a licensed provider?
                  </h2>
                  <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-6">
                    Collective's doctors can prescribe compounded tirzepatide after a quick online health review.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-2">
                    <div className="flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="text-[14px] text-[#3a4a52]">Same price at every dose</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="text-[14px] text-[#3a4a52]">Unlimited doctor messaging</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="text-[14px] text-[#3a4a52]">2-day express shipping</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="text-[14px] text-[#3a4a52]">Refund if not approved</span>
                    </div>
                  </div>
                </div>

                {/* Right Side (Pricing Box) */}
                <div className="w-full lg:w-[240px] shrink-0">
                  <div className="bg-[#f5f7f6] rounded-xl text-center flex flex-col items-center justify-center h-full py-4">
                    <span className="text-[13px] text-[#6a7a75] mb-1">As low as</span>
                    <div className="flex items-baseline justify-center gap-0.5 mb-1">
                      <span className="text-[30px] font-extrabold text-[#0f2027] leading-none tracking-tight">$69</span>
                      <span className="text-[16px] font-bold text-[#0f2027]">/mo</span>
                    </div>
                    <p className="text-[12px] text-[#6a7a75] leading-relaxed mb-5">
                      Same price any dose · + $199/yr membership, 21 days free
                    </p>
                    <button className="flex items-center justify-center gap-2 bg-[#fef08a] text-[#854d0e] font-bold text-[15px] px-6 py-3.5 rounded-full hover:bg-[#fde047] transition-colors shadow-sm">
                      See if I qualify
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Part: Full Width Text */}
              <div className="mt-2 space-y-1.5">
                <p className="text-[13px] text-[#6a7a75]">
                  Not available in Alabama, Arkansas, California, Louisiana, Massachusetts, Mississippi and Washington.
                </p>
                <p className="text-[13px] text-[#6a7a75]">
                  Affiliate link: we may earn a commission at no cost to you. Compounded medications are not FDA-approved, and a provider decides whether treatment is right for you. <Link to="#" className="underline hover:text-[#0f2027]">Affiliate disclosure</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. Tirzepatide Dosage & Units Tables ===== */}
      <section className="bg-[#F6F8F7] py-12 md:py-16 font-sans border-t border-[#e2e8e6]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          
          {/* Table 1: Dosage chart in units */}
          <div className="mb-16">
            <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              Tirzepatide dosage chart in units
            </h2>
            <p className="text-[#4a5a55] text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-[800px]">
              Syringe units for common tirzepatide doses at typical compounded concentrations. All values assume a standard U-100 insulin syringe (1 unit = 0.01 mL).
            </p>

            <div className="overflow-x-auto border border-[#e2e8e6] rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f7f9f8] border-b border-[#e2e8e6]">
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[20%]">Dose</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[26%]">5 mg/mL</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[26%]">10 mg/mL</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[28%]">15 mg/mL</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-[#e2e8e6] last:border-b-0 bg-white">
                      <td className="px-5 py-4 font-semibold text-[#0f2027]">{row.dose} mg</td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{row.dose * 20} units</div>
                        <div className="text-[12px] text-[#6a7a75]">{(row.dose / 5).toFixed(3)} mL</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{row.dose * 10} units</div>
                        <div className="text-[12px] text-[#6a7a75]">{(row.dose / 10).toFixed(3)} mL</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{(row.dose * 6.66).toFixed(1)} units</div>
                        <div className="text-[12px] text-[#6a7a75]">{(row.dose / 15).toFixed(3)} mL</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[12px] text-[#8a9a95] mt-3 leading-relaxed">
              Concentration is set at reconstitution: divide vial size (mg) by BAC water added (mL). E.g., 10 mg vial + 2 mL BAC water = 5 mg/mL. Use the BAC water helper in the tool above.
            </p>
          </div>

          {/* Table 2: Units to mg chart */}
          <div>
            <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-2">
              Tirzepatide units to mg chart
            </h2>
            <p className="text-[#4a5a55] text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-[800px]">
              Already know how many units you drew? Use this reference to find the mg dose at your concentration. All values assume a U-100 syringe (1 unit = 0.01 mL).
            </p>

            <div className="overflow-x-auto border border-[#e2e8e6] rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f7f9f8] border-b border-[#e2e8e6]">
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[20%]">Units drawn</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[26%]">@ 5 mg/mL — mg</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[26%]">@ 10 mg/mL — mg</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-[#6a7a75] tracking-wider uppercase w-[28%]">@ 15 mg/mL — mg</th>
                  </tr>
                </thead>
                <tbody>
                  {[15, 17, 25, 33, 50, 75, 100, 150].map((u, i) => (
                    <tr key={i} className="border-b border-[#e2e8e6] last:border-b-0 bg-white">
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{u} units</div>
                        <div className="text-[12px] text-[#6a7a75]">{(u * 0.01).toFixed(2)} mL</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{((u * 0.01) * 5).toFixed(1)} mg</div>
                        <div className="text-[12px] text-[#6a7a75]">{((u * 0.01) * 5 * 1000).toFixed(0)} mcg</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{((u * 0.01) * 10).toFixed(1)} mg</div>
                        <div className="text-[12px] text-[#6a7a75]">{((u * 0.01) * 10 * 1000).toFixed(0)} mcg</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#0f2027]">{((u * 0.01) * 15).toFixed(1)} mg</div>
                        <div className="text-[12px] text-[#6a7a75]">{((u * 0.01) * 15 * 1000).toFixed(0)} mcg</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[12px] text-[#8a9a95] mt-3 leading-relaxed">
              Formula: units × 100 = mL; mL × concentration = mg dose. Use the "Units → mg" toggle in the converter above for any value.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5. How to convert section ===== */}
      <section className="bg-white pb-16 md:pb-20 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="max-w-[900px] mt-8">
            <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-4">
              How to convert tirzepatide mg to syringe units
            </h2>
            <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-5">
              Compounded tirzepatide is a dual GIP/GLP-1 receptor agonist prescribed for weight management. Like semaglutide, it comes as a powder that must be reconstituted with bacteriostatic water before injection. The concentration you create determines how many units you draw per dose.
            </p>
            <p className="text-[#4a5a55] text-[15px] leading-relaxed mb-6">
              Because tirzepatide doses are higher in mg terms (starting at 2.5 mg weekly and titrating up to 15 mg), it is typically reconstituted at higher concentrations (5–15 mg/mL) to keep the injection volume small.
            </p>

            <div className="bg-[#f7f9f8] border border-[#e2e8e6] rounded-xl p-6 md:p-7 mb-6">
              <p className="text-[#6a7a75] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">
                Example: 5 mg at 10 mg/mL
              </p>
              <div className="space-y-1.5 font-medium text-[15px] text-[#0f2027]">
                <p>5 mg ÷ 10 mg/mL = 0.5 mL</p>
                <p>0.5 mL × 100 = 50 units</p>
              </div>
              <p className="text-[#8a9a95] text-[14px] mt-4">
                Fits in a 0.5 mL (50-unit) insulin syringe
              </p>
            </div>

            <p className="text-[#4a5a55] text-[15px] leading-relaxed">
              The FDA-approved titration schedule for tirzepatide starts at 2.5 mg once weekly for 4 weeks, then increases in 2.5 mg increments every 4 weeks up to the maintenance dose. Use the{" "}
              <Link to="/tools/titration-calculator" className="text-[#0d5b60] font-semibold underline hover:text-[#0a4a4e]">
                titration calculator
              </Link>{" "}
              to generate your full escalation schedule with exact dates.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 6. FAQ Section ===== */}
      <section className="bg-[#F6F8F7] py-12 md:py-16 font-sans border-t border-[#e2e8e6]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3.5 max-w-[900px]">
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

      {/* ===== 7. Related tools & guides ===== */}
      <section className="bg-white py-12 md:py-16 font-sans border-t border-[#e2e8e6]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Related tools & guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RELATED_TOOLS.map((tool) => (
              <Link
                key={tool.title}
                to={tool.path}
                className="group bg-white border border-[#e2e8e6] rounded-lg p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
              >
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  <CalculatorIcon />
                </div>

                {/* Content */}
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
                    {tool.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 8. Dosing & reconstitution guides ===== */}
      <section className="bg-[#F6F8F7] py-12 md:py-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          
          <h2 className="text-[#0f2027] font-extrabold text-2xl md:text-3xl tracking-tight mb-8">
            Dosing & reconstitution guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOSING_GUIDES.map((guide) => (
              <Link
                key={guide.title}
                to={guide.path}
                className="group bg-white border border-[#e2e8e6] rounded-lg p-5 flex items-start gap-4 no-underline hover:border-[#0d5b60] hover:shadow-sm transition-all"
              >
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-md bg-[#e8f1ef] flex items-center justify-center shrink-0">
                  {guide.icon === "flask" && <FlaskIcon />}
                  {guide.icon === "vial" && <VialIcon />}
                  {guide.icon === "book" && <BookIcon />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
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
                  <p className="text-[#4a5a55] text-[12px] ">
                    {guide.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ===== 9. Find a Clinic CTA ===== */}
      <section className="bg-[#F6F8F7] pb-16 font-sans">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="bg-[#0d5b60] rounded-2xl px-8 md:px-12 py-10 md:py-14">
            <p className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              Need a Prescriber?
            </p>
            <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight mb-5 max-w-[600px]">
              Find a tirzepatide-prescribing clinic
            </h2>
            <p className="text-white/85 text-[15px] leading-relaxed mb-8 max-w-[520px]">
              Compare licensed telehealth and in-person clinics that prescribe tirzepatide for weight management. MyPeptideMatch verifies providers and helps you find the right clinic.
            </p>
            <Link
              to="/clinics"
              className="inline-flex items-center gap-2 bg-white text-[#0d5b60] font-bold text-[15px] px-6 py-3 rounded-full no-underline hover:bg-[#e8f1ef] transition-colors"
            >
              Find a Clinic
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 10. Medical Disclaimer ===== */}
      <section className="bg-[#F6F8F7] py-8 md:py-10 font-sans border-t border-[#e2e8e6]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="flex items-start gap-3">
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
            <p className="text-[#4a5a55] text-[13.5px] leading-relaxed">
              <strong className="font-bold text-[#0f2027]">Medical disclaimer:</strong>{" "}
              This tool is provided for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Tirzepatide dosing should be supervised by a licensed healthcare provider. Always consult your prescribing physician before adjusting any dose.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}