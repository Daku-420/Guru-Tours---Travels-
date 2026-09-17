import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { siteConfig } from '../data/siteConfig';

export default function DestinationsPage({ onSelectDestination, onOpenPlanTrip }) {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Mountains', 'Lakes', 'Temples', 'Adventure', 'Wildlife', 'Hill Station'];

  const filteredDestinations = filter === 'All'
    ? siteConfig.destinations
    : siteConfig.destinations.filter(d => d.type.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      {/* Page Header Banner */}
      <PageBanner
        tag="Destinations"
        title="Explore Beautiful Destinations"
        subtitle="Discover majestic Himalayan summits, tranquil emerald lakes, sacred ancient shrines, and untamed tiger reserves."
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold font-heading text-brand-charcoal">
                Explore by Category
              </h2>
              <p className="text-xs text-brand-muted mt-0.5">
                Showing {filteredDestinations.length} Himalayan destinations
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === opt
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'bg-brand-gray text-brand-charcoal hover:bg-gray-200 border border-gray-200/60'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Symmetrical 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/5] flex flex-col justify-between"
                onClick={() => onSelectDestination(dest)}
              >
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/45 to-transparent group-hover:via-brand-charcoal/65 transition-colors" />

                {/* Top Badge */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${dest.tagColor} shadow-sm backdrop-blur-sm`}>
                    {dest.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand-red transition-all transform translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="relative z-10 p-5 text-white">
                  <div className="flex items-center gap-2 text-[11px] text-white/80 mb-1">
                    <span>{dest.type}</span>
                    <span>•</span>
                    <span>Alt: {dest.altitude}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-brand-cream transition-colors mb-1">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                    {dest.shortDesc}
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/20 text-xs">
                    <span className="text-white/70 text-[11px]">Best: {dest.bestTime}</span>
                    <span className="text-brand-red font-bold group-hover:underline flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-16 p-8 bg-brand-cream rounded-3xl border border-brand-creamDark flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-brand-charcoal">Want to combine multiple destinations?</h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                We organize circuit tours like Rishikesh + Auli + Chopta or Haridwar + Kedarnath + Badrinath with dedicated private cabs.
              </p>
            </div>
            <button
              onClick={() => onOpenPlanTrip()}
              className="shrink-0 px-6 py-3 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs sm:text-sm shadow transition-all"
            >
              Request Multi-City Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
