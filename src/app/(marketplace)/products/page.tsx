'use client';

import Link from 'next/link';

const CATEGORIES = [
  { icon: 'devices', label: 'Electronics', color: 'bg-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4' },
  { icon: 'directions_car', label: 'Vehicles', color: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdBqwKA1AbkkXjkisOUJ3teqEewPDrLzkCaOYD2Y2f9xwKYB8Z77OLImmdR9t8Bh_nk6Bp3frUHJaU9IY_K87hhSvdF_5ICtxNFml9UoHX7yq4AReqsFBNVcJeliKG7RfqCTSfiB4YzfzVzu_FbN_jzljfOW8ivSW1nHXCb-fVliakiVobrFsXoa-Dce7EvWTaYYtEAnKGoAHccCdgaX0ZWk1vg7xQCv6cSD0fOh3xEm3mnVro_KjuTh3xt9kfAkoep19KxMISYlo' },
  { icon: 'real_estate_agent', label: 'Property', color: 'bg-tertiary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJJi8EssSfX5_8MSxKPLC2fRaZ25Z3-JIhGEjyfS0bt6y4CisthKRARyvQh_dEeBDkS0pJvHIPcMHqPKA1_Flituw-hQRGDkQmByuftgdzzQJU7Lbyc-4uB7SjuaL2LRe_j2uTsROc3zkjm9tiY744t_M6CxNQMXzEPAezqI0engF54CIRWSntA6n7PkUIuw2ZQstytUjiq2wWGmCREGuZs9tUrMfjo9eshLaAjyHqy7fpymUQ1avVq4Suwtbp1TAhVV5RCqFsboY' },
  { icon: 'checkroom', label: 'Fashion', color: 'bg-outline', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAirwkU6q2NLlTaocaVDE25pZSS9A4ZQeypqLDrK3C4aUo3qXLGRFJl3URUqtiw7x7rebo6nRE3_EFM5SSCZ7_M6vpWN-Qrr6MJLk3XW0E3MixuW4lwCXPTdrCd6T8Cy5K8SfA0UKrKQ4nFhWA08RV7fHk7QBsTqT1gxACFuakrENpXZOxj5DxB6ssMUUmxPQoSDVH40pK8PRQVllRkXMTn6wtjEn9J6VXe36tyqy2ZD-zRC_MM8hu8wNt4VIleoS0VY_shOXTz4NY' },
];

const AI_PICKS = [
  {
    title: 'MacBook Pro M2 2023',
    price: '₦ 1,850,000',
    location: 'Ikeja, Lagos',
    verified: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUY3jjiw2_wYR_bfUFgeWuY2tZUodVYCRRpiBrVS2828IHI1fGnMFC_e_2Z4YAnLrmlIpHtwuEcyIz2aTEIRKq8WjaYscY6valyjPIQ_DKrlPwdKXkrKLtgFtXVzUpAKVzgrlx5wtTImaumcv3nE6RCkc4_Wm479KfkpgVcQmU6njLaqZptPKzIzFWrTXBVw7OqiMkZdHSUF3tdnJWB1GQ0Q31xm8ma-dXqqfB3gmeKpc_Yb9Xtfn7y_iwr_484J4-xX3173GH8gA',
  },
  {
    title: 'Toyota Camry 2018 LE',
    price: '₦ 12,500,000',
    location: 'Victoria Island',
    verified: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqUyJ-H0EjGhomf5baFPQ0QiSxi8D0Zxhk7iQCu6kQC4kSQ3wA7n46RTZud0nLlhcWODooxj9pLdXdDBLfkM8HJNwdNuNrYN3MuBNHuZ8FUwwcXr36iK1KzQndmPUh8UtXtQ7CdQKhPfFQ88APoY2Cqq4sYYVRZBJ0e3BsvY_VBFSuheGwJwGa_CALlz8C3-MrkzJsUpBsp7iMxgXruqk4w538blwnlVf4qgXc8XPRYwN36oARCwInnEIsdI1RCWHWqK21H0Kmgdw',
  },
  {
    title: '3 Bed Semi-Detached',
    price: '₦ 4,500,000/yr',
    location: 'Lekki Phase 1',
    verified: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUoJFywGogYjeMv1XVQpSIHrHzi9v-hwKLOEhsGmABiuVapL_8Ho14SPusQr4w82o9BRGuZgWD4AGslMznJMgJWwNGrRrHRmtMTJKIClO1RRMeET87hL7mLVLFL6AQRAMCCS8ci9agIERvnjH7JAqUOymc9mwH_6Ob8oWLitvNFzXH5mhASuSL9rpG3lwQr44RwYLc8Z8HY3xbo5HkiiwylANzY3Wpl44-AVPltrLunjcDhKmbpt7TFcxcxaHgy9lOY1pzfJJQ6-M',
  },
  {
    title: 'iPhone 15 Pro Max',
    price: '₦ 950,000',
    location: 'Surulere, Lagos',
    verified: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4',
  },
];

const CITY_CHIPS = ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan', 'Enugu'];

export default function HomePage() {
  return (
    <div
      className="max-w-7xl mx-auto w-full flex flex-col gap-6 py-6 px-container-margin-mobile md:px-container-margin-desktop"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >

      {/* ── Search Hero ── */}
      <section className="flex flex-col gap-4">
        <div className="relative w-full max-w-2xl mx-auto shadow-sm rounded-2xl">
          <input
            className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant border-none rounded-2xl py-4 pl-4 pr-20 focus:ring-2 focus:ring-secondary transition-shadow text-body-lg font-body-lg outline-none"
            placeholder="Search phones, cars, property in Nigeria..."
            type="text"
          />
          <Link
            href="/search"
            className="absolute right-1 top-1 bottom-1 bg-primary-container text-on-primary-container rounded-xl px-4 flex items-center justify-center font-bold hover:bg-primary-fixed-dim transition-colors"
          >
            Search
          </Link>
        </div>
        {/* City chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar py-2 max-w-2xl mx-auto w-full">
          {CITY_CHIPS.map(city => (
            <button
              key={city}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors text-body-sm font-body-sm"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* ── Category Bento Grid ── */}
      <section className="flex flex-col gap-4">
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">Explore Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter auto-rows-[160px] md:auto-rows-[200px]">
          {CATEGORIES.map((category) => (
            <Link
              key={category.label}
              href={`/search?category=${category.label.toLowerCase()}`}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.img}')` }}
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
                  {category.label}
                </h3>
                {/* <p className="font-body-sm text-body-sm text-white/75 mt-0.5">
                            {category.description}
                          </p> */}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── AI "For You" Section ── */}
      <section className="flex flex-col gap-4 rounded-3xl p-4 -mx-4 glass-ai">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h2 className="text-title-xs font-title-md text-on-surface">
              Picked for You in
            </h2>
          </div>
          <button className="text-label-caps font-label-caps text-secondary font-bold hover:underline">VIEW ALL</button>
        </div>
        <div className="-mt-5">
          <div className="flex items-center gap-2">
            <span className="w-[24px]" />
            <p className="text-sm">Lagos</p>
          </div>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-gutter pb-4">
          {AI_PICKS.map((item, i) => (
            <Link
              key={i}
              href={`/product/${item.title.toLowerCase().replace(/ /g, '-')}`}
              className="min-w-[240px] w-[240px] bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden border border-outline-variant/30 cursor-pointer"
            >
              <div className="relative h-32 w-full">
                <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
                {item.verified && (
                  <div className="absolute top-2 left-2 verified-badge">
                    <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-[10px] font-bold text-on-surface">VERIFIED</span>
                  </div>
                )}
              </div>
              <div className="p-3 flex flex-col gap-1">
                <h4 className="text-body-sm font-body-sm text-on-surface truncate font-semibold">{item.title}</h4>
                <div className="text-title-md font-title-md text-secondary font-bold">{item.price}</div>
                <div className="flex items-center text-on-surface-variant text-[12px] gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Trending Now ── */}
      <section className="flex flex-col gap-4">
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
          {AI_PICKS.slice(0, 3).map((item, i) => (
            <Link
              key={i}
              href={`/product/${item.title.toLowerCase().replace(/ /g, '-')}`}
              className="bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/30 overflow-hidden cursor-pointer"
            >
              <div className="relative h-40 w-full">
                <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
                {item.verified && (
                  <div className="absolute top-2 left-2 verified-badge">
                    <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-[10px] font-bold text-on-surface">VERIFIED</span>
                  </div>
                )}
              </div>
              <div className="p-3 flex flex-col gap-1">
                <h4 className="text-body-sm font-body-sm text-on-surface font-semibold">{item.title}</h4>
                <div className="text-title-sm font-title-md text-secondary font-bold">{item.price}</div>
                <div className="flex items-center text-on-surface-variant text-[12px] gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
