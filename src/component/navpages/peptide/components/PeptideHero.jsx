import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PeptideHero({
  name,
  subtitle,
  badge = "Research Only",
  tags = [],
  heroGradient = "from-[#26332f] via-[#3a4743] to-[#1d293d]",
  lastReviewed = "Last reviewed October 2026",
  reviewer = "MyPeptideMatch Team",
}) {
  // Status badge styles matching live reference
  const getBadgeStyle = (badgeText) => {
    const lower = (badgeText || "").toLowerCase();
    if (lower.includes("investigational")) {
      return {
        container: "bg-[#f6f8f7] text-[#5b6764] border border-[#e3e8e6]",
        dot: "bg-[#5b6764]",
      };
    }
    if (lower.includes("compoundable")) {
      return {
        container: "bg-[#e6f0f8] text-[#1f6fb2] border border-[#bbd6ee]",
        dot: "bg-[#1f6fb2]",
      };
    }
    if (lower.includes("approved")) {
      return {
        container: "bg-[#e7f4ec] text-[#1e7a46] border border-[#c8e6d3]",
        dot: "bg-[#1e7a46]",
      };
    }
    // Default: Investigational / Research Only
    return {
      container: "bg-[#f6f8f7] text-[#5b6764] border border-[#e3e8e6]",
      dot: "bg-[#5b6764]",
    };
  };

  const badgeStyle = getBadgeStyle(badge);

  return (
    <>
      <section className={`relative bg-gradient-to-br ${heroGradient}`}>
        {/* Subtle radial overlay pattern matching live site */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none" />

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 relative">
          <div className="pb-10 pt-10 sm:pb-14 sm:pt-12">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm text-[#6b7280] font-sans [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40"
            >
              <span className="inline-flex shrink-0 items-center gap-1">
                <Link
                  to="/"
                  className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors"
                >
                  Home
                </Link>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1">
                <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" />
                <Link
                  to="/peptides"
                  className="truncate max-w-[120px] sm:max-w-none hover:text-[#1F6CD6] transition-colors"
                >
                  Peptide Encyclopedia
                </Link>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1">
                <ChevronRight className="h-4 w-4 shrink-0 text-[#6b7280]" />
                <span className="font-medium text-white/90 truncate max-w-[180px] sm:max-w-none">
                  {name}
                </span>
              </span> )
            </nav>

            {/* Title & Badge */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h1 className="font-heading saira-bold text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] tracking-[-0.44px]">
                {name}
              </h1>
              <span
                className={`inline-flex items-center gap-1.5 rounded-[6px] py-1 pl-2 pr-2.5 text-sm font-medium ${badgeStyle.container}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${badgeStyle.dot}`}
                  aria-hidden="true"
                />
                {badge}
              </span>
            </div>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-2 text-lg text-white/70 font-sans">{subtitle}</p>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Review Metadata Row */}
      <section className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 py-3 text-xs text-[#6b7280] font-sans">
            <span>{lastReviewed}</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-[#333333]">{reviewer}</span>
          </div>
        </div>
      </section>
    </>
  );
}
