'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MoMoAuthorizingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          // Redirect to success after simulation
          setTimeout(() => router.push('/orders/ORD-90122/success'), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen bg-[#ffcc00] items-center justify-center px-10 text-on-surface">
      
      {/* Centered Processing State */}
      <div className="flex flex-col items-center max-w-sm w-full">
        {/* Animated Rings */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-12">
          <div className="absolute inset-0 border-8 border-white/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-8 border-on-surface rounded-full transition-all duration-300"
            style={{ 
              clipPath: `inset(0 0 0 ${100 - progress}%)`,
              transform: 'rotate(-90deg)'
            }}
          ></div>
          <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl">
            <span className="text-primary font-black text-2xl animate-pulse">MoMo</span>
          </div>
        </div>

        <h1 className="text-display-sm font-bold text-center mb-4 tracking-tight">Authorizing Payment</h1>
        <p className="text-on-surface/60 text-body-lg text-center font-medium mb-12">
          Please do not close this window or lock your device.
        </p>

        {/* Progress Text */}
        <div className="w-full space-y-4">
          <div className="flex justify-between text-label-caps font-bold">
            <span>NETWORK HANDSHAKE</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-on-surface transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Transaction Security Legend */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="material-symbols-outlined text-[32px] animate-bounce">security</span>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Secured by MTN Fintech</p>
        </div>
      </div>

    </div>
  );
}
