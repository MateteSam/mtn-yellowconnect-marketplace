"use client";

export const runtime = 'edge';

import Link from 'next/link';
import { useState } from 'react';

const EVIDENCE = [
  { type: 'Product View', time: 'June 01, 10:15 AM', action: 'Listing: iPhone 15 Pro - Premium condition' },
  { type: 'Chat Log', time: 'June 01, 10:30 AM', action: 'Buyer: "Is the battery health 100%?" · Seller: "Yes, verified by AI."' },
  { type: 'Payment', time: 'June 01, 10:45 AM', action: '₦950,000 escrow payment confirmed via MoMo.' },
  { type: 'Delivery', time: 'June 01, 02:15 PM', action: 'Handover code verified by buyer at location.' },
  { type: 'Dispute', time: 'June 01, 02:30 PM', action: 'Buyer opened dispute: "Battery health is actually 88%."' },
];

export default function DisputeCaseDetailPage() {
  const [resolution, setResolution] = useState<'buyer' | 'seller' | 'split' | null>(null);

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/moderator/dashboard" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <div className="ml-2 flex-grow">
          <h1 className="font-bold text-base">Case #DIS-88392</h1>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black bg-red-100 text-red-700 px-2 rounded">High Priority</span>
            <span className="text-[10px] font-bold text-on-surface-variant">Assigned to: Self</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-6 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Col: Case Details */}
        <div className="md:col-span-2 space-y-6">
          {/* AI Investigation Summary */}
          <div className="glass-ai p-8 rounded-[40px] border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h2 className="text-xl font-black italic">AI Forensic Review</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-sm font-bold text-on-surface mb-1">Key Discrepancy Found</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Seller's listing stated 100% health. Product diagnostics log at 10:25 AM (pre-listing) shows <strong className="text-red-500">88.4% health</strong>. Seller was likely aware of the discrepancy.
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-0.5">AI Verdict Recommendation</p>
                  <p className="font-bold text-on-surface">Refund Buyer: Partial (₦150k)</p>
                </div>
                <span className="text-xs font-black text-green-700 bg-green-100 px-3 py-1 rounded-full">94% Confidence</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-surface rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
            <h3 className="font-black text-lg mb-6">Transaction Timeline</h3>
            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/20">
              {EVIDENCE.map((item, idx) => (
                <div key={idx} className="flex gap-6 relative pl-8">
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${idx === EVIDENCE.length - 1 ? 'bg-red-500 shadow-[0_0_8px_#EF4444]' : 'bg-outline-variant'}`}>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-0.5">{item.time}</p>
                    <p className="text-sm font-bold mb-1">{item.type}</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Actions */}
        <div className="space-y-6">
          <div className="bg-surface rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
            <h3 className="font-bold text-base mb-4">Resolution Tools</h3>
            <div className="space-y-3">
              {[
                { id: 'buyer', label: 'Refund Buyer (Full)', color: 'border-blue-500 text-blue-600' },
                { id: 'split', label: 'Partial Refund (Split)', color: 'border-amber-500 text-amber-600' },
                { id: 'seller', label: 'Release to Seller', color: 'border-green-500 text-green-600' },
              ].map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => setResolution(opt.id as any)}
                  className={`w-full text-left p-4 rounded-2xl border-2 font-bold text-sm transition-all ${resolution === opt.id ? opt.color + ' bg-surface-container' : 'border-outline-variant/20'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <textarea 
              placeholder="Internal justification for external public notice..."
              rows={4}
              className="w-full mt-6 bg-surface-container-high rounded-2xl p-4 text-xs resize-none outline-none focus:ring-2 focus:ring-primary"
            />
            
            <button className="w-full mt-4 bg-black text-white py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 disabled:opacity-30" disabled={!resolution}>
              Apply Verdict
            </button>
          </div>

          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
            <h4 className="font-bold text-sm mb-3">Parties Involved</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="text-sm font-bold">Chidi O. (Buyer)</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-black">Score: 4.8 · Verified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
                <div>
                  <p className="text-sm font-bold">Kwame A. (Seller)</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-black">MTN Gold · 2 Warnings</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 text-xs font-bold text-secondary hover:underline">View Full Chat History</button>
          </div>
        </div>
      </main>
    </div>
  );
}
