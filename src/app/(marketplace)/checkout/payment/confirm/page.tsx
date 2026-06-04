'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MoMoConfirmPage() {
  const router = useRouter();
  const [status, setStatus] = useState('awaiting'); // awaiting, success

  useEffect(() => {
    // Simulate payment approval after 4 seconds
    const timer = setTimeout(() => {
      setStatus('success');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleFinalConfirm = () => {
    router.push('/checkout/success');
  };

  return (
    <div className="bg-background min-h-screen">
      <header className="h-[60px] px-4 py-6 flex items-center border-b border-outline-variant/10 sticky top-0 bg-background z-10">
        <Link href="/checkout/payment/otp" className="p-2 hover:bg-surface-variant/10 rounded-full transition-all">
          <span className="material-symbols-outlined text-on-surface">close</span>
        </Link>
        <h1 className="text-[18px] font-bold text-on-surface flex-grow text-center mr-8">Confirm Payment</h1>
      </header>

      <main className="px-6 py-6 max-w-[500px] mx-auto">
        {/* Payment Summary Card */}
        <div className="bg-white rounded-[32px] p-6 border-t-[6px] border-primary shadow-[0_12px_40px_rgba(0,0,0,0.08)] mb-8">
          <div className="flex flex-col items-center mb-6">
            <p className="text-[14px] font-medium text-on-surface-variant mb-2">Total Amount</p>
            <h2 className="text-[24px] font-black tracking-tight">GH₵ 958.33</h2>
            <div className="w-[80px] h-[2px] bg-outline-variant/20 mt-4"></div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[12px] text-on-surface-variant font-medium">Destination</span>
              <span className="text-[12px] font-bold text-right max-w-[150px]">Yel&apos;Low Mart Order</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-on-surface-variant font-medium">Pay From</span>
              <span className="text-[12px] font-bold">MoMo Wallet (*** 4567)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-on-surface-variant font-medium">Fee</span>
              <span className="text-[12px] font-bold">GH₵ 0.00</span>
            </div>
          </div>
        </div>

        {/* Approval Status Box */}
        <div className="bg-surface-variant/5 rounded-3xl p-8 flex flex-col items-center border border-outline-variant/10 mb-8">
          {status === 'awaiting' ? (
            <>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-outline-variant/10 mb-6">
                <span className="material-symbols-outlined text-[32px] text-secondary animate-pulse">tap_and_play</span>
              </div>
              <h3 className="text-[18px] text-center font-bold mb-2">Approve on your phone</h3>
              <p className="text-[12px] text-on-surface-variant text-center leading-relaxed mb-8">
                A prompt has been sent to your device. Please enter your MoMo PIN to authorize this transaction.
              </p>

              <div className="w-full bg-surface-container rounded-full h-2 mb-4 overflow-hidden">
                <div className="bg-secondary h-full animate-loader rounded-full"></div>
              </div>
              <p className="text-[12px] font-black text-on-surface-variant tracking-[0.2em] uppercase opacity-60">
                Awaiting PIN entry...
              </p>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-xl mb-4 animate-bounce">
                <span className="material-symbols-outlined text-[40px] text-on-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h3 className="text-[18px] text-center font-bold mb-2">Payment Confirmed</h3>
              <p className="text-[14px] text-green-600 font-bold mb-6">Transaction Successful</p>

              <button
                onClick={handleFinalConfirm}
                className="w-full bg-primary text-on-primary py-2 rounded-full text-[14px] shadow-lg active:scale-95 transition-all"
              >
                Proceed to Order Details
              </button>
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-surface-container/50 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">Secured by MTN MoMo</span>
          </div>
          <p className="text-[11px] text-on-surface-variant/60 text-center px-4 leading-relaxed mt-2">
            By entering your PIN, you agree to the MTN Mobile Money Terms and Conditions.
          </p>
        </div>
      </main>

      <style jsx>{`
        @keyframes loader {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loader {
          animation: loader 5s linear forwards;
        }
      `}</style>
    </div>
  );
}
