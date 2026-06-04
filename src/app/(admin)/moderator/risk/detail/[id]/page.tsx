import Link from 'next/link';

export default async function ModeratorRiskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-surface flex items-center px-container-margin-mobile h-16 sticky top-0 z-50 border-b border-outline-variant/10">
        <Link href="/moderator/risk" className="material-symbols-outlined text-on-surface-variant p-2">arrow_back</Link>
        <div className="ml-2">
          <h1 className="font-bold text-lg">Risk Investigation</h1>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase">Case #{id}</p>
        </div>
      </header>

      <main className="container mx-auto px-container-margin-mobile py-8 max-w-3xl space-y-6">
        <section className="bg-red-50 border border-red-100 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-1">High confidence</p>
            <h2 className="text-2xl font-black">Unusual payout spike</h2>
            <p className="text-sm text-on-surface-variant">Merchant Gadget_HQ has a sudden 312% payout increase after low-trust sales.</p>
          </div>
          <div className="w-20 h-20 rounded-2xl bg-red-600 text-white flex items-center justify-center text-3xl font-black">88</div>
        </section>

        <section className="grid sm:grid-cols-3 gap-4">
          {[
            ['Sales velocity', '+312%'],
            ['Refund risk', 'High'],
            ['MoMo status', 'Hold suggested'],
          ].map(([label, value]) => (
            <div key={label} className="bg-surface border border-outline-variant/20 rounded-2xl p-5">
              <p className="text-[10px] font-black uppercase text-on-surface-variant mb-2">{label}</p>
              <p className="font-black text-lg">{value}</p>
            </div>
          ))}
        </section>

        <section className="bg-surface border border-outline-variant/20 rounded-3xl p-6">
          <h3 className="font-black mb-4">AI evidence trail</h3>
          <div className="space-y-4">
            {[
              'Five high-value orders came from newly created buyer accounts.',
              'Two delivery addresses match prior refund-abuse investigations.',
              'Payout method changed 18 minutes before the spike.',
            ].map((item, index) => (
              <div key={item} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center font-black shrink-0">{index + 1}</div>
                <p className="text-sm font-medium pt-1">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/moderator/risk" className="bg-green-600 text-white text-center py-4 rounded-2xl font-black">Mark Safe</Link>
          <Link href="/moderator/payout/audit" className="bg-black text-white text-center py-4 rounded-2xl font-black">Hold Payout</Link>
        </div>
      </main>
    </div>
  );
}
