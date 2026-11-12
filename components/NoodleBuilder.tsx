"use client";

import React, { useState } from "react";
import { NOODLE_OPTIONS, BROTH_OPTIONS, TOPPING_OPTIONS } from "../data/menuData";
import { SpiceLevel, CartItem } from "../types/menu";
import { SparklesIcon, CheckIcon, PlusIcon, ChiliIcon, BowlIcon } from "./Icons";

interface NoodleBuilderProps {
  onAddCustomBowl: (item: CartItem) => void;
}

export function NoodleBuilder({ onAddCustomBowl }: NoodleBuilderProps) {
  const [selectedNoodle, setSelectedNoodle] = useState(NOODLE_OPTIONS[0]);
  const [selectedBroth, setSelectedBroth] = useState(BROTH_OPTIONS[0]);
  const [selectedSpice, setSelectedSpice] = useState<SpiceLevel>(2);
  const [selectedToppings, setSelectedToppings] = useState<string[]>(["lava-egg", "wonton"]);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  const BASE_PRICE = 99;

  // Calculate total price
  const brothExtra = selectedBroth.extraPrice || 0;
  const toppingsPrice = selectedToppings.reduce((sum, topId) => {
    const topping = TOPPING_OPTIONS.find((t) => t.id === topId);
    return sum + (topping ? topping.price : 0);
  }, 0);
  const totalPrice = BASE_PRICE + brothExtra + toppingsPrice;

  const toggleTopping = (toppingId: string) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingId) ? prev.filter((id) => id !== toppingId) : [...prev, toppingId]
    );
  };

  const spiceLabels: { [key in SpiceLevel]: { label: string; labelTh: string; color: string; desc: string } } = {
    0: { label: "Mild Zing", labelTh: "เด็กทานได้", color: "text-emerald-500", desc: "No chili heat, fragrant herbal flavor" },
    1: { label: "Street Mild", labelTh: "เผ็ดเบาๆ", color: "text-amber-500", desc: "Gentle warmth with roasted garlic notes" },
    2: { label: "Thai Authentic", labelTh: "แซ่บจี๊ดถึงใจ", color: "text-orange-500", desc: "Signature kick, balanced lime & chili" },
  };

  const handleAddToCart = () => {
    const toppingNames = selectedToppings
      .map((id) => TOPPING_OPTIONS.find((t) => t.id === id)?.nameTh)
      .filter(Boolean)
      .join(", ");

    const customItem: CartItem = {
      id: `custom-bowl-${Date.now()}`,
      title: `DIY Bowl: ${selectedNoodle.name} + ${selectedBroth.name}`,
      titleTh: `ชามดีไอวาย: ${selectedNoodle.nameTh} (${selectedBroth.nameTh})`,
      price: totalPrice,
      quantity: 1,
      spiceLevel: selectedSpice,
      details: `ความเผ็ด: ${spiceLabels[selectedSpice].labelTh} | ท็อปปิ้ง: ${toppingNames || "ไม่มีท็อปปิ้งเสริม"}`,
    };

    onAddCustomBowl(customItem);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 2200);
  };

  return (
    <section id="builder" className="py-16 lg:py-24 bg-linear-to-b from-[#FFFDF9] via-rose-50/20 to-[#FFFDF9] border-y border-rose-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200 text-rose-700 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-3 shadow-sm">
              <SparklesIcon className="w-4 h-4 text-rose-600" />
            <span>INTERACTIVE NOODLE LAB &bull; สร้างสรรค์ชามโปรด</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            Build Your Perfect <br className="hidden sm:inline" />
            <span className="bg-linear-to-rrom-rose-600 to-amber-500 bg-clip-text text-transparent">
              Tom Yum Masterpiece
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            เลือกเส้น ซุป ระดับความเผ็ด และท็อปปิ้งพรีเมียมในแบบที่คุณรัก เราปรุงสดใหม่ชามต่อชามตามสเปกคุณ!
          </p>
        </div>

        {/* Builder Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Step-by-Step Customization */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Noodles */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-zinc-200/70">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-rose-500 text-white font-extrabold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-lg font-black text-zinc-900">
                    Choose Your Noodle Base <span className="text-xs font-semibold text-rose-600">(เลือกเส้น)</span>
                  </h3>
                </div>
                <span className="text-xs font-bold text-zinc-500">{NOODLE_OPTIONS.length} Options</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {NOODLE_OPTIONS.map((noodle) => {
                  const isSelected = selectedNoodle.id === noodle.id;
                  return (
                    <button
                      key={noodle.id}
                      onClick={() => setSelectedNoodle(noodle)}
                      className={`p-3.5 rounded-2xl text-left border-2 transition-all relative ${
                        isSelected
                          ? "border-rose-500 bg-rose-50/40 shadow-sm"
                          : "border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{noodle.icon}</span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center">
                            <CheckIcon className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <div className="font-extrabold text-sm text-zinc-900 mt-2">{noodle.name}</div>
                      <div className="text-xs font-semibold text-rose-600">{noodle.nameTh}</div>
                      <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-tight">{noodle.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Tom Yum Broth */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-zinc-200/70">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-lg font-black text-zinc-900">
                    Choose Broth Style <span className="text-xs font-semibold text-amber-600">(เลือกน้ำซุปต้มยำ)</span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BROTH_OPTIONS.map((broth) => {
                  const isSelected = selectedBroth.id === broth.id;
                  return (
                    <button
                      key={broth.id}
                      onClick={() => setSelectedBroth(broth)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? "border-amber-500 bg-amber-50/30 shadow-sm"
                          : "border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/50"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-extrabold text-sm text-zinc-900">{broth.name}</span>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center">
                              <CheckIcon className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-semibold text-amber-700">{broth.nameTh}</div>
                        <p className="text-xs text-zinc-500 mt-1.5 leading-snug">{broth.desc}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-500">Broth Extra</span>
                        <span className="font-bold text-zinc-800">
                          {broth.extraPrice === 0 ? "Included" : `+฿${broth.extraPrice}`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Spice Level */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-zinc-200/70">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-extrabold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-lg font-black text-zinc-900">
                    Adjust Spice Intensity <span className="text-xs font-semibold text-rose-600">(เลือกระดับความเผ็ด)</span>
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-rose-500">
                  {Array.from({ length: selectedSpice + 1 }).map((_, i) => (
                    <ChiliIcon key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {([0, 1, 2, 3] as SpiceLevel[]).map((level) => {
                  const isSelected = selectedSpice === level;
                  const info = spiceLabels[level];
                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedSpice(level)}
                      className={`p-3 rounded-2xl text-center border-2 transition-all ${
                        isSelected
                          ? "border-rose-600 bg-rose-50 shadow-sm"
                          : "border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <div className="flex justify-center gap-0.5 mb-1 text-rose-500">
                        {level === 0 ? (
                          <span className="text-xs font-bold text-zinc-400">Mild 0🌶️</span>
                        ) : (
                          Array.from({ length: level }).map((_, i) => (
                            <ChiliIcon key={i} className="w-3.5 h-3.5 fill-rose-500" />
                          ))
                        )}
                      </div>
                      <div className="font-extrabold text-xs text-zinc-900">{info.label}</div>
                      <div className="text-[11px] font-semibold text-rose-600 mt-0.5">{info.labelTh}</div>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-zinc-500 mt-3 text-center italic">
                {spiceLabels[selectedSpice].desc}
              </p>
            </div>

            {/* Step 4: Premium Extra Toppings */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-zinc-200/70">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-orange-500 text-white font-extrabold text-xs flex items-center justify-center">
                    4
                  </span>
                  <h3 className="text-lg font-black text-zinc-900">
                    Add Signature Toppings <span className="text-xs font-semibold text-orange-600">(เลือกท็อปปิ้งเสริม)</span>
                  </h3>
                </div>
                <span className="text-xs font-bold text-zinc-500">{selectedToppings.length} selected</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TOPPING_OPTIONS.map((top) => {
                  const isChecked = selectedToppings.includes(top.id);
                  return (
                    <button
                      key={top.id}
                      onClick={() => toggleTopping(top.id)}
                      className={`p-3 rounded-2xl text-left border-2 flex items-center justify-between transition-all ${
                        isChecked
                          ? "border-orange-500 bg-orange-50/40 shadow-sm"
                          : "border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-zinc-900">{top.name}</div>
                        <div className="text-xs font-medium text-orange-700">{top.nameTh}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-zinc-700 bg-white px-2 py-1 rounded-lg border border-zinc-200">
                          +฿{top.price}
                        </span>
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${
                          isChecked ? "bg-orange-500 text-white" : "border-2 border-zinc-300"
                        }`}>
                          {isChecked && <CheckIcon className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Live Bowl Summary & Order Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-linear-to-b from-zinc-900 to-zinc-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-800 relative overflow-hidden">
              
              {/* Decorative background glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Title */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-400">
                    Live Custom Preview
                  </span>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    <BowlIcon className="w-6 h-6 text-amber-400" />
                    <span>Your Custom Bowl</span>
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 block">Total</span>
                  <span className="text-3xl font-black text-amber-400">฿{totalPrice}</span>
                </div>
              </div>

              {/* Selected Attributes Overview */}
              <div className="space-y-4 mb-6">
                
                {/* Noodle */}
                <div className="flex items-center justify-between bg-zinc-800/60 p-3 rounded-2xl border border-zinc-700/60">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedNoodle.icon}</span>
                    <div>
                      <div className="text-xs text-zinc-400">Noodle Type</div>
                      <div className="font-bold text-sm text-white">{selectedNoodle.name}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-rose-400">{selectedNoodle.nameTh}</span>
                </div>

                {/* Broth */}
                <div className="flex items-center justify-between bg-zinc-800/60 p-3 rounded-2xl border border-zinc-700/60">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🍲</span>
                    <div>
                      <div className="text-xs text-zinc-400">Tom Yum Broth</div>
                      <div className="font-bold text-sm text-white">{selectedBroth.name}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400">{selectedBroth.nameTh}</span>
                </div>

                {/* Spice Meter */}
                <div className="bg-zinc-800/60 p-3.5 rounded-2xl border border-zinc-700/60">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-zinc-400">Spice Heat Level</span>
                    <span className={`text-xs font-extrabold ${spiceLabels[selectedSpice].color}`}>
                      {spiceLabels[selectedSpice].label} ({spiceLabels[selectedSpice].labelTh})
                    </span>
                  </div>
                  <div className="w-full bg-zinc-700 h-2.5 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full transition-all duration-300 ${
                        selectedSpice === 0
                          ? "w-1/4 bg-emerald-500"
                          : selectedSpice === 1
                          ? "w-2/4 bg-amber-500"
                          : selectedSpice === 2
                          ? "w-3/4 bg-orange-500"
                          : "w-full bg-rose-600 animate-pulse"
                      }`}
                    />
                  </div>
                </div>

                {/* Toppings selected pills */}
                <div>
                  <div className="text-xs text-zinc-400 mb-2 flex items-center justify-between">
                    <span>Extra Toppings ({selectedToppings.length})</span>
                    <span className="text-zinc-500">+฿{toppingsPrice}</span>
                  </div>
                  {selectedToppings.length === 0 ? (
                    <div className="text-xs text-zinc-500 italic bg-zinc-800/40 p-2.5 rounded-xl text-center">
                      No extra toppings chosen. Add some above for maximum joy!
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedToppings.map((id) => {
                        const top = TOPPING_OPTIONS.find((t) => t.id === id);
                        if (!top) return null;
                        return (
                          <span
                            key={id}
                            className="bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs px-2.5 py-1 rounded-xl flex items-center gap-1.5"
                          >
                            <span>{top.nameTh}</span>
                            <span className="text-amber-400 font-bold">+฿{top.price}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>

              {/* Price Breakdown */}
              <div className="border-t border-zinc-800 pt-4 mb-6 space-y-1.5 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>Base Tom Yum Noodle</span>
                  <span>฿{BASE_PRICE}</span>
                </div>
                {brothExtra > 0 && (
                  <div className="flex justify-between text-amber-400">
                    <span>Premium Broth Extra</span>
                    <span>+฿{brothExtra}</span>
                  </div>
                )}
                {toppingsPrice > 0 && (
                  <div className="flex justify-between text-orange-400">
                    <span>Toppings Subtotal</span>
                    <span>+฿{toppingsPrice}</span>
                  </div>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAddedFeedback}
                className={`w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all shadow-xl ${
                  isAddedFeedback
                    ? "bg-emerald-500 text-white"
                    : "bg-linear-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white shadow-rose-600/30 active:scale-98"
                }`}
              >
                {isAddedFeedback ? (
                  <>
                    <CheckIcon className="w-5 h-5 text-white" />
                    <span>Added to Your Order!</span>
                  </>
                ) : (
                  <>
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Custom Bowl to Order &bull; ฿{totalPrice}</span>
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                <span>🍜 ปรุงสดใหม่ชามต่อชาม</span>
                <span>&bull;</span>
                <span>⚡ เสิร์ฟร้อนฉ่า</span>
                <span>&bull;</span>
                <span>🌶️ ปรับความเผ็ดได้</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
