'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Choose2FAMethodPage() {
  const [method, setMethod] = useState<'app' | 'sms'>('app');
  const router = useRouter();

  const handleContinue = () => {
    if (method === 'app') {
      router.push('/setup-2fa/authenticator');
    } else {
      router.push('/setup-2fa/sms');
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased flex flex-col items-center justify-start">
      <main className="w-full max-w-[500px] flex-1 flex flex-col px-container-margin-mobile py-8 md:py-12">
        {/* Minimal header */}
        <header className="flex items-center mb-8">
          <Link
            href="/login"
            aria-label="Go back"
            className="p-2 -ml-2 rounded-full hover:bg-surface-variant transition-colors flex items-center justify-center text-on-surface"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </header>

        {/* Hero icon */}
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-sm relative"
          style={{ background: 'linear-gradient(135deg, #fcf9f8 0%, #ebe7e7 100%)' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[48px] text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_lock
            </span>
          </div>
        </div>

        {/* Typography */}
        <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-center mb-4 md:text-headline-lg md:font-headline-lg text-on-surface">
          Secure Your Account
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant text-center mb-10">
          Two-factor authentication (2FA) adds an extra layer of security. Even if someone gets your password, they
          won&apos;t be able to access your account.
        </p>

        {/* Method options */}
        <div className="flex flex-col gap-4 mb-12">
          {/* Authenticator App */}
          <button
            type="button"
            onClick={() => setMethod('app')}
            className={`relative p-4 md:p-5 rounded-xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start gap-4 hover:bg-surface-container-low ${
              method === 'app' ? 'border-primary bg-surface-container-low' : 'border-outline-variant bg-surface'
            }`}
          >
            {/* Radio indicator */}
            <div
              className={`w-6 h-6 flex-shrink-0 rounded-full border-2 transition-colors mt-1 flex items-center justify-center ${
                method === 'app' ? 'border-primary bg-primary' : 'border-outline-variant'
              }`}
            >
              {method === 'app' && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-tertiary">phonelink_lock</span>
                <span className="text-title-md font-title-md text-on-surface">Authenticator App</span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Get codes from an app like Google Authenticator or Authy. Highly secure and works offline.
              </p>
            </div>
            {/* Recommended badge */}
            <div className="absolute -top-3 right-4 bg-tertiary-container text-on-tertiary-container text-label-caps font-label-caps px-3 py-1 rounded-full shadow-sm uppercase">
              Recommended
            </div>
          </button>

          {/* SMS */}
          <button
            type="button"
            onClick={() => setMethod('sms')}
            className={`relative p-4 md:p-5 rounded-xl border-2 text-left cursor-pointer transition-all duration-200 flex items-start gap-4 hover:bg-surface-container-low ${
              method === 'sms' ? 'border-primary bg-surface-container-low' : 'border-outline-variant bg-surface'
            }`}
          >
            <div
              className={`w-6 h-6 flex-shrink-0 rounded-full border-2 transition-colors mt-1 flex items-center justify-center ${
                method === 'sms' ? 'border-primary bg-primary' : 'border-outline-variant'
              }`}
            >
              {method === 'sms' && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-secondary">sms</span>
                <span className="text-title-md font-title-md text-on-surface">SMS / Text Message</span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Receive a unique 6-digit verification code via text message to your registered mobile number.
              </p>
            </div>
          </button>
        </div>

        {/* Action */}
        <div className="mt-auto pt-4">
          <button
            onClick={handleContinue}
            className="w-full py-4 px-6 rounded-full bg-primary-container text-on-primary-fixed text-title-md font-title-md font-bold transition-transform duration-100 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            Continue
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
}
