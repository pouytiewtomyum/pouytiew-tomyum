"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center bg-zinc-100 p-1 rounded-full border border-zinc-200/80 shadow-inner">
      <button
        type="button"
        onClick={() => setLang("th")}
        className={`px-2.5 py-1 text-xs font-black rounded-full transition-all duration-200 flex items-center gap-1.5 ${
          lang === "th"
            ? "bg-rose-600 text-white shadow-sm scale-105"
            : "text-zinc-600 hover:text-zinc-900"
        }`}
        aria-label="Switch to Thai"
      >
        <span>TH</span>
      </button>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 text-xs font-black rounded-full transition-all duration-200 flex items-center gap-1.5 ${
          lang === "en"
            ? "bg-rose-600 text-white shadow-sm scale-105"
            : "text-zinc-600 hover:text-zinc-900"
        }`}
        aria-label="Switch to English"
      >
        <span>EN</span>
      </button>
    </div>
  );
}
