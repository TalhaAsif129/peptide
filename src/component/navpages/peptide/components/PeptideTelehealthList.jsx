import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ExternalLink, ArrowDown, ArrowRight } from "lucide-react";

export default function PeptideTelehealthList({
  peptideName,
  slug,
  telehealth = [],
}) {
  if (!telehealth || telehealth.length === 0) return null;

  const count = telehealth.length;

  const bannerText =
    slug === "sermorelin"
      ? "Sermorelin is a compoundable peptide, which means licensed 503A pharmacies in the US can prepare it under individual physician prescriptions. Below are 6 legitimate telehealth clinics that prescribe Sermorelin after a clinical consultation. Programs start around $73/month."
      : "CJC-1295 / Ipamorelin is not FDA-approved as a finished drug. The clinics listed below dispense CJC-1295 / Ipamorelin under individual physician prescriptions through licensed compounding pharmacies — not as a research-only product. Programs start around $133/month.";

  const categoryLink =
    slug === "sermorelin"
      ? { text: "Best longevity telehealth →", href: "/best/anti-aging-longevity" }
      : { text: "Best growth-hormone telehealth →", href: "/best/hormone-optimization" };

  const handleScrollToTelehealth = (e) => {
    e.preventDefault();
    const el = document.getElementById("telehealth");
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-12 space-y-8">
      {/* Where to Buy Online Legally Banner */}
      <section className="rounded-[5px] border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)]">
        <h2 className="saira-bold text-lg font-bold text-[#333333] tracking-[-0.18px]">
          Where to Buy {peptideName} Online (Legally, 2026)
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a]">
          {bannerText}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href="#telehealth"
            onClick={handleScrollToTelehealth}
            className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#FEED5A] px-4 py-2 font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
          >
            See {count} legitimate {peptideName} clinics
            <ArrowDown className="h-4 w-4" />
          </a>
          <Link
            to={categoryLink.href}
            className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#e5e7eb] bg-white px-4 py-2 font-medium text-[#1F6CD6] hover:border-[#1F6CD6] transition-colors"
          >
            {categoryLink.text}
          </Link>
        </div>
      </section>

      {/* Telehealth Providers List */}
      <div id="telehealth" className="scroll-mt-24">
        <div className="overflow-hidden rounded-[5px] border border-emerald-200 bg-white shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-emerald-100 bg-emerald-50 px-5 py-4">
            <ShieldCheck className="h-5 w-5 text-emerald-700 shrink-0" />
            <div>
              <h2 className="saira-bold text-base font-bold text-[#333333] tracking-[-0.16px]">
                Get {peptideName} Legally via Telehealth
              </h2>
              <p className="mt-0.5 text-xs text-emerald-800">
                Licensed US clinicians · 503A/503B compounding pharmacies · Discreet shipping
              </p>
            </div>
          </div>

          {/* Providers List */}
          <ul className="divide-y divide-[#F7F8F9]">
            {telehealth.map((item, idx) => (
              <li
                key={item.name || idx}
                className="flex flex-wrap items-start gap-4 px-5 py-4 transition-colors hover:bg-emerald-50/40 sm:flex-nowrap"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-sm font-semibold text-[#333333]">
                      {item.name}
                    </span>
                    {item.score && (
                      <span className="text-xs font-semibold text-amber-700">
                        {item.score}
                      </span>
                    )}
                  </div>
                  {item.tagline && (
                    <p className="mt-1 text-xs text-[#6b7280]">{item.tagline}</p>
                  )}
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6b7280]">
                    {item.price && (
                      <span className="font-medium text-[#4a4a4a]">
                        {item.price}
                      </span>
                    )}
                    {item.consultType && (
                      <span className="capitalize">{item.consultType}</span>
                    )}
                  </div>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-[4px] bg-[#FEED5A] px-4 py-2 text-sm font-semibold text-[#333333] transition-all hover:bg-[#FFF04B] hover:shadow-[0_2px_8px_rgba(254,237,90,0.4)]"
                  >
                    Start Visit
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
