import React, { useState } from 'react';
import { X, Compass, Send, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';

export default function PlanTripModal({ isOpen, onClose, initialPackage = null, onSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: initialPackage ? (initialPackage.name || initialPackage.destination || '') : '',
    travelDate: '',
    travellers: '2 Travellers',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync destination if initialPackage changes while opening
  const activeDestination = formData.destination || (initialPackage ? (initialPackage.name || initialPackage.destination || '') : '');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your phone number';
    if (!activeDestination.trim()) newErrors.destination = 'Please choose a destination';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    if (onSubmitted) {
      onSubmitted({
        ...formData,
        destination: activeDestination,
        type: 'Plan Your Trip Modal',
      });
    }

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 4000);
  };

  const handleWhatsApp = () => {
    const text = `Hello Guru Tours & Travels, I am planning a journey:%0A- Name: ${formData.name || 'Traveler'}%0A- Destination: ${activeDestination || 'Uttarakhand'}%0A- Date: ${formData.travelDate || 'Flexible'}%0A- Travellers: ${formData.travellers}%0APlease send me customized options.`;
    window.open(`https://wa.me/${siteConfig.business.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-left shadow-2xl transition-all my-8 animate-fade-in border border-gray-100">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-brand-red hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest w-fit mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Trip Planner</span>
          </div>
          <h3 className="text-2xl font-bold font-heading text-brand-charcoal mb-1">
            Plan Your Journey
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mb-6">
            Share your travel preferences and get a customized itinerary with transparent starting quotes.
          </p>

          {isSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-emerald-950 mb-1">
                Your Request Has Been Received!
              </h4>
              <p className="text-xs text-emerald-800 mb-4">
                Thank you, <strong>{formData.name}</strong>. Our trip specialist will connect with you via phone or WhatsApp shortly.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Continue on WhatsApp</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-brand-gray/60 focus:bg-white transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-200 focus:border-brand-red'
                  }`}
                />
                {errors.name && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.name}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-brand-gray/60 focus:bg-white transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">
                    Destination *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kedarnath, Auli"
                    value={activeDestination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-brand-gray/60 focus:bg-white transition-all ${
                      errors.destination ? 'border-red-500' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  />
                  {errors.destination && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.destination}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-brand-gray/60 focus:bg-white focus:border-brand-red transition-all cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">
                    Travellers
                  </label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-brand-gray/60 focus:bg-white focus:border-brand-red transition-all cursor-pointer"
                  >
                    <option value="1 Traveller">1 Traveller (Solo)</option>
                    <option value="2 Travellers">2 Travellers (Couple)</option>
                    <option value="3-5 Travellers">3 - 5 Travellers (Family)</option>
                    <option value="6-10 Travellers">6 - 10 Travellers (Group)</option>
                    <option value="10+ Travellers">10+ Travellers</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Hotel type preference, cab requirements, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm bg-brand-gray/60 focus:bg-white focus:border-brand-red transition-all"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Plan</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Send Directly on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
