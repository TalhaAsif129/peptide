import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const citiesByState = {
  Alaska: ["Anchorage", "Seward", "Wasilla"],
  Arizona: [
    "Anthem",
    "Avondale",
    "Chandler",
    "Gilbert",
    "Glendale",
    "Goodyear",
    "Green Valley",
    "Laveen Village",
    "Maricopa",
    "Mesa",
    "Paradise Valley",
    "Peoria",
  ],
  Arkansas: [
    "Benton",
    "Bryant",
    "Conway",
    "Hensley",
    "Little Rock",
    "North Little Rock",
    "Sherwood",
  ],
  California: [
    "Anaheim",
    "Bakersfield",
    "Berkeley",
    "Beverly Hills",
    "Bloomington",
    "Brea",
    "Carlsbad",
    "Castro Valley",
    "Cerritos",
    "Chino",
    "Chula Vista",
    "Claremont",
  ],
  Colorado: [
    "Arvada",
    "Aurora",
    "Castle Rock",
    "Centennial",
    "Colorado Springs",
    "Commerce City",
    "Denver",
    "Edgewater",
    "Englewood",
    "Golden",
    "Greenwood Village",
    "Highlands Ranch",
  ],
  Connecticut: ["Wallingford", "Westport"],
  Delaware: ["Wilmington"],
  "District of Columbia": ["Washington"],
  Florida: [
    "Altamonte Springs",
    "Atlantic Beach",
    "Ave Maria",
    "Aventura",
    "Beverly Hills",
    "Boca Raton",
    "Bonita Springs",
    "Bradenton",
    "Brandon",
    "Cape Coral",
    "Clearwater",
    "Clermont",
  ],
  Georgia: [
    "Alpharetta",
    "Atlanta",
    "Chamblee",
    "Decatur",
    "Duluth",
    "Fayetteville",
    "Lawrenceville",
    "Marietta",
    "Pooler",
    "Richmond Hill",
    "Ringgold",
    "Roswell",
  ],
  Hawaii: ["Hilo", "Honolulu", "Kailua"],
  Idaho: [
    "Boise",
    "Coeur D'Alene",
    "Eagle",
    "Fruitland",
    "Garden City",
    "Meridian",
    "Twin Falls",
  ],
  Illinois: [
    "Berwyn",
    "Chicago",
    "Cicero",
    "Des Plaines",
    "Downers Grove",
    "East Peoria",
    "Elmhurst",
    "Evergreen Park",
    "Frankfort",
    "Glenview",
    "Hanover Park",
    "Hoffman Estates",
  ],
  Indiana: [
    "Avon",
    "Bargersville",
    "Brownsburg",
    "Carmel",
    "Fishers",
    "Fort Wayne",
    "Fortville",
    "Greenfield",
    "Greenwood",
    "Indianapolis",
    "Noblesville",
    "Plainfield",
  ],
  Iowa: [
    "Ankeny",
    "Clive",
    "Council Bluffs",
    "Des Moines",
    "Garner",
    "Grimes",
    "Johnston",
    "Waukee",
    "West Des Moines",
    "Winterset",
  ],
  Kansas: [
    "Andover",
    "Derby",
    "Kansas City",
    "Leawood",
    "Lenexa",
    "Maize",
    "Overland Park",
    "Prairie Village",
    "Roeland Park",
    "Valley Center",
    "Wichita",
  ],
  Kentucky: [
    "Bellevue",
    "Cold Spring",
    "Covington",
    "Crescent Springs",
    "Crestview Hills",
    "Danville",
    "Edgewood",
    "Flatwoods",
    "Florence",
    "Hurstbourne",
    "La Grange",
    "Lawrenceburg",
  ],
  Louisiana: [
    "Baton Rouge",
    "Bossier City",
    "Chalmette",
    "Covington",
    "Denham Springs",
    "Gretna",
    "Harahan",
    "Harvey",
    "Houma",
    "Lafayette",
    "Mandeville",
    "Marrero",
  ],
  Maine: ["Falmouth", "Portland", "South Portland"],
  Maryland: [
    "Abingdon",
    "Annapolis",
    "Baltimore",
    "Bel Air",
    "Bowie",
    "Catonsville",
    "Chester",
    "Clarksville",
    "Clinton",
    "College Park",
    "Columbia",
    "Crofton",
  ],
  Massachusetts: [
    "Andover",
    "Belmont",
    "Beverly",
    "Boston",
    "Braintree",
    "Brookline",
    "Burlington",
    "Canton",
    "Charlestown",
    "Chestnut Hill",
    "Concord",
    "Danvers",
  ],
  Michigan: [
    "East Grand Rapids",
    "Grand Rapids",
    "Grandville",
    "Jackson",
    "Kentwood",
    "Lambertville",
    "Southfield",
    "Troy",
    "Wixom",
  ],
  Minnesota: [
    "Bloomington",
    "Burnsville",
    "Chanhassen",
    "Eagan",
    "Edina",
    "Golden Valley",
    "Ham Lake",
    "Lakeville",
    "Maple Grove",
    "Mendota Heights",
    "Minneapolis",
    "Minnetonka",
  ],
  Mississippi: [
    "Bay St Louis",
    "Flowood",
    "Gulfport",
    "Hernando",
    "Indianola",
    "Jackson",
    "Madison",
    "Meridian",
    "Olive Branch",
    "Oxford",
    "Pearl",
    "Pontotoc",
  ],
  Missouri: [
    "Cape Girardeau",
    "Chesterfield",
    "Kansas City",
    "Lee's Summit",
    "Liberty",
    "Marshfield",
    "North Kansas City",
    "Osage Beach",
    "Springfield",
    "St. Louis",
  ],
  Montana: [],
  Nebraska: [
    "Elkhorn",
    "Gretna",
    "La Vista",
    "Lincoln",
    "Norfolk",
    "Omaha",
    "Papillion",
  ],
  Nevada: ["Henderson", "Las Vegas", "Reno"],
  "New Hampshire": ["Nashua", "Salem"],
  "New Jersey": [
    "Aberdeen Township",
    "Bedminster",
    "Belleville",
    "Blackwood",
    "Cherry Hill Township",
    "Clifton",
    "Denville",
    "East Brunswick",
    "East Rutherford",
    "Eatontown",
    "Edgewater",
    "Elizabeth",
  ],
  "New Mexico": [
    "Albuquerque",
    "Los Ranchos De Albuquerque",
    "Rio Rancho",
    "Santa Teresa",
  ],
  "New York": [
    "Amherst",
    "Amityville",
    "Astoria",
    "Brooklyn",
    "Buffalo",
    "College Point",
    "Congers",
    "Cutchogue",
    "East Amherst",
    "East Meadow",
    "Fayetteville",
    "Flushing",
  ],
  "North Carolina": [
    "Arden",
    "Asheville",
    "Belmont",
    "Cary",
    "Chapel Hill",
    "Charlotte",
    "Clemmons",
    "Cornelius",
    "Denver",
    "Durham",
    "Elkin",
    "Erwin",
  ],
  "North Dakota": [],
  Ohio: [
    "Akron",
    "Aurora",
    "Beachwood",
    "Beavercreek",
    "Boardman",
    "Brecksville",
    "Brunswick",
    "Centerville",
    "Chagrin Falls",
    "Cincinnati",
    "Circleville",
    "Cleveland",
  ],
  Oklahoma: [
    "Broken Arrow",
    "Choctaw",
    "Edmond",
    "Hobart",
    "Jenks",
    "Moore",
    "Nichols Hills",
    "Oklahoma City",
    "Owasso",
    "Sand Springs",
    "Sapulpa",
    "Tulsa",
  ],
  Oregon: [
    "Beaverton",
    "Bend",
    "Eugene",
    "Gresham",
    "Lake Oswego",
    "Portland",
    "Roseburg",
    "Salem",
    "Tigard",
    "Tualatin",
  ],
  Pennsylvania: [
    "Ambler",
    "Bala Cynwyd",
    "Blue Bell",
    "Bryn Mawr",
    "Canonsburg",
    "Carnegie",
    "Collegeville",
    "Conshohocken",
    "Doylestown",
    "Dresher",
    "Feasterville-Trevose",
    "Fort Washington",
  ],
  "Rhode Island": [],
  "South Carolina": [
    "Bluffton",
    "Charleston",
    "Columbia",
    "Daniel Island",
    "Fort Mill",
    "Greenville",
    "Hilton Head Island",
    "Irmo",
    "Lake Wylie",
    "Landrum",
    "Lexington",
    "Mt Pleasant",
  ],
  "South Dakota": ["Sioux Falls"],
  Tennessee: [
    "Alcoa",
    "Arlington",
    "Bartlett",
    "Brentwood",
    "Chattanooga",
    "Cleveland",
    "Clinton",
    "Collierville",
    "Cordova",
    "Franklin",
    "Gallatin",
    "Germantown",
  ],
  Texas: [
    "Abilene",
    "Addison",
    "Alamo Heights",
    "Allen",
    "Amarillo",
    "Arlington",
    "Austin",
    "Bastrop",
    "Beaumont",
    "Bedford",
    "Bee Cave",
    "Bellaire",
  ],
  Utah: [
    "American Fork",
    "Bountiful",
    "Clearfield",
    "Cottonwood Heights",
    "Draper",
    "Helper",
    "Holladay",
    "Lehi",
    "Midvale",
    "Millcreek",
    "Murray",
    "Nephi",
  ],
  Vermont: [],
  Virginia: [
    "Alexandria",
    "Arlington",
    "Ashburn",
    "Burke",
    "Carrollton",
    "Charlottesville",
    "Chesapeake",
    "Chester",
    "Fairfax",
    "Falls Church",
    "Fredericksburg",
    "Gate City",
  ],
  Washington: [
    "Bellevue",
    "Bellingham",
    "Des Moines",
    "Gig Harbor",
    "Kirkland",
    "Liberty Lake",
    "Lynnwood",
    "Puyallup",
    "Renton",
    "Seattle",
    "Shoreline",
    "Spokane",
  ],
  "West Virginia": ["Charleston", "Princeton"],
  Wisconsin: [
    "Appleton",
    "Brookfield",
    "Delafield",
    "Elm Grove",
    "Germantown",
    "Greenfield",
    "Hales Corners",
    "Janesville",
    "Madison",
    "Mequon",
    "Middleton",
    "Milwaukee",
  ],
  Wyoming: [],
};

