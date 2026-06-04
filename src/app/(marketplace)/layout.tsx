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
  { href: '/verification/center', icon: 'verified_user', label: 'Verification Center' },
  { href: '/notifications', icon: 'notifications', label: 'Notifications' },
  { href: '/lending', icon: 'payments', label: 'Lending' },
  { href: '/account', icon: 'settings', label: 'Account' },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isServiceSubPage = pathname?.startsWith('/services/');
  const hideGlobalNav =
    pathname?.startsWith('/product/') ||
    pathname?.startsWith('/chat/') ||
    pathname?.startsWith('/checkout/');

  // Mapping for service sub-page titles
  const SERVICE_TITLES: Record<string, string> = {
    '/services/agricultural': 'Agricultural Services',
    '/services/automotive': 'Automotive Services',
    '/services/beauty-care': 'Beauty & Care Services',
    '/services/digital': 'Digital Services',
    '/services/domestic': 'Domestic Services',
    '/services/education': 'Education Services',
    '/services/events': 'Event Services',
    '/services/health-wellness': 'Health & Wellness Services',
    '/services/home-property': 'Home & Property Services',
    '/services/logistics': 'Logistics & Delivery',
    '/services/professional': 'Professional Services',
  };

  const currentServiceTitle = SERVICE_TITLES[pathname || ''] || 'Services';

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
      {/* ── SIDE MENU DRAWER ── */}
      {/* Backdrop */}
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
        <div className="p-4 border-b border-outline-variant flex flex-col gap-4 bg-primary-container/10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-title-md font-bold text-primary">Explore MTN</span>
              <span className="text-label-sm text-on-surface-variant font-medium">Marketplace & More</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-surface rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Region</span>
                <span className="text-sm font-bold text-on-surface">NIGERIA</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 bg-surface rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-primary text-[20px]">language</span>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Language</span>
                <span className="text-sm font-bold text-on-surface">ENGLISH</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-2 py-2 flex flex-col gap-1">
          {/* <div className="px-4 mb-2">
            <span className="text-label-caps font-bold text-on-surface-variant/60 text-[10px]">Marketplace</span>
          </div> */}
          {/* {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsDrawerOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${active
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
              >
                <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {item.icon}
                </span>
                <span className="font-title-md text-title-md">{item.label}</span>
              </Link>
            );
          })} */}

          {/* <div className="h-px bg-outline-variant my-4 mx-4" /> */}

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
                <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {item.icon}
                </span>
                <span className="font-title-md text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-2 bg-surface-container-lowest">
          <div className="bg-primary/5 rounded-2xl p-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFCC00] flex items-center justify-center font-bold text-black">
              MC
            </div>
            <div className="flex flex-col">
              <span className="text-body-sm">David Mel</span>
              <span className="text-sm text-on-surface-variant">080 345 6789</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── TOP NAV BAR ── */}
      {!hideGlobalNav && (
        <header
          className="sticky top-0 w-full h-[60px] flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop bg-surface z-50 shadow-sm transition-transform"
          id="topAppBar"
        >
          <div className="flex items-center gap-1 md:gap-3">
            {isServiceSubPage ? (
              <Link
                href="/services"
                className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-90"
              >
                <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
              </Link>
            ) : (
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-90"
              >
                <span className="material-symbols-outlined text-on-surface">menu</span>
              </button>
            )}

            {!isServiceSubPage ? (
              <Link href="/home" className="flex items-center ml-1">
                <img src="/icon.png" alt="Yel'Low Mart Logo" className="h-10 w-auto object-contain" />
              </Link>
            ) : (
              <h1 className="font-title-sm text-title-sm font-bold text-on-surface ml-2">
                {currentServiceTitle}
              </h1>
            )}
          </div>

          <nav className="hidden md:flex gap-6">
            {!isServiceSubPage && NAV_ITEMS.map((item) => {
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
      )}

      {/* Main content */}
      <main className={`flex-1 ${!hideGlobalNav && !isServiceSubPage ? 'pb-[60px] md:pb-0' : ''} ${hideGlobalNav ? '!pb-0' : ''}`}>
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      {!hideGlobalNav && !isServiceSubPage && (
        <nav
          className="fixed bottom-0 w-full h-[60px] flex justify-around items-center px-4 py-2 z-50 md:hidden bg-surface rounded-t-xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t border-outline-variant transition-transform"
          id="bottomNavBar"
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
                <span
                  className="material-symbols-outlined"
                  style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon === 'home' && item.label === 'Home' ? 'home' :
                    item.icon === 'shopping_bag' ? 'shopping_bag' :
                      item.icon === 'handyman' ? 'handyman' : 'add_circle'}
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
