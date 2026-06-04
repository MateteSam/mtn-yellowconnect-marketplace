'use client';

import Link from 'next/link';
import { useState } from 'react';

const METHODS = [
  { id: 'momo', label: 'MTN MoMo', detail: '+234 801 234 5678', icon: 'payments', isPrimary: true },
  { id: 'bank', label: 'GTBank', detail: '•••• •••• 4421', icon: 'account_balance', isPrimary: false },
  { id: 'wave', label: 'Wave', detail: 'kwame@wave.com', icon: 'waves', isPrimary: false },
];

export default function PayoutMethodsPage() {
  const [primary, setPrimary] = useState('momo');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/wallet/overview" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Payout Methods</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <p className="text-on-surface-variant text-sm mb-6">Your primary payout method will be used for all payouts by default.</p>

        <div className="space-y-3 mb-8">
          {METHODS.map(m => (
            <div
              key={m.id}
              onClick={() => setPrimary(m.id)}
              className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all cursor-pointer ${primary === m.id ? 'border-primary bg-primary/5' : 'border-outline-variant/30 bg-surface-container-low'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${primary === m.id ? 'bg-primary/20 text-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-sm">{m.label}</p>
                <p className="text-xs text-on-surface-variant">{m.detail}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {primary === m.id && (
                  <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full">Primary</span>
                )}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${primary === m.id ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                  {primary === m.id && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 rounded-2xl border-2 border-dashed border-outline-variant/40 font-bold text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center gap-2 mb-6">
          <span className="material-symbols-outlined">add</span>
          Add Payout Method
        </button>

        <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 flex gap-3">
          <span className="material-symbols-outlined text-secondary shrink-0 text-[18px]">info</span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            MTN Gold members get <strong className="text-on-surface">instant payouts</strong> to MoMo. All other methods take 1–2 business days.
          </p>
        </div>

        <button className="mt-6 w-full bg-secondary text-white py-4 rounded-2xl font-bold shadow-lg">
          Save Changes
        </button>
      </main>
    </div>
  );
}
