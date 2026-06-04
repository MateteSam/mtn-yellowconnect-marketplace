'use client';

import Link from 'next/link';

export default function ReturnSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface px-6 items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* Animated Icon */}
        <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-8 shadow-xl shadow-green-500/20">
          <span className="material-symbols-outlined text-[64px] text-white">mark_as_unread</span>
        </div>

        <h1 className="text-headline-lg font-bold text-on-surface text-center mb-2">Request Submitted</h1>
        <p className="text-body-lg text-on-surface-variant text-center mb-10">
          We've received your return request. A courier will be assigned to pick up your item within 24 hours.
        </p>

        {/* Next Steps Card */}
        <div className="w-full p-6 rounded-3xl bg-surface-container border border-outline-variant space-y-6 mb-10">
          <h2 className="text-label-caps font-bold text-on-surface-variant border-b border-outline-variant pb-2">WHAT'S NEXT</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
              <p className="text-body-md text-on-surface font-medium">Pack the item in its original packaging if possible.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</div>
              <p className="text-body-md text-on-surface font-medium">Show the courier your return QR code (available in the tracker).</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</div>
              <p className="text-body-md text-on-surface font-medium">Refund will be credited to your MoMo wallet instantly upon pickup.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-3">
          <Link 
            href="/refunds/track"
            className="block w-full bg-primary text-white py-4 rounded-full font-bold text-center shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
          >
            TRACK REFUND STATUS
          </Link>
          <Link 
            href="/home"
            className="block w-full py-4 text-on-surface-variant font-bold text-center hover:text-primary transition-colors"
          >
            BACK TO DASHBOARD
          </Link>
        </div>

      </div>

      {/* Floating AI Note */}
      <div className="fixed bottom-10 left-6 right-6 flex justify-center">
        <div className="bg-primary-container/30 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary sparkle-ai">info</span>
          <span className="text-label-caps font-bold text-primary">AI: YOUR REFUND LIMIT IS PROTECTED BY GOLD STATUS</span>
        </div>
      </div>

    </div>
  );
}
