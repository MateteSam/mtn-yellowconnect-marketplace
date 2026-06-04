'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const sections = [
    { title: '1. Introduction', content: "MTN YellowConnect ('we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our marketplace applications and services." },
    { title: '2. Information We Collect', content: "We collect information you provide directly to us, such as when you create an account, list a product, or communicate with other users. This includes your name, email, MoMo wallet details, and business registration information." },
    { title: '3. How We Use Information', content: "We use your information to facilitate transactions, improve our AI-driven pricing and recommendation engines, prevent fraud, and comply with tax and legal obligations across multiple jurisdictions." },
    { title: '4. AI and Automated Decision Making', content: "We use AI to provide pricing insights and detect suspicious activity. As a merchant, your sales data is used to calculate your 'AI Credit Score' for lending opportunities. You can request a manual review of any automated decision that significantly affects you." },
    { title: '5. Sharing of Information', content: "We may share your information with MTN Group subsidiaries, tax authorities (e.g., FIRS, GRA), and third-party logistics partners to fulfill your orders and comply with local laws." },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/help/hub" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Privacy Policy</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        <div className="mb-10">
          <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">Effective June 1, 2026</p>
          <h2 className="text-3xl font-black mb-4">Your privacy matters to us.</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Please read this policy carefully to understand how we handle your personal data. By using MTN YellowConnect, you agree to the practices described herein.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map(section => (
            <section key={section.title} className="border-l-4 border-primary/20 pl-6 py-2">
              <h3 className="font-black text-xl mb-3 text-on-surface">{section.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm antialiased">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-surface-container-high rounded-3xl border border-outline-variant/20">
          <h3 className="font-bold mb-2">Questions?</h3>
          <p className="text-sm text-on-surface-variant mb-4 font-medium italic">
            "Our AI Data Officer is available 24/7 to answer specifics about how your listings are indexed."
          </p>
          <Link href="/help/safety-contact" className="text-primary font-bold hover:underline flex items-center gap-1">
            Contact Data Protection Office <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
