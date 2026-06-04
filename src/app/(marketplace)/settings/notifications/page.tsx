'use client';

import Link from 'next/link';
import { useState } from 'react';

const NOTIFICATION_CHANNELS = [
  { id: 'email', label: 'Email Notifications', description: 'Receive updates via Kwame.M@gh.com' },
  { id: 'sms', label: 'SMS Notifications', description: 'Receive updates via +233 24 123 4567' },
  { id: 'push', label: 'Push Notifications', description: 'Receive instant alerts on your mobile device' },
];

const CATEGORIES = [
  {
    id: 'transactional',
    title: 'Order Updates',
    description: 'Notifications about your sales, payouts, and shipping status.',
    channels: ['email', 'sms', 'push'],
  },
  {
    id: 'security',
    title: 'Security & Login',
    description: 'Alerts about new logins, password changes, and 2FA activity.',
    channels: ['email', 'sms', 'push'],
    required: true,
  },
  {
    id: 'marketing',
    title: 'Deals & Offers',
    description: 'Personalized recommendations and seasonal marketplace deals.',
    channels: ['email', 'push'],
  },
  {
    id: 'ai_scout',
    title: 'AI Scout Alerts',
    description: 'Smart buyer matching and price trend insights for your listings.',
    channels: ['push'],
    isAi: true,
  },
];

export default function NotificationPreferencesPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({
    'order-email': true,
    'order-sms': true,
    'order-push': true,
    'security-email': true,
    'security-sms': true,
    'security-push': true,
    'marketing-email': false,
    'marketing-push': true,
    'ai_scout-push': true,
  });

  const togglePref = (id: string) => {
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col pb-24">
      {/* Top Bar */}
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 shadow-sm border-b border-outline-variant/10">
        <Link 
          href="/settings" 
          className="material-symbols-outlined text-on-surface-variant p-2 active:scale-95 transition-transform"
        >
          arrow_back
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim ml-2">
          Notification Preferences
        </h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-8 max-w-2xl">
        <section className="mb-10">
          <h2 className="text-body-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Delivery Channels</h2>
          <div className="space-y-4">
            {NOTIFICATION_CHANNELS.map((channel) => (
              <div key={channel.id} className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30 flex items-center justify-between">
                <div>
                  <p className="font-bold text-on-surface">{channel.label}</p>
                  <p className="text-body-sm text-on-surface-variant">{channel.description}</p>
                </div>
                <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-body-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Notification Categories</h2>
          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className={`group ${cat.isAi ? 'glass-ai rounded-3xl p-6 border border-primary/10' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4">
                    {cat.isAi && (
                      <div className="bg-primary p-2 h-fit rounded-lg text-on-primary shrink-0">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                      </div>
                    )}
                    <div>
                      <p className={`font-bold text-title-md ${cat.isAi ? 'text-secondary' : 'text-on-surface'}`}>
                        {cat.title}
                      </p>
                      <p className="text-body-sm text-on-surface-variant max-w-sm">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-0 md:pl-4">
                  {cat.channels.map((channel) => {
                    const prefId = `${cat.id}-${channel}`;
                    const active = prefs[prefId];
                    const isDisabled = cat.required;

                    return (
                      <div key={channel} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-outline text-[20px]">
                            {channel === 'email' ? 'mail' : channel === 'sms' ? 'sms' : 'notifications'}
                          </span>
                          <span className="text-body-sm font-medium capitalize">{channel}</span>
                        </div>
                        <button
                          type="button"
                          disabled={isDisabled}
                          onClick={() => togglePref(prefId)}
                          className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                            active ? 'bg-secondary' : 'bg-outline-variant'
                          } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          <span
                            className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                              active ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center text-on-surface-variant">
          <p className="text-[12px]">Changes are saved automatically.</p>
        </section>
      </main>
    </div>
  );
}
