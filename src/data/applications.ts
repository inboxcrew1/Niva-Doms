export interface ApplicationItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  idealFor: string;
  recommendedModel: string;
}

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "resorts",
    title: "RESORTS",
    subtitle: "High-Yield Destination Inventory",
    category: "LUXURY RESORTS",
    tagline: "Create memorable accommodation inventory for existing hospitality properties.",
    description: "Expand resort key counts swiftly with iconic architectural units that command premium ADRs. NIVA provides resort operators with experiential standalone suites that require zero disruptive heavy construction.",
    benefits: [
      "Rapid deployment without heavy on-site civil disruption",
      "Distinctive architectural character that enhances resort photography and marketing",
      "Complete turnkey ensuite guest experience",
      "Flexible placement across lawns, hillsides, and waterfront zones",
    ],
    image: "/images/hero/hero-home.jpg",
    idealFor: "Boutique luxury resorts, hill station properties, destination retreats",
    recommendedModel: "NIVA D1 (Elevated) or NIVA D2 (Grounded)",
  },
  {
    id: "farm-stays",
    title: "FARM STAYS",
    subtitle: "Rural Hospitality & Agro-Tourism",
    category: "AGRO-TOURISM",
    tagline: "Add premium accommodation to countryside and agricultural destinations.",
    description: "Transform private farms, orchards, tea estates, and vineyards into high-end experiential getaways. NIVA cabins provide guests with rustic nature immersion without compromising on modern luxury comforts.",
    benefits: [
      "Minimal ground disturbance preserves agricultural landscape",
      "Elevated perspective over plantations, valleys, and orchards",
      "High aesthetic appeal attracting urban travelers seeking countryside luxury",
      "Independent self-contained unit operations",
    ],
    image: "/images/products/d2-grounded-tea-estate.jpg",
    idealFor: "Coffee estates, organic farms, tea plantations, countryside sanctuaries",
    recommendedModel: "NIVA D2 (Grounded)",
  },
  {
    id: "glamping-retreats",
    title: "GLAMPING RETREATS",
    subtitle: "Elevated Outdoor Hospitality",
    category: "GLAMPING SITES",
    tagline: "Create a more refined interpretation of outdoor hospitality.",
    description: "Move beyond fabric tents with durable, climate-controlled architectural cabins. NIVA delivers weatherproof luxury, solid acoustic isolation, and long-term durability for discerning glamping operators.",
    benefits: [
      "All-weather durability compared to fabric structures",
      "Superior acoustic privacy and climate control",
      "Ensuite private bathrooms built directly into the cabin footprint",
      "Stunning geometric silhouette creating viral social shareability",
    ],
    image: "/images/products/d1-lake-mountain.jpg",
    idealFor: "Mountain camps, lakeside retreats, desert glamping destinations",
    recommendedModel: "NIVA D1 (Elevated)",
  },
  {
    id: "eco-retreats",
    title: "ECO RETREATS",
    subtitle: "Low-Impact Nature Sanctuaries",
    category: "ECO SANCTUARIES",
    tagline: "Bring modern comfort into nature-led experiences.",
    description: "Designed with sensitive ecosystems in mind. NIVA D1's three-pillar foundation ensures minimal ground impact, allowing lush flora, natural water flows, and terrain to remain undisturbed.",
    benefits: [
      "Three-pillar elevated foundation minimizes soil footprint",
      "Preserves root systems and natural topographical contours",
      "Integrates seamlessly with renewable power and off-grid utilities",
      "Harmonious exterior palette that complements natural wilderness",
    ],
    image: "/images/products/d1-mountain-ridge.jpg",
    idealFor: "Wildlife reserves, forest buffer zones, eco-reserves",
    recommendedModel: "NIVA D1 (Elevated)",
  },
  {
    id: "private-getaways",
    title: "PRIVATE GETAWAYS",
    subtitle: "Bespoke Personal Escapes",
    category: "PRIVATE ESTATES",
    tagline: "Create distinctive private accommodation spaces.",
    description: "For estate owners seeking a private guest pavilion, creative studio, or secluded weekend sanctuary. NIVA offers an architecturally sophisticated private haven on your personal property.",
    benefits: [
      "Plug-and-play guest accommodation for private estates",
      "Architectural statement piece that elevates property value",
      "Private retreat for meditation, creative work, or weekend escapes",
      "Full self-contained suite with bathroom and smart amenities",
    ],
    image: "/images/products/d1-hero-night.jpg",
    idealFor: "Private farmhouses, vacation homes, personal wellness retreats",
    recommendedModel: "NIVA D1 or NIVA D2",
  },
  {
    id: "hospitality-developments",
    title: "HOSPITALITY DEVELOPMENTS",
    subtitle: "Master-Planned Destinations",
    category: "MASTER DEVELOPMENTS",
    tagline: "Use NIVA as part of a larger destination accommodation concept.",
    description: "Master planners and hospitality developers can cluster NIVA units to create cohesive, modular destination villages. Scalable, repeatable, and architectural unified.",
    benefits: [
      "Modular scalability for phased resort rollouts",
      "Consistent manufacturing quality and hospitality standards",
      "Shortened project gestation compared to conventional construction",
      "Unified architectural vocabulary across large acreages",
    ],
    image: "/images/products/d1-triple-units.jpg",
    idealFor: "Master-planned tourism circuits, wellness villages, destination projects",
    recommendedModel: "Custom Blend of D1 & D2",
  },
];
