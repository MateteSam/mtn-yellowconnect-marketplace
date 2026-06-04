'use client';

import React from 'react';
import Link from 'next/link';

export default function EventServicesListings() {
  return (
    <div className="bg-background text-on-background font-body-lg antialiased min-h-screen">


      {/* Main Content Canvas */}
      <main className="w-full max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop pt-6">
        {/* Hero & Search Section */}
        <section className="relative rounded-xl overflow-hidden mb-section-gap h-[300px] md:h-[400px] flex items-center justify-center group">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFykVEQPCDpFkV2e8vCMRJSwVVyYL-DrymwattcBm-1xrmZ14NYNOQSt595me0nPoICrASwF4oYdbPm2YqAjXlAjJlRzrnNhpr8P063WSvg9hfVJuQwxJzdxhlsKRCaE-MiEO4AMoHtDTSepWfu6OmEF3axokuSE9fZtAc_MTGz3GDa5zBh25C2R_yXcBcS7NRIkaxIW1cKQ6M_3swxkoXkzKcXtKjwC17aTV0-y_2at203bzkdnXBYqOwbI-5usjM8W99-wtwmuKX"
              alt="Event Venue"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 w-full max-w-2xl px-4 flex flex-col items-center text-center">
            <h1 className="font-display-lg text-display-lg text-white mb-4 drop-shadow-md">
              Elevate Your Event
            </h1>
            <p className="font-title-md text-title-md text-gray-200 mb-8 drop-shadow">
              Find Top-Rated Pros in Accra & Lagos
            </p>
            {/* Search Bar */}
            <div className="w-full bg-white/90 backdrop-blur-md rounded-xl p-2 flex items-center shadow-lg border border-white/20">
              <span className="material-symbols-outlined text-on-surface-variant ml-3 mr-2">
                search
              </span>
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 font-body-lg text-on-surface placeholder:text-on-surface-variant/70"
                placeholder="Search for MCs, DJs, Catering..."
                type="text"
              />
              <button className="bg-primary-container text-on-primary-container font-title-md text-title-md px-6 py-3 rounded-lg hover:bg-primary transition-all active:scale-95">
                Find
              </button>
            </div>
          </div>
        </section>

        {/* Categories List */}
        <section className="mb-section-gap">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 px-1">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary-container whitespace-nowrap shadow-sm transition-transform active:scale-95 border border-primary/20">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mic
              </span>
              <span className="font-label-caps text-label-caps font-bold">MCs & HOSTS</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest whitespace-nowrap shadow-sm transition-all active:scale-95">
              <span className="material-symbols-outlined">headphones</span>
              <span className="font-label-caps text-label-caps">DJs</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest whitespace-nowrap shadow-sm transition-all active:scale-95">
              <span className="material-symbols-outlined">camera_alt</span>
              <span className="font-label-caps text-label-caps">PHOTOGRAPHY</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest whitespace-nowrap shadow-sm transition-all active:scale-95">
              <span className="material-symbols-outlined">restaurant</span>
              <span className="font-label-caps text-label-caps">CATERING</span>
            </button>
          </div>
        </section>

        {/* Featured Pros */}
        <section className="mb-section-gap">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Top Rated Pros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter lg:gap-8 mb-12">
            {/* Card 1 */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-container border-b-2 hover:shadow-lg transition-shadow flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXUgm5e6t2NVpA_ut8LOgph2LWkWK20ZPnqNBBfHdhx4CWKD4TtOCjf0KgWyt56f2Ya0aPwz_E83XHwH58PbHh5OjGI8TErWoLpirwlg30xoneB2sLEuhGLkEBxg2_EI46MtcUeyqP90G8Y5S3wLpka17edjpaUoGBuiiGd83hUwwtoLkXMMrhleJNo9qPXub4685syNjXMlE_IHtJ5N3uT0wnF_TYxOYwdH_r_67vEzQ4iWS4IXdma__XIFyF7HUjWHYY9XEwRf0S"
                  alt="DJ Kells"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-[16px] text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface font-bold">
                    VERIFIED PRO
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
                  <span className="text-[14px]">🇳🇬</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">LOS</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">DJ Kells</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Premium Audio & Mixing
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface">
                    <span
                      className="material-symbols-outlined text-[18px] text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-title-md text-title-md">4.9</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-outline-variant/30">
                  <div>
                    <span className="font-label-caps text-[10px] text-on-surface-variant block uppercase">
                      STARTING AT
                    </span>
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      From ₦150k
                    </span>
                  </div>
                  <Link
                    href="/services/booking/18"
                    className="bg-primary-container text-on-primary-container font-label-caps text-[10px] px-4 py-2 rounded-lg hover:bg-primary transition-colors flex items-center gap-2 shadow-sm font-bold"
                  >
                    BOOK VIA MOMO
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-container border-b-2 hover:shadow-lg transition-shadow flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5i5AIrGYmfhYO_ZMlWZuRDIGwYmSF-odVp82Oi8k-abmK3Hcs8ZJj3OElBz9twdTgnOBpf3TBdGbyg9vwhSWp2CJeWGo46tA9aKHprnuG8R1jrKnpfVsaXP48YKofe9tk46ektzl52l5FqtNC_F6xYWFx5E5QAOQgfNzduk2Pu7lWSNvxXe7_Uj9fvbovo4jO1zCFDQ8m8lIlW6stTmn66wJMul3J-9rjJnXmdcyFvG_y-4Ki4stFwO_lhDW1tOmz3R2J9bOgKMY"
                  alt="Luxe Events Accra"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-[16px] text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface font-bold">
                    VERIFIED PRO
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm">
                  <span className="text-[14px]">🇬🇭</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">ACC</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Luxe Events Accra</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Decor & Tent Hire
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface">
                    <span
                      className="material-symbols-outlined text-[18px] text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-title-md text-title-md">5.0</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-outline-variant/30">
                  <div>
                    <span className="font-label-caps text-[10px] text-on-surface-variant block uppercase">
                      STARTING AT
                    </span>
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      From ₵5,000
                    </span>
                  </div>
                  <Link
                    href="/services/booking/19"
                    className="bg-primary-container text-on-primary-container font-label-caps text-[10px] px-4 py-2 rounded-lg hover:bg-primary transition-colors flex items-center gap-2 shadow-sm font-bold"
                  >
                    BOOK VIA MOMO
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

    </div>
  );
}
