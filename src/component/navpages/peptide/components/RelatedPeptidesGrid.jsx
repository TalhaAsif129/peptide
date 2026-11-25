import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RelatedPeptidesGrid({ relatedPeptides = [] }) {
  if (!relatedPeptides || relatedPeptides.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase font-saira tracking-[-0.14px] text-[#6b7280] mb-4">
        Related Peptides
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {relatedPeptides.map((peptide, idx) => (
          <Link
            key={peptide.name || idx}
            to={peptide.link || "/peptides"}
            className="group flex flex-col rounded-[5px] bg-white p-5 transition-all duration-200 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 border border-[#e5e7eb]"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="saira-bold font-bold text-[#333333] group-hover:text-[#1F6CD6] transition-colors leading-snug">
                {peptide.name}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-[6px] py-0.5 px-2 text-[12px] leading-[19px] font-medium bg-[#f6f8f7] text-[#5b6764] border border-[#e3e8e6] shrink-0">
                <span className="h-1 w-1 rounded-full bg-[#5b6764]" />
                {peptide.badge || "Research Use"}
              </span>
            </div>

            {peptide.category && (
              <p className="mt-1 text-sm text-[#6b7280]">{peptide.category}</p>
            )}

            {peptide.description && (
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b7280]">
                {peptide.description}
              </p>
            )}

            {peptide.tags && peptide.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {peptide.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-[4px] bg-[#F7F8F9] px-2.5 py-0.5 text-xs font-medium text-[#6b7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-[#1F6CD6] transition-colors group-hover:text-[#1a5bb5]">
              Learn more
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
