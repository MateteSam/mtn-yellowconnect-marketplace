'use client';

import Link from 'next/link';
import { useState } from 'react';

const TERMS = [
  { months: 3, rateLabel: '3.0%/mo', totalRate: '9%' },
  { months: 6, rateLabel: '3.5%/mo', totalRate: '21%', recommended: true },
  { months: 12, rateLabel: '4.0%/mo', totalRate: '48%' },
];

const LOAN_AMOUNT = 200000;

export default function LoanSelectTermPage() {
  const [term, setTerm] = useState(6);
  const selected = TERMS.find(t => t.months === term)!;
  const rateNum = parseFloat(selected.rateLabel) / 100;
  const monthly = Math.round(LOAN_AMOUNT * (1 + rateNum * term) / term);

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/lending/select-amount" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Select Loan Term</h1>
        <span className="ml-auto text-xs text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-full">Step 2 of 3</span>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile py-8 max-w-lg pb-32">
        <p className="text-on-surface-variant text-sm mb-6 text-center">Choose the repayment period for your <strong className="text-on-surface">₦200,000</strong> loan.</p>

        <div className="space-y-3 mb-8">
          {TERMS.map(t => (
            <button
              key={t.months}
              onClick={() => setTerm(t.months)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all relative ${term === t.months ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-outline-variant/30 bg-surface-container-low'}`}
            >
              {t.recommended && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded">Recommended</span>
              )}
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${term === t.months ? 'border-green-500 bg-green-500' : 'border-outline-variant'}`}>
                  {term === t.months && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
                </div>
                <div className="flex-grow">
                  <p className="font-bold">{t.months} months</p>
                  <p className="text-sm text-on-surface-variant">{t.rateLabel} · Total interest: {t.totalRate}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Monthly summary */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-on-surface-variant text-sm">Monthly Payment</span>
            <span className="font-black text-2xl text-green-600">₦{monthly.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-on-surface-variant text-sm">Duration</span>
            <span className="font-bold">{term} months</span>
          </div>
          <div className="flex justify-between items-center border-t border-outline-variant/10 pt-3">
            <span className="font-bold">Total Repayment</span>
            <span className="font-black text-secondary">₦{(monthly * term).toLocaleString()}</span>
          </div>
        </div>

        <Link href="/lending/offer" className="block w-full bg-green-600 text-white text-center py-5 rounded-2xl font-bold text-lg shadow-xl">
          Review Offer →
        </Link>
      </main>
    </div>
  );
}
