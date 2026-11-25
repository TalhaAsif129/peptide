// src/component/pages/homepages/stateCityClinics/data/index.js
import alabamaData from "./alabamaData.js";
import alaskaData from "./alaskaData.js";
import arizonaData from "./arizonaData.js";
import arkansasData from "./arkansasData.js";
import californiaData from "./californiaData.js";
import coloradoData from "./coloradoData.js";
import connecticutData from "./connecticutData.js";
import delawareData from "./delawareData.js";
import districtOfColumbiaData from "./districtOfColumbiaData.js";
import floridaData from "./floridaData.js";
import georgiaData from "./georgiaData.js";
import hawaiiData from "./hawaiiData.js";
import illinoisData from "./illinoisData.js";
import indianaData from "./indianaData.js";
import iowaData from "./iowaData.js";
import kansasData from "./kansasData.js";
import kentuckyData from "./kentuckyData.js";
import louisianaData from "./louisianaData.js";
import maineData from "./maineData.js";
import marylandData from "./marylandData.js";
import massachusettsData from "./massachusettsData.js";
import michiganData from "./michiganData.js";
import minnesotaData from "./minnesotaData.js";
import mississippiData from "./mississippiData.js";
import nebraskaData from "./nebraskaData.js";
import nevadaData from "./nevadaData.js";
import newHampshireData from "./newHampshireData.js";
import newJerseyData from "./newJerseyData.js";
import newMexicoData from "./newMexicoData.js";
import newYorkData from "./newYorkData.js";
import northCarolinaData from "./northCarolinaData.js";
import ohioData from "./ohioData.js";
import oklahomaData from "./oklahomaData.js";
import oregonData from "./oregonData.js";
import pennsylvaniaData from "./pennsylvaniaData.js";
import southCarolinaData from "./southCarolinaData.js";
import southDakotaData from "./southDakotaData.js";
import texasData from "./texasData.js";
import utahData from "./utahData.js";
import virginiaData from "./virginiaData.js";
import washingtonData from "./washingtonData.js";
import westVirginiaData from "./westVirginiaData.js";
import wisconsinData from "./wisconsinData.js";
import wyomingData from "./wyomingData.js";
import idahoData from "./idahoData.js";
import missouriData from "./missouriData.js";
import montanaData from "./montanaData.js";
import northDakotaData from "./northDakotaData.js";
import rhodeIslandData from "./rhodeIslandData.js";
import tennesseeData from "./tennesseeData.js";
import vermontData from "./vermontData.js";

/**
 * State Data Registry
 * Add future state data files here without altering UI or template code.
 */
const stateRegistry = {
  "vermont": vermontData,
  "tennessee": tennesseeData,
  "rhode-island": rhodeIslandData,
  "north-dakota": northDakotaData,
  "montana": montanaData,
  "missouri": missouriData,
  "idaho": idahoData,
  "wyoming": wyomingData,
  "wisconsin": wisconsinData,
  "west-virginia": westVirginiaData,
  "washington": washingtonData,
  "virginia": virginiaData,
  "utah": utahData,
  "texas": texasData,
  "south-dakota": southDakotaData,
  "south-carolina": southCarolinaData,
  "pennsylvania": pennsylvaniaData,
  "oregon": oregonData,
  "oklahoma": oklahomaData,
  "ohio": ohioData,
  "north-carolina": northCarolinaData,
  "new-york": newYorkData,
  "new-mexico": newMexicoData,
  "new-jersey": newJerseyData,
  "new-hampshire": newHampshireData,
  "nevada": nevadaData,
  "nebraska": nebraskaData,
  "mississippi": mississippiData,
  "minnesota": minnesotaData,
  "michigan": michiganData,
  "massachusetts": massachusettsData,
  "maryland": marylandData,
  "maine": maineData,
  "louisiana": louisianaData,
  "kentucky": kentuckyData,
  "kansas": kansasData,
  "iowa": iowaData,
  "indiana": indianaData,
  "illinois": illinoisData,
  "hawaii": hawaiiData,
  "georgia": georgiaData,
  "florida": floridaData,
  "district-of-columbia": districtOfColumbiaData,
  "delaware": delawareData,
  "connecticut": connecticutData,
  "colorado": coloradoData,
  "california": californiaData,
  "arkansas": arkansasData,
  "arizona": arizonaData,
  alabama: alabamaData,
  alaska: alaskaData,
};

/**
 * Normalize string slug (e.g. "New York" -> "new-york", "Alabama" -> "alabama")
 */
function normalizeSlug(slug) {
  if (!slug) return "";
  return String(slug)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Retrieve data for a given state page
 * @param {string} stateSlug - e.g. "alabama"
 * @returns {object|null} State data including stateInfo, cities dictionary, and clinics array
 */
export function getStateData(stateSlug) {
  if (!stateSlug) return null;
  const slug = normalizeSlug(stateSlug);
  const state = stateRegistry[slug];
  if (!state) return null;

  return {
    ...state.stateInfo,
    cities: state.cities,
    citiesList: state.stateInfo.citiesList || Object.keys(state.cities).map(c => state.cities[c].name),
    clinics: state.clinics,
    totalClinicsCount: state.clinics.length,
    defaultCollapsedLimit: state.stateInfo.defaultCollapsedLimit || 12,
  };
}

/**
 * Retrieve data for a given city page
 * @param {string} stateSlug - e.g. "alabama"
 * @param {string} citySlug - e.g. "birmingham" or "decatur"
 * @returns {object|null} City data with populated clinics array, bottom links, and layout metadata
 */
export function getCityData(stateSlug, citySlug) {
  if (!stateSlug || !citySlug) return null;
  const sSlug = normalizeSlug(stateSlug);
  const cSlug = normalizeSlug(citySlug);

  const state = stateRegistry[sSlug];
  if (!state) return null;

  const cityConfig = state.cities[cSlug];
  if (!cityConfig) return null;

  // Build a fast lookup map for all state clinics
  const clinicMap = new Map();
  for (let i = 0; i < state.clinics.length; i++) {
    const clinic = state.clinics[i];
    clinicMap.set(clinic.slug, clinic);
  }

  // Populate clinic objects in the exact order specified by the city configuration
  let cityClinics = [];
  if (Array.isArray(cityConfig.clinicSlugs) && cityConfig.clinicSlugs.length > 0) {
    cityClinics = cityConfig.clinicSlugs
      .map(slug => clinicMap.get(slug))
      .filter(Boolean);
  } else {
    // Fallback: match by city name if no explicit slug list
    cityClinics = state.clinics.filter(
      c => normalizeSlug(c.city) === cSlug
    );
  }

  return {
    ...cityConfig,
    stateInfo: state.stateInfo,
    clinics: cityClinics,
    allStateClinics: state.clinics,
    totalClinicsCount: cityClinics.length,
  };
}

/**
 * List all registered states
 * @returns {Array<{ slug: string, name: string, totalCities: number, totalClinics: number }>}
 */
export function getRegisteredStates() {
  return Object.keys(stateRegistry).map(slug => {
    const s = stateRegistry[slug];
    return {
      slug: s.stateInfo.slug,
      name: s.stateInfo.name,
      totalCities: s.stateInfo.totalCities,
      totalClinics: s.stateInfo.totalClinics,
    };
  });
}

export default stateRegistry;
