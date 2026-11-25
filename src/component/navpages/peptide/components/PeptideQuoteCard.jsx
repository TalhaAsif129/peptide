import React from "react";

export default function PeptideQuoteCard({
  quote = "Retatrutide is the first drug to hit all three metabolic receptors simultaneously — and the Phase 3 numbers suggest that distinction matters.",
}) {
  return (
    <figure className="my-10 border-l-4 border-[#FEED5A] pl-6 font-sans">
      <blockquote className="font-saira my-6 rounded-r-lg border-l-[3px] border-[#0b7c84] bg-[#e6f2f2] px-5 py-4 text-[20px] font-medium italic leading-[33px] text-[#3a4744]">
        <span className="text-[#FEED5A] mr-0.5">“</span>
        {quote}
        <span className="text-[#FEED5A] ml-0.5">”</span>
      </blockquote>
    </figure>
  );
}
