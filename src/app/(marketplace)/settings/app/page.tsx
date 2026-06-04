'use client';

import Link from 'next/link';
import { useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function AppSettingsPage() {
  const [theme, setTheme] = useState<Theme>('light');
  const [smartRecs, setSmartRecs] = useState(true);
  const [cacheLabel, setCacheLabel] = useState<'Clear Cache' | 'Clearing...' | 'Cleared!'>('Clear Cache');

  const handleClearCache = () => {
    setCacheLabel('Clearing...');
    setTimeout(() => {
      setCacheLabel('Cleared!');
      setTimeout(() => setCacheLabel('Clear Cache'), 2000);
    }, 1200);
  };

  return (
    <div className="bg-surface text-on-surface pb-32 min-h-screen">
      <main className="max-w-3xl mx-auto px-container-margin-mobile pt-8 space-y-section-gap">
        {/* Header */}
        <section>
          <Link
            href="/settings"
            className="inline-flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant hover:text-on-surface transition-colors mb-4"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Settings
          </Link>
          <h2 className="font-headline-lg text-headline-lg mb-2">Settings</h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Customize your marketplace experience and account preferences.
          </p>
        </section>

        {/* App Preferences */}
        <div className="space-y-4">
          <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest px-1">
            App Preferences
          </h3>
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
            {/* Language */}
            <div className="flex items-center justify-between p-4 border-b border-outline-variant hover:bg-surface-container transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md">Language</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">English (United Kingdom)</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>

            {/* Theme */}
            <div className="p-4 border-b border-outline-variant">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">dark_mode</span>
                </div>
                <p className="font-title-md text-title-md">Appearance</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'light', icon: 'light_mode', label: 'Light' },
                    { id: 'dark', icon: 'bedtime', label: 'Dark' },
                    { id: 'system', icon: 'devices', label: 'System' },
                  ] as { id: Theme; icon: string; label: string }[]
                ).map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setTheme(opt.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                      theme === opt.id
                        ? 'border-primary bg-primary-container text-on-primary-container'
                        : 'border-outline-variant hover:bg-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined">{opt.icon}</span>
                    <span className="font-label-caps text-label-caps">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage */}
            <div className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">database</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md">Storage</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">124 MB cached data</p>
                </div>
              </div>
              <button
                onClick={handleClearCache}
                disabled={cacheLabel !== 'Clear Cache'}
                className={`px-4 py-2 font-label-caps text-label-caps rounded-full active:scale-95 transition-all ${
                  cacheLabel === 'Cleared!'
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant/30'
                } disabled:opacity-70`}
              >
                {cacheLabel}
              </button>
            </div>
          </div>
        </div>

        {/* AI Personalization */}
        <section className="glass-ai p-6 rounded-2xl relative overflow-hidden border border-primary/10">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl">auto_awesome</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-secondary to-tertiary text-[10px] font-bold text-white uppercase tracking-widest">
              AI Enhanced
            </span>
          </div>
          <h3 className="font-title-md text-title-md mb-2">Smart Recommendations</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 max-w-md">
            Our AI Scout learns from your browsing habits to surface localized deals and relevant entrepreneurs across
            Africa.
          </p>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={smartRecs}
                onChange={e => setSmartRecs(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
            </label>
            <span className="font-label-caps text-label-caps">Personalized Feed</span>
          </div>
        </section>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest px-1">Support</h3>
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-outline-variant hover:bg-surface-container transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant">help</span>
                <span className="font-body-lg text-body-lg">Help Center</span>
              </div>
              <span className="material-symbols-outlined text-outline">open_in_new</span>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-surface-container transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant">description</span>
                <span className="font-body-lg text-body-lg">Terms of Service</span>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Log Out */}
        <button className="w-full p-4 text-error font-title-md text-title-md text-center border border-error/20 rounded-xl hover:bg-error/5 transition-colors active:scale-[0.98]">
          Log Out
        </button>
        <div className="text-center pb-8">
          <p className="font-label-caps text-label-caps text-outline">Yel&apos;Low Mart v2.4.0</p>
        </div>
      </main>
    </div>
  );
}
