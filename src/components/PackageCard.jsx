import React from 'react';
import { Clock, MapPin, ArrowRight, MessageSquare, Check } from 'lucide-react';

export default function PackageCard({ pkg, onSelect, onEnquire }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1.5">
      {/* Package Header Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-brand-charcoal shadow-sm backdrop-blur-sm">
            {pkg.category}
          </span>
          {pkg.badge && (
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-brand-red text-white shadow-sm">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Bottom Image Details */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold drop-shadow-md">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-red" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-red" />
            <span>{pkg.destination}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title - Clean 2-line wrapped title */}
          <h3 className="text-xl font-bold font-heading text-brand-charcoal group-hover:text-brand-red transition-colors min-h-[3.25rem] line-clamp-2 leading-snug mb-2">
            {pkg.name}
          </h3>

          {/* Short Description */}
          <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {pkg.description}
          </p>

          {/* Highlights Preview */}
          <div className="space-y-1.5 mb-6 bg-brand-gray/50 p-3 rounded-xl border border-gray-100">
            {pkg.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-brand-charcoal/90">
                <Check className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer: Pricing + Sturdy 50/50 Button Row */}
        <div className="pt-4 border-t border-gray-100">
          {/* Pricing Row */}
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-muted block">
                Starting from
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-brand-charcoal font-heading">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-brand-muted font-medium">/ person</span>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Instant Booking
            </span>
          </div>

          {/* Clean 50/50 Button Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onSelect(pkg)}
              className="w-full py-2.5 px-3 rounded-xl border-2 border-gray-200 hover:border-brand-red text-brand-charcoal hover:text-brand-red text-xs font-bold transition-all flex items-center justify-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onEnquire(pkg)}
              className="w-full py-2.5 px-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
