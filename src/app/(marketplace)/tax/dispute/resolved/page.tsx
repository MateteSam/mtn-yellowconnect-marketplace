'use client';

import Link from 'next/link';

export default function MerchantDisputeResolvedSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-container-margin-mobile text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-lg">
          <span className="material-symbols-outlined text-5xl">task_alt</span>
        </div>
        
        <h1 className="text-3xl font-black mb-2 italic">Dispute Won!</h1>
        <p className="text-on-surface-variant mb-10 max-w-xs mx-auto">
          The compliance team has approved your dispute for transaction <strong className="text-on-surface">#TXN-9921-A</strong>.
        </p>

        <div className="w-full bg-surface-container-low rounded-[40px] p-10 border border-outline-variant/10 mb-8 max-w-sm text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Reversal Amount</p>
              <p className="text-3xl font-black text-green-600">₦1,250.00</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Wallet Credited</p>
              <p className="text-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">wallet</span> Merchant Wallet
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Link href="/wallet/dashboard" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
            Check Wallet Balance
          </Link>
          <Link href="/tax/history" className="block w-full bg-surface-container-high py-5 rounded-2xl font-bold border border-outline-variant/20">
            View Compliance Record
          </Link>
        </div>
      </main>
    </div>
  );
}
