"use client";

export const runtime = 'edge';

import React from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function SellerProfilePage() {
  const params = useParams();
  
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Profile Header Background */}
      <div className="h-40 bg-gradient-to-r from-secondary to-blue-900 relative">
        <Link 
          href="/home" 
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-transform z-10"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop -mt-16 relative z-10 pb-24">
        {/* Profile Card */}
        <div className="bg-surface rounded-3xl p-6 shadow-xl border border-outline-variant/10 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <div className="w-32 h-32 rounded-3xl bg-surface-container overflow-hidden border-4 border-white shadow-lg shrink-0">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU" alt="Seller" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left flex-grow">
               <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
                  <h1 className="text-2xl font-bold tracking-tight">Kwame's Agri-Tech</h1>
                  <span className="verified-badge w-fit mx-auto md:mx-0">
                    <span className="material-symbols-outlined text-green-600 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Verified Merchant</span>
                  </span>
               </div>
               <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-body-sm text-on-surface-variant">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    Accra, Ghana
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.9 (124 reviews)
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    Joined 2023
                  </div>
               </div>
            </div>
            <button className="bg-primary text-black px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-primary/90 active:scale-95 transition-all w-full md:w-auto">
              Follow Merchant
            </button>
          </div>
        </div>

        {/* Business Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
           {[
             { label: 'Sales', val: '856', icon: 'trending_up' },
             { label: 'Response', val: '< 1hr', icon: 'bolt' },
             { label: 'Followers', val: '2.4k', icon: 'group' },
             { label: 'Items', val: '18', icon: 'inventory_2' },
           ].map(s => (
             <div key={s.label} className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10 text-center">
                <span className="material-symbols-outlined text-secondary text-[20px] mb-1">{s.icon}</span>
                <p className="text-xl font-bold">{s.val}</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{s.label}</p>
             </div>
           ))}
        </div>

        {/* Bio & Active Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <section className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-outline-variant/10 shadow-sm">
              <h3 className="font-bold text-title-md mb-4">About Merchant</h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                Specializing in sustainable solar solutions for local Ghanian farmers. We provide end-to-end installation and maintenance with full MoMo payment integration.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </button>
              </div>
            </section>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-bold text-title-md">Active Listings</h3>
               <button className="text-secondary font-bold text-body-sm hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[1, 2, 4].map(i => (
                  <div key={i} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/20 hover:shadow-lg transition-all">
                     <div className="aspect-video bg-surface-container-highest">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU" alt="Listing" className="w-full h-full object-cover" />
                     </div>
                     <div className="p-3">
                        <p className="font-bold text-body-sm line-clamp-1">Solar Irrigation Kit Pro</p>
                        <p className="text-secondary font-bold text-body-md mt-1">₦450,000</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
