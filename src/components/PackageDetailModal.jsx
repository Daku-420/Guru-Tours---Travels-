import React from 'react';
import { X, Clock, MapPin, CheckCircle, XCircle, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';

export default function PackageDetailModal({ pkg, onClose, onEnquireFromModal }) {
  if (!pkg) return null;

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent(
    `Hello Guru Tours & Travels! I'm interested in booking or customizing the "${pkg.name}" (${pkg.duration}) starting from ₹${pkg.price.toLocaleString('en-IN')}. Please send me the complete day-wise details.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl sm:rounded-3xl bg-white text-left shadow-2xl transition-all my-8 animate-fade-in">
          {/* Header Image with Overlay */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-brand-red transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Details */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-red text-white">
                  {pkg.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{pkg.duration}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{pkg.destination}</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {pkg.name}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Overview & Pricing */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-brand-cream rounded-2xl border border-brand-creamDark">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Package Pricing
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-brand-charcoal font-heading">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-brand-muted font-medium">/ person (Starting from)</span>
                </div>
                <p className="text-[11px] text-brand-muted mt-0.5">*Prices vary with group size, vehicle choice & dates</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>WhatsApp Details</span>
                </a>
                <button
                  onClick={() => {
                    onClose();
                    onEnquireFromModal(pkg);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  Book / Customise
                </button>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base font-bold text-brand-charcoal mb-2">Package Overview</h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-base font-bold text-brand-charcoal mb-3">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-charcoal bg-brand-gray/50 p-2.5 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day Wise Itinerary */}
            {pkg.itinerary && (
              <div>
                <h3 className="text-base font-bold text-brand-charcoal mb-3">Day-by-Day Itinerary</h3>
                <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-red/20 pl-7">
                  {pkg.itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-brand-red border-2 border-white" />
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-extrabold text-brand-red uppercase">{step.day}:</span>
                          <span className="text-xs sm:text-sm font-bold text-brand-charcoal">{step.title}</span>
                        </div>
                        <p className="text-xs text-brand-muted leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>What is Included</span>
                </h4>
                <ul className="space-y-1.5">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="text-xs text-emerald-950 flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100">
                <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>What is Excluded</span>
                </h4>
                <ul className="space-y-1.5">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="text-xs text-rose-950 flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-brand-gray/60 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-brand-muted flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Questions? Call our travel desk: {siteConfig.business.phone}</span>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-brand-charcoal hover:bg-gray-200 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
