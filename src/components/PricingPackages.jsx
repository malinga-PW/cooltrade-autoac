import React from 'react';
import { Check, Star, Shield, Zap, Sparkles, ArrowRight, Gauge, Wrench, Truck } from 'lucide-react';

export default function PricingPackages({ onSelectPlan }) {
  const plans = [
    {
      name: 'Robinair Computerized Gas Refill',
      tag: 'Express Service (45 Mins)',
      price: '4,500',
      period: 'standard vehicle',
      desc: 'Automated refrigerant recovery, deep moisture vacuuming, and exact gram charging with compressor PAG oil.',
      features: [
        'Robinair Computerized Vacuum Cycle (20 mins)',
        '100% Pure Virgin R134a Refrigerant',
        'PAG46 / PAG100 Compressor Lubricant Top-Up',
        'Condenser Radiator High-Pressure Rinse',
        'Digital Temperature Gauge Vent Drop Check',
        '30-Day Gas Pressure Guarantee'
      ],
      popular: false,
      btnText: 'Book Gas Refill',
      actionKey: 'gas_recharge'
    },
    {
      name: 'Master Evaporator & Dashboard Overhaul',
      tag: 'Most Popular ⭐',
      price: '18,500',
      period: 'parts + installation',
      desc: 'Complete dashboard removal, brand new direct import cooling coil installation, and full system rejuvenation.',
      features: [
        'Zero-Rattle Dashboard Removal & Clean Refit',
        'Brand New Direct Import OEM Cooling Coil',
        'Expansion Valve & High-Pressure O-Ring Seals',
        '250 PSI Dry Nitrogen Pressure Leak Test',
        'Automated Full Gas Vacuum & Gram Charge',
        'Anti-Bacterial Air Duct Deodorization',
        'Full 1-Year Comprehensive Leak Warranty'
      ],
      popular: true,
      btnText: 'Book Master Overhaul',
      actionKey: 'cooling_coil_overhaul'
    },
    {
      name: 'Dual AC Van & Tour Fleet Package',
      tag: 'Heavy Duty Dual Climate',
      price: '14,500',
      period: 'per van / commercial',
      desc: 'Specialized for Toyota KDH, HiAce, Caravan and luxury passenger vans with dual front & rear blowers.',
      features: [
        'Front & Rear Dual Evaporator Core Balancing',
        'High-Capacity Gas Charging (Up to 850g)',
        'Parallel Flow Condenser High-Pressure Flush',
        'Rear Blower Fan Relay & Resistor Check',
        'UV Dye Injection for Long-Term Tracking',
        'Priority Bay Dispatch for Tour Vehicles'
      ],
      popular: false,
      btnText: 'Book Van Service',
      actionKey: 'van_dual_ac'
    }
  ];

  return (
    <section id="packages" className="py-24 relative bg-[#0A0F1D] border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT WORKSHOP PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Fixed-Price Auto AC Service Packages
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            No hidden costs. Direct import OEM parts, automated vacuum charging, and certified technician craftsmanship at our Bandaragama service facility.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0F172A] to-[#0B101D] text-white shadow-2xl border-2 border-cyan-500 scale-105 z-10'
                  : 'bg-[#0B101D] text-white border border-slate-800 hover:border-slate-700 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                  Most Popular Workshop Choice
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    plan.popular ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}>
                    {plan.tag}
                  </span>
                </div>

                <h3 className="text-xl font-black font-heading mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-xs mb-6 leading-relaxed text-slate-400">
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400">Rs. </span>
                  <span className={`text-4xl font-black font-heading ${plan.popular ? 'text-cyan-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 block mt-1">/ {plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-cyan-400' : 'text-cyan-500'}`} />
                      <span className="text-slate-300 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan({ plan: plan.name, price: plan.price, title: plan.name })}
                className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 active:scale-95 cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-950/60'
                    : 'bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700'
                }`}
              >
                <span>{plan.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
