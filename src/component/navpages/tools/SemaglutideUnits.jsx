import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  AlertTriangle,
  ArrowLeftRight,
  ArrowRight,
  Beaker,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FlaskConical,
  Info,
  Share2,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import SyringeVisualIndicator from './SyringeVisualIndicator.jsx';

/* ------------------------------------------------------------------ */
/* CONFIG & PRESETS                                                    */
/* ------------------------------------------------------------------ */

const SYRINGES = [
  { label: '0.3 mL', sublabel: '30 units', value: 0.3, units: 30 },
  { label: '0.5 mL', sublabel: '50 units', value: 0.5, units: 50 },
  { label: '1.0 mL', sublabel: '100 units', value: 1.0, units: 100 },
];

const PRESETS = [
  {
    id: 'semaglutide',
    label: 'Semaglutide',
    slug: 'semaglutide',
    concentrations: [0.5, 1, 2, 2.5],
    defaultConc: 2,
    commonDoses: [0.25, 0.5, 1, 1.7, 2.4],
    defaultDose: 0.25,
    doseUnit: 'mg',
    vialSizes: [2, 3, 5, 10],
    defaultVial: 5,
    commonUnits: [10, 12.5, 25, 40, 50, 100],
  },
  {
    id: 'tirzepatide',
    label: 'Tirzepatide',
    slug: 'tirzepatide',
    concentrations: [5, 10, 15],
    defaultConc: 5,
    commonDoses: [2.5, 5, 7.5, 10, 12.5, 15],
    defaultDose: 2.5,
    doseUnit: 'mg',
    vialSizes: [5, 10, 15],
    defaultVial: 10,
    commonUnits: [25, 50, 75, 100, 150],
  },
  {
    id: 'retatrutide',
    label: 'Retatrutide',
    slug: 'retatrutide',
    concentrations: [2, 5, 10],
    defaultConc: 5,
    commonDoses: [1, 2, 4, 6, 8, 12],
    defaultDose: 2,
    doseUnit: 'mg',
    vialSizes: [5, 10],
    defaultVial: 5,
    commonUnits: [20, 40, 80, 120, 160],
  },
  {
    id: 'custom',
    label: 'Custom / Other',
    slug: null,
    concentrations: [1, 2, 5, 10],
    defaultConc: 2,
    commonDoses: [0.25, 0.5, 1, 2],
    defaultDose: 0.5,
    doseUnit: 'mg',
    vialSizes: [5, 10],
    defaultVial: 5,
    commonUnits: [10, 20, 25, 50, 100],
  },
];

const BAC_WATER_OPTIONS = [1, 2, 2.5, 3, 5];

const RX_OFFERS = {
  semaglutide: {
    vendorName: 'Collective',
    peptideName: 'semaglutide',
    price: 59,
    priceNote: 'Same price any dose · + $199/yr membership, 21 days free',
    url: 'https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876',
    facts: [
      'Same price at every dose',
      'Unlimited doctor messaging',
      '2-day express shipping',
      'Refund if not approved',
    ],
    excludedStates: 'Alabama, Arkansas, California, Louisiana, Massachusetts, Mississippi and Washington',
  },
  tirzepatide: {
    vendorName: 'Collective',
    peptideName: 'tirzepatide',
    price: 69,
    priceNote: 'Same price any dose · + $199/yr membership, 21 days free',
    url: 'https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876',
    facts: [
      'Same price at every dose',
      'Unlimited doctor messaging',
      '2-day express shipping',
      'Refund if not approved',
    ],
    excludedStates: 'Alabama, Arkansas, California, Louisiana, Massachusetts, Mississippi and Washington',
  },
};

/* ------------------------------------------------------------------ */
/* HELPER FUNCTIONS & COMPONENTS                                      */
/* ------------------------------------------------------------------ */

function getInitialParams(defaultPreset) {
  if (typeof window === 'undefined') {
    const p = PRESETS.find((item) => item.id === defaultPreset) ?? PRESETS[0];
    return {
      direction: 'mg-to-units',
      presetId: defaultPreset,
      conc: p.defaultConc,
      customConc: '',
      isCustomConc: false,
      dose: p.defaultDose,
      customDose: '',
      isCustomDose: false,
      doseUnit: p.doseUnit,
      units: p.commonUnits[0],
      customUnits: '',
      isCustomUnits: false,
      syringeIdx: 2,
    };
  }

  const params = new URLSearchParams(window.location.search);
  const pParam = params.get('peptide');
  const concParam = params.get('conc');
  const doseParam = params.get('dose');
  const duParam = params.get('du');
  const syringeParam = params.get('syringe');
  const dirParam = params.get('dir');
  const unitsParam = params.get('units');

  const initialId = pParam && PRESETS.find((p) => p.id === pParam) ? pParam : defaultPreset;
  const p = PRESETS.find((item) => item.id === initialId) ?? PRESETS[0];

  const direction = dirParam === 'units-to-mg' ? 'units-to-mg' : 'mg-to-units';
  let conc = p.defaultConc;
  let customConc = '';
  let isCustomConc = false;

  if (concParam) {
    const val = parseFloat(concParam);
    if (!isNaN(val) && val > 0) {
      if (p.concentrations.includes(val)) {
        conc = val;
      } else {
        isCustomConc = true;
        customConc = concParam;
        conc = null;
      }
    }
  }

  let dose = p.defaultDose;
  let customDose = '';
  let isCustomDose = false;

  if (doseParam) {
    const val = parseFloat(doseParam);
    if (!isNaN(val) && val > 0) {
      if (p.commonDoses.includes(val)) {
        dose = val;
      } else {
        isCustomDose = true;
        customDose = doseParam;
        dose = null;
      }
    }
  }

  let units = p.commonUnits[0];
  let customUnits = '';
  let isCustomUnits = false;

  if (unitsParam) {
    const val = parseFloat(unitsParam);
    if (!isNaN(val) && val > 0) {
      if (p.commonUnits.includes(val)) {
        units = val;
      } else {
        isCustomUnits = true;
        customUnits = unitsParam;
        units = null;
      }
    }
  }

  const doseUnit = duParam === 'mg' || duParam === 'mcg' ? duParam : p.doseUnit;
  let syringeIdx = 2;
  if (syringeParam) {
    const sIdx = SYRINGES.findIndex((s) => String(s.value) === syringeParam);
    if (sIdx >= 0) syringeIdx = sIdx;
  }

  return {
    direction,
    presetId: initialId,
    conc,
    customConc,
    isCustomConc,
    dose,
    customDose,
    isCustomDose,
    doseUnit,
    units,
    customUnits,
    isCustomUnits,
    syringeIdx,
  };
}

