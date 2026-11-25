import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";

function createNumberedIcon(index) {
  return L.divIcon({
    className: "clinic-marker-badge",
    html: `<div style="
      width: 28px;
      height: 28px;
      background: #2563eb;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${index > 99 ? 10 : 12}px;
      font-weight: 700;
      border: 2px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      cursor: pointer;
    ">${index}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
}

function MapController({ clinics, isVisible, defaultCenter, defaultZoom }) {
  const map = useMap();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        map.invalidateSize();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, map]);

  useEffect(() => {
    if (!clinics || clinics.length === 0) {
      if (defaultCenter) {
        map.setView(defaultCenter, defaultZoom || 7);
      }
      return;
    }

    const validCoords = clinics
      .filter((c) => c.latitude && c.longitude)
      .map((c) => [Number(c.latitude), Number(c.longitude)]);

    if (validCoords.length > 1) {
      const bounds = L.latLngBounds(validCoords);
      map.fitBounds(bounds, { padding: [35, 35], maxZoom: 12 });
    } else if (validCoords.length === 1) {
      map.setView(validCoords[0], 12);
    }
  }, [clinics, map, defaultCenter, defaultZoom]);

  return null;
}

export default function ClinicMap({
  clinics = [],
  center = [32.806671, -86.79113],
  zoom = 7,
  isVisible = true,
  startIndexOffset = 0,
}) {
  if (!isVisible) return null;

  const validClinics = clinics.filter((c) => c.latitude && c.longitude);

  return (
    <div className="h-[300px] w-full rounded-[5px] border border-[#e5e7eb] bg-[#F7F8F9] overflow-hidden mb-6 relative z-0">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController
          clinics={validClinics}
          isVisible={isVisible}
          defaultCenter={center}
          defaultZoom={zoom}
        />

        {validClinics.map((clinic, idx) => {
          const displayIndex = startIndexOffset + idx + 1;
          const rating = Number(clinic.google_rating) || 5;

          return (
            <Marker
              key={clinic.id || clinic.slug || idx}
              position={[Number(clinic.latitude), Number(clinic.longitude)]}
              icon={createNumberedIcon(displayIndex)}
            >
              {/* Hover Tooltip */}
              <Tooltip direction="top" offset={[0, -14]} opacity={1}>
                <div className="p-1 min-w-[160px] max-w-[240px]">
                  <p className="font-semibold text-xs text-[#111827] line-clamp-2">
                    {clinic.name}
                  </p>
                  <p className="text-[11px] text-[#6b7280]">
                    {clinic.city}, {clinic.state}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-[#f59e0b]">
                    <span>★ {rating.toFixed(1)}</span>
                    {clinic.google_review_count && (
                      <span className="text-[#6b7280]">
                        ({clinic.google_review_count})
                      </span>
                    )}
                  </div>
                </div>
              </Tooltip>

              {/* Click Popup */}
              <Popup>
                <div className="p-1">
                  <Link
                    to={`/clinic/${clinic.slug}`}
                    className="font-semibold text-sm text-[#2563eb] hover:underline"
                  >
                    {clinic.name}
                  </Link>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    {clinic.city}, {clinic.state}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
