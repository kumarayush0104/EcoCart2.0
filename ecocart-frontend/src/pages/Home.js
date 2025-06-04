import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import sampleProducts from '../data/sampleProducts';

const banners = [
  {
    id: 1,
    title: 'Under ₹499 - Deals on face makeup',
    description: 'Free delivery & 20% cashback on first order*',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Smartphones Starting ₹6,499',
    description: 'No Cost EMI | Exchange Offer',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Home & Kitchen Essentials',
    description: 'Upgrade your living space',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Fashion Sale',
    description: 'Trendy styles at great prices',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Electronics Deals',
    description: 'Latest gadgets and accessories',
    image: 'https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=800&q=80',
  },
];

const Home = () => {
  const { addToCart, greenMode } = useCart();
  const navigate = useNavigate();

  const [showRefurbished, setShowRefurbished] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerIntervalRef = useRef(null);

  useEffect(() => {
    bannerIntervalRef.current = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 4000); // 4 seconds interval

    return () => {
      clearInterval(bannerIntervalRef.current);
    };
  }, []);

  const handleRefurbishedToggle = () => {
    setShowRefurbished(prev => !prev);
  };

  // Calculate half of total products count
  const halfProductCount = Math.floor(sampleProducts.length / 2);

  let productsToShow = [];

  if (greenMode) {
    // Filter green products
    let greenProducts = sampleProducts.filter(p => p.isGreen);

    // Limit green products to half of total products
    greenProducts = greenProducts.slice(0, halfProductCount);

    if (showRefurbished) {
      // Show only refurbished products among green products
      productsToShow = greenProducts.filter(p => p.isRefurbished);
    } else {
      productsToShow = greenProducts;
    }
  } else {
    productsToShow = sampleProducts.filter(p => !p.isRefurbished);
  }

  const totalCarbonNormal = sampleProducts
    .filter(p => !p.isRefurbished)
    .reduce((sum, p) => sum + p.co2Emissions, 0);
  const totalCarbonGreen = productsToShow.reduce((sum, p) => sum + p.co2Emissions, 0);
  const carbonReductionPercent = ((totalCarbonNormal - totalCarbonGreen) / totalCarbonNormal) * 100;

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Auto-scrolling banner section */}
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
        <img
          src={banners[currentBannerIndex].image}
          alt={banners[currentBannerIndex].title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">{banners[currentBannerIndex].title}</h2>
          <p className="text-lg">{banners[currentBannerIndex].description}</p>
        </div>
        <button
          onClick={() => setCurrentBannerIndex((currentBannerIndex - 1 + banners.length) % banners.length)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
          aria-label="Previous Banner"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrentBannerIndex((currentBannerIndex + 1) % banners.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
          aria-label="Next Banner"
        >
          &#8594;
        </button>
      </div>

      {/* Welcome and toggles */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Welcome to EcoCart 2.0</h1>
        <div className="flex items-center space-x-6">
          {greenMode && (
            <label htmlFor="refurbishedToggle" className="font-semibold flex items-center space-x-2 cursor-pointer text-green-700">
              <input
                type="checkbox"
                id="refurbishedToggle"
                checked={showRefurbished}
                onChange={handleRefurbishedToggle}
                className="w-5 h-5"
              />
              <span>Show Refurbished</span>
            </label>
          )}
        </div>
      </div>

      {/* Delivery info */}
      {greenMode ? (
        <p className="mb-4 text-green-700 font-semibold">
          Delivery may take up to 10 days, reducing carbon footprint by approximately {carbonReductionPercent.toFixed(0)}%.
        </p>
      ) : (
        <p className="mb-4 text-gray-700">
          Fast delivery within 2 days.
        </p>
      )}

      <p className="text-lg mb-10">Your eco-friendly shopping experience starts here.</p>

      {/* Product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {productsToShow.map(product => (
          <div key={product.asin} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative flex flex-col">
          {product.isGreen && (
            <div className="eco-badge absolute top-2 right-2 bg-green-400 text-black font-bold px-2 py-1 rounded text-xs z-10">
              Eco
            </div>
          )}
          {product.isRefurbished && (
            <div className="refurbished-badge absolute top-2 left-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded text-xs z-10">
              Refurbished
            </div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain rounded-t-lg p-4"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-md font-semibold mb-1 line-clamp-2">{product.title}</h2>
            <p className="text-green-700 font-bold mb-2">{product.price}</p>
            <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
            <div className="mt-2 text-xs text-gray-500">Carbon footprint: {product.co2Emissions} kg CO₂</div>
            {product.isGreen && (
              <div className="eco-points mt-1 text-xs text-green-600 font-semibold">
                Earn EcoPoints
              </div>
            )}
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => addToCart(product)}
                className="flex-grow bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate(`/product/${product.asin}`)}
                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
