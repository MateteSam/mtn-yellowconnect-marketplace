'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';

export default function EmailLoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);
    try {
      // Simulate login
      await new Promise(r => setTimeout(r, 1000));
      router.push(`/otp?type=signin&method=email&identifier=${encodeURIComponent(email)}`);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to sign in with email',
      });
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/home');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to sign in with Google',
      });
    }
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
        Enter your email and password to access<br />Yel&apos;Low Mart securely.
      </p>

      {/* Login Form */}
      <form onSubmit={handleEmailLogin} className="w-full max-w-sm flex flex-col gap-5">
        {/* Email Field */}
        <div>
          <label className="text-sm font-bold text-gray-800 block mb-2">
            Email Address
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 material-symbols-outlined text-gray-400 text-[20px]">
              mail
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="text-sm font-bold text-gray-800 block mb-2">
            Password
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 material-symbols-outlined text-gray-400 text-[20px]">
              lock
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
          <div className="flex justify-end mt-2">
            <Link
              href="/login/forgot-password"
              className="text-xs font-semibold text-[#0066CC] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          disabled={isLoading || !email || !password}
          className="w-full py-4 rounded-full font-bold text-gray-900 flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50 mt-2"
          style={{ background: 'linear-gradient(90deg, #FFCC00, #FFB800)' }}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
          ) : (
            'Continue'
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
        {/* Phone Login Link */}
        <Link
          href="/login/phone"
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm group"
        >
          <span className="material-symbols-outlined text-[20px] text-gray-600 transition-colors">
            smartphone
          </span>
          Sign in with Phone Number
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
