import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-champagne/20 pt-20 pb-12 text-ivory relative overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-champagne/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-8 md:w-16 md:h-9">
              <Image src="/brand/niva-emblem.png" alt="NIVA Emblem" fill className="object-contain" />
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl tracking-[0.28em] text-ivory block leading-none">NIVA</span>
              <span className="text-[10px] tracking-[0.35em] text-champagne uppercase font-sans block mt-1">ELEVATED LIVING</span>
            </div>
          </div>
          <p className="text-stone-warm text-xs md:text-sm font-light max-w-md font-sans leading-relaxed">
            Quiet luxury architectural accommodation engineered in India for destinations where nature is the experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-6 font-medium">ACCOMMODATION</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/d1" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">NIVA D1 (Elevated)</Link></li>
              <li><Link href="/d2" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">NIVA D2 (Grounded)</Link></li>
              <li><Link href="/design" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Design & Architecture</Link></li>
              <li><Link href="/projects" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Visual Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-6 font-medium">APPLICATIONS</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/applications#resorts" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Luxury Resorts</Link></li>
              <li><Link href="/applications#farm-stays" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Farm Stays & Orchards</Link></li>
              <li><Link href="/applications#glamping-retreats" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Glamping Retreats</Link></li>
              <li><Link href="/applications#eco-retreats" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Eco Sanctuaries</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-6 font-medium">COMPANY</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">About NIVA</Link></li>
              <li><Link href="/why-niva" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Why NIVA</Link></li>
              <li><Link href="/faq" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">FAQ</Link></li>
              <li><Link href="/contact" prefetch={true} className="text-xs text-stone-warm hover:text-champagne transition-colors">Request a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne mb-6 font-medium">ENQUIRIES</h4>
            <div className="flex flex-col gap-3 text-xs text-stone-warm font-light">
              <p>NIVA CASTLE</p>
              <p>Fabricated in India</p>
              <a href={`mailto:${BRAND.contact.email}`} className="text-champagne hover:text-gold-warm transition-colors pt-1 block">
                {BRAND.contact.email}
              </a>
              <div className="flex items-center gap-4 pt-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">Instagram</a>
                <span>•</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">LinkedIn</a>
                <span>•</span>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-warm/70">
          <p>© {BRAND.foundedYear} NIVA. All Rights Reserved. NIVA CASTLE.</p>
          
          <div className="flex items-center gap-1.5 text-xs text-stone-warm">
            <span>Designed &amp; Developed by</span>
            <a
              href="https://www.inboxcrew.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne hover:text-gold-warm font-medium tracking-wider underline underline-offset-4 decoration-champagne/50 hover:decoration-champagne transition-colors"
            >
              inboxcrew
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" prefetch={true} className="hover:text-champagne transition-colors">Privacy Policy</Link>
            <Link href="/terms" prefetch={true} className="hover:text-champagne transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
