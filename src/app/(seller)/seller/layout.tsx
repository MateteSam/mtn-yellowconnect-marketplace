'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';

const NAV_ITEMS = [
  { href: '/seller/inventory', icon: 'inventory_2', label: 'Inventory' },
  { href: '/seller/analytics', icon: 'insights', label: 'Analytics' },
  { href: '/seller/ads', icon: 'campaign', label: 'Ads' },
  { href: '/seller/reviews', icon: 'reviews', label: 'Reviews' },
  { href: '/seller/settings', icon: 'settings', label: 'Settings' },
];

const SIDE_MENU_ITEMS = [
  { href: '/seller/profile', icon: 'store', label: 'My Shop Profile' },
  { href: '/seller/tax/compliance', icon: 'account_balance', label: 'Tax Center' },
  { href: '/seller/analytics', icon: 'bar_chart', label: 'Store Performance' },
  { href: '/seller/performance-billing', icon: 'payments', label: 'Billing & Payouts' },
  { href: '/seller/reviews', icon: 'rate_review', label: 'Customer Reviews' },
  { href: '/seller/settings', icon: 'manage_accounts', label: 'Merchant Settings' },
];

export default function SellerLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`overflow-y-auto fixed top-0 left-0 h-full w-[280px] bg-surface z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } flex flex-col`}
      >
        <div className="p-4 border-b border-outline-variant flex flex-col gap-4 bg-secondary/10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-title-md font-bold text-secondary">Seller Hub</span>
              <span className="text-label-sm text-on-surface-variant font-medium">MTN Seller Pro Dashboard</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>
          </div>
        </div>

        <nav className="flex-1 px-2 py-4 flex flex-col gap-1">
          <div className="px-4 mb-2">
            <span className="text-label-caps font-bold text-on-surface-variant/60 text-[10px]">Merchant Management</span>
          </div>
          {SIDE_MENU_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${active
                  ? 'bg-secondary/10 text-secondary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
              >
                <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {item.icon}
                </span>
                <span className="font-title-md text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-2 bg-surface-container-lowest border-t border-outline-variant/10">
          <div className="bg-secondary/5 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-on-secondary shadow-sm">
              KM
            </div>
            <div className="flex flex-col">
              <span className="text-body-sm font-bold">Kwame's Agri-Tech</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Gold Merchant</span>
            </div>
          </div>
          <Link
            href="/home"
            className="mt-2 flex items-center justify-center gap-2 py-2 text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/20 rounded-xl uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Exit to Marketplace
          </Link>
        </div>
      </aside>

      {/* Top App Bar */}
      <header
        className="sticky top-0 w-full h-[60px] flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop bg-surface z-50 shadow-sm border-b border-outline-variant/10"
        id="topAppBar"
      >
        <div className="flex items-center gap-1 md:gap-3">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-90"
          >
            <span className="material-symbols-outlined text-on-surface">menu</span>
          </button>
          <Link href="/seller/inventory" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
            <div className="flex flex-col">
              <span className="text-title-sm font-bold text-on-surface leading-tight">MTN Seller Pro</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-none">Dashboard</span>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium hover:bg-surface-container-low px-2 py-1 transition-colors ${active ? 'text-secondary border-b-2 border-secondary font-bold' : 'text-on-surface-variant'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary relative">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-surface"></span>
          </div>
          <div className="hidden sm:block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20">
            Gold Seller
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-24 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 w-full h-[70px] flex justify-around items-center px-4 py-2 z-50 md:hidden bg-surface rounded-t-3xl shadow-[0_-8px_24px_rgba(0,0,0,0.08)] border-t border-outline-variant/20 transition-transform"
        id="bottomNavBar"
      >
        {NAV_ITEMS.map(item => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center rounded-2xl px-4 py-2 transition-all ${active
                ? 'bg-secondary/10 text-secondary scale-95'
                : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-bold uppercase mt-1 tracking-tighter">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
