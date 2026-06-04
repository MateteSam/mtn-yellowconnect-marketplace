"use client";

export const runtime = 'edge';

import Link from 'next/link';

export default function ModeratorTaxDisputeDetailPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 flex flex-col">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/moderator/dashboard" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Tax Dispute: #TXN-9921-A</h1>
        <div className="ml-auto bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Priority High</div>
      </header>

      <main className="flex-1 container mx-auto px-container-margin-mobile py-8 max-w-lg lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="space-y-8">
          <section className="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-6">Consolidated Dispute Info</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Claimant</p>
                  <p className="text-sm font-bold">Ibrahim's Tech Hub</p>
                  <p className="text-[10px] text-primary font-bold uppercase">Gold Seller · Verified TIN</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Disputed Amount</p>
                  <p className="text-lg font-black text-red-600">₦1,250.00</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Reason Stated</p>
                <p className="text-sm font-black italic">"Exempt goods category - These are educational hardware kits."</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4 px-2">Evidence & Documents</h3>
            <div className="space-y-3">
              {[
                { name: 'FIRS_Exemption_Letter.pdf', size: '1.2MB' },
                { name: 'Invoice_Correction.jpg', size: '840KB' },
              ].map(doc => (
                <div key={doc.name} className="bg-surface p-4 rounded-2xl border border-outline-variant/10 flex items-center justify-between group hover:border-primary/50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline-variant">description</span>
                    <span className="text-xs font-bold">{doc.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant">{doc.size}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 lg:mt-0 space-y-8">
          <section className="bg-white dark:bg-slate-900 border border-outline-variant/20 rounded-[40px] p-8 shadow-xl">
             <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-6">Moderator Resolution</h3>
             <div className="space-y-6">
                <textarea 
                  rows={4} 
                  placeholder="Internal notes (visible to other moderators)..."
                  className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 text-xs outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex gap-4">
                  <button className="flex-1 bg-red-50 text-red-600 py-4 rounded-2xl font-black text-xs hover:bg-red-100 transition-colors">Reject Dispute</button>
                  <button className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-black text-xs shadow-lg hover:brightness-110 transition-all">Approve & Refund</button>
                </div>
             </div>
          </section>

          <div className="glass-ai p-6 rounded-3xl border border-primary/20">
             <div className="flex gap-4 items-center">
               <span className="material-symbols-outlined text-primary">gavel</span>
               <p className="text-[10px] text-on-surface font-black leading-relaxed antialiased">
                 Regulation Check: Section 14B requires educational items to be verified via FIRS letterhead before VAT reversal is processed.
               </p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
