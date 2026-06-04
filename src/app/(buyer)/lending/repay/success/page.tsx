'use client';

import Link from 'next/link';

export default function RepaymentSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-container-margin-mobile text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary scale-110">
          <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
        </div>
        
        <h1 className="text-3xl font-black mb-2">Repayment Received!</h1>
        <p className="text-on-surface-variant mb-10 max-w-xs mx-auto">
          Your payment of <strong className="text-on-surface">₦50,000</strong> has been processed successfully.
        </p>

        <div className="glass-ai w-full max-w-sm rounded-[32px] p-8 border border-primary/20 mb-10 text-left relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary opacity-5 rounded-full blur-2xl"></div>
          <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">Credit Score Impact</h3>
          <div className="flex items-end gap-3 mb-4">
            <span className="text-5xl font-black">742</span>
            <span className="text-green-600 font-bold mb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">trending_up</span> +12
            </span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Consistent early repayments are improving your eligibility for the <strong className="text-on-surface">₦1M Elite Merchant Loan</strong>.
          </p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Link href="/lending/receipt/LN9928" className="block w-full bg-black text-white py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">receipt</span>
            Download Receipt
          </Link>
          <Link href="/lending" className="block w-full bg-surface-container-high py-4 rounded-2xl font-bold border border-outline-variant/20">
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
