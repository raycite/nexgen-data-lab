"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const photographs = [
  {
    src: "/gdiw-2025-facilitation.jpg",
    alt: "NextGen Data Lab facilitators presenting computer vision applications at Ghana Digital and Innovation Week 2025",
    label: "Applied AI facilitation",
  },
  {
    src: "/gdiw-2025-speaker.jpg",
    alt: "A facilitator speaking during the NextGen Data Lab session at Ghana Digital and Innovation Week 2025",
    label: "Ideas shared in practice",
  },
  {
    src: "/gdiw-2025-audience.jpg",
    alt: "Participants attending the NextGen Data Lab facilitation session at Ghana Digital and Innovation Week 2025",
    label: "A community ready to learn",
  },
];

const slideCount = photographs.length + 1;

export default function HeroFieldCarousel({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % slideCount);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused]);

  const activeLabel = active === 0 ? "Africa data network" : photographs[active - 1].label;

  return (
    <div
      className="absolute inset-0 z-0 h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="NextGen Data Lab in Africa and at GDIW 2025"
    >
      <div
        className={`absolute inset-0 transition-[opacity,transform] duration-1000 ease-out ${
          active === 0 ? "scale-100 opacity-100" : "pointer-events-none scale-[1.025] opacity-0"
        }`}
        aria-hidden={active !== 0}
      >
        {children}
      </div>

      {photographs.map((photo, index) => {
        const slideIndex = index + 1;

        return (
          <div
            key={photo.src}
            className={`hero-field-slide absolute inset-0 overflow-hidden transition-[opacity,transform] duration-1000 ease-out ${
              active === slideIndex ? "scale-100 opacity-100" : "pointer-events-none scale-[1.035] opacity-0"
            }`}
            aria-hidden={active !== slideIndex}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" loading="eager" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,.9)_0%,rgba(3,17,31,.68)_38%,rgba(3,17,31,.2)_78%,rgba(3,17,31,.4)_100%),linear-gradient(0deg,rgba(3,17,31,.46),transparent_55%)]" />
            <p className="absolute right-5 top-5 border border-white/20 bg-[#03111F]/55 px-3 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-md sm:right-8 sm:top-8 sm:text-[10px]">
              GDIW 2025 <span className="mx-1.5 text-[#D66135]">·</span> {photo.label}
            </p>
          </div>
        );
      })}

      <button type="button" onClick={() => setActive((current) => (current - 1 + slideCount) % slideCount)} className="absolute left-3 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#03111F]/45 text-2xl text-white backdrop-blur-md transition hover:border-white hover:bg-[#03111F]/75 sm:flex" aria-label="Show previous hero slide">‹</button>
      <button type="button" onClick={() => setActive((current) => (current + 1) % slideCount)} className="absolute right-3 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#03111F]/45 text-2xl text-white backdrop-blur-md transition hover:border-white hover:bg-[#03111F]/75 sm:flex" aria-label="Show next hero slide">›</button>

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 border border-white/15 bg-[#03111F]/70 px-3 py-2 backdrop-blur-md sm:bottom-6" role="tablist" aria-label="Choose hero visual">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`${index === 0 ? "Show animated Africa map" : `Show GDIW photograph ${index}`} (${index + 1} of ${slideCount})`}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-7 bg-[#D66135]" : "w-1.5 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">Showing {activeLabel}</span>
    </div>
  );
}
