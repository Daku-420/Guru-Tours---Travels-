import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PackageDetailModal from './components/PackageDetailModal';
import PlanTripModal from './components/PlanTripModal';
import Toast from './components/Toast';

// Dedicated Pages
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import DestinationsPage from './pages/DestinationsPage';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

import WhatsAppIcon from './components/WhatsAppIcon';
import { siteConfig } from './data/siteConfig';

function AppContent() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [planTripModalOpen, setPlanTripModalOpen] = useState(false);
  const [modalInitialPackage, setModalInitialPackage] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  const handleOpenPlanTrip = (pkg = null) => {
    setModalInitialPackage(pkg);
    setPlanTripModalOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleSelectDestination = (dest) => {
    handleOpenPlanTrip({ name: dest.name, destination: dest.name });
  };

  const handleFormSubmitted = (data) => {
    setToast({
      show: true,
      message: `Enquiry received for ${data.destination || 'your journey'}. We will reach out shortly!`,
    });
  };

  const whatsappFloatingUrl = `https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent("Hello Guru Tours & Travels, I would like to plan a journey.")}`;

  return (
    <div className="min-h-screen bg-white text-brand-charcoal flex flex-col selection:bg-brand-red selection:text-white">
      {/* Scroll to Top on page change */}
      <ScrollToTop />

      {/* Sticky Header Navigation */}
      <Navbar onOpenPlanTrip={() => handleOpenPlanTrip()} />

      {/* Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenPlanTrip={handleOpenPlanTrip}
                onSelectPackage={handleSelectPackage}
                onSelectDestination={handleSelectDestination}
              />
            }
          />
          <Route
            path="/packages"
            element={
              <PackagesPage
                onSelectPackage={handleSelectPackage}
                onEnquirePackage={handleOpenPlanTrip}
                onOpenPlanTrip={handleOpenPlanTrip}
              />
            }
          />
          <Route
            path="/destinations"
            element={
              <DestinationsPage
                onSelectDestination={handleSelectDestination}
                onOpenPlanTrip={handleOpenPlanTrip}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenPlanTrip={handleOpenPlanTrip} />}
          />
          <Route
            path="/why-us"
            element={<WhyUsPage onOpenPlanTrip={handleOpenPlanTrip} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onSubmitted={handleFormSubmitted} />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenPlanTrip={() => handleOpenPlanTrip()} />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all group border-2 border-white/50 relative"
          aria-label="Chat on WhatsApp"
          title="Chat with our Tour Specialist on WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <WhatsAppIcon className="w-5 h-5 fill-white" />
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Package Details Modal */}
      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onEnquireFromModal={(pkg) => handleOpenPlanTrip(pkg)}
      />

      {/* Plan Your Trip Modal */}
      <PlanTripModal
        isOpen={planTripModalOpen}
        onClose={() => {
          setPlanTripModalOpen(false);
          setModalInitialPackage(null);
        }}
        initialPackage={modalInitialPackage}
        onSubmitted={handleFormSubmitted}
      />

      {/* Feedback Toast */}
      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: '' })}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
