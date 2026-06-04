'use client';

import Link from 'next/link';

export default function TaxIDRejectedPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Verification Rejected</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-900/30 rounded-[40px] p-8 text-center mb-10">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
            <span className="material-symbols-outlined text-4xl">error</span>
          </div>
          <h2 className="text-2xl font-black text-red-700 dark:text-red-400 mb-2">TIN Verification Failed</h2>
          <p className="text-sm text-red-600/80 dark:text-red-400/80 leading-relaxed">
            The Tax Identification Number provided does not match the records at the Federal Inland Revenue Service (FIRS).
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h3 className="font-black text-lg">Potential Issues</h3>
          <div className="space-y-4">
            {[
              { title: 'Typo in Number', desc: 'Please double-check the 12-digit TIN on your official document.', icon: 'stylus' },
              { title: 'Name Mismatch', desc: 'The name on your Yel\'Low Mart account must exactly match your tax records.', icon: 'badge' },
              { title: 'Expired Certificate', desc: 'Ensure your tax clearance is up-to-date for the 2024 fiscal year.', icon: 'event_busy' },
            ].map(issue => (
              <div key={issue.title} className="bg-surface p-5 rounded-2xl border border-outline-variant/20 flex gap-4">
                <span className="material-symbols-outlined text-on-surface-variant">{issue.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{issue.title}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{issue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Link href="/tax/verify-tin" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
            Correct & Re-submit
          </Link>
          <Link href="/help/safety-contact" className="block w-full bg-surface-container-high py-5 rounded-2xl font-bold text-center border border-outline-variant/20">
            Dispute this Rejection
          </Link>
        </div>
      </main>
    </div>
  );
}
