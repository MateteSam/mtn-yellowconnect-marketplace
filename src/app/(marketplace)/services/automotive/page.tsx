'use client';

import React from 'react';
import Link from 'next/link';

export default function AutomotiveServicesListings() {
  return (
    <div className="bg-background text-on-background font-body-sm antialiased min-h-screen">


      <main className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop py-section-gap">
        {/* Search & Filter */}
        <div className="mb-8 bg-surface p-4 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant">
          <div className="relative flex items-center mb-4">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full bg-[#F5F5F5] border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary rounded-[8px] py-3 pl-10 pr-4 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant transition-all"
              placeholder="Search services..."
              type="text"
            />
            <button className="absolute right-2 bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-title-md text-title-md font-bold active:scale-95 transition-transform">
              Find
            </button>
          </div>
          {/* Horizontal scroll categories */}
          <div className="flex overflow-x-auto gap-3 pb-2 snap-x hide-scrollbar">
            <button className="snap-start flex-shrink-0 bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-label-caps text-label-caps font-bold">
              All Services
            </button>
            <button className="snap-start flex-shrink-0 bg-surface-container text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
              Mobile Mechanics
            </button>
            <button className="snap-start flex-shrink-0 bg-surface-container text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
              Vehicle Diagnostics
            </button>
            <button className="snap-start flex-shrink-0 bg-surface-container text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
              Car Wash
            </button>
            <button className="snap-start flex-shrink-0 bg-surface-container text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-container-high transition-colors">
              Towing
            </button>
          </div>
        </div>

        {/* MoMo Banner */}
        <div className="mb-section-gap bg-secondary-fixed text-on-secondary-container rounded-xl p-4 flex items-start gap-4 shadow-sm border border-secondary-fixed-dim">
          <span
            className="material-symbols-outlined mt-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            info
          </span>
          <div>
            <h3 className="font-title-md text-title-md font-bold mb-1">
              MoMo Booking Fees Waived!
            </h3>
            <p className="font-body-sm text-body-sm">
              Enjoy zero booking fees when you pay for any automotive service using Mobile Money
              this month.
            </p>
          </div>
        </div>

        {/* Listings Bento Grid */}
        <h2 className="font-title-md text-title-md font-bold text-on-surface mb-6">
          Top Rated Providers near you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* AI Enhanced Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-primary-container/30 rounded-[16px] p-4 flex flex-col md:col-span-2 lg:col-span-2 relative overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
            <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full border border-[#00daf0] flex items-center gap-1 z-10 shadow-sm">
              <span className="material-symbols-outlined text-[14px] text-secondary">
                auto_awesome
              </span>
              <span className="font-label-caps text-label-caps font-bold bg-gradient-to-r from-secondary to-[#00daf0] bg-clip-text text-transparent">
                AI MATCH
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 h-full">
              <div className="w-full md:w-1/2 h-48 md:h-full rounded-lg bg-surface-container overflow-hidden relative">
                <img
                  alt="Mechanic inspecting engine"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSuifZ5hzGlzYS_-QOq6KNbtdRSsu61ajMv86-TSZbzPcUgB3WunmC1C9X0TYG-NEWgpmXX2eXt7zIUa5CYzrW0ZcturWMZSjME8CDbIpOCxvXA-V7JkdR8_q14QQGTg0KEe6n9lUGGDNs1tvyxRxhCsp_wLpXjmcCB0hIxQIkgbTVcY5gBDipUo1INUOM9t1Nxir7rXvtpAotBocUZaNAcqlw70XxrVG9FheNw9sON8NK1shodHCsymYS13zyNpwEcj72Y136ga2"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
                <div>
                  <h3 className="font-title-md text-title-md font-bold text-on-surface">
                    Precision Mobile Diagnostics
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">
                    Complete electronic systems check and engine diagnostics performed at your
                    location. Fast, accurate, and reliable.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-primary text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-body-sm text-body-sm font-bold">4.9</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        (128)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">timer</span>
                      <span className="font-body-sm text-body-sm">~20 min response</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                  <span className="font-title-md text-title-md font-bold text-secondary">
                    From R450
                  </span>
                  <Link
                    href="/services/booking/10"
                    className="bg-gradient-to-r from-secondary to-tertiary text-white px-6 py-2 rounded-lg font-title-md text-title-md font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-md"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Card 1 */}
          <div className="bg-surface rounded-[16px] p-4 flex flex-col shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/50 relative">
            <div className="w-full h-40 rounded-lg bg-surface-container overflow-hidden mb-4 relative">
              <img
                alt="Tow truck"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVPPbPtxvMyqUatEieajY_O0ptWii72Dtq8ujPKPnI3zDmy5mkboabBYgXwFTPn2zFUIvuxIP_1Np2cxtvcYBeSHRn88v-Hq-w55Wfgna3X0nkmksuRX3HshrsFG8-1TuyI9hJczG6dhv889-CZBwVr45zG0CzE4F7vz2v-JaS5zEnkC9ICbf5YyeS8EazmBSMmGV7iUlSmkDi2gxTy2xxhAQ82B0QmqeTK-6WJlIB3IA7FjluVSMLsHKFsgEtIT-Abp1U2wQNANLV"
              />
              <div className="absolute top-2 right-2 bg-surface px-2 py-1 rounded-md shadow-sm flex items-center gap-1 border border-outline-variant">
                <span className="text-[16px]">🇿🇦</span>
                <span className="font-label-caps text-label-caps">ZA</span>
              </div>
            </div>
            <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">
              Swift Recovery Towing
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              24/7 flatbed towing and roadside assistance.
            </p>
            <div className="flex items-center justify-between mb-4 mt-auto">
              <div className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-primary text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-body-sm text-body-sm font-bold">4.7</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                <span className="font-body-sm text-body-sm">~45 min</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-outline-variant">
              <span className="font-title-md text-title-md font-bold text-secondary">R850</span>
              <Link
                href="/services/booking/11"
                className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-title-md text-title-md font-bold active:scale-95 transition-transform"
              >
                Book
              </Link>
            </div>
          </div>

          {/* Standard Card 2 */}
          <div className="bg-surface rounded-[16px] p-4 flex flex-col shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/50 relative">
            <div className="w-full h-40 rounded-lg bg-surface-container overflow-hidden mb-4 relative">
              <img
                alt="Car wash"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTSmOAYh_x_8NTTgx4SqlU3e_N_kIKocEZtgu22H5WJsu09Fe2sSDM-R5zMmva95sb45LjfTaMmVLVjjEycHPi02e8ShCVX3x51uYpwr_UESmFymOLLnUQc0Dofr63EcHUq884IBX5Mfiu6Nukco2sfsTyHv-CzhESl6oD78J1Q3ubbkwNJTLiGBIWDluJd2fIyTEaFlPjhwNhtRtecZqT_7P6PsSvwEJdtCInfCAVylgTpk8faWwV-LQbqKCJrgIgZ1nALK5litC_"
              />
              <div className="absolute top-2 right-2 bg-surface px-2 py-1 rounded-md shadow-sm flex items-center gap-1 border border-outline-variant">
                <span className="text-[16px]">🇿🇦</span>
                <span className="font-label-caps text-label-caps">ZA</span>
              </div>
            </div>
            <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">
              EcoShine Mobile Valet
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              Premium waterless wash and detailing at your home.
            </p>
            <div className="flex items-center justify-between mb-4 mt-auto">
              <div className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-primary text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-body-sm text-body-sm font-bold">4.8</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                <span className="font-body-sm text-body-sm">Next Day</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-outline-variant">
              <span className="font-title-md text-title-md font-bold text-secondary">R250</span>
              <Link
                href="/services/booking/12"
                className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-title-md text-title-md font-bold active:scale-95 transition-transform"
              >
                Book
              </Link>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
