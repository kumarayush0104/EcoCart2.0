import React from 'react';
import { useParams } from 'react-router-dom';
import sampleProducts from '../data/sampleProducts';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = sampleProducts.find(p => p.asin === productId);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 object-contain mb-4 md:mb-0 rounded" />
        <div className="md:ml-6 flex flex-col justify-between">
          {product.isGreen && (
            <div className="eco-badge bg-green-400 text-black font-bold px-3 py-1 rounded inline-block mb-2 text-sm">
              Eco Product
            </div>
          )}
          {product.isRefurbished && (
            <div className="refurbished-badge bg-yellow-400 text-black font-bold px-3 py-1 rounded inline-block mb-2 text-sm">
              Refurbished Product
            </div>
          )}
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
          <p className="text-xl text-green-700 font-bold mb-4">{product.price}</p>
          <p className="mb-4">{product.description}</p>
          <div className="bg-green-100 p-4 rounded mb-4">
            <h2 className="text-lg font-semibold mb-2">Carbon Footprint</h2>
            <p>CO2 Emissions: {product.co2Emissions} kg</p>
            <p>Shipping Distance: {product.shippingDistance} km</p>
            <p>Packaging Type: {product.packagingType}</p>
          </div>
          {product.isGreen && (
            <div className="eco-points text-green-600 font-semibold mb-4">
              Earn EcoPoints
            </div>
          )}
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
