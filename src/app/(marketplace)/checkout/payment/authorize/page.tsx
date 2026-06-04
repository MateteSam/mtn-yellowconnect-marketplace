'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MoMoAuthorizePage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);

    // Simulate auto-navigation to OTP after 3 seconds for demo purposes
    const redirectTimer = setTimeout(() => {
      router.push('/checkout/payment/otp');
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [timeLeft, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#fbfaface] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white rounded-[24px] shadow-2xl overflow-hidden border-t-[6px] border-primary">
        <div className="p-8 flex flex-col items-center">
          {/* MoMo Logo */}
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 border-[3px] border-white shadow-md">
            <span className="text-on-primary font-black text-[20px] tracking-tighter">MoMo</span>
          </div>

          <h1 className="text-[18px] font-bold text-center mb-2">Authorizing Payment</h1>
          <p className="text-[14px] text-on-surface-variant text-center mb-6">to Marketplace Merchant</p>

          <div className="text-[30px] font-black tracking-tight mb-6">$1,299.00</div>

          {/* Spinner Box */}
          <div className="w-full bg-surface-variant/5 rounded-3xl p-6 flex flex-col items-center mb-6 border border-outline-variant/10">
            <div className="w-12 h-12 border-[4px] border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
            <p className="text-[12px] font-medium text-center leading-relaxed max-w-[240px]">
              Please check your phone and authorize this transaction via MoMo.
            </p>
          </div>

          {/* Session Timer */}
          <div className="bg-surface-variant/10 px-4 py-3 rounded-full flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">schedule</span>
            <span className="text-[12px] text-on-surface-variant uppercase tracking-wider">
              SESSION EXPIRES IN {formatTime(timeLeft)}
            </span>
          </div>

          {/* Cancel Button */}
          <Link
            href="/checkout/bundle"
            className="w-full py-2 rounded-full bg-surface-variant/10 text-on-surface-variant text-[12px] flex items-center justify-center gap-2 hover:bg-surface-variant/20 transition-colors uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
            Cancel Transaction
          </Link>
        </div>
      </div>
    </div>
  );
}
