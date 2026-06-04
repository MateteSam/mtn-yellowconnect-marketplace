"use client";

export const runtime = 'edge';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const EARNED_BADGES = [
  { name: 'Century Seller', icon: 'emoji_events', color: 'from-orange-500 to-red-600' },
  { name: 'Fast Shipper', icon: 'rocket_launch', color: 'from-blue-500 to-indigo-600' },
  { name: 'MTN Gold', icon: 'workspace_premium', color: 'from-yellow-500 to-amber-600' },
  { name: 'High Trust', icon: 'verified_user', color: 'from-green-500 to-emerald-600' },
];

const IMG = 'https://lh3.googleusercontent.com/aida/ADBb0uh_cnJsGi7MgO_g94h8HLdZ7lT3bsKQGnSdF3YfWiGk-hqlAh0hiRa5-nM9kQZgqlb6rlvTVGEWGRB0Emgcg3-XBgCU8DNoZygXUaCtI_10JZvznt3dULlei3xgdPs4sLXjzCJfcc9auE_La894tg2Y_OMmeJqRTDfPFFbdlHjyOSnce9vTXhQbT3jcfX08NzD1dQS3vYw1GSL-8ajx0qK7Kt-qm4dCWE5jdqASvkWGAuTB6xnxaoRblzA';

export default function SellerProfileWithBadgesPage() {
  const params = useParams();

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Profile Cover */}
      <div className="h-40 bg-gradient-to-r from-secondary to-blue-900 relative">
        <Link href="/home" className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white z-10">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop -mt-16 relative z-10 pb-24 max-w-2xl">
        {/* Profile Card */}
        <div className="bg-surface rounded-3xl p-6 shadow-xl border border-outline-variant/10 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <div className="w-28 h-28 rounded-3xl bg-surface-container overflow-hidden border-4 border-white shadow-lg shrink-0">
              <img src={IMG} alt="Kwame's Agri-Tech" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-2xl font-bold mb-1">Kwame's Agri-Tech</h1>

              {/* Badges row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Verified
                </span>
                <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  Gold Member
                </span>
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                  Century Seller
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-on-surface-variant text-sm">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span>Accra, GH</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>4.9 · 156 reviews</span>
              </div>
            </div>
            <button className="bg-primary text-black px-6 py-3 rounded-xl font-bold shadow-md w-full md:w-auto">
              Follow
            </button>
          </div>
        </div>

        {/* Achievement Wall */}
        <div className="bg-surface rounded-3xl p-6 border border-outline-variant/10 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-title-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              Achievement Wall
            </h2>
            <Link href="/seller/profile/badges" className="text-secondary font-bold text-sm hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {EARNED_BADGES.map(badge => (
              <div key={badge.name} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                </div>
                <p className="text-[10px] text-center font-bold text-on-surface-variant leading-tight">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Listings */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-title-md">Active Listings</h2>
            <button className="text-secondary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/20 hover:shadow-md transition-all">
                <div className="aspect-video bg-surface-container-highest">
                  <img src={IMG} alt="Listing" className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-bold text-sm line-clamp-1">Solar Agri-Kit #{i + 100}</p>
                  <p className="text-secondary font-bold mt-1">₦{(120 + i * 25).toFixed(0)}k</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
