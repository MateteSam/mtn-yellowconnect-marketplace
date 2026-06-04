'use client';

import Link from 'next/link';
import { useState } from 'react';

const BOOST_PACKAGES = [
  { id: 'lite', label: 'Lite Boost', price: '₦2,500', reach: '5,000 buyers', duration: '3 days', popular: false },
  { id: 'standard', label: 'Standard Boost', price: '₦5,000', reach: '12,000 buyers', duration: '7 days', popular: true },
  { id: 'premium', label: 'Premium Boost', price: '₦15,000', reach: '40,000 buyers', duration: '14 days', popular: false },
];

export default function BoostListingPage() {
  const [selected, setSelected] = useState('standard');
  const [step, setStep] = useState<'choose' | 'target' | 'confirm'>('choose');

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/seller/ads/dashboard" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Boost a Listing</h1>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile py-8 max-w-lg pb-32">
        {step === 'choose' && (
          <div className="animate-in fade-in duration-300">
            <p className="text-on-surface-variant text-sm mb-6">Select a boost package for <strong className="text-on-surface">Solar Hub Pro</strong></p>

            <div className="space-y-3 mb-8">
              {BOOST_PACKAGES.map(pkg => (
                <button
                  key={pkg.id}
                  onClick={() => setSelected(pkg.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all relative ${selected === pkg.id ? 'border-primary bg-primary/5' : 'border-outline-variant/30 bg-surface-container-low'}`}
                >
                  {pkg.popular && (
                    <span className="absolute top-3 right-3 bg-primary text-black text-[10px] font-black uppercase px-2 py-0.5 rounded">Most Popular</span>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${selected === pkg.id ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                      {selected === pkg.id && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold">{pkg.label}</p>
                      <p className="text-sm text-on-surface-variant">{pkg.reach} · {pkg.duration}</p>
                    </div>
                    <p className="font-bold text-secondary">{pkg.price}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* AI Recommendation */}
            <div className="glass-ai rounded-2xl p-4 border border-primary/20 flex gap-3 mb-8">
              <span className="material-symbols-outlined text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <p className="text-sm text-on-surface-variant">
                <strong className="text-secondary">AI recommends Standard Boost</strong> — Solar items in Lagos have 18% higher engagement this week.
              </p>
            </div>

            <button
              onClick={() => setStep('target')}
              className="w-full bg-secondary text-white py-4 rounded-2xl font-bold shadow-xl"
            >
              Continue →
            </button>
          </div>
        )}

        {step === 'target' && (
          <div className="animate-in slide-in-from-right duration-300">
            <h2 className="font-bold text-xl mb-2">Target Audience</h2>
            <p className="text-on-surface-variant text-sm mb-6">Narrow who sees your boosted listing</p>

            <div className="space-y-5 mb-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Target Countries</label>
                <div className="flex flex-wrap gap-2">
                  {['🇳🇬 Nigeria', '🇬🇭 Ghana', '🇰🇪 Kenya', '🌍 All Africa'].map(c => (
                    <button key={c} className="px-4 py-2 rounded-full bg-surface-container-high text-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors">
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Buyer Interests</label>
                <div className="flex flex-wrap gap-2">
                  {['Agri-Tech', 'Renewables', 'Electronics', 'All'].map(c => (
                    <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${c === 'Agri-Tech' ? 'bg-primary text-black' : 'bg-surface-container-high'}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => setStep('confirm')} className="w-full bg-secondary text-white py-4 rounded-2xl font-bold shadow-xl">Review & Pay</button>
            <button onClick={() => setStep('choose')} className="w-full text-on-surface-variant font-bold py-3 mt-2">← Back</button>
          </div>
        )}

        {step === 'confirm' && (
          <div className="animate-in slide-in-from-right duration-300">
            <h2 className="font-bold text-xl mb-6">Confirm Boost</h2>
            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 space-y-4 mb-6">
              <div className="flex justify-between"><span className="text-on-surface-variant">Listing</span><strong>Solar Hub Pro</strong></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Package</span><strong>Standard Boost</strong></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Duration</span><strong>7 days</strong></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Est. Reach</span><strong>12,000 buyers</strong></div>
              <div className="border-t border-outline-variant/20 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-secondary">₦5,000</span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant text-center mb-4">Payment via linked MoMo wallet (+234 801 234 5678)</p>
            <Link href="/seller/ads/dashboard" className="block w-full bg-primary text-black text-center py-4 rounded-2xl font-bold shadow-xl">
              Confirm & Launch Boost
            </Link>
            <button onClick={() => setStep('target')} className="w-full text-on-surface-variant font-bold py-3 mt-2">← Edit</button>
          </div>
        )}
      </main>
    </div>
  );
}
