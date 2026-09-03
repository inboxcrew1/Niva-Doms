import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/common/CTASection';
import { Button } from '@/components/common/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'About NIVA — Elevated Living | Luxury Hospitality Architecture India',
  description: 'Learn about NIVA: Pioneering modular luxury dome cabins and low-impact hospitality architecture for resorts, eco retreats, and nature destinations across India.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About NIVA — Luxury Hospitality Architecture India',
    description: 'Pioneering modular luxury dome cabins and low-impact hospitality architecture across India.',
    url: 'https://nivaliving.com/about',
  },
};

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' }
  ]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              OUR STORY & VISION
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            ELEVATED ARCHITECTURE. QUIET LUXURY.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            NIVA was founded in India to redefine how luxury accommodation intersects with pristine natural terrain and sensitive ecological landscapes.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] border border-champagne/25 overflow-hidden bg-charcoal-500 rounded-sm">
            <Image
              src="/images/products/d1-twin-river.jpg"
              alt="NIVA Architecture in Indian Nature by River Valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-champagne block">
              ORIGINS & INSPIRATION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-normal leading-tight">
              DESIGNED FOR THE DESTINATION.
            </h2>
            <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
              Traditional hospitality construction often scars landscapes with heavy concrete foundations, prolonged noise, and environmental disruption. NIVA provides an architectural alternative: precision-engineered luxury dome cabins that integrate seamlessly with nature.
            </p>
            <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
              Every NIVA unit is built with high-grade thermal envelope insulation, double-glazed architectural glass, integrated concealed MEP services, and ensuite Western bathrooms.
            </p>
            <div className="pt-2">
              <Button href="/why-niva" variant="outline" size="md">
                DISCOVER OUR VALUE PROPOSITION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="COLLABORATE WITH NIVA."
        subtitle="Let's discuss how NIVA elevated or grounded cabins can transform your hospitality destination across India."
        ctaText="REQUEST A CONSULTATION"
        bgVariant="charcoal"
      />
    </div>
  );
}
