"use client";

export const runtime = 'edge';

import Link from 'next/link';

const RECOMMENDATIONS = [
  { id: '1', name: 'AI Ultra-Phone Case', price: '₦15,000', image: 'https://images.unsplash.com/photo-1603313011101-31c726a54481?q=80&w=300&auto=format&fit=crop' },
  { id: '2', name: 'Nano-Glass Screen Protector', price: '₦8,500', image: 'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=300&auto=format&fit=crop' },
  { id: '3', name: 'Super-Fast 120W Charger', price: '₦22,000', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop' },
  { id: '4', name: 'Wireless Audio Pods', price: '₦45,000', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop' },
];

export default function RelatedRecommendationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <header className="px-6 py-6 flex items-center gap-4">
        <Link href="./gallery" className="p-2 -ml-2 rounded-full hover:bg-surface-container-high">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-title-md font-bold">You Might Also Need</h1>
      </header>

      <div className="flex-1 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {RECOMMENDATIONS.map(item => (
              <Link 
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-surface-container-low rounded-[2rem] p-4 border border-outline-variant hover:border-primary transition-all group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full">
                    <span className="material-symbols-outlined text-[18px] text-primary">favorite</span>
                  </div>
                </div>
                <h3 className="font-bold text-on-surface text-body-md line-clamp-1">{item.name}</h3>
                <p className="text-primary font-bold text-title-sm mt-1">{item.price}</p>
                <button className="w-full mt-4 py-2 bg-on-surface text-white rounded-xl text-label-caps font-bold text-[10px]">
                  ADD TO BUNDLE
                </button>
              </Link>
            ))}
          </div>

          {/* AI Discovery Card */}
          <div className="mt-8 p-6 rounded-[2.5rem] bg-amber-50 border border-amber-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-amber-900 leading-tight">AI Discovery Suggestion</h4>
              <p className="text-body-sm text-amber-700/80 mt-0.5">Most buyers of the AI Ultra-Phone also purchased the 120W Charger for optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
