'use client';

import Link from 'next/link';

export default function TaxVerifiedSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-container-margin-mobile text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
          <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
        
        <h1 className="text-4xl font-black mb-2 italic">Official Merchant</h1>
        <p className="text-on-surface-variant mb-10 max-w-xs mx-auto">
          Your Tax ID has been verified. You now have full access to high-volume payouts and the <strong className="text-on-surface">Gold Elite</strong> badge.
        </p>

        <div className="glass-ai w-full max-w-xs rounded-full p-2 pr-6 border border-primary/20 mb-12 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
            <span className="material-symbols-outlined text-2xl font-black">workspace_premium</span>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Status Unlocked</p>
            <p className="font-black text-sm">Verified Tax-Payer</p>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Link href="/profile" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all">
            View Marketplace Profile
          </Link>
          <Link href="/wallet/dashboard" className="block w-full bg-surface-container-high py-5 rounded-2xl font-bold border border-outline-variant/20">
            Go to Wallet
          </Link>
        </div>
      </main>
    </div>
  );
}
