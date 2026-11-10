import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Icons (lucide-style, inline)                                      */
/* ------------------------------------------------------------------ */
const SearchIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="m21 21-4.34-4.34" />
    <circle cx="11" cy="11" r="8" />
  </svg>
);

const CirclePlusIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);

const SettingsIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UsersIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const AwardIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
);

const MessageSquareIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
  </svg>
);

const ShieldCheckIcon = ({ className = "h-7 w-7" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const PenLineIcon = ({ className = "h-7 w-7" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M13 21h8" />
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  </svg>
);

const CheckIcon = ({ className = "mx-auto h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const XIcon = ({ className = "mx-auto h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ChevronDownIcon = ({ className = "ml-4 h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const LockIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CreditCardIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Shared button classes                                             */
/* ------------------------------------------------------------------ */
const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 bg-[var(--accent)] text-[var(--on-accent)] hover:bg-[var(--accent-hover)] hover:shadow-[0_4px_14px_rgba(11,124,132,0.28)] active:scale-[0.98] px-7 py-3 text-base rounded-full min-h-[48px]";

const SECONDARY_BTN =
  "inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--canvas)] hover:border-[var(--accent)] active:bg-[var(--accent-soft)] px-7 py-3 text-base rounded-full min-h-[48px]";

const CARD_SHADOW =
  "shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]";

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */
const BENEFITS = [
  {
    icon: SettingsIcon,
    title: "Control Your Profile",
    desc: "Update your information, add photos, and highlight the services that set your clinic apart.",
  },
  {
    icon: UsersIcon,
    title: "Reach More Patients",
    desc: "Patients searching for peptide therapy in your area will find you in our targeted directory.",
  },
  {
    icon: AwardIcon,
    title: "Showcase Your Expertise",
    desc: "Display provider credentials, certifications, and specializations to build patient trust.",
  },
  {
    icon: MessageSquareIcon,
    title: "Get Patient Inquiries",
    desc: "Receive consultation requests directly from interested patients ready for peptide therapy.",
  },
];

const STEPS = [
  {
    icon: SearchIcon,
    title: "Find Your Clinic",
    desc: "Search for your clinic in our directory by name or address.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Verify Ownership",
    desc: "Confirm you represent the clinic — it takes about 2 minutes.",
  },
  {
    icon: PenLineIcon,
    title: "Enhance Your Profile",
    desc: "Add your logo, update services, and start receiving patient inquiries.",
  },
];

// value: true → check, false → x, string → custom text
const COMPARISON_ROWS = [
  { feature: "Basic listing with name, address, phone", free: true, premium: true },
  { feature: "Appear in search results", free: true, premium: true },
  { feature: "Patient reviews displayed", free: true, premium: true },
  { feature: "Update your information", free: true, premium: true },
  { feature: "Receive lead notifications", free: true, premium: true },
  { feature: "Upload logo", free: true, premium: true },
  { feature: "Upload clinic photos", free: false, premium: "Up to 10" },
  { feature: "Featured badge on listing", free: false, premium: true },
  { feature: "Priority placement in city/state results", free: false, premium: true },
  { feature: "Extended clinic description (500 words)", free: false, premium: true },
  { feature: "Provider bios with photos", free: false, premium: true },
  { feature: "Direct website link (prominent)", free: false, premium: true },
  { feature: "Monthly analytics report", free: false, premium: true },
  { feature: 'Highlighted in "Featured Clinics" sections', free: false, premium: true },
];

const FAQS = [
  {
    q: "Is claiming my listing really free?",
    a: "Yes, claiming and managing your basic listing is completely free — forever. Premium is an optional paid upgrade for clinics that want enhanced visibility and features.",
  },
  {
    q: "How do you verify ownership?",
    a: "We use three methods: (1) If your email domain matches your clinic's website, you're verified instantly. (2) We can send a verification code to the email or phone listed for your clinic. (3) If neither works, you can submit documentation for manual review within 2 business days.",
  },
  {
    q: "Can I remove my listing?",
    a: "Yes. Once you've claimed your listing, you can request removal at any time through your dashboard or by contacting us. Unclaimed listings sourced from public data can also be removed upon request.",
  },
  {
    q: "How do you source your clinic data?",
    a: "We aggregate publicly available data from Google Business profiles, clinic websites, and other public directories. When you claim your listing, you take control of this information and can correct or enhance it.",
  },
  {
    q: "What happens if my information is wrong?",
    a: "Claim your listing to update it yourself immediately, or contact us and we'll fix it. Keeping your information accurate is one of the main reasons to claim your listing.",
  },
  {
    q: "Do I need to upgrade to Premium?",
    a: "Not at all. The free claimed listing gives you control over your profile, lead notifications, and the ability to update your information. Premium adds priority placement, enhanced features, and detailed analytics for clinics that want to maximize their patient acquisition.",
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                    */
/* ------------------------------------------------------------------ */
const ValueCell = ({ value }) => {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-[#333333]">{value}</span>;
  }
  return value ? (
    <CheckIcon className="mx-auto h-5 w-5 text-[#333333]" />
  ) : (
    <XIcon className="mx-auto h-5 w-5 text-[#e5e7eb]" />
  );
};

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-white">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between px-6 py-4 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-sm font-medium text-[#333333]">{faq.q}</span>
      <ChevronDownIcon
        className={`ml-4 h-5 w-5 flex-shrink-0 text-[#6b7280] transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <p className="px-6 pb-4 text-sm leading-relaxed text-[#6b7280]">{faq.a}</p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function ClaimYourListing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <main id="main-content" className="flex-1">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F8F9] via-white to-[#DCE9FD] py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-[36px] font-bold text-[#333333] leading-[40px] tracking-[-0.36px] md:text-[48px] md:leading-[48px] md:tracking-[-0.48px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Is Your Clinic Listed?{" "}
              <span className="text-[#333333]">Claim Your Free Profile</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#6b7280]">
              Join hundreds of peptide therapy clinics reaching thousands of
              patients searching for peptide therapy providers on
              MyPeptideMatch.com.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/claim/search">
                <button type="button" className={PRIMARY_BTN}>
                  <SearchIcon className="h-5 w-5" />
                  Find Your Listing
                </button>
              </a>
              <a href="/claim/add">
                <button type="button" className={SECONDARY_BTN}>
                  <CirclePlusIcon className="h-5 w-5" />
                  Not Listed? Add Your Clinic
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Why Claim ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold text-[#333333] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Claim Your Listing?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className={`rounded-[5px] bg-white p-6 text-center transition-all duration-200 ${CARD_SHADOW}`}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F7F8F9]">
                  <Icon className="h-6 w-6 text-[#333333]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#333333] tracking-[-0.18px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How It Works ---------------- */}
      <section className="bg-[#F7F8F9] py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold text-[#333333] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How It Works
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, desc }, index) => (
              <div key={title} className="text-center">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#333333]">
                  <Icon className="h-7 w-7 text-white" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F6CD6] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold text-[#333333] tracking-[-0.2px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-[#6b7280] leading-[26px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Free vs Premium ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold text-[#333333] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Free vs. Premium
          </h2>
          <p className="mt-4 text-center text-[#6b7280] leading-[26px]">
            Claiming your listing is always free. Upgrade to Premium for maximum
            visibility and patient inquiries.
          </p>

          <div className="mt-12 overflow-hidden rounded-[5px] border border-[#e5e7eb]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F7F8F9]">
                  <th className="px-6 py-4 text-sm font-semibold text-[#333333]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#333333]">
                    Free (Claimed)
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#333333]">
                    Premium
                    <span className="ml-1 text-xs font-normal text-[#6b7280]">
                      $199/mo
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb]">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#F7F8F9]">
                    <td className="px-6 py-3.5 text-sm text-[#4a4a4a]">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <ValueCell value={row.free} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <ValueCell value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <a href="/claim/search">
              <button type="button" className={PRIMARY_BTN}>
                Claim Your Free Listing
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-[#F7F8F9] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-3xl font-bold text-[#333333] tracking-[-0.3px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-3">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Trust footer ---------------- */}
      <section className="border-t border-[#e5e7eb] bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2 text-sm text-[#6b7280]">
              <ShieldCheckIcon className="h-5 w-5 text-[#FEED5A]" />
              <span>Trusted by clinics nationwide</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6b7280]">
              <LockIcon className="h-5 w-5 text-[#FEED5A]" />
              <span>Independent directory — we never sell your data</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6b7280]">
              <CreditCardIcon className="h-5 w-5 text-[#FEED5A]" />
              <span>No contracts — cancel premium anytime</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}