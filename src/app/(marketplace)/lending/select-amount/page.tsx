'use client';

import Link from 'next/link';
import { useState } from 'react';

const AMOUNTS = [50000, 100000, 200000, 350000, 500000];

export default function LoanSelectAmountPage() {
  const [selected, setSelected] = useState(200000);
  const [custom, setCustom] = useState('');
  const amount = custom ? Number(custom) : selected;
  const monthlyRepayment = Math.round(amount * 1.035 / 6);

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/lending" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Select Loan Amount</h1>
        <span className="ml-auto text-xs text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-full">Step 1 of 3</span>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile py-8 max-w-lg pb-32">
        <div className="text-center mb-8">
          <p className="text-on-surface-variant text-sm mb-2">Pre-approved up to</p>
          <p className="text-5xl font-black text-green-600 mb-1">₦500,000</p>
          <p className="text-on-surface-variant text-xs">Based on 12 months of sales history</p>
        </div>

        {/* Preset Amounts */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {AMOUNTS.slice(0, 3).map(a => (
            <button
              key={a}
              onClick={() => { setSelected(a); setCustom(''); }}
              className={`py-3 rounded-2xl font-bold text-sm border-2 transition-all ${!custom && selected === a ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700' : 'border-outline-variant/30 text-on-surface-variant'}`}
            >
              ₦{(a / 1000).toFixed(0)}k
            </button>
          ))}
          {AMOUNTS.slice(3).map(a => (
            <button
              key={a}
              onClick={() => { setSelected(a); setCustom(''); }}
              className={`py-3 rounded-2xl font-bold text-sm border-2 transition-all ${!custom && selected === a ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700' : 'border-outline-variant/30 text-on-surface-variant'}`}
            >
              ₦{(a / 1000).toFixed(0)}k
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Or enter custom amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">₦</span>
            <input
              type="number"
              value={custom}
              onChange={e => { setCustom(e.target.value); setSelected(0); }}
              placeholder="e.g. 150000"
              className="w-full bg-surface-container-high rounded-xl pl-10 pr-4 py-4 text-body-lg font-medium outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Live repayment preview */}
        <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 mb-8">
          <p className="font-bold text-sm text-on-surface-variant uppercase tracking-widest mb-3">Estimated Repayment (6 month)</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-3xl font-black text-on-surface">₦{monthlyRepayment.toLocaleString()}</p>
              <p className="text-xs text-on-surface-variant">/month · 3.5% monthly rate</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-sm">Total Repayment</p>
              <p className="text-secondary font-black">₦{(monthlyRepayment * 6).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <Link
          href="/lending/offer"
          className="block w-full bg-green-600 text-white text-center py-5 rounded-2xl font-bold text-lg shadow-xl"
        >
          See Offer Details →
        </Link>
      </main>
    </div>
  );
}
