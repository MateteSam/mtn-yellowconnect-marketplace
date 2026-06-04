'use client';

import Link from 'next/link';
import { useState } from 'react';

const RECOVERY_CODES = ['X9B2-4K7T', 'M5V1-P8Q3', 'W2N6-C9F4', 'J7R3-L0D5', 'A4Y8-E6G1', 'H3Z9-T2K8'];

export default function TwoFASuccessPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(RECOVERY_CODES.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center p-container-margin-mobile md:p-container-margin-desktop antialiased">
      <main className="w-full max-w-lg">
        <div className="bg-surface rounded-xl shadow-lg border border-surface-variant overflow-hidden">
          {/* Hero section */}
          <div className="pt-section-gap pb-base px-gutter flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-secondary-fixed flex items-center justify-center mb-gutter">
              <span
                className="material-symbols-outlined text-[48px] text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_lock
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-base">
              Two-Factor Authentication Enabled
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
              Your account is now more secure. Please save these recovery codes in a safe place. You will need them to
              log in if you lose access to your device.
            </p>
          </div>

          {/* Recovery codes */}
          <div className="px-gutter pb-section-gap">
            <div className="bg-surface-container rounded-xl p-gutter border border-outline-variant relative">
              <div className="flex justify-between items-center mb-gutter">
                <h2 className="font-title-md text-title-md text-on-surface">Recovery Codes</h2>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors group ${
                    copied
                      ? 'bg-tertiary-container text-on-tertiary-container'
                      : 'text-secondary hover:bg-secondary-fixed'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span className="font-label-caps text-label-caps">{copied ? 'COPIED!' : 'COPY ALL'}</span>
                </button>
              </div>

              {/* Code grid */}
              <div className={`grid grid-cols-2 gap-base transition-all duration-200 ${copied ? 'opacity-50 scale-[0.98]' : ''}`}>
                {RECOVERY_CODES.map(code => (
                  <div key={code} className="bg-surface p-3 rounded-lg text-center border border-surface-variant">
                    <span className="font-body-sm text-body-sm text-on-surface tracking-[0.2em] font-bold">
                      {code}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warning */}
              <div className="mt-gutter flex items-start gap-2 bg-error-container/30 p-3 rounded-lg border border-error-container">
                <span className="material-symbols-outlined text-error text-[20px] mt-0.5">warning</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Keep these safe. Do not share them. MTN support will never ask for your recovery codes.
                </p>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="p-gutter border-t border-surface-variant bg-surface-bright">
            <Link
              href="/(marketplace)/settings/security"
              className="w-full bg-primary-container text-on-primary-container font-title-md text-title-md py-4 rounded-lg hover:bg-primary-fixed transition-colors flex justify-center items-center gap-2 active:scale-95"
            >
              Back to Security Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
