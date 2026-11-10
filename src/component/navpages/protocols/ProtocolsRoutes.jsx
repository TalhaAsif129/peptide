// src/component/navpages/protocols/ProtocolsRoutes.jsx
import AllProtocols   from "./AllProtocols";
import WeightLoss     from "./WeightLoss";
import GrowthHormone  from "./GrowthHormone";
import TissueRepair   from "./TissueRepair";
import AntiAging      from "./AntiAging";
import CognitiveNeuro from "./CognitiveNeuro";
import PeptideBlends  from "./PeptideBlends";

export const protocolsRoutes = [
  { path: "/protocols",                       component: AllProtocols },
  { path: "/protocols/weight-loss-glp1",      component: WeightLoss },
  { path: "/protocols/growth-hormone-ghrh",   component: GrowthHormone },
  { path: "/protocols/tissue-repair",         component: TissueRepair },
  { path: "/protocols/anti-aging",            component: AntiAging },
  { path: "/protocols/cognitive-neuro-sleep", component: CognitiveNeuro },
  { path: "/protocols/blends-stacks",         component: PeptideBlends },
];

export default protocolsRoutes;
