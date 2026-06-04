'use client';

import Link from 'next/link';
import { useState } from 'react';

type Step = 'upload' | 'analyzing' | 'details' | 'success';

export default function AIEnabledSellFlow() {
  const [step, setStep] = useState<Step>('upload');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const nextStep = () => {
    if (step === 'upload') {
      setStep('analyzing');
      setTimeout(() => {
        setTitle('Professional Grade Solar Irrigation Pump');
        setPrice('145,000');
        setCategory('Agri-Tech');
        setStep('details');
      }, 2500);
    } else if (step === 'details') {
      setStep('success');
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link 
          href="/home" 
          className="material-symbols-outlined text-on-surface-variant p-2 active:scale-95 transition-transform"
        >
          close
        </Link>
        <div className="flex-grow text-center pr-10">
          <h1 className="font-bold text-lg">
            {step === 'upload' ? 'Sell an Item' : step === 'analyzing' ? 'AI Analyzing' : step === 'details' ? 'Review Listing' : 'Listing Live!'}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl flex-grow flex flex-col">
        {step === 'upload' && (
          <div className="flex-grow flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-full aspect-square md:aspect-video rounded-3xl border-4 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-4 bg-surface-container-low hover:bg-surface-container-high transition-colors group cursor-pointer overflow-hidden p-6 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">add_a_photo</span>
              </div>
              <div>
                <p className="font-bold text-body-lg">Upload high-quality photos</p>
                <p className="text-body-sm text-on-surface-variant mt-1">AI will help you write the description and set the price based on local trends.</p>
              </div>
              <button 
                onClick={nextStep}
                className="mt-4 bg-primary text-black font-bold px-8 py-3 rounded-xl shadow-lg active:scale-95 transition-all"
              >
                Select from Gallery
              </button>
            </div>
            
            <div className="mt-12 glass-ai p-6 rounded-2xl border border-primary/20 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary scale-125" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <p className="font-bold text-secondary uppercase tracking-widest text-[12px]">Smart Sell</p>
              </div>
              <p className="text-body-sm text-on-surface-variant">
                Our AI analyzes over <span className="font-bold text-on-surface">1.2M marketplace data points</span> daily across Africa to ensure you get the best price for your items.
              </p>
            </div>
          </div>
        )}

        {step === 'analyzing' && (
          <div className="flex-grow flex flex-col items-center justify-center animate-in fade-in duration-500">
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 border-4 border-primary rounded-full animate-ping opacity-25"></div>
              <div className="absolute inset-4 border-2 border-secondary rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
            </div>
            <h2 className="font-bold text-xl mb-2">Analyzing your item...</h2>
            <div className="space-y-3 w-full max-w-xs">
              {['Detecting item category...', 'Analyzing condition...', 'Comparing local prices...', 'Generating metadata...'].map((txt, i) => (
                <div key={i} className="flex items-center gap-3 animate-pulse" style={{ animationDelay: `${i * 300}ms` }}>
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 'details' && (
          <div className="animate-in slide-in-from-right duration-500 pb-20">
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 shadow-xl border-4 border-white">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU" alt="Success Preview" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-bold text-on-surface-variant ml-1">AI-Generated Title</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-lg font-bold border-2 border-primary/20 focus:border-secondary outline-none transition-all"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-label-caps font-bold text-on-surface-variant ml-1">Suggested Price (₦)</label>
                  <input 
                    className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-lg font-bold border-none outline-none focus:ring-2 focus:ring-secondary transition-all"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-label-caps font-bold text-on-surface-variant ml-1">Category</label>
                  <input 
                    className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-lg font-bold border-none outline-none focus:ring-2 focus:ring-secondary transition-all"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-label-caps font-bold text-on-surface-variant ml-1">Description</label>
                <textarea 
                  className="w-full bg-surface-container-high rounded-xl px-4 py-3.5 text-body-sm min-h-[120px] resize-none border-none outline-none focus:ring-2 focus:ring-secondary transition-all"
                  defaultValue="Professional grade high-efficiency solar irrigation pump. Suitable for medium to large scale farms. Weatherproof design with integrated MoMo payment support for easy purchase."
                />
              </div>

              <div className="glass-ai p-4 rounded-xl flex items-center justify-between border border-primary/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                  <p className="text-body-sm font-medium">Auto-apply Trust Insights</p>
                </div>
                <div className="w-10 h-5 bg-secondary rounded-full relative">
                  <div className="absolute right-[2px] top-[2px] w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <button 
              onClick={nextStep}
              className="mt-10 w-full bg-secondary text-white py-4 rounded-xl font-bold font-title-md shadow-xl active:scale-95 hover:brightness-110 transition-all"
            >
              Post Listing Now
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="flex-grow flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 text-center">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6 scale-125">
              <span className="material-symbols-outlined text-6xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 tracking-tight">Your item is live!</h1>
            <p className="text-on-surface-variant text-body-lg mb-10 max-w-xs">
              Good work! Your listing is now visible to millions of potential buyers across West Africa.
            </p>
            
            <div className="w-full space-y-4">
              <Link href="/home" className="block w-full bg-primary text-black py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-all">Go to Home Feed</Link>
              <button 
                onClick={() => setStep('upload')}
                className="w-full py-4 font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all"
              >
                Sell another item
              </button>
            </div>
          </div>
        )}
      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
