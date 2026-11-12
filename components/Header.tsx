"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export function Header({ onScrollTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();

  const isTh = lang === "th";

  const navItems = [
    { label: isTh ? "เกี่ยวกับเรา" : "About", id: "hero" },
    { label: isTh ? "เมนู" : "Menu", id: "menu" },
    { label: isTh ? "สถานที่และเวลาเปิด" : "Locations & Hours", id: "location" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">

      {/* Main Nav */}
      <div className="backdrop-blur-md bg-white/95 border-b border-rose-100/60 shadow-[0_4px_20px_-4px_rgba(225,29,72,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          
          <button
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-3 group text-left transition-transform active:scale-95"
          >
            <div className="min-w-max w-12 h-12 rounded-2xl bg-linear-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/30 text-white transform group-hover:rotate-6 transition-all duration-300">
              <i className="fa-solid fa-bowl-food text-2xl"></i>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg xs:text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 group-hover:text-rose-600 transition-colors">
                  {isTh ? "ป๋วย" : "POUY"}
                </span>
                <span className="bg-rose-500 text-white xs:mt-1 text-base xs:text-lg sm:text-xl font-extrabold py-1 px-[] rounded-md uppercase tracking-wider">
                  {isTh ? "เตี๋ยวต้มยำ" : "Tiew Tom Yum"}
                </span>
              </div>
              <p className="text-[10px] xs:text-xs font-semibold text-rose-600/90 tracking-wide">
                {isTh ? "ป๋วยเตี๋ยวต้มยำโบราณ • รสแซ่บแท้" : "Authentic Tom Yum Noodle Bar"}
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            <nav className="hidden md:flex items-center gap-2 lg:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-3.5 py-2 rounded-xl text-sm font-semibold text-zinc-600 hover:text-rose-600 hover:bg-rose-50/60 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              </nav>
              <div className="hidden md:flex">
                <LanguageToggle />
              </div>
            </div>

          {/* Right Action Callouts: Language Switcher + Branch Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 md:hidden">
            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <i className="fa-solid fa-xmark text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
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
                <span>{item.label}</span>
                <span className="text-zinc-400">&rarr;</span>
              </button>
            ))}
            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500">{isTh ? "เปลี่ยนภาษา:" : "Language:"}</span>
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
