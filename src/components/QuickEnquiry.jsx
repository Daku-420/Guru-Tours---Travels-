import React, { useState } from 'react';
import { Calendar, Users, MapPin, Sparkles, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function QuickEnquiry({ onSubmitted }) {
  const [formData, setFormData] = useState({
    destination: '',
    travelDate: '',
    travellers: '2 Travellers',
    tripType: 'Adventure & Trekking',
    budget: 'Comfort / Standard',
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const destinationsList = [
    "Kedarnath Dham",
    "Auli Ski Paradise",
    "Rishikesh River & Adventure",
    "Mussoorie Queen of Hills",
    "Chopta & Tungnath Trek",
    "Nainital Lake District",
    "Valley of Flowers",
    "Jim Corbett Tiger Safari",
    "Custom Uttarakhand Itinerary"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.destination) {
      newErrors.destination = "Please select a destination";
    }
    if (!formData.travelDate) {
      newErrors.travelDate = "Please choose a travel date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    if (onSubmitted) {
      onSubmitted({
        ...formData,
        type: 'Quick Trip Enquiry',
      });
    }

    // Auto reset state after 4 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Guru Tours & Travels! I would like to plan a trip:%0A- Destination: ${formData.destination || 'Uttarakhand'}%0A- Date: ${formData.travelDate || 'Flexible'}%0A- Travellers: ${formData.travellers}%0A- Type: ${formData.tripType}%0A- Budget: ${formData.budget}%0APlease send me package options and pricing!`;
    window.open(`https://wa.me/${siteConfig.business.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="relative -mt-16 sm:-mt-20 z-30 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-5 sm:p-7 md:p-8 backdrop-blur-xl">
        {/* Section Header Inside Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Trip Planner</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal">
              Where would you like to explore?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted max-w-xs">
            Tell us your travel ideas and get a personalized, transparent quotation within hours.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center animate-fade-in">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-emerald-950 mb-2">
              Trip Request Recorded Successfully!
            </h4>
            <p className="text-emerald-800 text-sm max-w-lg mx-auto mb-6">
              Thank you for planning with <strong>Guru Tours & Travels</strong>. Our travel specialist will review your preferences for <strong>{formData.destination}</strong> and share a customized itinerary.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
              >
                <span>Continue on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-5 py-2.5 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination Dropdown */}
              <div className="relative">
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>Destination</span>
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className={`w-full px-3.5 py-3 rounded-xl border text-sm bg-brand-gray/60 font-medium text-brand-charcoal focus:bg-white transition-all appearance-none cursor-pointer ${
                    errors.destination ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-brand-red'
                  }`}
                >
                  <option value="">Select Destination</option>
                  {destinationsList.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
                {errors.destination && (
                  <span className="text-[11px] text-red-500 mt-1 block font-medium">
                    {errors.destination}
                  </span>
                )}
              </div>

              {/* Travel Date */}
              <div className="relative">
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  <span>Travel Date</span>
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-brand-gray/60 font-medium text-brand-charcoal focus:bg-white transition-all cursor-pointer ${
                    errors.travelDate ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-brand-red'
                  }`}
                />
                {errors.travelDate && (
                  <span className="text-[11px] text-red-500 mt-1 block font-medium">
                    {errors.travelDate}
                  </span>
                )}
              </div>

              {/* Number of Travellers */}
              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-red" />
                  <span>Travellers</span>
                </label>
                <select
                  value={formData.travellers}
                  onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm bg-brand-gray/60 font-medium text-brand-charcoal focus:bg-white focus:border-brand-red transition-all cursor-pointer"
                >
                  <option value="Solo (1 Person)">Solo (1 Person)</option>
                  <option value="2 Travellers (Couple / Friends)">2 Travellers (Couple / Friends)</option>
                  <option value="3 - 5 Travellers (Small Family)">3 - 5 Travellers (Small Family)</option>
                  <option value="6 - 9 Travellers (Group)">6 - 9 Travellers (Group)</option>
                  <option value="10+ Travellers (Large Group)">10+ Travellers (Large Group)</option>
                </select>
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                  <span>Trip Type</span>
                </label>
                <select
                  value={formData.tripType}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm bg-brand-gray/60 font-medium text-brand-charcoal focus:bg-white focus:border-brand-red transition-all cursor-pointer"
                >
                  <option value="Adventure & Trekking">Adventure & Trekking</option>
                  <option value="Family Holiday">Family Holiday</option>
                  <option value="Spiritual & Pilgrimage">Spiritual & Pilgrimage</option>
                  <option value="Honeymoon & Couple">Honeymoon & Couple</option>
                  <option value="Wildlife Safari">Wildlife Safari</option>
                  <option value="Weekend Getaway">Weekend Getaway</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full h-[46px] rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get My Trip Plan</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Links / WhatsApp Direct Help */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-brand-muted gap-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Our travel specialists are online & ready to customize</span>
              </span>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="text-emerald-700 hover:text-emerald-800 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Prefer instant WhatsApp chat? Click here</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
