"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Learn", href: "/programs" },
  { label: "Data Hub", href: "/datasets" },
  { label: "Projects", href: "/projects" },
  { label: "Community", href: "/#community" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      setPastHero(heroBottom <= 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        pastHero
          ? "border-b border-white/10 bg-[#03111F]/95 shadow-[0_12px_40px_rgba(3,17,31,.18)] backdrop-blur-xl"
          : "border-b border-[#071A2D]/10 bg-[#FFFDF8]/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="relative flex h-14 w-[165px] shrink-0 items-center overflow-hidden sm:w-[190px]"
          aria-label="NextGen Data Lab home"
        >
          {/* Light Logo */}
          <div
            className={`absolute left-0 top-1/2 flex h-14 w-[165px] -translate-y-1/2 items-center overflow-hidden transition-all duration-500 sm:w-[185px] ${
              pastHero
                ? "pointer-events-none scale-95 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            <Image
              src="/nexgen-logo-light-v2.png"
              alt="NextGen Data Lab"
              width={220}
              height={100}
              priority
              className="w-[165px] max-w-none object-contain sm:w-[185px]"
            />
          </div>

          {/* Dark Logo */}
          <div
            className={`absolute left-0 top-1/2 flex h-14 w-[165px] -translate-y-1/2 items-center overflow-hidden transition-all duration-500 sm:w-[185px] ${
              pastHero
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <Image
              src="/nexgen-logo-dark-v2.png"
              alt="NextGen Data Lab"
              width={220}
              height={100}
              priority
              className="w-[165px] max-w-none object-contain sm:w-[185px]"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden items-center gap-1 text-[13px] font-semibold transition-colors duration-500 lg:flex ${
            pastHero ? "text-white" : "text-slate-800"
          }`}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="relative px-3 py-2 transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#D66135] after:transition-transform hover:text-[#D66135] hover:after:scale-x-100">{item.label}</Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/join"
          className="group hidden items-center gap-3 border border-[#071A2D] bg-[#D66135] px-5 py-2.5 text-sm font-bold text-white shadow-[4px_4px_0_#071A2D] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none lg:inline-flex"
        >
          Join Us <span className="transition-transform group-hover:translate-x-1">↗</span>
        </Link>

        <button
          type="button"
          className={`inline-flex size-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            pastHero
              ? "text-white hover:bg-white/10"
              : "text-slate-900 hover:bg-slate-100"
          }`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`overflow-hidden border-t transition-[max-height,opacity] duration-300 lg:hidden ${
          pastHero
            ? "border-white/10 bg-[#00102B] text-white"
            : "border-slate-200 bg-white text-slate-900"
        } ${menuOpen ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 border-t-0 opacity-0"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-[#D66135]/10 hover:text-[#D66135]">{item.label}</Link>
          ))}
          <Link
            href="/join"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex justify-center rounded-full bg-[#D66135] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B94F29]"
          >
            Join Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
