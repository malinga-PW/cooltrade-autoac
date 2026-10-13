import React, { useState } from 'react';
import { 
  Car, 
  Wrench, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Gauge, 
  Sparkles,
  Droplets,
  Layers,
  MessageCircle
} from 'lucide-react';

export default function VehicleGaragePicker({ onOpenBooking, setActiveTab }) {
  const [selectedMake, setSelectedMake] = useState('Toyota');
  const [selectedModel, setSelectedModel] = useState('Prius ZVW30 / ZVW50');

  const database = {
    'Toyota': [
      {
        model: 'Prius ZVW30 / ZVW50',
        years: '2009 - 2022 Hybrid',
        gasWeight: '480g - 500g R134a',
        oilSpec: 'Denso ND-Oil 11 (High-Voltage Dielectric POE Only)',
        compressorType: 'ES18 201V Electric Scroll Compressor',
        coilPart: '88501-12450 Micro-Channel Evaporator',
        cabinFilter: 'PM2.5 Activated Charcoal (87139-30040)',
        bayTime: '3.5 Hours (Dashboard Precision Dismantle)',
        matchingCompressorPrice: 'Rs. 78,000 (OEM)',
        matchingCoilPrice: 'Rs. 18,500'
      },
      {
        model: 'Aqua / Prius C',
        years: '2012 - 2020 Hybrid',
        gasWeight: '420g - 450g R134a',
        oilSpec: 'Denso ND-Oil 11 (High-Voltage Dielectric)',
        compressorType: 'ES14 Electric Inverter Compressor',
        coilPart: '88501-52110 Aluminum Dual-Flow Coil',
        cabinFilter: 'PM2.5 High-Efficiency Filter',
        bayTime: '3 Hours',
        matchingCompressorPrice: 'Rs. 68,000 (OEM)',
        matchingCoilPrice: 'Rs. 17,500'
      },
      {
        model: 'HiAce / KDH 200, 201, 222 (Dual AC)',
        years: '2005 - 2023 Diesel/Petrol',
        gasWeight: '780g - 850g R134a (Dual Core)',
        oilSpec: 'Denso ND-Oil 8 (PAG46 High-Viscosity)',
        compressorType: '10S17C / 10S20C Heavy-Duty Swashplate',
        coilPart: 'Front + Rear Dual Evaporator Set',
        cabinFilter: 'Dual Core Heavy Dust Filter',
        bayTime: '2.5 Hours (Dual System Balance)',
        matchingCompressorPrice: 'Rs. 58,000 (Denso)',
        matchingCoilPrice: 'Rs. 24,500'
      },
      {
        model: 'Land Cruiser Prado 150',
        years: '2010 - 2023 D-4D / V6',
        gasWeight: '650g - 720g R134a (Multi-Zone)',
        oilSpec: 'Denso ND-Oil 8 (PAG46)',
        compressorType: '7SBU16A Variable Displacement',
        coilPart: 'Multi-Zone Climate Evaporator Core',
        cabinFilter: 'Anti-Allergen Dual Carbon Filter',
        bayTime: '4 Hours',
        matchingCompressorPrice: 'Rs. 92,000 (OEM)',
        matchingCoilPrice: 'Rs. 29,500'
      }
    ],
    'Suzuki': [
      {
        model: 'WagonR Stingray / FX (MH34S, MH44S, MH55S)',
        years: '2013 - 2022 E-Neocharge / Mild Hybrid',
        gasWeight: '370g - 400g R134a',
        oilSpec: 'Denso ND-Oil 12 / PAG46 Low-Viscosity',
        compressorType: 'Denso SV07E Variable Magnetic Valve',
        coilPart: '95410-72M00 Ultra-Thin Evaporator',
        cabinFilter: 'High-Density PM2.5 Micro Filter',
        bayTime: '2.5 Hours',
        matchingCompressorPrice: 'Rs. 42,500 (Bestseller)',
        matchingCoilPrice: 'Rs. 16,500'
      },
      {
        model: 'Alto 800 / K10 / Japanese Turbo',
        years: '2014 - 2023',
        gasWeight: '350g - 380g R134a',
        oilSpec: 'PAG46 High Heat Lubricant',
        compressorType: 'SS06LT Compact Compressor',
        coilPart: 'Direct Bolt-In Core',
        cabinFilter: 'Anti-Pollen Dust Filter',
        bayTime: '2 Hours',
        matchingCompressorPrice: 'Rs. 32,500',
        matchingCoilPrice: 'Rs. 14,500'
      }
    ],
    'Honda': [
      {
        model: 'Vezel Hybrid (RU1, RU3)',
        years: '2014 - 2021 Sport Hybrid i-DCD',
        gasWeight: '450g - 480g R134a',
        oilSpec: 'Honda 38897-R9S-003 / High-Dielectric POE',
        compressorType: 'Electric High-Voltage Compressor',
        coilPart: '80211-T5A-003 Multi-Flow Evaporator',
        cabinFilter: 'Bio-Functional Cabin Filter',
        bayTime: '3.5 Hours',
        matchingCompressorPrice: 'Rs. 82,000 (OEM)',
        matchingCoilPrice: 'Rs. 22,000'
      },
      {
        model: 'Grace Hybrid / Fit GP5',
        years: '2014 - 2020 Hybrid',
        gasWeight: '430g - 460g R134a',
        oilSpec: 'Dielectric POE High-Voltage Lubricant',
        compressorType: 'Electric Scroll Hybrid Compressor',
        coilPart: 'Dual Aluminum Channel Core',
        cabinFilter: 'PM2.5 Charcoal Filter',
        bayTime: '3 Hours',
        matchingCompressorPrice: 'Rs. 79,000',
        matchingCoilPrice: 'Rs. 21,500'
      }
    ]
  };

  const makes = Object.keys(database);
  const models = database[selectedMake] || [];
  const currentSpec = models.find(m => m.model === selectedModel) || models[0];

  const handleMakeChange = (make) => {
    setSelectedMake(make);
    setSelectedModel(database[make][0].model);
  };

  const handleWhatsAppBooking = () => {
    const text = `*Cool Trade Services - Vehicle Compatibility Booking*%0A%0A` +
      `🚗 *Vehicle:* ${selectedMake} ${currentSpec.model} (${currentSpec.years})%0A` +
      `🧪 *Refrigerant Spec:* ${currentSpec.gasWeight}%0A` +
      `🛢️ *Required Oil:* ${currentSpec.oilSpec}%0A` +
      `📦 *Matching Compressor:* ${currentSpec.matchingCompressorPrice}%0A` +
      `❄️ *Matching Coil:* ${currentSpec.matchingCoilPrice}%0A` +
      `📍 *Location:* Bandaragama Main Workshop Bay%0A%0A` +
      `_Please confirm slot and stock availability._`;
    window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold">
            <Car className="w-3.5 h-3.5" />
            <span>GARAGE COMPATIBILITY SPEC LOCKER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Select Your Vehicle for Exact Factory AC Specs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Never guess gas weight or compressor oil. Lock your vehicle model below to unlock official manufacturer refrigerant capacities and direct matching OEM spare parts.
          </p>
        </div>

        {/* Selection Tabs */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Make Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {makes.map((make) => (
              <button
                key={make}
                onClick={() => handleMakeChange(make)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  selectedMake === make
                    ? 'bg-slate-900 text-white shadow-md ring-2 ring-cyan-500'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {make}
              </button>
            ))}
          </div>

          {/* Model Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {models.map((item) => (
              <button
                key={item.model}
                onClick={() => setSelectedModel(item.model)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedModel === item.model
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {item.model}
              </button>
            ))}
          </div>
        </div>

        {/* Specification Dashboard Card */}
        {currentSpec && (
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800">
                  OEM SPECIFICATION VERIFIED
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1">
                  {selectedMake} {currentSpec.model}
                </h3>
                <span className="text-xs text-slate-400 font-medium">{currentSpec.years}</span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Est. Bay Turnaround</span>
                <span className="text-sm font-black text-cyan-300 font-mono">{currentSpec.bayTime}</span>
              </div>
            </div>

            {/* Spec Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Exact Factory Gas Charge</span>
                </div>
                <div className="text-xl font-black text-cyan-400 font-heading">
                  {currentSpec.gasWeight}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Computerized Robinair automated vacuum extraction & exact gram weight refilling.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mandatory Lubricant Spec</span>
                </div>
                <div className="text-sm font-bold text-amber-300">
                  {currentSpec.oilSpec}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Zero short-circuit risk. Protects inverter motor winding and mechanical scroll vanes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Compressor Architecture</span>
                </div>
                <div className="text-sm font-bold text-sky-200">
                  {currentSpec.compressorType}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Direct import replacement unit available in stock with 6-month warranty.
                </p>
              </div>

            </div>

            {/* Matching Parts & Actions Footer */}
            <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Direct Import Parts In-Stock in Bandaragama:</span>
                </div>
                <div className="text-xs text-slate-400 flex flex-wrap gap-4 pt-1">
                  <span>Compressor: <strong className="text-white">{currentSpec.matchingCompressorPrice}</strong></span>
                  <span>Cooling Coil: <strong className="text-white">{currentSpec.matchingCoilPrice}</strong></span>
                  <span>Filter: <strong className="text-white">Rs. 2,900</strong></span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppBooking}
                className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book This Vehicle Bay Slot on WhatsApp</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
