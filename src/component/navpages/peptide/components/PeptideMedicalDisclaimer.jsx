import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PeptideMedicalDisclaimer({ text }) {
  const disclaimerText =
    text ||
    "MyPeptideMatch.com does not provide medical advice. Always consult a qualified healthcare provider before starting any peptide therapy. Regulatory status may change.";

  return (
    <div className="mt-10 flex items-start gap-3 rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] p-5">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#6b7280]" />
      <p className="text-sm leading-relaxed text-[#6b7280] font-sans">
        {disclaimerText}
      </p>
    </div>
  );
}
