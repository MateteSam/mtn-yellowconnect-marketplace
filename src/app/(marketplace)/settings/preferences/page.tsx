'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MarketplacePreferencesPage() {
  const [aiPricing, setAiPricing] = useState(true);
  const [autoNeg, setAutoNeg] = useState(false);
  const [intlShip, setIntlShip] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <main className="max-w-2xl mx-auto px-container-margin-mobile py-8 pb-32">
        {/* Screen Title */}
        <div className="mb-8">
          <Link
            href="/settings"
            className="inline-flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors mb-4"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Settings
          </Link>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Merchant Preferences</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Manage your selling automation and marketplace visibility.
          </p>
        </div>

        <div className="space-y-6">
          {/* AI section */}
          <section className="glass-ai p-6 rounded-xl space-y-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                AI Intelligence
              </span>
            </div>

            {/* AI-Assisted Pricing */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-title-md text-title-md text-on-surface">Enable AI-Assisted Pricing</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Automatically adjust your prices based on regional demand, competitor trends, and stock levels using
                  MTN Scout AI.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={aiPricing}
                onClick={() => setAiPricing(!aiPricing)}
                className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                  aiPricing ? 'bg-primary-container' : 'bg-surface-variant'
                }`}
              >
                <span
                  className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                    aiPricing ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Auto Negotiation */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-title-md text-title-md text-on-surface">Automatic Negotiation</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Let the AI agent handle price negotiations with buyers within your pre-defined minimum margin.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={autoNeg}
                onClick={() => setAutoNeg(!autoNeg)}
                className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                  autoNeg ? 'bg-primary-container' : 'bg-surface-variant'
                }`}
              >
                <span
                  className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                    autoNeg ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </section>

          {/* Standard settings */}
          <section className="bg-surface-container-low p-6 rounded-xl space-y-8 border border-outline-variant">
            {/* International Shipping */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">public</span>
                  <h3 className="font-title-md text-title-md text-on-surface">International Shipping</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Make your products available to buyers across the Pan-African network and beyond.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={intlShip}
                onClick={() => setIntlShip(!intlShip)}
                className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                  intlShip ? 'bg-primary-container' : 'bg-surface-variant'
                }`}
              >
                <span
                  className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                    intlShip ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <hr className="border-outline-variant" />

            {/* Currency */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">payments</span>
                <h3 className="font-title-md text-title-md text-on-surface">Currency Selection</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Select your primary settlement currency for all marketplace transactions.
              </p>
              <div className="relative">
                <select
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 font-body-lg text-body-lg appearance-none focus:ring-2 focus:ring-secondary cursor-pointer outline-none"
                >
                  <option value="GHS">GHS - Ghanaian Cedi</option>
                  <option value="NGN">NGN - Nigerian Naira</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                  <option value="USD">USD - United States Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Save Button */}
        <div className="mt-12 flex flex-col gap-4">
          <button
            onClick={handleSave}
            className={`w-full font-bold py-4 rounded-xl active:scale-95 transition-all duration-100 shadow-sm hover:shadow-md ${
              saved
                ? 'bg-tertiary-container text-on-tertiary-container'
                : 'bg-primary-container text-on-primary-container'
            }`}
          >
            {saved ? '✓ Changes Saved' : 'Save All Changes'}
          </button>
          <button className="w-full text-secondary font-bold py-2 hover:underline">Reset to Default Settings</button>
        </div>
      </main>
    </div>
  );
}
