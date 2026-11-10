// src/component/navpages/tools/ToolsRoutes.jsx
import HomeTools             from "./HomeTools";
import BACWaterCalculator    from "./BACWaterCalculator";
import PeptideCalculator     from "./PeptideCalculator";
import TitrationCalculator   from "./TitrationCalculator";
import UnitsConverter        from "./UnitsConverter";
import SemaglutideCalculator from "./SemaglutideCalculator";
import TirzepatideCalculator from "./TirzepatideCalculator";
import SemaglutideUnits      from "./SemaglutideUnits";
import TirzepatideUnits      from "./TirzepatideUnits";
import BPC                   from "./BPC";

export const toolsRoutes = [
  { path: "/tools",                                       component: HomeTools },
  { path: "/tools/bac-water-calculator",                  component: BACWaterCalculator },
  { path: "/tools/peptide-calculator",                    component: PeptideCalculator },
  { path: "/tools/titration-calculator",                  component: TitrationCalculator },
  { path: "/tools/units-converter",                       component: UnitsConverter },
  { path: "/tools/semaglutide-calculator",                component: SemaglutideCalculator },
  { path: "/tools/semaglutide-reconstitution-calculator", component: SemaglutideCalculator },
  { path: "/tools/tirzepatide-calculator",                component: TirzepatideCalculator },
  { path: "/tools/tirzepatide-reconstitution-calculator", component: TirzepatideCalculator },
  { path: "/tools/semaglutide-units",                     component: SemaglutideUnits },
  { path: "/tools/semaglutide-units-converter",           component: SemaglutideUnits },
  { path: "/tools/tirzepatide-units",                     component: TirzepatideUnits },
  { path: "/tools/tirzepatide-units-converter",           component: TirzepatideUnits },
  { path: "/tools/bpc",                                   component: BPC },
];

export default toolsRoutes;
