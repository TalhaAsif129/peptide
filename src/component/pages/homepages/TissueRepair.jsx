import { Link } from "react-router-dom";

export default function TreatmentListing() {
  const clinics = [
    { name: "Total T Clinic", location: "San Diego, CA" },
    { name: "Texas Vitality", location: "Irving, TX" },
    { name: "Chapel Hill Wellness Collective", location: "Chapel Hill, NC" },
    { name: "Regenerative Arts Anti Aging Center", location: "Katy, TX" },
    { name: "Advanced TRT Clinic", location: "Oakbrook Terrace, IL" },
    { name: "Infinite Wellness Hormone Specialists: Dr. Vanessa Mack (Dean)", location: "Scottsdale, AZ" },
    { name: "ThinWorks Weight Loss Centers", location: "Palm Beach Gardens, FL" },
    { name: "NV Medspa Honolulu", location: "Honolulu, HI" },
    { name: "RT HEALTH Clinic", location: "Waco, TX" },
    { name: "Cardinal Weight Loss: San Francisco- Ideal Protein Clinic", location: "San Francisco, CA" },
    { name: "Denver Regenerative Medicine | Stem Cell Therapy, HRT, Testosterone Clinic", location: "Colorado Springs, CO" },
    { name: "JourneyLife Physicians", location: "Greenwood, IN" },
    { name: "Nulevel Wellness", location: "Gilbert, AZ" },
    { name: "Idaho Weight Loss", location: "Fruitland, ID" },
    { name: "Euverita Wellness & Weight Loss", location: "Wayzata, MN" },
    { name: "Metabolic Research Center | Greenville", location: "Greenville, SC" },
    { name: "Tenuiss.com", location: "Cincinnati, OH" },
    { name: "Manhattan Integrative Medicine", location: "West Palm Beach, FL" },
    { name: "CureMD Skin Bar and Wellness Clinic", location: "Chandler, AZ" },
    { name: "Men's Health Solutions", location: "Indianapolis, IN" },
    { name: "ThriveMD Institute, LLC", location: "Dallas, TX" },
    { name: "Aesthetics MedSpa", location: "Reno, NV" },
    { name: "Hydro Nation IV Drip & Aesthetics", location: "Riverside, CA" },
    { name: "Moorpark Testosterone Peptide Therapy", location: "Moorpark, CA" },
    { name: "Renew Vitality Testosterone Clinic of Kansas City", location: "North Kansas City, MO" },
    { name: "The Covey Wellness - Woburn", location: "Woburn, MA" },
    { name: "Palm Beach Wellness Center", location: "Greenacres, FL" },
    { name: "Radiant Health SF", location: "San Rafael, CA" },
    { name: "Dr. Monica Grover", location: "New York, NY" },
    { name: "Semaglutide, Tirzepatide & Phentemrine Weight Loss", location: "Miami, FL" },
    { name: "Mesa Medical Weight Loss", location: "Mesa, AZ" },
    { name: "Integrative Hormone Center for Men", location: "Centerville, OH" },
    { name: "URBAN Medical", location: "Gilbert, AZ" },
    { name: "Cisne Wellness", location: "Lakeland, FL" },
    { name: "Svetlana Pyatigorskaya NP in Family Health PC", location: "New York, NY" },
    { name: "A'Omara Chanel Med Spa", location: "Killeen, TX" },
    { name: "Bonita Rejuvenation", location: "Bonita Springs, FL" },
    { name: "Prime Body Wellness - Manhattan", location: "New York, NY" },
    { name: "The A-List Clinic", location: "Los Angeles, CA" },
    { name: "SureAccess MD, LLC", location: "Shreveport, LA" },
    { name: "Go Medical Clinic", location: "Tampa, FL" },
    { name: "Beyond Aesthetics", location: "Lubbock, TX" },
    { name: "CAMP Beauty & Wellness", location: "Houston, TX" },
    { name: "Gameday Men's Health Centerville", location: "Dayton, OH" },
    { name: "Trillion Health & Hormone Clinic", location: "Wichita, KS" },
    { name: "dietMD Hawaii", location: "Honolulu, HI" },
    { name: "A Community Wellness Clinic", location: "Spokane, WA" },
    { name: "Gameday Men's Health Newtown Centre TRT Clinic", location: "Newton Centre, MA" },
    { name: "Dublin Weight Loss & Wellness", location: "Dublin, OH" },
    { name: "Central Ohio Nutrition Center, Inc.", location: "Columbus, OH" },
    { name: "St. Petersburg Center for Performance and Weight Loss", location: "St. Petersburg, FL" },
    { name: "Slim Weight Loss Clinic", location: "Tucson, AZ" },
    { name: "CR8 Health PGA Longevity Center", location: "North Palm Beach, FL" },
    { name: "Energize Health and Wellness", location: "Fort Mill, SC" },
    { name: "Auzio - Modern Men and Women's Health Clinic", location: "Bakersfield, CA" },
    { name: "Huemn | Hyperbaric Oxygen Therapy | Peptides | Weight loss", location: "Houston, TX" },
    { name: "Valley Weight Loss Laredo", location: "Laredo, TX" },
    { name: "Aesura Health", location: "Hackensack, NJ" },
    { name: "Alpha Health", location: "Rockville, MD" },
    { name: "My Healthy Body - Medical Weight Loss Clinic", location: "Scottsdale, AZ" },
    { name: "CerTex IV", location: "Woodway, TX" },
    { name: "Gameday Men's Health Southwest Sacramento, TRT, Peptide and ED clinic", location: "Sacramento, CA" },
    { name: "Dr. Charlie Seltzer Lifestyle Medicine", location: "Philadelphia, PA" },
    { name: "Advanced TRT Clinic", location: "Tustin, CA" },
    { name: "Unastone House", location: "Severna Park, MD" },
    { name: "isknologie", location: "Beaumont, TX" },
    { name: "Joy Wellness Partners (JWP)", location: "San Diego, CA" },
    { name: "Valley Weight Loss RGV", location: "McAllen, TX" },
    { name: "Robinson Wellness & IV Therapy", location: "St. Petersburg, FL" },
    { name: "3-Peat Wellness - Weight Loss Management, Aesthetics, Men's Hormone Replacement Therapy", location: "Conway, AR" },
    { name: "NY Medical Weight Loss", location: "Garden City, NY" },
    { name: "Liquid Mobile IV Phoenix Metro Clinic & Mobile (We Come to You)", location: "Phoenix, AZ" },
    { name: "Live Well Functional Medicine", location: "Montgomery, AL" },
    { name: "Lite Medical Clinic PLC - Plymouth Maple Grove", location: "Plymouth, MN" },
    { name: "Elevate Aesthetics", location: "Orlando, FL" },
    { name: "Renew Vitality Testosterone Clinic of Chesapeake", location: "Chesapeake, VA" },
    { name: "IV League", location: "Boston, MA" },
    { name: "Cyrus Cosmetics", location: "Fresno, CA" },
    { name: "ADP Weight Loss Medical Services", location: "Tucson, AZ" },
    { name: "Renew Fast Medical Weight Loss", location: "Coppell, TX" },
    { name: "Dr. Leon Katz Medical Weight Loss Center", location: "Long Beach, NY" },
    { name: "Zenith Wellness", location: "San Diego, CA" },
    { name: "FINA MedSpa", location: "Honolulu, HI" },
    { name: "Authentic Medical Weight Loss Injections", location: "Scottsdale, AZ" },
    { name: "Stamina Weight Loss, Testosterone & ED Center", location: "Houston, TX" },
    { name: "IDAHO CENTER FOR REGENERATIVE MEDICINE - ICRM", location: "Boise, ID" },
    { name: "Prime IV Hydration & Wellness (Freedom Town Center", location: "Fayetteville, NC" },
    { name: "Evolve 865: Jill Lanson, APN-B", location: "Lenoir City, TN" },
    { name: "Dr Erin's Weight Loss - Erin Chamberlin Snyder MD", location: "Indianapolis, IN" },
    { name: "Cliquor Salon & Med Spa", location: "Lakeland, FL" },
    { name: "Gameday Men's Health Atlanta, GA - Buckhead TRT, Peptide, ED and Wellness Clinic", location: "Atlanta, GA" },
    { name: "Premiere Peptides and Wellness", location: "Tampa, FL" },
    { name: "Alpha Clinic", location: "Jacksonville, FL" },
    { name: "Renew Vitality Testosterone Clinic of Knoxville", location: "Knoxville, TN" },
    { name: "Dilworth Weight Loss and Hormone therapy", location: "Charlotte, NC" },
    { name: "Slim U Weight Loss Center", location: "Dallas, TX" },
    { name: "The G Spa", location: "Corpus Christi, TX" },
    { name: "The Drip Lounge", location: "Charleston, SC" },
    { name: "Perpetual Health Group", location: "Las Vegas, NV" },
    { name: "True LIO, Weight Loss & Wellness", location: "Miami, FL" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans lg:pt-12 pb-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-8">
        
        {/* ===== Breadcrumb ===== */}
        <nav className="flex flex-wrap items-center gap-2 text-[14px] text-[#6a7a75] mb-3.5">
          <Link to="/" className="text-[#6a7a75] no-underline hover:text-[#0d7d85]">Home</Link>
          <span className="text-[#9aa8a3]">&gt;</span>
          <Link to="/treatment" className="text-[#6a7a75] no-underline hover:text-[#0d7d85]">Treatment</Link>
          <span className="text-[#9aa8a3]">&gt;</span>
          <span className="text-[#0f2027] font-medium">Tissue Repair & Recovery</span>
        </nav>

        {/* ===== Heading & Subheading ===== */}
        <div className="mb-6">
          <h1 className="text-[#333] saira-bold text-[28px] md:text-[30px] leading-[36px] tracking-[-0.3px] mb-4">
            Peptide Therapy: Tissue Repair & Recovery
          </h1>
          <p className="text-[#6b7280] lg:text-[16px] leading-[26px] ">
            BPC-157, TB-500, and recovery peptides
          </p>
        </div>

        {/* ===== Count Text ===== */}
        <p className="text-[#6b7280] lg:text-[16px] leading-[26px] mb-6">
        Showing 100 of 663 clinics that offer Tissue Repair & Recovery.
        </p>

        {/* ===== Clinics List ===== */}
        <div className="flex flex-col gap-2">
          {clinics.map((clinic, index) => (
            <div key={index} className="text-[#1f6cd6] lg:text-[16px] leading-[26px] ">
              <Link 
                to="#" 
                className="text-[#2563eb] hover:underline"
              >
                {clinic.name} — {clinic.location}
              </Link>
             
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* ===== NAYE SECTIONS (SABSE AAKHIR MEIN ADD KIYE) ===== */}
        {/* ========================================================= */}

        {/* Browse all clinics by state */}
        <div className="mt-8 mb-9.5">
          <Link to="#" className="text-[#2563eb] hover:underline lg:text-[16px] leading-[26px] inline-flex items-center gap-1.5">
            Browse all clinics by state
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Related protocol guides Box */}
        <div className="border border-[#e2e8e6] rounded-lg p-6 mb-10 bg-white">
          <h3 className="text-[#333] saira-semibold text-[16px] leading-[24px] tracking-[-0.16px] mb-1 ">Related protocol guides</h3>
          <p className="text-[#6b7280] lg:text-[14px] lg:leading-[20px] mb-4">
            Detailed dosing and reconstitution guides for peptides used in Weight Loss therapy.
          </p>
          <Link
            to="#"
            className="inline-block border border-[#d5dedb] rounded-full px-4 py-1.5 lg:text-[14px] lg:leading-[20px] font-medium text-[#333333] hover:bg-[#333333]  hover:text-white transition-colors mb-3.5"
          >
            Weight Loss & GLP-1 Protocols
          </Link>
          <br />
          <Link to="#" className="text-[#1f6cd6] hover:underline text-[14px] lg:leading-[20px] font-regular inline-flex items-center gap-1.5">
            Browse all protocol categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Looking for a telehealth provider Box */}
        <div className="border border-[#b8d1cf] rounded-lg p-5 bg-[#F2FAF6]">
          <h3 className="text-[#333] saira-bold lg:text-[18px] lg:leading-[28px] tracking-[-0.18px] mb-2">Looking for a telehealth provider?</h3>
          <p className="text-[#4a4a4a] lg:text-[14px] lg:leading-[20px]  mb-2.5 leading-relaxed ">
            See our independent 2026 rankings of the best telehealth clinics for weight loss — vetted, US-licensed providers with transparent pricing.
          </p>
          <Link to="#" className="text-[#006045] hover:underline lg:text-[14px] lg:leading-[20px] font-semibold inline-flex items-center gap-1.5">
            See best telehealth for Weight Loss
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </div>
  );
}