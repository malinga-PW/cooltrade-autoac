import React, { useState } from 'react';
import { 
  Wind, 
  Wrench, 
  Gauge, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ChevronRight, 
  Droplets,
  Truck,
  Car,
  Activity
} from 'lucide-react';

export default function ServicesSection({ onBookService, hideHeader = false }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'gas_recharge',
      title: 'Automated Gas Vacuum & Exact-Gram Refill',
      subtitle: 'Robinair R134a & Next-Gen R1234yf Recharging',
      category: 'recharge',
      price: 'From Rs. 4,500',
      tag: 'Most Popular',
      desc: 'Deep vacuum moisture extraction followed by precise manufacturer gram-weight refrigerant charging. Includes compressor lubricating oil top-up and high-voltage POE oil for hybrid/EV compressors.',
      icon: Gauge,
      features: [
        'Robinair Computerized Vacuum Cycle',
        'Exact Gram Specification (350g - 950g)',
        'Hybrid POE Compressor Oil Safe',
        'Vent Temperature Drop Verification'
      ]
    },
    {
      id: 'cooling_coil',
      title: 'Dashboard Evaporator / Cooling Coil Overhaul',
      subtitle: 'Master Dashboard Removal & Replacement',
      category: 'repair',
      price: 'From Rs. 8,500',
      tag: 'Certified Precision',
      desc: 'Expert damage-free dashboard removal, complete cooling coil extraction, ultrasonic leak detection, and anti-bacterial sanitization. Guaranteed zero-rattle dashboard reinstallation.',
      icon: Wind,
      features: [
        'Zero-Rattle Dashboard Disassembly',
        'Brand New Direct Import OEM Coils',
        'Anti-Bacterial Foam Deep Wash',
        'Expansion Valve Replacement & Calibrated Seal'
      ]
    },
    {
      id: 'compressor_repair',
      title: 'Compressor Diagnostics & Clutch Pulley Repair',
      subtitle: 'Denso, Sanden & Valeo Rebuilding',
      category: 'compressor',
      price: 'From Rs. 7,500',
      tag: 'Direct Parts',
      desc: 'Precision repair for rattling compressors, seized bearings, and failing electromagnetic clutch plates. Direct import replacement compressors available for all Japanese & European models.',
      icon: Wrench,
      features: [
        'High-Speed Pulley Bearing Replacement',
        'Magnetic Clutch & Solenoid Valve Test',
        'Refrigerant Pressure Gauge Bench Test',
        '6-Month Direct Import Warranty'
      ]
    },
    {
      id: 'leak_detection',
      title: 'Nitrogen & UV Dye Electronic Leak Detection',
      subtitle: '250 PSI High-Pressure Integrity Testing',
      category: 'repair',
      price: 'From Rs. 3,500',
      tag: 'Pinpoint Accuracy',
      desc: 'Eliminate recurring gas leaks forever. We pressurize your vehicle AC line with inert dry nitrogen up to 250 PSI combined with UV fluorescent leak dye to spot micro-punctures instantly.',
      icon: Activity,
      features: [
        '250 PSI Dry Nitrogen Pressure Hold',
        'UV Glow Dye & UV Torch Inspection',
        'Aluminum Pipe Brazing & O-Ring Kits',
        'Zero Recurrence Guarantee'
      ]
    },
    {
      id: 'cabin_deodorize',
      title: 'Cabin Pollen Filter & Air Sanitization',
      subtitle: 'Anti-Microbial Evaporator Mist Treatment',
      category: 'maintenance',
      price: 'From Rs. 2,800',
      tag: 'Fresh Air',
      desc: 'Removes musty odors, bacterial mildew, and airborne allergens. Installation of 3-layer PM2.5 activated carbon cabin filters followed by high-temp dry mist evaporator duct sanitization.',
      icon: Droplets,
      features: [
        'PM2.5 Activated Carbon Cabin Filter',
        'Complete Duct Mildew Disinfection',
        'Cigarette & Damp Odor Elimination',
        'Healthy In-Cabin Breathing Quality'
      ]
    },
    {
      id: 'fleet_dual_ac',
      title: 'Dual AC Vans, Commercial Fleets & Heavy Machinery',
      subtitle: 'KDH, HiAce, Buses & Excavator Cabins',
      category: 'fleet',
      price: 'Custom Quote',
      tag: 'Heavy Duty',
      desc: 'Specialized cooling solutions for passenger transport vans with dual front/rear blowers, corporate bus fleets, lorries, and agricultural/construction machinery air conditioning.',
      icon: Truck,
      features: [
        'Front + Rear Dual Blower Balancing',
        'High-Capacity Commercial Compressors',
        'Fleet Maintenance Contracts (AMC)',
        'Priority Bay Dispatch for Tour Vans'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'recharge', label: 'Gas & Vacuum' },
    { id: 'repair', label: 'Cooling Coil & Leaks' },
    { id: 'compressor', label: 'Compressors' },
    { id: 'maintenance', label: 'Filters & Hygiene' },
    { id: 'fleet', label: 'Dual AC & Vans' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 relative bg-[#070B14] border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SPECIALIZED AUTO A/C ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
              Comprehensive Automotive Cooling Solutions
            </h2>
            <p className="text-slate-400 text-xs sm:text-base">
              From automated Robinair gas charging to complex dashboard dismantling and direct Japanese OEM spare parts, our Bandaragama workshop delivers dealership-grade precision at transparent prices.
            </p>
          </div>
        )}

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#0B101D] rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white tracking-tight font-heading group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bold text-cyan-400 mb-2">
                    {service.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Starting Rate</span>
                    <span className="text-sm font-black text-white font-heading">{service.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (onBookService) {
                        onBookService(service);
                      } else {
                        const text = `*Cool Trade Services - Auto AC Booking Request*%0A%0A` +
                          `🛠️ *Service:* ${service.title}%0A` +
                          `💰 *Estimated:* ${service.price}%0A` +
                          `📍 *Location:* Bandaragama Workshop%0A%0A` +
                          `_Please let me know available bay times._`;
                        window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-slate-700 font-bold text-xs flex items-center space-x-1 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Book Bay</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
