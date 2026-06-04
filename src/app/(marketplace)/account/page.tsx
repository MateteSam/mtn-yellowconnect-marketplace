'use client';

import Link from 'next/link';

const SETTINGS_SECTIONS = [
  {
    title: 'Account',
    items: [
      { icon: 'person', label: 'Edit Profile', href: '#' },
      { icon: 'phone', label: 'Phone Number', href: '#', value: '+234 808 ***' },
      { icon: 'email', label: 'Email Address', href: '#', value: 'a.kunle@email.com' },
      { icon: 'lock', label: 'Password & Security', href: '#' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: 'language', label: 'Country & Currency', href: '#', value: 'Nigeria · ₦' },
      { icon: 'notifications', label: 'Notifications', href: '#' },
      { icon: 'dark_mode', label: 'Appearance', href: '#', value: 'Light' },
    ],
  },
  {
    title: 'Seller',
    items: [
      { icon: 'store', label: 'My Listings', href: '/profile' },
      { icon: 'account_balance_wallet', label: 'Wallet & Payments', href: '#' },
      { icon: 'receipt_long', label: 'Sales History', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: 'help', label: 'Help Center', href: '#' },
      { icon: 'chat', label: 'Contact Support', href: '#' },
      { icon: 'policy', label: 'Privacy Policy', href: '#' },
    ],
  },
];

export default function AccountSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-container-margin-mobile py-6 flex flex-col gap-6">
      {/* Profile summary */}
      <div className="flex items-center gap-4 p-5 bg-surface-container-low rounded-2xl">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center text-xl font-bold text-on-primary-container">
          AK
        </div>
        <div className="flex-1">
          <h2 className="text-title-md font-title-md text-on-surface font-bold">Adewale Kunle</h2>
          <p className="text-body-sm font-body-sm text-on-surface-variant">+234 808 *** · Lagos, NG</p>
        </div>
        <Link href="/profile" className="p-2 rounded-full hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </Link>
      </div>

      {/* AI Wallet Banner */}
      <div className="glass-ai rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
        </div>
        <div className="flex-1">
          <div className="text-label-caps font-label-caps text-on-surface-variant">MTN Wallet Balance</div>
          <div className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface font-bold">₦ 54,200.00</div>
        </div>
        <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold px-4 py-2 rounded-xl hover:bg-primary-fixed-dim transition-colors">
          Top Up
        </button>
      </div>

      {/* Settings sections */}
      {SETTINGS_SECTIONS.map(section => (
        <div key={section.title}>
          <h3 className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider mb-3 px-1">{section.title}</h3>
          <div className="bg-surface rounded-2xl border border-outline-variant/50 overflow-hidden">
            {section.items.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 p-4 hover:bg-surface-container-low transition-colors ${
                  i < section.items.length - 1 ? 'border-b border-outline-variant/30' : ''
                }`}
              >
                <span className="material-symbols-outlined text-secondary text-[22px]">{item.icon}</span>
                <span className="flex-1 text-body-lg font-body-lg text-on-surface">{item.label}</span>
                {item.value && (
                  <span className="text-body-sm font-body-sm text-on-surface-variant">{item.value}</span>
                )}
                <span className="material-symbols-outlined text-outline text-[18px]">chevron_right</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Logout */}
      <button className="w-full border border-error text-error font-body-sm text-body-sm font-semibold py-3 rounded-xl hover:bg-error-container transition-colors">
        <span className="material-symbols-outlined text-[16px] mr-2" style={{ verticalAlign: 'middle' }}>logout</span>
        Sign Out
      </button>
    </div>
  );
}
