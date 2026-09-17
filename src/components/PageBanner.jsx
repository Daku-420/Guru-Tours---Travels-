import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({ title, subtitle, tag = "Guru Tours & Travels", image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop" }) {
  return (
    <div className="relative pt-32 pb-20 sm:pb-24 bg-brand-charcoal text-white overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-brand-charcoal/80 to-brand-charcoal" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb / Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4">
          <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-brand-red" />
          <span className="text-white">{tag}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4 drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
