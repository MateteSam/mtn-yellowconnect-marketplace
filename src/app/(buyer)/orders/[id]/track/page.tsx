'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  const orderId = params.id || 'MTN-8472-9X';
  const [cancelConfirm, setCancelConfirm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">

      {/* ── TOP SECTION ─────────────────────────────────────────────── */}
      <div className="bg-white px-4 pt-12 pb-4 shadow-sm">
        {/* Back row + order id */}
        <div className="flex items-center gap-2 mb-3">
          <Link href="/home" className="p-1 -ml-1 rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-[22px] text-gray-600">arrow_back</span>
          </Link>
          <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">
            ORDER #{orderId}
          </span>
        </div>

        {/* Status badge + title */}
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
          <h1 className="text-xl font-bold text-gray-900">In Transit</h1>
        </div>

        {/* Estimated delivery */}
        <p className="text-sm text-gray-500 mb-4">
          Estimated delivery: <span className="font-medium text-gray-700">Tomorrow, 2:00 PM – 5:00 PM</span>
        </p>

        {/* Action buttons */}
        <div className="flex gap-3">
          <Link
            href={`/orders/${orderId}/receipt`}
            className="flex items-center gap-2 flex-1 justify-center border border-gray-300 rounded-xl py-2.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            View Invoice
          </Link>
          <Link
            href="/support"
            className="flex items-center gap-2 flex-1 justify-center rounded-xl py-2.5 text-sm font-semibold text-white transition-colors"
            style={{ background: 'linear-gradient(135deg,#0066CC,#004499)' }}
          >
            <span className="material-symbols-outlined text-[18px]">headset_mic</span>
            Support
          </Link>
        </div>
      </div>

      {/* ── MAP AREA ────────────────────────────────────────────────── */}
      <div className="relative" style={{ height: 260 }}>
        {/* Simulated dark map */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg,#1a2535 0%,#263347 40%,#1e3a34 70%,#1a2535 100%)',
          }}
        >
          {/* Grid lines to simulate map roads */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="80" x2="100%" y2="50" stroke="#4fc" strokeWidth="2" />
            <line x1="0" y1="140" x2="100%" y2="110" stroke="#4fc" strokeWidth="1.5" />
            <line x1="80" y1="0" x2="60" y2="100%" stroke="#4fc" strokeWidth="1" />
            <line x1="160" y1="0" x2="140" y2="100%" stroke="#4fc" strokeWidth="1" />
            <line x1="240" y1="0" x2="220" y2="100%" stroke="#4fc" strokeWidth="1" />
            <polygon points="140,50 200,130 80,130" fill="rgba(0,220,150,0.15)" stroke="#0dc87a" strokeWidth="1.5" />
          </svg>

          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="50,220 120,160 170,100 230,70"
              fill="none"
              stroke="#00BFFF"
              strokeWidth="3"
              strokeDasharray="8 4"
              strokeLinecap="round"
            />
          </svg>

          {/* Destination pin */}
          <div className="absolute" style={{ top: 58, left: 218 }}>
            <span className="material-symbols-outlined text-yellow-400 text-[30px] drop-shadow-lg">location_on</span>
          </div>

          {/* + / - zoom buttons */}
          <div className="absolute right-3 top-3 flex flex-col gap-1">
            <button className="w-8 h-8 bg-white rounded-md shadow flex items-center justify-center text-gray-700 font-bold text-lg hover:bg-gray-50">+</button>
            <button className="w-8 h-8 bg-white rounded-md shadow flex items-center justify-center text-gray-700 font-bold text-lg hover:bg-gray-50">−</button>
          </div>
        </div>

        {/* Driver chip – top-left of map */}
        <div
          className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-2xl shadow-lg"
          style={{ background: 'rgba(255,255,255,0.95)' }}
        >
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            KA
          </div>
          <div className="leading-tight">
            <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide">Driver</p>
            <p className="text-xs font-bold text-gray-800">Kwasi Appiah</p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION ──────────────────────────────────────────── */}
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-4 pt-5 pb-10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">

        {/* Delivery Address */}
        <section className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="material-symbols-outlined text-[18px] text-gray-400">location_on</span>
            <h2 className="text-sm font-bold text-gray-800">Delivery Address</h2>
          </div>
          <div className="pl-6">
            <p className="text-sm font-semibold text-gray-900">MTN Ridge Headquarters</p>
            <p className="text-sm text-gray-500">Independence Avenue, West Ridge</p>
            <p className="text-sm text-gray-500">Accra, Greater Accra</p>
            <p className="text-sm text-gray-500">Ghana</p>

            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-3 mb-0.5">
              Contact for Delivery
            </p>
            <p className="text-sm font-semibold text-[#0066CC]">+233 24 123 4567</p>
          </div>
        </section>

        <div className="border-t border-gray-100 mb-5" />

        {/* Package Info */}
        <section className="mb-6">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="material-symbols-outlined text-[18px] text-gray-400">inventory_2</span>
            <h2 className="text-sm font-bold text-gray-800">Package Info</h2>
          </div>

          {/* Product row */}
          <div className="flex items-center gap-3 pl-6 mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px] text-gray-500">smartphone</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Samsung Galaxy S24 Ultra</p>
              <p className="text-xs text-gray-400">Qty: 1 • 0.4 kg</p>
            </div>
          </div>

          {/* Logistics partner */}
          <div className="pl-6">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Logistics Partner
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-900">MTN Express Logistics</p>
              <span className="flex items-center gap-0.5 text-xs font-bold text-[#0066CC]">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Verified
              </span>
            </div>
          </div>
        </section>

        {/* Cancel Order */}
        <button
          onClick={() => setCancelConfirm(true)}
          className="w-full py-3 rounded-2xl border border-red-200 text-red-600 font-semibold text-sm bg-white hover:bg-red-50 active:bg-red-100 transition-colors"
        >
          Cancel Order
        </button>

        {/* Cancel confirmation modal */}
        {cancelConfirm && (
          <div className="fixed inset-0 bg-black/40 flex items-end z-50" onClick={() => setCancelConfirm(false)}>
            <div
              className="w-full bg-white rounded-t-3xl p-6"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cancel Order?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to cancel this order? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setCancelConfirm(false)}
                  className="flex-1 py-3 rounded-2xl border border-gray-200 text-gray-700 font-semibold text-sm"
                >
                  Keep Order
                </button>
                <button
                  className="flex-1 py-3 rounded-2xl bg-red-600 text-white font-semibold text-sm"
                  onClick={() => setCancelConfirm(false)}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
