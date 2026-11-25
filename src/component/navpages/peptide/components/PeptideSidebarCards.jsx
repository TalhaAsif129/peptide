import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Calculator } from "lucide-react";

export default function PeptideSidebarCards({
  peptideName,
  slug,
  hasEmbeddedCalc = false,
}) {
  const handleScrollToCalc = (e) => {
    e.preventDefault();
    const el = document.getElementById("calculator-body");
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const getCalcCardConfig = () => {
    if (slug === "sermorelin" || slug === "cjc-1295-ipamorelin") {
      return {
        title: `Calculate Your ${peptideName} Dose`,
        description: `Use our free peptide reconstitution calculator with ${peptideName} defaults pre-loaded.`,
        buttonText: "Open peptide calculator",
        icon: <Calculator className="h-3.5 w-3.5" />,
        iconPosition: "left",
        isAnchor: false,
        href: `/tools/peptide-calculator?peptide=${slug}`,
      };
    }

    if (hasEmbeddedCalc) {
      return {
        title: `Calculate Your ${peptideName} Dose`,
        description: `Use our free peptide reconstitution calculator with ${peptideName} defaults pre-loaded.`,
        buttonText: "Jump to Calculator",
        icon: <ArrowDown className="h-4 w-4" />,
        iconPosition: "right",
        isAnchor: true,
        href: "#calculator-body",
      };
    }

    if (slug === "retatrutide") {
      return {
        title: "Calculate Your Retatrutide Dose",
        description:
          "Use our free Retatrutide dosage calculator to get exact insulin syringe units for your vial and dose.",
        buttonText: "Open Retatrutide calculator",
        icon: <Calculator className="h-3.5 w-3.5" />,
        iconPosition: "left",
        isAnchor: false,
        href: "/tools/retatrutide-dosage-calculator",
      };
    }

    return {
      title: `Calculate Your ${peptideName} Dose`,
      description: `Use our free peptide reconstitution calculator with ${peptideName} defaults pre-loaded.`,
      buttonText: "Open Reconstitution Calculator",
      icon: <ArrowRight className="h-4 w-4" />,
      iconPosition: "right",
      isAnchor: false,
      href: `/tools/peptide-calculator?peptide=${slug}`,
    };
  };

  const calcConfig = getCalcCardConfig();

  return (
    <div className="space-y-5 font-sans">
      {/* Calculator CTA Card */}
      <div className="overflow-hidden rounded-[5px] bg-[#F7F8F9] border border-[#e5e7eb] p-5 shadow-sm">
        <h3 className="font-heading saira-bold text-sm font-bold text-[#333333] tracking-[-0.14px]">
          {calcConfig.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
          {calcConfig.description}
        </p>
        {calcConfig.isAnchor ? (
          <a
            href={calcConfig.href}
            onClick={handleScrollToCalc}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
          >
            {calcConfig.iconPosition === "left" && calcConfig.icon}
            {calcConfig.buttonText}
            {calcConfig.iconPosition === "right" && calcConfig.icon}
          </a>
        ) : (
          <Link
            to={calcConfig.href}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
          >
            {calcConfig.iconPosition === "left" && calcConfig.icon}
            {calcConfig.buttonText}
            {calcConfig.iconPosition === "right" && calcConfig.icon}
          </Link>
        )}
      </div>

      {/* Clinics Directory CTA Card */}
      <div className="overflow-hidden rounded-[5px] bg-[#F7F8F9] border border-[#e5e7eb] p-5 shadow-sm">
        <h3 className="font-heading saira-bold text-sm font-bold text-[#333333]">
          Find Clinics Offering {peptideName}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">
          Browse our directory of verified peptide therapy clinics.
        </p>
        <Link
          to={`/clinics?peptide=${slug || peptideName.toLowerCase()}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
        >
          Find a Clinic
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
