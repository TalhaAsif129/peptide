import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PeptideRelatedBlogs({ peptideName, blogs = [] }) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="mt-12 border-t border-[#e5e7eb] pt-10 font-sans">
      <div>
        <h2 className="font-saira text-sm font-semibold uppercase tracking-[-0.14px] text-[#6b7280]">
          Continue Reading
        </h2>
        <p className="mt-1 text-sm text-[#6b7280]">
          Articles about {peptideName} and related topics
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <Link
            key={blog.url || idx}
            to={blog.url || "/blog"}
            className="group blog-card-link flex flex-col overflow-hidden rounded bg-white border border-[#e5e7eb] shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden aspect-[16/10] bg-[#F7F8F9]">
              <img
                src={blog.img}
                alt={blog.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {blog.badge && (
                <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm bg-[#F7F8F9] text-[#333333] border border-[#FFF0BB]">
                  {blog.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h2 className="font-heading saira-bold font-bold leading-snug tracking-[-0.18px] text-[#333333] transition-colors group-hover:text-[#333333] text-lg line-clamp-2">
                {blog.title}
              </h2>
              {blog.description && (
                <p className="mt-2 line-clamp-2 leading-relaxed text-[#6b7280] text-sm">
                  {blog.description}
                </p>
              )}
              <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-[#6b7280]">
                {blog.date && <time>{blog.date}</time>}
                <span className="inline-flex items-center gap-1 font-medium text-[#1F6CD6] transition-colors group-hover:text-[#1a5bb5]">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
