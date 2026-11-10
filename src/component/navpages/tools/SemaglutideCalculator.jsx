import React, { useMemo, useState, useCallback } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Beaker,
  Bell,
  Bookmark,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  DollarSign,
  ExternalLink,
  FlaskConical,
  Search,
  ShieldCheck,
  Stethoscope,
  Timer,
} from 'lucide-react';
import syringeLargeSvg from '../../../assets/UnitsConverter/syringe-large.svg';
import syringeMediumSvg from '../../../assets/UnitsConverter/syringe-medium.svg';
import syringeSmallSvg from '../../../assets/UnitsConverter/syringe-small.svg';
import SyringeVisualIndicator from './SyringeVisualIndicator.jsx';

/* ------------------------------------------------------------------ */
/* CONFIG & PRESETS                                                    */
/* ------------------------------------------------------------------ */

const syringeOptions = [
  { label: '0.3 ml', value: 0.3, units: 30 },
  { label: '0.5 ml', value: 0.5, units: 50 },
  { label: '1.0 ml', value: 1.0, units: 100 },
];

const vialPresets = [
  { label: '5 mg', value: 5 },
  { label: '10 mg', value: 10 },
  { label: '15 mg', value: 15 },
];

const waterPresets = [
  { label: '1 ml', value: 1 },
  { label: '2 ml', value: 2 },
  { label: '3 ml', value: 3 },
  { label: '5 ml', value: 5 },
];

const dosePresets = [
  { label: '50 mcg', value: 50 },
  { label: '100 mcg', value: 100 },
  { label: '250 mcg', value: 250 },
  { label: '500 mcg', value: 500 },
];

const dosingFrequencies = [
  { label: 'Daily', value: 7 },
  { label: 'Every other day', value: 3.5 },
  { label: '3x / week', value: 3 },
  { label: '2x / week', value: 2 },
  { label: 'Weekly', value: 1 },
];

const RX_PARTNER = {
  vendorId: '207b1b47-b8bf-4fa1-88ac-2f227786c618',
  vendorName: 'Collective',
  vendorSlug: 'collective',
  url: 'https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876',
  price: 59,
  priceNote: 'Same price any dose · + $199/yr membership, 21 days free',
};

function getInitialParams() {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    return {
      vial: params.get('vial'),
      water: params.get('water'),
      dose: params.get('dose'),
      syringe: params.get('syringe'),
    };
  } catch {
    return {};
  }
}

/* ------------------------------------------------------------------ */
/* HELPER COMPONENTS                                                  */
/* ------------------------------------------------------------------ */

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
  step = 'any',
}) {
  const baseBtn = 'w-full rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 sm:w-auto';
  const activeBtn = 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_2px_8px_rgba(11,124,132,0.25)]';
  const inactiveBtn = 'border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]';

  return (
    <fieldset>
      {!hideLabel && (
        <legend className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
          {label}
        </legend>
      )}
      <div className={`flex flex-wrap items-center gap-2 ${hideLabel ? '' : 'mt-2.5'}`}>
        {options.map((opt) => {
          const isSelected = !showCustom && selected === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className={`${baseBtn} ${isSelected ? activeBtn : inactiveBtn}`}
            >
              {opt.label}
            </button>
          );
        })}
        <button
          type="button"
          onClick={onToggleCustom}
          className={`${baseBtn} ${showCustom ? activeBtn : inactiveBtn}`}
        >
          Other
        </button>
      </div>

      {showCustom && (
        <div className="mt-3 flex max-w-xs items-center gap-2">
          <div className="relative flex-1">
            <input
              type="number"
              min="0"
              step={step}
              value={customValue}
              onChange={(e) => onCustomChange(e.target.value)}
              placeholder="Enter amount"
              autoFocus
              className="w-full rounded-xl border py-2 pl-3.5 pr-14 text-sm focus:outline-none"
              style={{
                borderColor: 'var(--border-color)',
                background: 'var(--surface)',
                color: 'var(--ink)',
              }}
            />
            {unit && (
              <span
                className="pointer-events-none absolute right-9 top-1/2 -translate-y-1/2 text-xs font-semibold"
                style={{ color: 'var(--muted)' }}
              >
                {unit}
              </span>
            )}
          </div>
        </div>
      )}
    </fieldset>
  );
}

