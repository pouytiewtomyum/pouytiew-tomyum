"use client";

import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MenuSection } from "../components/MenuSection";
import { BranchLocation } from "../components/BranchLocation";
import { Footer } from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";


function PageContent() {
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-zinc-900 selection:bg-rose-500 selection:text-white">
      {/* Navigation Header with Language Toggle */}
      <Header onScrollTo={handleScrollTo} />

      {/* Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Full Informational Menu Showcase */}
        <MenuSection />

        {/* Branches, Hours, Delivery Apps & FAQs */}
        <BranchLocation />
      </main>

      {/* Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
