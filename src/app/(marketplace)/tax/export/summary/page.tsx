'use client';

import Link from 'next/link';

export default function AnnualTaxSummaryExportPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/export/select-year" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Export Summary</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-surface rounded-[40px] border border-outline-variant/20 shadow-xl overflow-hidden mb-10">
          <div className="bg-primary p-8 text-black relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">MTN YellowConnect Reports</p>
            <h2 className="text-3xl font-black italic">2025 Annual Summary</h2>
          </div>

          <div className="p-8 space-y-8">
            <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
              <div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Total Marketplace Sales</p>
                <p className="text-2xl font-black">₦12,450,000</p>
              </div>
              <p className="text-xs font-bold text-on-surface-variant">412 Transactions</p>
            </div>

            <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
              <div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Aggregate VAT Withheld</p>
                <p className="text-2xl font-black">₦933,750</p>
              </div>
              <p className="text-xs font-bold text-primary italic">Verified Paid to FIRS</p>
            </div>

            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">Export Format</h3>
              <div className="flex gap-3">
                <button className="flex-1 bg-white border border-outline-variant/20 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-red-600">picture_as_pdf</span> PDF
                </button>
                <button className="flex-1 bg-white border border-outline-variant/20 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-green-600">table_chart</span> EXCEL
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-ai p-8 rounded-[32px] border border-primary/20">
          <div className="flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary">gavel</span>
            <div>
              <p className="font-bold text-sm mb-2">Legal Disclaimer</p>
              <p className="text-xs text-on-surface-variant leading-relaxed antialiased">
                This summary is intended for reconciliation with your local tax authority records. MTN YellowConnect acts as a collection agent for VAT only.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
