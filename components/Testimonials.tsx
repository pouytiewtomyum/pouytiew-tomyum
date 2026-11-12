"use client";

import React from "react";
import Image from "next/image";
import { REVIEWS } from "../data/menuData";
import { StarIcon, SparklesIcon, CheckIcon } from "./Icons";

export function Testimonials() {
  const instagramFeed = [
    {
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80",
      tag: "#PouyTiewTomYum",
      likes: "1.4k",
    },
    {
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=500&q=80",
      tag: "#TomYumObsessed",
      likes: "940",
    },
    {
      img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=500&q=80",
      tag: "#CrispyWontons",
      likes: "2.1k",
    },
    {
      img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80",
      tag: "#ChaYenHeaven",
      likes: "1.8k",
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <SparklesIcon className="w-4 h-4 text-rose-600" />
            <span>COMMUNITY LOVE &bull; เสิร์ฟความสุขกว่าหมื่นชาม</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            Loved by Foodies, <br />
            <span className="bg-linear-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Verified by Chefs
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            ฟังเสียงตอบรับจากลูกค้าตัวจริงและนักชิมสายแซ่บ ที่ยกให้เราเป็นร้านก๋วยเตี๋ยวต้มยำอันดับหนึ่งในดวงใจ
          </p>
        </div>

        {/* Big Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 bg-linear-to-r from-rose-50 via-amber-50 to-orange-50 p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-rose-600">30,000+</div>
            <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Bowls Slurped</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-500 flex items-center justify-center gap-1">
              4.9 <StarIcon className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Google &amp; Wongnai</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">98.4%</div>
            <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Return Customers</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-orange-600">100%</div>
            <div className="text-xs sm:text-sm font-bold text-zinc-700 mt-1">Fresh Lime Juice</div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Dish badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                    🍜 {review.dishLoved}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm font-medium text-zinc-800 leading-relaxed italic">
                  &quot;{review.comment}&quot;
                </p>
                <p className="text-xs text-zinc-500 mt-2 font-normal">
                  {review.commentTh}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-zinc-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-rose-200">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-zinc-900">{review.name}</span>
                    {review.verified && (
                      <span className="bg-emerald-500 text-white rounded-full p-0.5">
                        <CheckIcon className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-zinc-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Feed Community Strip */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-black text-zinc-900 mb-2">
            Tag Us On Instagram &amp; TikTok <span className="text-rose-600">@PouyTiewTomYum</span>
          </h3>
          <p className="text-xs text-zinc-500 mb-6">
            Share your slurping moment with hashtag #PouyTiew for a chance to win a free Tom Yum feast!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {instagramFeed.map((feed, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm">
                <Image
                  src={feed.img}
                  alt={feed.tag}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2">
                  <span className="text-xs font-black">{feed.tag}</span>
                  <span className="text-xs font-bold text-amber-300 mt-1">❤️ {feed.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
