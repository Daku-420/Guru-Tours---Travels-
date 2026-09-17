import React from 'react';
import { Star, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-brand-cream/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Traveler Experiences</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal mb-4">
            Words From Our Travelers
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            Read genuine feedback and impressions from travelers who have explored the Himalayas with Guru Tours & Travels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-brand-creamDark flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-brand-charcoal text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-sm text-brand-charcoal">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-brand-muted mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-red" />
                  <span>{item.location}</span>
                </div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-brand-gray text-[10px] font-semibold text-brand-charcoal">
                  {item.tour}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <p className="text-center text-xs text-brand-muted mt-8">
          *Testimonials are representative reviews from past travelers and can be updated anytime in the website configuration.
        </p>
      </div>
    </section>
  );
}
