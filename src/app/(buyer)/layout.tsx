'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';

const NAV_ITEMS = [
  { href: '/home', icon: 'home', label: 'Home' },
  { href: '/products', icon: 'shopping_bag', label: 'Products' },
  { href: '/services', icon: 'handyman', label: 'Services' },
  { href: '/sell', icon: 'add_circle', label: 'Sell' },
];

const SIDE_MENU_ITEMS = [
  { href: '/profile', icon: 'person', label: 'Profile' },
  { href: '/orders/receipts', icon: 'receipt_long', label: 'My Orders' },
  { href: '/refunds/track', icon: 'assignment_return', label: 'Refunds' },
  { href: '/verification/center', icon: 'verified_user', label: 'Verification Center' },
  { href: '/lending', icon: 'payments', label: 'Lending' },
  { href: '/account', icon: 'settings', label: 'Account' },
];

export default function BuyerLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hideGlobalNav =
    pathname?.startsWith('/products/') ||
    pathname?.startsWith('/chat/') ||
    pathname?.startsWith('/checkout/');

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
      {/* ── SIDE MENU DRAWER ── */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <aside
        className={`overflow-y-auto fixed top-0 left-0 h-full w-[280px] bg-surface z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } flex flex-col`}
      >
        <div className="p-4 border-b border-outline-variant flex flex-col gap-4 bg-primary-container/10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-title-md font-bold text-primary">MTN Buyer</span>
              <span className="text-label-sm text-on-surface-variant font-medium">Shopping & Orders</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>
          </div>
        </div>

        <nav className="flex-1 px-2 py-2 flex flex-col gap-1">
          <div className="px-4 mb-2">
            <span className="text-label-caps font-bold text-on-surface-variant/60 text-[10px]">User Account</span>
          </div>
          {SIDE_MENU_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                className={`flex items-center gap-4 px-4 py-2 rounded-xl transition-all ${active
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                <span className="font-title-md text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ── TOP NAV BAR ── */}
      {!hideGlobalNav && (
        <header
          className="sticky top-0 w-full h-[60px] flex justify-between items-center px-4 bg-surface z-50 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-full hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </button>
            <Link href="/home" className="flex items-center gap-2">
              <span className="text-title-md font-bold text-primary">MTN Marketplace</span>
            </Link>
          </div>
          <Link href="/products/search" className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-primary">search</span>
          </Link>
        </header>
      )}

      {/* Main content */}
      <main className={`flex-1 ${!hideGlobalNav ? 'pb-[60px] md:pb-0' : ''}`}>
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      {!hideGlobalNav && (
        <nav
          className="fixed bottom-0 w-full h-[60px] flex justify-around items-center px-4 py-2 z-50 md:hidden bg-surface rounded-t-xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t border-outline-variant"
        >
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-all ${active
                  ? 'bg-primary-container text-on-primary-container scale-90'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold uppercase mt-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
