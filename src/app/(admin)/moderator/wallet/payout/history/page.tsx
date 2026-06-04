'use client';

import Link from 'next/link';

const AUDIT_LOG = [
  { id: '1', merchant: 'Musa Supplies', action: 'Daily → Weekly', date: 'Today, 11:15 AM', risk: 'Low', icon: 'sync_alt' },
  { id: '2', merchant: 'Victory Gadgets', action: 'Disabled Auto-pay', date: 'Yesterday, 04:30 PM', risk: 'Medium', icon: 'block' },
  { id: '3', merchant: 'Lagos AI Hub', action: 'Weekly → Daily', date: 'May 30, 2026', risk: 'High', icon: 'speed' },
];

export default function ModeratorPayoutFrequencyAuditLogPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/moderator/dashboard" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Payout Audit Log</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-4xl">
        <div className="bg-slate-900 text-white rounded-[40px] p-8 mb-10 shadow-2xl flex items-center justify-between">
           <div>
             <h2 className="text-2xl font-black italic">Financial Integrity</h2>
             <p className="text-white/40 text-sm">Monitoring frequency shifts to detect potential account takeovers.</p>
           </div>
           <div className="hidden sm:flex h-16 w-1 bg-white/10 rounded-full"></div>
           <div className="text-right">
             <p className="text-3xl font-black text-primary">12</p>
             <p className="text-[10px] font-black uppercase text-white/40">Flags Today</p>
           </div>
        </div>

        <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container/30 border-b border-outline-variant/10">
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Merchant</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Frequency Change</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Risk Level</th>
                <th className="p-5 text-right text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {AUDIT_LOG.map(log => (
                <tr key={log.id} className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                  <td className="p-5">
                    <p className="font-bold text-sm">{log.merchant}</p>
                    <p className="text-[10px] text-on-surface-variant font-medium italic">Verified Merchant</p>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                       <span className="material-symbols-outlined text-sm text-on-surface-variant">{log.icon}</span>
                       <span className="text-xs font-black">{log.action}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                      log.risk === 'High' ? 'bg-red-100 text-red-700' : (log.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700')
                    }`}>
                      {log.risk}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <p className="text-xs font-bold text-on-surface-variant">{log.date}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
