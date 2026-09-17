import React from 'react';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function TravelExperience({ onOpenPlanTrip }) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Red Accent Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Memories in the Making</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal">
              Every Journey Tells a Story
            </h2>
            {/* Red Accent Line */}
            <div className="w-20 h-1.5 bg-brand-red rounded-full mt-3 mb-4" />
            <p className="text-brand-muted text-base sm:text-lg">
              Whether navigating roaring rapids in Rishikesh or witnessing the golden sunrise over Nanda Devi peak, every experience with Guru Tours & Travels is curated to stay with you forever.
            </p>
          </div>

          <button
            onClick={onOpenPlanTrip}
            className="self-start md:self-end px-6 py-3.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Start Your Story</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Experience Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={onOpenPlanTrip}
            >
              <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent group-hover:via-brand-charcoal/70 transition-colors" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-brand-red transition-colors">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-brand-cream transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-200 line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100">
                  {exp.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white/90 group-hover:text-brand-red">
                  <span>Customise Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
