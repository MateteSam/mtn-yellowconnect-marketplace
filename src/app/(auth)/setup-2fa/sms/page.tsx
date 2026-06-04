'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const COUNTRY_CODES = [
  { code: '+234', flag: '🇳🇬' },
  { code: '+27', flag: '🇿🇦' },
  { code: '+233', flag: '🇬🇭' },
  { code: '+254', flag: '🇰🇪' },
];

export default function SMSSetupPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [countryCode, setCountryCode] = useState('+234');
  const [phone, setPhone] = useState('');
  const [displayPhone, setDisplayPhone] = useState('');
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleSendCode = async () => {
    if (!phone) return;
    setIsSending(true);
    await new Promise(r => setTimeout(r, 800));
    setIsSending(false);
    setDisplayPhone(`${countryCode} ${phone}`);
    setStep(2);
    setTimeout(() => refs.current[0]?.focus(), 50);
  };

  const handleDigit = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[idx] = val;
    setDigits(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
      refs.current[idx - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    await new Promise(r => setTimeout(r, 900));
    setIsVerifying(false);
    router.push('/setup-2fa/success');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col items-center justify-center p-container-margin-mobile md:p-container-margin-desktop relative overflow-hidden antialiased">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary-container rounded-full blur-3xl opacity-20 pointer-events-none" />

      <main className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-3xl">lock_person</span>
          </div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-2">
            Setup SMS 2FA
          </h1>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Secure your account with two-factor authentication.
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel rounded-xl shadow-lg p-6 md:p-8 w-full">
          {step === 1 ? (
            <div className="space-y-4">
              <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2 uppercase tracking-wide">
                Mobile Number
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Country code */}
                <div className="relative w-full sm:w-1/3">
                  <select
                    value={countryCode}
                    onChange={e => setCountryCode(e.target.value)}
                    className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg pl-3 pr-8 text-body-lg font-body-lg text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary appearance-none cursor-pointer outline-none"
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </div>
                {/* Phone */}
                <div className="relative w-full sm:w-2/3">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-on-surface-variant">smartphone</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Enter your number"
                    className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-3 text-body-lg font-body-lg text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleSendCode}
                disabled={!phone || isSending}
                className="w-full h-12 bg-primary text-on-primary-fixed font-title-md text-title-md rounded-lg shadow-sm hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Code <span className="material-symbols-outlined text-sm">arrow_forward</span></>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2 text-center uppercase tracking-wide">
                  Enter Verification Code
                </label>
                <p className="text-body-sm font-body-sm text-center text-on-surface-variant mb-4">
                  We sent a 6-digit code to <span className="font-bold text-on-surface">{displayPhone}</span>
                </p>
                {/* OTP inputs */}
                <div className="flex justify-between gap-2 max-w-xs mx-auto mb-4">
                  {digits.map((d, idx) => (
                    <input
                      key={idx}
                      ref={el => { refs.current[idx] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={d}
                      onChange={e => handleDigit(idx, e.target.value)}
                      onKeyDown={e => handleKeyDown(idx, e)}
                      className="w-12 h-14 text-center text-headline-lg font-headline-lg bg-surface-container-low border border-outline-variant rounded-lg text-on-surface focus:bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setDigits(['', '', '', '', '', ''])}
                    className="text-body-sm font-body-sm text-secondary hover:text-on-secondary-container transition-colors"
                  >
                    Resend Code
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={!digits.every(d => d) || isVerifying}
                  className="w-full h-12 bg-primary text-on-primary-fixed font-title-md text-title-md rounded-lg shadow-sm hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isVerifying ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : 'Enable SMS 2FA'}
                </button>
                <button
                  type="button"
                  onClick={() => { setStep(1); setDigits(['', '', '', '', '', '']); }}
                  className="w-full h-12 bg-transparent border border-outline-variant text-on-surface font-title-md text-title-md rounded-lg hover:bg-surface-container-low transition-colors"
                >
                  Back to Number
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link
            href="/setup-2fa"
            className="inline-flex items-center gap-1 text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Return to Security Settings
          </Link>
        </div>
      </main>
    </div>
  );
}
