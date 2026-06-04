"use client";

export const runtime = 'edge';

import Link from 'next/link';

export default function TransactionReceiptDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <header className="px-6 py-6 border-b border-outline-variant flex items-center gap-4 bg-surface sticky top-0 z-10">
        <Link href="/orders/receipts" className="p-2 -ml-2 rounded-full hover:bg-surface-container-high">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-title-md font-bold">Transaction Details</h1>
      </header>

      <div className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          
          {/* Detailed Receipt Card */}
          <div className="p-8 rounded-[3rem] bg-surface-container-low border border-outline-variant shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-label-caps font-bold text-on-surface-variant">TRANSACTION DATE</span>
                <p className="text-body-md font-bold text-on-surface">June 01, 2026 • 10:45 AM</p>
              </div>
              <div className="bg-primary-container/20 px-3 py-1 rounded-full border border-primary/20">
                <span className="text-[10px] font-bold text-primary">ID: #ORD-90122</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-label-caps font-bold text-on-surface-variant px-1 border-b border-outline-variant pb-2">ORDER ITEMS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-body-md">
                  <span className="font-medium">Premium AI Ultra-Phone</span>
                  <span className="font-bold">₦815,000</span>
                </div>
                <div className="flex justify-between items-center text-body-md">
                  <span className="font-medium">Glass-Protect Kit</span>
                  <span className="font-bold">₦12,500</span>
                </div>
                <div className="flex justify-between items-center text-body-md">
                  <span className="font-medium text-on-surface-variant">Standard Delivery</span>
                  <span className="font-bold">₦2,500</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-dashed border-outline-variant">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-label-caps font-bold text-primary">TOTAL AMOUNT PAID</span>
                  <p className="text-on-surface-variant text-[10px] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">payments</span>
                    MTN MOMO WALLET
                  </p>
                </div>
                <span className="text-display-xs font-black text-on-surface">₦830,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-on-surface text-white flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-[28px]">verified</span>
              <div>
                <p className="text-label-caps font-bold text-white/60">AI TAX COMPLIANCE</p>
                <p className="text-body-sm font-medium">₦62,250 VAT included and reported to FIRS.</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button className="flex items-center justify-center gap-2 py-4 bg-surface border border-outline-variant rounded-2xl font-bold text-on-surface hover:border-primary transition-colors">
              <span className="material-symbols-outlined">download</span>
              PDF INVOICE
            </button>
            <button className="flex items-center justify-center gap-2 py-4 bg-surface border border-outline-variant rounded-2xl font-bold text-on-surface hover:border-primary transition-colors">
              <span className="material-symbols-outlined">help</span>
              ORDER HELP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
