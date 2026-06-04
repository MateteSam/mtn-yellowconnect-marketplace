'use client';

import Link from 'next/link';
import { useState } from 'react';

const FILTERS = [
  { label: 'All', value: '' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Vehicles', value: 'vehicles' },
  { label: 'Property', value: 'property' },
  { label: 'Fashion', value: 'fashion' },
  { label: 'Agriculture', value: 'agriculture' },
];

const RESULTS = [
  { title: 'MacBook Pro M2', price: '₦ 1,850,000', location: 'Ikeja, Lagos', verified: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4' },
  { title: 'Toyota Camry 2018', price: '₦ 12,500,000', location: 'Victoria Island', verified: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdBqwKA1AbkkXjkisOUJ3teqEewPDrLzkCaOYD2Y2f9xwKYB8Z77OLImmdR9t8Bh_nk6Bp3frUHJaU9IY_K87hhSvdF_5ICtxNFml9UoHX7yq4AReqsFBNVcJeliKG7RfqCTSfiB4YzfzVzu_FbN_jzljfOW8ivSW1nHXCb-fVliakiVobrFsXoa-Dce7EvWTaYYtEAnKGoAHccCdgaX0ZWk1vg7xQCv6cSD0fOh3xEm3mnVro_KjuTh3xt9kfAkoep19KxMISYlo' },
  { title: '3 Bed Apartment', price: '₦ 4,500,000/yr', location: 'Lekki Ph1', verified: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJJi8EssSfX5_8MSxKPLC2fRaZ25Z3-JIhGEjyfS0bt6y4CisthKRARyvQh_dEeBDkS0pJvHIPcMHqPKA1_Flituw-hQRGDkQmByuftgdzzQJU7Lbyc-4uB7SjuaL2LRe_j2uTsROc3zkjm9tiY744t_M6CxNQMXzEPAezqI0engF54CIRWSntA6n7PkUIuw2ZQstytUjiq2wWGmCREGuZs9tUrMfjo9eshLaAjyHqy7fpymUQ1avVq4Suwtbp1TAhVV5RCqFsboY' },
  { title: 'iPhone 15 Pro', price: '₦ 950,000', location: 'Surulere, Lagos', verified: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4' },
  { title: 'Sumec Generator 2.5kva', price: '₦ 165,000', location: 'Oshodi, Lagos', verified: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAirwkU6q2NLlTaocaVDE25pZSS9A4ZQeypqLDrK3C4aUo3qXLGRFJl3URUqtiw7x7rebo6nRE3_EFM5SSCZ7_M6vpWN-Qrr6MJLk3XW0E3MixuW4lwCXPTdrCd6T8Cy5K8SfA0UKrKQ4nFhWA08RV7fHk7QBsTqT1gxACFuakrENpXZOxj5DxB6ssMUUmxPQoSDVH40pK8PRQVllRkXMTn6wtjEn9J6VXe36tyqy2ZD-zRC_MM8hu8wNt4VIleoS0VY_shOXTz4NY' },
  { title: 'Ankara Dress Set', price: '₦ 18,500', location: 'Balogun, Lagos', verified: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAirwkU6q2NLlTaocaVDE25pZSS9A4ZQeypqLDrK3C4aUo3qXLGRFJl3URUqtiw7x7rebo6nRE3_EFM5SSCZ7_M6vpWN-Qrr6MJLk3XW0E3MixuW4lwCXPTdrCd6T8Cy5K8SfA0UKrKQ4nFhWA08RV7fHk7QBsTqT1gxACFuakrENpXZOxj5DxB6ssMUUmxPQoSDVH40pK8PRQVllRkXMTn6wtjEn9J6VXe36tyqy2ZD-zRC_MM8hu8wNt4VIleoS0VY_shOXTz4NY' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  return (
    <div
      className="max-w-7xl mx-auto w-full px-container-margin-mobile md:px-container-margin-desktop py-6 flex flex-col gap-6"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >
      {/* Search Input */}
      <div className="relative w-full max-w-2xl shadow-sm rounded-2xl">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search anything in Nigeria..."
          className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant border-none rounded-2xl py-4 pl-12 pr-16 focus:ring-2 focus:ring-secondary transition-shadow text-body-lg font-body-lg outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border text-body-sm font-body-sm transition-colors ${activeFilter === f.value
              ? 'bg-primary-container border-primary-container text-on-primary-container font-semibold'
              : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Sort & Count */}
      <div className="flex items-center justify-between">
        <span className="text-body-sm font-body-sm text-on-surface-variant">{RESULTS.length} results</span>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2 text-body-sm font-body-sm text-on-surface outline-none"
        >
          <option value="relevance">Most Relevant</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {/* AI Insight Banner */}
      <div className="ai-glass rounded-2xl p-3 flex items-start gap-3 border-l-4 border-l-secondary">
        <span className="material-symbols-outlined text-secondary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        <div>
          <p className="text-body-sm font-body-sm font-semibold text-on-surface">AI Insight: Best deals this week</p>
          <p className="text-label-caps font-label-caps text-on-surface-variant mt-1">Electronics prices are down 12% in Lagos. Consider buying now.</p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
        {RESULTS.map((item, i) => (
          <Link
            key={i}
            href={`/product/${item.title.toLowerCase().replace(/ /g, '-')}`}
            className="bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/30 overflow-hidden cursor-pointer group"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={item.img}
              />
              {item.verified && (
                <div className="absolute top-2 left-2 verified-badge">
                  <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-[10px] font-bold text-on-surface">VERIFIED</span>
                </div>
              )}
            </div>
            <div className="p-3 flex flex-col gap-1">
              <h4 className="text-body-sm font-body-sm text-on-surface font-semibold line-clamp-2">{item.title}</h4>
              <div className="text-title-sm font-title-md text-secondary font-bold">{item.price}</div>
              <div className="flex items-center text-on-surface-variant text-[12px] gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                <span>{item.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}