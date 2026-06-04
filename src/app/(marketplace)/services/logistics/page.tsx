'use client';

import React from 'react';
import Link from 'next/link';

export default function LogisticsServicesListings() {
  return (
    <div className="bg-background text-on-background font-body-lg antialiased min-h-screen">


      <main className="max-w-7xl mx-auto pt-6">
        {/* Search Context & Category Filter */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop mb-8">
          <div className="flex items-center gap-2 mb-4 bg-surface-container-low rounded-xl p-2 shadow-inner border border-surface-variant max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-secondary ml-2 font-bold">search</span>
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface w-full font-body-lg placeholder:text-on-surface-variant/60"
              placeholder="What needs delivering?"
              type="text"
            />
            <button className="bg-primary-container text-on-primary-container font-title-md text-body-sm px-4 py-2 rounded-lg hover:brightness-105 transition-all font-bold">
              Find
            </button>
          </div>
          {/* Categories Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-3 hide-scrollbar pb-2">
            <button className="flex-shrink-0 bg-secondary text-on-secondary px-4 py-2 rounded-full font-label-caps text-[12px] flex items-center gap-1 shadow-sm font-bold">
              <span className="material-symbols-outlined text-[16px]">two_wheeler</span>
              Motorcycle
            </button>
            <button className="flex-shrink-0 bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-caps text-[12px] hover:bg-surface-container transition-colors font-bold uppercase">
              Courier Services
            </button>
            <button className="flex-shrink-0 bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-caps text-[12px] hover:bg-surface-container transition-colors font-bold uppercase">
              Package Delivery
            </button>
            <button className="flex-shrink-0 bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-caps text-[12px] hover:bg-surface-container transition-colors font-bold uppercase">
              Moving Services
            </button>
          </div>
        </section>

        {/* MoMo Booking Highlight */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop mb-section-gap">
          <div className="bg-gradient-to-r from-primary-container to-[#ffd633] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
            <div className="relative z-10 mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2 font-bold">
                <span
                  className="material-symbols-outlined text-on-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <h2 className="font-title-md text-title-md text-on-primary-container font-bold">
                  MoMo Booking Guarantee
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-primary-container/80 max-w-md">
                Flat-rate deliveries across the city. Secure payments, zero hidden fees, and
                priority dispatch.
              </p>
            </div>
            <Link
              href="/services/booking/12"
              className="relative z-10 bg-white text-on-surface font-title-md text-body-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap w-full md:w-auto text-center border border-outline-variant/30 font-bold"
            >
              Book Now
            </Link>
          </div>
        </section>

        {/* Live Map Context */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop mb-section-gap">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-title-md text-title-md text-on-surface font-bold">Nearby Couriers</h3>
            <div className="flex items-center gap-1 bg-surface-container-high rounded-full p-1">
              <button className="bg-white rounded-full px-4 py-1 shadow-sm font-label-caps text-[12px] text-on-surface font-bold uppercase">
                Map
              </button>
              <button className="px-4 py-1 font-label-caps text-[12px] text-on-surface-variant font-bold uppercase">
                List
              </button>
            </div>
          </div>
          <div className="w-full h-48 md:h-80 rounded-2xl bg-surface-variant relative overflow-hidden shadow-inner group cursor-pointer">
            <img
              alt="Map View"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO8uTpw-g72QkSlw3QH7ZQqMwy4QTgaN-zgrai7gOmoARRxtyFEkkYuOM-wrZkMDPfi2S2iqdBJ1KlxoWbtG_ffSZ3ohDYEfr-JJbdiWs9OaUc-ozRNkMjXkwJ20q88eyG7bKt0m5WQf9Le5kAQL-toy8cldiMAfVZUfbJ-LNgIEeLrTtEm9MvTtBz2_k7a8SxMcBOSD9zxZLG30sTF-3VTx6OHOA3zswP64EyPi4vc97yIgX_PvvT5WlN2QEeAK5Ok0CotefMVbzR"
            />
            {/* Glassmorphic Overlay Panel */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-xl p-4 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center animate-pulse">
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  my_location
                </span>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Active Area
                </p>
                <p className="font-title-md text-title-md text-on-surface font-bold">
                  12 riders within 2km
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Listings */}
        <section className="px-container-margin-mobile md:px-container-margin-desktop mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-8">
            <article className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[32px]">sports_motorsports</span>
                </div>
                <div className="bg-[#FFE08B] text-[#584400] px-3 py-1 rounded-md font-label-caps text-[12px] flex items-center gap-1 font-bold">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                  FASTEST
                </div>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2 font-bold">
                Swift Bike Delivery
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
                Ideal for documents, small parcels, and food. Navigates traffic with ease for rapid
                city transit.
              </p>
              <div className="flex items-center justify-between border-t border-outline-variant pt-4 mt-auto">
                <div className="flex flex-col">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                    EST. TIME
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    15-30 min
                  </span>
                </div>
                <Link
                  href="/services/booking/10"
                  className="bg-secondary/10 text-secondary p-3 rounded-full hover:bg-secondary hover:text-white transition-all active:scale-90"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

    </div>
  );
}
