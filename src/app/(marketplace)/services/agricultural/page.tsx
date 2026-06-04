'use client';

import React from 'react';
import Link from 'next/link';

export default function AgriculturalServicesListings() {
  return (
    <div className="bg-background text-on-background antialiased font-body-sm min-h-screen">


      {/* Main Content */}
      <main className="py-6 px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto space-y-section-gap">
        {/* Search & Filters */}
        <section className="space-y-4">
          <div className="relative">
            <input
              className="w-full bg-surface-container-low border border-outline-variant rounded-[16px] py-4 pl-4 pr-32 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-body-lg shadow-sm"
              placeholder="Search services..."
              type="text"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary text-on-primary-fixed-variant px-6 rounded-lg font-title-md flex items-center gap-2 hover:bg-primary-fixed-dim transition-colors">
              <span className="material-symbols-outlined">search</span>
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex-shrink-0 bg-primary-container text-on-primary-container font-label-caps text-label-caps px-4 py-2 rounded-full border border-primary-container">
              All Services
            </button>
            <button className="flex-shrink-0 bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
              Tractor Hire
            </button>
            <button className="flex-shrink-0 bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
              Veterinary
            </button>
            <button className="flex-shrink-0 bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
              Agronomist
            </button>
            <div className="w-px h-6 bg-outline-variant self-center mx-2"></div>
            <button className="flex-shrink-0 flex items-center gap-1 bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Urban
            </button>
            <button className="flex-shrink-0 flex items-center gap-1 bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[16px]">map</span>
              Rural
            </button>
          </div>
        </section>

        {/* Payment Highlight */}
        <div className="bg-white/80 backdrop-blur-xl border border-primary-container/30 p-4 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary-fixed-variant">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                payments
              </span>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">Pay securely with MoMo</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                0% booking fees for agricultural services this month.
              </p>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Listing 1 */}
          <article className="bg-surface rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-dim hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-48 bg-surface-container-highest">
              <img
                alt="Tractor in field"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKXfNERTJIukTUSbkJ6GfIO61SajdNZZAq8E345Rkr2sK48B21qbp7lDcHmhUmXkn_k9iTQaeSw5HzqQNqKEMDeLrnKFwKICCYY7br2TRyCKISOTVo9JIyEanoqeZi8puw_HOrUFaRpjG7FB1V9E1m7vXpriHgVAGXKyVexDspPYmcxuAqi42TC5pC38NKO8Avm39D5ONHbpR-8678J_7dMuT-7HtdhBdag0CUB0FlRMFOj6-3ok8noLfuknoarVGTFoN1JZ3WIeON"
              />
              <div className="absolute top-3 left-3 bg-tertiary text-on-tertiary px-2 py-1 rounded font-label-caps text-label-caps flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Verified Pro
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-title-md text-title-md text-on-surface">
                  Heavy Duty Tractor Plowing
                </h2>
                <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                  <span
                    className="material-symbols-outlined text-[16px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-title-md text-body-sm font-bold">4.8</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Complete field preparation services. Experienced operators covering rural sectors.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-bold">
                    R450
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/acre</span>
                </div>
                <Link
                  href="/services/booking/1"
                  className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-title-md text-body-sm hover:bg-on-secondary-fixed-variant transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </article>

          {/* Listing 2 */}
          <article className="bg-surface rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-dim hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-48 bg-surface-container-highest">
              <img
                alt="Veterinarian with cow"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwxuB5q0_prw90ZVaE9P8WxnEBNY6Hdr86x-tqwTtv_oipjVixZsIq_u2anp7yS3dkdXOTduksn76uam38J9IWM0R9uLlzKyImFuvh9xtOG4TVKwf0FczriuGjt99YDcFI2NEXVVCWWhSW5w0G5lV1s6-5r0N0W-pV-6ANqPhTI9Y_wh_Vm_XzxK45AMlq6n4IznbAenlz2bBq9kzJ33PlcJkdK6reNOz4oZFv-G4ZMTD3WG-m34QyGxWHSgwWLkGGuFuJq3nCnWav"
              />
              <div className="absolute top-3 left-3 bg-tertiary text-on-tertiary px-2 py-1 rounded font-label-caps text-label-caps flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Verified Pro
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-title-md text-title-md text-on-surface">
                  Livestock Health Consult
                </h2>
                <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                  <span
                    className="material-symbols-outlined text-[16px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-title-md text-body-sm font-bold">4.9</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                On-site veterinary checks, vaccinations, and emergency care for cattle and sheep.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-bold">
                    R850
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/session</span>
                </div>
                <Link
                  href="/services/booking/2"
                  className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-title-md text-body-sm hover:bg-on-secondary-fixed-variant transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </article>

          {/* Listing 3 (AI Enhanced Example) */}
          <article className="bg-white/80 backdrop-blur-xl rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-md transition-shadow flex flex-col relative border border-primary-container/30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-tertiary-container z-10"></div>
            <div className="relative h-48 bg-surface-container-highest">
              <img
                alt="Agronomist in field"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7GePI8jazHrpeKRx-ynFrRh_5HRyfWtqsREOlPgCbvfeENxeZNLwBfL409S7Qx1LBiybGKim2sLkDuM7VeYMXIeOTYrwDVMGQqvDHP5Dsc72mLMmZpOousFWvkGGrbsUTuOZV86stZ-dqCdj9dpIAUASkG36AhE3yAl32XyhmxlrozJwG1a3pbBrkSF5i5-wy-qAZcm4bvm-RYkHMOTUnEdbbhv7sr5h2kvApUufiJ0_gr9dX3dUnt49T_8x4Dhgz7H9e4KLp5Tcb"
              />
              <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur text-secondary px-2 py-1 rounded font-label-caps text-label-caps flex items-center gap-1 border border-secondary/20">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                AI Recommended
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-title-md text-title-md text-on-surface">Soil & Crop Analysis</h2>
                <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                  <span
                    className="material-symbols-outlined text-[16px] text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-title-md text-body-sm font-bold">5.0</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Data-driven agronomist consultation. Optimize yield with precision farming insights.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-bold">
                    R1200
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/consult</span>
                </div>
                <Link
                  href="/services/booking/3"
                  className="bg-gradient-to-r from-secondary to-[#6b21a8] text-white px-4 py-2 rounded-lg font-title-md text-body-sm hover:opacity-90 transition-opacity flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  Book Now
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>


    </div>
  );
}
