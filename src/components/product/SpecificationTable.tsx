import React from 'react';
import { ProductSpec } from '@/data/products';

interface SpecificationTableProps {
  specifications: ProductSpec[];
  className?: string;
}

export const SpecificationTable: React.FC<SpecificationTableProps> = ({
  specifications,
  className = '',
}) => {
  return (
    <div className={"py-14 sm:py-20 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto " + className}>
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-champagne block mb-2 sm:mb-3">
          TECHNICAL OVERVIEW
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal">
          SPECIFICATIONS
        </h2>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {specifications.map((cat, idx) => (
          <div key={idx} className="border border-champagne/20 bg-charcoal-400/50 overflow-hidden">
            <div className="bg-charcoal-300/80 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-champagne/20 flex items-center justify-between">
              <h3 className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] sm:tracking-[0.25em] text-champagne font-medium">
                {cat.category}
              </h3>
            </div>
            <div className="divide-y divide-white/5">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[11px] sm:text-xs font-sans uppercase tracking-wider text-stone-warm sm:w-1/3">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-ivory font-light sm:w-2/3 sm:text-right font-sans">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
