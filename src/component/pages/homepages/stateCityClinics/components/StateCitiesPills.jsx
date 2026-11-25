import { useState } from "react";
import { Link } from "react-router-dom";

const toSlug = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export default function StateCitiesPills({ cities = [], stateSlug = "alabama", collapsedLimit = 12 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!cities || cities.length === 0) return null;

  const shouldTruncate = cities.length > collapsedLimit;
  const displayedCities = shouldTruncate && !isExpanded ? cities.slice(0, collapsedLimit) : cities;
  const remainingCount = cities.length - collapsedLimit;

  return (
    <div className="mt-6">
      <h2 className="font-saira text-sm font-medium text-[#6b7280] tracking-[-0.14px]">Cities</h2>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-x-visible sm:pb-0">
        {displayedCities.map((city) => (
          <Link
            key={city}
            to={`/clinics/${stateSlug}/${toSlug(city)}`}
            className="shrink-0 rounded-[4px] bg-[#F7F8F9] px-3 py-1 text-sm text-[#333333] hover:bg-[#FFF0BB] hover:text-[#333333] transition-colors sm:shrink"
          >
            {city}
          </Link>
        ))}

        {shouldTruncate && !isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="shrink-0 rounded-[4px] bg-[#e5e7eb] px-3 py-1 text-sm font-medium text-[#6b7280] hover:bg-[#F7F8F9] sm:shrink cursor-pointer"
          >
            View all cities (+{remainingCount})
          </button>
        )}

        {shouldTruncate && isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="shrink-0 rounded-[4px] bg-[#e5e7eb] px-3 py-1 text-sm font-medium text-[#6b7280] hover:bg-[#F7F8F9] sm:shrink cursor-pointer"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}
