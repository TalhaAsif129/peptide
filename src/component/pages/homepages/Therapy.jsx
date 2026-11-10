// src/pages/HomePage/ExplorePeptide.jsx
// src/component/pages/homepages/ExplorePeptide.jsx
import { Link } from "react-router-dom";
import clinics from "../../../assets/homepageimges/therapy/clinics.jpg";
import tools from "../../../assets/homepageimges/therapy/tools.jpg";
import telehealth from "../../../assets/homepageimges/therapy/telehealth.jpg";
import peptides from "../../../assets/homepageimges/therapy/peptides.jpg";

export default function ExplorePeptide() {
  const cards = [
    {
      title: "Find Clinics Near You",
      description:
        "Find peptide therapy clinics by location, treatment type, and patient reviews.",
      bgColor: "bg-[#d6e5ef]",
      image: clinics,
      link: "/clinics/browse-by-state",
    },
    {
      title: "Explore Peptides",
      description:
        "Research peptides with FDA status, benefits, dosing, and side effects.",
      bgColor: "bg-[#d9ebe3]",
      image: peptides,
      link: "/peptides/by-category",
    },
    {
      title: "Best Telehealth Clinics",
      description:
        "Independent rankings of the best telehealth clinics for GLP-1, peptides, TRT, and longevity.",
      bgColor: "bg-[#e0dcf0]",
      image: telehealth,
      link: "/clinics/best-telehealth",
    },
    {
      title: "Dosing Tools",
      description:
        "Calculate peptide dosing and titration schedules with our free calculators.",
      bgColor: "bg-[#f0e2c9]",
      image: tools,
      link: "/tools/peptide-calculator",
    },
  ];

  return (
    <section className="bg-[#F6F8F7] py-[clamp(48px,7vw,72px)] border-t border-[#e3e8e6] font-sans">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">
        {/* ===== Header Row ===== */}
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="text-[#1c2522] saira-extrabold text-[26px] leading-[42px] tracking-[-0.26px] lg:text-[34px] lg:leading-[54px] lg:tracking-[-0.34px] md:text-[31px] md:leading-[49px] md:tracking-[-0.31px] ">
            Explore Peptide Therapy
          </h2>
          <Link
            to="/peptides"
            className="flex items-center gap-1.5 text-[#0d5b60] font-bold leading-[24px] text-[15px] no-underline hover:text-[#0a474b] transition-colors"
          >
            See all →
           
          </Link>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e3e8e6] flex flex-col no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(16,40,36,0.1),0_4px_6px_-4px_rgba(16,40,36,0.1)] cursor-pointer"
            >
              {/* Image Area */}
              <div
                className={`${card.bgColor} h-[150px] flex items-center justify-center `}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-[150px] w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#1c2522] saira-bold text-[19px] mb-3 leading-[30px] tracking-[-0.19px] ">
                  {card.title}
                </h3>
                <p className="text-[#5b6764] text-[15px] leading-[23px] mb-2.5 flex-1">
                  {card.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[#066068] font-bold text-[14px] leading-[22px] no-underline group-hover:gap-2.5 transition-all"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}