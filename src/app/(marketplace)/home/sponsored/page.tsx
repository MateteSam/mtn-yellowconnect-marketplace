'use client';

import Link from 'next/link';

const SPONSORED = [
  {
    id: 's1',
    title: 'Premium Solar Irrigation Hub',
    seller: 'SolarTech NG',
    price: '₦415,000',
    badge: 'Gold',
    location: 'Lagos, NG',
    tag: 'Sponsored',
  },
  {
    id: 's2',
    title: 'Hybrid Seed Spreader Pro',
    seller: 'AgriMech GH',
    price: '₦68,000',
    badge: 'Verified',
    location: 'Accra, GH',
    tag: 'Featured',
  },
];

const IMG = 'https://lh3.googleusercontent.com/aida/ADBb0uh_cnJsGi7MgO_g94h8HLdZ7lT3bsKQGnSdF3YfWiGk-hqlAh0hiRa5-nM9kQZgqlb6rlvTVGEWGRB0Emgcg3-XBgCU8DNoZygXUaCtI_10JZvznt3dULlei3xgdPs4sLXjzCJfcc9auE_La894tg2Y_OMmeJqRTDfPFFbdlHjyOSnce9vTXhQbT3jcfX08NzD1dQS3vYw1GSL-8ajx0qK7Kt-qm4dCWE5jdqASvkWGAuTB6xnxaoRblzA';

export default function SponsoredFeedPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Link href="/home" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
          <h1 className="font-bold text-lg">Sponsored & Featured</h1>
        </div>
        <button className="material-symbols-outlined text-on-surface-variant">tune</button>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-3xl">
        {/* Sponsored Banner */}
        <div className="bg-gradient-to-r from-secondary to-blue-700 text-white rounded-3xl p-5 mb-6 flex items-center gap-4">
          <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
          <div>
            <p className="font-black text-lg">Promoted Listings</p>
            <p className="text-white/70 text-sm">Verified merchants reaching you first</p>
          </div>
        </div>

        {/* Sponsored Listings */}
        <div className="space-y-4 mb-8">
          {SPONSORED.map(item => (
            <div key={item.id} className="bg-surface-container-low rounded-3xl overflow-hidden border border-primary/20 shadow-sm relative">
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">{item.tag}</span>
              </div>
              <div className="h-44 bg-surface-container-highest overflow-hidden">
                <img src={IMG} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <p className="font-bold text-on-surface text-sm mb-0.5">{item.title}</p>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">store</span>
                    {item.seller}
                    <span className={`ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${item.badge === 'Gold' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-600'}`}>
                      {item.badge}
                    </span>
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {item.location}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-secondary text-lg">{item.price}</p>
                  <button className="mt-2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full">View Deal</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid of organic listings */}
        <h2 className="font-bold text-title-md mb-4">Explore More</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/20">
              <div className="aspect-square bg-surface-container-highest">
                <img src={IMG} alt="Listing" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <p className="font-bold text-sm line-clamp-1">Agri-Tech Product</p>
                <p className="text-secondary font-bold">₦{(45 + i * 12).toFixed(0)}k</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to become featured */}
        <div className="mt-8 bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 text-center">
          <span className="material-symbols-outlined text-3xl text-primary mb-2 block">rocket_launch</span>
          <h3 className="font-bold text-base mb-1">Get your listing here</h3>
          <p className="text-sm text-on-surface-variant mb-4">Boost your listing to reach thousands of verified buyers like these.</p>
          <Link href="/seller/boost" className="bg-secondary text-white px-8 py-3 rounded-xl font-bold inline-block hover:brightness-110 transition-all">
            Boost a Listing
          </Link>
        </div>
      </main>
    </div>
  );
}
