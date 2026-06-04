'use client';

import Link from 'next/link';

export default function TaxDisputeSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-container-margin-mobile text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary animate-pulse">
          <span className="material-symbols-outlined text-5xl">mark_email_read</span>
        </div>
        
        <h1 className="text-3xl font-black mb-2">Dispute Submitted</h1>
        <p className="text-on-surface-variant mb-10 max-w-xs mx-auto">
          Your dispute for transaction <strong className="text-on-surface">#TXN-9921-A</strong> has been logged. Our compliance team will review it within 3 business days.
        </p>

        <div className="w-full bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10 mb-8 max-w-sm text-left">
          <div className="flex gap-4 items-start">
            <span className="material-symbols-outlined text-secondary">info</span>
            <div>
              <p className="font-bold text-sm mb-1">What happens next?</p>
              <ul className="text-xs text-on-surface-variant space-y-2 list-disc pl-4">
                <li>We will reconcile the claim with FIRS records.</li>
                <li>If approved, the deducted balance (₦1,250) will be credited back to your Merchant Wallet.</li>
                <li>You'll receive a notification on the app and via SMS.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Link href="/tax/history" className="block w-full bg-black text-white py-4 rounded-2xl font-bold font-title-sm shadow-lg hover:brightness-110 transition-all">
            Track in History
          </Link>
          <Link href="/tax/compliance" className="block w-full bg-surface-container-high py-4 rounded-2xl font-bold border border-outline-variant/20">
            Compliance Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
