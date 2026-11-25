import React from "react";
import { Star, Check, FlaskConical } from "lucide-react";

export default function PeptideResearchVendorList({ peptideName, vendors = [] }) {
  if (!vendors || vendors.length === 0) return null;

  return (
    <section className="mt-10 font-sans">
      <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#F7F8F9] bg-[#F7F8F9] px-5 py-4">
          <FlaskConical className="h-5 w-5 text-[#6b7280] shrink-0" />
          <div>
            <h2 className="font-heading saira-bold text-base font-bold text-[#333333] tracking-[-0.16px]">
              Where to Buy {peptideName} for Research
            </h2>
            <p className="mt-0.5 text-xs text-[#6b7280]">
              Research Use Only — not intended for human consumption
            </p>
          </div>
        </div>

        {/* Vendor Rows */}
        <div className="divide-y divide-[#F7F8F9]">
          {vendors.map((vendor, idx) => {
            const isTop = idx === 0;
            return (
              <div
                key={vendor.name || idx}
                className={`flex items-start gap-4 px-5 py-4 transition-colors hover:bg-[#F7F8F9] ${
                  isTop
                    ? "bg-amber-50/30 ring-1 ring-inset ring-amber-100"
                    : ""
                }`}
              >
                {/* Rank Circle */}
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    isTop
                      ? "bg-amber-100 text-amber-800 border-amber-200"
                      : idx === 1
                      ? "bg-gray-100 text-gray-700 border-gray-200"
                      : "bg-gray-50 text-gray-500 border-gray-200"
                  }`}
                >
                  {vendor.rank || idx + 1}
                </span>

                {/* Vendor Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-[#333333]">
                      {vendor.name}
                    </span>
                    {vendor.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase leading-[16px] tracking-wider text-amber-800">
                        <Star className="h-2.5 w-2.5 fill-current" />
                        {vendor.badge}
                      </span>
                    )}
                  </div>

                  {vendor.price && (
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b7280]">
                      <span className="font-medium text-[#4a4a4a]">
                        {vendor.price}
                      </span>
                    </div>
                  )}

                  {vendor.features && vendor.features.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      {vendor.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 text-xs text-[#6b7280]"
                        >
                          <Check className="h-3 w-3 text-emerald-500" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                {vendor.link && (
                  <a
                    href={vendor.link}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="shrink-0 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#4a4a4a] transition-colors hover:border-[#6b7280] hover:bg-[#F7F8F9]"
                  >
                    View Product
                    <span className="ml-1.5 inline-block" aria-hidden="true">
                      →
                    </span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="border-t border-[#F7F8F9] bg-[#F7F8F9] px-5 py-3">
          <p className="text-[10px] leading-relaxed text-[#6b7280]">
            Research peptides are sold for laboratory use only and are not intended for human consumption.
          </p>
        </div>
      </div>
    </section>
  );
}
