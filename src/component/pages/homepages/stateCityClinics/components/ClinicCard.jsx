import { useState } from "react";
import { Link } from "react-router-dom";

const PEPTIDE_NAMES = {
  semaglutide: "Semaglutide",
  tirzepatide: "Tirzepatide",
  sermorelin: "Sermorelin",
  ipamorelin: "Ipamorelin",
  "cjc-1295": "CJC-1295",
  tesamorelin: "Tesamorelin",
  "bpc-157": "BPC-157",
  "tb-500": "TB-500",
  "pt-141": "PT-141",
  hexarelin: "Hexarelin",
  "ghrp-6": "GHRP-6",
  "ghrp-2": "GHRP-2",
  "mk-677": "MK-677",
  "nad+": "NAD+",
  oxytocin: "Oxytocin",
  kisspeptin: "Kisspeptin",
  "kisspeptin-10": "Kisspeptin-10",
};

export default function ClinicCard({ clinic, index }) {
  const [imgError, setImgError] = useState(false);

  if (!clinic) return null;

  const initial = clinic.name ? clinic.name.charAt(0).toUpperCase() : "C";
  const ratingValue = clinic.google_rating != null ? Number(clinic.google_rating) : null;
  const reviewCount = clinic.google_review_count ?? 0;
  const rawPeptides = Array.isArray(clinic.peptide_slugs) ? clinic.peptide_slugs : [];
  const peptideList = rawPeptides
    .map((slug) => PEPTIDE_NAMES[slug] ?? null)
    .filter((name) => name !== null);

  const offers = peptideList.length > 0
    ? peptideList.slice(0, 3)
    : (Array.isArray(clinic.conditions_treated) ? clinic.conditions_treated.slice(0, 3) : []);

  const fullStars = ratingValue != null ? Math.floor(ratingValue) : 0;
  const hasHalfStar = ratingValue != null && ratingValue % 1 >= 0.25 && ratingValue % 1 < 0.75;
  const emptyStars = ratingValue != null ? Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0)) : 0;

  return (
    <article className="group relative flex flex-col sm:flex-row rounded-[5px] bg-white transition-all duration-200 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:shadow-[0_2px_8px_rgba(0,0,0,0.15)] overflow-hidden cursor-pointer select-none border border-transparent">
      {/* Clinic Image */}
      <div className="relative h-36 w-full shrink-0 sm:h-auto sm:w-64 sm:self-stretch bg-gray-100 overflow-hidden">
        {clinic.featured_image_url && !imgError ? (
          <img
            src={clinic.featured_image_url}
            alt={`${clinic.name} clinic`}
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-700 to-slate-800 text-3xl font-bold text-white">
            {initial}
          </div>
        )}
      </div>

      {/* Clinic Content */}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 p-5">
          <div className="min-w-0 flex-1 space-y-1">
            {/* Title & Index */}
            <div className="flex items-start gap-x-2">
              <span className="font-bold text-base sm:text-xl text-[#333333] leading-snug shrink-0">
                {index}.
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <Link
                    to={`/clinic/${clinic.slug}`}
                    className="font-bold text-base sm:text-xl text-[#333333] leading-snug after:absolute after:inset-0"
                  >
                    {clinic.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Stars & Rating */}
            {ratingValue != null && (
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex" role="img" aria-label={`Rating: ${ratingValue} out of 5 stars`}>
                  {Array.from({ length: fullStars }).map((_, l) => (
                    <span key={`full-${l}`} className="text-[#e8a317]">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  ))}
                  {hasHalfStar && (
                    <span className="text-[#e8a317] relative inline-block">
                      <span className="text-[#e5e7eb]">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <span
                        className="absolute inset-0 overflow-hidden text-[#e8a317]"
                        style={{ width: "50%" }}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    </span>
                  )}
                  {Array.from({ length: emptyStars }).map((_, l) => (
                    <span key={`empty-${l}`} className="text-[#e5e7eb]">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  ))}
                </div>
                <span className="text-sm text-[#6b7280] ml-0.5">
                  <span>{ratingValue.toFixed(1)}</span>
                  <span className="ml-1">
                    ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
                  </span>
                </span>
              </div>
            )}

            {/* Location */}
            <p className="text-sm text-[#6b7280]">
              {clinic.city}, {clinic.state}
            </p>

            {/* Description (hidden on mobile, visible on tablet/desktop) */}
            {clinic.description && (
              <p className="mt-2.5 text-sm text-[#6b7280] line-clamp-2 leading-relaxed hidden sm:block">
                {clinic.description}
              </p>
            )}

            {/* Tags / Badges */}
            <div className="mt-2.5 flex flex-wrap gap-1.5 text-xs">
              {clinic.is_telehealth && (
                <span className="rounded-[4px] bg-[#FFF0BB] px-2.5 py-1 font-medium text-[#333333]">
                  Telehealth
                </span>
              )}
              {clinic.accepts_hsa_fsa && (
                <span className="rounded-[4px] bg-[#FFF0BB] px-2.5 py-1 font-medium text-[#333333]">
                  HSA/FSA
                </span>
              )}
              {clinic.offers_free_consultation && (
                <span className="rounded-[4px] bg-[#FFF0BB] px-2.5 py-1 font-medium text-[#333333]">
                  Free Consult
                </span>
              )}
              {clinic.consultation_type && (
                <span className="hidden sm:inline rounded-[4px] bg-[#F7F8F9] px-2.5 py-1 text-[#6b7280]">
                  {clinic.consultation_type}
                </span>
              )}
              {clinic.ships_medication && (
                <span className="hidden sm:inline rounded-[4px] bg-[#F7F8F9] px-2.5 py-1 text-[#6b7280]">
                  Ships Meds
                </span>
              )}
              {clinic.lab_work_included && (
                <span className="hidden sm:inline rounded-[4px] bg-[#F7F8F9] px-2.5 py-1 text-[#6b7280]">
                  Lab Work
                </span>
              )}
              {clinic.accepts_new_patients && (
                <span className="hidden sm:inline rounded-[4px] bg-[#F7F8F9] px-2.5 py-1 text-[#6b7280]">
                  New Patients
                </span>
              )}
            </div>

            {/* Offers / Conditions Treated or Peptides */}
            {offers.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-medium text-[#6b7280]">Offers:</span>
                {offers.map((item) => (
                  <span
                    key={item}
                    className="rounded-[4px] bg-[#DCE9FD] px-2.5 py-0.5 text-xs font-medium text-[#1565C0]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
