import React, { useState, useEffect } from "react";

export default function PeptideReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress =
        scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
      setVisible(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="reading-progress fixed top-0 left-0 h-[3px] bg-[#0b7c84] z-[100] pointer-events-none"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
        transition: "width 0.1s linear, opacity 0.3s ease",
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
