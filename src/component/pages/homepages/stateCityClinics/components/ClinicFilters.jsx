const TREATMENT_OPTIONS = [
  "Weight Loss",
  "Anti-Aging & Longevity",
  "Tissue Repair & Recovery",
  "Hormone Optimization",
  "Cognitive Enhancement",
  "Sexual Wellness",
  "Athletic Performance",
  "Immune Support",
];

const PEPTIDE_OPTIONS = [
  "Semaglutide",
  "Tirzepatide",
  "BPC-157",
  "Sermorelin",
  "CJC-1295 / Ipamorelin",
  "PT-141",
  "HGH 191AA",
  "Liraglutide",
  "HCG",
  "Retatrutide",
  "Cagrilintide",
  "TB-500",
  "NAD+",
  "Survodutide",
  "Ipamorelin",
  "CJC-1295",
  "Mazdutide",
  "Glutathione",
  "Hexarelin",
  "Pentadecapeptide",
  "L-Carnitine",
  "Epithalon",
  "IGF-1 LR3",
  "GHRP-6",
  "Dihexa",
  "Kisspeptin-10",
  "Melanotan II",
  "HMG",
  "Copper Peptides",
  "SS-31",
  "Oxytocin",
  "Adamax",
  "MGF",
  "Cerebrolysin",
  "KPV",
  "DSIP",
  "PNC-27",
  "Cardiogen",
  "Testagen",
  "Cortagen",
  "Livagen",
  "Crystagen",
  "Cartalax",
  "Chonluten",
  "CJC-1295 + GHRP-2 Blend",
  "PEG MGF",
  "KPV (Ac-KPV-NH2)",
  "B7-33",
  "ARA-290",
  "LL-37",
  "TB-500 Fragment (17-23)",
  "BPC-157, TB-500 (Blend)",
  "Tri-Heal",
  "Follistatin 315",
  "AHK-Cu",
  "AHK (Tripeptide-3)",
  "Follistatin",
  "Follistatin 344",
  "Pal-AHK",
  "Palmitoyl Dipeptide-6",
  "Rigin (Palmitoyl Tetrapeptide-7)",
  "Syn-Coll (Palmitoyl Tripeptide-5)",
  "Tripeptide-29",
  "Gonadorelin",
  "GHRH",
  "Semax",
  "PE-22-28",
  "Fraternine",
  "Melanostatin DM",
  "Selank",
  "Melanotan 1 (MT1)",
  "Thymosin Alpha-1",
  "Thymagen (Thymogen)",
  "VIP 6mg",
  "Tesamorelin",
  "Ovagen",
  "TRH Thyrotropin (Protirelin)",
  "Triptorelin (GnRH)",
  "Cagrilintide + Semaglutide Blend",
  "GLOW Peptide Blend",
  "KLOW Peptide Blend",
  "Pal-GHK (Palmitoyl Tripeptide-1)",
  "Tesamorelin, CJC-1295 (no DAC), Ipamorelin 12mg (Blend)",
  "AICAR",
  "CJC-1295 (no DAC), Ipamorelin 10mg (Blend)",
  "Ipamorelin + Tesamorelin Blend",
  "Pancragen",
  "MK-677 (Ibutamoren)",
  "ACE-031 (Ramatercept)",
  "Humanin",
  "P21 (P021)",
  "HGH Frag 176-191",
  "FLGR-242",
  "Thymalin",
  "O-304 (ATX-304)",
  "GHRP-2",
  "Adipotide (FTPP)",
  "AOD-9604",
  "Longevity, Performance & Obesity Research",
  "Vesugen",
  "AOD-9604 + CJC-1295 + Ipamorelin Blend",
  "CJC-1295 No DAC + Ipamorelin Blend",
  "MOTS-c",
  "5-Amino-1MQ",
  "Tesofensine",
  "SLU-PP-332",
  "FOX04-DRI",
  "SNAP-8",
  "Acetyl Hexapeptide-3 (Argireline)",
  "Matrixyl",
  "Pentapeptide-18 (Leuphasyl)",
  "Vialox (Pentapeptide-3V)",
  "Vilon",
  "Pinealon",
  "Bronchogen",
  "Prostamax",
  "GHK-Cu",
];

const RATING_OPTIONS = ["Any", "3+ stars", "4+ stars", "4.5+ stars"];

