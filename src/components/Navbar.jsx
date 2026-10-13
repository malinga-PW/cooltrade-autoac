import React, { useState, useEffect } from 'react';
import { Phone, Calendar, LayoutDashboard, Menu, X, Clock, MapPin, Gauge, ShieldCheck, Car, Activity } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'shop', label: 'Parts Store', badge: 'Direct Imports' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Workshop Hub' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 🚀 Top Announcement Banner with Open Demo Admin Access */}
      <div 
        className={`bg-slate-900 text-slate-300 text-[11px] font-semibold transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'h-0 max-h-0 opacity-0 overflow-hidden py-0 border-0 pointer-events-none' 
            : 'h-auto max-h-12 opacity-100 py-1.5 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-slate-400">Bandaragama Workshop:</span>
            <span className="text-emerald-300 font-bold truncate">Bay 2 Available for Immediate Drive-In</span>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <span className="hidden md:flex items-center gap-1 text-[11px] text-slate-400">
              <Clock className="w-3 h-3 text-emerald-400" /> Mon - Sat: 8:00 AM - 6:30 PM
            </span>

            <a href="tel:+94777739449" className="text-white hover:text-emerald-300 font-bold flex items-center gap-1 text-[11px]">
              <Phone className="w-3 h-3 text-emerald-400" /> 077 773 9449
            </a>

            {/* Admin Portal Button - Open for Demo */}
            <button
              onClick={() => {
                setActiveTab('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-0.5 rounded-lg border transition-all text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                  : 'bg-emerald-950/70 border-emerald-600/70 text-emerald-300 hover:text-white hover:bg-emerald-900'
              }`}
            >
              <LayoutDashboard className="w-3 h-3 text-emerald-400" />
              <span>Admin Portal (Demo Open)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🌟 Main Navigation Bar - Light Mode with Emerald Precision Styling */}
      <nav className="border-b border-slate-200/90 bg-white/95 backdrop-blur-2xl shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Official Circular Logo & Brand */}
            <div 
              className="flex items-center space-x-3 cursor-pointer select-none group shrink-0"
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="relative">
                <img
                  src="/assets/cooltrade-logo.png"
                  alt="Cool Trade Services Official Logo"
                  className="w-12 h-12 object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs rounded-full bg-slate-50 border border-slate-200 p-0.5"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center space-x-2">
                  <span className="text-xl sm:text-2xl font-black tracking-tight font-heading text-slate-900">
                    <span className="text-emerald-600">COOL</span>
                    <span className="text-slate-900">TRADE</span>
                    <span className="text-emerald-600">.</span>
                  </span>
                  <span className="text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 hidden sm:inline-block font-mono">
                    EST. BANDARAGAMA
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">
                  PRECISION AUTO A/C & DIRECT IMPORTS
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center space-x-1.5 cursor-pointer ${
                      isActive
                        ? 'text-emerald-800 bg-emerald-50 border border-emerald-200/90 shadow-xs'
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center space-x-2.5">
              
              {/* Quick Warranty Lookup Anchor */}
              <button
                onClick={() => {
                  const el = document.getElementById('warranty-lookup');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setActiveTab('home');
                    setTimeout(() => {
                      const el2 = document.getElementById('warranty-lookup');
                      if (el2) el2.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="px-3 py-2 rounded-xl border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 font-bold text-xs flex items-center gap-1.5 transition-all bg-white hover:bg-emerald-50/50 cursor-pointer shadow-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Warranty</span>
              </button>

              {/* Book Bay Slot CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-xs tracking-wide shadow-md shadow-emerald-700/20 flex items-center space-x-2 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Bay Slot</span>
              </button>

            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-black text-xs sm:hidden"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-bold ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setActiveTab('admin');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                <span>Open Workshop Admin Portal</span>
              </button>

              <a
                href="tel:+94777739449"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-center text-xs flex items-center justify-center gap-2 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Bandaragama: 077 773 9449</span>
              </a>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
}
