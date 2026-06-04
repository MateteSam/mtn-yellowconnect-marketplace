'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PayoutSchedulingPage() {
  const [frequency, setFrequency] = useState('daily');
  const [threshold, setThreshold] = useState('50000');
  const [isAuto, setIsAuto] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 py-12 bg-primary rounded-b-[3rem] text-white shadow-xl shadow-primary/20 z-10">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/profile" className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-headline-lg font-bold tracking-tight">Payout Settings</h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          <div className="flex justify-between items-center mb-1">
            <span className="text-white/70 text-label-caps font-bold">NEXT ESTIMATED PAYOUT</span>
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">ACTIVE</span>
          </div>
          <p className="text-[32px] font-bold">₦1,240,500</p>
          <p className="text-white/60 text-body-sm mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">calendar_today</span>
            Scheduled for June 03, 2026
          </p>
        </div>
      </header>

      <div className="flex-1 px-6 pt-10 pb-32">
        <div className="max-w-2xl mx-auto space-y-10">
          
          {/* Frequency Selection */}
          <section className="space-y-4">
            <h2 className="text-label-caps font-bold text-on-surface-variant px-2">PAYOUT FREQUENCY</h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'daily', label: 'Daily', sub: 'FAST' },
                { id: 'weekly', label: 'Weekly', sub: 'STABLE' },
                { id: 'monthly', label: 'Monthly', sub: 'PLAN' },
              ].map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => setFrequency(opt.id)}
                  className={`flex flex-col items-center justify-center py-4 rounded-2xl border transition-all ${
                    frequency === opt.id ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-surface-container-low border-outline-variant hover:border-primary/50'
                  }`}
                >
                  <span className="font-bold text-body-md">{opt.label}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${frequency === opt.id ? 'text-white/70' : 'text-on-surface-variant'}`}>{opt.sub}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Threshold Setting */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-label-caps font-bold text-on-surface-variant">MINIMUM THRESHOLD</h2>
              <span className="text-primary font-bold">₦{Number(threshold).toLocaleString()}</span>
            </div>
            <div className="p-6 rounded-[2rem] bg-surface-container-low border border-outline-variant">
              <input 
                type="range" 
                min="10000" 
                max="500000" 
                step="5000"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-4 text-[10px] font-bold text-on-surface-variant">
                <span>₦10K</span>
                <span>₦250K</span>
                <span>₦500K</span>
              </div>
            </div>
          </section>

          {/* Auto-Payout Toggle */}
          <section className="p-6 rounded-[2.5rem] bg-surface-container-low border border-outline-variant flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isAuto ? 'bg-primary/10 text-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <span className="material-symbols-outlined">{isAuto ? 'bolt' : 'hand_gesture'}</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface leading-tight">Smart Auto-Payout</h3>
                <p className="text-body-sm text-on-surface-variant">Trigger transfer automatically</p>
              </div>
            </div>
            <button 
              onClick={() => setIsAuto(!isAuto)}
              className={`w-14 h-8 rounded-full transition-all relative ${isAuto ? 'bg-primary' : 'bg-outline-variant'}`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${isAuto ? 'left-7' : 'left-1'}`}></div>
            </button>
          </section>

          {/* AI Optimizer Tip */}
          <div className="p-6 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 flex gap-4 items-start shadow-sm shadow-indigo-100">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-indigo-200">
              <span className="material-symbols-outlined text-indigo-600 sparkle-ai">psychology</span>
            </div>
            <div className="flex-1">
              <h4 className="text-body-md font-bold text-indigo-900 leading-tight">Payout Optimizer AI</h4>
              <p className="text-body-sm text-indigo-700/80 mt-1">
                Based on your cash flow, a **Weekly Payout on Wednesdays** will maximize your liquidity and minimize MoMo transaction fees by 15%.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-surface/80 backdrop-blur-md border-t border-outline-variant z-20">
        <button className="w-full max-w-2xl mx-auto bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
          SAVE PAYOUT PREFERENCES
        </button>
      </div>

    </div>
  );
}
