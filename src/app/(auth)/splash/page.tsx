'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SplashPage() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-hidden min-h-screen relative flex flex-col justify-end">
      {/* Immersive Background */}
      <div className="absolute inset-0 w-full h-[70%] z-0 animate-fade-in">
        <img
          alt="Vibrant African Marketplace"
          className="w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKswQtdQOnLATt1zwx9qTfF-qsQGFugSVbLI7c52ggaJdQatQ_ZOUiNFILWPwCFYN3_WJw0p40tGk8v_mLEXwhyygHzoa2UJ0tihzP13zCqYcdF2s6ojpYyelPdAoRMnYOn70H3jdGJhYklm7ZPZJf-4TGbTC5FdMf7VQyyWBQmzB9hCjWzM_U8zftsp3XaN3CyrG0VFv1pmOJ1TUN6u9PNdzl51IuNXnuYmlA-VkWGf43CKYJz5VSUcRrfLhW1ebV6TSl6JfzuS4"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-surface pointer-events-none" />
      </div>

      {/* Floating brand logo */}
      <div className="absolute top-12 left-0 w-full flex justify-center z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
          </div>
          <h1 className="font-title-md text-title-md text-on-surface tracking-tight">
            MTN <span className="font-normal opacity-70">Marketplace</span>
          </h1>
        </div>
      </div>

      {/* Bottom content sheet */}
      <main
        className="relative z-10 w-full bg-surface rounded-t-4xl px-container-margin-mobile md:px-container-margin-desktop top-[-40px] pt-6 pb-10 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] flex flex-col items-center animate-fade-in-up md:max-w-md md:mx-auto md:mb-8 md:rounded-4xl"
        style={{ animationDelay: '0.4s' }}
      >
        {/* AI Trust Badge */}
        {/* <div className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary-container/30 to-tertiary-container/30 border border-secondary-container/50 mb-6">
          <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="font-label-caps text-label-caps text-on-secondary-container uppercase tracking-wider">AI-Powered Matching</span>
        </div> */}

        {/* Headline */}
        <div className="mb-8">
          <h2 className="text-center font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4">
            Trade locally.<br />
            <span className="text-primary-container drop-shadow-sm">Connect globally.</span>
          </h2>
          <p className="text-center font-body-lg text-body-lg text-on-surface-variant max-w-sm">
            Discover verified sellers, secure transactions, and personalized AI recommendations across Africa&apos;s fastest-growing digital marketplace.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-auto space-y-4">
          <Link
            href="/onboarding"
            className="w-full bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-title-md text-title-sm py-2 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md hover:shadow-lg group"
          >
            Get Started
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <p className="flex flex-col text-center font-body-sm text-body-sm text-on-surface-variant">
            Already have an account?{' '}
            <Link href="/login/email" className="text-secondary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
