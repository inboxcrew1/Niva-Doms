export const SITE_CONFIG = {
  name: "NIVA Elevated Living",
  shortName: "NIVA",
  title: "NIVA Elevated Living",
  description: "Manufacturer and supplier of luxury dome cabins, geodesic glamping pods, and modular resort accommodation units in India. Turnkey ensuite cabins for resorts, farm stays, and private estates.",
  url: "https://nivaliving.com",
  ogImage: "https://nivaliving.com/images/products/d2-hero-twilight.jpg",
  keywords: [
    "luxury dome cabins",
    "luxury dome cabin India",
    "luxury dome house",
    "dome house India",
    "geodesic dome cabin",
    "luxury glamping cabins",
    "luxury glamping pods",
    "resort dome cabins",
    "resort accommodation cabins",
    "elevated dome cabins",
    "modular resort cabins",
    "portable luxury cabins",
    "portable homes",
    "modular homes",
    "prefab homes",
    "container homes",
    "container houses",
    "dome homes",
    "dome houses",
    "portable cabins",
    "luxury portable homes",
    "hospitality cabins",
    "eco resort cabins",
    "farm stay cabins",
    "nature resort cabins",
    "luxury resort accommodation",
    "glamping domes India",
    "resort cottage manufacturers India",
    "prefabricated resort rooms",
    "turnkey resort accommodation"
  ],
  contact: {
    email: "info@nivadoms.com",
    phone: "+91 98765 43210",
    country: "India",
  },
};

export const PAGE_METADATA: Record<string, { title: string; description: string; canonical: string }> = {
  home: {
    title: "NIVA Elevated Living",
    description: "Manufacturer and supplier of luxury dome cabins, geodesic glamping pods, and modular resort accommodation units in India. Turnkey ensuite cabins for resorts, farm stays, and private estates.",
    canonical: "https://nivaliving.com",
  },
  d1: {
    title: "NIVA D1 — Elevated Luxury Dome Cabin (14 Ft Nominal Class) | ₹6,00,000",
    description: "Explore NIVA D1: 14 ft nominal elevated luxury dome cabin perched on 3 primary elevated supports (UHM pipe concept) approx. 7.5 ft high with folding staircase, attached ensuite bathroom, and Bakelite architectural cladding at ₹6,00,000.",
    canonical: "https://nivaliving.com/d1",
  },
  d2: {
    title: "NIVA D2 — Grounded Luxury Dome Cabin & Resort Pod (14 Ft Nominal Class) | ₹6,00,000",
    description: "Explore NIVA D2: 14 ft nominal grounded luxury dome cabin engineered for seamless garden, tea estate, and plinth integration with panoramic star-gazing glass skylight, ensuite bathroom, and Bakelite architectural cladding at ₹6,00,000.",
    canonical: "https://nivaliving.com/d2",
  },
  whyNiva: {
    title: "Why NIVA — Commercial ROI & Rapid Modular Resort Deployment India",
    description: "Discover the strategic advantages of NIVA: 12-18 month ROI, zero heavy civil foundations, off-site prefabrication, and fixed ₹6,00,000 base pricing for Indian resorts and farm stays.",
    canonical: "https://nivaliving.com/why-niva",
  },
  applications: {
    title: "Resort & Hospitality Applications — Dome Cabins for India's Terrains",
    description: "Modular dome cabins and glamping pods engineered for luxury resorts, agro-tourism farm stays, tea plantations, and eco-sanctuaries across Uttarakhand, Himachal Pradesh, Rajasthan, and India.",
    canonical: "https://nivaliving.com/applications",
  },
  design: {
    title: "Architecture & Craft — Geodesic Engineering & Faceted Dome Design",
    description: "Explore NIVA's architectural engineering: geodesic triangulated shells, iron/steel framework, premium Bakelite finishes, and panoramic toughened glass modules.",
    canonical: "https://nivaliving.com/design",
  },
  about: {
    title: "About NIVA — Elevated Living | Luxury Hospitality Architecture India",
    description: "Learn about NIVA: Pioneering modular luxury dome cabins and low-impact hospitality architecture designed and fabricated in India for forward-thinking hoteliers.",
    canonical: "https://nivaliving.com/about",
  },
  projects: {
    title: "Visual Journal — Photographic Retrospective of NIVA Cabins",
    description: "A curated photographic gallery of NIVA elevated and grounded luxury dome cabins integrated into India's mountain slopes, river valleys, and resort gardens.",
    canonical: "https://nivaliving.com/projects",
  },
  faq: {
    title: "Frequently Asked Questions — Pricing, Specifications & Logistics",
    description: "Get answers to questions about NIVA luxury dome cabins: ₹6,00,000 base pricing, off-site delivery across India, 14 ft nominal dimensions, ensuite bathroom, and site requirements.",
    canonical: "https://nivaliving.com/faq",
  },
  contact: {
    title: "Request a Quote & Project Consultation",
    description: "Contact NIVA to request a commercial quote for luxury dome cabins (D1 & D2) at ₹6,00,000. Discuss resort feasibility, delivery timelines, and volume rollouts across India.",
    canonical: "https://nivaliving.com/contact",
  },
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NIVA Elevated Living",
    "legalName": "NIVA Castle Elevated Living",
    "url": "https://nivaliving.com",
    "logo": "https://nivaliving.com/brand/niva-logo-main.png",
    "description": "Manufacturer and supplier of luxury dome cabins, geodesic glamping pods, and prefabricated resort accommodation in India.",
    "email": "info@nivadoms.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://instagram.com",
      "https://linkedin.com",
      "https://youtube.com"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NIVA Elevated Living",
    "url": "https://nivaliving.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nivaliving.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function getProductSchema(productId: 'd1' | 'd2') {
  if (productId === 'd1') {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "NIVA D1 Elevated Luxury Dome Cabin",
      "image": [
        "https://nivaliving.com/images/products/d1-hero-resort-walkway.jpg",
        "https://nivaliving.com/images/products/d1-twin-river.jpg",
        "https://nivaliving.com/images/products/d1-white-deck.jpg"
      ],
      "description": "14 ft nominal elevated luxury dome cabin perched on 3 primary elevated supports (UHM pipe concept) approx. 7.5 ft above finished ground level with folding staircase, attached ensuite bathroom, iron/steel framework, and Bakelite cladding.",
      "sku": "NIVA-D1-14FT",
      "mpn": "NIVA-D1",
      "brand": {
        "@type": "Brand",
        "name": "NIVA"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://nivaliving.com/d1",
        "priceCurrency": "INR",
        "price": "600000",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "NIVA Elevated Living"
        }
      }
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NIVA D2 Grounded Luxury Dome Cabin",
    "image": [
      "https://nivaliving.com/images/products/d2-hero-twilight.jpg",
      "https://nivaliving.com/images/products/d2-brand-sign.jpg",
      "https://nivaliving.com/images/products/d2-grounded-lawn.jpg"
    ],
    "description": "14 ft nominal grounded luxury dome cabin engineered for seamless garden, resort plinth, and landscape integration with panoramic star-gazing glass skylight, attached ensuite bathroom, and Bakelite architectural cladding.",
    "sku": "NIVA-D2-14FT",
    "mpn": "NIVA-D2",
    "brand": {
      "@type": "Brand",
      "name": "NIVA"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://nivaliving.com/d2",
      "priceCurrency": "INR",
      "price": "600000",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "NIVA Elevated Living"
      }
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://nivaliving.com${item.path}`
    }))
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

