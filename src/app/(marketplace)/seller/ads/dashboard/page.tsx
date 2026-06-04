'use client';

import Link from 'next/link';

const CAMPAIGNS = [
  { id: 'C001', title: 'Solar Hub Pro - Boost', status: 'Active', budget: '₦15,000', spent: '₦11,200', impressions: '24.4k', clicks: '840', ctr: '3.4%', statusColor: 'green' },
  { id: 'C002', title: 'Water Kit - Weekend Deal', status: 'Ended', budget: '₦8,000', spent: '₦8,000', impressions: '18.7k', clicks: '560', ctr: '3.0%', statusColor: 'gray' },
  { id: 'C003', title: 'Agri Drone Discovery', status: 'Paused', budget: '₦20,000', spent: '₦4,400', impressions: '9.1k', clicks: '310', ctr: '3.4%', statusColor: 'amber' },
];

export default function AdDashboardPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Link href="/seller/analytics" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
          <h1 className="font-bold text-lg text-primary">Ad Performance</h1>
        </div>
        <Link href="/seller/boost" className="bg-primary text-black text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Campaign
        </Link>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-4xl space-y-6">

        {/* Summary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Campaigns', value: '1', icon: 'campaign', color: 'text-green-500' },
            { label: 'Total Impressions', value: '52.2k', icon: 'visibility', color: 'text-secondary' },
            { label: 'Total Clicks', value: '1,710', icon: 'ads_click', color: 'text-primary' },
            { label: 'Avg CTR', value: '3.3%', icon: 'percent', color: 'text-amber-500' },
          ].map(kpi => (
            <div key={kpi.label} className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 shadow-sm">
              <span className={`material-symbols-outlined ${kpi.color} text-[22px]`}>{kpi.icon}</span>
              <p className="text-2xl font-bold text-on-surface mt-1">{kpi.value}</p>
              <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* AI Recommendation */}
        <div className="glass-ai rounded-2xl p-4 border border-primary/20 flex items-center gap-4">
          <div className="bg-primary p-2.5 rounded-xl text-on-primary shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div className="flex-grow">
            <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-0.5">AI Recommendation</p>
            <p className="text-on-surface-variant text-sm">Increase your <strong className="text-on-surface">Solar Hub Pro</strong> budget by 20% — similar listings are seeing 2x returns this week.</p>
          </div>
          <button className="bg-secondary text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap">Apply</button>
        </div>

        {/* Campaign Table */}
        <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-outline-variant/10 flex items-center justify-between">
            <h2 className="font-bold text-title-md">Campaigns</h2>
            <span className="text-xs text-on-surface-variant">{CAMPAIGNS.length} total</span>
          </div>

          <div className="divide-y divide-outline-variant/10">
            {CAMPAIGNS.map(c => (
              <Link key={c.id} href={`/seller/ads/campaign/${c.id}`} className="flex flex-col md:flex-row md:items-center gap-4 p-5 hover:bg-surface-container-lowest transition-colors">
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${c.statusColor === 'green' ? 'bg-green-500' : c.statusColor === 'amber' ? 'bg-amber-400' : 'bg-outline-variant'}`} />
                    <p className="font-bold text-sm truncate">{c.title}</p>
                    <span className={`text-[10px] font-bold uppercase ml-auto px-2 py-0.5 rounded ${c.statusColor === 'green' ? 'bg-green-100 text-green-700' : c.statusColor === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-surface-container-high text-on-surface-variant'}`}>
                      {c.status}
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs text-on-surface-variant flex-wrap">
                    <span>Impressions: <strong className="text-on-surface">{c.impressions}</strong></span>
                    <span>Clicks: <strong className="text-on-surface">{c.clicks}</strong></span>
                    <span>CTR: <strong className="text-on-surface">{c.ctr}</strong></span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-secondary">{c.spent}</p>
                  <p className="text-xs text-on-surface-variant">of {c.budget}</p>
                  <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-1.5 ml-auto">
                    <div className="h-full bg-secondary rounded-full" style={{ width: `${(parseFloat(c.spent.replace(/[₦,k]/g, '')) / parseFloat(c.budget.replace(/[₦,k]/g, ''))) * 100}%` }} />
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline hidden md:block">chevron_right</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