function CalculatorMobileAccordion({ title, subtitle, selectedLabel, open, onToggle, children }) {
  return (
    <section
      className="rounded-xl border overflow-hidden transition-all duration-150"
      style={{
        borderColor: 'var(--border-color)',
        background: 'var(--surface)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-[var(--accent-soft)]"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
              {title}
            </span>
            {selectedLabel && (
              <span
                className="rounded-full px-2 py-0.5 text-xs font-bold"
                style={{
                  background: 'var(--accent-soft)',
                  color: 'var(--accent-ink)',
                }}
              >
                {selectedLabel}
              </span>
            )}
          </div>
          {open && (
            <p className="mt-0.5 text-xs" style={{ color: 'var(--muted)' }}>
              {subtitle}
            </p>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: 'var(--accent-ink)' }}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          className="border-t px-4 py-4"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

function RxResultStrip() {
  const offer = RX_PARTNER;
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3 rounded-[12px] bg-[#FFFBE0] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ink)]" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm text-[var(--ink)]">
            <span className="font-semibold">Want this prescribed?</span> Licensed doctors, compounded semaglutide from ${offer.price}/mo.
          </p>
        </div>
        <a
          href={offer.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] font-semibold text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
        >
          See if I qualify
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
      <p className="mt-2 text-[11px] text-[var(--muted)]">
        Affiliate link · {offer.vendorName} · {offer.priceNote} · Compounded medications are not FDA-approved
      </p>
    </div>
  );
}

function BenefitCard({ getCalc }) {
  const [toast, setToast] = useState(null);

  const handleSave = () => {
    const calc = getCalc();
    if (!calc) {
      setToast({ message: 'Finish the calculator first, then save.', variant: 'error' });
      setTimeout(() => setToast(null), 2600);
      return;
    }
    try {
      localStorage.setItem('pending_calc', JSON.stringify(calc));
    } catch {
      // ignore
    }
    window.location.href = '/tracker/signup?redirect=/tracker';
  };

  return (
    <div
      className="rounded-2xl border p-5 sm:p-6"
      style={{
        borderColor: 'var(--border-color)',
        background: 'var(--surface)',
        boxShadow: '0 1px 3px 0 rgba(160,160,160,0.30), 0 0 3px 0 rgba(0,0,0,0.06)',
      }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p
            className="font-heading text-xl font-extrabold leading-tight sm:text-2xl"
            style={{ color: 'var(--ink)' }}
          >
            Keep this dose — track every injection free
          </p>
          <p className="mt-1.5 text-sm" style={{ color: 'var(--muted)' }}>
            Save this calculation to your free tracker. Calculators stay anonymous — sign in only to save.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[
              { icon: Bell, label: 'Dose reminders' },
              { icon: ClipboardList, label: 'Injection logging' },
              { icon: Timer, label: 'Vial countdown' },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-ink)' }}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="shrink-0">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all shadow-[0_2px_8px_rgba(11,124,132,0.25)] hover:shadow-[0_4px_12px_rgba(11,124,132,0.35)]"
            style={{ background: 'var(--accent)' }}
          >
            <Bookmark className="mr-2 h-4 w-4" aria-hidden="true" />
            Save to my tracker
          </button>
        </div>
      </div>
      {toast && (
        <div
          role="alert"
          className={`fixed bottom-6 right-6 z-50 max-w-sm rounded-lg px-4 py-3 text-white shadow-lg transition-opacity duration-200 ${
            toast.variant === 'error' ? 'bg-[#e53e3e]' : 'bg-[#38a169]'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT: SemaglutideCalculator                               */
/* ------------------------------------------------------------------ */

export default function SemaglutideCalculator() {
  const initialParams = useMemo(() => getInitialParams(), []);

  const [syringeIndex, setSyringeIndex] = useState(() => {
    if (initialParams.syringe) {
      const idx = syringeOptions.findIndex(
        (s) => String(s.value) === initialParams.syringe || String(s.units) === initialParams.syringe
      );
      if (idx >= 0) return idx;
    }
    return 0;
  });

  const [vialValue, setVialValue] = useState(() => {
    if (initialParams.vial) {
      const parsed = parseFloat(initialParams.vial);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return 5;
  });

  const [customVial, setCustomVial] = useState(() => {
    if (initialParams.vial) {
      const parsed = parseFloat(initialParams.vial);
      return !isNaN(parsed) && parsed > 0 && !vialPresets.some((p) => p.value === parsed);
    }
    return false;
  });

  const [customVialInput, setCustomVialInput] = useState(() => {
    if (initialParams.vial) {
      const parsed = parseFloat(initialParams.vial);
      if (!isNaN(parsed) && parsed > 0 && !vialPresets.some((p) => p.value === parsed)) {
        return initialParams.vial;
      }
    }
    return '';
  });

  const [waterValue, setWaterValue] = useState(() => {
    if (initialParams.water) {
      const parsed = parseFloat(initialParams.water);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return 2;
  });

  const [customWater, setCustomWater] = useState(() => {
    if (initialParams.water) {
      const parsed = parseFloat(initialParams.water);
      return !isNaN(parsed) && parsed > 0 && !waterPresets.some((p) => p.value === parsed);
    }
    return false;
  });

  const [customWaterInput, setCustomWaterInput] = useState(() => {
    if (initialParams.water) {
      const parsed = parseFloat(initialParams.water);
      if (!isNaN(parsed) && parsed > 0 && !waterPresets.some((p) => p.value === parsed)) {
        return initialParams.water;
      }
    }
    return '';
  });

  const [doseValue, setDoseValue] = useState(() => {
    if (initialParams.dose) {
      const parsed = parseFloat(initialParams.dose);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return 250;
  });

  const [customDose, setCustomDose] = useState(() => {
    if (initialParams.dose) {
      const parsed = parseFloat(initialParams.dose);
      return !isNaN(parsed) && parsed > 0 && !dosePresets.some((p) => p.value === parsed);
    }
    return false;
  });

  const [customDoseInput, setCustomDoseInput] = useState(() => {
    if (initialParams.dose) {
      const parsed = parseFloat(initialParams.dose);
      if (!isNaN(parsed) && parsed > 0 && !dosePresets.some((p) => p.value === parsed)) {
        return initialParams.dose;
      }
    }
    return '';
  });

  const [vialCost, setVialCost] = useState('');
  const [showCostCalculator, setShowCostCalculator] = useState(false);
  const [frequencyIndex, setFrequencyIndex] = useState(0);

  const [openAccordions, setOpenAccordions] = useState(
    () => new Set(['syringe', 'vial', 'water', 'dose'])
  );

  const toggleAccordion = useCallback((name) => {
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }, []);

  const activeSyringe = syringeOptions[syringeIndex];
  const activeVial = customVial ? (customVialInput ? parseFloat(customVialInput) : null) : vialValue;
  const activeWater = customWater ? (customWaterInput ? parseFloat(customWaterInput) : null) : waterValue;
  const activeDose = customDose ? (customDoseInput ? parseFloat(customDoseInput) : null) : doseValue;
  const activeCost = vialCost ? parseFloat(vialCost) : null;

  const calcResults = useMemo(() => {
    if (!activeVial || !activeWater || !activeDose || activeVial <= 0 || activeWater <= 0 || activeDose <= 0) {
      return null;
    }
    const conc = activeVial / activeWater;
    const doseMl = activeDose / (1000 * conc);
    const doseUnits = (doseMl / activeSyringe.value) * activeSyringe.units;
    const dosesPerVial = Math.floor((1000 * activeVial) / activeDose);
    const exceeds = doseMl > activeSyringe.value;
    return {
      concentrationMgPerMl: conc,
      doseVolumeMl: doseMl,
      doseUnits: doseUnits,
      dosesPerVial: dosesPerVial,
      exceeds: exceeds,
    };
  }, [activeVial, activeWater, activeDose, activeSyringe]);

  const costResults = useMemo(() => {
    if (!calcResults || !activeCost || activeCost <= 0 || calcResults.dosesPerVial <= 0) {
      return null;
    }
    const freq = dosingFrequencies[frequencyIndex];
    const cpd = activeCost / calcResults.dosesPerVial;
    const cpw = cpd * freq.value;
    const daysSupply = Math.floor(calcResults.dosesPerVial / (freq.value / 7));
    return {
      costPerDose: cpd,
      costPerWeek: cpw,
      daysSupply: daysSupply,
    };
  }, [calcResults, activeCost, frequencyIndex]);

  const formatSelectionLabel = useCallback((val, unitStr) => {
    if (!val || !Number.isFinite(val) || val <= 0) return 'Not set';
    const formatted = val % 1 === 0 ? val.toFixed(0) : String(val);
    return `${formatted} ${unitStr}`;
  }, []);

  const getCalcPayload = useCallback(() => {
    if (!calcResults || calcResults.exceeds || !activeVial || !activeWater || !activeDose) {
      return null;
    }
    return {
      tool: 'reconstitution',
      preset_id: 'semaglutide',
      vial_mg: activeVial,
      water_ml: activeWater,
      dose_mcg: activeDose,
      syringe_ml: activeSyringe.value,
      vial_cost: activeCost ?? null,
    };
  }, [calcResults, activeVial, activeWater, activeDose, activeSyringe, activeCost]);

  return (
    <main id="main-content" className="flex-1">
      {/* SECTION 0: Hero & Breadcrumb */}
      <section style={{ "background": "linear-gradient(180deg, var(--accent-soft) 0%, var(--canvas) 100%)", "borderBottom": "1px solid var(--border-color)", "padding": "clamp(28px, 5vw, 56px) 0 clamp(40px, 6vw, 72px)" }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]">
            <span className="inline-flex shrink-0 items-center gap-1">
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/">Home</a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true" />
              <a className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors" href="/tools">Tools</a>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
              <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" aria-hidden="true" />
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Semaglutide Reconstitution Calculator</span>
            </span>
          </nav>
          <div className="mt-5 sm:mt-7">
            <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "var(--accent-ink)", "background": "var(--surface)", "border": "1px solid var(--border-color)", "borderRadius": "999px", "padding": "6px 12px" }}>
              <Beaker className="h-3.5 w-3.5" aria-hidden="true" />
              Free Reconstitution Tool
            </span>
            <h1 className="font-heading" style={{ "fontSize": "clamp(2rem, 5.2vw, 3.25rem)", "fontWeight": "700", "lineHeight": "1.05", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "16px 0 0" }}>
              Semaglutide Reconstitution Calculator
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] leading-relaxed text-[var(--muted)]">
              <span>Last updated: <time dateTime="2026-10-12">October 12, 2026</time></span>
              <span aria-hidden="true">·</span>
              <span>Medically reviewed by the MyPeptideMatch Editorial Team</span>
            </div>
            <p style={{ "fontSize": "clamp(1rem, 1.6vw, 1.125rem)", "lineHeight": "1.6", "color": "var(--ink)", "fontWeight": "600", "marginTop": "16px", "maxWidth": "62ch" }}>
              Example: 5 mg + 2 mL = 2.5 mg/mL, so a 0.25 mg dose is 10 units.
            </p>
            <p style={{ "fontSize": "clamp(1rem, 1.6vw, 1.125rem)", "lineHeight": "1.6", "color": "var(--ink-soft)", "marginTop": "16px", "maxWidth": "62ch" }}>
              Calculate the exact insulin syringe units for your compounded semaglutide dose. Enter your vial size, the amount of bacteriostatic water you added, and your weekly dose to get an instant, precise reading.
            </p>
            <p className="mt-3 text-[12px] leading-relaxed text-[var(--muted)] sm:text-sm">
              <span className="font-medium text-[var(--ink)]">Also called:</span> <span className="font-medium text-[var(--ink)]">semaglutide calculator</span>
              <span aria-hidden="true"> · </span>
              <span className="font-medium text-[var(--ink)]">semaglutide units calculator</span>
              <span aria-hidden="true"> · </span>
              <span className="font-medium text-[var(--ink)]">semaglutide dosage calculator</span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <a className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-white shadow-sm transition-all active:scale-[0.99]" style={{ "background": "var(--accent)" }} href="#calculator">
                Jump to calculator
              </a>
              <a className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]" href="#how-to-reconstitute-semaglutide">
                How it works
              </a>
            </div>
            <div className="mt-5 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="scroll-fade-container flex items-center gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:justify-start sm:overflow-visible sm:pb-0">
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#calculator">
                  Calculator
                </a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#dosage-chart">
                  Dosage chart
                </a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#vial-sizes">
                  By vial size
                </a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#how-to-reconstitute-semaglutide">
                  How to reconstitute
                </a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#faq">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Calculator Component & Telehealth Card */}
      <section id="calculator" className="scroll-mt-24" style={{ "background": "var(--surface)", "padding": "clamp(40px, 6vw, 64px) 0" }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <div
            className="overflow-hidden rounded-2xl border shadow-sm"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--surface)',
            }}
          >
            {/* Preset Banner */}
            <div
              className="border-b p-4 sm:p-8"
              style={{
                borderColor: 'var(--border-color)',
                background: 'var(--accent-soft)',
              }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                    Preset: Semaglutide
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: 'var(--ink-soft)' }}>
                    Vial and BAC water defaults are prefilled. Choose your dose below.
                  </p>
                </div>
                <a
                  href="/peptides/semaglutide"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: 'var(--accent-ink)' }}
                >
                  View Semaglutide dosing guide →
                </a>
              </div>
            </div>

            {/* Mobile View Accordions (lg:hidden) */}
            <div className="lg:hidden p-4 space-y-3">
              <CalculatorMobileAccordion
                title="Syringe Size"
                subtitle="What is the total volume of your syringe?"
                selectedLabel={activeSyringe.label}
                open={openAccordions.has('syringe')}
                onToggle={() => toggleAccordion('syringe')}
              >
                <div className="grid grid-cols-3 gap-2">
                  {syringeOptions.map((opt, idx) => {
                    const isSelected = syringeIndex === idx;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSyringeIndex(idx)}
                        className={`rounded-xl border px-3 py-2.5 text-center text-sm font-semibold transition-colors ${
                          isSelected
                            ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                            : 'border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent)]'
                        }`}
                      >
                        {opt.label}
                        <span
                          className={`mt-0.5 block text-xs font-normal ${isSelected ? 'text-white/80' : ''}`}
                          style={isSelected ? undefined : { color: 'var(--muted)' }}
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
                selectedLabel={formatSelectionLabel(activeVial, 'mg')}
                open={openAccordions.has('vial')}
                onToggle={() => toggleAccordion('vial')}
              >
                <ChoiceGroup
                  label="How many milligrams are in your peptide vial?"
                  hideLabel
                  options={vialPresets}
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
                selectedLabel={formatSelectionLabel(activeWater, 'mL')}
                open={openAccordions.has('water')}
                onToggle={() => toggleAccordion('water')}
              >
                <ChoiceGroup
                  label="How much bacteriostatic water are you adding?"
                  hideLabel
                  options={waterPresets}
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
                selectedLabel={formatSelectionLabel(activeDose, 'mcg')}
                open={openAccordions.has('dose')}
                onToggle={() => toggleAccordion('dose')}
              >
                <ChoiceGroup
                  label="How much peptide do you want per dose?"
                  hideLabel
                  options={dosePresets}
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

            {/* Desktop View (hidden lg:flex) */}
            <div className="hidden lg:flex lg:flex-row">
              <div
                className="border-b p-6 sm:p-8 lg:w-[45%] lg:border-b-0 lg:border-r"
                style={{
                  borderColor: 'var(--border-color)',
                  background: 'var(--canvas)',
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.08em]"
                  style={{ color: 'var(--accent-ink)' }}
                >
                  Step 1 — Syringe
                </p>
                <p
                  className="mt-1 text-base font-semibold"
                  style={{ color: 'var(--ink)' }}
                >
                  What is the total volume of your syringe?
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {syringeOptions.map((opt, idx) => {
                    const isSelected = syringeIndex === idx;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSyringeIndex(idx)}
                        className="flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-150"
                        style={{
                          borderColor: isSelected ? 'var(--accent)' : 'var(--border-color)',
                          background: isSelected ? 'var(--accent-soft)' : 'var(--surface)',
                          boxShadow: isSelected ? '0 2px 10px rgba(11,124,132,0.15)' : 'none',
                        }}
                      >
                        <span
                          className="shrink-0 text-base font-bold"
                          style={{ color: isSelected ? 'var(--accent-ink)' : 'var(--ink)' }}
                        >
                          {opt.label}
                        </span>
                        <span
                          className="shrink-0 text-xs font-semibold"
                          style={{ color: 'var(--muted)' }}
                        >
                          {opt.units} units
                        </span>
                        <div className="min-w-0 flex-1">
                          <img
                            src={idx === 0 ? syringeSmallSvg : idx === 1 ? syringeMediumSvg : syringeLargeSvg}
                            alt=""
                            className="w-full"
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-7 p-6 sm:p-8">
                <ChoiceGroup
                  label="How many milligrams are in your peptide vial?"
                  options={vialPresets}
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
                  options={waterPresets}
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
                  options={dosePresets}
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

            {/* Bottom Result Box */}
            <div
              className="border-t p-3 sm:p-7 lg:p-8"
              style={{
                borderColor: 'var(--border-color)',
                background: 'linear-gradient(180deg, var(--accent-soft) 0%, var(--canvas) 100%)',
              }}
            >
              {calcResults ? (
                calcResults.exceeds ? (
                  <div
                    className="flex items-start gap-3 rounded-2xl border p-4"
                    style={{
                      borderColor: '#F2DBBE',
                      background: 'var(--color-warning-soft, #FEF7EE)',
                    }}
                  >
                    <AlertTriangle
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: 'var(--color-warning, #D97706)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: 'var(--color-warning, #D97706)' }}
                      >
                        Syringe volume is not sufficient for this dose
                      </p>
                      <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                        Your dose requires{' '}
                        <span
                          style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink)' }}
                          className="font-semibold"
                        >
                          {calcResults.doseVolumeMl.toFixed(3)} ml
                        </span>
                        , but your {activeSyringe.label} syringe only holds {activeSyringe.value} ml. Try a larger syringe,
                        add more bacteriostatic water, or lower your dose.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {/* Your Dose card */}
                    <div
                      className="rounded-2xl border p-4 sm:p-6"
                      style={{
                        borderColor: 'var(--border-color)',
                        background: 'var(--surface)',
                        boxShadow: '0 1px 2px rgba(160,160,160,0.04)',
                      }}
                    >
                      <span
                        className="text-xs font-bold uppercase tracking-[0.08em]"
                        style={{ color: 'var(--accent-ink)' }}
                      >
                        Your Dose
                      </span>
                      <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                        To get a dose of{' '}
                        <span className="font-semibold" style={{ color: 'var(--ink)' }}>
                          {activeDose} mcg
                        </span>
                        , pull the syringe to:
                      </p>
                      <p className="mt-2 flex items-baseline gap-2">
                        <span
                          className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl"
                          style={{ color: 'var(--accent-ink)', lineHeight: 1 }}
                        >
                          {calcResults.doseUnits % 1 === 0
                            ? calcResults.doseUnits.toFixed(0)
                            : calcResults.doseUnits.toFixed(1)}
                        </span>
                        <span
                          className="text-lg font-bold uppercase tracking-wider"
                          style={{ color: 'var(--muted)' }}
                        >
                          {calcResults.doseUnits === 1 ? 'unit' : 'units'}
                        </span>
                      </p>
                      <div className="mt-5">
                        <SyringeVisualIndicator
                          totalUnits={activeSyringe.units}
                          doseUnits={calcResults.doseUnits}
                        />
                      </div>
                      <RxResultStrip />
                    </div>

                    {/* Stats 3 columns */}
                    <div
                      className="grid grid-cols-3 overflow-hidden rounded-2xl border"
                      style={{
                        borderColor: 'var(--border-color)',
                        background: 'var(--surface)',
                      }}
                    >
                      {[
                        { label: 'Concentration', value: `${calcResults.concentrationMgPerMl.toFixed(2)} mg/ml` },
                        { label: 'Volume', value: `${calcResults.doseVolumeMl.toFixed(3)} ml` },
                        { label: 'Doses / Vial', value: String(calcResults.dosesPerVial) },
                      ].map((stat, idx) => (
                        <div
                          key={stat.label}
                          className="min-w-0 px-2 py-4 text-center sm:px-3"
                          style={{
                            borderLeft: idx === 0 ? 'none' : '1px solid var(--border-color)',
                          }}
                        >
                          <p
                            className="text-[10px] font-bold uppercase tracking-[0.04em] sm:text-[11px] sm:tracking-[0.06em]"
                            style={{ color: 'var(--muted)' }}
                          >
                            {stat.label}
                          </p>
                          <p
                            className="mt-1.5 text-sm font-semibold sm:text-base"
                            style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink)' }}
                          >
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Cost Per Dose Calculator */}
                    <div>
                      {showCostCalculator ? (
                        <div
                          className="space-y-4 rounded-2xl border p-4 sm:p-5"
                          style={{
                            borderColor: 'var(--border-color)',
                            background: 'var(--surface)',
                          }}
                        >
                          <p
                            className="text-xs font-bold uppercase tracking-[0.08em]"
                            style={{ color: 'var(--accent-ink)' }}
                          >
                            Cost Per Dose Calculator
                          </p>
                          <div className="flex flex-wrap items-end gap-4">
                            <div>
                              <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--ink-soft)' }}
                              >
                                Vial cost ($)
                              </label>
                              <div className="relative max-w-[140px]">
                                <span
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
                                  style={{ color: 'var(--muted)' }}
                                >
                                  $
                                </span>
                                <input
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  value={vialCost}
                                  onChange={(e) => setVialCost(e.target.value)}
                                  placeholder="0.00"
                                  className="w-full rounded-lg border py-2 pl-7 pr-3 text-sm focus:outline-none"
                                  style={{
                                    borderColor: 'var(--border-color)',
                                    background: 'var(--surface)',
                                    color: 'var(--ink)',
                                  }}
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                className="mb-1 block text-xs font-semibold"
                                style={{ color: 'var(--ink-soft)' }}
                              >
                                Dosing frequency
                              </label>
                              <div className="flex flex-wrap gap-1.5">
                                {dosingFrequencies.map((freq, idx) => (
                                  <button
                                    key={freq.label}
                                    type="button"
                                    onClick={() => setFrequencyIndex(idx)}
                                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                                      frequencyIndex === idx
                                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                                        : 'border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink-soft)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]'
                                    }`}
                                  >
                                    {freq.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                          {costResults && (
                            <div
                              className="flex flex-wrap gap-6 rounded-xl px-4 py-3 text-sm"
                              style={{ background: 'var(--accent-soft)' }}
                            >
                              <div>
                                <span style={{ color: 'var(--ink-soft)' }}>Cost per dose: </span>
                                <span
                                  className="font-semibold"
                                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-ink)' }}
                                >
                                  ${costResults.costPerDose.toFixed(2)}
                                </span>
                              </div>
                              <div>
                                <span style={{ color: 'var(--ink-soft)' }}>Cost per week: </span>
                                <span
                                  className="font-semibold"
                                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-ink)' }}
                                >
                                  ${costResults.costPerWeek.toFixed(2)}
                                </span>
                              </div>
                              <div>
                                <span style={{ color: 'var(--ink-soft)' }}>Vial lasts: </span>
                                <span
                                  className="font-semibold"
                                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-ink)' }}
                                >
                                  ~{costResults.daysSupply} days
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setShowCostCalculator(true)}
                          className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all hover:scale-[1.02]"
                          style={{
                            borderColor: 'var(--accent)',
                            color: 'var(--accent-ink)',
                            background: 'var(--surface)',
                          }}
                        >
                          <DollarSign className="h-4 w-4" aria-hidden="true" />
                          Calculate cost per dose
                        </button>
                      )}
                    </div>

                    {/* Benefit Card */}
                    <BenefitCard getCalc={getCalcPayload} />
                  </div>
                )
              ) : (
                <p className="text-center text-sm" style={{ color: 'var(--muted)' }}>
                  Select all options above to calculate your dose
                </p>
              )}
            </div>
          </div>

          {/* Telehealth Partner Aside Card */}
          <aside aria-label="Get semaglutide prescribed online" className="mt-8 overflow-hidden rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] shadow-[0_6px_24px_rgba(28,37,34,0.08)]">
            <div className="flex items-center gap-2 border-b border-[var(--border-color)] bg-[var(--accent-soft)] px-5 py-2.5 text-xs font-semibold text-[var(--accent-ink)] sm:px-6">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
              Licensed US doctors · Our telehealth partner
            </div>
            <div className="grid gap-6 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
              <div>
                <p className="text-lg font-semibold text-[var(--ink)]">Prefer a prescription from a licensed provider?</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                  Collective's doctors can prescribe compounded semaglutide after a quick online health review.
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-[var(--ink-soft)] sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[var(--color-success)]" strokeWidth={1.5} aria-hidden="true" />
                    Same price at every dose
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[var(--color-success)]" strokeWidth={1.5} aria-hidden="true" />
                    Unlimited doctor messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[var(--color-success)]" strokeWidth={1.5} aria-hidden="true" />
                    2-day express shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[var(--color-success)]" strokeWidth={1.5} aria-hidden="true" />
                    Refund if not approved
                  </li>
                </ul>
              </div>
              <div className="rounded-[12px] bg-[var(--canvas)] p-4 text-center sm:w-[240px]">
                <p className="text-xs text-[var(--muted)]">As low as</p>
                <p className="text-3xl font-bold text-[var(--ink)]">
                  $59<span className="text-base font-medium text-[var(--muted)]">/mo</span>
                </p>
                <p className="mb-3 text-xs text-[var(--muted)]">Same price any dose · + $199/yr membership, 21 days free</p>
                <a
                  href="https://track.revoffers.com/aff_c?offer_id=1667&aff_id=13876"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] font-semibold text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
                >
                  See if I qualify
                  <ExternalLink className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
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

      {/* SECTION 2: Dosage Chart & Additional Content Sections */}
      <section style={{ "background": "var(--canvas)", "borderTop": "1px solid var(--border-color)", "padding": "clamp(56px, 8vw, 88px) 0" }}>
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[820px]">
          <div className="space-y-16">
            {/* Dosage Chart */}
            <div id="dosage-chart" className="scroll-mt-24">
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
                Semaglutide dosage chart — mg to syringe units
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Use this chart to look up your semaglutide dose in the left column and find the corresponding insulin syringe units based on your reconstitution concentration. All values use a standard <strong>U-100 (1 mL) insulin syringe</strong>.
              </p>
              <div className="mt-6 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                <table className="w-full min-w-[480px] text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                      <th className="py-3 pr-4 text-left font-semibold text-[var(--ink)]">Dose</th>
                      <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">
                        2.5 mg/mL
                        <span className="block text-[11px] font-normal text-[var(--muted)]">5 mg + 2 mL</span>
                      </th>
                      <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">
                        5 mg/mL
                        <span className="block text-[11px] font-normal text-[var(--muted)]">5 mg + 1 mL</span>
                      </th>
                      <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">
                        2 mg/mL
                        <span className="block text-[11px] font-normal text-[var(--muted)]">5 mg + 2.5 mL</span>
                      </th>
                      <th className="py-3 text-left font-semibold text-[var(--ink)]">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)]">
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>0.25 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>10 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>5 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>12.5 units</td>
                      <td className="py-3 text-xs text-[var(--muted)]">Typical starting dose (weeks 1–4)</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>0.5 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>20 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>10 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>25 units</td>
                      <td className="py-3 text-xs text-[var(--muted)]">Standard dose (weeks 5–8)</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>1 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>40 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>20 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>50 units</td>
                      <td className="py-3 text-xs text-[var(--muted)]">Maintenance dose</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>1.7 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>68 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>34 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>85 units</td>
                      <td className="py-3 text-xs text-[var(--muted)]">Higher maintenance</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>2 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>80 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>40 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>100 units</td>
                      <td className="py-3 text-xs text-[var(--muted)]">Maximum compounded dose (common)</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>2.4 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>96 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>48 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>120 units*</td>
                      <td className="py-3 text-xs text-[var(--muted)]">FDA-approved Wegovy max dose</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-[var(--muted)]">
                * Values exceeding 100 units require a 1 mL syringe and two injections may be needed for doses above 1 mL. Always follow your prescribing clinician's specific protocol.
              </p>
            </div>

            {/* By Vial Size */}
            <div id="vial-sizes" className="scroll-mt-24">
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
                How much BAC water for each semaglutide vial size
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Compounded semaglutide vials come in sizes from 2 mg to 20 mg. For each size below are two water volumes that give a round concentration, with the units to draw at each step of the label dose schedule: 0.25, 0.5, 1, 1.7 mg, up to 2.4 mg.<sup>
                  <a href="#sources" className="text-[var(--accent-ink)] hover:underline">[2]</a>
                </sup> More water lowers the concentration, so the same dose takes more units. The larger volume only works if the vial has room for it, so check the fill capacity on the label first. Values marked * are over 100 units and won't fit in one 1 mL syringe. A dash means the dose is more than the whole vial holds.
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                For the week-by-week escalation schedule, see the{' '}
                <a className="text-[var(--accent-ink)] hover:underline" href="/protocols/semaglutide-dosing-20mg">
                  semaglutide dosing protocol
                </a>.
              </p>

              <div className="mt-8 space-y-10">
                {/* 2 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)]">How much BAC water for a 2 mg semaglutide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1 mL of BAC water gives 2 mg/mL, so a 0.25 mg dose is 12.5 units. 2 mL gives 1 mg/mL, so 0.25 mg is 25 units. At 0.25 mg a dose, a 2 mg vial holds 8 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Semaglutide 2 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.25 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1.7 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.4 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            1 mL<span className="block text-[11px] font-normal text-[var(--muted)]">2 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            12.5 units<span className="block text-[11px] text-[var(--muted)]">0.13 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            85 units<span className="block text-[11px] text-[var(--muted)]">0.85 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            <span aria-hidden="true">—</span>
                            <span className="sr-only">More than the vial holds</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">1 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            170 units*<span className="block text-[11px] text-[var(--muted)]">1.7 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            <span aria-hidden="true">—</span>
                            <span className="sr-only">More than the vial holds</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)]">How much BAC water for a 3 mg semaglutide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1.5 mL of BAC water gives 2 mg/mL, so a 0.25 mg dose is 12.5 units. 3 mL gives 1 mg/mL, so 0.25 mg is 25 units. At 0.25 mg a dose, a 3 mg vial holds 12 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Semaglutide 3 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.25 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1.7 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.4 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            1.5 mL<span className="block text-[11px] font-normal text-[var(--muted)]">2 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            12.5 units<span className="block text-[11px] text-[var(--muted)]">0.13 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            85 units<span className="block text-[11px] text-[var(--muted)]">0.85 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            120 units*<span className="block text-[11px] text-[var(--muted)]">1.2 mL</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            3 mL<span className="block text-[11px] font-normal text-[var(--muted)]">1 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            170 units*<span className="block text-[11px] text-[var(--muted)]">1.7 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            240 units*<span className="block text-[11px] text-[var(--muted)]">2.4 mL</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 5 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)]">How much BAC water for a 5 mg semaglutide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1 mL of BAC water gives 5 mg/mL, so a 0.25 mg dose is 5 units. 2 mL gives 2.5 mg/mL, so 0.25 mg is 10 units. At 0.25 mg a dose, a 5 mg vial holds 20 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Semaglutide 5 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.25 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1.7 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.4 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            1 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            5 units<span className="block text-[11px] text-[var(--muted)]">0.05 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            34 units<span className="block text-[11px] text-[var(--muted)]">0.34 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            48 units<span className="block text-[11px] text-[var(--muted)]">0.48 mL</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">2.5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            40 units<span className="block text-[11px] text-[var(--muted)]">0.4 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            68 units<span className="block text-[11px] text-[var(--muted)]">0.68 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            96 units<span className="block text-[11px] text-[var(--muted)]">0.96 mL</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 10 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)]">How much BAC water for a 10 mg semaglutide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2 mL of BAC water gives 5 mg/mL, so a 0.25 mg dose is 5 units. 4 mL gives 2.5 mg/mL, so 0.25 mg is 10 units. At 0.25 mg a dose, a 10 mg vial holds 40 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Semaglutide 10 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.25 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1.7 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.4 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            5 units<span className="block text-[11px] text-[var(--muted)]">0.05 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            34 units<span className="block text-[11px] text-[var(--muted)]">0.34 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            48 units<span className="block text-[11px] text-[var(--muted)]">0.48 mL</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            4 mL<span className="block text-[11px] font-normal text-[var(--muted)]">2.5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            40 units<span className="block text-[11px] text-[var(--muted)]">0.4 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            68 units<span className="block text-[11px] text-[var(--muted)]">0.68 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            96 units<span className="block text-[11px] text-[var(--muted)]">0.96 mL</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 15 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)]">How much BAC water for a 15 mg semaglutide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1.5 mL of BAC water gives 10 mg/mL, so a 0.25 mg dose is 2.5 units. 3 mL gives 5 mg/mL, so 0.25 mg is 5 units. At 0.25 mg a dose, a 15 mg vial holds 60 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Semaglutide 15 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.25 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1.7 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.4 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            1.5 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            2.5 units<span className="block text-[11px] text-[var(--muted)]">0.03 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            5 units<span className="block text-[11px] text-[var(--muted)]">0.05 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            17 units<span className="block text-[11px] text-[var(--muted)]">0.17 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            24 units<span className="block text-[11px] text-[var(--muted)]">0.24 mL</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            3 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            5 units<span className="block text-[11px] text-[var(--muted)]">0.05 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            34 units<span className="block text-[11px] text-[var(--muted)]">0.34 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            48 units<span className="block text-[11px] text-[var(--muted)]">0.48 mL</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 20 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ink)]">How much BAC water for a 20 mg semaglutide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2 mL of BAC water gives 10 mg/mL, so a 0.25 mg dose is 2.5 units. 4 mL gives 5 mg/mL, so 0.25 mg is 5 units. At 0.25 mg a dose, a 20 mg vial holds 80 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Semaglutide 20 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.25 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">0.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">1.7 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.4 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            2.5 units<span className="block text-[11px] text-[var(--muted)]">0.03 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            5 units<span className="block text-[11px] text-[var(--muted)]">0.05 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            17 units<span className="block text-[11px] text-[var(--muted)]">0.17 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            24 units<span className="block text-[11px] text-[var(--muted)]">0.24 mL</span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            4 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            5 units<span className="block text-[11px] text-[var(--muted)]">0.05 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            34 units<span className="block text-[11px] text-[var(--muted)]">0.34 mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)]" style={{ "fontFamily": "var(--font-mono)" }}>
                            48 units<span className="block text-[11px] text-[var(--muted)]">0.48 mL</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Dosing Calculation Example */}
            <div>
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
                Dosing Calculation Example: Semaglutide 0.25 mg starting dose
              </h2>
              <p className="mt-3 text-[var(--ink-soft)]">
                Here is how the math works for the most common semaglutide starting setup.
              </p>
              <div className="mt-5 rounded-[12px] border border-[var(--border-color)] bg-[var(--accent-soft)] p-6">
                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  You have a <strong>5 mg vial of compounded semaglutide</strong> and add <strong>2 mL of bacteriostatic water</strong>. Your starting dose is <strong>0.25 mg (250 mcg) weekly</strong> using a <strong>1 mL (100-unit) insulin syringe</strong>.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--ink-soft)]">
                  <li>
                    <span className="font-medium">Concentration:</span> <span style={{ "fontFamily": "var(--font-mono)" }}>5 mg ÷ 2 mL = 2.5 mg/mL</span>
                  </li>
                  <li>
                    <span className="font-medium">Dose volume:</span> <span style={{ "fontFamily": "var(--font-mono)" }}>250 mcg ÷ 2,500 mcg/mL = 0.1 mL</span>
                  </li>
                  <li>
                    <span className="font-medium">Syringe units:</span> <span style={{ "fontFamily": "var(--font-mono)" }}>0.1 mL × 100 = <strong>10 units</strong></span>
                  </li>
                  <li>
                    <span className="font-medium">Doses per vial:</span> <span style={{ "fontFamily": "var(--font-mono)" }}>5,000 mcg ÷ 250 mcg = <strong>20 weekly doses (≈5 months)</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How to Reconstitute */}
            <div id="how-to-reconstitute-semaglutide" className="scroll-mt-24">
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
                How to reconstitute compounded semaglutide
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Compounded semaglutide is supplied as lyophilized (freeze-dried) powder and must be mixed with bacteriostatic water before use. Follow your prescribing clinician's specific instructions — the steps below are a general guide.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-ink)]">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">Gather supplies</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      Semaglutide vial (lyophilized powder), bacteriostatic water (BAC water), sterile U-100 insulin syringes, 70% isopropyl alcohol swabs, and a sharps container.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-ink)]">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">Bring vials to room temperature</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      Allow both the semaglutide vial and the bacteriostatic water to sit at room temperature for 15–30 minutes before mixing. Cold-to-cold mixing increases the risk of foaming.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-ink)]">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">Swab and inject BAC water slowly</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      Swab both rubber stoppers with a fresh alcohol swab. Draw the correct BAC water volume and inject it slowly into the semaglutide vial, aiming the stream along the inner glass wall at a 45° angle — not directly at the powder.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-ink)]">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">Gently swirl until clear</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      Slowly rotate or swirl the vial until the solution is completely clear. Do not shake. Semaglutide may take several minutes to fully dissolve. A cloudy or particulate solution should not be used.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-ink)]">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">Label and refrigerate</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      Mark the vial with the reconstitution date. Store at 2–8°C (36–46°F). Reconstituted semaglutide with bacteriostatic water is typically stable for 3–4 weeks refrigerated — follow your pharmacy's specific guidance.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-[var(--muted)]">
                For a complete reconstitution guide covering all peptides, sterile technique, and common mistakes, read{' '}
                <a className="text-[var(--accent-ink)] hover:underline" href="/how-to-reconstitute-peptides">
                  how to reconstitute peptides
                </a>.
              </p>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="scroll-mt-24">
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
                Frequently asked questions
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Common questions about semaglutide reconstitution, dosage calculations, and syringe units.
              </p>
              <div className="mt-6 divide-y divide-[var(--border-color)] rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How many units is 0.25 mg of semaglutide?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      It depends on your concentration. At 2.5 mg/mL (5 mg vial + 2 mL BAC water): 0.25 mg = 0.1 mL = 10 units on a U-100 syringe. At 2 mg/mL (5 mg vial + 2.5 mL): 0.25 mg = 0.125 mL ≈ 12.5 units. Use the calculator above to get the exact units for your specific setup.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How much bacteriostatic water do I add to a 5 mg semaglutide vial?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      The most common setup is 2 mL of bacteriostatic water into a 5 mg semaglutide vial, yielding a 2.5 mg/mL concentration. This is recommended because the starting dose (0.25 mg/week) equals a clean 10 units on a U-100 syringe, making measurement easy and accurate. Some protocols use 1 mL (5 mg/mL) for a more concentrated solution with a smaller injection volume.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How many units is 0.5 mg of semaglutide?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      At 2.5 mg/mL concentration: 0.5 mg = 0.2 mL = 20 units on a U-100 syringe. At 2 mg/mL: 0.5 mg = 0.25 mL = 25 units. The semaglutide reconstitution calculator above will give you the exact reading for your specific vial and water setup.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How many units is 1 mg of semaglutide?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      At 2.5 mg/mL (5 mg vial + 2 mL BAC water): 1 mg = 0.4 mL = 40 units. At 5 mg/mL (5 mg vial + 1 mL BAC water): 1 mg = 0.2 mL = 20 units. Use the calculator to find your exact number.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How many units is 2 mg of semaglutide?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      At 2.5 mg/mL concentration: 2 mg = 0.8 mL = 80 units. At 5 mg/mL: 2 mg = 0.4 mL = 40 units. Note: if you're on a 2 mg dose at 2.5 mg/mL, you'll need a 1 mL syringe to fit the full 80 units.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How do I reconstitute a 10 mg semaglutide vial?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      For a 10 mg semaglutide vial, a common setup is 2 mL of BAC water (yielding 5 mg/mL) or 4 mL (yielding 2.5 mg/mL). At 5 mg/mL, a 0.25 mg starting dose = 0.05 mL = 5 units. At 2.5 mg/mL, 0.25 mg = 10 units. Select your vial size and water volume in the calculator above for your exact reading.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">How long does reconstituted semaglutide last?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      Compounded semaglutide reconstituted with bacteriostatic water is typically stable for 3–4 weeks when stored refrigerated at 2–8°C (36–46°F). Freeze aliquots at -20°C for longer storage (up to 3 months). Always follow your compounding pharmacy's specific stability guidance, which takes precedence over general estimates.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">What concentration should I use for semaglutide?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      There is no single correct concentration — it depends on your dose and your prescriber's instructions. The most common starting setup is 2 mL BAC water into a 5 mg vial (2.5 mg/mL) because the starting dose of 0.25 mg equals exactly 10 units on a U-100 syringe, which is easy to measure accurately. Your compounding pharmacy may also prepare pre-mixed vials at a specified concentration.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-medium leading-snug">What needle should I use to inject semaglutide?</span>
                    <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      Most semaglutide injections are administered subcutaneously using a 29G or 31G insulin syringe with a ½-inch needle. Common injection sites include the lower abdomen, thigh, or upper arm. Always rotate injection sites and follow your prescriber's specific instructions.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Sources */}
            <div id="sources" className="scroll-mt-24">
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
                Sources
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                The dose steps on this page come from the published semaglutide trials and prescribing information. The unit math is standard U-100 syringe arithmetic: 100 units = 1 mL.
              </p>
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--ink-soft)]">
                <li>
                  Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021;384(11):989-1002.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/33567185/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    PubMed
                  </a>
                </li>
                <li>
                  Novo Nordisk. Wegovy (semaglutide) injection: Prescribing Information, Dosage and Administration.{' '}
                  <a href="https://www.novo-pi.com/wegovy.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    novo-pi.com
                  </a>
                </li>
                <li>
                  Novo Nordisk. Ozempic (semaglutide) injection: Prescribing Information.{' '}
                  <a href="https://www.novo-pi.com/ozempic.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    novo-pi.com
                  </a>
                </li>
                <li>
                  U.S. Food and Drug Administration. FDA alerts health care providers, compounders and patients of dosing errors associated with compounded injectable semaglutide products.{' '}
                  <a href="https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-patients-dosing-errors-associated-compounded" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    fda.gov
                  </a>
                </li>
              </ol>
            </div>

            {/* Related Tools */}
            <div className="rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5">
              <p className="text-sm font-semibold text-[var(--ink)]">Related tools</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3 sm:flex-wrap">
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/peptide-calculator?peptide=semaglutide">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Peptide Calculator (semaglutide preset)
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/semaglutide-units-converter">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Semaglutide Units Converter
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/tirzepatide-reconstitution-calculator">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Tirzepatide Reconstitution Calculator
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/retatrutide-dosage-calculator">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Retatrutide Dosage Calculator
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/bac-water-calculator">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  BAC Water Calculator
                </a>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5">
              <p className="text-xs leading-relaxed text-[var(--muted)]">
                <strong className="text-[var(--ink)]">Medical Disclaimer:</strong> This semaglutide reconstitution calculator is provided for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. All dosing should be determined and supervised by a licensed healthcare provider. The dosing references on this page are general guidelines and may not be appropriate for your individual circumstances. Compounded semaglutide is not equivalent to FDA-approved brand-name semaglutide products. Always consult your prescriber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Dosing & Reconstitution Guides */}
      <section style={{ "background": "var(--surface)", "borderTop": "1px solid var(--border-color)", "padding": "clamp(56px, 8vw, 88px) 0" }}>
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <h2 className="font-heading" style={{ "fontSize": "clamp(1.5rem, 3vw, 2rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "var(--ink)", "margin": "0" }}>
            Dosing &amp; reconstitution guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]" href="/peptides/semaglutide">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <FlaskConical className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Semaglutide Overview
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Full semaglutide profile — dosing, titration, side effects, mechanism, and FDA status.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <a className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]" href="/how-to-reconstitute-peptides">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <Beaker className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  How to Reconstitute Peptides
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Step-by-step guide to mixing lyophilized peptides with bacteriostatic water, sterile technique, and common mistakes.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <a className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]" href="/peptide-dosage-guide">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <BookOpen className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Peptide Dosage Guide
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Dosing charts for popular peptides with FDA-approved, clinical-trial, and practitioner-reported ranges clearly labeled.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: Clinic CTA Band */}
      <section style={{ "background": "var(--canvas)", "padding": "clamp(40px, 6vw, 64px) 0" }}>
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="feature-band" data-has-media="false" style={{ "background": "var(--accent)", "borderRadius": "24px", "padding": "clamp(28px, 5vw, 56px)", "display": "grid", "gridTemplateColumns": "1fr", "gap": "clamp(28px, 4vw, 48px)", "alignItems": "center" }}>
            <div>
              <span style={{ "display": "inline-block", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "rgba(255,255,255,0.9)", "marginBottom": "14px" }}>
                Looking for a prescriber?
              </span>
              <h2 className="font-heading" style={{ "fontSize": "clamp(1.75rem, 4vw, 2.5rem)", "fontWeight": "800", "lineHeight": "1.1", "letterSpacing": "-0.01em", "color": "#FFFFFF", "margin": "0" }}>
                Find a semaglutide-prescribing clinic
              </h2>
              <p style={{ "fontSize": "clamp(1rem, 2vw, 1.125rem)", "color": "rgba(255,255,255,0.9)", "lineHeight": "1.6", "margin": "16px 0 0", "maxWidth": "52ch" }}>
                Find a verified clinic that prescribes compounded semaglutide and provides personalized dosing guidance near you.
              </p>
              <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap", "marginTop": "28px" }}>
                <a
                  className="band-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '12px 22px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease, background 0.15s ease, opacity 0.15s ease',
                    background: '#FFFFFF',
                    color: 'var(--accent-ink)',
                  }}
                  href="/clinics?peptide=semaglutide"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Find a Clinic
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .feature-band[data-has-media="true"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
