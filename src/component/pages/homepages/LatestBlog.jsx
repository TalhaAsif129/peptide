// src/component/pages/homepages/LatestBlog.jsx
import { Link } from "react-router-dom";

import imgBlog1 from "../../../assets/homepageimges/blog/amazon-bacteriostatic-water.jpg";
import imgBlog2 from "../../../assets/homepageimges/blog/fda-bpc157-tb500.jpg";
import imgBlog3 from "../../../assets/homepageimges/blog/reconstitute-bpc157.jpg";
import imgBlog4 from "../../../assets/homepageimges/blog/peptide-science-shutdown.jpg";
import imgBlog5 from "../../../assets/homepageimges/blog/retatrutide-2026.jpg";
import imgBlog6 from "../../../assets/homepageimges/blog/injectable-peptides-craze.jpg";

export default function LatestBlog() {
  const tabs = [
    { name: "Latest", href: null },
    { name: "News", href: "/blog" },
    { name: "How-To Guides", href: "/blog" },
    { name: "Weight Loss Meds", href: "/blog" },
  ];

  const posts = [
    {
      category: "NEWS",
      title:
        "Why Amazon Removed Bacteriostatic Water — And Where to Buy It Now (2026)",
      image: imgBlog1,
    },
    {
      category: "NEWS",
      title:
        "FDA Panel Votes 8-6 to Clear BPC-157, TB-500 & 4 Peptides for Compounding (July 2026)",
      image: imgBlog2,
    },
    {
      category: "HOW-TO GUIDES",
      title: "How to Reconstitute BPC-157: Step-by-Step Mixing Guide (2026)",
      image: imgBlog3,
    },
    {
      category: "NEWS",
      title: "Peptide Sciences Shuts Down: What Happened and What It Means",
      image: imgBlog4,
    },
    {
      category: "WEIGHT LOSS MEDS",
      title: "How to Get Retatrutide in 2026 (Legit Options & Safety Checklist)",
      image: imgBlog5,
    },
    {
      category: "NEWS",
      title: "US Injectable Peptides Craze: What Patients Need to Know",
      image: imgBlog6,
    },
  ];

  return (
    <section className="bg-[#F6F8F7] py-[clamp(48px,7vw,72px)] border-t border-[#e3e8e6] font-sans">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">

        {/* Header */}
        <div className="flex items-baseline justify-between gap-4 mb-5">
          <h2 className="text-[#1c2522] saira-extrabold text-[26px] leading-[42px] tracking-[-0.26px] lg:text-[34px] lg:leading-[54px] lg:tracking-[-0.34px] md:text-[31px] md:leading-[49px] md:tracking-[-0.31px]">
            Latest from Our Blog
          </h2>
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-[#066068] font-bold text-[15px] leading-[24px] no-underline hover:text-[#0a474b] transition-colors shrink-0"
          >
            View all posts →
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 mb-6">
          {tabs.map((tab) =>
            tab.href ? (
              <Link
                key={tab.name}
                to={tab.href}
                className="inline-flex items-center px-4.5 py-2 rounded-full text-[14px] leading-[22px] font-bold border whitespace-nowrap shrink-0 bg-white text-[#3a4744] border-[#e3e8e6] hover:bg-[#f6f8f7] hover:border-[#cbd4d1] no-underline transition-colors"
              >
                {tab.name}
              </Link>
            ) : (
              <span
                key={tab.name}
                className="inline-flex items-center px-4.5 py-2 rounded-full text-[14px] leading-[22px] font-bold border whitespace-nowrap shrink-0 bg-[#0B7C84] text-white border-[#0B7C84]"
              >
                {tab.name}
              </span>
            )
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              to="#"
              className="flex gap-4 no-underline group border-b border-[#e7eae7] pb-3"
            >
              {/* Thumbnail — Image ya Gray Placeholder */}
              <div className="w-[90px] h-[90px] shrink-0 bg-[#eef2f0] rounded-md overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 ">
                <p className="text-[11px] leading-[18px] font-bold tracking-[0.66px] text-[#066068] uppercase mb-1.5">
                  {post.category}
                </p>
                <h3 className="text-[#0f2027] saira-bold text-[17px] leading-[21px] group-hover:text-[#066068] tracking-[-0.17px] transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}