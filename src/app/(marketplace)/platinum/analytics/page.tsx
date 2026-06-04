'use client';

import Link from 'next/link';

export default function EliteAnalyticsDashboardPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-24">
      <header className="bg-slate-800/80 backdrop-blur-md flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-white/5">
        <Link href="/profile" className="material-symbols-outlined text-white/60 p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Elite Analytics</h1>
        <div className="ml-auto bg-primary text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Platinum</div>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-2xl">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Conversion Rate</p>
            <p className="text-3xl font-black">4.82%</p>
            <p className="text-[10px] font-bold text-green-400 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span> +1.2%
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Bounce Rate</p>
            <p className="text-3xl font-black">21.5%</p>
            <p className="text-[10px] font-bold text-red-400 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_down</span> -0.4%
            </p>
          </div>
        </div>

        {/* Funnel Visual */}
        <section className="mb-10">
          <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 px-2">Elite Sales Funnel</h3>
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 relative overflow-hidden">
             <div className="space-y-4">
                {[
                  { label: 'Impressions', value: '42,500', width: '100%', color: 'bg-primary/20' },
                  { label: 'Clicks', value: '8,410', width: '70%', color: 'bg-primary/40' },
                  { label: 'Add to Cart', value: '1,240', width: '40%', color: 'bg-primary/60' },
                  { label: 'Orders', value: '412', width: '15%', color: 'bg-primary' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1 text-[10px] font-black uppercase tracking-widest">
                       <span>{item.label}</span>
                       <span>{item.value}</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                       <div className={`h-full ${item.color}`} style={{ width: item.width }}></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Heatmap Mockup */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40">Visual Heatmap</h3>
            <span className="text-[10px] font-black italic text-primary underline">AI Region Breakdown</span>
          </div>
          <div className="bg-white/5 rounded-[40px] aspect-video border border-white/10 p-4 relative overflow-hidden flex items-center justify-center">
             <div className="w-full h-full bg-slate-800 rounded-2xl relative opacity-40">
                {/* Simulated Heat Spots */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
             </div>
             <p className="absolute text-xs font-black uppercase tracking-widest opacity-60">Listing Discovery Heatmap</p>
          </div>
        </section>

        <div className="glass-ai p-8 rounded-[32px] border border-primary/20">
          <div className="flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <div>
              <p className="font-bold text-sm mb-2">Elite AI Recommendation</p>
              <p className="text-xs text-white/60 leading-relaxed font-bold antialiased">
                "Users in Lagos-VI area are ignoring your blue banners. Testing <strong className="text-primary italic">Yellow-Gold high-contrast</strong> images could increase local conversion by 18%."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
