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

export const D2Content: React.FC = () => {
  const d2 = PRODUCTS.d2;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Product Hero (LCP Priority) */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/d2-hero-twilight.jpg"
            alt="NIVA D2 Grounded Luxury Dome Cabins Illuminated on Timber Deck at Twilight"
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
              {d2.positioning}
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            {d2.heroHeadline}
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans px-2">
            {d2.heroCopy}
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
      <FeatureStrip items={d2.keyMetrics} />

      {/* Price Presentation Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-5 sm:-mt-6 relative z-20 w-full">
        <PriceBlock
          productName="NIVA D2"
          subtitle="14 FT NOMINAL GROUNDED CLASS"
          price={d2.price}
          disclaimer={d2.priceDisclaimer}
        />
      </div>

      {/* Architecture Story (Lazy Loaded) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.3em] text-champagne block mb-2 sm:mb-3">
              LANDSCAPE INTEGRATION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight mb-4 sm:mb-6">
              {d2.architectureHeadline}
            </h2>
            <p className="text-stone-warm text-xs sm:text-sm md:text-base font-light leading-relaxed font-sans mb-6 sm:mb-8">
              {d2.architectureCopy}
            </p>
            <div className="border-t border-champagne/20 pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs text-stone-warm">
              <div>
                <span className="text-champagne uppercase tracking-wider block mb-1">Grounded Profile</span>
                <span>Effortless step-in accessibility and panoramic garden terrace flow.</span>
              </div>
              <div>
                <span className="text-champagne uppercase tracking-wider block mb-1">Panoramic Glass Roof</span>
                <span>Overhead toughened glass star-gazing dome framing natural tree canopies.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] border border-champagne/25 overflow-hidden bg-charcoal-500 rounded-sm">
            <Image
              src="/images/products/d2-twin-grounded-river.jpg"
              alt="NIVA D2 twin grounded luxury dome cabins on plinth deck by river valley in India"
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
          features={d2.interiorHighlights}
        />
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal-300 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne block mb-3 sm:mb-4">
            NATURE CONNECTION
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight mb-4 sm:mb-6">
            {d2.experienceHeadline}
          </h2>
          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans">
            {d2.experienceCopy}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            INQUIRE FOR NIVA D2
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <ProductGallery items={d2.gallery} title="NIVA D2 VISUAL TOUR" />

      {/* Specifications Table */}
      <div id="specifications">
        <SpecificationTable specifications={d2.specifications} />
      </div>

      {/* Global CTA */}
      <CTASection
        title="INTEGRATE NIVA D2 INTO YOUR LANDSCAPE."
        subtitle="Our team collaborates with resort planners and estate owners on plinth preparation and landscape placement across India."
        ctaText="REQUEST NIVA D2 QUOTE"
        bgVariant="charcoal"
      />
    </div>
  );
};
