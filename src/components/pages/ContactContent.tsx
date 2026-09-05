'use client';

import React from 'react';
import { ContactForm } from '@/components/interactive/ContactForm';
import { BRAND } from '@/data/brand';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactContent: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              PROJECT CONSULTATION
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            LET&apos;S CREATE SOMETHING DISTINCTIVE.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            Planning a luxury resort, eco retreat, farmhouse or glamping project in India? Tell us about your location and project requirements.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-charcoal-400/30 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Form on Left */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Contact Details on Right */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="border border-champagne/20 bg-charcoal-500 p-6 sm:p-8 space-y-5 sm:space-y-6">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-champagne block font-medium">
                COMMERCIAL INQUIRIES
              </span>

              <div className="flex items-start gap-3.5 text-xs font-sans">
                <div className="text-champagne mt-0.5 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-stone-warm block mb-0.5">Direct Email</span>
                  <a href={`mailto:${BRAND.contact.email}`} className="text-ivory hover:text-champagne font-medium">
                    {BRAND.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs font-sans">
                <div className="text-champagne mt-0.5 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-stone-warm block mb-0.5">Phone Consultation</span>
                  <span className="text-ivory font-medium">{BRAND.contact.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs font-sans">
                <div className="text-champagne mt-0.5 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-stone-warm block mb-0.5">Manufacturing & Design</span>
                  <span className="text-ivory font-medium">India (Serving Resorts Nationwide)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs font-sans">
                <div className="text-champagne mt-0.5 flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-stone-warm block mb-0.5">Advisory Hours</span>
                  <span className="text-ivory font-medium">Mon - Sat: 9:30 AM - 6:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="border border-champagne/20 bg-charcoal-400 p-6 sm:p-8">
              <h3 className="font-serif text-lg sm:text-xl text-ivory mb-2">Architectural Feasibility</h3>
              <p className="text-xs text-stone-warm font-light leading-relaxed font-sans mb-4">
                Our design engineers assist clients with contour assessments, solar orientation, foundation planning, and MEP connection layouts across Uttarakhand, Himachal Pradesh, Rajasthan, and nationwide.
              </p>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-champagne font-medium">
                NIVA CASTLE ELEVATED LIVING
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
