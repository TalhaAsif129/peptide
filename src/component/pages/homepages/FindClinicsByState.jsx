import { Link } from "react-router-dom";

export default function FindClinicsByState() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  // URL-friendly slug banao: "New York" → "new-york"
  const slugify = (str) =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");

  return (
    <section className="bg-[#F6F8F7] py-[clamp(48px,7vw,72px)] border-t border-[#e3e8e6] font-sans">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">
        {/* ===== Header Row ===== */}
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-7">
          <h2 className="text-[#0f2027] saira-extrabold text-[26px] leading-[42px] tracking-[-0.26px] lg:text-[34px] lg:leading-[54px] lg:tracking-[-0.34px] md:text-[31px] md:leading-[49px] md:tracking-[-0.31px]">
            Find Peptide Therapy Clinics by State
          </h2>
          <Link
            to="#"
            className="flex items-center gap-1.5 text-[#095e64] font-bold text-[15px] leading-[24px] no-underline hover:text-[#0a474b] transition-colors shrink-0"
          >
            Find clinics near you →
          </Link>
        </div>

        {/* ===== States Grid — 4 columns ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {states.map((state) => (
            <Link
              key={state}
              to={`/clinics/${slugify(state)}`}
              className="block bg-white border border-[#e5e7e5] rounded-lg px-3.5 py-2.5 text-[#3f4d4a] text-[15px] lg:leading-[23px] font-semibold no-underline hover:border-[#0d5b60] hover:bg-[#E6F2F2] hover:text-[#066068] hover:shadow-sm transition-all"
            >
              {state}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
