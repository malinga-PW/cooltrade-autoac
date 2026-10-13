import React from 'react';
import { AlertTriangle, Phone, Navigation, ShieldAlert, ArrowRight } from 'lucide-react';

export default function EmergencySosBar() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white py-2.5 px-4 relative z-30 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        
        <div className="flex items-center space-x-2.5">
          <span className="p-1 rounded-lg bg-white/20 animate-pulse">
            <AlertTriangle className="w-4 h-4 text-white" />
          </span>
          <p className="text-xs font-black tracking-wide">
            <span>SOUTHERN EXPRESSWAY & HIGHWAY AC BREAKDOWN: </span>
            <span className="font-medium text-rose-100 hidden md:inline">
              Near Kahathuduwa / Gelanigama Exit? AC compressor locked or engine overheating?
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <a
            href="tel:+94777739449"
            className="px-3 py-1 rounded-lg bg-white text-rose-700 font-extrabold text-[11px] uppercase tracking-wider hover:bg-rose-50 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-rose-600" />
            <span>077 773 9449 (SOS)</span>
          </a>
          <a
            href="https://wa.me/94777739449?text=EMERGENCY%20AC%20BREAKDOWN!%20My%20vehicle%20is%20stranded%20near%20Southern%20Expressway%20/%20Bandaragama%20area.%20Please%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white hover:underline font-bold hidden sm:inline"
          >
            Share Live GPS Pin on WhatsApp →
          </a>
        </div>

      </div>
    </div>
  );
}
