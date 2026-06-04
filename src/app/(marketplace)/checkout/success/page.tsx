'use client';

import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-12 flex flex-col items-center pt-16 px-4">
      {/* Success Icon */}
      <div className="w-24 h-24 bg-[#e8f0fe] rounded-full flex items-center justify-center mb-8">
        <div className="w-16 h-16 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[24px] font-bold text-on-surface mb-2">Order Placed!</h1>
      <p className="text-[14px] text-on-surface-variant text-center max-w-[320px] mb-8 leading-relaxed">
        Thank you for your purchase. We've received your order and are getting it ready to ship.
      </p>

      {/* Order Info Card */}
      <div className="w-full max-w-[400px] bg-surface rounded-3xl shadow-sm border border-outline-variant/30 overflow-hidden mb-8">
        {/* Header Stats */}
        <div className="bg-surface-variant/10 p-4 grid grid-cols-2 gap-4 border-b border-outline-variant/20">
          <div>
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">ORDER NUMBER</p>
            <p className="text-[14px] font-bold text-on-surface">#MTN-8472-X9</p>
          </div>
          <div className="text-right">
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">EST. DELIVERY</p>
            <p className="text-[14px] font-bold text-secondary">Oct 24-26</p>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="p-4">
          <h2 className="text-[16px] font-bold mb-4">Order Summary</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-surface-container-high rounded-xl border border-outline-variant/10 flex items-center justify-center overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvEsa87At71_VGTBk9io1p03K79AdaTr5rRgOo9qc2RIA6zh1WavhEXmcmL3YwsIg8UaAfQPVp1p9-169UWODjfxCrULQM-Zr6P22ej2QCc1AzDroMAV8cxRrZFO2F9X5mu8fY1I0E0jKsmkRJGO4AHX7Y79mQsaHJyMLg-qnxJJeu6TxrniRrBXoOjrIVuDYEjCr20D64v1vJLCXVZ58U5XMr1KXhBFRznKOIfkQmHklligwk_7TdtszFli0044q52rZoebHzCXc" className="w-full h-full object-cover" alt="Phone" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-[14px]">UltraVision Pro 5G</p>
                <p className="text-[12px] text-on-surface-variant font-medium">Qty: 1</p>
              </div>
              <p className="font-bold text-[14px]">$1,099.00</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-surface-container-high rounded-xl border border-outline-variant/10 flex items-center justify-center overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO2cz3fXeZ9DN0KjStkjdwGJ5ieJ8qGLDGV2fhPgg1jEN1jJ4Mh0zmQh8ppZam7Bt9nMTlEINWDTDkQfIWoDH0YnKNXEjcZUJWBvQpgqF3mzZyVvLUiynwfdSebR5qSRqm9TMnsU0AcpX9l8EjkD1QutdmX4eRaZLFqqPSUQX8Zgs7CVaEt-hOOK7Mo-JEzezMWceBRHGBjpQpXvYwBblNIY6JXuqWlzV8rs81GwQBdNVyTz7nIrRDvaYa3tuStUtZ1fwqHL-xt2E" className="w-full h-full object-cover" alt="Buds" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-[14px]">SonicBuds Pro</p>
                <p className="text-[12px] text-on-surface-variant font-medium">Qty: 1</p>
              </div>
              <p className="font-bold text-[14px]">$199.00</p>
            </div>

            {/* Total Footer */}
            <div className="border-t border-outline-variant/20 pt-4 mt-2 flex justify-between items-center">
              <span className="text-[16px] font-bold text-on-surface">Total</span>
              <span className="text-[16px] font-bold text-secondary">$1,299.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full max-w-[400px] flex flex-col gap-4">
        <Link
          href="/checkout/tracking"
          className="w-full bg-secondary text-on-secondary text-[14px] py-2 rounded-full flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">local_shipping</span>
          Track Order
        </Link>
        <Link
          href="/home"
          className="w-full bg-primary text-on-primary text-[14px] py-2 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
