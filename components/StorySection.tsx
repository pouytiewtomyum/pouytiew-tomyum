"use client";

import React from "react";
import Image from "next/image";
import { SparklesIcon } from "./Icons";

export function StorySection() {
  const pillars = [
    {
      step: "01",
      title: "12-Hour Simmered Broth",
      titleTh: "น้ำซุปกระดูกเคี่ยวยาวนาน 12 ชม.",
      desc: "Simmered with pork marrow bones and roasted river prawn heads to extract deep natural collagen, savory sweetness, and golden prawn oil.",
      icon: "🍲",
      color: "from-rose-500 to-red-600",
    },
    {
      step: "02",
      title: "House-Smoked Chili Jam",
      titleTh: "น้ำพริกเผาสูตรโบราณ เคี่ยวเตาถ่าน",
      desc: "Smoked dried chilies, shallots, and garlic slow-caramelized in palm sugar and tamarind. Smoky, deeply layered, and richly aromatic.",
      icon: "🌶️",
      color: "from-amber-500 to-orange-600",
    },
    {
      step: "03",
      title: "100% Fresh-Squeezed Limes",
      titleTh: "มะนาวแป้นสดแท้ คั้นสดชามต่อชาม",
      desc: "Zero artificial lime powders or fake acidity. Only hand-picked aromatic Thai limes juiced right into your bowl for pure, crisp vibrancy.",
      icon: "🍋",
      color: "from-emerald-500 to-teal-600",
    },
    {
      step: "04",
      title: "Daily Roasted Golden Peanuts",
      titleTh: "ถั่วลิสงคั่วใหม่ กรุบกรอบหอมฟุ้ง",
      desc: "Locally sourced peanuts toasted golden every morning and crushed coarsely for an unforgettable crunch and roasty fragrance.",
      icon: "🥜",
      color: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FFF9F2] relative overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <SparklesIcon className="w-4 h-4 text-amber-600" />
            <span>THE SECRET TO ADDICTION &bull; หัวใจของความอร่อย</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            The 4 Pillars of <br />
            <span className="bg-linear-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Authentic Tom Yum Alchemy
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            ไม่ใช่แค่ก๋วยเตี๋ยวต้มยำธรรมดา แต่คือศิลปะแห่งการปรุงรสชาติ 3 รส เปรี้ยว เค็ม เผ็ดหวาน 
            ที่ผสานวัตถุดิบสดแท้แบบโบราณให้ระเบิดรสสัมผัสในทุกคำ
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/60 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 bg-amber-50 rounded-2xl group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </span>
                  <span className="text-3xl font-black text-amber-200/90 font-mono">
                    {pillar.step}
                  </span>
                </div>
                <h3 className="text-xl font-black text-zinc-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-rose-600 mt-1">
                  {pillar.titleTh}
                </p>
                <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-zinc-400 group-hover:text-rose-500 transition-colors">
                <span>Handmade Daily</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sensory Chef Highlight Banner */}
        <div className="mt-14 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-rose-500/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-rose-500 text-white text-xs font-black uppercase px-3 py-1 rounded-md">
                Chef&apos;s Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                &quot;We refuse shortcuts. No powdered souring, no pre-packaged pastes.&quot;
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                ทุกเช้าตั้งแต่ตี 5 กลิ่นตะไคร้ ใบมะกรูด และหม้อต้มซุปกระดูกหมูขนาด 100 ลิตรจะเริ่มส่งกลิ่นหอม
                เราเคี่ยวน้ำพริกเผาเองด้วยเตาถ่านเพื่อให้ได้กลิ่นสโมคกี้ลึกซึ้งที่หาที่ไหนไม่ได้
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80"
                    alt="Head Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-white">Master Chef Somchai</div>
                  <div className="text-xs text-amber-400">Founder &amp; Head Broth Alchemist</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-4xl font-black text-amber-400">100%</span>
              <span className="text-sm font-bold text-white mt-1">Satisfaction Guarantee</span>
              <p className="text-xs text-zinc-400 mt-2">
                หากชามไหนรสชาติไม่ถึงเครื่อง แจ้งเปลี่ยนชามใหม่ได้ทันทีโดยไม่มีค่าใช้จ่าย!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
