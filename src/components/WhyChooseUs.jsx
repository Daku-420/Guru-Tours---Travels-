import React from 'react';
import { Compass, ShieldCheck, MapPin, Tag, Headphones, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function WhyChooseUs({ onOpenPlanTrip }) {
  const iconMap = {
    Compass: Compass,
    ShieldCheck: ShieldCheck,
    MapPin: MapPin,
    Tag: Tag,
    Headphones: Headphones,
  };

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Subtle Background Mountain Graphic */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
          <path d="M0 600 L250 250 L450 480 L650 180 L850 420 L1000 120 L1000 600 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest mb-3 border border-brand-red/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Guru Standard</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why Travel With <span className="text-brand-red">Guru Tours & Travels</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            We focus on peace of mind, reliable mountain transport, and honest, transparent travel planning.
          </p>
        </div>

        {/* Organized 3-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.slice(0, 3).map((item) => {
            const IconComponent = iconMap[item.icon] || Compass;
            return (
              <div
                key={item.id}
                className="group bg-[#2A3038] hover:bg-[#313842] p-7 rounded-3xl border border-gray-800 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/15 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-cream transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-800 flex items-center gap-1.5 text-xs text-brand-red font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] text-gray-400">Guaranteed Standard</span>
                </div>
              </div>
            );
          })}

          {/* Bottom 2 items centered gracefully in 3-col layout */}
          {siteConfig.whyChooseUs.slice(3, 5).map((item) => {
            const IconComponent = iconMap[item.icon] || Compass;
            return (
              <div
                key={item.id}
                className="group bg-[#2A3038] hover:bg-[#313842] p-7 rounded-3xl border border-gray-800 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between shadow-lg md:last:col-span-2 lg:last:col-span-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/15 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-cream transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-800 flex items-center gap-1.5 text-xs text-brand-red font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] text-gray-400">Guaranteed Standard</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct WhatsApp CTA to complete the 3x2 grid */}
          <div className="bg-gradient-to-br from-brand-red/25 via-brand-darkRed/20 to-transparent p-7 rounded-3xl border border-brand-red/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-5 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Have Special Requirements?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Speak directly with our Dehradun-based route specialists for customized mountain travel.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={onOpenPlanTrip}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold transition-all shadow-md text-center"
              >
                Plan With an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
