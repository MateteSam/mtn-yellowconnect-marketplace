'use client';

import Link from 'next/link';

const LOAN_TXNS = [
  { id: '1', type: 'Loan Disbursement', amount: '₦250,000', date: 'Today, 05:45 PM', status: 'Success', icon: 'transit_enterexit', color: 'text-green-600' },
  { id: '2', type: 'Repayment Debit', amount: '-₦22,500', date: 'June 01, 2026', status: 'Pending', icon: 'payments', color: 'text-amber-600' },
  { id: '3', type: 'Interest Credit', amount: '₦1,200', date: 'May 28, 2026', status: 'Success', icon: 'add_card', color: 'text-blue-600' },
  { id: '4', type: 'Early Repayment', amount: '-₦50,000', date: 'May 15, 2026', status: 'Success', icon: 'history', color: 'text-slate-900' },
];

export default function MoMoLoanHistoryPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/wallet/overview" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">MoMo Loan History</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-6 max-w-lg">
        <div className="bg-primary text-black p-6 rounded-3xl mb-8 shadow-lg">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Impact on MoMo Balance</p>
          <p className="text-3xl font-black">Net +₦178,700</p>
          <p className="text-xs font-bold mt-2 opacity-80 italic">"Loan funds are instantly available for MoMo Cash-out or Pay-with-MoMo."</p>
        </div>

        <div className="space-y-4">
          {LOAN_TXNS.map(txn => (
            <div key={txn.id} className="bg-surface p-5 rounded-2xl border border-outline-variant/20 flex items-center justify-between group hover:border-primary/40 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center ${txn.color}`}>
                  <span className="material-symbols-outlined">{txn.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{txn.type}</p>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase">{txn.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-black text-sm ${txn.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                  {txn.amount}
                </p>
                <div className="flex items-center justify-end gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${txn.status === 'Success' ? 'bg-green-600' : 'bg-amber-600'}`}></span>
                  <span className="text-[9px] font-black uppercase tracking-tighter text-on-surface-variant">{txn.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-8 bg-surface-container-highest text-on-surface-variant py-4 rounded-2xl font-bold border border-outline-variant/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">download</span>
          Export as CSV
        </button>
      </main>
    </div>
  );
}
