'use client';

import Link from 'next/link';

export default function AIPricingInsightsPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center justify-between px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Link href="/seller/analytics" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
          <div>
            <h1 className="font-bold text-base text-primary">AI Pricing Insights</h1>
            <p className="text-[11px] text-on-surface-variant">Solar Irrigation Hub Pro</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
          <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          AI Powered
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl space-y-6">

        {/* Price Positioning Card */}
        <div className="bg-surface rounded-2xl p-6 border border-outline-variant/20 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Your Price vs. Market</p>
          <div className="relative h-10 bg-surface-container-highest rounded-full overflow-hidden mb-4">
            {/* Market range bar */}
            <div className="absolute top-1 bottom-1 rounded-full bg-secondary/20" style={{ left: '20%', right: '25%' }} />
            {/* Optimal price marker */}
            <div className="absolute top-0 bottom-0 w-1 bg-green-500 rounded" style={{ left: '42%' }} />
            {/* Your price marker */}
            <div className="absolute top-1 bottom-1 w-2 bg-primary rounded-full" style={{ left: '58%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-on-surface-variant">
            <span>₦300k (Low)</span>
            <span className="text-green-600 font-bold">₦420k optimal</span>
            <span>₦600k+ (High)</span>
          </div>
          <p className="text-xs text-on-surface-variant mt-3 text-center">
            Your price <strong className="text-on-surface">₦450,000</strong> is <strong className="text-amber-500">7% above optimal</strong> — consider reducing by ₦30k to improve conversions by ~22%.
          </p>
        </div>

        {/* AI Deep Analysis */}
        <div className="glass-ai rounded-2xl p-5 border border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary p-2 rounded-xl text-on-primary shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div>
              <p className="font-bold text-secondary text-xs uppercase tracking-widest">AI Deep Analysis</p>
              <p className="text-xs text-on-surface-variant">Based on 2,340 similar transactions</p>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Listings priced between <strong className="text-on-surface">₦410k – ₦430k</strong> in the Agri-Tech category achieve the highest conversion rate (14.2%) in Lagos and Accra.
            Your current price has a predicted conversion rate of <strong className="text-amber-500">9.8%</strong>.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/50 rounded-xl p-3 text-center border border-outline-variant/20">
              <p className="font-black text-lg text-secondary">14.2%</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Optimal CVR</p>
            </div>
            <div className="bg-white/50 rounded-xl p-3 text-center border border-primary/20 bg-primary/5">
              <p className="font-black text-lg text-amber-500">9.8%</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Your CVR</p>
            </div>
            <div className="bg-white/50 rounded-xl p-3 text-center border border-outline-variant/20">
              <p className="font-black text-lg text-green-600">+4.4%</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Potential Gain</p>
            </div>
          </div>
        </div>

        {/* Competitor Intel */}
        <div className="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-outline-variant/10">
            <h2 className="font-bold text-title-md">Competitor Pricing</h2>
            <p className="text-xs text-on-surface-variant">Top 5 similar listings this week</p>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {[
              { seller: 'SolarTech NG', price: '₦415,000', sold: 28, trust: 'Gold' },
              { seller: 'GreenPower GH', price: '₦428,000', sold: 19, trust: 'Verified' },
              { seller: 'AgroSolar KE', price: '₦390,000', sold: 34, trust: 'Gold' },
              { seller: 'EcoPump', price: '₦460,000', sold: 8, trust: 'Standard' },
              { seller: 'SunEnergy Ng', price: '₦440,000', sold: 15, trust: 'Verified' },
            ].map((c, i) => (
              <div key={i} className={`flex items-center gap-4 px-5 py-3.5 ${i === 2 ? 'bg-green-50 dark:bg-green-900/10' : ''}`}>
                <div className="w-6 text-center font-bold text-on-surface-variant text-sm">#{i + 1}</div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm truncate">{c.seller}</p>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${c.trust === 'Gold' ? 'bg-yellow-100 text-yellow-700' : c.trust === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-surface-container-high text-on-surface-variant'}`}>
                      {c.trust}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{c.sold} units sold</p>
                </div>
                <p className={`font-bold text-sm shrink-0 ${i === 2 ? 'text-green-600' : 'text-secondary'}`}>{c.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-primary text-black py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">edit</span>
          Apply AI Suggested Price (₦420,000)
        </button>
      </main>
    </div>
  );
}
