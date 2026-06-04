'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MoMoOTPPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(119); // 01:59
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isComplete = otp.every(digit => digit !== '');

  const handleVerify = () => {
    if (isComplete) {
      router.push('/checkout/payment/confirm');
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <header className="h-[60px] px-4 py-6 flex items-center justify-between border-b border-outline-variant/10 sticky top-0 bg-background z-10">
        <Link href="/checkout/payment/authorize" className="p-2 hover:bg-surface-variant/10 rounded-full transition-all">
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </Link>
        <h1 className="text-[18px] font-bold text-on-surface">MoMo: Verify OTP</h1>
        <div className="w-10"></div>
      </header>

      <main className="px-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-surface-variant/5 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-surface-variant/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px] text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>lock_person</span>
          </div>
        </div>

        <h2 className="text-[24px] font-bold text-center mb-4">Enter Verification Code</h2>
        <p className="text-[14px] text-on-surface-variant text-center max-w-[300px] mb-4 leading-relaxed">
          We've sent a 6-digit code to your registered MTN number ending in <span className="font-bold">***482</span>.
        </p>

        {/* OTP Inputs */}
        <div className="flex gap-2 mb-6 justify-center w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className="w-[40px] h-[50px] bg-surface-variant/5 border-2 border-outline-variant/30 rounded-2xl text-center text-[18px] font-bold focus:border-primary focus:bg-white outline-none transition-all shadow-sm"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="w-full max-w-[350px] flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[14px] font-bold text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            {formatTime(timeLeft)}
          </div>
          <button className="text-secondary font-bold text-[14px] uppercase tracking-wide">
            Resend Code
          </button>
        </div>

        <button
          onClick={handleVerify}
          disabled={!isComplete}
          className={`w-full max-w-[350px] py-2 rounded-full text-[14px] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${isComplete ? 'bg-primary text-on-primary hover:opacity-90' : 'bg-surface-variant/20 text-on-surface-variant/30 grayscale'
            }`}
        >
          Verify & Pay
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
        </button>

        <p className="mt-6 mb-8 flex items-center gap-2 text-[13px] font-medium text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px]">shield</span>
          Secured by MoMo
        </p>
      </main>
    </div>
  );
}
