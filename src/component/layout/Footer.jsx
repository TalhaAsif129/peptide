import { Link } from "react-router-dom";

export default function Footer() {
  const footerColumns = [
    {
      title: "MYPEPTIDEMATCH",
      links: [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Claim Your Listing", to: "/claim-your-listing" },
        { label: "Affiliate Disclosure", to: "/affiliate-disclosure" },
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms of Service", to: "/terms" },
      ],
    },
    {
      title: "PEPTIDES",
      links: [
        { label: "Semaglutide", to: "/peptides/semaglutide" },
        { label: "Tirzepatide", to: "/peptides/tirzepatide" },
        { label: "BPC-157", to: "/popularbpc" },
        { label: "Sermorelin", to: "/sermorelin" },
        { label: "CJC-1295 / Ipamorelin", to: "/ipamorelin" },
        { label: "View All Peptides", to: "/peptides" },
        { label: "Vendors", to: "/peptides/vendors" },
      ],
    },
    {
      title: "PROTOCOLS",
      links: [
        { label: "All Protocols", to: "/protocols" },
        { label: "Weight Loss & GLP-1", to: "/protocols/weight-loss-glp1" },
        { label: "Growth Hormone & GHRH", to: "/protocols/growth-hormone-ghrh" },
        { label: "Tissue Repair & Recovery", to: "/protocols/tissue-repair" },
        { label: "Anti-Aging & Longevity", to: "/protocols/anti-aging" },
        { label: "Cognitive, Neuro & Sleep", to: "/protocols/cognitive-neuro-sleep" },
        { label: "Peptide Blends & Stacks", to: "/protocols/blends-stacks" },
      ],
    },
    {
      title: "TREATMENTS",
      links: [
        { label: "Weight Loss", to: "/weightloss" },
        { label: "Anti-Aging", to: "/antiaging" },
        { label: "Tissue Repair", to: "/tissuerepair" },
        { label: "Hormone Optimization", to: "/hormoneoptimization" },
        { label: "View All Treatments", to: "/clinics/by-treatment" },
      ],
    },
    {
      title: "TOOLS & RESOURCES",
      links: [
        { label: "Peptide Calculator", to: "/tools/peptide-calculator" },
        { label: "Titration Calculator", to: "/tools/titration-calculator" },
        { label: "Units Converter", to: "/tools/units-converter" },
        { label: "Compare Peptides", to: "/peptides/compare" },
        { label: "Blog", to: "/blog" },
        { label: "2026 Therapy Report", to: "/peptide-therapy-report" },
        { label: "Telehealth Clinics", to: "/telehealth-clinics" },
      ],
    },
  ];

  return (
    <footer className="bg-[#16203B] text-gray-400 font-sans">
      {/* ===== Top Section — Columns ===== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[12px] fraunces-semibold tracking-widest text-[#CC9548] uppercase mb-5">
                {column.title}
              </h3>
              <ul className="list-none m-0 p-0 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[15px] text-[#C1C7D6] fraunces-semibold no-underline  transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Divider ===== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20">
        <hr className="border-t border-[#333C59]" />
      </div>

      {/* ===== Middle Section — Social + Disclaimer ===== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20 py-8">
        {/* Social Icons */}
        {/* <div className="flex items-center gap-4 mb-6">
         
          <a
            href="https://www.facebook.com/MyPeptideMatch/"
            aria-label="Facebook"
            className="text-gray-400  transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

         
          <a
            href="https://www.linkedin.com/company/mypeptidematch/"
            aria-label="LinkedIn"
            className="text-gray-400  transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div> */}

        {/* Disclaimer Text */}
        <p className="max-w-[820px] text-[15px] fraunces-medium leading-[-0.30px]  text-[#C1C7D6]">
        Peptide Dose Book is an independent reference for informational purpose. It does not provide medical advice, diagnosis, or treatment. Talk to a qualified healthcare provider before starting, changing or stopping any medication. 
        </p>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className=" border-t border-[#1a2332]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-20 py-5 fraunces-semibold flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px]text-[#C1C7D6] m-0 text-center md:text-left">
            © 2026 Peptide Dose Book. Independent reference. Not medical advice.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[14px] text-[#C1C7D6] no-underline  transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[14px] text-[#C1C7D6] no-underline  transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/disclaimer"
              className="text-[14px] text-[#C1C7D6] no-underline transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}