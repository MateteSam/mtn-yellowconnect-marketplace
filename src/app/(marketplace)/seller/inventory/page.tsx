'use client';

import Link from 'next/link';
import { useState } from 'react';

const INVENTORY = [
  { id: '1', name: 'Smart AI Processor V2', sku: 'MTN-AI-001', stock: 12, price: '₦450,000', status: 'In Stock', color: 'text-green-600' },
  { id: '2', name: 'Neural Link Connector', sku: 'MTN-AI-092', stock: 2, price: '₦120,000', status: 'Low Stock', color: 'text-amber-600' },
  { id: '3', name: 'Edge Gateway Hub', sku: 'MTN-IA-441', stock: 0, price: '₦85,000', status: 'Out of Stock', color: 'text-red-500' },
  { id: '4', name: 'Quantum Sensor Pack', sku: 'MTN-AI-118', stock: 45, price: '₦215,000', status: 'In Stock', color: 'text-green-600' },
];

export default function MerchantInventoryOverviewPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/profile" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Inventory Management</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">Stock Control</h2>
            <p className="text-on-surface-variant text-sm">Managing 48 total stock units across 4 products.</p>
          </div>
          <Link href="/seller/inventory/add" className="bg-primary text-black px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all">
            <span className="material-symbols-outlined">add</span>
            New Product
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Out of Stock', value: '1', color: 'text-red-500', bg: 'bg-red-50' },
            { label: 'Low Stock', value: '2', color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Total Value', value: '₦8.4M', color: 'text-primary', bg: 'bg-primary/5' },
          ].map(stat => (
            <div key={stat.label} className={`${stat.bg} p-4 rounded-2xl border border-outline-variant/10 text-center`}>
              <p className="text-[10px] font-black uppercase tracking-tighter text-on-surface-variant mb-1">{stat.label}</p>
              <p className={`text-lg font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 bg-surface-container-low flex items-center gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                type="text" 
                placeholder="Search SKU or Name..." 
                className="w-full bg-surface border border-outline-variant/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="p-3 bg-surface border border-outline-variant/10 rounded-xl text-on-surface-variant">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container/30 border-b border-outline-variant/10">
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Product Details</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-center">In Stock</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {INVENTORY.map(item => (
                  <tr key={item.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-5">
                      <p className="font-bold text-sm mb-1">{item.name}</p>
                      <p className="text-[10px] text-on-surface-variant font-mono">{item.sku}</p>
                    </td>
                    <td className="p-5 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className={`text-sm font-black ${item.color}`}>{item.stock}</span>
                        <span className={`text-[8px] font-black uppercase tracking-tighter ${item.color}`}>{item.status}</span>
                      </div>
                    </td>
                    <td className="p-5 text-right">
                      <Link href={`/seller/inventory/edit/${item.id}`} className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">edit_square</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 glass-ai p-6 rounded-3xl border border-primary/20 flex gap-4 items-center">
          <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <p className="text-xs text-on-surface font-bold leading-relaxed">
            AI Stock Prediction: "Neural Link Connector" is expected to sell out in 3 days. Order restock now to maintain Gold Seller status.
          </p>
        </div>
      </main>
    </div>
  );
}
