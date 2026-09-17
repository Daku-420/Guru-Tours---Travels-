import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import { siteConfig } from '../data/siteConfig';

export default function HomePage({ onOpenPlanTrip, onSelectPackage, onSelectDestination }) {
  // Top 3 Flagship Packages for the Home Page
  const featuredPackages = siteConfig.packages.slice(0, 3);
  // Top 4 Destinations for Home Page
  const featuredDestinations = siteConfig.destinations.slice(0, 4);

  return (
    <div>
      {/* 1. Full-width Hero with Integrated Search */}
      <Hero
        onOpenPlanTrip={onOpenPlanTrip}
        onSelectDestination={onSelectDestination}
      />

      {/* 2. Signature Tour Packages Showcase */}
      <section id="packages" className="py-24 sm:py-28 bg-brand-gray/40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Featured Itineraries</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal">
                Popular Tour Packages
              </h2>
              <p className="text-brand-muted text-sm sm:text-base mt-2">
                Handpicked Himalayan journeys designed with private mountain transport and comfortable stays.
              </p>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-brand-gray border-2 border-brand-charcoal/20 hover:border-brand-red text-brand-charcoal hover:text-brand-red font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>View All 8 Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={onSelectPackage}
                onEnquire={onOpenPlanTrip}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Top Destinations Preview */}
      <section className="py-24 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Himalayan Destinations</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal">
                Explore Uttarakhand
              </h2>
              <p className="text-brand-muted text-sm sm:text-base mt-2">
                From high-altitude snow slopes to sacred shrines and wild tiger trails.
              </p>
            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-brand-gray border-2 border-brand-charcoal/20 hover:border-brand-red text-brand-charcoal hover:text-brand-red font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4-Card Destination Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent group-hover:via-brand-charcoal/60 transition-colors" />

                <div className="relative z-10 p-4 flex justify-between">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${dest.tagColor} shadow-sm backdrop-blur-sm`}>
                    {dest.tag}
                  </span>
                </div>

                <div className="relative z-10 p-5 text-white">
                  <span className="text-[11px] text-white/80 block mb-0.5">Alt: {dest.altitude}</span>
                  <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-brand-cream transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed opacity-90">
                    {dest.shortDesc}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs text-brand-red font-bold">
                    <span>Enquire Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Guru Tours Difference / About Teaser */}
      <section className="py-24 sm:py-28 bg-brand-cream/60 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                  alt="Mountain travel road in Himalayas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-charcoal text-white p-5 rounded-2xl shadow-xl hidden sm:block border border-gray-800">
                <p className="font-heading font-black text-2xl text-brand-red">100%</p>
                <p className="text-xs font-bold uppercase tracking-wider">Customized Itineraries</p>
                <p className="text-[11px] text-gray-400">Tailored to your budget & pace</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Why Travelers Choose Us</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal mb-4">
                Travel Beyond Ordinary
              </h2>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
                Rooted in Dehradun, Guru Tours & Travels brings authentic ground-level Himalayan expertise, verified mountain-tested private vehicles, and 24/7 dedicated support to every journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
                  <h4 className="font-bold text-sm text-brand-charcoal mb-1">Transparent Pricing</h4>
                  <p className="text-xs text-brand-muted">Zero hidden costs. Printed vouchers with complete breakdown.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
                  <h4 className="font-bold text-sm text-brand-charcoal mb-1">Safe Mountain Fleet</h4>
                  <p className="text-xs text-brand-muted">Courteous, verified drivers skilled in mountain navigation.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Our Story & Values</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/why-us"
                  className="px-6 py-3 rounded-full bg-white hover:bg-gray-100 border border-gray-300 text-brand-charcoal font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Read Trust Guarantees</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action Consultation Banner */}
      <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 border border-brand-red/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for the Himalayas?</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-4">
            Let's Plan Your Next Adventure Together
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Tell us where you want to go and receive a complimentary, customized day-wise itinerary with transparent pricing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenPlanTrip()}
              className="px-8 py-4 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Plan Your Custom Trip</span>
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm transition-all"
            >
              <span>Contact Travel Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
