// src/component/navpages/peptide/PeptidesRoutes.jsx
import PeptideEncyclopedia from "./PeptideEncyclopedia";
import PopularPeptide      from "./PopularPeptide";
import ByCategory          from "./ByCategory";
import PeptideComparisons  from "./PeptideComparisons";
import Vendors             from "./Vendors";
import BestTelehealth      from "./BestTelehealth";
import HowToReconstitutePeptides from "./HowToReconstitutePeptides"
export const peptidesRoutes = [
  { path: "/peptides",                  component: PeptideEncyclopedia },
  { path: "/peptides/popular",          component: PopularPeptide },
  { path: "/peptides/by-category",      component: ByCategory },
  { path: "/peptides/compare",          component: PeptideComparisons },
  { path: "/peptides/vendors",          component: Vendors },
  { path: "/peptides/best-telehealth",  component: BestTelehealth },
  { path: "how-to-reconstitute-peptides", component: HowToReconstitutePeptides },
];

export default peptidesRoutes;
