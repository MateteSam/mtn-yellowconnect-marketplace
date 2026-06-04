'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function OTPContent() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const flowType = searchParams.get('type') || 'signin';
  const method = searchParams.get('method') || 'phone';
  const identifier = searchParams.get('identifier') || '';

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer(s => s - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (i: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otp];
    next[i] = val.slice(-1);
    setOtp(next);
    if (val && i < 5) inputs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) inputs.current[i - 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6).split('');
    const next = [...otp];
    digits.forEach((d, i) => { next[i] = d; });
    setOtp(next);
    inputs.current[Math.min(digits.length, 5)]?.focus();
  };

  const handleVerify = async () => {
    if (otp.join('').length < 6) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    if (flowType === 'signup') {
      router.push('/signup/success');
    } else {
      router.push('/home');
    }
  };

  const handleResend = () => {
    setCanResend(false);
    setResendTimer(30);
    setOtp(['', '', '', '', '', '']);
    inputs.current[0]?.focus();
  };

  const filled = otp.join('').length === 6;

  // Formatting identifier for display
  const displayIdentifier = method === 'phone' && identifier.length > 7
    ? `${identifier.slice(0, 7)}***${identifier.slice(-2)}`
    : identifier;

  const backLink = flowType === 'signup'
    ? (method === 'phone' ? '/signup/phone' : '/signup/email')
    : (method === 'phone' ? '/login/phone' : '/login/email');

  return (
    <div
      className="min-h-screen flex flex-col px-6 pt-4 pb-10"
      style={{ background: '#FDF8F0' }}
    >
      {/* Back arrow */}
      <Link
        href={backLink}
        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors mb-10"
      >
        <span className="material-symbols-outlined text-[22px] text-gray-700">arrow_back</span>
      </Link>

      {/* Blue circle icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
          style={{ background: 'linear-gradient(135deg,#4A90D9,#2563EB)' }}>
          <span
            className="material-symbols-outlined text-white text-[28px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {method === 'email' ? 'mail' : 'shield'}
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
        {method === 'email' ? 'Verify Your Email' : 'Verify Your Number'}
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8 leading-snug">
        We&apos;ve sent a 6-digit code to<br />
        <span className="font-semibold text-gray-800">{displayIdentifier || 'your device'}</span>
      </p>

      {/* 6-box OTP input */}
      <div className="flex gap-2 justify-center mb-5" onPaste={handlePaste}>
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={el => { inputs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKeyDown(i, e)}
            className={`w-10 h-12 text-center text-xl font-bold rounded-xl border-2 outline-none transition-all bg-white
              ${digit
                ? 'border-blue-500 text-gray-900'
                : 'border-gray-200 focus:border-blue-400 text-gray-900'
              }`}
          />
        ))}
      </div>

      {/* Resend link */}
      <p className="text-sm text-gray-500 text-center mb-8">
        Didn&apos;t receive the code?{' '}
        {canResend ? (
          <button
            onClick={handleResend}
            className="font-semibold text-blue-600 hover:underline"
          >
            Resend Code
          </button>
        ) : (
          <span className="text-blue-400 font-semibold">Resend Code {resendTimer > 0 && `(${resendTimer}s)`}</span>
        )}
      </p>

      {/* Verify & Continue button */}
      <button
        onClick={handleVerify}
        disabled={isLoading || !filled}
        className="w-full py-4 rounded-full font-bold text-gray-900 flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
        style={{
          background: filled && !isLoading
            ? 'linear-gradient(90deg,#FFD700,#FFBE00)'
            : '#FFE066',
        }}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-gray-600/30 border-t-gray-700 rounded-full animate-spin" />
            Verifying...
          </>
        ) : (
          <>Verify &amp; Continue <span className="material-symbols-outlined text-[20px]">arrow_forward</span></>
        )}
      </button>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F0]">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    }>
      <OTPContent />
    </Suspense>
  );
}
