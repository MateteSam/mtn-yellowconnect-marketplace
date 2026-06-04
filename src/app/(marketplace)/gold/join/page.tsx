'use client';

import Link from 'next/link';

const FEATURES = [
  { icon: 'percent', label: '0% Commission', desc: 'Keep every naira you earn' },
  { icon: 'campaign', label: '3x Boost Credits', desc: 'Monthly promotion credits worth ₦15k' },
  { icon: 'verified', label: 'Gold Badge', desc: 'Stand out with trust indicators' },
  { icon: 'analytics', label: 'Deep Analytics', desc: 'Know your buyers before they buy' },
];

const TESTIMONIALS = [
  { name: 'Amara K.', city: 'Lagos', quote: 'My monthly revenue doubled in 60 days after joining Gold.', avatar: 'A' },
  { name: 'Kofi A.', city: 'Accra', quote: 'The AI pricing tool alone is worth ₦4,999 a month.', avatar: 'K' },
];

export default function JoinGoldPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      {/* Hero with gradient */}
      <div className="relative bg-gradient-to-b from-[#745b00] to-[#a07800] overflow-hidden">
        <Link href="/home" className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white z-10">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="px-6 pt-16 pb-20 text-center relative">
          {/* Animated glow circles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
          <div className="relative">
            <span className="material-symbols-outlined text-6xl text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            <h1 className="text-4xl font-black text-white tracking-tight mb-2">Maximize.<br />Your Sales.</h1>
            <p className="text-white/70 text-base max-w-xs mx-auto">
              Join 12,000+ elite merchants already growing with MTN Gold.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop max-w-xl -mt-8 relative z-10">
        {/* Features */}
        <div className="bg-surface rounded-3xl shadow-xl border border-outline-variant/20 p-6 mb-6">
          <h2 className="font-bold text-title-md mb-5 text-center">What you unlock with Gold</h2>
          <div className="space-y-4">
            {FEATURES.map(f => (
              <div key={f.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{f.label}</p>
                  <p className="text-xs text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm p-5 mb-6">
          <h2 className="font-bold text-title-md mb-4 text-center">What members say</h2>
          <div className="space-y-4">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-surface-container-low rounded-xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name} <span className="font-normal text-on-surface-variant">· {t.city}</span></p>
                  <p className="text-xs text-on-surface-variant italic mt-1">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing CTA */}
        <div className="bg-surface rounded-3xl p-6 border border-outline-variant/20 shadow-sm mb-6">
          <div className="text-center mb-5">
            <p className="text-on-surface-variant text-sm mb-1">All-inclusive plan</p>
            <p className="text-5xl font-black text-primary">₦4,999</p>
            <p className="text-on-surface-variant text-sm">/month · Cancel anytime</p>
          </div>
          <Link href="/gold/checkout" className="block w-full bg-primary text-black text-center py-5 rounded-2xl font-bold text-lg shadow-xl">
            Start My Gold Membership →
          </Link>
          <p className="text-center text-xs text-on-surface-variant mt-3">7-day free trial · No card required</p>
        </div>
      </main>
    </div>
  );
}
