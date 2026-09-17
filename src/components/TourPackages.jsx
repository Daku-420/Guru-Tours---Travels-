import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import PackageCard from './PackageCard';
import { siteConfig } from '../data/siteConfig';

export default function TourPackages({ onSelectPackage, onEnquirePackage, onOpenPlanTrip }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Spiritual', 'Adventure', 'Hill Station', 'Trekking', 'Wildlife'];

  const filteredPackages = selectedCategory === 'All'
    ? siteConfig.packages
    : siteConfig.packages.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  // Show 6 by default for a balanced 3x2 grid, or all 8
  const displayedPackages = (selectedCategory === 'All' && !showAll)
    ? filteredPackages.slice(0, 6)
    : filteredPackages;

  return (
    <section id="packages" className="py-24 sm:py-28 bg-brand-gray/40 relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Signature Itineraries</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal mb-4">
            Discover Your Next Adventure
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            Handpicked journeys designed for unforgettable experiences across Uttarakhand and the Himalayas.
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? siteConfig.packages.length 
                : siteConfig.packages.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowAll(true);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-brand-red text-white shadow-md'
                      : 'bg-white text-brand-charcoal hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-gray-100 text-brand-muted'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spacious 3-Column Grid for Optimal Readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={onSelectPackage}
              onEnquire={onEnquirePackage}
            />
          ))}
        </div>

        {/* View All Packages Toggle */}
        {selectedCategory === 'All' && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-brand-gray text-brand-charcoal font-bold text-sm border-2 border-brand-charcoal/20 hover:border-brand-red hover:text-brand-red transition-all shadow-sm"
            >
              View All 8 Tour Packages
            </button>
          </div>
        )}

        {/* Organized Custom Consultation Banner */}
        <div className="mt-16 p-7 sm:p-9 bg-brand-charcoal text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-red font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Tailor-Made Himalayan Itineraries</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have a specific destination or group size in mind?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
              We design custom routes for families, couples, and groups with private mountain vehicles and tailored hotel categories.
            </p>
          </div>

          <button
            onClick={onOpenPlanTrip}
            className="shrink-0 px-7 py-3.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Plan Custom Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
