'use client';

import Link from 'next/link';

export default function MoMoPaymentConfirmationPage() {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-center">
      <div className="bg-white text-slate-900 w-full max-w-md p-8 rounded-t-[40px] sm:rounded-3xl animate-in slide-in-from-bottom duration-300">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-black text-2xl font-black">lock</span>
            </div>
            <div>
              <h2 className="text-xl font-black">MoMo Secure</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction Authorization</p>
            </div>
          </div>
          <Link href="/wallet/overview" className="material-symbols-outlined text-slate-300 p-2">close</Link>
        </div>

        <div className="text-center mb-10">
          <p className="text-sm font-bold text-slate-500 mb-2">Total Amount to Authorize</p>
          <p className="text-5xl font-black tracking-tighter">₦48,850.00</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-600 uppercase">Wallet ending in *882</span>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-400 uppercase">verified_user</span>
              <span className="text-sm font-bold">Biometric Authenticated</span>
            </div>
            <span className="material-symbols-outlined text-green-600">check_circle</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed text-center px-4 font-bold uppercase tracking-wide">
            By confirming, you authorize MTN YellowConnect to debit your MoMo wallet for the specified amount.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/wallet/overview" className="flex-1 bg-slate-100 text-slate-600 py-5 rounded-2xl font-bold text-center hover:bg-slate-200 transition-all">
            Cancel
          </Link>
          <Link href="/lending/repay/success" className="flex-1 bg-yellow-400 text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:brightness-105 active:scale-[0.98] transition-all">
            Approve & Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
