import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  titleSize = 'lg',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };
  const sizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl',
  };
  return (
    <div className={"flex flex-col max-w-3xl " + alignment[align] + " " + className}>
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-[1px] w-6 bg-champagne/60"></span>
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-champagne font-medium">
            {eyebrow}
          </span>
          <span className="h-[1px] w-6 bg-champagne/60"></span>
        </div>
      )}
      <h2 className={"font-serif font-normal leading-[1.15] text-ivory tracking-wide " + sizes[titleSize]}>{title}</h2>
      {description && (
        <p className="mt-5 text-sm md:text-base text-stone-warm font-light leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
};
