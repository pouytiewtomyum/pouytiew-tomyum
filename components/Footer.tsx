"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  const { lang } = useLanguage();
  const isTh = lang === "th";

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800 text-sm">
        
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg">
                <i className="fa-solid fa-bowl-food text-xl"></i>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">POUY TIEW</span>
                <span className="text-sm text-rose-500 font-bold block">
                  {isTh ? "ป๋วยเตี๋ยวต้มยำโบราณ" : "Authentic Tom Yum Bar"}
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {isTh
                ? "ร้านก๋วยเตี๋ยวต้มยำโบราณใจกลางกรุงเทพฯ คัดสรรวัตถุดิบสดแท้ มะนาวแป้นคั้นสด ซุปเคี่ยวกระดูก 12 ชม. และถั่วลิสงคั่วใหม่ทุกเช้า"
                : "Authentic Bangkok street noodle bar dedicated to bold, soulful, artisanal Tom Yum with hand-squeezed limes, slow-simmered bone broth, and freshly toasted peanuts."}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-zinc-400 text-sm">
              <span className="hover:text-rose-400 cursor-pointer transition-colors flex items-center gap-1.5"><i className="fa-brands fa-facebook"></i> Facebook</span>
              <span>&bull;</span>
              <span className="hover:text-rose-400 cursor-pointer transition-colors flex items-center gap-1.5"><i className="fa-solid fa-phone"></i>081-333-2489</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">
              {isTh ? "เมนู & เรื่องราว" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400 font-medium">
              <li>
                <button onClick={() => onScrollTo("menu")} className="hover:text-rose-400 transition-colors">
                  {isTh ? "เมนูเด็ด (Signature Menu)" : "Signature Menu"}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("story")} className="hover:text-rose-400 transition-colors">
                  {isTh ? "สูตรลับน้ำซุป (Our Story)" : "Our Story & Philosophy"}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("branches")} className="hover:text-rose-400 transition-colors">
                  {isTh ? "สาขาและเวลาเปิด (Locations)" : "Locations & Hours"}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("reviews")} className="hover:text-rose-400 transition-colors">
                  {isTh ? "รีวิวลูกค้า (Reviews)" : "Customer Reviews"}
                </button>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">
              {isTh ? "ตำแหน่งที่ตั้ง" : "Location"}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="https://maps.app.goo.gl/4skWQrYykMBoEtAC6" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 hover:underline transition-colors">
                  <strong>{isTh ? "40 ซ.เจริญนคร 8 แขวงคลองต้นไทร เขตคลองสาน กทม. 10600" :
                    "40 Soi Charoennakhon 8, Charoennakhon Rd., Khlong Ton Sai, Khlong San, Bangkok, 10600"}</strong>
                </a>
                <strong className="text-white block pt-2">time: 06:30 - 15:00</strong>
              </li>

            </ul>
          </div>

          {/* Allergy Note */}
          <div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">
              {isTh ? "ข้อมูลสำหรับผู้แพ้อาหาร" : "Allergy Notice"}
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800">
              {isTh
                ? "⚠️ เมนูต้มยำของเรามีส่วนผสมของถั่วลิสง กะปิแท้ และอาหารทะเล กรุณาแจ้งพนักงานหากท่านมีอาการแพ้อาหาร"
                : "⚠️ Our tom yum recipes naturally include fresh peanuts, shrimp paste, and shellfish. Please notify our staff of any dietary restrictions."}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Pouy Tiew Tom Yum Noodle Bar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="text-rose-500 font-bold flex items-center gap-1.5">
              Cooked with <i className="fa-solid fa-fire text-rose-500"></i> in Bangkok
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
