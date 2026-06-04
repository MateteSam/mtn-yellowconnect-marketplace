'use client';

import React from 'react';
import Link from 'next/link';

export default function EducationServicesListings() {
  return (
    <div className="bg-background text-on-background min-h-screen">


      <main className="pt-6 px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto space-y-section-gap">
        {/* Search & Filter Section */}
        <section className="space-y-4">
          <div className="relative flex items-center bg-[#F5F5F5] rounded-xl border border-transparent focus-within:border-secondary shadow-inner transition-colors duration-200">
            <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full bg-transparent border-none py-4 pl-12 pr-24 rounded-xl font-body-lg text-body-lg text-on-surface focus:ring-0 placeholder:text-on-surface-variant"
              placeholder="Search for tutors, driving instructors..."
              type="text"
            />
            <button className="absolute right-2 bg-primary-container text-on-primary-fixed font-title-md text-title-md font-bold px-4 py-2 rounded-lg active:scale-95 transition-transform">
              Search
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            <button className="flex items-center gap-1 bg-surface border border-outline-variant rounded-full px-4 py-2 whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-highest">
              <span className="material-symbols-outlined text-on-surface-variant">tune</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Filters</span>
            </button>
            <button className="flex items-center gap-1 bg-primary-container text-on-primary-container rounded-full px-4 py-2 whitespace-nowrap active:scale-95 transition-transform">
              <span className="font-label-caps text-label-caps font-bold">Math Tutors</span>
            </button>
            <button className="flex items-center gap-1 bg-surface border border-outline-variant rounded-full px-4 py-2 whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-highest">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                English Tutors
              </span>
            </button>
            <button className="flex items-center gap-1 bg-surface border border-outline-variant rounded-full px-4 py-2 whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-highest">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                Coding Instructors
              </span>
            </button>
            <button className="flex items-center gap-1 bg-surface border border-outline-variant rounded-full px-4 py-2 whitespace-nowrap active:scale-95 transition-transform hover:bg-surface-container-highest">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                Driving Instructors
              </span>
            </button>
          </div>
        </section>

        {/* AI Recommendations (Bento Grid) */}
        <section className="space-y-4">
          <h2 className="font-title-md text-title-md text-on-surface">Top Rated & Verified</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* AI Enhanced Card 1 (Large) */}
            <div className="bg-white/80 backdrop-blur-xl border border-primary-container/30 rounded-xl p-4 flex flex-col justify-between md:col-span-2 md:row-span-2 min-h-[300px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <span className="bg-gradient-to-r from-secondary to-tertiary-fixed text-on-primary font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                    AI Pick
                  </span>
                  <span className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified
                    </span>
                    Verified
                  </span>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors p-1">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="flex gap-4 items-end mt-auto">
                <div className="w-24 h-24 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                  <img
                    alt="Dr. Sarah Okafor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqUk7TE-jtzJxbF6yZH3GSjZSRPsovP601XQmWkaeH8jdcrNBj6_yQoqJC8-neZgYkYsyU3oYKTe2-HajXYHrxqUGkGtkGY02qfp7Re3r9LBtr-Tj0aiPjksXNaaFsEJnlnzPdk7jEH4snQDABmNVALcPRp_s_OgA0yNfb2dzUjGUj6dzbrozbX0kT_nItZbpTWF1Dn1U2CVIxQUTr7ObCvqDgNXsIlwZJKn6DNe8EdDqDhi8Axu0OXD5BjntcjYV6b6_nkNI-l0qM"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-title-md text-title-md text-on-surface line-clamp-1">
                    Dr. Sarah Okafor
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    Advanced Mathematics & Calculus
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <span
                      className="material-symbols-outlined text-primary text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      4.9 (120 reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-title-md text-title-md text-secondary font-bold">
                      ₦5,000/hr
                    </span>
                    <span className="bg-primary-container text-on-primary-fixed font-label-caps text-[10px] px-2 py-1 rounded shadow-sm">
                      MoMo Accepted
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col justify-between shadow-[0px_4px_12px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start">
                <span className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    verified
                  </span>
                  Verified
                </span>
                <button className="text-on-surface-variant hover:text-error transition-colors p-1">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="mt-4">
                <div className="w-full h-32 rounded-lg overflow-hidden shadow-sm mb-3">
                  <img
                    alt="David Mensah"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBytNMnRwzllFlUOidCyB8kUV2yggpv9SGr83NDga6A6IEUU0FAGWCZE6OM5mqC9Q3i-hvkGIEvPVgudBLIWWlowIP3QvI_rLQX0yAqIQPFUbDmREfpLS_AzscP0TDmJ38zYx1lX_knuNfqYLnWscW4ut5Nzt0ReaJN61qTkHjGCCBqaAGDWjF9v1cFKC1ywcTbhULwm8V6yNN4Eo0gE9YesVtexBMDp7_Vwxekd7IBl3zUn3ms7f_nNgB_Qy69jlV0Jx1Rh_m2Awlv"
                  />
                </div>
                <h3 className="font-title-md text-title-md text-on-surface line-clamp-1">
                  David Mensah
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  Full-Stack Web Dev Instructor
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-title-md text-title-md text-secondary font-bold">
                    ₦8,000/hr
                  </span>
                  <span className="bg-primary-container text-on-primary-fixed font-label-caps text-[10px] px-2 py-1 rounded shadow-sm">
                    MoMo
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col justify-between shadow-[0px_4px_12px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start">
                <span className="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    verified
                  </span>
                  Verified
                </span>
                <button className="text-on-surface-variant hover:text-error transition-colors p-1">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <div className="mt-4">
                <div className="w-full h-32 rounded-lg overflow-hidden shadow-sm mb-3">
                  <img
                    alt="City Safe Driving"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWq4M4Mqm31dsDzatIW7pij5ezSg6v0haNnyvDm_H-Z9r-vXInnd1YHEzxdDpyzrlZgBtXDmdX4eJOtUtpgO7oO3j7MTNu87vxHoTPEhnXHnDxEKSF4_0vsrjLrQ45PZ6gw1ikiju9BNcp2F69fdjYC7OovsAdbvsIYKB2PS6aCXhrcNqkIzVDlIpydEwBfdFQmrNlIGEnTl9kh-QQi807AQ8VP2iNjPTZGX7Lk-fGu9QhAMetK1_S-x3GT5VePBE62oV0xSswSxCV"
                  />
                </div>
                <h3 className="font-title-md text-title-md text-on-surface line-clamp-1">
                  City Safe Driving
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  Intensive Driving Course
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-title-md text-title-md text-secondary font-bold">
                    ₦40,000/cr
                  </span>
                  <span className="bg-primary-container text-on-primary-fixed font-label-caps text-[10px] px-2 py-1 rounded shadow-sm">
                    MoMo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Listings */}
        <section className="space-y-4">
          <h2 className="font-title-md text-title-md text-on-surface">More Listings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {/* Item 1 */}
            <Link
              href="/services/booking/20"
              className="bg-surface rounded-xl p-3 border border-outline-variant flex flex-col shadow-[0px_4px_12px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-lg transition-all group"
            >
              <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden">
                <img
                  alt="Mr. Johnson"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi9shFPmONX-KOWaUwfTeKzcud3SFiuAAYoqWewOShyZ4Y6tWDZWfgnQ8o7OpQqONHeEvAQZ4CnnJKsMVbjVBPgxXb7WYZtOL-vD7eCSMbA0OLjBciEK-zBWVSp_kM6KpCYsbB02lp04_mqKFSwLpXLwNjzAKb4dul1bv5lNfAcQQ0YLSm47ANfpTSdLoAlqjD1_F_Bn-SSyuJje-hhMCKdhRUdDWdbLEnlAfA5KjjJFBKHnHvQVGD-anfPQupbrmiaxEnNI3tFWhp"
                />
              </div>
              <h3 className="font-body-sm text-body-sm font-bold text-on-surface line-clamp-1">
                Mr. Johnson
              </h3>
              <p className="font-label-caps text-[10px] text-on-surface-variant line-clamp-1 mt-1">
                IELTS Prep Expert
              </p>
              <div className="mt-auto pt-2 flex justify-between items-center">
                <span className="font-body-sm text-body-sm font-bold text-secondary">
                  ₦3,500/hr
                </span>
              </div>
            </Link>
          </div>
        </section>
      </main>


    </div>
  );
}
