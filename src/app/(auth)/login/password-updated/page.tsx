'use client';

import Link from 'next/link';

export default function PasswordUpdatedPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-12"
      style={{ background: 'linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)' }}
    >
      {/* Success Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
        style={{ background: 'linear-gradient(135deg,#FFD700,#FFBE00)' }}
      >
        <span
          className="material-symbols-outlined text-[32px] text-gray-800"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Password Updated!</h1>
      <p className="text-sm text-gray-500 text-center mb-8 leading-snug">
        Your account is now secure with your new password. Please log in again to continue.
      </p>

      {/* Back to login */}
      <div className="w-full flex justify-center">
        {/* CTA */}
        <Link
          href="/login/email"
          className="w-full py-4 rounded-full font-bold text-gray-900 flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
          style={{ background: 'linear-gradient(90deg,#FFD700,#FFBE00)' }}
        >
          Back to Login
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
