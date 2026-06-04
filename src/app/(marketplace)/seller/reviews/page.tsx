'use client';

import Link from 'next/link';

const REVIEWS = [
  { id: '1', user: 'Chidi O.', rating: 5, date: '2h ago', comment: 'Absolutely game-changing AI processor. The edge computing speeds are exactly as advertised.', product: 'Smart AI Processor V2', status: 'Unreplied' },
  { id: '2', user: 'Sarah L.', rating: 2, date: '1d ago', comment: 'Package arrived a bit late, but product is okay. Could use better documentation.', product: 'Neural Link Connector', status: 'Replied' },
  { id: '3', user: 'Amina K.', rating: 4, date: '3d ago', comment: 'Great quality, but the price is quite steep compared to standard IoT hubs.', product: 'Edge Gateway Hub', status: 'Unreplied' },
];

export default function MerchantReviewManagementPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/profile" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Review Management</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl">
        <div className="bg-surface-container-high rounded-[32px] p-8 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Store Rating</p>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black">4.8</span>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
            <p className="text-xs font-bold text-on-surface-variant mt-1">Based on 1,240 reviews</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-black uppercase tracking-widest">MTN Gold Verified</span>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {['All Reviews', 'Pending Reply', '4-5 Stars', '1-3 Stars', 'Reported'].map((tag, i) => (
            <button key={tag} className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-black border transition-all ${i === 1 ? 'bg-black text-white border-black' : 'bg-surface border-outline-variant/20 text-on-surface-variant'}`}>
              {tag}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center font-black text-primary uppercase">
                    {review.user[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.user}</p>
                    <p className="text-[10px] text-on-surface-variant font-bold">{review.date} · {review.product}</p>
                  </div>
                </div>
                <div className="flex text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-on-surface leading-relaxed mb-6 italic">"{review.comment}"</p>
              
              <div className="flex items-center gap-4">
                {review.status === 'Replied' ? (
                  <button className="flex-1 bg-surface-container-low text-on-surface-variant py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">reply_all</span> View Your Reply
                  </button>
                ) : (
                  <button className="flex-1 bg-black text-white py-3 rounded-xl text-xs font-black hover:scale-[1.02] transition-transform">
                    Reply to {review.user.split(' ')[0]}
                  </button>
                )}
                <button className="p-3 bg-surface-container-high text-on-surface-variant rounded-xl group-hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-sm">flag</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-ai p-6 rounded-3xl border border-primary/20 flex gap-4 items-center">
          <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">insights</span>
          </div>
          <div>
            <p className="text-xs text-on-surface font-black uppercase tracking-widest mb-1 italic">Sentiment AI</p>
            <p className="text-xs text-on-surface leading-relaxed antialiased">
              92% of your low ratings mention "slow shipping". Improving logistics could increase your overall rating to <strong className="text-primary">4.95 stars</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
