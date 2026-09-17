import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-base sm:text-lg">
            Everything you need to know about booking, package customizations, transport, and travel planning with Guru Tours & Travels.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-red/40 bg-brand-cream/30 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-brand-charcoal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-red text-white rotate-180'
                        : 'bg-gray-100 text-brand-charcoal'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Content */}
                <div
                  className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need More Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-gray border border-gray-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-brand-charcoal text-base">Still have questions?</h4>
            <p className="text-xs sm:text-sm text-brand-muted">Our friendly travel team is just a message away.</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.business.whatsappRaw}?text=${encodeURIComponent("Hello Guru Tours & Travels, I have a few specific questions about tour planning.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Chat With Expert</span>
          </a>
        </div>
      </div>
    </section>
  );
}
