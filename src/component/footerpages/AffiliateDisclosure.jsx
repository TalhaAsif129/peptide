import React from "react";

const AffiliateDisclosure = () => {
  const headingFont = { fontFamily: "var(--font-heading)" };

  return (
    <main id="main-content" className="flex-1 w-full bg-white">
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Page Title */}
        <h1
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333]"
          style={headingFont}
        >
          Affiliate Disclosure
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#6b7280]">
          Last updated: October 2026
        </p>

        <section className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
          {/* How We Earn Revenue */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              How We Earn Revenue
            </h2>
            <p className="mt-2">
              MyPeptideMatch.com is a free resource. We earn revenue through
              three channels:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 sm:pl-6">
              <li>
                <strong>Premium clinic listings</strong> — Clinics can
                optionally upgrade to a premium listing for enhanced
                visibility. This never affects organic search rankings within
                our directory.
              </li>
              <li>
                <strong>Lead generation</strong> — When you submit a
                consultation request through a clinic's listing, we facilitate
                that connection.
              </li>
              <li>
                <strong>Affiliate partnerships</strong> — Some pages in our
                Peptide Encyclopedia include links to research peptide
                suppliers. When you click these links and make a purchase, we
                may earn a commission at no additional cost to you.
              </li>
            </ol>
          </div>

          {/* What This Means for You */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              What This Means for You
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                <strong>No cost to you:</strong> You never pay more for
                purchasing through our links. The vendor pays us a commission
                from their marketing budget.
              </li>
              <li>
                <strong>Editorial independence:</strong> Affiliate partnerships
                do not influence our peptide encyclopedia content, clinic
                rankings, or editorial recommendations.
              </li>
              <li>
                <strong>Clinic directory is unaffected:</strong> Our clinic
                listings and rankings are completely separate from research
                peptide vendor partnerships. Clinics cannot pay for higher
                rankings.
              </li>
              <li>
                <strong>Vendor rankings are transparent:</strong> Our “Where to
                Buy” vendor rankings are based on trust signals (third-party
                testing, COA availability, community reputation) and may
                include premium placements that are clearly labeled.
              </li>
            </ul>
          </div>

          {/* How to Identify Affiliate Links */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              How to Identify Affiliate Links
            </h2>
            <p className="mt-2">
              Affiliate links appear in “Where to Buy” sections on peptide
              encyclopedia pages. These sections are always clearly labeled
              with a disclosure notice. All affiliate links use{" "}
              <code className="rounded bg-[#F7F8F9] px-1 py-0.5 text-xs sm:text-sm break-words">
                rel="sponsored"
              </code>{" "}
              attributes as required by search engine guidelines.
            </p>
          </div>

          {/* Research Peptide Disclaimer */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Research Peptide Disclaimer
            </h2>
            <p className="mt-2">
              Research peptides linked from our site are sold for laboratory and
              research use only. They are not intended for human consumption.
              MyPeptideMatch.com does not endorse, recommend, or encourage the
              use of research peptides for any purpose other than legitimate
              scientific research. Always consult a qualified healthcare
              provider for medical advice.
            </p>
          </div>

          {/* FTC Compliance */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              FTC Compliance
            </h2>
            <p className="mt-2">
              This disclosure is provided in accordance with the Federal Trade
              Commission's guidelines on endorsements and testimonials (16 CFR
              Part 255). We are committed to transparency about our business
              relationships and revenue sources.
            </p>
          </div>

          {/* Contact Box */}
          <div className="rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-4 sm:p-5">
            <p className="text-sm text-[#6b7280]">
              Questions about our affiliate program or partnerships? Visit our{" "}
              <a
                href="/contact"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Contact
              </a>{" "}
              page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AffiliateDisclosure;