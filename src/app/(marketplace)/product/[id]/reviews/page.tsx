'use client';

import Link from 'next/link';

export const runtime = 'edge';

const REVIEWS = [
  { id: '1', user: 'Lagos_Tech_Pro', rating: 5, date: 'June 01, 2026', title: 'Top-tier performance', comment: 'Used this for a fleet management project. The latency reduction was immediately noticeable. Highly recommend the V2 model.', tags: ['Fast Shipping', 'Accurate Specs'] },
  { id: '2', user: 'SME_Innovator', rating: 4, date: 'May 28, 2026', title: 'Solid but pricey', comment: 'Great product, definitely the best in class in Nigeria, but the price tag makes it hard to scale for small projects.', tags: ['High Quality'] },
];

export default function ProductReviewsFeedbackPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href={`/product/${params.id}`} className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Reviews & Feedback</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-5xl font-black">4.7</span>
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Global Rating · 82 Reviews</p>
          </div>
          <div className="w-1/2 space-y-1">
            {[5, 4, 3, 2, 1].map(r => (
              <div key={r} className="flex items-center gap-2">
                <span className="text-[8px] font-bold w-2">{r}</span>
                <div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${r > 3 ? (r * 15 + 10) : (r * 5)}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full mb-10 bg-surface-container-highest py-4 rounded-2xl font-black text-sm border-2 border-dashed border-outline-variant/40 hover:border-primary/50 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">rate_review</span>
          Write a Review
        </button>

        <div className="space-y-10">
          {REVIEWS.map(review => (
            <div key={review.id} className="group">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-container-highest rounded-full border border-outline-variant/10 flex items-center justify-center font-black text-[10px] text-on-surface-variant">
                    {review.user.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-black text-sm">{review.user}</p>
                      <span className="material-symbols-outlined text-[14px] text-blue-500" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-primary">
                   {[...Array(review.rating)].map((_, i) => (
                     <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                   ))}
                </div>
              </div>
              
              <p className="font-black text-sm mb-2">{review.title}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{review.comment}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {review.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-surface-container-low px-2 py-0.5 rounded border border-outline-variant/10 italic">#{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">thumb_up</span>
                  <span className="text-[10px] font-black uppercase tracking-tighter">Helpful</span>
                </button>
                <button className="flex items-center gap-1.5 text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-lg">chat_bubble</span>
                  <span className="text-[10px] font-black uppercase tracking-tighter">0 Comments</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
