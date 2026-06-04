'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PayoutSchedulingPage() {
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly' | 'threshold'>('daily');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/wallet/overview" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Payout Scheduling</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="mb-10">
          <h2 className="text-2xl font-black mb-2">Automate your earnings</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Set and forget. Choose when you want your marketplace balance to be transferred to your MoMo wallet.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {[
            { id: 'daily', label: 'Daily Payout', desc: 'Every morning at 08:00 AM', icon: 'today' },
            { id: 'weekly', label: 'Weekly Payout', desc: 'Every Monday morning', icon: 'calendar_view_week' },
            { id: 'monthly', label: 'Monthly Payout', desc: '1st of every month', icon: 'calendar_month' },
            { id: 'threshold', label: 'Threshold-based', desc: 'Whenever balance hits ₦50,000', icon: 'speed' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setFrequency(opt.id as any)}
              className={`w-full p-6 rounded-3xl border-2 text-left flex items-center gap-5 transition-all ${frequency === opt.id ? 'border-primary bg-primary/5' : 'border-outline-variant/20 bg-surface'}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${frequency === opt.id ? 'bg-primary text-black' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <span className="material-symbols-outlined">{opt.icon}</span>
              </div>
              <div className="flex-grow">
                <p className="font-black text-sm">{opt.label}</p>
                <p className="text-xs text-on-surface-variant font-medium">{opt.desc}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${frequency === opt.id ? 'border-primary' : 'border-outline-variant/40'}`}>
                {frequency === opt.id && <div className="w-3 h-3 bg-primary rounded-full"></div>}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-sm">Transfer Fees</h4>
            <span className="text-[10px] font-black bg-secondary text-white px-2 py-0.5 rounded uppercase tracking-widest italic">MTN Gold Discount</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">Standard Auto-transfer Fee</span>
              <span className="text-xs font-bold line-through">₦150</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">Your Gold Member Flat Fee</span>
              <span className="text-xs font-black text-primary">₦0</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-black text-white py-5 rounded-2xl font-bold shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
          Save Payout Settings
        </button>
      </main>
    </div>
  );
}
