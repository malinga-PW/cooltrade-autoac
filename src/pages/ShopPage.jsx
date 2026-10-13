import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  Grid2X2, 
  Rows, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Car, 
  Wrench, 
  Clock, 
  Sparkles,
  RotateCcw,
  MessageCircle,
  Truck
} from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function ShopPage({ onBookPart, setActiveTab }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [columns, setColumns] = useState(2); // Default 2 columns

  const autoParts = [
    {
      id: 'comp_denso_wagonr',
      name: 'Denso Direct Import AC Compressor',
      brand: 'Suzuki',
      partNumber: '447280-3240 / SV07E',
      compatibility: 'Suzuki WagonR Stingray / FX (MH34S, MH44S), Hustler, Spacia',
      category: 'compressor',
      price: 'Rs. 42,500',
      status: 'In Stock (Direct Japan)',
      warranty: '6 Months Replacement Warranty',
      origin: 'Made in Japan / Denso OEM',
      badge: 'Bestseller',
      spec: 'Variable Displacement • Magnetic Clutch Included • Pre-Filled PAG46 Oil',
      image: '/assets/banner-store.jpg'
    },
    {
      id: 'comp_prius_electric',
      name: 'Denso High-Voltage Electric AC Compressor',
      brand: 'Toyota',
      partNumber: 'ES18 / 042200-0220',
      compatibility: 'Toyota Prius (ZVW30, ZVW50), Aqua, Sai, Lexus CT200h',
      category: 'compressor',
      price: 'Rs. 78,000',
      status: 'In Stock (Direct Japan)',
      warranty: '6 Months Official Warranty',
      origin: 'Denso Genuine OEM Japan',
      badge: 'Hybrid Spec',
      spec: '201V 3-Phase Inverter Driven • Requires High-Dielectric ND-Oil 11',
      image: '/assets/banner-store.jpg'
    },
    {
      id: 'coil_prius_aqua',
      name: 'OEM Multi-Channel Evaporator Cooling Coil',
      brand: 'Toyota',
      partNumber: '88501-12450 / 88501-52110',
      compatibility: 'Toyota Prius (3rd & 4th Gen), Toyota Aqua / Prius C',
      category: 'coil',
      price: 'Rs. 18,500',
      status: 'In Stock (Direct Import)',
      warranty: '1 Year Leak Warranty',
      origin: 'Direct Import OEM Spec',
      badge: 'Zero Corrosion',
      spec: 'Anti-Corrosive Epoxy Coated Fins • Direct Bolt-in fit for Dashboard Box',
      image: '/assets/banner-store.jpg'
    },
    {
      id: 'coil_vezel_grace',
      name: 'Honda Dual-Flow Aluminum Evaporator Coil',
      brand: 'Honda',
      partNumber: '80211-T5A-003',
      compatibility: 'Honda Vezel (RU1, RU3), Honda Grace Hybrid, Fit GP5',
      category: 'coil',
      price: 'Rs. 22,000',
      status: 'In Stock (Direct Import)',
      warranty: '1 Year Leak Warranty',
      origin: 'OEM Direct Import',
      badge: 'Popular',
      spec: 'Precision Micro-Channel Core • Expansion Valve Mounting Kit Included',
      image: '/assets/banner-store.jpg'
    },
    {
      id: 'cond_kdh_hiace',
      name: 'Heavy-Duty Parallel Flow AC Condenser',
      brand: 'Toyota',
      partNumber: '88460-26580',
      compatibility: 'Toyota HiAce / Commuter / KDH 200, 201, 222 (Dual AC)',
      category: 'condenser',
      price: 'Rs. 24,500',
      status: 'In Stock',
      warranty: '6 Months Warranty',
      origin: 'Direct Import Heavy Duty',
      badge: 'Dual AC Spec',
      spec: 'Reinforced Aluminum Tube Fin Core • Integrated Filter Receiver Dryer',
      image: '/assets/banner-store.jpg'
    },
    {
      id: 'filter_pm25_charcoal',
      name: 'PM2.5 Activated Coconut Charcoal Cabin Filter',
      brand: 'Toyota',
      partNumber: '87139-30040 / PM2.5',
      compatibility: 'Toyota Prius, Aqua, Premio, Allion, Axio, Fielder, Harrier',
      category: 'filter',
      price: 'Rs. 2,900',
      status: 'In Stock (Direct Import)',
      warranty: 'High-Flow Odor Stop',
      origin: 'Denso Medical Grade',
      badge: 'Health Choice',
      spec: 'High-Density PM2.5 Filtration • Anti-Bacterial & Coconut Charcoal Layer',
      image: '/assets/banner-store.jpg'
    },
    {
      id: 'gas_robinair_r134a',
      name: '100% Pure Virgin R134a Refrigerant Gas Cylinder (13.6kg)',
      brand: 'Refrigerant',
      partNumber: 'R134a-99.9-13.6KG',
      compatibility: 'All R134a Automotive AC Systems & Diagnostic Stations',
      category: 'gas',
      price: 'Rs. 28,500',
      status: 'In Stock (Sealed Valve)',
      warranty: 'Laboratory Tested 99.98% Purity',
      origin: 'Imported Certified Brand',
      badge: 'Zero Moisture',
      spec: 'Factory Sealed Tare Weight 13.6kg • Non-Recycled • Guaranteed Cool',
      image: '/assets/banner-store.jpg'
    }
  ];

  const brandList = [
    { id: 'all', label: 'All Brands' },
    { id: 'Toyota', label: 'Toyota (Hybrid & Dual AC)' },
    { id: 'Suzuki', label: 'Suzuki (WagonR / Alto)' },
    { id: 'Honda', label: 'Honda (Vezel / Grace / GP5)' },
    { id: 'Sanden', label: 'Sanden Commercial' },
    { id: 'Refrigerant', label: 'R134a Gas & Chemicals' },
  ];

  const categoryList = [
    { id: 'all', label: 'All Categories' },
    { id: 'compressor', label: 'AC Compressors' },
    { id: 'coil', label: 'Cooling Coils (Evaporators)' },
    { id: 'condenser', label: 'Condensers' },
    { id: 'filter', label: 'Cabin Filters' },
    { id: 'gas', label: 'Refrigerant & Oil' },
  ];

  const filteredParts = autoParts.filter(part => {
    const matchesSearch = 
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.compatibility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.partNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || part.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  const handleOrderWhatsApp = (part) => {
    const text = `*Cool Trade Services - Auto Parts Order Inquiry*%0A%0A` +
      `📦 *Part:* ${part.name}%0A` +
      `🔢 *Part No:* ${part.partNumber}%0A` +
      `🚗 *Vehicle:* ${part.compatibility}%0A` +
      `💰 *Price:* ${part.price}%0A` +
      `🛡️ *Warranty:* ${part.warranty}%0A` +
      `📍 *Delivery / Workshop Bay Installation:* Bandaragama Workshop%0A%0A` +
      `_Please confirm stock and same-day delivery or workshop fitting._`;
    window.open(`https://wa.me/94777739449?text=${text}`, '_blank');
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('all');
    setSelectedCategory('all');
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-900">
      
      {/* Cinematic Page Banner */}
      <PageBanner
        title="Direct Import Auto AC Parts Store"
        subtitle="Genuine OEM Denso, Sanden & Valeo Compressors, Cooling Coils, Condensers and 99.9% Pure R134a/R1234yf Gas in Bandaragama."
        badge="DIRECT IMPORTS & OEM SPARES"
        bgImage="/assets/banner-store.jpg"
        breadcrumbCurrent="Auto Parts Store"
        onNavigateHome={() => {
          setActiveTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search, Filter Bar & Column Switcher */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm mb-10 space-y-6">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vehicle (e.g. Prius, WagonR, KDH) or Part No..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm font-medium transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* Layout Column Switcher (4, 3, 2, 1) */}
            <div className="flex items-center space-x-2 shrink-0">
              <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline-block">Grid View:</span>
              <button
                onClick={() => setColumns(4)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  columns === 4 ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs font-black' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="4 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumns(3)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  columns === 3 ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs font-black' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="3 Columns"
              >
                <Layers className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumns(2)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  columns === 2 ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs font-black' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="2 Columns (Default)"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumns(1)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  columns === 1 ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs font-black' : 'border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
                title="1 Column (List)"
              >
                <Rows className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wider w-24 shrink-0">Type:</span>
              {categoryList.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white shadow-2xs font-black'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Brand Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wider w-24 shrink-0">Make:</span>
              {brandList.map(brand => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedBrand === brand.id
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-extrabold shadow-2xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {brand.label}
                </button>
              ))}

              {(selectedBrand !== 'all' || selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 flex items-center gap-1 ml-auto border border-red-200 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Parts Count Status */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">
            Showing <strong className="text-emerald-700 font-mono text-sm">{filteredParts.length}</strong> Genuine Parts & Systems in Bandaragama
          </p>
          <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" /> Island-wide Express Delivery Available
          </span>
        </div>

        {/* Dynamic Products Grid */}
        <div className={`grid gap-6 ${
          columns === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
          columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
          columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
          'grid-cols-1'
        }`}>
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {part.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    {part.partNumber}
                  </span>
                </div>

                {/* Part Name */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight font-heading group-hover:text-emerald-700 transition-colors mb-1.5">
                  {part.name}
                </h3>

                {/* Vehicle Compatibility */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 mb-4 space-y-1">
                  <div className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-1">
                    <Car className="w-3 h-3 text-emerald-600" /> Compatible Vehicles
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-snug">
                    {part.compatibility}
                  </div>
                </div>

                {/* Technical Specs */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {part.spec}
                </p>

                {/* Origin & Warranty Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{part.warranty}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>{part.origin}</span>
                  </div>
                </div>
              </div>

              {/* Pricing & WhatsApp Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Direct Price</span>
                  <span className="text-lg font-black text-emerald-700 font-heading">{part.price}</span>
                </div>

                <button
                  onClick={() => handleOrderWhatsApp(part)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-xs shadow-md shadow-emerald-700/20 flex items-center space-x-1.5 transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
