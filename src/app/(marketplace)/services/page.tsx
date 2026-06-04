'use client';

import React from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'professional',
    title: 'Professional Services',
    description: 'Legal, Accounting, Consulting',
    icon: 'work',
    href: '/services/professional',
    // Corporate meeting room — from services-marketplace-hub
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWlhHx1mBLSO90PPmYh3eztREaA_krYuCDfg6c-RasDLKICasCgnT824rAywmmfC4fmFgiJTRlLkRgVTk731GgqET8Aun_pa4jIod-1zuVDfKmPotgAcdhxhPk6OS1UIHLJHcVaCw7XeME972bpbcA9fSohDlc7v4m9sJSAGlZhgZZFUEWxtN515oq9UynGcsf1bJSi5A6orXHf94WKJgUVpjHvV6wmLfRO5IRwu_xLYi2guntGthZ9PgNesbKG2PVDNyuBbD6OMxZ',
  },
  {
    id: 'home-property',
    title: 'Home & Property',
    description: 'Plumbing, Electrical, Cleaning',
    icon: 'home_repair_service',
    href: '/services/home-property',
    // Professional plumber in uniform — from home-property-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvXNUO0bSdkgAgrxaeWfIB8ErnRnj1ALlHSYzPvYvsVp9C4KHnXNZ1VJ2PKA8xYMimFnaNX6VGibo6CFLXfW8p2nnP3vR9kwEIEAv0QRBngxjxPM4MC_QnaEftq_-hd4smsX4NhXVhewOs0IaI0an_BIe9MA6j2mg9lzClSAOAbwKglYLmy3SN9spOBYEKr4fjKrvzpsAqZiFPkxAxJwlO2qx5Lj_wGK3fc9IAz5EprrcXBje6OxRrrOoycS1khk783-LhAWtefu88',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Mechanics, Detailing',
    icon: 'directions_car',
    href: '/services/automotive',
    // Mechanic inspecting a car engine — from automotive-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHSuifZ5hzGlzYS_-QOq6KNbtdRSsu61ajMv86-TSZbzPcUgB3WunmC1C9X0TYG-NEWgpmXX2eXt7zIUa5CYzrW0ZcturWMZSjME8CDbIpOCxvXA-V7JkdR8_q14QQGTg0KEe6n9lUGGDNs1tvyxRxhCsp_wLpXjmcCB0hIxQIkgbTVcY5gBDipUo1INUOM9t1Nxir7rXvtpAotBocUZaNAcqlw70XxrVG9FheNw9sON8NK1shodHCsymYS13zyNpwEcj72Y136ga2',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Tutors, Training',
    icon: 'school',
    href: '/services/education',
    // Teacher at whiteboard in classroom — from education-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAi9shFPmONX-KOWaUwfTeKzcud3SFiuAAYoqWewOShyZ4Y6tWDZWfgnQ8o7OpQqONHeEvAQZ4CnnJKsMVbjVBPgxXb7WYZtOL-vD7eCSMbA0OLjBciEK-zBWVSp_kM6KpCYsbB02lp04_mqKFSwLpXLwNjzAKb4dul1bv5lNfAcQQ0YLSm47ANfpTSdLoAlqjD1_F_Bn-SSyuJje-hhMCKdhRUdDWdbLEnlAfA5KjjJFBKHnHvQVGD-anfPQupbrmiaxEnNI3tFWhp',
  },
  {
    id: 'digital',
    title: 'Digital Services',
    description: 'Web, Design, IT Support',
    icon: 'memory',
    href: '/services/digital',
    // Multi-monitor web dev workspace — from digital-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiNb0p2bc3n7GUrry_4-ukzSpyiALvyNANV9KVU9UTIeXu93TFzaFceUeTrbJcl4p7i6eJe31GP3zF22lrPC9dH6fGHpqQhE1AziYnFEJbQFkXDxVasvdnYSFwJwCUXGZMR6GV6xB3BOXvy8QJEfAcaoFE4Blah4_Ck8b7l6_ecDDrJEb3e-FvYj8DD_ZbWZCgjSCxkrfF2bjKo_6Imyp0P3sQWFWMoJp5CpYIcQkmTM1a2C6aRo5KrngIlsZvtr1HpeFYmpfXbLGI',
  },
  {
    id: 'agricultural',
    title: 'Agriculture',
    description: 'Farming, Equipment',
    icon: 'agriculture',
    href: '/services/agricultural',
    // Red tractor plowing sunlit field — from agricultural-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKXfNERTJIukTUSbkJ6GfIO61SajdNZZAq8E345Rkr2sK48B21qbp7lDcHmhUmXkn_k9iTQaeSw5HzqQNqKEMDeLrnKFwKICCYY7br2TRyCKISOTVo9JIyEanoqeZi8puw_HOrUFaRpjG7FB1V9E1m7vXpriHgVAGXKyVexDspPYmcxuAqi42TC5pC38NKO8Avm39D5ONHbpR-8678J_7dMuT-7HtdhBdag0CUB0FlRMFOj6-3ok8noLfuknoarVGTFoN1JZ3WIeON',
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    description: 'Fitness, Therapy',
    icon: 'favorite',
    href: '/services/health-wellness',
    // Physiotherapy clinic — from health-wellness-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANywRsBXva1F0Dfw9ZYLYDVoFIwt04TCIbGs4WpurW3DNBxmX-cBSGDUh6r_zLsPYhHaCPM_lIQv39jmt6K-7nGdqBHvfzwmxNnB_DaDC7RcUOUDlBcC73X1ZTCYCcL86mYv7PFLz42JJ0eq3Bfj6_Lsz8qzVl-uIEPAwNnOyBgDTMQmwt13Y_4hPSYfR9W3huMfB7gG0Uj9UqGyqC6OJjVV11wlzRs-i5iW5fIP4hd7OzRWoU3cIKC1MSrPCkb41DjgQzTsGdibKe',
  },
  {
    id: 'beauty-care',
    title: 'Beauty & Care',
    description: 'Stylists, Barbers, Wellness',
    icon: 'spa',
    href: '/services/beauty-care',
    // Bridal makeup close-up — from beauty-care-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiVO7cSt9DlpjtDFbiGgi06xDgpFrL9T8cMSS_Ovz6qhIb7Rq6-FNejgDM02ia8zu6D1A_M-eQ1b-xae2zJsdjW6w7oHbeGlStuW-VsYBqhArNID5N1gfegsmhZnz5PmMHhlrae5-lJHRCtOciw_hGxeup4zHSEA4NJmv5Sns_49PjC391gQrHVHXoU8bgCoPdVsLADsqJ3xOtsL2_dceT5vHcVYp4LnByQVdGZj0iVaLTpmxip3v4OGveaP3_sZEFsPgyA5evsdPc',
  },
  {
    id: 'events',
    title: 'Event Services',
    description: 'Catering, Venues, Photography',
    icon: 'celebration',
    href: '/services/events',
    // Grand ballroom event setup — from event-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFykVEQPCDpFkV2e8vCMRJSwVVyYL-DrymwattcBm-1xrmZ14NYNOQSt595me0nPoICrASwF4oYdbPm2YqAjXlAjJlRzrnNhpr8P063WSvg9hfVJuQwxJzdxhlsKRCaE-MiEO4AMoHtDTSepWfu6OmEF3axokuSE9fZtAc_MTGz3GDa5zBh25C2R_yXcBcS7NRIkaxIW1cKQ6M_3swxkoXkzKcXtKjwC17aTV0-y_2at203bzkdnXBYqOwbI-5usjM8W99-wtwmuKX',
  },
  {
    id: 'logistics',
    title: 'Logistics & Delivery',
    description: 'Couriers, Moving, Freight',
    icon: 'local_shipping',
    href: '/services/logistics',
    // City route tracking map — from logistics-delivery-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8uTpw-g72QkSlw3QH7ZQqMwy4QTgaN-zgrai7gOmoARRxtyFEkkYuOM-wrZkMDPfi2S2iqdBJ1KlxoWbtG_ffSZ3ohDYEfr-JJbdiWs9OaUc-ozRNkMjXkwJ20q88eyG7bKt0m5WQf9Le5kAQL-toy8cldiMAfVZUfbJ-LNgIEeLrTtEm9MvTtBz2_k7a8SxMcBOSD9zxZLG30sTF-3VTx6OHOA3zswP64EyPi4vc97yIgX_PvvT5WlN2QEeAK5Ok0CotefMVbzR',
  },
  {
    id: 'domestic',
    title: 'Domestic Services',
    description: 'Nannies, Cooks, Cleaners',
    icon: 'cleaning_services',
    href: '/services/domestic',
    // Professional house cleaner in branded uniform — from domestic-listings
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANbOGfnZeanbXMGzZ1MwuYDyxQgIQ0BNN_IH60mGgD2xkpbDlGLqVKzHenLsOX-fZSP7QbqkNOncE-wo3m1R3yQ4BtQYoY7WXg3VBpVuRC8_nVZQ6-Sh1u_UF_aWOL4Y-ZcZ5ie6nilr5Od4uVRFHqfcV_sCVqdUHTVY0ZAQR0vyc33G9dTfZJxBFXPqNr3g4W10nGm8krN-z66ZbCVOMeOqdIrU-480nPP2RImg7-Wunaq4vrld82z9_7GMVNLTEcXXaMzGbSC7ow',
  },
];

