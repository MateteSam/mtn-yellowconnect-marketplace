'use client';

import Link from 'next/link';

const REFUNDS = [
  { id: 'REF-8801', item: 'Premium AI Ultra-Phone', amount: '₦815,000', status: 'In Progress', date: 'Requested June 06', icon: 'package_2', step: 1 },
  { id: 'REF-7290', item: 'Solar-Link Charging Hub', amount: '₦28,500', status: 'Completed', date: 'Processed May 12', icon: 'verified', step: 3 },
];

export default function RefundStatusTracker() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 bg-surface border-b border-outline-variant sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/profile" className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-headline-lg font-bold text-on-surface">Refunds</h1>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {['Active (1)', 'Completed', 'Disputed'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-4 py-2 rounded-full text-label-caps font-bold transition-all ${
                i === 0 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {REFUNDS.map(refund => (
            <div key={refund.id} className="p-6 rounded-[32px] bg-surface-container-low border border-outline-variant shadow-sm flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{refund.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface leading-tight">{refund.item}</h3>
                    <p className="text-body-sm text-on-surface-variant">{refund.id} • {refund.date}</p>
                  </div>
                </div>
                <span className="text-primary font-bold text-body-lg">{refund.amount}</span>
              </div>

              {/* Mini Stepper */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <span className={`text-[10px] font-bold ${refund.step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>PICKUP</span>
                  <span className={`text-[10px] font-bold ${refund.step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>VERIFY</span>
                  <span className={`text-[10px] font-bold ${refund.step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>CREDITED</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden flex">
                  <div className={`h-full bg-primary transition-all duration-1000 ${refund.step === 1 ? 'w-1/3' : refund.step === 2 ? 'w-2/3' : 'w-full'}`}></div>
                </div>
              </div>

              {/* Status Message */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-high/50 border border-outline-variant">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">schedule</span>
                <p className="text-body-sm text-on-surface-variant">
                  {refund.status === 'In Progress' 
                    ? 'A courier is arriving today between 2:00 PM - 5:00 PM to pick up the item.' 
                    : 'The refund was successfully credited to your MoMo wallet ending in *4401.'}
                </p>
              </div>

              <div className="flex gap-3">
                <Link 
                  href={`/refunds/${refund.id}/details`}
                  className="flex-1 py-3 px-4 rounded-2xl bg-surface border border-outline-variant text-center font-bold text-body-sm hover:border-primary transition-colors"
                >
                  VIEW DETAILS
                </Link>
                {refund.status === 'In Progress' && (
                  <button className="flex-1 py-3 px-4 rounded-2xl bg-primary text-white text-center font-bold text-body-sm shadow-md shadow-primary/10">
                    CONTACT COURIER
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* AI Helper Card */}
          <div className="mt-8 p-6 rounded-[2rem] bg-indigo-50 border border-indigo-100 flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-0.5 border-2 border-indigo-200">
              <span className="material-symbols-outlined text-indigo-600 text-[32px]">smart_toy</span>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-indigo-900 leading-tight">Refund Protection AI</h4>
              <p className="text-body-sm text-indigo-700/80">
                Your refund for ₦815,000 is backed by MTN's **Seller Escrow Guarantee**. Funds are reserved and ready for release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
