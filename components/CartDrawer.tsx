"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CartItem } from "../types/menu";
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, BagIcon, CheckIcon, SparklesIcon, BowlIcon } from "./Icons";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [orderType, setOrderType] = useState<"delivery" | "pickup" | "dinein">("delivery");
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [specialNote, setSpecialNote] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = orderType === "delivery" ? (subtotal >= 350 || subtotal === 0 ? 0 : 40) : 0;
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "TOMYUMHOT") {
      setAppliedDiscount(0.2); // 20%
      setPromoMessage("Code applied! 20% discount granted 🎉");
    } else if (promoCode.trim() === "") {
      setPromoMessage(null);
    } else {
      setPromoMessage("Invalid promo code. Try 'TOMYUMHOT'");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      const orderNum = `TY-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderSuccess(orderNum);
      setIsCheckingOut(false);
    }, 1200);
  };

  const handleFinishOrder = () => {
    setOrderSuccess(null);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                <BagIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black text-zinc-900">Your Noodle Bag</h2>
                <p className="text-xs text-zinc-500 font-medium">{items.length} unique items</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          {orderSuccess ? (
            /* Order Success View */
            <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl animate-bounce">
                🍜
              </div>
              <span className="text-xs font-black uppercase text-rose-600 tracking-wider">
                Order Confirmed!
              </span>
              <h3 className="text-2xl font-black text-zinc-900">
                Broth Is Cooking &amp; Firing Up!
              </h3>
              <p className="text-xs text-zinc-500 max-w-xs">
                Your order <strong className="text-zinc-900 font-mono">#{orderSuccess}</strong> has been received by our head chef. Estimated prep time: 15–20 mins.
              </p>
              <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 text-left w-full text-xs space-y-1.5">
                <div className="flex justify-between font-bold text-zinc-700">
                  <span>Order Type:</span>
                  <span className="uppercase text-rose-600">{orderType}</span>
                </div>
                <div className="flex justify-between font-bold text-zinc-700">
                  <span>Total Paid:</span>
                  <span className="text-emerald-600">฿{total}</span>
                </div>
                {specialNote && (
                  <div className="pt-1 text-zinc-500 text-[11px]">
                    <strong>Note:</strong> {specialNote}
                  </div>
                )}
              </div>
              <button
                onClick={handleFinishOrder}
                className="w-full py-3.5 bg-zinc-900 text-white rounded-2xl font-black text-sm hover:bg-zinc-800 transition-colors"
              >
                Done / Back to Home
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty Cart View */
            <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-rose-50 text-rose-500 flex items-center justify-center">
                <BowlIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-zinc-900">Your bowl is currently empty!</h3>
              <p className="text-xs text-zinc-500 max-w-xs">
                Add your favorite signature bowls, customize your own DIY recipe, or pick crispy wontons and iced Thai tea!
              </p>
              <button
                onClick={onClose}
                className="py-3 px-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-extrabold text-xs rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Browse Menu &amp; Build Bowl
              </button>
            </div>
          ) : (
            /* Active Cart Items View */
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              
              {/* Order Mode Toggle */}
              <div className="grid grid-cols-3 gap-1 bg-zinc-100 p-1 rounded-2xl text-xs font-bold text-zinc-600">
                <button
                  onClick={() => setOrderType("delivery")}
                  className={`py-2 rounded-xl transition-all ${
                    orderType === "delivery" ? "bg-white text-zinc-900 shadow-sm" : "hover:text-zinc-900"
                  }`}
                >
                  🛵 Delivery
                </button>
                <button
                  onClick={() => setOrderType("pickup")}
                  className={`py-2 rounded-xl transition-all ${
                    orderType === "pickup" ? "bg-white text-zinc-900 shadow-sm" : "hover:text-zinc-900"
                  }`}
                >
                  🥡 Pickup
                </button>
                <button
                  onClick={() => setOrderType("dinein")}
                  className={`py-2 rounded-xl transition-all ${
                    orderType === "dinein" ? "bg-white text-zinc-900 shadow-sm" : "hover:text-zinc-900"
                  }`}
                >
                  🍽️ Dine-In
                </button>
              </div>

              {/* Free delivery threshold progress */}
              {orderType === "delivery" && (
                <div className="bg-amber-50 border border-amber-200/80 p-3 rounded-2xl text-xs">
                  {subtotal >= 350 ? (
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckIcon className="w-4 h-4 text-emerald-600" />
                      <span>You unlocked FREE Delivery! (฿0)</span>
                    </div>
                  ) : (
                    <div>
                      <div className="text-zinc-700 font-medium">
                        Add <strong className="text-rose-600">฿{350 - subtotal}</strong> more for Free Delivery!
                      </div>
                      <div className="w-full bg-amber-200/60 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className="bg-amber-500 h-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (subtotal / 350) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-2xl border border-zinc-200/80 shadow-sm flex gap-3 items-center"
                  >
                    {item.image && (
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-extrabold text-xs sm:text-sm text-zinc-900 truncate">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-rose-600 transition-colors p-1"
                        >
                          <TrashIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.titleTh && (
                        <p className="text-[11px] text-zinc-500 truncate">{item.titleTh}</p>
                      )}

                      {item.details && (
                        <p className="text-[10px] text-rose-600 font-medium line-clamp-1 mt-0.5">
                          {item.details}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <span className="font-black text-sm text-zinc-900">
                          ฿{item.price * item.quantity}
                        </span>

                        <div className="flex items-center gap-2 bg-zinc-100 px-2 py-1 rounded-xl">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-zinc-600 hover:text-zinc-900 active:scale-90"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </button>
                          <span className="font-extrabold text-xs px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-zinc-600 hover:text-zinc-900 active:scale-90"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Note */}
              <div className="pt-2">
                <label className="text-[11px] font-bold text-zinc-600 block mb-1">
                  Special Kitchen Notes (มะนาวเพิ่ม / ไม่ใส่ผักชี)
                </label>
                <input
                  type="text"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="e.g. Extra fresh lime, separate soup..."
                  className="w-full text-xs p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
              </div>

              {/* Promo Code Input */}
              <div className="pt-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter coupon (TOMYUMHOT)"
                    className="flex-1 text-xs p-2.5 uppercase rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-rose-500 font-mono"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-3.5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] mt-1 font-semibold ${
                    appliedDiscount > 0 ? "text-emerald-600" : "text-rose-500"
                  }`}>
                    {promoMessage}
                  </p>
                )}
              </div>

            </div>
          )}

          {/* Footer Summary & Checkout */}
          {!orderSuccess && items.length > 0 && (
            <div className="p-5 border-t border-zinc-200 bg-zinc-50/80 space-y-3">
              <div className="space-y-1.5 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>฿{subtotal}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount (20%)</span>
                    <span>-฿{discountAmount}</span>
                  </div>
                )}
                {orderType === "delivery" && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? "FREE" : `฿${deliveryFee}`}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-zinc-900 pt-2 border-t border-zinc-200">
                  <span>Total Due</span>
                  <span className="text-rose-600">฿{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-sm shadow-xl shadow-rose-600/25 flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                {isCheckingOut ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Firing Up the Kitchen...
                  </span>
                ) : (
                  <>
                    <span>Confirm Order &bull; ฿{total}</span>
                    <SparklesIcon className="w-4 h-4 text-amber-200" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
