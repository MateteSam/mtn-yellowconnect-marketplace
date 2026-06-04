'use client';

import Link from 'next/link';

export default function AchievementNotificationPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      <main className="w-full max-w-sm animate-in fade-in zoom-in-90 duration-700 text-center">

        {/* Achievement Badge */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl mx-auto rotate-6">
            <span className="material-symbols-outlined text-6xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
          </div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg border-2 border-white">
            <span className="material-symbols-outlined text-white text-[22px]">check</span>
          </div>
        </div>

        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Achievement Unlocked</p>
        <h1 className="text-3xl font-black mb-2">Century Seller! 🎉</h1>
        <p className="text-on-surface-variant text-base mb-8 max-w-xs mx-auto">
          Congratulations! You've completed 100 successful transactions. You've officially earned the <strong className="text-on-surface">Century Seller</strong> badge.
        </p>

        {/* Badge Preview Card */}
        <div className="bg-surface-container-low rounded-3xl p-6 mb-8 border border-outline-variant/20 shadow-sm text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
            </div>
            <div>
              <p className="font-bold text-on-surface">Century Seller</p>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-primary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="text-xs text-on-surface-variant ml-1">Rare Achievement</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Awarded to sellers who complete 100+ verified transactions with a customer satisfaction rating above 4.5. Only <strong className="text-on-surface">8% of sellers</strong> have earned this.
          </p>
        </div>

        {/* Perks unlocked */}
        <div className="glass-ai rounded-2xl p-4 border border-primary/20 mb-8 text-left">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Perks Unlocked</p>
          <div className="space-y-2">
            {[
              '🏷️ "Century" badge displayed on your profile',
              '📣 Featured in MTN Marketplace Newsletter',
              '🎁 ₦5,000 bonus boost credit added',
            ].map(p => (
              <p key={p} className="text-sm text-on-surface-variant">{p}</p>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 w-full">
          <Link
            href="/seller/profile/badges"
            className="block w-full bg-primary text-black py-4 rounded-2xl font-bold text-lg shadow-xl text-center"
          >
            View All My Badges
          </Link>
          <Link
            href="/home"
            className="block w-full text-center py-4 rounded-2xl font-bold text-on-surface-variant border border-outline-variant/30"
          >
            Back to Marketplace
          </Link>
        </div>
      </main>
    </div>
  );
}
