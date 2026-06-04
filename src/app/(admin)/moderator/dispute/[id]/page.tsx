"use client";

export const runtime = 'edge';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function DisputeInvestigationPage() {
  const params = useParams();
  const [decision, setDecision] = useState<'buyer' | 'seller' | null>(null);

  return (
    <div className="bg-[#f8f9fa] dark:bg-neutral-950 min-h-screen">
      <header className="bg-secondary text-white p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/moderator/dashboard" className="material-symbols-outlined">arrow_back</Link>
          <h1 className="font-bold">Dispute #DSP-4421</h1>
        </div>
        <span className="text-xs bg-amber-400 text-amber-900 font-bold px-3 py-1 rounded-full">Under Review</span>
      </header>

      <main className="p-4 md:p-8 max-w-3xl mx-auto pb-24">

        {/* Dispute Summary */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-outline-variant/10 p-6 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Dispute Summary</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div><p className="text-on-surface-variant text-xs">Order ID</p><p className="font-bold">#ORD-88291</p></div>
            <div><p className="text-on-surface-variant text-xs">Amount</p><p className="font-bold text-secondary">₦450,000</p></div>
            <div><p className="text-on-surface-variant text-xs">Reason</p><p className="font-bold">Item Not Received</p></div>
            <div><p className="text-on-surface-variant text-xs">Filed By</p><p className="font-bold">Buyer (Emeka O.)</p></div>
            <div><p className="text-on-surface-variant text-xs">Seller</p><p className="font-bold">Kwame's Agri-Tech</p></div>
            <div><p className="text-on-surface-variant text-xs">Filed</p><p className="font-bold">2 days ago</p></div>
          </div>
        </div>

        {/* Timeline of events */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-outline-variant/10 p-6 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-5">Order Timeline</p>
          <ul className="space-y-5">
            {[
              { date: 'May 20', event: 'Order placed and payment confirmed via MoMo', type: 'success' },
              { date: 'May 21', event: 'Seller marked item as "Shipped"', type: 'info' },
              { date: 'May 23', event: 'Buyer reports item not received', type: 'warning' },
              { date: 'May 24', event: 'Seller provides tracking number (GH-POSTAL-39821)', type: 'info' },
              { date: 'May 26', event: 'Dispute escalated to moderation', type: 'error' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.type === 'success' ? 'bg-green-500' : item.type === 'warning' ? 'bg-amber-400' : item.type === 'error' ? 'bg-red-500' : 'bg-secondary'}`} />
                <div>
                  <p className="text-xs text-on-surface-variant">{item.date}</p>
                  <p className="text-sm font-medium text-on-surface">{item.event}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence Review */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-outline-variant/10 p-6 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Evidence Submitted</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
              <span className="material-symbols-outlined text-secondary">description</span>
              <div className="flex-grow">
                <p className="font-bold text-sm">seller_shipping_proof.pdf</p>
                <p className="text-xs text-on-surface-variant">Submitted by seller · May 25</p>
              </div>
              <button className="text-secondary text-sm font-bold">View</button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
              <span className="material-symbols-outlined text-amber-500">image</span>
              <div className="flex-grow">
                <p className="font-bold text-sm">empty_doorstep_photo.jpg</p>
                <p className="text-xs text-on-surface-variant">Submitted by buyer · May 24</p>
              </div>
              <button className="text-secondary text-sm font-bold">View</button>
            </div>
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="glass-ai rounded-2xl p-5 border border-primary/20 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-primary p-1.5 rounded-lg text-on-primary">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <p className="font-bold text-secondary text-xs uppercase tracking-widest">AI Verdict Suggestion</p>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Based on the tracking data and shipping history, the package was dispatched but shows no delivery scan. AI suggests a <strong className="text-on-surface">partial refund (50%)</strong> with seller retaining shipping costs, or requesting carrier investigation first.
          </p>
          <div className="flex gap-2 mt-3">
            <span className="bg-amber-100 text-amber-700 text-[11px] font-bold px-2 py-1 rounded">Confidence: 72%</span>
            <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-1 rounded">Carrier delay detected</span>
          </div>
        </div>

        {/* Resolution Controls */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-sm border border-outline-variant/10 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Moderator Decision</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              onClick={() => setDecision('buyer')}
              className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all ${decision === 'buyer' ? 'border-green-400 bg-green-50 text-green-800' : 'border-outline-variant/30'}`}
            >
              <span className="material-symbols-outlined block text-2xl mb-1">shopping_bag</span>
              Rule for Buyer
              <p className="text-[10px] font-normal text-on-surface-variant mt-0.5">Full refund to buyer</p>
            </button>
            <button
              onClick={() => setDecision('seller')}
              className={`p-4 rounded-2xl border-2 font-bold text-sm transition-all ${decision === 'seller' ? 'border-secondary/60 bg-secondary/5 text-secondary' : 'border-outline-variant/30'}`}
            >
              <span className="material-symbols-outlined block text-2xl mb-1">store</span>
              Rule for Seller
              <p className="text-[10px] font-normal text-on-surface-variant mt-0.5">Release funds to seller</p>
            </button>
          </div>
          <textarea
            className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-secondary mb-4"
            placeholder="Add decision notes for case record..."
            rows={3}
          />
          <button
            disabled={!decision}
            className="w-full bg-secondary text-white py-4 rounded-2xl font-bold disabled:opacity-40 transition-all hover:brightness-110"
          >
            Submit Final Ruling
          </button>
        </div>
      </main>
    </div>
  );
}
