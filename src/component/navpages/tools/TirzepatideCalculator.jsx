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
import syringeLargeSvg from '../../../assets/tools/tirzepatide-calculator/syringe-large.svg';
import syringeMediumSvg from '../../../assets/tools/tirzepatide-calculator/syringe-medium.svg';
import syringeSmallSvg from '../../../assets/tools/tirzepatide-calculator/syringe-small.svg';
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
  price: 69,
  priceNote: 'Same price any dose · + $199/yr membership, 21 days free',
  peptideName: 'tirzepatide',
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
    <div className="space-y-3">
      {!hideLabel && (
        <p className="text-sm font-semibold text-[var(--ink)]">
          {label}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
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
        <div className="relative w-full sm:max-w-[200px]">
          <input
            type="number"
            min="0"
            step={step}
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
            placeholder={`Enter ${unit}`}
            className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] px-4 py-2 pr-14 text-sm focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)]">
            {unit}
          </span>
        </div>
      )}
    </div>
  );
}

function CalculatorMobileAccordion({ title, subtitle, selectedLabel, open, onToggle, children }) {
  return (
    <section className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-[var(--ink)]">
              {title}
            </p>
            {!open && selectedLabel && selectedLabel !== 'Not set' && (
              <span className="rounded-full border border-transparent bg-[var(--accent-soft)] text-[var(--accent-ink)] px-2.5 py-0.5 text-xs font-semibold">
                {selectedLabel}
              </span>
            )}
          </div>
          {open && (
            <p className="mt-0.5 text-xs text-[var(--muted)]">
              {subtitle}
            </p>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--accent-ink)] transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="border-t border-[var(--border-color)] px-4 py-4">
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
            <span className="font-semibold">Want this prescribed?</span> Licensed doctors, compounded tirzepatide from ${offer.price}/mo.
          </p>
        </div>
        <a
          href={offer.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] leading-[24px] font-semibold text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
        >
          See if I qualify
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
      <p className="mt-2 text-[11px] leading-[18px] text-[var(--muted)]">
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
    window.location.href = '/signup';
  };

  return (
    <div
      className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-5 sm:p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.30),0_0_3px_0_rgba(0,0,0,0.06)]"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p
            className="font-heading text-xl font-extrabold leading-tight tracking-[-0.2px] md:tracking-[-0.24px]  text-[var(--ink)] sm:text-2xl"
          >
            Keep this dose — track every injection free
          </p>
          <p className="mt-1.5 text-sm text-[var(--muted)]">
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
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent-ink)] px-3 py-1.5 text-xs font-semibold"
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
            className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white text-[16px] leading-[24px]  transition-all shadow-[0_2px_8px_rgba(11,124,132,0.25)] hover:shadow-[0_4px_12px_rgba(11,124,132,0.35)]"
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
/* MAIN COMPONENT: TirzepatideCalculator                              */
/* ------------------------------------------------------------------ */

