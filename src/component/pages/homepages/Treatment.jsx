// src/component/pages/homepages/ExplorePeptide.jsx
import { Link } from "react-router-dom";
import weightloss from "../../../assets/homepageimges/Treatment/weightloss.jpg";
import antiAging from "../../../assets/homepageimges/Treatment/anti-aging.jpg";
import tissueRepair from "../../../assets/homepageimges/Treatment/tissue-repair.jpg";
import hormone from "../../../assets/homepageimges/Treatment/hormone.jpg";
import cognitive from "../../../assets/homepageimges/Treatment/cognitive.jpg";
import sexualWellness from "../../../assets/homepageimges/Treatment/sexual-wellness.jpg";
import athletic from "../../../assets/homepageimges/Treatment/athletic.jpg";
import immune from "../../../assets/homepageimges/Treatment/immune.jpg";

export default function ExplorePeptide() {
  const cards = [
    {
      title: "Weight Loss",
      description:
        "Find GLP-1 and peptide clinics for medically supervised weight management.",
      image: weightloss,
      bgColor: "#dcebe4",
      link: "/weightloss",
    },
    {
      title: "Anti-Aging & Longevity",
      description:
        "Explore peptides and providers focused on healthy aging and longevity.",
      image: antiAging,
      bgColor: "#f0e6d2",
      link: "/antiaging",
    },
    {
      title: "Tissue Repair & Recovery",
      description:
        "Support injury recovery and healing with targeted repair peptides.",
      image: tissueRepair,
      bgColor: "#f5dcd6",
      link: "/tissuerepair",
    },
    {
      title: "Hormone Optimization",
      description:
        "Balance hormones with TRT, sermorelin, and growth-hormone protocols.",
      image: hormone,
      bgColor: "#d7e5ee",
      link: "/hormoneoptimization",
    },
    {
      title: "Cognitive Enhancement",
      description:
        "Sharpen focus and memory with nootropic and neuro-support peptides.",
      image: cognitive,
      bgColor: "#e5dff0",
      link: "/cognitiveenhancement",
    },
    {
      title: "Sexual Wellness",
      description:
        "Address libido and performance with clinically guided peptide options.",
      image: sexualWellness,
      bgColor: "#f5ded4",
      link: "/sexualwellness",
    },
    {
      title: "Athletic Performance",
      description:
        "Improve strength, endurance, and recovery for active lifestyles.",
      image: athletic,
      bgColor: "#dcebe4",
      link: "/athleticperformance",
    },
    {
      title: "Immune Support",
      description:
        "Strengthen immune resilience with thymic and immune-modulating peptides.",
      image: immune,
      bgColor: "#d7e5ee",
      link: "/immunesupport",
    },
  ];

  return (
    <section className="bg-white py-[clamp(48px,7vw,72px)] font-sans">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">

        {/* ===== Header Row ===== */}
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="text-[#1c2522] saira-extrabold text-[26px] leading-[42px] tracking-[-0.26px] lg:text-[34px] lg:leading-[54px] lg:tracking-[-0.34px] md:text-[31px] md:leading-[49px] md:tracking-[-0.31px]">
            Browse by Treatment
          </h2>
          <Link
            to="/clinics/by-treatment"
            className="flex items-center gap-1.5 text-[#0d5b60] font-bold text-[15px] leading-[24px] no-underline hover:text-[#0a474b] transition-colors whitespace-nowrap shrink-0"
          >
            See all treatments →
            
          </Link>
        </div>

        {/* ===== Cards Grid — 3 columns ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              style={{ backgroundColor: card.bgColor }}
              className="group rounded-2xl overflow-hidden relative flex flex-col min-h-[184px] no-underline transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(16,40,36,0.12)] cursor-pointer"
            >
              {/* Text — Left Side */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full max-w-[62%]">
                <div>
                  <h3 className="text-[#1c2522] saira-bold text-[18px] mb-2 leading-[22px] tracking-[-0.18px] ">
                    {card.title}
                  </h3>
                  <p className="text-[#3a4744] font-normal text-[14px] leading-[20px]">
                    {card.description}
                  </p>
                </div>

                <span
                  className="inline-flex items-center gap-1.5 bg-white text-[#066068] font-bold text-[14px] leading-[22px] no-underline px-5 py-2.5 rounded-full shadow-sm mt-4 w-fit group-hover:shadow-md group-hover:gap-2.5 transition-all"
                >
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>

              {/* Image — Right Side */}
              <div className="absolute bottom-0 right-0 h-full w-full flex items-end justify-end pointer-events-none">
                <img
                  src={card.image}
                  alt={card.title}
                 className="h-full w-full object-contain object-right-bottom"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}