'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PayoutFrequencyDetailPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/wallet/payout/scheduling" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Payout Details</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-primary text-black p-8 rounded-[40px] mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Current Active Schedule</p>
          <h2 className="text-3xl font-black mb-4 italic">Daily Payout</h2>
          <div className="flex items-center gap-2 text-xs font-bold bg-black/10 w-fit px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Next: Tomorrow, 08:00 AM
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <section>
            <h3 className="font-black text-sm mb-4 uppercase tracking-widest text-on-surface-variant">Destination Wallet</h3>
            <div className="bg-surface p-5 rounded-2xl border border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-black font-black">wallet</span>
                </div>
                <div>
                  <p className="font-bold text-sm">MTN MoMo</p>
                  <p className="text-xs text-on-surface-variant">Ending in *882</p>
                </div>
              </div>
              <button className="text-xs font-black text-secondary">Change</button>
            </div>
          </section>

          <section>
            <h3 className="font-black text-sm mb-4 uppercase tracking-widest text-on-surface-variant">Auto-Payout History</h3>
            <div className="space-y-3">
              {[
                { date: 'Today, 08:00 AM', amount: '₦142,500', status: 'Success' },
                { date: 'Yesterday, 08:00 AM', amount: '₦88,200', status: 'Success' },
                { date: 'May 30, 2026', amount: '₦215,000', status: 'Success' },
              ].map((tx, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-on-surface-variant">{tx.date}</span>
                  <div className="text-right">
                    <p className="font-black text-sm text-green-600">{tx.amount}</p>
                    <p className="text-[9px] font-black uppercase text-on-surface-variant">{tx.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-surface-container-high py-4 rounded-2xl font-bold border border-outline-variant/20">
            Pause Auto-pay
          </button>
          <button className="flex-1 bg-black text-white py-4 rounded-2xl font-bold shadow-lg">
            Edit Schedule
          </button>
        </div>
      </main>
    </div>
  );
}
