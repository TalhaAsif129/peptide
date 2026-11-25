import { Link } from "react-router-dom";

export default function CityNearbySection({
  heading,
  links = [],
  stateSlug = "alabama",
}) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-saira text-lg font-semibold text-[#333333] tracking-[-0.18px]">
        {heading || "Nearby cities"}
      </h2>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.slug}
            to={`/clinics/${stateSlug}/${link.slug}`}
            className="text-[#1F6CD6] hover:underline text-[16px] leading-[26px] font-normal"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
