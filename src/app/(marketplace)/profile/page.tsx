'use client';

import Link from 'next/link';

const SELLER_LISTINGS = [
  { title: 'MacBook Pro M2', price: '₦ 1,850,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4', location: 'Ikeja, Lagos' },
  { title: 'Toyota Camry 2018', price: '₦ 12,500,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdBqwKA1AbkkXjkisOUJ3teqEewPDrLzkCaOYD2Y2f9xwKYB8Z77OLImmdR9t8Bh_nk6Bp3frUHJaU9IY_K87hhSvdF_5ICtxNFml9UoHX7yq4AReqsFBNVcJeliKG7RfqCTSfiB4YzfzVzu_FbN_jzljfOW8ivSW1nHXCb-fVliakiVobrFsXoa-Dce7EvWTaYYtEAnKGoAHccCdgaX0ZWk1vg7xQCv6cSD0fOh3xEm3mnVro_KjuTh3xt9kfAkoep19KxMISYlo', location: 'VI, Lagos' },
  { title: 'iPhone 15 Pro', price: '₦ 950,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3-uhTrqrAOZ_7zRjd7wKEYK1PKExpnNEjLGUmHsticMQ0PKNTHPF7jd8rfwFN3SVIWGAjbnadoUzfEspUI_cZEQUOEhYsAtJcbXP85DSRQpakTj-aLJiFftIyLtze1tP7GzMwZ99l4d0Psgc-wtSP1c55_b34fPUlRk9CIX4G7wVK5S9mJ6ByuWSNeZo_XQ9yropWXq3iV65L0GE3DXInNv_2CyusAv__PPQYeEdlxkN5LVnRZzOKr-raOzmh6HfO9d2P7lk7C4', location: 'Surulere, Lagos' },
];

const BADGES = [
  { icon: 'verified_user', label: 'ID Verified', color: 'text-secondary' },
  { icon: 'star', label: 'Top Seller', color: 'text-primary' },
  { icon: 'local_shipping', label: 'Fast Shipper', color: 'text-tertiary' },
];

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto px-container-margin-mobile py-6 flex flex-col gap-6">
      {/* Profile Header */}
      <div className="bg-surface-container-low rounded-3xl p-6 flex flex-col items-center gap-4 text-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center text-3xl font-bold text-on-primary-container">
            AK
          </div>
          {/* Verified badge on avatar */}
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-secondary rounded-full flex items-center justify-center border-2 border-surface">
            <span className="material-symbols-outlined text-on-secondary text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
        </div>

        <div>
          <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface font-bold">Adewale Kunle</h2>
          <p className="text-body-sm font-body-sm text-on-surface-variant">Member since Jan 2022 · Lagos</p>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-3 gap-4 pt-2 border-t border-outline-variant">
          {[
            { label: 'Listings', value: '47' },
            { label: 'Sales', value: '312' },
            { label: 'Rating', value: '4.8 ⭐' },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-title-md font-title-md text-on-surface font-bold">{s.value}</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex gap-3 flex-wrap justify-center">
          {BADGES.map(b => (
            <div key={b.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-surface rounded-xl border border-outline-variant">
              <span className={`material-symbols-outlined text-[16px] ${b.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
              <span className="text-label-caps font-label-caps text-on-surface">{b.label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 w-full">
          <button className="flex-1 bg-primary-container text-on-primary-container font-body-sm text-body-sm font-bold py-2.5 rounded-xl hover:bg-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-[16px] mr-1" style={{ verticalAlign: 'middle' }}>edit</span>
            Edit Profile
          </button>
          <Link href="/sell" className="flex-1 bg-secondary text-on-secondary font-body-sm text-body-sm font-bold py-2.5 rounded-xl hover:opacity-90 transition-colors text-center flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            New Listing
          </Link>
        </div>
      </div>

      {/* AI Performance Insight */}
      <div className="glass-ai rounded-2xl p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <h3 className="text-title-md font-title-md text-on-surface font-bold">AI Performance Insight</h3>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Your listings receive <span className="font-bold text-on-surface">3.2× more views</span> than average sellers in Lagos. Posting on Tuesday mornings increases your response rate by 28%.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Avg Response', value: '< 2 hrs', icon: 'chat_bubble' },
            { label: 'Repeat Buyers', value: '38%', icon: 'repeat' },
          ].map(m => (
            <div key={m.label} className="bg-surface rounded-xl p-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
              <div>
                <div className="text-title-md font-title-md text-on-surface font-bold">{m.value}</div>
                <div className="text-label-caps font-label-caps text-on-surface-variant">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Listings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-title-md font-title-md text-on-surface font-bold">Active Listings</h3>
          <button className="text-label-caps font-label-caps text-secondary font-bold hover:underline">VIEW ALL</button>
        </div>
        <div className="flex flex-col gap-3">
          {SELLER_LISTINGS.map((item, i) => (
            <div key={i} className="flex gap-4 bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img alt={item.title} className="w-24 h-24 object-cover" src={item.img} />
              <div className="flex-1 p-3 flex flex-col justify-center gap-1">
                <h4 className="text-body-sm font-body-sm text-on-surface font-semibold">{item.title}</h4>
                <div className="text-title-md font-title-md text-secondary font-bold text-[16px]">{item.price}</div>
                <div className="flex items-center text-on-surface-variant text-[12px] gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="flex items-center pr-4">
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
