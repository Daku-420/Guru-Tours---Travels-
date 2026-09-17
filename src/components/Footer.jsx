import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Compass, ArrowUp, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ onOpenPlanTrip }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent("Hello Guru Tours & Travels, I would like to get in touch.")}`;

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Himalayan Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-darkRed/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Credentials (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
                <Logo variant="light" className="h-10" showTagline={true} />
              </Link>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 max-w-sm">
                Your premier Himalayan adventure and pilgrimage travel partner based in Uttarakhand. Curating authentic, safe, and soulful journeys across the sacred peaks.
              </p>

              {/* Trust Pill Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                  <span>Govt. Registered Agency</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300">
                  <Award className="w-3.5 h-3.5 text-brand-red" />
                  <span>10+ Yrs Himalayan Mastery</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                Connect With Us
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.business.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-gray-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.business.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-gray-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.business.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-gray-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-brand-red rounded-full inline-block" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-brand-red text-xs">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/packages" onClick={scrollToTop} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-brand-red text-xs">›</span> Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/destinations" onClick={scrollToTop} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-brand-red text-xs">›</span> Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-brand-red text-xs">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/why-us" onClick={scrollToTop} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-brand-red text-xs">›</span> Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-brand-red text-xs">›</span> Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Packages (Col 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-brand-red rounded-full inline-block" />
              Popular Tours
            </h4>
            <div className="space-y-2">
              {siteConfig.packages.slice(0, 4).map((pkg) => (
                <Link
                  key={pkg.id}
                  to="/packages"
                  onClick={scrollToTop}
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-white/15 transition-all"
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-xs font-medium text-gray-200 group-hover:text-white truncate transition-colors">
                      {pkg.name}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-[11px] font-bold text-white bg-brand-red/90 px-2 py-0.5 rounded-md shadow-sm">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Help (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-brand-red rounded-full inline-block" />
              Direct Contact
            </h4>

            {/* Contact Items with Icon Boxes */}
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.business.phoneRaw}`}
                className="group flex items-center gap-3 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-red/50 flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-red" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-semibold">24/7 Phone Line</div>
                  <div className="font-semibold text-white">{siteConfig.business.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.business.email}`}
                className="group flex items-center gap-3 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-red/50 flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-red" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-semibold">Email Support</div>
                  <div className="font-medium truncate max-w-[190px]">{siteConfig.business.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-xs text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-semibold">Head Office</div>
                  <div className="text-[11px] text-gray-300 leading-snug">{siteConfig.business.address}</div>
                </div>
              </div>
            </div>

            {/* Balanced Action CTAs */}
            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenPlanTrip}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-darkRed hover:brightness-110 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-brand-red/20 transition-all cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Plan Custom Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-gray-300 hover:text-emerald-400 font-medium text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar — Styled to never conflict with the Floating WhatsApp button */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 pr-0 sm:pr-28">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {siteConfig.business.name}. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span className="text-gray-400">Uttarakhand Tourism Registered</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gray-400 tracking-wider">
              EXPLORE • EXPERIENCE • TOGETHER
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
