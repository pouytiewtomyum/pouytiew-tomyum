"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MENU_ITEMS } from "../data/menuData";
import { ChiliIcon, FlameIcon, SearchIcon } from "./Icons";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Items", labelTh: "ทั้งหมด" },
    { id: "noodle", label: "Noodle", labelTh: "ก๋วยเตี๋ยว" },
    { id: "rice", label: "Rice", labelTh: "ข้าว" },
    { id: "appetizers", label: "Crispy Bites", labelTh: "ของทานเล่น" },
    { id: "drinks", label: "Drinks & Teas", labelTh: "เครื่องดื่ม" },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.nameTh.includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.descriptionTh.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full mb-3">
              <FlameIcon className="w-4 h-4 text-rose-600" />
              <span>CRAFTED WITH SOUL &bull; คัดสรรวัตถุดิบชั้นเลิศ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
              Our Signature <br />
              <span className="bg-linear-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                Full Flavor Menu
              </span>
            </h2>
            <p className="mt-2 text-zinc-600 text-sm sm:text-base max-w-xl">
              สูตรต้มยำโบราณแท้รสเด็ด ซีฟู้ดสดใหม่ส่งตรงจากทะเล ของทานเล่นทอดกรอบใหม่ และชาไทยพรีเมียม
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-sm font-medium transition-all"
            />
            <SearchIcon className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 bg-zinc-200 rounded-full w-4 h-4 flex items-center justify-center"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-2xl font-extrabold text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/15 scale-[1.02]"
                    : "bg-zinc-100/90 hover:bg-zinc-200/80 text-zinc-700"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-xs ${isActive ? "text-amber-300" : "text-zinc-400"}`}>
                  ({cat.labelTh})
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
            <p className="text-4xl mb-3">🔍</p>
            <h3 className="text-lg font-bold text-zinc-800">No dishes match &quot;{searchQuery}&quot;</h3>
            <p className="text-sm text-zinc-500 mt-1">Try another keyword or select a category above.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-rose-500 text-white text-xs font-bold rounded-xl"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl border border-zinc-200/80 hover:border-rose-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Dish Image */}
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-106 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.badge && (
                          <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-full shadow-md ${
                            item.badge === "Bestseller"
                              ? "bg-rose-600 text-white"
                              : item.badge === "Chef Choice"
                              ? "bg-amber-500 text-zinc-950"
                              : "bg-zinc-900 text-white"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                        {item.calories && (
                          <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full">
                            {item.calories}
                          </span>
                        )}
                      </div>

                      {/* Spice Level Indicator on Image */}
                      {item.spiceLevel > 0 && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full shadow-md flex items-center gap-0.5">
                          {Array.from({ length: item.spiceLevel }).map((_, i) => (
                            <ChiliIcon key={i} className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                          ))}
                        </div>
                      )}

                      {/* Thai Name Overlay at Bottom of Image */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="text-xs font-bold text-amber-300 drop-shadow-md">
                          {item.nameTh}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-lg font-black text-zinc-900 leading-snug group-hover:text-rose-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-1 italic">
                        {item.descriptionTh}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Price & Details */}
                  <div className="p-6 pt-0 mt-2 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase block">Price</span>
                      <span className="text-2xl font-black text-rose-600">
                        ฿{item.price}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-extrabold px-3 py-1.5 rounded-xl">
                        <span>สดใหม่ทุกชาม</span>
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Noodle Customization Guide Box (Informational) */}
        <div className="mt-16 bg-linear-to-r from-amber-50 via-rose-50 to-orange-50 border border-rose-100 rounded-3xl p-8 sm:p-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-black uppercase text-rose-600 tracking-wider">
              Noodle Customization Guide &bull; คู่มือเลือกสั่งก๋วยเตี๋ยว
            </span>
            <h3 className="text-2xl font-black text-zinc-900">
              Customize Your Bowl When Ordering In Store or Delivery
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              ทุกเมนูก๋วยเตี๋ยวสามารถเลือกเส้นได้ตามใจชอบ: <strong>เส้นเล็ก (เหนียวนุ่ม)</strong>, <strong>เส้นใหญ่ (หนานุ่ม)</strong>, <strong>บะหมี่ไข่สด</strong>, <strong>วุ้นเส้น</strong>, หรือ <strong>เส้นมาม่า</strong> และเลือกระดับความเผ็ดได้ตั้งแต่ระดับ 0 (เด็กทานได้) ถึงระดับ 3 (เผ็ดพ่นไฟ!)
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <span className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-zinc-700 shadow-sm border border-zinc-200">
                🍜 เส้นเล็ก / เส้นใหญ่ / บะหมี่ / วุ้นเส้น / มาม่า
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-zinc-700 shadow-sm border border-zinc-200">
                🌶️ ระดับความเผ็ด 0 - 3
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-zinc-700 shadow-sm border border-zinc-200">
                🥟 เพิ่มเกี๊ยวกรอบ / ไข่ยางมะตูม / กุ้งแม่น้ำ
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
