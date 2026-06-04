'use client';

import Link from 'next/link';

const TRACKING_STEPS = [
  { id: 1, title: 'Order Placed', time: '10:24 AM, Oct 21', status: 'completed', icon: 'shopping_cart' },
  { id: 2, title: 'Payment Confirmed', time: '10:26 AM, Oct 21', status: 'completed', icon: 'payments' },
  { id: 3, title: 'Processing Order', time: '02:45 PM, Oct 21', status: 'completed', icon: 'inventory_2' },
  { id: 4, title: 'In Transit', time: 'Est. 10:00 AM, Oct 23', status: 'current', icon: 'local_shipping' },
  { id: 5, title: 'Out for Delivery', time: 'Waiting...', status: 'upcoming', icon: 'delivery_dining' },
  { id: 6, title: 'Delivered', time: 'Waiting...', status: 'upcoming', icon: 'task_alt' },
];

export default function OrderTrackingPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-4">
      {/* Header */}
      <header className="h-[60px] sticky top-0 bg-surface shadow-sm px-4 py-2 z-40">
        <div className="max-w-[600px] mx-auto flex items-center gap-4">
          <Link href="/checkout/success" className="p-2 hover:bg-surface-container rounded-full transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-[20px] font-bold">Track Order</h1>
        </div>
      </header>

      <main className="px-4 py-4 max-w-[600px] mx-auto">
        {/* Order Header Card */}
        <div className="bg-surface-variant/5 rounded-3xl p-4 border border-outline-variant/30 mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[12px] font-medium text-on-surface-variant mb-1">Order #MTN-8472-X9</p>
              <h2 className="text-[18px] font-bold text-secondary">In Transit</h2>
            </div>
            <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[11px] font-bold">
              EST. OCT 24
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden mb-2">
            <div className="w-[60%] h-full bg-secondary rounded-full"></div>
          </div>
          <div className="flex justify-between text-[12px] text-on-surface-variant font-medium">
            <span>Shipped</span>
            <span>Delivered</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-surface rounded-3xl p-4 border border-outline-variant/30 shadow-sm">
          <h3 className="text-[18px] font-bold mb-4">Activity</h3>
          <div className="flex flex-col">
            {TRACKING_STEPS.map((step, index) => (
              <div key={step.id} className="relative flex gap-4 pb-4 last:pb-0">
                {/* Connector Line */}
                {index !== TRACKING_STEPS.length - 1 && (
                  <div className={`absolute left-[23px] top-[48px] w-[2px] h-[calc(100%-48px)] ${step.status === 'completed' ? 'bg-secondary' : 'bg-outline-variant/30'}`}></div>
                )}

                {/* Step Icon */}
                <div className={`z-10 w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${step.status === 'completed' ? 'bg-secondary text-on-secondary shadow-md' :
                  step.status === 'current' ? 'bg-white border-2 border-secondary text-secondary shadow-lg scale-110' :
                    'bg-surface-container text-on-surface-variant border border-outline-variant/20'
                  }`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: step.status === 'completed' ? "'FILL' 1" : "''" }}>
                    {step.icon}
                  </span>
                </div>

                {/* Step Info */}
                <div className="py-1">
                  <p className={`text-[14px] font-bold mb-1 ${step.status === 'upcoming' ? 'text-on-surface-variant/50' : 'text-on-surface'}`}>
                    {step.title}
                  </p>
                  <p className="text-[12px] text-on-surface-variant font-medium">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder / Destination Card */}
        <div className="mt-4 bg-surface-container-lowest rounded-3xl p-4 border border-outline-variant/30 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div>
            <p className="text-[14px] font-bold text-on-surface">Destination</p>
            <p className="text-[12px] text-on-surface-variant">John Doe, 123 Innovation Drive, Accra</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-col gap-4">
          <button className="w-full py-2 rounded-full text-[14px] border-2 border-outline text-on-surface hover:bg-surface-container transition-colors active:scale-95">
            Support Case
          </button>
          <Link
            href="/home"
            className="w-full bg-primary text-on-primary text-[14px] py-2 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all active:scale-95"
          >
            Back to Marketplace
          </Link>
        </div>
      </main>
    </div>
  );
}
