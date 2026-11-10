import React from 'react';

export default function SyringeVisualIndicator({ totalUnits, doseUnits }) {
  const safeDose = isNaN(doseUnits) || doseUnits === null ? 0 : doseUnits;
  const percentage = totalUnits > 0 ? (Math.min(Math.max(safeDose, 0), totalUnits) / totalUnits) * 100 : 0;
  const step = totalUnits <= 30 ? 5 : 10;
  const markers = [];

  for (let t = 0; t <= totalUnits; t++) {
    const isMajor = t % step === 0;
    markers.push({
      pos: (t / totalUnits) * 100,
      label: isMajor ? t : undefined,
    });
  }

  return (
    <div className="w-full overflow-hidden overflow-x-auto">
      <div className="min-w-[300px] px-1 pb-1">
        <div className="relative h-7 rounded-md border border-[var(--border-color)] bg-white overflow-hidden">
          {percentage > 0 && (
            <div
              className="absolute inset-y-0 left-0 rounded-l-md bg-[var(--accent)] transition-all duration-300"
              style={{
                width: `${percentage}%`,
                opacity: 0.85,
              }}
            />
          )}
          {percentage > 0 && percentage <= 100 && (
            <div
              className="absolute top-0 h-full w-0.5 bg-[var(--accent)] transition-all duration-300 z-10"
              style={{
                left: `${percentage}%`,
              }}
            />
          )}
        </div>
        <div className="relative mt-0 h-9">
          {markers.map((marker, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center"
              style={{
                left: `${marker.pos}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className={`bg-[var(--ink)] ${
                  marker.label !== undefined ? "h-2.5 w-[1.5px]" : "h-1.5 w-px"
                }`}
              />
              {marker.label !== undefined && (
                <span
                  className="mt-0.5 text-[10px] font-medium text-[var(--muted)]"
                >
                  {marker.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
