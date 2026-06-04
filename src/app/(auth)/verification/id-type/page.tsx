'use client';

import Link from 'next/link';
import { useState } from 'react';

const ID_TYPES = [
  {
    id: 'national-id',
    title: 'National Identity Card',
    description: 'Requires front and back photos of your local ID card.',
    icon: 'badge',
  },
  {
    id: 'passport',
    title: 'International Passport',
    description: 'Requires a photo of the main info page with your photo.',
    icon: 'travel_explore',
  },
  {
    id: 'voter-card',
    title: 'Voter Identity Card',
    description: 'Verify using your registered voter credentials.',
    icon: 'how_to_reg',
  },
  {
    id: 'driver-license',
    title: 'Driver’s License',
    description: 'Requires a clear photo of your valid driving permit.',
    icon: 'directions_car',
  },
];

export default function IDTypeSelectionPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Top Bar */}
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 shadow-sm border-b border-outline-variant/10">
        <Link 
          href="/verification/center" 
          className="material-symbols-outlined text-on-surface-variant p-2 active:scale-95 transition-transform"
        >
          arrow_back
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim ml-2">
          Select ID Type
        </h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl pb-24">
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">1</div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">ID Type</span>
          </div>
          <div className="h-[2px] flex-grow bg-outline-variant mx-2 -mt-6"></div>
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Capture</span>
          </div>
          <div className="h-[2px] flex-grow bg-outline-variant mx-2 -mt-6"></div>
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-sm">3</div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Confirm</span>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-title-md font-bold text-on-surface">Verify your identity</h2>
          <p className="text-on-surface-variant mt-1 text-body-sm">
            Choose the document you will use to verify your identity. Make sure it is valid and not expired.
          </p>
        </section>

        {/* Selection List */}
        <div className="space-y-3">
          {ID_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all active:scale-[0.98] flex items-center gap-4 ${
                selected === type.id
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-outline-variant/30 bg-surface-container-low hover:border-outline-variant'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                selected === type.id ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'
              }`}>
                <span className="material-symbols-outlined text-[28px]">{type.icon}</span>
              </div>
              <div className="flex-grow">
                <p className={`font-bold text-body-lg transition-colors ${
                  selected === type.id ? 'text-primary' : 'text-on-surface'
                }`}>
                  {type.title}
                </p>
                <p className="text-body-sm text-on-surface-variant leading-tight mt-0.5">
                  {type.description}
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selected === type.id ? 'border-primary bg-primary' : 'border-outline-variant'
              }`}>
                {selected === type.id && (
                  <span className="material-symbols-outlined text-white text-[16px] font-bold">check</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Requirements Notice */}
        <div className="mt-8 bg-surface-container-low rounded-2xl p-4 border border-outline-variant/30 flex gap-4">
          <span className="material-symbols-outlined text-secondary">verified_user</span>
          <div>
            <p className="text-body-sm font-bold text-on-surface">Data Privacy</p>
            <p className="text-[12px] text-on-surface-variant mt-0.5">
              Your document data is encrypted and used only for verification purposes in compliance with local regulations.
            </p>
          </div>
        </div>

        {/* CTA (Floating-style on mobile) */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md md:static md:bg-transparent md:p-0 md:mt-10">
          <Link
            href={selected ? `/verification/capture?type=${selected}` : '#'}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
              selected 
                ? 'bg-secondary text-white hover:brightness-110 active:scale-[0.99]' 
                : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed opacity-50'
            }`}
            onClick={(e) => !selected && e.preventDefault()}
          >
            Continue with selection
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