export default function TirzepatideCalculator() {
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
    return 10;
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
    return 50;
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

  const activeVial = useMemo(() => {
    if (customVial) {
      const parsed = parseFloat(customVialInput);
      return !isNaN(parsed) && parsed > 0 ? parsed : null;
    }
    return vialValue;
  }, [customVial, customVialInput, vialValue]);

  const activeWater = useMemo(() => {
    if (customWater) {
      const parsed = parseFloat(customWaterInput);
      return !isNaN(parsed) && parsed > 0 ? parsed : null;
    }
    return waterValue;
  }, [customWater, customWaterInput, waterValue]);

  const activeDose = useMemo(() => {
    if (customDose) {
      const parsed = parseFloat(customDoseInput);
      return !isNaN(parsed) && parsed > 0 ? parsed : null;
    }
    return doseValue;
  }, [customDose, customDoseInput, doseValue]);

  const activeSyringe = syringeOptions[syringeIndex];

  const calcResults = useMemo(() => {
    if (
      !activeVial ||
      !activeWater ||
      !activeDose ||
      activeVial <= 0 ||
      activeWater <= 0 ||
      activeDose <= 0
    ) {
      return null;
    }
    const concentrationMgPerMl = activeVial / activeWater;
    const doseVolumeMl = activeDose / (1000 * concentrationMgPerMl);
    const doseUnits = (doseVolumeMl / activeSyringe.value) * activeSyringe.units;
    const dosesPerVial = Math.floor((1000 * activeVial) / activeDose);
    const exceeds = doseVolumeMl > activeSyringe.value;
    return {
      concentrationMgPerMl,
      doseVolumeMl,
      doseUnits,
      dosesPerVial,
      exceeds,
    };
  }, [activeVial, activeWater, activeDose, activeSyringe]);

  const costResults = useMemo(() => {
    if (!calcResults || !vialCost || calcResults.dosesPerVial <= 0) return null;
    const parsedCost = parseFloat(vialCost);
    if (isNaN(parsedCost) || parsedCost <= 0) return null;

    const freq = dosingFrequencies[frequencyIndex];
    const costPerDose = parsedCost / calcResults.dosesPerVial;
    const costPerWeek = costPerDose * freq.value;
    const daysSupply = Math.floor(calcResults.dosesPerVial / (freq.value / 7));
    return {
      costPerDose,
      costPerWeek,
      daysSupply,
    };
  }, [calcResults, vialCost, frequencyIndex]);

  const formatParamLabel = useCallback((val, unit) => {
    if (!val || !Number.isFinite(val) || val <= 0) return 'Not set';
    const display = val % 1 === 0 ? val.toFixed(0) : String(val);
    return `${display} ${unit}`;
  }, []);

  const getCalcPayload = useCallback(() => {
    if (!calcResults || calcResults.exceeds || !activeVial || !activeWater || !activeDose) return null;
    return {
      tool: 'reconstitution',
      preset_id: 'tirzepatide',
      vial_mg: activeVial,
      water_ml: activeWater,
      dose_mcg: activeDose,
      syringe_ml: activeSyringe.value,
      vial_cost: vialCost ? parseFloat(vialCost) : null,
    };
  }, [calcResults, activeVial, activeWater, activeDose, activeSyringe.value, vialCost]);

  return (
    <main id="main-content" className="flex-1">
      {/* SECTION 0: Hero & Breadcrumb */}
      <section className="bg-gradient-to-b from-[var(--accent-soft)] to-[var(--canvas)] border-b border-[var(--border-color)] pt-[clamp(28px,5vw,56px)] pb-[clamp(40px,6vw,72px)] px-0">
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
              <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">Tirzepatide Reconstitution Calculator</span>
              )
            </span>
          </nav>
          <div className="mt-5 sm:mt-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-[var(--accent-ink)] bg-[var(--surface)] border border-[var(--border-color)] rounded-full px-3 py-1.5">
              <Beaker className="h-3.5 w-3.5" aria-hidden="true" />
              Free Reconstitution Tool
            </span>
            <h1 className="font-heading text-[clamp(2rem,5.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.005em] text-[var(--ink)] mt-4">
              Tirzepatide Reconstitution Calculator
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] leading-relaxed text-[var(--muted)]">
              <span>Last updated: <time dateTime="2026-10-12">October 12, 2026</time></span>
              <span aria-hidden="true">·</span>
              <span>Medically reviewed by the MyPeptideMatch Editorial Team</span>
            </div>
            <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.6] text-[var(--ink)] font-semibold mt-4 max-w-[62ch]">
              Example: 10 mg + 2 mL = 5 mg/mL, so a 2.5 mg dose is 50 units.
            </p>
            <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.6] text-[var(--ink-soft)] mt-4 max-w-[62ch]">
              Calculate the exact insulin syringe units for your compounded tirzepatide dose. Enter your vial size, bacteriostatic water volume, and weekly dose for an instant, precise reading — for 5 mg, 10 mg, and 15 mg vials.
            </p>
            <p className="mt-3 text-[12px] leading-relaxed text-[var(--muted)] sm:text-sm">
              <span className="font-medium text-[var(--ink)]">Also called:</span>{' '}
              <span className="font-medium text-[var(--ink)]">tirzepatide calculator</span>
              <span aria-hidden="true"> · </span>
              <span className="font-medium text-[var(--ink)]">tirzepatide units calculator</span>
              <span aria-hidden="true"> · </span>
              <span className="font-medium text-[var(--ink)]">tirzepatide dosage calculator</span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 font-semibold text-white shadow-sm transition-all active:scale-[0.99]"
                href="#calculator"
              >
                Jump to calculator
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 font-medium text-[var(--ink)] hover:bg-[var(--canvas)]"
                href="#how-to-reconstitute-tirzepatide"
              >
                How it works
              </a>
            </div>
            <div className="mt-5 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="scroll-fade-container flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-start sm:overflow-visible sm:pb-0 leading-[18px]">
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#calculator">Calculator</a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#dosage-chart">Dosage chart</a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#vial-sizes">By vial size</a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#dosing-example">Dosing example</a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#how-to-reconstitute-tirzepatide">How to reconstitute</a>
                <a className="whitespace-nowrap rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-ink)] sm:text-xs" href="#faq">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Calculator Component & Telehealth Card */}
      <section id="calculator" className="scroll-mt-24 bg-[var(--surface)] py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1100px]">
          <div
            className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] shadow-sm"
          >
            {/* Preset Banner */}
            <div
              className="border-b border-[var(--border-color)] bg-[var(--accent-soft)] p-4 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    Preset: Tirzepatide
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--ink-soft)]">
                    Vial and BAC water defaults are prefilled. Choose your dose below.
                  </p>
                </div>
                <a
                  href="/peptides/tirzepatide"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-ink)] hover:underline"
                >
                  View Tirzepatide dosing guide →
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
                          className={`mt-0.5 block text-xs font-normal ${isSelected ? 'text-white/80' : 'text-[var(--muted)]'}`}
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
                selectedLabel={formatParamLabel(activeVial, 'mg')}
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
                selectedLabel={formatParamLabel(activeWater, 'mL')}
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
                selectedLabel={formatParamLabel(activeDose, 'mcg')}
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

            {/* Desktop Two-Column Layout (hidden lg:flex) */}
            <div className="hidden lg:flex lg:flex-row">
              {/* Left Column: Syringe Selector */}
              <div
                className="border-b border-[var(--border-color)] bg-[var(--canvas)] p-6 sm:p-8 lg:w-[45%] lg:border-b-0 lg:border-r"
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--accent-ink)]"
                >
                  Step 1 — Syringe
                </p>
                <p
                  className="mt-1 text-base font-semibold text-[var(--ink)]"
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
                        className={`flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-150 ${
                          isSelected
                            ? 'border-[var(--accent)] bg-[var(--accent-soft)] shadow-[0_2px_10px_rgba(11,124,132,0.15)]'
                            : 'border-[var(--border-color)] bg-[var(--surface)] shadow-none'
                        }`}
                      >
                        <span
                          className={`shrink-0 text-base font-bold ${
                            isSelected ? 'text-[var(--accent-ink)]' : 'text-[var(--ink)]'
                          }`}
                        >
                          {opt.label}
                        </span>
                        <span
                          className="shrink-0 text-xs font-semibold text-[var(--muted)]"
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

              {/* Right Column: Steps 2, 3, 4 */}
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

            {/* Results Section */}
            <div
              className="border-t border-[var(--border-color)] bg-gradient-to-b from-[var(--accent-soft)] to-[var(--canvas)] p-3 sm:p-7 lg:p-8"
            >
              {calcResults ? (
                calcResults.exceeds ? (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-[#F2DBBE] bg-[var(--color-warning-soft,#FFF8ED)] p-4"
                  >
                    <AlertTriangle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#C05621]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-[#9C4221]">
                        Syringe volume is not sufficient for this dose
                      </p>
                      <p className="mt-1 text-sm text-[var(--ink-soft)]">
                        Your dose requires{' '}
                        <span
                          className="font-semibold text-[var(--ink)] font-sans"
                        >
                          {calcResults.doseVolumeMl.toFixed(3)} ml
                        </span>
                        , but your {activeSyringe.label} syringe only holds {activeSyringe.value} ml. Try a larger syringe, add more bacteriostatic water, or lower your dose.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {/* Your Dose card */}
                    <div
                      className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-4 sm:p-6 shadow-[0_1px_2px_rgba(160,160,160,0.04)]"
                    >
                      <span
                        className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--accent-ink)]"
                      >
                        Your Dose
                      </span>
                      <p className="mt-2 text-sm text-[var(--ink-soft)]">
                        To get a dose of{' '}
                        <span className="font-semibold text-[var(--ink)]">
                          {activeDose} mcg
                        </span>
                        , pull the syringe to:
                      </p>
                      <p className="mt-2 flex items-baseline gap-2">
                        <span
                          className="font-heading text-5xl font-extrabold tracking-[-0.48px] md:tracking-[-0.6px] sm:text-6xl text-[var(--accent-ink)] leading-none"
                        >
                          {calcResults.doseUnits % 1 === 0
                            ? calcResults.doseUnits.toFixed(0)
                            : calcResults.doseUnits.toFixed(1)}
                        </span>
                        <span
                          className="text-lg font-bold uppercase tracking-[-0.9px] text-[var(--muted)]"
                        >
                          {calcResults.doseUnits === 1 ? 'unit' : 'units'}
                        </span>
                      </p>
                      <div className="mt-5 font-[11px] leading-[18px]">
                        <SyringeVisualIndicator
                          totalUnits={activeSyringe.units}
                          doseUnits={calcResults.doseUnits}
                        />
                      </div>
                      <RxResultStrip />
                    </div>

                    {/* Stats 3 columns */}
                    <div
                      className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]"
                    >
                      {[
                        { label: 'Concentration', value: `${calcResults.concentrationMgPerMl.toFixed(2)} mg/ml` },
                        { label: 'Volume', value: `${calcResults.doseVolumeMl.toFixed(3)} ml` },
                        { label: 'Doses / Vial', value: String(calcResults.dosesPerVial) },
                      ].map((stat, idx) => (
                        <div
                          key={stat.label}
                          className={`min-w-0 px-2 py-4 text-center sm:px-3 ${
                            idx === 0 ? '' : 'border-l border-[var(--border-color)]'
                          }`}
                        >
                          <p
                            className="text-[10px] font-bold uppercase leading-[16px] md:leading-[18px] tracking-[0.04em] sm:text-[11px] sm:tracking-[0.06em] text-[var(--muted)]"
                          >
                            {stat.label}
                          </p>
                          <p
                            className="mt-1.5 text-sm font-semibold sm:text-base font-sans text-[var(--ink)]"
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
                          className="space-y-4 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-4 sm:p-5"
                        >
                          <p
                            className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--accent-ink)]"
                          >
                            Cost Per Dose Calculator
                          </p>
                          <div className="flex flex-wrap items-end gap-4">
                            <div>
                              <label
                                className="mb-1 block text-xs font-semibold text-[var(--ink-soft)]"
                              >
                                Vial cost ($)
                              </label>
                              <div className="relative max-w-[140px]">
                                <span
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[var(--muted)]"
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
                                  className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--surface)] text-[var(--ink)] py-2 pl-7 pr-3 text-sm focus:outline-none"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                className="mb-1 block text-xs font-semibold text-[var(--ink-soft)]"
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
                              className="flex flex-wrap gap-6 rounded-xl bg-[var(--accent-soft)] px-4 py-3 text-sm"
                            >
                              <div>
                                <span className="text-[var(--ink-soft)]">Cost per dose: </span>
                                <span
                                  className="font-semibold font-sans text-[var(--accent-ink)]"
                                >
                                  ${costResults.costPerDose.toFixed(2)}
                                </span>
                              </div>
                              <div>
                                <span className="text-[var(--ink-soft)]">Cost per week: </span>
                                <span
                                  className="font-semibold font-sans text-[var(--accent-ink)]"
                                >
                                  ${costResults.costPerWeek.toFixed(2)}
                                </span>
                              </div>
                              <div>
                                <span className="text-[var(--ink-soft)]">Vial lasts: </span>
                                <span
                                  className="font-semibold font-sans text-[var(--accent-ink)]"
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
                          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)] text-[var(--accent-ink)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold transition-all hover:scale-[1.02]"
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
                <p className="text-center text-sm text-[var(--muted)]">
                  Select all options above to calculate your dose
                </p>
              )}
            </div>
          </div>

          {/* Telehealth Partner Aside Card */}
          <aside aria-label="Get tirzepatide prescribed online" className="mt-8 overflow-hidden rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] shadow-[0_6px_24px_rgba(28,37,34,0.08)]">
            <div className="flex items-center gap-2 border-b border-[var(--border-color)] bg-[var(--accent-soft)] px-5 py-2.5 text-xs font-semibold text-[var(--accent-ink)] sm:px-6">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
              Licensed US doctors · Our telehealth partner
            </div>
            <div className="grid gap-6 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
              <div>
                <p className="text-lg font-semibold text-[var(--ink)]">Prefer a prescription from a licensed provider?</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                  Collective’s doctors can prescribe compounded tirzepatide after a quick online health review.
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-[var(--ink-soft)] sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#2E7D32]" strokeWidth={1.5} aria-hidden="true" />
                    Same price at every dose
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#2E7D32]" strokeWidth={1.5} aria-hidden="true" />
                    Unlimited doctor messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#2E7D32]" strokeWidth={1.5} aria-hidden="true" />
                    2-day express shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#2E7D32]" strokeWidth={1.5} aria-hidden="true" />
                    Refund if not approved
                  </li>
                </ul>
              </div>
              <div className="rounded-[12px] bg-[var(--canvas)] p-4 text-center sm:w-[240px]">
                <p className="text-xs text-[var(--muted)]">As low as</p>
                <p className="text-3xl font-bold text-[var(--ink)]">
                  $69<span className="text-base font-medium text-[var(--muted)]">/mo</span>
                </p>
                <p className="mb-3 text-xs text-[var(--muted)]">
                  Same price any dose · + $199/yr membership, 21 days free
                </p>
                <a
                  href={RX_PARTNER.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#FEED5A] px-6 py-3 text-[15px] leading-[24px] font-semibold text-[var(--ink)] shadow-[0_2px_0_rgba(28,37,34,0.18)] transition-all hover:bg-[#FFF04B] hover:shadow-[0_4px_12px_rgba(254,237,90,0.55)]"
                >
                  See if I qualify
                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
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

      {/* SECTION 2: Educational Guide, Tables & FAQ */}
      <section className="bg-[var(--canvas)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[820px]">
          <div className="space-y-16">
            {/* 1. Dosage Chart */}
            <div id="dosage-chart" className="scroll-mt-24">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                Tirzepatide dosage chart — mg to syringe units
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-[26px]">
                Look up your tirzepatide dose in the left column and find the corresponding units based on your reconstitution concentration. All values use a standard{' '}
                <strong>U-100 (1 mL) insulin syringe</strong>. Values marked with * exceed one syringe and require split injections — confirm the approach with your prescriber.
              </p>
              <div className="mt-6 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                <table className="w-full min-w-[480px] text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                      <th className="py-3 pr-4 text-left font-semibold text-[var(--ink)] pl-4">Dose</th>
                      <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">
                        5 mg/mL
                        <span className="block text-[11px] font-normal text-[var(--muted)]">10 mg + 2 mL</span>
                      </th>
                      <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">
                        7.5 mg/mL
                        <span className="block text-[11px] font-normal text-[var(--muted)]">15 mg + 2 mL</span>
                      </th>
                      <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">
                        2.5 mg/mL
                        <span className="block text-[11px] font-normal text-[var(--muted)]">10 mg + 4 mL</span>
                      </th>
                      <th className="py-3 text-left font-semibold text-[var(--ink)] pr-4">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)]">
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)] pl-4 font-sans">2.5 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">33 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">100 units</td>
                      <td className="py-3 text-xs text-[var(--muted)] pr-4">Starting dose (weeks 1–4)</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)] pl-4 font-sans">5 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">67 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">200 units*</td>
                      <td className="py-3 text-xs text-[var(--muted)] pr-4">Titration dose (weeks 5–8)</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)] pl-4 font-sans">7.5 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">150 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">300 units*</td>
                      <td className="py-3 text-xs text-[var(--muted)] pr-4">Titration dose (weeks 9–12)</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)] pl-4 font-sans">10 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">200 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">133 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">400 units*</td>
                      <td className="py-3 text-xs text-[var(--muted)] pr-4">Maintenance dose</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)] pl-4 font-sans">12.5 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">250 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">167 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">500 units*</td>
                      <td className="py-3 text-xs text-[var(--muted)] pr-4">Higher maintenance</td>
                    </tr>
                    <tr className="hover:bg-[var(--canvas)]">
                      <td className="py-3 pr-4 font-medium text-[var(--ink)] pl-4 font-sans">15 mg</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">300 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">200 units*</td>
                      <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">600 units*</td>
                      <td className="py-3 text-xs text-[var(--muted)] pr-4">FDA-approved Zepbound max dose</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-[var(--muted)]">
                * Values exceeding 100 units require splitting into multiple injections. Consult your prescriber for the recommended injection approach at higher doses.
              </p>
            </div>

            {/* 2. How much BAC water for each vial size (8 cards) */}
            <div id="vial-sizes" className="scroll-mt-24">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                How much BAC water for each tirzepatide vial size
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-[26px]">
                Compounded tirzepatide vials come in sizes from 5 mg to 60 mg. For each size below are two water volumes that give a round concentration, with the units to draw at each step of the label dose schedule: 2.5, 5, 7.5, 10, 12.5 mg, up to 15 mg.<sup><a href="#sources" className="text-[var(--accent-ink)] hover:underline">[2]</a></sup> More water lowers the concentration, so the same dose takes more units. The larger volume only works if the vial has room for it, so check the fill capacity on the label first. Values marked * are over 100 units and won't fit in one 1 mL syringe. A dash means the dose is more than the whole vial holds.
              </p>

              <div className="mt-8 space-y-10">
                {/* 5 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 5 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1 mL of BAC water gives 5 mg/mL, so a 2.5 mg dose is 50 units. 2 mL gives 2.5 mg/mL, so 2.5 mg is 100 units. At 2.5 mg a dose, a 5 mg vial holds 2 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 5 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            1 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">2.5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">200 units*<span className="block text-[11px] text-[var(--muted)]">2 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 10 mg vial */}
                <div>
                  <h3 className="text-lg font-saira font-semibold text-[var(--ink)] tracking-[-0.18px]">How much BAC water for a 10 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1 mL of BAC water gives 10 mg/mL, so a 2.5 mg dose is 25 units. 2 mL gives 5 mg/mL, so 2.5 mg is 50 units. At 2.5 mg a dose, a 10 mg vial holds 4 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 10 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            1 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">200 units*<span className="block text-[11px] text-[var(--muted)]">2 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans"><span aria-hidden="true">—</span><span className="sr-only">More than the vial holds</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 15 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 15 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2 mL of BAC water gives 7.5 mg/mL, so a 2.5 mg dose is 33.3 units. 3 mL gives 5 mg/mL, so 2.5 mg is 50 units. At 2.5 mg a dose, a 15 mg vial holds 6 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 15 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">7.5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">33.3 units<span className="block text-[11px] text-[var(--muted)]">0.33 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">66.7 units<span className="block text-[11px] text-[var(--muted)]">0.67 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">133.3 units*<span className="block text-[11px] text-[var(--muted)]">1.33 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">166.7 units*<span className="block text-[11px] text-[var(--muted)]">1.67 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">200 units*<span className="block text-[11px] text-[var(--muted)]">2 mL</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            3 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">200 units*<span className="block text-[11px] text-[var(--muted)]">2 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">250 units*<span className="block text-[11px] text-[var(--muted)]">2.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">300 units*<span className="block text-[11px] text-[var(--muted)]">3 mL</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 20 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 20 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2 mL of BAC water gives 10 mg/mL, so a 2.5 mg dose is 25 units. 4 mL gives 5 mg/mL, so 2.5 mg is 50 units. At 2.5 mg a dose, a 20 mg vial holds 8 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 20 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">125 units*<span className="block text-[11px] text-[var(--muted)]">1.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            4 mL<span className="block text-[11px] font-normal text-[var(--muted)]">5 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">200 units*<span className="block text-[11px] text-[var(--muted)]">2 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">250 units*<span className="block text-[11px] text-[var(--muted)]">2.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">300 units*<span className="block text-[11px] text-[var(--muted)]">3 mL</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 30 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 30 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    1.5 mL of BAC water gives 20 mg/mL, so a 2.5 mg dose is 12.5 units. 3 mL gives 10 mg/mL, so 2.5 mg is 25 units. At 2.5 mg a dose, a 30 mg vial holds 12 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 30 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            1.5 mL<span className="block text-[11px] font-normal text-[var(--muted)]">20 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">12.5 units<span className="block text-[11px] text-[var(--muted)]">0.13 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">37.5 units<span className="block text-[11px] text-[var(--muted)]">0.38 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">62.5 units<span className="block text-[11px] text-[var(--muted)]">0.63 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            3 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">125 units*<span className="block text-[11px] text-[var(--muted)]">1.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 40 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 40 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2 mL of BAC water gives 20 mg/mL, so a 2.5 mg dose is 12.5 units. 4 mL gives 10 mg/mL, so 2.5 mg is 25 units. At 2.5 mg a dose, a 40 mg vial holds 16 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 40 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2 mL<span className="block text-[11px] font-normal text-[var(--muted)]">20 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">12.5 units<span className="block text-[11px] text-[var(--muted)]">0.13 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">37.5 units<span className="block text-[11px] text-[var(--muted)]">0.38 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">62.5 units<span className="block text-[11px] text-[var(--muted)]">0.63 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            4 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">125 units*<span className="block text-[11px] text-[var(--muted)]">1.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 50 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 50 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2.5 mL of BAC water gives 20 mg/mL, so a 2.5 mg dose is 12.5 units. 5 mL gives 10 mg/mL, so 2.5 mg is 25 units. At 2.5 mg a dose, a 50 mg vial holds 20 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 50 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2.5 mL<span className="block text-[11px] font-normal text-[var(--muted)]">20 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">12.5 units<span className="block text-[11px] text-[var(--muted)]">0.13 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">37.5 units<span className="block text-[11px] text-[var(--muted)]">0.38 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">62.5 units<span className="block text-[11px] text-[var(--muted)]">0.63 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            5 mL<span className="block text-[11px] font-normal text-[var(--muted)]">10 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">100 units<span className="block text-[11px] text-[var(--muted)]">1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">125 units*<span className="block text-[11px] text-[var(--muted)]">1.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--muted)] font-sans">150 units*<span className="block text-[11px] text-[var(--muted)]">1.5 mL</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 60 mg vial */}
                <div>
                  <h3 className="text-lg font-semibold font-saira tracking-[-0.18px] text-[var(--ink)]">How much BAC water for a 60 mg tirzepatide vial</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    2.4 mL of BAC water gives 25 mg/mL, so a 2.5 mg dose is 10 units. 3 mL gives 20 mg/mL, so 2.5 mg is 12.5 units. At 2.5 mg a dose, a 60 mg vial holds 24 doses.
                  </p>
                  <div className="relative mt-4 overflow-hidden overflow-x-auto rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                    <table className="w-full min-w-[480px] text-sm">
                      <caption className="sr-only">Tirzepatide 60 mg vial: U-100 syringe units per dose</caption>
                      <thead>
                        <tr className="border-b border-[var(--border-color)] bg-[var(--canvas)]">
                          <th className="py-3 pl-4 pr-4 text-left font-semibold text-[var(--ink)]">BAC water</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">2.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">7.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">10 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">12.5 mg</th>
                          <th className="py-3 pr-4 text-center font-semibold text-[var(--ink)]">15 mg</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-color)]">
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            2.4 mL<span className="block text-[11px] font-normal text-[var(--muted)]">25 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">10 units<span className="block text-[11px] text-[var(--muted)]">0.1 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">20 units<span className="block text-[11px] text-[var(--muted)]">0.2 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">30 units<span className="block text-[11px] text-[var(--muted)]">0.3 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">40 units<span className="block text-[11px] text-[var(--muted)]">0.4 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">60 units<span className="block text-[11px] text-[var(--muted)]">0.6 mL</span></td>
                        </tr>
                        <tr className="hover:bg-[var(--canvas)]">
                          <td className="py-3 pl-4 pr-4 font-medium text-[var(--ink)] font-sans">
                            3 mL<span className="block text-[11px] font-normal text-[var(--muted)]">20 mg/mL</span>
                          </td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">12.5 units<span className="block text-[11px] text-[var(--muted)]">0.13 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">25 units<span className="block text-[11px] text-[var(--muted)]">0.25 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">37.5 units<span className="block text-[11px] text-[var(--muted)]">0.38 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">50 units<span className="block text-[11px] text-[var(--muted)]">0.5 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">62.5 units<span className="block text-[11px] text-[var(--muted)]">0.63 mL</span></td>
                          <td className="py-3 pr-4 text-center text-[var(--ink)] font-sans">75 units<span className="block text-[11px] text-[var(--muted)]">0.75 mL</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Dosing Calculation Example */}
            <div id="dosing-example" className="scroll-mt-24">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                Dosing Calculation Example: Tirzepatide 2.5 mg starting dose
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-[26px]">
                Here is how the calculation works for the most common tirzepatide starting setup.
              </p>
              <div className="mt-5 rounded-[12px] border border-[var(--border-color)] bg-[var(--accent-soft)] p-6">
                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  You have a <strong>10 mg vial of compounded tirzepatide</strong> and add{' '}
                  <strong>2 mL of bacteriostatic water</strong>. Your starting dose is{' '}
                  <strong>2.5 mg (2,500 mcg) weekly</strong> using a{' '}
                  <strong>1 mL (100-unit) insulin syringe</strong>.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--ink-soft)]">
                  <li>
                    <span className="font-medium">Concentration:</span>{' '}
                    <span className="font-sans">10 mg ÷ 2 mL = 5.0 mg/mL</span>
                  </li>
                  <li>
                    <span className="font-medium">Dose volume:</span>{' '}
                    <span className="font-sans">2,500 mcg ÷ 5,000 mcg/mL = 0.5 mL</span>
                  </li>
                  <li>
                    <span className="font-medium">Syringe units:</span>{' '}
                    <span className="font-sans">0.5 mL × 100 = <strong>50 units</strong></span>
                  </li>
                  <li>
                    <span className="font-medium">Doses per vial:</span>{' '}
                    <span className="font-sans">10,000 mcg ÷ 2,500 mcg = <strong>4 weekly doses (1 month)</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. How to reconstitute */}
            <div id="how-to-reconstitute-tirzepatide" className="scroll-mt-24">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                How to reconstitute compounded tirzepatide
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-[26px]">
                Compounded tirzepatide is supplied as lyophilized (freeze-dried) powder. Always follow your prescribing clinician's or compounding pharmacy's instructions.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Gather supplies',
                    text: 'Tirzepatide vial (lyophilized powder), bacteriostatic water (BAC water), sterile U-100 insulin syringes, 70% isopropyl alcohol swabs, and a sharps container.',
                  },
                  {
                    step: 2,
                    title: 'Bring vials to room temperature',
                    text: 'Allow both the tirzepatide vial and the bacteriostatic water to sit at room temperature for 15–30 minutes before mixing to prevent foaming and incomplete dissolution.',
                  },
                  {
                    step: 3,
                    title: 'Swab and inject BAC water slowly',
                    text: 'Swab both rubber stoppers with a fresh alcohol swab and let air-dry. Draw the correct BAC water volume and inject slowly into the tirzepatide vial, aiming the stream along the inner glass wall at a 45° angle — not directly at the powder.',
                  },
                  {
                    step: 4,
                    title: 'Gently swirl until clear',
                    text: 'Slowly rotate or swirl the vial until the solution is completely clear. Do not shake. Tirzepatide may take several minutes to fully dissolve. A cloudy or particulate solution should not be injected.',
                  },
                  {
                    step: 5,
                    title: 'Label and refrigerate',
                    text: "Mark the vial with the reconstitution date. Store at 2–8°C (36–46°F). Most reconstituted tirzepatide with bacteriostatic water is stable for 3–4 weeks refrigerated — follow your pharmacy's specific guidance.",
                  },
                ].map(({ step, title, text }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-ink)]">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--ink)] font-saira leading-[26px] tracking-[-0.16px]">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-[var(--muted)]">
                For a complete reconstitution guide covering all peptides, read{' '}
                <a className="text-[var(--accent-ink)] hover:underline" href="/how-to-reconstitute-peptides">
                  how to reconstitute peptides
                </a>.
              </p>
            </div>

            {/* 5. FAQs */}
            <div id="faq" className="scroll-mt-24">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-[26px]">
                Common questions about tirzepatide reconstitution, dose calculations, and syringe units.
              </p>
              <div className="mt-6 divide-y divide-[var(--border-color)] rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)]">
                {[
                  {
                    q: 'How many units is 2.5 mg of tirzepatide?',
                    a: 'It depends on your concentration. At 5 mg/mL (10 mg vial + 2 mL BAC water): 2.5 mg = 0.5 mL = 50 units on a U-100 syringe. At 2.5 mg/mL (10 mg vial + 4 mL): 2.5 mg = 1.0 mL = 100 units. Use the calculator above for the exact units for your specific setup.',
                  },
                  {
                    q: 'How much bacteriostatic water do I add to a 10 mg tirzepatide vial?',
                    a: "A common setup is 2 mL of bacteriostatic water into a 10 mg tirzepatide vial, yielding a 5 mg/mL concentration. At this concentration, the starting dose of 2.5 mg equals 50 units on a U-100 syringe. Some clinicians recommend 3–4 mL for a more dilute solution, which is easier to measure accurately for smaller doses. Always follow your prescribing provider's specific instructions.",
                  },
                  {
                    q: 'How many units is 5 mg of tirzepatide?',
                    a: 'At 5 mg/mL (10 mg + 2 mL BAC water): 5 mg = 1.0 mL = 100 units (full syringe). At 7.5 mg/mL (15 mg + 2 mL): 5 mg = 0.67 mL ≈ 67 units. The calculator above handles any configuration instantly.',
                  },
                  {
                    q: 'How many units is 7.5 mg of tirzepatide?',
                    a: 'At 5 mg/mL (10 mg + 2 mL): 7.5 mg = 1.5 mL — this exceeds a single 1 mL syringe, so you may split into two injections or use a larger tirzepatide vial. At 7.5 mg/mL (15 mg + 2 mL): 7.5 mg = 1.0 mL = 100 units. At 5 mg/mL (15 mg + 3 mL): 7.5 mg = 1.5 mL. Check your specific setup with the calculator above.',
                  },
                  {
                    q: 'How many units is 10 mg of tirzepatide?',
                    a: 'At 5 mg/mL (15 mg + 3 mL): 10 mg = 2.0 mL — typically split into two 1 mL (100-unit) injections. At 7.5 mg/mL (15 mg + 2 mL): 10 mg ≈ 1.33 mL ≈ 133 units — also typically split. For high-dose tirzepatide, confirm the injection volume and technique with your prescribing clinician.',
                  },
                  {
                    q: 'How do I reconstitute a 15 mg tirzepatide vial?',
                    a: 'For a 15 mg tirzepatide vial, a common setup is 2 mL of BAC water (7.5 mg/mL) or 3 mL (5 mg/mL). At 7.5 mg/mL, a 2.5 mg starting dose = 0.33 mL ≈ 33 units. At 5 mg/mL, 2.5 mg = 0.5 mL = 50 units. Select your vial size and water volume in the calculator above for your exact reading.',
                  },
                  {
                    q: 'How long does reconstituted tirzepatide last?',
                    a: "Compounded tirzepatide reconstituted with bacteriostatic water is typically stable for 3–4 weeks when stored refrigerated at 2–8°C (36–46°F). For longer storage, freeze aliquots at -20°C (up to 3 months). Always follow your compounding pharmacy's specific stability guidance, which takes precedence over general estimates.",
                  },
                  {
                    q: 'What needle and syringe do I use for tirzepatide injections?',
                    a: 'Most tirzepatide injections are administered subcutaneously using a 29G or 31G insulin syringe with a ½-inch needle. For larger dose volumes (above 0.5 mL), use a 1 mL (100-unit) syringe. Inject into the lower abdomen, thigh, or upper arm, rotating sites with each injection.',
                  },
                  {
                    q: 'What is the difference between tirzepatide and semaglutide dosing?',
                    a: 'Tirzepatide is a dual GIP/GLP-1 agonist measured in milligrams (mg) per dose, with a typical starting dose of 2.5 mg/week. Semaglutide is a GLP-1 agonist starting at 0.25 mg/week. Because tirzepatide doses are significantly larger in mg, the injection volumes tend to be larger as well, even when both are reconstituted at the same concentration. Always confirm your specific dose and concentration with your prescriber.',
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="group">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left text-[var(--ink)] hover:bg-[var(--canvas)] hover:text-[var(--accent-ink)] transition-colors [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-medium leading-snug">{q}</span>
                      <ChevronDown
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-5 pb-4">
                      <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* 6. Sources */}
            <div id="sources" className="scroll-mt-24">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
                Sources
              </h2>
              <p className="mt-3 text-[var(--muted)] leading-[26px]">
                The dose steps on this page come from the published tirzepatide trials and prescribing information. The unit math is standard U-100 syringe arithmetic: 100 units = 1 mL.
              </p>
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--ink-soft)]">
                <li>
                  Jastreboff AM, et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med. 2022;387(3):205-216.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/35658024/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    PubMed
                  </a>
                </li>
                <li>
                  Eli Lilly and Company. Zepbound (tirzepatide) injection: Prescribing Information, Dosage and Administration.{' '}
                  <a href="https://pi.lilly.com/us/zepbound-uspi.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    pi.lilly.com
                  </a>
                </li>
                <li>
                  Eli Lilly and Company. Mounjaro (tirzepatide) injection: Prescribing Information.{' '}
                  <a href="https://pi.lilly.com/us/mounjaro-uspi.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    pi.lilly.com
                  </a>
                </li>
                <li>
                  U.S. Food and Drug Administration. FDA's Concerns with Unapproved GLP-1 Drugs Used for Weight Loss.{' '}
                  <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-ink)] hover:underline">
                    fda.gov
                  </a>
                </li>
              </ol>
            </div>

            {/* 7. Related Tools */}
            <div className="rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5">
              <p className="text-sm font-semibold text-[var(--ink)]">Related tools</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3 sm:flex-wrap">
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/peptide-calculator?peptide=tirzepatide">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Peptide Calculator (tirzepatide preset)
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/tirzepatide-units-converter">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Tirzepatide Units Converter
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/retatrutide">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Retatrutide Dosage Calculator
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/semaglutide-reconstitution-calculator">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  Semaglutide Reconstitution Calculator
                </a>
                <a className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2.5 text-sm text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" href="/tools/bac-water-calculator">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
                  BAC Water Calculator
                </a>
              </div>
            </div>

            {/* 8. Medical Disclaimer */}
            <div className="rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5">
              <p className="text-xs leading-relaxed text-[var(--muted)]">
                <strong className="text-[var(--ink)]">Medical Disclaimer:</strong>{' '}
                This tirzepatide reconstitution calculator is provided for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. All dosing should be determined and supervised by a licensed healthcare provider. Compounded tirzepatide is not equivalent to FDA-approved brand-name tirzepatide products (Mounjaro/Zepbound). Always consult your prescriber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Dosing & Reconstitution Guides */}
      <section className="bg-[var(--surface)] border-t border-[var(--border-color)] py-[clamp(56px,8vw,88px)]">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.005em] text-[var(--ink)] m-0">
            Dosing &amp; reconstitution guides
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/peptides/tirzepatide"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent-soft)]">
                <FlaskConical className="h-5 w-5 text-[var(--accent-ink)]" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent-ink)]">
                  Tirzepatide Overview
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Full tirzepatide profile — dosing, titration, side effects, mechanism, and FDA status.
                </p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/how-to-reconstitute-peptides"
            >
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

            <a
              className="group flex items-start gap-4 rounded-[12px] border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)]"
              href="/peptide-dosage-guide"
            >
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

      {/* SECTION 4: Prescriber CTA band */}
      <section className="bg-[var(--canvas)] py-[clamp(40px,6vw,64px)]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div
            className="feature-band bg-[var(--accent)] rounded-3xl p-[clamp(28px,5vw,56px)] grid grid-cols-1 gap-[clamp(28px,4vw,48px)] items-center"
            data-has-media="false"
          >
            <div>
              <span className="inline-block text-xs font-bold leading-[19px] tracking-[0.08em] uppercase text-white/90 mb-3.5">
                Looking for a prescriber?
              </span>
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-white m-0">
                Find a tirzepatide-prescribing clinic
              </h2>
              <p className="text-[clamp(1rem,2vw,1.125rem)] text-white/90 leading-[1.6] mt-4 max-w-[52ch]">
                Find a verified clinic that prescribes compounded tirzepatide and provides personalized dosing guidance near you.
              </p>
              <div className="flex gap-3 flex-wrap mt-7">
                <a
                  className="band-btn inline-flex items-center gap-2 font-bold text-[15px] leading-[24px] py-3 px-[22px] rounded-full no-underline transition-all duration-150 bg-white text-[var(--accent-ink)]"
                  href="/clinics/telehealth-clinics"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Find a Clinic
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
