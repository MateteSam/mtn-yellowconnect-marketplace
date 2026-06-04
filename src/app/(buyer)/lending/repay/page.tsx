'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EarlyRepaymentPage() {
  const [amount, setAmount] = useState(50000);
  const totalBalance = 227500;

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/lending" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Early Repayment</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-surface rounded-3xl p-8 border border-outline-variant/20 shadow-sm mb-8 text-center">
          <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest mb-2">Remaining Principal</p>
          <p className="text-4xl font-black text-on-surface mb-4">₦{totalBalance.toLocaleString()}</p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
            <span className="material-symbols-outlined text-[16px]">savings</span>
            Save ₦1,200 in interest
          </div>
        </div>

        <div className="space-y-8 mb-12">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-lg">Repayment Amount</h3>
              <span className="text-2xl font-black text-primary">₦{amount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max={totalBalance} 
              step="1000"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between mt-3 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
              <span>Min: ₦1,000</span>
              <span>Max: Full Repay</span>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
            <h4 className="font-bold text-sm mb-4">New Loan Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Remaining Balance</span>
                <span className="font-bold">₦{(totalBalance - amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Interest Reduction</span>
                <span className="font-bold text-green-600">- ₦{(amount * 0.02).toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/lending/repay/success" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
            Repay via MoMo
          </Link>
          <p className="text-center text-[10px] text-on-surface-variant leading-relaxed">
            Funds will be instantly debited from your linked MoMo wallet. A ₦50 transaction fee applies.
          </p>
        </div>
      </main>
    </div>
  );
}
