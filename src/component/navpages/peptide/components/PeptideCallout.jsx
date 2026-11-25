import React from "react";
import { AlertTriangle, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PeptideCallout({
  type = "info",
  title,
  badge,
  children,
  linkText,
  linkHref,
}) {
  if (type === "warning") {
    return (
      <div className="my-6 rounded-xl border-l-4 border-amber-400 bg-amber-50/70 p-5 shadow-sm font-sans">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
          <div className="min-w-0">
            {title && (
              <p className="mb-1.5 text-sm font-bold text-amber-800">{title}</p>
            )}
            <div className="text-[0.9375rem] leading-relaxed text-[#4a4a4a]">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "blue") {
    return (
      <div className="my-6 rounded-xl border-l-4 border-blue-400 bg-blue-50/70 p-5 shadow-sm font-sans">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" />
          <div className="min-w-0">
            {title && (
              <p className="mb-1.5 text-sm font-bold text-blue-800">{title}</p>
            )}
            <div className="text-[0.9375rem] leading-relaxed text-[#4a4a4a]">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "protocol") {
    return (
      <section className="mt-12 rounded-[5px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] font-sans">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-heading saira-bold text-lg font-bold text-[#333333] tracking-[-0.18px]">
            {title || "Dosing protocol"}
          </h2>
          <span className="rounded bg-[#FEED5A] px-2 py-0.5 text-xs font-semibold text-[#333333]">
            {badge || "Protocol"}
          </span>
        </div>
        <p className="mt-2 text-sm text-[#6b7280]">
          {children ||
            "Week-by-week dosing, reconstitution steps, supplies checklist, and cycle tips."}
        </p>
        {linkHref && (
          <Link
            to={linkHref}
            className="mt-4 inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
          >
            {linkText || "Week-by-week dosing protocol"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </section>
    );
  }

  return (
    <div className="my-6 rounded-xl border-l-4 border-[#0b7c84] bg-[#e6f2f2]/60 p-5 shadow-sm font-sans">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 shrink-0 text-[#0b7c84] mt-0.5" />
        <div className="text-sm leading-relaxed text-[#2d3a36]">
          {title && <h4 className="font-bold text-[#1c2522] mb-1">{title}</h4>}
          {children}
        </div>
      </div>
    </div>
  );
}
