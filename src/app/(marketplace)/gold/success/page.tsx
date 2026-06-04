'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function GoldSuccessPage() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#745b00] via-[#FFCC00]/80 to-background min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <main className="max-w-md w-full animate-in zoom-in-90 fade-in duration-700">
        {/* Trophy Icon */}
        <div className="relative inline-block mb-8">
          <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center mx-auto shadow-2xl">
            <span className="material-symbols-outlined text-6xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-2 tracking-tight">You're Gold!</h1>
        <p className="text-white/80 text-lg mb-3">Welcome to the MTN Gold community</p>
        <p className="text-white/60 text-sm mb-10 max-w-xs mx-auto">
          Your subscription is active. All Gold benefits are now unlocked on your account.
        </p>

        {/* Active Benefits Preview */}
        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 mb-8 text-left space-y-4 border border-white/20 shadow-xl">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest text-center mb-2">Now Active</p>
          {[
            { icon: 'percent', text: '0% commission on all sales' },
            { icon: 'star', text: 'Gold Verified badge live on profile' },
            { icon: 'campaign', text: '3 listing boost credits added' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <p className="text-white font-medium text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Link
            href="/home"
            className="block w-full bg-white text-[#745b00] py-4 rounded-2xl font-bold text-lg shadow-xl active:scale-[0.99] transition-all"
          >
            Explore Marketplace
          </Link>
          <Link
            href="/seller/analytics"
            className="block w-full text-white/80 py-3 font-bold text-sm"
          >
            View my analytics →
          </Link>
        </div>
      </main>
    </div>
  );
}
