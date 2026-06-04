'use client';

import Link from 'next/link';

export default function AcceptableUsePolicyPage() {
  const sections = [
    { title: '1. Illegal Activities', content: "You may not use the Platform for any illegal purposes or to facilitate illegal activities. This includes the sale of weapons, illegal drugs, or items prohibited by local laws in Nigeria, Ghana, or other participating countries." },
    { title: '2. Listing Standards', content: "All listings must be accurate, truthful, and complete. Deceptive titles, misleading images, or inaccurate pricing insights will result in automatic removal by AI moderation tools." },
    { title: '3. Intellectual Property', content: "You must own or have the rights to all content you post. Mirroring listings from other marketplaces without authorization is strictly prohibited." },
    { title: '4. System Integrity', content: "Any attempt to bypass marketplace fees, manipulate AI reputation scores, or scrape data from the Platform using unauthorized automated tools is a violation of these terms." },
    { title: '5. Community Conduct', content: "Respectful interaction is required. Harassment, hate speech, or sharing sensitive personal information of other users will result in immediate account suspension." },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/legal/terms" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Acceptable Use Policy</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-2xl p-6 mb-10 flex gap-4 items-start">
          <span className="material-symbols-outlined text-red-600 shrink-0">report_problem</span>
          <div>
            <h2 className="font-bold text-red-700 dark:text-red-400 mb-1">Zero Tolerance Policy</h2>
            <p className="text-sm text-red-600/80 dark:text-red-400/80 leading-relaxed">
              MTN YellowConnect enforces a zero-tolerance policy for fraudulent listings. Violations may lead to permanent bans and reporting to relevant authorities.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map(section => (
            <section key={section.title}>
              <h3 className="font-black text-xl mb-4 text-on-surface flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                {section.title}
              </h3>
              <div className="text-on-surface-variant leading-relaxed text-sm bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h3 className="text-xl font-bold mb-3 relative">Found a violation?</h3>
          <p className="text-white/70 text-sm mb-6 relative">Help us keep YellowConnect safe. Report suspicious listings directly from the product page or contact our Trust & Safety team.</p>
          <Link href="/help/safety-contact" className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            Report a Violation <span className="material-symbols-outlined text-[18px]">flag</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
