'use client';

import Link from 'next/link';
import { useState } from 'react';

const GUIDES = [
  { id: 'g1', title: 'How to list your first product', time: '5 min read', desc: 'Step-by-step guide on creating high-converting listings with AI titles.' },
  { id: 'g2', title: 'Managing orders and fulfillment', time: '8 min read', desc: 'Everything you need to know from purchase to successful MoMo payout.' },
  { id: 'g3', title: 'Improving your seller reputation', time: '6 min read', desc: 'How to earn trust badges and appear higher in local search results.' },
  { id: 'g4', title: 'Smart Search & Filter Mastery', time: '4 min read', desc: 'Tips for buyers on finding the best deals using advanced AI filters.' },
];

export default function BuyingSellingGuidesPage() {
  const [filter, setFilter] = useState<'all' | 'buying' | 'selling'>('all');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/help/hub" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Buying & Selling Guides</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {['all', 'buying', 'selling'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full font-bold text-sm capitalize whitespace-nowrap transition-all ${filter === f ? 'bg-primary text-black' : 'bg-surface-container-high text-on-surface-variant'}`}
            >
              For {f}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {GUIDES.map(guide => (
            <div key={guide.id} className="bg-surface rounded-3xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow group flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg leading-tight">{guide.title}</h3>
                  <span className="text-[10px] font-black text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded italic whitespace-nowrap ml-4">{guide.time}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{guide.desc}</p>
                <div className="flex items-center gap-4">
                  <button className="text-sm font-black text-primary hover:underline">Read Guide</button>
                  <button className="text-sm font-black text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">bookmark</span> Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Learning Note */}
        <div className="mt-12 glass-ai p-6 rounded-3xl border border-primary/20 flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div>
            <p className="font-bold text-sm mb-1">AI-Assisted Learning</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Based on your recent search for "farm equipment", we recommend viewing the <strong className="text-on-surface">Agri-Tech Bulk Selling Guide</strong> for best shipping practices.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
