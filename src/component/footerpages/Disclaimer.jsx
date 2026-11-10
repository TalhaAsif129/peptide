import React from "react";

const Disclaimer = () => {
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
          Medical Disclaimer
        </h1>

        {/* Content */}
        <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
          <p>
            MyPeptideMatch.com is an independent directory for informational
            purposes only. We do not provide medical advice, diagnosis, or
            treatment. Always consult a qualified healthcare provider before
            starting any peptide therapy.
          </p>
          <p>
            Clinic listings do not constitute endorsements. Regulatory status of
            peptides can change. Information is current as of the date indicated
            but may not reflect the latest FDA actions.
          </p>
          <p>This site does not sell peptides or pharmaceutical products.</p>
          <p>
            Submitting a consultation request through this site does not create
            a patient-provider relationship.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Disclaimer;