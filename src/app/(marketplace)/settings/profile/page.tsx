'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProfileSettingsPage() {
  const [fullName, setFullName] = useState('Kwame Mensah');
  const [businessName, setBusinessName] = useState('Mensah Artisanal Goods');
  const [location, setLocation] = useState('GH');
  const [bio, setBio] = useState(
    'Authentic Ghanaian craftsmanship specializing in handmade leather goods and traditional textiles. Serving the Accra community for over 12 years with a commitment to quality and local heritage.'
  );
  const [visibility, setVisibility] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success'>('idle');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface-dim flex justify-between items-center px-container-margin-mobile h-16 w-full sticky top-0 z-50 shadow-sm dark:bg-surface-container-high border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Link
            href="/settings"
            className="material-symbols-outlined text-on-surface-variant p-2 active:scale-95 transition-transform flex items-center"
          >
            arrow_back
          </Link>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">
            Profile Settings
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-primary p-2">search</button>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcuAJp7EWk-rV6kAsBj34XxbtAqALKmVMypRd3n1jQIJSmUO66ghqtlm585dQB7OJ_4TT4lWQbTG0r9NoPWnk-ix3VtxTJempO33Zo4YppwM8BDQqKoy4agia3ZaZ3gYakbI2Bck4-LFqb_897lX82L4oruPDxRbnyfcux9F5BbKPd6h3nzjA2aZXMUDCEbzAXkmzSkAMFRIuK2gc0wbrk5ekbKEx9bSLD_ikdICEjzxL4o11gDFIiWbSYP85o61iVTBUFJwEaIU"
              alt="Kwame Mensah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-container-margin-mobile md:px-container-margin-desktop py-8 max-w-4xl">
        {/* Profile Header / Picture Upload */}
        <section className="flex flex-col items-center mb-section-gap">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface-container-high shadow-md overflow-hidden border-4 border-white dark:border-surface-dim relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMxBbSbS429mdZRPp3DX8ep4eL0QCcM2vpLP1zevgSMQVb5czSyRUdaavlXHoiaEX73kq4kO93iDdkNevCYLT0BNVxmSeTh2W2XHGRxV6TnQGofd6n1hKaGvQ-OQQofyooQpRK4vh1eWpNL7zCoyBWg_rPafqjw7-x15BYJFOazk5ykvtYHuXGGxFqHxtdHb5IX-uf8Q_0JtxfzVTnuI_kmW-7jHqBcu2o1OsehA4vbPGt5f7N9v3oN5OA9g4c8yF3TUKUzK2h6YQ"
                alt="Kwame Mensah"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-4xl">photo_camera</span>
              </button>
            </div>
            {/* Verified Badge */}
            <div
              className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-secondary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-surface-dim shadow-lg"
              title="Verified Merchant"
            >
              <span
                className="material-symbols-outlined text-sm md:text-base font-bold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h2 className="font-title-md text-title-md text-on-surface">Kwame Mensah</h2>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-1">
              MTN Gold Member • Accra, GH
            </p>
            <button className="mt-2 text-primary font-bold text-body-sm hover:underline active:scale-95 transition-all">
              Edit Profile Photo
            </button>
          </div>
        </section>

        {/* AI Assistant Suggestion (Glassmorphic) */}
        <div className="glass-ai rounded-2xl p-6 mb-8 flex items-center gap-4 relative overflow-hidden border border-primary/10">
          <div className="bg-primary-container p-3 rounded-full relative z-10">
            <span
              className="material-symbols-outlined text-on-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </div>
          <div className="flex-grow relative z-10">
            <p className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider mb-1">
              AI Smart Tip
            </p>
            <p className="text-body-sm text-on-surface-variant">
              Merchant profiles with a detailed bio see <span className="font-bold text-secondary">25% higher trust scores</span> from buyers.
            </p>
          </div>
          <button className="bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-body-sm active:scale-95 transition-transform shadow-md hover:brightness-110 relative z-10 whitespace-nowrap">
            Update Bio
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-6" onSubmit={handleSave}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-outline ml-1 uppercase" htmlFor="full_name">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary rounded-xl px-4 py-3.5 text-body-lg text-on-surface transition-all outline-none"
                id="full_name"
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-outline ml-1 uppercase" htmlFor="business_name">
                Business Name
              </label>
              <input
                className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary rounded-xl px-4 py-3.5 text-body-lg text-on-surface transition-all outline-none"
                id="business_name"
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="Enter your business name"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label-caps text-label-caps text-outline ml-1 uppercase" htmlFor="location">
                Business Location
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                  location_on
                </span>
                <select
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary rounded-xl pl-12 pr-4 py-3.5 text-body-lg text-on-surface appearance-none outline-none transition-all"
                  id="location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                >
                  <option value="GH">Accra, Ghana</option>
                  <option value="NG">Lagos, Nigeria</option>
                  <option value="ZA">Johannesburg, South Africa</option>
                  <option value="KE">Nairobi, Kenya</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label-caps text-label-caps text-outline ml-1 uppercase" htmlFor="bio">
                Merchant Bio
              </label>
              <textarea
                className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary rounded-xl px-4 py-3.5 text-body-lg text-on-surface transition-all resize-none outline-none"
                id="bio"
                rows={4}
                value={bio}
                onChange={e => setBio(e.target.value)}
                placeholder="Describe your business and what makes your products unique..."
              />
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-5 flex items-center justify-between border border-outline-variant/30 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-body-lg">Public Visibility</p>
                <p className="text-body-sm text-on-surface-variant">Allow customers to see your profile details</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setVisibility(!visibility)}
              className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                visibility ? 'bg-secondary' : 'bg-outline-variant'
              }`}
            >
              <span
                className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                  visibility ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-6 pb-20 md:pb-0">
            <button
              type="submit"
              disabled={isSaving}
              className={`flex-grow font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
                saveStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-primary text-[#1c1b1b] hover:bg-primary/90'
              } disabled:opacity-70`}
            >
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                  Saving...
                </>
              ) : saveStatus === 'success' ? (
                <>
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  Saved Successfully
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    save
                  </span>
                  Save Profile Changes
                </>
              )}
            </button>
            <button
              type="button"
              className="bg-surface-container-high text-on-surface font-bold py-4 px-10 rounded-2xl hover:bg-surface-variant active:scale-[0.98] transition-all"
            >
              Discard
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
