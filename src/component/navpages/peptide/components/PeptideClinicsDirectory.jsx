import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

export default function PeptideClinicsDirectory({
  peptideName,
  slug = "retatrutide",
  clinics = [],
  totalCount = 156,
}) {
  const displayClinics = clinics && clinics.length > 0 ? clinics : [];

  return (
    <section className="mt-12 rounded-[5px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] font-sans">
      <h2 className="font-heading saira-bold text-lg font-bold text-[#333333] tracking-[-0.18px]">
        Find Clinics Offering {peptideName}
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        {totalCount} clinics in our directory offer {peptideName}. Use the button
        below to find one near you.
      </p>

      {/* Grid of Clinics */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayClinics.map((clinic, idx) => (
          <article
            key={clinic.name || idx}
            className="flex flex-col rounded-[5px] bg-white overflow-hidden transition-all duration-200 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 border border-transparent"
          >
            {/* Image */}
            <div className="relative h-36 w-full shrink-0 bg-gray-100 overflow-hidden">
              <img
                src={clinic.img}
                alt={`${clinic.name} clinic`}
                loading="lazy"
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80";
                }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col p-4 gap-1.5">
              <div className="flex flex-wrap items-start gap-x-1.5 gap-y-1">
                <Link
                  to={clinic.href || "/clinics"}
                  className="font-semibold text-[#333333] hover:text-[#1F6CD6] leading-snug line-clamp-2"
                >
                  {clinic.name}
                </Link>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] text-xs font-medium uppercase tracking-wide bg-[#e6f2f2] text-[#066068] border border-[#0b7c84]/30 shrink-0">
                  <span aria-hidden="true" className="text-[#066068]">
                    ✓
                  </span>
                  Verified
                </span>
              </div>

              <p className="text-sm text-[#6b7280]">{clinic.location}</p>

              {/* Rating & Reviews */}
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex text-[#e8a317]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-[#e8a317]"
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6b7280] ml-0.5">
                  <span className="text-[#333333]">5.0</span>
                  {clinic.reviews && (
                    <span className="ml-1">({clinic.reviews})</span>
                  )}
                </span>
              </div>

              {/* Pill badge */}
              <div className="flex flex-wrap gap-1 mt-0.5">
                <span className="rounded-[4px] bg-[#FFF0BB] px-2 py-0.5 text-xs font-medium text-[#333333]">
                  in-person
                </span>
              </div>

              <div className="flex-1" />

              {/* View Clinic Button */}
              <Link
                to={clinic.href || "/clinics"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-[4px] bg-[#FEED5A] px-4 py-2 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
              >
                View Clinic
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA to clinic directory */}
      <Link
        to={`/clinics?peptide=${slug || peptideName.toLowerCase()}`}
        className="mt-5 inline-flex items-center gap-2 rounded-[4px] bg-[#FEED5A] px-5 py-2.5 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
      >
        Find a Peptide Clinic Near You
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
