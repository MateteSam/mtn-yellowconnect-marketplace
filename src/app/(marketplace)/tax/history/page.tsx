'use client';

import Link from 'next/link';

const HISTORY = [
  { id: '1', type: 'Annual VAT Filing', date: 'June 01, 2026', status: 'Pending', icon: 'description', color: 'text-amber-600' },
  { id: '2', type: 'TIN Verification', date: 'May 15, 2026', status: 'Approved', icon: 'verified', color: 'text-green-600' },
  { id: '3', type: 'Merchant License Renewal', date: 'April 20, 2026', status: 'Approved', icon: 'assignment_turned_in', color: 'text-blue-600' },
  { id: '4', type: 'Suspicious Activity Audit', date: 'March 10, 2026', status: 'Cleared', icon: 'fact_check', color: 'text-green-600' },
];

export default function ComplianceHistoryPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Compliance History</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-6 max-w-lg">
        <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10 mb-8 flex justify-between items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Account Health</p>
            <p className="text-2xl font-black text-green-600">Perfectly Compliant</p>
          </div>
          <span className="material-symbols-outlined text-4xl text-green-600">health_and_safety</span>
        </div>

        <div className="space-y-4">
          {HISTORY.map(item => (
            <Link 
              key={item.id} 
              href={`/tax/history/${item.id}`}
              className="bg-surface p-5 rounded-2xl border border-outline-variant/20 flex items-center justify-between group hover:border-primary/40 transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center ${item.color}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{item.type}</p>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${item.status === 'Approved' || item.status === 'Cleared' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {item.status}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] ml-2 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
