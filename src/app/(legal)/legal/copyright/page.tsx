'use client';

import Link from 'next/link';

export default function CopyrightPolicyPage() {
  const points = [
    { title: 'Intellectual Property Rights', content: "All trademarks, logos, and service marks displayed on MTN YellowConnect are the property of MTN Group or their respective owners. Unauthorized use is prohibited." },
    { title: 'License to Use', content: "We grant you a limited, non-exclusive license to access the Platform for buying or selling. You may not reproduce, distribute, or create derivative works without explicit written permission." },
    { title: 'User Content License', content: "By posting listings, you grant MTN YellowConnect a worldwide, royalty-free license to use your product images and descriptions for promotional purposes across the MTN ecosystem." },
    { title: 'Copyright Infringement (DMCA)', content: "If you believe your work has been copied in a way that constitutes copyright infringement, please submit a notice to our Legal team with proof of ownership." },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/legal/terms" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Copyright Policy</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {points.map(point => (
            <div key={point.title} className="bg-surface p-8 rounded-3xl border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-all group">
              <h3 className="font-black text-lg mb-4 text-on-surface group-hover:text-primary transition-colors">{point.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm antialiased">{point.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/20">
          <h2 className="text-2xl font-black mb-4">Notice of Infringement</h2>
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
            To report a copyright violation, please prepare a notice containing the description of the copyrighted work, the location (URL) of the infringing material on our platform, and your contact information.
          </p>
          <div className="space-y-4">
            <button className="w-full bg-secondary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">gavel</span>
              Submit IP Claim
            </button>
            <p className="text-center text-xs text-on-surface-variant font-medium">Claims are reviewed within 48 business hours by our legal team.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
