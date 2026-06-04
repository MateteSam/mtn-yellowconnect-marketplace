'use client';

import Link from 'next/link';

export default function CookiePolicyPage() {
  const cookieTypes = [
    { name: 'Essential Cookies', desc: 'Required for basic platform functionality (login, basket, security).', status: 'Always Active', icon: 'security' },
    { name: 'AI Optimization Cookies', desc: 'Used by our AI engines to personalize your pricing insights and product feed.', status: 'Optional', icon: 'auto_awesome' },
    { name: 'Analytics Cookies', desc: 'Help us understand how users interact with the marketplace to improve the UI.', status: 'Optional', icon: 'analytics' },
    { name: 'Marketing Cookies', desc: 'Used for sponsored listings and tracking ad performance for merchants.', status: 'Optional', icon: 'campaign' },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/legal/privacy" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Cookie Policy</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        <div className="mb-10 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <span className="material-symbols-outlined text-4xl">cookie</span>
          </div>
          <h2 className="text-3xl font-black mb-3">How we use cookies</h2>
          <p className="text-on-surface-variant leading-relaxed text-sm max-w-xl mx-auto italic">
            "Cookies are small text files that help us make your YellowConnect experience more efficient and personalized."
          </p>
        </div>

        <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-sm divide-y divide-outline-variant/10 mb-10">
          {cookieTypes.map(type => (
            <div key={type.name} className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant">{type.icon}</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-base">{type.name}</h3>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${type.status === 'Always Active' ? 'bg-green-100 text-green-700' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                    {type.status}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{type.desc}</p>
              </div>
              {type.status === 'Optional' && (
                <div className="flex items-center h-full pt-1">
                  <div className="w-12 h-6 bg-primary rounded-full relative shadow-inner">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low p-6 rounded-2xl text-xs text-on-surface-variant leading-relaxed mb-10">
          <p className="font-bold text-on-surface mb-2">Third-Party Cookies</p>
          We also use cookies from trusted third parties like Google Analytics and MoMo payment gateway to ensure secure and efficient service delivery.
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-primary text-black py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
            Save My Preferences
          </button>
          <button className="flex-1 bg-surface-container-highest py-4 rounded-2xl font-bold border border-outline-variant/20">
            Accept All
          </button>
        </div>
      </main>
    </div>
  );
}
