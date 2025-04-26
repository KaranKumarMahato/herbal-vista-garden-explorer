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
    imageSrc: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5", // Fresh ginger root
    imageAlt: "Fresh ginger root and slices",
    regions: ["Southeast Asia", "India", "China"],
    categories: ["Digestive health", "Anti-inflammatory", "Pain relief"],
    gallery: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5", // Main ginger image
      "https://images.unsplash.com/photo-1615485290466-c66745292375", // Ginger slices
      "https://images.unsplash.com/photo-1615485290456-5e27fe3f6b9f", // Ginger plant
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
    imageSrc: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71", // Neem tree with leaves
    imageAlt: "Neem tree with fresh green leaves",
    regions: ["India", "Southeast Asia", "Africa"],
    categories: ["Skin health", "Immunity", "Dental health"],
    gallery: [
      "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71", // Main neem image
      "https://images.unsplash.com/photo-1588590560447-5e27fe3f6b8e", // Neem leaves close-up
      "https://images.unsplash.com/photo-1588590560456-5e27fe3f6b9f", // Neem products
    ]
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    botanicalName: "Eucalyptus globulus",
    commonNames: ["Blue Gum", "Neelgiri", "Safeda"],
    description: "Eucalyptus is a fast-growing evergreen tree native to Australia. The leaves contain essential oils with powerful medicinal properties. Its distinctive menthol-like aroma has made it popular worldwide for medicinal and aromatherapy uses.",
    habitat: "Native to Australia, now cultivated widely in subtropical and temperate regions worldwide. Prefers well-drained soils and full sun exposure.",
    medicinalUses: [
      "Relieves respiratory conditions like colds, congestion, and bronchitis",
      "Has antimicrobial and antifungal properties",
      "Reduces pain and inflammation when applied topically",
      "Helps clear nasal passages and sinuses",
      "Used in steam inhalation for respiratory relief"
    ],
    cultivation: "Grows best in well-draining soil with full sun exposure. Drought-tolerant once established. Needs protection from frost when young. Space trees at least 8-12 feet apart as they grow quickly and become quite large.",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    imageAlt: "Eucalyptus leaves and branches with distinctive silvery-blue color",
    regions: ["Australia", "India", "Worldwide"],
    categories: ["Respiratory health", "Anti-inflammatory", "Immunity"],
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    ]
  },
  {
    id: "mint",
    name: "Mint",
    botanicalName: "Mentha piperita",
    commonNames: ["Peppermint", "Pudina", "Mentha"],
    description: "Mint is a perennial herb known for its distinctive fresh aroma. It belongs to the Lamiaceae family and has been used both as a culinary herb and for its medicinal properties throughout human history.",
    habitat: "Originally native to Europe and the Middle East, now cultivated worldwide. Thrives in moist, partially shaded areas with rich soil.",
    medicinalUses: [
      "Relieves digestive issues like indigestion, gas and bloating",
      "Soothes irritable bowel syndrome symptoms",
      "Relieves headaches when applied as oil",
      "Freshens breath and treats oral health issues",
      "Helps ease respiratory congestion and cold symptoms"
    ],
    cultivation: "Grows vigorously in moist, rich soil with partial shade. Plant in containers to prevent spreading, as mint can be invasive. Water regularly but avoid waterlogging. Harvest leaves before flowering for best flavor and medicinal properties.",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    imageAlt: "Fresh green mint leaves with distinctive serrated edges",
    regions: ["Europe", "Middle East", "Worldwide", "India"],
    categories: ["Digestive health", "Respiratory health", "Pain relief"],
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    ]
  },
  {
    id: "lavender",
    name: "Lavender",
    botanicalName: "Lavandula angustifolia",
    commonNames: ["English Lavender", "Common Lavender"],
    description: "Lavender is a flowering plant in the mint family known for its beautiful purple blooms and distinctive floral scent. It has been used for centuries for its calming properties and pleasant aroma.",
    habitat: "Native to the Mediterranean region, thrives in sunny locations with well-drained, alkaline soil.",
    medicinalUses: [
      "Reduces anxiety and stress",
      "Improves sleep quality and treats insomnia",
      "Relieves headaches and migraines",
      "Has antiseptic and anti-inflammatory properties for wound healing",
      "Helps alleviate skin conditions like acne and eczema"
    ],
    cultivation: "Plant in full sun with well-draining soil. Space plants 2-3 feet apart as they need good air circulation. Drought-tolerant once established. Prune after flowering to maintain shape and promote bushier growth.",
    imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    imageAlt: "Purple lavender flowers growing in a field",
    regions: ["Mediterranean", "Europe", "Worldwide"],
    categories: ["Stress relief", "Sleep aid", "Skin health"],
    gallery: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ]
  },
  {
    id: "giloy",
    name: "Giloy",
    botanicalName: "Tinospora cordifolia",
    commonNames: ["Guduchi", "Amrita", "Heart-leaved Moonseed"],
    description: "Giloy is a climbing shrub that grows on other trees with heart-shaped leaves. It is one of the most valued herbs in Ayurvedic medicine, often referred to as 'Amrita', which means 'the root of immortality'.",
    habitat: "Native to tropical regions of India, Myanmar and Sri Lanka. Grows in deciduous and dry forests.",
    medicinalUses: [
      "Boosts immune system function",
      "Treats chronic fever and recurrent infections",
      "Reduces symptoms of arthritis and gout",
      "Helps manage diabetes by regulating blood sugar",
      "Detoxifies liver and blood"
    ],
    cultivation: "Grows well in tropical and subtropical climates. Can be propagated using stem cuttings during monsoon season. Needs partial shade and a support structure for climbing. Prefers well-draining, loamy soil.",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    imageAlt: "Climbing giloy plant with heart-shaped green leaves",
    regions: ["India", "Southeast Asia"],
    categories: ["Immunity", "Detoxification", "Anti-inflammatory"],
    gallery: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    ]
  },
  {
    id: "bael",
    name: "Bael",
    botanicalName: "Aegle marmelos",
    commonNames: ["Wood Apple", "Bengal Quince", "Bilva"],
    description: "Bael is a slow-growing, medium sized tree with fragrant flowers and sweet-scented fruit. Every part of the tree has medicinal value, but the fruit is especially prized in traditional medicine systems.",
    habitat: "Native to the Indian subcontinent and Southeast Asia. Grows in dry forests and plains.",
    medicinalUses: [
      "Treats chronic diarrhea and dysentery",
      "Relieves constipation and other digestive disorders",
      "Manages diabetes and blood sugar levels",
      "Reduces inflammation in the digestive tract",
      "Supports cardiovascular health"
    ],
    cultivation: "Grows in various soil types but prefers deep, well-drained soil. Drought-resistant once established. Requires full sun exposure and occasional deep watering. Takes 5-7 years to bear fruit.",
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    imageAlt: "Bael tree with round woody fruit and green leaves",
    regions: ["India", "Southeast Asia"],
    categories: ["Digestive health", "Anti-inflammatory", "Immunity"],
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    ]
  },
  {
    id: "fennel",
    name: "Fennel",
    botanicalName: "Foeniculum vulgare",
    commonNames: ["Saunf", "Sweet Fennel", "Florence Fennel"],
    description: "Fennel is an aromatic herb with feathery leaves and yellow flowers. Both the seeds and the bulb are used in cooking and medicine. Its distinctive licorice-like flavor has made it popular in cuisines worldwide.",
    habitat: "Native to the Mediterranean region, now cultivated worldwide in temperate and subtropical regions.",
    medicinalUses: [
      "Relieves digestive issues like bloating, gas, and indigestion",
      "Reduces infant colic symptoms",
      "Promotes lactation in nursing mothers",
      "Has antimicrobial and anti-inflammatory properties",
      "Soothes respiratory conditions and coughs"
    ],
    cultivation: "Grows best in well-drained, fertile soil with full sun exposure. Drought-tolerant once established. Space plants 12-18 inches apart. Harvest seeds when they turn grayish-brown.",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    imageAlt: "Fennel plant with feathery green leaves and yellow flower umbels",
    regions: ["Mediterranean", "Europe", "India", "Worldwide"],
    categories: ["Digestive health", "Women's health", "Respiratory health"],
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    ]
  },
  {
    id: "brahmi",
    name: "Brahmi",
    botanicalName: "Bacopa monnieri",
    commonNames: ["Water Hyssop", "Herb of Grace", "Jalabrahmi"],
    description: "Brahmi is a creeping herb with small white flowers and succulent leaves. It has been used in Ayurvedic medicine for centuries and is considered one of the most important herbs for brain function.",
    habitat: "Native to wetlands and marshy areas across India, Australia, Europe, Africa, Asia, and North and South America.",
    medicinalUses: [
      "Enhances memory, concentration and learning ability",
      "Reduces anxiety and stress",
      "Treats epilepsy and prevents seizures",
      "Has antioxidant properties that protect brain cells",
      "Improves symptoms of ADHD and cognitive decline"
    ],
    cultivation: "Prefers wet, boggy conditions and partial shade. Can be grown in water gardens or in containers with consistently moist soil. Propagate through stem cuttings or division.",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    imageAlt: "Brahmi plant with small round green leaves growing near water",
    regions: ["India", "Australia", "Worldwide"],
    categories: ["Brain health", "Stress relief", "Antioxidant"],
    gallery: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    ]
  },
  {
    id: "ajwain",
    name: "Ajwain",
    botanicalName: "Trachyspermum ammi",
    commonNames: ["Bishop's Weed", "Carom Seeds", "Ajowan"],
    description: "Ajwain is a small herbaceous plant that produces small, oval-shaped, seed-like fruits often mistakenly called seeds. It has a strong thyme-like flavor and aroma due to the presence of thymol oil.",
    habitat: "Native to the eastern Mediterranean, especially Egypt, and now cultivated in many parts of India and the Middle East.",
    medicinalUses: [
      "Relieves indigestion, gas, and bloating",
      "Treats respiratory conditions like asthma and bronchitis",
      "Has antimicrobial properties that fight infections",
      "Reduces joint pain and inflammation",
      "Aids weight loss by improving digestive efficiency"
    ],
    cultivation: "Grows well in well-drained soil with full sun exposure. Drought-tolerant once established. Seeds are ready for harvest when the flowers fade and the seed heads turn brown.",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    imageAlt: "Dried ajwain seeds with small greenish-gray color and distinctive aroma",
    regions: ["India", "Middle East", "Egypt"],
    categories: ["Digestive health", "Respiratory health", "Anti-inflammatory"],
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    ]
  },
  {
    id: "sathi",
    name: "Sathi",
    botanicalName: "Hedychium spicatum",
    commonNames: ["Kapur Kachri", "Spiked Ginger Lily", "Shati"],
    description: "Sathi is a rhizomatous perennial herb with beautiful white flowers and aromatic rhizomes. Its rhizome has been used in traditional Ayurvedic and Unani medicine systems for centuries.",
    habitat: "Native to the Himalayas and other mountainous regions of India, found at elevations between 1000-3000 meters.",
    medicinalUses: [
      "Treats respiratory conditions like asthma, bronchitis, and cough",
      "Has anti-inflammatory and analgesic properties",
      "Acts as an expectorant for clearing phlegm",
      "Improves digestion and stimulates appetite",
      "Used in skin disorders and as a blood purifier"
    ],
    cultivation: "Prefers moist, rich soil in partial shade. Grows well in forest-like conditions. Propagate by dividing rhizomes in spring. Protect from strong winds and harsh sun.",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    imageAlt: "Sathi plant with long leaves and white fragrant flowers",
    regions: ["India", "Himalayas", "Nepal"],
    categories: ["Respiratory health", "Anti-inflammatory", "Digestive health"],
    gallery: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    ]
  }
];

