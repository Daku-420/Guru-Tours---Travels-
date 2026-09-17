import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onOpenPlanTrip }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent("Hello Guru Tours & Travels, I would like to plan a journey.")}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md h-20 text-brand-charcoal border-b border-gray-100'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent h-20 sm:h-22 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Guru Tours & Travels Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo
              variant={isScrolled ? 'dark' : 'light'}
              className="h-9 sm:h-10"
              showTagline={true}
            />
          </Link>

          {/* Desktop Navigation Links with React Router */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap transition-all relative ${
                    isActive
                      ? isScrolled
                        ? 'text-brand-red font-extrabold'
                        : 'text-white font-extrabold'
                      : isScrolled
                      ? 'text-brand-charcoal hover:text-brand-red hover:bg-brand-gray'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-brand-red rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden md:flex items-center space-x-2.5 shrink-0">
            {/* WhatsApp Trigger */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-colors flex items-center justify-center shrink-0 ${
                isScrolled
                  ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-400/40 backdrop-blur-sm'
              }`}
              title="Chat with our Trip Expert on WhatsApp"
              aria-label="WhatsApp Enquiry"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                isScrolled
                  ? 'bg-brand-gray text-brand-charcoal hover:bg-gray-200'
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
              }`}
              title="Call Guru Tours & Travels"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span className="whitespace-nowrap">{siteConfig.business.phone}</span>
            </a>

            {/* Primary CTA: Plan Your Trip */}
            <button
              onClick={onOpenPlanTrip}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <Compass className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </button>
          </div>

          {/* Mobile & Tablet Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenPlanTrip}
              className="px-3 py-1.5 rounded-full bg-brand-red text-white text-xs font-bold shadow-sm md:hidden whitespace-nowrap"
            >
              Plan Trip
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? 'text-brand-charcoal hover:bg-gray-100'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <Logo variant="dark" className="h-9" showTagline={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-brand-charcoal hover:bg-gray-100 rounded-full"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Router Link */}
          <div className="px-4 py-6 space-y-2 overflow-y-auto flex-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-brand-red/10 text-brand-red font-extrabold'
                      : 'text-brand-charcoal hover:bg-brand-gray'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-red"></span>}
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-5 border-t border-gray-100 bg-brand-gray/50 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanTrip();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold shadow-md transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp Instant Enquiry</span>
            </a>

            <div className="text-center pt-1">
              <a
                href={`tel:${siteConfig.business.phoneRaw}`}
                className="text-xs text-brand-muted hover:text-brand-red font-medium flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>Call Us: {siteConfig.business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
