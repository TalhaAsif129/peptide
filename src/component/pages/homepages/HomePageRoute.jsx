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
