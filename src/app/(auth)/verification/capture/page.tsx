'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function IDCaptureContent() {
  const searchParams = useSearchParams();
  const idType = searchParams.get('type') || 'national-id';
  
  const [step, setStep] = useState<'front' | 'back' | 'review'>('front');
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const simulateCapture = () => {
    setIsCapturing(true);
    setTimeout(() => {
      setIsCapturing(false);
      setCapturedImage('https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OJ_4TT4lWQbTG0r9NoPWnk-ix3VtxTJempO33Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU');
      setStep('review');
    }, 1200);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setStep('front');
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col">
      {/* Top Bar - Inverted for dark capture mode */}
      <header className="flex items-center px-4 h-16 shrink-0 z-50">
        <Link 
          href="/verification/id-type" 
          className="material-symbols-outlined text-white/70 p-2 active:scale-95 transition-transform"
        >
          close
        </Link>
        <div className="flex-grow text-center">
          <h1 className="font-bold text-lg">
            {step === 'review' ? 'Review Photo' : 'Position your ID'}
          </h1>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {step !== 'review' ? (
          <>
            {/* Camera Framing Overlays */}
            <div className="relative w-full max-w-sm aspect-[3/2] border-2 border-primary/50 rounded-2xl overflow-hidden bg-black/20 shadow-[0_0_0_100vw_rgba(0,0,0,0.6)]">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
              
              {/* Scanline animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_10px_#FFCC00] animate-pulse transition-all"></div>
              
              {isCapturing && (
                <div className="absolute inset-0 bg-white animate-flash flex items-center justify-center">
                  <span className="material-symbols-outlined text-black text-6xl animate-ping">photo_camera</span>
                </div>
              )}
            </div>

            <div className="text-center mt-10 space-y-4 max-w-xs">
              <p className="text-white/90 font-medium">
                {step === 'front' ? 'Front of your ID' : 'Back of your ID'}
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary">light_mode</span>
                  <span>Good lighting</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary">blur_off</span>
                  <span>No blur</span>
                </div>
              </div>
            </div>

            {/* Shutter Button */}
            <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full">
              <button
                onClick={simulateCapture}
                disabled={isCapturing}
                className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center p-1 active:scale-95 transition-transform"
              >
                <div className="w-full h-full rounded-full bg-white shadow-inner"></div>
              </button>
            </div>
          </>
        ) : (
          /* Review State */
          <div className="flex flex-col items-center w-full max-w-sm animate-in fade-in zoom-in-95 duration-300">
            <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <img src={capturedImage!} alt="Captured ID" className="w-full h-full object-cover" />
            </div>
            
            <div className="mt-10 space-y-6 w-full">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                <h3 className="font-bold mb-2">Is the text readable?</h3>
                <p className="text-sm text-white/70">
                  Ensure all details on your {idType.replace('-', ' ')} are sharp and clearly visible without any glare.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/verification/success"
                  className="w-full bg-primary text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all"
                >
                  My photo is readable
                </Link>
                <button
                  onClick={handleRetake}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/5 active:scale-[0.99] border border-white/20 transition-all"
                >
                  <span className="material-symbols-outlined font-bold">refresh</span>
                  Retake Photo
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx global>{`
        @keyframes flash {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-flash {
          animation: flash 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default function IDCapturePage() {
  return (
    <Suspense fallback={<div className="bg-neutral-900 min-h-screen flex items-center justify-center text-white">Loading camera...</div>}>
      <IDCaptureContent />
    </Suspense>
  );
}

