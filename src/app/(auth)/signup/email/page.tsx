'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { signUpWithEmail } from '@/lib/auth';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Passwords do not match',
      });
      return;
    }
    setIsLoading(true);
    try {
      // Simulate account creation
      await new Promise(r => setTimeout(r, 1000));
      router.push(`/otp?type=signup&method=email&identifier=${encodeURIComponent(email)}`);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to create account',
      });
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async () => {
    try {
      setIsLoading(true);
      await new Promise(r => setTimeout(r, 1000));
      router.push('/signup/success');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to sign up',
      });
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-12"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >
      <h1 className="text-title-md font-title-md text-primary tracking-tight mb-4">Yel&apos;Low Mart</h1>
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
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Create an Account</h1>
      <p className="text-sm text-gray-500 text-center mb-8 leading-snug">
        Join the fastest growing marketplace today.
      </p>

      {/* Form */}
      <form className="w-full max-w-sm space-y-5" onSubmit={handleSubmit}>
        {/* Name inputs */}
        <div className="flex-1 space-y-1">
          <label className="block text-body-sm font-body-sm text-on-surface font-medium px-1" htmlFor="firstName">
            First Name
          </label>
          <div className="relative">
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="John"
              required
              className="w-full px-4 py-3 bg-surface-container border border-transparent rounded-lg text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200"
            />
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <label className="block text-body-sm font-body-sm text-on-surface font-medium px-1" htmlFor="lastName">
            Last Name
          </label>
          <div className="relative">
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Doe"
              required
              className="w-full px-4 py-3 bg-surface-container border border-transparent rounded-lg text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-body-sm font-body-sm text-on-surface font-medium px-1" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full pl-10 pr-4 py-3 bg-surface-container border border-transparent rounded-lg text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-body-sm font-body-sm text-on-surface font-medium px-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </div>
            <input
              id="password"
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={8}
              required
              className="w-full pl-10 pr-12 py-3 bg-surface-container border border-transparent rounded-lg text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-secondary focus:outline-none transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPass ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="block text-body-sm font-body-sm text-on-surface font-medium px-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPass ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              minLength={8}
              required
              className="w-full pl-10 pr-12 py-3 bg-surface-container border border-transparent rounded-lg text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 focus:bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-secondary focus:outline-none transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showConfirmPass ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 pt-2 pb-4">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="terms"
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              className="w-5 h-5 bg-surface-container border-outline rounded text-secondary focus:ring-secondary focus:ring-offset-background transition-colors cursor-pointer"
            />
          </div>
          <label className="text-body-sm font-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="terms">
            I agree to the{' '}
            <a href="#" className="text-secondary font-medium hover:underline">Terms &amp; Conditions</a>
            {' '}and{' '}
            <a href="#" className="text-secondary font-medium hover:underline">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading || !firstName || !lastName || !email || !password || !confirmPassword || !agreed}
          className="w-full py-4 rounded-full font-bold text-gray-900 flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50 mt-2"
          style={{ background: 'linear-gradient(90deg, #FFCC00, #FFB800)' }}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-on-primary-container/30 border-t-on-primary-container rounded-full animate-spin" />
          ) : (
            <>
              Create Account
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </>
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
        {/* Phone Signup Link */}
        <Link
          href="/signup/phone"
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm group"
        >
          <span className="material-symbols-outlined text-[20px] text-gray-600 transition-colors">
            smartphone
          </span>
          Sign up with Phone Number
        </Link>
        {/* Google */}
        <button
          type="button"
          onClick={handleSocialSignup}
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all shadow-sm"
        >
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Sign up with Google
        </button>

        {/* Apple */}
        <button
          type="button"
          onClick={handleSocialSignup}
          className="w-full border border-gray-200 bg-white rounded-xl py-3.5 flex items-center justify-center gap-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all shadow-sm"
        >
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 814 1000" fill="currentColor">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.1 269-317.1 70.6 0 129.5 46.4 173.9 46.4 42.7 0 109.6-49.8 188.3-49.8zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
          </svg>
          Sign up with Apple
        </button>
      </div>

      {/* Sign in link */}
      <p className="flex flex-col mt-8 text-sm text-gray-500 text-center">
        Already have an account?{' '}
        <Link href="/login/email" className="font-semibold text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
