'use client';

import React from 'react';
import Link from 'next/link';

export default function ProfessionalServicesListings() {
  return (
    <div className="bg-background text-on-background font-body-lg antialiased min-h-screen">


      <main className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop pt-6 pb-12 flex flex-col gap-8 md:gap-12 overflow-x-hidden">
        {/* Search Section */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight font-bold">
              Expert advice for your business.
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              Legal, Accounting, and Consulting experts.
            </p>
          </div>
          <div className="relative w-full shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-[16px] max-w-2xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full pl-12 pr-28 py-4 rounded-[16px] bg-white border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-lg text-on-surface placeholder:text-on-surface-variant"
              placeholder="What professional help do you need?"
              type="text"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container font-label-caps text-[10px] px-6 py-2.5 rounded-lg hover:bg-primary transition-colors font-bold">
              SEARCH
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="flex flex-col gap-4">
          <h3 className="font-title-md text-title-md text-on-surface font-bold">Specializations</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-1">
            <button className="flex flex-col items-center gap-3 min-w-[100px] group">
              <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container/20 transition-all border border-transparent group-hover:border-primary-container group-hover:scale-105">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-4xl">
                  gavel
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface text-center font-bold uppercase tracking-tight">
                Legal
              </span>
            </button>
            <button className="flex flex-col items-center gap-3 min-w-[100px] group">
              <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container/20 transition-all border border-transparent group-hover:border-primary-container group-hover:scale-105">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-4xl">
                  account_balance
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface text-center font-bold uppercase tracking-tight">
                Accounting
              </span>
            </button>
            <button className="flex flex-col items-center gap-3 min-w-[100px] group">
              <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary-container/20 transition-all border border-transparent group-hover:border-primary-container group-hover:scale-105">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-4xl">
                  query_stats
                </span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface text-center font-bold uppercase tracking-tight">
                Consulting
              </span>
            </button>
          </div>
        </section>

        {/* Sample Listings */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="font-title-md text-title-md text-on-surface font-bold">Top Professionals</h3>
            <button className="font-label-caps text-[12px] text-secondary flex items-center gap-1 hover:underline font-bold">
              VIEW ALL <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-8">
            {/* Professional Card */}
            <article className="bg-white rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 overflow-hidden flex flex-col group">
              <div className="h-48 bg-surface-container relative overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWlhHx1mBLSO90PPmYh3eztREaA_krYuCDfg6c-RasDLKICasCgnT824rAywmmfC4fmFgiJTRlLkRgVTk731GgqET8Aun_pa4jIod-1zuVDfKmPotgAcdhxhPk6OS1UIHLJHcVaCw7XeME972bpbcA9fSohDlc7v4m9sJSAGlZhgZZFUEWxtN515oq9UynGcsf1bJSi5A6orXHf94WKJgUVpjHvV6wmLfRO5IRwu_xLYi2guntGthZ9PgNesbKG2PVDNyuBbD6OMxZ"
                  alt="Consultant"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-2">
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    Business Strategy Consulting
                  </h4>
                  <p className="font-body-sm text-on-surface-variant font-medium">by Elite Advisors</p>
                  <p className="font-body-sm text-on-surface-variant line-clamp-2 mt-2">
                    Expert guidance on market entry, operational efficiency, and scalable business models.
                  </p>
                </div>
                <Link
                  href="/services/booking/professional_1"
                  className="mt-6 w-full bg-primary text-on-primary-fixed-variant font-label-caps text-[12px] py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 flex justify-center items-center gap-2 font-bold shadow-sm"
                >
                  REQUEST PROPOSAL
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
