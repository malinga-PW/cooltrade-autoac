import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Car, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function ContactPage({ setActiveTab }) {
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [serviceType, setServiceType] = useState('Gas Vacuum & Refill');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const text = `*Cool Trade Services - Bay Appointment Request*%0A%0A` +
      `🚗 *Vehicle:* ${vehicleModel || 'Not Specified'}%0A` +
      `🔢 *Number:* ${vehicleNumber || 'Not Specified'}%0A` +
      `🛠️ *Service:* ${serviceType}%0A` +
      `📅 *Date:* ${preferredDate || 'Earliest Available'}%0A` +
      `📝 *Notes:* ${notes || 'None'}%0A` +
      `📍 *Location:* Bandaragama Main Workshop%0A%0A` +
      `_Please confirm bay availability._`;
    window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#070B14] min-h-screen text-slate-100">
      
      {/* Page Banner */}
      <PageBanner
        title="Visit Our Bandaragama Workshop & Hub"
        subtitle="3 Dedicated Air Conditioning Service Bays, Computerized Recharge Stations, and Direct Import Parts Warehouse."
        badge="WORKSHOP & CONTACT"
        bgImage="/assets/banner-contact.jpg"
        breadcrumbs={[
          { label: 'Home', tabId: 'home' },
          { label: 'Workshop & Contact', active: true }
        ]}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Workshop Info & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0B101D] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-bold border border-cyan-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>BANDARAGAMA HEADQUARTERS</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white font-heading">Cool Trade Services</h3>
                <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mt-0.5">
                  Automotive Air Conditioning & Direct Spare Parts
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-800/80 pt-5">
                
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase text-slate-400">Workshop Address</h5>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      Kesbewa-Kindelpitiya-Bandaragama Road, Bandaragama 12534, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase text-slate-400">Direct Workshop Lines</h5>
                    <div className="space-y-1 mt-0.5">
                      <a href="tel:+94777739449" className="text-sm font-extrabold text-white hover:text-cyan-400 block">
                        +94 77 773 9449 (Hotline / Voice)
                      </a>
                      <a href="tel:+94777127127" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 block">
                        +94 77 712 7127 (Office)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase text-slate-400">Operating Hours</h5>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      Monday – Saturday: 8:00 AM – 6:30 PM
                    </p>
                    <p className="text-xs text-slate-400">
                      Sunday: Prior Bookings & Emergency Fleet Support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase text-slate-400">WhatsApp Dispatch</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Instant response for parts availability, pricing & bay slot bookings.
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Call & WhatsApp Action Buttons */}
              <div className="pt-2 grid grid-cols-3 gap-2">
                <a
                  href="tel:+94777739449"
                  className="py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all border border-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/94777739449?text=Hello%20Cool%20Trade%20Services!%20I%20would%20like%20to%20inquire%20about%20Auto%20AC%20bay%20slot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/2sFBwyqh7wuadSwY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Map Pin</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Bay Slot Booking Form */}
          <div className="lg:col-span-7 bg-[#0B101D] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6">
            
            <div className="border-b border-slate-800/80 pb-5">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-cyan-800">
                EXPRESS BAY APPOINTMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-2">
                Reserve Your Workshop Bay Slot
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Skip the waiting queue. Enter your vehicle details and receive an immediate slot confirmation via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Toyota Aqua, Prius, Vezel, WagonR"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                    Vehicle Reg Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. WP CAC-1234 / CBA-5678"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                    Required Service
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm font-medium text-white"
                  >
                    <option value="Gas Vacuum & Refill">Automated Gas Vacuum & Refill (R134a/R1234yf)</option>
                    <option value="Nitrogen Leak Detection">Nitrogen & UV Leak Test</option>
                    <option value="Cooling Coil Replacement">Dashboard Cooling Coil Replacement</option>
                    <option value="Compressor Clutch / Overhaul">Compressor Pulley / Clutch Repair</option>
                    <option value="Cabin Odor & Filter">Cabin Pollen Filter & Odor Elimination</option>
                    <option value="Dual AC Van Overhaul">Dual AC Van / Commercial Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                  Describe Symptoms / AC Behavior
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. AC does not cool in traffic, rattles when switched on, or foul smell from vents..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm text-white placeholder:text-slate-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-cyan-950/60 flex items-center justify-center space-x-2 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Appointment Request to WhatsApp Dispatch</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero cancellation fees. Guaranteed bay reservation on arrival.</span>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}
