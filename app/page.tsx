"use client";

import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MenuSection } from "../components/MenuSection";
import { StorySection } from "../components/StorySection";
import { Testimonials } from "../components/Testimonials";
import { BranchLocation } from "../components/BranchLocation";
import { Footer } from "../components/Footer";

export default function Home() {
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-zinc-900 selection:bg-rose-500 selection:text-white">
      {/* Navigation Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Quick Intro / About Us Strip */}
        <section id="about" className="py-12 bg-white border-y border-rose-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-4xl p-3 bg-rose-50 rounded-2xl">🍜</span>
                <div>
                  <h4 className="font-black text-base text-zinc-900">Authentic Heritage</h4>
                  <p className="text-xs text-zinc-500">ต้นตำรับต้มยำโบราณแท้รสเข้มข้น</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-4xl p-3 bg-amber-50 rounded-2xl">🍋</span>
                <div>
                  <h4 className="font-black text-base text-zinc-900">Zero Artificial Souring</h4>
                  <p className="text-xs text-zinc-500">มะนาวแป้นสดแท้ 100% คั้นสดทุกชาม</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-4xl p-3 bg-emerald-50 rounded-2xl">🛵</span>
                <div>
                  <h4 className="font-black text-base text-zinc-900">Fast Express Delivery</h4>
                  <p className="text-xs text-zinc-500">ส่งร้อนถึงบ้านแยกเส้นแยกน้ำซุป</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Informational Menu Showcase */}
        <MenuSection />

        {/* The Secret Story & Quality Craftsmanship */}
        <StorySection />

        {/* Foodie Reviews & Social Gallery */}
        <Testimonials />

        {/* Branches, Hours, Delivery Apps & FAQs */}
        <BranchLocation />
      </main>

      {/* Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
