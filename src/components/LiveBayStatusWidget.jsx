import React from 'react';
import { Clock, ShieldCheck, Car, ChevronRight, Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function LiveBayStatusWidget({ onClaimBay }) {
  const bays = [
    {
      id: 1,
      name: 'Bay 1 (Master Diagnostic)',
      status: 'occupied',
      vehicle: 'Toyota Prius (WP CAC-4412)',
      task: 'Automated Robinair Vacuum Cycle',
      eta: '12 Mins remaining',
      available: false
    },
    {
      id: 2,
      name: 'Bay 2 (Mechanical & Gas)',
      status: 'open',
      vehicle: 'BAY OPEN / READY',
      task: 'Ready for Immediate Drive-in',
      eta: 'Zero Wait Time',
      available: true
    },
    {
      id: 3,
      name: 'Bay 3 (Dual AC & Vans)',
      status: 'occupied',
      vehicle: 'Toyota KDH (WP PD-6750)',
      task: '250 PSI Nitrogen Pressure Hold',
      eta: '25 Mins remaining',
      available: false
    }
  ];

  const handleClaim = () => {
    const text = `*Cool Trade Services - Instant Bay Claim*%0A%0A` +
      `🚗 *Request:* Claiming currently OPEN Bay 2 for Express AC Inspection / Refill.%0A` +
      `📍 *Location:* Kesbewa-Kindelpitiya-Bandaragama Rd%0A%0A` +
      `_I am driving in now. Please hold Bay 2._`;
    window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 border-y border-slate-200 text-slate-800 py-3.5 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left Title */}
          <div className="flex items-center space-x-3 shrink-0">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 font-heading">
                  LIVE WORKSHOP TELEMETRY
                </span>
                <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  BAY 2 OPEN NOW
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Bandaragama Workshop • Real-Time Queue Status</p>
            </div>
          </div>

          {/* Bay Status Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 flex-1 max-w-3xl">
            {bays.map((bay) => (
              <div
                key={bay.id}
                className={`p-2.5 rounded-2xl border transition-all ${
                  bay.available
                    ? 'bg-emerald-50/90 border-emerald-300 shadow-xs'
                    : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-black uppercase">
                  <span className={bay.available ? 'text-emerald-800' : 'text-slate-500'}>
                    {bay.name}
                  </span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-extrabold ${
                    bay.available ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {bay.available ? 'OPEN' : 'BUSY'}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate mt-1">
                  {bay.vehicle}
                </div>
                <div className="text-[10px] text-slate-500 truncate">
                  {bay.eta}
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="shrink-0">
            <button
              onClick={handleClaim}
              className="w-full lg:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-700/20 transition-all active:scale-95 cursor-pointer"
            >
              <span>Drive In / Hold Bay 2</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
