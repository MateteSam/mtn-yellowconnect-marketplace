'use client';

import Link from 'next/link';

export default function PathToPlatinumInsightsPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/profile" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Path to Platinum</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg text-center">
        <div className="mb-12 relative inline-block">
          <div className="w-48 h-48 rounded-full border-8 border-surface-container-high flex items-center justify-center">
             <div className="absolute inset-0 rounded-full border-8 border-primary border-r-transparent border-b-transparent -rotate-45"></div>
             <div>
               <p className="text-4xl font-black italic">82%</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Complete</p>
             </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
            Level: Gold Elite
          </div>
        </div>

        <div className="mb-10 text-left">
          <h2 className="text-2xl font-black mb-2">Almost there, Ibrahim!</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            You're just <strong className="text-primary">₦2.4M</strong> in sales away from unlocking Platinum. Here are your AI-driven growth priorities:
          </p>
        </div>

        <div className="space-y-4 mb-10 text-left">
          {[
            { title: 'Increase Average Order Value', desc: 'Sellers in your category utilize "Bulk Bundling" to boost order size by 24%.', icon: 'trending_up', progress: 40 },
            { title: 'Improve Response Time', desc: 'Platinum members respond within 15 mins. Your current average: 42 mins.', icon: 'timer', progress: 65 },
            { title: 'Ad Performance', desc: 'Boost 3 more listings to reach the discovery threshold.', icon: 'rocket_launch', progress: 90 },
          ].map(milestone => (
            <div key={milestone.title} className="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">{milestone.icon}</span>
                <div>
                  <p className="font-black text-sm">{milestone.title}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">{milestone.desc}</p>
                </div>
              </div>
              <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${milestone.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-ai p-8 rounded-[40px] border border-primary/20 text-left">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-black italic">Platinum Perks Preview</h3>
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
          </div>
          <ul className="space-y-4">
             {[
               { perk: '0% Transfer Fees', desc: 'Unlimited withdrawals to MoMo.', icon: 'money_off' },
               { perk: 'Priority Support', desc: 'Under 10min dispute resolution.', icon: 'support_agent' },
               { perk: 'Elite Heatmaps', desc: 'See exactly where users click.', icon: 'stadium' },
             ].map(p => (
               <li key={p.perk} className="flex gap-4 items-start">
                 <span className="material-symbols-outlined text-sm pt-0.5">{p.icon}</span>
                 <div>
                   <p className="text-sm font-bold">{p.perk}</p>
                   <p className="text-[10px] text-on-surface-variant font-medium">{p.desc}</p>
                 </div>
               </li>
             ))}
          </ul>
        </div>

        <button className="w-full mt-10 bg-black text-white py-5 rounded-3xl font-bold shadow-xl hover:scale-[1.01] transition-all">
          Upgrade to Platinum Early (₦150k / yr)
        </button>
      </main>
    </div>
  );
}