export default function ClinicFilters({
  filters,
  onChange,
  onReset,
  isMobileOpen = false,
  onMobileClose,
}) {
  const toggleTreatment = (treatment) => {
    const current = filters.treatments || [];
    const next = current.includes(treatment)
      ? current.filter((t) => t !== treatment)
      : [...current, treatment];
    onChange({ ...filters, treatments: next });
  };

  const togglePeptide = (peptide) => {
    const current = filters.peptides || [];
    const next = current.includes(peptide)
      ? current.filter((p) => p !== peptide)
      : [...current, peptide];
    onChange({ ...filters, peptides: next });
  };

  const toggleOption = (key) => {
    const currentOpts = filters.options || {};
    onChange({
      ...filters,
      options: { ...currentOpts, [key]: !currentOpts[key] },
    });
  };

  const setRating = (rating) => {
    onChange({ ...filters, minRating: rating });
  };

  const setConsultation = (val) => {
    onChange({ ...filters, consultation: val });
  };

  const activeFilterCount = [
    (filters.treatments || []).length > 0,
    (filters.peptides || []).length > 0,
    filters.options?.telehealth,
    filters.options?.hsaFsa,
    filters.options?.freeConsult,
    filters.options?.newPatients,
    filters.minRating && filters.minRating !== "Any",
    Boolean(filters.consultation),
  ].filter(Boolean).length;

  const hasActiveFilters = activeFilterCount > 0;

  const renderFilterSections = (isMobile = false) => (
    <div className="space-y-6">
      {/* Treatment */}
      {isMobile ? (
        <details open className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-medium text-[#333333] select-none">
            Treatment
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="pt-2 pb-1">
            <ul className="space-y-1.5">
              {TREATMENT_OPTIONS.map((item) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={(filters.treatments || []).includes(item)}
                      onChange={() => toggleTreatment(item)}
                      className="h-4 w-4 rounded border-[#e5e7eb] accent-[#FEED5A] cursor-pointer"
                    />
                    <span className="text-sm text-[#333333]">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ) : (
        <div>
          <h4 className="font-saira tracking-[-0.14px] mb-2 text-sm font-medium text-[#333333]">Treatment</h4>
          <ul className="space-y-1.5">
            {TREATMENT_OPTIONS.map((item) => (
              <li key={item}>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={(filters.treatments || []).includes(item)}
                    onChange={() => toggleTreatment(item)}
                    className="h-4 w-4 rounded border-[#e5e7eb] accent-[#FEED5A] cursor-pointer"
                  />
                  <span className="text-sm text-[#333333]">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Peptides Offered - No internal scroller */}
      {isMobile ? (
        <details open className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-medium text-[#333333] select-none">
            Peptides offered
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="pt-2 pb-1">
            <ul className="space-y-1.5">
              {PEPTIDE_OPTIONS.map((item) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={(filters.peptides || []).includes(item)}
                      onChange={() => togglePeptide(item)}
                      className="h-4 w-4 rounded border-[#e5e7eb] accent-[#FEED5A] cursor-pointer"
                    />
                    <span className="text-sm text-[#333333]">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ) : (
        <div>
          <h4 className="font-saira tracking-[-0.14px] mb-2 text-sm font-medium text-[#333333]">Peptides offered</h4>
          <ul className="space-y-1.5">
            {PEPTIDE_OPTIONS.map((item) => (
              <li key={item}>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={(filters.peptides || []).includes(item)}
                    onChange={() => togglePeptide(item)}
                    className="h-4 w-4 rounded border-[#e5e7eb] accent-[#FEED5A] cursor-pointer"
                  />
                  <span className="text-sm text-[#333333]">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Options */}
      {isMobile ? (
        <details open className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-medium text-[#333333] select-none">
            Options
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="pt-2 pb-1 space-y-3">
            {[
              { key: "telehealth", label: "Telehealth available" },
              { key: "hsaFsa", label: "Accepts HSA/FSA" },
              { key: "freeConsult", label: "Free consultation" },
              { key: "newPatients", label: "Accepts new patients" },
            ].map(({ key, label }) => {
              const isChecked = Boolean(filters.options?.[key]);
              return (
                <label key={key} className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isChecked}
                    onClick={() => toggleOption(key)}
                    className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border transition-colors focus:outline-none cursor-pointer ${
                      isChecked
                        ? "bg-[#0b7c84] border-[#0b7c84]"
                        : "bg-[#cbd4d1] border-[#cbd4d1]"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-150 ${
                        isChecked ? "translate-x-5 translate-y-0.5" : "translate-x-0.5 translate-y-0.5"
                      }`}
                    />
                  </button>
                  <span className="text-sm text-[#1c2522]">{label}</span>
                </label>
              );
            })}
          </div>
        </details>
      ) : (
        <div>
          <h4 className="font-saira tracking-[-0.14px] mb-2 text-sm font-medium text-[#333333]">Options</h4>
          <div className="space-y-3">
            {[
              { key: "telehealth", label: "Telehealth available" },
              { key: "hsaFsa", label: "Accepts HSA/FSA" },
              { key: "freeConsult", label: "Free consultation" },
              { key: "newPatients", label: "Accepts new patients" },
            ].map(({ key, label }) => {
              const isChecked = Boolean(filters.options?.[key]);
              return (
                <label key={key} className="inline-flex items-center gap-3 cursor-pointer select-none">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isChecked}
                    onClick={() => toggleOption(key)}
                    className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border transition-colors focus:outline-none cursor-pointer ${
                      isChecked
                        ? "bg-[#0b7c84] border-[#0b7c84]"
                        : "bg-[#cbd4d1] border-[#cbd4d1]"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-150 ${
                        isChecked ? "translate-x-5 translate-y-0.5" : "translate-x-0.5 translate-y-0.5"
                      }`}
                    />
                  </button>
                  <span className="text-sm text-[#1c2522]">{label}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Minimum Rating */}
      {isMobile ? (
        <details open className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-medium text-[#333333] select-none">
            Minimum rating
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="pt-2 pb-1">
            <div className="flex flex-wrap gap-2">
              {RATING_OPTIONS.map((rating) => {
                const isActive = (filters.minRating || "Any") === rating;
                return (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setRating(rating)}
                    className={`inline-flex items-center justify-center font-bold px-4 py-2 text-sm rounded-full min-h-[40px] transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0b7c84] text-white shadow-sm"
                        : "border border-[#cbd4d1] bg-white text-[#1c2522] hover:border-[#0b7c84]"
                    }`}
                  >
                    {rating}
                  </button>
                );
              })}
            </div>
          </div>
        </details>
      ) : (
        <div>
          <h4 className="font-saira tracking-[-0.14px] mb-2 text-sm font-medium text-[#333333]">Minimum rating</h4>
          <div className="flex flex-wrap gap-2">
            {RATING_OPTIONS.map((rating) => {
              const isActive = (filters.minRating || "Any") === rating;
              return (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setRating(rating)}
                  className={`inline-flex items-center justify-center font-bold px-4 py-2 text-sm rounded-full min-h-[40px] transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0b7c84] text-white shadow-sm"
                      : "border border-[#cbd4d1] bg-white text-[#1c2522] hover:border-[#0b7c84]"
                  }`}
                >
                  {rating}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Consultation */}
      {isMobile ? (
        <details open className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-sm font-medium text-[#333333] select-none">
            Consultation
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="pt-2 pb-1">
            <select
              value={filters.consultation || ""}
              onChange={(e) => setConsultation(e.target.value)}
              className="w-full rounded-[5px] border border-[#e5e7eb] px-3 py-2 text-sm text-[#333333] focus:border-[#FEED5A] focus:outline-none bg-white cursor-pointer"
            >
              <option value="">All</option>
              <option value="in-person">In-person</option>
              <option value="telehealth">Telehealth</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </details>
      ) : (
        <div>
          <h4 className="font-saira tracking-[-0.14px] mb-2 text-sm font-medium text-[#333333]">Consultation</h4>
          <select
            value={filters.consultation || ""}
            onChange={(e) => setConsultation(e.target.value)}
            className="w-full rounded-[5px] border border-[#e5e7eb] px-3 py-2 text-sm text-[#333333] focus:border-[#FEED5A] focus:outline-none bg-white cursor-pointer"
          >
            <option value="">All</option>
            <option value="in-person">In-person</option>
            <option value="telehealth">Telehealth</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block lg:w-[280px] lg:shrink-0 lg:sticky lg:top-24 lg:self-start">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-saira font-semibold text-[#333333]">Filters</h3>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs text-[#0b7c84] hover:underline font-medium cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>
          {renderFilterSections(false)}
        </div>
      </aside>

      {/* Mobile Drawer (Bottom Sheet SlideOver) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            aria-hidden="true"
            onClick={onMobileClose}
          />

          {/* SlideOver Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="slideover-title"
            className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-white shadow-xl transition-transform duration-300 ease-out"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e5e7eb] px-6 py-4">
              <h2 id="slideover-title" className="font-heading text-lg font-semibold text-[#333333]">
                Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
              </h2>
              <button
                type="button"
                onClick={onMobileClose}
                aria-label="Close filters"
                className="-mr-2 p-1 text-[#6b7280] hover:text-[#333333] cursor-pointer"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Filter Options */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {renderFilterSections(true)}
            </div>

            {/* Footer Buttons */}
            <div className="shrink-0 border-t border-[#e5e7eb] p-4 flex items-center gap-3">
              <button
                type="button"
                onClick={onReset}
                disabled={!hasActiveFilters}
                className="flex-1 rounded-[4px] border border-[#e5e7eb] bg-white py-2 px-4 text-sm font-medium text-[#333333] hover:bg-[#F7F8F9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={onMobileClose}
                className="flex-1 rounded-[5px] bg-[#0b7c84] py-2 px-4 text-sm font-semibold text-white hover:bg-[#095e64] transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
