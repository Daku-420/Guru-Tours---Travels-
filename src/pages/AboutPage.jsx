import React from 'react';
import { Compass, Heart, Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function AboutPage({ onOpenPlanTrip }) {
  return (
    <div>
      {/* Page Header Banner */}
      <PageBanner
        tag="About Us"
        title="Travel Beyond Ordinary"
        subtitle="We believe every journey is more than just a destination. It is about discovering new places, creating memories, and experiencing the Himalayas with confidence."
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop"
      />

      {/* Brand Narrative Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Image Mosaic */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
                    alt="Kedarnath Temple and Himalayan peaks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] pt-6">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
                    alt="Auli snow slopes"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Our Heritage</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-charcoal mb-4">
                Born in the Heart of the Garhwal Hills
              </h2>
              <div className="space-y-4 text-brand-muted text-sm sm:text-base leading-relaxed">
                <p className="text-brand-charcoal font-medium text-base sm:text-lg">
                  Headquartered in Dehradun, Uttarakhand, Guru Tours & Travels was founded to provide transparent, reliable, and authentic travel experiences across northern India's most breathtaking terrains.
                </p>
                <p>
                  Traveling in the mountains requires more than just booking hotels—it requires deep local knowledge of weather windows, road conditions, safe mountain driving protocols, and trusted stays. We manage every logistical touchpoint so our travelers can completely relax and absorb the magic of the Himalayas.
                </p>
                <p>
                  From spiritual pilgrims seeking darshan at the holy shrine of Kedarnath, to thrill-seekers riding white-water rapids in Rishikesh or skiers conquering Auli's powdered slopes, our itineraries are thoughtfully paced and customized.
                </p>
              </div>

              {/* Trust Callout */}
              <div className="mt-8 p-5 rounded-2xl bg-brand-cream border border-brand-creamDark flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center shrink-0 font-heading font-black text-lg">
                  G
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-charcoal">Tagline: EXPLORE • EXPERIENCE • TOGETHER</h4>
                  <p className="text-xs text-brand-muted">Traveling together creates bonds that last a lifetime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-brand-gray/40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-charcoal mb-3">
              Our Core Guiding Principles
            </h2>
            <p className="text-brand-muted text-sm sm:text-base">
              The values that define how we plan and operate every single journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Customer-First Honesty</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  We state pricing upfront with zero hidden charges or forced shopping stops. What we promise in writing is precisely what you receive on the ground.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-brand-red font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Written Clarity</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Uncompromising Safety</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  All our mountain drivers have minimum 5+ years experience on high-altitude Himalayan routes. Our vehicles undergo strict pre-trip safety checklists.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-brand-red font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Mountain-Rated Fleet</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Ground-Level Mastery</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  We live and breathe Uttarakhand. When landslides, weather, or temple queues shift, our on-ground dispatch team adapts your itinerary in real time.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-brand-red font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>24/7 Live Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-brand-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            Ready to experience the mountains with us?
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Speak directly with our local travel advisors in Dehradun.
          </p>
          <button
            onClick={() => onOpenPlanTrip()}
            className="px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
