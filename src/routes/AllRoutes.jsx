import { Routes, Route } from "react-router-dom";
import Layout from "../component/layout/Layout";
import HomePageRoute from "../component/pages/homepages/HomePageRoute";
import Blog from "../component/pages/Blog";
import { navRoutes } from "../component/navpages/AllNavRoutes";
import SignInPage from "../component/pages/AuthPages/SignInPage";
import SignUpPage from "../component/pages/AuthPages/SignUpPage";
import AllFooterRoutes from "../component/footerpages/AllFouterRoutes";
import Weightloss from "../component/pages/homepages/Weightloss";
import AntiAging from "../component/pages/homepages/AntiAging";
import TissueRepair from "../component/pages/homepages/TissueRepair";
import HormoneOptimization from "../component/pages/homepages/HormoneOptimization";
import CognitiveEnhancement from "../component/pages/homepages/CognitiveEnhancement";
import SexualWellness from "../component/pages/homepages/SexualWellness";
import AthleticPerformance from "../component/pages/homepages/AthleticPerformance";
import ImmuneSupport from "../component/pages/homepages/ImmuneSupport";
import Semaglutide from "../component/pages/homepages/Semaglutide";
import Tirzepatide from "../component/pages/homepages/Tirzepatide";
import Popularbpc from "../component/pages/homepages/Popularbpc";
import Retatrutide from "../component/pages/homepages/Retatrutide";
import Sermorelin from "../component/pages/homepages/Sermorelin";
import Ipamorelin from "../component/pages/homepages/Ipamorelin";
import StateClinics from "../component/pages/homepages/StateClinics";

export default function AllRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route path="/" element={<HomePageRoute />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Auth pages — ab Layout ke andar (Navbar + Footer dikhenge) */}
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* Browse by Treatment on landind page */}
        <Route path="/weightloss" element={<Weightloss />} />
        <Route path="/antiaging" element={<AntiAging />} />
        <Route path="/tissuerepair" element={<TissueRepair />} />
        <Route path="/hormoneoptimization" element={<HormoneOptimization />} />
        <Route
          path="/cognitiveenhancement"
          element={<CognitiveEnhancement />}
        />
        <Route path="/sexualwellness" element={<SexualWellness />} />
        <Route path="/athleticperformance" element={<AthleticPerformance />} />
        <Route path="/immunesupport" element={<ImmuneSupport />} />

        {/* Popular Peptides on landing page */}
        <Route path="/semaglutide" element={<Semaglutide />} />
        <Route path="/tirzepatide" element={<Tirzepatide />} />
        <Route path="/popularbpc" element={<Popularbpc />} />
         <Route path="/retatrutide" element={<Retatrutide />} />
         <Route path="/sermorelin" element={<Sermorelin />} />
         <Route path="/ipamorelin" element={<Ipamorelin />} />
        <Route
          path="/clinics/:stateName/:cityName"
          element={<StateClinics />}
        />
        <Route path="/clinics/:stateName" element={<StateClinics />} />
        {/* Navbar pages (Clinics, Protocols, Peptides, Tools dropdowns) */}
        {navRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<AllFooterRoutes />} />
      </Route>
    </Routes>
  );
}
