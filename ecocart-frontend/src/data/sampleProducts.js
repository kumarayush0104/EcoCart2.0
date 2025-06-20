const sampleProducts = [
  {
    asin: 'B00001',
    title: 'Eco-Friendly Bamboo Toothbrush',
    description: 'A sustainable bamboo toothbrush with biodegradable bristles.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=400&q=80',
    price: '$5.99',
    shippingDistance: 1200,
    packagingType: 'Recyclable cardboard',
    category: 'Personal Care',
    co2Emissions: 0.5,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00002',
    title: 'Reusable Stainless Steel Water Bottle',
    description: 'Durable and eco-friendly water bottle to reduce plastic waste.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: '$15.99',
    shippingDistance: 800,
    packagingType: 'Minimal plastic wrap',
    category: 'Kitchen',
    co2Emissions: 1.2,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00003',
    title: 'Organic Cotton Tote Bag',
    description: 'Reusable tote bag made from 100% organic cotton.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
    price: '$9.99',
    shippingDistance: 500,
    packagingType: 'Recyclable paper',
    category: 'Accessories',
    co2Emissions: 0.3,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00004',
    title: 'Solar Powered Phone Charger',
    description: 'Portable solar charger for eco-conscious tech users.',
    image: 'https://images.unsplash.com/photo-1510557880182-3eec1e2e7f6c?auto=format&fit=crop&w=400&q=80',
    price: '$29.99',
    shippingDistance: 1500,
    packagingType: 'Recyclable cardboard',
    category: 'Electronics',
    co2Emissions: 2.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00005',
    title: 'Biodegradable Bamboo Cutlery Set',
    description: 'Eco-friendly cutlery set made from bamboo.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    price: '$12.99',
    shippingDistance: 1000,
    packagingType: 'Compostable bag',
    category: 'Kitchen',
    co2Emissions: 0.8,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00006',
    title: 'Refurbished Wireless Headphones',
    description: 'Certified refurbished wireless headphones with great sound quality.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912a0f9?auto=format&fit=crop&w=400&q=80',
    price: '$49.99',
    shippingDistance: 0,
    packagingType: 'Minimal packaging',
    category: 'Electronics',
    co2Emissions: 0.7,
    isRefurbished: true,
    isGreen: true
  },
  {
    asin: 'B00007',
    title: 'Eco-Friendly Laundry Detergent',
    description: 'Plant-based detergent that is safe for the environment.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
    price: '$19.99',
    shippingDistance: 900,
    packagingType: 'Recyclable plastic bottle',
    category: 'Household',
    co2Emissions: 1.1,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00008',
    title: 'Solar Garden Lights',
    description: 'Energy-efficient solar-powered outdoor lights.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$24.99',
    shippingDistance: 1300,
    packagingType: 'Recyclable cardboard',
    category: 'Garden',
    co2Emissions: 1.8,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00009',
    title: 'Eco-Friendly Yoga Mat',
    description: 'A sustainable yoga mat made from natural rubber and biodegradable materials.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912a0f9?auto=format&fit=crop&w=400&q=80',
    price: '$29.99',
    shippingDistance: 1000,
    packagingType: 'Recyclable cardboard',
    category: 'Fitness',
    co2Emissions: 1.2,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00010',
    title: 'Reusable Beeswax Wraps',
    description: 'A set of reusable beeswax wraps for food storage and wrapping.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
    price: '$19.99',
    shippingDistance: 800,
    packagingType: 'Minimal packaging',
    category: 'Kitchen',
    co2Emissions: 0.8,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00011',
    title: 'Solar Powered Backpack',
    description: 'A solar-powered backpack for charging your devices on the go.',
    image: 'https://images.unsplash.com/photo-1510557880182-3eec1e2e7f6c?auto=format&fit=crop&w=400&q=80',
    price: '$49.99',
    shippingDistance: 1200,
    packagingType: 'Recyclable cardboard',
    category: 'Electronics',
    co2Emissions: 2.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00012',
    title: 'Compostable Phone Case',
    description: 'A compostable phone case made from plant-based materials.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    price: '$14.99',
    shippingDistance: 600,
    packagingType: 'Compostable bag',
    category: 'Accessories',
    co2Emissions: 0.4,
    isRefurbished: false,
    isGreen: true
  },
  {
    asin: 'B00013',
    title: 'Eco-Friendly Pet Shampoo',
    description: 'Natural pet shampoo that is safe for the environment.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
    price: '$12.99',
    shippingDistance: 700,
    packagingType: 'Recyclable plastic bottle',
    category: 'Pet Care',
    co2Emissions: 0.6,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00014',
    title: 'Men\'s Running Shoes',
    description: 'Lightweight and breathable running shoes for men.',
    image: 'https://images.unsplash.com/photo-1528701800489-476f9f1a7a0a?auto=format&fit=crop&w=400&q=80',
    price: '$59.99',
    shippingDistance: 1500,
    packagingType: 'Recyclable cardboard',
    category: 'Shoes',
    co2Emissions: 2.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00015',
    title: 'Women\'s Casual Sneakers',
    description: 'Comfortable and stylish casual sneakers for women.',
    image: 'https://images.unsplash.com/photo-1519741494790-0a1a7a1a1a1a?auto=format&fit=crop&w=400&q=80',
    price: '$49.99',
    shippingDistance: 1400,
    packagingType: 'Recyclable cardboard',
    category: 'Shoes',
    co2Emissions: 1.8,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00016',
    title: 'Laptop - 15 inch, 8GB RAM',
    description: 'High performance laptop with 15 inch display and 8GB RAM.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    price: '$699.99',
    shippingDistance: 2000,
    packagingType: 'Recyclable cardboard',
    category: 'Electronics',
    co2Emissions: 5.0,
    isRefurbished: true,
    isGreen: false
  },
  {
    asin: 'B00017',
    title: 'Smartphone - 128GB Storage',
    description: 'Latest smartphone with 128GB storage and high resolution camera.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    price: '$499.99',
    shippingDistance: 1800,
    packagingType: 'Recyclable cardboard',
    category: 'Electronics',
    co2Emissions: 4.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00018',
    title: 'Wooden Dining Table',
    description: 'Solid wood dining table with seating for six.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80',
    price: '$299.99',
    shippingDistance: 2500,
    packagingType: 'Recyclable cardboard',
    category: 'Furniture',
    co2Emissions: 6.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00019',
    title: 'Cozy Wool Blanket',
    description: 'Warm and soft wool blanket for cold nights.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$79.99',
    shippingDistance: 1200,
    packagingType: 'Recyclable cardboard',
    category: 'Home',
    co2Emissions: 2.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00020',
    title: 'Travel Trolley Bag',
    description: 'Durable travel trolley bag with multiple compartments.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: '$89.99',
    shippingDistance: 1600,
    packagingType: 'Recyclable cardboard',
    category: 'Travel',
    co2Emissions: 3.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00021',
    title: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with high-quality sound.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912a0f9?auto=format&fit=crop&w=400&q=80',
    price: '$39.99',
    shippingDistance: 900,
    packagingType: 'Minimal packaging',
    category: 'Electronics',
    co2Emissions: 1.0,
    isRefurbished: true,
    isGreen: false
  },
  {
    asin: 'B00022',
    title: 'Office Chair',
    description: 'Ergonomic office chair with adjustable height.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
    price: '$129.99',
    shippingDistance: 2200,
    packagingType: 'Recyclable cardboard',
    category: 'Furniture',
    co2Emissions: 4.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00023',
    title: 'Electric Kettle',
    description: 'Fast boiling electric kettle with auto shut-off.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$29.99',
    shippingDistance: 1100,
    packagingType: 'Recyclable cardboard',
    category: 'Kitchen',
    co2Emissions: 1.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00024',
    title: 'Men\'s Leather Wallet',
    description: 'Genuine leather wallet with multiple card slots.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: '$39.99',
    shippingDistance: 900,
    packagingType: 'Recyclable cardboard',
    category: 'Accessories',
    co2Emissions: 1.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00025',
    title: 'Women\'s Handbag',
    description: 'Stylish handbag with spacious compartments.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: '$59.99',
    shippingDistance: 1300,
    packagingType: 'Recyclable cardboard',
    category: 'Accessories',
    co2Emissions: 1.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00026',
    title: 'Smartwatch',
    description: 'Feature-rich smartwatch with fitness tracking.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912a0f9?auto=format&fit=crop&w=400&q=80',
    price: '$199.99',
    shippingDistance: 1400,
    packagingType: 'Minimal packaging',
    category: 'Electronics',
    co2Emissions: 2.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00027',
    title: 'Gaming Mouse',
    description: 'High precision gaming mouse with customizable buttons.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$49.99',
    shippingDistance: 1000,
    packagingType: 'Minimal packaging',
    category: 'Electronics',
    co2Emissions: 1.2,
    isRefurbished: true,
    isGreen: false
  },
  {
    asin: 'B00028',
    title: 'LED Desk Lamp',
    description: 'Energy-saving LED desk lamp with adjustable brightness.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$29.99',
    shippingDistance: 900,
    packagingType: 'Recyclable cardboard',
    category: 'Home',
    co2Emissions: 1.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00029',
    title: 'Cotton Bed Sheets',
    description: 'Soft and breathable cotton bed sheets set.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$59.99',
    shippingDistance: 1100,
    packagingType: 'Recyclable cardboard',
    category: 'Home',
    co2Emissions: 1.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00030',
    title: 'Stainless Steel Cookware Set',
    description: 'Durable stainless steel cookware set for all your cooking needs.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$99.99',
    shippingDistance: 1300,
    packagingType: 'Recyclable cardboard',
    category: 'Kitchen',
    co2Emissions: 2.0,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00031',
    title: 'Wireless Earbuds',
    description: 'Compact wireless earbuds with excellent sound quality.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912a0f9?auto=format&fit=crop&w=400&q=80',
    price: '$79.99',
    shippingDistance: 900,
    packagingType: 'Minimal packaging',
    category: 'Electronics',
    co2Emissions: 1.0,
    isRefurbished: true,
    isGreen: false
  },
  {
    asin: 'B00032',
    title: 'Kids\' Backpack',
    description: 'Colorful and durable backpack for kids.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: '$29.99',
    shippingDistance: 800,
    packagingType: 'Recyclable cardboard',
    category: 'Accessories',
    co2Emissions: 0.8,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00033',
    title: 'Electric Toothbrush',
    description: 'Rechargeable electric toothbrush with multiple modes.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=400&q=80',
    price: '$39.99',
    shippingDistance: 1000,
    packagingType: 'Recyclable cardboard',
    category: 'Personal Care',
    co2Emissions: 1.2,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00034',
    title: 'Camping Tent',
    description: 'Lightweight camping tent for 2 people.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    price: '$149.99',
    shippingDistance: 2000,
    packagingType: 'Recyclable cardboard',
    category: 'Outdoor',
    co2Emissions: 3.5,
    isRefurbished: false,
    isGreen: false
  },
  {
    asin: 'B00035',
    title: 'Refurbished Laptop - 13 inch, 16GB RAM',
    description: 'Certified refurbished laptop with 13 inch display and 16GB RAM.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    price: '$799.99',
    shippingDistance: 1800,
    packagingType: 'Minimal packaging',
    category: 'Electronics',
    co2Emissions: 4.8,
    isRefurbished: true,
    isGreen: false
  },
];

export default sampleProducts;
