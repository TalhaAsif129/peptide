import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertTriangle, ArrowLeftRight, ArrowRight, Beaker, BookOpen, Calculator, Check, ChevronDown, Info, Share2, ShieldCheck, Stethoscope } from 'lucide-react';
import { BAC_WATER_PRESETS, PEPTIDE_PRESETS, RX_OFFERS, SYRINGE_SIZES } from '../../../constants/peptides';
import { calculateConcentration, calculateDoseToUnits, calculateUnitsToDose } from '../../../utils/calculator';
import breadcrumbChevronSvg from '../../../assets/UnitsConverter/breadcrumb-chevron.svg';
import calculatorSvg from '../../../assets/UnitsConverter/calculator.svg';
import faqChevronSvg from '../../../assets/UnitsConverter/faq-chevron.svg';
import syringeLargeSvg from '../../../assets/UnitsConverter/syringe-large.svg';
import syringeMediumSvg from '../../../assets/UnitsConverter/syringe-medium.svg';
import syringeSmallSvg from '../../../assets/UnitsConverter/syringe-small.svg';

const popularGuides = [
  {
    label: 'Retatrutide Dosage Calculator',
    desc: 'Reconstitution and mg-to-units calculator for retatrutide, with a full dose chart.',
    href: '/tools/retatrutide-dosage-calculator',
    icon: BookOpen,
  },
  {
    label: 'Tirzepatide Dosage Guide',
    desc: 'Week-by-week tirzepatide titration, dose ranges, and what to expect.',
    href: '/blog/tirzepatide-dosing',
    icon: BookOpen,
  },
  {
    label: 'CJC-1295 + Ipamorelin Dosage Guide',
    desc: 'The 10 mg blend: standard mcg ranges, syringe units, timing, and titration.',
    href: '/blog/cjc-1295-no-dac-ipamorelin-10mg-blend-dosage-guide',
    icon: BookOpen,
  },
  {
    label: 'Thymosin Alpha-1 Dosage Guide',
    desc: 'Typical thymosin alpha-1 dosing, reconstitution, and injection protocol.',
    href: '/blog/thymosin-alpha-1-dosage-guide',
    icon: BookOpen,
  },
  {
    label: 'MOTS-c Side Effects',
    desc: 'What to know about MOTS-c tolerability, dosing context, and safety.',
    href: '/blog/mots-c-side-effects',
    icon: BookOpen,
  },
  {
    label: 'Retatrutide Peptide Profile',
    desc: 'Mechanism, research status, and dosing overview for retatrutide.',
    href: '/peptides/retatrutide',
    icon: BookOpen,
  },
];

const relatedTools = [
  {
    label: 'Peptide Reconstitution Calculator',
    desc: 'Calculate syringe units from vial size, BAC water, and dose. Includes peptide presets.',
    href: '/tools/peptide-calculator',
    icon: Calculator,
  },
  {
    label: 'Peptide Titration Calculator',
    desc: 'Generate a week-by-week dose escalation schedule for GLP-1 and peptide protocols.',
    href: '/tools/peptide-titration-calculator',
    icon: Calculator,
  },
  {
    label: 'Semaglutide Units Converter',
    desc: 'Dedicated units converter for semaglutide with common concentration presets and dosing chart.',
    href: '/tools/semaglutide-units-converter',
    icon: Calculator,
  },
  {
    label: 'Tirzepatide Units Converter',
    desc: 'Dedicated units converter for tirzepatide with mg to units chart for 5–15 mg/mL concentrations.',
    href: '/tools/tirzepatide-units-converter',
    icon: Calculator,
  },
];

const dosingGuides = [
  {
    label: 'How to Reconstitute Peptides',
    desc: 'Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.',
    href: '/how-to-reconstitute-peptides',
    icon: Beaker,
  },
  {
    label: 'Peptide Dosage Guide',
    desc: 'Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.',
    href: '/peptide-dosage-guide',
    icon: BookOpen,
  },
];

const faqItems = [
  {
    question: 'How do I convert peptide mg to syringe units?',
    answer:
      'Divide your dose in mg by the concentration in mg/mL to get mL. Then multiply by 100 (since all insulin syringes are U-100: 1 unit = 0.01 mL). Example: 0.25 mg dose ÷ 2 mg/mL = 0.125 mL = 12.5 units.',
  },
  {
    question: 'What does 1 unit mean on an insulin syringe?',
    answer:
      'All standard insulin syringes are U-100, meaning 1 unit = 0.01 mL. A 100-unit syringe holds 1 mL total; a 50-unit syringe holds 0.5 mL; a 30-unit syringe holds 0.3 mL. The unit markings on all three syringes are identical — only the total capacity differs.',
  },
  {
    question: 'What is the difference between mg, mcg, and mL?',
    answer:
      "mg (milligrams) and mcg (micrograms) are units of mass — they describe how much peptide you're dosing. 1 mg = 1,000 mcg. mL (milliliters) is a unit of volume — it describes how much liquid you draw into the syringe. The conversion between mass and volume depends on your concentration (mg/mL).",
  },
  {
    question: 'How do I calculate concentration after reconstitution?',
    answer:
      'Divide the total peptide mass in the vial (mg) by the volume of bacteriostatic water you added (mL). For example, a 5 mg vial reconstituted with 2 mL of BAC water gives a concentration of 2.5 mg/mL. Use the BAC water helper in the tool above to calculate this automatically.',
  },
  {
    question: 'Does syringe size affect the unit calculation?',
    answer:
      'No — the math is the same regardless of syringe size. All insulin syringes are U-100 (1 unit = 0.01 mL). A smaller syringe (like 0.3 mL / 30 units) just has a lower maximum capacity. If your calculated dose exceeds the syringe capacity, the tool will warn you.',
  },
  {
    question: 'Can I use this tool for semaglutide and tirzepatide?',
    answer:
      'Yes. Select the semaglutide or tirzepatide preset from the dropdown. The tool will preload common concentrations for that peptide. For dedicated semaglutide and tirzepatide converters with dosing charts, see the peptide-specific pages linked below.',
  },
];

