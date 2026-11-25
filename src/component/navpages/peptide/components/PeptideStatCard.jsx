import React from "react";

export default function PeptideStatCard({
  stat = "24.2%",
  label = "mean weight loss at 12 mg over 48 weeks — Phase 2 obesity trial (PMID 37366315)",
}) {
  return (
    <div className="my-6 flex items-center gap-4 rounded-xl border border-[#FFF0BB] bg-[#F7F8F9] p-5 font-sans">
      <span
        className="text-3xl font-bold text-[#333333] font-heading saira-bold shrink-0"
        style={{ fontFamily: "var(--font-heading, 'Saira Condensed', sans-serif)" }}
      >
        {stat}
      </span>
      <span className="text-sm leading-snug text-[#6b7280]">
        {label}
      </span>
    </div>
  );
}