const turmericEntry = plants.find(plant => plant.id === "turmeric");
if (turmericEntry) {
  turmericEntry.imageSrc = "/lovable-uploads/e6808b44-89d9-48a7-95de-d753e45bdd97.png";
  turmericEntry.imageAlt = "Fresh turmeric root with soil and roots, showing natural growth";
  turmericEntry.gallery = [
    "/lovable-uploads/e6808b44-89d9-48a7-95de-d753e45bdd97.png"
  ];
}

const gingerEntry = plants.find(plant => plant.id === "ginger");
if (gingerEntry) {
  gingerEntry.imageSrc = "/lovable-uploads/0eecc26f-7be6-4751-9839-bde08b0da59b.png";
  gingerEntry.imageAlt = "Fresh ginger roots with green stalks on a brown background";
  gingerEntry.gallery = [
    "/lovable-uploads/0eecc26f-7be6-4751-9839-bde08b0da59b.png"
  ];
}

const neemEntry = plants.find(plant => plant.id === "neem");
if (neemEntry) {
  neemEntry.imageSrc = "/lovable-uploads/01da3ec4-637e-4fe2-9653-70cdccd79b6b.png";
  neemEntry.imageAlt = "Neem leaves on a branch against a dark background";
  neemEntry.gallery = [
    "/lovable-uploads/01da3ec4-637e-4fe2-9653-70cdccd79b6b.png"
  ];
}

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
  "Dental health",
  "Brain health",
  "Sleep aid",
  "Detoxification",
  "Women's health",
];

export const regions = [
  "India",
  "Southeast Asia",
  "Middle East",
  "Africa",
  "China",
  "Mediterranean",
  "Worldwide",
  "Europe",
  "Nepal",
  "Himalayas",
  "Egypt",
  "Australia"
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
