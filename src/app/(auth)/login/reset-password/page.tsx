'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPass !== confirmPass || newPass.length < 8) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    router.push('/login/password-updated');
  };

  const mismatch = confirmPass.length > 0 && newPass !== confirmPass;

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
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Create New Password</h1>
      <p className="text-sm text-gray-500 text-center mb-8 leading-snug">
        Your new password must be different from previous ones.
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-5">
        {/* New Password */}
        <div className="flex flex-col gap-1">
          <label className="text-label-caps font-label-caps text-on-surface-variant uppercase" htmlFor="new-password">
            New Password
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </span>
            <input
              id="new-password"
              type={showNew ? 'text' : 'password'}
              value={newPass}
              onChange={e => setNewPass(e.target.value)}
              placeholder="Enter new password"
              required
              minLength={8}
              className="w-full bg-surface-container-low border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg py-3 pl-10 pr-10 text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 transition-colors outline-none"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showNew ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
          <div className="text-[11px] text-on-surface-variant mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">info</span> Must be at least 8 characters.
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <label className="text-label-caps font-label-caps text-on-surface-variant uppercase" htmlFor="confirm-password">
            Confirm New Password
          </label>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </span>
            <input
              id="confirm-password"
              type={showConfirm ? 'text' : 'password'}
              value={confirmPass}
              onChange={e => setConfirmPass(e.target.value)}
              placeholder="Re-enter new password"
              required
              className={`w-full border rounded-lg py-3 pl-10 pr-10 text-body-lg font-body-lg text-on-surface placeholder:text-on-surface-variant/50 transition-colors outline-none ${mismatch
                ? 'bg-error-container/20 border-error focus:border-error focus:ring-error'
                : 'bg-surface-container-low border-transparent focus:border-secondary focus:ring-secondary'
                } focus:ring-1`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showConfirm ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
          {mismatch && (
            <p className="text-[11px] text-error mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">error</span> Passwords do not match.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !newPass || !confirmPass || mismatch}
          className="mt-4 w-full bg-primary-container text-on-primary-fixed text-title-md font-title-md font-bold py-3 px-6 rounded-full hover:bg-primary-fixed transition-colors active:scale-95 duration-100 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-on-primary-container/30 border-t-on-primary-container rounded-full animate-spin" />
          ) : (
            <>
              Update Password
              <span className="material-symbols-outlined">arrow_forward</span>
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative w-full max-w-sm my-6 border-t border-gray-200">
      </div>

      {/* Back to login */}
      <div className="flex justify-center">
        <Link href="/login/email" className="text-body-sm font-body-sm text-secondary hover:underline">
          Cancel &amp; Return to Login
        </Link>
      </div>
    </div>
  );
}
