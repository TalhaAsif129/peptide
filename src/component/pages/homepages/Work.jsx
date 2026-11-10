import { Link } from "react-router-dom";

import search from "../../../assets/homepageimges/work/search.png";
import compare from "../../../assets/homepageimges/work/compare.png";
import connect from "../../../assets/homepageimges/work/connect.png";

export default function Work() {
  const steps = [
    {
      title: "Search",
      description:
        "Tell us your location and what you need — a specific peptide, a treatment goal, or a clinic near you.",
      image: search,
    },
    {
      title: "Compare",
      description:
        "Review clinics and peptides side by side: FDA status, services, pricing, and verified patient reviews.",
      image: compare,
    },
    {
      title: "Connect",
      description:
        "Reach out to a vetted clinic or telehealth provider and book your consultation with confidence.",
      image: connect,
    },
  ];

  return (
    <section className="bg-[#F6F8F7] py-[clamp(56px,8vw,88px)] border-t border-[#e3e8e6] font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* ===== Heading Block ===== */}
        <div className="text-center mb-[clamp(28px,4vw,40px)]">
          <h2 className="text-[#1c2522] saira-extrabold text-[26px] leading-[42px] tracking-[-0.26px] lg:text-[34px] lg:leading-[54px] lg:tracking-[-0.34px] md:text-[31px] md:leading-[49px] md:tracking-[-0.31px] mb-3">
            How It Works
          </h2>
          <p className="text-[#5b6764] font-regular text-[16px] leading-[26px] max-w-[580px] mx-auto">
            Finding the right peptide therapy takes three simple steps — from
            your first search to your first consultation.
          </p>
        </div>

        {/* ===== Steps Grid — 3 columns ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2.5vw,24px)] max-w-[1000px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-[20px] overflow-hidden aspect-[1/0.95] md:aspect-[1/1.05] pt-[clamp(22px,2.6vw,28px)] px-[clamp(20px,2.6vw,26px)] pb-0 flex flex-col items-center text-center shadow-[0_14px_34px_-24px_rgba(10,54,59,0.3)] bg-gradient-to-b from-[#C0E1E7] via-[#D0E8ED] to-[#DDEAE8]"
            >
              {/* Text Content */}
              <div className="relative max-w-[26ch] mx-auto">
                <h3 className="text-[#1c2522] saira-extrabold text-[22px] leading-[1.15] mb-1.5 tracking-[-0.22px]">
                  {step.title}
                </h3>
                <p className="text-[#3a4744] font-regular text-[13.5px] leading-[1.5] m-0">
                  {step.description}
                </p>
              </div>

              {/* Image Media */}
              <div className="relative mt-3 w-full flex-1 min-h-0 flex items-end justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain object-bottom block pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA Button ===== */}
        <div className="flex justify-center mt-[clamp(28px,4vw,40px)]">
          <Link
            to="/clinics/browse-by-state"
            className="inline-flex items-center gap-2 bg-[#0B7C84] hover:bg-[#0a4a4e] text-white font-bold lg:text-[16px] leading-[26px] px-6 py-3 rounded-full no-underline transition-colors"
          >
            Find a clinic near you
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
