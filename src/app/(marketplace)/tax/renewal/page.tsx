'use client';

import Link from 'next/link';

export default function ComplianceRenewalReminderPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Action Required</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-amber-50 dark:bg-amber-900/10 border-2 border-amber-200 dark:border-amber-900/30 rounded-[40px] p-8 text-center mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-700">
            <span className="material-symbols-outlined text-4xl">event_repeat</span>
          </div>
          <h2 className="text-2xl font-black text-amber-900 dark:text-amber-400 mb-2">Renewal Looming</h2>
          <p className="text-sm text-amber-800/80 dark:text-amber-400/80 leading-relaxed">
            Your Tax Clearance Certificate (TCC) for the 2024 period expires in <strong className="text-amber-900 dark:text-amber-200">14 days</strong>.
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 border border-outline-variant/20 shadow-sm mb-10">
          <h3 className="font-black text-lg mb-6">Why update now?</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary text-2xl">verified</span>
              <div>
                <p className="font-bold text-sm mb-1">Maintain "Verified" Badge</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">Expired tax records result in the loss of your trust badge and lower search ranking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-2xl">payments</span>
              <div>
                <p className="font-bold text-sm mb-1">Avoid Payout Holds</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">Local regulations require active tax records to process withdrawals exceeding ₦500,000.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/tax/verify-tin" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
            Upload New Certificate
          </Link>
          <Link href="/help/hub" className="block w-full bg-surface-container-high py-5 rounded-2xl font-bold text-center border border-outline-variant/20">
            Learn How to Renew (FIRS/GRA)
          </Link>
        </div>
      </main>
    </div>
  );
}
