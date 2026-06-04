'use client';

import Link from 'next/link';
import { useState } from 'react';

const PERIODS = ['7D', '30D', '90D', 'All'];

const CHART_DATA = [40, 65, 50, 80, 72, 95, 88, 110, 105, 130, 120, 145];
const CHART_MAX = 160;

export default function SellerAnalyticsPage() {
  const [period, setPeriod] = useState('30D');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      {/* Header */}
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 shadow-sm border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Link href="/home" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
          <h1 className="font-bold text-lg text-primary">Insights & Analytics</h1>
        </div>
        <button className="text-secondary font-bold text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">ios_share</span>
          Export
        </button>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-4xl space-y-6">

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Revenue', value: '₦2.4M', delta: '+18%', up: true, icon: 'payments' },
            { label: 'Total Sales', value: '856', delta: '+12%', up: true, icon: 'shopping_cart' },
            { label: 'Avg. Order', value: '₦28k', delta: '-3%', up: false, icon: 'receipt_long' },
            { label: 'Return Rate', value: '1.2%', delta: '-0.5%', up: true, icon: 'redo' },
          ].map(kpi => (
            <div key={kpi.label} className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">{kpi.icon}</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${kpi.up ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {kpi.delta}
                </span>
              </div>
              <p className="text-xl font-bold text-on-surface">{kpi.value}</p>
              <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="bg-surface rounded-2xl p-6 border border-outline-variant/20 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-title-md">Revenue Trend</h2>
            <div className="flex gap-1">
              {PERIODS.map(p => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${period === p ? 'bg-primary text-black' : 'bg-surface-container-high text-on-surface-variant'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Bar Chart */}
          <div className="flex items-end gap-2 h-40 mt-2">
            {CHART_DATA.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  className="w-full rounded-t-lg bg-secondary/20 group-hover:bg-secondary transition-colors relative"
                  style={{ height: `${(val / CHART_MAX) * 100}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-secondary opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    ₦{val}k
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-on-surface-variant mt-2">
            <span>Jan</span><span>Mar</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* AI Insights */}
        <div className="glass-ai rounded-2xl p-5 border border-primary/20 flex items-start gap-4">
          <div className="bg-primary p-2.5 rounded-xl text-on-primary shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div>
            <p className="font-bold text-secondary text-sm uppercase tracking-widest mb-1">AI Insight</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Your <span className="font-bold text-on-surface">Thursday listings</span> outperform other days by 34%. Consider boosting 2 new listings this Thursday to maximize reach.
            </p>
            <button className="mt-3 text-secondary font-bold text-sm hover:underline">See Recommended Actions →</button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-outline-variant/10">
            <h2 className="font-bold text-title-md">Top Performing Listings</h2>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {[
              { title: 'Solar Irrigation Hub Pro', revenue: '₦920k', sold: 42, trend: 'up' },
              { title: 'Hybrid Seeding Platform', revenue: '₦680k', sold: 28, trend: 'up' },
              { title: 'Water Purification Kit', revenue: '₦440k', sold: 18, trend: 'down' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-surface-container-lowest transition-colors">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center font-bold text-on-surface-variant">
                  {i + 1}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-bold text-sm text-on-surface truncate">{item.title}</p>
                  <p className="text-xs text-on-surface-variant">{item.sold} units sold</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-secondary">{item.revenue}</p>
                  <span className={`material-symbols-outlined text-[16px] ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend === 'up' ? 'trending_up' : 'trending_down'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buyer Demographics Snapshot */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
          <h2 className="font-bold text-title-md mb-5">Buyer Demographics</h2>
          <div className="space-y-3">
            {[
              { country: 'Nigeria', flag: '🇳🇬', pct: 62 },
              { country: 'Ghana', flag: '🇬🇭', pct: 22 },
              { country: 'Kenya', flag: '🇰🇪', pct: 11 },
              { country: 'Other', flag: '🌍', pct: 5 },
            ].map(row => (
              <div key={row.country} className="flex items-center gap-3">
                <span className="text-xl">{row.flag}</span>
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{row.country}</span>
                    <span className="text-sm font-bold text-secondary">{row.pct}%</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
