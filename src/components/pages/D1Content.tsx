'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/common/Button';
import { PriceBlock } from '@/components/common/PriceBlock';
import { FeatureStrip } from '@/components/product/FeatureStrip';
import { FeatureGrid } from '@/components/product/FeatureGrid';
import { SpecificationTable } from '@/components/product/SpecificationTable';
import { ProductGallery } from '@/components/product/ProductGallery';
import { CTASection } from '@/components/common/CTASection';
import { PRODUCTS } from '@/data/products';

export const D1Content: React.FC = () => {
  const d1 = PRODUCTS.d1;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Product Hero (LCP Priority) */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/d1-hero-resort-walkway.jpg"
            alt="Three NIVA D1 Elevated Luxury Dome Cabins along Resort Walkway framing Alpine Mountain Clouds in India"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-8 sm:mt-10">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              {d1.positioning}
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            {d1.heroHeadline}
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans px-2">
            {d1.heroCopy}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              REQUEST A QUOTE
            </Button>
            <Button href="#specifications" variant="outline" size="lg" className="w-full sm:w-auto">
              VIEW SPECIFICATIONS
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <FeatureStrip items={d1.keyMetrics} />

      {/* Price Presentation Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-5 sm:-mt-6 relative z-20 w-full">
        <PriceBlock
          productName="NIVA D1"
          subtitle="14 FT NOMINAL ELEVATED CLASS"
          price={d1.price}
          disclaimer={d1.priceDisclaimer}
        />
      </div>

      {/* Architecture Story (Lazy Loaded) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.3em] text-champagne block mb-2 sm:mb-3">
              STRUCTURAL INNOVATION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight mb-4 sm:mb-6">
              {d1.architectureHeadline}
            </h2>
            <p className="text-stone-warm text-xs sm:text-sm md:text-base font-light leading-relaxed font-sans mb-6 sm:mb-8">
              {d1.architectureCopy}
            </p>
            <div className="border-t border-champagne/20 pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs text-stone-warm">
              <div>
                <span className="text-champagne uppercase tracking-wider block mb-1">3 UHM Pipe Supports</span>
                <span>Elevated approx. 7.5 ft on 3 primary elevated supports, minimizing soil footprint.</span>
              </div>
              <div>
                <span className="text-champagne uppercase tracking-wider block mb-1">Folding Staircase</span>
                <span>Integrated folding / hydraulic access staircase and elevated deck platform.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] border border-champagne/25 overflow-hidden bg-charcoal-500 rounded-sm">
            <Image
              src="/images/products/d1-white-deck.jpg"
              alt="NIVA D1 luxury elevated dome cabin perched on 3 steel pillars with foldable access staircase"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Interior Features Grid */}
      <section className="bg-charcoal-400/40 border-y border-champagne/15">
        <FeatureGrid
          eyebrow="HOSPITALITY INTERIOR"
          title="COMPACT BY DESIGN. COMFORT BY DEFAULT."
          features={d1.interiorHighlights}
        />
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal-300 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne block mb-3 sm:mb-4">
            GUEST EXPERIENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight mb-4 sm:mb-6">
            {d1.experienceHeadline}
          </h2>
          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans">
            {d1.experienceCopy}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            INQUIRE FOR NIVA D1
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <ProductGallery items={d1.gallery} title="NIVA D1 VISUAL TOUR" />

      {/* Specifications Table */}
      <div id="specifications">
        <SpecificationTable specifications={d1.specifications} />
      </div>

      {/* Global CTA */}
      <CTASection
        title="START YOUR NIVA D1 PROJECT."
        subtitle="Speak directly with our hospitality design team regarding terrain contours, logistics, and site delivery."
        ctaText="REQUEST NIVA D1 QUOTE"
        bgVariant="charcoal"
      />
    </div>
  );
};
