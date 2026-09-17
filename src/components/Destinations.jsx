import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Destinations({ onSelectDestination }) {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Mountains', 'Lakes', 'Temples', 'Adventure', 'Wildlife', 'Hill Station'];

  const filteredDestinations = filter === 'All'
    ? siteConfig.destinations
    : siteConfig.destinations.filter(d => d.type.toLowerCase() === filter.toLowerCase());

  return (
    <section id="destinations" className="py-20 sm:py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Explore Himalayan Wonders</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal">
              Explore Beautiful Destinations
            </h2>
            <p className="text-brand-muted text-base sm:text-lg mt-2">
              From the sacred heights of the Garhwal Himalayas to tranquil emerald lakes and wild safari tracks.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
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

        {/* Uniform Symmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/5] flex flex-col justify-between"
              onClick={() => onSelectDestination(dest)}
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for optimal readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/45 to-transparent group-hover:via-brand-charcoal/65 transition-colors" />

              {/* Top Badges */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${dest.tagColor} shadow-sm backdrop-blur-sm`}>
                  {dest.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand-red transition-all transform translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Details */}
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
                  <span className="text-white/70 text-[11px]">Best Time: {dest.bestTime}</span>
                  <span className="text-brand-red font-bold group-hover:underline flex items-center gap-1">
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
