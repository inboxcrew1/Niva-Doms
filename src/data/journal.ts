export interface JournalEntry {
  id: string;
  category: "Concept" | "Design" | "Interior" | "Architecture" | "Landscape" | "Details";
  title: string;
  description: string;
  image: string;
  date: string;
}

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "journal-1",
    category: "Concept",
    title: "Geometric Purity in Nature",
    description: "Exploring faceted architectural geometry as a timeless bridge between human shelter and wild landscapes.",
    image: "/images/hero/hero-home.jpg",
    date: "2026",
  },
  {
    id: "journal-2",
    category: "Architecture",
    title: "The Three-Pillar Elevation",
    description: "Engineering NIVA D1's structural tripod support system to touch the earth lightly while maximizing panoramic vantage.",
    image: "/images/products/d1-mountain-ridge.jpg",
    date: "2026",
  },
  {
    id: "journal-3",
    category: "Interior",
    title: "The Star-Canopy Suite",
    description: "Framing the celestial night sky through overhead geometric skylights from the comfort of a luxury queen bed.",
    image: "/images/products/niva-interior-suite.jpg",
    date: "2026",
  },
  {
    id: "journal-4",
    category: "Landscape",
    title: "Alpine Reflections",
    description: "NIVA D1 perched along glacial waters and pine forests, reflecting twilight hues across snow-capped peaks.",
    image: "/images/products/d1-hero-night.jpg",
    date: "2026",
  },
  {
    id: "journal-5",
    category: "Design",
    title: "Grounded Harmony in Tea Estates",
    description: "NIVA D2 integrated directly into rolling tea plantations, blending dark charcoal tones with emerald hills.",
    image: "/images/products/d2-grounded-tea-estate.jpg",
    date: "2026",
  },
  {
    id: "journal-6",
    category: "Details",
    title: "Materiality & Finish Expressions",
    description: "Contrasting architectural multi-toned panels: Deep Crimson, Matte Charcoal, Royal Blue, and Arctic White.",
    image: "/images/products/d1-variants-collage.jpg",
    date: "2026",
  },
];
