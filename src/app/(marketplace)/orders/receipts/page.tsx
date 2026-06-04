'use client';

import Link from 'next/link';

const RECEIPTS = [
  { id: 'REC-001', date: 'June 01, 2026', total: '₦830,000', items: 2, status: 'Completed', type: 'BUNDLE' },
  { id: 'REC-002', date: 'May 28, 2026', total: '₦45,200', items: 1, status: 'Completed', type: 'SINGLE' },
  { id: 'REC-003', date: 'May 22, 2026', total: '₦125,000', items: 3, status: 'Refunded', type: 'MARKET' },
];

export default function DigitalReceiptGallery() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-surface z-10 sticky top-0 border-b border-outline-variant">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/profile" className="p-2 -ml-2 rounded-full hover:bg-surface-container-low">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-headline-lg font-bold text-on-surface">Receipts</h1>
        </div>
        
        {/* Search & Tabs */}
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Search by ID or Date..."
            className="w-full bg-surface-container-low border border-outline-variant rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary transition-all shadow-sm"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {['All Transactions', 'Refunds', 'Invoices', 'Tax Reports'].map((tab, i) => (
            <button 
              key={tab}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-label-caps font-bold transition-all ${
                i === 0 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Monthly Separator */}
          <h2 className="text-label-caps font-bold text-on-surface-variant px-2">JUNE 2026</h2>

          {/* Receipt Cards */}
          {RECEIPTS.map(rec => (
            <Link 
              key={rec.id}
              href={`/orders/${rec.id}/receipt`}
              className="flex items-center gap-4 p-5 rounded-3xl bg-surface-container-low border border-outline-variant hover:border-primary transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-[32px]">receipt_long</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-on-surface">{rec.id}</h3>
                  <span className="text-primary font-bold">{rec.total}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-body-sm text-on-surface-variant">{rec.date} • {rec.items} Items</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    rec.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
                  }`}>
                    {rec.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </Link>
          ))}

          {/* AI Insight */}
          <div className="mt-12 p-6 rounded-[32px] bg-primary/5 border border-primary/20 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary sparkle-ai">query_stats</span>
              <h4 className="font-bold text-on-surface">AI Spending Report</h4>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              You've saved <span className="font-bold text-green-600">₦35,000</span> this month through AI-negotiated bundles. You're in the top 5% of savvy shoppers!
            </p>
            <button className="w-full bg-surface border border-primary/30 text-primary py-3 rounded-2xl font-bold hover:bg-primary/5 transition-colors">
              VIEW DETAILED ANALYSIS
            </button>
          </div>

        </div>
      </div>

      <style jsx>{`
        .sparkle-ai {
          animation: rotate 4s infinite linear;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
