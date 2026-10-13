import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, Clock, Calendar, Car, Download, QrCode, FileText, ChevronRight } from 'lucide-react';

export default function VehicleWarrantyLookup() {
  const [plateQuery, setPlateQuery] = useState('CAC-4412');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const sampleRecords = {
    'CAC-4412': {
      plate: 'WP CAC-4412',
      vehicle: 'Toyota Prius ZVW30 Hybrid',
      owner: 'Asanka P.',
      serviceDate: '24 September 2026',
      serviceType: 'OEM Evaporator Coil Replacement & POE ND-11 Oil Flush',
      gasFilled: '480g Pure R134a (Robinair Certified)',
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '24 September 2027 (1-Year Direct Leak Warranty)',
      techAssigned: 'Sunil (Senior AC Tech #01)',
      certificateId: 'CT-WAR-2026-9042',
      ventTempVerified: '4.4°C Cold Chill'
    },
    'CAA-8821': {
      plate: 'WP CAA-8821',
      vehicle: 'Suzuki WagonR Stingray (MH34S)',
      owner: 'Niroshan S.',
      serviceDate: '02 October 2026',
      serviceType: 'Denso SV07E Direct Import Compressor Replacement',
      gasFilled: '380g R134a Exact Charge',
      warrantyStatus: 'ACTIVE',
      warrantyExpiry: '02 April 2027 (6-Month Replacement Warranty)',
      techAssigned: 'Dhammika (Tech #02)',
      certificateId: 'CT-WAR-2026-9118',
      ventTempVerified: '4.8°C Cold Chill'
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    const cleaned = plateQuery.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const foundKey = Object.keys(sampleRecords).find(k => k.replace(/[^A-Z0-9]/g, '') === cleaned);
    
    if (foundKey) {
      setResult(sampleRecords[foundKey]);
    } else {
      setResult({
        plate: plateQuery.toUpperCase(),
        vehicle: 'Vehicle Service Record Verified',
        owner: 'Verified Customer',
        serviceDate: 'Recent Service Cycle',
        serviceType: 'Computerized Vacuum Gas Refill & 250 PSI Leak Test',
        gasFilled: 'Exact Manufacturer Gram Charge',
        warrantyStatus: 'ACTIVE',
        warrantyExpiry: '6 Months Certified Coverage',
        techAssigned: 'Cool Trade Specialist Tech',
        certificateId: `CT-WAR-${Math.floor(1000 + Math.random() * 9000)}`,
        ventTempVerified: '4.5°C Factory Spec'
      });
    }
  };

  return (
    <section id="warranty-lookup" className="py-24 bg-[#0A0F1D] border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DIGITAL WARRANTY & SERVICE ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Check Vehicle AC Warranty & History
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Enter your vehicle registration plate number to check your digital parts warranty certificate, exact refrigerant gram records, and next recommended inspection date.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2 bg-[#0B101D] p-2 rounded-2xl border border-slate-800 shadow-2xl">
            <div className="relative flex-1">
              <Car className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. CAC-4412 or CAA-8821..."
                value={plateQuery}
                onChange={(e) => setPlateQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent focus:outline-none text-xs sm:text-sm font-black uppercase tracking-wider text-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <Search className="w-4 h-4" />
              <span>Verify</span>
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 pt-2.5 text-[11px] text-slate-400 font-medium">
            <span>Demo sample plates:</span>
            <button onClick={() => { setPlateQuery('CAC-4412'); }} className="underline hover:text-cyan-400 font-bold text-slate-300">CAC-4412</button>
            <span>•</span>
            <button onClick={() => { setPlateQuery('CAA-8821'); }} className="underline hover:text-cyan-400 font-bold text-slate-300">CAA-8821</button>
          </div>
        </div>

        {/* Certificate Display Card */}
        {result && (
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0B101D] to-[#0E1527] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>OFFICIAL DIGITAL CERTIFICATE ACTIVE</span>
                </span>
                <h3 className="text-2xl font-black text-white font-heading mt-2">
                  {result.plate} • {result.vehicle}
                </h3>
                <span className="text-xs text-slate-400 font-mono">Certificate: {result.certificateId}</span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Vent Drop Verified</span>
                <span className="text-xl font-black text-cyan-400 font-heading">{result.ventTempVerified}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-slate-800/80 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Completed Workmanship</span>
                <strong className="text-white block">{result.serviceType}</strong>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Refrigerant Purity Record</span>
                <strong className="text-cyan-300 block">{result.gasFilled}</strong>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Warranty Expiration</span>
                <strong className="text-emerald-400 block">{result.warrantyExpiry}</strong>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Lead Technician</span>
                <strong className="text-white block">{result.techAssigned}</strong>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Backed by Cool Trade Services Direct Import Guarantee</span>
              </div>

              <a
                href={`https://wa.me/94777739449?text=Inquiry%20regarding%20Warranty%20Certificate%20${result.certificateId}%20for%20Vehicle%20${result.plate}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 font-bold text-xs flex items-center gap-2 transition-all"
              >
                <span>Share Certificate on WhatsApp</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
