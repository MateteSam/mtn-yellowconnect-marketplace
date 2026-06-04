'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const NAV_ITEMS = [
  { href: '/home', icon: 'home', label: 'Home', activeIcon: 'home' },
  { href: '/search', icon: 'search', label: 'Search', activeIcon: 'search' },
  { href: '/verification/center', icon: 'verified_user', label: 'Verify', activeIcon: 'verified_user' },
  { href: '/sell', icon: 'add_circle', label: 'Sell', activeIcon: 'add_circle' },
  // { href: '/messages', icon: 'chat_bubble', label: 'Messages', activeIcon: 'chat_bubble' },
  { href: '/profile', icon: 'person', label: 'Profile', activeIcon: 'person' },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top App Bar */}
      <header
        className="sticky top-0 w-full flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop py-base bg-surface z-50 shadow-sm transition-transform"
        id="topAppBar"
      >
        <Link href="/home" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
          <div className="flex flex-col">
            <span className="text-title-md font-title-md font-bold text-primary">MTN Marketplace</span>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-label-caps font-label-caps text-on-surface-variant">NIGERIA</span>
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant">expand_more</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium hover:bg-surface-container-low px-2 py-1 transition-colors ${active ? 'text-primary border-b-2 border-primary font-bold' : 'text-on-surface-variant'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/search" className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-primary">search</span>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 pb-24 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 w-full flex justify-around items-center px-4 py-2 z-50 md:hidden bg-surface rounded-t-xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t border-outline-variant transition-transform"
        id="bottomNavBar"
      >
        {NAV_ITEMS.map(item => {
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
              <span
                className="material-symbols-outlined"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-label-caps font-label-caps mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