function SyringeSvg({ size }) {
  const s = { sm: 80, md: 110, lg: 150 }[size];
  const a = s + 70;
  return (
    <svg viewBox={`0 0 ${a} 28`} className="w-full" aria-hidden="true">
      <rect x="0" y={5} width="5" height="18" rx="2" fill="#94a3b8" />
      <rect x="5" y={12} width="18" height="4" rx="1" fill="#cbd5e1" />
      <rect x="23" y={5} width={s} height="18" rx="3" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
      {Array.from({ length: 11 }, (_, i) => {
        const r = 23 + (s / 10) * i;
        const n = i % 5 === 0;
        return (
          <line
            key={i}
            x1={r}
            y1={5}
            x2={r}
            y2={5 + (n ? 7 : 4)}
            stroke="#94a3b8"
            strokeWidth={n ? '1' : '0.5'}
          />
        );
      })}
      <path
        d={`M ${23 + s} 9 L ${23 + s + 14} 12 L ${23 + s + 14} 16 L ${23 + s} 19 Z`}
        fill="#cbd5e1"
        stroke="#94a3b8"
        strokeWidth="0.5"
      />
      <line
        x1={23 + s + 14}
        y1={14}
        x2={a}
        y2={14}
        stroke="#94a3b8"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SyringeVisualBar = SyringeVisualIndicator;

function StepHeader({ step, title, subtitle }) {
  return (
    <div className="mb-3 flex items-start gap-3 sm:hidden">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent-ink)]">
        {step}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
        {subtitle && (
          <p className="mt-0.5 text-xs leading-relaxed text-[var(--muted)]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function RxResultStrip({ peptide }) {
  const offer = RX_OFFERS[peptide];
  if (!offer) return null;

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3 rounded-[12px] bg-[#FFFBE0] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ink)]" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm text-[var(--ink)]">
            <span className="font-semibold">Want this prescribed?</span> Licensed doctors, compounded {offer.peptideName} from ${offer.price}/mo.
          </p>
        </div>
        <a
          href={offer.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] font-semibold leading-[24px] text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
        >
          See if I qualify
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
      <p className="mt-2 text-[11px] text-[var(--muted)] leading-[18px]">
        Affiliate link · {offer.vendorName} · {offer.priceNote} · Compounded medications are not FDA-approved
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* INTERACTIVE CONVERTER TOOL                                         */
/* ------------------------------------------------------------------ */

function UnitsConverterTool({ defaultPreset = 'semaglutide', mode = 'converter' }) {
  const isBacMode = mode === 'bac-water';
  const [initial] = useState(() => getInitialParams(defaultPreset));

  const [direction, setDirection] = useState(initial.direction);
  const isUnitsToMg = direction === 'units-to-mg';

  const [selectedPresetId, setSelectedPresetId] = useState(initial.presetId);
  const [isPresetOpen, setIsPresetOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activePreset = PRESETS.find((p) => p.id === selectedPresetId) ?? PRESETS[0];

  const [concentration, setConcentration] = useState(initial.conc);
  const [customConc, setCustomConc] = useState(initial.customConc);
  const [isCustomConc, setIsCustomConc] = useState(initial.isCustomConc);

  const [dose, setDose] = useState(initial.dose);
  const [customDose, setCustomDose] = useState(initial.customDose);
  const [isCustomDose, setIsCustomDose] = useState(initial.isCustomDose);
  const [doseUnit, setDoseUnit] = useState(initial.doseUnit);

  const [selectedUnit, setSelectedUnit] = useState(initial.units);
  const [customUnits, setCustomUnits] = useState(initial.customUnits);
  const [isCustomUnits, setIsCustomUnits] = useState(initial.isCustomUnits);

  const [selectedSyringeIdx, setSelectedSyringeIdx] = useState(initial.syringeIdx);
  const [vialMg, setVialMg] = useState(activePreset.defaultVial);
  const [bacWaterMl, setBacWaterMl] = useState(1);
  const [useBacWater, setUseBacWater] = useState(isBacMode);
  const [copied, setCopied] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isPresetOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsPresetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPresetOpen]);

  // Preset switch handler
  const handlePresetSelect = useCallback((presetId) => {
    const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];
    setSelectedPresetId(presetId);
    setConcentration(preset.defaultConc);
    setIsCustomConc(false);
    setCustomConc('');
    setDose(preset.defaultDose);
    setIsCustomDose(false);
    setCustomDose('');
    setDoseUnit(preset.doseUnit);
    setSelectedUnit(preset.commonUnits[0]);
    setIsCustomUnits(false);
    setCustomUnits('');
    setVialMg(preset.defaultVial);
    setIsPresetOpen(false);
  }, []);

  const selectedSyringe = SYRINGES[selectedSyringeIdx];

  // Effective concentration calculation
  const effectiveConc = useMemo(() => {
    if (useBacWater) {
      return vialMg && bacWaterMl && vialMg > 0 && bacWaterMl > 0 ? vialMg / bacWaterMl : null;
    }
    return isCustomConc ? (customConc ? parseFloat(customConc) : null) : concentration;
  }, [useBacWater, vialMg, bacWaterMl, isCustomConc, customConc, concentration]);

  // Effective dose (mg) calculation
  const effectiveDoseMg = useMemo(() => {
    const raw = isCustomDose ? (customDose ? parseFloat(customDose) : null) : dose;
    if (raw === null || isNaN(raw)) return null;
    return doseUnit === 'mcg' ? raw / 1000 : raw;
  }, [isCustomDose, customDose, dose, doseUnit]);

  // Mg to units result
  const resultMgToUnits = useMemo(() => {
    if (!effectiveConc || !effectiveDoseMg || effectiveConc <= 0 || effectiveDoseMg <= 0) return null;
    const ml = effectiveDoseMg / effectiveConc;
    return {
      ml,
      units: ml * 100,
      exceeds: ml > selectedSyringe.value,
    };
  }, [effectiveConc, effectiveDoseMg, selectedSyringe.value]);

  // Effective units calculation
  const effectiveUnits = useMemo(() => {
    const raw = isCustomUnits ? (customUnits ? parseFloat(customUnits) : null) : selectedUnit;
    if (raw === null || isNaN(raw)) return null;
    return raw;
  }, [isCustomUnits, customUnits, selectedUnit]);

  // Units to mg result
  const resultUnitsToMg = useMemo(() => {
    if (!effectiveConc || !effectiveUnits || effectiveConc <= 0 || effectiveUnits <= 0) return null;
    const ml = effectiveUnits / 100;
    const doseMg = ml * effectiveConc;
    return {
      ml,
      doseMg,
      doseMcg: doseMg * 1000,
      exceeds: ml > selectedSyringe.value,
    };
  }, [effectiveConc, effectiveUnits, selectedSyringe.value]);

  // Common doses table for current concentration
  const commonDosesTableData = useMemo(() => {
    if (!effectiveConc || effectiveConc <= 0) return [];
    return activePreset.commonDoses.map((d) => {
      const ml = d / effectiveConc;
      return { dose: d, ml, units: ml * 100 };
    });
  }, [activePreset.commonDoses, effectiveConc]);

  // Share link handler
  const handleShare = useCallback(() => {
    const p = new URLSearchParams();
    p.set('peptide', selectedPresetId);
    p.set('dir', direction);
    if (effectiveConc) p.set('conc', String(effectiveConc));
    if (direction === 'mg-to-units' && effectiveDoseMg) p.set('dose', String(effectiveDoseMg));
    if (direction === 'units-to-mg' && effectiveUnits) p.set('units', String(effectiveUnits));
    p.set('du', doseUnit);
    p.set('syringe', String(selectedSyringe.value));

    const searchStr = p.toString();
    const fullUrl = `${window.location.origin}${window.location.pathname}?${searchStr}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
    window.history.replaceState(null, '', `${window.location.pathname}?${searchStr}`);
  }, [selectedPresetId, direction, effectiveConc, effectiveDoseMg, effectiveUnits, doseUnit, selectedSyringe.value]);

  // Mobile sticky summary data
  const mobileResult = isUnitsToMg
    ? resultUnitsToMg && !resultUnitsToMg.exceeds
      ? { units: effectiveUnits ?? 0, ml: resultUnitsToMg.ml }
      : null
    : resultMgToUnits && !resultMgToUnits.exceeds
      ? { units: resultMgToUnits.units, ml: resultMgToUnits.ml }
      : null;

  return (
    <div className="rounded-[5px] border border-[var(--border-color)] bg-white shadow-sm">
      {/* STEP 1: PEPTIDE & DIRECTION */}
      <div className="border-b border-[var(--border-color)] p-4 sm:p-8">
        <StepHeader
          step={1}
          title="Choose your peptide + conversion direction"
          subtitle="Pick a preset (optional), then choose dose → units or units → mg."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[var(--ink)]">
              Peptide preset
              <span className="ml-1 font-normal text-[var(--muted)]">(sets common concentrations)</span>
            </p>
            <div className="relative mt-2 sm:max-w-xs" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsPresetOpen(!isPresetOpen)}
                className="flex w-full items-center justify-between rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2.5 text-sm text-[var(--ink)] transition-all"
              >
                <span>{activePreset.label}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[var(--muted)] transition-transform ${isPresetOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isPresetOpen && (
                <div className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-[5px] border border-[var(--border-color)] bg-white shadow-lg sm:max-w-xs">
                  {PRESETS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handlePresetSelect(p.id)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--canvas)] ${
                        selectedPresetId === p.id
                          ? 'bg-[var(--canvas)] font-medium text-[var(--accent-ink)]'
                          : 'text-[var(--ink)]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

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
                  className={`flex items-center gap-1.5 px-4 py-2 transition-colors ${
                    direction === value
                      ? 'bg-[var(--accent)] text-white'
                      : 'bg-white text-[var(--muted)] hover:bg-[var(--canvas)]'
                  }`}
                >
                  {value === 'units-to-mg' && <ArrowLeftRight className="h-3.5 w-3.5" />}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activePreset.slug && (
          <div className="mt-3">
            <a
              href={`/peptides/${activePreset.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-ink)] hover:underline"
            >
              View {activePreset.label} dosing guide →
            </a>
          </div>
        )}
      </div>

      {/* BAC WATER HELPER (OPTIONAL TOGGLE) */}
      {(isBacMode || useBacWater) && (
        <div className="border-b border-[var(--border-color)] bg-[var(--accent-soft)] p-4 sm:p-8">
          <StepHeader
            step={2}
            title="Set your concentration"
            subtitle="Use the BAC helper (optional) or enter concentration directly."
          />
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-semibold text-[var(--ink)]">
              Bacteriostatic water reconstitution helper
            </p>
            {!isBacMode && (
              <button
                type="button"
                onClick={() => setUseBacWater(false)}
                className="text-xs text-[var(--muted)] hover:text-[var(--ink)] hover:underline"
              >
                Enter concentration directly
              </button>
            )}
          </div>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Select your vial size and BAC water volume to calculate your concentration automatically.
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--ink)]">Vial size (mg)</p>
              <div className="flex flex-wrap gap-1.5">
                {activePreset.vialSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setVialMg(size)}
                    className={`rounded-[5px] border px-3 py-1.5 text-sm font-medium transition-all ${
                      vialMg === size
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)]'
                    }`}
                  >
                    {size} mg
                  </button>
                ))}
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="Other"
                  value={vialMg === null || activePreset.vialSizes.includes(vialMg) ? '' : String(vialMg)}
                  onChange={(e) => {
                    const parsed = parseFloat(e.target.value);
                    setVialMg(isNaN(parsed) ? null : parsed);
                  }}
                  className="w-24 rounded-[5px] border border-[var(--border-color)] bg-white px-3 py-1.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--ink)]">BAC water added (mL)</p>
              <div className="flex flex-wrap gap-1.5">
                {BAC_WATER_OPTIONS.map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setBacWaterMl(vol)}
                    className={`rounded-[5px] border px-3 py-1.5 text-sm font-medium transition-all ${
                      bacWaterMl === vol
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)]'
                    }`}
                  >
                    {vol} mL
                  </button>
                ))}
              </div>
            </div>
          </div>

          {effectiveConc && effectiveConc > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2.5">
              <Info className="h-4 w-4 shrink-0 text-[var(--accent-ink)]" />
              <span className="text-sm text-[var(--ink)]">
                Concentration:{' '}
                <span className="font-bold" >
                  {effectiveConc.toFixed(2)} mg/mL
                </span>
              </span>
            </div>
          )}
        </div>
      )}

      {/* STEP 2 & STEP 3 ROW */}
      <div className="flex flex-col border-b border-[var(--border-color)] lg:flex-row">
        {/* STEP 2: CONCENTRATION */}
        <div className="flex-1 border-b border-[var(--border-color)] p-4 sm:p-8 lg:border-b-0 lg:border-r">
          {!useBacWater && (
            <StepHeader
              step={2}
              title="Set your concentration"
              subtitle="Select a common mg/mL or enter a custom concentration."
            />
          )}
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-[var(--ink)]">Concentration (mg/mL)</p>
            {!isBacMode && !useBacWater && (
              <button
                type="button"
                onClick={() => {
                  setUseBacWater(true);
                  setIsCustomConc(false);
                }}
                className="text-xs text-[var(--accent-ink)] hover:underline"
              >
                Calculate from BAC water
              </button>
            )}
          </div>

          {useBacWater ? (
            <p className="mt-3 text-sm text-[var(--muted)]">
              Concentration calculated from the BAC water helper above.
            </p>
          ) : (
            <div className="mt-3 space-y-3">
              <div className="flex flex-wrap gap-2">
                {activePreset.concentrations.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setConcentration(c);
                      setIsCustomConc(false);
                    }}
                    className={`rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                      concentration !== c || isCustomConc
                        ? 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                        : 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                    }`}
                  >
                    {c} mg/mL
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setIsCustomConc(true);
                    setConcentration(null);
                  }}
                  className={`rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                    isCustomConc
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                      : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                  }`}
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
                    value={customConc}
                    onChange={(e) => setCustomConc(e.target.value)}
                    placeholder="Enter mg/mL"
                    className="w-full rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2 pr-16 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">
                    mg/mL
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* STEP 3: DOSE OR UNITS INPUT */}
        <div className="flex-1 p-4 sm:p-8">
          <StepHeader
            step={3}
            title={isUnitsToMg ? 'Enter syringe units' : 'Enter your dose'}
            subtitle={
              isUnitsToMg
                ? 'Enter the units you drew (U-100).'
                : 'Select a common dose or enter a custom value.'
            }
          />

          {isUnitsToMg ? (
            <>
              <p className="text-sm font-semibold text-[var(--ink)]">Syringe units drawn</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">Enter the units you see on your syringe</p>
              <div className="mt-3 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {activePreset.commonUnits.map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => {
                        setSelectedUnit(u);
                        setIsCustomUnits(false);
                      }}
                      className={`rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                        selectedUnit !== u || isCustomUnits
                          ? 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                          : 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                      }`}
                    >
                      {u} units
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomUnits(true);
                      setSelectedUnit(null);
                    }}
                    className={`rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                      isCustomUnits
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                    }`}
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
                      value={customUnits}
                      onChange={(e) => setCustomUnits(e.target.value)}
                      placeholder="Enter units"
                      className="w-full rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2 pr-16 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">
                      units
                    </span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-[var(--ink)]">Desired dose</p>
                <div className="flex overflow-hidden rounded-[5px] border border-[var(--border-color)] text-xs font-medium">
                  {['mg', 'mcg'].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setDoseUnit(u)}
                      className={`px-2.5 py-1 transition-colors ${
                        doseUnit === u
                          ? 'bg-[var(--accent)] text-white'
                          : 'bg-white text-[var(--muted)] hover:bg-[var(--canvas)]'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {activePreset.commonDoses.map((d) => {
                    const displayDose = doseUnit === 'mcg' ? d * 1000 : d;
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setDose(d);
                          setIsCustomDose(false);
                        }}
                        className={`rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                          dose !== d || isCustomDose
                            ? 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                            : 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                        }`}
                      >
                        {displayDose % 1 === 0 ? displayDose.toFixed(0) : displayDose} {doseUnit}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomDose(true);
                      setDose(null);
                    }}
                    className={`rounded-[5px] border px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                      isCustomDose
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm'
                        : 'border-[var(--border-color)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--canvas)]'
                    }`}
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
                      value={customDose}
                      onChange={(e) => setCustomDose(e.target.value)}
                      placeholder={`Enter ${doseUnit}`}
                      className="w-full rounded-[5px] border border-[var(--border-color)] bg-white px-4 py-2 pr-14 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">
                      {doseUnit}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* STEP 4: SYRINGE SELECTION */}
      <div className="border-b border-[var(--border-color)] p-4 sm:p-8">
        <StepHeader
          step={4}
          title="Select your syringe size"
          subtitle="All insulin syringes are U-100; syringe size only changes max capacity."
        />
        <p className="text-sm font-semibold text-[var(--ink)]">Insulin syringe size</p>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {SYRINGES.map((syringe, sIdx) => (
            <button
              key={syringe.value}
              type="button"
              onClick={() => setSelectedSyringeIdx(sIdx)}
              className={`flex flex-col gap-2 rounded-[5px] border-2 px-4 py-3 text-left transition-all duration-150 ${
                selectedSyringeIdx === sIdx
                  ? 'border-[var(--accent)] bg-[var(--accent-soft)] shadow-sm'
                  : 'border-[var(--border-color)] bg-white hover:bg-[var(--canvas)]'
              }`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-[var(--ink)]">{syringe.label}</span>
                <span className="text-xs text-[var(--muted)]">· {syringe.sublabel}</span>
              </div>
              <SyringeSvg size={sIdx === 0 ? 'sm' : sIdx === 1 ? 'md' : 'lg'} />
            </button>
          ))}
        </div>
      </div>

      {/* STEP 5: RESULTS PANEL */}
      <div className="p-4 sm:p-8">
        <StepHeader step={5} title="Your result" subtitle="Shareable link available." />

        {isUnitsToMg ? (
          resultUnitsToMg ? (
            resultUnitsToMg.exceeds ? (
              <div className="flex items-start gap-3 rounded-[5px] border border-red-200 bg-red-50 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="font-semibold text-red-700">Units exceed selected syringe capacity</p>
                  <p className="mt-1 text-sm text-red-600">
                    {effectiveUnits} units = {resultUnitsToMg.ml.toFixed(3)} mL, which exceeds your{' '}
                    {selectedSyringe.label} syringe. Select a larger syringe or enter fewer units.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--muted)]">{effectiveUnits} units on your syringe equals</p>
                    <p className="mt-0.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span>
                        <span className="text-4xl font-bold text-[var(--ink)]" >
                          {resultUnitsToMg.doseMg % 1 === 0
                            ? resultUnitsToMg.doseMg.toFixed(0)
                            : resultUnitsToMg.doseMg.toFixed(3)}
                        </span>
                        <span className="ml-1 text-lg font-semibold text-[var(--muted)]">mg</span>
                      </span>
                      <span className="text-sm text-[var(--muted)]">
                        (
                        {resultUnitsToMg.doseMcg % 1 === 0
                          ? resultUnitsToMg.doseMcg.toFixed(0)
                          : resultUnitsToMg.doseMcg.toFixed(1)}{' '}
                        mcg)
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex shrink-0 items-center gap-1.5 rounded-[5px] border border-[var(--border-color)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:bg-[var(--canvas)]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-600" />
                        <span className="text-green-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>

                <SyringeVisualBar totalUnits={selectedSyringe.units} doseUnits={effectiveUnits ?? 0} />

                <div className="flex flex-wrap gap-5 border-t border-[var(--canvas)] pt-4 text-sm">
                  <div>
                    <span className="text-[var(--muted)]">Volume: </span>
                    <span className="font-semibold text-[var(--ink)]" >
                      {resultUnitsToMg.ml.toFixed(3)} mL
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--muted)]">Concentration: </span>
                    <span className="font-semibold text-[var(--ink)]" >
                      {effectiveConc?.toFixed(2)} mg/mL
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-[5px] bg-[var(--canvas)] px-4 py-3 text-xs text-[var(--muted)]">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-ink)]" />
                  <span>
                    Formula: {effectiveUnits} units ÷ 100 = {resultUnitsToMg.ml.toFixed(3)} mL ×{' '}
                    {effectiveConc?.toFixed(2)} mg/mL ={' '}
                    <strong className="text-[var(--ink)]">{resultUnitsToMg.doseMg.toFixed(3)} mg</strong>
                  </span>
                </div>
              </div>
            )
          ) : (
            <div className="py-4 text-center text-sm text-[var(--muted)]">
              Select your concentration and syringe units above to calculate your dose
            </div>
          )
        ) : resultMgToUnits ? (
          resultMgToUnits.exceeds ? (
            <div className="flex items-start gap-3 rounded-[5px] border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-red-700">Dose exceeds syringe capacity</p>
                <p className="mt-1 text-sm text-red-600">
                  The calculated volume of{' '}
                  <span  className="font-semibold">
                    {resultMgToUnits.ml.toFixed(3)} mL
                  </span>{' '}
                  exceeds the {selectedSyringe.label} syringe. Use a larger syringe, add more BAC water, or lower your dose.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--muted)]">Draw to</p>
                  <p className="mt-0.5 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[var(--ink)]" >
                      {resultMgToUnits.units % 1 === 0
                        ? resultMgToUnits.units.toFixed(0)
                        : resultMgToUnits.units.toFixed(1)}
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
                    <>
                      <Check className="h-3.5 w-3.5 text-green-600" />
                      <span className="text-green-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

              <SyringeVisualBar totalUnits={selectedSyringe.units} doseUnits={resultMgToUnits.units} />

              {(selectedPresetId === 'semaglutide' || selectedPresetId === 'tirzepatide') && (
                <RxResultStrip peptide={selectedPresetId} />
              )}

              <div className="flex flex-wrap gap-5 border-t border-[var(--canvas)] pt-4 text-sm">
                <div>
                  <span className="text-[var(--muted)]">Volume to draw: </span>
                  <span className="font-semibold text-[var(--ink)]" >
                    {resultMgToUnits.ml.toFixed(3)} mL
                  </span>
                </div>
                <div>
                  <span className="text-[var(--muted)]">Concentration: </span>
                  <span className="font-semibold text-[var(--ink)]" >
                    {effectiveConc?.toFixed(2)} mg/mL
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 rounded-[5px] bg-[var(--canvas)] px-4 py-3 text-xs text-[var(--muted)]">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-ink)]" />
                <span>
                  All insulin syringes are U-100:{' '}
                  <strong className="text-[var(--ink)]">1 unit = 0.01 mL</strong>. A 100-unit syringe holds 1 mL; a
                  50-unit syringe holds 0.5 mL; a 30-unit syringe holds 0.3 mL.
                </span>
              </div>

              {commonDosesTableData.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-semibold text-[var(--ink)]">
                    Common {activePreset.label} doses at {effectiveConc?.toFixed(2)} mg/mL
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
                        {commonDosesTableData.map((row, idx) => (
                          <tr
                            key={row.dose}
                            className={`${idx < commonDosesTableData.length - 1 ? 'border-b border-[var(--border-color)]' : ''} ${
                              effectiveDoseMg === row.dose ? 'bg-[var(--accent-soft)]' : ''
                            }`}
                          >
                            <td className="px-4 py-2.5 font-medium text-[var(--ink)]" >
                              {row.dose} mg
                            </td>
                            <td className="px-4 py-2.5 text-[var(--muted)]" >
                              {(row.dose * 1000).toFixed(0)} mcg
                            </td>
                            <td className="px-4 py-2.5 text-[var(--muted)]" >
                              {row.ml.toFixed(3)} mL
                            </td>
                            <td className="px-4 py-2.5 font-semibold text-[var(--accent-ink)]" >
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
        )}
      </div>

      {/* MOBILE STICKY SUMMARY BAR */}
      {mobileResult && (
        <div className="sticky bottom-0 border-t border-[var(--border-color)] bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
          {isUnitsToMg ? (
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">{effectiveUnits} units =</span>
              <span className="text-xl font-bold text-[var(--ink)]" >
                {resultUnitsToMg?.doseMg.toFixed(3)} mg
                <span className="ml-2 text-sm font-normal text-[var(--muted)]">
                  ({resultUnitsToMg?.ml.toFixed(3)} mL)
                </span>
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">Draw to</span>
              <span className="text-xl font-bold text-[var(--ink)]" >
                {resultMgToUnits?.units.toFixed(1)} units
                <span className="ml-2 text-sm font-normal text-[var(--muted)]">
                  ({resultMgToUnits?.ml.toFixed(3)} mL)
                </span>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */

export default function SemaglutideUnits() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      {/* SECTION 1: HERO & BREADCRUMB */}
      <section className="bg-gradient-to-b from-[var(--accent-soft)] to-[var(--canvas)] border-b border-[var(--border-color)] pt-[clamp(28px,5vw,56px)] pb-[clamp(40px,6vw,72px)] px-0">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]">
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none" href="/">
                Home
              </a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" />
              <a className="max-w-[120px] truncate transition-colors hover:text-[#1F6CD6] sm:max-w-none" href="/tools">
                Tools
              </a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" />
              <span className="max-w-[140px] truncate font-medium text-[#333333] sm:max-w-none">
                Semaglutide Units Converter
              </span>
              )
            </span>
          </nav>

          <div className="mt-5 sm:mt-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[var(--accent-ink)] bg-[var(--surface)] border border-[var(--border-color)] rounded-full px-3 py-1.5">
              <Calculator className="h-3.5 w-3.5" />
              Semaglutide Dosing Tool
            </span>

            <h1 className="font-heading text-[clamp(2rem,5.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.005em] text-[var(--ink)] mt-4">
              Semaglutide Units Converter
            </h1>

            <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.6] text-[var(--ink-soft)] mt-4 max-w-[62ch]">
              Convert semaglutide doses from mg to insulin syringe units instantly. Enter your vial concentration and desired dose to get the exact number of units to draw — no guesswork.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 font-semibold text-white shadow-sm transition-all active:scale-[0.99]"
                href="#sema-units-tool"
              >
                Jump to converter
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]"
                href="/peptides/semaglutide"
              >
                Dosing guide
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]"
                href="/tools/titration-calculator?peptide=semaglutide"
              >
                Titration schedule
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]"
                href="/tools/peptide-calculator?peptide=semaglutide"
              >
                Reconstitution calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CONVERTER TOOL & TELEHEALTH PARTNER */}
      <section
        id="sema-units-tool"
        className="scroll-mt-24 bg-[var(--surface)] py-[clamp(40px,6vw,64px)]"
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <UnitsConverterTool defaultPreset="semaglutide" mode="converter" />

          {/* TELEHEALTH PARTNER CARD */}
          <aside
            aria-label="Get semaglutide prescribed online"
            className="mt-8 overflow-hidden rounded-[12px] border border-[var(--border-strong)] bg-[var(--surface)] shadow-[0_6px_24px_rgba(28,37,34,0.08)]"
          >
            <div className="flex items-center gap-2 border-b border-[var(--border-color)] bg-[var(--accent-soft)] px-5 py-2.5 text-xs font-semibold text-[var(--accent-ink)] sm:px-6">
              <ShieldCheck className="h-4 w-4" />
              Licensed US doctors · Our telehealth partner
            </div>
            <div className="grid gap-6 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
              <div>
                <p className="text-lg font-semibold text-[var(--ink)]">
                  Prefer a prescription from a licensed provider?
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                  Collective’s doctors can prescribe compounded semaglutide after a quick online health review.
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-[var(--ink-soft)] sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    Same price at every dose
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    Unlimited doctor messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    2-day express shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    Refund if not approved
                  </li>
                </ul>
              </div>
              <div className="rounded-[12px] bg-[var(--canvas)] p-4 text-center sm:w-[240px]">
                <p className="text-xs text-[var(--muted)]">As low as</p>
                <p className="text-3xl font-bold text-[var(--ink)]">
                  $59<span className="text-base font-medium text-[var(--muted)]">/mo</span>
                </p>
                <p className="mb-3 text-xs text-[var(--muted)]">
                  Same price any dose · + $199/yr membership, 21 days free
                </p>
                <a
                  href="https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] leading-[24px] font-semibold text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
                >
                  See if I qualify
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-6">
              <p className="text-xs text-[var(--muted)]">
                Not available in Alabama, Arkansas, California, Louisiana, Massachusetts, Mississippi and Washington.
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-[var(--muted)]">
                Affiliate link: we may earn a commission at no cost to you. Compounded medications are not FDA-approved, and a provider decides whether treatment is right for you.{' '}
                <a className="underline hover:text-[var(--accent-ink)]" href="/affiliate-disclosure">
                  Affiliate disclosure
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION 3: TABLES (CHARTS) */}
      <section className="bg-[var(--canvas)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* TABLE 1: SEMAGLUTIDE UNITS CHART */}
            <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
              Semaglutide units chart
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Syringe units for common semaglutide doses across typical reconstitution concentrations. All values assume a standard U-100 insulin syringe (1 unit = 0.01 mL).
            </p>

            <div className="mt-6 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <table className="w-full min-w-[500px] text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                      Dose
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                      0.5 mg/mL
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                      1 mg/mL
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                      2 mg/mL
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                      2.5 mg/mL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border-color)]">
                    <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3">
                      0.25 mg <span className="font-normal text-[var(--muted)]">(250 mcg)</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">50 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.500 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">25 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.250 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">12.5 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.125 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">10 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.100 mL</span>
                    </td>
                  </tr>

                  <tr className="border-b border-[var(--border-color)]">
                    <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3">
                      0.5 mg <span className="font-normal text-[var(--muted)]">(500 mcg)</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">100 units</span>
                      <span className="block text-xs text-[var(--muted)]">1.000 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">50 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.500 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">25 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.250 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">20 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.200 mL</span>
                    </td>
                  </tr>

                  <tr className="border-b border-[var(--border-color)]">
                    <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3">
                      1 mg <span className="font-normal text-[var(--muted)]">(1000 mcg)</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">200 units</span>
                      <span className="block text-xs text-[var(--muted)]">2.000 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">100 units</span>
                      <span className="block text-xs text-[var(--muted)]">1.000 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">50 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.500 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">40 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.400 mL</span>
                    </td>
                  </tr>

                  <tr className="border-b border-[var(--border-color)]">
                    <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3">
                      1.7 mg <span className="font-normal text-[var(--muted)]">(1700 mcg)</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">340 units</span>
                      <span className="block text-xs text-[var(--muted)]">3.400 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">170 units</span>
                      <span className="block text-xs text-[var(--muted)]">1.700 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">85 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.850 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">68 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.680 mL</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3">
                      2.4 mg <span className="font-normal text-[var(--muted)]">(2400 mcg)</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">480 units</span>
                      <span className="block text-xs text-[var(--muted)]">4.800 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">240 units</span>
                      <span className="block text-xs text-[var(--muted)]">2.400 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">120 units</span>
                      <span className="block text-xs text-[var(--muted)]">1.200 mL</span>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3" >
                      <span className="font-semibold text-[var(--accent-ink)]">96 units</span>
                      <span className="block text-xs text-[var(--muted)]">0.960 mL</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-[var(--muted)]">
              Concentration is set at reconstitution: divide vial size (mg) by BAC water added (mL). E.g., 5 mg vial + 2 mL BAC water = 2.5 mg/mL.
            </p>

            {/* TABLE 2: SEMAGLUTIDE UNITS TO MG CHART */}
            <div className="mt-12">
              <h3 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                Semaglutide units to mg chart
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Already know how many units you drew? Use this chart to find the corresponding dose in mg. All values assume a U-100 insulin syringe (1 unit = 0.01 mL).
              </p>

              <div className="mt-6 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                <table className="w-full min-w-[500px] text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                        Units drawn
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                        @ 0.5 mg/mL → mg
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                        @ 1 mg/mL → mg
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                        @ 2 mg/mL → mg
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)] sm:px-4 sm:py-3">
                        @ 2.5 mg/mL → mg
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        10 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.10 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.050 mg</span>
                        <span className="block text-xs text-[var(--muted)]">50 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.100 mg</span>
                        <span className="block text-xs text-[var(--muted)]">100 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.200 mg</span>
                        <span className="block text-xs text-[var(--muted)]">200 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.250 mg</span>
                        <span className="block text-xs text-[var(--muted)]">250 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        12.5 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.13 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.063 mg</span>
                        <span className="block text-xs text-[var(--muted)]">63 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.125 mg</span>
                        <span className="block text-xs text-[var(--muted)]">125 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.250 mg</span>
                        <span className="block text-xs text-[var(--muted)]">250 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.313 mg</span>
                        <span className="block text-xs text-[var(--muted)]">313 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        15 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.15 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.075 mg</span>
                        <span className="block text-xs text-[var(--muted)]">75 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.150 mg</span>
                        <span className="block text-xs text-[var(--muted)]">150 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.300 mg</span>
                        <span className="block text-xs text-[var(--muted)]">300 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.375 mg</span>
                        <span className="block text-xs text-[var(--muted)]">375 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        20 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.20 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.100 mg</span>
                        <span className="block text-xs text-[var(--muted)]">100 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.200 mg</span>
                        <span className="block text-xs text-[var(--muted)]">200 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.400 mg</span>
                        <span className="block text-xs text-[var(--muted)]">400 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.500 mg</span>
                        <span className="block text-xs text-[var(--muted)]">500 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        25 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.25 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.125 mg</span>
                        <span className="block text-xs text-[var(--muted)]">125 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.250 mg</span>
                        <span className="block text-xs text-[var(--muted)]">250 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.500 mg</span>
                        <span className="block text-xs text-[var(--muted)]">500 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.625 mg</span>
                        <span className="block text-xs text-[var(--muted)]">625 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        40 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.40 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.200 mg</span>
                        <span className="block text-xs text-[var(--muted)]">200 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.400 mg</span>
                        <span className="block text-xs text-[var(--muted)]">400 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.800 mg</span>
                        <span className="block text-xs text-[var(--muted)]">800 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">1 mg</span>
                        <span className="block text-xs text-[var(--muted)]">1000 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        50 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.50 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.250 mg</span>
                        <span className="block text-xs text-[var(--muted)]">250 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.500 mg</span>
                        <span className="block text-xs text-[var(--muted)]">500 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">1 mg</span>
                        <span className="block text-xs text-[var(--muted)]">1000 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">1.250 mg</span>
                        <span className="block text-xs text-[var(--muted)]">1250 mcg</span>
                      </td>
                    </tr>

                    <tr className="border-b border-[var(--border-color)]">
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        75 units
                        <span className="block text-xs font-normal text-[var(--muted)]">0.75 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.375 mg</span>
                        <span className="block text-xs text-[var(--muted)]">375 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.750 mg</span>
                        <span className="block text-xs text-[var(--muted)]">750 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">1.500 mg</span>
                        <span className="block text-xs text-[var(--muted)]">1500 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">1.875 mg</span>
                        <span className="block text-xs text-[var(--muted)]">1875 mcg</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-3 py-2 font-semibold text-[var(--ink)] sm:px-4 sm:py-3" >
                        100 units
                        <span className="block text-xs font-normal text-[var(--muted)]">1.00 mL</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">0.500 mg</span>
                        <span className="block text-xs text-[var(--muted)]">500 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">1 mg</span>
                        <span className="block text-xs text-[var(--muted)]">1000 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">2 mg</span>
                        <span className="block text-xs text-[var(--muted)]">2000 mcg</span>
                      </td>
                      <td className="px-3 py-2 sm:px-4 sm:py-3" >
                        <span className="font-semibold text-[var(--accent-ink)]">2.500 mg</span>
                        <span className="block text-xs text-[var(--muted)]">2500 mcg</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-[var(--muted)]">
                Formula: units ÷ 100 = mL; mL × concentration = mg dose. Use the “units → mg” toggle in the converter above for any value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO CONVERT SEMAGLUTIDE MG TO UNITS */}
      <section className="bg-[var(--surface)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
              How to convert semaglutide mg to units
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
              <p>
                Semaglutide for weight loss is typically prescribed as a compounded injectable peptide. It comes as a lyophilized (freeze-dried) powder in a vial, which you reconstitute by adding bacteriostatic water (BAC water). The amount of BAC water you add determines your concentration.
              </p>
              <p>
                Once you know your concentration (mg/mL), converting a dose to syringe units is straightforward:
              </p>
              <div className="rounded-[5px] border border-[var(--border-color)] bg-[var(--canvas)] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                  Formula
                </p>
                <div className="mt-2 space-y-1 text-sm text-[var(--ink)]" >
                  <p>mL = dose (mg) ÷ concentration (mg/mL)</p>
                  <p>Units = mL × 100</p>
                </div>
                <div className="mt-4 border-t border-[var(--border-color)] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                    Example: 0.25 mg at 2 mg/mL
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-[var(--ink)]" >
                    <p>0.25 mg ÷ 2 mg/mL = 0.125 mL</p>
                    <p>
                      0.125 mL × 100 = <strong>12.5 units</strong>
                    </p>
                  </div>
                </div>
              </div>
              <p>
                The standard semaglutide titration protocol starts at{' '}
                <strong className="text-[var(--ink)]">0.25 mg per week</strong> for the first four weeks, then increases to 0.5 mg weekly, and may escalate further based on clinical response. Use the{' '}
                <a className="text-[var(--accent-ink)] hover:underline" href="/tools/titration-calculator">
                  titration calculator
                </a>{' '}
                to generate a complete week-by-week schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS */}
      <section className="bg-[var(--canvas)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-3">
            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                How many units is 0.25 mg of semaglutide?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                It depends on your concentration. At 2 mg/mL: 12.5 units. At 1 mg/mL: 25 units. At 2.5 mg/mL: 10 units. At 0.5 mg/mL: 50 units. Use the converter above for any concentration.
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                How many units is 0.5 mg of semaglutide?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                At 2 mg/mL: 25 units. At 2.5 mg/mL: 20 units. At 1 mg/mL: 50 units. At 0.5 mg/mL: 100 units (requires a full 1 mL syringe).
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                How many units is 1 mg of semaglutide?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                At 2 mg/mL: 50 units. At 2.5 mg/mL: 40 units. At 1 mg/mL: 100 units (a full 1 mL syringe). At 0.5 mg/mL: 200 units — this exceeds any single syringe and would require splitting into two injections.
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                How many units is 1.7 mg of semaglutide?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                At 2 mg/mL: 85 units. At 2.5 mg/mL: 68 units. At 1 mg/mL: 170 units (requires two injections). At 2 mg/mL you can fit this in a 1 mL (100-unit) syringe.
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                How many units is 2.4 mg of semaglutide (maximum dose)?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                At 2.5 mg/mL: 96 units (fits in a 1 mL syringe). At 2 mg/mL: 120 units (requires a second injection or a higher concentration). At 1 mg/mL: 240 units (requires multiple injections).
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                What does semaglutide concentration mean?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                Concentration (mg/mL) tells you how much semaglutide is dissolved in each mL of solution. A 5 mg vial with 2 mL of BAC water gives 2.5 mg/mL. A 5 mg vial with 1 mL gives 5 mg/mL. A higher concentration means fewer units per dose.
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                What syringe size should I use for semaglutide?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                For most weekly doses of 0.25–0.5 mg at 2 mg/mL concentration (12.5–25 units), a 0.3 mL (30-unit) or 0.5 mL (50-unit) insulin syringe works well. Higher doses like 1–2.4 mg at 2+ mg/mL concentration will require a 1 mL (100-unit) syringe.
              </div>
            </details>

            <details className="group rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] [&::-webkit-details-marker]:hidden">
                Can I use this for compounded semaglutide?
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[var(--border-color)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                Yes. Compounded semaglutide is typically supplied as lyophilized powder you reconstitute at home, or as a pre-mixed solution. Enter your actual concentration from your pharmacy label to get the correct unit amount.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 6: RELATED TOOLS & GUIDES */}
      <section className="bg-[var(--surface)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
            Related tools & guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/peptides/semaglutide"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <Calculator className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Semaglutide Dosing Guide
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Clinical overview of semaglutide doses, titration schedules, side effects, and protocols.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/tools/titration-calculator"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <Calculator className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Peptide Titration Calculator
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Generate a personalized semaglutide dose escalation schedule with exact weekly dates.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/tools/peptide-calculator"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <Calculator className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Peptide Reconstitution Calculator
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Calculate syringe units from vial size and BAC water volume. Includes cost-per-dose.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/tools/tirzepatide-units-converter"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <Calculator className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Tirzepatide Units Converter
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Convert tirzepatide doses to syringe units with a full dosing chart.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7: DOSING & RECONSTITUTION GUIDES */}
      <section className="bg-[var(--canvas)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
            Dosing & reconstitution guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/peptides/semaglutide"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <FlaskConical className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Semaglutide Overview
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Full semaglutide profile — dosing, titration, side effects, mechanism, and FDA status.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/how-to-reconstitute-peptides"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <Beaker className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  How to Reconstitute Peptides
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/peptide-dosage-guide"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <BookOpen className="h-5 w-5 text-[var(--accent-ink)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Peptide Dosage Guide
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRESCRIBER CTA BAND */}
      <section className="bg-[var(--canvas)] py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div
            className="feature-band bg-[var(--accent)] rounded-3xl p-[clamp(28px,5vw,56px)] grid grid-cols-1 gap-[clamp(28px,4vw,48px)] items-center"
            data-has-media="false"
          >
            <div>
              <span className="inline-block text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-white/90 mb-3.5">
                Need a prescriber?
              </span>
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-white m-0">
                Find a semaglutide-prescribing clinic
              </h2>
              <p className="text-[clamp(1rem,2vw,1.125rem)] text-white/90 leading-[1.6] mt-4 max-w-[52ch]">
                Compare licensed telehealth and in-person clinics that prescribe semaglutide for weight management. MyPeptideMatch helps you find and verify providers in your area.
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <a
                  className="band-btn inline-flex items-center gap-2 font-bold text-[15px] leading-[24px] py-3 px-[22px] rounded-full no-underline transition-all duration-150 bg-white text-[var(--accent-ink)]"
                  href="/clinics/telehealth-clinics"
                >
                  Find a Clinic <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MEDICAL DISCLAIMER */}
      <section className="bg-[var(--canvas)] border-t border-[var(--border-color)] py-[clamp(24px,4vw,40px)]">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-[var(--muted)]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-ink)]" />
            <p>
              <strong className="text-[var(--ink)]">Medical disclaimer:</strong> This tool is provided for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Semaglutide dosing should be supervised by a licensed healthcare provider. Always consult your prescribing physician before adjusting any dose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
