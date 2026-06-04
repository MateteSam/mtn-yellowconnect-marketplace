'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const runtime = 'edge';

export default function OrderSuccessPage() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface items-center justify-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full"></div>

      {/* Success Content */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full animate-in fade-in zoom-in duration-700">
        {/* Animated Check */}
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
          <span className="material-symbols-outlined text-[64px] text-white animate-bounce">check_circle</span>
        </div>

        <h1 className="text-headline-lg font-bold text-on-surface text-center mb-2">Order Confirmed!</h1>
        <p className="text-body-lg text-on-surface-variant text-center mb-8">
          Your payment via MoMo was successful. We've notified the seller to prepare your bundle.
        </p>

        {/* Order Card */}
        <div className="w-full p-6 rounded-3xl bg-surface-container flex flex-col gap-4 border border-outline-variant shadow-sm mb-8">
          <div className="flex justify-between items-center pb-4 border-b border-outline-variant">
            <span className="text-label-caps font-bold text-on-surface-variant">ORDER ID</span>
            <span className="font-bold text-on-surface">#ORD-90122</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
              <div>
                <p className="text-body-md font-bold">Standard Delivery</p>
                <p className="text-body-sm text-on-surface-variant">Estimated: June 4th - 5th</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">receipt_long</span>
              <div>
                <p className="text-body-md font-bold">Digital Receipt</p>
                <p className="text-body-sm text-on-surface-variant">Sent to your registered email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-3">
          <Link 
            href={`/orders/ORD-90122/track`}
            className="block w-full bg-primary text-white py-4 rounded-full font-bold text-center shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
          >
            TRACK ORDER
          </Link>
          <Link 
            href="/home"
            className="block w-full py-4 text-on-surface-variant font-bold text-center hover:text-primary transition-colors"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>

      {/* AI Success Suggestion */}
      <div className="fixed bottom-10 left-6 right-6 flex justify-center">
        <div className="glass-ai px-6 py-3 rounded-full border border-primary/30 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary sparkle-ai">temp_preferences_custom</span>
          <span className="text-label-caps font-bold text-primary">AI: ELIGIBLE FOR GOLD REWARDS ON THIS ORDER</span>
        </div>
      </div>

      {/* Simplified Confetti Simulation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      )}

      <style jsx>{`
        .glass-ai {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
        }
        .sparkle-ai {
          animation: float 2s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
