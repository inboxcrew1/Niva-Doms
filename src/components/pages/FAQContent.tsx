'use client';

import React, { useState } from 'react';
import { FAQS, FAQItem } from '@/data/faqs';
import { Button } from '@/components/common/Button';
import { ChevronDown } from 'lucide-react';

export const FAQContent: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL QUESTIONS' },
    { id: 'Products & Amenities', label: 'PRODUCTS & AMENITIES' },
    { id: 'Pricing & Commercials', label: 'PRICING & COMMERCIAL' },
    { id: 'Logistics & Installation', label: 'LOGISTICS & INSTALLATION' },
    { id: 'Overview', label: 'OVERVIEW' },
  ];

  const filteredFaqs: FAQItem[] = selectedCat === 'all' 
    ? FAQS 
    : FAQS.filter(f => f.category === selectedCat);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              CLARITY & DETAILS
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            FREQUENTLY ASKED QUESTIONS.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            Detailed answers regarding NIVA D1 and NIVA D2 specifications, pricing, materials, and off-site modular deployment across India.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Accordion */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 sm:px-4 py-2 text-[10px] sm:text-xs font-sans tracking-wider rounded-sm transition-all duration-300 ${
                  selectedCat === cat.id
                    ? 'bg-champagne text-charcoal font-medium shadow-md'
                    : 'bg-charcoal border border-champagne/20 text-stone-warm hover:text-champagne hover:border-champagne/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.id || idx}
                  className="border border-champagne/20 bg-charcoal-500 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg md:text-xl text-ivory">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-champagne flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-stone-warm font-light font-sans leading-relaxed border-t border-champagne/10 pt-3 sm:pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-12 sm:mt-16 text-center glass-card p-6 sm:p-8 border-champagne/30">
            <h3 className="font-serif text-xl sm:text-2xl text-ivory mb-2">Have a specific project question?</h3>
            <p className="text-xs sm:text-sm text-stone-warm font-light font-sans mb-6 max-w-lg mx-auto">
              Our hospitality architects are available to review site contours, utility integration, and commercial logistics.
            </p>
            <Button href="/contact" variant="primary" size="md">
              REQUEST A PROJECT CONSULTATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
