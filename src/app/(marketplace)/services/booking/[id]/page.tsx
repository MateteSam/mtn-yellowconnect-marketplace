"use client";

export const runtime = 'edge';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function ProfessionalBookingDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // Mock data based on the ID for demonstration
  const providers: Record<string, any> = {
    '1': {
      name: 'Samuel K. Mensah',
      role: 'Master Plumber',
      rating: '4.8',
      reviews: '124',
      exp: '12+',
      cases: '850+',
      resp: '<30m',
      fee: 'GHS 150',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXNUO0bSdkgAgrxaeWfIB8ErnRnj1ALlHSYzPvYvsVp9C4KHnXNZ1VJ2PKA8xYMimFnaNX6VGibo6CFLXfW8p2nnP3vR9kwEIEAv0QRBngxjxPM4MC_QnaEftq_-hd4smsX4NhXVhewOs0IaI0an_BIe9MA6j2mg9lzClSAOAbwKglYLmy3SN9spOBYEKr4fjKrvzpsAqZiFPkxAxJwlO2qx5Lj_wGK3fc9IAz5EprrcXBje6OxRrrOoycS1khk783-LhAWtefu88',
    },
    'default': {
      name: 'Atty. Michael O. Mensah',
      role: 'Senior Corporate & Contract Law',
      rating: '4.9',
      reviews: '124',
      exp: '15+',
      cases: '450+',
      resp: '<2h',
      fee: 'GHS 150',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCLVR8kaCr6qKpSdW44lwn_v-mp2zLC5-Xy-PdpnLafbkrXubmvwP2WxbUYq8nhXDJC4A11IPJPiNe1F45mQZqKn1DhiSNzKwnBmzpa8ujVqgyZEA4uShgygrn4MHOSKbHVMgB7CpuYXTGlHdzakSk-ljlpVtKGtV-uKi4fHenX-te2wSm50RNSHKipQKjnpoGHGRGsimNIO5TLn64dEOBwOCAvs4E2_YlYn_wnqP3dDOv8HKx2k3CzLg5-7KysKx4aY2eKWyZU0GZ_',
    },
  };

  const provider = providers[id as string] || providers['default'];

  return (
    <div className="bg-background text-on-background font-body-sm flex flex-col h-screen overflow-hidden">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 bg-surface dark:bg-background shadow-sm flex items-center justify-between px-container-margin-mobile h-16 z-50">
        <button
          onClick={() => router.back()}
          className="text-primary dark:text-primary-fixed-dim hover:bg-surface-variant/50 p-2 rounded-full"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
          Provider Profile
        </h1>
        <button className="text-primary dark:text-primary-fixed-dim hover:bg-surface-variant/50 p-2 rounded-full">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto pb-32">
        {/* Hero Profile Section */}
        <section className="bg-surface px-container-margin-mobile pt-6 pb-8 shadow-[0_4px_12px_rgba(0,0,0,0.02)] rounded-b-xl relative">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-surface-variant">
                <img className="w-full h-full object-cover" src={provider.image} alt={provider.name} />
              </div>
              {/* Verified Badge */}
              <div className="absolute bottom-0 right-0 bg-secondary text-on-secondary w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 border-surface">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
            <h2 className="font-title-md text-title-md text-on-surface mb-1">{provider.name}</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">{provider.role}</p>
            <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full">
              <span
                className="material-symbols-outlined text-primary text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-caps text-label-caps text-on-surface">
                {provider.rating} ({provider.reviews} REVIEWS)
              </span>
            </div>
          </div>
        </section>

        {/* Bento Stats Grid */}
        <section className="px-container-margin-mobile py-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-surface p-3 rounded-xl flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-surface-variant/50">
              <span className="material-symbols-outlined text-secondary mb-1">work_history</span>
              <span className="font-title-md text-[18px] text-on-surface">{provider.exp}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant text-center">
                YEARS EXP.
              </span>
            </div>
            <div className="bg-surface p-3 rounded-xl flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-surface-variant/50">
              <span className="material-symbols-outlined text-tertiary mb-1">gavel</span>
              <span className="font-title-md text-[18px] text-on-surface">{provider.cases}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant text-center">
                COMPLETED
              </span>
            </div>
            <div className="bg-surface p-3 rounded-xl flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-surface-variant/50">
              <span className="material-symbols-outlined text-primary-fixed-dim mb-1">schedule</span>
              <span className="font-title-md text-[18px] text-on-surface">{provider.resp}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant text-center">
                RESP. TIME
              </span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="px-container-margin-mobile pb-6">
          <h3 className="font-title-md text-[16px] text-on-surface mb-3">
            Professional Credentials
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-surface-container p-3 rounded-lg">
              <div className="bg-surface w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-surface-variant">school</span>
              </div>
              <div>
                <p className="font-body-sm text-body-sm font-medium text-on-surface">
                  Professional Certification
                </p>
                <p className="font-label-caps text-[10px] text-on-surface-variant">
                  VERIFIED CREDENTIAL
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Calendar */}
        <section className="bg-surface pt-6 pb-8 border-t border-surface-variant shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
          <div className="px-container-margin-mobile mb-4 flex justify-between items-end">
            <h3 className="font-title-md text-[18px] text-on-surface">Select Date & Time</h3>
            <span className="font-body-sm text-secondary cursor-pointer">October</span>
          </div>
          {/* Date Scroller */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar px-container-margin-mobile pb-2">
            {[14, 15, 16, 17, 18].map((day, idx) => (
              <button
                key={day}
                className={`flex flex-col items-center justify-center min-w-[64px] py-2 rounded-xl border transition-all ${
                  idx === 1
                    ? 'bg-primary-container text-on-primary-container border-primary-fixed-dim shadow-sm'
                    : 'bg-surface-container text-on-surface border-transparent'
                }`}
              >
                <span className="font-label-caps text-[10px] opacity-70">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI'][idx]}
                </span>
                <span className="font-title-md text-[18px]">{day}</span>
              </button>
            ))}
          </div>
          {/* Time Slots */}
          <div className="px-container-margin-mobile mt-4 grid grid-cols-3 gap-2">
            <button
              className="py-2.5 rounded-lg border border-surface-variant bg-surface text-on-surface-variant font-body-sm text-center line-through opacity-50"
              disabled
            >
              09:00 AM
            </button>
            <button className="py-2.5 rounded-lg border border-primary bg-primary/10 text-primary font-body-sm text-center font-medium">
              10:30 AM
            </button>
            <button className="py-2.5 rounded-lg border border-surface-variant bg-surface text-on-surface font-body-sm text-center hover:bg-surface-container transition-colors">
              01:00 PM
            </button>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Booking Action */}
      <div className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md px-container-margin-mobile py-4 border-t border-surface-variant z-40 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
        <div className="flex items-start gap-2 mb-3 px-2">
          <span className="material-symbols-outlined text-secondary text-[18px]">info</span>
          <p className="font-body-sm text-[12px] text-on-surface-variant leading-tight">
            A non-refundable commitment fee of <strong>{provider.fee}</strong> will be deducted
            securely via MoMo to confirm this booking.
          </p>
        </div>
        <button className="w-full bg-primary hover:bg-primary-fixed-dim text-on-primary-fixed-variant font-title-md text-title-md py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform duration-200 active:scale-[0.98] shadow-sm">
          <span>Book with MoMo</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
