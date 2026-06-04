'use client';

import React from 'react';
import Link from 'next/link';

export default function DomesticServicesListings() {
  return (
    <div className="bg-background text-on-background font-body-lg antialiased min-h-screen">


      <main className="max-w-7xl mx-auto px-container-margin-mobile pt-6 pb-12 flex flex-col gap-8 md:gap-12 overflow-x-hidden">
        {/* Hero & Search Section */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight font-bold">
              Trusted help for your home.
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              Vetted professionals for cleaning, childcare, and more.
            </p>
          </div>
          <div className="relative w-full shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-[16px] max-w-2xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full pl-12 pr-28 py-4 rounded-[16px] bg-white border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-lg text-on-surface placeholder:text-on-surface-variant"
              placeholder="What service do you need?"
              type="text"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container font-label-caps text-[10px] px-6 py-2.5 rounded-lg hover:bg-primary transition-colors font-bold">
              SEARCH
            </button>
          </div>
        </section>

        {/* Trust Banner */}
        <section>
          <div className="bg-white/80 backdrop-blur-xl border border-secondary-container/30 rounded-xl p-5 flex items-start sm:items-center gap-4 relative overflow-hidden shadow-sm">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center border border-secondary-container text-secondary">
              <span
                className="material-symbols-outlined text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <div className="flex flex-col z-10">
              <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-2 font-bold">
                Trusted Home Pro
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                All service providers undergo rigorous background checks and identity verification for your peace of mind and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="flex flex-col gap-4">
          <h3 className="font-title-md text-title-md text-on-surface font-bold">Categories</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-1">
            <button className="flex flex-col items-center gap-3 min-w-[100px] group">
              <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container/20 transition-all border border-transparent group-hover:border-primary-container group-hover:scale-105">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-4xl">
                  cleaning_services
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface text-center font-bold uppercase tracking-tight">
                House Cleaning
              </span>
            </button>
            <button className="flex flex-col items-center gap-3 min-w-[100px] group">
              <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container/20 transition-all border border-transparent group-hover:border-primary-container group-hover:scale-105">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-4xl">
                  local_laundry_service
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface text-center font-bold uppercase tracking-tight">
                Laundry
              </span>
            </button>
            <button className="flex flex-col items-center gap-3 min-w-[100px] group">
              <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container/20 transition-all border border-transparent group-hover:border-primary-container group-hover:scale-105">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-4xl">
                  child_care
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface text-center font-bold uppercase tracking-tight">
                Childcare
              </span>
            </button>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="font-title-md text-title-md text-on-surface font-bold">Recommended Pros</h3>
            <button className="font-label-caps text-[12px] text-secondary flex items-center gap-1 hover:underline font-bold">
              VIEW ALL <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-8">
            <article className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden flex flex-col sm:flex-row group">
              <div className="h-56 sm:h-auto sm:w-2/5 bg-surface-container relative overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbOGfnZeanbXMGzZ1MwuYDyxQgIQ0BNN_IH60mGgD2xkpbDlGLqVKzHenLsOX-fZSP7QbqkNOncE-wo3m1R3yQ4BtQYoY7WXg3VBpVuRC8_nVZQ6-Sh1u_UF_aWOL4Y-ZcZ5ie6nilr5Od4uVRFHqfcV_sCVqdUHTVY0ZAQR0vyc33G9dTfZJxBFXPqNr3g4W10nGm8krN-z66ZbCVOMeOqdIrU-480nPP2RImg7-Wunaq4vrld82z9_7GMVNLTEcXXaMzGbSC7ow"
                  alt="Sarah M."
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1 border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-secondary text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface font-bold">
                    4.9 (120+)
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between sm:w-3/5 flex-grow">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        Deep House Cleaning
                      </h4>
                      <p className="font-body-sm text-on-surface-variant font-medium">by Sarah M.</p>
                    </div>
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      R150<span className="text-sm font-normal text-on-surface-variant">/hr</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 bg-secondary-container/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold border border-secondary-container/20 uppercase">
                      <span
                        className="material-symbols-outlined text-[14px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified_user
                      </span>{' '}
                      Trusted Pro
                    </span>
                    <span className="inline-flex items-center gap-1 bg-surface-container px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant border border-outline-variant/30 uppercase">
                      Background Checked
                    </span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    Comprehensive deep cleaning for homes, including windows, carpets, and
                    hard-to-reach areas. Highly rated for punctuality.
                  </p>
                </div>
                <Link
                  href="/services/booking/25"
                  className="mt-6 w-full sm:w-auto bg-primary text-on-primary-fixed-variant font-label-caps text-[12px] py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 flex justify-center items-center gap-2 font-bold shadow-sm"
                >
                  BOOK NOW
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

    </div>
  );
}
