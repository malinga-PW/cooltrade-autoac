import React, { useState, useRef, useEffect } from 'react';
import { ThermometerSnowflake, Flame, Sparkles, Wind, Gauge, CheckCircle2, AlertTriangle, ArrowLeftRight } from 'lucide-react';

export default function ThermalCompareSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 relative bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-800 text-cyan-300 text-xs font-bold">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>INTERACTIVE THERMAL & PERFORMANCE PROOF</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading">
            See the Frost Difference: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              19.8°C Clogged vs 4.2°C Restored
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto">
            Drag the slider horizontally to compare a clogged evaporator coil against our ultrasonic foam restored cooling system with computerized Robinair virgin gas recharge.
          </p>
        </div>

        {/* Interactive Comparison Card Container */}
        <div className="max-w-5xl mx-auto bg-slate-900/90 rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
          
          <div 
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-96 sm:h-[460px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800"
          >
            {/* Background Image 1 (BEFORE / UNRESTORED) */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/80 via-slate-950 to-red-950/70 flex flex-col justify-between p-6 sm:p-10">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-950/80 text-red-400 border border-red-800/80 flex items-center gap-1.5 w-fit">
                    <Flame className="w-3.5 h-3.5" />
                    <span>BEFORE SERVICE • CLOGGED COIL</span>
                  </span>
                  <div className="text-3xl sm:text-5xl font-black font-heading text-red-300 pt-2">
                    19.8°C
                  </div>
                  <span className="text-xs text-red-200/80 font-bold block">AC Vent Output (Weak & Warm)</span>
                </div>
              </div>

              <div className="space-y-2 max-w-xs bg-slate-950/70 p-4 rounded-2xl border border-red-900/40 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-bold text-red-300">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>High Humidity & Heavy Strain</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Evaporator fins blocked by dust mold. Compressor running at max load, increasing fuel consumption by 18%.
                </p>
              </div>
            </div>

            {/* Foreground Image 2 (AFTER / FROST RESTORED) - Clipped by Slider */}
            <div 
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-950/90 via-slate-950 to-blue-950/90 flex flex-col justify-between p-6 sm:p-10 transition-[clip-path] duration-75"
            >
              <div className="flex items-start justify-end text-right">
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-700/80 flex items-center gap-1.5 w-fit ml-auto">
                    <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-400" />
                    <span>COOL TRADE CERTIFIED • 100% RESTORED</span>
                  </span>
                  <div className="text-3xl sm:text-5xl font-black font-heading text-cyan-300 pt-2">
                    4.2°C
                  </div>
                  <span className="text-xs text-cyan-200/80 font-bold block">Ice Frost Cabin Chill</span>
                </div>
              </div>

              <div className="space-y-2 max-w-xs bg-slate-950/70 p-4 rounded-2xl border border-cyan-800/50 backdrop-blur-md ml-auto text-right">
                <div className="flex items-center justify-end gap-2 text-xs font-bold text-cyan-300">
                  <span>99.9% Virgin Refrigerant Purity</span>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Deep ultrasonic foam flushed coil with exact gram R134a weight. Instant cabin freeze within 45 seconds of engine start.
                </p>
              </div>
            </div>

            {/* Divider Handle Line */}
            <div 
              style={{ left: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl z-20 flex items-center justify-center -ml-0.5"
            >
              <div className="w-10 h-10 rounded-full bg-white text-slate-950 shadow-2xl border-2 border-cyan-500 flex items-center justify-center font-bold text-xs">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800 mt-6 text-center">
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Temp Drop</span>
              <strong className="text-base text-cyan-400 font-black">-15.6°C Chill</strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Airflow Velocity</span>
              <strong className="text-base text-white font-black">2.4x Stronger</strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Fuel Efficiency</span>
              <strong className="text-base text-emerald-400 font-black">+15% Saved</strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Fungus / Odor</span>
              <strong className="text-base text-cyan-300 font-black">0% Neutralized</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
