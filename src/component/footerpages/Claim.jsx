import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  CirclePlus,
  Settings,
  Users,
  Award,
  MessageSquare,
  ShieldCheck,
  PenLine,
  Check,
  X,
  ChevronDown,
  Lock,
  CreditCard,
} from "lucide-react";

// ✅ Accent color from your original var(--accent) = rgba(11,124,132) = #0B7C84
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0B7C84] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 bg-[#0B7C84] text-white hover:bg-[#0a6b72] hover:shadow-[0_4px_14px_rgba(11,124,132,0.28)] active:scale-[0.98] px-7 py-3 text-base rounded-full min-h-[48px]";

const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0B7C84] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 border border-[#d1d5db] bg-white text-[#333333] hover:bg-[#F7F8F9] hover:border-[#0B7C84] active:bg-[#E6F4F5] px-7 py-3 text-base rounded-full min-h-[48px]";

const CARD =
  "rounded-[5px] bg-white shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] p-6 transition-all duration-200 text-center";

const HEADING_FONT = { fontFamily: "var(--font-heading)" };

// ---------------- FAQ data ----------------
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

// ---------------- Pricing table data ----------------
const PRICING_ROWS = [
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

const Claim = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main id="main-content" className="flex-1 w-full">
      {/* =============== HERO =============== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F8F9] via-white to-[#DCE9FD] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#333333]"
              style={HEADING_FONT}
            >
              Is Your Clinic Listed?{" "}
              <span className="text-[#333333]">Claim Your Free Profile</span>
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-[#6b7280]">
              Join hundreds of peptide therapy clinics reaching thousands of
              patients searching for peptide therapy providers 
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/claim/search">
                <button type="button" className={BTN_PRIMARY}>
                  <Search className="h-5 w-5" aria-hidden="true" />
                  Find Your Listing
                </button>
              </Link>
              <Link to="/claim/add">
                <button type="button" className={BTN_SECONDARY}>
                  <CirclePlus className="h-5 w-5" aria-hidden="true" />
                  Not Listed? Add Your Clinic
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============== WHY CLAIM =============== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl sm:text-3xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Why Claim Your Listing?
          </h2>
          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Settings,
                title: "Control Your Profile",
                desc: "Update your information, add photos, and highlight the services that set your clinic apart.",
              },
              {
                Icon: Users,
                title: "Reach More Patients",
                desc: "Patients searching for peptide therapy in your area will find you in our targeted directory.",
              },
              {
                Icon: Award,
                title: "Showcase Your Expertise",
                desc: "Display provider credentials, certifications, and specializations to build patient trust.",
              },
              {
                Icon: MessageSquare,
                title: "Get Patient Inquiries",
                desc: "Receive consultation requests directly from interested patients ready for peptide therapy.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className={CARD}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F7F8F9]">
                  <Icon className="h-6 w-6 text-[#333333]" aria-hidden="true" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#333333]"
                  style={HEADING_FONT}
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

      {/* =============== HOW IT WORKS =============== */}
      <section className="py-16 sm:py-20 bg-[#F7F8F9]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl sm:text-3xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            How It Works
          </h2>
          <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-8 sm:grid-cols-3">
            {[
              {
                Icon: Search,
                title: "Find Your Clinic",
                desc: "Search for your clinic in our directory by name or address.",
                step: 1,
              },
              {
                Icon: ShieldCheck,
                title: "Verify Ownership",
                desc: "Confirm you represent the clinic — it takes about 2 minutes.",
                step: 2,
              },
              {
                Icon: PenLine,
                title: "Enhance Your Profile",
                desc: "Add your logo, update services, and start receiving patient inquiries.",
                step: 3,
              },
            ].map(({ Icon, title, desc, step }) => (
              <div key={title} className="text-center">
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#333333]">
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F6CD6] text-xs font-bold text-white">
                    {step}
                  </span>
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold text-[#333333]"
                  style={HEADING_FONT}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#6b7280]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== FREE VS PREMIUM =============== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl sm:text-3xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Free vs. Premium
          </h2>
          <p className="mt-4 text-center text-sm sm:text-base text-[#6b7280]">
            Claiming your listing is always free. Upgrade to Premium for maximum
            visibility and patient inquiries.
          </p>

          {/* Table — scrolls horizontally on small screens */}
          <div className="mt-10 sm:mt-12 overflow-hidden rounded-[5px] border border-[#e5e7eb]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="bg-[#F7F8F9]">
                    <th className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-[#333333]">
                      Feature
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-[#333333]">
                      Free (Claimed)
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-[#333333]">
                      Premium
                      <span className="ml-1 text-xs font-normal text-[#6b7280]">
                        $199/mo
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e7eb]">
                  {PRICING_ROWS.map(({ feature, free, premium }) => (
                    <tr key={feature} className="hover:bg-[#F7F8F9]">
                      <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm text-[#4a4a4a]">
                        {feature}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-center">
                        {free === true ? (
                          <Check className="mx-auto h-5 w-5 text-[#333333]" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-[#e5e7eb]" />
                        )}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-center">
                        {premium === true ? (
                          <Check className="mx-auto h-5 w-5 text-[#333333]" />
                        ) : premium === false ? (
                          <X className="mx-auto h-5 w-5 text-[#e5e7eb]" />
                        ) : (
                          <span className="text-xs sm:text-sm font-medium text-[#333333]">
                            {premium}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/claim/search">
              <button type="button" className={BTN_PRIMARY}>
                Claim Your Free Listing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* =============== FAQ =============== */}
      <section className="py-16 sm:py-20 bg-[#F7F8F9]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-2xl sm:text-3xl font-bold text-[#333333]"
            style={HEADING_FONT}
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-10 sm:mt-12 space-y-3">
            {FAQS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[5px] border border-[#e5e7eb] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-4 sm:px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-[#333333]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`ml-4 h-5 w-5 flex-shrink-0 text-[#6b7280] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 sm:px-6 pb-4 text-sm leading-relaxed text-[#6b7280]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============== TRUST BADGES =============== */}
      <section className="border-t border-[#e5e7eb] bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2 text-sm text-[#6b7280]">
              <ShieldCheck className="h-5 w-5 text-[#FEED5A]" aria-hidden="true" />
              <span>Trusted by clinics nationwide</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6b7280]">
              <Lock className="h-5 w-5 text-[#FEED5A]" aria-hidden="true" />
              <span>Independent directory — we never sell your data</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6b7280]">
              <CreditCard className="h-5 w-5 text-[#FEED5A]" aria-hidden="true" />
              <span>No contracts — cancel premium anytime</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Claim;