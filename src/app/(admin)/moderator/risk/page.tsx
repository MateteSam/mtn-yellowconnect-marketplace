'use client';

import Link from 'next/link';

const FLAGS = [
  { id: '1', merchant: 'Gadget_HQ', issue: 'Unusual Payout Spike', score: 88, status: 'Urgent', type: 'Financial' },
  { id: '2', merchant: 'Tech_Lagos', issue: 'Repetitive Tax Rejections', score: 62, status: 'Active', type: 'Compliance' },
  { id: '3', merchant: 'SME_Kit_Store', issue: 'Suspected Bot Reviews', score: 45, status: 'Review', type: 'Content' },
];

export default function ModeratorRiskFlaggingSystemPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/moderator/dashboard" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Risk Flagging System</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-4xl">
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {['Global Queue', 'High Confidence', 'Financial', 'Compliance', 'Product Quality'].map((tab, i) => (
            <button key={tab} className={`whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-black border transition-all ${i === 0 ? 'bg-primary text-black border-primary shadow-lg' : 'bg-surface border-outline-variant/20 text-on-surface-variant'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FLAGS.map(flag => (
            <div key={flag.id} className="bg-surface rounded-[32px] border border-outline-variant/20 shadow-sm p-6 relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${flag.status === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                   <span className="text-lg font-black">{flag.score}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{flag.type}</span>
              </div>
              
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">{flag.merchant}</p>
              <h3 className="font-black text-sm mb-4 leading-tight">{flag.issue}</h3>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden text-[0px]">
                   <div className={`h-full ${flag.score > 80 ? 'bg-red-600' : 'bg-amber-500'}`} style={{ width: `${flag.score}%` }}>.</div>
                </div>
                <span className="text-[9px] font-bold text-on-surface-variant">AI Conf.</span>
              </div>

              <div className="flex gap-3">
                <Link href={`/moderator/risk/detail/${flag.id}`} className="flex-1 bg-surface-container-high text-on-surface py-3 rounded-xl font-black text-[10px] text-center hover:bg-black hover:text-white transition-all">
                  Investigate
                </Link>
                <button className="px-4 bg-surface-container-lowest text-on-surface-variant border border-outline-variant/10 rounded-xl hover:text-green-600 transition-colors">
                  <span className="material-symbols-outlined text-sm">check</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-ai p-8 rounded-[40px] border border-primary/20 flex flex-col sm:flex-row gap-6 items-center justify-between">
           <div className="flex gap-4 items-start max-w-lg">
             <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
             <div>
                <p className="font-black text-sm mb-1 italic">Bulk Action Recommended</p>
                <p className="text-xs text-on-surface-variant leading-relaxed font-bold">
                  MTN AI detected 112 low-confidence "Content" flags from a single bot cluster. Resolve these in one click to clear your queue.
                </p>
             </div>
           </div>
           <Link href="/moderator/risk/bulk" className="bg-black text-white px-8 py-4 rounded-2xl font-black text-xs shadow-xl shrink-0 hover:scale-[1.02] transition-transform">
              Open Bulk Resolver
           </Link>
        </div>
      </main>
    </div>
  );
}
