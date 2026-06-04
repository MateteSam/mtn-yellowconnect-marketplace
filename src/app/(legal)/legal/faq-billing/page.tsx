'use client';

import Link from 'next/link';
import { useState } from 'react';

const FAQS = [
  { q: 'What is the platform fee?', a: 'Standard sellers pay 5% per transaction. Gold members pay 0% fees for a flat monthly subscription of ₦5,000.' },
  { q: 'How do payouts work?', a: 'Payouts are made to your linked MoMo wallet. Standard payouts take 1 business day. Gold members get instant payouts within 2 hours.' },
  { q: 'Is there a listing limit?', a: 'Free accounts can have up to 10 active listings. Gold and Platinum plans offer unlimited listings.' },
  { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel your Gold or Platinum membership at any time from your billing dashboard. Access remains until the end of the current period.' },
  { q: 'How are taxes handled?', a: 'We automatically calculate and deduct VAT based on your country. You are responsible for filing your annual income tax based on the reports we provide.' },
];

export default function FAQBillingPolicyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/help/hub" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">FAQ & Billing</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        <div className="mb-10">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-on-surface to-on-surface-variant bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant leading-relaxed font-medium">
            Everything you need to know about fees, payouts, and marketplace mechanics.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-surface rounded-2xl border border-outline-variant/20 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors"
              >
                <span className="font-bold pr-6">{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary/5 rounded-3xl p-8 border border-secondary/20 block">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-3xl">receipt_long</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Need a detailed billing report?</h3>
              <p className="text-on-surface-variant text-sm mb-4">Download your full transaction history and VAT invoices for the 2024 fiscal year.</p>
              <Link href="/seller/performance-billing" className="inline-block bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all">
                Go to Billing Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
