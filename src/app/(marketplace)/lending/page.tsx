'use client';

import Link from 'next/link';

const LOAN_OFFERS = [
  { id: 'L1', amount: '₦250,000', rate: '3.5% fee', term: '30 Days', status: 'Active', repaid: 40 },
];

export default function MerchantLendingDashboard() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 pt-8 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,white,transparent_60%)]" />
        <div className="relative text-center text-white">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              {/* <Link href="/wallet/overview" className="material-symbols-outlined text-white/80">arrow_back</Link> */}
              <span className="font-bold text-lg">Purchase Financing</span>
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1">Shopping Credit Limit</p>
          <p className="text-5xl font-black mb-2">₦500,000</p>
          <p className="text-sm mt-8 flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Based on your sales history & Gold membership
          </p>
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop max-w-2xl -mt-8 relative z-10">
        {/* CTA Card */}
        <div className="bg-surface rounded-3xl shadow-lg border border-outline-variant/10 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-title-md">Low on cash?</h2>
              <p className="text-sm text-on-surface-variant mt-1">Buy what you need now and settle easily via MoMo.</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart_checkout</span>
          </div>
          <Link href="/lending/select-amount" className="block w-full bg-primary text-black text-center py-4 rounded-xl font-bold shadow-md active:scale-[0.99] hover:bg-primary/90 transition-all">
            Shop on Credit
          </Link>
          <p className="text-[10px] text-on-surface-variant text-center mt-3 font-medium">Valid for marketplace product and service purchases only.</p>
        </div>

        {/* Active Loan */}
        {LOAN_OFFERS.length > 0 && (
          <div className="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm p-5 mb-6">
            <h2 className="font-bold text-title-md mb-4">Active Credit Purchase</h2>
            {LOAN_OFFERS.map(loan => (
              <div key={loan.id} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-black text-primary">{loan.amount}</p>
                    <p className="text-on-surface-variant text-sm">{loan.rate} · {loan.term}</p>
                  </div>
                  <span className="text-xs bg-primary-container text-on-primary-container font-bold px-3 py-1 rounded-full">{loan.status}</span>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                    <span>Settlement Progress</span>
                    <span className="font-bold">₦{loan.amount.replace('₦','').replace(',','')} total</span>
                  </div>
                  <div className="h-2.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${loan.repaid}%` }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-surface-container-low rounded-xl p-3">
                    <p className="font-bold text-sm">₦100,000</p>
                    <p className="text-[11px] text-on-surface-variant">Repaid</p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-3">
                    <p className="font-bold text-sm">₦150,000</p>
                    <p className="text-[11px] text-on-surface-variant">Remaining</p>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl border-2 border-primary text-on-surface font-bold hover:bg-primary/5 transition-colors">
                  Settle Credit Early
                </button>
              </div>
            ))}
          </div>
        )}

        {/* AI Credit Intel */}
        <div className="glass-ai rounded-2xl p-4 border border-primary/20">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary shrink-0 text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <div>
              <p className="font-bold text-secondary text-xs uppercase tracking-widest mb-1">AI Credit Score</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Your credit score is <strong className="text-primary">A+ (Excellent)</strong>. Maintaining your current fulfillment rate will unlock a higher limit next quarter.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
