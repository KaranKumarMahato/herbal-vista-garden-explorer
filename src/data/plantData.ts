
export interface Plant {
  id: string;
  name: string;
  botanicalName: string;
  commonNames: string[];
  description: string;
  habitat: string;
  medicinalUses: string[];
  cultivation: string;
  imageSrc: string;
  imageAlt: string;
  regions: string[];
  categories: string[];
  gallery: string[];
}

export const plants: Plant[] = [
  {
    id: "tulsi",
    name: "Tulsi",
    botanicalName: "Ocimum sanctum",
    commonNames: ["Holy Basil", "Sacred Basil"],
    description: "Tulsi is an aromatic plant from the family Lamiaceae. It is widely grown and cultivated throughout India for religious and medicinal purposes. It is one of the holiest herbs in India.",
    habitat: "Native to tropical Asia, flourishes in humid and temperate climates.",
    medicinalUses: [
      "Treats respiratory disorders like bronchitis and asthma",
      "Anti-inflammatory and analgesic properties",
      "Reduces stress and anxiety",
      "Enhances immunity",
      "Aids digestion and metabolism"
    ],
    cultivation: "Grows well in moist, fertile soil with good drainage. Requires regular watering and moderate sunlight. Seeds should be sown at the onset of the monsoon season.",
    imageSrc: "/lovable-uploads/28f89618-247d-4c2f-8fa0-4272c747f771.png",
    imageAlt: "Fresh Tulsi (Holy Basil) plant with green leaves and a flowering stem",
    regions: ["India", "Southeast Asia"],
    categories: ["Respiratory health", "Stress relief", "Immunity"],
    gallery: [
      "/lovable-uploads/28f89618-247d-4c2f-8fa0-4272c747f771.png"
    ]
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    botanicalName: "Withania somnifera",
    commonNames: ["Indian Ginseng", "Winter Cherry"],
    description: "Ashwagandha is one of the most powerful herbs in Ayurvedic healing, used for over 3,000 years. It is known as 'Indian Ginseng' for its rejuvenating properties.",
    habitat: "Native to India, Middle East, and parts of Africa, thrives in dry regions and withstands drought conditions.",
    medicinalUses: [
      "Reduces cortisol levels and helps manage stress",
      "Boosts brain function and improves memory",
      "Reduces blood sugar levels",
      "Has anti-cancer properties",
      "Increases testosterone levels and fertility in men"
    ],
    cultivation: "Grows best in dry, hot climates in sandy loam or light red soil with good drainage. Seeds should be sown at the beginning of the rainy season.",
    imageSrc: "/lovable-uploads/013bb2d3-d3c6-4af2-ae1d-b3bf2e3fb9bd.png",
    imageAlt: "Ashwagandha plant with green leaves and red berries in a garden setting",
    regions: ["India", "Middle East", "Africa"],
    categories: ["Stress relief", "Brain function", "Men's health"],
    gallery: [
      "/lovable-uploads/013bb2d3-d3c6-4af2-ae1d-b3bf2e3fb9bd.png"
    ]
  },
  {
    id: "ginger",
    name: "Ginger",
    botanicalName: "Zingiber officinale",
    commonNames: ["Adrak", "Ginger Root"],
    description: "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine. It is a herbaceous perennial which grows annual pseudostems.",
    habitat: "Native to Southeast Asia, particularly India, thrives in warm, humid climates.",
    medicinalUses: [
      "Relieves nausea and morning sickness",
      "Reduces muscle pain and soreness",
      "Has anti-inflammatory effects",
      "Lowers blood sugar levels",
      "Treats chronic indigestion and menstrual pain"
    ],
    cultivation: "Grows best in loose, loamy soil rich in organic matter with good drainage. Requires partial shade and regular watering.",
    imageSrc: "/lovable-uploads/0eecc26f-7be6-4751-9839-bde08b0da59b.png",
    imageAlt: "Fresh ginger roots with green stalks on a brown background",
    regions: ["Southeast Asia", "India", "China"],
    categories: ["Digestive health", "Anti-inflammatory", "Pain relief"],
    gallery: [
      "/lovable-uploads/0eecc26f-7be6-4751-9839-bde08b0da59b.png"
    ]
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    commonNames: ["Ghritkumari", "Burn Plant", "Medicinal Aloe"],
    description: "Aloe vera is a succulent plant species that is found only in cultivation, having no naturally occurring populations. It is used for agricultural and medicinal purposes.",
    habitat: "Originated in the Arabian Peninsula, now grows in tropical, semi-tropical, and arid climates worldwide.",
    medicinalUses: [
      "Soothes sunburn and promotes wound healing",
      "Treats constipation",
      "Improves digestive health",
      "Helps with skin ailments like psoriasis and acne",
      "Has antioxidant and antibacterial properties"
    ],
    cultivation: "Grows well in sandy, well-drained soil with minimal water. Requires sunny conditions but can tolerate some shade.",
    imageSrc: "/lovable-uploads/34c4ef47-a55b-40e4-a0b4-70d0a0328492.png",
    imageAlt: "Close-up of fresh Aloe Vera plants with pointed green leaves in soil",
    regions: ["Worldwide", "Mediterranean", "Africa"],
    categories: ["Skin health", "Digestive health", "Wound healing"],
    gallery: [
      "/lovable-uploads/34c4ef47-a55b-40e4-a0b4-70d0a0328492.png"
    ]
  },
  {
    id: "turmeric",
    name: "Turmeric",
    botanicalName: "Curcuma longa",
    commonNames: ["Haldi", "Indian Saffron"],
    description: "Turmeric is a flowering plant of the ginger family, Zingiberaceae. Its roots/rhizomes are used in cooking and for medicinal purposes.",
    habitat: "Native to Southeast Asia and the Indian subcontinent, requires warm and humid climate with plenty of rainfall.",
    medicinalUses: [
      "Has powerful anti-inflammatory effects",
      "Increases antioxidant capacity of the body",
      "Improves brain function and lowers risk of brain diseases",
      "Reduces risk of heart disease",
      "Helps prevent and potentially treat cancer and Alzheimer's disease"
    ],
    cultivation: "Grows best in well-drained soil with moderate water. Prefers partial shade in hot climates. Rhizomes are planted at the beginning of the rainy season.",
    imageSrc: "/lovable-uploads/e6808b44-89d9-48a7-95de-d753e45bdd97.png",
    imageAlt: "Fresh turmeric root with soil and roots, showing natural growth",
    regions: ["India", "Southeast Asia"],
    categories: ["Anti-inflammatory", "Antioxidant", "Brain health"],
    gallery: [
    "/lovable-uploads/e6808b44-89d9-48a7-95de-d753e45bdd97.png"
    ]
  },
  {
    id: "neem",
    name: "Neem",
    botanicalName: "Azadirachta indica",
    commonNames: ["Indian Lilac", "Margosa"],
    description: "Neem is a tree in the mahogany family Meliaceae. It's a fast-growing tree native to the Indian subcontinent and now naturalized in many tropical areas worldwide.",
    habitat: "Native to the Indian subcontinent, thrives in tropical and semi-tropical regions.",
    medicinalUses: [
      "Treats skin disorders like acne, psoriasis, and eczema",
      "Has antibacterial, antifungal, and antiviral properties",
      "Purifies blood and detoxifies the body",
      "Boosts immune system",
      "Treats dental issues like gingivitis"
    ],
    cultivation: "Grows in all types of soil, particularly preferring dry, stony, shallow, or sandy soils. Highly drought-resistant and tolerant to high temperatures.",
    imageSrc: "/lovable-uploads/01da3ec4-637e-4fe2-9653-70cdccd79b6b.png",
    imageAlt: "Neem leaves on a branch against a dark background",
    regions: ["India", "Southeast Asia", "Africa"],
    categories: ["Skin health", "Immunity", "Dental health"],
    gallery: [
      "/lovable-uploads/01da3ec4-637e-4fe2-9653-70cdccd79b6b.png"
    ]
  }
];

