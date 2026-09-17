import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';

export default function ContactSection({ onSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',
    travellers: '2 Travellers',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.destination.trim()) newErrors.destination = 'Please specify destination';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    if (onSubmitted) {
      onSubmitted({
        ...formData,
        type: 'Detailed Contact Enquiry',
      });
    }
  };

  const handleWhatsAppUs = () => {
    const text = `Hello Guru Tours & Travels! My name is ${formData.name || 'Traveler'}. I am planning a trip to ${formData.destination || 'Uttarakhand'} around ${formData.travelDate || 'flexible dates'} for ${formData.travellers}. Notes: ${formData.message || 'Please contact me.'}`;
    window.open(`https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-gray/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Details & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal mb-4">
                Let's Plan Your Next Journey
              </h2>
              <p className="text-brand-muted text-base leading-relaxed mb-8">
                Reach out to our trip designers directly for custom itineraries, group rates, vehicle rentals, and hotel bookings.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.business.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200 hover:border-brand-red shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-muted uppercase">Phone Support</span>
                    <p className="text-base font-bold text-brand-charcoal group-hover:text-brand-red transition-colors">
                      {siteConfig.business.phone}
                    </p>
                    <span className="text-[11px] text-emerald-700 font-semibold">Available 8 AM - 9 PM IST</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent("Hello Guru Tours & Travels, I'd like to make an enquiry.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500 shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-muted uppercase">WhatsApp Chat</span>
                    <p className="text-base font-bold text-brand-charcoal group-hover:text-emerald-700 transition-colors">
                      {siteConfig.business.whatsapp}
                    </p>
                    <span className="text-[11px] text-emerald-700 font-semibold">Instant Itinerary & Quotations</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200 hover:border-brand-red shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-muted uppercase">Email Inquiries</span>
                    <p className="text-sm sm:text-base font-bold text-brand-charcoal group-hover:text-brand-red transition-colors">
                      {siteConfig.business.email}
                    </p>
                    <span className="text-[11px] text-brand-muted">Responses within 2 business hours</span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-muted uppercase">Office Location</span>
                    <p className="text-xs sm:text-sm font-medium text-brand-charcoal mt-0.5 leading-relaxed">
                      {siteConfig.business.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.business.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-brand-charcoal hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Now</span>
              </a>
              <button
                type="button"
                onClick={handleWhatsAppUs}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

          {/* Right Column: Full Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
              <h3 className="font-heading font-black text-2xl text-brand-charcoal mb-2">
                Send Trip Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mb-6">
                Fill in the details below and our travel coordinator will tailor a vacation package matching your budget.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 mb-2">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.name}</strong>! We have received your trip enquiry for <strong>{formData.destination}</strong>. Our travel advisor will call you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppUs}
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Speed up on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          destination: '',
                          travelDate: '',
                          travellers: '2 Travellers',
                          message: '',
                        });
                      }}
                      className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-brand-gray/50 focus:bg-white transition-all ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-brand-red'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-brand-gray/50 focus:bg-white transition-all ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-brand-red'
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium bg-brand-gray/50 focus:bg-white focus:border-brand-red transition-all"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                        Destination *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kedarnath, Auli, Rishikesh"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-brand-gray/50 focus:bg-white transition-all ${
                          errors.destination ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-brand-red'
                        }`}
                      />
                      {errors.destination && <span className="text-[11px] text-red-500 mt-1 block">{errors.destination}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                        Approximate Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium bg-brand-gray/50 focus:bg-white focus:border-brand-red transition-all cursor-pointer"
                      />
                    </div>

                    {/* Travellers */}
                    <div>
                      <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                        Number of Travellers
                      </label>
                      <select
                        value={formData.travellers}
                        onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium bg-brand-gray/50 focus:bg-white focus:border-brand-red transition-all cursor-pointer"
                      >
                        <option value="1 Traveller">1 Traveller (Solo)</option>
                        <option value="2 Travellers">2 Travellers (Couple)</option>
                        <option value="3-5 Travellers">3 - 5 Travellers (Family)</option>
                        <option value="6-10 Travellers">6 - 10 Travellers (Group)</option>
                        <option value="10+ Travellers">10+ Travellers (Corporate / Large Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1.5">
                      Special Requirements or Preferences
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about hotel categories (3-Star, Luxury), tempo traveller needs, or customized sightseeing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium bg-brand-gray/50 focus:bg-white focus:border-brand-red transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppUs}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
