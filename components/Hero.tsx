"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  const { lang } = useLanguage();
  const isTh = lang === "th";

  return (
    <section id="hero" className="relative overflow-hidden pt-8 lg:py-20 bg-linear-to-b from-amber-50/50 via-rose-50/30 to-[#FFFDF9]">
      {/* Background colorful decorative glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-linear-to-tr from-rose-400/20 via-amber-300/20 to-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-400/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & Brand Story */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-rose-500/10 via-amber-500/10 to-rose-500/10 border border-rose-200/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-rose-700 shadow-sm">
              <i className="fa-solid fa-fire text-rose-500 animate-pulse"></i>
              <span>{isTh ? "ก๋วยเตี๋ยวต้มยำโบราณ" : "Authentic Thai Street Food Experience"}</span>
              <span className="text-rose-400">&bull;</span>
              <span className="font-bold text-zinc-700">{isTh ? "รสแซ่บถึงใจ" : "Bold & Soulful"}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-[1.12]">
              {isTh ? (
                <>
                  แซ่บ กลมกล่อม <br />
                  <span className="bg-linear-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    จัดจ้านถึงใจ
                  </span>{" "}
                  ต้มยำมะนาวสดแท้ <strong>100%</strong>
                </>
              ) : (
                <>
                  Fiery, Tangy &amp; <br />
                  <span className="bg-linear-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Unapologetically Soulful
                  </span>{" "}
                  Tom Yum Noodles
                </>
              )}
            </h1>

            {/* Subheading Information */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
              {isTh
                ? "ร้าน ป๋วยเตี๋ยวต้มยำ ร้านก๋วยเตี๋ยวต้มยำใกล้ไอคอนสยาม น้ำซุปกระดูกหมูและหัวไชเท้า ใช้มะนาวสดทุกชาม รสชาติกลมกล่อม เปรี้ยว เผ็ด หวาน เค็ม ครบเครื่องต้มยำโบราณแท้ มีข้าวแกงรสจัดจ้านให้เลือกไม่ซ้ำในแต่ละวัน มีของกินเล่นให้รับประทานควบคู่กับก๋วยเตี๋ยว เพิ่มความอร่อยจนถึงขีดสุด"
                : "Discover Pouy Tiew Tom Yum near ICONSIAM—where rich pork bone and daikon broth meets 100% freshly squeezed lime for the perfect 4-flavor harmony. Pair your bowl with bold daily rotating Thai meals and crispy snacks for an unforgettable feast."}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => onScrollTo("menu")}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-linear-to-r from-rose-600 via-red-500 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-rose-500/30 hover:scale-[1.02] active:scale-95 transition-all text-base group"
              >
                <i className="fa-solid fa-bowl-food text-amber-200"></i>
                <span>{isTh ? "ดูเมนูทั้งหมด" : "Explore Full Menu"}</span>
              </button>

              <button
                onClick={() => onScrollTo("branches")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 border-2 border-zinc-200 hover:border-rose-300 text-zinc-800 font-bold px-7 py-4 rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all text-base"
              >
                <i className="fa-solid fa-location-dot text-rose-500"></i>
                <span>{isTh ? "สาขาและเวลาเปิด" : "Locations & Hours"}</span>
              </button>
            </div>


          </div>

          {/* Right Column: Hero Visual Food Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              
              {/* Decorative aura */}
              <div className="absolute inset-4 rounded-full bg-linear-to-tr from-rose-500/20 via-amber-500/20 to-orange-400/20" />
              <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-white/60 to-white/20 backdrop-blur-xl border border-white/80 shadow-2xl shadow-rose-900/10 -rotate-2" />

              {/* Central Food Card */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden p-3 flex flex-col justify-between">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-inner group">
                  <Image
                    src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85"
                    alt="Royal Jumbo Prawn Tom Yum Noodle"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-rose-600/95 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {isTh ? "ชามซิกเนเจอร์" : "Signature Bowl"}
                    </span>
                    <span className="bg-amber-400 text-zinc-950 text-xs font-black px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <i className="fa-solid fa-star text-zinc-950 text-xs"></i> 4.9 (3,200+ Reviews)
                    </span>
                  </div>

                  {/* Information Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-yellow-400 font-extrabold text-xs uppercase tracking-wide">
                        {isTh ? "ชามยอดนิยมอันดับ 1" : "#1 Best Seller Bowl"}
                      </span>
                      <div className="flex text-rose-400 gap-1">
                        <i className="fa-solid fa-pepper-hot text-xs"></i>
                        <i className="fa-solid fa-pepper-hot text-xs"></i>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight leading-tight">
                      {isTh ? "ก๋วยเตี๋ยวต้มยำกุ้งแม่น้ำน้ำข้น ยักษ์ใหญ่" : "Royal Jumbo Prawn Tom Yum"}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-200 line-clamp-2 mt-1">
                      {isTh
                        ? "สูตรลับน้ำข้นกลมกล่อม มะนาวแป้นสดแท้ ไข่ต้มยางมะตูม และเกี๊ยวกรอบทอง"
                        : "Creamy roasted chili broth, fresh river prawns, soft-boiled duck egg, & crispy wontons."}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
                      <div>
                        <span className="text-xs text-zinc-300 block">{isTh ? "ราคา" : "Regular Price"}</span>
                        <div className="text-2xl font-black text-amber-300">฿189</div>
                      </div>
                      <span className="text-xs bg-white/20 text-white font-bold px-3 py-1.5 rounded-xl backdrop-blur-sm">
                        {isTh ? "ทานที่ร้าน & เดลิเวอรี" : "Dine-In & Delivery"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Ingredient Pill 1 */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-emerald-100 shadow-xl px-4 py-2 rounded-2xl flex items-center gap-2.5">
                <span className="text-2xl">🍋</span>
                <div>
                  <div className="text-xs font-extrabold text-emerald-800">
                    {isTh ? "มะนาวแป้นสดแท้ 100%" : "100% Real Lime Juice"}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-medium">
                    {isTh ? "คั้นสดชามต่อชาม" : "Never powdered"}
                  </div>
                </div>
              </div>

              {/* Floating Ingredient Pill 2 */}
              <div className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md border border-amber-100 shadow-xl px-4 py-2.5 rounded-2xl flex items-center gap-2.5">
                <span className="text-2xl">🥟</span>
                <div>
                  <div className="text-xs font-extrabold text-amber-800">
                    {isTh ? "เกี๊ยวกรอบทองคำ" : "Crispy Golden Wontons"}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-medium">
                    {isTh ? "ทอดใหม่กรอบสนั่น" : "Freshly fried daily"}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
