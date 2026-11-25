import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PeptideReadingProgress from "../components/PeptideReadingProgress";
import PeptideHero from "../components/PeptideHero";
import PeptideTableOfContents from "../components/PeptideTableOfContents";
import PeptideSidebarCards from "../components/PeptideSidebarCards";
import PeptideTelehealthList from "../components/PeptideTelehealthList";
import PeptideResearchVendorList from "../components/PeptideResearchVendorList";
import PeptideClinicsDirectory from "../components/PeptideClinicsDirectory";
import PeptideRelatedBlogs from "../components/PeptideRelatedBlogs";
import PeptideCallout from "../components/PeptideCallout";
import PeptideReconstitutionCalc from "../components/PeptideReconstitutionCalc";
import PeptideMedicalDisclaimer from "../components/PeptideMedicalDisclaimer";
import SermorelinArticle from "./SermorelinArticle";
import { sermorelinData } from "../data/sermorelinData";

export default function Sermorelin() {
  const {
    name,
    subtitle,
    badge,
    tags,
    heroGradient,
    lastReviewed,
    reviewer,
    toc,
    telehealth,
    vendors,
    clinics,
    blogs,
    dosingBanner,
    schemas,
  } = sermorelinData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sermorelin: Dosage, Benefits, FDA Status & Clinics (2026)</title>
        <meta
          name="description"
          content="Sermorelin FDA status: Compoundable. GHRH analog for growth hormone deficiency, formerly FDA-approved as Geref and now compounded by prescription."
        />
      </Helmet>
      <div className="font-sans">
      {/* Top Reading Progress Bar (scoped to peptide detail pages) */}
      <PeptideReadingProgress />

      {/* SEO Structured Data */}
      {schemas && schemas.length > 0 && (
        <>
          {schemas.map((sc, idx) => (
            <script
              key={idx}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: typeof sc === "string" ? sc : JSON.stringify(sc),
              }}
            />
          ))}
        </>
      )}

      {/* Hero Section */}
      <PeptideHero
        name={name}
        subtitle={subtitle}
        badge={badge}
        tags={tags}
        heroGradient={heroGradient}
        lastReviewed={lastReviewed}
        reviewer={reviewer}
      />

      {/* Main Grid Layout */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-3 sm:py-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Left Content Column */}
            <div className="min-w-0">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-6">
                <PeptideTableOfContents toc={toc} />
              </div>

              {/* Long-form Article in pure React JSX */}
              <SermorelinArticle />

              {/* Embedded Reconstitution Calculator placed directly after article matching live site */}
              <PeptideReconstitutionCalc
                defaultVial={5}
                defaultWater={2}
                defaultDose={300}
                peptideName={name}
              />

              {/* Telehealth Section (includes Where to Buy Online Legally banner) */}
              <PeptideTelehealthList
                peptideName={name}
                slug="sermorelin"
                telehealth={telehealth}
              />

              {/* Research Vendors Section */}
              <PeptideResearchVendorList
                peptideName={name}
                vendors={vendors}
              />

              {/* Protocol CTA Banner */}
              {dosingBanner && dosingBanner.link && (
                <PeptideCallout
                  type="protocol"
                  title={dosingBanner.title}
                  badge={dosingBanner.badge}
                  linkText={dosingBanner.buttonText}
                  linkHref={dosingBanner.link}
                >
                  {dosingBanner.description}
                </PeptideCallout>
              )}

              {/* Clinic Directory Section */}
              <PeptideClinicsDirectory
                peptideName={name}
                clinics={clinics}
                totalCount={801}
              />

              {/* Continue Reading / Related Blogs */}
              <PeptideRelatedBlogs
                peptideName={name}
                blogs={blogs}
              />

              {/* Medical Disclaimer */}
              <PeptideMedicalDisclaimer />
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <PeptideTableOfContents toc={toc} />
                <PeptideSidebarCards
                  peptideName={name}
                  slug="sermorelin"
                  hasEmbeddedCalc={true}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
