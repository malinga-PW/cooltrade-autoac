import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Car, 
  Wrench, 
  Phone, 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Send,
  Gauge
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState(initialData.phone || '');
  const [vehicleModel, setVehicleModel] = useState(initialData.vehicleModel || '');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [service, setService] = useState(initialData.service || 'Gas Vacuum & Refill');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (8:30 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Cool Trade Services - Bay Appointment Request*%0A%0A` +
      `👤 *Customer:* ${customerName || 'Customer'}%0A` +
      `📞 *Phone:* ${phone}%0A` +
      `🚗 *Vehicle:* ${vehicleModel || 'Not Specified'}%0A` +
      `🔢 *Reg Plate:* ${vehicleNumber || 'Not Specified'}%0A` +
      `🛠️ *Service:* ${service}%0A` +
      `📅 *Date:* ${preferredDate || 'Earliest Available'} (${timeSlot})%0A` +
      `📝 *Notes:* ${notes || 'None'}%0A` +
      `📍 *Location:* Bandaragama Main Workshop Bay%0A%0A` +
      `_Please confirm technician availability and reserve my bay slot._`;

    window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800">
              BANDARAGAMA BAY RESERVATION
            </span>
            <h3 className="text-xl font-black font-heading mt-1">Book Your Workshop Bay Slot</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Asanka Perera"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="077 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Vehicle Model
              </label>
              <div className="relative">
                <Car className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Prius, Aqua, WagonR, KDH"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Vehicle Reg Number
              </label>
              <input
                type="text"
                placeholder="e.g. WP CAC-1234"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Select Required Service
            </label>
            <div className="relative">
              <Wrench className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
              >
                <option value="Gas Vacuum & Refill">Automated Gas Vacuum & Refill (R134a/R1234yf)</option>
                <option value="Nitrogen Leak Detection">Nitrogen 250 PSI Leak Test</option>
                <option value="Dashboard Cooling Coil Replacement">Dashboard Evaporator / Coil Replacement</option>
                <option value="Compressor Clutch & Pulley Repair">Compressor Clutch, Pulley & Bearing Repair</option>
                <option value="Cabin PM2.5 Filter & Odor Removal">Cabin Filter & Anti-Bacterial Treatment</option>
                <option value="Dual AC Van Inspection">Dual AC Van / Commercial Fleet Inspection</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Preferred Bay Time
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
              >
                <option value="Morning (8:30 AM - 12:00 PM)">Morning (8:30 AM - 12:00 PM)</option>
                <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                <option value="Late Afternoon (4:00 PM - 6:30 PM)">Late Afternoon (4:00 PM - 6:30 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Any Specific Symptoms / Notes
            </label>
            <textarea
              rows="2"
              placeholder="e.g. Cooling drops in traffic, rattling noise when AC starts..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-extrabold text-sm shadow-lg shadow-cyan-950/20 flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Bay Reservation on WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct Japanese Spares • 6-Month Warranty</span>
          </div>

        </form>

      </div>
    </div>
  );
}
