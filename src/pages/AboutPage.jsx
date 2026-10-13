import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Wrench, 
  Car, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles,
  Users,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function AboutPage({ setActiveTab }) {
  const milestones = [
    { year: 'Direct Import', title: 'Japanese OEM Sourcing', desc: 'Direct supply lines with genuine Denso, Sanden, and Valeo distributors in Japan & Singapore.' },
    { year: 'Tech First', title: 'Robinair Computerized Bays', desc: 'Eliminated manual guessing with fully automated vacuum, recovery, and gram-exact refrigerant rechargers.' },
    { year: 'Hybrid Ready', title: 'High-Voltage Inverter AC', desc: 'Specialized diagnostic protocols and dielectric POE oil handling for Toyota Prius, Aqua, and European hybrids.' },
    { year: 'Bandaragama', title: 'Full-Service AC Hub', desc: '3 dedicated service bays with on-site parts warehouse catering to retail customers and auto garages island-wide.' }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* Cinematic Banner */}
      <PageBanner
        title="Engineering Precision in Vehicle Cooling"
        subtitle="Bandaragama's Specialized Automotive Air Conditioning Center & Direct Import Parts Distributor."
        badge="ABOUT COOL TRADE SERVICES"
        bgImage="/assets/banner-about.jpg"
        breadcrumbs={[
          { label: 'Home', tabId: 'home' },
          { label: 'About Us', active: true }
        ]}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold border border-cyan-200">
              <Car className="w-3.5 h-3.5" />
              <span>THE COOL TRADE ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Direct Import Pricing, <br />
              <span className="text-cyan-600">Dealership Precision.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong>Cool Trade Services</strong>, we solved the biggest problem vehicle owners face in Sri Lanka: recurring AC leaks and cheap imitation parts that seize compressors after a few months.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By directly importing genuine brand new OEM compressors, condensers, and micro-channel cooling coils from authorized manufacturers, we eliminate third-party markup while providing real warranties and dealer-grade diagnostic testing.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl font-black text-cyan-600 font-heading">3 Bays</div>
                <div className="text-xs text-slate-500 font-bold uppercase mt-1">Dedicated AC Service Bays</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl font-black text-slate-900 font-heading">100%</div>
                <div className="text-xs text-slate-500 font-bold uppercase mt-1">Virgin R134a/R1234yf Gas</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950">
              <img
                src="/assets/banner-services.jpg"
                alt="Cool Trade Technician at Work"
                className="w-full h-96 object-cover object-center filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                    <span>Certified Technicians</span>
                  </div>
                  <h4 className="text-lg font-bold">Zero-Damage Dashboard Removal Craftsmanship</h4>
                  <p className="text-xs text-slate-300">Each vehicle is dismantled with precision tools and returned rattle-free.</p>
                </div>
              </div>
            </div>

            {/* Official Logo Emblem floating badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-3xl p-3 shadow-xl border border-slate-100 hidden sm:flex items-center space-x-3">
              <img
                src="/assets/cooltrade-logo.png"
                alt="Official Emblem"
                className="w-14 h-14 rounded-full object-contain"
              />
              <div className="pr-3">
                <div className="text-xs font-black text-slate-900">COOL TRADE</div>
                <div className="text-[10px] text-cyan-600 font-bold">BANDARAGAMA</div>
              </div>
            </div>
          </div>

        </div>

        {/* Milestones Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Why Vehicle Owners Choose Us</h3>
            <p className="text-xs sm:text-sm text-slate-500">Built on uncompromising standards of refrigerant purity and mechanical accuracy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-600 bg-cyan-100 px-2.5 py-0.5 rounded-full inline-block">
                  {m.year}
                </span>
                <h4 className="font-bold text-sm text-slate-900 font-heading">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Location Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-cyan-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 text-xs font-bold">
              <MapPin className="w-4 h-4" />
              <span>Bandaragama Main Workshop Bay</span>
            </div>
            <h3 className="text-2xl font-black font-heading">Visit Our Service Center on Kesbewa Road</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Equipped with 3 specialized vehicle bays, customer waiting lounge with Wi-Fi, and complete direct-import spare parts inventory.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-950/50 flex items-center gap-2 shrink-0 transition-all active:scale-95 cursor-pointer"
          >
            <span>Get Directions & Bay Slot</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
