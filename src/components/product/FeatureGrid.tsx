import React from 'react';
import { ProductFeature } from '@/data/products';

interface FeatureGridProps {
  title?: string;
  eyebrow?: string;
  features: ProductFeature[];
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  title = 'COMPACT BY DESIGN. COMFORT BY DEFAULT.',
  eyebrow = 'HOSPITALITY SUITE INTERIORS',
  features,
  className = '',
}) => {
  return (
    <div className={"py-20 px-6 max-w-7xl mx-auto " + className}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-champagne block mb-3">
          {eyebrow}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory font-normal tracking-wide">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="border border-champagne/15 bg-charcoal-400/60 p-8 transition-all duration-300 hover:border-champagne/40 hover:bg-charcoal-300/80 group"
          >
            <div className="w-10 h-10 border border-champagne/30 flex items-center justify-center text-champagne mb-6 group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
              <span className="font-serif text-sm text-champagne">0{idx + 1}</span>
            </div>
            <h3 className="font-serif text-xl text-ivory tracking-wide mb-3 group-hover:text-champagne transition-colors">
              {feature.title}
            </h3>
            <p className="text-stone-warm text-xs md:text-sm font-light leading-relaxed font-sans">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