export default function ServicesMarketplaceHub() {
  return (
    <div className="bg-background text-on-surface font-body-lg antialiased min-h-screen">
      <main className="w-full max-w-[1280px] mx-auto px-container-margin-mobile md:px-container-margin-desktop py-4">
        {/* Hero Search Section */}
        <section className="mb-6">
          <div className="w-full bg-surface-container rounded-2xl p-4 md:p-12 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-container/30 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container/20 rounded-full blur-[40px] -ml-24 -mb-24 pointer-events-none" />
            <h1 className="font-display-lg text-xl text-on-surface mb-4 z-10">
              Find trusted services instantly.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl z-10">
              Connect with verified professionals, skilled artisans, and premium service providers
              in your area.
            </p>
            <div className="w-full max-w-3xl relative z-10 flex flex-col md:flex-row gap-2 md:gap-0 bg-surface rounded-2xl md:rounded-full p-2 shadow-[0px_4px_24px_rgba(0,0,0,0.08)]">
              <div className="flex-1 flex items-center px-4 bg-surface-container-low md:bg-transparent rounded-full md:rounded-none">
                <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-lg placeholder-on-surface-variant/60 py-3 md:py-4"
                  placeholder="What service do you need?"
                  type="text"
                />
              </div>
              <div className="w-px h-8 bg-outline-variant hidden md:block self-center mx-2" />
              <div className="flex-1 flex items-center px-4 bg-surface-container-low md:bg-transparent rounded-full md:rounded-none">
                <span className="material-symbols-outlined text-on-surface-variant mr-3">location_on</span>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-lg placeholder-on-surface-variant/60 py-3 md:py-4"
                  placeholder="Your Location"
                  type="text"
                />
              </div>
              <button className="bg-primary-container text-on-primary-container font-title-md text-title-md py-2 md:py-4 px-8 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center whitespace-nowrap w-full md:w-auto mt-2 md:mt-0">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="mb-6">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4">
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter auto-rows-[160px] md:auto-rows-[200px]">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${category.image}')` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-4">
                  <span
                    className="material-symbols-outlined text-primary-fixed mb-1 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {category.icon}
                  </span>
                  <h3 className="font-title-md text-md text-white leading-tight">
                    {category.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-white/75 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
