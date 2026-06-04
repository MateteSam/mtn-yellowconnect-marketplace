'use client';

import Link from 'next/link';

const TAX_MONTHS = [
  { month: 'January', gross: '₦1,240,000', tax: '₦93,000', net: '₦1,147,000' },
  { month: 'February', gross: '₦980,500', tax: '₦73,537', net: '₦906,963' },
  { month: 'March', gross: '₦2,450,000', tax: '₦183,750', net: '₦2,266,250' },
  { month: 'April', gross: '₦1,850,200', tax: '₦138,765', net: '₦1,711,435' },
  { month: 'May', gross: '₦3,100,000', tax: '₦232,500', net: '₦2,867,500' },
];

export default function AnnualTaxSummaryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Sticky Header */}
      <header className="px-6 py-8 bg-surface border-b border-outline-variant sticky top-0 z-10 shadow-sm transition-all overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

        <div className="flex items-center gap-4 mb-8">
          <Link href="/profile" className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-headline-lg font-bold text-on-surface tracking-tight">Tax Center</h1>
            <p className="text-on-surface-variant text-body-sm font-medium">Merchant Year 2026 Summary</p>
          </div>
        </div>

        {/* Annual Total Card */}
        <div className="relative p-6 rounded-[2.5rem] bg-on-surface text-white flex flex-col gap-4 overflow-hidden border border-white/10">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center">
            <span className="text-white/60 text-label-caps font-bold">TOTAL TAX WITHHELD</span>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span className="text-[10px] font-bold">FIRS COMPLIANT</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-[40px] font-bold tracking-tight">₦721,552</p>
            <span className="text-white/40 text-label-caps font-bold pb-2">JAN - DEC 2026</span>
          </div>
        </div>
      </header>

      <div className="flex-1 px-6 pt-10 pb-20">
        <div className="max-w-2xl mx-auto space-y-10">
          
          {/* Monthly Table */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-label-caps font-bold text-on-surface-variant">MONTHLY BREAKDOWN</h2>
              <button className="text-primary font-bold text-label-caps flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">ios_share</span>
                EXPORT DATA
              </button>
            </div>
            
            <div className="rounded-[2rem] overflow-hidden border border-outline-variant bg-surface-container-low">
              <div className="grid grid-cols-4 px-6 py-4 bg-surface-container border-b border-outline-variant text-[10px] font-black text-on-surface-variant tracking-widest uppercase">
                <span>MONTH</span>
                <span className="text-right">GROSS</span>
                <span className="text-right text-primary">TAX</span>
                <span className="text-right">NET</span>
              </div>
              <div className="divide-y divide-outline-variant/30">
                {TAX_MONTHS.map(m => (
                  <div key={m.month} className="grid grid-cols-4 px-6 py-5 hover:bg-surface-container/50 transition-colors">
                    <span className="font-bold text-on-surface text-body-sm">{m.month}</span>
                    <span className="text-right text-body-sm text-on-surface-variant">{m.gross}</span>
                    <span className="text-right text-body-sm font-bold text-primary">{m.tax}</span>
                    <span className="text-right text-body-sm font-bold text-on-surface">{m.net}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Tax Predictor */}
          <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-0.5 border-2 border-primary/10">
                <span className="material-symbols-outlined text-primary sparkle-ai">account_balance</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface">AI Tax Assistant</h4>
                <p className="text-body-sm text-on-surface-variant">Estimated Q4 Liability Prediction</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-body-sm text-on-surface-variant font-medium">Predictive Tax</span>
                  <span className="font-bold text-on-surface">₦320,000</span>
                </div>
                <div className="h-1 w-full bg-outline-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]"></div>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-white rounded-2xl font-bold text-body-sm shadow-lg shadow-primary/20">SET ASIDE</button>
            </div>
          </div>

          {/* Compliance Footer */}
          <div className="flex flex-col items-center gap-2 pt-6 opacity-40">
            <span className="material-symbols-outlined text-[40px]">shield_person</span>
            <p className="text-[10px] font-bold text-center uppercase tracking-widest max-w-[200px]">
              DATA VERIFIED BY SECURE DISTRIBUTED LEDGER TECHNOLOGY
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
