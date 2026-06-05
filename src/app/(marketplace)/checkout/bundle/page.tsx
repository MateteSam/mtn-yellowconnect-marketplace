'use client';

import Link from 'next/link';

const ORDER_ITEMS = [
  {
    id: 1,
    name: 'UltraVision Pro 5G',
    variant: 'Phantom Black, 512GB',
    price: 1099,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvEsa87At71_VGTBk9io1p03K79AdaTr5rRgOo9qc2RIA6zh1WavhEXmcmL3YwsIg8UaAfQPVp1p9-169UWODjfxCrULQM-Zr6P22ej2QCc1AzDroMAV8cxRrZFO2F9X5mu8fY1I0E0jKsmkRJGO4AHX7Y79mQsaHJyMLg-qnxJJeu6TxrniRrBXoOjrIVuDYEjCr20D64v1vJLCXVZ58U5XMr1KXhBFRznKOIfkQmHklligwk_7TdtszFli0044q52rZoebHzCXc',
  },
  {
    id: 2,
    name: 'SonicBuds Pro',
    variant: 'Arctic White',
    price: 199,
    oldPrice: 249,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO2cz3fXeZ9DN0KjStkjdwGJ5ieJ8qGLDGV2fhPgg1jEN1jJ4Mh0zmQh8ppZam7Bt9nMTlEINWDTDkQfIWoDH0YnKNXEjcZUJWBvQpgqF3mzZyVvLUiynwfdSebR5qSRqm9TMnsU0AcpX9l8EjkD1QutdmX4eRaZLFqqPSUQX8Zgs7CVaEt-hOOK7Mo-JEzezMWceBRHGBjpQpXvYwBblNIY6JXuqWlzV8rs81GwQBdNVyTz7nIrRDvaYa3tuStUtZ1fwqHL-xt2E',
  },
  {
    id: 3,
    name: '65W GaN Charger',
    variant: 'Black',
    price: 50,
    oldPrice: 100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWNzMwnS8Qzk7HCTj6XFINmfiinUZp_1666ecZNerzWSOXQPxEf8NuCCPrFn_HRqtFMKKHMBO5SHSgO7paNU4HOtaTmQZ9IcbY2_HywQqT3lCrLtHfYp9AaLrSC5VWJ_iJIOHC-83rweWNNlHzcdpOVKaWZ8rTstWfLDoIBqt2A77bYJ3V4Wm323uJkDKxobGpcKeLahPVFYK1n6HZqebavoFKZ3kY4PLby9hgsClXW5dO2kg--mDb671rx5NnjANBpyTI3Ikd1yw',
  },
];

export default function CheckoutBundlePage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 md:pb-6">
      {/* Custom Styles for Glassmorphism and AI Border */}
      <style jsx>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 79, 159, 0.1);
        }
        .ai-border {
          border: 1px solid transparent;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(to right, #FFCC00, #004F9F);
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
        }
      `}</style>

      {/* Top Navigation */}
      <header className="h-[60px] w-full top-0 sticky shadow-sm bg-surface flex justify-between items-center px-4 md:px-10 py-3 max-w-[1280px] mx-auto z-50">
        <div className="flex items-center gap-4">
          <Link href="/chat/negotiation" className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-[24px] md:text-[32px] font-bold text-primary">Checkout</h1>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 md:px-10 py-4 flex flex-col gap-4">
        {/* AI Bundle Badge */}
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="text-[12px] font-bold uppercase tracking-wider">AI ENHANCED BUNDLE</span>
        </div>

        {/* Order Items */}
        <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-4">
          <h2 className="text-[18px] mb-4 text-on-surface border-b border-outline-variant/20 pb-2">Order Summary</h2>
          <div className="flex flex-col gap-4">
            {ORDER_ITEMS.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container-high overflow-hidden shrink-0 flex items-center justify-center border border-outline-variant/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-[12px] text-on-surface">{item.name}</p>
                  <p className="text-[12px] text-on-surface-variant">{item.variant}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[14px] text-secondary">${item.price}</p>
                  {item.oldPrice && (
                    <p className="text-[12px] text-on-surface-variant line-through">${item.oldPrice}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping & Payment Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Shipping Address */}
          <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[18px] text-on-surface">Shipping Address</h2>
                <button className="text-secondary text-[12px] font-bold hover:underline">EDIT</button>
              </div>
              <div className="text-[14px] text-on-surface-variant space-y-1">
                <p className="font-bold text-on-surface">John Doe</p>
                <p>123 Innovation Drive</p>
                <p>Tech Park, Accra, Ghana</p>
                <p>+233 54 123 4567</p>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[18px] text-on-surface">Payment Method</h2>
                <button className="text-secondary text-[12px] font-bold hover:underline">CHANGE</button>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-outline-variant/20">
                <div className="w-10 h-10 bg-[#FFCC00] rounded flex items-center justify-center font-bold text-[#000000] text-[10px] shrink-0">
                  MoMo
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-[12px] text-on-surface">MTN Mobile Money</p>
                  <p className="text-[12px] text-on-surface-variant">**** **** 4567</p>
                </div>
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
          </section>
        </div>

        {/* Price Breakdown (Glassmorphic) */}
        <section className="glass-panel rounded-xl p-4 mb-4 md:mb-0">
          <h2 className="text-[18px] mb-4 text-on-surface">Payment Summary</h2>
          <div className="flex flex-col gap-3 text-[14px] text-on-surface-variant mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$1,348</span>
            </div>
            <div className="flex justify-between text-tertiary">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">local_offer</span>
                Bundle Discount
              </span>
              <span>-$151</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-secondary font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes (Estimated)</span>
              <span>$102</span>
            </div>
          </div>
          <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-center">
            <span className="text-[16px] text-on-surface">Total</span>
            <span className="text-[16px] text-secondary">$1,299</span>
          </div>

          {/* Desktop Action Button */}
          <Link href="/checkout/payment/authorize" className="hidden md:flex w-full mt-8 bg-primary text-on-primary font-bold text-[18px] py-4 rounded-full items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
            Place Order <span className="material-symbols-outlined">lock</span>
          </Link>
        </section>
      </main>

      {/* Mobile Fixed Action Button Area */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant/20 p-2 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <Link href="/checkout/payment/authorize" className="w-full bg-primary text-on-primary text-[14px] py-2 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg text-center">
          Place Order ($1,299) <span className="material-symbols-outlined">lock</span>
        </Link>
      </div>
    </div>
  );
}