function ConverterStepHeader({ step, title, subtitle }) {
  return (
    <div className="mb-3 flex items-start gap-3 sm:hidden">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent-ink)]">
        {step}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
        {subtitle ? (
          <p className="mt-0.5 text-xs leading-relaxed text-[var(--muted)]">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}

function RxOfferStrip({ peptide }) {
  const offer = RX_OFFERS[peptide];
  if (!offer) return null;

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3 rounded-[12px] bg-[#FFFBE0] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ink)]" strokeWidth={1.5} aria-hidden={true} />
          <p className="text-sm text-[var(--ink)]">
            <span className="font-semibold">Want this prescribed?</span> Licensed doctors, compounded {offer.peptideName} from ${offer.price}/mo.
          </p>
        </div>
        <a
          href={offer.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] font-semibold text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
        >
          See if I qualify
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden={true} />
        </a>
      </div>
      <p className="mt-2 text-[11px] text-[var(--muted)]">
        Affiliate link · {offer.vendorName} · {offer.priceNote} · Compounded medications are not FDA-approved
      </p>
    </div>
  );
}

function SyringeVisualIndicator({ totalUnits, doseUnits }) {
  const safeDose = isNaN(doseUnits) || doseUnits === null ? 0 : doseUnits;
  const percentage = totalUnits > 0 ? (Math.min(Math.max(safeDose, 0), totalUnits) / totalUnits) * 100 : 0;
  const step = totalUnits <= 30 ? 5 : 10;
  const markers = [];

  for (let t = 0; t <= totalUnits; t++) {
    const isMajor = t % step === 0;
    markers.push({
      pos: (t / totalUnits) * 100,
      label: isMajor ? t : undefined,
    });
  }

  return (
    <div className="w-full overflow-hidden overflow-x-auto">
      <div className="min-w-[300px] px-1 pb-1">
        <div className="relative h-7 rounded-md border border-[var(--border-color)] bg-white overflow-hidden">
          {percentage > 0 && (
            <div
              className="absolute inset-y-0 left-0 rounded-l-md bg-[var(--accent)] transition-all duration-300"
              style={{
                width: `${percentage}%`,
                opacity: 0.85,
              }}
            />
          )}
          {percentage > 0 && percentage <= 100 && (
            <div
              className="absolute top-0 h-full w-0.5 bg-[var(--accent)] transition-all duration-300 z-10"
              style={{
                left: `${percentage}%`,
              }}
            />
          )}
        </div>
        <div className="relative mt-0 h-9">
          {markers.map((marker, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center"
              style={{
                left: `${marker.pos}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className={`bg-[var(--ink)] ${
                  marker.label !== undefined ? "h-2.5 w-[1.5px]" : "h-1.5 w-px"
                }`}
              />
              {marker.label !== undefined && (
                <span
                  className="mt-0.5 text-[10px] font-medium text-[var(--muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {marker.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function UnitsConverterTool({ defaultPreset }) {
  // ── direction ──────────────────────────────────────────────────────────────
  const [direction, setDirection] = useState('mg-to-units');
  const isReverse = direction === 'units-to-mg';

  // ── preset / peptide ───────────────────────────────────────────────────────
  const [selectedPresetId, setSelectedPresetId] = useState(defaultPreset ?? 'semaglutide');
  const [presetDropdownOpen, setPresetDropdownOpen] = useState(false);
  const presetDropdownRef = useRef(null);
  const preset = PEPTIDE_PRESETS.find((p) => p.id === selectedPresetId) ?? PEPTIDE_PRESETS[0];

  // ── concentration ──────────────────────────────────────────────────────────
  const [selectedConc, setSelectedConc] = useState(preset.defaultConc);
  const [customConcRaw, setCustomConcRaw] = useState('');
  const [isCustomConc, setIsCustomConc] = useState(false);

  // ── BAC water helper ───────────────────────────────────────────────────────
  const [showBacHelper, setShowBacHelper] = useState(false);
  const [vialSize, setVialSize] = useState(preset.defaultVial);
  const [bacWater, setBacWater] = useState(1);

  // ── dose (mg/mcg) ──────────────────────────────────────────────────────────
  const [selectedDose, setSelectedDose] = useState(preset.defaultDose);
  const [customDoseRaw, setCustomDoseRaw] = useState('');
  const [isCustomDose, setIsCustomDose] = useState(false);
  const [doseUnit, setDoseUnit] = useState('mg');

  // ── syringe ────────────────────────────────────────────────────────────────
  const [syringeIdx, setSyringeIdx] = useState(2); // default 1.0 mL (100 units)

  // ── units (reverse direction) ──────────────────────────────────────────────
  const [selectedUnits, setSelectedUnits] = useState(preset.commonUnits[0]);
  const [customUnitsRaw, setCustomUnitsRaw] = useState('');
  const [isCustomUnits, setIsCustomUnits] = useState(false);

  // ── share copied state ─────────────────────────────────────────────────────
  const [copied, setCopied] = useState(false);

  // ── close preset dropdown on outside click ─────────────────────────────────
  useEffect(() => {
    function handler(e) {
      if (presetDropdownRef.current && !presetDropdownRef.current.contains(e.target)) {
        setPresetDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── when preset changes, reset all dependent state ─────────────────────────
  const handlePresetChange = useCallback((id) => {
    const p = PEPTIDE_PRESETS.find((x) => x.id === id) ?? PEPTIDE_PRESETS[0];
    setSelectedPresetId(id);
    setSelectedConc(p.defaultConc);
    setCustomConcRaw('');
    setIsCustomConc(false);
    setVialSize(p.defaultVial);
    setBacWater(1);
    setShowBacHelper(false);
    setSelectedDose(p.defaultDose);
    setCustomDoseRaw('');
    setIsCustomDose(false);
    setDoseUnit('mg');
    setSelectedUnits(p.commonUnits[0]);
    setCustomUnitsRaw('');
    setIsCustomUnits(false);
    setPresetDropdownOpen(false);
  }, []);

  // ── derived concentration ──────────────────────────────────────────────────
  const concentration = useMemo(() => {
    if (showBacHelper) {
      return calculateConcentration(vialSize, bacWater);
    }
    if (isCustomConc) {
      const v = parseFloat(customConcRaw);
      return isNaN(v) || v <= 0 ? null : v;
    }
    return selectedConc;
  }, [showBacHelper, vialSize, bacWater, isCustomConc, customConcRaw, selectedConc]);

  // ── derived dose in mg ─────────────────────────────────────────────────────
  const doseMg = useMemo(() => {
    const raw = isCustomDose ? parseFloat(customDoseRaw) : selectedDose;
    if (raw === null || raw === undefined || isNaN(raw)) return null;
    return doseUnit === 'mcg' ? raw / 1000 : raw;
  }, [isCustomDose, customDoseRaw, selectedDose, doseUnit]);

  // ── derived units value ────────────────────────────────────────────────────
  const unitsValue = useMemo(() => {
    const raw = isCustomUnits ? parseFloat(customUnitsRaw) : selectedUnits;
    if (raw === null || raw === undefined || isNaN(raw)) return null;
    return raw;
  }, [isCustomUnits, customUnitsRaw, selectedUnits]);

  // ── active syringe ─────────────────────────────────────────────────────────
  const activeSyringe = SYRINGE_SIZES[syringeIdx];

  // ── mg-to-units result ─────────────────────────────────────────────────────
  const doseToUnitsResult = useMemo(() => {
    if (!concentration || !doseMg) return null;
    return calculateDoseToUnits(doseMg, 'mg', concentration, activeSyringe.value);
  }, [concentration, doseMg, activeSyringe.value]);

  // ── units-to-mg result ─────────────────────────────────────────────────────
  const unitsToDoseResult = useMemo(() => {
    if (!concentration || !unitsValue) return null;
    return calculateUnitsToDose(unitsValue, concentration, activeSyringe.value);
  }, [concentration, unitsValue, activeSyringe.value]);

  // ── common doses table ─────────────────────────────────────────────────────
  const commonDosesTable = useMemo(() => {
    if (!concentration || concentration <= 0) return [];
    return preset.commonDoses.map((d) => {
      const ml = d / concentration;
      return { dose: d, ml, units: ml * 100 };
    });
  }, [preset.commonDoses, concentration]);

  // ── sticky mobile result ───────────────────────────────────────────────────
  const stickyResult = isReverse
    ? unitsToDoseResult && !unitsToDoseResult.exceeds
      ? { units: unitsValue ?? 0, ml: unitsToDoseResult.ml }
      : null
    : doseToUnitsResult && !doseToUnitsResult.exceeds
    ? { units: doseToUnitsResult.units, ml: doseToUnitsResult.ml }
    : null;

  // ── share handler ──────────────────────────────────────────────────────────
  const handleShare = useCallback(() => {
    const params = new URLSearchParams();
    params.set('peptide', selectedPresetId);
    params.set('dir', direction);
    if (concentration) params.set('conc', String(concentration));
    if (!isReverse && doseMg) params.set('dose', String(doseMg));
    if (isReverse && unitsValue) params.set('units', String(unitsValue));
    params.set('du', doseUnit);
    params.set('syringe', String(activeSyringe.value));
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [selectedPresetId, direction, concentration, isReverse, doseMg, unitsValue, doseUnit, activeSyringe.value]);

  // ── BAC water calculated concentration display ─────────────────────────────
  const bacConc = showBacHelper ? calculateConcentration(vialSize, bacWater) : null;

  return (
    <div className="rounded-[5px] border border-[var(--border-color)] bg-white shadow-sm">

      {/* ── Step 1: Preset + Direction ─────────────────────────────────────── */}
      <div className="border-b border-[var(--border-color)] p-4 sm:p-8">
        <ConverterStepHeader
          step={1}
          title="Choose your peptide + conversion direction"
          subtitle="Pick a preset (optional), then choose dose → units or units → mg."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
          {/* Peptide preset dropdown */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-[var(--ink)]">
              Peptide preset{' '}
              <span className="ml-1 font-normal text-[var(--muted)]">(sets common concentrations)</span>
            </p>
            <div className="relative mt-2 sm:max-w-xs" ref={presetDropdownRef}>
              <button
                type="button"
                onClick={() => setPresetDropdownOpen((o) => !o)}
                className="flex w-full items-center justify-between rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)]"
              >
                <span>{preset.label}</span>
                <ChevronDown
                  className={cn('h-4 w-4 text-[var(--muted)] transition-transform', presetDropdownOpen && 'rotate-180')}
                />
              </button>
              {presetDropdownOpen && (
                <div className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-[5px] border border-[var(--border-color)] bg-white shadow-lg">
                  {PEPTIDE_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handlePresetChange(p.id)}
                      className={cn(
                        'w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--canvas)]',
                        selectedPresetId === p.id
                          ? 'bg-[var(--canvas)] font-medium text-[var(--ink)]'
                          : 'text-[var(--ink)]'
                      )}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Direction toggle */}
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-semibold text-[var(--ink)]">Conversion direction</p>
            <div className="flex overflow-hidden rounded-[5px] border border-[var(--border-color)] text-sm font-medium">
              {[
                { value: 'mg-to-units', label: 'dose → units' },
                { value: 'units-to-mg', label: 'units → mg' },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setDirection(value)}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 transition-colors',
                    direction === value ? 'bg-[var(--accent)] text-white' : 'bg-white text-[var(--muted)] hover:bg-[var(--canvas)]'
                  )}
                >
                  {value === 'units-to-mg' && <ArrowLeftRight className="h-3.5 w-3.5" />}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View dosing guide link */}
        {preset.slug && (
          <div className="mt-3">
            <a
              href={`/peptides/${preset.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-ink)] hover:underline"
            >
              View {preset.label} dosing guide →
            </a>
          </div>
        )}
      </div>

      {/* ── BAC Water Helper (when visible) ───────────────────────────────── */}
      {showBacHelper && (
        <div className="border-b border-[var(--border-color)] bg-[var(--accent-soft)] p-4 sm:p-8">
          <ConverterStepHeader step={2} title="Set your concentration" subtitle="Use the BAC helper or enter concentration directly." />
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-semibold text-[var(--ink)]">Bacteriostatic water reconstitution helper</p>
            <button
              type="button"
              onClick={() => setShowBacHelper(false)}
              className="text-xs text-[var(--muted)] hover:text-[var(--ink)] hover:underline shrink-0"
            >
              Enter concentration directly
            </button>
          </div>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Select your vial size and BAC water volume to calculate your concentration automatically.
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
            {/* Vial size */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--ink)]">Vial size (mg)</p>
              <div className="flex flex-wrap gap-1.5">
                {preset.vialSizes.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVialSize(v)}
                    className={cn(
                      'rounded-[5px] border px-3 py-1.5 text-sm font-medium transition-all',
                      vialSize === v
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)]'
                    )}
                  >
                    {v} mg
                  </button>
                ))}
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="Other"
                  value={preset.vialSizes.includes(vialSize) ? '' : String(vialSize ?? '')}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    setVialSize(isNaN(v) ? null : v);
                  }}
                  className="w-24 rounded-[5px] border border-[var(--border-color)] bg-white px-3 py-1.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                />
              </div>
            </div>

            {/* BAC water */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--ink)]">BAC water added (mL)</p>
              <div className="flex flex-wrap gap-1.5">
                {BAC_WATER_PRESETS.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setBacWater(v)}
                    className={cn(
                      'rounded-[5px] border px-3 py-1.5 text-sm font-medium transition-all',
                      bacWater === v
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)]'
                    )}
                  >
                    {v} mL
                  </button>
                ))}
              </div>
            </div>
          </div>

          {bacConc && bacConc > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2.5">
              <Info className="h-4 w-4 shrink-0 text-[var(--accent-ink)]" />
              <span className="text-sm text-[var(--ink)]">
                Concentration:{' '}
                <span className="font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                  {bacConc.toFixed(2)} mg/mL
                </span>
              </span>
            </div>
          )}
        </div>
      )}

      {/* ── Steps 2+3: Concentration + Dose/Units side by side ────────────── */}
      <div className="flex flex-col border-b border-[var(--border-color)] lg:flex-row">

        {/* Concentration panel */}
        <div className="flex-1 border-b border-[var(--border-color)] p-4 sm:p-8 lg:border-b-0 lg:border-r">
          {!showBacHelper && (
            <ConverterStepHeader step={2} title="Set your concentration" subtitle="Select a common mg/mL or enter a custom concentration." />
          )}
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-[var(--ink)]">Concentration (mg/mL)</p>
            {!showBacHelper && (
              <button
                type="button"
                onClick={() => { setShowBacHelper(true); setIsCustomConc(false); }}
                className="text-xs text-[var(--accent-ink)] hover:underline"
              >
                Calculate from BAC water
              </button>
            )}
          </div>

          {showBacHelper ? (
            <p className="mt-3 text-sm text-[var(--muted)]">Concentration calculated from the BAC water helper above.</p>
          ) : (
            <div className="mt-3 space-y-3">
              <div className="flex flex-wrap gap-2">
                {preset.concentrations.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => { setSelectedConc(c); setIsCustomConc(false); setCustomConcRaw(''); }}
                    className={cn(
                      'rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150',
                      !isCustomConc && selectedConc === c
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                    )}
                  >
                    {c} mg/mL
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => { setIsCustomConc(true); setSelectedConc(null); }}
                  className={cn(
                    'rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150',
                    isCustomConc
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                      : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                  )}
                >
                  Other
                </button>
              </div>
              {isCustomConc && (
                <div className="relative max-w-[180px]">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={customConcRaw}
                    onChange={(e) => setCustomConcRaw(e.target.value)}
                    placeholder="Enter mg/mL"
                    autoFocus
                    className="w-full rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2 pr-16 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">mg/mL</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dose / Units panel */}
        <div className="flex-1 p-4 sm:p-8">
          {isReverse ? (
            <>
              <ConverterStepHeader step={3} title="Enter syringe units" subtitle="Enter the units you drew (U-100)." />
              <p className="text-sm font-semibold text-[var(--ink)]">Syringe units drawn</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">Enter the units you see on your syringe</p>
              <div className="mt-3 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {preset.commonUnits.map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => { setSelectedUnits(u); setIsCustomUnits(false); setCustomUnitsRaw(''); }}
                      className={cn(
                        'rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150',
                        !isCustomUnits && selectedUnits === u
                          ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                          : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                      )}
                    >
                      {u} units
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => { setIsCustomUnits(true); setSelectedUnits(null); }}
                    className={cn(
                      'rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150',
                      isCustomUnits
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                    )}
                  >
                    Other
                  </button>
                </div>
                {isCustomUnits && (
                  <div className="relative max-w-[180px]">
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={customUnitsRaw}
                      onChange={(e) => setCustomUnitsRaw(e.target.value)}
                      placeholder="Enter units"
                      autoFocus
                      className="w-full rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2 pr-16 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">units</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <ConverterStepHeader step={3} title="Enter your dose" subtitle="Select a common dose or enter a custom value." />
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-[var(--ink)]">Desired dose</p>
                <div className="flex overflow-hidden rounded-[5px] border border-[var(--border-color)] text-xs font-medium">
                  {['mg', 'mcg'].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setDoseUnit(u)}
                      className={cn(
                        'px-2.5 py-1 transition-colors',
                        doseUnit === u ? 'bg-[var(--accent)] text-white' : 'bg-white text-[var(--muted)] hover:bg-[var(--canvas)]'
                      )}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {preset.commonDoses.map((d) => {
                    const display = doseUnit === 'mcg' ? d * 1000 : d;
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => { setSelectedDose(d); setIsCustomDose(false); setCustomDoseRaw(''); }}
                        className={cn(
                          'rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150',
                          !isCustomDose && selectedDose === d
                            ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                            : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                        )}
                      >
                        {display % 1 === 0 ? display.toFixed(0) : display} {doseUnit}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => { setIsCustomDose(true); setSelectedDose(null); }}
                    className={cn(
                      'rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150',
                      isCustomDose
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                    )}
                  >
                    Other
                  </button>
                </div>
                {isCustomDose && (
                  <div className="relative max-w-[180px]">
                    <input
                      type="number"
                      min="0"
                      step={doseUnit === 'mcg' ? '10' : '0.01'}
                      value={customDoseRaw}
                      onChange={(e) => setCustomDoseRaw(e.target.value)}
                      placeholder={`Enter ${doseUnit}`}
                      autoFocus
                      className="w-full rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2 pr-14 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">{doseUnit}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Step 4: Syringe size ───────────────────────────────────────────── */}
      <div className="border-b border-[var(--border-color)] p-4 sm:p-8">
        <ConverterStepHeader step={4} title="Select your syringe size" subtitle="All insulin syringes are U-100; syringe size only changes max capacity." />
        <p className="text-sm font-semibold text-[var(--ink)]">Insulin syringe size</p>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {SYRINGE_SIZES.map((syringe, idx) => (
            <button
              key={syringe.value}
              type="button"
              onClick={() => setSyringeIdx(idx)}
              className={cn(
                'flex flex-col gap-2 rounded-[5px] border-2 px-4 py-3 text-left transition-all duration-150',
                syringeIdx === idx
                  ? 'border-[var(--accent)] bg-[var(--accent-soft)] shadow-sm'
                  : 'border-[var(--border-color)] bg-white hover:bg-[var(--canvas)]'
              )}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-[var(--ink)]">{syringe.label}</span>
                <span className="text-xs text-[var(--muted)]">· {syringe.sublabel}</span>
              </div>
              <img src={idx === 0 ? syringeSmallSvg : idx === 1 ? syringeMediumSvg : syringeLargeSvg} alt="" className="w-full" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Step 5: Result ────────────────────────────────────────────────── */}
      <div className="p-4 sm:p-8">
        <ConverterStepHeader step={5} title="Your result" subtitle="Shareable link available." />

        {isReverse ? (
          /* units → mg result */
          unitsToDoseResult ? (
            unitsToDoseResult.exceeds ? (
              <div className="flex items-start gap-3 rounded-[5px] border border-red-200 bg-red-50 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="font-semibold text-red-700">Units exceed selected syringe capacity</p>
                  <p className="mt-1 text-sm text-red-600">
                    {unitsValue} units = {unitsToDoseResult.ml.toFixed(3)} mL, which exceeds your {activeSyringe.label} syringe. Select a larger syringe or enter fewer units.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--muted)]">{unitsValue} units on your syringe equals</p>
                    <p className="mt-0.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span>
                        <span className="text-4xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                          {unitsToDoseResult.doseMg % 1 === 0
                            ? unitsToDoseResult.doseMg.toFixed(0)
                            : unitsToDoseResult.doseMg.toFixed(3)}
                        </span>
                        <span className="ml-1 text-lg font-semibold text-[var(--muted)]">mg</span>
                      </span>
                      <span className="text-sm text-[var(--muted)]">
                        ({unitsToDoseResult.doseMcg % 1 === 0 ? unitsToDoseResult.doseMcg.toFixed(0) : unitsToDoseResult.doseMcg.toFixed(1)} mcg)
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex shrink-0 items-center gap-1.5 rounded-[5px] border border-[var(--border-color)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:bg-[var(--canvas)]"
                  >
                    {copied ? (
                      <><Check className="h-3.5 w-3.5 text-green-600" /><span className="text-green-600">Copied</span></>
                    ) : (
                      <><Share2 className="h-3.5 w-3.5" /><span>Share</span></>
                    )}
                  </button>
                </div>
                <SyringeVisualIndicator totalUnits={activeSyringe.units} doseUnits={unitsValue ?? 0} />
                <div className="flex flex-wrap gap-5 border-t border-[var(--canvas)] pt-4 text-sm">
                  <div>
                    <span className="text-[var(--muted)]">Volume: </span>
                    <span className="font-semibold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {unitsToDoseResult.ml.toFixed(3)} mL
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--muted)]">Concentration: </span>
                    <span className="font-semibold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {concentration?.toFixed(2)} mg/mL
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-[5px] bg-[var(--canvas)] px-4 py-3 text-xs text-[var(--muted)]">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-ink)]" />
                  <span>
                    Formula: {unitsValue} units ÷ 100 = {unitsToDoseResult.ml.toFixed(3)} mL × {concentration?.toFixed(2)} mg/mL ={' '}
                    <strong className="text-[var(--ink)]">{unitsToDoseResult.doseMg.toFixed(3)} mg</strong>
                  </span>
                </div>
              </div>
            )
          ) : (
            <div className="py-4 text-center text-sm text-[var(--muted)]">
              Select your concentration and syringe units above to calculate your dose
            </div>
          )
        ) : (
          /* mg-to-units result */
          doseToUnitsResult ? (
            doseToUnitsResult.exceeds ? (
              <div className="flex items-start gap-3 rounded-[5px] border border-red-200 bg-red-50 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="font-semibold text-red-700">Dose exceeds syringe capacity</p>
                  <p className="mt-1 text-sm text-red-600">
                    The calculated volume of{' '}
                    <span className="font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                      {doseToUnitsResult.ml.toFixed(3)} mL
                    </span>{' '}
                    exceeds the {activeSyringe.label} syringe. Use a larger syringe, add more BAC water, or lower your dose.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--muted)]">Draw to</p>
                    <p className="mt-0.5 flex items-baseline gap-2">
                      <span
                        className="text-4xl font-bold text-[var(--ink)]"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {doseToUnitsResult.units % 1 === 0
                          ? doseToUnitsResult.units.toFixed(0)
                          : doseToUnitsResult.units.toFixed(1)}
                      </span>
                      <span className="text-lg font-semibold text-[var(--muted)]">units</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex shrink-0 items-center gap-1.5 rounded-[5px] border border-[var(--border-color)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:bg-[var(--canvas)]"
                  >
                    {copied ? (
                      <><Check className="h-3.5 w-3.5 text-green-600" /><span className="text-green-600">Copied</span></>
                    ) : (
                      <><Share2 className="h-3.5 w-3.5" /><span>Share</span></>
                    )}
                  </button>
                </div>

                <SyringeVisualIndicator totalUnits={activeSyringe.units} doseUnits={doseToUnitsResult.units} />

                {/* RX strip for semaglutide/tirzepatide */}
                {(selectedPresetId === 'semaglutide' || selectedPresetId === 'tirzepatide') && (
                  <RxOfferStrip peptide={selectedPresetId} />
                )}

                <div className="flex flex-wrap gap-5 border-t border-[var(--canvas)] pt-4 text-sm">
                  <div>
                    <span className="text-[var(--muted)]">Volume to draw: </span>
                    <span className="font-semibold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {doseToUnitsResult.ml.toFixed(3)} mL
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--muted)]">Concentration: </span>
                    <span className="font-semibold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {concentration?.toFixed(2)} mg/mL
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-[5px] bg-[var(--canvas)] px-4 py-3 text-xs text-[var(--muted)]">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-ink)]" />
                  <span>
                    All insulin syringes are U-100:{' '}
                    <strong className="text-[var(--ink)]">1 unit = 0.01 mL</strong>. A 100-unit syringe holds 1 mL; a 50-unit syringe holds 0.5 mL; a 30-unit syringe holds 0.3 mL.
                  </span>
                </div>

                {/* Common doses table */}
                {commonDosesTable.length > 0 && (
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--ink)]">
                      Common {preset.label} doses at {concentration?.toFixed(2)} mg/mL
                    </p>
                    <div className="overflow-hidden overflow-x-auto rounded-[5px] border border-[var(--border-color)]">
                      <table className="w-full min-w-[360px] text-sm">
                        <thead>
                          <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                            <th className="px-4 py-2.5 text-left text-xs font-semibold text-[var(--muted)]">Dose (mg)</th>
                            <th className="px-4 py-2.5 text-left text-xs font-semibold text-[var(--muted)]">Dose (mcg)</th>
                            <th className="px-4 py-2.5 text-left text-xs font-semibold text-[var(--muted)]">Volume (mL)</th>
                            <th className="px-4 py-2.5 text-left text-xs font-semibold text-[var(--muted)]">Syringe units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {commonDosesTable.map((row, idx) => (
                            <tr
                              key={row.dose}
                              className={cn(
                                idx < commonDosesTable.length - 1 && 'border-b border-[var(--border-color)]',
                                doseMg === row.dose && 'bg-[var(--accent-soft)]'
                              )}
                            >
                              <td className="px-4 py-2.5 font-medium text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                                {row.dose} mg
                              </td>
                              <td className="px-4 py-2.5 text-[var(--muted)]" style={{ fontFamily: 'var(--font-mono)' }}>
                                {(row.dose * 1000).toFixed(0)} mcg
                              </td>
                              <td className="px-4 py-2.5 text-[var(--muted)]" style={{ fontFamily: 'var(--font-mono)' }}>
                                {row.ml.toFixed(3)} mL
                              </td>
                              <td className="px-4 py-2.5 font-semibold text-[var(--accent-ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                                {row.units % 1 === 0 ? row.units.toFixed(0) : row.units.toFixed(1)} units
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )
          ) : (
            <div className="py-4 text-center text-sm text-[var(--muted)]">
              Select your concentration and dose above to calculate syringe units
            </div>
          )
        )}
      </div>

      {/* ── Sticky mobile result bar ───────────────────────────────────────── */}
      {stickyResult && (
        <div className="sticky bottom-0 border-t border-[var(--border-color)] bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
          {isReverse ? (
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">{unitsValue} units =</span>
              <span className="text-xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                {unitsToDoseResult?.doseMg.toFixed(3)} mg
                <span className="ml-2 text-sm font-normal text-[var(--muted)]">
                  ({unitsToDoseResult?.ml.toFixed(3)} mL)
                </span>
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">Draw to</span>
              <span className="text-xl font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                {doseToUnitsResult?.units.toFixed(1)} units
                <span className="ml-2 text-sm font-normal text-[var(--muted)]">
                  ({doseToUnitsResult?.ml.toFixed(3)} mL)
                </span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LinkCard({ href, icon: Icon, label, desc }) {
  return (
    <a
      href={href}
      className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
        <Icon className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">{label}</p>
        <p className="mt-1 text-xs text-[var(--muted)]">{desc}</p>
      </div>
      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

function FaqAccordion({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] text-left"
        aria-expanded={open}
      >
        {question}
        <img src={faqChevronSvg} className={`h-4 w-4 shrink-0 text-[var(--muted)] transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function UnitsConverterPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* ── Hero / Breadcrumb section ─────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(180deg, var(--accent-soft) 0%, var(--canvas) 100%)',
          borderBottom: '1px solid var(--border-color)',
          padding: 'clamp(28px, 5vw, 56px) 0 clamp(40px, 6vw, 72px)',
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]">
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/">
                Home
              </a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <img src={breadcrumbChevronSvg} className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/tools">
                Tools
              </a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <img src={breadcrumbChevronSvg} className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Units Converter</span>
            </span>
          </nav>

          {/* Hero content */}
          <div className="mt-5 sm:mt-7">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-ink)',
                background: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '999px',
                padding: '6px 12px',
              }}
            >
              <img src={calculatorSvg} className="h-3.5 w-3.5" aria-hidden="true" />
              Free Conversion Tool
            </span>
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(2rem, 5.2vw, 3.25rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.005em',
                color: 'var(--ink)',
                margin: '16px 0 0',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Peptide Units Converter
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
                lineHeight: 1.6,
                color: 'var(--ink-soft)',
                marginTop: '16px',
                maxWidth: '62ch',
              }}
            >
              Convert any peptide dose between mg, mcg, mL, and insulin syringe units in seconds. Select your peptide, enter your concentration, and get the exact units to draw.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <a
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-white shadow-sm transition-all active:scale-[0.99]"
                style={{ background: 'var(--accent)' }}
                href="#converter-tool"
              >
                Jump to converter
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]"
                href="/tools/peptide-calculator"
              >
                Reconstitution calculator
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]"
                href="/tools/bac-water-calculator"
              >
                BAC water calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Converter Tool ────────────────────────────────────────────────── */}
      <section
        id="converter-tool"
        className="scroll-mt-24"
        style={{ background: 'var(--surface)', padding: 'clamp(40px, 6vw, 64px) 0' }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <UnitsConverterTool />
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--canvas)',
          borderTop: '1px solid var(--border-color)',
          padding: 'clamp(56px, 8vw, 88px) 0',
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.005em',
                color: 'var(--ink)',
                margin: 0,
                fontFamily: 'var(--font-heading)',
              }}
            >
              How peptide unit conversion works
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[var(--ink-soft)]">
              <p>
                All standard insulin syringes sold in the US are <strong className="text-[var(--ink)]">U-100</strong>, meaning the syringe holds 100 units per mL of liquid. This means <strong className="text-[var(--ink)]">1 unit = 0.01 mL</strong>, regardless of whether you're using a 0.3 mL (30-unit), 0.5 mL (50-unit), or 1.0 mL (100-unit) syringe. The only difference between syringe sizes is the maximum volume they hold.
              </p>
              <p>
                To convert a peptide dose to syringe units, you need two pieces of information: your <strong className="text-[var(--ink)]">concentration</strong> (how many mg of peptide per mL of solution) and your <strong className="text-[var(--ink)]">desired dose</strong> in mg or mcg.
              </p>

              {/* Formula box */}
              <div className="rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-ink)]">The formula</p>
                <div className="mt-3 space-y-2 text-sm text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                  <p>mL = dose (mg) ÷ concentration (mg/mL)</p>
                  <p>Units = mL × 100</p>
                </div>
                <div className="mt-5 border-t border-[var(--border-color)] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-ink)]">Example</p>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">Semaglutide 0.25 mg dose, reconstituted at 2 mg/mL:</p>
                  <div className="mt-2 space-y-1 text-sm text-[var(--ink)]" style={{ fontFamily: 'var(--font-mono)' }}>
                    <p>0.25 mg ÷ 2 mg/mL = 0.125 mL</p>
                    <p>
                      0.125 mL × 100 = <strong>12.5 units</strong>
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Your <strong className="text-[var(--ink)]">concentration</strong> is determined during reconstitution — when you add bacteriostatic water (BAC water) to your peptide vial. A 5 mg vial with 2 mL of BAC water gives a concentration of 2.5 mg/mL. A 5 mg vial with 1 mL of BAC water gives 5 mg/mL. The more water you add, the more dilute your solution (and the more units you'll draw per dose).
              </p>
              <p>
                To convert <strong className="text-[var(--ink)]">units to mg</strong> (the reverse direction), use the toggle in the tool above. The formula is: units ÷ 100 = mL; mL × concentration = mg dose. This is useful when your prescription lists a volume in units and you need to verify the mg equivalent.
              </p>
            </div>

            {/* U-100 table */}
            <div className="mt-10">
              <h3
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  margin: 0,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                U-100 insulin syringe reference
              </h3>
              <div className="mt-4 overflow-hidden rounded-[12px] border border-[var(--border-color)]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                      {['Syringe', 'Capacity', 'Max units', '1 unit ='].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-[var(--surface)]">
                    {[
                      { syringe: '0.3 mL syringe', capacity: '0.3 mL', maxUnits: '30 units', unit: '0.01 mL' },
                      { syringe: '0.5 mL syringe', capacity: '0.5 mL', maxUnits: '50 units', unit: '0.01 mL' },
                      { syringe: '1.0 mL syringe', capacity: '1.0 mL', maxUnits: '100 units', unit: '0.01 mL' },
                    ].map((row, idx, arr) => (
                      <tr key={row.syringe} className={idx < arr.length - 1 ? 'border-b border-[var(--border-color)]' : ''}>
                        <td className="px-3 py-2.5 font-medium text-[var(--ink)] sm:px-4 sm:py-3">{row.syringe}</td>
                        <td className="px-3 py-2.5 text-[var(--accent-ink)] font-semibold sm:px-4 sm:py-3" style={{ fontFamily: 'var(--font-mono)' }}>{row.capacity}</td>
                        <td className="px-3 py-2.5 text-[var(--accent-ink)] font-semibold sm:px-4 sm:py-3" style={{ fontFamily: 'var(--font-mono)' }}>{row.maxUnits}</td>
                        <td className="px-3 py-2.5 text-[var(--ink-soft)] sm:px-4 sm:py-3" style={{ fontFamily: 'var(--font-mono)' }}>{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--canvas)',
          borderTop: '1px solid var(--border-color)',
          padding: 'clamp(56px, 8vw, 88px) 0',
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[820px]">
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.005em',
              color: 'var(--ink)',
              margin: 0,
              fontFamily: 'var(--font-heading)',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular dosing guides ─────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border-color)',
          padding: 'clamp(56px, 8vw, 88px) 0',
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.005em',
              color: 'var(--ink)',
              margin: 0,
              fontFamily: 'var(--font-heading)',
            }}
          >
            Popular dosing guides
          </h2>
          <p className="mt-3 max-w-[62ch] text-[var(--ink-soft)]">
            Once you have your syringe units, dial in the protocol. These evidence-based guides cover dose ranges, titration, and timing for the most-searched peptides.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularGuides.map((g) => (
              <LinkCard key={g.label} {...g} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related tools & guides ────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--canvas)',
          borderTop: '1px solid var(--border-color)',
          padding: 'clamp(56px, 8vw, 88px) 0',
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.005em',
              color: 'var(--ink)',
              margin: 0,
              fontFamily: 'var(--font-heading)',
            }}
          >
            Related tools &amp; guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((t) => (
              <LinkCard key={t.label} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Dosing & reconstitution guides ───────────────────────────────── */}
      <section
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border-color)',
          padding: 'clamp(56px, 8vw, 88px) 0',
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.005em',
              color: 'var(--ink)',
              margin: 0,
              fontFamily: 'var(--font-heading)',
            }}
          >
            Dosing &amp; reconstitution guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dosingGuides.map((g) => (
              <LinkCard key={g.label} {...g} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Find a clinic CTA band ────────────────────────────────────────── */}
      <section style={{ background: 'var(--canvas)', padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background: 'var(--accent)',
              borderRadius: '24px',
              padding: 'clamp(28px, 5vw, 56px)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(28px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '14px',
                }}
              >
                Need a prescriber?
              </span>
              <h2
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: '#FFFFFF',
                  margin: 0,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Find a peptide-prescribing clinic
              </h2>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.6,
                  margin: '16px 0 0',
                  maxWidth: '52ch',
                }}
              >
                MyPeptideMatch connects you with licensed clinics that prescribe GLP-1 peptides, growth hormone secretagogues, and peptide therapy protocols. Compare clinics, read reviews, and get matched.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
                <a
                  href="/clinics"
                  className="inline-flex items-center gap-2 font-bold text-[15px] rounded-full no-underline transition-all hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: '#FFFFFF',
                    color: 'var(--accent-ink)',
                    padding: '12px 22px',
                    textDecoration: 'none',
                  }}
                >
                  Find a Clinic
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Medical disclaimer ────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--canvas)',
          borderTop: '1px solid var(--border-color)',
          padding: 'clamp(24px, 4vw, 40px) 0',
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <div className="flex items-start gap-3 text-xs text-[var(--muted)]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-ink)]" aria-hidden="true" />
            <p>
              <strong className="text-[var(--ink)]">Medical disclaimer:</strong>{' '}
              This tool is provided for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Peptide dosing should be supervised by a licensed healthcare provider. All peptides referenced are for research purposes in regions where they are not approved for clinical use. Always consult your prescribing physician before adjusting any dose.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
