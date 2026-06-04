'use client';

import Link from 'next/link';

export default function VerificationSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <main className="max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        {/* Success Illustration / Icon */}
        <div className="relative mb-10 group">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto flex items-center justify-center text-green-600 dark:text-green-400">
            <span className="material-symbols-outlined text-5xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
          {/* Decorative Sparks */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 -left-4 w-4 h-4 bg-secondary/30 rounded-lg rotate-12 animate-pulse"></div>
        </div>

        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3 tracking-tight">
          Documents Submitted!
        </h1>
        <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
          Your identity documents have been received and are now being reviewed by our trust and safety team.
        </p>

        {/* Status Timeline */}
        <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 text-left mb-10">
          <h3 className="font-bold text-body-sm uppercase tracking-widest text-on-surface-variant mb-4">What happens next?</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div>
                <p className="font-bold text-body-sm">Submission Received</p>
                <p className="text-[12px] text-on-surface-variant">Your files are securely uploaded.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="relative">
                <p className="font-bold text-body-sm">Review in Progress</p>
                <p className="text-[12px] text-on-surface-variant line-clamp-1">Usually completed within 24-48 hours.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 opacity-40">
              <div className="w-6 h-6 rounded-full border-2 border-outline-variant shrink-0 mt-0.5"></div>
              <div>
                <p className="font-bold text-body-sm">Verified Status</p>
                <p className="text-[12px] text-on-surface-variant">Access all marketplace features.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Global Glass notification for AI Scout */}
        <div className="ai-glass rounded-2xl p-5 mb-8 border border-primary/20 flex items-center gap-4 text-left">
          <span className="material-symbols-outlined text-primary scale-125">auto_awesome</span>
          <div>
            <p className="text-body-sm font-bold">AI Tip</p>
            <p className="text-[12px] text-on-surface-variant">While we review your ID, you can start <Link href="/sell" className="text-secondary font-bold">drafting your first listing</Link> with AI help.</p>
          </div>
        </div>

        <Link
          href="/verification/center"
          className="w-full bg-primary text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all shadow-lg"
        >
          Back to Verification Center
        </Link>
      </main>
    </div>
  );
}
