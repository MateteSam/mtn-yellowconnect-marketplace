"use client";

export const runtime = 'edge';

import Link from 'next/link';

export default function MoMoRefundDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 py-6 border-b border-outline-variant flex items-center gap-4">
        <Link href="/refunds/track" className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-title-md font-bold text-on-surface">Refund Receipt</h1>
      </header>

      <div className="flex-1 px-6 py-10">
        <div className="max-w-md mx-auto">
          
          {/* Virtual Receipt */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-outline-variant overflow-hidden flex flex-col relative">
            {/* Top Wave/Curve decorative element could be added here */}
            
            <div className="p-8 pb-10 flex flex-col items-center border-b border-dashed border-outline-variant">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[48px] text-primary">account_balance_wallet</span>
              </div>
              <h2 className="text-label-caps font-bold text-on-surface-variant mb-1">REFUND AMOUNT</h2>
              <span className="text-[40px] font-bold text-on-surface tracking-tight leading-none">₦815,000</span>
              <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">MoMo Verified</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center text-body-md">
                <span className="text-on-surface-variant">Reference ID</span>
                <span className="font-bold text-on-surface select-all">MOMO-REF-99827-X</span>
              </div>
              <div className="flex justify-between items-center text-body-md">
                <span className="text-on-surface-variant">Transaction Type</span>
                <span className="font-bold text-on-surface">Escrow Refund</span>
              </div>
              <div className="flex justify-between items-center text-body-md">
                <span className="text-on-surface-variant">Wallet Account</span>
                <span className="font-bold text-on-surface">MTN *4401</span>
              </div>
              <div className="flex justify-between items-center text-body-md">
                <span className="text-on-surface-variant">Processed By</span>
                <span className="font-bold text-primary">AI Treasury Agent</span>
              </div>
              
              {/* Timeline Info */}
              <div className="pt-6 border-t border-outline-variant">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant">
                  <span className="material-symbols-outlined text-on-surface-variant">info</span>
                  <p className="text-body-sm text-on-surface-variant">
                    Escrow funds are released to your wallet within 48 hours of item collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Circles for "Tied-off Receipt" Look */}
            <div className="absolute -bottom-2 left-0 right-0 flex justify-between px-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-surface rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-12 space-y-4">
            <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
              <span className="material-symbols-outlined">download</span>
              DOWNLOAD PDF
            </button>
            <Link 
              href="/home"
              className="block w-full py-4 text-center font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              DONE
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
