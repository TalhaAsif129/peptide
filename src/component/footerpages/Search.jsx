import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, CirclePlus } from "lucide-react";

const HEADING_FONT = { fontFamily: "var(--font-heading)" };

const Search = () => {
  const [query, setQuery] = useState("");

  // TODO: wire this up to your clinic search API
  // const [results, setResults] = useState([]);
  // useEffect(() => { if (query.length > 1) fetchClinics(query).then(setResults) }, [query]);

  return (
    <main id="main-content" className="flex-1 w-full">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h1
              className="text-2xl sm:text-3xl font-bold text-[#333333]"
              style={HEADING_FONT}
            >
              Find Your Clinic
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#6b7280]">
              Search for your clinic by name or city to claim your listing.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <SearchIcon
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your clinic name or city..."
              className="w-full rounded-[5px] border border-gray-300 bg-white pl-12 pr-4 py-3 text-base sm:text-lg text-[#333333] min-h-[48px] placeholder:text-gray-400 focus:border-[#0B7C84] focus:outline-none focus:ring-2 focus:ring-[#0B7C84]/25 disabled:bg-[#F7F8F9] disabled:cursor-not-allowed"
            />
          </div>

          {/* Results area (empty until you wire up the API) */}
          <div className="mt-8 space-y-4">
            {/* Example empty state — remove once you render real results */}
            {query.length > 0 && (
              <p className="text-center text-sm text-[#6b7280]">
                Searching for “{query}”…
              </p>
            )}
          </div>

          {/* Don't see your clinic? */}
          <div className="mt-10 sm:mt-12 text-center border-t border-[#e5e7eb] pt-8">
            <p className="text-sm text-[#6b7280]">Don't see your clinic?</p>
            <Link to="/claim/add" className="mt-2 inline-block">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0B7C84] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 bg-transparent text-[#4a4a4a] hover:bg-[#F7F8F9] active:bg-[#E6F4F5] px-5 py-2.5 text-base rounded-full min-h-[44px]"
              >
                <CirclePlus className="h-4 w-4" aria-hidden="true" />
                Add Your Clinic Manually
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;