'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SecurityLoginSettingsPage() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <main className="max-w-4xl mx-auto px-container-margin-mobile py-8 md:py-12">
        <header className="mb-8">
          <Link
            href="/settings"
            className="inline-flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors mb-4"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to Settings
          </Link>
          <h2 className="font-headline-lg text-headline-lg mb-2">Security Settings</h2>
          <p className="text-on-surface-variant">Manage your account protection and sign-in preferences.</p>
        </header>

        {/* AI Security Scout */}
        <section className="glass-ai rounded-xl p-6 mb-section-gap flex flex-col md:flex-row gap-4 items-center">
          <div className="bg-primary-container p-3 rounded-full flex items-center justify-center">
            <span
              className="material-symbols-outlined text-on-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-title-md text-title-md text-secondary">AI Security Scout</h3>
              <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded-full uppercase">
                Optimal
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              Your account has no detected vulnerabilities. Your Two-Factor Authentication (2FA) is shielding your data
              across 3 trusted devices.
            </p>
          </div>
          <button className="bg-gradient-to-r from-secondary to-tertiary text-on-secondary px-6 py-2 rounded-full font-bold transition-transform active:scale-95 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Audit Account
          </button>
        </section>

        <div className="space-y-4">
          {/* Change Password */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden">
            <button
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="w-full flex items-center justify-between p-5 hover:bg-surface-variant transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="text-secondary bg-secondary-fixed p-2 rounded-lg">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <span className="block font-title-md text-on-surface">Change Password</span>
                  <span className="text-body-sm text-on-surface-variant">Last changed 3 months ago</span>
                </div>
              </div>
              <span
                className="material-symbols-outlined transition-transform duration-300"
                style={{ transform: showPasswordForm ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                expand_more
              </span>
            </button>
            {showPasswordForm && (
              <div className="p-6 bg-surface-container-lowest border-t border-outline-variant">
                <form className="space-y-4 max-w-md" onSubmit={e => e.preventDefault()}>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={currentPass}
                      onChange={e => setCurrentPass(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-secondary p-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPass}
                      onChange={e => setNewPass(e.target.value)}
                      placeholder="Min. 8 characters"
                      className="w-full bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-secondary p-3 outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-primary text-on-primary-fixed font-bold px-6 py-2 rounded-lg hover:brightness-95 transition-all"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Two-Factor Authentication */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant p-5 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="text-secondary bg-secondary-fixed p-2 rounded-lg">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <span className="block font-title-md text-on-surface">Two-Factor Authentication</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-body-sm text-green-700 font-bold">Active</span>
                </div>
              </div>
            </div>
            <Link
              href="/setup-2fa"
              className="text-secondary font-bold hover:bg-secondary-container/20 px-4 py-2 rounded-lg transition-all"
            >
              Configure
            </Link>
          </div>

          {/* Trusted Devices */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-secondary bg-secondary-fixed p-2 rounded-lg">
                  <span className="material-symbols-outlined">devices</span>
                </div>
                <div>
                  <span className="block font-title-md text-on-surface">Trusted Devices</span>
                  <span className="text-body-sm text-on-surface-variant">3 devices currently recognized</span>
                </div>
              </div>
              <button className="text-secondary font-bold hover:bg-secondary-container/20 px-4 py-2 rounded-lg transition-all">
                Manage
              </button>
            </div>
            <div className="space-y-3 pl-14">
              <div className="flex items-center justify-between py-2 border-b border-outline-variant/30">
                <div>
                  <span className="block text-body-lg font-semibold">Samsung Galaxy S23</span>
                  <span className="text-body-sm text-on-surface-variant">Accra, Ghana • Current Device</span>
                </div>
                <span className="text-primary font-bold text-label-caps uppercase">This Device</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-outline-variant/30">
                <div>
                  <span className="block text-body-lg font-semibold">MacBook Pro 14&quot;</span>
                  <span className="text-body-sm text-on-surface-variant">Lagos, Nigeria • 2 days ago</span>
                </div>
                <button className="text-error font-bold text-label-caps uppercase">Revoke</button>
              </div>
            </div>
          </div>

          {/* Login Activity */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-secondary bg-secondary-fixed p-2 rounded-lg">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <div>
                  <span className="block font-title-md text-on-surface">Login Activity</span>
                  <span className="text-body-sm text-on-surface-variant">Monitor your recent sign-ins</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-3 bg-surface rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <span className="material-symbols-outlined text-green-600">login</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold">Successful Login</span>
                    <span className="text-body-sm text-on-surface-variant">Today, 09:41 AM</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">Chrome on Windows • 192.168.1.45</p>
                </div>
              </div>
              <div className="flex gap-4 p-3 bg-error-container/20 border border-error/10 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <span className="material-symbols-outlined text-error">warning</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-error">Failed Login Attempt</span>
                    <span className="text-body-sm text-on-surface-variant">Oct 12, 11:20 PM</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">Safari on Unknown • 45.12.19.2</p>
                  <button className="text-error font-bold text-label-caps uppercase mt-2">
                    Not me? Secure account
                  </button>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 text-center text-secondary font-bold py-2 hover:bg-surface-variant rounded-lg transition-all">
              View All Activity
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
