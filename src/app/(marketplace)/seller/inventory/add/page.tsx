'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MerchantProductAddPage() {
  const [published, setPublished] = useState(false);

  if (published) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-surface rounded-3xl p-8 text-center border border-outline-variant/20 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
            <span className="material-symbols-outlined text-black text-4xl">check</span>
          </div>
          <h1 className="text-2xl font-black mb-2">Listing published</h1>
          <p className="text-on-surface-variant text-sm mb-6">Your product is live on MTN YellowConnect and ready for buyers.</p>
          <div className="space-y-3">
            <Link href="/seller/inventory" className="block w-full bg-primary text-black py-4 rounded-2xl font-bold">View Inventory</Link>
            <Link href="/home" className="block w-full bg-surface-container-high py-4 rounded-2xl font-bold">Back Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/seller/inventory" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">New Product</h1>
        <button onClick={() => setPublished(true)} className="ml-auto bg-primary text-black px-4 py-1.5 rounded-full font-bold text-xs shadow-sm">Publish</button>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <section className="bg-primary/5 border border-primary/20 rounded-3xl p-5 mb-8 flex gap-4">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
          <div>
            <h2 className="font-black text-sm mb-1">AI listing assistant</h2>
            <p className="text-xs text-on-surface-variant">We drafted a presentation-ready product listing. Edit any field, then publish.</p>
          </div>
        </section>

        <form className="space-y-6">
          <div className="aspect-video bg-surface-container-low rounded-3xl border border-outline-variant/20 flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-5xl text-outline">add_a_photo</span>
            <span className="text-sm font-bold text-on-surface-variant">Add product photos</span>
          </div>

          <label className="block space-y-2">
            <span className="text-xs font-bold ml-1">Product title</span>
            <input defaultValue="Solar Irrigation Hub Pro" className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="block space-y-2">
              <span className="text-xs font-bold ml-1">Price (NGN)</span>
              <input defaultValue="450,000" className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="block space-y-2">
              <span className="text-xs font-bold ml-1">Stock</span>
              <input defaultValue="12" className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </label>
          </div>

          <label className="block space-y-2">
            <span className="text-xs font-bold ml-1">Description</span>
            <textarea rows={5} defaultValue="Smart irrigation kit for small farms, with solar charging, IoT monitoring, and MTN MoMo checkout support." className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
          </label>

          <button type="button" onClick={() => setPublished(true)} className="w-full bg-primary text-black py-4 rounded-2xl font-black shadow-lg">Publish Listing</button>
        </form>
      </main>
    </div>
  );
}
