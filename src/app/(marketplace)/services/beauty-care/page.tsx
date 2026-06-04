'use client';

import React from 'react';
import Link from 'next/link';

export default function BeautyCareServicesListings() {
  return (
    <div className="bg-background text-on-background antialiased font-body-sm min-h-screen">


      <main className="max-w-[1280px] mx-auto pt-4">
        {/* Horizontal Category Filter */}
        <section className="px-gutter mb-6 flex gap-3 overflow-x-auto snap-x hide-scrollbar">
          <button className="snap-start shrink-0 px-5 py-2 rounded-full bg-secondary text-on-secondary font-label-caps text-label-caps shadow-sm">
            ALL SERVICES
          </button>
          <button className="snap-start shrink-0 px-5 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
            HAIRDRESSERS
          </button>
          <button className="snap-start shrink-0 px-5 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
            MAKEUP ARTISTS
          </button>
          <button className="snap-start shrink-0 px-5 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
            BARBERS
          </button>
          <button className="snap-start shrink-0 px-5 py-2 rounded-full bg-surface border border-outline-variant text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
            NAIL TECHS
          </button>
        </section>

        {/* AI Enhanced Bento Grid */}
        <section className="px-gutter mb-section-gap">
          <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer h-64 md:h-96">
            <img
              alt="Studio Luxe Bridal"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiVO7cSt9DlpjtDFbiGgi06xDgpFrL9T8cMSS_Ovz6qhIb7Rq6-FNejgDM02ia8zu6D1A_M-eQ1b-xae2zJsdjW6w7oHbeGlStuW-VsYBqhArNID5N1gfegsmhZnz5PmMHhlrae5-lJHRCtOciw_hGxeup4zHSEA4NJmv5Sns_49PjC391gQrHVHXoU8bgCoPdVsLADsqJ3xOtsL2_dceT5vHcVYp4LnByQVdGZj0iVaLTpmxip3v4OGveaP3_sZEFsPgyA5evsdPc"
            />
            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                <span className="font-label-caps text-label-caps text-secondary tracking-widest">
                  AI TOP MATCH FOR YOUR AREA
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="font-title-md text-title-md text-white font-bold mb-1">
                    Studio Luxe Bridal & Glam
                  </h2>
                  <p className="font-body-sm text-body-sm text-gray-200 max-w-md">
                    Highly rated by clients similar to you for long-lasting, flawless finishes and
                    professional punctuality.
                  </p>
                </div>
                <Link
                  href="/services/booking/15"
                  className="shrink-0 bg-gradient-to-r from-secondary to-[#4A90E2] text-white font-title-md text-title-md px-8 py-3 rounded-full flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Book Priority
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <div className="px-gutter">
          <h3 className="font-title-md text-title-md text-on-surface mb-4">Trending Near You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <article className="bg-surface rounded-xl overflow-hidden shadow-sm border border-surface-variant flex flex-col hover:shadow-md transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfeLgBFBW15mA_BGKZBRKWSdTxA9sZk9Tlr0OnGOxAu3tbuV_oFDjkK3ZeWfT-uBpeXcmNWu75J-Ymvq2Gu5M7EX4BciUOuyUvGCHacyf6s0uQZj9jY_5e-IkiGlli7RL748wgnrO7iGMasSqi3e3UWSsKxi7eNN8tgvNi9vXcbfn3vjqOnJuA_DXCYs3ouxVZwaclDnd6pmEBVbL-97SVSeFL4uVV2nSvk_9bCUrL6prqniXnHxgWdLYpvdicbj30g56oVfE1RT7G"
                  alt="Kigali Braids Master"
                />
                <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm font-label-caps text-label-caps">
                  <span
                    className="material-symbols-outlined text-primary text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  4.9
                </div>
              </div>
              <div className="p-4 flex flex-col grow">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h4 className="font-title-md text-title-md text-on-surface line-clamp-1">
                    Kigali Braids Master
                  </h4>
                  <span className="font-title-md text-title-md text-secondary font-bold">RWF 15k</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Remera Sector, Kigali
                </p>
                <div className="mt-auto pt-4 border-t border-surface-variant flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-on-surface-variant mb-1 uppercase tracking-wider">
                      DEPOSIT REQUIRED
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-[#FFCC00] rounded-sm flex items-center justify-center text-[10px] font-black text-[#0033A0]">
                        MoMo
                      </div>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">Accepted</span>
                    </div>
                  </div>
                  <Link
                    href="/services/booking/16"
                    className="bg-primary text-on-primary-fixed-variant font-label-caps text-label-caps px-4 py-2.5 rounded-full font-bold active:scale-95 transition-transform hover:bg-inverse-primary"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>


    </div>
  );
}
