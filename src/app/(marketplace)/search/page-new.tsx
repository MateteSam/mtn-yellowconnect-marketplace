'use client';

import Link from 'next/link';
import { useState } from 'react';

const CATEGORIES = ['All', 'Electronics', 'Agri-Tech', 'Renewables', 'Fashion', 'Home'];
const LOCATIONS = ['Lagos', 'Accra', 'Nairobi', 'Johannesburg'];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Search Header */}
      <div className="bg-surface sticky top-0 z-40 px-container-margin-mobile py-4 shadow-sm border-b border-outline-variant/10">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search solar panels, tractors, or seeds..."
              className="w-full bg-surface-container-high border-none rounded-full pl-12 pr-4 py-3.5 text-body-lg outline-none focus:ring-2 focus:ring-secondary transition-all"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              showFilters ? 'bg-secondary text-white' : 'bg-surface-container-high text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined font-bold">tune</span>
          </button>
        </div>

        {/* Category horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto mt-4 pb-2 hide-scrollbar max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-body-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat ? 'bg-primary text-black shadow-md' : 'bg-surface-container-low text-on-surface-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-5xl">
        {/* AI Scout Recommendation Chips */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <p className="text-label-caps font-bold text-secondary uppercase tracking-widest">AI Scout Suggestions</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Refurbished Solar Kits', 'High-Trust Seed Venders', 'Tractors under ₦5M', 'Ghana Artisan Goods'].map((chip) => (
              <button 
                key={chip}
                className="ai-glass px-4 py-2 rounded-xl text-[12px] font-bold text-on-surface border border-primary/20 hover:bg-primary/5 transition-colors flex items-center gap-2"
              >
                {chip}
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-body-sm text-on-surface-variant">Showing <span className="text-on-surface font-bold">128</span> results</p>
          <div className="flex items-center gap-2 text-body-sm font-bold text-secondary cursor-pointer">
            Most Relevant
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </div>
        </div>

        {/* Grid of Results */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-xl transition-all active:scale-[0.98]">
              <div className="aspect-square relative overflow-hidden bg-surface-container-high">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OE53Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU" 
                  alt="Product" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                {i % 3 === 0 && (
                  <div className="absolute top-2 left-2 ai-glass px-2 py-0.5 rounded text-[10px] font-bold text-secondary border border-primary/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    AI PICK
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="font-bold text-body-sm line-clamp-1 mb-0.5">Premium Solar Irrigation Panel</p>
                <p className="text-secondary font-bold text-body-md">₦125,000</p>
                <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span className="text-[10px] font-medium">Lagos, NG</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Mock */}
        {searchQuery === 'xyz' && (
          <div className="py-20 text-center animate-in fade-in zoom-in-95 duration-300">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
            <h3 className="font-bold text-title-md">No listings found</h3>
            <p className="text-on-surface-variant text-body-sm max-w-xs mx-auto mt-2">
              We couldn't find anything matching "{searchQuery}". Try broadening your search or adjusting filters.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-primary font-bold hover:underline"
            >
              Clear all searches
            </button>
          </div>
        )}
      </main>

      {/* Floating Filter Drawer (simplified absolute/fixed overlay) */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end animate-in fade-in duration-300">
          <div className="w-[85%] max-w-xs bg-surface h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
              <h2 className="font-bold text-title-md">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="material-symbols-outlined">close</button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto space-y-8">
              <div>
                <p className="font-bold text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Location</p>
                <div className="grid grid-cols-2 gap-2">
                  {LOCATIONS.map(loc => (
                    <button key={loc} className="px-3 py-2 rounded-xl bg-surface-container-high text-body-sm font-medium hover:bg-primary-container transition-colors">
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-bold text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Price Range</p>
                <div className="space-y-4">
                  <div className="h-2 bg-surface-container-highest rounded-full relative">
                    <div className="absolute left-[20%] right-[30%] h-full bg-secondary rounded-full"></div>
                    <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-md"></div>
                    <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-md"></div>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-on-surface-variant uppercase">
                    <span>₦50k</span>
                    <span>₦750k+</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Trust Level</p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" defaultChecked />
                  <span className="text-body-sm font-medium">Verified Merchants Only</span>
                </label>
              </div>
            </div>
            <div className="p-6 border-t border-outline-variant/20">
              <button 
                onClick={() => setShowFilters(false)}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-all"
              >
                Apply Filters
              </button>
              <button className="w-full mt-3 text-on-surface-variant font-bold text-body-sm">Reset All</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
