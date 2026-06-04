'use client';

import Link from 'next/link';

export default function ModeratorBulkRiskResolutionPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/moderator/risk" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Bulk Resolver</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-primary text-black p-8 rounded-[40px] mb-10 shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl font-black italic mb-2">112</h2>
          <p className="text-xs font-black uppercase tracking-widest opacity-60">Low-Risk Items Selected</p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4 bg-surface p-6 rounded-3xl border border-outline-variant/20">
             <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
               <span className="material-symbols-outlined">group_work</span>
             </div>
             <div>
               <p className="font-black text-sm">Cluster: #MTN-BOT-091</p>
               <p className="text-xs text-on-surface-variant">Duplicate content reviews from verified bot-cluster.</p>
             </div>
          </div>
          
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">Sample Flag Content</h3>
            <p className="text-xs text-on-surface leading-relaxed italic">"Great product, definitely the best in class in Nigeria, but the price tag...." (Repeated 42 times across various products)</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 rounded-3xl">
             <p className="text-xs font-bold text-red-600 mb-4 text-center italic">Warning: Bulk resolving will mark all selected items as "Inactive - Not a Threat".</p>
             <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-sm shadow-xl hover:brightness-110 active:scale-[0.98] transition-all">
                Bulk Dispute All 112 Flags
             </button>
          </div>
          <button className="w-full bg-surface-container-highest py-5 rounded-2xl font-black text-sm border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
            Dismiss & Return To Queue
          </button>
        </div>
      </main>
    </div>
  );
}
