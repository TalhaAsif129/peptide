import { Helmet } from "react-helmet-async";
import Therapy from "../homepages/Therapy";
import Treatment from "../homepages/Treatment";
import PopularPeptides from "./PopularPeptides";
import FindClinicsByState from "./FindClinicsByState";
import LatestBlog from "./LatestBlog";
import IndustryReport from "./IndustryReport";
import Faq from "./Faq";
import Work from "./Work";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <>
    <Helmet>
        <title>Peptide Therapy Clinics, Peptides & Dosing Tools | MyPeptideMatch</title>
        <meta
          name="description"
          content="Search 4,700+ peptide therapy clinics across 46 states, explore 87 peptides with FDA status and dosing info, and use free dosing calculators."
        />
      </Helmet>
      <HeroSection />
      <Therapy />
      <Treatment />
      <PopularPeptides />
      <Work />
      <Faq />
      <LatestBlog />
      <IndustryReport />
      <FindClinicsByState />
    </>
  );
}
