import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight, Search, X } from 'lucide-react';
import PackageCard from './PackageCard';
import { siteConfig } from '../data/siteConfig';

export default function TourPackages({ onSelectPackage, onEnquirePackage, onOpenPlanTrip }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Spiritual', 'Adventure', 'Hill Station', 'Trekking', 'Wildlife'];

  const q = searchQuery.trim().toLowerCase();

  const filteredPackages = siteConfig.packages.filter(pkg => {
    const matchesCategory = selectedCategory === 'All' || pkg.category.toLowerCase() === selectedCategory.toLowerCase();
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      pkg.name.toLowerCase().includes(q) ||
      pkg.destination.toLowerCase().includes(q) ||
      pkg.category.toLowerCase().includes(q) ||
      pkg.description.toLowerCase().includes(q) ||
      (pkg.highlights && pkg.highlights.some(h => h.toLowerCase().includes(q)))
    );
  });

  // Show 6 by default for a balanced 3x2 grid, or all when searching or expanded
  const displayedPackages = (selectedCategory === 'All' && !showAll && !q)
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

          {/* Controls Bar: Search Box & Category Filter Tabs */}
          <div className="mt-8 flex flex-col items-center gap-4 max-w-2xl mx-auto">
            {/* Search Input Bar */}
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 text-brand-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search destination, tour, or activity (e.g. Kedarnath, Ski, Trek)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-brand-charcoal placeholder-brand-muted/70 shadow-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                aria-label="Search tour packages"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-brand-muted hover:text-brand-red hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Clean Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
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
        </div>

        {/* Packages Grid or Empty State */}
        {displayedPackages.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-gray-300 max-w-xl mx-auto shadow-sm">
            <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-xl text-brand-charcoal mb-2">No matching packages found</h3>
            <p className="text-brand-muted text-sm max-w-md mx-auto mb-6">
              We couldn't find any packages matching "{searchQuery}". Try searching for another destination or reset your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-darkRed transition-colors shadow-sm"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
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
        )}

        {/* View All Packages Toggle */}
        {selectedCategory === 'All' && !showAll && !q && (
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
