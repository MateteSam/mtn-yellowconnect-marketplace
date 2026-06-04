'use client';

import Link from 'next/link';
import { useState } from 'react';

const STATS = [
  { label: 'Pending Reviews', value: '42', icon: 'pending_actions', color: 'text-amber-500' },
  { label: 'Flagged Listings', value: '18', icon: 'flag', color: 'text-red-500' },
  { label: 'Resolved (24h)', value: '156', icon: 'check_circle', color: 'text-green-500' },
  { label: 'Avg Feedback', value: '4.8', icon: 'star', color: 'text-primary' },
];

const FLAGGED_ITEMS = [
  {
    id: 'L-8829',
    title: 'High-End Power Generator',
    user: 'User_4421',
    reason: 'Suspicious Price (Too Low)',
    risk: 'High',
    time: '12m ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OJ_4TT4lWQbTG0r9NoPWnk-ix3VtxTJempO33Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU',
  },
  {
    id: 'L-8830',
    title: 'Designer Sunglasses',
    user: 'Merchant_GH',
    reason: 'Potential Counterfeit',
    risk: 'Medium',
    time: '45m ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OJ_4TT4lWQbTG0r9NoPWnk-ix3VtxTJempO33Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU',
  },
];

export default function ModeratorDashboard() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="bg-[#f8f9fa] dark:bg-neutral-950 min-h-screen">
      {/* Side-Nav Mock for Desktop / Header for Mobile */}
      <header className="bg-secondary text-white p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/home" className="material-symbols-outlined">shield_person</Link>
          <h1 className="font-bold text-lg">Trust & Safety Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-white/20 px-2 py-1 rounded truncate max-w-[100px]">Admin: Kwame M.</span>
          <button className="material-symbols-outlined">notifications</button>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-7xl mx-auto pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-neutral-900 p-5 rounded-2xl shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between mb-2">
                <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
                <span className="text-xs text-on-surface-variant font-medium">This Week</span>
              </div>
              <p className="text-2xl font-bold text-on-surface">{stat.value}</p>
              <p className="text-[12px] text-on-surface-variant uppercase font-bold tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* AI Insight Bar */}
        <div className="glass-ai rounded-2xl p-5 mb-8 border border-primary/20 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-xl text-on-primary shadow-lg animate-pulse">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div>
              <p className="font-bold text-secondary">AI Threat Detection</p>
              <p className="text-body-sm text-on-surface-variant">System identified a <span className="text-red-500 font-bold">12% spike</span> in suspicious electronics listings in the Lagos region.</p>
            </div>
          </div>
          <button className="md:ml-auto bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-body-sm hover:brightness-110 transition-all whitespace-nowrap">
            Deploy Filter Update
          </button>
        </div>

        {/* Action Table */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-outline-variant/20 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 flex flex-col md:flex-row justify-between gap-4">
            <h2 className="font-bold text-title-md">Queue: Flagged Listings</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {['All', 'High Risk', 'Electronics', 'Fraud'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all whitespace-nowrap ${
                    filter === f ? 'bg-primary text-black' : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">Listing</th>
                  <th className="px-6 py-4">Reason</th>
                  <th className="px-6 py-4">Risk</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {FLAGGED_ITEMS.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-container overflow-hidden shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-body-sm text-on-surface">{item.title}</p>
                          <p className="text-[10px] text-on-surface-variant">{item.user} • {item.time}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm text-on-surface-variant font-medium">
                      {item.reason}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                        item.risk === 'High' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        {item.risk} Risk
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-all">
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-all">
                          <span className="material-symbols-outlined text-[18px]">block</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center hover:bg-surface-variant transition-all">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-surface-container-low border-t border-outline-variant/10 text-center">
            <button className="text-primary font-bold text-body-sm hover:underline">View Full Moderation Queue</button>
          </div>
        </div>
      </main>
    </div>
  );
}
