'use client';

import Link from 'next/link';

export default function VerificationCenterPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-8 max-w-4xl">
        {/* Header */}
        <section className="mb-8">
          <h1 className="text-center font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">
            Verification Center
          </h1>
          <p className="text-center text-on-surface-variant mt-2">
            Manage your merchant credentials and trust status.
          </p>
        </section>

        {/* Verification Cards */}
        <div className="space-y-4 mb-6">
          {/* Identity Verification - Verified */}
          <div className="bg-surface-container-low rounded-2xl p-2 border border-outline-variant/30 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-body-lg">Identity Verification</p>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mt-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span className="text-label-caps font-label-caps font-bold">IDENTITY VERIFIED</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">chevron_right</span>
          </div>

          {/* Business Verification - Pending */}
          <div className="bg-surface-container-low rounded-2xl p-2 border border-outline-variant/30 shadow-sm flex items-center justify-between opacity-80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <span className="material-symbols-outlined font-bold">
                  schedule
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-body-lg">Business Verification</p>
                <p className="text-body-sm text-on-surface-variant flex items-center gap-1.5 mt-1 text-amber-700 dark:text-amber-400">
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  Review in progress (24-48h)
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline">chevron_right</span>
          </div>

          {/* Bank Account Verification - Action Required */}
          <div className="bg-surface-container-low rounded-2xl p-4 border-2 border-primary shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 scale-110">
                  <span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                    warning
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface text-body-lg">MoMo Account Setup</p>
                  <p className="text-body-sm text-red-600 dark:text-red-400 font-bold uppercase tracking-wider mt-1">
                    Action Required
                  </p>
                </div>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-sm mb-6">
              Connect your MoMo wallet to start receiving payouts from your sales.
            </p>
            <Link
              href="/verification/momo-setup"
              className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all shadow-lg"
            >
              Complete Setup
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* AI Benefits Section (Glassmorphic) */}
        <section className="glass-ai rounded-3xl p-4 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded-lg text-on-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface font-bold">Why complete verification?</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px] font-bold">percent</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">0% Commission</p>
                  <p className="text-body-sm text-on-surface-variant">Fully verified merchants enjoy zero commission on their first 50 sales.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px] font-bold">verified_user</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Trusted Seller Badge</p>
                  <p className="text-body-sm text-on-surface-variant">Boost customer confidence and increase sales volume by up to 40%.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px] font-bold">rocket_launch</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Priority Listing</p>
                  <p className="text-body-sm text-on-surface-variant">Verified listings appear higher in search results across the marketplace.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Support Section */}
        <section className="mt-6 text-center pb-4">
          <p className="text-on-surface-variant mb-1">Having trouble with verification?</p>
          <button className="text-primary font-bold hover:underline">Contact Merchant Support</button>
        </section>
      </main>
    </div>
  );
}
