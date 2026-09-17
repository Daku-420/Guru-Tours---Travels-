import React, { useState } from 'react';
import { Calendar, MapPin, Users, Sparkles, ArrowRight, ShieldCheck, Mountain, Star, Headphones, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenPlanTrip }) {
  const [searchDestination, setSearchDestination] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchTravellers, setSearchTravellers] = useState('2 Travellers');
  const searchType = 'Adventure & Trekking';

  const destinationsList = [
    "Kedarnath Dham",
    "Auli Ski Paradise",
    "Rishikesh River & Adventure",
    "Chopta & Tungnath Trek",
    "Mussoorie Queen of Hills",
    "Nainital Lake District",
    "Valley of Flowers",
    "Jim Corbett Tiger Safari",
  ];

  const scrollToNext = () => {
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (searchDestination) {
      onOpenPlanTrip({
        name: searchDestination,
        destination: searchDestination,
        travelDate: searchDate,
        travellers: searchTravellers,
        tripType: searchType,
      });
    } else {
      scrollToNext();
    }
  };

  const whatsappDirect = () => {
    const text = `Hello Guru Tours & Travels! I am exploring trips to ${searchDestination || 'Uttarakhand'} for ${searchTravellers}. Please share recommended packages.`;
    window.open(`https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-6 overflow-hidden bg-brand-charcoal text-white">
      {/* Background Image with Cinematic Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
          alt="Majestic Indian Himalayan Mountain Pass and Winding Road"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          fetchPriority="high"
        />
        {/* Balanced Vignette & Dark Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-brand-charcoal/70 to-brand-charcoal" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Brand Tagline Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span>{siteConfig.business.tagline}</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight mb-5 drop-shadow-md">
          Your Journey. <span className="text-brand-red">Our Expertise.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-200 font-normal leading-relaxed mb-10">
          {siteConfig.business.subheadline}
        </p>

        {/* Integrated Clean Travel Search Bar */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/30 text-brand-charcoal text-left transition-all">
          <form onSubmit={handleQuickSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {/* Destination */}
              <div className="px-3.5 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 hover:border-brand-red/60 transition-colors">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-muted mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-red" />
                  <span>Destination</span>
                </label>
                <select
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-brand-charcoal focus:outline-none cursor-pointer"
                >
                  <option value="">Choose Destination</option>
                  {destinationsList.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Travel Date */}
              <div className="px-3.5 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 hover:border-brand-red/60 transition-colors">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-muted mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-brand-red" />
                  <span>Travel Date</span>
                </label>
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-brand-charcoal focus:outline-none cursor-pointer"
                />
              </div>

              {/* Travellers */}
              <div className="px-3.5 py-2.5 rounded-xl bg-gray-50/90 border border-gray-200/80 hover:border-brand-red/60 transition-colors">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-brand-muted mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-brand-red" />
                  <span>Travellers</span>
                </label>
                <select
                  value={searchTravellers}
                  onChange={(e) => setSearchTravellers(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-brand-charcoal focus:outline-none cursor-pointer"
                >
                  <option value="Solo (1 Person)">Solo (1 Person)</option>
                  <option value="2 Travellers">2 Travellers (Couple)</option>
                  <option value="3-5 Travellers">3 - 5 Travellers (Family)</option>
                  <option value="6+ Travellers">6+ Travellers (Group)</option>
                </select>
              </div>

              {/* Submit CTA Button */}
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-full h-full min-h-[50px] rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <span>Find Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Quick Sub-links */}
          <div className="mt-2.5 pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between text-[11px] text-brand-muted px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Popular this season: Kedarnath, Auli Skiing, Rishikesh Rafting</span>
            </span>
            <button
              type="button"
              onClick={whatsappDirect}
              className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
            >
              Need quick guidance? WhatsApp Us →
            </button>
          </div>
        </div>

        {/* Secondary Action Link */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#packages"
            onClick={(e) => {
              e.preventDefault();
              scrollToNext();
            }}
            className="text-xs sm:text-sm font-semibold text-white/80 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
          >
            Browse all 8 signature packages below
          </a>
        </div>
      </div>

      {/* Clean Bottom Trust Bar */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/15">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 text-left">
            <Mountain className="w-5 h-5 text-brand-red shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Local Mountain Guides</p>
              <p className="text-[11px] text-gray-300">Himalayan specialists</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 text-left">
            <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Safe Mountain Cabs</p>
              <p className="text-[11px] text-gray-300">Verified skilled drivers</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 text-left">
            <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
            <div>
              <p className="text-xs font-bold text-white">Handpicked Stays</p>
              <p className="text-[11px] text-gray-300">Comfortable hotels & tents</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/10 text-left">
            <Headphones className="w-5 h-5 text-brand-red shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">24/7 Trip Support</p>
              <p className="text-[11px] text-gray-300">Ground assistance always</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator Button */}
        <div className="flex flex-col items-center justify-center pt-6 pb-2">
          <button
            type="button"
            onClick={scrollToNext}
            aria-label="Scroll down to explore tour packages"
            className="group inline-flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-all cursor-pointer focus:outline-none"
          >
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-gray-300 group-hover:text-brand-red transition-colors">
              Scroll Down
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red/25 shadow-lg group-hover:shadow-brand-red/30 transition-all duration-300 animate-bounce">
              <ChevronDown className="w-4 h-4 text-white group-hover:text-brand-red transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
