"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MENU_ITEMS } from "../data/menuData";
import { useLanguage } from "../context/LanguageContext";

export function MenuSection() {
  const { lang } = useLanguage();
  const isTh = lang === "th";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: isTh ? "ทั้งหมด" : "All Items" },
    { id: "noodle", label: isTh ? "ก๋วยเตี๋ยว" : "Noodle" },
    { id: "rice", label: isTh ? "ข้าว" : "Rice" },
    { id: "appetizers", label: isTh ? "ของทานเล่น" : "Appetizers" },
    { id: "add-ons", label: isTh ? "เพิ่มเติม" : "Add-ons" },
    { id: "drinks", label: isTh ? "เครื่องดื่ม" : "Drinks" },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.nameTh.includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.descriptionTh?.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full mb-3">
              <i className="fa-solid fa-fire text-rose-600"></i>
              <span>{isTh ? "คัดสรรวัตถุดิบ • ปรุงสดใหม่ชามต่อชาม" : "CRAFTED WITH SOUL • FULL FLAVOR"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
              {isTh ? (
                <>
                  เมนูเด็ดรสแซ่บ <br />
                  <span className="bg-linear-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                    สูตรโบราณต้นตำรับ
                  </span>
                </>
              ) : (
                <>
                  Our Signature <br />
                  <span className="bg-linear-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                    Full Flavor Menu
                  </span>
                </>
              )}
            </h2>
            <p className="mt-2 text-zinc-600 text-sm sm:text-base max-w-xl">
              {isTh
                ? "สูตรต้มยำโบราณแท้รสเด็ด ของทานเล่นกรอบใหม่ และเครื่องดื่มสดชื่น"
                : "Legendary heritage Tom Yum recipes,crispy golden snacks, and refresh drinks."}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isTh ? "ค้นหาเมนู หรือวัตถุดิบ..." : "Search dishes or ingredients..."}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-sm font-medium transition-all"
            />
            <i className="fa-solid fa-magnifying-glass text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"></i>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 bg-zinc-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark text-[10px]"></i>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2.5 flex-wrap pb-4 mb-6 scrollbar-none no-scrollbar">
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
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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
                        src={item?.image || "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"}
                        alt={isTh ? item.nameTh : item.name}
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
                      </div>

                      {/* Spice Level Indicator on Image
                      {item.spiceLevel > 0 && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full shadow-md flex items-center gap-0.5">
                          {Array.from({ length: item.spiceLevel }).map((_, i) => (
                            <ChiliIcon key={i} className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                          ))}
                        </div>
                      )} */}
                    </div>

                    {/* Content Section */}
                    <div className="px-6 py-2 md:py-4">
                      <h3 className="text-lg font-black text-zinc-900 leading-snug group-hover:text-rose-600 transition-colors">
                        {isTh ? item.nameTh : item.name}
                      </h3>
                      <p className="hidden md:block text-xs text-zinc-600 mt-2.5 leading-relaxed line-clamp-2">
                        {isTh ? item.descriptionTh : item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Price & Details */}
                  <div className="px-6 py-2 md:py-4 pt-0 mt-2 border-t border-zinc-100 flex items-center justify-end">
                    <div>
                      <span className="text-[11px] font-semibold text-zinc-400 uppercase block">
                        {isTh ? "ราคา" : "Price"}
                      </span>
                      <span className="text-2xl font-black text-rose-600">
                        ฿{item.price}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
}
