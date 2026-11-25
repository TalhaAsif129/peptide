// src/component/navpages/AllNavRoutes.jsx
import clinicsRoutes   from "./clinics/ClinicsRoutes";
import protocolsRoutes from "./protocols/ProtocolsRoutes";
import peptidesRoutes  from "./peptide/PeptidesRoutes";
import toolsRoutes     from "./tools/ToolsRoutes";

export const navRoutes = [
  ...clinicsRoutes,
  ...protocolsRoutes,
  ...peptidesRoutes,
  ...toolsRoutes,
];

export { clinicsRoutes, protocolsRoutes, peptidesRoutes, toolsRoutes };
export default navRoutes;