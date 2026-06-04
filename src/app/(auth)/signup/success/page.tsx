'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupSuccessPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-12"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >
      {/* Success Icon */}
      <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-8 shadow-lg animate-bounce">
        <span className="material-symbols-outlined text-green-600 text-[48px] font-bold">
          check_circle
        </span>
      </div>

      <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface text-center mb-3">
        Welcome to MTN Marketplace!
      </h2>
      <p className="text-body-lg font-body-lg text-on-surface-variant text-center max-w-xs mb-10">
        Your account is set up. We&apos;ve personalized your feed with AI-curated listings from your area.
      </p>

      {/* Stats row */}
      <div className="w-full max-w-sm bg-surface-container-low rounded-2xl p-5 grid grid-cols-3 gap-4 mb-8">
        {[
          { icon: 'store', label: '2.4M+', sub: 'Listings' },
          { icon: 'verified_user', label: '98K+', sub: 'Sellers' },
          { icon: 'flag', label: '21', sub: 'Countries' },
        ].map(stat => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
            <span className="text-title-md font-title-md text-on-surface font-bold">{stat.label}</span>
            <span className="text-label-caps font-label-caps text-on-surface-variant">{stat.sub}</span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="w-full max-w-xs">
        <button
          onClick={() => router.push('/home')}
          className="w-full py-4 rounded-full font-bold text-gray-900 flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: 'linear-gradient(90deg, #FFCC00, #FFB800)' }}
        >
          Explore Marketplace
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>

      <p className="text-body-lg font-body-lg text-on-surface-variant text-center max-w-xs mt-8">
        Secure & Verified Trading
      </p>
    </div>
  );
}
