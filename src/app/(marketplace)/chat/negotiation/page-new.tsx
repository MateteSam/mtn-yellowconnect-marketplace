'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  type?: 'offer' | 'standard';
  amount?: string;
}

export default function AINegotiationChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I'm YellowConnect AI. I'm here to help you get the best deal on the Premium AI Ultra-Phone. The current price is ₦850,000.",
    },
    {
      id: '2',
      sender: 'ai',
      text: "Do you have a target price in mind? I can negotiate with the seller's treasury agent on your behalf.",
      type: 'offer',
      amount: '₦850,000'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isNegotiating, setIsNegotiating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isNegotiating]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsNegotiating(true);

    // Simulate AI Negotiation Logic
    setTimeout(() => {
      setIsNegotiating(false);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "I've checked with the seller's market data. Based on your profile and marketplace demand, I can offer it for ₦815,000. This is a 4% discount available for the next 15 minutes.",
        type: 'offer',
        amount: '₦815,000'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 2500);
  };

  return (
    <div className="flex flex-col h-screen bg-surface">
      {/* Header */}
      <header className="px-6 py-4 bg-surface border-b border-outline-variant flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
          <Link href="/home" className="p-1 rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center p-0.5 border-2 border-primary/20">
              <span className="material-symbols-outlined text-primary text-[24px]">smart_toy</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="font-bold text-on-surface leading-none">Negotiation AI</h1>
            <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Online • Real-time</span>
          </div>
        </div>
        <button className="text-primary font-bold text-label-caps border border-primary/30 px-3 py-1.5 rounded-full hover:bg-primary/5">
          VIEW ITEM
        </button>
      </header>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scroll-smooth"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-surface-container-low border border-outline-variant text-on-surface rounded-tl-none'
              }`}
            >
              <p className="text-body-lg">{msg.text}</p>
            </div>
            {msg.type === 'offer' && (
              <div className="mt-4 p-4 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col gap-3 w-full max-w-[280px]">
                <div className="flex justify-between items-center">
                  <span className="text-label-caps text-primary font-bold">AI SMART OFFER</span>
                  <span className="text-on-surface-variant font-bold text-title-md">{msg.amount}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-2 rounded-xl font-bold text-sm shadow-md shadow-primary/10">ACCEPT</button>
                  <button className="flex-1 bg-surface border border-outline-variant py-2 rounded-xl font-bold text-sm">REJECT</button>
                </div>
              </div>
            )}
            <span className="text-[10px] text-on-surface-variant mt-1 px-1">Just now</span>
          </div>
        ))}

        {isNegotiating && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px] animate-spin">cycle</span>
            </div>
            <div className="glass-ai px-4 py-2 rounded-full border border-primary/20">
              <span className="text-label-caps text-primary font-bold animate-pulse">AI IS NEGOTIATING...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-surface border-t border-outline-variant shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your target price or ask for a discount..."
            className="w-full bg-surface-container-low border border-outline-variant rounded-2xl pl-12 pr-14 py-4 focus:outline-none focus:border-primary transition-all text-body-lg"
          />
          <span className="absolute left-4 material-symbols-outlined text-on-surface-variant">sell</span>
          <button 
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="absolute right-3 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 disabled:opacity-50 disabled:shadow-none transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-none">
          {['Request 5% off', 'Compare with market', 'Check bulk discount'].map((hint) => (
            <button 
              key={hint}
              onClick={() => setInputText(hint)}
              className="whitespace-nowrap px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant text-[12px] font-bold text-on-surface-variant hover:border-primary transition-colors"
            >
              {hint}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-ai {
          background: rgba(255, 230, 0, 0.05);
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
}
