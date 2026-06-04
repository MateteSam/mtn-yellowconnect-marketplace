'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';

const COUNTRY_CODES = [
  { code: '+234', flag: '🇳🇬' },
  { code: '+233', flag: '🇬🇭' },
  { code: '+27', flag: '🇿🇦' },
  { code: '+254', flag: '🇰🇪' },
  { code: '+237', flag: '🇨🇲' },
];

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+234');
  const [phone, setPhone] = useState('');
  const { signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const selectedFlag = COUNTRY_CODES.find(c => c.code === countryCode)?.flag ?? '🇳🇬';

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/home');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Error', description: error.message || 'Failed to sign in with Google' });
    }
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setIsLoading(false);
    const fullPhone = `${countryCode}${phone}`;
    router.push(`/otp?type=signin&method=phone&identifier=${encodeURIComponent(fullPhone)}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-12"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >
      {/* Store icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
        style={{ background: 'linear-gradient(135deg,#FFD700,#FFBE00)' }}
      >
        <span
          className="material-symbols-outlined text-[32px] text-gray-800"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          storefront
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Welcome Back</h1>
      <p className="text-sm text-gray-500 text-center mb-8 leading-snug">
        Enter your phone number to access<br />MTN Marketplace securely.
      </p>

      {/* Phone form */}
      <form onSubmit={handlePhoneSubmit} className="w-full max-w-sm flex flex-col gap-4">
        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5">
            Phone Number
          </label>

          {/* Input row: flag+code selector | number */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-400 transition-all">
            {/* Country selector */}
            <div className="relative flex items-center border-r border-gray-200">
              <span className="pl-3 pr-1 text-base select-none pointer-events-none">{selectedFlag}</span>
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className="appearance-none bg-transparent pl-0.5 pr-6 py-3.5 text-sm font-semibold text-gray-700 outline-none cursor-pointer"
                style={{ minWidth: 68 }}
              >
                {COUNTRY_CODES.map(c => (
                  <option key={c.code} value={c.code}>{c.code}</option>
                ))}
              </select>
              {/* Chevron */}
              <span className="pointer-events-none absolute right-1.5 text-gray-400 text-xs">▾</span>
            </div>

            {/* Number input */}
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="0800 000 0000"
              className="flex-1 px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-300 outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Send OTP */}
        <button
          type="submit"
          disabled={isLoading || !phone}
          className="w-full py-4 rounded-full font-bold text-gray-900 flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
          style={{ background: isLoading || !phone ? '#FFE066' : 'linear-gradient(90deg,#FFD700,#FFBE00)' }}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-600/30 border-t-gray-700 rounded-full animate-spin" />
              Sending OTP...
            </>
          ) : (
            <>Send OTP <span className="material-symbols-outlined text-[20px]">arrow_forward</span></>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative w-full max-w-sm my-6 flex items-center gap-3">
        <span className="flex-1 border-t border-gray-200" />
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          or continue with
        </span>
        <span className="flex-1 border-t border-gray-200" />
      </div>

      {/* Social buttons */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {/* Email */}
        <Link
          href="/login/email"
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm group"
        >
          <span className="material-symbols-outlined text-[20px] text-gray-600 transition-colors">
            mail
          </span>
          Sign in with Email
        </Link>
        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all shadow-sm"
        >
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Sign in with Google
        </button>

        {/* Apple */}
        <button
          type="button"
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all shadow-sm"
        >
          {/* Apple logo SVG */}
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 814 1000" fill="currentColor">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.1 269-317.1 70.6 0 129.5 46.4 173.9 46.4 42.7 0 109.6-49.8 188.3-49.8zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
          </svg>
          Sign in with Apple
        </button>
      </div>

      {/* Sign up link */}
      <p className="flex flex-col mt-8 text-sm text-gray-500 text-center">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-semibold text-blue-600 hover:underline">
          Create Account
        </Link>
      </p>
    </div>
  );
}
