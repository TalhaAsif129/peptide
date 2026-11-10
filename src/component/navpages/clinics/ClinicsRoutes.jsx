// src/component/navpages/clinics/ClinicsRoutes.jsx
import BestTelehealth           from "./BestTelehealth";
import BrowsebyState            from "./BrowsebyState";
import ByTreatment              from "./ByTreatment";
import LogintoDashboard         from "./LogintoDashboard";
import TelehealthClinics        from "./TelehealthClinics";
import BestWeightLoss           from "./BestWeightLoss";
import BestLongevity            from "./BestLongevity";
import BestTissueRepair         from "./BestTissueRepair";
import BestHormoneOptimization  from "./BestHormoneOptimization";
import BestSexualWellness       from "./BestSexualWellness";
import BestCognitiveEnhancement from "./BestCognitiveEnhancement";
import ClaimYourListing         from "./ClaimYourListing";
import TreatmentAntiAging           from "./treatmentPages/TreatmentAntiAging";
import TreatmentAthleticPerformance from "./treatmentPages/TreatmentAthleticPerformance";
import TreatmentCognitiveEnhancement from "./treatmentPages/TreatmentCognitiveEnhancement";
import TreatmentHormoneOptimization from "./treatmentPages/TreatmentHormoneOptimization";
import TreatmentImmuneSupport       from "./treatmentPages/TreatmentImmuneSupport";
import TreatmentSexualWellness      from "./treatmentPages/TreatmentSexualWellness";
import TreatmentTissueRepair        from "./treatmentPages/TreatmentTissueRepair";
import TreatmentWeightLoss          from "./treatmentPages/TreatmentWeightLoss";

export const clinicsRoutes = [
  { path: "/clinics/best-telehealth",            component: BestTelehealth },
  { path: "/best-telehealth/weight-loss",         component: BestWeightLoss },
  { path: "/best-telehealth/anti-aging-longevity", component: BestLongevity },
  { path: "/best-telehealth/tissue-repair-recovery", component: BestTissueRepair },
  { path: "/best-telehealth/hormone-optimization", component: BestHormoneOptimization },
  { path: "/best-telehealth/sexual-wellness",     component: BestSexualWellness },
  { path: "/best-telehealth/cognitive-enhancement", component: BestCognitiveEnhancement },
  { path: "/clinics/browse-by-state",            component: BrowsebyState },
  { path: "/clinics/by-treatment",               component: ByTreatment },
  { path: "/treatment/anti-aging-longevity",      component: TreatmentAntiAging },
  { path: "/treatment/athletic-performance",      component: TreatmentAthleticPerformance },
  { path: "/treatment/cognitive-enhancement",     component: TreatmentCognitiveEnhancement },
  { path: "/treatment/hormone-optimization",      component: TreatmentHormoneOptimization },
  { path: "/treatment/immune-support",            component: TreatmentImmuneSupport },
  { path: "/treatment/sexual-wellness",           component: TreatmentSexualWellness },
  { path: "/treatment/tissue-repair-recovery",    component: TreatmentTissueRepair },
  { path: "/treatment/weight-loss",               component: TreatmentWeightLoss },
  { path: "/clinics/claim-your-listing",         component: ClaimYourListing },
  { path: "/clinics/login-to-dashboard",         component: LogintoDashboard },
  { path: "/clinics/telehealth-clinics",         component: TelehealthClinics },
];

export default clinicsRoutes;
