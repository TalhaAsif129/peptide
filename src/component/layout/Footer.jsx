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
        { label: "Semaglutide", to: "#" },
        { label: "Tirzepatide", to: "#" },
        { label: "BPC-157", to: "#" },
        { label: "Sermorelin", to: "#" },
        { label: "CJC-1295 / Ipamorelin", to: "#" },
        { label: "View All Peptides", to: "#" },
        { label: "Vendors", to: "#" },
      ],
    },
    {
      title: "PROTOCOLS",
      links: [
        { label: "All Protocols", to: "#" },
        { label: "Weight Loss & GLP-1", to: "#" },
        { label: "Growth Hormone & GHRH", to: "#" },
        { label: "Tissue Repair & Recovery", to: "#" },
        { label: "Anti-Aging & Longevity", to: "#" },
        { label: "Cognitive, Neuro & Sleep", to: "#" },
        { label: "Peptide Blends & Stacks", to: "#" },
      ],
    },
    {
      title: "TREATMENTS",
      links: [
        { label: "Weight Loss", to: "#" },
        { label: "Anti-Aging", to: "#" },
        { label: "Tissue Repair", to: "#" },
        { label: "Hormone Optimization", to: "#" },
        { label: "View All Treatments", to: "#" },
      ],
    },
    {
      title: "TOOLS & RESOURCES",
      links: [
        { label: "Peptide Calculator", to: "#" },
        { label: "Titration Calculator", to: "#" },
        { label: "Units Converter", to: "#" },
        { label: "Compare Peptides", to: "#" },
        { label: "Blog", to: "/blog" },
        { label: "2026 Therapy Report", to: "/peptide-therapy-report" },
        { label: "Telehealth Clinics", to: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#333333] text-gray-400 font-sans">
      {/* ===== Top Section — Columns ===== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[12px] font-bold tracking-widest text-gray-500 uppercase mb-5">
                {column.title}
              </h3>
              <ul className="list-none m-0 p-0 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[15px] text-gray-300 no-underline  transition-colors"
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
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <hr className="border-t border-gray-800" />
      </div>

      {/* ===== Middle Section — Social + Disclaimer ===== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12 py-10">
        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-6">
          {/* Facebook */}
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

          {/* LinkedIn */}
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
        </div>

        {/* Disclaimer Text */}
        <p className="max-w-[820px] text-[15px] leading-relaxed text-gray-400">
          MyPeptideMatch.com is an independent directory for informational
          purposes only. We do not provide medical advice, diagnosis, or
          treatment. Always consult a qualified healthcare provider before
          starting any peptide therapy.
        </p>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="bg-[#000024] border-t border-[#1a2332]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-gray-400 m-0 text-center md:text-left">
            © 2026 MyPeptideMatch. Independent directory. Not medical advice.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[14px] text-gray-400 no-underline  transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[14px] text-gray-400 no-underline  transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/disclaimer"
              className="text-[14px] text-gray-400 no-underline transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}