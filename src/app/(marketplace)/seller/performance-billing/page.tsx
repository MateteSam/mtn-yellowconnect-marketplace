'use client';

import Link from 'next/link';

const STATS = [
  { label: 'Seller Score', value: '4.92', trend: '+0.05', color: 'text-green-600', bg: 'bg-green-100', icon: 'star' },
  { label: 'Fulfillment', value: '98.5%', trend: '+1.2%', color: 'text-blue-600', bg: 'bg-blue-100', icon: 'package_2' },
  { label: 'Response Time', value: '12m', trend: '-2m', color: 'text-purple-600', bg: 'bg-purple-100', icon: 'bolt' },
  { label: 'Return Rate', value: '0.8%', trend: '-0.2%', color: 'text-green-600', bg: 'bg-green-100', icon: 'assignment_return' },
];

export default function PerformanceBillingDashboardPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/seller/analytics" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Performance & Billing</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-6 max-w-4xl">
        {/* Tier Hero */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden text-black">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined font-black" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Current Tier</p>
            </div>
            <h2 className="text-4xl font-black mb-6">MTN Gold Merchant</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/10 px-4 py-2 rounded-xl backdrop-blur-md border border-black/5">
                <p className="text-[10px] font-black uppercase opacity-60">Status</p>
                <p className="font-black">Active</p>
              </div>
              <div className="bg-black/10 px-4 py-2 rounded-xl backdrop-blur-md border border-black/5">
                <p className="text-[10px] font-black uppercase opacity-60">Next Billing</p>
                <p className="font-black">July 01, 2026</p>
              </div>
              <div className="bg-black/10 px-4 py-2 rounded-xl backdrop-blur-md border border-black/5">
                <p className="text-[10px] font-black uppercase opacity-60">Base Fee</p>
                <p className="font-black">₦5,000/mo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {STATS.map(stat => (
            <div key={stat.label} className="bg-surface p-5 rounded-3xl border border-outline-variant/20 shadow-sm group hover:border-primary/50 transition-all">
              <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <p className="text-2xl font-black text-on-surface">{stat.value}</p>
              <div className="flex items-center gap-1.5">
                <p className="text-[11px] text-on-surface-variant font-bold">{stat.label}</p>
                <span className={`text-[10px] font-black ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-blue-600'}`}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Billing & Invoices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="font-black text-lg">Recent Invoices</h3>
              <button className="text-xs font-bold text-secondary hover:underline">See All</button>
            </div>
            <div className="divide-y divide-outline-variant/10">
              {[
                { date: 'June 01, 2026', amount: '₦5,000', label: 'MTN Gold Subscription', id: '#INV-8821' },
                { date: 'May 15, 2026', amount: '₦12,400', label: 'Ad Campaign Overages', id: '#INV-8750' },
                { date: 'May 01, 2026', amount: '₦5,000', label: 'MTN Gold Subscription', id: '#INV-8612' },
              ].map(inv => (
                <div key={inv.id} className="p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
                  <div>
                    <p className="font-bold text-sm">{inv.label}</p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{inv.date} · {inv.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-sm">{inv.amount}</p>
                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm p-8">
            <h3 className="font-black text-lg mb-6 text-center">Platinum Eligibility</h3>
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="64" cy="64" r="58" className="stroke-surface-container-high fill-none border-8" strokeWidth="8" />
                  <circle cx="64" cy="64" r="58" className="stroke-slate-900 fill-none" strokeWidth="10" strokeDasharray="364" strokeDashoffset="72.8" strokeLinecap="round" />
                </svg>
                <div className="absolute text-center">
                  <p className="text-2xl font-black">80%</p>
                  <p className="text-[9px] font-black uppercase opacity-60">Met</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-on-surface-variant leading-relaxed px-4">
              Almost there! Maintain your sales volume for <strong className="text-on-surface">14 more days</strong> to unlock Platinum status.
            </p>
            <Link href="/platinum/requirements" className="block w-full mt-8 bg-slate-900 text-white text-center py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all">
              View Requirements
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
