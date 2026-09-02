"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const moments = [
  {
    src: "/gdiw-2025-facilitation.jpg",
    alt: "NextGen Data Lab facilitators presenting computer vision applications at Ghana Digital and Innovation Week 2025",
  },
  {
    src: "/gdiw-2025-speaker.jpg",
    alt: "A facilitator speaking during the NextGen Data Lab session at Ghana Digital and Innovation Week 2025",
  },
  {
    src: "/gdiw-2025-audience.jpg",
    alt: "Participants attending the NextGen Data Lab facilitation session at Ghana Digital and Innovation Week 2025",
  },
];

export default function HeroFieldCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % moments.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative z-20 mt-3 w-full overflow-hidden border border-white/25 bg-[#071A2D] shadow-[7px_7px_0_rgba(214,97,53,.7)] sm:absolute sm:bottom-5 sm:right-5 sm:mt-0 sm:w-[54%] lg:w-[49%]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="GDIW 2025 facilitation photographs"
    >
      <div className="relative aspect-[16/8.7] overflow-hidden">
        {moments.map((moment, index) => (
          <Image
            key={moment.src}
            src={moment.src}
            alt={moment.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 320px"
            className={`hero-field-slide object-cover transition-[opacity,transform] duration-1000 ease-out ${
              index === active ? "scale-100 opacity-100" : "scale-[1.035] opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03111F]/75 via-transparent to-transparent" />
        <p className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-[.18em] text-white sm:text-[10px]">
          From the field <span className="mx-1 text-[#D66135]">·</span> GDIW 2025
        </p>
      </div>

      <div className="flex h-8 items-center justify-center gap-2" role="tablist" aria-label="Select photograph">
        {moments.map((moment, index) => (
          <button
            key={moment.src}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show photograph ${index + 1} of ${moments.length}`}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-[#D66135]" : "w-1.5 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
