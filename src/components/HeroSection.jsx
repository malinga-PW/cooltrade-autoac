import React, { useState } from 'react';
import { ShieldCheck, Zap, Sparkles, CheckCircle2, ChevronRight, Wind, Gauge, Car, Droplets } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onOpenAiChat, setActiveTab }) {
  const brands = [
    { name: 'Toyota', tag: 'Hybrid & Petrol', logo: 'TOYOTA' },
    { name: 'Suzuki', tag: 'WagonR & Alto', logo: 'SUZUKI' },
    { name: 'Honda', tag: 'Grace, Vezel, Fit', logo: 'HONDA' },
    { name: 'Nissan', tag: 'X-Trail & Leaf', logo: 'NISSAN' },
    { name: 'Denso', tag: 'OEM Compressors', logo: 'DENSO' },
    { name: 'Sanden', tag: 'Direct Imports', logo: 'SANDEN' },
    { name: 'Valeo', tag: 'Cooling Systems', logo: 'VALEO' },
    { name: 'Mitsubishi', tag: 'Pajero & L200', logo: 'MITSUBISHI' },
    { name: 'Mercedes-Benz', tag: 'R1234yf Climate', logo: 'MERCEDES' },
    { name: 'BMW', tag: 'Digital Dual AC', logo: 'BMW' }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between overflow-hidden border-b border-slate-800/80 pt-28 lg:pt-32">
      
      {/* 🖼️ Crisp Full-Screen Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-autoac.jpg"
          alt="Cool Trade Services Automotive AC Workshop"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05]"
        />
        {/* Soft Left Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/80 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-6">
        <div className="max-w-2xl space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#0B101D]/90 border border-cyan-500/40 text-cyan-400 text-xs font-black backdrop-blur-md shadow-lg shadow-cyan-950/40">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>SPECIALIZED AUTO A/C CLINIC • BANDARAGAMA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white font-heading drop-shadow-md">
            Precision Auto AC Care & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Direct Import Parts
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl font-medium leading-relaxed drop-shadow-sm">
            Direct importers of brand new OEM compressors, cooling coils, and condensers in Sri Lanka. 
            Automated Robinair R134a/R1234yf vacuum recharge, nitrogen pressure leak testing, and expert dashboard overhauls in Bandaragama.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-200 bg-[#0B101D]/90 px-3 py-2 rounded-xl border border-slate-800 shadow-md backdrop-blur-md hover:border-cyan-500/50 transition-colors">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Direct OEM Parts Warranty</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-200 bg-[#0B101D]/90 px-3 py-2 rounded-xl border border-slate-800 shadow-md backdrop-blur-md hover:border-cyan-500/50 transition-colors">
              <Gauge className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Exact Gram Gas Charging</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-200 bg-[#0B101D]/90 px-3 py-2 rounded-xl border border-slate-800 shadow-md backdrop-blur-md hover:border-cyan-500/50 transition-colors">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Hybrid High-Voltage POE Oil</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
            <button
              onClick={() => {
                const el = document.getElementById('diagnostic-tool');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-cyan-950/40 flex items-center justify-center space-x-2 transition-all transform active:scale-[0.98] cursor-pointer"
            >
              <Gauge className="w-4 h-4" />
              <span>Diagnose AC Problem</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-2xl bg-[#0E1527] hover:bg-[#131C33] text-slate-100 font-extrabold text-sm tracking-wide border border-slate-700/80 shadow-md flex items-center justify-center space-x-2 transition-all backdrop-blur-md cursor-pointer hover:border-cyan-400"
            >
              <Car className="w-4 h-4 text-cyan-400" />
              <span>Browse Parts Store</span>
            </button>
            
            <a
              href="https://wa.me/94777739449?text=Hello%20Cool%20Trade%20Services!%20I%20would%20like%20to%20inquire%20about%20Auto%20AC%20service/parts."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded-2xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <span>WhatsApp Bay</span>
            </a>
          </div>

        </div>
      </div>

      {/* 🚀 Brand Logo & Supported Vehicle Marquee Banner */}
      <div className="relative z-10 w-full bg-slate-950/90 border-t border-slate-800 backdrop-blur-md py-3 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            OEM Compatible Brands & Direct Imports
          </span>
          <span className="text-cyan-400 font-mono text-[10px]">DENSO • SANDEN • VALEO AUTHORIZED IMPORTER</span>
        </div>

        <div className="relative w-full flex overflow-x-hidden">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap py-1">
            {brands.concat(brands).map((brand, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 transition-colors shadow-xs"
              >
                <span className="text-xs font-black tracking-wider text-white font-heading">{brand.name}</span>
                <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/60 font-medium">
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
