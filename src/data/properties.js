
const properties = [
  {
    id: 1,
    title: "The Modern Villa",
    location: "Whitefield, Bengaluru",
    price: 28500000,
    type: "Villa",
    category: "Buy",
    beds: 4,
    baths: 3,
    area: 3200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
    ],
    description: "Experience luxury living in this beautiful modern villa featuring spacious interiors, elegant architecture and premium finishes.",
    amenities: ["Swimming Pool", "Private Garden", "Parking", "Security", "Gym", "Smart Home"]
  },
  {
    id: 2,
    title: "Luxury Sky Apartment",
    location: "Indiranagar, Bengaluru",
    price: 16500000,
    type: "Apartment",
    category: "Buy",
    beds: 3,
    baths: 2,
    area: 1850,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ],
    description: "A sophisticated apartment with beautiful interiors, natural lighting and excellent city connectivity.",
    amenities: ["Clubhouse", "Gym", "Lift", "Parking", "Security"]
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Sarjapur Road, Bengaluru",
    price: 95000,
    type: "House",
    category: "Rent",
    beds: 3,
    baths: 3,
    area: 2100,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200"
    ],
    description: "A spacious family home with contemporary design and a peaceful neighbourhood.",
    amenities: ["Garden", "Parking", "Balcony", "Security"]
  },
  {
    id: 4,
    title: "Minimalist Dream Residence",
    location: "Hebbal, Bengaluru",
    price: 22000000,
    type: "Villa",
    category: "Buy",
    beds: 4,
    baths: 4,
    area: 2800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ],
    description: "An elegant residence designed for modern living with open spaces and premium lifestyle facilities.",
    amenities: ["Pool", "Garden", "Gym", "Parking", "Security"]
  },
  {
    id: 5,
    title: "Premium City Apartment",
    location: "Koramangala, Bengaluru",
    price: 65000,
    type: "Apartment",
    category: "Rent",
    beds: 2,
    baths: 2,
    area: 1400,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200"
    ],
    description: "A beautiful furnished city apartment offering comfort and modern amenities.",
    amenities: ["Furnished", "Lift", "Gym", "Parking"]
  },
  {
    id: 6,
    title: "Modern Commercial Space",
    location: "Electronic City, Bengaluru",
    price: 125000,
    type: "Commercial",
    category: "Rent",
    beds: 0,
    baths: 2,
    area: 2500,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
    ],
    description: "A contemporary commercial office space suitable for businesses looking for a professional working environment.",
    amenities: ["Conference Room", "Parking", "Power Backup", "Security"]
    },
  {
    id: 7,
    title: "Elegant Luxury Villa",
    location: "Sarjapur Road, Bengaluru",
    price: 32500000,
    type: "Villa",
    category: "Buy",
    beds: 5,
    baths: 4,
    area: 3800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "An elegant luxury villa featuring spacious interiors, contemporary architecture, landscaped outdoor spaces and premium finishes.",
    amenities: ["Private Garden", "Swimming Pool", "Smart Home", "Parking", "Security", "Modular Kitchen"]
  },
  {
    id: 8,
    title: "Premium Urban Apartment",
    location: "HSR Layout, Bengaluru",
    price: 12500000,
    type: "Apartment",
    category: "Buy",
    beds: 3,
    baths: 2,
    area: 1750,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A stylish urban apartment with beautiful interiors, natural lighting and convenient access to everyday essentials.",
    amenities: ["Gym", "Lift", "Balcony", "Parking", "Security", "Clubhouse"]
  },
  {
    id: 9,
    title: "Modern Family Residence",
    location: "Yelahanka, Bengaluru",
    price: 18000000,
    type: "House",
    category: "Buy",
    beds: 4,
    baths: 3,
    area: 2600,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A welcoming family residence with generous living spaces, modern facilities and a peaceful neighbourhood.",
    amenities: ["Garden", "Parking", "Security", "Balcony", "Power Backup", "Modern Kitchen"]
  },
  {
    id: 10,
    title: "Contemporary Studio Apartment",
    location: "Whitefield, Bengaluru",
    price: 28000,
    type: "Apartment",
    category: "Rent",
    beds: 1,
    baths: 1,
    area: 850,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A comfortable and modern studio apartment with thoughtfully designed interiors, ideal for professionals.",
    amenities: ["Furnished", "Lift", "Parking", "Security", "Wi-Fi", "Power Backup"]
  },
  {
    id: 11,
    title: "Spacious Family Apartment",
    location: "Marathahalli, Bengaluru",
    price: 45000,
    type: "Apartment",
    category: "Rent",
    beds: 3,
    baths: 2,
    area: 1600,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A spacious rental apartment with comfortable bedrooms, an airy living room and easy access to business hubs.",
    amenities: ["Gym", "Lift", "Balcony", "Parking", "Security", "Clubhouse"]
  },
  {
    id: 12,
    title: "Independent Garden Villa",
    location: "JP Nagar, Bengaluru",
    price: 85000,
    type: "Villa",
    category: "Rent",
    beds: 4,
    baths: 3,
    area: 2900,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A beautiful independent villa with a private garden, spacious rooms and a calm residential atmosphere.",
    amenities: ["Private Garden", "Parking", "Terrace", "Security", "Modular Kitchen", "Power Backup"]
  },
  {
    id: 13,
    title: "Premium Office Workspace",
    location: "Electronic City, Bengaluru",
    price: 95000,
    type: "Commercial",
    category: "Rent",
    beds: 0,
    baths: 2,
    area: 2200,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A modern commercial workspace with an open-plan layout, professional interiors and excellent connectivity.",
    amenities: ["Conference Room", "Parking", "Lift", "Power Backup", "Security", "Air Conditioning"]
  },
  {
    id: 14,
    title: "Luxury Penthouse Residence",
    location: "Indiranagar, Bengaluru",
    price: 42500000,
    type: "Apartment",
    category: "Buy",
    beds: 4,
    baths: 4,
    area: 3400,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "An exclusive penthouse residence with sophisticated interiors, expansive living areas and premium lifestyle amenities.",
    amenities: ["Private Terrace", "Swimming Pool", "Gym", "Smart Home", "Parking", "Security"]
  }
];

export default properties;
