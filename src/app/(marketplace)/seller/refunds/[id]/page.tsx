'use client';

export const runtime = 'edge';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function MerchantRefundDetailPage() {
  const params = useParams<{ id: string }>();
  const [reviewStage, setReviewStage] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <header className="px-6 py-6 border-b border-outline-variant flex items-center gap-4 bg-surface sticky top-0 z-10">
        <Link href="/seller/refunds" className="p-2 -ml-2 rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h1 className="text-title-md font-bold">Review Request</h1>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">#{params.id || 'REF-8801'}</p>
        </div>
      </header>

      <div className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Buyer Info Card */}
          <div className="p-6 rounded-[2.5rem] bg-surface-container-low border border-outline-variant flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="font-bold text-on-surface">Sarah K.</h3>
                <p className="text-body-sm text-on-surface-variant">Lagos, Nigeria • Gold Buyer</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">HIGH TRUST</span>
              <p className="text-body-sm text-on-surface-variant mt-1">12 Previous Orders</p>
            </div>
          </div>

          {/* Refund Details */}
          <section className="space-y-4">
            <h2 className="text-label-caps font-bold text-on-surface-variant">REFUND SPECIFICATIONS</h2>
            <div className="p-6 rounded-[2.5rem] bg-surface-container-low border border-outline-variant space-y-6">
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-medium">REASON</span>
                <span className="font-bold text-on-surface">Defective/Damaged</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-medium">ITEM</span>
                <span className="font-bold text-on-surface">Premium AI Ultra-Phone</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-outline-variant">
                <span className="text-on-surface-variant font-medium">REFUND TOTAL</span>
                <span className="font-black text-primary text-headline-sm">₦815,000</span>
              </div>
            </div>
          </section>

          {/* AI Evidence Analysis */}
          <div className="p-6 rounded-[2.5rem] bg-primary/5 border border-primary/20 space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary sparkle-ai">query_stats</span>
              <h4 className="font-bold text-on-surface">AI Evidence Scan</h4>
            </div>
            <div className="aspect-video rounded-2xl bg-white/50 border border-outline-variant flex items-center justify-center overflow-hidden gap-2">
              <div className="w-1/3 h-full bg-slate-100 border-r border-outline-variant flex items-center justify-center relative">
                 <span className="material-symbols-outlined text-on-surface-variant">image</span>
                 <div className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-[8px] font-black rounded">SCANNED</div>
              </div>
              <p className="flex-1 text-center text-body-sm text-on-surface-variant px-4">
                "AI detected 85% probability of screen micro-fractures consistent with shipping impact."
              </p>
            </div>
            <div className="bg-primary/10 p-4 rounded-2xl">
               <p className="text-body-sm font-bold text-primary flex items-center gap-2">
                 <span className="material-symbols-outlined text-[18px]">verified</span>
                 Recommendation: APPROVE (Instant Escrow Release)
               </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-6 bg-surface/80 backdrop-blur-md border-t border-outline-variant z-10">
        <div className="max-w-2xl mx-auto flex gap-4">
          <Link 
            href="/seller/disputes/escalate"
            className="flex-1 py-4 border border-outline-variant rounded-full text-center font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            ESCALATE
          </Link>
          <button className="flex-[2] bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            APPROVE & REFUND
          </button>
        </div>
      </div>
    </div>
  );
}
