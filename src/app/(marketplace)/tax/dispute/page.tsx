'use client';

import Link from 'next/link';

export default function TaxDisputeDeductionPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Dispute Deduction</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">Transaction Ref:</span>
            <span className="text-xs font-bold font-mono">#TXN-9921-A</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">VAT Sub-total</p>
              <p className="text-2xl font-black">₦1,250</p>
            </div>
            <p className="text-xs text-on-surface-variant">Deducted June 01, 2026</p>
          </div>
        </div>

        <form className="space-y-6 mb-12">
          <div>
            <label className="block text-sm font-black mb-3">Reason for Dispute</label>
            <div className="space-y-3">
              {[
                'Incorrect VAT rate applied',
                'Exempt goods category',
                'Duplicate deduction found',
                'Other reason',
              ].map(reason => (
                <label key={reason} className="flex items-center gap-4 p-4 bg-surface border border-outline-variant/20 rounded-2xl cursor-pointer hover:border-primary/50 transition-all">
                  <input type="radio" name="reason" className="w-5 h-5 accent-primary" />
                  <span className="text-sm font-bold">{reason}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-black mb-3">Supporting Explanation (Optional)</label>
            <textarea 
              rows={4} 
              placeholder="Provide more context for our compliance team..."
              className="w-full bg-surface border border-outline-variant/20 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            />
          </div>

          <div className="bg-surface-container-highest p-6 rounded-2xl border border-outline-variant/10 border-dashed">
            <label className="block text-center cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">upload_file</span>
              <p className="text-sm font-bold">Upload Evidence (PDF/JPG)</p>
              <p className="text-[10px] text-on-surface-variant mt-1">Upload FIRS exemption certificate or corrected invoice</p>
              <input type="file" className="hidden" />
            </label>
          </div>
        </form>

        <Link href="/tax/dispute/success" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
          Submit Dispute Claim
        </Link>
      </main>
    </div>
  );
}
