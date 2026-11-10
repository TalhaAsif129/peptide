// src/component/pages/homepages/FAQ.jsx
import { useState } from "react";

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState(() => new Set());

const faqs = [
  {
    question: "What is peptide therapy?",
    answer:
      "Peptide therapy involves using short chains of amino acids to target specific functions in the body, such as weight management, tissue repair, hormone optimization, and anti-aging. Common peptides include semaglutide for weight loss and BPC-157 for recovery. Peptide therapy is offered at specialized clinics and through telehealth providers across the United States. Learn more in our guides.",
  },
  {
    question: "How much does peptide therapy cost?",
    answer:
      "Peptide therapy costs typically range from $100 to $500+ per month depending on the specific peptide, dosing protocol, and whether you obtain it from a clinic or compounding pharmacy. FDA-approved brand-name peptides like Wegovy can cost significantly more without insurance. Read our cost guide for detailed pricing breakdowns.",
  },
  {
    question: "Are peptides legal in the United States?",
    answer:
      "Several peptides are FDA-approved for specific medical uses — semaglutide (Ozempic/Wegovy) is approved for diabetes and weight management. Other peptides are available through compounding pharmacies with a prescription, while some are sold for research purposes only. The FDA has issued warnings about certain compounded peptides including BPC-157. In April 2026 the FDA removed BPC-157 and 11 other peptides from its Category 2 restricted list, and in July 2026 an FDA advisory committee recommended adding BPC-157 to the list of substances pharmacies may compound. That recommendation is not binding, and FDA rulemaking has not finished. Read the July 2026 update.",
  },
  {
    question: "What are the most popular peptides?",
    answer:
      "The most widely used peptides are semaglutide and tirzepatide for weight loss, BPC-157 for tissue repair, and sermorelin for growth hormone support. Browse our full directory of 87 peptides with FDA status, benefits, and dosing information.",
  },
  {
    question: "How do I find a peptide therapy clinic near me?",
    answer:
      "Use our clinic directory to search over 4,700 peptide therapy clinics across 46 states. Enter your zip code to find clinics near you, filter by treatment type, and compare services. Many clinics also offer telehealth consultations for patients who prefer remote care.",
  },
  {
    question: "What's the difference between FDA-approved and compoundable peptides?",
    answer:
      "FDA-approved peptides (like Ozempic or Wegovy) are manufactured under strict FDA oversight and have completed clinical trials. Compoundable peptides are custom-made by compounding pharmacies — often at lower cost — but with less regulatory oversight. Look for pharmacies that provide Certificates of Analysis (COA) and third-party testing.",
  },
];


  const toggle = (index) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="bg-white py-[60px] font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px] mx-auto">

          {/* ===== Heading ===== */}
          <h2 className="text-[#333333] text-[24px] saira-semibold leading-[38px] tracking-[-0.24px] mb-10">
            Frequently Asked Questions
          </h2>

          {/* ===== FAQ List ===== */}
          <div className="">
            {faqs.map((faq, index) => {
              const isOpen = openIndexes.has(index);

              return (
                <div
                  key={index}
                  className="border-b border-[#e5e7eb]"
                >
                  {/* Question Row */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-0 cursor-pointer group"
                  >
                    <span className="text-[#333333] font-semibold text-[16px] leading-[26px] transition-colors">
                      {faq.question}
                    </span>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Answer (expand/collapse) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[600px] pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#6b7280] text-[15px] leading-[26px] font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
