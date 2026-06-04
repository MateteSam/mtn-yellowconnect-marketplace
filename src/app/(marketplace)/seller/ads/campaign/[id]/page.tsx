"use client";

export const runtime = 'edge';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const DAILY_DATA = [
  { day: 'Mon', imp: 3200, clicks: 108 },
  { day: 'Tue', imp: 4100, clicks: 145 },
  { day: 'Wed', imp: 3800, clicks: 122 },
  { day: 'Thu', imp: 5200, clicks: 198 },
  { day: 'Fri', imp: 4800, clicks: 175 },
  { day: 'Sat', imp: 2100, clicks: 72 },
  { day: 'Sun', imp: 1200, clicks: 40 },
];
const MAX_IMP = 6000;

export default function CampaignAnalyticsPage() {
  const params = useParams();

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/seller/ads/dashboard" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <div className="ml-2">
          <h1 className="font-bold text-base">Solar Hub Pro — Boost</h1>
          <p className="text-[11px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
            Active Campaign
          </p>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl space-y-6">

        {/* Overall Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Impressions', value: '24.4k' },
            { label: 'Clicks', value: '840' },
            { label: 'CTR', value: '3.4%' },
          ].map(s => (
            <div key={s.label} className="bg-surface-container-low rounded-2xl p-4 text-center border border-outline-variant/20">
              <p className="text-2xl font-bold text-on-surface">{s.value}</p>
              <p className="text-[11px] text-on-surface-variant uppercase tracking-wider font-bold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Budget Usage */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
          <div className="flex justify-between mb-3">
            <p className="font-bold">Budget Usage</p>
            <p className="font-bold text-secondary">₦11,200 / ₦15,000</p>
          </div>
          <div className="h-3 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-secondary to-secondary/60 rounded-full" style={{ width: '74.7%' }} />
          </div>
          <div className="flex justify-between mt-2 text-xs text-on-surface-variant">
            <span>74.7% used</span>
            <span>3 days remaining</span>
          </div>
        </div>

        {/* Daily Performance Chart */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
          <h2 className="font-bold text-title-md mb-5">Daily Performance</h2>
          <div className="flex items-end gap-2 h-36">
            {DAILY_DATA.map(d => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  className="w-full rounded-t-lg bg-secondary/20 group-hover:bg-secondary transition-colors relative"
                  style={{ height: `${(d.imp / MAX_IMP) * 100}%` }}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-bold text-secondary bg-white border border-outline-variant/20 rounded px-1 py-0.5 opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-sm">
                    {(d.imp / 1000).toFixed(1)}k imp
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Breakdown */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
          <h2 className="font-bold text-title-md mb-4">Ad Placement Breakdown</h2>
          <div className="space-y-3">
            {[
              { placement: 'Home Feed', pct: 58 },
              { placement: 'Search Results', pct: 28 },
              { placement: 'Similar Listings', pct: 14 },
            ].map(p => (
              <div key={p.placement}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{p.placement}</span>
                  <span className="font-bold">{p.pct}%</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pause / Increase Budget Controls */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl border-2 border-outline-variant/30 font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">
            Pause Campaign
          </button>
          <button className="flex-1 py-3 rounded-xl bg-secondary text-white font-bold hover:brightness-110 transition-all shadow-md">
            Increase Budget
          </button>
        </div>
      </main>
    </div>
  );
}
