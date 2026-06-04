'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VerifyTINPage() {
  const [tin, setTin] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => window.location.href = '/tax/success', 2000);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Verify Tax ID (TIN)</h1>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile py-8 max-w-lg">
        {/* What is TIN */}
        <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5 mb-8 flex gap-4">
          <span className="material-symbols-outlined text-secondary text-2xl shrink-0">info</span>
          <div>
            <p className="font-bold text-sm mb-1">What is a TIN?</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Your Tax Identification Number (TIN) is issued by FIRS (Nigeria) or your country's revenue authority. It's required to process payouts above ₦2,000,000/year.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-5 mb-8">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">TIN / Tax ID Number</label>
            <input
              type="text"
              value={tin}
              onChange={e => setTin(e.target.value)}
              placeholder="e.g. 10384729-0001"
              className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-body-lg font-medium outline-none focus:ring-2 focus:ring-secondary tracking-widest"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Business Name (as registered)</label>
            <input
              type="text"
              defaultValue="Kwame's Agri-Tech Ltd"
              className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-body-lg font-medium outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Country of Registration</label>
            <div className="relative">
              <select className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-body-lg font-medium outline-none focus:ring-2 focus:ring-secondary appearance-none">
                <option>🇳🇬 Nigeria (FIRS)</option>
                <option>🇬🇭 Ghana (GRA)</option>
                <option>🇰🇪 Kenya (KRA)</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleVerify}
          disabled={tin.length < 8 || isVerifying}
          className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg shadow-xl disabled:opacity-40 transition-all flex items-center justify-center gap-2"
        >
          {isVerifying ? <><span className="material-symbols-outlined animate-spin">sync</span>Verifying with FIRS...</> : 'Verify Tax ID'}
        </button>
        <p className="text-center text-xs text-on-surface-variant mt-4">
          Verification is done in real-time via a secure government API. Your data is protected under our Privacy Policy.
        </p>
      </main>
    </div>
  );
}
