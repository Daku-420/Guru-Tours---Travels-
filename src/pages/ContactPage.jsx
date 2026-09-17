import React from 'react';
import PageBanner from '../components/PageBanner';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';

export default function ContactPage({ onSubmitted }) {
  return (
    <div>
      {/* Page Header Banner */}
      <PageBanner
        tag="Contact Us"
        title="Let's Plan Your Next Journey"
        subtitle="Reach out to our Dehradun travel desk directly via WhatsApp, phone, or submit an enquiry for a customized mountain itinerary."
        image="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1800&auto=format&fit=crop"
      />

      {/* Main Contact Section */}
      <ContactSection onSubmitted={onSubmitted} />

      {/* Frequently Asked Questions */}
      <FaqSection />
    </div>
  );
}
