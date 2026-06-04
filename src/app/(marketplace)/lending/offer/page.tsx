'use client';

import Link from 'next/link';

export default function LoanOfferDetailsPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/lending/select-term" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Your Loan Offer</h1>
        <span className="ml-auto text-xs text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-full">Step 3 of 3</span>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        {/* Offer Card */}
        <div className="bg-gradient-to-br from-green-700 to-emerald-800 text-white rounded-3xl p-6 mb-6 shadow-xl">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Your Personalised Offer</p>
          <p className="text-5xl font-black mb-1">₦200,000</p>
          <p className="text-white/60 text-sm">6-month term · 3.5%/month</p>
          <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-black text-xl">₦39,167</p>
              <p className="text-white/60 text-[11px] uppercase">Monthly</p>
            </div>
            <div>
              <p className="font-black text-xl">6</p>
              <p className="text-white/60 text-[11px] uppercase">Months</p>
            </div>
            <div>
              <p className="font-black text-xl">₦235k</p>
              <p className="text-white/60 text-[11px] uppercase">Total</p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm mb-6 space-y-3">
          <h2 className="font-bold text-title-md mb-2">Loan Terms</h2>
          {[
            { label: 'Principal Amount', value: '₦200,000' },
            { label: 'Interest Rate', value: '3.5% per month' },
            { label: 'Total Interest', value: '₦35,000' },
            { label: 'First Repayment', value: '30 days from disbursement' },
            { label: 'Repayment Method', value: 'Auto-deducted from wallet' },
            { label: 'Late Fee', value: '1% per day on overdue balance' },
          ].map(row => (
            <div key={row.label} className="flex justify-between py-2 border-b border-outline-variant/10 last:border-0">
              <span className="text-sm text-on-surface-variant">{row.label}</span>
              <span className="text-sm font-bold text-on-surface">{row.value}</span>
            </div>
          ))}
        </div>

        {/* AI Note */}
        <div className="glass-ai rounded-2xl p-4 border border-primary/20 mb-8 flex gap-3">
          <span className="material-symbols-outlined text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <p className="text-sm text-on-surface-variant">Your repayments are automatically covered from future sales. If balance is insufficient, the deduction will retry within 72 hours.</p>
        </div>

        {/* T&Cs */}
        <div className="flex items-start gap-3 mb-6">
          <input type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-green-600" />
          <label htmlFor="terms" className="text-sm text-on-surface-variant cursor-pointer">
            I have read and agree to the <span className="text-secondary font-bold underline">MTN Merchant Lending Terms</span> and understand my repayment obligations.
          </label>
        </div>

        <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:brightness-110 transition-all">
          Accept & Disburse Now
        </button>
        <p className="text-center text-xs text-on-surface-variant mt-3">Funds arrive in your wallet within 10 minutes</p>
      </main>
    </div>
  );
}
