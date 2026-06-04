'use client';

import Link from 'next/link';

const COMPLIANCE_ITEMS = [
  { title: 'Tax Identification Number (TIN)', status: 'Verified', icon: 'badge', color: 'text-green-600', bg: 'bg-green-100' },
  { title: 'VAT Registration', status: 'Pending', icon: 'receipt_long', color: 'text-amber-600', bg: 'bg-amber-100' },
  { title: 'Annual Tax Filing 2024', status: 'Action Required', icon: 'description', color: 'text-red-600', bg: 'bg-red-100' },
  { title: 'Business Registration (CAC)', status: 'Verified', icon: 'apartment', color: 'text-green-600', bg: 'bg-green-100' },
];

export default function MerchantTaxCompliancePage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/settings/profile" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <h1 className="font-bold text-lg ml-2">Tax & Compliance</h1>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl">
        {/* Overview Banner */}
        <div className="bg-gradient-to-r from-secondary to-blue-700 text-white rounded-2xl p-5 mb-6 flex items-center gap-4">
          <span className="material-symbols-outlined text-4xl text-white/80" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          <div>
            <p className="font-black text-lg">Compliance Status</p>
            <p className="text-white/70 text-sm">2 of 4 requirements complete. Action needed.</p>
          </div>
        </div>

        {/* Tax Documents */}
        <div className="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden mb-6">
          <div className="p-5 border-b border-outline-variant/10">
            <h2 className="font-bold text-title-md">Compliance Checklist</h2>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {COMPLIANCE_ITEMS.map(item => (
              <div key={item.title} className="flex items-center gap-4 px-5 py-4 hover:bg-surface-container-lowest transition-colors">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-medium text-sm text-on-surface">{item.title}</p>
                  <p className={`text-xs font-bold ${item.color}`}>{item.status}</p>
                </div>
                <button className={`text-xs font-bold px-3 py-1.5 rounded-full ${item.status === 'Verified' ? 'bg-green-100 text-green-700' : item.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600'}`}>
                  {item.status === 'Verified' ? 'View' : 'Action'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* TIN Verification CTA */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm mb-6">
          <h2 className="font-bold text-base mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500">warning</span>
            Annual Tax Filing Due
          </h2>
          <p className="text-sm text-on-surface-variant mb-4">Your 2024 annual tax return is due by June 30, 2026. Failure to file may result in account restrictions.</p>
          <Link href="/tax/verify-tin" className="block w-full bg-secondary text-white text-center py-3 rounded-xl font-bold hover:brightness-110 transition-all">
            Begin Tax Filing →
          </Link>
        </div>

        {/* Tax Summary */}
        <div className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm">
          <h2 className="font-bold text-title-md mb-4">2024 Tax Summary</h2>
          <div className="space-y-3">
            {[
              { label: 'Total Gross Revenue', value: '₦3,840,000' },
              { label: 'Total VAT Collected', value: '₦576,000 (15%)' },
              { label: 'Marketplace Fees', value: '₦0 (Gold)' },
              { label: 'Estimated Tax Liability', value: '₦288,000' },
            ].map(row => (
              <div key={row.label} className="flex justify-between py-2 border-b border-outline-variant/10 last:border-0">
                <span className="text-sm text-on-surface-variant">{row.label}</span>
                <span className="text-sm font-bold">{row.value}</span>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full text-secondary font-bold text-sm hover:underline flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Tax Report (PDF)
          </button>
        </div>
      </main>
    </div>
  );
}
