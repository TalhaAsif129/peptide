import React, { useEffect } from "react";
import PeptideReadingProgress from "../components/PeptideReadingProgress";
import PeptideHero from "../components/PeptideHero";
import PeptideTableOfContents from "../components/PeptideTableOfContents";
import PeptideSidebarCards from "../components/PeptideSidebarCards";
import PeptideResearchVendorList from "../components/PeptideResearchVendorList";
import PeptideClinicsDirectory from "../components/PeptideClinicsDirectory";
import PeptideRelatedBlogs from "../components/PeptideRelatedBlogs";
import PeptideCallout from "../components/PeptideCallout";
import PeptideMedicalDisclaimer from "../components/PeptideMedicalDisclaimer";
import RetatrutideArticle from "./RetatrutideArticle";
import { retatrutideData } from "../data/retatrutideData";

export default function Retatrutide() {
  const {
    name,
    subtitle,
    badge,
    tags,
    heroGradient,
    lastReviewed,
    reviewer,
    toc,
    vendors,
    clinics,
    blogs,
    dosingBanner,
    schemas,
  } = retatrutideData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
              {/* Long-form Article in pure React JSX */}
              <RetatrutideArticle />

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
                totalCount={156}
              />

              {/* Continue Reading / Related Blogs */}
              <PeptideRelatedBlogs
                peptideName={name}
                blogs={blogs}
              />

              {/* Missing Final Medical Disclaimer */}
              <PeptideMedicalDisclaimer />
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <PeptideTableOfContents toc={toc} />
                <PeptideSidebarCards
                  peptideName={name}
                  slug="retatrutide"
                  hasEmbeddedCalc={false}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
