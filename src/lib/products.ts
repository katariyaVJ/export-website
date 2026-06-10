export interface Product {
  id: string;
  name: string;
  category: string;
  desc: string;
  image: string;
  specs?: { label: string; val: string }[];
}

export const products: Product[] = [
  { 
    id: "p1", 
    name: "Premium Bajara", 
    category: "grocery", 
    desc: "Cleaned and sorted Pearl Millet of the highest grade, sourced directly from farmers in the fertile regions of Gujarat and Rajasthan.", 
    image: "/assets/bajra.png",
    specs: [
      { label: "Origin", val: "Gujarat, India" },
      { label: "Purity", val: "99.5% Min" },
      { label: "Moisture", val: "12% Max" },
      { label: "Packaging", val: "25kg/50kg PP Bags" }
    ]
  },
  { 
    id: "p2", 
    name: "Mixed Pulses", 
    category: "grocery", 
    desc: "Export-grade mixed lentils, rich in protein and carefully machine-sorted for purity. Includes Toor, Moong, and Chana dal variants.", 
    image: "/assets/pulses.png",
    specs: [
      { label: "Variety", val: "Premium Mixed" },
      { label: "Sortex", val: "100% Cleaned" },
      { label: "Shelf Life", val: "12 Months" },
      { label: "Packaging", val: "Customized Retail/Bulk" }
    ]
  },
  { 
    id: "p3", 
    name: "Red Chili Powder", 
    category: "spices", 
    desc: "Vibrant color and authentic heat from premium sun-dried chilies. No artificial colors or preservatives added.", 
    image: "/assets/spices.png",
    specs: [
      { label: "Grade", val: "Premium (A-Grade)" },
      { label: "Color", val: "Deep Natural Red" },
      { label: "SHU", val: "25000 - 35000" },
      { label: "Packaging", val: "Vacuum Packed" }
    ]
  },
  { 
    id: "p4", 
    name: "Turmeric Powder", 
    category: "spices", 
    desc: "High curcumin content turmeric, processed in hygienic conditions. Sourced from the finest Erode and Nizamabad regions.", 
    image: "/assets/spices.png",
    specs: [
      { label: "Curcumin", val: "3.5% Min" },
      { label: "Type", val: "Polished Finger/Powder" },
      { label: "Certification", val: "ISO / FSSAI" },
      { label: "Origin", val: "Tamil Nadu/Telangana" }
    ]
  },
  { 
    id: "p5", 
    name: "Cumin Seeds", 
    category: "spices", 
    desc: "Aromatic and bold cumin seeds, machine sorted with 99% purity levels. Known for high essential oil content.", 
    image: "/assets/cumin.png",
    specs: [
      { label: "Machine Clean", val: "99% Purity" },
      { label: "Oil Content", val: "2% - 3%" },
      { label: "Size", val: "Bold Seeds" },
      { label: "Origin", val: "Unjha, Gujarat" }
    ]
  },
  { 
    id: "p6", 
    name: "Premium Incense", 
    category: "aggarbati", 
    desc: "Hand-rolled aromatic incense sticks crafted for spiritual and sensory excellence. Available in Sandalwood, Jasmine, and Rose.", 
    image: "/assets/incense.png",
    specs: [
      { label: "Type", val: "Hand-rolled" },
      { label: "Burning Time", val: "45 - 60 Mins" },
      { label: "Stick Length", val: "9 / 12 Inch" },
      { label: "Fragrance", val: "Natural Oils" }
    ]
  },
  { 
    id: "p7", 
    name: "Alphonso Mango", 
    category: "mango", 
    desc: "The king of mangoes, hand-picked from Ratnagiri farms and export-standardized for elite global markets.", 
    image: "/assets/mango.png",
    specs: [
      { label: "Variety", val: "Ratnagiri Alphonso" },
      { label: "Size", val: "250g - 350g" },
      { label: "Packaging", val: "Corrugated Export Box" },
      { label: "Transport", val: "Air Freight Only" }
    ]
  },
  { 
    id: "p8", 
    name: "Kesar Mango", 
    category: "mango", 
    desc: "Sweet and aromatic Gujarat Kesar mangoes, naturally ripened and sorted for consistent quality.", 
    image: "/assets/kesar_mango.png",
    specs: [
      { label: "Origin", val: "Talala, Gujarat" },
      { label: "Taste", val: "Extremely Sweet" },
      { label: "Season", val: "April - June" },
      { label: "Sorting", val: "Weight-based" }
    ]
  },
  { 
    id: "p9", 
    name: "Fresh Okra", 
    category: "vegetables", 
    desc: "Tender and green export-quality Lady Finger, harvested daily and air-shipped within 24 hours.", 
    image: "/assets/vegetables.png",
    specs: [
      { label: "Length", val: "8cm - 12cm" },
      { label: "Color", val: "Deep Green" },
      { label: "Quality", val: "A-Grade Tender" },
      { label: "Packaging", val: "5kg CFB Box" }
    ]
  },
  { 
    id: "p10", 
    name: "Green Chili", 
    category: "vegetables", 
    desc: "Fresh, spicy green chilies direct from local farms, available in G4 and Bullet varieties.", 
    image: "/assets/green_chili.png",
    specs: [
      { label: "Variety", val: "G4 / Bullet" },
      { label: "Pungency", val: "High" },
      { label: "Sorting", val: "Manual" },
      { label: "Shipment", val: "Air / Sea Reefer" }
    ]
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (cat: string) => products.filter(p => p.category === cat);
export const getAllCategories = () => Array.from(new Set(products.map(p => p.category)));
