'use client';

import Link from 'next/link';

const REQUIREMENTS = [
  {
    id: 'sales',
    label: 'Monthly Sales Volume',
    desc: 'Achieve ₦5,000,000+ in gross sales per month',
    current: '₦2.4M',
    target: '₦5M',
    pct: 48,
    met: false,
  },
  {
    id: 'rating',
    label: 'Merchant Rating',
    desc: 'Maintain a 4.8+ average customer rating',
    current: '4.9 ★',
    target: '4.8 ★',
    pct: 100,
    met: true,
  },
  {
    id: 'fulfillment',
    label: 'Order Fulfillment Rate',
    desc: 'Ship 98%+ of orders within 48 hours',
    current: '94%',
    target: '98%',
    pct: 94,
    met: false,
  },
  {
    id: 'returns',
    label: 'Return Rate',
    desc: 'Maintain less than 1% buyer return rate',
    current: '1.2%',
    target: '< 1%',
    pct: 80,
    met: false,
  },
  {
    id: 'gold',
    label: 'Active Gold Membership',
    desc: 'Be an active MTN Gold subscriber',
    current: 'Active',
    target: 'Active',
    pct: 100,
    met: true,
  },
];

export default function PlatinumRequirementsPage() {
  const metCount = REQUIREMENTS.filter(r => r.met).length;

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/gold/membership" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">MTN Platinum</h1>
      </header>

      {/* Elite Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white px-6 py-12 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_#FFCC00_0%,_transparent_70%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px] text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
            Elite Tier
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2">MTN Platinum</h2>
          <p className="text-white/70 text-sm max-w-xs mx-auto">The highest level of trust and benefits on MTN YellowConnect.</p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
            <span className="text-3xl font-black text-yellow-400">{metCount}</span>
            <span className="text-white/60">/</span>
            <span className="text-3xl font-black">{REQUIREMENTS.length}</span>
            <span className="text-sm text-white/60 ml-2">requirements met</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl">
        <div className="space-y-4 mb-8">
          {REQUIREMENTS.map(req => (
            <div key={req.id} className={`rounded-2xl p-5 border-2 transition-all ${req.met ? 'border-green-400/40 bg-green-50/50 dark:bg-green-900/10' : 'border-outline-variant/30 bg-surface-container-low'}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-grow pr-4">
                  <p className={`font-bold text-sm ${req.met ? 'text-green-700 dark:text-green-400' : 'text-on-surface'}`}>{req.label}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{req.desc}</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${req.met ? 'bg-green-500' : 'bg-surface-container-highest'}`}>
                  <span className={`material-symbols-outlined text-[18px] ${req.met ? 'text-white' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {req.met ? 'check' : 'lock'}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${req.met ? 'bg-green-500' : 'bg-secondary'}`}
                  style={{ width: `${req.pct}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-on-surface-variant">Current: <strong>{req.current}</strong></span>
                <span className="text-[10px] text-on-surface-variant">Target: <strong>{req.target}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Platinum Perks */}
        <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-6 text-white border border-white/10">
          <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4">Platinum Exclusive Perks</p>
          <div className="space-y-3">
            {[
              '🏛️ Dedicated account manager',
              '🧪 Beta access to new AI tools',
              '💳 Instant payout (T+0 days)',
              '🚀 5x more listing boost credits',
              '🎪 Featured at YellowConnect events',
            ].map(perk => (
              <p key={perk} className="text-sm text-white/80">{perk}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
