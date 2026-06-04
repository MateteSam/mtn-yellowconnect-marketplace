'use client';

import React from 'react';
import Link from 'next/link';

export default function HealthWellnessServicesListings() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-sm antialiased">


      <main className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6">
        {/* Search Section */}
        <section className="mb-gutter">
          <div className="flex items-center bg-surface-container rounded-[16px] p-1 shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)] border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface-variant ml-3">search</span>
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant px-3 h-12"
              placeholder="Find health professionals..."
              type="text"
            />
            <button className="bg-primary-container text-on-primary-container font-title-md text-title-md px-6 py-3 rounded-[12px] active:scale-95 transition-transform">
              Search
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-section-gap overflow-x-auto hide-scrollbar">
          <div className="flex gap-base w-max">
            <button className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container border border-primary-container font-title-md text-title-md flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                medical_services
              </span>
              Nursing
            </button>
            <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high font-title-md text-title-md flex items-center gap-2">
              <span className="material-symbols-outlined">physical_therapy</span>
              Physiotherapy
            </button>
            <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high font-title-md text-title-md flex items-center gap-2">
              <span className="material-symbols-outlined">fitness_center</span>
              Personal Trainers
            </button>
          </div>
        </section>

        {/* AI Featured Bento Grid */}
        <section className="mb-section-gap grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 relative rounded-[16px] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)] h-[320px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANywRsBXva1F0Dfw9ZYLYDVoFIwt04TCIbGs4WpurW3DNBxmX-cBSGDUh6r_zLsPYhHaCPM_lIQv39jmt6K-7nGdqBHvfzwmxNnB_DaDC7RcUOUDlBcC73X1ZTCYCcL86mYv7PFLz42JJ0eq3Bfj6_Lsz8qzVl-uIEPAwNnOyBgDTMQmwt13Y_4hPSYfR9W3huMfB7gG0Uj9UqGyqC6OJjVV11wlzRs-i5iW5fIP4hd7OzRWoU3cIKC1MSrPCkb41DjgQzTsGdibKe"
              alt="Physiotherapy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-gutter">
              <div className="bg-white/80 backdrop-blur-xl border border-primary-container/30 rounded-xl p-4 w-full md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary uppercase">
                    AI Recommended Match
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">
                  Dr. Amina Osei
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-3">
                  Senior Physiotherapist • 98% Match for your profile
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-secondary font-bold">
                    FCFA 25,000 / session
                  </span>
                  <Link
                    href="/services/booking/7"
                    className="bg-primary-container text-on-primary-container font-title-md text-title-md px-4 py-2 rounded-lg flex items-center gap-2 active:scale-95 transition-transform"
                  >
                    Book <span className="material-symbols-outlined">payments</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Bento Cell */}
          <div className="bg-surface-container rounded-[16px] p-gutter flex flex-col justify-center shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4">
              <span
                className="material-symbols-outlined text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-2">Verified Pros Only</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              All our health professionals undergo rigorous background checks and credential
              verification to ensure high-trust care.
            </p>
          </div>
        </section>

        {/* Specialists Grid */}
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-gutter">
          Available Specialists
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-12">
          {/* Card 1 */}
          <article className="bg-surface rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-variant overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCrLhSi4LcA1e8aCoc8n98Sd63UHmGDRUOrM1AYHZDo9FAHdGzsUtsrwLiU4o1VbTEuqCd0s5j644RCHVf43vIvhvRtEXjugez8MaTzOYyOscseyjqatb7oZRqvfjf0y1pHlrrN9_L9fqbMhrQPa8zz40lYnHuxxXAgy7tnG1jM5oP408AbiinvVWw7EgZftiwb2KJK0EMAt5c0swgDB4VtlNXZ2ahfGqnRIQcg-thNQesTPISQxTYtHLbGOBU7QqzNZGGfG94BD7"
                alt="Samuel Kalu"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-outline-variant">
                <span
                  className="material-symbols-outlined text-secondary text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-label-caps text-label-caps text-on-surface">Verified Pro</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-title-md text-title-md text-on-surface">Samuel Kalu</h4>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span className="font-label-caps text-label-caps">GH</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">
                Registered Home Care Nurse
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant">
                <div className="flex flex-col">
                  <span className="font-label-caps text-[10px] text-on-surface-variant">
                    Per Session
                  </span>
                  <span className="font-title-md text-title-md text-secondary">FCFA 15,000</span>
                </div>
                <Link
                  href="/services/booking/8"
                  className="bg-secondary text-on-secondary font-title-md text-body-sm px-4 py-2 rounded-lg flex items-center gap-2 active:scale-95 transition-transform"
                >
                  Book via MoMo
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-surface rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-surface-variant overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB86yAB67P9CNAsw7em_ELeWlkDGo4Hb3EO02ZsCBehR9oD9uPPUYbn2CdY0atRcRDlUd31-C5Eg_0gDvqoIM7FXJ_miJnafbbG8gFahJawK9tL86PrnsdVcUsPiPo7D725ZeUJ9KlD0FSOHuL6rsVam9TVYXkshJVipagKmgasZYtzzwuTT3E-mxphrzsg3S_X8Xjq-3AJqdvg-yYsMksECihSblSxSgcxZnDOa7IhrHcOWnaTJCHILddKgo5PBfIasglWcvK9ag7r"
                alt="Elena Silva"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-outline-variant">
                <span
                  className="material-symbols-outlined text-secondary text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-label-caps text-label-caps text-on-surface">Verified Pro</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-title-md text-title-md text-on-surface">Elena Silva</h4>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span className="font-label-caps text-label-caps">ZA</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">
                Rehabilitation Fitness Expert
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-variant">
                <div className="flex flex-col">
                  <span className="font-label-caps text-[10px] text-on-surface-variant">
                    Per Session
                  </span>
                  <span className="font-title-md text-title-md text-secondary">FCFA 20,000</span>
                </div>
                <Link
                  href="/services/booking/9"
                  className="bg-secondary text-on-secondary font-title-md text-body-sm px-4 py-2 rounded-lg flex items-center gap-2 active:scale-95 transition-transform"
                >
                  Book via MoMo
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>


    </div>
  );
}
