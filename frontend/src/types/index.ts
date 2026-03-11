// Types for Nuna Coffee Shop

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  address: {
    street: string;
    district: string;
    postal: string;
    city: string;
    country: string;
  };
  hours: string;
  priceRange: string;
  rating: number;
  totalReviews: number;
  instagram: string;
  googleMaps: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Specialty {
  category: string;
  image: string;
  items: string[];
}

export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuData {
  cafe: MenuItem[];
  bebidas: MenuItem[];
  brunch: MenuItem[];
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  scores?: {
    comida: number;
    servicio: number;
    ambiente: number;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  points: number;
  role: 'user' | 'admin';
  emailConfirmed?: boolean;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
}

export interface Reward {
  _id: string;
  name: string;
  pointsRequired: number;
  description: string;
  active: boolean;
}

export interface QRCode {
  id: string;
  code: string;
  amount: number;
  points: number;
  qrImageUrl: string;
  used?: boolean;
  usedBy?: string;
  usedAt?: Date;
  createdAt: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
