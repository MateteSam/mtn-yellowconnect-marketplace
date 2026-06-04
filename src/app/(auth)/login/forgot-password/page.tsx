'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setIsLoading(false);
    router.push('/login/reset-password');
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
          lock_reset
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Forgot Password?</h1>
      <p className="text-sm text-gray-500 text-center mb-8 leading-snug">
        Don&apos;t worry! Please enter the email address associated with your account.
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider"
            htmlFor="recovery-input"
          >
            Email Address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </span>
            <input
              id="recovery-input"
              type="email"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="example@domain.com"
              required
              className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
            />
          </div>
        </div>

        {/* Info box */}
        <div className="bg-secondary-fixed/30 border border-secondary-fixed-dim/50 rounded-lg p-3 flex items-start gap-3 backdrop-blur-sm">
          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">info</span>
          <p className="text-label-caps font-label-caps text-on-secondary-fixed-variant normal-case">
            We will send you an OTP or a secure link to reset your password.
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading || !value}
          className="w-full py-3 bg-primary-container text-on-primary-container text-title-md font-title-md rounded-full shadow-sm hover:bg-inverse-primary active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-on-primary-container/30 border-t-on-primary-container rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Reset Link
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative w-full max-w-sm my-6 border-t border-gray-200">
      </div>

      {/* Back to login */}
      <div className="flex justify-center">
        <Link
          href="/login/email"
          className="text-body-sm font-body-sm text-secondary hover:text-on-secondary-container hover:underline transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Login
        </Link>
      </div>
    </div>
  );
}
