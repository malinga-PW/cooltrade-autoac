import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EmergencySosBar from './components/EmergencySosBar';
import HeroSection from './components/HeroSection';
import LiveBayStatusWidget from './components/LiveBayStatusWidget';
import VehicleGaragePicker from './components/VehicleGaragePicker';
import ThermalCompareSlider from './components/ThermalCompareSlider';
import VehicleAcDiagnostic from './components/VehicleAcDiagnostic';
import VehicleWarrantyLookup from './components/VehicleWarrantyLookup';
import ServicesSection from './components/ServicesSection';
import PricingPackages from './components/PricingPackages';
import CoverageMap from './components/CoverageMap';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AiAssistantDrawer from './components/AiAssistantDrawer';
import ShopPage from './pages/ShopPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PageBanner from './components/PageBanner';
import { Sparkles, Wrench, Bot, Car, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSelectPlan = (planData) => {
    setBookingInitialData({
      service: planData.plan,
      notes: `Selected package: ${planData.title} (Rs. ${planData.price})`
    });
    setBookingModalOpen(true);
  };

  const navigateToHome = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME */}
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onOpenAiChat={() => setAiChatOpen(true)}
              setActiveTab={setActiveTab}
            />

            {/* Highway / Expressway Breakdown SOS Bar */}
            <EmergencySosBar />

            {/* Live Workshop Bay Queue Telemetry */}
            <LiveBayStatusWidget
              onClaimBay={() => handleOpenBooking({ service: 'Express Drive-In Bay 2 Claim' })}
            />

            {/* Vehicle Garage Spec Locker (My Car) */}
            <VehicleGaragePicker
              onOpenBooking={handleOpenBooking}
              setActiveTab={setActiveTab}
            />

            {/* Interactive Before & After Thermal Frost Slider */}
            <ThermalCompareSlider />

            {/* Interactive Vehicle AC Symptom Diagnostic Engine */}
            <VehicleAcDiagnostic
              onBookWithPlan={(data) => handleOpenBooking(data)}
            />

            {/* Vehicle Plate Digital Warranty & Service Record Archive */}
            <VehicleWarrantyLookup />

            {/* Automotive AC Specialized Services */}
            <ServicesSection
              onBookService={(s) => handleOpenBooking({ service: s.title, notes: s.subtitle })}
            />

            {/* Fixed-Price Workshop Packages */}
            <PricingPackages
              onSelectPlan={handleSelectPlan}
            />

            {/* Coverage & Workshop Access Hub */}
            <CoverageMap />
          </>
        )}

        {/* VIEW 2: SERVICES DETAIL */}
        {activeTab === 'services' && (
          <div>
            <PageBanner
              badge="SPECIALIZED WORKSHOP ENGINEERING"
              title="Automotive Climate Engineering Solutions"
              subtitle="From automated Robinair R134a/R1234yf vacuum recharge to precision dashboard evaporator dismantling, Cool Trade Services delivers dealership-grade care in Bandaragama."
              bgImage="/assets/banner-services.jpg"
              breadcrumbs={[
                { label: 'Home', tabId: 'home' },
                { label: 'Services', active: true }
              ]}
              setActiveTab={setActiveTab}
            />
            <ServicesSection
              hideHeader={true}
              onBookService={(s) => handleOpenBooking({ service: s.title, notes: s.subtitle })}
            />
            <ThermalCompareSlider />
            <VehicleAcDiagnostic
              onBookWithPlan={(data) => handleOpenBooking(data)}
            />
            <PricingPackages
              onSelectPlan={handleSelectPlan}
            />
          </div>
        )}

        {/* VIEW 3: SHOP / AUTO PARTS STORE */}
        {activeTab === 'shop' && (
          <ShopPage
            onBookPart={(part) => handleOpenBooking({ service: `Parts Inquiry: ${part.name}`, notes: part.partNumber })}
            setActiveTab={setActiveTab}
          />
        )}

        {/* VIEW 4: ABOUT US */}
        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={setActiveTab}
          />
        )}

        {/* VIEW 5: WORKSHOP CONTACT & HUBS */}
        {activeTab === 'contact' && (
          <ContactPage 
            setActiveTab={setActiveTab}
          />
        )}

        {/* VIEW 6: WORKSHOP OPERATIONS ADMIN PANEL (Demo Open) */}
        {activeTab === 'admin' && (
          <AdminPage 
            onNavigateHome={navigateToHome}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
      />

      {/* Floating Action Pill for AI Auto Cooling Advisor */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <button
          onClick={() => setAiChatOpen(true)}
          className="group relative px-4 py-3 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-900 to-blue-900 hover:from-slate-900 hover:to-cyan-800 text-white font-black text-xs uppercase tracking-wider flex items-center space-x-2.5 shadow-xl shadow-slate-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-cyan-500/40"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <Bot className="w-4 h-4 text-cyan-200 animate-bounce" />
          <span className="font-extrabold font-heading">AI Auto Cooling Advisor</span>
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData || {}}
      />

      {/* AI Assistant Chat Drawer */}
      <AiAssistantDrawer
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        onBookWithDetails={(details) => {
          setAiChatOpen(false);
          handleOpenBooking(details);
        }}
      />

    </div>
  );
}
