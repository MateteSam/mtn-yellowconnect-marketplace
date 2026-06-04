'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TaxYearSelectionPage() {
  const years = ['2026 (Current)', '2025', '2024', '2023'];
  const [selected, setSelected] = useState('2026 (Current)');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Select Tax Year</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-black mb-2">Export Summary</h2>
          <p className="text-on-surface-variant text-sm">Which year's annual tax summary would you like to export for your records?</p>
        </div>

        <div className="space-y-3 mb-12">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelected(year)}
              className={`w-full p-6 rounded-3xl border-2 text-left flex items-center justify-between transition-all ${selected === year ? 'border-primary bg-primary/5' : 'border-outline-variant/20 bg-surface'}`}
            >
              <span className={`font-bold ${selected === year ? 'text-on-surface' : 'text-on-surface-variant'}`}>{year}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === year ? 'border-primary' : 'border-outline-variant/40'}`}>
                {selected === year && <div className="w-3 h-3 bg-primary rounded-full"></div>}
              </div>
            </button>
          ))}
        </div>

        <Link href="/tax/export/summary" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
          Generate Summary
        </Link>
      </main>
    </div>
  );
}
