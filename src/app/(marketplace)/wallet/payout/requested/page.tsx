'use client';

import Link from 'next/link';

export default function PayoutRequestedPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <main className="max-w-sm w-full animate-in zoom-in-90 fade-in duration-700">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="material-symbols-outlined text-5xl text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="text-3xl font-black mb-2">Payout Requested!</h1>
        <p className="text-on-surface-variant text-base mb-2">₦100,000 has been requested</p>
        <p className="text-on-surface-variant text-sm mb-10 max-w-xs mx-auto">
          As a Gold member, your payout will arrive to your MoMo wallet within <strong className="text-secondary">2 hours</strong>.
        </p>

        <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 mb-8 space-y-3 text-left">
          {[
            { label: 'Amount', value: '₦100,000' },
            { label: 'Destination', value: 'MoMo Wallet (+234 801 234 5678)' },
            { label: 'Reference', value: '#PAY-38829' },
            { label: 'Est. Arrival', value: 'Within 2 hours (Gold)' },
          ].map(row => (
            <div key={row.label} className="flex justify-between">
              <span className="text-sm text-on-surface-variant">{row.label}</span>
              <span className="text-sm font-bold text-on-surface">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 w-full">
          <Link href="/wallet/overview" className="block w-full bg-primary text-black py-4 rounded-2xl font-bold shadow-lg">
            Back to Wallet
          </Link>
          <Link href="/home" className="block w-full text-on-surface-variant py-3 font-bold">
            Go to Marketplace
          </Link>
        </div>
      </main>
    </div>
  );
}
