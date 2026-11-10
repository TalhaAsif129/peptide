/**
 * Peptide Calculator and Conversion Math Utilities
 * All insulin syringes are U-100: 1 unit = 0.01 mL (100 units = 1.0 mL)
 */

export function calculateDoseToUnits(dose, unit, concentration, syringeCapacityMl) {
  if (!dose || !concentration || dose <= 0 || concentration <= 0) {
    return null;
  }
  const doseInMg = unit === "mcg" ? dose / 1000 : dose;
  const ml = doseInMg / concentration;
  const units = ml * 100;
  const exceeds = ml > syringeCapacityMl;

  return {
    doseInMg,
    ml,
    units,
    exceeds,
  };
}

export function calculateUnitsToDose(units, concentration, syringeCapacityMl) {
  if (!units || !concentration || units <= 0 || concentration <= 0) {
    return null;
  }
  const ml = units / 100;
  const doseMg = ml * concentration;
  const doseMcg = doseMg * 1000;
  const exceeds = ml > syringeCapacityMl;

  return {
    ml,
    doseMg,
    doseMcg,
    exceeds,
  };
}

export function calculateConcentration(vialMg, bacWaterMl) {
  if (!vialMg || !bacWaterMl || vialMg <= 0 || bacWaterMl <= 0) {
    return null;
  }
  return vialMg / bacWaterMl;
}

export function formatCleanNumber(num, maxDecimals = 3) {
  if (num === null || num === undefined || isNaN(num)) return "";
  if (num % 1 === 0) return num.toFixed(0);
  return Number(num.toFixed(maxDecimals)).toString();
}
