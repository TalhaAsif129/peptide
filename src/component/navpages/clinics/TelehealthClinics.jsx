import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
const MapPinIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SearchIcon = ({ className = "h-5 w-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m21 21-4.34-4.34" />
    <circle cx="11" cy="11" r="8" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */
const TREATMENT_OPTIONS = [
  { value: "", label: "All treatments" },
  { value: "weight-loss", label: "Weight Loss" },
  { value: "anti-aging-longevity", label: "Anti-Aging & Longevity" },
  { value: "tissue-repair-recovery", label: "Tissue Repair & Recovery" },
  { value: "hormone-optimization", label: "Hormone Optimization" },
  { value: "cognitive-enhancement", label: "Cognitive Enhancement" },
  { value: "sexual-wellness", label: "Sexual Wellness" },
  { value: "athletic-performance", label: "Athletic Performance" },
  { value: "immune-support", label: "Immune Support" },
];

const STATS = [
  { value: "4,767+", label: "Clinics" },
  { value: "46", label: "States" },
  { value: "1,058+", label: "Cities" },
  { value: "Free", label: "Consultations" },
];

const POPULAR_CITIES = [
  { href: "/clinics/new-york/new-york", name: "New York, NY", count: 114 },
  { href: "/clinics/florida/tampa", name: "Tampa, FL", count: 82 },
  { href: "/clinics/texas/houston", name: "Houston, TX", count: 79 },
  { href: "/clinics/nevada/las-vegas", name: "Las Vegas, NV", count: 64 },
  { href: "/clinics/texas/austin", name: "Austin, TX", count: 62 },
  { href: "/clinics/arizona/scottsdale", name: "Scottsdale, AZ", count: 56 },
  { href: "/clinics/texas/dallas", name: "Dallas, TX", count: 55 },
  { href: "/clinics/florida/orlando", name: "Orlando, FL", count: 55 },
  { href: "/clinics/florida/miami", name: "Miami, FL", count: 54 },
  { href: "/clinics/georgia/atlanta", name: "Atlanta, GA", count: 51 },
  { href: "/clinics/florida/jacksonville", name: "Jacksonville, FL", count: 50 },
  { href: "/clinics/north-carolina/charlotte", name: "Charlotte, NC", count: 50 },
  { href: "/clinics/texas/san-antonio", name: "San Antonio, TX", count: 49 },
  { href: "/clinics/illinois/chicago", name: "Chicago, IL", count: 49 },
  { href: "/clinics/california/san-diego", name: "San Diego, CA", count: 42 },
  { href: "/clinics/florida/naples", name: "Naples, FL", count: 41 },
  { href: "/clinics/colorado/denver", name: "Denver, CO", count: 41 },
  { href: "/clinics/colorado/colorado-springs", name: "Colorado Springs, CO", count: 40 },
  { href: "/clinics/arizona/mesa", name: "Mesa, AZ", count: 39 },
  { href: "/clinics/arizona/phoenix", name: "Phoenix, AZ", count: 38 },
  { href: "/clinics/florida/fort-lauderdale", name: "Fort Lauderdale, FL", count: 38 },
  { href: "/clinics/tennessee/nashville", name: "Nashville, TN", count: 37 },
  { href: "/clinics/arizona/gilbert", name: "Gilbert, AZ", count: 34 },
  { href: "/clinics/tennessee/knoxville", name: "Knoxville, TN", count: 33 },
];

const STATES = [
  ["alabama", "Alabama"],
  ["alaska", "Alaska"],
  ["arizona", "Arizona"],
  ["arkansas", "Arkansas"],
  ["california", "California"],
  ["colorado", "Colorado"],
  ["connecticut", "Connecticut"],
  ["delaware", "Delaware"],
  ["district-of-columbia", "District of Columbia"],
  ["florida", "Florida"],
  ["georgia", "Georgia"],
  ["hawaii", "Hawaii"],
  ["idaho", "Idaho"],
  ["illinois", "Illinois"],
  ["indiana", "Indiana"],
  ["iowa", "Iowa"],
  ["kansas", "Kansas"],
  ["kentucky", "Kentucky"],
  ["louisiana", "Louisiana"],
  ["maine", "Maine"],
  ["maryland", "Maryland"],
  ["massachusetts", "Massachusetts"],
  ["michigan", "Michigan"],
  ["minnesota", "Minnesota"],
  ["mississippi", "Mississippi"],
  ["missouri", "Missouri"],
  ["montana", "Montana"],
  ["nebraska", "Nebraska"],
  ["nevada", "Nevada"],
  ["new-hampshire", "New Hampshire"],
  ["new-jersey", "New Jersey"],
  ["new-mexico", "New Mexico"],
  ["new-york", "New York"],
  ["north-carolina", "North Carolina"],
  ["north-dakota", "North Dakota"],
  ["ohio", "Ohio"],
  ["oklahoma", "Oklahoma"],
  ["oregon", "Oregon"],
  ["pennsylvania", "Pennsylvania"],
  ["rhode-island", "Rhode Island"],
  ["south-carolina", "South Carolina"],
  ["south-dakota", "South Dakota"],
  ["tennessee", "Tennessee"],
  ["texas", "Texas"],
  ["utah", "Utah"],
  ["vermont", "Vermont"],
  ["virginia", "Virginia"],
  ["washington", "Washington"],
  ["west-virginia", "West Virginia"],
  ["wisconsin", "Wisconsin"],
  ["wyoming", "Wyoming"],
];

const FAQS = [
  {
    q: "How do I find a peptide therapy clinic near me?",
    a: "Enter your zip code or city in the search above, or browse by state and city below. MyPeptideMatch lists 4,700+ peptide therapy and TRT clinics across 46 states, so you can compare providers, reviews, and the peptides they offer in your area.",
  },
  {
    q: "What if there are no peptide clinics near me?",
    a: "Many clinics offer telehealth peptide therapy with online consultations and nationwide shipping, so you can start treatment even if there's no in-person clinic nearby. Browse our telehealth peptide clinics to see providers that treat patients remotely.",
  },
  {
    q: "What peptides do clinics near me typically offer?",
    a: "Most peptide clinics offer semaglutide and tirzepatide for medical weight loss, BPC-157 and TB-500 for tissue repair and recovery, and sermorelin or CJC-1295/ipamorelin for growth hormone support. Each clinic listing shows the specific peptides and treatments available.",
  },
  {
    q: "How much does peptide therapy cost near me?",
    a: "Pricing varies by clinic, peptide, and program length. Many clinics offer free initial consultations, and some accept HSA/FSA. You can compare consultation fees and monthly program costs on each clinic's listing page.",
  },
  {
    q: "Is MyPeptideMatch an independent directory?",
    a: "Yes. MyPeptideMatch is an independent directory that helps you find and compare peptide therapy clinics. We are not a clinic and do not provide medical advice — always consult a qualified healthcare provider before starting treatment.",
  },
];

const CARD_SHADOW =
  "shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]";

/* ------------------------------------------------------------------ */
/*  Structured data (FAQPage)                                         */
/* ------------------------------------------------------------------ */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function TelehealthClinics() {
  const [query, setQuery] = useState("");
  const [treatment, setTreatment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setErrorMessage("Enter a zip code or city to find nearby clinics.");
      return;
    }
    setErrorMessage("");
    // TODO: wire up search/routing
    console.log({ query, treatment });
  };

  return (
    <main id="main-content" className="flex-1 font-sans bg-[#f6f8f7]">
      {/* ---------------- Structured data ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= Hero / Search ================= */}
      <section className="py-14 md:py-16" style={{ background: "#FDFAEE" }}>
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="font-heading text-3xl font-bold text-[#333333] md:text-[40px] md:leading-[48px] tracking-[-0.4px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Find Peptide Therapy Clinics Near You
            </h1>
            <p className="mx-auto mt-4 max-w-[650px] text-[17px] leading-relaxed text-[#4a4a4a]">
              Search 4,767+ peptide therapy and TRT clinics across 46 states.
              Enter your zip code or city to find providers near you offering
              semaglutide, tirzepatide, BPC-157 and more.
            </p>

            {/* Search form */}
            <div className="mt-7 flex justify-center">
              <div className="w-full max-w-4xl">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-3 rounded-[14px] border border-[var(--border-color)] bg-white p-3 shadow-[0_10px_36px_rgba(16,40,36,0.12)] sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2"
                >
                  <div className="relative flex-1 sm:pl-3">
                    <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[var(--muted)] sm:left-6" />
                    <input
                      placeholder="Enter zip code or city..."
                      className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white py-3 pl-10 pr-4 text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] sm:rounded-none sm:border-0 sm:border-r sm:border-r-[var(--border-color)] sm:py-4 sm:pl-12 sm:pr-3 sm:focus:border-0 sm:focus:ring-0"
                      aria-label="Zip code or city"
                      aria-autocomplete="list"
                      aria-expanded="false"
                      aria-controls="city-suggestions"
                      role="combobox"
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                    />
                  </div>

                  <div className="flex-1 sm:max-w-[260px]">
                    <select
                      className="w-full rounded-[10px] border border-[var(--border-strong)] bg-white px-4 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(11,124,132,0.25)] sm:rounded-none sm:border-0 sm:px-5 sm:py-4 sm:focus:border-0 sm:focus:ring-0"
                      aria-label="Treatment type"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                    >
                      {TREATMENT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3 text-base font-bold text-[var(--on-accent)] transition-all duration-150 hover:scale-[1.02] hover:bg-[var(--accent-hover)] hover:shadow-[0_4px_14px_rgba(11,124,132,0.28)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm sm:font-bold sm:uppercase sm:tracking-wider"
                  >
                    <SearchIcon className="mr-2 h-5 w-5" />
                    Search
                  </button>
                </form>
                {errorMessage && (
                  <p
                    className="mt-2 text-center text-sm text-[#ffa2a2]"
                    style={{ color: "#ffa2a2" }}
                  >
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>

            {/* Stat pills */}
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 ${CARD_SHADOW}`}
                >
                  <span className="text-lg font-semibold text-[#333333]">
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-[#6b7280]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Popular cities ================= */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="font-heading text-[24px] font-bold text-[#333333] leading-[32px] tracking-[-0.24px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Popular Cities for Peptide Therapy
          </h2>
          <p className="mt-2 max-w-2xl text-[#6b7280] leading-[26px]">
            Explore the cities with the most peptide therapy clinics in our
            directory.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {POPULAR_CITIES.map((city) => (
              <a
                key={city.href}
                className="flex items-center justify-between rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-[#333333] transition-colors hover:border-[#FEED5A] hover:bg-[#F7F8F9]"
                href={city.href}
              >
                <span className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-[#6b7280]" />
                  <span className="font-medium leading-[26px]">{city.name}</span>
                </span>
                <span className="text-sm text-[#6b7280]">{city.count}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Browse by state ================= */}
      <section className="py-12" style={{ background: "#FFF0BB" }}>
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="font-heading text-2xl font-bold text-[#333333] tracking-[-0.24px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Browse Peptide Clinics by State
          </h2>
          <p className="mt-2 max-w-2xl text-[#4a4a4a] leading-[26px]">
            Select your state to see peptide therapy clinics in your area. You
            can filter by treatment type, telehealth availability, and more.
          </p>

          <div className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {STATES.map(([slug, name]) => (
              <a
                key={slug}
                className="block py-1.5 font-medium text-[#333333] hover:text-[#1F6CD6] hover:underline md:leading-[26px]"
                href={`/clinics/${slug}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= How-to + FAQ ================= */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2
              className="font-heading text-2xl font-bold text-[#333333]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How to Find Peptide Therapy Near You
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[24px] text-[#4a4a4a]">
              <p>
                Peptide therapy clinics offer treatments like medical weight loss
                (semaglutide, tirzepatide), tissue repair and recovery (BPC-157,
                TB-500), hormone optimization (sermorelin, CJC-1295/ipamorelin),
                and anti-aging protocols. The fastest way to find a peptide clinic
                near you is to search by your zip code or city above — we'll show
                the closest providers along with reviews, pricing, and the
                specific peptides they offer.
              </p>
              <p>
                Prefer to browse? Use the popular cities and state directory above
                to see every peptide therapy clinic in your area. Each listing
                includes the clinic's location, contact details, consultation type
                (in-person or telehealth), and the treatments available, so you
                can compare options before booking a consultation.
              </p>
              <p>
                Can't find a clinic nearby? Many providers offer{" "}
                <a
                  className="text-[#1F6CD6] hover:underline"
                  href="/telehealth-peptide-clinics"
                >
                  telehealth peptide therapy
                </a>{" "}
                with online consultations and nationwide shipping, so you can
                start treatment from anywhere in the U.S.
              </p>
            </div>

            <h2
              className="mt-12 font-heading text-2xl font-bold text-[#333333]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-4 divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
              {FAQS.map((faq) => (
                <div key={faq.q} className="py-4">
                  <h3 className="font-saira font-semibold text-[#333333] leading-[26px]">{faq.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#4a4a4a]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}