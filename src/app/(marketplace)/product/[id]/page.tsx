"use client";

export const runtime = 'edge';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const DEFAULT_PRODUCT = {
  id: 'ultravision-pro-5g',
  name: 'UltraVision Pro 5G',
  usdPrice: '$1,299',
  kesPrice: 'KES 175,000',
  location: 'Nairobi, Kenya',
  images: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAdNuKGJ9F7haTa9Lnjp6Y7oG-QeYLq5JCTk2acERViDJIm2IwBAyWtKULupeVHHs9GCM_5L1NNaPsI4GPAWQ2a0ohoy6RNXWkPCSmRpOdhgYzCxlI0lIB1j_w90YWNp13Ch0dwjhlQyQWEYTU0Wt5INrqWQlHVbQ5ddXf_49fbmj_c-g41XznBQkxEvqGjaYlITaETyHiEg1T1VSesYstPMRP-tNZ_ADiMlr6rSjbxAH28POonGklhirJoWQwoXTzAfJS9iZQUDuA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBibRrDuJhe1VCM_fpWFqqhgenNZZXLwKpWqjHlBSpYvf7MipgIQ1CVX25qoe84IampLLtXqQ0pupRqwYif_jMSMqpjI5slLuTzHAm1ggnCNRZdt4hpoBYQFUP8XAs7wHlbPP-SitXpikjrFXMMIt6jnIBWoaISFVrhwJECApOZdESyoOv8awAwtFP3G9-fef5YXB6N9Fz5lylCEnrcukZJNZ15IE6_OWEx5KLc8uuCImnH69IeTab7b6psYIeiS4PUNiA1fI5mtTY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCbqNe3CMUntsIrAHK68Yn4bKFR1uaf_q6rlAq1WnuXa1nIcDfqF-A3yMd0H80YEUZUfMhm92bfbe2IETXvnVB-1rvtmdMyJ5Bh5umZHFW8OMP9P87y6XXBgYyDdoCZkcPw_R5gvCbIWEJo2JHuYoTf6E_1JndfZNEP0nHL8wTFyDyrXdZ5cub90rVLBeXJSfb2lBpIayJhehxT4zDiAViytghJjJPvnMhmHMyD3iKuCq6qpqouKEVn5iLZZGeSX2VZfBfI85bVLdU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBAiNbBec5ExU0jTMqYED6wIEFVu5E8-gLjgfofjI60l6oi4AQ_VkyvVLHsYaIlqE365_wPC5IE74I8IJNU6FqtXzauyy4YZPYknvzoUEZ5YW44FwceGVO8uwrNMxpddwu7opqhJOSsyGBxQ2ulQNlQ3n2-pxFqqZMOf1OGsWF6wfugpp81GIL67WXHSrhqfDuWhooxO01tLskJcgr6YVG6ZrA4kT1Rcd2-cOSrAUwmjqqQYC0AG04jjudYry3mJH4RqRys6K4BoXQ',
  ],
  seller: {
    name: 'David M.',
    rating: '4.8',
    joined: '2 years ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-obA7DjGPlqgd2MI76YmlD7N1Tpfs3RZDcOCOakCVB-xo9Nr4xQ9iB1ZQejxpK8AnfnSv2KQPSrYIy0MaioQoZyErBaXQ1XKQydM5LiqWf3tvzmHCXGzauYJVIyCbBVKdn4s-9YGv_Q28L3w8KgWOggdcr4qjoxf-swxH6XzisRbEtHnyU9hblTxNM5I6CHRlhD_NaHAqxjUUiROV9eMTiRnvAGWwS-ZLN7X2sgThSyLTybD_0Vtgg-USzqEOG0IthH2R-l0BcNA'
  },
  specs: [
    { icon: 'smartphone', label: 'Display', val: '6.8" OLED, 120Hz' },
    { icon: 'memory', label: 'Storage', val: '256GB / 12GB RAM' },
    { icon: 'photo_camera', label: 'Camera', val: '108MP Main + 12MP UW' },
    { icon: 'battery_charging_full', label: 'Battery', val: '5000mAh, 65W Fast' },
  ]
};

