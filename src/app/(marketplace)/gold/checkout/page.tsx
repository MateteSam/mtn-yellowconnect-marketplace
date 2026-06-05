'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GoldCheckoutPage() {
  const [payMethod, setPayMethod] = useState<'momo' | 'card'>('momo');
  const [isProcessing, setIsProcessing] = useState(false);
  const [phone, setPhone] = useState('+234 801 234 5678');

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => window.location.href = '/gold/success', 2000);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/gold/membership" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Checkout</h1>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile py-8 max-w-lg">
        {/* Order Summary */}
        <div className="bg-gradient-to-r from-[#916B0D] to-[#C9A03A] text-white rounded-2xl p-5 mb-6 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Subscribing to</p>
            <p className="font-bold text-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              MTN Gold
            </p>
            <p className="text-white/70 text-sm mt-1">Monthly · Cancel anytime</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-black">₦4,999</p>
            <p className="text-white/60 text-xs">/month</p>
          </div>
        </div>

        {/* Payment Method Selector */}
        <section className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Payment Method</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPayMethod('momo')}
              className={`p-4 rounded-2xl border-2 font-bold text-sm flex items-center gap-2 transition-all ${payMethod === 'momo' ? 'border-primary bg-primary/5' : 'border-outline-variant/30'}`}
            >
              <span className="material-symbols-outlined text-[20px]">payments</span>
              MoMo Wallet
            </button>
            <button
              onClick={() => setPayMethod('card')}
              className={`p-4 rounded-2xl border-2 font-bold text-sm flex items-center gap-2 transition-all ${payMethod === 'card' ? 'border-primary bg-primary/5' : 'border-outline-variant/30'}`}
            >
              <span className="material-symbols-outlined text-[20px]">credit_card</span>
              Debit Card
            </button>
          </div>
        </section>

        {/* Payment Details */}
        {payMethod === 'momo' ? (
          <section className="mb-6 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1 block mb-2">MoMo Phone Number</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">phone</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full bg-surface-container-high rounded-xl pl-12 pr-4 py-4 text-body-lg font-medium outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 flex gap-3">
              <span className="material-symbols-outlined text-secondary shrink-0">info</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                You'll receive a USSD prompt on <strong>{phone}</strong> to approve the payment. Keep your phone nearby.
              </p>
            </div>
          </section>
        ) : (
          <section className="mb-6 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1 block mb-2">Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-body-lg outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1 block mb-2">Expiry</label>
                <input type="text" placeholder="MM / YY" className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-body-lg outline-none focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1 block mb-2">CVV</label>
                <input type="text" placeholder="•••" className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-body-lg outline-none focus:ring-2 focus:ring-secondary" />
              </div>
            </div>
          </section>
        )}

        {/* Price Breakdown */}
        <div className="bg-surface-container-low rounded-2xl p-4 mb-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">MTN Gold (Monthly)</span>
            <span className="font-medium">₦4,999</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Processing fee</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <div className="border-t border-outline-variant/20 pt-2 flex justify-between font-bold">
            <span>Total Today</span>
            <span className="text-secondary text-lg">₦4,999</span>
          </div>
        </div>

        <button
          onClick={handlePay}
          disabled={isProcessing}
          className="w-full bg-primary text-black py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-80"
        >
          {isProcessing ? (
            <>
              <span className="material-symbols-outlined animate-spin">sync</span>
              Processing Payment...
            </>
          ) : (
            <>Confirm & Pay ₦4,999</>
          )}
        </button>
        <p className="text-center text-xs text-on-surface-variant mt-3 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          Secured by MTN YellowConnect Payments
        </p>
      </main>
    </div>
  );
}
