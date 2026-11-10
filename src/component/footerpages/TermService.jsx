import React from "react";
import { Link } from "react-router-dom";

const TermService = () => {
  const headingFont = { fontFamily: "var(--font-heading)" };

  return (
    <main
      id="main-content"
      className="flex-1 w-full bg-white"
      data-content-ads-inserted="true"
    >
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Page Title */}
        <h1
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333]"
          style={headingFont}
        >
          Terms of Service
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-[#6b7280]">
          Last updated: October 2026
        </p>

        <section className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
          {/* Acceptance of Terms */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using MyPeptideMatch.com ("the Site"), you agree to
              these Terms of Service. If you do not agree, do not use the Site.
            </p>
          </div>

          {/* Use of the Site */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Use of the Site
            </h2>
            <p className="mt-2">
              The Site is an independent directory for informational purposes
              only. You may use it to search for peptide therapy clinics, read
              about peptides and treatments, and submit consultation requests to
              clinics. You agree to use the Site only for lawful purposes and not
              to misuse, disrupt, or attempt to gain unauthorized access to any
              part of the Site or its systems.
            </p>
          </div>

          {/* Accounts and Emails */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Accounts and Emails
            </h2>
            <p className="mt-2">
              When you create an account, you agree to receive emails from us,
              including account and reminder emails and marketing emails with
              peptide guides, discounts, and offers from our partners, some of
              which contain affiliate links. You can unsubscribe from marketing
              emails at any time using the link in any marketing email or in your
              tracker settings. See our{" "}
              <Link
                to="/privacy"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>

          {/* Not Medical Advice */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Not Medical Advice
            </h2>
            <p className="mt-2">
              The Site does not provide medical advice, diagnosis, or treatment.
              Content and clinic listings are for general information only.
              Always consult a qualified healthcare provider before starting any
              peptide therapy or making health decisions. Reliance on any
              information on the Site is solely at your own risk.
            </p>
          </div>

          {/* Clinic Listings and Consultation Requests */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Clinic Listings and Consultation Requests
            </h2>
            <p className="mt-2">
              Listing a clinic on the Site does not constitute an endorsement. We
              do not guarantee the accuracy, quality, or legality of any clinic
              or service. When you submit a consultation request, your
              information is shared with the clinic you selected. Submitting a
              request does not create a patient-provider relationship. Clinics
              are responsible for their own compliance with applicable laws and
              for responding to your inquiry.
            </p>
          </div>

          {/* Claim Your Listing / Clinic Submissions */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Claim Your Listing / Clinic Submissions
            </h2>
            <p className="mt-2">
              If you are a clinic owner or representative and you claim or update
              a listing through our "Claim Your Listing" or similar process, you
              represent that you have the authority to do so and that the
              information you provide is accurate. You agree to keep your listing
              information current and to comply with applicable advertising and
              healthcare regulations. We may verify ownership and reserve the
              right to remove or modify listings that violate our policies or the
              law.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Intellectual Property
            </h2>
            <p className="mt-2">
              The Site and its content (including text, design, layout, and
              logos) are owned by us or our licensors and are protected by
              copyright and other intellectual property laws. You may not copy,
              modify, distribute, or create derivative works from our content
              without our prior written permission, except for limited personal,
              non-commercial use.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, MyPeptideMatch.com and its
              operators shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits
              or data, arising from your use of the Site or any clinic or service
              found through it. Our total liability for any claim related to the
              Site shall not exceed the amount you paid to us, if any, in the
              twelve months preceding the claim, or one hundred dollars ($100),
              whichever is greater. Some jurisdictions do not allow certain
              limitations; in such cases, our liability is limited to the maximum
              extent permitted.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Dispute Resolution
            </h2>
            <p className="mt-2">
              Any dispute arising from these Terms or your use of the Site shall
              be governed by the laws of the United States and the State of
              Delaware, without regard to conflict of law principles. You agree
              to attempt to resolve any dispute informally before pursuing formal
              action. Any formal action shall be brought exclusively in the state
              or federal courts located in Delaware, and you consent to personal
              jurisdiction there.
            </p>
          </div>

          {/* Changes to These Terms */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Changes to These Terms
            </h2>
            <p className="mt-2">
              We may update these Terms from time to time. The "Last updated"
              date at the top will reflect the latest version. Continued use of
              the Site after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="font-heading text-lg sm:text-xl font-semibold text-[#333333]"
              style={headingFont}
            >
              Contact
            </h2>
            <p className="mt-2">
              For questions about these Terms, please use our{" "}
              <Link
                to="/contact"
                className="text-[#1F6CD6] hover:underline break-words"
              >
                Contact
              </Link>{" "}
              page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermService;