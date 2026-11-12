"use client";

import React, { useState } from "react";
import { BowlIcon, FlameIcon, MapPinIcon, CloseIcon } from "./Icons";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export function Header({ onScrollTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", labelTh: "เกี่ยวกับเรา", id: "about" },
    { label: "Menu", labelTh: "เมนูเด็ด", id: "menu" },
    { label: "Our Story", labelTh: "สูตรลับต้มยำ", id: "story" },
    { label: "Locations & Hours", labelTh: "สาขาและเวลาเปิด", id: "branches" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Info Banner */}
      <div className="bg-linear-to-r from-rose-600 via-red-600 to-amber-600 px-4 py-2 text-center text-xs sm:text-sm font-medium text-white shadow-sm flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase">
          <FlameIcon className="w-3.5 h-3.5 text-yellow-300 animate-pulse" /> Welcome
        </span>
        <span>
          Authentic Thai Tom Yum Noodle Bar &bull; Open Everyday 10:30 AM – 11:00 PM &bull; Siam Square &amp; Thonglor
        </span>
      </div>

      {/* Main Nav */}
      <div className="backdrop-blur-md bg-white/95 border-b border-rose-100/60 shadow-[0_4px_20px_-4px_rgba(225,29,72,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-3 group text-left transition-transform active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/30 text-white transform group-hover:rotate-6 transition-all duration-300">
              <BowlIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 group-hover:text-rose-600 transition-colors">
                  POUY TIEW
                </span>
                <span className="bg-rose-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                  Tom Yum
                </span>
              </div>
              <p className="text-xs font-semibold text-rose-600/90 tracking-wide">
                ป๋วยเตี๋ยวต้มยำโบราณ &bull; Noodle Bar
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-zinc-600 hover:text-rose-600 hover:bg-rose-50/60 transition-all duration-200"
              >
                <span>{item.label}</span>
                <span className="text-[11px] opacity-70 font-normal ml-1">({item.labelTh})</span>
              </button>
            ))}
          </nav>

          {/* Action Callout */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onScrollTo("branches")}
              className="flex items-center gap-1.5 bg-linear-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black shadow-md shadow-rose-500/20 hover:shadow-rose-500/40 active:scale-95 transition-all"
            >
              <MapPinIcon className="w-4 h-4 text-yellow-200" />
              <span>Find Branches</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-rose-100 px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base text-zinc-800 hover:bg-rose-50 transition-colors"
              >
                <span>{item.label} ({item.labelTh})</span>
                <span className="text-zinc-400">&rarr;</span>
              </button>
            ))}
            <div className="pt-2 border-t border-zinc-100">
              <button
                onClick={() => handleNavClick("branches")}
                className="w-full bg-linear-to-r from-rose-600 to-amber-500 text-white py-3 rounded-xl font-bold text-center shadow-md"
              >
                📍 View Locations &amp; Delivery Info
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
