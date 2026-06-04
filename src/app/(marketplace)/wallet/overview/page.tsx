'use client';

import Link from 'next/link';

const TRANSACTIONS = [
  { type: 'payout', label: 'Payout to MoMo', amount: '-₦85,000', date: 'Today', icon: 'payments', color: 'text-red-500' },
  { type: 'sale', label: 'Solar Hub Pro sale', amount: '+₦145,000', date: 'Yesterday', icon: 'shopping_cart', color: 'text-green-600' },
  { type: 'sale', label: 'Agri Drone unit', amount: '+₦68,000', date: 'May 29', icon: 'shopping_cart', color: 'text-green-600' },
  { type: 'fee', label: 'Boost Campaign fee', amount: '-₦5,000', date: 'May 28', icon: 'campaign', color: 'text-amber-500' },
  { type: 'sale', label: 'Water Purifier x2', amount: '+₦46,000', date: 'May 27', icon: 'shopping_cart', color: 'text-green-600' },
];

export default function MerchantWalletPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      {/* Wallet Hero */}
      <div className="bg-gradient-to-br from-secondary via-blue-700 to-blue-900 text-white px-6 pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,white,transparent_60%)]" />
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Link href="/home" className="material-symbols-outlined text-white/80">arrow_back</Link>
              <span className="font-bold text-lg">Merchant Wallet</span>
            </div>
            <button className="material-symbols-outlined text-white/80">more_vert</button>
          </div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Available Balance</p>
          <p className="text-5xl font-black mb-2">₦324,500</p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            ₦12,000 pending clearance
          </p>
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop max-w-2xl -mt-8 relative z-10">
        {/* Quick Actions */}
        <div className="bg-surface rounded-3xl shadow-lg border border-outline-variant/10 p-5 mb-6 grid grid-cols-3 gap-4">
          <Link href="/wallet/payout/request" className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send_money</span>
            </div>
            <span className="text-xs font-bold text-center">Request Payout</span>
          </Link>
          <Link href="/wallet/payout/methods" className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <span className="text-xs font-bold text-center">Payout Methods</span>
          </Link>
          <Link href="/lending" className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <span className="text-xs font-bold text-center">Get a Loan</span>
          </Link>
        </div>

        {/* AI Earning Insight */}
        <div className="glass-ai rounded-2xl p-4 border border-primary/20 mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <p className="text-sm text-on-surface-variant">
            <strong className="text-secondary">AI Insight:</strong> You're on track to earn <strong className="text-on-surface">₦540k</strong> this month based on current sales velocity. +22% vs last month.
          </p>
        </div>

        {/* Balance Card Breakdown */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm mb-6">
          <h2 className="font-bold text-title-md mb-4">Balance Breakdown</h2>
          <div className="space-y-3">
            {[
              { label: 'Settled Earnings', amount: '₦324,500', color: 'bg-green-500' },
              { label: 'Pending Clearance', amount: '₦12,000', color: 'bg-amber-400' },
              { label: 'Total Month Revenue', amount: '₦483,000', color: 'bg-secondary' },
            ].map(row => (
              <div key={row.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${row.color}`} />
                  <span className="text-sm text-on-surface-variant">{row.label}</span>
                </div>
                <span className="font-bold text-on-surface">{row.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center">
            <h2 className="font-bold text-title-md">Recent Transactions</h2>
            <button className="text-secondary text-sm font-bold">See All</button>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {TRANSACTIONS.map((tx, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-surface-container-lowest transition-colors">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className={`material-symbols-outlined text-[20px] ${tx.color}`}>{tx.icon}</span>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-medium text-sm text-on-surface truncate">{tx.label}</p>
                  <p className="text-xs text-on-surface-variant">{tx.date}</p>
                </div>
                <p className={`font-bold shrink-0 ${tx.color}`}>{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
