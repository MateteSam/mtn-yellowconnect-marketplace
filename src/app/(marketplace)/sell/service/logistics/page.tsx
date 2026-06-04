'use client';

import Link from 'next/link';

export default function SellLogisticsService() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/sell" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <div className="flex-grow text-center pr-10">
          <h1 className="font-bold text-lg">Sell Logistics Service</h1>
        </div>
      </header>
      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl">
        <div className="bg-surface-container-low p-6 rounded-[32px] border border-outline-variant/20">
          <h2 className="text-xl font-bold mb-4">Service Details</h2>
          <div className="space-y-4">
            <input className="w-full bg-surface p-4 rounded-xl outline-none" placeholder="Service Title" />
            <textarea className="w-full bg-surface p-4 rounded-xl outline-none min-h-[120px]" placeholder="Description" />
            <input className="w-full bg-surface p-4 rounded-xl outline-none" placeholder="Price (₦)" />
            <button className="w-full bg-primary text-black font-bold py-4 rounded-xl shadow-lg mt-6">Post Listing</button>
          </div>
        </div>
      </main>
    </div>
  );
};
