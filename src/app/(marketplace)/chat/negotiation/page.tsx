'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const INITIAL_MESSAGES = [
  { id: 1, sender: 'seller', text: 'Hi! I saw you were interested in the Solar Irrigation Hub.', time: '10:15 AM' },
  { id: 2, sender: 'buyer', text: 'Yes, it looks perfect for my farm. But the price is a bit high for me right now.', time: '10:16 AM' },
  { id: 3, sender: 'seller', text: 'It’s a high-quality unit, imported just last month. What were you thinking?', time: '10:17 AM' },
];

export default function SmartNegotiationPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [showAiPanel, setShowAiPanel] = useState(true);
  const [negotiationState, setNegotiationState] = useState<'active' | 'accepted' | 'countering'>('active');
  const [counterAmount, setCounterAmount] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text?: string) => {
    const msgText = text || inputText;
    if (!msgText.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: 'buyer' as const,
      text: msgText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const applyAiSuggestion = (suggestion: string) => {
    setInputText(suggestion);
    setShowAiPanel(false);
  };

  const handleAcceptOffer = () => {
    setNegotiationState('accepted');
    const successMsg = {
      id: Date.now(),
      sender: 'buyer' as const,
      text: 'I accept your offer of $980! Let\'s proceed with the purchase.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, successMsg]);
    setShowAiPanel(false);
  };

  const handleSendCounter = () => {
    if (!counterAmount.trim()) return;
    const counterMsg = {
      id: Date.now(),
      sender: 'buyer' as const,
      text: `Would you consider my counter offer of ₦${counterAmount}?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, counterMsg]);
    setNegotiationState('active');
    setCounterAmount('');
  };

  return (
    <div className="bg-background text-on-surface h-screen flex flex-col overflow-hidden">
      {/* Negotiation Header */}
      <header className="h-[60px] bg-surface border-b border-outline-variant/20 px-4 py-3 flex items-center justify-between shadow-sm z-30 shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/messages" className="material-symbols-outlined text-on-surface-variant">arrow_back</Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-surface-container overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OJ_4TT4lWQbTG0r9NoPWnk-ix3VtxTJempO33Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU"
                alt="Solar Hub"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-body-sm line-clamp-1">Solar Irrigation Hub</p>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold text-body-sm">₦450,000</span>
                <span className="text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded uppercase font-bold">Negotiable</span>
              </div>
            </div>
          </div>
        </div>
        <button className="material-symbols-outlined text-primary">more_vert</button>
      </header>

      {/* Messages Area */}
      <main
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-container-lowest/50"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'buyer' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${msg.sender === 'buyer'
                ? 'bg-surface-container-high text-on-surface rounded-tr-none'
                : 'bg-primary-container text-on-primary-container rounded-tl-none border border-outline-variant/10'
                }`}
            >
              <p className="text-body-sm">{msg.text}</p>
            </div>
            <span className="text-[10px] text-on-surface-variant mt-1 px-1">{msg.time}</span>
          </div>
        ))}
      </main>

      {/* AI Smart Negotiation Panel */}
      {showAiPanel && (
        <div className="px-4 pb-2 animate-in slide-in-from-bottom-4 duration-500">
          <div className="glass-ai rounded-2xl p-4 border border-primary/20 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-primary p-1.5 rounded-md text-on-primary">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <p className="font-bold text-label-caps text-secondary uppercase tracking-widest">Negotiation Assistant</p>
              <button
                onClick={() => setShowAiPanel(false)}
                className="ml-auto material-symbols-outlined text-outline text-[18px]"
              >
                close
              </button>
            </div>

            <p className="text-body-sm text-on-surface mb-4">
              Similar items in <span className="font-bold">Lagos</span> recently sold for <span className="text-secondary font-bold">₦410k - ₦430k</span>.
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => applyAiSuggestion('Would you consider ₦415,000 for a quick MoMo payment?')}
                className="bg-white/50 backdrop-blur-sm border border-outline-variant/30 text-[12px] font-medium px-3 py-2 rounded-full hover:bg-white active:scale-95 transition-all text-on-surface"
              >
                Offer ₦415k (MoMo)
              </button>
              <button
                onClick={() => applyAiSuggestion('I love the unit. Can we meet in the middle at ₦425k?')}
                className="bg-white/50 backdrop-blur-sm border border-outline-variant/30 text-[12px] font-medium px-3 py-2 rounded-full hover:bg-white active:scale-95 transition-all text-on-surface"
              >
                Split at ₦425k
              </button>
              <button
                onClick={() => setShowAiPanel(false)}
                className="bg-primary/10 text-primary text-[12px] font-bold px-3 py-2 rounded-full flex items-center gap-1"
              >
                See Trends
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <footer className="bg-surface p-2 border-t border-outline-variant/20 shrink-0 md:pb-4">
        {negotiationState === 'active' && (
          <div className="flex gap-2 mb-2 px-1 animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={handleAcceptOffer}
              className="flex-1 bg-primary text-on-primary font-bold rounded-full py-2 text-[11px] shadow-sm hover:opacity-90 active:scale-95 transition-all"
            >
              Accept Offer ($980)
            </button>
            <button
              onClick={() => setNegotiationState('countering')}
              className="flex-1 bg-white border border-outline text-on-surface font-bold rounded-full py-2 text-[11px] shadow-sm hover:bg-surface-container-low active:scale-95 transition-all"
            >
              Counter Offer
            </button>
          </div>
        )}

        {negotiationState === 'countering' && (
          <div className="flex items-center gap-2 mb-2 px-1 animate-in zoom-in-95 duration-200">
            <div className="flex-grow flex items-center bg-surface-container-high rounded-full px-4 border border-primary/30">
              <span className="text-secondary font-bold mr-1">₦</span>
              <input
                type="number"
                value={counterAmount}
                onChange={(e) => setCounterAmount(e.target.value)}
                autoFocus
                placeholder="Enter counter price"
                className="w-full bg-transparent py-2.5 text-[14px] outline-none font-bold"
              />
            </div>
            <button
              onClick={handleSendCounter}
              disabled={!counterAmount}
              className="bg-primary text-on-primary font-bold rounded-full px-5 py-2.5 text-[14px] shadow-sm disabled:opacity-50"
            >
              Send
            </button>
            <button
              onClick={() => setNegotiationState('active')}
              className="p-2 text-outline material-symbols-outlined"
            >
              close
            </button>
          </div>
        )}

        {negotiationState === 'accepted' ? (
          <div className="px-1 animate-in zoom-in-95 duration-300 pb-2">
            <div className="bg-primary-container text-on-primary-container p-3 rounded-xl mb-3 flex items-center gap-3 border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <p className="text-[14px] font-bold">Deal final! You've accepted the offer.</p>
            </div>
            <Link
              href="/checkout/bundle"
              className="w-full bg-secondary text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">payments</span>
              Proceed to Payment
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex-grow relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full bg-surface-container-high border-none rounded-full px-5 py-3 text-body-sm outline-none focus:ring-2 focus:ring-secondary transition-all"
              />
              {!inputText && (
                <button
                  onClick={() => setShowAiPanel(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </button>
              )}
            </div>
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${inputText.trim() ? 'bg-secondary text-white shadow-md' : 'bg-surface-container-highest text-outline'
                }`}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}
