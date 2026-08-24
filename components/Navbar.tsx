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
          ? "border-b border-white/10 bg-[#00102B] shadow-md"
          : "border-b border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="relative flex h-14 w-[165px] shrink-0 items-center overflow-hidden sm:w-[190px]"
          aria-label="NexGen Data Lab home"
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
              alt="NexGen Data Lab"
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
              alt="NexGen Data Lab"
              width={220}
              height={100}
              priority
              className="w-[165px] max-w-none object-contain sm:w-[185px]"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden items-center gap-8 text-sm font-medium transition-colors duration-500 lg:flex ${
            pastHero ? "text-white" : "text-slate-800"
          }`}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[#FF6500]">{item.label}</Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/join"
          className="hidden rounded-full bg-[#FF6500] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E85B00] hover:shadow-lg lg:inline-flex"
        >
          Join Us
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
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-[#FF6500]/10 hover:text-[#FF6500]">{item.label}</Link>
          ))}
          <Link
            href="/join"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex justify-center rounded-full bg-[#FF6500] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E85B00]"
          >
            Join Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
