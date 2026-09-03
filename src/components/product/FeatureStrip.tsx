import React from 'react';

interface FeatureStripItem {
  label: string;
  value: string;
  sub?: string;
}

interface FeatureStripProps {
  items: FeatureStripItem[];
  className?: string;
}

export const FeatureStrip: React.FC<FeatureStripProps> = ({ items, className = '' }) => {
  return (
    <div className={"w-full border-y border-champagne/20 bg-charcoal-400/90 py-6 sm:py-8 px-4 sm:px-6 " + className}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-champagne/15">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center pt-3 md:pt-0 px-2 sm:px-3">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory font-normal tracking-wide">
              {item.value}
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-champagne mt-1">
              {item.label}
            </span>
            {item.sub && (
              <span className="text-[9px] sm:text-[10px] text-stone-warm font-light font-sans mt-0.5">
                {item.sub}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
