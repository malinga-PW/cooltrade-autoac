import React, { useState } from 'react';
import { 
  Car, 
  Wrench, 
  Gauge, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  Wind,
  ShieldCheck,
  Droplets
} from 'lucide-react';

export default function VehicleAcDiagnostic({ onBookWithPlan }) {
  const [vehicleType, setVehicleType] = useState('sedan');
  const [symptom, setSymptom] = useState('idle_warm');
  const [gasType, setGasType] = useState('r134a');
  const [yearGroup, setYearGroup] = useState('2015_2020');

  // Vehicle Categories
  const vehicleCategories = [
    { id: 'hatchback', name: 'Hatch / Compact', desc: 'Alto, WagonR, Vitz, Aqua', gasWeight: '380g - 450g' },
    { id: 'sedan', name: 'Sedan / Hybrid', desc: 'Prius, Grace, Premio, Vezel', gasWeight: '450g - 550g' },
    { id: 'suv', name: 'SUV / 4WD Cab', desc: 'Prado, Hilux, CR-V, D-Max', gasWeight: '550g - 700g' },
    { id: 'van', name: 'Dual AC Van', desc: 'KDH, HiAce, Caravan, Every', gasWeight: '750g - 950g' },
    { id: 'euro', name: 'European / Luxury', desc: 'BMW, Benz, Audi, Range Rover', gasWeight: '520g - 650g' },
  ];

  // Symptoms
  const symptoms = [
    { 
      id: 'idle_warm', 
      label: 'Cooling drops in traffic / Idle', 
      icon: Wind,
      severity: 'Medium',
      likelyCause: 'Weak condenser fan, restricted condenser airflow, or low refrigerant level.',
      service: 'Condenser High-Pressure Flush + R134a Exact Gram Vacuum Refill',
      timeEstimate: '45 - 60 Mins',
      costEstimate: 'Rs. 4,500 - 7,500'
    },
    { 
      id: 'no_cool', 
      label: 'Blows only warm air / No cooling', 
      icon: AlertTriangle,
      severity: 'High',
      likelyCause: 'Compressor clutch / magnetic valve failure, major gas leak, or blown fuse/relay.',
      service: 'Electronic Diagnostic Scan + Nitrogen Pressure Leak Test',
      timeEstimate: '1 - 2 Hours',
      costEstimate: 'Rs. 5,500 - 14,500+'
    },
    { 
      id: 'bad_odor', 
      label: 'Musty / Foul odor when AC is ON', 
      icon: Droplets,
      severity: 'Low',
      likelyCause: 'Bacterial fungus buildup on cooling coil / Clogged cabin pollen filter.',
      service: 'Anti-Bacterial Coil Foam Wash + OEM PM2.5 Cabin Filter Replacement',
      timeEstimate: '30 Mins',
      costEstimate: 'Rs. 3,500 - 5,800'
    },
    { 
      id: 'bearing_sound', 
      label: 'Grinding / Screeching noise', 
      icon: Gauge,
      severity: 'Critical',
      likelyCause: 'Compressor pulley bearing seizure or worn magnetic clutch plate.',
      service: 'Compressor Pulley Overhaul / Bearing & Magnetic Coil Replacement',
      timeEstimate: '2 - 3 Hours',
      costEstimate: 'Rs. 9,500 - 18,500'
    },
    { 
      id: 'water_leak', 
      label: 'Water dripping inside cabin floor', 
      icon: Droplets,
      severity: 'Medium',
      likelyCause: 'Evaporator condensate drain line clogged with dust/debris.',
      service: 'Drain Tube De-clogging + Dashboard Air Chamber Sanitization',
      timeEstimate: '30 - 45 Mins',
      costEstimate: 'Rs. 2,800 - 4,500'
    }
  ];

  const currentVehicle = vehicleCategories.find(v => v.id === vehicleType) || vehicleCategories[1];
  const currentSymptom = symptoms.find(s => s.id === symptom) || symptoms[0];

  const handleWhatsAppBooking = () => {
    const text = `*Cool Trade Services - Auto AC Diagnostic Booking*%0A%0A` +
      `🚗 *Vehicle Type:* ${currentVehicle.name} (${currentVehicle.desc})%0A` +
      `⚠️ *Symptom:* ${currentSymptom.label}%0A` +
      `🔍 *Initial Diagnosis:* ${currentSymptom.likelyCause}%0A` +
      `🛠️ *Recommended Service:* ${currentSymptom.service}%0A` +
      `🧪 *Refrigerant Spec:* ${gasType.toUpperCase()} (${currentVehicle.gasWeight})%0A` +
      `⏱️ *Est. Bay Time:* ${currentSymptom.timeEstimate}%0A` +
      `📍 *Preferred Location:* Bandaragama Main Workshop%0A%0A` +
      `_Please confirm technician availability and slot._`;
    
    window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
  };

  return (
    <section id="diagnostic-tool" className="py-24 relative bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold">
            <Gauge className="w-3.5 h-3.5" />
            <span>INSTANT VEHICLE AC DIAGNOSTIC TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Diagnose Your Car AC Problem in Seconds
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your vehicle model and the symptom you are experiencing. Our diagnostic engine predicts the root cause, exact refrigerant capacity, and estimated repair cost at our Bandaragama service bay.
          </p>
        </div>

        {/* Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Step 1: Vehicle Model */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-cyan-600" />
                  <span>1. Select Vehicle Category</span>
                </label>
                <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200">
                  Capacity: {currentVehicle.gasWeight}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {vehicleCategories.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicleType(v.id)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      vehicleType === v.id
                        ? 'border-cyan-500 bg-cyan-50/60 shadow-xs ring-1 ring-cyan-500'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-xs leading-tight mb-0.5">{v.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Symptom Selector */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>2. What is the Primary AC Issue?</span>
              </label>
              <div className="space-y-2">
                {symptoms.map((s) => {
                  const Icon = s.icon;
                  const isSelected = symptom === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSymptom(s.id)}
                      className={`w-full p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50/70 shadow-xs ring-1 ring-cyan-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900">{s.label}</div>
                          <div className="text-[11px] text-slate-500 hidden sm:block">{s.likelyCause}</div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full shrink-0 ${
                        s.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                        s.severity === 'High' ? 'bg-amber-100 text-amber-800' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {s.severity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Gas Specification */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-sky-500" />
                <span>3. AC Refrigerant Specification</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setGasType('r134a')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    gasType === 'r134a'
                      ? 'border-cyan-500 bg-cyan-50 ring-1 ring-cyan-500'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900">R134a Refrigerant</div>
                  <div className="text-[10px] text-slate-500">Standard Japanese & Sri Lankan Fleet</div>
                </button>
                <button
                  onClick={() => setGasType('r1234yf')}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    gasType === 'r1234yf'
                      ? 'border-cyan-500 bg-cyan-50 ring-1 ring-cyan-500'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900">R1234yf Eco Refrigerant</div>
                  <div className="text-[10px] text-slate-500">Post-2018 European & Next-Gen Hybrids</div>
                </button>
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs uppercase tracking-widest text-cyan-300 font-extrabold">Diagnostic Report</span>
                </div>
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700">
                  Bay Slot Ready
                </span>
              </div>

              {/* Primary Diagnosis Card */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Predicted Root Cause:</span>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-sm text-cyan-100 font-medium leading-relaxed">
                  {currentSymptom.likelyCause}
                </div>
              </div>

              {/* Service Protocol */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Recommended Service:</span>
                <div className="text-base font-extrabold text-white flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{currentSymptom.service}</span>
                </div>
              </div>

              {/* Specs & Estimates Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700">
                  <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" /> Bay Time
                  </div>
                  <div className="text-sm font-black text-white mt-1">{currentSymptom.timeEstimate}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700">
                  <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> Est. Price Range
                  </div>
                  <div className="text-sm font-black text-cyan-300 mt-1">{currentSymptom.costEstimate}</div>
                </div>
              </div>

              {/* Direct Parts Guarantee */}
              <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/50 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <p className="text-[11px] text-slate-300 leading-tight">
                  <strong className="text-white">Direct Import Guarantee:</strong> Original Denso / Sanden / Valeo parts with 6-month warranty.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="relative z-10 pt-6 space-y-3">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Book Priority Bay Slot on WhatsApp</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <a href="tel:+94777739449" className="text-xs text-slate-400 hover:text-white transition-colors">
                  Or Call Hotline: <strong className="text-white font-mono">077 773 9449</strong> (Bandaragama Hub)
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
