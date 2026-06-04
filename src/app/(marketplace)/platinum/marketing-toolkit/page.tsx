'use client';

import Link from 'next/link';

const TOOLS = [
  {
    id: 'banner',
    title: 'Custom Brand Banners',
    desc: 'AI-generated promotional banners in MTN Platinum style for social media and landing pages.',
    icon: 'image',
    cta: 'Generate Banner',
  },
  {
    id: 'email',
    title: 'Email Campaign Templates',
    desc: '12 ready-to-use buyer re-engagement email templates with AI personalisation fields.',
    icon: 'mail',
    cta: 'View Templates',
  },
  {
    id: 'video',
    title: 'AI Product Video',
    desc: 'Auto-generate 30-second product showcase videos from your listing images.',
    icon: 'videocam',
    cta: 'Create Video',
  },
  {
    id: 'qr',
    title: 'Custom QR Code',
    desc: 'Generate a branded QR code linked directly to your store for offline marketing.',
    icon: 'qr_code_2',
    cta: 'Get QR Code',
  },
  {
    id: 'seo',
    title: 'AI Listing SEO',
    desc: 'Optimise your listing titles and descriptions with AI to rank higher in search.',
    icon: 'manage_search',
    cta: 'Optimize Now',
  },
  {
    id: 'analytics',
    title: 'Audience Insights Report',
    desc: 'Download a custom PDF report on your buyer demographics and purchase trends.',
    icon: 'analytics',
    cta: 'Download Report',
  },
];

export default function PlatinumMarketingToolkitPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/platinum/requirements" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <div className="ml-2">
          <h1 className="font-bold text-base">Marketing Toolkit</h1>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
            <span className="text-[11px] font-bold text-yellow-600 uppercase">Platinum Exclusive</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-6 max-w-2xl">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-3xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,#FFCC00,transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <span className="material-symbols-outlined text-yellow-400 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
              6 Exclusive Tools
            </div>
            <h2 className="text-2xl font-black mb-2">Grow your brand with AI</h2>
            <p className="text-white/70 text-sm">Everything you need to market your store — powered by generative AI and your real sales data.</p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS.map(tool => (
            <div key={tool.id} className="bg-surface rounded-2xl p-5 border border-outline-variant/20 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined">{tool.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{tool.title}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{tool.desc}</p>
                </div>
              </div>
              <button className="w-full bg-secondary/10 text-secondary text-xs font-bold py-2 rounded-xl hover:bg-secondary/20 transition-colors border border-secondary/20">
                {tool.cta}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
