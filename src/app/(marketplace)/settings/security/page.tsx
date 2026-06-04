'use client';

import Link from 'next/link';
import { useState } from 'react';

type Device = { id: string; icon: string; name: string; location: string; current?: boolean };
const DEVICES: Device[] = [
  { id: 'd1', icon: 'smartphone', name: 'iPhone 14 Pro', location: 'Accra, Ghana • Active now', current: true },
  { id: 'd2', icon: 'laptop_mac', name: 'MacBook Pro', location: 'Lagos, Nigeria • Last active 2 days ago' },
];

export default function AccountSecuritySettingsPage() {
  const [twoFA, setTwoFA] = useState(true);
  const [devices, setDevices] = useState(DEVICES);

  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* Header */}
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant shadow-sm flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/settings"
            className="active:scale-95 transition-transform text-primary hover:bg-surface-container-high rounded-full p-2 flex items-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Account Security</h1>
        </div>
      </header>

      <main className="pt-[80px] pb-[100px] px-container-margin-mobile md:px-container-margin-desktop max-w-[768px] mx-auto flex flex-col gap-section-gap">
        {/* 2FA Toggle */}
        <section className="bg-surface-container-low rounded-xl p-gutter shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
              <h2 className="font-title-md text-title-md">Two-Factor Authentication (2FA)</h2>
            </div>
            <button
              role="switch"
              aria-checked={twoFA}
              onClick={() => setTwoFA(!twoFA)}
              className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                twoFA ? 'bg-primary-container' : 'bg-surface-variant'
              }`}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                  twoFA ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Adds an extra layer of security to your account. We&apos;ll ask for a code sent to your phone when you log
            in on a new device.
          </p>
          {twoFA && (
            <Link
              href="/setup-2fa"
              className="mt-3 inline-flex items-center gap-1 text-body-sm font-body-sm text-secondary hover:underline"
            >
              Manage 2FA settings <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          )}
        </section>

        {/* Trusted Devices */}
        <section>
          <h2 className="font-title-md text-title-md mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">devices</span>
            Trusted Devices
          </h2>
          <div className="flex flex-col gap-4">
            {devices.map(d => (
              <div
                key={d.id}
                className="bg-surface rounded-xl p-gutter shadow-sm border border-outline-variant flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-surface-container h-12 w-12 rounded-full flex items-center justify-center">
                    <span className={`material-symbols-outlined ${d.current ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {d.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-body-lg text-body-lg font-bold">{d.name}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{d.location}</p>
                  </div>
                </div>
                {d.current ? (
                  <button className="font-label-caps text-label-caps text-on-surface-variant border border-outline-variant rounded-lg px-3 py-1 hover:bg-surface-container transition-colors">
                    Log Out
                  </button>
                ) : (
                  <button
                    onClick={() => setDevices(prev => prev.filter(x => x.id !== d.id))}
                    className="font-label-caps text-label-caps text-error border border-error-container rounded-lg px-3 py-1 hover:bg-error-container hover:text-on-error-container transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="font-title-md text-title-md mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">history</span>
            Recent Activity
          </h2>
          <div className="bg-surface-container-low rounded-xl p-4 overflow-hidden border border-outline-variant">
            <div className="relative pl-6 border-l-2 border-surface-variant">
              {[
                {
                  dot: 'bg-primary',
                  time: 'Today, 09:41 AM',
                  event: 'New sign-in',
                  detail: 'iPhone 14 Pro • Accra, Ghana',
                  detailClass: 'text-on-surface-variant',
                },
                {
                  dot: 'bg-surface-variant',
                  time: 'Yesterday, 14:22 PM',
                  event: 'Password changed',
                  detail: 'MacBook Pro • Lagos, Nigeria',
                  detailClass: 'text-on-surface-variant',
                },
                {
                  dot: 'bg-surface-variant',
                  time: 'Oct 12, 2023',
                  event: 'Failed login attempt',
                  detail: 'Unknown Device • London, UK',
                  detailClass: 'text-error',
                },
              ].map((a, i) => (
                <div key={i} className={`relative ${i < 2 ? 'mb-6' : ''}`}>
                  <div className={`absolute w-3 h-3 ${a.dot} rounded-full -left-[31px] top-1`} />
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">{a.time}</p>
                  <p className="font-body-lg text-body-lg font-semibold">{a.event}</p>
                  <p className={`font-body-sm text-body-sm ${a.detailClass}`}>{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <button className="bg-error text-on-error font-body-lg text-body-lg py-3 rounded-lg shadow-sm hover:opacity-90 transition-opacity mt-4 text-center">
          Log Out of All Devices
        </button>
      </main>
    </div>
  );
}
