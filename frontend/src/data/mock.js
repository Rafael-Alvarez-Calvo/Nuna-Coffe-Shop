// Mock data for Nuna Coffee Shop

export const businessInfo = {
  name: "Nuna Coffee Shop",
  tagline: "Café de especialidad y brunch en Chamberí, Madrid",
  description: "Nuna Coffee Shop es una cafetería de especialidad ubicada en el barrio de Chamberí, Madrid. Nuestro objetivo es servir café excepcional preparado con cuidado, acompañado de brunch casero y dulces artesanales en un ambiente acogedor y tranquilo.",
  phone: "667 06 29 98",
  address: {
    street: "Calle de Modesto Lafuente, 4",
    district: "Chamberí",
    postal: "28010",
    city: "Madrid",
    country: "España"
  },
  hours: "8:00 — 20:00",
  priceRange: "1€ – 10€",
  rating: 4.8,
  totalReviews: 225,
  instagram: "https://www.instagram.com/nunacoffeeshop/",
  googleMaps: "https://maps.google.com/?q=Calle+de+Modesto+Lafuente+4+Madrid",
  coordinates: {
    lat: 40.4316,
    lng: -3.6987
  }
};

export const values = [
  {
    icon: "Coffee",
    title: "Café de especialidad",
    description: "Granos seleccionados y preparación artesanal"
  },
  {
    icon: "Croissant",
    title: "Brunch artesanal",
    description: "Recetas caseras con ingredientes de calidad"
  },
  {
    icon: "Leaf",
    title: "Ambiente acogedor",
    description: "Espacio tranquilo para disfrutar cada momento"
  }
];

export const specialties = [
  {
    category: "Café",
    image: "https://images.unsplash.com/photo-1708430651927-20e2e1f1e8f7",
    items: ["Espresso", "Cappuccino", "Latte", "Café filtrado"]
  },
  {
    category: "Bebidas Especiales",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
    items: ["Matcha latte", "Pumpkin chai", "Chocolate caliente"]
  },
  {
    category: "Brunch",
    image: "https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg",
    items: ["Tostadas gourmet", "Bizcochos caseros", "Repostería artesanal"]
  }
];

export const menu = {
  cafe: [
    { name: "Espresso", price: "2.00€" },
    { name: "Cappuccino", price: "3.20€" },
    { name: "Flat White", price: "3.40€" },
    { name: "Latte", price: "3.50€" },
    { name: "Café filtrado", price: "3.00€" }
  ],
  bebidas: [
    { name: "Matcha Latte", price: "4.00€" },
    { name: "Pumpkin Chai", price: "4.20€" },
    { name: "Chocolate caliente", price: "3.80€" },
    { name: "Brigadeiro con espresso", price: "4.50€" }
  ],
  brunch: [
    { name: "Tostadas especiales", price: "6.50€" },
    { name: "Croissants", price: "2.80€" },
    { name: "Bizcocho de mandarina", price: "3.50€" },
    { name: "Dulces artesanales", price: "3.20€" }
  ]
};

export const gallery = [
  {
    url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Latte art en Nuna Coffee Shop"
  },
  {
    url: "https://images.unsplash.com/photo-1769775079665-43f116618a02",
    alt: "Café y ambiente acogedor"
  },
  {
    url: "https://images.unsplash.com/photo-1766008596001-5fbe283bed0a",
    alt: "Momento de café"
  },
  {
    url: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg",
    alt: "Interior de Nuna Coffee Shop"
  },
  {
    url: "https://images.pexels.com/photos/996219/pexels-photo-996219.jpeg",
    alt: "Espacio minimalista"
  },
  {
    url: "https://images.unsplash.com/photo-1724119201704-5e99f9c56a20",
    alt: "Café en compañía"
  },
  {
    url: "https://images.pexels.com/photos/35204925/pexels-photo-35204925.jpeg",
    alt: "Decoración cálida"
  },
  {
    url: "https://images.pexels.com/photos/18658223/pexels-photo-18658223.jpeg",
    alt: "Diseño moderno"
  },
  {
    url: "https://images.unsplash.com/photo-1534234757579-8ad69d218ad4",
    alt: "Cappuccino perfecto"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Eduardo",
    rating: 5,
    date: "07.10.2025",
    text: "Café de especialidad muy bueno y también ofrecen Brigadeiro, una bolita de chocolate brasileña que combina perfectamente con un espresso. Servicio excelente.",
    scores: { comida: 5, servicio: 5, ambiente: 5 }
  },
  {
    id: 2,
    name: "María García",
    rating: 5,
    date: "15.09.2025",
    text: "Todo fenomenal. El café está espectacular, bien preparado y con mucho mimo. El brunch delicioso.",
    scores: { comida: 5, servicio: 5, ambiente: 5 }
  },
  {
    id: 3,
    name: "Ana López",
    rating: 4,
    date: "22.08.2025",
    text: "El matcha más rico que he probado últimamente. El local es muy agradable.",
    scores: { comida: 5, servicio: 4, ambiente: 4 }
  },
  {
    id: 4,
    name: "Carlos Martín",
    rating: 5,
    date: "10.08.2025",
    text: "Las bebidas están deliciosas y el bizcocho de mandarina increíble.",
    scores: { comida: 5, servicio: 5, ambiente: 5 }
  },
  {
    id: 5,
    name: "Ziv",
    rating: 5,
    date: "07.10.2025",
    text: "Experiencia perfecta en todos los sentidos. Volveré sin duda.",
    scores: { comida: 5, servicio: 5, ambiente: 5 }
  }
];
