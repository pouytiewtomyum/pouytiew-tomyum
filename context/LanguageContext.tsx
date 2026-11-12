"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "th" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("pouytiew_lang") as Language;
      if (saved === "th" || saved === "en") {
        return saved;
      }
    } catch {
      // localStorage unavailable or disabled
    }
    return "th";
  });

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("pouytiew_lang", newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    changeLanguage(lang === "th" ? "en" : "th");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
