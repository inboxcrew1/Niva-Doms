import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/ContactContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Request a Quote & Project Consultation',
  description: 'Contact NIVA to request a commercial quote for luxury dome cabins (D1 & D2) at ₹6,00,000. Discuss resort feasibility, delivery timelines, and volume rollouts across India.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Request a Quote — NIVA Luxury Dome Cabins India',
    description: 'Request a project quote and discuss resort feasibility with NIVA architectural advisors.',
    url: 'https://nivaliving.com/contact',
  },
};

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact & Quote', path: '/contact' }
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <ContactContent />
    </>
  );
}
