import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const headingFont = { fontFamily: "var(--font-heading)" };

  return (
    <main id="main-content" className="flex-1 w-full bg-white">
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Page Title */}
        <h1
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333]"
          style={headingFont}
        >
          About MyPeptideMatch.com
        </h1>

        <section className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
          {/* Our Mission */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Our Mission
            </h2>
            <p className="mt-2">
              MyPeptideMatch.com is an independent directory designed to help
              consumers find, compare, and evaluate peptide therapy clinics
              across the United States. We believe that finding the right
              clinic should be straightforward and transparent. Our goal is to
              provide clear, unbiased information so you can make informed
              decisions about your care.
            </p>
          </div>

          {/* Independent and Transparent */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Independent and Transparent
            </h2>
            <p className="mt-2">
              We are not affiliated with any clinic, manufacturer, or
              pharmaceutical company. We do not accept payment for ranking or
              featuring clinics in search results. Our revenue model is built
              around optional premium listing features for clinics, lead
              generation, and affiliate partnerships with research peptide
              suppliers. Clinic rankings are never influenced by affiliate
              relationships. Our peptide encyclopedia pages may include links
              to research peptide vendors — these are clearly disclosed, and
              any affiliate commission earned does not affect our editorial
              content or vendor rankings. See our{" "}
              <a
                href="/affiliate-disclosure"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Affiliate Disclosure
              </a>{" "}
              for full details.
            </p>
          </div>

          {/* How We Source and Verify Listings */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              How We Source and Verify Listings
            </h2>
            <p className="mt-2">
              Our clinic data comes from a combination of public sources,
              partner data, and clinic submissions. We list clinics that appear
              to offer peptide therapy so you can discover and compare options.
              "Verified" badges indicate that a clinic has claimed its listing
              and completed our verification process (e.g., confirming
              ownership via email or domain). Verification does not mean we
              endorse the clinic or guarantee the quality of care—it means we
              have confirmed that the listing is controlled by the clinic. We
              strive to keep information accurate and up to date, but we cannot
              guarantee that every detail is current. We encourage you to
              contact clinics directly to confirm services, pricing, and
              availability.
            </p>
          </div>

          {/* Informational Purpose Only */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Informational Purpose Only
            </h2>
            <p className="mt-2">
              Content and clinic listings on this site are for informational
              purposes only. We do not provide medical advice, diagnosis, or
              treatment. Regulatory status of peptides can change. Always
              consult a qualified healthcare provider before starting any
              peptide therapy. Clinic listings do not constitute endorsements.
            </p>
          </div>

          {/* Research & Data */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Research &amp; Data
            </h2>
            <p className="mt-2">
              We publish industry data to increase transparency in the peptide
              therapy space. Our{" "}
              <Link
                to="/peptide-therapy-report"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                2026 Peptide Therapy Industry Report
              </Link>{" "}
              covers clinic density by state, most-prescribed peptides, pricing
              benchmarks, and telehealth adoption trends. You can also{" "}
              <Link
                to="/peptides/compare"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                compare peptides
              </Link>{" "}
              side-by-side using our comparison tool.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Contact Us
            </h2>
            <p className="mt-2">
              For general inquiries, to suggest a clinic for our directory, or
              to report an error, please visit our{" "}
              <a
                href="/contact"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Contact
              </a>{" "}
              page. Clinic owners who wish to claim or update a listing can use
              our{" "}
              <a
                href="/claim-your-listing"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Claim Your Listing
              </a>{" "}
              page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;