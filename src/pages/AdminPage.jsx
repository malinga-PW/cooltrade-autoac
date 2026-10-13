import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Wrench, 
  Shield, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Search, 
  Filter, 
  Phone, 
  MapPin, 
  RefreshCw, 
  Plus, 
  ChevronRight, 
  Car,
  Gauge,
  Layers,
  Sparkles
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function AdminPage({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('bays'); // 'bays', 'inventory'
  const [filterStatus, setFilterStatus] = useState('all');

  const [bayJobs, setBayJobs] = useState([
    {
      id: 'CT-701',
      vehicle: 'Toyota Prius ZVW30 (WP CAC-4412)',
      customer: 'Asanka Perera',
      phone: '077 345 6789',
      bay: 'Bay 1 (Master Diagnostic)',
      service: 'Dashboard Evaporator Coil Replacement + Dielectric ND-11 Oil',
      tech: 'Sunil (Senior AC Tech)',
      status: 'In Bay',
      refrigerant: 'R134a (480g)',
      amount: 'Rs. 24,500'
    },
    {
      id: 'CT-702',
      vehicle: 'Suzuki WagonR Stingray (WP CAA-8821)',
      customer: 'Niroshan Silva',
      phone: '071 987 1122',
      bay: 'Bay 2 (Mechanical)',
      service: 'Denso SV07E Compressor Replacement & Pulley Alignment',
      tech: 'Dhammika (Tech #2)',
      status: 'In Bay',
      refrigerant: 'R134a (380g)',
      amount: 'Rs. 48,000'
    },
    {
      id: 'CT-703',
      vehicle: 'Toyota HiAce KDH 201 (WP PD-6750)',
      customer: 'Lanka Tour Logistics',
      phone: '070 445 9900',
      bay: 'Bay 3 (Dual AC / Heavy)',
      service: 'Dual AC Flush, Parallel Condenser & 250 PSI Nitrogen Leak Test',
      tech: 'Mahesh (Fleet Specialist)',
      status: 'Testing',
      refrigerant: 'R134a (850g)',
      amount: 'Rs. 32,000'
    },
    {
      id: 'CT-704',
      vehicle: 'Honda Vezel RU3 Hybrid (WP CAD-9011)',
      customer: 'Dr. Priyantha Jayasuriya',
      phone: '077 889 0011',
      bay: 'Express Bay',
      service: 'PM2.5 Activated Charcoal Filter & Anti-Bacterial Foam Misting',
      tech: 'Kamal (Tech #3)',
      status: 'Ready',
      refrigerant: 'N/A',
      amount: 'Rs. 5,800'
    },
    {
      id: 'CT-705',
      vehicle: 'Land Cruiser Prado 150 (WP KA-3344)',
      customer: 'Ranjan Wickramasinghe',
      phone: '077 123 9988',
      bay: 'Bay 1 (Master Diagnostic)',
      service: 'Magnetic Valve Diagnostic & 1234yf Machine Vacuum Cycle',
      tech: 'Sunil (Senior AC Tech)',
      status: 'Pending',
      refrigerant: 'R1234yf (650g)',
      amount: 'Rs. 18,500'
    }
  ]);

  const [inventory] = useState([
    { part: 'Denso SV07E Compressor (WagonR)', stock: 12, minAlert: 3, status: 'Healthy', price: 'Rs. 42,500' },
    { part: 'Prius 30 Evaporator Cooling Coil', stock: 18, minAlert: 5, status: 'Healthy', price: 'Rs. 18,500' },
    { part: 'KDH HiAce Parallel Flow Condenser', stock: 8, minAlert: 2, status: 'Healthy', price: 'Rs. 24,500' },
    { part: 'R134a Pure Refrigerant (13.6kg Cylinders)', stock: 9, minAlert: 4, status: 'Healthy', price: 'Rs. 28,500' },
    { part: 'R1234yf Eco Refrigerant Cylinders (5kg)', stock: 3, minAlert: 2, status: 'Reorder Soon', price: 'Rs. 62,000' },
    { part: 'High-Voltage ND-Oil 11 (250ml Can)', stock: 14, minAlert: 4, status: 'Healthy', price: 'Rs. 4,500' },
  ]);

  const handleUpdateStatus = (jobId, newStatus) => {
    setBayJobs(prev => prev.map(job => job.id === jobId ? { ...job, status: newStatus } : job));
  };

  const filteredJobs = filterStatus === 'all' 
    ? bayJobs 
    : bayJobs.filter(j => j.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900">
      
      {/* Page Banner */}
      <PageBanner
        title="Bandaragama Workshop Operations Hub"
        subtitle="Live Bay Telemetry, Technician Queue, Refrigerant Diagnostics & Direct Import Parts Inventory."
        badge="MANAGEMENT & DISPATCH"
        bgImage="/assets/banner-about.jpg"
        breadcrumbCurrent="Admin Operations"
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* KPI Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Active Bay Slots</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">3 / 3 In-Service</div>
              <span className="text-[10px] text-emerald-600 font-bold">100% Workshop Utilization</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">R134a Gas Available</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">122.4 kg</div>
              <span className="text-[10px] text-teal-600 font-bold">Virgin 99.9% Purity</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Today's Vehicles</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">9 Completed</div>
              <span className="text-[10px] text-slate-500 font-bold">Avg. Turnaround: 52 min</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Direct Spares Stock</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">38 Compressors</div>
              <span className="text-[10px] text-amber-600 font-bold">Denso & Sanden OEM</span>
            </div>
          </div>

        </div>

        {/* Tab Switcher & Status Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('bays')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'bays'
                  ? 'bg-emerald-600 text-white font-black shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Bay Dispatch & Service Queue
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'inventory'
                  ? 'bg-emerald-600 text-white font-black shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Direct Import Spares Inventory
            </button>
          </div>

          {activeTab === 'bays' && (
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-500">Filter Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900 shadow-2xs"
              >
                <option value="all">All Jobs</option>
                <option value="in bay">In Bay</option>
                <option value="testing">Testing</option>
                <option value="ready">Ready for Pickup</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          )}
        </div>

        {/* Active Tab Content */}
        {activeTab === 'bays' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {job.id}
                      </span>
                      <span className="text-xs font-extrabold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md">
                        {job.bay}
                      </span>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        job.status === 'In Bay' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        job.status === 'Testing' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        job.status === 'Ready' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {job.status}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                      {job.vehicle}
                    </h4>

                    <div className="text-xs text-slate-600 font-medium">
                      🛠️ <strong>Service:</strong> {job.service}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <span>👤 {job.customer} ({job.phone})</span>
                      <span>👨‍🔧 Assigned: <strong className="text-slate-800">{job.tech}</strong></span>
                      <span>🧪 Spec: <strong className="text-emerald-700">{job.refrigerant}</strong></span>
                    </div>
                  </div>

                  {/* Actions & Bill */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100 shrink-0 gap-3">
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Estimated Bill</span>
                      <span className="text-base sm:text-lg font-black text-emerald-700 font-heading">{job.amount}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {job.status !== 'Ready' ? (
                        <button
                          onClick={() => handleUpdateStatus(job.id, 'Ready')}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
                        >
                          Mark Ready
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUpdateStatus(job.id, 'In Bay')}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer border border-slate-200"
                        >
                          Reopen Bay
                        </button>
                      )}

                      <a
                        href={`https://wa.me/94777739449?text=Status%20Update%20for%20Vehicle%20${encodeURIComponent(job.vehicle)}%20(${job.id})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                        title="Customer WhatsApp Message"
                      >
                        <Phone className="w-4 h-4 text-emerald-600" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Spares Inventory Tab */}
        {activeTab === 'inventory' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <th className="pb-3">Component / Part Description</th>
                  <th className="pb-3">In-Stock Qty</th>
                  <th className="pb-3">Unit Price</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {inventory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-bold text-slate-900">{item.part}</td>
                    <td className="py-4 text-slate-600">{item.stock} Units</td>
                    <td className="py-4 font-bold text-emerald-700">{item.price}</td>
                    <td className="py-4">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                        item.status === 'Healthy' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline cursor-pointer">
                        Restock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
}
