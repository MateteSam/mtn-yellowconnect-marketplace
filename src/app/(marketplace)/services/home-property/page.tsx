'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePropertyServicesListings() {
  return (
    <div className="bg-background text-on-background font-body-sm antialiased min-h-screen">


      <main className="max-w-7xl mx-auto md:px-container-margin-desktop w-full">
        {/* Search & Filter Bar */}
        <section className="px-container-margin-mobile md:px-0 py-6">
          <div className="flex flex-col gap-4">
            <div className="relative w-full shadow-sm rounded-[16px] overflow-hidden">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-on-surface-variant">search</span>
              </div>
              <input
                className="block w-full pl-10 pr-24 py-4 bg-surface-container-low border-0 text-on-surface focus:ring-2 focus:ring-secondary focus:bg-surface transition-all rounded-[16px] font-body-lg"
                placeholder="Find plumbers, electricians..."
                type="text"
              />
              <button className="absolute inset-y-1 right-1 bg-primary text-on-primary-fixed-variant font-title-md font-bold px-4 rounded-[12px] hover:bg-primary-fixed transition-colors active:scale-95">
                Search
              </button>
            </div>
            {/* Horizontal Category Scroll */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full whitespace-nowrap text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors font-body-sm font-semibold shadow-sm">
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Filters
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-full whitespace-nowrap font-body-sm font-bold border border-primary-container shadow-sm active:scale-95 transition-transform">
                All Services
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full whitespace-nowrap text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors font-body-sm">
                Plumbers
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full whitespace-nowrap text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors font-body-sm">
                Electricians
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full whitespace-nowrap text-on-surface border border-outline-variant hover:bg-surface-container-high transition-colors font-body-sm">
                Solar Installers
              </button>
            </div>
            {/* Map Toggle */}
            <div className="flex items-center justify-between bg-surface-container-low p-3 rounded-lg border border-surface-variant">
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined">location_on</span>
                <span className="font-body-sm font-semibold">Show nearby providers on map</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" value="" />
                <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
          </div>
        </section>

        {/* MoMo Booking Notice */}
        <section className="px-container-margin-mobile md:px-0 mb-8">
          <div className="bg-secondary-fixed rounded-xl p-4 flex items-start gap-4 shadow-sm border border-secondary-fixed-dim">
            <div className="bg-secondary text-on-secondary p-2 rounded-full flex-shrink-0">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <div>
              <h3 className="font-title-md text-on-secondary-fixed-variant mb-1">
                MoMo Booking Fee Required
              </h3>
              <p className="font-body-sm text-on-surface-variant">
                A nominal travel fee must be secured via Mobile Money before dispatch to guarantee
                provider arrival. This amount is deducted from your final bill.
              </p>
            </div>
          </div>
        </section>

        {/* Service Providers Grid */}
        <section className="px-container-margin-mobile md:px-0 mb-12">
          <h2 className="font-title-md text-title-md mb-4 text-on-surface">
            Top Rated in Your Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Provider Card 1: Plumber (AI Enhanced) */}
            <div className="bg-surface rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-variant flex flex-col relative">
              <div className="absolute top-3 right-3 bg-gradient-to-r from-secondary to-tertiary text-white px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-sm">
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                <span className="font-label-caps text-label-caps">AI MATCHED</span>
              </div>
              <div className="h-48 w-full bg-surface-container relative">
                <img
                  alt="Professional plumber"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvXNUO0bSdkgAgrxaeWfIB8ErnRnj1ALlHSYzPvYvsVp9C4KHnXNZ1VJ2PKA8xYMimFnaNX6VGibo6CFLXfW8p2nnP3vR9kwEIEAv0QRBngxjxPM4MC_QnaEftq_-hd4smsX4NhXVhewOs0IaI0an_BIe9MA6j2mg9lzClSAOAbwKglYLmy3SN9spOBYEKr4fjKrvzpsAqZiFPkxAxJwlO2qx5Lj_wGK3fc9IAz5EprrcXBje6OxRrrOoycS1khk783-LhAWtefu88"
                />
                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-[#f1c100]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-body-sm font-bold">4.9</span>
                  <span className="font-body-sm text-on-surface-variant">(124)</span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-title-md text-on-surface">Samuel K. Mensah</h3>
                    <p className="font-body-sm text-secondary font-semibold">Master Plumber</p>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded border border-outline-variant">
                    <span className="text-[16px]">🇬🇭</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      GH
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>
                    Avg. Response: <strong>Under 30 mins</strong>
                  </span>
                </div>
                <div className="mt-auto pt-4 border-t border-surface-variant flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      BASE CALLOUT
                    </span>
                    <span className="font-title-md text-secondary">GHS 150</span>
                  </div>
                  <Link
                    href="/services/booking/4"
                    className="bg-primary text-on-primary-fixed-variant font-title-md font-bold px-6 py-2 rounded-lg hover:bg-primary-fixed active:scale-95 transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Provider Card 2: Electrician */}
            <div className="bg-surface rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-variant flex flex-col relative group">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden">
                <img
                  alt="Electrician"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSrAD_qdC5ZIxQJqf1tGM-39vqTX4LOFajllJvz3yzzVQF7oYQt0KHQ5wwbhom11H819SPRp_oXYMFEhgqizAUJytPm_RWgQklQHOpWuU6OnIUdqf032eYLCWKw7809vdWvVTXB3T0TMZP0QPbXNveTodx7okwgXMlfzLT7bUrLbD7TmX9dy8G7RK4HQ5OnsOmgyn7W7ba2Wsa87JYEULOj7GrDB2IdMu158_ekXqPyGJN5Pe_RE9payYtNFQfn2ylKcq2R5hK6atE"
                />
                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-[#f1c100]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-body-sm font-bold">4.7</span>
                  <span className="font-body-sm text-on-surface-variant">(89)</span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-title-md text-on-surface">Elena Osei</h3>
                    <p className="font-body-sm text-secondary font-semibold">
                      Certified Electrician
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded border border-outline-variant">
                    <span className="text-[16px]">🇬🇭</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      GH
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>
                    Avg. Response: <strong>45 mins</strong>
                  </span>
                </div>
                <div className="mt-auto pt-4 border-t border-surface-variant flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      BASE CALLOUT
                    </span>
                    <span className="font-title-md text-secondary">GHS 200</span>
                  </div>
                  <Link
                    href="/services/booking/5"
                    className="bg-primary text-on-primary-fixed-variant font-title-md font-bold px-6 py-2 rounded-lg hover:bg-primary-fixed active:scale-95 transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Provider Card 3: Solar */}
            <div className="bg-surface rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-variant flex flex-col relative group border border-primary-container/30">
              <div className="h-48 w-full bg-surface-container relative overflow-hidden">
                <img
                  alt="Solar installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyIr2x9kJqJMho6DfYGazaOtfqv8ZoyhRd6XkHtEN38rrO-SWAHBoBCVIL-g1zMKNXna9CPUZqp8s366yw6Lh-1cxB_dyj307Rf0WkLZZ2cS4DxnFFQdfSrwYntgP6dcrvEweLggmQ5qEMbzBM-3e6RrOcGrHg-I5c6ukR5ZxpRqVNY8nUTX5NrTty3YtOpRXizDoabkotXrjqZsLKmAlo9nE3Pd2nO1RpK9nCJda5Vx9Kn5YNWB9__AOgDXgJvKfWZn-gcRFOtKr2"
                />
                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-[#f1c100]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-body-sm font-bold">5.0</span>
                  <span className="font-body-sm text-on-surface-variant">(42)</span>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-title-md text-on-surface">SunPower Techs</h3>
                    <p className="font-body-sm text-secondary font-semibold">Solar Installation</p>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded border border-outline-variant">
                    <span className="text-[16px]">🇬🇭</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      GH
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4 text-on-surface-variant font-body-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span>
                    Avg. Response: <strong>Next Day</strong>
                  </span>
                </div>
                <div className="mt-auto pt-4 border-t border-surface-variant flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      CONSULTATION
                    </span>
                    <span className="font-title-md text-secondary">Free</span>
                  </div>
                  <Link
                    href="/services/booking/6"
                    className="bg-primary text-on-primary-fixed-variant font-title-md font-bold px-6 py-2 rounded-lg hover:bg-primary-fixed active:scale-95 transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}
