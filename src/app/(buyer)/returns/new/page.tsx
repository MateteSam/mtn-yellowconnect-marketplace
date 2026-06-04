'use client';

import { useState } from 'react';
import Link from 'next/link';

const ITEMS = [
  { id: '1', name: 'Premium AI Ultra-Phone', price: '₦815,000', image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=200&auto=format&fit=crop' },
];

export default function ReturnInitiationPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [reason, setReason] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 py-8 bg-surface border-b border-outline-variant z-10 sticky top-0">
        <div className="flex items-center gap-4 mb-2">
          <Link href="/orders/receipts" className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-title-md font-bold text-on-surface">Initiate Return</h1>
        </div>
        <p className="text-body-sm text-on-surface-variant">Order #ORD-90122 • Delivered June 05</p>
      </header>

      <div className="flex-1 px-6 pt-8 pb-32">
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Item Selection */}
          <section className="space-y-4">
            <h2 className="text-label-caps font-bold text-on-surface-variant">SELECT ITEMS TO RETURN</h2>
            {ITEMS.map(item => (
              <button 
                key={item.id}
                onClick={() => setSelected(prev => prev.includes(item.id) ? prev.filter(i => i !== item.id) : [...prev, item.id])}
                className={`w-full flex gap-4 p-4 rounded-3xl border transition-all text-left ${
                  selected.includes(item.id) ? 'bg-primary-container border-primary shadow-md' : 'bg-surface-container-low border-outline-variant hover:border-primary/50'
                }`}
              >
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover" />
                  {selected.includes(item.id) && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                      <span className="material-symbols-outlined text-white text-[16px]">check</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 py-1">
                  <h3 className="font-bold text-on-surface">{item.name}</h3>
                  <p className="text-primary font-bold">{item.price}</p>
                  <p className="text-body-sm text-on-surface-variant">Qty: 1</p>
                </div>
              </button>
            ))}
          </section>

          {/* Reason Selection */}
          <section className="space-y-4">
            <h2 className="text-label-caps font-bold text-on-surface-variant">REASON FOR RETURN</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Defective/Not working', value: 'defective' },
                { label: 'Did not match description', value: 'mismatch' },
                { label: 'Received wrong item', value: 'wrong_item' },
                { label: 'Changed my mind', value: 'mind_change' },
              ].map(opt => (
                <button 
                  key={opt.value}
                  onClick={() => setReason(opt.value)}
                  className={`px-5 py-4 rounded-2xl border text-left font-medium transition-all ${
                    reason === opt.value ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-surface-container-low border-outline-variant hover:bg-outline-variant'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </section>

          {/* AI Policy Check */}
          <div className="p-4 rounded-2xl bg-surface-container border border-primary/20 flex gap-4 items-start">
            <div className="p-2 rounded-xl bg-primary/5">
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
            <div>
              <h4 className="text-body-md font-bold text-primary">AI Eligibility Check</h4>
              <p className="text-body-sm text-on-surface-variant">Based on your Gold status and return reason, you are eligible for **instant MoMo refund** once the courier picks up the item.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-surface/80 backdrop-blur-md border-t border-outline-variant z-10">
        <Link 
          href="/returns/success"
          className={`block w-full max-w-2xl mx-auto py-4 rounded-full font-bold text-center transition-all ${
            selected.length > 0 && reason 
              ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02]' 
              : 'bg-surface-container-highest text-on-surface-variant opacity-60 pointer-events-none'
          }`}
        >
          CONFIRM RETURN REQUEST
        </Link>
      </div>

    </div>
  );
}
