'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DisputeEscalationPage() {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="px-6 py-10 bg-on-surface text-white rounded-b-[40px] z-10 transition-all">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/seller/refunds" className="p-2 -ml-2 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-title-md font-bold tracking-tight">Escalate to Moderator</h1>
            <p className="text-white/60 text-body-sm">Dispute #DIS-99827 • Item: AI Ultra-Phone</p>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4 px-2">
          {[1,2,3].map(s => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-primary' : 'bg-white/20'}`}
            ></div>
          ))}
        </div>
      </header>

      <div className="flex-1 px-6 pt-12 pb-32 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-300">
              <div className="space-y-4">
                <h2 className="text-headline-lg font-bold text-on-surface">Why are you escalating?</h2>
                <p className="text-on-surface-variant">A marketplace moderator will review this dispute within 24 hours.</p>
              </div>

              <div className="grid gap-3">
                {[
                  { id: 'damaged_by_buyer', label: 'Item damaged by buyer after delivery', icon: 'heart_broken' },
                  { id: 'fraudulent_claim', label: 'Fraudulent/Fake claim detected', icon: 'gavel' },
                  { id: 'return_not_received', label: 'Returned item not received/Wrong item', icon: 'question_mark' },
                  { id: 'policy_violation', label: 'Other policy violation', icon: 'security' },
                ].map(opt => (
                  <button 
                    key={opt.id}
                    onClick={() => setReason(opt.id)}
                    className={`flex items-center gap-4 p-5 rounded-[2rem] border transition-all text-left ${
                      reason === opt.id ? 'bg-primary-container border-primary shadow-lg' : 'bg-surface-container-low border-outline-variant'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined">{opt.icon}</span>
                    </div>
                    <span className="font-bold text-on-surface">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-300">
              <div className="space-y-4">
                <h2 className="text-headline-lg font-bold text-on-surface">Provide Evidence</h2>
                <p className="text-on-surface-variant">Upload photos or documents to support your dispute.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="aspect-square rounded-3xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-[40px] text-on-surface-variant">add_a_photo</span>
                  <span className="text-label-caps font-bold text-on-surface-variant">ADD PHOTO</span>
                </button>
                <button className="aspect-square rounded-3xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-[40px] text-on-surface-variant">attach_file_add</span>
                  <span className="text-label-caps font-bold text-on-surface-variant">ADD DOC</span>
                </button>
              </div>

              <textarea 
                className="w-full h-40 bg-surface-container-low border border-outline-variant rounded-3xl p-6 focus:outline-none focus:border-primary transition-all text-body-lg"
                placeholder="Describe why the buyer's claim is invalid in more detail..."
              ></textarea>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center pt-20 animate-in zoom-in duration-500">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-[64px] text-white">gavel</span>
              </div>
              <h2 className="text-headline-lg font-bold text-on-surface text-center mb-4">Request Sent to Tribunal</h2>
              <p className="text-body-lg text-on-surface-variant text-center max-w-xs">
                A moderator has been assigned to #DIS-99827. You will be notified via MoMo and SMS on the resolution.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Footer Nav */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-surface/80 backdrop-blur-md border-t border-outline-variant z-10 flex justify-between items-center px-10">
        {step < 3 && (
          <>
            <button 
              onClick={() => step > 1 && setStep(step - 1)}
              className={`font-bold text-on-surface-variant ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
            >
              PREVIOUS
            </button>
            <button 
              onClick={() => reason && setStep(step + 1)}
              className={`bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all ${!reason ? 'opacity-50' : ''}`}
            >
              {step === 2 ? 'SUBMIT CASE' : 'NEXT STEP'}
            </button>
          </>
        )}
        {step === 3 && (
          <Link 
            href="/seller/refunds"
            className="w-full bg-primary text-white py-4 rounded-full font-bold text-center shadow-lg shadow-primary/20"
          >
            RETURN TO DASHBOARD
          </Link>
        )}
      </div>

    </div>
  );
}
