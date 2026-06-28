export interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  phone: string;
  instagram: string;
  products: number;
  verified: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  vendorId: number;
  vendorName: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "MJ Fashion Store",
    category: "Women's Fashion",
    location: "Lekki, Lagos",
    rating: 4.8,
    reviews: 312,
    description: "Premium women's fashion store specializing in contemporary African and Western wear. We source the finest fabrics and deliver quality pieces that celebrate the modern African woman.",
    image: "https://images.unsplash.com/photo-1558171813-2f72d2a80ae8?w=400&h=300&fit=crop",
    phone: "+234 801 234 5678",
    instagram: "@mjfashionstore",
    products: 48,
    verified: true,
  },
  {
    id: 2,
    name: "Classic Wear",
    category: "Men's Fashion",
    location: "Victoria Island, Lagos",
    rating: 4.6,
    reviews: 198,
    description: "Your go-to destination for sharp, sophisticated menswear. From boardroom suits to casual weekend looks, Classic Wear has every man covered in style.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    phone: "+234 802 345 6789",
    instagram: "@classicwearng",
    products: 36,
    verified: true,
  },
  {
    id: 3,
    name: "Urban Style",
    category: "Shoes & Accessories",
    location: "Ikeja, Lagos",
    rating: 4.5,
    reviews: 245,
    description: "Trendsetting footwear and accessories for the fashion-conscious. We bring the latest global shoe trends to Lagos streets.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    phone: "+234 803 456 7890",
    instagram: "@urbanstyleng",
    products: 62,
    verified: true,
  },
  {
    id: 4,
    name: "Adire Collections",
    category: "African Wear",
    location: "Surulere, Lagos",
    rating: 4.9,
    reviews: 421,
    description: "Celebrating African textile heritage through modern fashion. Specializing in authentic Adire, Ankara, and Aso-oke collections handcrafted by skilled artisans.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop",
    phone: "+234 804 567 8901",
    instagram: "@adirecollections",
    products: 79,
    verified: true,
  },
  {
    id: 5,
    name: "LuxeBags Lagos",
    category: "Bags",
    location: "Ikoyi, Lagos",
    rating: 4.7,
    reviews: 163,
    description: "Luxury and premium handbags, clutches, and totes for every occasion. Authentic brands and local designer pieces curated for the discerning Lagos woman.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop",
    phone: "+234 805 678 9012",
    instagram: "@luxebagslagos",
    products: 34,
    verified: false,
  },
  {
    id: 6,
    name: "Glam & Gold",
    category: "Accessories",
    location: "Ajah, Lagos",
    rating: 4.4,
    reviews: 89,
    description: "Statement jewelry, hair accessories, and fashion accessories that elevate any outfit. From everyday pieces to special occasion gems.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    phone: "+234 806 789 0123",
    instagram: "@glamandgoldng",
    products: 95,
    verified: false,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Ankara Wrap Dress",
    price: 18500,
    category: "Women",
    vendorId: 1,
    vendorName: "MJ Fashion Store",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    description: "Beautiful vibrant Ankara wrap dress perfect for any occasion. Hand-stitched with premium Nigerian fabric. Available in sizes S-XL.",
    rating: 4.9,
    reviews: 84,
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Agbada Set",
    price: 45000,
    category: "Men",
    vendorId: 2,
    vendorName: "Classic Wear",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4dae?w=400&h=500&fit=crop",
    description: "Premium embroidered Agbada set for ceremonies and special events. Comes with matching trousers and cap. Made from quality lace fabric.",
    rating: 4.8,
    reviews: 52,
    inStock: true,
  },
  {
    id: 3,
    name: "Leather Loafers",
    price: 22000,
    category: "Shoes",
    vendorId: 3,
    vendorName: "Urban Style",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=500&fit=crop",
    description: "Handcrafted genuine leather loafers. Comfortable for all-day wear with a sleek, professional finish. Available in sizes 39-45.",
    rating: 4.7,
    reviews: 67,
    inStock: true,
  },
  {
    id: 4,
    name: "Adire Blouse",
    price: 12000,
    category: "Women",
    vendorId: 4,
    vendorName: "Adire Collections",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    description: "Authentic hand-dyed Adire blouse using traditional Yoruba tie-dye technique. Each piece is unique. Pairs beautifully with jeans or ankara skirts.",
    rating: 5.0,
    reviews: 103,
    inStock: true,
  },
  {
    id: 5,
    name: "Designer Handbag",
    price: 35000,
    category: "Bags",
    vendorId: 5,
    vendorName: "LuxeBags Lagos",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    description: "Premium faux leather structured handbag with gold-tone hardware. Spacious interior with multiple compartments. Perfect for work and outings.",
    rating: 4.6,
    reviews: 39,
    inStock: true,
  },
  {
    id: 6,
    name: "Gold Statement Necklace",
    price: 8500,
    category: "Accessories",
    vendorId: 6,
    vendorName: "Glam & Gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
    description: "Bold gold-plated statement necklace inspired by traditional African jewelry. Makes any outfit instantly glamorous.",
    rating: 4.5,
    reviews: 28,
    inStock: true,
  },
  {
    id: 7,
    name: "Kaftan Evening Gown",
    price: 28000,
    category: "Women",
    vendorId: 1,
    vendorName: "MJ Fashion Store",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
    description: "Elegant kaftan-style evening gown with intricate embroidery at the neckline and hem. Lightweight and flowing fabric, ideal for events.",
    rating: 4.8,
    reviews: 71,
    inStock: true,
  },
  {
    id: 8,
    name: "Men's Senator Suit",
    price: 32000,
    category: "Men",
    vendorId: 2,
    vendorName: "Classic Wear",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop",
    description: "Stylish two-piece senator suit in premium cotton blend. Sharp and comfortable for office, events, and casual outings.",
    rating: 4.7,
    reviews: 44,
    inStock: false,
  },
  {
    id: 9,
    name: "Platform Heels",
    price: 17500,
    category: "Shoes",
    vendorId: 3,
    vendorName: "Urban Style",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
    description: "Trendy platform heels in black and nude. Comfortable padded insole. Adds 4 inches of height with effortless style.",
    rating: 4.4,
    reviews: 56,
    inStock: true,
  },
];

export const categories = ["All", "Women", "Men", "Shoes", "Bags", "Accessories", "African Wear"];
