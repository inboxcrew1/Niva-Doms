import React from 'react';

interface PriceBlockProps {
  productName: string;
  subtitle?: string;
  price?: string;
  disclaimer?: string;
  className?: string;
}

export const PriceBlock: React.FC<PriceBlockProps> = ({
  productName,
  subtitle = 'STARTING / SELLING PRICE',
  price = '₹6,00,000',
  disclaimer = 'Applicable taxes, site-specific civil works, transportation and other exclusions may apply as specified in the quotation.',
  className = '',
}) => {
  return (
    <div className={"border border-champagne/25 bg-charcoal-400/85 backdrop-blur-md p-5 sm:p-7 md:p-8 relative " + className}>
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        <div>
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-champagne block mb-1">
            {productName} • {subtitle}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight">
              {price}
            </span>
          </div>
        </div>
        <div className="max-w-md">
          <p className="text-xs text-stone-warm/80 font-sans font-light leading-relaxed">
            {disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};
