import { Link } from "react-router-dom";

export default function PopularPeptides() {
  const peptides = [
    {
      name: "Semaglutide",
      status: "FDA Approved",
      statusColor: "green",
      tagline: "GLP-1 Receptor Agonist",
      description:
        "GLP-1 receptor agonist for weight management and blood sugar control.",
      link: "/tools/semaglutide-calculator", // 👈 Naya Link
    },
    {
      name: "Tirzepatide",
      status: "FDA Approved",
      statusColor: "green",
      tagline: "GIP/GLP-1 Receptor Agonist",
      description:
        "Dual GIP/GLP-1 agonist for weight loss — the most effective peptide in clinical trials.",
      link: "/tools/tirzepatide-calculator", // 👈 Naya Link
    },
    {
      name: "BPC-157",
      status: "Research Use",
      statusColor: "gray",
      tagline: "Synthetic Fragment",
      description:
        "Gastric pentadecapeptide for accelerated tissue repair and injury recovery.",
      link: "/popularbpc", // 👈 Naya Link
    },
    {
      name: "Retatrutide",
      status: "Research Use",
      statusColor: "gray",
      tagline: "Triple Incretin Agonist",
      description:
        "Triple-agonist investigational peptide showing exceptional weight loss results.",
      link: "/Retatrutide", // 👈 Naya Link
    },
    {
      name: "Sermorelin",
      status: "Compoundable",
      statusColor: "blue",
      tagline: "Growth Hormone Releasing Hormone",
      description:
        "Growth hormone-releasing hormone analog for anti-aging and body composition.",
      link: "/sermorelin", // 👈 Naya Link
    },
    {
      name: "CJC-1295 / Ipamorelin",
      status: "Research Use",
      statusColor: "gray",
      tagline: "Growth Hormone Secretagogue",
      description:
        "Growth hormone secretagogue stack for recovery and body composition.",
      link: "/ipamorelin", // 👈 Naya Link
    },
  ];

  // Status badge ke liye color styles (Bilkul same)
  const statusStyles = {
    green: "bg-[#d9ede0] text-[#1e7a46] border border-[#c4dfcd]",
    blue: "bg-[#dae4f0] text-[#1f6fb2] border border-[#c3d4e8]",
    gray: "bg-[#f0f0f0] text-[#5b6764] border border-[#e0e0e0]",
  };

  return (
    <section className="bg-[#F6F8F7] py-[clamp(48px,7vw,72px)] border-t border-[#e3e8e6] font-sans">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">

        {/* ===== Header Row ===== */}
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="text-[#1c2522] saira-extrabold text-[26px] leading-[42px] tracking-[-0.26px] lg:text-[34px] lg:leading-[54px] lg:tracking-[-0.34px] md:text-[31px] md:leading-[49px] md:tracking-[-0.31px]">
            Popular Peptides
          </h2>
          <Link
            to="/peptides"
            className="flex items-center gap-1.5 text-[#0d5b60] font-bold text-[15px] leading-[24px] no-underline hover:text-[#0a474b] transition-colors"
          >
            See all 87 peptides →
            
          </Link>
        </div>

        {/* ===== Cards Grid — 4 columns ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5">
          {peptides.map((peptide) => (
            <Link
              key={peptide.name}
              to={peptide.link}
              className="group bg-white border border-[#e5e7e5] rounded-2xl p-6 flex flex-col no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(16,40,36,0.1),0_4px_6px_-4px_rgba(16,40,36,0.1)] cursor-pointer"
            >
              {/* Top Row — Name + Badge */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <h3 className="text-[#0f2027] saira-bold text-[19px] leading-[30px] tracking-[-0.19px]">
                  {peptide.name}
                </h3>
                <span
                  className={`${statusStyles[peptide.statusColor]} text-[12px] leading-[19px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap shrink-0`}
                >
                  {peptide.status}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-[#066068] font-semibold text-[13px] leading-[21px] mb-2.5">
                {peptide.tagline}
              </p>

              {/* Description */}
              <p className="text-[#5b6764] text-[14px] leading-[22px] font-regular flex-1 mb-5">
                {peptide.description}
              </p>

              {/* Learn More */}
              <span
                className="inline-flex items-center gap-1.5 text-[#0d5b60] font-bold lg:text-[14px] leading-[22px] no-underline group-hover:gap-2.5 transition-all mt-auto"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}