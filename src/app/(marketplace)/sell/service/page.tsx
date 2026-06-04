'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SellServiceFlow() {
  const [step, setStep] = useState<'details' | 'success'>('details');

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link 
          href="/sell" 
          className="material-symbols-outlined text-on-surface-variant p-2 active:scale-95 transition-transform"
        >
          arrow_back
        </Link>
        <div className="flex-grow text-center pr-10">
          <h1 className="font-bold text-lg">
            {step === 'details' ? 'Offer a Service' : 'Service Live!'}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl flex-grow flex flex-col">
        {step === 'details' && (
          <div className="animate-in slide-in-from-right duration-500 pb-20">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">Market your expertise</h2>
              <p className="text-on-surface-variant text-body-md">Fill in the details to reach thousands of clients.</p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-bold text-on-surface-variant ml-1">Service Title</label>
                <input 
                  className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-lg font-bold border-none outline-none focus:ring-2 focus:ring-secondary transition-all"
                  placeholder="e.g., Professional Graphic Design"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-bold text-on-surface-variant ml-1">Service Category</label>
                <select className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-lg font-bold border-none outline-none focus:ring-2 focus:ring-secondary transition-all">
                  <option>Select a category</option>
                  <option>Consulting</option>
                  <option>Design & Creative</option>
                  <option>Repairs & Maintenance</option>
                  <option>Teaching & Training</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-bold text-on-surface-variant ml-1">Base Price / Hourly Rate (₦)</label>
                <input 
                  className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-lg font-bold border-none outline-none focus:ring-2 focus:ring-secondary transition-all"
                  placeholder="50,000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-bold text-on-surface-variant ml-1">Service Description</label>
                <textarea 
                  className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-sm min-h-[120px] resize-none border-none outline-none focus:ring-2 focus:ring-secondary transition-all"
                  placeholder="Describe what you offer and your experience..."
                />
              </div>
            </div>

            <button 
              onClick={() => setStep('success')}
              className="mt-10 w-full bg-secondary text-white py-4 rounded-xl font-bold font-title-md shadow-xl active:scale-95 hover:brightness-110 transition-all"
            >
              Post Service Listing
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="flex-grow flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 text-center">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6 scale-125">
              <span className="material-symbols-outlined text-6xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 tracking-tight">Service is live!</h1>
            <p className="text-on-surface-variant text-body-lg mb-10 max-w-xs">
              Excellent! Your professional service is now listed on the marketplace.
            </p>
            
            <div className="w-full space-y-4">
              <Link href="/home" className="block w-full bg-primary text-black py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-all">Go to Home Feed</Link>
              <button 
                onClick={() => setStep('details')}
                className="w-full py-4 font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all"
              >
                List another service
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
