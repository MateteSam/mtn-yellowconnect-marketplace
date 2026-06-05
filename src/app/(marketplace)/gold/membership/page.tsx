'use client';

import Link from 'next/link';

const BENEFITS = [
  { icon: 'percent', title: '0% Commission', desc: 'Keep 100% of every sale. No hidden fees.' },
  { icon: 'star', title: 'Verified Gold Badge', desc: 'Builds instant buyer trust and boosts search ranking.' },
  { icon: 'campaign', title: 'Monthly Boost Credits', desc: '3 listing boosts worth ₦15,000 every month.' },
  { icon: 'analytics', title: 'Advanced Analytics', desc: 'Deep sales insights, buyer demographics & trends.' },
  { icon: 'support_agent', title: 'Priority Support', desc: 'Dedicated support line with <2hr response time.' },
  { icon: 'auto_awesome', title: 'AI Scout Priority', desc: 'Your listings ranked first in AI buyer matching.' },
];

export default function GoldMembershipPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      {/* Premium Hero */}
      <div className="relative bg-gradient-to-br from-[#916B0D] via-[#C9A03A] to-[#FFD700] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 0%, transparent 60%)' }} />
        <div className="relative px-6 pt-12 pb-16 text-center">
          <Link href="/home" className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-white">arrow_back</span>
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <span className="text-xs font-bold uppercase tracking-widest">MTN Gold Membership</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Sell More.<br />Earn More.</h1>
          <p className="text-white/80 text-base max-w-xs mx-auto">
            Join 12,000+ elite merchants growing their businesses with MTN Gold.
          </p>
          <div className="mt-8 bg-white/15 backdrop-blur-sm rounded-2xl p-4 inline-block">
            <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Monthly Subscription</p>
            <p className="text-5xl font-black">₦4,999</p>
            <p className="text-sm text-white/70 mt-1">Cancel anytime · No contracts</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop max-w-2xl -mt-6 relative z-10">
        {/* Benefits Grid */}
        <div className="bg-surface rounded-3xl shadow-xl border border-outline-variant/20 p-6 mb-6">
          <h2 className="font-bold text-title-md mb-5 text-center">Everything included in Gold</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BENEFITS.map(b => (
              <div key={b.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">{b.title}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-white overflow-hidden">
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm">Rated 4.9/5 by members</p>
              <p className="text-xs text-on-surface-variant">"My sales grew 40% in 2 months" — Amara K., Lagos</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-3 pb-6">
          <Link
            href="/gold/checkout"
            className="block w-full bg-primary text-black text-center py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-[0.99] hover:brightness-105 transition-all"
          >
            Start My Gold Membership
          </Link>
          <Link
            href="/gold/join"
            className="block w-full text-center py-4 rounded-2xl font-bold text-secondary border border-secondary/30 hover:bg-secondary/5 transition-colors"
          >
            Learn more about Gold
          </Link>
          <p className="text-center text-xs text-on-surface-variant">By subscribing you agree to our Terms of Service</p>
        </div>
      </main>
    </div>
  );
}
