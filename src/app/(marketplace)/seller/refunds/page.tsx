'use client';

import { useState } from 'react';
import Link from 'next/link';

const REFUND_REQUESTS = [
  { id: 'REF-8801', buyer: 'Sarah K.', item: 'Premium AI Ultra-Phone', amount: '₦815,000', reason: 'Defective', requested: '2h ago', status: 'Pending' },
  { id: 'REF-8795', buyer: 'John D.', item: 'Solar-Link Hub', amount: '₦28,500', reason: 'Mismatch', requested: '5h ago', status: 'In Review' },
  { id: 'REF-8760', buyer: 'Amaka O.', item: 'Glass-Protect kit', amount: '₦12,500', reason: 'Wrong Item', requested: '1d ago', status: 'Ready for Pickup' },
];

export default function MerchantRefundDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-surface border-b border-outline-variant sticky top-0 z-10 shadow-sm">
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-3">
            <Link href="/profile" className="p-1 -ml-1 rounded-full text-on-surface-variant">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-headline-lg font-bold text-on-surface">Refund Manager</h1>
          </div>
          <p className="text-body-sm text-on-surface-variant px-8">Manage returns and buyer disputes</p>
        </div>

        <div className="flex gap-4 px-2">
          <div className="flex-1 p-4 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider">PENDING ACTION</p>
            <p className="text-title-md font-bold text-on-surface">3</p>
          </div>
          <div className="flex-1 p-4 rounded-2xl bg-surface-container border border-outline-variant">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">TOTAL REFUNDED</p>
            <p className="text-title-md font-bold text-on-surface">₦420,000</p>
          </div>
        </div>
      </header>

      <div className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          
          <div className="flex justify-between items-center px-2 mb-2">
            <h2 className="text-label-caps font-bold text-on-surface-variant">ACTIVE REQUESTS</h2>
            <button className="text-primary text-body-sm font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              FILTER
            </button>
          </div>

          {REFUND_REQUESTS.map(req => (
            <Link 
              key={req.id}
              href={`/seller/refunds/${req.id}`}
              className="block p-5 rounded-[2rem] bg-surface-container-low border border-outline-variant hover:border-primary transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">
                    {req.buyer[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">{req.buyer}</h3>
                    <p className="text-[10px] text-on-surface-variant font-bold">{req.id} • {req.requested}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                  req.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                }`}>
                  {req.status.toUpperCase()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface/50 border border-outline-variant mb-4 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-label-caps text-on-surface-variant">ITEM</span>
                  <span className="text-body-sm font-medium">{req.item}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-label-caps text-on-surface-variant">AMOUNT</span>
                  <span className="text-body-sm font-bold text-primary">{req.amount}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 rounded-xl bg-primary text-white text-center font-bold text-body-sm shadow-md shadow-primary/10">
                  APPROVE
                </button>
                <button className="flex-1 py-3 px-4 rounded-xl bg-surface border border-outline-variant text-center font-bold text-body-sm">
                  REJECT
                </button>
              </div>
            </Link>
          ))}

          {/* AI Risk Score Legend */}
          <div className="mt-8 p-4 rounded-2xl bg-surface-container flex items-center gap-4">
            <span className="material-symbols-outlined text-primary sparkle-ai">insights</span>
            <p className="text-body-sm text-on-surface-variant leading-tight">
              <span className="font-bold text-primary">AI PRO-TIP:</span> Requests with a green border have been pre-verified by AI for legitimate damage.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
