'use client';

import Link from 'next/link';

export default function MerchantTaxFilingGuidePage() {
  const steps = [
    { title: 'Download your Certificate', desc: 'Get your official 2025 Annual Tax Clearance from the Export Hub.', icon: 'download' },
    { title: 'Reconcile MoMo Sales', desc: 'Compare your marketplace summary with your MoMo statement for accurate filing.', icon: 'rebase_edit' },
    { title: 'Deduct MTNYC VAT', desc: 'Ensure you dont double-pay! VAT already withheld by MTNYC is listed on page 2 of your certificate.', icon: 'account_balance_wallet' },
    { title: 'Submit to FIRS/LIRS', desc: 'Upload the combined CSV to the official TaxPromax portal.', icon: 'cloud_upload' },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/tax/compliance" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Filing Guide</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-lg">
        <div className="mb-10 text-center px-4">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-[40px]">menu_book</span>
          </div>
          <h2 className="text-3xl font-black mb-2">Merchant Filing Guide</h2>
          <p className="text-sm text-on-surface-variant max-w-xs mx-auto font-medium">Follow these steps to ensure your marketplace taxes are filed correctly and on time.</p>
        </div>

        <div className="space-y-8 mb-12">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-6 relative">
              {i !== steps.length - 1 && (
                <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-outline-variant/20 border-dashed border-l"></div>
              )}
              <div className="w-12 h-12 bg-surface text-black border-2 border-primary rounded-full flex items-center justify-center shrink-0 z-10 font-black text-xs">
                {i + 1}
              </div>
              <div className="pt-2">
                <p className="font-black text-sm mb-1">{step.title}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed opacity-80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 mb-10">
          <div className="flex gap-4 items-center mb-4">
            <span className="material-symbols-outlined text-secondary">calendar_month</span>
            <p className="text-sm font-black">2026 Deadlines</p>
          </div>
          <div className="space-y-4">
             <div className="flex justify-between items-center text-xs border-b border-outline-variant/10 pb-2">
               <span className="text-on-surface-variant">Annual VAT Filing</span>
               <span className="font-bold text-red-600">June 30, 2026</span>
             </div>
             <div className="flex justify-between items-center text-xs">
               <span className="text-on-surface-variant">Personal Income Tax</span>
               <span className="font-bold text-green-600">Sept 30, 2026</span>
             </div>
          </div>
        </div>

        <Link href="/tax/export/certificate" className="block w-full bg-primary text-black py-5 rounded-2xl font-bold text-center shadow-lg hover:scale-[1.01] transition-all">
          Generate Filing Documents
        </Link>
      </main>
    </div>
  );
}
