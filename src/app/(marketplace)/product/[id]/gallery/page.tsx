"use client";

export const runtime = 'edge';

import { useState } from 'react';
import Link from 'next/link';

const PRODUCT = {
  id: 'PRO-99',
  name: 'Premium AI Ultra-Phone',
  price: '₦850,000',
  images: [
    'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1024&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=1024&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556656793-0627997c02c6?q=80&w=1024&auto=format&fit=crop',
  ],
  videoCover: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1024&auto=format&fit=crop',
};

export default function ProductGalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-4 py-4 z-50 pointer-events-none">
        <Link 
          href="/home" 
          className="p-2 rounded-full bg-surface/80 backdrop-blur-md shadow-sm border border-outline-variant pointer-events-auto"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </Link>
        <div className="flex gap-2 pointer-events-auto">
          <button className="p-2 rounded-full bg-surface/80 backdrop-blur-md shadow-sm border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface">share</span>
          </button>
          <button className="p-2 rounded-full bg-surface/80 backdrop-blur-md shadow-sm border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface">favorite</span>
          </button>
        </div>
      </header>

      {/* Main Stage */}
      <div className="relative flex-1 flex flex-col pt-16">
        <div className="flex-1 relative bg-surface overflow-hidden">
          {isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <video 
                autoPlay 
                controls 
                className="w-full h-full object-contain"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-smartphone-close-up-11005-large.mp4" type="video/mp4" />
              </video>
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-white">close</span>
              </button>
            </div>
          ) : (
            <img 
              src={PRODUCT.images[activeIndex]} 
              alt={PRODUCT.name}
              className="w-full h-full object-contain transition-all duration-500"
            />
          )}

          {/* AI Enhanced Badge */}
          <div className="absolute bottom-6 left-6 glass-ai px-4 py-2 rounded-xl flex items-center gap-2 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-[20px] sparkle-ai">temp_preferences_custom</span>
            <span className="text-label-caps font-bold text-primary">8K AI ENHANCED VIEW</span>
          </div>
        </div>

        {/* Thumbnails & Controls */}
        <div className="bg-surface p-6 pb-20 rounded-t-3xl shadow-[0_-8px_32px_rgba(0,0,0,0.05)] border-t border-outline-variant">
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            {/* Reel */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {/* Video Thumbnail */}
              <button 
                onClick={() => setIsPlaying(true)}
                className="relative min-w-[80px] h-[80px] rounded-2xl overflow-hidden border-2 border-primary group"
              >
                <img src={PRODUCT.videoCover} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[32px]">play_circle</span>
                </div>
              </button>

              {/* Image Thumbnails */}
              {PRODUCT.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`min-w-[80px] h-[80px] rounded-2xl overflow-hidden transition-all ${
                    activeIndex === idx && !isPlaying ? 'border-2 border-primary scale-105' : 'border border-outline-variant opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Info Snippet */}
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span className="text-label-caps text-on-surface-variant px-2 py-0.5 bg-surface-container-high rounded w-fit">MULTIVIEW GALLERY</span>
                <h1 className="text-headline-lg font-bold text-on-surface leading-tight">{PRODUCT.name}</h1>
                <p className="text-primary font-bold text-title-md">{PRODUCT.price}</p>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                BUY NOW
              </button>
            </div>
            
            {/* Features Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface-container-low border border-outline-variant">
                <span className="material-symbols-outlined text-primary">360</span>
                <span className="text-label-caps text-on-surface-variant">360&deg; Orbit</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface-container-low border border-outline-variant">
                <span className="material-symbols-outlined text-primary">zoom_in</span>
                <span className="text-label-caps text-on-surface-variant">Macro Scan</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface-container-low border border-outline-variant">
                <span className="material-symbols-outlined text-primary">ar_on_you</span>
                <span className="text-label-caps text-on-surface-variant">View in AR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-ai {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .sparkle-ai {
          animation: sparkle 2s infinite ease-in-out;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
