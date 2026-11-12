"use client";

import React, { useState } from "react";
import { BowlIcon, FlameIcon, SparklesIcon, CheckIcon } from "./Icons";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
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
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-rose-900/40 via-zinc-900 to-amber-900/30 rounded-3xl p-8 sm:p-10 border border-zinc-800 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                Join The Spice Club
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Get 15% Off Your Next Bowl + Free Crispy Wonton
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                รับข่าวสารโปรโมชั่นเด็ด เมนูลับประจำซีซั่น และโค้ดส่วนลดพิเศษก่อนใคร ส่งตรงเข้าอีเมลคุณ
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-2xl flex items-center gap-3 text-emerald-300">
                  <CheckIcon className="w-6 h-6 shrink-0" />
                  <div className="text-xs font-bold">
                    Welcome to the Spice Club! Check your inbox for voucher code <strong className="text-amber-300">SPICY15</strong>.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-xs px-5 py-3.5 rounded-2xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800 text-sm">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg">
                <BowlIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">POUY TIEW</span>
                <span className="text-xs text-rose-500 font-bold block">ป๋วยเตี๋ยวต้มยำโบราณ</span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Authentic Bangkok street noodle bar dedicated to bold, soulful, artisanal Tom Yum with hand-squeezed limes, slow-simmered bone broth, and freshly toasted peanuts.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-400 text-xs">
              <span className="hover:text-rose-400 cursor-pointer transition-colors">Instagram</span>
              <span>&bull;</span>
              <span className="hover:text-rose-400 cursor-pointer transition-colors">TikTok</span>
              <span>&bull;</span>
              <span className="hover:text-rose-400 cursor-pointer transition-colors">Facebook</span>
              <span>&bull;</span>
              <span className="hover:text-rose-400 cursor-pointer transition-colors">LINE: @pouytiew</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => onScrollTo("menu")} className="hover:text-rose-400 transition-colors">
                  Signature Menu (เมนูเด็ด)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("story")} className="hover:text-rose-400 transition-colors">
                  Our Story &amp; Philosophy (เรื่องราวของเรา)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("branches")} className="hover:text-rose-400 transition-colors">
                  Locations &amp; Hours (สาขาและเวลาเปิด)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("reviews")} className="hover:text-rose-400 transition-colors">
                  Customer Reviews (รีวิว)
                </button>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">Branches</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <strong className="text-white block">Siam Square Flagship</strong>
                <span>10:30 AM – 10:00 PM</span>
              </li>
              <li className="pt-1">
                <strong className="text-white block">Thonglor Night Eatery</strong>
                <span>11:00 AM – 12:00 AM</span>
              </li>
              <li className="pt-2 text-rose-400 font-bold">
                Hotline: 02-123-4567
              </li>
            </ul>
          </div>

          {/* Allergy Note */}
          <div>
            <h4 className="font-black text-white text-sm mb-3 uppercase tracking-wider">Allergy Notice</h4>
            <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800">
              ⚠️ Our tom yum recipes naturally include fresh peanuts, shrimp paste, and shellfish. Please notify our staff of any dietary restrictions.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Pouy Tiew Tom Yum Noodle Bar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="text-rose-500 font-bold flex items-center gap-1">
              Cooked with <FlameIcon className="w-3.5 h-3.5" /> in Bangkok
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
