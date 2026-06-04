'use client';

import Link from 'next/link';

const CONTACT_CHANNELS = [
  { title: 'Chat with us', detail: 'Typical response: < 15 min', icon: 'forum', color: 'text-blue-600', bg: 'bg-blue-100' },
  { title: 'MTN Support Line', detail: '+234 800 YELLOW (Free)', icon: 'call', color: 'text-green-600', bg: 'bg-green-100' },
  { title: 'Email Marketplace Team', detail: 'Typical response: 24h', icon: 'mail', color: 'text-amber-600', bg: 'bg-amber-100' },
  { title: 'Twitter Support', detail: '@MTNYellowConnect', icon: 'share', color: 'text-sky-500', bg: 'bg-sky-100' },
];

export default function SafetyContactPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/help/hub" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Safety & Contact</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        {/* Safety First */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-3xl p-8 mb-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-black mb-3">Safety & Security</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Never share your MoMo PIN with anyone, including MTN staff. All transactions must happen within the marketplace to be protected by our Escrow service.
            </p>
            <button className="bg-white text-red-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
              <span className="material-symbols-outlined">shield</span>
              Report a Safety Concern
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {CONTACT_CHANNELS.map(channel => (
            <div key={channel.title} className="bg-surface p-6 rounded-3xl border border-outline-variant/20 flex gap-4 items-center group cursor-pointer hover:border-primary/50 transition-all">
              <div className={`w-12 h-12 rounded-2xl ${channel.bg} flex items-center justify-center ${channel.color} shrink-0`}>
                <span className="material-symbols-outlined text-2xl">{channel.icon}</span>
              </div>
              <div>
                <p className="font-bold text-sm group-hover:text-primary transition-colors">{channel.title}</p>
                <p className="text-xs text-on-surface-variant font-medium">{channel.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Identity Verification Note */}
        <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/20">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
            <div>
              <h3 className="font-bold text-lg mb-2">Priority Support for Verified Users</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Users with a verified identity (KYC) are prioritized in our support queue. Not verified yet? Get verified in minutes.
              </p>
              <Link href="/verification/center" className="inline-block bg-secondary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all">
                Go to Verification Center
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