const PRODUCTS_DB: Record<string, typeof DEFAULT_PRODUCT> = {
  'macbook-pro-m2-2023': {
    id: 'macbook-pro-m2-2023',
    name: 'MacBook Pro M2 2023',
    usdPrice: '₦ 1,850,000',
    kesPrice: 'approx. $1,250 USD',
    location: 'Ikeja, Lagos',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUY3jjiw2_wYR_bfUFgeWuY2tZUodVYCRRpiBrVS2828IHI1fGnMFC_e_2Z4YAnLrmlIpHtwuEcyIz2aTEIRKq8WjaYscY6valyjPIQ_DKrlPwdKXkrKLtgFtXVzUpAKVzgrlx5wtTImaumcv3nE6RCkc4_Wm479KfkpgVcQmU6njLaqZptPKzIzFWrTXBVw7OqiMkZdHSUF3tdnJWB1GQ0Q31xm8ma-dXqqfB3gmeKpc_Yb9Xtfn7y_iwr_484J4-xX3173GH8gA',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
    ],
    seller: {
      name: 'Adebayo O.',
      rating: '4.9',
      joined: '1 year ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'memory', label: 'Processor', val: 'Apple M2 Pro Chip' },
      { icon: 'analytics', label: 'RAM', val: '16GB Unified Memory' },
      { icon: 'hard_drive', label: 'Storage', val: '512GB SSD' },
      { icon: 'laptop_mac', label: 'Screen', val: '14.2" Liquid Retina XDR' },
    ],
  },
  'toyota-camry-2018-le': {
    id: 'toyota-camry-2018-le',
    name: 'Toyota Camry 2018 LE',
    usdPrice: '₦ 12,500,000',
    kesPrice: 'approx. $8,500 USD',
    location: 'Victoria Island, Lagos',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqUyJ-H0EjGhomf5baFPQ0QiSxi8D0Zxhk7iQCu6kQC4kSQ3wA7n46RTZud0nLlhcWODooxj9pLdXdDBLfkM8HJNwdNuNrYN3MuBNHuZ8FUwwcXr36iK1KzQndmPUh8UtXtQ7CdQKhPfFQ88APoY2Cqq4sYYVRZBJ0e3BsvY_VBFSuheGwJwGa_CALlz8C3-MrkzJsUpBsp7iMxgXruqk4w538blwnlVf4qgXc8XPRYwN36oARCwInnEIsdI1RCWHWqK21H0Kmgdw',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=600',
    ],
    seller: {
      name: 'Chidi K.',
      rating: '4.7',
      joined: '3 years ago',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'directions_car', label: 'Engine', val: '2.5L 4-Cylinder' },
      { icon: 'speed', label: 'Mileage', val: '45,000 km' },
      { icon: 'settings', label: 'Transmission', val: '8-Speed Automatic' },
      { icon: 'local_gas_station', label: 'Fuel Type', val: 'Petrol' },
    ],
  },
  '3-bed-semi-detached': {
    id: '3-bed-semi-detached',
    name: '3 Bed Semi-Detached Duplex',
    usdPrice: '₦ 4,500,000/yr',
    kesPrice: 'approx. $3,000 USD/yr',
    location: 'Lekki Phase 1, Lagos',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUoJFywGogYjeMv1XVQpSIHrHzi9v-hwKLOEhsGmABiuVapL_8Ho14SPusQr4w82o9BRGuZgWD4AGslMznJMgJWwNGrRrHRmtMTJKIClO1RRMeET87hL7mLVLFL6AQRAMCCS8ci9agIERvnjH7JAqUOymc9mwH_6Ob8oWLitvNFzXH5mhASuSL9rpG3lwQr44RwYLc8Z8HY3xbo5HkiiwylANzY3Wpl44-AVPltrLunjcDhKmbpt7TFcxcxaHgy9lOY1pzfJJQ6-M',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600',
    ],
    seller: {
      name: 'Luxe Properties',
      rating: '4.9',
      joined: '4 years ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'bed', label: 'Bedrooms', val: '3 Beds' },
      { icon: 'bathtub', label: 'Bathrooms', val: '3.5 Baths' },
      { icon: 'home', label: 'Property Type', val: 'Semi-Detached Duplex' },
      { icon: 'grid_view', label: 'Size', val: '320 sqm' },
    ],
  },
  'iphone-15-pro-max': {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    usdPrice: '₦ 950,000',
    kesPrice: 'approx. $640 USD',
    location: 'Surulere, Lagos',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=600',
    ],
    seller: {
      name: 'David M.',
      rating: '4.8',
      joined: '2 years ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-obA7DjGPlqgd2MI76YmlD7N1Tpfs3RZDcOCOakCVB-xo9Nr4xQ9iB1ZQejxpK8AnfnSv2KQPSrYIy0MaioQoZyErBaXQ1XKQydM5LiqWf3tvzmHCXGzauYJVIyCbBVKdn4s-9YGv_Q28L3w8KgWOggdcr4qjoxf-swxH6XzisRbEtHnyU9hblTxNM5I6CHRlhD_NaHAqxjUUiROV9eMTiRnvAGWwS-ZLN7X2sgThSyLTybD_0Vtgg-USzqEOG0IthH2R-l0BcNA',
    },
    specs: [
      { icon: 'smartphone', label: 'Display', val: '6.7" Super Retina XDR' },
      { icon: 'memory', label: 'Storage', val: '256GB / 8GB RAM' },
      { icon: 'photo_camera', label: 'Camera', val: '48MP Main + 12MP UW + 12MP Tele' },
      { icon: 'battery_charging_full', label: 'Battery', val: '4441mAh, 20W Charging' },
    ],
  },
  'solar-irrigation-hub': {
    id: 'solar-irrigation-hub',
    name: 'Solar Irrigation Hub',
    usdPrice: '₦ 450,000',
    kesPrice: 'approx. $300 USD',
    location: 'Nairobi, Kenya',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OJ_4TT4lWQbTG0r9NoPWnk-ix3VtxTJempO33Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600',
    ],
    seller: {
      name: 'AgriTech Solutions',
      rating: '4.9',
      joined: '5 years ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'solar_power', label: 'Power Source', val: '300W Solar Panels' },
      { icon: 'water_drop', label: 'Flow Rate', val: '2,500 Liters/Hour' },
      { icon: 'settings', label: 'Pressure', val: 'Max 3.5 Bar' },
      { icon: 'electric_bolt', label: 'Battery', val: 'Lithium-ion Backup' },
    ],
  },
  'nova-9-se': {
    id: 'nova-9-se',
    name: 'Nova 9 SE',
    usdPrice: '$450',
    kesPrice: 'approx. ₦ 300,000',
    location: 'Nearby',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDB7Sid-pYaismy4CTfKfNmOpOOCN_DX93vKr7w53QLk-S7792TYTUnUftNoeUiDpNtP2IKI62EM3iHQgh7sSbuvMkR67npsHFr7jkpQjqWEPuBEB9nS3ySd_9O4Uo_U1qE-HeEjQUgyVF-MMpckTqsb9naRiIl1-ADyFvsDoyJJtPzj5z4aqczN32l1S0zjFsXRTNRRLUhN6skmkXKqrRTgiT_xDy-I7d6vJW7a7Mhcs0NgSBQTUVAyPvOLqVJWZVQFWQ1mdlWgZA',
    ],
    seller: {
      name: 'Huawei Hub',
      rating: '4.8',
      joined: '1 year ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'smartphone', label: 'Display', val: '6.78" IPS LCD, 90Hz' },
      { icon: 'memory', label: 'Storage', val: '128GB / 8GB RAM' },
      { icon: 'photo_camera', label: 'Camera', val: '108MP Quad Camera' },
      { icon: 'battery_charging_full', label: 'Battery', val: '4000mAh, 66W Fast' },
    ],
  },
  'pro-lens-kit': {
    id: 'pro-lens-kit',
    name: 'Pro Lens Kit',
    usdPrice: '$120',
    kesPrice: 'approx. ₦ 80,000',
    location: 'Lagos, Nigeria',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABZIko7S0p83g8K52iomVYK3zDoh8R8II0BBeLvV343MKyjrceisGcxrYLGKg3dUrqZJnZeq4beg0jnVJJJKGN1JutGWStcTUVj1FFSD0k_PYtS1p0yKWCaXd49kblVLqO0g6hQE0hgZCJfdb3wTZf2pPtypGPMkaIrZ0OUWGv91xeCAMwLYn5tZ0eeC6EkqbpMhwqXkGqfZ07Qom50_5OQnYJRmOwCnuxmPGyVWpUYgBn5FLQsyKtBBfqBMUcekNcR_uUZecRzHk',
    ],
    seller: {
      name: 'Optics Master',
      rating: '4.5',
      joined: '6 months ago',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'photo_camera', label: 'Lenses', val: 'Macro + Wide + Telephoto' },
      { icon: 'construction', label: 'Mount', val: 'Universal Clip-on' },
      { icon: 'verified', label: 'Glass', val: 'Multi-coated HD Glass' },
      { icon: 'cases', label: 'Case', val: 'Hard Travel Case Included' },
    ],
  },
  'ultra-charge-20k': {
    id: 'ultra-charge-20k',
    name: 'Ultra Charge 20k Powerbank',
    usdPrice: '$65',
    kesPrice: 'approx. ₦ 45,000',
    location: 'Fast Ship',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCK3htZdv3YUWPHh4MOLyZGuSZW__w3_5TAhwu7NUce2zSVQB6PzK_xIqy9T6cCDiV89OT9zmPLEoAwVpMFmrYQ5ALrLUbg5fDhkNpGA1tyZxMer_EzV2HzvwLbCS93KmqcNXGZMLDggpxfkcIkDKlmJ4mYHWMAQQS-ChqO6kW0FkEBAUHW4VG_8g99wMqsC1oqeQtbNtcErah6JWTHfahy5AMls-4bnhgUwyiMjcCvkCKC3iO7ZENetZRMRW_mhjBUPCFv4jkNB9s',
    ],
    seller: {
      name: 'Power Store',
      rating: '4.9',
      joined: '2 years ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'battery_charging_full', label: 'Capacity', val: '20,000 mAh' },
      { icon: 'electric_bolt', label: 'Output', val: '22.5W Max Fast Charge' },
      { icon: 'input', label: 'Ports', val: '2x USB-A, 1x USB-C PD' },
      { icon: 'speed', label: 'Protocol', val: 'QC 3.0 / PD 3.0' },
    ],
  },
  'armor-case-x': {
    id: 'armor-case-x',
    name: 'Armor Case X',
    usdPrice: '$25',
    kesPrice: 'approx. ₦ 18,000',
    location: 'Accra, Ghana',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArEg7fexKGTmaVcpRb0rfWLEqwWjgxggtrUEF8_GtO06WjPWCjDEw5ESCSIVg-okURdI3xJZ65HHpIfnejQY6kp3as2kO5Nl5ppVBSzJvC8iDdWJ71jsNufXOxZYTEHaMVfjlnOf1L2G3PwWoJ0Av4zMMxc844hc7JTgFKy9aRClsiX5vA6e31mAq5yL0O58YAOS9BgD65QDfawg8NfF7tC4FSwISKPxKtl2WAz_kddpi_7xDptSxzQRygkzCInEv7iy0s4SD-fU0',
    ],
    seller: {
      name: 'Shield Cases',
      rating: '4.6',
      joined: '1 year ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    },
    specs: [
      { icon: 'shield', label: 'Protection', val: 'Military Drop Tested' },
      { icon: 'construction', label: 'Material', val: 'TPU + Polycarbonate' },
      { icon: 'category', label: 'Design', val: 'Slim Profile Tactile Grip' },
      { icon: 'electric_bolt', label: 'MagSafe', val: 'Compatible' },
    ],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.id as string;
  const PRODUCT = PRODUCTS_DB[slug] || DEFAULT_PRODUCT;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface shadow-sm flex items-center justify-between px-4 h-16 border-b border-outline-variant/30">
        <Link
          href="/home"
          className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-surface-container-high transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-bold text-[20px] text-on-surface text-center flex-1 mx-4 truncate">
          Product Details
        </h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-surface-container-high transition-transform active:scale-95">
          <span className="material-symbols-outlined">share</span>
        </button>
      </header>

      <main className="pt-16 max-w-6xl mx-auto w-full pb-10 md:pb-16 flex flex-col md:flex-row gap-8 px-0 md:px-6">
        <div className="flex-1">
          {/* Image Carousel */}
          <section className="relative w-full aspect-square bg-surface-container-lowest overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {PRODUCT.images.map((img, idx) => (
                <div key={idx} className="shrink-0 w-full h-full">
                  <img alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" src={img} />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {PRODUCT.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${activeIndex === idx ? 'bg-primary-container w-4' : 'bg-white/40'
                    }`}
                />
              ))}
            </div>

            {/* Counter Overlay */}
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
              {activeIndex + 1}/{PRODUCT.images.length}
            </div>
          </section>

          {/* Product Header & Pricing */}
          <section className="p-4 mt-2">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-[18px] md:text-[32px] font-bold text-on-surface leading-tight">
                {PRODUCT.name}
              </h2>
              <div className="flex flex-col items-end">
                <span className="text-[18px] md:text-[32px] text-primary font-black">
                  {PRODUCT.usdPrice}
                </span>
                <span className="text-[11px] text-on-surface-variant">
                  {PRODUCT.kesPrice}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
              <span className="text-[14px] text-on-surface-variant">{PRODUCT.location}</span>
            </div>
          </section>

          {/* AI Price Insight Card */}
          <section className="px-4 mb-6">
            <div className="glass-panel rounded-xl p-4 flex items-center justify-between shadow-sm relative overflow-hidden border border-outline-variant/30">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-tertiary"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined sparkle-ai">auto_awesome</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-tertiary uppercase tracking-wider">AI Insight</span>
                    <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold">Fair Market Value</span>
                  </div>
                  <p className="text-[12px] text-on-surface-variant mt-1">Priced 5% lower than the regional average.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-outline-variant/30 mx-4 mb-4" />

          {/* Seller Information */}
          <section className="px-4 mb-6">
            <h3 className="text-[18px] font-bold text-on-surface mb-4">Seller Information</h3>
            <div className="bg-surface-container-lowest rounded-xl p-2 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img alt="Seller Avatar" className="w-14 h-14 rounded-full object-cover border-2 border-surface-container" src={PRODUCT.seller.avatar} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-semibold">{PRODUCT.seller.name}</span>
                    <span className="material-symbols-outlined text-secondary text-[14px]">verified</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-primary-container text-[12px]">star</span>
                    <span className="text-[12px] font-bold">{PRODUCT.seller.rating}</span>
                    <span className="text-[11px] text-on-surface-variant">• Joined {PRODUCT.seller.joined}</span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </section>

          {/* AI Smart Negotiation */}
          <section className="px-4 mb-6">
            <Link
              href="/chat/negotiation"
              className="w-full bg-gradient-to-r from-secondary to-[#6a35ff] text-white rounded-xl p-2 flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity active:scale-95"
            >
              <span className="material-symbols-outlined">robot_2</span>
              <span className="text-[16px]">Let AI Negotiate</span>
            </Link>
            <p className="text-center text-[12px] text-on-surface-variant mt-2">Our AI assistant will try to get you the best deal instantly.</p>
          </section>

          <hr className="border-outline-variant/30 mx-4 mb-4" />

          {/* Specifications */}
          <section className="px-4 mb-6">
            <h3 className="text-[18px] font-bold text-on-surface mb-4">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {PRODUCT.specs.map((spec, i) => (
                <div key={i} className="bg-surface-container-low rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">{spec.icon}</span>
                    <span className="text-[12px] font-bold uppercase">{spec.label}</span>
                  </div>
                  <p className="text-[12px] font-medium text-on-surface">{spec.val}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery Info */}
          <section className="px-4 mb-6">
            <div className="bg-surface-container-low rounded-xl p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary mt-0.5">local_shipping</span>
              <div>
                <h4 className="text-[14px] font-bold">Standard Delivery</h4>
                <p className="text-[12px] text-on-surface-variant">Estimated arrival in 2-3 business days via SwiftLogistics.</p>
              </div>
            </div>
          </section>

          {/* AI Enhanced Bundle Section */}
          <section className="px-4 mb-6">
            <div className="glass-panel-bundle rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full flex-1">
                <div className="flex items-center gap-2 mb-2 text-secondary">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">AI Enhanced Bundle</span>
                </div>
                <h2 className="text-[18px] md:text-[32px] font-bold text-primary mb-2">Bundle & Save</h2>
                <p className="text-[14px] text-on-surface-variant mb-6">Our AI suggests these perfect companions for your {PRODUCT.name} to maximize your experience.</p>
                <div className="flex items-center gap-2 bg-surface-container rounded-lg p-2">
                  <div className="text-center">
                    <span className="text-[16px] font-bold text-on-surface block">$1,299</span>
                    <span className="text-[14px] text-on-surface-variant line-through">$1,450</span>
                  </div>
                  <div className="h-10 w-px bg-outline-variant"></div>
                  <div>
                    <span className="text-[12px] font-bold uppercase text-secondary block">Save $151</span>
                  </div>
                  <Link
                    href="/checkout/bundle"
                    className="text-[12px] ml-auto bg-gradient-to-r from-secondary to-[#8B5CF6] text-white py-2 px-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[12px]">shopping_cart</span>
                    Add Bundle
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'UltraVision Pro 5G', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCpKfGCSKfWAaeoi2iq7rBbSYA0f7uXnXQaSpxfcflzZ_Vq93AqHEp8e3J-qJXPKf7iVYqK6cmlbOewV6y1_ZTNXqEl3IK8z_LY5ZL8X3f_1PxBzNsS6g_CBl0chtZCdZ4-dTIiihs6i_SkDE9_0xgNp6tvtukz_cnylt9pRH7z3ex2-goVbiPeAewY_AftIyTcHkbioBt6ZxbS9RYMxprYJom8pLwjhVMmwrdEcgaNZ2VrpGfssbj8qY55jVpkTgk2giyncbCurE', badge: 'Main' },
                  { name: 'SonicBuds Pro', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA345nQbV_t3oj3gDh3Dv85mgSgiIgMIeUly6hzUl1jslcXAo7N4fIIs21u3B4N5w4cai1DWqiuVuTyUjLcrvhyypNQU84b7d1hyLC4dbQ5uSdYvVzIy46_BtnZVl7IWk6j56efB5LzprJ25bVKHYNRz_as_9sahGAm3kD2Ia8VEfPXjzmMm6vhO7gBnI31X3_eyFnSDs-pz7xms6Ei6MYRLqKMUjGc0FzDJHpCCmY-z0J2vBrS_IsKw2J8ROnoDl-HJB6L25apDHM' },
                  { name: '65W GaN Charger', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVl4BSIc_rCmeOAiXjA0wJKJLBXRcukRf6zj3nBIBGWPOzcxiU5Q_lfg5K67ApfYRPDrnkDaC46pt8_xEvAtK9t4n3fE4_P9FKolDcHiHv5sZvYdekaUawJysf-bMBszC0ytsew3YQkxnJvAtha-hcBv-VORLPmt3fSJi_TNqJgaOfH8CEDwKbD8DaksUVzo8gkNoV3Kp12D-QAvMikdOozkQwvs5hBcLCzrQcVa-ngpoXzv2yW6gMAlVEygwYSqOpNDRFKOY4EwE' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface rounded-lg p-3 border border-outline-variant text-center relative overflow-hidden group">
                    {item.badge && <div className="absolute top-2 left-2 bg-primary-container text-on-primary-container text-[10px] font-bold px-1.5 py-0.5 rounded">{item.badge}</div>}
                    <div className="h-24 w-full bg-surface-container-low rounded mb-2 overflow-hidden flex items-center justify-center">
                      <img alt={item.name} className="h-full object-contain group-hover:scale-110 transition-transform" src={item.img} />
                    </div>
                    <p className="text-[12px] text-on-surface truncate">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Products Section */}
          <section className="px-4 mb-6">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-[18px] md:text-[32px] font-bold text-on-surface">Related Products</h2>
                <p className="text-[12px] text-on-surface-variant mt-1">People who viewed this also looked at</p>
              </div>
              <Link href="/search" className="text-[12px] font-bold text-secondary hover:underline flex items-center">
                See all <span className="material-symbols-outlined text-[12px] ml-1">arrow_forward</span>
              </Link>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
              {[
                { name: 'Nova 9 SE', price: '$450', rating: '4.8 (120)', location: 'Nearby', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB7Sid-pYaismy4CTfKfNmOpOOCN_DX93vKr7w53QLk-S7792TYTUnUftNoeUiDpNtP2IKI62EM3iHQgh7sSbuvMkR67npsHFr7jkpQjqWEPuBEB9nS3ySd_9O4Uo_U1qE-HeEjQUgyVF-MMpckTqsb9naRiIl1-ADyFvsDoyJJtPzj5z4aqczN32l1S0zjFsXRTNRRLUhN6skmkXKqrRTgiT_xDy-I7d6vJW7a7Mhcs0NgSBQTUVAyPvOLqVJWZVQFWQ1mdlWgZA', flag: 'ZA' },
                { name: 'Pro Lens Kit', price: '$120', rating: '4.5 (85)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABZIko7S0p83g8K52iomVYK3zDoh8R8II0BBeLvV343MKyjrceisGcxrYLGKg3dUrqZJnZeq4beg0jnVJJJKGN1JutGWStcTUVj1FFSD0k_PYtS1p0yKWCaXd49kblVLqO0g6hQE0hgZCJfdb3wTZf2pPtypGPMkaIrZ0OUWGv91xeCAMwLYn5tZ0eeC6EkqbpMhwqXkGqfZ07Qom50_5OQnYJRmOwCnuxmPGyVWpUYgBn5FLQsyKtBBfqBMUcekNcR_uUZecRzHk', flag: 'NG' },
                { name: 'Ultra Charge 20k', price: '$65', rating: '4.9 (340)', location: 'Fast Ship', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK3htZdv3YUWPHh4MOLyZGuSZW__w3_5TAhwu7NUce2zSVQB6PzK_xIqy9T6cCDiV89OT9zmPLEoAwVpMFmrYQ5ALrLUbg5fDhkNpGA1tyZxMer_EzV2HzvwLbCS93KmqcNXGZMLDggpxfkcIkDKlmJ4mYHWMAQQS-ChqO6kW0FkEBAUHW4VG_8g99wMqsC1oqeQtbNtcErah6JWTHfahy5AMls-4bnhgUwyiMjcCvkCKC3iO7ZENetZRMRW_mhjBUPCFv4jkNB9s', flag: 'KE' },
                { name: 'Armor Case X', price: '$25', rating: '4.6 (210)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArEg7fexKGTmaVcpRb0rfWLEqwWjgxggtrUEF8_GtO06WjPWCjDEw5ESCSIVg-okURdI3xJZ65HHpIfnejQY6kp3as2kO5Nl5ppVBSzJvC8iDdWJ71jsNufXOxZYTEHaMVfjlnOf1L2G3PwWoJ0Av4zMMxc844hc7JTgFKy9aRClsiX5vA6e31mAq5yL0O58YAOS9BgD65QDfawg8NfF7tC4FSwISKPxKtl2WAz_kddpi_7xDptSxzQRygkzCInEv7iy0s4SD-fU0', flag: 'GH' },
              ].map((item, i) => (
                <div key={i} className="min-w-[240px] w-[240px] bg-surface rounded-xl border border-surface-variant shadow-sm snap-start flex-shrink-0 group hover:shadow-md transition-shadow cursor-pointer">
                  <div className="h-[160px] w-full bg-surface-container-low rounded-t-xl overflow-hidden relative">
                    {item.location && (
                      <div className="absolute top-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1 z-10 shadow-sm border border-surface-variant">
                        <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
                        <span className="text-[10px] font-bold uppercase text-secondary font-bold">{item.location}</span>
                      </div>
                    )}
                    <img alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={item.img} />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[16px] font-bold text-on-surface truncate pr-2">{item.name}</h3>
                      <span className="text-[16px] font-bold text-secondary whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-[14px] text-on-surface-variant">{item.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded">
                        <span className="material-symbols-outlined text-[14px] text-on-surface-variant">flag</span>
                        <span className="text-[10px] font-bold text-on-surface-variant">{item.flag}</span>
                      </div>
                      <Link href={`/product/${item.name.toLowerCase().replace(/ /g, '-')}`} className="bg-primary text-white text-[12px] font-bold py-1.5 px-3 rounded hover:opacity-90 transition-opacity">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Desktop Quick Actions Sidebar */}
        <aside className="hidden md:block w-80 sticky top-24 h-fit bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant p-6">
          <h3 className="text-[18px] font-bold text-on-surface mb-4">Quick Actions</h3>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[32px] font-black text-primary">{PRODUCT.usdPrice}</span>
          </div>
          <Link
            href="/checkout/bundle"
            className="w-full bg-primary-container text-on-primary-container font-bold rounded-xl py-3 mb-4 flex items-center justify-center gap-2 hover:bg-primary-fixed-dim transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            Buy Now
          </Link>
          <Link
            href="/chat/negotiation"
            className="w-full bg-surface-container text-on-surface font-bold rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors active:scale-95 mb-4"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Chat with Seller
          </Link>
          <button className="w-full border-2 border-secondary text-secondary font-bold rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-secondary/5 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-[20px]">favorite_border</span>
            Save for Later
          </button>
        </aside>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-surface border-t border-outline-variant p-2 shadow-lg flex gap-4">
        <Link
          href="/chat/negotiation"
          className="flex-1 bg-surface-container text-on-surface font-bold rounded-xl py-2 flex items-center justify-center gap-2 active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          Chat
        </Link>
        <Link
          href="/checkout/bundle"
          className="flex-1 bg-primary-container text-on-primary-container font-bold rounded-xl py-2 flex items-center justify-center gap-2 active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
          Buy Now
        </Link>
      </div>

      <style jsx>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .glass-panel-bundle {
          background: linear-gradient(hsl(var(--card) / 95%), hsl(var(--card) / 95%)) padding-box,
                      linear-gradient(135deg, #FFCC00, #004F9F) border-box;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid transparent;
        }
        .sparkle-ai {
          animation: sparkle 2s infinite ease-in-out;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
