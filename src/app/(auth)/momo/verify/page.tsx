'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MoMoOTPVerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* MoMo Branded Header */}
      <header className="px-6 py-12 bg-[#ffcc00] flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg mb-6">
          <span className="text-primary font-black text-2xl">MoMo</span>
        </div>
        <h1 className="text-display-sm font-bold text-on-surface text-center">Verify Payment</h1>
        <p className="text-on-surface/70 text-body-md text-center mt-2 font-medium">We've sent a code to +234 **** 4401</p>
      </header>

      <div className="flex-1 px-8 pt-12 pb-20">
        <div className="max-w-md mx-auto flex flex-col items-center">
          
          {/* OTP Inputs */}
          <div className="flex gap-3 mb-10 w-full justify-center">
            {otp.map((digit, i) => (
              <input 
                key={i}
                id={`otp-${i}`}
                type="number"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                className="w-12 h-16 bg-surface-container-high border-2 border-transparent rounded-2xl text-center text-headline-sm font-bold focus:border-primary focus:bg-white transition-all focus:outline-none"
              />
            ))}
          </div>

          <p className="text-body-md font-medium text-on-surface-variant mb-10">
            Didn't receive a code? <button className="text-primary font-bold">Resend in 0:45</button>
          </p>

          <Link 
            href="/momo/authorizing"
            className={`w-full py-5 rounded-full font-bold text-center transition-all ${
              otp.every(d => d !== '') 
                ? 'bg-[#ffcc00] text-on-surface shadow-xl shadow-amber-500/20' 
                : 'bg-surface-container-highest text-on-surface-variant opacity-50 pointer-events-none'
            }`}
          >
            VERIFY & PAY
          </Link>

          {/* Secure Note */}
          <div className="mt-12 flex items-center gap-3 text-on-surface-variant/60">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted Transaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}