const additionalCityCounts = {
  Alaska: 0,
  Kansas: 0,
  Kentucky: 5,
  Louisiana: 9,
  Maine: 0,
  Maryland: 34,
  Massachusetts: 30,
  Michigan: 0,
  Minnesota: 6,
  Mississippi: 3,
  Missouri: 0,
  Montana: 0,
  Nebraska: 0,
  Nevada: 0,
  "New Hampshire": 0,
  "New Jersey": 49,
  "New Mexico": 0,
  "New York": 24,
  "North Carolina": 24,
  "North Dakota": 0,
  Ohio: 55,
  Oklahoma: 1,
  Oregon: 0,
  Pennsylvania: 29,
  "Rhode Island": 0,
  "South Carolina": 3,
  "South Dakota": 0,
  Tennessee: 21,
  Texas: 74,
  Utah: 12,
  Vermont: 0,
  Virginia: 15,
  Washington: 5,
  "West Virginia": 0,
  Wisconsin: 9,
  Wyoming: 0,
};

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function StateClinics() {
  const { stateName, cityName } = useParams();
  const [showMap, setShowMap] = useState(true);

  // URL se State ka naam nikal rahe hain (e.g., "alabama" -> "Alabama")
  const formattedState = stateName
    ? stateName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  // ==========================================
  // ===== Dummy Data (Baad mein API se aayega) =====
  // ==========================================
  const alabamaCities = [
    "Birmingham",
    "Decatur",
    "Enterprise",
    "Homewood",
    "Hoover",
    "Huntsville",
    "Madison",
    "Mobile",
    "Montgomery",
    "Pelham",
    "Prattville",
    "Trussville",
  ];
  const cities = citiesByState[formattedState] ?? alabamaCities;
  const hasCities = cities.length > 0;
  const additionalCityCount =
    additionalCityCounts[formattedState] ?? (formattedState === "Alaska" ? 0 : 1);
  const formattedCity = cityName
    ? cities.find((city) => toSlug(city) === cityName.toLowerCase()) ??
      cityName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  const treatments = [
    "Weight Loss",
    "Anti-Aging & Longevity",
    "Tissue Repair & Recovery",
    "Hormone Optimization",
    "Cognitive Enhancement",
    "Sexual Wellness",
    "Athletic Performance",
    "Immune Support",
  ];

  // 👇 Yahan tumhare saare naye Peptides add kar diye hain
  const peptides = [
    "Semaglutide",
    "Tirzepatide",
    "BPC-157",
    "Sermorelin",
    "CJC-1295 / Ipamorelin",
    "PT-141",
    "HGH 191AA",
    "Liraglutide",
    "HCG",
    "Retatrutide",
    "Cagrilintide",
    "TB-500",
    "NAD+",
    "Survodutide",
    "Ipamorelin",
    "CJC-1295",
    "Mazdutide",
    "Glutathione",
    "Hexarelin",
    "Pentadecapeptide",
    "L-Carnitine",
    "Epithalon",
    "IGF-1 LR3",
    "GHRP-6",
    "Dihexa",
    "Kisspeptin-10",
    "Melanotan II",
    "HMG",
    "Copper Peptides",
    "SS-31",
    "Oxytocin",
    "Adamax",
    "MGF",
    "Cerebrolysin",
    "KPV",
    "DSIP",
    "PNC-27",
    "Cardiogen",
    "Testagen",
    "Cortagen",
    "Livagen",
    "Crystagen",
    "Cartalax",
    "Chonluten",
    "CJC-1295 + GHRP-2 Blend",
    "PEG MGF",
    "KPV (Ac-KPV-NH2)",
    "B7-33",
    "ARA-290",
    "LL-37",
    "TB-500 Fragment (17-23)",
    "BPC-157, TB-500 (Blend)",
    "Tri-Heal",
    "Follistatin 315",
    "AHK-Cu",
    "AHK (Tripeptide-3)",
    "Follistatin",
    "Follistatin 344",
    "Pal-AHK",
    "Palmitoyl Dipeptide-6",
    "Rigin (Palmitoyl Tetrapeptide-7)",
    "Syn-Coll (Palmitoyl Tripeptide-5)",
    "Tripeptide-29",
    "Gonadorelin",
    "GHRH",
    "Semax",
    "PE-22-28",
    "Fraternine",
    "Melanostatin DM",
    "Selank",
    "Melanotan 1 (MT1)",
    "Thymosin Alpha-1",
    "Thymagen (Thymogen)",
    "VIP 6mg",
    "Tesamorelin",
    "Ovagen",
    "TRH Thyrotropin (Protirelin)",
    "Triptorelin (GnRH)",
    "Cagrilintide + Semaglutide Blend",
    "GLOW Peptide Blend",
    "KLOW Peptide Blend",
    "Pal-GHK (Palmitoyl Tripeptide-1)",
    "Tesamorelin, CJC-1295 (no DAC), Ipamorelin 12mg (Blend)",
    "AICAR",
    "CJC-1295 (no DAC), Ipamorelin 10mg (Blend)",
    "Ipamorelin + Tesamorelin Blend",
    "Pancragen",
    "MK-677 (Ibutamoren)",
    "ACE-031 (Ramatercept)",
    "Humanin",
    "P21 (P021)",
    "HGH Frag 176-191",
    "FLGR-242",
    "Thymalin",
    "O-304 (ATX-304)",
    "GHRP-2",
    "Adipotide (FTPP)",
    "AOD-9604",
    "Longevity, Performance & Obesity Research",
    "Vesugen",
    "AOD-9604 + CJC-1295 + Ipamorelin Blend",
    "CJC-1295 No DAC + Ipamorelin Blend",
    "MOTS-c",
    "5-Amino-1MQ",
    "Tesofensine",
    "SLU-PP-332",
    "FOX04-DRI",
    "SNAP-8",
    "Acetyl Hexapeptide-3 (Argireline)",
    "Matrixyl",
    "Pentapeptide-18 (Leuphasyl)",
    "Vialox (Pentapeptide-3V)",
    "Vilon",
    "Pinealon",
    "Bronchogen",
    "Prostamax",
    "GHK-Cu",
  ];

  const clinics = [
    {
      name: "Vital Force Therapy and Wellness",
      rating: "5.0",
      reviews: "708",
      location: "Hoover, AL",
      description:
        "Vital Force Therapy & Wellness offers holistic solutions through regenerative medicine, including growth hormone peptide therapy and hormone optimization.",
      tags: ["Telehealth", "Free Consult"],
      offers: [
        "hormonal imbalances",
        "vitamin deficiencies",
        "thyroid diseases",
      ],
      image:
        "https://via.placeholder.com/200x150/0a1e59/ffffff?text=Vital+Force",
    },
    {
      name: "Madison Wellness & Aesthetic Center",
      rating: "4.7",
      reviews: "1062",
      location: "Madison, AL",
      description:
        "Madison Wellness & Aesthetic Center offers an integrative approach to healthcare, focusing on sexual and hormonal health.",
      tags: ["In-person", "New Patients"],
      offers: ["thyroid issues", "adrenal fatigue", "weight loss"],
      image:
        "https://via.placeholder.com/200x150/e5e7eb/333333?text=Madison+Wellness",
    },
    {
      name: "Mobile Physical Medicine & Wellness, PC",
      rating: "4.8",
      reviews: "619",
      location: "Mobile, AL",
      description:
        "Mobile Physical Medicine & Wellness offers non-surgical treatments for neck, back, and neuromuscular disorders, including weight loss injections.",
      tags: ["In-person"],
      offers: ["neck pain", "low back pain", "cervical disc herniation"],
      image:
        "https://via.placeholder.com/200x150/e5e7eb/333333?text=Mobile+Physical",
    },
    {
      name: "Vital Force Therapy and Wellness",
      rating: "5.0",
      reviews: "708",
      location: "Hoover, AL",
      description:
        "Vital Force Therapy & Wellness offers holistic solutions through regenerative medicine, including growth hormone peptide therapy and hormone optimization.",
      tags: ["Telehealth", "Free Consult"],
      offers: [
        "hormonal imbalances",
        "vitamin deficiencies",
        "thyroid diseases",
      ],
      image:
        "https://via.placeholder.com/200x150/0a1e59/ffffff?text=Vital+Force",
    },
    {
      name: "Madison Wellness & Aesthetic Center",
      rating: "4.7",
      reviews: "1062",
      location: "Madison, AL",
      description:
        "Madison Wellness & Aesthetic Center offers an integrative approach to healthcare, focusing on sexual and hormonal health.",
      tags: ["In-person", "New Patients"],
      offers: ["thyroid issues", "adrenal fatigue", "weight loss"],
      image:
        "https://via.placeholder.com/200x150/e5e7eb/333333?text=Madison+Wellness",
    },
    {
      name: "Mobile Physical Medicine & Wellness, PC",
      rating: "4.8",
      reviews: "619",
      location: "Mobile, AL",
      description:
        "Mobile Physical Medicine & Wellness offers non-surgical treatments for neck, back, and neuromuscular disorders, including weight loss injections.",
      tags: ["In-person"],
      offers: ["neck pain", "low back pain", "cervical disc herniation"],
      image:
        "https://via.placeholder.com/200x150/e5e7eb/333333?text=Mobile+Physical",
    },
    {
      name: "Vital Force Therapy and Wellness",
      rating: "5.0",
      reviews: "708",
      location: "Hoover, AL",
      description:
        "Vital Force Therapy & Wellness offers holistic solutions through regenerative medicine, including growth hormone peptide therapy and hormone optimization.",
      tags: ["Telehealth", "Free Consult"],
      offers: [
        "hormonal imbalances",
        "vitamin deficiencies",
        "thyroid diseases",
      ],
      image:
        "https://via.placeholder.com/200x150/0a1e59/ffffff?text=Vital+Force",
    },
    {
      name: "Madison Wellness & Aesthetic Center",
      rating: "4.7",
      reviews: "1062",
      location: "Madison, AL",
      description:
        "Madison Wellness & Aesthetic Center offers an integrative approach to healthcare, focusing on sexual and hormonal health.",
      tags: ["In-person", "New Patients"],
      offers: ["thyroid issues", "adrenal fatigue", "weight loss"],
      image:
        "https://via.placeholder.com/200x150/e5e7eb/333333?text=Madison+Wellness",
    },
    {
      name: "Mobile Physical Medicine & Wellness, PC",
      rating: "4.8",
      reviews: "619",
      location: "Mobile, AL",
      description:
        "Mobile Physical Medicine & Wellness offers non-surgical treatments for neck, back, and neuromuscular disorders, including weight loss injections.",
      tags: ["In-person"],
      offers: ["neck pain", "low back pain", "cervical disc herniation"],
      image:
        "https://via.placeholder.com/200x150/e5e7eb/333333?text=Mobile+Physical",
    },
  ];

  return (
    <div className="bg-[#F6F8F7] min-h-screen pt-8 pb-16 font-sans">
      <div className="max-w-[1300px] mx-auto px-6 md:px-8">
        {/* ===== Top Header Section ===== */}
        <nav className="flex flex-wrap items-center gap-2 text-[14px] text-[#6a7a75] mb-4">
          <Link to="/" className="hover:text-[#0d7d85]">
            Home
          </Link>
          <span>&gt;</span>
          <Link to="/clinics" className="hover:text-[#0d7d85]">
            Peptides Clinics
          </Link>
          <span>&gt;</span>
          {cityName ? (
            <>
              <Link
                to={`/clinics/${stateName}`}
                className="hover:text-[#0d7d85]"
              >
                {formattedState}
              </Link>
              <span>&gt;</span>
              <span className="text-[#0f2027] font-medium">
                {formattedCity}
              </span>
            </>
          ) : (
            <span className="text-[#0f2027] font-medium">{formattedState}</span>
          )}
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f2027] mb-2">
          {cityName
            ? `Peptide Therapy Clinics near ${formattedCity}, ${formattedState}`
            : `Peptide Therapy Clinics in ${formattedState}`}
        </h1>
        <p className="text-[#6a7a75] text-[15px] mb-6">
          {cityName
            ? `Showing 18 clinics near ${formattedCity} within 25 miles.`
            : `62 clinic(s) • ${cities.length} ${
                cities.length === 1 ? "city" : "cities"
              }`}
        </p>

        {/* Cities Pills */}
        {!cityName && cities.length > 0 && (
          <>
            <p className="text-[13px] text-gray-500 mr-2">Cities</p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {cities.map((city) => (
                <Link
                  key={city}
                  to={`/clinics/${stateName}/${toSlug(city)}`}
                  className="text-[13px] px-3 py-1 hover:bg-[#FFF0BB] rounded-sm text-gray-600 transition-colors"
                >
                  {city}
                </Link>
              ))}
              {additionalCityCount > 0 && (
                <button className="text-[13px] px-3 py-1 bg-gray-300 rounded-sm text-gray-700 font-medium hover:bg-[#F6F8F7]">
                  View all cities (+{additionalCityCount})
                </button>
              )}
            </div>
          </>
        )}

        {/* Intro Text */}
        {!cityName && (
          <p className="text-[#4a5a55] text-[14px] leading-relaxed max-w-[600px] mb-8">
            Peptide therapy clinics in {formattedState} commonly offer{" "}
            <strong className="font-semibold text-[#0f2027]">semaglutide</strong>{" "}
            and{" "}
            <strong className="font-semibold text-[#0f2027]">tirzepatide</strong>{" "}
            for medical weight loss,{" "}
            <strong className="font-semibold text-[#0f2027]">BPC-157</strong>{" "}
            and{" "}
            <strong className="font-semibold text-[#0f2027]">TB-500</strong>{" "}
            for tissue repair and recovery, and{" "}
            <strong className="font-semibold text-[#0f2027]">sermorelin</strong>{" "}
            or{" "}
            <strong className="font-semibold text-[#0f2027]">CJC-1295</strong>{" "}
            for growth hormone support. Filter by treatment type, telehealth
            availability, and payment options to find the right provider for
            your goals.
          </p>
        )}

        {/* ===== Main Layout: Sidebar + Results ===== */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ===== LEFT SIDEBAR (Filters) ===== */}
          <aside className="w-full lg:w-[280px] shrink-0">
            <h2 className="font-bold text-[16px] text-[#0f2027] mb-4">
              Filters
            </h2>

            {/* Treatment Filter */}
            <div className="mb-6">
              <h3 className="text-[14px] font-semibold text-[#0f2027] mb-3">
                Treatment
              </h3>
              <div className="flex flex-col gap-2">
                {treatments.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-yellow-400 text-black focus:ring-yellow-400 cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Peptides Filter */}
            <div className="mb-6">
              <h3 className="text-[14px] font-semibold text-[#0f2027] mb-3">
                Peptides offered
              </h3>
              <div className="flex flex-col gap-2  overflow-y-auto pr-2 custom-scrollbar">
                {peptides.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-yellow-400 text-black focus:ring-yellow-400 cursor-pointer "
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Options Toggles */}
            <div className="mb-6">
              <h3 className="text-[14px] font-semibold text-[#0f2027] mb-3">
                Options
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Telehealth available",
                  "Accepts HSA/FSA",
                  "Free consultation",
                  "Accepts new patients",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 text-[13px] text-gray-600 cursor-pointer"
                    // justify-between ki jagah gap-3 use kiya hai taake button aur text ke beech space rahe
                  >
                    {/* 1. Toggle Button (Left Side) */}
                    <div className="relative inline-flex items-center shrink-0">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                    </div>

                    {/* 2. Text (Right Side) */}
                    <span className="leading-tight">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Minimum Rating */}
            <div className="mb-6">
              <h3 className="text-[14px] font-semibold text-[#0f2027] mb-3">
                Minimum rating
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Any", "3+ stars", "4+ stars", "4.5+ stars"].map(
                  (rating, idx) => (
                    <button
                      key={rating}
                      className={`px-3 py-1.5 text-[12px] font-medium rounded-full border ${idx === 0 ? "bg-teal-700 text-white border-teal-700" : "bg-white text-gray-600 border-gray-300 hover:border-teal-500"}`}
                    >
                      {rating}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#0f2027] mb-3">
                Consultation
              </h3>
              <select className="w-full border border-gray-300 rounded-md p-2 text-[13px] text-gray-700 outline-none focus:border-teal-500 bg-white">
                <option>All</option>
                <option>In-person</option>
                <option>Telehealth</option>
              </select>
            </div>
          </aside>

          {/* ===== RIGHT SIDE (Map & Clinics) ===== */}
          <main className="flex-1">
            {/* Top Bar: Results Count & Sorting */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <p className="text-[13px] text-gray-600">
                62 clinics • showing 1-10 • Recommended
              </p>
              <div className="flex items-center gap-3">
                {hasCities && (
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-md px-3 py-1.5 bg-white transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                    </svg>
                    {showMap ? "Hide map" : "Show map"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${showMap ? "rotate-0" : "rotate-180"}`}
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>
                )}
                <div className="flex items-center gap-1.5 text-[13px]">
                  <span className="text-gray-600">Sort:</span>
                  <select className="border border-gray-300 py-1 bg-transparent font-medium text-gray-900 outline-none cursor-pointer">
                    <option>Recommended</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Map Section */}
            {hasCities && showMap && (
              <div className="w-full h-[350px] rounded-lg border border-gray-300 mb-6 overflow-hidden relative z-0">
                <MapContainer
                  key={formattedState}
                  center={[33.5186, -86.8104]}
                  zoom={7}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  <Marker position={[33.5186, -86.8104]}>
                    <Popup>Vital Force Therapy (Hoover)</Popup>
                  </Marker>

                  <Marker position={[34.6993, -86.7483]}>
                    <Popup>Madison Wellness & Aesthetic Center</Popup>
                  </Marker>

                  <Marker position={[30.6954, -88.0399]}>
                    <Popup>Mobile Physical Medicine</Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}

            {/* Clinics List */}
            {hasCities && (
              <>
            <div className="flex flex-col gap-5">
              {clinics.map((clinic, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e5e7eb] rounded-lg p-0.5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="w-full sm:w-[220px] h-[220px] shrink-0 rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col mb-5">
                    <h2 className="text-[18px] font-bold text-[#0f2027] mb-1">
                      {index + 1}. {clinic.name}
                    </h2>

                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-yellow-400">
                        <svg
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-semibold text-gray-800">
                        {clinic.rating}
                      </span>
                      <span className="text-[13px] text-gray-500">
                        ({clinic.reviews} reviews)
                      </span>
                    </div>

                    <p className="text-[13px] text-gray-500 mb-2">
                      {clinic.location}
                    </p>
                    <p className="text-[14px] text-gray-700 leading-relaxed mb-4 pr-5 flex-1">
                      {clinic.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {clinic.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] bg-[#FFF0BB] text-gray-800 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Offers */}
                    <div className="flex items-center gap-2 flex-wrap text-[12px]">
                      <span className="text-gray-500">Offers:</span>
                      {clinic.offers.map((offer) => (
                        <span
                          key={offer}
                          className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded"
                        >
                          {offer}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-yellow-400 text-gray-900 font-bold text-[13px]">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 text-[13px] hover:bg-gray-50">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 text-[13px] hover:bg-gray-50">
                3
              </button>
              <span className="text-gray-500 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 text-[13px] hover:bg-gray-50">
                7
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
