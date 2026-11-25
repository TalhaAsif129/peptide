import React, { useState } from "react";
import { ChevronDown, DollarSign, Bell, ClipboardList, Timer, Bookmark } from "lucide-react";

export default function PeptideReconstitutionCalc({
  defaultVial = 5,
  defaultWater = 2,
  defaultDose = 50,
  peptideName = "Sermorelin",
  dosingGuideUrl = "/peptides/sermorelin",
  vialPresets = [5, 10, 15],
  waterPresets = [1, 2, 3, 5],
  dosePresets = [50, 100, 250, 500],
}) {
  // Syringe capacity: 30 units (0.3ml), 50 units (0.5ml), or 100 units (1.0ml)
  const [syringeType, setSyringeType] = useState(30);

  // Preset selections or "other"
  const [selectedVialPreset, setSelectedVialPreset] = useState(
    vialPresets.includes(defaultVial) ? defaultVial : "other"
  );
  const [customVialMg, setCustomVialMg] = useState(
    vialPresets.includes(defaultVial) ? "" : String(defaultVial)
  );

  const [selectedWaterPreset, setSelectedWaterPreset] = useState(
    waterPresets.includes(defaultWater) ? defaultWater : "other"
  );
  const [customWaterMl, setCustomWaterMl] = useState(
    waterPresets.includes(defaultWater) ? "" : String(defaultWater)
  );

  const initialDose = defaultDose === 300 && dosePresets.includes(50) ? 50 : defaultDose;
  const [selectedDosePreset, setSelectedDosePreset] = useState(
    dosePresets.includes(initialDose) ? initialDose : "other"
  );
  const [customDoseMcg, setCustomDoseMcg] = useState(
    dosePresets.includes(initialDose) ? "" : String(initialDose)
  );

  // Active numeric values
  const vialMg =
    selectedVialPreset === "other"
      ? parseFloat(customVialMg) || 0
      : Number(selectedVialPreset);

  const waterMl =
    selectedWaterPreset === "other"
      ? parseFloat(customWaterMl) || 0
      : Number(selectedWaterPreset);

  const doseMcg =
    selectedDosePreset === "other"
      ? parseFloat(customDoseMcg) || 0
      : Number(selectedDosePreset);

  // Mobile accordion state (< lg)
  const [isMobileExpanded, setIsMobileExpanded] = useState(true);

  // Cost calculator state
  const [isCostExpanded, setIsCostExpanded] = useState(false);
  const [vialCost, setVialCost] = useState("");
  const [frequency, setFrequency] = useState({
    label: "Daily",
    dosesPerWeek: 7,
    daysPerDose: 1,
  });

  // Calculations
  const concentrationMgPerMl = waterMl > 0 ? vialMg / waterMl : 0;
  const concentrationMcgPerMl = waterMl > 0 ? (vialMg * 1000) / waterMl : 0;
  const injectionVolumeMl =
    concentrationMcgPerMl > 0 && doseMcg > 0
      ? doseMcg / concentrationMcgPerMl
      : 0;
  // Syringe units (on standard U-100 calibrated syringes, 1 unit = 0.01 ml)
  const syringeUnits = injectionVolumeMl * 100;
  const dosesPerVial = doseMcg > 0 ? (vialMg * 1000) / doseMcg : 0;

  const isValidCalculation =
    vialMg > 0 && waterMl > 0 && doseMcg > 0 && syringeUnits > 0;

  const formattedUnits = isValidCalculation
    ? Number.isInteger(syringeUnits)
      ? syringeUnits.toString()
      : syringeUnits.toFixed(1)
    : "0";

  // Clamp percentage fill on selected syringe visualizer
  const percentage = isValidCalculation
    ? Math.min(Math.max((syringeUnits / syringeType) * 100, 0), 100)
    : 0;

  // Generate calibration marks for the horizontal syringe bar
  const calibrationStep = syringeType <= 50 ? 5 : 10;
  const calibrationMarks = [];
  for (let t = 0; t <= syringeType; t += syringeType === 100 ? 2 : 1) {
    const isMajor = t % calibrationStep === 0;
    calibrationMarks.push({
      val: t,
      isMajor,
    });
  }

  return (
    <section
      id="calculator"
      className="mt-12 scroll-mt-24 rounded-[5px] border border-[#e5e7eb] bg-white p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]"
      aria-label={`${peptideName} dosage calculator`}
    >
      <h2
        id="sermorelin-dosage-calculator"
        className="saira-bold text-lg font-bold text-[#333333]"
      >
        {peptideName} Dosage Calculator
      </h2>
      <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-[#6b7280]">
        This free peptide calculator shows the exact insulin-syringe units to
        draw for {peptideName}. Enter your vial size, bacteriostatic water and
        target dose — it’s pre-loaded with common {peptideName} reconstitution
        defaults, so you can adjust any field to match your own vial.
      </p>

      {/* Mobile Accordion Toggle (< lg) */}
      <div className="mt-4 lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          aria-expanded={isMobileExpanded}
          aria-controls="calculator-body"
          className="flex w-full items-center justify-between gap-3 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] px-4 py-3 text-left transition-colors hover:bg-gray-100"
        >
          <span className="text-sm font-semibold text-[#333333]">
            {isMobileExpanded
              ? "Hide calculator"
              : `Calculate your ${peptideName} dose`}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-[#6b7280] transition-transform duration-200 ${
              isMobileExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Main Calculator Card */}
      <div
        id="calculator-body"
        className={`mt-4 lg:mt-6 ${
          isMobileExpanded ? "block" : "hidden lg:block"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
          {/* Preset Top Banner */}
          <div className="border-b border-[#e5e7eb] bg-[#e6f2f2]/60 p-4 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <p className="text-sm font-semibold text-[#1c2522]">
                  Preset: {peptideName}
                </p>
                <p className="mt-0.5 text-xs text-[#6b7280]">
                  Vial and BAC water defaults are prefilled. Choose your dose
                  below.
                </p>
              </div>
              <a
                href={dosingGuideUrl}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0b7c84] hover:underline"
              >
                View {peptideName} dosing guide →
              </a>
            </div>
          </div>

          {/* Two-Column Responsive Split */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Step 1 Syringe */}
            <div className="border-b border-[#e5e7eb] bg-[#F7F8F9] p-6 sm:p-8 lg:w-[45%] lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b7c84]">
                Step 1 — Syringe
              </p>
              <p className="mt-1 text-base font-semibold text-[#1c2522]">
                What is the total volume of your syringe?
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {/* 0.3 ml / 30 units button */}
                <button
                  type="button"
                  onClick={() => setSyringeType(30)}
                  className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-150 ${
                    syringeType === 30
                      ? "border-[#0b7c84] bg-[#e6f2f2]/60 shadow-[0_2px_10px_rgba(11,124,132,0.15)]"
                      : "border-[#e5e7eb] bg-white hover:border-[#cbd4d1] hover:bg-gray-50/50"
                  }`}
                >
                  <span
                    className={`shrink-0 text-base font-bold ${
                      syringeType === 30 ? "text-[#0b7c84]" : "text-[#1c2522]"
                    }`}
                  >
                    0.3 ml
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-[#6b7280]">
                    30 units
                  </span>
                  <div className="min-w-0 flex-1">
                    <svg viewBox="0 0 170 32" className="w-full" aria-hidden="true">
                      <rect x="0" y="6" width="6" height="20" rx="2" fill="#0b7c84" />
                      <rect x="6" y="14" width="20" height="4" rx="1" fill="#e6f2f2" />
                      <rect x="26" y="6" width="90" height="20" rx="3" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="26" y1="6" x2="26" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="35" y1="6" x2="35" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="44" y1="6" x2="44" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="53" y1="6" x2="53" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="62" y1="6" x2="62" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="71" y1="6" x2="71" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="80" y1="6" x2="80" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="89" y1="6" x2="89" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="98" y1="6" x2="98" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="107" y1="6" x2="107" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="116" y1="6" x2="116" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 116 10 L 132 13 L 132 19 L 116 22 Z" fill="#e6f2f2" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="132" y1="16" x2="170" y2="16" stroke="#0b7c84" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                {/* 0.5 ml / 50 units button */}
                <button
                  type="button"
                  onClick={() => setSyringeType(50)}
                  className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-150 ${
                    syringeType === 50
                      ? "border-[#0b7c84] bg-[#e6f2f2]/60 shadow-[0_2px_10px_rgba(11,124,132,0.15)]"
                      : "border-[#e5e7eb] bg-white hover:border-[#cbd4d1] hover:bg-gray-50/50"
                  }`}
                >
                  <span
                    className={`shrink-0 text-base font-bold ${
                      syringeType === 50 ? "text-[#0b7c84]" : "text-[#1c2522]"
                    }`}
                  >
                    0.5 ml
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-[#6b7280]">
                    50 units
                  </span>
                  <div className="min-w-0 flex-1">
                    <svg viewBox="0 0 200 32" className="w-full" aria-hidden="true">
                      <rect x="0" y="6" width="6" height="20" rx="2" fill="#0b7c84" />
                      <rect x="6" y="14" width="20" height="4" rx="1" fill="#e6f2f2" />
                      <rect x="26" y="6" width="120" height="20" rx="3" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="26" y1="6" x2="26" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="38" y1="6" x2="38" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="50" y1="6" x2="50" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="62" y1="6" x2="62" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="74" y1="6" x2="74" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="86" y1="6" x2="86" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="98" y1="6" x2="98" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="110" y1="6" x2="110" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="122" y1="6" x2="122" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="134" y1="6" x2="134" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="146" y1="6" x2="146" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 146 10 L 162 13 L 162 19 L 146 22 Z" fill="#e6f2f2" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="162" y1="16" x2="200" y2="16" stroke="#0b7c84" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                {/* 1.0 ml / 100 units button */}
                <button
                  type="button"
                  onClick={() => setSyringeType(100)}
                  className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-150 ${
                    syringeType === 100
                      ? "border-[#0b7c84] bg-[#e6f2f2]/60 shadow-[0_2px_10px_rgba(11,124,132,0.15)]"
                      : "border-[#e5e7eb] bg-white hover:border-[#cbd4d1] hover:bg-gray-50/50"
                  }`}
                >
                  <span
                    className={`shrink-0 text-base font-bold ${
                      syringeType === 100 ? "text-[#0b7c84]" : "text-[#1c2522]"
                    }`}
                  >
                    1.0 ml
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-[#6b7280]">
                    100 units
                  </span>
                  <div className="min-w-0 flex-1">
                    <svg viewBox="0 0 240 32" className="w-full" aria-hidden="true">
                      <rect x="0" y="6" width="6" height="20" rx="2" fill="#0b7c84" />
                      <rect x="6" y="14" width="20" height="4" rx="1" fill="#e6f2f2" />
                      <rect x="26" y="6" width="160" height="20" rx="3" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="26" y1="6" x2="26" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="42" y1="6" x2="42" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="58" y1="6" x2="58" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="74" y1="6" x2="74" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="90" y1="6" x2="90" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="106" y1="6" x2="106" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="122" y1="6" x2="122" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="138" y1="6" x2="138" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="154" y1="6" x2="154" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="170" y1="6" x2="170" y2="11" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="186" y1="6" x2="186" y2="14" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 186 10 L 202 13 L 202 19 L 186 22 Z" fill="#e6f2f2" stroke="#cbd5e1" strokeWidth="0.5" />
                      <line x1="202" y1="16" x2="240" y2="16" stroke="#0b7c84" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Steps 2, 3, 4 */}
            <div className="flex flex-1 flex-col justify-center gap-7 bg-white p-6 sm:p-8">
              {/* Step 2 — Vial */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b7c84]">
                  Step 2 — Vial
                </p>
                <p className="text-sm font-semibold text-[#1c2522] sm:text-base">
                  How many milligrams are in your peptide vial?
                </p>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  {vialPresets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setSelectedVialPreset(val)}
                      className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
                        selectedVialPreset === val
                          ? "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
                          : "border-[#e5e7eb] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                      }`}
                    >
                      {val} mg
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedVialPreset("other")}
                    className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
                      selectedVialPreset === "other"
                        ? "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
                        : "border-[#e5e7eb] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                    }`}
                  >
                    Other
                  </button>
                </div>
                {selectedVialPreset === "other" && (
                  <div className="relative w-full sm:max-w-[200px]">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="Enter mg"
                      value={customVialMg}
                      onChange={(e) => setCustomVialMg(e.target.value)}
                      className="w-full rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 pr-14 text-sm text-[#1c2522] focus:border-[#0b7c84] focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6b7280]">
                      mg
                    </span>
                  </div>
                )}
              </div>

              {/* Step 3 — Water */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b7c84]">
                  Step 3 — Water
                </p>
                <p className="text-sm font-semibold text-[#1c2522] sm:text-base">
                  How much bacteriostatic water are you adding?
                </p>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  {waterPresets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setSelectedWaterPreset(val)}
                      className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
                        selectedWaterPreset === val
                          ? "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
                          : "border-[#e5e7eb] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                      }`}
                    >
                      {val} ml
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedWaterPreset("other")}
                    className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
                      selectedWaterPreset === "other"
                        ? "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
                        : "border-[#e5e7eb] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                    }`}
                  >
                    Other
                  </button>
                </div>
                {selectedWaterPreset === "other" && (
                  <div className="relative w-full sm:max-w-[200px]">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="Enter mL"
                      value={customWaterMl}
                      onChange={(e) => setCustomWaterMl(e.target.value)}
                      className="w-full rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 pr-14 text-sm text-[#1c2522] focus:border-[#0b7c84] focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6b7280]">
                      mL
                    </span>
                  </div>
                )}
              </div>

              {/* Step 4 — Dose */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b7c84]">
                  Step 4 — Dose
                </p>
                <p className="text-sm font-semibold text-[#1c2522] sm:text-base">
                  How much peptide do you want per dose?
                </p>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  {dosePresets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setSelectedDosePreset(val)}
                      className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
                        selectedDosePreset === val
                          ? "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
                          : "border-[#e5e7eb] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                      }`}
                    >
                      {val} mcg
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedDosePreset("other")}
                    className={`w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto ${
                      selectedDosePreset === "other"
                        ? "border-[#0b7c84] bg-[#0b7c84] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]"
                        : "border-[#e5e7eb] bg-white text-[#1c2522] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                    }`}
                  >
                    Other
                  </button>
                </div>
                {selectedDosePreset === "other" && (
                  <div className="relative w-full sm:max-w-[200px]">
                    <input
                      type="number"
                      min="0"
                      step="1"
                      placeholder="Enter mcg"
                      value={customDoseMcg}
                      onChange={(e) => setCustomDoseMcg(e.target.value)}
                      className="w-full rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 pr-14 text-sm text-[#1c2522] focus:border-[#0b7c84] focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6b7280]">
                      mcg
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Bottom Section */}
          <div className="border-t border-[#e5e7eb] bg-gradient-to-b from-[#e6f2f2]/30 to-white p-4 sm:p-7 lg:p-8 space-y-6">
            {/* Main Result Card */}
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-4 sm:p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b7c84]">
                Your Dose
              </span>

              {isValidCalculation ? (
                <>
                  <p className="mt-2 text-sm text-[#4a5568]">
                    To get a dose of{" "}
                    <span className="font-semibold text-[#1c2522]">
                      {doseMcg} mcg
                    </span>
                    , pull the syringe to:
                  </p>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="saira-bold text-5xl font-extrabold tracking-tight text-[#0b7c84] sm:text-6xl leading-none">
                      {formattedUnits}
                    </span>
                    <span className="text-lg font-bold uppercase tracking-wider text-[#6b7280]">
                      units
                    </span>
                  </p>

                  {/* Horizontal Calibrated Syringe Bar */}
                  <div className="mt-5">
                    <div className="w-full overflow-hidden overflow-x-auto">
                      <div className="min-w-[320px] px-2 pb-2">
                        {/* Syringe barrel */}
                        <div className="relative mx-auto h-9 overflow-hidden rounded-lg bg-white shadow-[inset_0_0_0_1px_#e5e7eb]">
                          <div
                            className="absolute inset-y-0 left-0 rounded-l-lg bg-[#0b7c84] opacity-90 transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                          <div
                            className="absolute top-0 h-full w-0.5 -translate-x-1/2 bg-[#0b7c84] transition-all duration-300"
                            style={{ left: `${percentage}%` }}
                          />
                        </div>

                        {/* Calibration ticks */}
                        <div className="relative mt-0 h-10">
                          {calibrationMarks.map((m) => (
                            <div
                              key={m.val}
                              className="absolute flex flex-col items-center"
                              style={{
                                left: `${(m.val / syringeType) * 100}%`,
                                transform: "translateX(-50%)",
                              }}
                            >
                              <div
                                className={
                                  m.isMajor
                                    ? "h-3 w-[1.5px] bg-[#6b7280]"
                                    : "h-2 w-px bg-[#cbd5e1]"
                                }
                              />
                              {m.isMajor && (
                                <span className="mt-0.5  text-[11px] font-medium text-[#6b7280]">
                                  {m.val}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="mt-2 text-sm text-[#6b7280] py-3">
                  Select all options above to calculate your dose
                </p>
              )}
            </div>

            {/* 3 Stats Card Grid */}
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
              <div className="min-w-0 px-2 py-4 text-center sm:px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#6b7280] sm:text-[11px] sm:tracking-[0.06em]">
                  Concentration
                </p>
                <p className="mt-1.5  text-sm font-semibold text-[#1c2522] sm:text-base">
                  {concentrationMgPerMl.toFixed(2)} mg/ml
                </p>
              </div>
              <div className="min-w-0 border-l border-[#e5e7eb] px-2 py-4 text-center sm:px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#6b7280] sm:text-[11px] sm:tracking-[0.06em]">
                  Volume
                </p>
                <p className="mt-1.5  text-sm font-semibold text-[#1c2522] sm:text-base">
                  {injectionVolumeMl.toFixed(3)} ml
                </p>
              </div>
              <div className="min-w-0 border-l border-[#e5e7eb] px-2 py-4 text-center sm:px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#6b7280] sm:text-[11px] sm:tracking-[0.06em]">
                  Doses / Vial
                </p>
                <p className="mt-1.5  text-sm font-semibold text-[#1c2522] sm:text-base">
                  {dosesPerVial > 0 ? Math.round(dosesPerVial) : "—"}
                </p>
              </div>
            </div>

            {/* Cost Per Dose Trigger / Expanded Card */}
            {!isCostExpanded ? (
              <div>
                <button
                  type="button"
                  onClick={() => setIsCostExpanded(true)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#0b7c84] bg-white px-4 py-2 text-sm font-semibold text-[#0b7c84] transition-all hover:scale-[1.02] hover:bg-[#e6f2f2]/40"
                >
                  <DollarSign className="h-4 w-4" />
                  Calculate cost per dose
                </button>
              </div>
            ) : (
              <div className="space-y-4 rounded-2xl border border-[#e5e7eb] bg-white p-4 sm:p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b7c84]">
                    Cost Per Dose Calculator
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsCostExpanded(false)}
                    className="text-xs text-[#6b7280] hover:text-[#1c2522]"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-wrap items-end gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#4a5568]">
                      Vial cost ($)
                    </label>
                    <div className="relative max-w-[140px]">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6b7280]">
                        $
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        value={vialCost}
                        onChange={(e) => setVialCost(e.target.value)}
                        className="w-full rounded-lg border border-[#e5e7eb] bg-white py-2 pl-7 pr-3 text-sm text-[#1c2522] focus:border-[#0b7c84] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#4a5568]">
                      Dosing frequency
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "Daily", dosesPerWeek: 7, daysPerDose: 1 },
                        { label: "Every other day", dosesPerWeek: 3.5, daysPerDose: 2 },
                        { label: "3x / week", dosesPerWeek: 3, daysPerDose: 7 / 3 },
                        { label: "2x / week", dosesPerWeek: 2, daysPerDose: 3.5 },
                        { label: "Weekly", dosesPerWeek: 1, daysPerDose: 7 },
                      ].map((freq) => (
                        <button
                          key={freq.label}
                          type="button"
                          onClick={() => setFrequency(freq)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                            frequency.label === freq.label
                              ? "border-[#0b7c84] bg-[#0b7c84] text-white"
                              : "border-[#e5e7eb] bg-white text-[#4a5568] hover:border-[#0b7c84] hover:bg-[#e6f2f2]/40"
                          }`}
                        >
                          {freq.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {parseFloat(vialCost) > 0 && dosesPerVial > 0 && (
                  <div className="flex flex-wrap gap-6 rounded-xl bg-[#e6f2f2]/60 px-4 py-3 text-sm">
                    <div>
                      <span className="text-[#4a5568]">Cost per dose: </span>
                      <span className=" font-semibold text-[#0b7c84]">
                        ${(parseFloat(vialCost) / dosesPerVial).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#4a5568]">Cost per week: </span>
                      <span className=" font-semibold text-[#0b7c84]">
                        ${(
                          (parseFloat(vialCost) / dosesPerVial) *
                          frequency.dosesPerWeek
                        ).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#4a5568]">Vial lasts: </span>
                      <span className=" font-semibold text-[#0b7c84]">
                        ~{Math.round(dosesPerVial * frequency.daysPerDose)} days
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Keep this dose CTA Card */}
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.3),0_0_3px_0_rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="saira-bold text-xl font-extrabold leading-tight text-[#1c2522] sm:text-2xl">
                    Keep this dose — track every injection free
                  </p>
                  <p className="mt-1.5 text-sm text-[#6b7280]">
                    Save this calculation to your free tracker. Calculators stay
                    anonymous — sign in only to save.
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f2f2]/70 px-3 py-1.5 text-xs font-semibold text-[#0b7c84]">
                      <Bell className="h-3.5 w-3.5" />
                      Dose reminders
                    </li>
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f2f2]/70 px-3 py-1.5 text-xs font-semibold text-[#0b7c84]">
                      <ClipboardList className="h-3.5 w-3.5" />
                      Injection logging
                    </li>
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f2f2]/70 px-3 py-1.5 text-xs font-semibold text-[#0b7c84]">
                      <Timer className="h-3.5 w-3.5" />
                      Vial countdown
                    </li>
                  </ul>
                </div>
                <div className="shrink-0">
                  <a
                    href="/tracker/signup"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#0b7c84] px-7 py-3 text-base font-bold text-white transition-all duration-150 hover:bg-[#09666d] hover:shadow-[0_4px_14px_rgba(11,124,132,0.28)] hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                    aria-label="Save to my tracker"
                  >
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save to my tracker
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