export const categories = [
  "Respiratory health",
  "Stress relief",
  "Immunity",
  "Brain function", 
  "Men's health",
  "Digestive health",
  "Anti-inflammatory",
  "Pain relief",
  "Skin health",
  "Wound healing",
  "Antioxidant",
  "Dental health"
];

export const regions = [
  "India",
  "Southeast Asia",
  "Middle East",
  "Africa",
  "China",
  "Mediterranean",
  "Worldwide"
];

export type Tour = {
  id: string;
  title: string;
  description: string;
  image: string;
  plantIds: string[];
};

export const tours: Tour[] = [
  {
    id: "digestive-health",
    title: "Digestive Wellness",
    description: "Explore plants known for their beneficial effects on the digestive system, relieving issues like indigestion, bloating, and constipation.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    plantIds: ["ginger", "aloe-vera", "turmeric"]
  },
  {
    id: "stress-relief",
    title: "Natural Stress Relievers",
    description: "Discover plants that help reduce stress, anxiety, and promote mental wellbeing through traditional practices.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    plantIds: ["ashwagandha", "tulsi"]
  },
  {
    id: "skin-remedies",
    title: "Herbal Skin Remedies",
    description: "Learn about medicinal plants used for treating various skin conditions and promoting skin health naturally.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    plantIds: ["aloe-vera", "neem", "turmeric"]
  }
];

export const getPlantById = (id: string): Plant | undefined => {
  return plants.find(plant => plant.id === id);
};

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};

export const getPlantsByTourId = (tourId: string): Plant[] => {
  const tour = tours.find(t => t.id === tourId);
  if (!tour) return [];
  return tour.plantIds.map(id => getPlantById(id)).filter((plant): plant is Plant => plant !== undefined);
};
