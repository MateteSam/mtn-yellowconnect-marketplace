'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  const sections = [
    { title: '1. Acceptance of Terms', content: "By accessing or using the MTN YellowConnect Marketplace ('the Platform'), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Platform." },
    { title: '2. Merchant Eligibility', content: "Merchants must be at least 18 years old and possess a valid tax identification number (TIN) in their country of registration. Gold and Platinum memberships are subject to additional performance requirements." },
    { title: '3. Fees and Payments', content: "We charge fees for transactions and premium subscriptions. Payouts are made to your MoMo wallet. MTN Gold members enjoy 0% marketplace commission but are subject to a monthly subscription fee." },
    { title: '4. Prohibited Content', content: "You may not list illegal substances, weapons, counterfeit goods, or items that violate our Acceptable Use Policy. AI moderation tools will automatically flag and remove non-compliant listings." },
    { title: '5. Limitation of Liability', content: "To the maximum extent permitted by law, MTN YellowConnect shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform." },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/help/hub" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Terms of Service</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl">
        <div className="mb-10">
          <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">Last Updated: June 1, 2026</p>
          <h2 className="text-3xl font-black mb-4">Platform Rules & Regulations</h2>
          <p className="text-on-surface-variant leading-relaxed">
            These terms govern your relationship with the MTN YellowConnect marketplace. High-trust interaction is the foundation of our community.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map(section => (
            <section key={section.title}>
              <h3 className="font-black text-lg mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-black">
                  {section.title.split('.')[0]}
                </span>
                {section.title.split('. ')[1]}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm ml-11 border-l-2 border-outline-variant/20 pl-6">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-4">
          <button className="flex-1 bg-secondary text-white py-4 rounded-2xl font-bold hover:brightness-110 transition-all">
            Download PDF Version
          </button>
          <Link href="/help/hub" className="flex-1 bg-surface-container-high text-center py-4 rounded-2xl font-bold hover:bg-surface-container-highest transition-all border border-outline-variant/20">
            Back to Help Center
          </Link>
        </div>
      </main>
    </div>
  );
}
