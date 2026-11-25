import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PeptideFaqAccordion({ faqs = [] }) {
  const [openIndices, setOpenIndices] = useState([0]); // first item open by default

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };

  return (
    <section className="scroll-mt-24 my-8">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2
        id="faq"
        className="scroll-mt-24 saira-bold text-2xl font-bold tracking-tight text-[#333333] mb-6"
      >
        FAQ
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-lg border border-[#e5e7eb] bg-white transition-all overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[#F7F8F9]"
              >
                <span className="font-semibold text-[15px] sm:text-base text-[#1c2522]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#6b7280] transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#0b7c84]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-sm sm:text-[15px] leading-relaxed text-[#4a4a4a] border-t border-[#f3f4f6]">
                  <div
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    className="[&_a]:text-[#1F6CD6] [&_a]:underline [&_a:hover]:text-[#0b7c84]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
