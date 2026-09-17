import React from 'react';
import { Compass, Heart, Shield, Award, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenPlanTrip }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop"
                    alt="Snowy Himalayan peak views"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-brand-cream p-5 flex flex-col justify-center border border-brand-creamDark">
                  <span className="text-3xl font-extrabold text-brand-red font-heading">
                    100%
                  </span>
                  <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mt-1">
                    Customized Itineraries
                  </span>
                  <p className="text-xs text-brand-muted mt-1">
                    Designed around your preferences, budget, and travel pace.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-brand-charcoal text-white p-5 flex flex-col justify-center border border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mb-2">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Our Philosophy
                  </span>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    Explore • Experience • Together.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
                    alt="Mountain road journey"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Background Accent */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-cream rounded-full filter blur-2xl -z-10 opacity-70" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-red/5 rounded-full filter blur-2xl -z-10" />
          </div>

          {/* Right Column: Brand Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>About Guru Tours & Travels</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal mb-6 leading-tight">
              Travel Beyond <span className="text-brand-red">Ordinary</span>
            </h2>

            <div className="space-y-4 text-brand-muted text-sm sm:text-base leading-relaxed mb-8">
              <p className="text-brand-charcoal font-medium text-base sm:text-lg">
                At Guru Tours & Travels, we believe every journey is more than just a destination. It is about discovering new places, creating memories, and experiencing the world with confidence.
              </p>
              <p>
                Rooted in the breathtaking landscapes of Uttarakhand, our team brings ground-level mountain expertise, trusted local logistics, and thoughtful planning to every travel itinerary. From sacred Himalayan pilgrimage trails to high-altitude ski slopes, jungle safaris, and relaxing hill retreats, we take care of the details so you can immerse yourself in the experience.
              </p>
            </div>

            {/* Core Values / Mission Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-brand-gray/60 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-brand-charcoal">Customer First</h4>
                <p className="text-xs text-brand-muted mt-1">Honest advice and transparent pricing without hidden surprises.</p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-gray/60 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-brand-charcoal">Safe Travels</h4>
                <p className="text-xs text-brand-muted mt-1">Comfortable mountain-tested fleet with vetted, courteous drivers.</p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-gray/60 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-brand-charcoal">Ground Mastery</h4>
                <p className="text-xs text-brand-muted mt-1">Real-time local route monitoring and 24/7 travel assistance.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPlanTrip}
                className="px-7 py-3.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Plan Your Journey With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#why-us"
                className="px-6 py-3.5 rounded-full border border-gray-200 hover:border-brand-red text-brand-charcoal hover:text-brand-red font-bold text-sm transition-colors"
              >
                Why Choose Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
