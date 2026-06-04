'use client';

import Link from 'next/link';
import { useState } from 'react';

const AMOUNTS = [50000, 100000, 200000, 324500];

export default function RequestPayoutPage() {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => window.location.href = '/wallet/payout/requested', 2000);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/wallet/overview" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Request Payout</h1>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile py-8 max-w-lg">
        {/* Available */}
        <div className="text-center mb-8">
          <p className="text-on-surface-variant text-sm mb-1">Available to withdraw</p>
          <p className="text-4xl font-black text-on-surface">₦324,500</p>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1 block mb-2">Enter Amount</label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant text-xl">₦</span>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="0"
              className="w-full bg-surface-container-high rounded-2xl pl-10 pr-5 py-5 text-3xl font-black text-center outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        {/* Quick picks */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {AMOUNTS.map(a => (
            <button
              key={a}
              onClick={() => setAmount(String(a))}
              className={`py-2 rounded-xl text-xs font-bold border transition-all ${amount === String(a) ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 text-on-surface-variant'}`}
            >
              ₦{(a / 1000).toFixed(0)}k
            </button>
          ))}
        </div>

        {/* Destination */}
        <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div>
              <p className="font-bold text-sm">MoMo Wallet</p>
              <p className="text-xs text-on-surface-variant">+234 801 234 5678</p>
            </div>
          </div>
          <Link href="/wallet/payout/methods" className="text-secondary font-bold text-xs hover:underline">Change</Link>
        </div>

        {/* Info */}
        <div className="flex gap-2 items-start bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-8">
          <span className="material-symbols-outlined text-secondary shrink-0 text-[18px] mt-0.5">info</span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Gold members receive payouts within <strong className="text-on-surface">2 hours</strong>. Standard processing is 1–2 business days.
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!amount || isProcessing}
          className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg shadow-xl disabled:opacity-40 transition-all flex items-center justify-center gap-2"
        >
          {isProcessing ? <><span className="material-symbols-outlined animate-spin">sync</span>Processing...</> : 'Request Payout'}
        </button>
      </main>
    </div>
  );
}
