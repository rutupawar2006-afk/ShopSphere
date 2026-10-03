const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
  {
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    description:
      "High-quality wireless headphones with clear sound and comfortable design.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    stock: 25,
  },
  {
    name: "Smart Watch",
    price: 2999,
    category: "Electronics",
    description:
      "Smart watch with fitness tracking and modern design.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    stock: 25,
  },
  {
    name: "Running Shoes",
    price: 2499,
    category: "Fashion",
    description:
      "Comfortable running shoes suitable for daily exercise and walking.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    stock: 25,
  },
  {
    name: "Backpack",
    price: 1499,
    category: "Fashion",
    description:
      "Durable backpack suitable for college, travel and everyday use.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    stock: 25,
  },
  {
    name: "Laptop",
    price: 54999,
    category: "Electronics",
    description:
      "Powerful laptop suitable for study, development and everyday work.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    stock: 25,
  },
  {
    name: "Wireless Mouse",
    price: 899,
    category: "Electronics",
    description:
      "Ergonomic wireless mouse suitable for laptops and desktop computers.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
    stock: 25,
  },
  {
    name: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    description:
      "Portable Bluetooth speaker with clear sound and compact design.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    stock: 25,
  },
  {
    name: "Digital Camera",
    price: 32999,
    category: "Electronics",
    description:
      "Digital camera for photography, travel and special moments.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    stock: 25,
  },
  {
    name: "Sunglasses",
    price: 999,
    category: "Fashion",
    description:
      "Stylish sunglasses suitable for everyday outdoor use.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    stock: 25,
  },
  {
    name: "Casual T-Shirt",
    price: 799,
    category: "Fashion",
    description:
      "Comfortable casual T-shirt suitable for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    stock: 25,
  },
  {
    name: "Travel Shoes",
    price: 2199,
    category: "Fashion",
    description:
      "Comfortable shoes designed for travel and everyday walking.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    stock: 25,
  },
  {
    name: "Desk Lamp",
    price: 1299,
    category: "Home",
    description:
      "Modern desk lamp suitable for study tables and workspaces.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    stock: 25,
  },
  {
    name: "Wall Clock",
    price: 899,
    category: "Home",
    description:
      "Simple modern wall clock for home or office.",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
    stock: 25,
  },
  {
    name: "Notebook",
    price: 299,
    category: "Stationery",
    description:
      "Premium notebook suitable for college, office and daily notes.",
    image:
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c",
    stock: 25,
  },
  {
    name: "Gaming Keyboard",
    price: 2499,
    category: "Electronics",
    description:
      "Mechanical-style gaming keyboard with comfortable keys.",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a",
    stock: 25,
  },
  {
    name: "Tablet",
    price: 18999,
    category: "Electronics",
    description:
      "Lightweight tablet suitable for study, entertainment and browsing.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    stock: 25,
  },
  {
    name: "Smartphone",
    price: 24999,
    category: "Electronics",
    description:
      "Modern smartphone with a large display and powerful performance.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    stock: 25,
  },
  {
    name: "Gaming Controller",
    price: 1999,
    category: "Electronics",
    description:
      "Comfortable wireless controller for gaming.",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08",
    stock: 25,
  },
  {
    name: "USB Flash Drive",
    price: 699,
    category: "Electronics",
    description:
      "Compact USB flash drive for storing and transferring files.",
    image:
      "https://images.unsplash.com/photo-1624823183493-ed5832f48f18",
    stock: 25,
  },
  {
    name: "Monitor",
    price: 12999,
    category: "Electronics",
    description:
      "Full HD monitor suitable for work, study and entertainment.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    stock: 25,
  },
  {
    name: "Office Chair",
    price: 8999,
    category: "Furniture",
    description:
      "Comfortable office chair designed for long working hours.",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    stock: 25,
  },
  {
    name: "Study Table",
    price: 6999,
    category: "Furniture",
    description:
      "Simple study table suitable for home and office.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    stock: 25,
  },
  {
    name: "Table Fan",
    price: 1599,
    category: "Home",
    description:
      "Compact table fan for personal cooling.",
    image:
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d",
    stock: 25,
  },
  {
    name: "LED Bulb",
    price: 249,
    category: "Home",
    description:
      "Energy-efficient LED bulb for everyday home lighting.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    stock: 25,
  },
  {
    name: "Water Bottle",
    price: 599,
    category: "Lifestyle",
    description:
      "Reusable water bottle suitable for college, office and travel.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    stock: 25,
  },
  {
    name: "Travel Bag",
    price: 1899,
    category: "Fashion",
    description:
      "Spacious travel bag suitable for short trips and weekends.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    stock: 25,
  },
  {
    name: "Wallet",
    price: 699,
    category: "Fashion",
    description:
      "Compact wallet with space for cards and cash.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
    stock: 25,
  },
  {
    name: "Hoodie",
    price: 1499,
    category: "Fashion",
    description:
      "Comfortable hoodie suitable for casual everyday wear.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    stock: 25,
  },
  {
    name: "Jeans",
    price: 1799,
    category: "Fashion",
    description:
      "Classic casual jeans suitable for everyday use.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
    stock: 25,
  },
  {
    name: "Sports Cap",
    price: 499,
    category: "Fashion",
    description:
      "Lightweight sports cap suitable for outdoor activities.",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    stock: 25,
  },
  {
    name: "Plant Pot",
    price: 399,
    category: "Home",
    description:
      "Decorative plant pot for indoor and outdoor plants.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    stock: 25,
  },
  {
    name: "Cushion",
    price: 599,
    category: "Home",
    description:
      "Soft decorative cushion for living rooms and bedrooms.",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2",
    stock: 25,
  },
  {
    name: "Desk Organizer",
    price: 449,
    category: "Stationery",
    description:
      "Useful organizer for keeping pens and stationery items arranged.",
    image:
      "https://images.unsplash.com/photo-1586282391129-76a6df230234",
    stock: 25,
  },
  {
    name: "Earbuds",
    price: 1299,
    category: "Electronics",
    description:
      "Compact wireless earbuds with clear sound and comfortable fit.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    stock: 25,
  },
  {
    name: "Handbag",
    price: 1599,
    category: "Fashion",
    description:
      "Stylish handbag suitable for everyday use and travel.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    stock: 25,
  },
  {
    name: "Table Vase",
    price: 699,
    category: "Home",
    description:
      "Elegant decorative vase for tables, shelves and home interiors.",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427",
    stock: 25,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully!");

    // Remove existing products
    await Product.deleteMany();

    console.log("Old products removed.");

    // Insert all 36 products
    await Product.insertMany(products);

    console.log(`${products.length} products added successfully!`);

    await mongoose.connection.close();

    console.log("MongoDB connection closed.");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error.message);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedProducts();