const SORT_LABELS = {
  recommended: "Recommended",
  "highest-rated": "Highest Rated",
  "most-reviewed": "Most Reviewed",
};

export default function ClinicToolbar({
  totalCount,
  startIndex,
  endIndex,
  sortOption = "recommended",
  onSortChange,
  showMap,
  onToggleMap,
  onOpenMobileFilters,
  hasRadiusSelect = false,
  radiusValue = "25",
  onRadiusChange,
}) {
  const sortLabel = SORT_LABELS[sortOption] || "Recommended";

  return (
    <>
      {/* Mobile Sticky Toolbar (< lg) */}
      <div
        className="sticky top-16 z-20 -mx-4 mb-4 flex items-center gap-2 border-b border-[#e5e7eb] bg-white px-4 py-2.5 lg:hidden"
        role="toolbar"
        aria-label="List controls"
      >
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#e5e7eb] bg-white px-3 py-1.5 text-sm font-medium text-[#333333] hover:bg-[#F7F8F9] cursor-pointer"
        >
          <svg
            className="h-4 w-4 shrink-0 text-[#6b7280]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 5H3m9 14H3m11-16v4m2 10v4m5-9h-9m9 7h-5m5-14h-7M8 10v4m0-2H3" />
          </svg>
          Filters
        </button>

        {hasRadiusSelect && (
          <span className="relative">
            <select
              value={radiusValue}
              onChange={(e) => onRadiusChange && onRadiusChange(e.target.value)}
              className="appearance-none cursor-pointer rounded-[4px] border border-[#e5e7eb] bg-white py-1.5 pl-2 pr-6 text-sm font-medium text-[#333333] focus:border-[#FEED5A] focus:outline-none"
              aria-label="Search radius"
            >
              <option value="10">10 mi</option>
              <option value="25">25 mi</option>
              <option value="50">50 mi</option>
              <option value="100">100 mi</option>
              <option value="all">All</option>
            </select>
            <svg
              className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#6b7280]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </span>
        )}

        <span className="relative ml-auto">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none cursor-pointer rounded-[4px] border border-[#e5e7eb] bg-white py-1.5 pl-2 pr-6 text-sm font-medium text-[#333333] focus:border-[#FEED5A] focus:outline-none"
            aria-label="Sort clinics by"
          >
            <option value="recommended">Recommended</option>
            <option value="highest-rated">Highest Rated</option>
            <option value="most-reviewed">Most Reviewed</option>
          </select>
          <svg
            className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#6b7280]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
          </svg>
        </span>

        <button
          type="button"
          onClick={onToggleMap}
          className={`inline-flex items-center gap-1 rounded-[4px] border px-2.5 py-1.5 text-sm font-medium cursor-pointer transition-colors ${
            showMap
              ? "bg-[#FFF0BB] border-[#FEED5A] text-[#333333]"
              : "border-[#e5e7eb] bg-white text-[#6b7280] hover:bg-[#F7F8F9]"
          }`}
          aria-label={showMap ? "Hide map" : "Show map"}
        >
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zM15 5.764v15M9 3.236v15" />
          </svg>
          <span className="sr-only">Map</span>
        </button>
      </div>

      {/* Desktop Toolbar (lg+) */}
      <div className="mb-4 hidden lg:flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <p className="text-sm text-[#6b7280]">
            <span className="font-semibold text-[#333333]">{totalCount}</span> clinics
            {totalCount > 0 && (
              <>
                {" "}· showing{" "}
                <span className="font-semibold text-[#333333]">
                  {startIndex}–{endIndex}
                </span>
              </>
            )}
            {" "}· {sortLabel}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Show / Hide Map Button */}
          <button
            type="button"
            onClick={onToggleMap}
            className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#333333] transition-colors cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zM15 5.764v15M9 3.236v15" />
            </svg>
            {showMap ? "Hide map" : "Show map"}
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={showMap ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"} />
            </svg>
          </button>

          {/* Desktop Sort Dropdown */}
          <label className="flex items-center gap-1.5 text-sm text-[#6b7280]">
            <span className="font-medium">Sort:</span>
            <span className="relative">
              <select
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none cursor-pointer rounded-lg border border-[#e5e7eb] bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-[#333333] hover:border-[#e5e7eb] focus:border-[#FEED5A] focus:outline-none focus:ring-2 focus:ring-[rgba(254,237,90,0.3)]/20"
                aria-label="Sort clinics by"
              >
                <option value="recommended">Recommended</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="most-reviewed">Most Reviewed</option>
              </select>
              <svg
                className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
