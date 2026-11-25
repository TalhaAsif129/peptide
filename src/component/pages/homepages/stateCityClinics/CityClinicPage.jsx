import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCityData } from "./data/index.js";
import ClinicCard from "./components/ClinicCard";
import ClinicFilters from "./components/ClinicFilters";
import ClinicToolbar from "./components/ClinicToolbar";
import ClinicPagination from "./components/ClinicPagination";
import ClinicMap from "./components/ClinicMap";
import CityNearbySection from "./components/CityNearbySection";

const PAGE_SIZE = 10;

function haversineMiles(lat1, lon1, lat2, lon2) {
  if (lat1 == null || lon1 == null || lat2 == null || lon2 == null) return Infinity;
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const INITIAL_FILTERS = {
  treatments: [],
  peptides: [],
  options: {
    telehealth: false,
    hsaFsa: false,
    freeConsult: false,
    newPatients: false,
  },
  minRating: "Any",
  consultation: "",
};

function CityClinicContent({ cityData, stateName }) {
  const defaultRadius = cityData.isRadiusExpanded
    ? String(cityData.searchRadiusMiles || 25)
    : "25";
  const [selectedRadius, setSelectedRadius] = useState(defaultRadius);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortOption, setSortOption] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMap, setShowMap] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (cityData?.meta?.title) {
      document.title = cityData.meta.title;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [cityData]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort) => {
    setSortOption(newSort);
    setCurrentPage(1);
  };

  const handleRadiusChange = (newRadius) => {
    setSelectedRadius(newRadius);
    setCurrentPage(1);
  };

  // Base clinics based on radius selection (for radius-expanded cities)
  const baseClinics = useMemo(() => {
    if (!cityData?.isRadiusExpanded) {
      return cityData?.clinics || [];
    }

    // Default radius uses the curated city dataset directly
    if (selectedRadius === String(cityData.searchRadiusMiles || 25)) {
      return cityData.clinics || [];
    }

    const stateClinics = cityData.allStateClinics || cityData.clinics || [];
    const center = cityData.searchCenter;
    if (!center) return cityData.clinics || [];

    if (selectedRadius === "all") {
      return stateClinics;
    }

    const maxMiles = Number(selectedRadius);
    if (Number.isNaN(maxMiles)) return cityData.clinics || [];

    return stateClinics
      .map((c) => ({
        clinic: c,
        dist: haversineMiles(center.lat, center.lng, c.latitude, c.longitude),
      }))
      .filter((item) => item.dist <= maxMiles)
      .sort((a, b) => a.dist - b.dist)
      .map((item) => item.clinic);
  }, [cityData, selectedRadius]);

  // Filter clinics
  const filteredClinics = useMemo(() => {
    if (!baseClinics) return [];

    return baseClinics.filter((clinic) => {
      // Treatments filter
      if (filters.treatments.length > 0) {
        const conditions = clinic.conditions_treated || [];
        const hasMatch = filters.treatments.some((t) =>
          conditions.some((c) => c.toLowerCase().includes(t.toLowerCase()))
        );
        if (!hasMatch) return false;
      }

      // Peptides filter
      if (filters.peptides.length > 0) {
        const desc = (clinic.description || "").toLowerCase();
        const conditions = (clinic.conditions_treated || []).join(" ").toLowerCase();
        const hasMatch = filters.peptides.some(
          (p) => desc.includes(p.toLowerCase()) || conditions.includes(p.toLowerCase())
        );
        if (!hasMatch) return false;
      }

      // Options toggles
      if (filters.options.telehealth && !clinic.is_telehealth) return false;
      if (filters.options.hsaFsa && !clinic.accepts_hsa_fsa) return false;
      if (filters.options.freeConsult && !clinic.offers_free_consultation) return false;
      if (filters.options.newPatients && !clinic.accepts_new_patients) return false;

      // Minimum rating
      const rating = Number(clinic.google_rating) || 0;
      if (filters.minRating === "3+ stars" && rating < 3.0) return false;
      if (filters.minRating === "4+ stars" && rating < 4.0) return false;
      if (filters.minRating === "4.5+ stars" && rating < 4.5) return false;

      // Consultation type
      if (filters.consultation) {
        const type = (clinic.consultation_type || "").toLowerCase();
        if (filters.consultation === "telehealth") {
          if (!clinic.is_telehealth && !type.includes("telehealth")) return false;
        } else if (!type.includes(filters.consultation)) {
          return false;
        }
      }

      return true;
    });
  }, [baseClinics, filters]);

  // Sort clinics
  const sortedClinics = useMemo(() => {
    const list = [...filteredClinics];
    if (sortOption === "highest-rated") {
      return list.sort((a, b) => {
        const rDiff = (b.google_rating || 0) - (a.google_rating || 0);
        return rDiff !== 0 ? rDiff : (b.google_review_count || 0) - (a.google_review_count || 0);
      });
    }
    if (sortOption === "most-reviewed") {
      return list.sort((a, b) => {
        const diff = (b.google_review_count || 0) - (a.google_review_count || 0);
        return diff !== 0 ? diff : (b.google_rating || 0) - (a.google_rating || 0);
      });
    }
    return list;
  }, [filteredClinics, sortOption]);

  // Paginate clinics
  const totalClinics = sortedClinics.length;
  const totalPages = Math.ceil(totalClinics / PAGE_SIZE) || 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE + 1;
  const endIndex = Math.min(currentPage * PAGE_SIZE, totalClinics);
  const currentClinics = sortedClinics.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Dynamic subtitle for radius-expanded cities
  const dynamicSubtitle = useMemo(() => {
    if (!cityData.isRadiusExpanded) {
      return cityData.subtitle;
    }
    const count = sortedClinics.length;
    if (selectedRadius === "all") {
      return `Showing ${count} clinic${count === 1 ? "" : "s"} near ${cityData.name}.`;
    }
    return `Showing ${count} clinic${count === 1 ? "" : "s"} near ${cityData.name} within ${selectedRadius} miles.`;
  }, [cityData, sortedClinics.length, selectedRadius]);

  // Determine map center
  const mapCenter = cityData.searchCenter
    ? [cityData.searchCenter.lat, cityData.searchCenter.lng]
    : cityData.clinics.length > 0 && cityData.clinics[0].latitude
    ? [Number(cityData.clinics[0].latitude), Number(cityData.clinics[0].longitude)]
    : [32.806671, -86.79113];

  const mapZoom = cityData.isRadiusExpanded ? 10 : 12;

  return (
    <div className="w-full bg-[#F6F8F7] min-h-screen">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb (Home > Peptide Clinics > State > City) */}
        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280]">
          <span className="inline-flex shrink-0 items-center gap-1">
            <Link to="/" className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors">
              Home
            </Link>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
            <Link to="/clinics/telehealth-clinics" className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors">
              Peptide Clinics
            </Link>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
            <Link
              to={`/clinics/${cityData.stateSlug || stateName}`}
              className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors"
            >
              {cityData.stateName || "Alabama"}
            </Link>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <svg
              className="h-4 w-4 shrink-0 text-[#6b7280]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
            <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">
              {cityData.name}
            </span>)
          </span>
        </nav>

        {/* City Title & Subtitle */}
        <h1 className="font-heading mt-4 text-[20px] sm:text-3xl font-bold text-[#333333] saira-bold md:tracking-[-0.3px] tracking-[-0.2px]">
          {cityData.h1}
        </h1>
        <p className="mt-2 text-[#6b7280] leading-[26px]">{dynamicSubtitle}</p>

        {/* Main Two-Column Directory */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Filters */}
          <ClinicFilters
            filters={filters}
            onChange={handleFilterChange}
            onReset={handleResetFilters}
            isMobileOpen={isMobileFiltersOpen}
            onMobileClose={() => setIsMobileFiltersOpen(false)}
          />

          {/* Right Column: Toolbar, Map, Clinic Cards & Pagination */}
          <div className="min-w-0 flex-1">
            <ClinicToolbar
              totalCount={totalClinics}
              startIndex={totalClinics > 0 ? startIndex : 0}
              endIndex={endIndex}
              sortOption={sortOption}
              onSortChange={handleSortChange}
              showMap={showMap}
              onToggleMap={() => setShowMap((prev) => !prev)}
              onOpenMobileFilters={() => setIsMobileFiltersOpen(true)}
              hasRadiusSelect={Boolean(cityData.isRadiusExpanded)}
              radiusValue={selectedRadius}
              onRadiusChange={handleRadiusChange}
            />

            {/* Toggleable Leaflet Map */}
            <ClinicMap
              clinics={currentClinics}
              center={mapCenter}
              zoom={mapZoom}
              isVisible={showMap}
              startIndexOffset={(currentPage - 1) * PAGE_SIZE}
            />

            {/* Clinic Results Stack */}
            {sortedClinics.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-1">
                {/* Mobile View: All matching clinics without pagination buttons */}
                <div className="space-y-6 sm:hidden">
                  {sortedClinics.map((clinic, idx) => (
                    <ClinicCard
                      key={clinic.id || clinic.slug || idx}
                      clinic={clinic}
                      index={idx + 1}
                    />
                  ))}
                </div>

                {/* Desktop and Tablet View: 10 clinics per page with pagination controls */}
                <div className="hidden sm:block">
                  <div className="space-y-6">
                    {currentClinics.map((clinic, idx) => (
                      <ClinicCard
                        key={clinic.id || clinic.slug || idx}
                        clinic={clinic}
                        index={(currentPage - 1) * PAGE_SIZE + idx + 1}
                      />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <ClinicPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={(page) => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-[5px] border border-[#e5e7eb] bg-white p-12 text-center">
                <p className="font-medium text-[#333333] mb-2">No clinics match your selected filters</p>
                <p className="text-sm text-[#6b7280] mb-4">
                  Try clearing some filters or selecting a different treatment category.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="rounded-[5px] bg-[#0b7c84] px-4 py-2 text-sm font-semibold text-white hover:bg-[#095e64] transition-colors cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Nearby Cities Section */}
        <CityNearbySection
          heading={cityData.bottomSection?.heading}
          links={cityData.bottomSection?.links}
          stateSlug={cityData.stateSlug || stateName}
        />

        {/* Accessible hidden clinic list for crawlers and screen readers */}
        <nav aria-label="Clinics in this city" className="sr-only">
          <ul>
            {cityData.clinics.map((c) => (
              <li key={c.slug}>
                <Link to={`/clinic/${c.slug}`}>
                  {c.name} — {c.city}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function CityClinicPage() {
  const { stateName = "alabama", cityName = "" } = useParams();
  const cityData = useMemo(() => getCityData(stateName, cityName), [stateName, cityName]);

  if (!cityData) {
    return (
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#333333] mb-4">City Not Found</h1>
        <p className="text-[#6b7280] mb-6">
          We could not find clinic listings for &ldquo;{cityName}&rdquo;.
        </p>
        <Link
          to={`/clinics/${stateName}`}
          className="inline-block rounded-[5px] bg-[#0b7c84] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#095e64] transition-colors"
        >
          Back to State Clinics
        </Link>
      </div>
    );
  }

  // Key prop forces a clean, fresh state reinitialization whenever stateName or cityName changes
  return <CityClinicContent key={`${stateName}-${cityName}`} cityData={cityData} stateName={stateName} />;
}
