'use client';

import Link from 'next/link';
import { useState } from 'react';

const COUNTRIES = [
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', currency: '₦' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', currency: 'R' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭', currency: 'GH₵' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪', currency: 'KSh' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹', currency: 'Br' },
  { code: 'TZ', name: 'Tanzania', flag: '🇹🇿', currency: 'TSh' },
  { code: 'CM', name: 'Cameroon', flag: '🇨🇲', currency: 'FCFA' },
  { code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮', currency: 'FCFA' },
  { code: 'SN', name: 'Senegal', flag: '🇸🇳', currency: 'FCFA' },
  { code: 'UG', name: 'Uganda', flag: '🇺🇬', currency: 'USh' },
  { code: 'RW', name: 'Rwanda', flag: '🇷🇼', currency: 'RF' },
  { code: 'ZM', name: 'Zambia', flag: '🇿🇲', currency: 'ZK' },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState('NG');
  const [search, setSearch] = useState('');

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-2 pt-12 pb-12"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >
      <h1 className="text-title-md font-title-md text-primary tracking-tight">Yel&apos;Low Mart</h1>
      <p className="text-label-caps font-label-caps text-on-surface-variant mb-4">Your African Marketplace</p>
      {/* Logo */}
      <img src="/icon.png" alt="Yel'Low Mart Logo" className="h-16 w-auto object-contain mb-4" />

      {/* Header */}
      {/* <header className="px-container-margin-mobile pt-12 pb-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
        </div>
        <div>
          <h1 className="text-title-md font-title-md text-on-surface font-bold">Yel&apos;Low Mart</h1>
          <p className="text-label-caps font-label-caps text-on-surface-variant">Your African Marketplace</p>
        </div>
      </header> */}

      {/* Main content */}
      <main className="flex-1 px-container-margin-mobile pb-[40px] flex flex-col gap-6">
        {/* Headline */}
        <div className="flex flex-col align-center justify-center py-4">
          <h2 className="text-center text-headline-lg-mobile font-headline-lg-mobile text-on-surface mb-2">
            Select your country
          </h2>
          <p className="text-center text-body-sm font-body-sm text-on-surface-variant">
            We&apos;ll personalize your marketplace experience with local listings, prices, and sellers.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input
            type="text"
            placeholder="Search country..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xl pl-11 pr-4 py-3 text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant transition-colors outline-none"
          />
        </div>

        {/* Country list */}
        <div className="flex flex-col gap-2">
          {filtered.map(country => (
            <button
              key={country.code}
              onClick={() => setSelected(country.code)}
              className={`w-full flex items-center gap-4 px-4 py-2 rounded-xl border transition-all text-left ${selected === country.code
                ? 'border-secondary bg-secondary/5 shadow-sm'
                : 'border-outline-variant bg-surface hover:bg-surface-container-low'
                }`}
            >
              <div className="w-8 h-8 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                <img
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-body-lg font-body-lg text-on-surface font-semibold">{country.name}</div>
                <div className="text-label-caps font-label-caps text-on-surface-variant">{country.code} · {country.currency}</div>
              </div>
              {selected === country.code && (
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              )}
            </button>
          ))}
        </div>
      </main>

      {/* Sticky footer CTA */}
      <div className="fixed bottom-0 left-0 w-full p-2 bg-surface/90 backdrop-blur-md border-t border-outline-variant z-40">
        <Link
          href="/signup/email"
          className="w-full bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-title-md text-title-sm py-2 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
        >
          Continue with {COUNTRIES.find(c => c.code === selected)?.name}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
