'use client';

import React from 'react';
import Link from 'next/link';

export default function DigitalServicesListings() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen">


      <main className="max-w-7xl mx-auto px-gutter md:px-container-margin-desktop py-8">
        {/* Search Section */}
        <section className="mb-section-gap">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="flex items-center bg-[#F5F5F5] rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] border border-transparent focus-within:border-secondary transition-colors overflow-hidden">
              <span className="material-symbols-outlined text-on-surface-variant pl-4">search</span>
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 font-body-lg text-on-surface py-4 px-4 placeholder:text-on-surface-variant"
                placeholder="Find digital services (e.g. Website development)"
                type="text"
              />
              <button className="bg-primary-container text-on-primary-container font-title-md text-body-sm px-8 py-4 hover:bg-primary transition-colors h-full font-bold">
                Search
              </button>
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 hide-scrollbar">
              <span className="font-label-caps text-[10px] text-on-surface-variant py-1.5 px-4 bg-surface-container rounded-full whitespace-nowrap cursor-pointer hover:bg-surface-container-high font-bold uppercase">
                Graphic design
              </span>
              <span className="font-label-caps text-[10px] text-on-surface-variant py-1.5 px-4 bg-surface-container rounded-full whitespace-nowrap cursor-pointer hover:bg-surface-container-high font-bold uppercase">
                Web development
              </span>
              <span className="font-label-caps text-[10px] text-on-surface-variant py-1.5 px-4 bg-surface-container rounded-full whitespace-nowrap cursor-pointer hover:bg-surface-container-high font-bold uppercase">
                Content creation
              </span>
            </div>
          </div>
        </section>

        {/* AI Matched Professionals */}
        <section className="mb-section-gap">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="material-symbols-outlined text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <h2 className="font-title-md text-title-md text-on-surface font-bold">
              AI Matched Professionals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter lg:gap-8 overflow-hidden">
            {/* Main Feature Card */}
            <article className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)] cursor-pointer group relative border border-outline-variant/30">
              <div className="relative h-48 md:h-80 overflow-hidden">
                <img
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiNb0p2bc3n7GUrry_4-ukzSpyiALvyNANV9KVU9UTIeXu93TFzaFceUeTrbJcl4p7i6eJe31GP3zF22lrPC9dH6fGHpqQhE1AziYnFEJbQFkXDxVasvdnYSFwJwCUXGZMR6GV6xB3BOXvy8QJEfAcaoFE4Blah4_Ck8b7l6_ecDDrJEb3e-FvYj8DD_ZbWZCgjSCxkrfF2bjKo_6Imyp0P3sQWFWMoJp5CpYIcQkmTM1a2C6aRo5KrngIlsZvtr1HpeFYmpfXbLGI"
                />
                <div className="absolute top-4 left-4 bg-primary text-white font-label-caps text-[10px] px-3 py-1.5 rounded-full font-bold shadow-sm uppercase">
                  TOP MATCH
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-outline-variant/30">
                  <span className="text-sm">🇿🇦</span>{' '}
                  <span className="font-label-caps text-[10px] text-on-surface font-bold uppercase">
                    ZAF
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors font-bold">
                      Full-Stack E-commerce Setup
                    </h3>
                    <p className="font-body-sm text-on-surface-variant mt-1 font-medium italic">
                      Website development
                    </p>
                  </div>
                  <span className="font-title-md text-title-md text-secondary font-bold">
                    From 500k
                  </span>
                </div>
                <div className="flex items-center gap-6 mt-6 border-t border-outline-variant/30 pt-4">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-[16px] text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-label-caps text-[10px] font-bold">4.9 (120)</span>
                  </div>
                  <div className="flex items-center gap-2 text-tertiary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                    <span className="font-label-caps text-[10px] font-bold uppercase tracking-tight">
                      MoMo Escrow Available
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Secondary Card */}
            <article className="bg-white rounded-xl border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,0,0,0.05)] overflow-hidden cursor-pointer group hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt="Graphic Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCASPaWbLRP7q4-IpJ0UGi9JeTPlNrsOFM2729A0Gvq3Fhmu6vHpv0L2raeu4i72xWVb2V_RaDsgh8A9xpJ-IU2vF2IwrGu1SnJbjPg2dUPVy_Fe1_GvYR7hxiG-h3WW2P47mfOs-kvhsudORIzkcT_PcxvXKRSu5mTtOTgkLNnzVGtHkcoRdrl5QmNZSb24ftLjqlInO2anYfw9ileWdo4HX6x9ZQiEpoPmXztZTC6xnA9AWXxgyBniJZd6GqkGZmFCukqqMBpgcLc"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface line-clamp-2 font-bold mb-1">
                    Brand Identity & Logo Design
                  </h3>
                  <p className="font-body-sm text-on-surface-variant italic font-medium">
                    Graphic design
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30">
                  <div className="font-title-md text-title-md text-secondary font-bold mb-3">
                    From 150k
                  </div>
                  <div className="flex items-center gap-2 text-tertiary bg-tertiary/10 px-3 py-1.5 rounded-full w-fit">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      shield
                    </span>
                    <span className="font-label-caps text-[10px] font-bold uppercase">
                      Secure Payouts
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

    </div>
  );
}
