'use client';

import Link from 'next/link';

const REGIONAL_DEALS = [
  { id: 1, title: 'Solar Hub', location: 'Lagos', price: '₦450k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU' },
  { id: 2, title: 'Tractor King', location: 'Accra', price: '₵28k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU' },
  { id: 3, title: 'Pump Lite', location: 'Nairobi', price: 'KSh 15k', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU' },
];

export default function HomeFeedPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <main className="container mx-auto max-w-5xl">
        {/* Personalized Welcome */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop py-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-body-sm font-bold text-on-surface-variant uppercase tracking-widest mb-1">Welcome back, Kwame</h2>
              <h1 className="text-3xl font-bold tracking-tight">Deals in <span className="text-primary italic">Nigeria</span></h1>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary-container shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* AI Scout Hero Card */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop mb-10">
          <div className="glass-ai rounded-3xl p-6 md:p-8 border border-primary/20 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
            <div className="relative shrink-0">
               <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-on-primary shadow-lg rotate-3">
                 <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
               </div>
               <div className="absolute -bottom-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
               </div>
            </div>
            <div className="text-center md:text-left flex-grow">
              <h3 className="font-bold text-xl mb-2 text-secondary">AI Scout is active</h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed max-w-md">
                I've found <span className="text-on-surface font-bold">14 new listings</span> that match your search for "Refurbished Solar Panels" in your price range.
              </p>
            </div>
            <button className="bg-secondary text-white px-8 py-3.5 rounded-xl font-bold font-title-md shadow-lg active:scale-95 hover:brightness-110 transition-all whitespace-nowrap">
              View Matches
            </button>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mb-10 overflow-hidden">
          <div className="flex items-center justify-between px-container-margin-mobile md:px-container-margin-desktop mb-4">
            <h3 className="font-bold text-title-md">Browse Categories</h3>
            <button className="text-primary font-bold text-body-sm hover:underline">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-container-margin-mobile md:px-container-margin-desktop pb-4 hide-scrollbar">
            {[
              { label: 'Electronics', icon: 'power' },
              { id: 'agri', label: 'Agri-Tech', icon: 'agriculture' },
              { label: 'Renewables', icon: 'solar_power' },
              { label: 'Fashion', icon: 'apparel' },
              { label: 'Mobility', icon: 'e_mobiledata' },
            ].map(cat => (
              <div key={cat.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-all group-active:scale-90 shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">{cat.icon}</span>
                </div>
                <span className="text-label-caps font-bold">{cat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Deals Carousel */}
        <section className="mb-10">
          <div className="flex items-center justify-between px-container-margin-mobile md:px-container-margin-desktop mb-4">
            <h3 className="font-bold text-title-md">Regional Top Picks</h3>
            <div className="flex items-center gap-2 text-[12px] font-bold text-secondary bg-secondary/5 px-2 py-1 rounded-full">
               <span className="material-symbols-outlined text-[14px]">public</span>
               WEST AFRICA
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto px-container-margin-mobile md:px-container-margin-desktop pb-6 hide-scrollbar">
            {REGIONAL_DEALS.map(deal => (
              <div key={deal.id} className="w-64 shrink-0 bg-surface-container-high rounded-3xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-md transition-all">
                <div className="h-40 bg-surface-container-highest relative">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[12px] text-green-600">payments</span>
                    MoMo PAY
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold text-on-surface mb-0.5 line-clamp-1">{deal.title}</p>
                  <p className="text-secondary font-bold text-lg mb-2">{deal.price}</p>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-1 text-on-surface-variant text-[11px] font-medium">
                        <span className="material-symbols-outline text-[14px]">location_on</span>
                        {deal.location}
                     </div>
                     <button className="material-symbols-outlined text-[20px] text-primary">favorite</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Localized Marketplace Grid */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop">
          <h3 className="font-bold text-title-md mb-6">Discovery Feed</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-[4/5] bg-surface-container-low rounded-2xl border border-outline-variant/30 flex flex-col items-center justify-center p-4 text-center group active:scale-95 transition-all">
                   <div className="w-12 h-12 rounded-full bg-outline-variant/20 flex items-center justify-center text-outline mb-3 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">image</span>
                   </div>
                   <p className="text-label-caps font-bold text-on-surface-variant opacity-60">Listing {i}</p>
                   <p className="text-[10px] mt-1 text-on-surface-variant">Click to view localized details</p>
                </div>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
}
