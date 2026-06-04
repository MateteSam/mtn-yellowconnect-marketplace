'use client';

import { useState } from 'react';
import Link from 'next/link';

export const runtime = 'edge';

export default function ProductVideoPlayerPage() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Immersive Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-10 z-50">
        <Link href="./gallery" className="p-3 rounded-full bg-white/10 backdrop-blur-md">
          <span className="material-symbols-outlined">close</span>
        </Link>
        <div className="flex gap-4">
          <button onClick={() => setIsMuted(!isMuted)} className="p-3 rounded-full bg-white/10 backdrop-blur-md">
            <span className="material-symbols-outlined">{isMuted ? 'volume_off' : 'volume_up'}</span>
          </button>
          <button className="p-3 rounded-full bg-white/10 backdrop-blur-md">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </header>

      {/* Fullscreen Video Content */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-black pointer-events-none absolute inset-0 z-10" />
        <video 
          autoPlay 
          loop 
          muted={isMuted}
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-smartphone-close-up-11005-large.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Product Overlay */}
        <div className="absolute bottom-12 left-8 right-8 z-20 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-2 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=100" alt="product" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-display-xs font-bold tracking-tight">AI Ultra-Phone 12S</h2>
              <p className="text-primary font-bold text-title-md">₦850,000</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-primary text-white py-4 rounded-full font-bold text-center shadow-2xl shadow-primary/30 active:scale-95 transition-transform">
              ADD TO CART
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold border border-white/20">
              DETAILS
            </button>
          </div>
        </div>
      </div>

      {/* AI Visual Marker */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <div className="bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/40 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px] animate-pulse">lens_blur</span>
          <span className="text-[10px] font-black tracking-widest text-primary">LIVE AI RENDERING</span>
        </div>
      </div>
    </div>
  );
}
