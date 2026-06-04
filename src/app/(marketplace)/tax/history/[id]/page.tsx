"use client";

export const runtime = 'edge';

import Link from 'next/link';

export default function ComplianceSubmissionDetailPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/history" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Submission Details</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-white text-slate-900 rounded-[40px] shadow-2xl overflow-hidden mb-10">
          <div className="bg-slate-900 p-8 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Reference ID: #TAX-99201-B</p>
            <h2 className="text-2xl font-black">TIN Verification</h2>
            <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Successfully Verified
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Submitted On</p>
                <p className="text-sm font-bold">May 15, 2026</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Verified On</p>
                <p className="text-sm font-bold">May 16, 2026</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Authority</p>
                <p className="text-sm font-bold">FIRS (Nigeria)</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tax ID</p>
                <p className="text-sm font-bold">22394****812</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Supporting Documents</h3>
              <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between border border-slate-100 group hover:border-primary/50 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">picture_as_pdf</span>
                  <span className="text-sm font-bold">TIN_Certificate.pdf</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 text-center">
          <p className="text-xs text-on-surface-variant font-medium mb-4">Something wrong with this submission?</p>
          <button className="text-sm font-black text-secondary hover:underline">Request Update or Re-verification</button>
        </div>
      </main>
    </div>
  );
}
