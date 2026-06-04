'use client';

import Link from 'next/link';
import { useState } from 'react';

const TOPICS = [
  { title: 'Getting Started', icon: 'rocket_launch', count: 12, color: 'text-blue-600', bg: 'bg-blue-100' },
  { title: 'Buying on MTN', icon: 'shopping_bag', count: 24, color: 'text-green-600', bg: 'bg-green-100' },
  { title: 'Selling & Growth', icon: 'trending_up', count: 31, color: 'text-amber-600', bg: 'bg-amber-100' },
  { title: 'MTN MoMo & Wallet', icon: 'account_balance_wallet', count: 15, color: 'text-purple-600', bg: 'bg-purple-100' },
  { title: 'Trust & Safety', icon: 'verified_user', count: 18, color: 'text-red-600', bg: 'bg-red-100' },
  { title: 'Membership & Ads', icon: 'workspace_premium', count: 22, color: 'text-yellow-600', bg: 'bg-yellow-100' },
];

export default function HelpCenterHubPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      {/* Search Header */}
      <div className="bg-primary px-6 pt-16 pb-20 rounded-b-[40px] text-black">
        <h1 className="text-3xl font-black mb-6">How can we help?</h1>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-black/50 group-focus-within:text-black">search</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for articles, guides..."
            className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 font-medium outline-none shadow-lg focus:ring-4 focus:ring-black/10 transition-all"
          />
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop -mt-10 relative z-10 max-w-4xl">
        {/* Recommended Reads */}
        <div className="bg-surface rounded-3xl p-6 shadow-xl border border-outline-variant/10 mb-8">
          <h2 className="font-bold text-title-md mb-4">Recommended for you</h2>
          <div className="space-y-4">
            <Link href="/help/guides/buying-selling" className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl group hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">menu_book</span>
                <span className="font-bold text-sm">Mastering the AI Price Comparison Tool</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link href="/legal/faq-billing" className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl group hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">payments</span>
                <span className="font-bold text-sm">Understanding MoMo Transaction Limits</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {TOPICS.map(topic => (
            <div key={topic.title} className="bg-surface p-5 rounded-3xl border border-outline-variant/20 shadow-sm hover:border-primary/40 transition-all cursor-pointer group">
              <div className={`${topic.bg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${topic.color}`}>
                <span className="material-symbols-outlined text-2xl">{topic.icon}</span>
              </div>
              <h3 className="font-black text-sm mb-1">{topic.title}</h3>
              <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-wider">{topic.count} Articles</p>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="glass-ai rounded-[32px] p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-black mb-2">Still need help?</h2>
          <p className="text-on-surface-variant text-sm mb-6">Our high-trust support team is available via chat and email 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/help/safety-contact" className="flex-1 bg-secondary text-white py-4 rounded-2xl font-bold hover:brightness-110 transition-all">
              Contact Support
            </Link>
            <Link href="/platinum/support" className="flex-1 bg-white border-2 border-secondary text-secondary py-4 rounded-2xl font-bold hover:bg-secondary/5 transition-all text-sm">
              Priority Chat (Platinum)
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
