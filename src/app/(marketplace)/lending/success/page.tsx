'use client';

import Link from 'next/link';

export default function LoanDisbursementSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-container-margin-mobile text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 animate-bounce">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        
        <h1 className="text-3xl font-black mb-2">Money Disbursed!</h1>
        <p className="text-on-surface-variant mb-10 max-w-xs mx-auto">
          ₦250,000 has been sent to your <strong className="text-on-surface">MTN MoMo Wallet</strong> ending in *882.
        </p>

        <div className="w-full bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10 mb-8 max-w-sm">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-outline-variant/10">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Transaction ID</span>
            <span className="font-mono text-sm font-black">#MTN-LN-992810X</span>
          </div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-outline-variant/10">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Disbursement Time</span>
            <span className="text-sm font-bold">Today, 05:45 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">MoMo Sequence</span>
            <span className="text-sm font-bold">TXN-002931</span>
          </div>
        </div>

        <div className="glass-ai p-6 rounded-2xl border border-primary/20 mb-10 max-w-sm">
          <div className="flex gap-4 items-start text-left">
            <span className="material-symbols-outlined text-primary">notifications_active</span>
            <div>
              <p className="font-bold text-sm mb-1">Repayment Schedule Set</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Your first automatic repayment of ₦22,500 will be debited from your sales on <strong className="text-on-surface">July 01, 2026</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Link href="/wallet/overview" className="block w-full bg-primary text-black py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all">
            Check MoMo Balance
          </Link>
          <Link href="/lending" className="block w-full bg-surface-container-high py-4 rounded-2xl font-bold border border-outline-variant/20">
            See Loan Details
          </Link>
        </div>
      </main>
    </div>
  );
}
