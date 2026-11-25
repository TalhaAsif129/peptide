import React from "react";
import { Key, Check } from "lucide-react";

export default function PeptideKeyTakeaways({
  title = "Key Takeaways",
  items = [],
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-sm font-sans">
      <div className="flex items-center gap-2.5 border-b border-emerald-100 bg-emerald-50/60 px-6 py-3.5">
        <Key className="h-5 w-5 text-emerald-600 shrink-0" />
        <span className="text-sm font-bold uppercase tracking-wider text-emerald-800">
          {title}
        </span>
      </div>
      <ul className="space-y-3.5 px-6 py-5">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-[0.9375rem] leading-[26px] text-[#4a4a4a]"
          >
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
            <div>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
