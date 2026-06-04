"use client";

export const runtime = 'edge';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function TransactionReceiptPage() {
  const params = useParams<{ id: string }>();

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/lending" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Transaction Receipt</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-12 flex justify-center">
        <div className="bg-white text-slate-900 w-full max-w-md rounded-3xl shadow-2xl relative overflow-hidden flex flex-col font-mono">
          {/* Receipt Top Edge */}
          <div className="absolute top-0 w-full flex justify-between px-2 -translate-y-1/2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-background rounded-full"></div>
            ))}
          </div>

          <div className="p-8 pt-12 text-center">
            <div className="flex justify-center mb-6">
              <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
            </div>
            <h2 className="text-xl font-black uppercase tracking-tighter">MTN YellowConnect</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Official Payment Voucher</p>
          </div>

          <div className="px-8 pb-8 space-y-4">
            <div className="flex justify-between items-end border-b-2 border-slate-100 pb-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Transaction ID</span>
              <span className="text-xs font-black">#MTN-LN-{params.id || '9928'}</span>
            </div>
            <div className="flex justify-between items-end border-b-2 border-slate-100 pb-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Date & Time</span>
              <span className="text-xs font-black">June 01, 2026 05:45 PM</span>
            </div>
            <div className="flex justify-between items-end border-b-2 border-slate-100 pb-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Status</span>
              <span className="text-xs font-black text-green-600">COMPLETED</span>
            </div>
            
            <div className="py-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Principal Repayment</span>
                <span className="font-black">₦48,800.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Transaction Fee</span>
                <span className="font-black">₦50.00</span>
              </div>
              <div className="flex justify-between text-sm font-bold border-t-2 border-slate-900 pt-4 mt-4">
                <span className="text-lg">TOTAL DEBIT</span>
                <span className="text-lg font-black">₦48,850.00</span>
              </div>
            </div>

            <div className="pt-8 text-center">
              <div className="w-48 h-12 bg-slate-100 mx-auto rounded flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-4xl">barcode</span>
              </div>
              <p className="text-[8px] text-slate-400 font-bold uppercase mt-4 max-w-[200px] mx-auto leading-relaxed">
                Repayments are processed via MTN MoMo Escrow. For support call +234 800 YELLOW.
              </p>
            </div>
          </div>

          {/* Receipt Bottom Edge */}
          <div className="absolute bottom-0 w-full flex justify-between px-2 translate-y-1/2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-background rounded-full"></div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background to-transparent pointer-events-none">
        <button className="w-full max-w-sm mx-auto block bg-secondary text-white py-4 rounded-2xl font-bold shadow-lg pointer-events-auto flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">print</span>
          Save PDF
        </button>
      </div>
    </div>
  );
}
