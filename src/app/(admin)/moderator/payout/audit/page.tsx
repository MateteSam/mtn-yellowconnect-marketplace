'use client';

import Link from 'next/link';

const AUDIT_LOGS = [
  { id: 'LOG-4491', action: 'Frequency Changed', actor: 'Merchant #8801', details: 'Daily -> Weekly', date: 'June 01, 14:20', risk: 'LOW' },
  { id: 'LOG-4485', action: 'Threshold Edit', actor: 'Merchant #7290', details: '₦10K -> ₦50K', date: 'June 01, 11:05', risk: 'LOW' },
  { id: 'LOG-4480', action: 'Auto-Payout Disabled', actor: 'Merchant #2103', details: 'Risk Flag Mitigation', date: 'May 31, 16:45', risk: 'HIGH' },
  { id: 'LOG-4472', action: 'Bank Detail Change', actor: 'Merchant #8801', details: 'MoMo Account Update', date: 'May 30, 09:12', risk: 'MED' },
];

export default function PayoutAuditView() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Admin Header */}
      <header className="px-6 py-6 bg-surface border-b-2 border-on-surface sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="p-2 -ml-2 rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-title-md font-black tracking-tight uppercase">Payout Governance</h1>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 flex items-center gap-1 w-fit">
              <span className="material-symbols-outlined text-[12px]">security</span>
              MODERATOR ACCESS
            </span>
          </div>
        </div>
        <button className="bg-on-surface text-white px-4 py-2 rounded-lg font-bold text-label-caps hover:bg-on-surface/90">
          GENERATE REPORT
        </button>
      </header>

      <div className="flex-1 px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant shadow-sm">
              <span className="text-label-caps font-bold text-on-surface-variant">FLAGGED EDITS</span>
              <p className="text-display-xs font-black mt-1">12</p>
            </div>
            <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant shadow-sm">
              <span className="text-label-caps font-bold text-on-surface-variant">AUDIT VELOCITY</span>
              <p className="text-display-xs font-black mt-1 text-green-600">+15%</p>
            </div>
            <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant shadow-sm">
              <span className="text-label-caps font-bold text-on-surface-variant">ESCROW DRIFT</span>
              <p className="text-display-xs font-black mt-1 text-amber-600">₦2.4M</p>
            </div>
          </div>

          {/* Audit Log Table */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-label-caps font-black tracking-widest text-on-surface">CENTRAL AUDIT TRAIL</h2>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Filter by Actor..."
                  className="bg-surface-container py-2 pl-10 pr-4 rounded-xl border border-outline-variant focus:border-on-surface outline-none text-body-sm font-medium"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
              </div>
            </div>

            <div className="bg-surface rounded-3xl border-2 border-on-surface overflow-hidden shadow-xl shadow-on-surface/5">
              <div className="grid grid-cols-5 px-6 py-4 bg-on-surface text-white text-[10px] font-black tracking-widest uppercase">
                <span>EVENT ID</span>
                <span>ACTION</span>
                <span>ACTOR</span>
                <span>DETAILS</span>
                <span className="text-right">RISK</span>
              </div>
              <div className="divide-y divide-outline-variant">
                {AUDIT_LOGS.map(log => (
                  <div key={log.id} className="grid grid-cols-5 px-6 py-5 items-center hover:bg-surface-container-low transition-colors group">
                    <span className="font-mono text-[11px] font-bold text-on-surface-variant">{log.id}</span>
                    <div className="flex flex-col">
                      <span className="font-black text-body-sm text-on-surface">{log.action}</span>
                      <span className="text-[10px] text-on-surface-variant font-bold">{log.date}</span>
                    </div>
                    <span className="text-body-sm font-bold text-primary group-hover:underline cursor-pointer">{log.actor}</span>
                    <span className="text-body-sm text-on-surface-variant font-medium">{log.details}</span>
                    <div className="flex justify-end">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest ${
                        log.risk === 'HIGH' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 
                        log.risk === 'MED' ? 'bg-amber-500 text-white' : 'bg-surface-container-highest text-on-surface-variant'
                      }`}>
                        {log.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Auditor Insight */}
          <div className="p-8 rounded-[3rem] bg-indigo-50 border-2 border-indigo-100 flex gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-0.5 border-4 border-indigo-200">
              <span className="material-symbols-outlined text-indigo-600 text-[32px] animate-spin-slow">security</span>
            </div>
            <div className="flex-1">
              <h4 className="text-body-lg font-black text-indigo-900 leading-tight uppercase tracking-tight">AI Auditor Recommendation</h4>
              <p className="text-body-md text-indigo-700/80 mt-1 font-medium">
                Detected suspicious payout frequency fluctuation for 3 accounts in the Lagos region. Automated escrow lock has been proposed for review.
              </p>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-black text-label-caps shadow-lg shadow-indigo-600/20 hover:scale-105 transition-transform active:scale-95">
              REVIEW FLAGS
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s infinite linear;
        }
      `}</style>
    </div>
  );
}
