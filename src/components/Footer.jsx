import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck, 
  Car, 
  CheckCircle2, 
  Heart,
  ChevronRight,
  MessageCircle,
  Gauge
} from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/cooltrade-logo.png"
                alt="Cool Trade Services Logo"
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5"
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight font-heading">
                  <span className="text-cyan-400">COOL </span>TRADE SERVICES<span className="text-cyan-400">.</span>
                </span>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                  AUTO A/C SPECIALISTS • BANDARAGAMA
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sri Lanka's dedicated automotive climate engineering center and direct importer of brand new OEM compressors, cooling coils, condensers and laboratory-grade R134a/R1234yf refrigerants.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="tel:+94777739449"
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>077 773 9449</span>
              </a>
              <a
                href="https://wa.me/94777739449"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-bold text-xs border border-emerald-800/50 flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Bay</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-wider font-heading">
              Services & Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home & Workshop Highlights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Automotive AC Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Direct Import Parts Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { 
                    setActiveTab('home'); 
                    setTimeout(() => {
                      const el = document.getElementById('diagnostic-tool');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <Gauge className="w-3 h-3 text-cyan-400" />
                  <span>Vehicle Diagnostic Tool</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Cool Trade Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('admin'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Workshop Admin Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Workshop Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-wider font-heading">
              Bandaragama Workshop Hub
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Kesbewa-Kindelpitiya-Bandaragama Road, Bandaragama 12534, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:30 PM (Sun: Priority Appointments)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+94 77 773 9449 / +94 77 712 7127</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <strong className="text-cyan-300 block mb-0.5">OEM Direct Importers:</strong>
              Denso • Sanden • Valeo • Hanon Systems genuine components backed by verified warranty.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>Cool Trade Services</strong> (Pvt) Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Engineered by</span>
            <strong className="text-cyan-400">PixelWave AI Solutions</strong>
          </div>
        </div>

      </div>
    </footer>
  );
}
