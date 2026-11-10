import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [treatment, setTreatment] = useState("All treatments");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setErrorMessage("Enter a zip code or city to find nearby clinics.");
      return;
    }
    setErrorMessage("");
  };

  const stats = [
    { value: "4,767+", label: "VERIFIED CLINICS" },
    { value: "117", label: "PEPTIDE PROFILES" },
    { value: "43", label: "STATES COVERED" },
    { value: "Free", label: "DOSING TOOLS" },
  ];

  const treatmentOptions = [
    "All treatments",
    "Weight Loss",
    "Anti-Aging & Longevity",
    "Tissue Repair & Recovery",
    "Hormone Optimization",
    "Cognitive Enhancement",
    "Sexual Wellness",
    "Athletic Performance",
    "Immune Support",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#e6f2f2] to-[#f6f8f7] pt-[clamp(56px,9vw,96px)] pb-[clamp(56px,8vw,88px)] border-b border-[#e3e8e6] font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ===== Badge ===== */}
        <div className="flex justify-center mb-5">
          <span className="inline-block bg-white text-[#066068] text-[12px] leading-[19px] font-bold tracking-[0.96px] uppercase px-3 py-1.5 rounded-full shadow-sm">
            Independent Peptide Therapy Directory
          </span>
        </div>

        {/* ===== Heading ===== */}
        <h1 className="text-center text-[#212529] saira-bold text-[32px] xl:text-[60px] xl:leading-[60px] lg:text-[54px] lg:leading-[54px] lg:tracking-[-0.3px] md:text-[40px] md:leading-[40px] md:tracking-[-0.2px] leading-[32px] tracking-[-0.16px] mb-6.5 text-balance">
          Peptide Therapy Clinics, Peptides & Dosing Tools
        </h1>

        {/* ===== Search Bar ===== */}
        <div className="max-w-[896px] mx-auto mb-10 relative">
          {/* ⚠️ Yahan se overflow-hidden hataya gaya hai */}
          <div className="bg-[#FFFFFF] rounded-2xl md:rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-stretch md:items-center p-3 md:p-2 gap-3 md:gap-0 relative">
            {/* Location Input */}
            <div className="flex items-center flex-1 px-4 py-3 md:py-4 md:px-6.5 gap-2 border border-[#d1d5db] md:border-0 rounded-xl md:rounded-none">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5b6764"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 mr-3"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
                placeholder="Enter zip code or city..."
                className="w-full border-0 outline-none bg-[#FFFFFF] lg:text-[16px] placeholder:text-[#5b6764] "
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-gray-200" />

            {/* ===== Custom Treatment Dropdown ===== */}
            <div
              ref={dropdownRef}
              className="relative flex items-center justify-between px-4 py-3.5 md:py-4 md:px-0 md:pl-3.5 min-w-[250px] cursor-pointer border border-[#d1d5db] md:border-0 rounded-xl md:rounded-none"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {/* Selected value display */}
              <span className="lg:text-[16px] leading-[21px] font-normal text-[#1c2522] select-none">
                {treatment}
              </span>

              {/* Chevron icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0f2027"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 0.2s",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <ul
                  className="absolute left-0 top-full  w-full bg-white  shadow-[0_8px_30px_rgba(0,0,0,0.12)]  overflow-hidden border border-gray-700"
                  style={{ minWidth: "260px" }}
                >
                  {treatmentOptions.map((opt) => (
                    <li
                      key={opt}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTreatment(opt);
                        setDropdownOpen(false);
                      }}
                      className={`px-4 py-1.5 lg:text-[16px] lg:leading-[21px] cursor-pointer transition-colors border-b border-gray-50 last:border-b-0 ${
                        treatment === opt
                          ? "bg-[#2563eb] text-white font-medium"
                          : "text-[#1c2522] bg-white hover:bg-[#2563eb] hover:text-white"
                      }`}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-[#0b7c84] hover:bg-[#095E64] text-white text-[16px] leading-[24px] md:text-[14px] md:leading-[20px] font-bold md:tracking-[0.7px] rounded-full px-7.5 py-3.5 transition-colors shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
          </div>

          {errorMessage && (
            <p
              className="mt-2 text-center text-sm text-[#ffa2a2]"
              style={{ color: "#ffa2a2" }}
            >
              {errorMessage}
            </p>
          )}
        </div>

        {/* ===== Stats Box ===== */}
        <div className="max-w-[820px] mx-auto">
          <div className="bg-[#e0edec] border border-[#c9dedc] rounded-3xl px-6 py-10 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-0 md:gap-y-0 md:gap-x-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative flex flex-col items-center justify-center text-center py-3.5 md:py-0 px-4 ${
                    index >= 2
                      ? "border-t border-[#066068]/[0.18] md:border-t-0"
                      : ""
                  } ${
                    index !== stats.length - 1
                      ? "md:border-r md:border-[#b8d1cf]"
                      : ""
                  }`}
                >
                  {index % 2 === 0 && (
                    <div className="absolute right-0 top-[18%] h-[64%] w-px bg-[#066068]/20 md:hidden" />
                  )}
                  <div className="text-[#066068] saira-extrabold text-[30px] xl:text-[40px] xl:leading-[40px] xl:tracking-[-0.4px] lg:text-[37px] lg:leading-[37px] lg:tracking-[-0.37px] md:text-[28px] md:leading-[28px] md:tracking-[-0.28px] leading-[30px] tracking-[-0.3px] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#3A5A5C] text-[12px] font-bold leading-[19px] tracking-[0.6px] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}