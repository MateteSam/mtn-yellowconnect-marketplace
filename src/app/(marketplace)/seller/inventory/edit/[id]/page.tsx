"use client";

export const runtime = 'edge';

import Link from 'next/link';
import { useState } from 'react';

export default function MerchantProductEditorPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/seller/inventory" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Edit Product</h1>
        <button className="ml-auto bg-primary text-black px-4 py-1.5 rounded-full font-bold text-xs shadow-sm">Save Changes</button>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-surface-container-low rounded-3xl p-2 mb-10 border border-outline-variant/10">
          <div className="aspect-square bg-white rounded-2xl relative overflow-hidden flex items-center justify-center">
             <span className="material-symbols-outlined text-outline text-6xl">image</span>
             <button className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded-full backdrop-blur-sm">
               <span className="material-symbols-outlined">add_a_photo</span>
             </button>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-surface border border-outline-variant/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-outline-variant">add</span>
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-8">
          <section className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Core Details</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold ml-1">Product Title</label>
                <input type="text" defaultValue="Smart AI Processor V2" className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold ml-1">Price (₦)</label>
                  <input type="text" defaultValue="450,000" className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold ml-1">SKU</label>
                  <input type="text" defaultValue="MTN-AI-001" className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none cursor-not-allowed opacity-60" readOnly />
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Description</h3>
              <button type="button" className="text-[10px] font-black text-secondary flex items-center gap-1 group">
                <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">auto_awesome</span>
                AI Rewrite
              </button>
            </div>
            <textarea 
              rows={6} 
              defaultValue="Next-generation AI chipset designed for edge computing and real-time neural processing. Features ultra-low latency and low power consumption." 
              className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            />
          </section>

          <section className="bg-primary/5 p-6 rounded-3xl border border-primary/20">
            <h3 className="text-xs font-black uppercase tracking-widest text-black mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">visibility</span> Visibility & Discovery
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-bold">List on Home Feed</span>
                <div className="w-12 h-6 bg-primary rounded-full relative">
                   <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full"></div>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-bold">Enable AI Bulk Discounts</span>
                <div className="w-12 h-6 bg-outline-variant rounded-full relative">
                   <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </label>
            </div>
          </section>
        </form>

        <button className="w-full mt-12 bg-red-50 text-red-600 border border-red-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">delete</span>
          Archive Product
        </button>
      </main>
    </div>
  );
}
