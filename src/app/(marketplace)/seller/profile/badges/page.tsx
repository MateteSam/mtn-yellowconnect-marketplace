'use client';

import Link from 'next/link';

const BADGES = [
  { id: 'fast-shipper', name: 'Fast Shipper', desc: 'Ships 95%+ of orders within 24 hours', earned: true, icon: 'rocket_launch', color: 'from-blue-500 to-indigo-600' },
  { id: 'high-trust', name: 'High Trust Merchant', desc: 'Maintains a 4.8+ rating over 50+ reviews', earned: true, icon: 'verified_user', color: 'from-green-500 to-emerald-600' },
  { id: 'gold-member', name: 'MTN Gold Member', desc: 'Active MTN Gold subscriber', earned: true, icon: 'workspace_premium', color: 'from-yellow-500 to-amber-600' },
  { id: 'century', name: 'Century Seller', desc: 'Completed 100+ successful transactions', earned: true, icon: 'emoji_events', color: 'from-orange-500 to-red-600' },
  { id: 'repeat-buyer', name: 'Loyal Community', desc: '40%+ of buyers return for another purchase', earned: false, icon: 'favorite', color: 'from-pink-500 to-rose-600', progress: 68 },
  { id: 'ai-pioneer', name: 'AI Pioneer', desc: 'First 1,000 sellers to use AI pricing', earned: false, icon: 'auto_awesome', color: 'from-violet-500 to-purple-700', progress: 42 },
  { id: 'cross-border', name: 'Cross-Border Champion', desc: 'Completed sales to 3+ countries', earned: false, icon: 'public', color: 'from-teal-500 to-cyan-600', progress: 33 },
  { id: 'platinum-ready', name: 'Platinum Ready', desc: 'Meet all MTN Platinum requirements', earned: false, icon: 'diamond', color: 'from-slate-500 to-slate-800', progress: 60 },
];

export default function SellerBadgesPage() {
  const earned = BADGES.filter(b => b.earned);
  const inProgress = BADGES.filter(b => !b.earned);

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/seller/analytics" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2 text-primary">Achievements & Badges</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl">
        {/* Earned Banner */}
        <div className="bg-gradient-to-r from-secondary to-blue-700 text-white rounded-3xl p-6 mb-8 flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
          </div>
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest">Your Progress</p>
            <p className="text-3xl font-black">{earned.length} <span className="text-lg font-normal text-white/70">of {BADGES.length} badges earned</span></p>
            <p className="text-white/70 text-sm mt-1">Keep going — {inProgress.length} more to unlock!</p>
          </div>
        </div>

        {/* Earned Badges */}
        <section className="mb-8">
          <h2 className="font-bold text-title-md mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            Earned ({earned.length})
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {earned.map(badge => (
              <div key={badge.id} className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 shadow-sm">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                </div>
                <p className="font-bold text-sm text-on-surface">{badge.name}</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5 leading-tight">{badge.desc}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[12px]">check</span> Earned
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* In Progress Badges */}
        <section>
          <h2 className="font-bold text-title-md mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500">lock</span>
            In Progress ({inProgress.length})
          </h2>
          <div className="space-y-3">
            {inProgress.map(badge => (
              <div key={badge.id} className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 flex items-center gap-4 opacity-80">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-white/60 shrink-0 relative`}>
                  <span className="material-symbols-outlined opacity-60">{badge.icon}</span>
                  <div className="absolute inset-0 bg-black/30 rounded-xl" />
                  <span className="material-symbols-outlined absolute text-white text-[24px]">lock</span>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-bold text-sm text-on-surface">{badge.name}</p>
                  <p className="text-[11px] text-on-surface-variant">{badge.desc}</p>
                  <div className="mt-2">
                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${badge.progress}%` }} />
                    </div>
                    <p className="text-[10px] text-on-surface-variant mt-1">{badge.progress}% complete</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
