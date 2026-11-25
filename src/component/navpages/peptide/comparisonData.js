export const peptideComparisons = [
  { tags: ["Semaglutide", "Tirzepatide"], title: "Semaglutide vs Tirzepatide" },
  { tags: ["Tirzepatide", "Liraglutide"], title: "Tirzepatide vs Liraglutide" },
  { tags: ["Semaglutide", "Liraglutide"], title: "Semaglutide vs Liraglutide" },
  { tags: ["Sermorelin", "CJC-1295 / Ipamorelin"], title: "Sermorelin vs CJC-1295 / Ipamorelin" },
  { tags: ["Ipamorelin", "GHRP-2"], title: "Ipamorelin vs GHRP-2" },
  { tags: ["BPC-157", "TB-500"], title: "BPC-157 vs TB-500" },
  { tags: ["GHK-Cu", "BPC-157"], title: "GHK-Cu vs BPC-157" },
  { tags: ["Thymosin Alpha-1", "TB-500"], title: "Thymosin Alpha-1 vs TB-500" },
  { tags: ["PT-141", "Melanotan II"], title: "PT-141 vs Melanotan II" },
  { tags: ["Semax", "Selank"], title: "Semax vs Selank" },
  { tags: ["Retatrutide", "Tirzepatide"], title: "Retatrutide vs Tirzepatide" },
];

export const brandComparisons = [
  { tags: ["Henry Meds", "Ro"], title: "Henry Meds vs Ro" },
  { tags: ["Hims & Hers", "Ro"], title: "Hims & Hers vs Ro" },
  { tags: ["Mochi Health", "Henry Meds"], title: "Mochi Health vs Henry Meds" },
  { tags: ["Mochi Health", "Remedy Meds"], title: "Mochi Health vs Remedy Meds" },
  { tags: ["Eden", "Henry Meds"], title: "Eden vs Henry Meds" },
  { tags: ["Ivim Health", "Mochi Health"], title: "Ivim Health vs Mochi Health" },
  { tags: ["Fella Health", "Hone Health"], title: "Fella Health vs Hone Health" },
  { tags: ["Marek Health", "Hone Health"], title: "Marek Health vs Hone Health" },
  { tags: ["Defy Medical", "Marek Health"], title: "Defy Medical vs Marek Health" },
  { tags: ["AgelessRx", "Defy Medical"], title: "AgelessRx vs Defy Medical" },
  { tags: ["Winona", "MidI Health"], title: "Winona vs MidI Health" },
  { tags: ["Alloy", "MidI Health"], title: "Alloy vs MidI Health" },
  { tags: ["Noom", "Mochi Health"], title: "Noom vs Mochi Health" },
  { tags: ["Calibrate", "Mochi Health"], title: "Calibrate vs Mochi Health" },
  { tags: ["LifeMD", "Ro"], title: "LifeMD vs Ro" },
];

export function comparisonSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getComparison(type, slug) {
  const comparisons = type === "peptide"
    ? peptideComparisons
    : type === "brand"
      ? brandComparisons
      : [];

  return comparisons.find((comparison) => comparisonSlug(comparison.title) === slug);
}
