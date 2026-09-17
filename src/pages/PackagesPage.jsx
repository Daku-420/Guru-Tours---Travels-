import React, { useState } from 'react';
import { Compass, Search, Sparkles, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PackageCard from '../components/PackageCard';
import { siteConfig } from '../data/siteConfig';

export default function PackagesPage({ onSelectPackage, onEnquirePackage, onOpenPlanTrip }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Spiritual', 'Adventure', 'Hill Station', 'Trekking', 'Wildlife'];

  const filteredPackages = siteConfig.packages.filter((pkg) => {
    const matchesCategory = selectedCategory === 'All' || pkg.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = !searchQuery || 
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Page Header Banner */}
      <PageBanner
        tag="Tour Packages"
        title="Discover Your Next Adventure"
        subtitle="Handpicked Himalayan itineraries with private mountain cabs, comfortable stays, and complete day-by-day transparency."
        image="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-20 bg-brand-gray/40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Search + Category Pills */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-200/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search destination (e.g. Auli, Kedarnath)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-brand-red bg-gray-50/70 focus:bg-white transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const count = cat === 'All'
                  ? siteConfig.packages.length
                  : siteConfig.packages.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? 'bg-brand-red text-white shadow-sm'
                        : 'bg-brand-gray text-brand-charcoal hover:bg-gray-200 border border-gray-200/60'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-gray-100 text-brand-muted'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Packages 3-Column Grid */}
          {filteredPackages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200">
              <Compass className="w-12 h-12 text-brand-red mx-auto mb-3" />
              <h3 className="text-xl font-bold text-brand-charcoal">No packages match your search</h3>
              <p className="text-sm text-brand-muted mt-1 max-w-sm mx-auto">
                Try searching for another destination or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelect={onSelectPackage}
                  onEnquire={onEnquirePackage}
                />
              ))}
            </div>
          )}

          {/* Custom Route Consultation Banner */}
          <div className="mt-16 p-8 sm:p-10 bg-brand-charcoal text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-brand-red font-bold text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Need a Custom Itinerary?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Can't find the exact combination you are looking for?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                We craft custom itineraries with private vehicles, hotel category upgrades, and flexible schedules for families and groups.
              </p>
            </div>

            <button
              onClick={onOpenPlanTrip}
              className="shrink-0 px-7 py-3.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Build Custom Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
