'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * MoMoSetupPage component
 * Implements a high-fidelity setup screen for MTN MoMo wallet linking.
 * Reference: User provided image for MoMo Verification.
 */
export default function MoMoSetupPage() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-outline-variant/30 sticky top-0 bg-background/80 backdrop-blur-md z-30">
        <Link href="/verification/center" className="p-2 transition-transform active:scale-90">
          <span className="material-symbols-outlined text-[24px] text-on-surface">arrow_back</span>
        </Link>
        <h1 className="font-bold text-lg text-on-surface flex-1 text-center pr-8">MoMo Verification</h1>
        <button className="p-2 transition-transform active:scale-90 opacity-80">
          <span className="material-symbols-outlined text-[24px] text-on-surface">help</span>
        </button>
      </header>

      <main className="flex-1 container mx-auto px-container-margin-mobile py-8 md:py-12 max-w-lg">
        {/* Title and Description */}
        <section className="mb-8 text-center">
          <h2 className="text-[24px] font-bold leading-tight mb-4 text-on-surface">Link MoMo Wallet</h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-[90%]">
            Connect your MTN MoMo account to receive payouts instantly and pay for marketplace services.
          </p>
        </section>

        {/* Stepper Implementation */}
        <div className="relative flex justify-between items-start mb-8 px-4">
          {/* Connector Line */}
          <div className="absolute top-[21px] left-10 right-10 h-[3px] bg-outline-variant/20 z-0 rounded-full"></div>

          {/* Step 1: Active */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="relative flex items-center justify-center">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse blur-md transform scale-150"></div>
              <div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg shadow-lg relative z-10 border-4 border-background">
                1
              </div>
            </div>
            <span className="text-[12px] font-bold text-primary tracking-tight">Enter Number</span>
          </div>

          {/* Step 2: Inactive */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-11 h-11 rounded-full bg-surface-container-highest text-on-surface-variant/50 flex items-center justify-center font-bold text-lg border-4 border-background">
              2
            </div>
            <span className="text-[12px] font-bold text-on-surface-variant/40 tracking-tight">OTP Verify</span>
          </div>

          {/* Step 3: Inactive */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-11 h-11 rounded-full bg-surface-container-highest text-on-surface-variant/50 flex items-center justify-center font-bold text-lg border-4 border-background">
              3
            </div>
            <span className="text-[12px] font-bold text-on-surface-variant/40 tracking-tight text-center">Success</span>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-6">
          <div className="group">
            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-2 pl-1">
              MOMO PHONE NUMBER
            </label>
            <div className="flex items-center bg-surface-container-low rounded-2xl p-3 gap-4 border border-outline-variant/20 shadow-sm group-focus-within:border-primary group-focus-within:ring-4 group-focus-within:ring-primary/10 transition-all duration-300">
              {/* Ghana Flag/Indicator Mockup */}
              <div className="flex items-center gap-3 pr-5 border-r border-outline-variant/40">
                <div className="w-9 h-6 bg-gradient-to-br from-[#004f9f] via-white/10 to-[#ffcc00] rounded-md flex flex-col overflow-hidden shadow-sm relative">
                  <div className="flex-1 bg-[#cc0000]"></div>
                  <div className="flex-1 bg-[#ffcc00] flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rotate-45 transform translate-y-[1px]"></div>
                  </div>
                  <div className="flex-1 bg-[#009b3a]"></div>
                </div>
                <span className="font-bold text-lg text-on-surface">+233</span>
              </div>
              <input
                type="tel"
                placeholder="024 123 4567"
                className="bg-transparent border-none outline-none flex-1 text-lg font-semibold placeholder:text-on-surface-variant/30"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Feature Info Cards */}
          <div className="space-y-6">
            {/* Encryption Card */}
            <div className="bg-[#eff2fe] dark:bg-secondary-container/5 p-4 rounded-[28px] flex gap-4 border border-secondary/5 transition-all hover:bg-[#e7ebfc]">
              <div className="w-14 h-14 bg-secondary rounded-[18px] flex items-center justify-center text-on-secondary flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[28px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-body-lg mb-1 text-on-surface">Secure Encryption</h4>
                <p className="text-[14px] text-on-surface-variant leading-relaxed opacity-90">
                  Your financial data is encrypted. We will never ask for your MoMo PIN or sensitive credentials.
                </p>
              </div>
            </div>

            {/* AI Smart Verification Card */}
            <div className="bg-[#fff9e6] dark:bg-primary-container/10 p-4 rounded-[28px] border border-primary/15 flex gap-4 relative overflow-hidden group">
              {/* Subtle grain/bg effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <div className="w-8 flex flex-col items-center pt-1 flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[28px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-primary tracking-[0.15em] mb-2">
                  SMART VERIFICATION
                </span>
                <p className="text-[14px] text-on-surface-variant leading-relaxed opacity-90">
                  Our AI-enhanced system ensures instant payout routing once your wallet is linked successfully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Action Button */}
        <div className="mt-6 pb-6">
          <button
            className="w-full bg-primary py-2 rounded-[24px] text-on-primary text-lg flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(255,204,0,0.4)] hover:shadow-[0_15px_50px_rgba(255,204,0,0.5)] transition-all active:scale-[0.985] group"
            onClick={() => window.location.href = '#'}
          >
            <span>Send Verification Code</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
}
