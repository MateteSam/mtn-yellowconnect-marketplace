'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function HomePropertyServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <button onClick={() => router.back()} className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</button>
        <div className="flex-grow text-center pr-10">
          <h1 className="font-bold text-lg">Service Profile</h1>
        </div>
      </header>
      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-surface-container-high mb-4 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant">person</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Service Provider</h2>
          <p className="text-on-surface-variant mb-6">Home-property Specialist (ID: {id})</p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20">
              <p className="text-label-caps text-on-surface-variant font-bold text-[10px] uppercase">Experience</p>
              <p className="text-xl font-bold">5+ Years</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20">
              <p className="text-label-caps text-on-surface-variant font-bold text-[10px] uppercase">Rating</p>
              <p className="text-xl font-bold">4.9 ⭐</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-on-surface-variant text-center">Expert home-property services available for immediate booking via MTN MoMo.</p>
        <button className="w-full bg-primary text-black font-bold py-4 rounded-xl shadow-lg mt-10 active:scale-95 transition-all">Book via MoMo</button>
      </main>
    </div>
  );
}
