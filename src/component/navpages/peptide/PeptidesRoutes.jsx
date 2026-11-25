// src/component/navpages/peptide/PeptidesRoutes.jsx
import PeptideEncyclopedia from "./PeptideEncyclopedia";
import PopularPeptide      from "./PopularPeptide";
import ByCategory          from "./ByCategory";
import PeptideComparisons  from "./PeptideComparisons";
import ComparisonDetail from "./ComparisonDetail";
import Vendors             from "./Vendors";
import BestTelehealth      from "./BestTelehealth";
import HowToReconstitutePeptides from "./HowToReconstitutePeptides";
import Retatrutide         from "./detailPages/Retatrutide";
import Sermorelin          from "./detailPages/Sermorelin";
import Ipamorelin          from "./detailPages/Ipamorelin";
import Popularbpc          from "../../pages/homepages/Popularbpc";
import Semaglutide         from "../../pages/homepages/Semaglutide";
import Tirzepatide         from "../../pages/homepages/Tirzepatide";

export const peptidesRoutes = [
  { path: "/peptides",                  component: PeptideEncyclopedia },
  { path: "/peptides/popular",          component: PopularPeptide },
  { path: "/peptides/by-category",      component: ByCategory },
  { path: "/peptides/compare",          component: PeptideComparisons },
  { path: "/peptides/compare/:type/:slug", component: ComparisonDetail },
  { path: "/peptides/vendors",          component: Vendors },
  { path: "/peptides/best-telehealth",  component: BestTelehealth },
  { path: "how-to-reconstitute-peptides", component: HowToReconstitutePeptides },
  { path: "/peptides/retatrutide",      component: Retatrutide },
  { path: "/peptides/bpc-157",          component: Popularbpc },
  { path: "/peptides/sermorelin",       component: Sermorelin },
  { path: "/peptides/cjc-1295-ipamorelin", component: Ipamorelin },
  { path: "/peptides/semaglutide",      component: Semaglutide },
  { path: "/peptides/tirzepatide",      component: Tirzepatide },
];

export default peptidesRoutes;
