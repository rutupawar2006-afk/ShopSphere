const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    description: "High-quality wireless headphones with clear sound and comfortable design.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    category: "Electronics",
    description: "Smart watch with fitness tracking and modern design.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    category: "Fashion",
    description: "Comfortable running shoes suitable for daily exercise and walking.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    category: "Fashion",
    description: "Durable backpack suitable for college, travel and everyday use.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
  {
    id: 5,
    name: "Laptop",
    price: 54999,
    category: "Electronics",
    description: "Powerful laptop suitable for study, development and everyday work.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 899,
    category: "Electronics",
    description: "Ergonomic wireless mouse suitable for laptops and desktop computers.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    description: "Portable Bluetooth speaker with clear sound and compact design.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
  },
  {
    id: 8,
    name: "Digital Camera",
    price: 32999,
    category: "Electronics",
    description: "Digital camera for photography, travel and special moments.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 999,
    category: "Fashion",
    description: "Stylish sunglasses suitable for everyday outdoor use.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 10,
    name: "Casual T-Shirt",
    price: 799,
    category: "Fashion",
    description: "Comfortable casual T-shirt suitable for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 11,
    name: "Travel Shoes",
    price: 2199,
    category: "Fashion",
    description: "Comfortable shoes designed for travel and everyday walking.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },
  {
    id: 12,
    name: "Desk Lamp",
    price: 1299,
    category: "Home",
    description: "Modern desk lamp suitable for study tables and workspaces.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
  },
  {
    id: 13,
    name: "Wall Clock",
    price: 899,
    category: "Home",
    description: "Simple modern wall clock for home or office.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c"
  },
  {
    id: 14,
    name: "Notebook",
    price: 299,
    category: "Stationery",
    description: "Premium notebook suitable for college, office and daily notes.",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c"
  },

  // New Products

  {
    id: 15,
    name: "Gaming Keyboard",
    price: 2499,
    category: "Electronics",
    description: "Mechanical-style gaming keyboard with comfortable keys.",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a"
  },
  {
    id: 16,
    name: "Tablet",
    price: 18999,
    category: "Electronics",
    description: "Lightweight tablet suitable for study, entertainment and browsing.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
  },
  {
    id: 17,
    name: "Smartphone",
    price: 24999,
    category: "Electronics",
    description: "Modern smartphone with a large display and powerful performance.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 18,
    name: "Gaming Controller",
    price: 1999,
    category: "Electronics",
    description: "Comfortable wireless controller for gaming.",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08"
  },
  {
    id: 19,
    name: "USB Flash Drive",
    price: 699,
    category: "Electronics",
    description: "Compact USB flash drive for storing and transferring files.",
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18"
  },
  {
    id: 20,
    name: "Monitor",
    price: 12999,
    category: "Electronics",
    description: "Full HD monitor suitable for work, study and entertainment.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
  },
  {
    id: 21,
    name: "Office Chair",
    price: 8999,
    category: "Furniture",
    description: "Comfortable office chair designed for long working hours.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8"
  },
 {
  id: 22,
  name: "Study Table",
  price: 6999,
  category: "Furniture",
  description: "Simple study table suitable for home and office.",
  image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174"
},
 {
  id: 23,
  name: "Table Fan",
  price: 1599,
  category: "Home",
  description: "Compact table fan for personal cooling.",
  image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d"
},
  {
    id: 24,
    name: "LED Bulb",
    price: 249,
    category: "Home",
    description: "Energy-efficient LED bulb for everyday home lighting.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
  },
  {
    id: 25,
    name: "Water Bottle",
    price: 599,
    category: "Lifestyle",
    description: "Reusable water bottle suitable for college, office and travel.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  },
  {
    id: 26,
    name: "Travel Bag",
    price: 1899,
    category: "Fashion",
    description: "Spacious travel bag suitable for short trips and weekends.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
  {
    id: 27,
    name: "Wallet",
    price: 699,
    category: "Fashion",
    description: "Compact wallet with space for cards and cash.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
  },
  {
    id: 28,
    name: "Hoodie",
    price: 1499,
    category: "Fashion",
    description: "Comfortable hoodie suitable for casual everyday wear.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    id: 29,
    name: "Jeans",
    price: 1799,
    category: "Fashion",
    description: "Classic casual jeans suitable for everyday use.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d"
  },
  {
    id: 30,
    name: "Sports Cap",
    price: 499,
    category: "Fashion",
    description: "Lightweight sports cap suitable for outdoor activities.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee"
  },
  {
    id: 31,
    name: "Plant Pot",
    price: 399,
    category: "Home",
    description: "Decorative plant pot for indoor and outdoor plants.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },
  {
    id: 32,
    name: "Cushion",
    price: 599,
    category: "Home",
    description: "Soft decorative cushion for living rooms and bedrooms.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2"
  },
  {
    id: 33,
    name: "Desk Organizer",
    price: 449,
    category: "Stationery",
    description: "Useful organizer for keeping pens and stationery items arranged.",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234"
  },
 {
    id: 34,
    name: "Earbuds",
    price: 1299,
    category: "Electronics",
    description: "Compact wireless earbuds with clear sound and comfortable fit.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
  },

  {
    id: 35,
    name: "Handbag",
    price: 1599,
    category: "Fashion",
    description: "Stylish handbag suitable for everyday use and travel.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  },

  {
    id: 36,
    name: "Table Vase",
    price: 699,
    category: "Home",
    description: "Elegant decorative vase for tables, shelves and home interiors.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427"
  }
];

export default products;