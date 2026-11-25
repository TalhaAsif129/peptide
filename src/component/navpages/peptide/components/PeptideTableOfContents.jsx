import React, { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";

export default function PeptideTableOfContents({ toc = [] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  if (!toc || toc.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-[5px] bg-white p-5 shadow-[0_1px_3px_0_rgba(160,160,160,0.45),0_0_3px_0_rgba(0,0,0,0.08)] border border-[#e5e7eb]"
    >
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-[#6b7280]" />
        <h3 className="font-saira text-xs font-bold uppercase tracking-[-0.12px] text-[#6b7280]">
          On this page
        </h3>
      </div>
      <ul className="space-y-0.5">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`block text-[13px] leading-relaxed transition-all py-0.5 ${
                  item.level === 3 ? "pl-5" : "pl-3"
                } ${
                  isActive
                    ? "font-semibold text-[#0d646c] border-l-2 border-[#0b7c84] hover:text-[#1c2522] -ml-[1px]"
                    : "text-[#6b7280] hover:text-[#1c2522]"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
