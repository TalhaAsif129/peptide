import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getStateData } from "./data/index.js";
import StateCitiesPills from "./components/StateCitiesPills";
import ClinicCard from "./components/ClinicCard";
import ClinicFilters from "./components/ClinicFilters";
import ClinicToolbar from "./components/ClinicToolbar";
import ClinicPagination from "./components/ClinicPagination";
import ClinicMap from "./components/ClinicMap";

const PAGE_SIZE = 10;

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

export default function StateClinicPage() {
  const { stateName = "alabama" } = useParams();
  const stateData = useMemo(() => getStateData(stateName), [stateName]);

  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [sortOption, setSortOption] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [mapVisibility, setMapVisibility] = useState({ stateName, visible: true });
  const showMap =
    mapVisibility.stateName !== stateName || mapVisibility.visible;
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (stateData?.meta?.title) {
      document.title = stateData.meta.title;
    }
  }, [stateData]);

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

  // Filter clinics
  const filteredClinics = useMemo(() => {
    if (!stateData?.clinics) return [];

    return stateData.clinics.filter((clinic) => {
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
  }, [stateData, filters]);

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

  if (!stateData) {
    return (
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#333333] mb-4">State Not Found</h1>
        <p className="text-[#6b7280] mb-6">
          We could not find clinic listings for &ldquo;{stateName}&rdquo;.
        </p>
        <Link
          to="/clinics/browse-by-state"
          className="inline-block rounded-[5px] bg-[#0b7c84] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#095e64] transition-colors"
        >
          Browse All States
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F6F8F7] min-h-screen">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb (Home > Peptide Clinics > State) */}
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
            <span className="font-medium text-[#333333] truncate max-w-[140px] sm:max-w-none">
              {stateData.name}
            </span>)
          </span>
        </nav>

        {/* State Title & Subtitle */}
        <h1 className="font-heading mt-4 text-3xl font-bold text-[#333333] saira-bold tracking-[-0.3px]">
          {stateData.h1}
        </h1>
        <p className="mt-2 text-[#6b7280] leading-[26px]">
          {stateData.totalClinics} clinic(s) · {stateData.totalCities} cities
        </p>

        {/* Cities Pills Section */}
        <StateCitiesPills
          cities={stateData.citiesList}
          stateSlug={stateData.slug}
          collapsedLimit={stateData.defaultCollapsedLimit || 12}
        />

        {/* Introductory SEO Paragraph */}
        <p className="mt-6 max-w-2xl text-[#6b7280] leading-relaxed text-[16px]">
          Peptide therapy clinics in {stateData.name} commonly offer{" "}
          <strong className="font-medium text-[#333333]">semaglutide</strong> and{" "}
          <strong className="font-medium text-[#333333]">tirzepatide</strong> for medical weight loss,{" "}
          <strong className="font-medium text-[#333333]">BPC-157</strong> and{" "}
          <strong className="font-medium text-[#333333]">TB-500</strong> for tissue repair and recovery, and{" "}
          <strong className="font-medium text-[#333333]">sermorelin</strong> or{" "}
          <strong className="font-medium text-[#333333]">CJC-1295</strong> for growth hormone support.
          Filter by treatment type, telehealth availability, and payment options to find the right provider for your goals.
        </p>

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
              onToggleMap={() =>
                setMapVisibility({ stateName, visible: !showMap })
              }
              onOpenMobileFilters={() => setIsMobileFiltersOpen(true)}
            />

            {/* Toggleable Leaflet Map */}
            <ClinicMap
              clinics={currentClinics}
              center={stateData.mapCenter}
              zoom={stateData.mapZoom}
              isVisible={showMap}
              startIndexOffset={(currentPage - 1) * PAGE_SIZE}
            />

            {/* Clinic Results Stack */}
            {sortedClinics.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-1">
                {/* Mobile View: All matching clinics without pagination */}
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

        {/* Accessible hidden clinic list for crawlers and screen readers */}
        <nav aria-label="Clinics in this state" className="sr-only">
          <ul>
            {stateData.clinics.map((c) => (
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
