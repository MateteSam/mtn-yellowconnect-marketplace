'use client';

import Link from 'next/link';

const RECENT_ACTIVITY = [
  { id: '1', title: 'Payout Scheduled', detail: 'Daily · 08:00 AM', amount: '₦0 fee', icon: 'schedule', color: 'text-blue-600' },
  { id: '2', title: 'VAT Deduction', detail: 'Txn #9921-A', amount: '-₦1,250', icon: 'gavel', color: 'text-red-500' },
  { id: '3', title: 'Loan Disbursement', detail: 'MoMo *882', amount: '+₦250,000', icon: 'transit_enterexit', color: 'text-green-600' },
];

export default function UpdatedMerchantWalletDashboardPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/profile" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Merchant Wallet</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        {/* Main Balance Card */}
        <div className="bg-slate-900 text-white rounded-[40px] p-10 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Available Balance</p>
          <div className="flex items-start gap-1 mb-10">
            <span className="text-2xl font-bold mt-2">₦</span>
            <span className="text-6xl font-black tracking-tighter">1,412,850</span>
          </div>
          <div className="flex gap-3">
            <Link href="/wallet/payout/request" className="flex-1 bg-primary text-black py-4 rounded-2xl font-bold text-center text-sm shadow-lg hover:brightness-110 transition-all">
              Withdraw
            </Link>
            <Link href="/wallet/payout/scheduling" className="flex-1 bg-white/10 border border-white/20 py-4 rounded-2xl font-bold text-center text-sm hover:bg-white/20 transition-all">
              Schedule
            </Link>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Link href="/lending" className="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm flex flex-col items-center text-center group hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <p className="font-black text-sm">Lending</p>
            <p className="text-[10px] font-bold text-on-surface-variant mt-1 italic">₦250k Active</p>
          </Link>
          <Link href="/tax/compliance" className="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm flex flex-col items-center text-center group hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <p className="font-black text-sm">Tax Center</p>
            <p className="text-[10px] font-bold text-green-600 mt-1 uppercase tracking-widest">Compliant</p>
          </Link>
        </div>

        {/* Integrated History */}
        <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden mb-10">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 className="font-black text-lg">Integrated Activity</h3>
            <Link href="/wallet/momo/history" className="text-xs font-bold text-secondary hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {RECENT_ACTIVITY.map(act => (
              <div key={act.id} className="p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
                <div className="flex items-center gap-4">
                  <span className={`material-symbols-outlined ${act.color}`}>{act.icon}</span>
                  <div>
                    <p className="font-bold text-sm">{act.title}</p>
                    <p className="text-[10px] text-on-surface-variant font-bold">{act.detail}</p>
                  </div>
                </div>
                <p className={`font-black text-sm ${act.amount.startsWith('+') ? 'text-green-600' : (act.amount.startsWith('-') ? 'text-red-500' : 'text-on-surface-variant')}`}>
                  {act.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 rounded-3xl p-6 border border-primary/20">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">auto_awesome</span>
            </div>
            <p className="text-xs text-on-surface font-bold leading-relaxed">
              AI Insight: Switching to "Threshold Payouts" (₦50k) could save you ₦300 in monthly processing fees.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
