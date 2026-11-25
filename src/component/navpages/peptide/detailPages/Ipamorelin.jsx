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
import PeptideMedicalDisclaimer from "../components/PeptideMedicalDisclaimer";
import RelatedPeptidesGrid from "../components/RelatedPeptidesGrid";
import CjcIpamorelinArticle from "./CjcIpamorelinArticle";
import { cjcIpamorelinData } from "../data/cjcIpamorelinData";

export default function Ipamorelin() {
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
    relatedPeptides,
    schemas,
  } = cjcIpamorelinData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>CJC-1295 / Ipamorelin: Dosage, Benefits, FDA Status & Clinics</title>
        <meta
          name="description"
          content="CJC-1295 / Ipamorelin FDA status: Research Only. Combination growth hormone secretagogue therapy."
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
              <CjcIpamorelinArticle />

              {/* Telehealth Section (includes Where to Buy Online Legally banner) */}
              <PeptideTelehealthList
                peptideName={name}
                slug="cjc-1295-ipamorelin"
                telehealth={telehealth}
              />

              {/* Research Vendors Section */}
              <PeptideResearchVendorList
                peptideName={name}
                vendors={vendors}
              />

              {/* Clinic Directory Section */}
              <PeptideClinicsDirectory
                peptideName={name}
                clinics={clinics}
                totalCount={36}
              />

              {/* Related Peptides Grid */}
              <RelatedPeptidesGrid relatedPeptides={relatedPeptides} />

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
                  slug="cjc-1295-ipamorelin"
                  hasEmbeddedCalc={false}
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
