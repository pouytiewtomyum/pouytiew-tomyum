"use client";

import React, { useState } from "react";
import { MapPinIcon, ChevronDownIcon } from "./Icons";

export function BranchLocation() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I adjust the spice level for children or sensitive eaters?",
      qTh: "เด็กหรือคนไม่ทานเผ็ด สามารถทานได้ไหม?",
      a: "Absolutely! We offer Level 0 (Mild Zing) with 0% chili heat. You still get our rich, aromatic herbal broth and tender ingredients without any burn.",
    },
    {
      q: "How do you package noodles for delivery so they don't get soggy?",
      qTh: "สั่งเดลิเวอรี เส้นจะอืดไหม?",
      a: "We separate noodles, crispy toppings, and broth in eco-friendly double-sealed thermal containers. Your noodles arrive springy, steaming hot, and perfectly separated!",
    },
    {
      q: "Do you have vegetarian or non-pork options?",
      qTh: "มีเมนูมังสวิรัติ หรือเมนูไม่ใส่หมูไหม?",
      a: "Yes! We offer our Royal River Prawn or Seafood Lava bowls, and can prepare our Tom Yum with pure seafood stock or mushroom vegetarian broth upon request.",
    },
    {
      q: "Do you accept table reservations for large groups?",
      qTh: "รับจองโต๊ะสำหรับกลุ่มเพื่อนหรือครอบครัวไหม?",
      a: "Yes, both our Siam Square and Thonglor branches welcome reservations for parties of 4 or more. Call our hotline or book via LINE Official @pouytiew.",
    },
  ];

  return (
    <section id="branches" className="py-20 lg:py-28 bg-[#FFFDF9] relative border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <MapPinIcon className="w-4 h-4 text-emerald-600" />
            <span>VISIT US OR ORDER DELIVERY &bull; สาขาและช่องทางสั่งซื้อ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            Craving Tom Yum? <br />
            <span className="bg-linear-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Find Us or Get It Delivered
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            แวะมาทานร้อนๆ ที่หน้าร้าน หรือสั่งเดลิเวอรีส่งตรงถึงหน้าประตูบ้านคุณภายใน 30 นาที
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-zinc-900 text-center mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 hover:text-rose-600 transition-colors"
                  >
                    <div>
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <span className="block text-xs text-zinc-400 font-normal mt-0.5">{faq.qTh}</span>
                    </div>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-rose-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
