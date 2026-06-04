'use client';

import React from 'react';
import Link from 'next/link';

const PRODUCT_CATEGORIES = [
  { icon: 'devices', label: 'Electronics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4' },
  { icon: 'checkroom', label: 'Fashion', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAirwkU6q2NLlTaocaVDE25pZSS9A4ZQeypqLDrK3C4aUo3qXLGRFJl3URUqtiw7x7rebo6nRE3_EFM5SSCZ7_M6vpWN-Qrr6MJLk3XW0E3MixuW4lwCXPTdrCd6T8Cy5K8SfA0UKrKQ4nFhWA08RV7fHk7QBsTqT1gxACFuakrENpXZOxj5DxB6ssMUUmxPQoSDVH40pK8PRQVllRkXMTn6wtjEn9J6VXe36tyqy2ZD-zRC_MM8hu8wNt4VIleoS0VY_shOXTz4NY' },
  { icon: 'sports_soccer', label: 'Sports', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=400' },
  { icon: 'chair', label: 'Home', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJJi8EssSfX5_8MSxKPLC2fRaZ25Z3-JIhGEjyfS0bt6y4CisthKRARyvQh_dEeBDkS0pJvHIPcMHqPKA1_Flituw-hQRGDkQmByuftgdzzQJU7Lbyc-4uB7SjuaL2LRe_j2uTsROc3zkjm9tiY744t_M6CxNQMXzEPAezqI0engF54CIRWSntA6n7PkUIuw2ZQstytUjiq2wWGmCREGuZs9tUrMfjo9eshLaAjyHqy7fpymUQ1avVq4Suwtbp1TAhVV5RCqFsboY' },
];

const SERVICE_CATEGORIES = [
  { icon: 'home_repair_service', label: 'Home Care', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXNUO0bSdkgAgrxaeWfIB8ErnRnj1ALlHSYzPvYvsVp9C4KHnXNZ1VJ2PKA8xYMimFnaNX6VGibo6CFLXfW8p2nnP3vR9kwEIEAv0QRBngxjxPM4MC_QnaEftq_-hd4smsX4NhXVhewOs0IaI0an_BIe9MA6j2mg9lzClSAOAbwKglYLmy3SN9spOBYEKr4fjKrvzpsAqZiFPkxAxJwlO2qx5Lj_wGK3fc9IAz5EprrcXBje6OxRrrOoycS1khk783-LhAWtefu88' },
  { icon: 'favorite', label: 'Wellness', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANywRsBXva1F0Dfw9ZYLYDVoFIwt04TCIbGs4WpurW3DNBxmX-cBSGDUh6r_zLsPYhHaCPM_lIQv39jmt6K-7nGdqBHvfzwmxNnB_DaDC7RcUOUDlBcC73X1ZTCYCcL86mYv7PFLz42JJ0eq3Bfj6_Lsz8qzVl-uIEPAwNnOyBgDTMQmwt13Y_4hPSYfR9W3huMfB7gG0Uj9UqGyqC6OJjVV11wlzRs-i5iW5fIP4hd7OzRWoU3cIKC1MSrPCkb41DjgQzTsGdibKe' },
  { icon: 'celebration', label: 'Events', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFykVEQPCDpFkV2e8vCMRJSwVVyYL-DrymwattcBm-1xrmZ14NYNOQSt595me0nPoICrASwF4oYdbPm2YqAjXlAjJlRzrnNhpr8P063WSvg9hfVJuQwxJzdxhlsKRCaE-MiEO4AMoHtDTSepWfu6OmEF3axokuSE9fZtAc_MTGz3GDa5zBh25C2R_yXcBcS7NRIkaxIW1cKQ6M_3swxkoXkzKcXtKjwC17aTV0-y_2at203bzkdnXBYqOwbI-5usjM8W99-wtwmuKX' },
  { icon: 'local_shipping', label: 'Logistics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8uTpw-g72QkSlw3QH7ZQqMwy4QTgaN-zgrai7gOmoARRxtyFEkkYuOM-wrZkMDPfi2S2iqdBJ1KlxoWbtG_ffSZ3ohDYEfr-JJbdiWs9OaUc-ozRNkMjXkwJ20q88eyG7bKt0m5WQf9Le5kAQL-toy8cldiMAfVZUfbJ-LNgIEeLrTtEm9MvTtBz2_k7a8SxMcBOSD9zxZLG30sTF-3VTx6OHOA3zswP64EyPi4vc97yIgX_PvvT5WlN2QEeAK5Ok0CotefMVbzR' },
];

const MIXED_PICKS = [
  {
    type: 'product',
    title: 'MacBook Pro M2 2023',
    price: '₦ 1,850,000',
    location: 'Ikeja, Lagos',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUY3jjiw2_wYR_bfUFgeWuY2tZUodVYCRRpiBrVS2828IHI1fGnMFC_e_2Z4YAnLrmlIpHtwuEcyIz2aTEIRKq8WjaYscY6valyjPIQ_DKrlPwdKXkrKLtgFtXVzUpAKVzgrlx5wtTImaumcv3nE6RCkc4_Wm479KfkpgVcQmU6njLaqZptPKzIzFWrTXBVw7OqiMkZdHSUF3tdnJWB1GQ0Q31xm8ma-dXqqfB3gmeKpc_Yb9Xtfn7y_iwr_484J4-xX3173GH8gA',
  },
  {
    type: 'service',
    title: 'Professional House Painting',
    price: 'From ₦ 45,000',
    location: 'Lekki Phase 1',
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400',
  },
  {
    type: 'product',
    title: 'iPhone 15 Pro Max',
    price: '₦ 950,000',
    location: 'Surulere, Lagos',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4',
  },
];

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-on-surface antialiased">
      {/* ── SEARCH BAR ── */}
      {/* <div className="bg-surface sticky top-[60px] z-[45] px-4 py-3 md:py-4 border-b border-outline-variant/30 flex justify-center">
        <div className="relative w-full max-w-3xl flex items-center bg-surface-container-low rounded-full px-4 border border-outline-variant/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 py-3 text-body-lg font-body-lg placeholder:text-on-surface-variant/60"
            placeholder="Search products or services..."
            type="text"
          />
          <button className="bg-primary text-on-primary-fixed-variant px-6 py-2 rounded-full font-title-sm text-title-sm transition-transform active:scale-95 shadow-sm">
            Search
          </button>
        </div>
      </div> */}

      <main className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 flex flex-col gap-4">

        {/* ── DUAL HERO ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/products"
            className="h-[220px] group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Shop Products"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h2 className="text-display-sm font-display-sm text-white mb-2">Shop Products</h2>
              <p className="text-body-md text-white/80 mb-6">Electronics, Fashion, Home Goods & More</p>
              <span className="bg-[#FFCC00] text-on-primary-fixed-variant px-4 py-2 rounded-xl font-title-md text-md group-hover:bg-primary/90 transition-colors">
                Browse Marketplace
              </span>
            </div>
          </Link>

          <Link
            href="/services"
            className="h-[220px] group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKXfNERTJIukTUSbkJ6GfIO61SajdNZZAq8E345Rkr2sK48B21qbp7lDcHmhUmXkn_k9iTQaeSw5HzqQNqKEMDeLrnKFwKICCYY7br2TRyCKISOTVo9JIyEanoqeZi8puw_HOrUFaRpjG7FB1V9E1m7vXpriHgVAGXKyVexDspPYmcxuAqi42TC5pC38NKO8Avm39D5ONHbpR-8678J_7dMuT-7HtdhBdag0CUB0FlRMFOj6-3ok8noLfuknoarVGTFoN1JZ3WIeON"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Book Services"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h2 className="text-display-sm font-display-sm text-white mb-2">Book Services</h2>
              <p className="text-body-lg text-white/80 mb-6">Expert Help for Every Need</p>
              <span className="bg-[#FFCC00] text-on-primary-fixed-variant px-4 py-2 rounded-xl font-title-md text-md group-hover:bg-primary/90 transition-colors">
                Explore Services
              </span>
            </div>
          </Link>
        </section>

        {/* ── MOMO PAYMENTS ── */}
        <section className="relative bg-[#FFCC00] rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden">
          <div className="max-w-6xl mx-auto flex items-center">
            <div className="flex-1 text-center px-6 py-6">
              <div className="inline-block mb-3">
                <div className="bg-black text-white px-3 py-1 rounded-md font-bold text-xs uppercase tracking-widest">MoMo</div>
              </div>

              <h2 className="text-headline-md font-headline-md text-on-primary-fixed-variant font-black uppercase">Payments Integrated</h2>

              <p className="mt-4 text-title-lg font-title-lg text-on-primary-fixed-variant/90 max-w-3xl mx-auto">
                Pay for products and book services securely with MTN MoMo. Fast, reliable, and built into every checkout.
              </p>

              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span className="font-medium">Encrypted</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span className="font-medium">Instant</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-1/3 relative pl-6">
              <div className="absolute right-6 top-6 flex items-center gap-4">
                <div className="w-24 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-6 translate-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                </div>
                <div className="w-36 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center z-10 transform -translate-y-2 rotate-3">
                  <img src="/mtnmomoLogo.svg" alt="MoMo" className="w-24 h-20 object-contain" />
                </div>
                <div className="w-24 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-6 translate-y-6">
                  <span className="material-symbols-outlined text-primary text-3xl">qr_code_2</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS GRID ── */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-headline-sm font-headline-sm text-on-surface">Top Products</h2>
            <Link href="/products" className="text-primary font-title-sm hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <Link key={i} href={`/products?category=${cat.label}`} className="relative group flex flex-col gap-2 overflow-hidden">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute left-2 bottom-2 flex items-center gap-2">
                  <span className="text-white material-symbols-outlined text-primary text-[20px]">{cat.icon}</span>
                  <span className="text-white font-title-sm text-sm text-on-surface">{cat.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-headline-sm font-headline-sm text-on-surface">Popular Services</h2>
            <Link href="/services" className="text-primary font-title-sm hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <Link key={i} href={`/services/${cat.label.toLowerCase().replace(' ', '-')}`} className="relative group flex flex-col gap-2 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="absolute left-2 bottom-2 flex items-center gap-2">
                  <span className="text-white material-symbols-outlined text-primary text-[16px]">{cat.icon}</span>
                  <span className="text-white font-title-sm text-sm text-on-surface">{cat.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SMART PICKS (AI) ── */}
        <section className="bg-surface-container-low rounded-3xl p-4 -mx-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h2 className="text-headline-sm font-headline-sm text-on-surface">AI "Smart Picks" For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MIXED_PICKS.map((item, i) => (
              <div key={i} className="bg-surface rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {item.type}
                  </div>
                </div>
                <h4 className="font-title-md text-md text-on-surface mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                <div className="text-sm font-headline-sm text-secondary font-black mb-2">{item.price}</div>
                <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
