// src/component/pages/homepages/IndustryReport.jsx
import { Link } from "react-router-dom";

export default function IndustryReport() {
  const stats = [
    { value: "4,767+", label: "Clinics tracked" },
    { value: "43", label: "States covered" },
    { value: "117", label: "Peptide profiles" },
    { value: "2026", label: "Report edition" },
  ];

  return (
    <section className="bg-[#F6F8F7] py-[clamp(40px,6vw,64px)] font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

        <div className="bg-[#0A363B] rounded-[24px] p-[clamp(28px,5vw,56px)] grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-[clamp(28px,4vw,48px)] items-center">

          {/* ===== Left — Text ===== */}
          <div>
            <span className="inline-block text-[12px] leading-[19px] font-bold tracking-[0.08em] uppercase text-white/82 mb-3.5">
              2026 Industry Report
            </span>

            <h2 className="text-white saira-extrabold text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] m-0">
              Peptide Therapy Industry Data
            </h2>

            <p className="text-[clamp(1rem,2vw,1.125rem)] text-white/82 leading-[1.6] mt-4 max-w-[52ch]">
              Our 2026 report covers clinic density by state, the
              most-prescribed peptides, pricing trends, and telehealth adoption
              across 4,767+ clinics.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="#"
                className="inline-flex items-center justify-center bg-white text-[#066068] font-bold text-[15px] leading-[24px] px-[22px] py-3 rounded-full no-underline hover:bg-[#e6f0ec] transition-colors"
              >
                Read the 2026 Report
              </Link>
              <Link
                to="/peptides/compare"
                className="inline-flex items-center justify-center border-[1.5px] border-white/55 text-white font-bold text-[15px] leading-[24px] px-[22px] py-3 rounded-full no-underline hover:bg-white/10 transition-colors"
              >
                Compare Peptides
              </Link>
            </div>
          </div>

          {/* ===== Right — Stats Box ===== */}
          <div>
            <div className="bg-white rounded-[16px] p-[clamp(20px,3vw,28px)] grid grid-cols-2 gap-[clamp(14px,2vw,22px)]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[#1c2522] saira-extrabold text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-none lg:tracking-[-0.32px] tracking-[-0.24px]">
                    {stat.value}
                  </div>
                  <div className="text-[#5b6764] text-[13px] leading-[21px] font-normal mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
