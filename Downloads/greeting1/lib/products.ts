export interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  image: string
  badge?: string
  colors?: string[]
  sizes?: string[]
}

export const products: Product[] = [
  {
    id: "classic-black-snapback",
    name: "Classic Black Snapback",
    price: 45,
    category: "Snapback",
    description:
      "Our signature snapback in timeless black. Premium cotton twill construction with an adjustable snap closure for the perfect fit.",
    image: "/black-snapback-cap-hat-premium.jpg",
    badge: "Best Seller",
    colors: ["Black", "Navy", "Gray"],
    sizes: ["One Size"],
  },
  {
    id: "vintage-dad-hat",
    name: "Vintage Dad Hat",
    price: 38,
    category: "Dad Hat",
    description: "Relaxed fit dad hat with a curved brim. Soft washed cotton for that lived-in feel from day one.",
    image: "/vintage-dad-hat-cap-beige-khaki.jpg",
    colors: ["Khaki", "Olive", "Washed Black"],
    sizes: ["One Size"],
  },
  {
    id: "premium-fitted-cap",
    name: "Premium Fitted Cap",
    price: 55,
    category: "Fitted",
    description: "Structured fitted cap with premium wool blend construction. Clean lines and superior comfort.",
    image: "/fitted-cap-hat-navy-blue-premium.jpg",
    badge: "New",
    colors: ["Navy", "Black", "Burgundy"],
    sizes: ["S/M", "M/L", "L/XL"],
  },
  {
    id: "mesh-trucker-hat",
    name: "Mesh Trucker Hat",
    price: 35,
    category: "Trucker",
    description: "Classic trucker style with breathable mesh back. Perfect for warm days and casual vibes.",
    image: "/trucker-mesh-cap-hat-white-black.jpg",
    colors: ["White/Black", "Navy/White", "Red/White"],
    sizes: ["One Size"],
  },
  {
    id: "wool-blend-beanie",
    name: "Wool Blend Beanie",
    price: 32,
    category: "Beanie",
    description: "Soft wool blend beanie with a cuffed design. Lightweight warmth for cooler seasons.",
    image: "/wool-beanie-hat-gray-knit.jpg",
    colors: ["Gray", "Black", "Camel"],
    sizes: ["One Size"],
  },
  {
    id: "leather-patch-snapback",
    name: "Leather Patch Snapback",
    price: 52,
    category: "Snapback",
    description: "Elevated snapback featuring a genuine leather patch. Premium details for a refined look.",
    image: "/snapback-cap-leather-patch-brown.jpg",
    badge: "Limited",
    colors: ["Brown/Black", "Tan/Navy"],
    sizes: ["One Size"],
  },
  {
    id: "corduroy-dad-hat",
    name: "Corduroy Dad Hat",
    price: 42,
    category: "Dad Hat",
    description: "Textured corduroy dad hat with unstructured crown. Retro style meets modern comfort.",
    image: "/corduroy-dad-hat-cap-forest-green.jpg",
    colors: ["Forest Green", "Rust", "Cream"],
    sizes: ["One Size"],
  },
  {
    id: "performance-fitted",
    name: "Performance Fitted",
    price: 48,
    category: "Fitted",
    description: "Athletic fitted cap with moisture-wicking fabric. Engineered for an active lifestyle.",
    image: "/athletic-fitted-cap-hat-black-performance.jpg",
    colors: ["Black", "Navy", "Charcoal"],
    sizes: ["S/M", "M/L", "L/XL", "XL/XXL"],
  },
]
