import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Truck, Phone, ChevronRight } from 'lucide-react';

export default function CoverageMap() {
  const hubs = [
    { name: 'Bandaragama Main Bays', time: '0 Min Access', desc: 'Kesbewa-Kindelpitiya-Bandaragama Rd (3 Full Bays)' },
    { name: 'Kahathuduwa Interchange', time: '8-10 Mins Drive', desc: 'Direct Southern Expressway Exit Access' },
    { name: 'Horana & Anguruwatota', time: '15 Mins Drive', desc: 'Daily express vehicle drop-offs & inspections' },
    { name: 'Panadura & Wadduwa', time: '18 Mins Drive', desc: 'Coastal corridor quick access via Bandaragama Rd' },
    { name: 'Piliyandala & Kesbewa', time: '12 Mins Drive', desc: 'Direct straight-line highway connection' },
    { name: 'Island-wide Parts Dispatch', time: 'Same-Day Courier', desc: 'Direct import compressors & coils to any garage' },
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <Navigation className="w-3.5 h-3.5 text-emerald-600" />
            <span>CONVENIENT WORKSHOP ACCESS & ISLAND-WIDE COURIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-heading text-slate-900">
            Prime Location on Bandaragama-Kesbewa Main Road
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Located just minutes from the Kahathuduwa Southern Expressway exit, vehicle owners and fleet operators from Colombo South and Kalutara district reach us with ease.
          </p>
        </div>

        {/* Access Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-emerald-400 hover:shadow-md transition-all space-y-3 group shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                  {hub.time}
                </span>
              </div>

              <h4 className="text-base font-black font-heading text-slate-900">{hub.name}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{hub.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-black text-white font-heading">Need Directions or Breakdown Advice?</h4>
            <p className="text-xs text-slate-300">Call our workshop team directly or request Google Maps pin on WhatsApp.</p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:+94777739449"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>077 773 9449</span>
            </a>
            <a
              href="https://maps.app.goo.gl/2sFBwyqh7wuadSwY7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 flex items-center gap-1.5 transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open Google Maps</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
