'use client';

import Link from 'next/link';

export default function TaxSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <main className="max-w-sm w-full animate-in fade-in zoom-in-90 duration-700">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="material-symbols-outlined text-5xl text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
        <h1 className="text-3xl font-black mb-2">TIN Verified!</h1>
        <p className="text-on-surface-variant text-base mb-10 max-w-xs mx-auto">
          Your Tax Identification Number has been successfully verified with FIRS. Your account is now fully compliant.
        </p>

        <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 mb-8 space-y-3 text-left">
          {[
            { label: 'TIN', value: '10384729-0001' },
            { label: 'Business Name', value: "Kwame's Agri-Tech Ltd" },
            { label: 'Country', value: 'Nigeria (FIRS)' },
            { label: 'Payout Limit', value: 'Unlimited (Verified)' },
          ].map(row => (
            <div key={row.label} className="flex justify-between py-1.5 border-b border-outline-variant/10 last:border-0">
              <span className="text-sm text-on-surface-variant">{row.label}</span>
              <span className="text-sm font-bold text-on-surface">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="glass-ai rounded-xl p-4 border border-primary/20 mb-8 text-left flex gap-3">
          <span className="material-symbols-outlined text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <p className="text-sm text-on-surface-variant">Your payout limit has been upgraded to <strong className="text-on-surface">Unlimited</strong>. You can now receive payouts of any value without restrictions.</p>
        </div>

        <div className="space-y-3">
          <Link href="/tax/compliance" className="block w-full bg-primary text-black py-4 rounded-2xl font-bold shadow-lg">
            View Compliance Dashboard
          </Link>
          <Link href="/home" className="block w-full text-on-surface-variant py-3 font-bold">
            Return to Marketplace
          </Link>
        </div>
      </main>
    </div>
  );
}
