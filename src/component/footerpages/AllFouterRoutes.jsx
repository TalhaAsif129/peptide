// AllFooterRoutes.jsx
import React from "react";
import { useLocation } from "react-router-dom";

import PrivacyPolicy from "./PrivacyPolicy";
import TermService from "./TermService";
import Disclaimer from "./Disclaimer";
import Contact from "./Contact";
import Search from "./Search";
import AddYourClinic from "./AddYourClinic";
import AffiliateDisclosure from "./AffiliateDisclosure";
import About from "./About";
import PeptideTherapyReport from "./PeptideTherapyReport";
import ClaimYourListing from "../navpages/clinics/ClaimYourListing";

const AllFooterRoutes = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/privacy":
      return <PrivacyPolicy />;
    case "/terms":
      return <TermService />;
    case "/disclaimer":
      return <Disclaimer />;
    case "/contact":
      return <Contact />;
    case "/claim-your-listing":
      return <ClaimYourListing />;
    case "/claim/search":
      return <Search />;
    case "/claim/add":
      return <AddYourClinic />;
    case "/affiliate-disclosure":
      return <AffiliateDisclosure />;
    case "/about":
      return <About />;
    case "/peptide-therapy-report":
      return <PeptideTherapyReport />;
    default:
      return null;
  }
};

export default AllFooterRoutes;