'use client';

import React, { useState } from 'react';
import { FAQItem, FAQS } from '@/data/faqs';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items?: FAQItem[];
  showCategoryFilter?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = FAQS,
  showCategoryFilter = true,
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Overview', 'Products & Amenities', 'Pricing & Commercials', 'Logistics & Installation'];
  const filteredItems = selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {showCategoryFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={"text-xs uppercase tracking-[0.2em] px-4 py-2.5 transition-all duration-300 font-sans border " + (
                selectedCategory === cat
                  ? 'bg-champagne text-charcoal border-champagne font-medium'
                  : 'bg-transparent text-stone-warm border-white/10 hover:border-champagne/40 hover:text-ivory'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={"border transition-all duration-300 " + (
                isOpen ? 'border-champagne/40 bg-charcoal-400/90' : 'border-white/10 bg-charcoal-500/60 hover:border-champagne/20'
              )}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg md:text-xl text-ivory tracking-wide">
                  {item.question}
                </span>
                <span
                  className={"w-8 h-8 border border-champagne/30 flex items-center justify-center text-champagne flex-shrink-0 transition-transform duration-300 " + (
                    isOpen ? 'rotate-180 bg-champagne/10 border-champagne' : ''
                  )}
                >
                  <ChevronDown size={16} />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 md:px-7 pb-6 pt-1 border-t border-white/5 animate-fade-in">
                  <p className="text-stone-warm text-xs md:text-sm font-light leading-relaxed font-sans">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
