import React from 'react';
import { Compass, ShieldCheck, MapPin, Tag, Headphones, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import PageBanner from '../components/PageBanner';
import { siteConfig } from '../data/siteConfig';

export default function WhyUsPage({ onOpenPlanTrip }) {
  const iconMap = {
    Compass: Compass,
    ShieldCheck: ShieldCheck,
    MapPin: MapPin,
    Tag: Tag,
    Headphones: Headphones,
  };

  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent("Hello Guru Tours & Travels, I would like to know more about your tour packages and guarantees.")}`;

  return (
    <div>
      {/* Page Header Banner */}
      <PageBanner
        tag="Why Choose Us"
        title="The Guru Tours Standard"
        subtitle="Uncompromising safety, experienced mountain drivers, authentic local itineraries, and 100% transparent pricing."
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop"
      />

      {/* 5 Core Pillars In-Depth Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>5 Pillars of Excellence</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-charcoal mb-4">
              Built on Trust, Safety & Transparency
            </h2>
            <p className="text-brand-muted text-base">
              Mountain travel brings unpredictable roads and weather. Having a reliable, experienced agency makes all the difference.
            </p>
          </div>

          {/* Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.whyChooseUs.map((pillar) => {
              const IconComp = iconMap[pillar.icon] || Compass;
              return (
                <div
                  key={pillar.id}
                  className="bg-brand-gray/40 p-8 rounded-3xl border border-gray-200/80 hover:border-brand-red/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs text-brand-red font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Guru Promise</span>
                  </div>
                </div>
              );
            })}

            {/* Custom CTA Card */}
            <div className="bg-brand-charcoal text-white p-8 rounded-3xl border border-gray-800 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 shadow-md">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Have Specific Questions?
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Chat directly with our trip managers on WhatsApp. We answer questions about mountain passes, permit requirements, and hotel hygiene.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Testimonials */}
      <section className="py-20 sm:py-24 bg-brand-cream/60 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-charcoal mb-3">
              Feedback From Our Travelers
            </h2>
            <p className="text-brand-muted text-sm sm:text-base">
              Real impressions from past pilgrims, couples, and adventure travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-3xl border border-brand-creamDark shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal italic leading-relaxed mb-6">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-bold text-sm text-brand-charcoal">{t.name}</h4>
                  <p className="text-[11px] text-brand-muted">{t.location} • {t.tour}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Transparency Strip */}
      <section className="py-16 bg-brand-charcoal text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Experience the Himalayas with Complete Confidence
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            No surprise taxes, no hidden driver night allowances, no substandard hotels.
          </p>
          <button
            onClick={() => onOpenPlanTrip()}
            className="px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Start Planning Your Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
