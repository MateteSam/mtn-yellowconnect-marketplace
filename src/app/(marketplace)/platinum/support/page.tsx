'use client';

import Link from 'next/link';
import { useState } from 'react';

const TICKETS = [
  { id: 'T-9821', title: 'Payout not received after 4 hours', status: 'In Progress', priority: 'High', updated: '2h ago' },
  { id: 'T-9750', title: 'Boost listing credit not applied', status: 'Resolved', priority: 'Medium', updated: '2 days ago' },
];

export default function PlatinumSupportPage() {
  const [tab, setTab] = useState<'tickets' | 'new'>('tickets');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/platinum/requirements" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <div className="ml-2">
          <h1 className="font-bold text-base">Priority Support</h1>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-green-600">Dedicated Agent Available</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl">
        {/* SLA Banner */}
        <div className="bg-gradient-to-r from-secondary to-blue-700 text-white rounded-2xl p-4 mb-6 flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
          <div>
            <p className="font-bold">Platinum SLA: &lt;2 Hour Response</p>
            <p className="text-white/70 text-xs">Your tickets are prioritised above all other tiers.</p>
          </div>
          <button className="ml-auto bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap">
            Live Chat
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-6">
          {['tickets', 'new'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t as 'tickets' | 'new')}
              className={`px-5 py-2 rounded-full font-bold text-sm capitalize transition-all ${tab === t ? 'bg-primary text-black' : 'bg-surface-container-high text-on-surface-variant'}`}
            >
              {t === 'tickets' ? 'My Tickets' : '+ New Ticket'}
            </button>
          ))}
        </div>

        {tab === 'tickets' ? (
          <div className="space-y-3">
            {TICKETS.map(ticket => (
              <div key={ticket.id} className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="font-bold text-sm">{ticket.title}</p>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full shrink-0 ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {ticket.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <span>{ticket.id}</span>
                  <span>·</span>
                  <span className={`font-bold ${ticket.priority === 'High' ? 'text-red-500' : 'text-amber-500'}`}>{ticket.priority}</span>
                  <span>·</span>
                  <span>Updated {ticket.updated}</span>
                </div>
                <button className="mt-3 text-secondary font-bold text-xs hover:underline">View Thread →</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Category</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="w-full bg-surface-container-high rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-secondary appearance-none font-medium"
                >
                  <option value="">Select a category</option>
                  <option>Payouts & Wallet</option>
                  <option>Listing & Boost</option>
                  <option>Dispute Resolution</option>
                  <option>Account & Security</option>
                  <option>Technical Issue</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Describe your issue</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Be as specific as possible. Include order IDs, error messages, or screenshots if relevant."
                rows={5}
                className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <button
              disabled={!category || message.length < 20}
              className="w-full bg-secondary text-white py-4 rounded-2xl font-bold shadow-lg disabled:opacity-40"
            >
              Submit Priority Ticket
            </button>
            <p className="text-center text-xs text-on-surface-variant">Expected response: <strong className="text-green-600">&lt;2 hours</strong></p>
          </div>
        )}
      </main>
    </div>
  );
}
